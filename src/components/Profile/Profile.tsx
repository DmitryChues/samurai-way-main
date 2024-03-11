import React, { FC } from 'react';
import classes from './Profile.module.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
}

export const Profile: FC<ProfilePropsType> = () => {
	return (
		<div className={classes.content}>
			<ProfileInfo />
			<MyPostsContainer />
		</div>
	);
};