import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'ride') {
        return { money: state.money + 100 };
    }
    
    if (action.type === "fuel") {
        return {money: state.money - 50};
    }

    return new Error();
}


export default function Wallet() {
    const initialState = { money:100 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="Wallet">
            <h1> Wallet: {state.money} </h1>
            <div>
                <button onClick={() => dispatch({type: "ride"})}> New Customer!</button>
                <button onClick={() => dispatch({type: "fuel"})}> Refill the Tank!</button>
            </div>
        </div>

    )

}