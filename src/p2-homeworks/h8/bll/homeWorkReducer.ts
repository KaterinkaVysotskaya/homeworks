import { InitialPeopleType } from "../HW8"

export type ActionsType = CheckMajorType | SortUpType | SortDownType

type CheckMajorType = {
    type: 'check'
    payload:  string
}
type SortUpType = {
    type: 'sort'
    payload:  string
}
type SortDownType = {
    type: 'sort'
    payload:  string
}

export const homeWorkReducer = (state: InitialPeopleType, action: ActionsType): InitialPeopleType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload==='up') {
              const newState = [...state.sort((a,b)=>a.name>b.name ? 1 : -1)]
            return newState  
            } else{
                return [...state.sort((a,b)=>a.name<b.name ? 1 : -1)]
            
            }
            
        }
        case 'check': {
            // need to fix
            return [...state.filter(p=>p.age>=+action.payload)]
        }
        default: return state
    }
}
export const CheckMajorAC = (age: number)=>{
    return {
        type: 'check',
        payload: '18'
    }
}
export const SortUpType = (name: string): SortUpType=>{
    return {
        type: 'sort',
        payload: 'up'
    }
}
export const SortDownType = (name: string): SortDownType=>{
    return {
        type: 'sort',
        payload: 'down'
    }
}