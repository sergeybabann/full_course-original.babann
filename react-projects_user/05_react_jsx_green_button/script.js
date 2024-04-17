const App = () => {
    console.log('Called')
    let [buttonText, setButtonText] = React.useState('Click me')
    
    const onButtonClick = () => {
        setButtonText = ('Hello from React')  
    }

    return (
        <div className="app">
            <button onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App />)
