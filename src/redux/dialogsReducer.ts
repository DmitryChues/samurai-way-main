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
};

export const sendMessageAC = () => ({ type: 'SEND-MESSAGE' } as const)
export const updateNewMessageAC = (newMessage: string) => ({ type: 'UPDATE-NEW-MESSAGE', newMessage } as const)
