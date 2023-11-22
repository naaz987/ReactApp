import { count } from "console";
import React, { useState } from "react"

interface IState { 
    count:number
}
interface IProps { }

const Counter: React.FC = () => {
    const [state, setState] = useState<IState>({count:0})
    const handleIncremet = () =>{
        setState({count : state.count+1})
    }

    const handleDecremet = () =>{
        setState({count : state.count-1})
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="display-3">{state.count}</h2>
                                <button className="btn btn-success ms-3" onClick={handleIncremet}>
                                    INC
                                </button>
                                <button className="btn btn-success ms-3" onClick={handleDecremet}>
                                    DECR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Counter