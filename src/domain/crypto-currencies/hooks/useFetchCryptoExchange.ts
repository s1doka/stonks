import React from 'react'

import { CryptoCurrencyExchange } from '../support/types'
import { getCryptoExchanges } from '../services'
import { HookFunction } from '../../../support/types'

type State =
  | { status: 'IDLE'; exchanges: CryptoCurrencyExchange[] }
  | { status: 'LOADING'; exchanges: CryptoCurrencyExchange[] }
  | { status: 'ERROR'; error: string; exchanges: CryptoCurrencyExchange[] }
  | { status: 'SUCCESS'; exchanges: CryptoCurrencyExchange[] }

type Action =
  | { type: 'FETCH_EXCHANGES' }
  | { type: 'SUCCESS_FETCH_EXCHANGES'; payload: CryptoCurrencyExchange[] }
  | { type: 'ERROR_FETCH_EXCHANGES'; error: string }

let initialState: State = {
  status: 'IDLE',
  exchanges: []
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_EXCHANGES':
      return { ...state, status: 'LOADING' }
    case 'SUCCESS_FETCH_EXCHANGES':
      return { status: 'SUCCESS', exchanges: action.payload }
    case 'ERROR_FETCH_EXCHANGES':
      return { ...state, status: 'ERROR', error: action.error }
    default:
      return state
  }
}

export function useFetchCryptoExchange(
  limit?: number
): {
  state: State
  getExchanges: HookFunction
} {
  let [state, dispatch] = React.useReducer(reducer, initialState)

  async function getExchanges() {
    try {
      dispatch({ type: 'FETCH_EXCHANGES' })

      let data = await getCryptoExchanges()

      dispatch({
        type: 'SUCCESS_FETCH_EXCHANGES',
        payload: limit ? data.slice(0, limit) : data
      })
    } catch (error) {
      dispatch({ type: 'ERROR_FETCH_EXCHANGES', error: 'Sorry about that!' })
    }
  }

  return { state, getExchanges }
}
