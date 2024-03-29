import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/redux-store';
import { Provider } from 'react-redux';

export const rerenderEntireTree = () => {
	ReactDOM.render(
		<Provider store={store}><App /></Provider>,
		document.getElementById('root')
	);
}
rerenderEntireTree()
store.subscribe(() => {
	rerenderEntireTree()
}
)
