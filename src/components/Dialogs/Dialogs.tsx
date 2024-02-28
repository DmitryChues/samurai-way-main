import React, { FC } from 'react';
import s from './Dialogs.module.css'
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';
import { dialogsPageType } from '../../redux/state';

type DialogsPropsType = {
	state: dialogsPageType
	sendMessage: () => void
	updateNewMessage: (newMessage: string) => void
}

export const Dialogs: FC<DialogsPropsType> = ({ state: { dialogsData, messagesData, newMessageText }, sendMessage, updateNewMessage }) => {

	const newMessage = React.createRef<HTMLTextAreaElement>()
	const sendMessageHandler = () => {
		sendMessage()
	}
	const onChangeHandler = () => {
		if (newMessage.current) {
			updateNewMessage(newMessage.current?.value)
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