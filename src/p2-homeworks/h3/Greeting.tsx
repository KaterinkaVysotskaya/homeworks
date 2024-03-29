import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) =>void// need to fix any
    addUser: () => void   // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) =>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser,onEnter, error, totalUsers } // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input// need to fix with (?:)

    return (
        <div>
            <input value={name}
                onChange={setNameCallback}
                className={error ? inputClass : ""}
                onKeyDown={onEnter}
                onBlur={setNameCallback}

            />
            <span>{error ? error : ""}</span>
            <button onClick={addUser}>add</button>
            <span className={s.span}>Total users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
