#!/usr/bin/env node
// Generates an original self-playing 3-lane runner clip (9:16) for record.mjs --sidecar. Output: /tmp/core-pr-sidecar.mp4
// Usage: node make-sidecar.mjs [seconds=12]
import { spawnSync } from 'node:child_process'
import { mkdtemp, readdir } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'

const seconds = Number(process.argv[2] ?? 12)
const W = 405
const H = 720
const output = '/tmp/core-pr-sidecar.mp4'

const html = `<body style="margin:0;background:#1b1f3b"><canvas id=c width=${W} height=${H}></canvas><script>
const c=document.getElementById('c').getContext('2d'),W=${W},H=${H},lane=i=>W/2+(i-1)*105
let t=0,lanePos=1,target=1,coins=0,obs=[],seed=7
const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647
const spawn=()=>obs.push({l:Math.floor(rnd()*3),y:-60,coin:rnd()<.5})
setInterval(spawn,420)
function frame(){t++
 // ponytail: dodge by looking ahead at the nearest obstacle in our lane, good enough for a loop
 const near=obs.filter(o=>!o.coin&&o.y>H-340&&o.y<H-120&&o.l===target)[0]
 if(near){const free=[0,1,2].filter(l=>!obs.some(o=>!o.coin&&o.l===l&&o.y>H-340&&o.y<H-80));target=free.length?free[Math.floor(rnd()*free.length)]:target}
 lanePos+=(target-lanePos)*.2
 c.fillStyle='#1b1f3b';c.fillRect(0,0,W,H)
 c.fillStyle='#2e3566';c.fillRect(W/2-170,0,340,H)
 c.strokeStyle='#8890d8';c.lineWidth=3
 for(let i=-1;i<=1;i+=2)for(let y=-(t*10%80);y<H;y+=80){c.beginPath();c.moveTo(W/2+i*52,y);c.lineTo(W/2+i*52,y+40);c.stroke()}
 for(const o of obs){o.y+=10
  if(o.coin){c.fillStyle='#ffd23f';c.beginPath();c.arc(lane(o.l),o.y,14,0,7);c.fill();if(Math.abs(o.y-(H-140))<20&&Math.abs(lane(o.l)-lane(lanePos))<40){o.y=H+99;coins++}}
  else{c.fillStyle='#e4572e';c.fillRect(lane(o.l)-35,o.y-30,70,60)}}
 obs=obs.filter(o=>o.y<H+50)
 const bob=Math.sin(t/3)*4,px=lane(lanePos)
 c.fillStyle='#2ec4b6';c.fillRect(px-18,H-190+bob,36,60)
 c.fillStyle='#ffe0bd';c.beginPath();c.arc(px,H-205+bob,16,0,7);c.fill()
 c.fillStyle='#fff';c.font='bold 28px sans-serif';c.fillText('● '+coins,20,44)
 requestAnimationFrame(frame)}
frame()</script>`

const { chromium } = await import('@playwright/test')
const dir = await mkdtemp(path.join(tmpdir(), 'core-pr-sidecar-'))
const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: { width: W, height: H },
  recordVideo: { dir, size: { width: W, height: H } },
})
const page = await context.newPage()
await page.setContent(html)
await page.waitForTimeout(seconds * 1000)
await context.close()
await browser.close()

const webm = path.join(
  dir,
  (await readdir(dir)).find((f) => f.endsWith('.webm')),
)
const ff = spawnSync(
  'ffmpeg',
  ['-y', '-ss', '1', '-i', webm, '-an', '-c:v', 'libx264', '-crf', '28', '-pix_fmt', 'yuv420p', output],
  { encoding: 'utf8' },
)
if (ff.status !== 0) throw new Error(`ffmpeg failed: ${ff.stderr}`)
console.log(output)
