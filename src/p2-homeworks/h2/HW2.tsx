import React, { useState } from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type FilterType = 'all' | AffairPriorityType
export type AffairType = {
    id: number
    name: string
    priority: string
}
type DefaultAffairsType = Array<AffairType>
// constants
const defaultAffairs: DefaultAffairsType = [ // need to fix any
    { id: 1, name: 'React', priority: 'high' },
    { id: 2, name: 'anime', priority: 'low' },
    { id: 3, name: 'games', priority: 'low' },
    { id: 4, name: 'work', priority: 'high' },
    { id: 5, name: 'html & css', priority: 'middle' },
]

// pure helper functions
export const filterAffairs = (affairs: DefaultAffairsType, filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') return affairs
    //  else if (filter === 'high') {
    //     return affairs.filter((el) => el.priority === 'high')
    // } else if (filter === 'middle') {
    //     return affairs.filter((el) => el.priority === 'middle')
    // } else  {
    //     return affairs.filter((el) => el.priority === 'low')
    // }
    else return affairs.filter(el=>el.priority === filter)
}

export const deleteAffair = (affairs: DefaultAffairsType, id: number): DefaultAffairsType => { // need to fix any
    return affairs.filter((el) => el.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<DefaultAffairsType> (defaultAffairs)
        
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr />
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr />
        </div>
    )
}

export default HW2
