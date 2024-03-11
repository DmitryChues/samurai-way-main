import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { friendsReducer } from "./friendsReducer";

let rootReducer = combineReducers({
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	friendsPage: friendsReducer,
})

export let store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store