type buttonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = ({ handleClick }: buttonProps) => {
  return (
    <button onClick={(e) => handleClick(e, 1)}>Click</button>
  )
}

export default Button