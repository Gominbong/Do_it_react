import {on} from 'events'
import type {DragEvent} from 'react'

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    console.log('onDragStart', e.dataTransfer)
  }
  const onDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log('onDragEnd', e.dataTransfer)
  }
  const onDragOver = (e: DragEvent) => e.preventDefault()
  const onDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer)
  }
  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <h1>Drag Me</h1>
      </div>
      <div onDrop={onDrop} onDragOver={onDragOver}></div>
      <h1>Drop over Me</h1>
    </div>
  )
}
