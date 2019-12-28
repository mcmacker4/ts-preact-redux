import { h, render } from 'preact'

function Application({ name }) {
    return (
        <h1>Hello {name}!</h1>
    )
}

render(<Application name="World" />, document.body);