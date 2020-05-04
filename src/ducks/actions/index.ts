
export enum ActionType {
    INCREMENT
}

export interface Action {
    type: ActionType
}

export * from './increment'