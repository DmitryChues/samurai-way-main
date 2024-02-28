import React, { FC } from 'react';
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { profilePageType } from '../../redux/state';

type ProfilePropsType = {
	state: profilePageType
	addPost: () => void
	updateNewPostText: (newPostText: string) => void
}

export const Profile: FC<ProfilePropsType> = ({ state: { postsData, newPostText }, addPost, updateNewPostText }) => {
	return (
		<div className={classes.content}>
			<ProfileInfo />
			<MyPosts addPost={addPost} updateNewPostText={updateNewPostText} postsData={postsData} newPostText={newPostText} />
		</div>
	);
};