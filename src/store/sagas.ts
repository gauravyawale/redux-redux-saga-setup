import { takeEvery, put } from "redux-saga/effects";
import { increment } from "./reducer";

function* incrementAsync() {
  yield new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating async operation
  console.log("Saga: Increment action dispatched!");
  yield put(increment());
}

export function* rootSaga() {
  yield takeEvery("counter/incrementAsync", incrementAsync);
}
