const Name = ({ name, number }) => {
  console.log("The name is", name)
  return <li>{name}   {number}</li>
}

export default Name