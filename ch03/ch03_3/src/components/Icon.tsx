import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'

type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

export type IConProps = ReactSpanProps & {
  name: string
}

export const Icon: FC<IConProps> = ({name, className: _className, ...props}) => {
  const className = ['material-icons', _className].join(' ')
  console.log('Icon', className)
  console.log('Icon', props)
  return (
    <span {...props} className={className}>
      {name}
    </span>
  )
}
