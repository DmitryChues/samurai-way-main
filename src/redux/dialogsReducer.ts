import { ActionType, DialogsPageType, MessagesDataType } from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType => {
	switch (action.type) {
		case 'SEND-MESSAGE':
			const newMessage: MessagesDataType = {
				message: state.newMessageText,
				id: '6'
			}
			state.messagesData.push(newMessage)
			state.newMessageText = ''
			return state
		case 'UPDATE-NEW-MESSAGE':
			state.newMessageText = action.newMessage
			return state
		default:
			return state
	}
}