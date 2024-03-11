import React from 'react';
import { DialogsPageType, sendMessageAC, updateNewMessageAC } from "../../redux/dialogsReducer";
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { Dispatch } from 'redux';

type MapStatePropsType = {
	dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
	updateNewMessage: (newMessage: string) => void
	sendMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
	return {
		dialogsPage: state.dialogsPage,
	}
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
	return {
		updateNewMessage: (newMessage: string) => { dispatch(updateNewMessageAC(newMessage)) },
		sendMessage: () => { dispatch(sendMessageAC()) }
	}
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)