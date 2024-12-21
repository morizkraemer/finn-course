import './App.css'

function Hello(props) {
    return (
        <h1>Hello, {props.name}, you are {props.age}!</h1>
    )
}

function App() {
    const now = new Date()
    const a = 1
    const b = 2
    console.log('hello from the component')
    return (
        <>
            <div>
                <p>Hello, World it is {now.toString()}!</p>
                <p>{a} plus {b} is {a + b}</p>
            </div>
            <Hello name='Daisy' age='25'/>
            <Hello name='George' age={a+b}/>
        </>
    )

}

export default App
