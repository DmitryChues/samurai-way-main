import { ActionType, FriendsPageType } from "./store";

let initialState = {
	friendsData: [
		{ id: '1', name: 'Andrey', age: 24, status: true },
		{ id: '2', name: 'Vorobey', age: 53, status: true },
		{ id: '3', name: 'Sergey', age: 34, status: false },
		{ id: '4', name: 'Gey', age: 24, status: true },
		{ id: '5', name: 'Apolo', age: 26, status: false },
	]
}

export const friendsReducer = (state: FriendsPageType = initialState, action: ActionType): FriendsPageType => {
	switch (action.type) {

		default:
			return state
	}
}