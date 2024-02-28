import React, { FC } from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import { FavoritedFriends } from './FavoritedFriends/FavoritedFriends';
import { friendsPageType } from '../../redux/state';

type NavbarPropsType = {
	state: friendsPageType
}

export const Navbar: FC<NavbarPropsType> = ({ state: { friendsData } }) => {
	return (
		<nav className={s.nav}>

			<ul className={s.nav_items}>
				<li className={s.item}><NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink></li>
				<li className={s.item}><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></li>
				<li className={s.item}><NavLink activeClassName={s.active} to="/news">News</NavLink></li>
				<li className={s.item}><NavLink activeClassName={s.active} to="/music">Music</NavLink></li>
				<li className={s.item}><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></li>
				<li className={s.item}><NavLink activeClassName={s.active} to="/friends">Friends</NavLink><FavoritedFriends state={friendsData} /></li>

			</ul>

		</nav>
	);
};