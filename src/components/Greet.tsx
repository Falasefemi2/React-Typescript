type propName = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

const Greet = ({ name, messageCount, isLoggedIn }: propName) => {
    return (
        <div>
            <h2>
                {isLoggedIn ? `Welcome ${name}! you have ${messageCount} unread messages` : 'welcome guests'}
            </h2>

        </div>
    )
}

export default Greet