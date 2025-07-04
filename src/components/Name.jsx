const Name = ({ name, number, deleteMe }) => {
  console.log("The name is", name)
  const label = 'Delete'
  
  return (
    <li>{name}   {number}
        <button onClick={deleteMe}>{label}</button>
    </li>
  )
}

export default Name