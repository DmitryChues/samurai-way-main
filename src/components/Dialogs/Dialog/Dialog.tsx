import React, { FC } from 'react';
import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';


type DialogPropsType = {
	name: string
	id: string
}
export const Dialog: FC<DialogPropsType> = ({ name, id }) => {
	let path = `/dialogs/${id}`;
	return (
		<li>
			<NavLink activeClassName={s.active} to={path}>

				<div className={s.dialog}>
					<div className={s.ava}>
						<img src="https://illustrators.ru/uploads/illustration/image/1232594/%D1%8B%D1%8B%D1%8B%D1%8B.png" alt="oops" />
					</div>
					<span>{name}</span>
				</div>

			</NavLink>
		</li>

	)
}