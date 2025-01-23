import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createSelector} from 'reselect'
import type {AppState} from './AppState'
import type {Card, UUID} from './commonTypes'
import * as C from '../store/cardEntities'
import * as LC from '../store/listidCardidOrders'
import * as D from '../data'

const makeSelectCards = () =>
  createSelector(
    (state: AppState) => state.cardEntities,
    (state: AppState) => state.listidCardidOrders,
    (state: AppState, listid: UUID) => listid,
    (cardEntities, listidCardidOrders, listid) =>
      listidCardidOrders[listid]?.map(uuid => cardEntities[uuid]) ?? []
  )

export const useCards = (listid: UUID) => {
  const dispatch = useDispatch()
  const selectCards = makeSelectCards()
  const cards = useSelector<AppState, Card[]>(state => selectCards(state, listid))

  const onPrependCard = useCallback(() => {
    const card = D.makeRandomCard()
    dispatch(C.addCard(card))
    dispatch(LC.prependCardidToListid({listid, cardid: card.uuid}))
  }, [dispatch, listid])

  const onAppendCard = useCallback(() => {
    const card = D.makeRandomCard()
    dispatch(C.addCard(card))
    dispatch(LC.appendCardidToListid({listid, cardid: card.uuid}))
  }, [dispatch, listid])

  const onRemoveCard = useCallback(
    (uuid: UUID) => () => {
      dispatch(C.removeCard(uuid))
      dispatch(LC.removeCardidFormListid({listid, cardid: uuid}))
    },
    [dispatch, listid]
  )

  return {cards, onPrependCard, onAppendCard, onRemoveCard}
}
