import React, { FC } from 'react';
import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {

}

export const ProfileInfo: FC<ProfileInfoPropsType> = (props) => {
	return (
		<>
			<div>
				<img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?cs=srgb&dl=pexels-kellie-churchman-1001682.jpg&fm=jpg" alt="sea" />
			</div>
			<div>
				ava + description
			</div>
		</>
	);
};