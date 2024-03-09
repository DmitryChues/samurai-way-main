import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateType, store } from './redux/state';

export const rerenderEntireTree = () => {
	ReactDOM.render(
		<App
			state={store.getState()}
			// updateNewMessage={store.updateNewMessage.bind(store)}
			// sendMessage={store.sendMessage.bind(store)}
			// updateNewPostText={store.updateNewPostText.bind(store)}
			// addPost={store.addPost.bind(store)}
			dispatch={store.dispatch.bind(store)}
		/>,
		document.getElementById('root')
	);
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
