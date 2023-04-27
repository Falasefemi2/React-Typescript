type inputProps = {
    value: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, handleChange }: inputProps) => {
    const handleInputChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
    }
    return (
        <input type="text" value={value} onChange={handleInputChnage} />
    )
}

export default Input