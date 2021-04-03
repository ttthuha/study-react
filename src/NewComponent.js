function newCom(props) {
    const { name, age, gender, func } = props;
    //const func = () => { console.log('call me') } 
    
    return (
        <div>
            name: {name}, age: {age}, gender: {gender}
            <button onClick={func}> Click</button>
            <button onClick = {() => { console.log('call me 2')}}> Click 2</button>
        </div>
    )
}

export default newCom;