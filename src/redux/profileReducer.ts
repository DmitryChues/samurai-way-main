import { ActionType, PostsDataType, ProfilePageType } from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionType): ProfilePageType => {
	switch (action.type) {
		case 'ADD-POST':
			const newPost: PostsDataType = {
				id: '5',
				message: state.newPostText,
				likes: 0
			}
			state.postsData.push(newPost)
			state.newPostText = ''
			return state
		case 'UPDATE-NEW-POST-TEXT':
			state.newPostText = action.newPostText
			return state
		default:
			return state
	}
}