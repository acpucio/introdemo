const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )

}

const Content = ({ parts }) => {

  return (
    <>
      {parts.map(part =>
        <Part key={part.id} part={part.name} exercise={part.exercises} />
      )}
    </>
  )
}

const Part = (props) => {

  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = ({ parts }) => {

  console.log("parts:", parts)

  const total = parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <>
      <b>
        Total of {total} exercises
      </b>
    </>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course

