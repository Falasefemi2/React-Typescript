type OscarProp ={
  children: React.ReactNode
}

const Oscar = ({children}: OscarProp) => {
  return (
    <div>{children}</div>
  )
}

export default Oscar