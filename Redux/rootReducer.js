import { combineReducers } from 'redux'


//import RegisterReducer from './Register/register_redux'


import ChangeLangueReducer from  './variables'

console.log('rootReducer')

const rootReducer = combineReducers({

   change_langue_reducer:ChangeLangueReducer


    
})

export default rootReducer