import {Title, Div} from '../components'
export default function HeightTest() {
  return (
    <section className="mt-4">
      <Title>HeightTest</Title>
      <div className="h-40 mt-4 text-center bg-blue-500">
        <Div className="bg-blue-500 h-1/2"></Div>
        <p className="text-center text-red-50">h-1/2</p>
      </div>
      <Div className='bg-red-500 h-1/2"'>
        <p className="text-center text-red-50">h-1/2</p>
      </Div>
    </section>
  )
}
