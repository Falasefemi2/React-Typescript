import Greet from "./components/Greet"
import Heading from "./components/Heading"
import Oscar from "./components/Oscar"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"

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
    </div>
  )
}
 
export default App