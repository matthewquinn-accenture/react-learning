const { createElement } = React
const { render } = ReactDOM

const style = {
    backgroundColor: 'purple',
    color: 'white'
}

const title = createElement(
    'h1',
    {id: 'title', className: 'header', style},
    'Hello World'
)

render(
    title,
    document.getElementById('react-container')
)