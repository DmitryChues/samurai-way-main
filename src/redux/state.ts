type dialogsDataType = {
	name: string
	id: string
}

type messagesDataType = {
	id: string
	message: string
}

export type postsDataType = {
	message: string
	likes: number
	id: string
}

export type friendsDataType = {
	id: string
	name: string
	age: number
	status: boolean
}

export type profilePageType = {
	postsData: postsDataType[],
	newPostText: string
}

export type dialogsPageType = {
	dialogsData: dialogsDataType[]
	messagesData: messagesDataType[]
	newMessageText: string
}

export type friendsPageType = {
	friendsData: friendsDataType[]
}

export type stateType = {
	dialogsPage: dialogsPageType
	profilePage: profilePageType
	friendsPage: friendsPageType
}

export type StoreType = {
	_state: stateType
	getState: () => stateType
	addPost: () => void
	updateNewPostText: (newPostText: string) => void
	sendMessage: () => void
	updateNewMessage: (newMessage: string) => void
	_onChange: () => void
	subscribe: (observer: () => void) => void
}

export let store: StoreType = {
	_state: {
		dialogsPage: {
			dialogsData: [
				{ name: 'Andrey', id: '1' },
				{ name: 'Dima', id: '2' },
				{ name: 'Vika', id: '3' },
				{ name: 'Alina', id: '4' },
				{ name: 'Sasha', id: '5' },
			],
			messagesData: [
				{ message: 'Lorem ipsum dolor.', id: '1' },
				{ message: 'Lorem ipsum dolor sit amet.', id: '2' },
				{ message: 'Lorem ipsum dolor amet.', id: '3' },
				{ message: 'Hi', id: '4' },
				{ message: 'Yo', id: '5' },
			],
			newMessageText: 'kamasutra'
		},
		profilePage: {
			postsData: [
				{ id: '1', message: "Hi, how are you?", likes: 12 },
				{ id: '2', message: "It's my first post", likes: 25 },
				{ id: '3', message: "Hi, how are you?", likes: 12 },
				{ id: '4', message: "It's my first post", likes: 25 },
			],
			newPostText: 'it-kamasutra.com'
		},
		friendsPage: {
			friendsData: [
				{ id: '1', name: 'Andrey', age: 24, status: true },
				{ id: '2', name: 'Vorobey', age: 53, status: true },
				{ id: '3', name: 'Sergey', age: 34, status: false },
				{ id: '4', name: 'Gey', age: 24, status: true },
				{ id: '5', name: 'Apolo', age: 26, status: false },
			]
		}
	},
	getState() {
		return this._state
	},
	addPost() {
		const newPost: postsDataType = {
			id: '5',
			message: this._state.profilePage.newPostText,
			likes: 0
		}
		this._state.profilePage.postsData.push(newPost)
		this._state.profilePage.newPostText = ''
		this._onChange()
	},
	updateNewPostText(newPostText: string) {
		this._state.profilePage.newPostText = newPostText
		this._onChange()
	},
	sendMessage() {
		const newMessage: messagesDataType = {
			message: this._state.dialogsPage.newMessageText,
			id: '6'
		}
		this._state.dialogsPage.messagesData.push(newMessage)
		this._state.dialogsPage.newMessageText = ''
		this._onChange()
	},
	updateNewMessage(newMessage: string) {
		this._state.dialogsPage.newMessageText = newMessage
		this._onChange()
	},
	_onChange() {
		console.log('state changed')
	},
	subscribe(observer) {
		this._onChange = observer
	}
}

// let rerenderEntireTree = () => {
// 	console.log('State changed')
// }
// export const subscribe = (observer: () => void) => {
// 	rerenderEntireTree = observer
// }