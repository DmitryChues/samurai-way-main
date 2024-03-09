import React, { ChangeEvent, FC } from 'react';
import s from './Post.module.css';
import { Post } from './Post/Post';
import { ActionType, PostsDataType, addPostAC, updateNewPostTextAC } from '../../../redux/state';

type PostPropsType = {
	postsData: PostsDataType[]
	// addPost: () => void
	// updateNewPostText: (newPostText: string) => void
	dispatch: (action: ActionType) => void
	newPostText: string
}

export const MyPosts: FC<PostPropsType> = ({ postsData, newPostText, dispatch }) => {

	const postElements: JSX.Element[] = postsData.map(p => <Post message={p.message} likes={p.likes} />)

	// let newPostElement = React.createRef<HTMLTextAreaElement>()
	let addPostHandler = () => {
		if (newPostText.trim() !== '') {
			dispatch(addPostAC())
			// addPost()
			// newPostElement.current.value = '';
			// updateNewPostText('')
		}
	}
	let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		if (e.currentTarget.value) {
			dispatch(updateNewPostTextAC(e.currentTarget.value))
			// updateNewPostText(e.currentTarget.value)
		}
	}
	return (
		<div>
			<h3>My posts</h3>
			<div>
				<textarea onChange={onChangeHandler} value={newPostText} />
				<button onClick={addPostHandler}>Add posts</button>
			</div>
			<div>
				{postElements}
			</div>
		</div>
	);
};