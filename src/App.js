import './App.css';
import {useState} from "react";
import Login from "./components/Login";
import Memos from "./components/Memos";

// All 'Functional React Components' are render functions
// This function is called every time we want to render our
//    application
// Each FRC must return a single tag/element

// App handles the state, and state modification

// 1. Allow a user to create, edit, and delete memos
// 2. Each memo shall have:
//      a. title
//      b. date that it was created
//      c. description (the actual memo)
//      d. complete/ not-complete
// 3. Authenticate the user (one user only)
export function App({loggedInInit = false, _Login = Login, _Memos = Memos}) {
    // Destructing
    // const  obj = {
    //     key1: "val1",
    //     key2: "val2",
    //     key3: "val3",
    // }

    // line A
    // const {key1} = obj

    // useState returns an array with 2 elements
    // The first element is the current value
    // The second element is a function that we can call
    //    to update the value
    const [memos, setMemos] = useState([
        {id: 0, title: "Title 1", date: new Date(), description: "Desc 1", complete: false},
        {id: 1, title: "Title 2", date: new Date(), description: "Desc 2", complete: true},
        {id: 2, title: "Title 3", date: new Date(), description: "Desc 3", complete: true}
    ])
    const [isLoggedIn, setIsLoggedIn] = useState(loggedInInit)

    // In order to delete, we need to remove a specific
    // an element from our memos state
    // we need to rerender

    // Take some identifier and use that ID to delete the memo
    function deleteMemo(memoID){
        const newMemos = memos.filter(memo => memo.id !== memoID)
        setMemos(newMemos)
    }

    function handleLogin(credentials) {
        if (credentials.username === 'leng' &&
            credentials.password === 'pass')
            setIsLoggedIn(true)
    }

    if (isLoggedIn)
        return <_Memos memos={memos} onDelete={deleteMemo}/>
    else
        return <_Login onLogin={handleLogin}/>
}

export default App;
