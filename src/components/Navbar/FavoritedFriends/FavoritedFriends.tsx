import React, { FC } from 'react';
import { FriendsDataType } from '../../../redux/store';
import s from './FavoritedFriends.module.css'
import { NavLink } from 'react-router-dom';

type FavoriteFriendsPropsType = {
	state: FriendsDataType[]
}

export const FavoritedFriends: FC<FavoriteFriendsPropsType> = ({ state }) => {

	const ThreeFavoritedFrends = state.filter((f, index) => index < 3).map(f => {
		let path = `/friends/${f.id}`
		return (
			<NavLink to={path}>
				<li className={s.item}>
					<div className={s.item_img}><img src="https://illustrators.ru/uploads/illustration/image/1232594/%D1%8B%D1%8B%D1%8B%D1%8B.png" alt="friend" /></div>
					<span>{f.name}</span>
				</li>
			</NavLink>
		)
	}
	)
	return (
		<ul className={s.wrapper}>
			{ThreeFavoritedFrends}
		</ul>

	);
};