import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { Button } from '@material-ui/core'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
} 
export type InitialPeopleType = typeof initialPeople
const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
] as Array<UserType>

function HW8() {
    const [people, setPeople] = useState<InitialPeopleType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.item}>
           {p.name + ' ' + p.age}
           
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sortMajor = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: '18'}))

    return (
        <div>
            <hr/>
            homeworks 8
            <hr/>
            {/*should work (должно работать)*/}
            {finalPeople}

            <div><Button  size="small" variant="contained" color="primary" onClick={sortUp}>sort up</Button></div>
            <div><Button size="small" variant="contained" onClick={sortDown} >sort down</Button></div>
            <div><Button size="small" variant="contained" color="secondary" onClick={sortMajor} >check 18</Button></div>
            

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8


