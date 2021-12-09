import { render, h } from 'preact'
import { useState, useCallback } from 'preact/hooks'

import './style.css'

function Application() {
    const [count, setCount] = useState(0)

    debugger;

    const plusOne = useCallback(() => {
        setCount(count + 1)
    }, [count])

    return (
        <div class="content">
            <span>Count: {count}</span>
            <a class="button" onClick={plusOne}>One More!</a>
        </div>
    )
}

render(<Application />, document.body)
