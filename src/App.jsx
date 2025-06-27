import { useState } from 'react'
import Name from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '867-5309',
      id: "1"
    }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
      return 
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

    console.log('name added', event.target)
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }



  return (
    <div>
      <h2>
        Phonebook
      </h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
          number:
          <input
            value= {newNumber}
            onChange= {handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Name key={person.id} name={person.name} number={person.number} />)}
      </ul>
    </div>
  )
}

export default App

