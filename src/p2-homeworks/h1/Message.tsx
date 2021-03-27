import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.messageWrap}>
            <div className={s.message}>
                <div className={s.icon}>
                    <img
                        src="https://www.theplace.ru/cache/archive/arnold_schwarzenegger/img/3(60)-gthumb-gwdata600-ghdata400-gfitdatamax.jpg"
                        alt="ava"/>
                </div>
                <div className={s.angle}></div>
                <div className={s.messageContent}>
                    <div className={s.namePlusMessage}>
                        <h3>{props.name}</h3>
                        <p>{props.message}</p>
                    </div>
                    <div className={s.time}><span>{props.time}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Message
