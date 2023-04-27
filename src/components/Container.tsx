type containerProps = {
    styles: React.CSSProperties
}

const Container = ({styles}: containerProps) => {
  return (
    <div style={styles}>Text content goes here</div>
  )
}

export default Container