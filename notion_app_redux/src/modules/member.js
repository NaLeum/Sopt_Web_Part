import { createAction, handleActions } from "redux-actions";
import createRequestSage, { createRequestActionTypes } from "../libs/createRequestSaga";
import * as memberApi from '../libs/memberApi';
import { takeLatest } from "redux-saga/effects";


const [GET_MEMBERLIST, GET_MEMBERLIST_SUCCESS, GET_MEMBERLIST_FAILURE] = createRequestActionTypes(
    "member/GET_MEMBERLIST"
);

const [GET_MEMBERDITAIL,GET_MEMBERDITAIL_SUCCESS,GET_MEMBERDITAIL_FAILURE] = createRequestActionTypes(
    'member/GET_MEMBERDITAIL'
);

export const getMemberList = createAction(GET_MEMBERLIST);
export const getMemberDetail = createAction(GET_MEMBERDITAIL,(id)=>id);

const getMemberListSaga = createRequestSage(GET_MEMBERLIST, memberApi.memberList);
const getMemberDitailSaga = createRequestSage(GET_MEMBERDITAIL, memberApi.memberDetail);

export function* memberSaga() {
    yield takeLatest(GET_MEMBERLIST,getMemberListSaga);
    yield takeLatest(GET_MEMBERDITAIL,getMemberDitailSaga);
}

const initState = {
    memberListInfo : null,
    memberDetailInfo : null,
    error:null
}

const member = handleActions(
    {
        [GET_MEMBERLIST_SUCCESS]:(state, {payload:memberListInfo}) =>({
            ...state,
            memberListInfo,
        }),
        [GET_MEMBERLIST_FAILURE]:(state,{payload:error}) => ({
            ...state,
            error,
        }),
        [GET_MEMBERDITAIL_SUCCESS]:(state, {payload:memberDetailInfo}) => ({
            ...state,
            memberDetailInfo
        }),
        [GET_MEMBERDITAIL_FAILURE]:(state,{payload:error}) => ({
            ...state,
            error,
        }),

    },
    initState
)

export default member;