import {
  type FC,
  type DetailedHTMLProps,
  type HTMLAttributes,
  type PropsWithChildren
} from 'react'
import type {WidthHeight} from './WidHeight'
import type {LeftRightTopBottom} from './LeftRightTopBottom'
import type {MinMaxWidthHeight} from './MinMaxWidthHeight'
export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type DivProps = ReactDivProps &
  PropsWithChildren<WidthHeight> &
  LeftRightTopBottom &
  MinMaxWidthHeight & {
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
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
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
    bottom,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight
  }
  const className = ['bg-cover', 'box-border', src && 'bg-gray400', _className].join(' ')
  return <div {...props} className={className} style={style} />
}
