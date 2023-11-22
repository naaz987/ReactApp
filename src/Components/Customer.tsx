import React, { useState } from 'react'

interface IState{
    names:string
}
interface IProps{
    name:string
}

const Customer : React.FC<IProps> = ({name}) => {
    const [state,setState] = useState<IState>({names:'Abbu'})
    
    return (
        <div>
            <h1>Welcome to Functional Component</h1>
            <h3>Customer Name : {name}</h3>
            <h2>State Name : {state.names}</h2>
        </div>
    )
}

export default Customer