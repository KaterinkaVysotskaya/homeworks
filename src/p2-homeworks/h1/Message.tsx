import React from 'react'
import style from './Test.module.css'

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataType) {
    return (
        <div className={style.appWrapper}>
            <img className={style.test} src={props.avatar}/>

            <div className={style.angle}/>
            <div className={style.messageContent}>
                <div className={style.name}>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>



            </div>
        </div>
    )
}

export default Message
