import type {SyntheticEvent} from 'react'

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log('click event bubbles on <div>', isTrusted, target, bubbles, currentTarget)
  }
  const onButtonClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles} = e
    console.log('click event start at <button>', isTrusted, target, bubbles)
  }
  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  )
}
