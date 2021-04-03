import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./MySaga";
import reducers from "./reducers";


const mySaga = createSagaMiddleware();

export default compose(applyMiddleware(mySaga), window.devToolsExtension && window.devToolsExtension())(createStore)(reducers)

mySaga.run(rootSaga);