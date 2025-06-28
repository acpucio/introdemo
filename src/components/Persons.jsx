import Name from "./Name"

const Persons = ({ persons }) => {

  return (
    <>
      {persons.map(person =>
        <Name key={person.id} name={person.name} number={person.number} />)
      }
    </>

  )

}

export default Persons