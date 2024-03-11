import React, { FC } from 'react';
import s from './Friends.module.css'
import { FavoritedFriends } from '../Navbar/FavoritedFriends/FavoritedFriends';

type FriendsPropsType = {

}

export const Friends: FC<FriendsPropsType> = (props) => {
	return (
		<div>
			Friends
			{/* <FavoritedFriends state={friendsData} /> */}
		</div>
	);
};