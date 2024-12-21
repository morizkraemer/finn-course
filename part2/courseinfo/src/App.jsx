import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const App = () => {
  const data = {
        course: 'Half Stack application development',
        part1: 'Fundamentals of React',
        exercises1: 10,
        part2: 'Using props to pass data',
        exercises2: 7,
        part3: 'State of a component',
        exercises3: 14
    }  

  return (
    <div>
          <Header data={data}/>
          <Content data={data}/>
          <Total data={data} />
    </div>
  )
}

export default App
