import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'
import logger from './logger'
import {thunk} from 'redux-thunk'
import {get} from 'http'

const useLogger = process.env.NODE_ENV !== 'production' // 개발모드이면 true

const initializeStore = () => {
  const middleware: any[] = []
  if (useLogger) {
    middleware.push(logger)
  }
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware)
  })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
