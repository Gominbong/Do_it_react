import {
  type FC,
  type DetailedHTMLProps,
  type HTMLAttributes,
  type PropsWithChildren
} from 'react'
import type {WidthHeight} from './WidHeight'
import type {LeftRightTopBottom} from './LeftRightTopBottom'
export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom & {
    src?: string
  }

export const Div: FC<DivProps> = ({
  width,
  height,
  style: _style,
  src,
  className: _className,
  left,
  right,
  top,
  bottom,
  ...props
}) => {
  const style = {
    ..._style,
    width,
    height,
    backgroundImage: src && `url(${src})`,
    left,
    right,
    top,
    bottom
  }
  const className = ['bg-cover', 'box-border', src && 'bg-gray-300', _className].join(' ')
  return <div {...props} className={className} style={style} />
}
