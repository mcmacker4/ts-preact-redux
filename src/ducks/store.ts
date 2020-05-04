import { createStore } from 'redux'
import { state } from './reducers'


export const store = createStore(state)