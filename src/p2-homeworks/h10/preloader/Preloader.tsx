import React from 'react'
import preloader from '../preloader/preloader.gif'
import s from '../preloader/Preloader.module.css'

const Preloader= () =>{
return(
    <>
    <div className={s.preloader}>
    <img src={preloader}/>
    </div>
    </>
)
}

export default Preloader