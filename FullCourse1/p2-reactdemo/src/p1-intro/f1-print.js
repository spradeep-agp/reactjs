function F1PrintMe(){
    const name = "MyReactApp";

    return(
        <div>
            <p>name</p>
            <p>{name}</p>
            <p>{"name"}</p>
            <p>{"Welcome "+name}</p>
            <p>{[1,3,5]}</p>
            {/* <p>{{roll:101,name:'raj'}}</p> */}
        </div>
    )
}

export default F1PrintMe;