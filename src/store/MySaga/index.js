import { all } from "redux-saga/effects"
import { dataOpration } from "./dataOpration.saga"

export default function* () {
    yield all([
        dataOpration()
    ])
}