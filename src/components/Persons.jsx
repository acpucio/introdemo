import Name from "./Name"
import axios from 'axios'

const Persons = ({ persons }) => {

  const deleteMe = id => {
    console.log(`delete me.  I'm ${id} `)

    const personToFilter = persons.filter(person => person.id === id)
  
    console.log("filtered name is", personToFilter[0].name)

    if(window.confirm(`Do you really want to delete ${personToFilter[0].name} ?`))
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then(window.location.reload())
  }

  return (
    <>
      {persons.map(person =>
        <Name 
          key={person.id} 
          name={person.name} 
          number={person.number} 
          deleteMe = {() => deleteMe(person.id)}
        />
      )}
    </>
  )
}

export default Persons