import React, { FC } from 'react';
import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';


type DialogItemPropsType = {
	name: string
	id: string
}
export const Dialog: FC<DialogItemPropsType> = ({ name, id }) => {
	let path = `/dialogs/${id}`;
	return (
		<li className={s.dialog}>
			<NavLink to={path}>{name}</NavLink>
		</li>
	)
}