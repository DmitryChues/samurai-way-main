import React, { ChangeEvent, FC } from 'react';
import s from './Post.module.css';
import { Post } from './Post/Post';
import { MyPostsPropsType } from './MyPostsContainer';

export const MyPosts: FC<MyPostsPropsType> = ({ profilePage: { newPostText, postsData }, addPost, updateNewPostText }) => {

	const postElements: JSX.Element[] = postsData.map(p => <Post message={p.message} likes={p.likes} />)

	// let newPostElement = React.createRef<HTMLTextAreaElement>()

	let addPostHandler = () => {
		if (newPostText.trim() !== '') {
			addPost()
		}
	}
	let updateNewPostTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (e.currentTarget.value) {
			updateNewPostText(e.currentTarget.value)
		}
	}
	return (
		<div>
			<h3>My posts</h3>
			<div>
				<textarea onChange={updateNewPostTextHandler} value={newPostText} />
				<button onClick={addPostHandler}>Add posts</button>
			</div>
			<div>
				{postElements}
			</div>
		</div>
	);
};