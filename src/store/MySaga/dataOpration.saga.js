import { call, put, takeEvery } from "@redux-saga/core/effects"
import axios from "axios";
import { setDataError, setDataSuccess } from "../actions";

function* handleData({ type, data }) {
    try {
        const { data } = yield call(() => axios.get("https://jsonplaceholder.typicode.com/posts"))

        yield put(setDataSuccess(data))

    } catch (err) {
        yield put(setDataError("Error"));

    }

}

export function* dataOpration() {
    yield takeEvery("setData", handleData);
};