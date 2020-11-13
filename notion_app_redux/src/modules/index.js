import { combineReducers } from "redux";
import loading from "./loading";
import member, { memberSaga } from "./member";
import { all } from "redux-saga/effects";



const rootReducer = combineReducers({
    loading,
    member
})

export function* rootSaga() {
    yield all([memberSaga()]);
}

export default rootReducer;