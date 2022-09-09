import React from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './Header'
import Routes from './Routes'

function HW5() {
    return (
        <>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routes/> 

            </HashRouter>
        </>
    )
}

export default HW5
