import { Action } from "redux";
import { ActionType } from ".";

export interface IncrementAction extends Action {
    amount: number
}

export function increment(amount: number = 1) : IncrementAction {
    return {
        type: ActionType.INCREMENT,
        amount
    }
}