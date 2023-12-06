import { useState, useEffect } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/Api_link"

import './counter.css'

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(BASE_URL).then(({ data }) => setUsers(data.data))
    }, [count])
    // Хуки (hooks) - use setCount(count + 1)
    // useEffect

    // const divStyles = { 
    //     backgroundColor: 'green', 
    //     color: 'white' 
    // }

    function handleInc() {
        setCount(count + 1)
    }

    function handleDec() {
        setCount(count - 1)
    }

    const countStyles = count >= 0 ?
        { color: 'red', fontSize: '40px' }
        :
        { color: 'green', fontSize: '40px' }

    const classes = count >= 0 ? 'inc' : 'dec'
    const isDisabled = count >= 5 ? true : false
    const isDisabled2 = count <= -5 ? true : false
    return (
        <div>
            {/* <p style={countStyles}>Счетчик: {count}</p> */}
            <p className={classes}>Счетчик: {count}</p>
            <button disabled={isDisabled} onClick={handleInc}>+1</button>
            <button disabled={isDisabled2} onClick={handleDec}>-1</button>
            {users.map((user) => {
                return <h2 key={user.id}>{user.first_name}</h2>
            })}
        </div>
    )
}