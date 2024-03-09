import React, { FC } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { ActionType, StateType } from './redux/state';
import { Friends } from './components/Friends/Friends';

type AppPropsType = {
	state: StateType
	// addPost: () => void
	// updateNewPostText: (newPostText: string) => void
	// sendMessage: () => void
	// updateNewMessage: (newMessage: string) => void
	dispatch: (action: ActionType) => void
}

const App = (props: AppPropsType) => {
	const {
		state: { dialogsPage, profilePage, friendsPage },
		// addPost, 
		// updateNewPostText, 
		// sendMessage, 
		// updateNewMessage 
		dispatch,
	} = props
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar state={friendsPage} />
				<div className='app-wrapper-content'>
					<Route path='/dialogs' render={() => <Dialogs /*updateNewMessage={updateNewMessage} sendMessage={sendMessage}*/ dispatch={dispatch} state={dialogsPage} />} />
					<Route path='/profile' render={() => <Profile /*updateNewPostText={updateNewPostText} addPost={addPost}*/ dispatch={dispatch} state={profilePage} />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/friends' render={() => <Friends />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
