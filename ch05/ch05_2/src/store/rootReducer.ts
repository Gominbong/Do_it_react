import {combineReducers} from 'redux'
import * as Clock from './clock'
import * as Counter from './counter'
import * as R from './remoteUser'
import * as Card from './cards'
export const rootReducer = combineReducers({
  clock: Clock.reducer,
  counter: Counter.reducer,
  remoteUser: R.reducer,
  cards: Card.reducer
})
