import { useState } from 'react'

const Display = (props) => {
  
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {

  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const total = good + bad + neutral
  const score = good - bad

  return (
    <div>
      <p>good     {good}</p>
      <p>neutral  {neutral}</p>
      <p>bad      {bad}</p>
      <p>all      {total}</p>
      <p>average  {score/total}</p>
      <p>positive {good/total * 100}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log(good)
    setGood(good + 1)  
  }

  const handleNeutral = () => {
    console.log("neutral count:", neutral)
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Display text="give feedback" />
      <Button text="good" onClick={handleGood}/>
      <Button text="neutral" onClick={handleNeutral} />
      <Button text="bad" onClick={handleBad}/>
      <Display text="statistics" />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App