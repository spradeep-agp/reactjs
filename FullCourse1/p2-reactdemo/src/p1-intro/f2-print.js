const handleNameChange = () => {
    const names = ["React", "RIT", "SPA"];
    const num = Math.floor(Math.random() * 3);
    return names[num];
}

const F2GreetMe = () => {
    return <h1>Welcome to {handleNameChange()} !!!</h1>
}

export default F2GreetMe;