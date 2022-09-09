import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import PreJunior from './pages/PreJunior'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Rout() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            
            <Route path={'/'} element={<PreJunior />}/>
            
            <Route path={"PreJunior"}element={ <PreJunior/>}/>
            <Route path={"Junior"}element={ <Junior/>}/>
            <Route path={"Juniorplus"}element={ <JuniorPlus/>}/>
            <Route path={'*'}element={ <Error404/>}/>


{/* 
             <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/> */}
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}

            </Routes>
        </div>
    )
}

export default Rout
