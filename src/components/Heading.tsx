type childrenProps = {
  children: string
}

const Heading = ({ children }: childrenProps) => {
  return (
    <div>
      <h2>{children} </h2>
    </div>
  )
}

export default Heading