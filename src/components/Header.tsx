import style from './Header.module.css'
import logo from '../assets/todoListLogo.svg'
import React from 'react'

export function Header(){
    return(
        <header className={style.header}>
            <img src={logo}/>
        </header>

    )
}