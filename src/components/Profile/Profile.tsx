import React, { FC } from 'react';
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {}

export const Profile: FC<ProfilePropsType> = (props) => {
	return (
		<div className={classes.content}>
			<ProfileInfo />
			<MyPosts />
		</div>
	);
};