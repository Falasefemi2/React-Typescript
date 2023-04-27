import Button from "./components/Button"
import Container from "./components/Container"
import Greet from "./components/Greet"
import Heading from "./components/Heading"
import Input from "./components/Input"
import Oscar from "./components/Oscar"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
import Counter from "./components/state/Counter"
import LoggedIn from "./components/state/LoggedIn"
import User from "./components/state/User"
// import { ThemeContextProvider } from "./components/context/ThemeContext"
// import Box from "./components/context/Box"

const App = () => {
  const personName = {
    first: 'Falase',
    last: 'Femi'
  }

  const nameList = [
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]


  return (
    <div>
      <Greet name="femi" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Loading Heading</Heading>
      <Oscar>
        <Heading>Oscar goes to femi</Heading>
      </Oscar>
      <Greet name="Sam" isLoggedIn={false} />
      <Button handleClick={(e, id) => {
        console.log("Button Clicked", e, id);

      }} />
      <Input value="" handleChange={(e) => {console.log(e);
      }} />
      <Container styles={{border: '1px solid black', padding: '1rem'}} />
      <LoggedIn />
      <User />
      <Counter />
    </div>
  )
}

export default App