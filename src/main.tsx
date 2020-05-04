import { h, render } from 'preact'
import { useCallback } from 'preact/hooks'
import { useSelector, useDispatch, Provider } from 'react-redux';
import { store } from './ducks/store'
import { selectCount } from './ducks/selectors'
import { increment } from './ducks/actions'

function Counter() {
    const value = useSelector(selectCount)
    const dispatch = useDispatch()
    const incrementCounter = useCallback(
        () => dispatch(increment()),
        [dispatch]
    )

    return (
        <div>
            <p>{value}</p>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}

function Application({ name }) {
    return (
        <Provider store={store}>
            <div>
                <h1>Hello {name}!</h1>
                <Counter />
            </div>
        </Provider>
    )
}

render(<Application name="World" />, document.body);