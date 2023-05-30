import { combineReducers, createStore,applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { mainPageReducer } from './mainPageReducer/mainPageReducer';
import { NewsReducer } from './News/newsReducer';


const rootReducer = combineReducers({
  mainPage:mainPageReducer,
  news: NewsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
