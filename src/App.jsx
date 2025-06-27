import { useState } from 'react'
import Name from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      id: 1
    }
  ])

  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
      return 
    }

    const nameObject = {
      name: newName,
      id: String(persons.length + 1)
    }

    console.log('name added', event.target)
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }



  return (
    <div>
      <h2>
        Phonebook
      </h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Name name={person.name} key={person.id} />)}
      </ul>
    </div>
  )
}

export default App

