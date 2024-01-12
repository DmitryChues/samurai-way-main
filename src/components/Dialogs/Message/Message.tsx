import React, { FC } from "react"
import s from './Message.module.css'

type MessagePropsType = {
	message: string
}
export const Message: FC<MessagePropsType> = ({ message }) => {
	return (
		<li className={s.message}>{message}</li>
	)
}