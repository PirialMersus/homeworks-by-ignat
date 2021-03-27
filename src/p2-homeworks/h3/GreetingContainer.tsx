import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: (value: string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<any>(``) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const name = e.currentTarget.value
        setError('')
        setName(name) // need to fix
    }
    const addUser = () => {
        if (!name || name.trim().length === 0 ) {
            setName('')
            setError(`User's name cant be empty`)
            return
        }
        alert(`Hello, ${name}!`) // need to fix
        addUserCallback(name)
        setName('')
        setError('')
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
