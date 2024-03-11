// ========================= типы к INITIAL STATE =================================
export type DialogsPageType = {
	dialogsData: DialogsDataType[]
	messagesData: MessagesDataType[]
	newMessageText: string
}
type DialogsDataType = {
	name: string
	id: string
}
type MessagesDataType = {
	id: string
	message: string
}

// ========================= типы ACTION CREATOR ===================================
type SendMessageActionType = ReturnType<typeof sendMessageAC>
type UpdateNewMessageActionType = ReturnType<typeof updateNewMessageAC>

type ActionType = SendMessageActionType | UpdateNewMessageActionType

// ========================= объявление initialState ===============================
let initialState: DialogsPageType = {
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
}

// ========================== REDUCER ===============================================
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
	switch (action.type) {
		case 'SEND-MESSAGE':
			const newMessage: MessagesDataType = {
				message: state.newMessageText,
				id: '6'
			}
			return { ...state, messagesData: [...state.messagesData, newMessage], newMessageText: '' }
		case 'UPDATE-NEW-MESSAGE':
			return { ...state, newMessageText: action.newMessage }
		default:
			return state
	}
};
// =========================== ACTION CREATORS =======================================
export const sendMessageAC = () => ({ type: 'SEND-MESSAGE' } as const)
export const updateNewMessageAC = (newMessage: string) => ({ type: 'UPDATE-NEW-MESSAGE', newMessage } as const)
