import React, { useState } from "react"

interface IState{
    message:string;
}

const Youtube : React.FC = () =>{
    const [state, setState] = useState<IState>({message:'Welcome'});

    const handleLike = (greet : string) => {
        setState({message : greet});
    }

    const handleComment = (greet : string) => {
        setState({message : greet});
    }

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h6 className="display-3">{state.message}</h6>
                                <button className="btn btn-success ms-3" onClick={()=>handleLike("Like")}>
                                    Like
                                </button>
                                <button className="btn btn-success ms-3" onClick={()=> handleComment("Comment")}>
                                    Comment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Youtube