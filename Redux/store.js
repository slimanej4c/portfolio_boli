import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';


import { persistReducer,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import rootReducer from './rootReducer';





const persistConfig = {
    
    key: 'root-key',
    storage,
    stateReconciler: hardSet,

    blacklist: [] // navigation will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,

  applyMiddleware( ReduxThunk)
);





//const persistor=null
export { store ,persistedReducer  };
