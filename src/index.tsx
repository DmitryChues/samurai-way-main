import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/state';

export const rerenderEntireTree = () => {
	ReactDOM.render(
		<App
			updateNewMessage={store.updateNewMessage.bind(store)}
			sendMessage={store.sendMessage.bind(store)}
			updateNewPostText={store.updateNewPostText.bind(store)}
			addPost={store.addPost.bind(store)}
			state={store.getState()}
		/>,
		document.getElementById('root')
	);
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
