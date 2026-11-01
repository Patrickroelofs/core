import { valueToEstree } from 'estree-util-value-to-estree'
import type { Heading, Root } from 'mdast'
import { toString as textOf } from 'mdast-util-to-string'
import { visit } from 'unist-util-visit'

export type TocHeading = { id: string; text: string; n: number }

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')

export function remarkHeadings() {
  return (tree: Root) => {
    const headings: TocHeading[] = []
    visit(tree, 'heading', (node: Heading) => {
      if (node.depth !== 2) return
      const text = textOf(node)
      const heading = { id: slugify(text), text, n: headings.length + 1 }
      headings.push(heading)
      node.data = { ...node.data, hProperties: { id: heading.id, 'data-n': heading.n } }
    })
    tree.children.unshift({
      type: 'mdxjsEsm',
      value: '',
      data: {
        estree: {
          type: 'Program',
          sourceType: 'module',
          body: [
            {
              type: 'ExportNamedDeclaration',
              specifiers: [],
              attributes: [],
              declaration: {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: [
                  {
                    type: 'VariableDeclarator',
                    id: { type: 'Identifier', name: 'headings' },
                    init: valueToEstree(headings),
                  },
                ],
              },
            },
          ],
        },
      },
    } as unknown as Root['children'][number])
  }
}
