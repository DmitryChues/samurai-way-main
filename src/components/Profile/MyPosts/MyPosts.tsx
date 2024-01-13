import React, { FC } from 'react';
import s from './Post.module.css'
import { Post } from './Post/Post';

export type postsDataType = {
	message: string
	likes: number
}

type PostPropsType = {
	postsData: postsDataType[]
}

export const MyPosts: FC<PostPropsType> = ({ postsData }) => {

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