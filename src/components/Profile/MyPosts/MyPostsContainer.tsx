import React from 'react';
import { ProfilePageType, addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import { MyPosts } from './MyPosts';
import { AppRootStateType } from '../../../redux/redux-store';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

type MapStateType = {
	profilePage: ProfilePageType
}
type MapDispatchType = {
	updateNewPostText: (newPostText: string) => void
	addPost: () => void
}
export type MyPostsPropsType = MapStateType & MapDispatchType

let mapStateToProps = (state: AppRootStateType): MapStateType => {
	return {
		profilePage: state.profilePage,
	}
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchType => {
	return {
		updateNewPostText: (newPostText: string) => { dispatch(updateNewPostTextAC(newPostText)) },
		addPost: () => { dispatch(addPostAC()) }
	}
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)