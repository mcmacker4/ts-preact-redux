import { render, h } from 'preact'
import { useCallback } from 'preact/hooks'
import { Provider } from 'react-redux'
import {useAppDispatch, useAppSelector} from './state/hooks'
import { increment } from './state/slice/counter'

import { store } from './state/store'

import './style.css'


function Counter() {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    const incrementCallback = useCallback(() => {
        dispatch(increment())
    }, [count])

    return (
        <div class="content">
            <span>Count: {count}</span>
            <a class="button" onClick={incrementCallback}>One More!</a>
        </div>
    )
}


function Application() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

render(<Application />, document.body)
