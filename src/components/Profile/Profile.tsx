import React, { FC } from 'react';
import classes from './Profile.module.css'
import { MyPosts } from './MyPosts/MyPosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ActionType, ProfilePageType } from '../../redux/state';

type ProfilePropsType = {
	state: ProfilePageType
	// addPost: () => void
	// updateNewPostText: (newPostText: string) => void
	dispatch: (action: ActionType) => void
}

export const Profile: FC<ProfilePropsType> = ({ state: { postsData, newPostText }, dispatch }) => {
	return (
		<div className={classes.content}>
			<ProfileInfo />
			<MyPosts /*addPost={addPost} updateNewPostText={updateNewPostText}*/ dispatch={dispatch} postsData={postsData} newPostText={newPostText} />
		</div>
	);
};