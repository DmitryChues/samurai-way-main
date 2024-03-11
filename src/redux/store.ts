import { sendMessageAC, updateNewMessageAC } from "./dialogsReducer"
import { dialogsReducer } from "./dialogsReducer"
import { friendsReducer } from "./friendsReducer"
import { addPostAC, updateNewPostTextAC } from "./profileReducer"
import { profileReducer } from "./profileReducer"

type DialogsDataType = {
	name: string
	id: string
}

type MessagesDataType = {
	id: string
	message: string
}

type PostsDataType = {
	message: string
	likes: number
	id: string
}

export type FriendsDataType = {
	id: string
	name: string
	age: number
	status: boolean
}

type ProfilePageType = {
	postsData: PostsDataType[],
	newPostText: string
}

type DialogsPageType = {
	dialogsData: DialogsDataType[]
	messagesData: MessagesDataType[]
	newMessageText: string
}

export type FriendsPageType = {
	friendsData: FriendsDataType[]
}

export type StateType = {
	dialogsPage: DialogsPageType
	profilePage: ProfilePageType
	friendsPage: FriendsPageType
}

// ============== типы ACTION ====================
// type AddPostActionType = {
// 	type: 'ADD-POST'
// }
// type UpdateNewPostTextActionType = {
// 	type: 'UPDATE-NEW-POST-TEXT'
// 	newPostText: string
// }
// type SendMessageActionType = {
// 	type: 'SEND-MESSAGE'
// }
// type UpdateNewMessageActionType = {
// 	type: 'UPDATE-NEW-MESSAGE'
// 	newMessage: string
// }

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>
type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>

export type ActionType = AddPostActionType | UpdateNewPostTextActionType | SendMessageActionType | UpdateNewMessageActionType

// ============== тип STORE ======================
export type StoreType = {
	_state: StateType
	_onChange: () => void
	getState: () => StateType
	subscribe: (observer: () => void) => void

	// addPost: () => void
	// updateNewPostText: (newPostText: string) => void
	// sendMessage: () => void
	// updateNewMessage: (newMessage: string) => void

	dispatch: (action: ActionType) => void
}
// ===============================================

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
		},
	},
	_onChange() {
		console.log('state changed')
	},

	subscribe(observer) {
		this._onChange = observer
	},
	getState() {
		return this._state
	},

	// addPost() {
	// 	const newPost: PostsDataType = {
	// 		id: '5',
	// 		message: this._state.profilePage.newPostText,
	// 		likes: 0
	// 	}
	// 	this._state.profilePage.postsData.push(newPost)
	// 	this._state.profilePage.newPostText = ''
	// 	this._onChange()
	// },
	// updateNewPostText(newPostText: string) {
	// 	this._state.profilePage.newPostText = newPostText
	// 	this._onChange()
	// },
	// sendMessage() {
	// 	const newMessage: MessagesDataType = {
	// 		message: this._state.dialogsPage.newMessageText,
	// 		id: '6'
	// 	}
	// 	this._state.dialogsPage.messagesData.push(newMessage)
	// 	this._state.dialogsPage.newMessageText = ''
	// 	this._onChange()
	// },
	// updateNewMessage(newMessage: string) {
	// 	this._state.dialogsPage.newMessageText = newMessage
	// 	this._onChange()
	// },

	dispatch(action: ActionType) {

		// this._state.profilePage = profileReducer(this._state.profilePage, action)
		// this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.friendsPage = friendsReducer(this._state.friendsPage, action)
		this._onChange()

		// switch (action.type) {
		// 	case 'ADD-POST':
		// 		const newPost: PostsDataType = {
		// 			id: '5',
		// 			message: this._state.profilePage.newPostText,
		// 			likes: 0
		// 		}
		// 		this._state.profilePage.postsData.push(newPost)
		// 		this._state.profilePage.newPostText = ''
		// 		this._onChange()
		// 		break
		// 	case 'UPDATE-NEW-POST-TEXT':
		// 		this._state.profilePage.newPostText = action.newPostText
		// 		this._onChange()
		// 		break
		// 	case 'SEND-MESSAGE':
		// 		const newMessage: MessagesDataType = {
		// 			message: this._state.dialogsPage.newMessageText,
		// 			id: '6'
		// 		}
		// 		this._state.dialogsPage.messagesData.push(newMessage)
		// 		this._state.dialogsPage.newMessageText = ''
		// 		this._onChange()
		// 		break
		// 	case 'UPDATE-NEW-MESSAGE':
		// 		this._state.dialogsPage.newMessageText = action.newMessage
		// 		this._onChange()
		// 		break
		// 	default:
		// 		break;
		// }
	}
}