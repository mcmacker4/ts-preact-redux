import { State } from "../state";
import { Action } from "redux";
import { ActionType } from "../actions";
import { IncrementAction } from "../actions/increment";


export function state(old: State = { count: 0 }, action: Action = null) : State {
    if (action) {
        if (action.type == ActionType.INCREMENT) {
            return {
                ...old,
                count: old.count + (action as IncrementAction).amount
            }
        }
    }
    return old;
}