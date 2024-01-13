import React, { FC } from 'react';
import classes from './Profile.module.css'
import { MyPosts, postsDataType } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
	postsData: postsDataType[]
}

export const Profile: FC<ProfilePropsType> = ({ postsData }) => {
	return (
		<div className={classes.content}>
			<ProfileInfo />
			<MyPosts postsData={postsData} />
		</div>
	);
};