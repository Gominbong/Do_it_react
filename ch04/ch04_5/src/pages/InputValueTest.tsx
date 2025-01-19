import {useState, useRef, useCallback, useEffect} from 'react'
import {Title} from '../components'
import {Button} from '../theme/daisyui'

export default function InputValueTest() {
  const inputRef = useRef<HTMLInputElement>(null)
  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`), [])

  useEffect(() => inputRef.current?.focus(), [])
  const [count, setCount] = useState(0)
  console.log('asd')
  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>InputValueTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/3 p-2">
          <input onChange={()=>{
            setCount(count+1)
          }} ref={inputRef} className="input input-primary" />
          <Button onClick={getValue} className="mt-4 btn-primary">
            GET VALUE
          </Button>
        </div>
      </div>
    </section>
  )
}
