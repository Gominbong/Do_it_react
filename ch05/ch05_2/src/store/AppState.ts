import * as Clock from './clock'
import * as Counter from './counter'
import * as R from './remoteUser'
import * as Card from './cards'

export type AppState = {
  clock: Clock.State
  counter: Counter.State
  remoteUser: R.State
  cards: Card.State
}
