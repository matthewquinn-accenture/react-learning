const { render } = ReactDOM

render(
    <h1 id='title'
        className='header'
        style={{backgroundColor: 'purple', color: 'white'}}>
    Hello World!
    </h1>, document.getElementById('react-container')
)