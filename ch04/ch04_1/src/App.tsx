import Clock from './pages/Clock'
import {useEffect, useState} from 'react'
import {useClock} from './hooks'

export default function App() {
  const today = useClock()
  return <Clock today={today} />
}
