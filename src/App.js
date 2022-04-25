import './App.css';
import {useState} from "react";
import Login from "./components/Login";
import Counter from "./components/Counter";

// All 'Functional React Components' are render functions
// This function is called every time we want to render our
//    application
// Each FRC must return a single tag/element
export function App({loggedInInit = false, _Login = Login, _Counter = Counter}) {
    // Destructing
    const  obj = {
        key1: "val1",
        key2: "val2",
        key3: "val3",
    }

    // line A
    // const {key1} = obj

    // useState returns an array with 2 elements
    // The first element is the current value
    // The second element is a function that we can call
    //    to update the value
    const [count, setCount] = useState(0)
    const [isLoggedIn, setIsLoggedIn] = useState(loggedInInit)

    function handleClick() {
        setCount(count + 1)
    }

    function handleLogin(credentials) {
        if (credentials.username === 'leng' &&
            credentials.password === 'pass')
            setIsLoggedIn(true)
    }

    if (isLoggedIn)
        return <_Counter number={count} onIncrement={handleClick}/>
    else
        return <_Login onLogin={handleLogin}/>
}

export default App;
