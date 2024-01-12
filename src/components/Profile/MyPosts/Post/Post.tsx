import React, { FC } from 'react';
import s from './Post.module.css'

type PostPropsType = {
	message: string
	likes: number
}

export const Post: FC<PostPropsType> = ({ message, likes }) => {
	return (
		<div>
			{message}
			<br />
			<span>likes: {likes}</span>
		</div>
	);
};