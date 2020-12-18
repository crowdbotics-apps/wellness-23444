import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth1186579Reducer from '../features/EmailAuth1186579/redux/reducers';
import SignIn12186578Reducer from '../features/SignIn12186578/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth1186579: EmailAuth1186579Reducer,
SignIn12186578: SignIn12186578Reducer,

});