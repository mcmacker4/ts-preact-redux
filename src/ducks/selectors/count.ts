import { State } from "../state";
import { createSelector } from 'reselect'

export const selectCount = (state: State) => state.count 