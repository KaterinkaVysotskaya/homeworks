import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.css'

function Header() {
const [toggle, setToggle] = useState(false)
console.log();

    return (
        <div>
         <div className={toggle ? s.show : s.header}
            onFocus={() => setToggle(!toggle)}
            onBlur={() => setToggle(!toggle)}>
            <Link to={'/'} className={s.link} >PreJunior</Link>
            {/* <Link to={'PreJunior'} className={s.link} >PreJunior</Link> */}
            <Link to={'Junior'} className={s.link && s.active}>Junior</Link>
            <Link to={'JuniorPlus'} className={s.link && s.active}>Junior+</Link>
        </div>
        <div className={s.block} />
        </div >
    )
}

export default Header
