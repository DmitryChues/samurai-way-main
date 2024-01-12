import React, { FC } from 'react';
import s from './Post.module.css'
import { Post } from './Post/Post';

type postsDataType = {
	message: string
	likes: number
}

type PostPropsType = {}

export const MyPosts: FC<PostPropsType> = (props) => {
	const postsData: postsDataType[] = [
		{ message: "Hi, how are you?", likes: 12 },
		{ message: "It's my first post", likes: 25 },
		{ message: "Hi, how are you?", likes: 12 },
		{ message: "It's my first post", likes: 25 },
	]

	const postElements: JSX.Element[] = postsData.map(p => <Post message={p.message} likes={p.likes} />)
	return (
		<div>
			<h3>My posts</h3>
			<div>
				New post
			</div>
			<div>
				{postElements}
			</div>
		</div>
	);
};