import React, { FC } from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

type NavbarPropsType = {

}

export const Navbar: FC<NavbarPropsType> = (props) => {
	return (
		<nav className={s.nav}>

			<ul>
				<li className={s.item}><NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink></li>
				<li className={s.item}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></li>
				<li className={s.item}><NavLink activeClassName={s.active} to="/news">News</NavLink></li>
				<li className={s.item}><NavLink activeClassName={s.active} to="/music">Music</NavLink></li>
				<li className={s.item}><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></li>
			</ul>

		</nav>
	);
};