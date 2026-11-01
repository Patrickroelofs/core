import { Title, type TitleProps } from '@/components/ui/title/title'

type EmphasizedTitleProps = Pick<TitleProps, 'as' | 'size'> & { title: string; emphasis?: string }

/** Title with one part in black weight: `emphasis` if given, else the last word. */
export function EmphasizedTitle({
  as,
  size,
  title,
  emphasis = title.split(' ').at(-1) ?? title,
}: EmphasizedTitleProps) {
  const at = title.lastIndexOf(emphasis)
  if (at < 0)
    return (
      <Title as={as} size={size}>
        {title}
      </Title>
    )
  return (
    <Title as={as} size={size}>
      {title.slice(0, at)}
      <Title as="span" size={size} weight="black">
        {emphasis}
      </Title>
      {title.slice(at + emphasis.length)}
    </Title>
  )
}
