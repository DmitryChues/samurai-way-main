// ========================= типы к INITIAL STATE ==================================
export type PostsDataType = {
	message: string
	likes: number
	id: string
}
export type ProfilePageType = typeof initialState

// ========================= типы ACTION CREATOR ===================================
type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

type ActionType = AddPostActionType | UpdateNewPostTextActionType

// ========================= объявление initialState ===============================
let initialState = {
	postsData: [
		{ id: '1', message: "Hi, how are you?", likes: 12 },
		{ id: '2', message: "It's my first post", likes: 25 },
		{ id: '3', message: "Hi, how are you?", likes: 12 },
		{ id: '4', message: "It's my first post", likes: 25 },
	] as PostsDataType[],
	newPostText: 'it-kamasutra.com'
}

// ========================== REDUCER ===============================================
export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
	switch (action.type) {
		case 'ADD-POST':
			const newPost: PostsDataType = {
				id: '5',
				message: state.newPostText,
				likes: 0
			}
			return { ...state, postsData: [...state.postsData, newPost], newPostText: '' }
		case 'UPDATE-NEW-POST-TEXT':
			return { ...state, newPostText: action.newPostText }
		default:
			return state
	}
};
export const addPostAC = () => ({ type: 'ADD-POST' } as const)
export const updateNewPostTextAC = (newPostText: string) => ({ type: 'UPDATE-NEW-POST-TEXT', newPostText } as const)
