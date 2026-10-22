import { cx } from 'class-variance-authority'

export function Rail({ tone }: { tone: 'coral' | 'navy' | 'azure' }) {
  const bg = { coral: 'bg-coral', navy: 'bg-navy', azure: 'bg-azure' }[tone]
  return (
    <div className="mt-fluid-4xl flex items-center gap-3" aria-hidden="true">
      <span className={cx('h-2.5 w-16 flex-none rounded-pill', bg)} />
      <span className="h-px flex-1 bg-border-default" />
    </div>
  )
}
