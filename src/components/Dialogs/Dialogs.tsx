import React, { FC } from 'react';
import s from './Dialogs.module.css'
import { Dialog } from './Dialog/Dialog';
import { Message } from './Message/Message';

type dialogsDataType = {
	name: string
	id: string
}
type messagesDataType = {
	id: string
	message: string
}



type Dialogs = {

}

export const Dialogs: FC<Dialogs> = (props) => {
	const dialogsData: dialogsDataType[] = [
		{ name: 'Andrey', id: '1' },
		{ name: 'Dima', id: '2' },
		{ name: 'Vika', id: '3' },
		{ name: 'Alina', id: '4' },
		{ name: 'Sasha', id: '5' },
	]
	const messagesData: messagesDataType[] = [
		{ message: 'Lorem ipsum dolor.', id: '1' },
		{ message: 'Lorem ipsum dolor sit amet.', id: '2' },
		{ message: 'Lorem ipsum dolor amet.', id: '3' },
		{ message: 'Hi', id: '4' },
		{ message: 'Yo', id: '5' },
	]

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