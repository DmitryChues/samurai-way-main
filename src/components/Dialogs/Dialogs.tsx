import React, { FC } from 'react';
import s from './Dialogs.module.css'
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import { ActionType, DialogsPageType } from '../../redux/state';
import { sendMessageAC, updateNewMessageAC } from "../../redux/dialogsReducer";

type DialogsPropsType = {
	state: DialogsPageType
	// sendMessage: () => void
	// updateNewMessage: (newMessage: string) => void
	dispatch: (action: ActionType) => void
}

export const Dialogs: FC<DialogsPropsType> = ({ state: { dialogsData, messagesData, newMessageText }, dispatch }) => {

	const newMessage = React.createRef<HTMLTextAreaElement>()
	const sendMessageHandler = () => {
		dispatch(sendMessageAC())
		// sendMessage()
	}
	const onChangeHandler = () => {
		if (newMessage.current) {
			// updateNewMessage(newMessage.current.value)
			dispatch(updateNewMessageAC(newMessage.current.value))
		}
	}

	const dialogElements: JSX.Element[] = dialogsData.map(d => <Dialog name={d.name} id={d.id} />)
	const messageElements: JSX.Element[] = messagesData.map(m => <Message message={m.message} />)
	return (
		<section>
			<h2 className={s.title}>
				Dialogs
			</h2>
			<div className={s.dialogs}>
				<ul className={s.dialog_items}>
					{dialogElements}
				</ul>
				<div className={s.messages__wrapper}>
					<ul className={s.messages}>
						{messageElements}
					</ul>
					<div>
						<textarea onChange={onChangeHandler} ref={newMessage} value={newMessageText} />
						<button onClick={sendMessageHandler}>Send</button>
					</div>
				</div>
			</div>
			<div>

			</div>
		</section>
	);
};