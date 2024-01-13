import React, { FC } from 'react';
import s from './Dialogs.module.css'
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';

export type dialogsDataType = {
	name: string
	id: string
}
export type messagesDataType = {
	id: string
	message: string
}

type Dialogs = {
	dialogsData: dialogsDataType[]
	messagesData: messagesDataType[]
}

export const Dialogs: FC<Dialogs> = ({ dialogsData, messagesData }) => {

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
				<ul className={s.messages}>
					{messageElements}
				</ul>
			</div>
			<div>

			</div>
		</section>
	);
};