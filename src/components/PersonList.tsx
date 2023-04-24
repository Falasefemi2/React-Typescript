type PropsList = {
    names: {
        first: string,
        last: string
    }[]
}

const PersonList = ({ names }: PropsList) => {
    return (
        <div>
            {names.map((name) => (
                <h2 key={name.first}>{name.first} {name.last}</h2>
            ))}
        </div>
    )
}

export default PersonList