import React, { ChangeEvent, FC } from 'react';
import s from './Post.module.css';
import { Post } from './Post/Post';
import { postsDataType } from '../../../redux/state';

type PostPropsType = {
	postsData: postsDataType[]
	addPost: () => void
	updateNewPostText: (newPostText: string) => void
	newPostText: string
}

export const MyPosts: FC<PostPropsType> = ({ postsData, addPost, newPostText, updateNewPostText }) => {

	const postElements: JSX.Element[] = postsData.map(p => <Post message={p.message} likes={p.likes} />)

	// let newPostElement = React.createRef<HTMLTextAreaElement>()
	let addPostHandler = (newPostText: string) => {
		if (newPostText.trim() !== '') {
			addPost()
			// newPostElement.current.value = '';
			// updateNewPostText('')
		}
	}
	let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (e.currentTarget.value) {
			updateNewPostText(e.currentTarget.value)
		}
	}
	return (
		<div>
			<h3>My posts</h3>
			<div>
				<textarea onChange={onChangeHandler} value={newPostText} />
				<button onClick={() => addPostHandler(newPostText)}>Add posts</button>
			</div>
			<div>
				{postElements}
			</div>
		</div>
	);
};