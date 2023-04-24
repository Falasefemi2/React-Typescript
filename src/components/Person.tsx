type PropsName = {
    name: {
        first: string,
        last: string
    }
}

const Person = ({ name }: PropsName) => {
    return (
        <div>{name.first} {name.last}</div>
    )
}

export default Person