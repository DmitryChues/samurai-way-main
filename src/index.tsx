import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { dialogsDataType, messagesDataType } from './components/Dialogs/Dialogs';
import { postsDataType } from './components/Profile/MyPosts/MyPosts';

const dialogsData: dialogsDataType[] = [
	{ name: 'Andrey', id: '1' },
	{ name: 'Dima', id: '2' },
	{ name: 'Vika', id: '3' },
	{ name: 'Alina', id: '4' },
	{ name: 'Sasha', id: '5' },
]
const messagesData: messagesDataType[] = [
	{ message: 'Lorem ipsum dolor.', id: '1' },
	{ message: 'Lorem ipsum dolor sit amet.', id: '2' },
	{ message: 'Lorem ipsum dolor amet.', id: '3' },
	{ message: 'Hi', id: '4' },
	{ message: 'Yo', id: '5' },
]
const postsData: postsDataType[] = [
	{ message: "Hi, how are you?", likes: 12 },
	{ message: "It's my first post", likes: 25 },
	{ message: "Hi, how are you?", likes: 12 },
	{ message: "It's my first post", likes: 25 },
]

ReactDOM.render(
	<App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />,
	document.getElementById('root')
);