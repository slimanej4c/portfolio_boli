const SET_LANGUE= 'SET_LANGUE'


export const Set_langue_redux= (lang) => async dispatch => {
    console.log(  'change_langue....')
   
   
    dispatch(ChangeLangueRequest(lang))
  
   
   }

   export const ChangeLangueRequest = (lang) => {
    return {
      type: SET_LANGUE ,
      set_langue:lang,
  
    }
  }

  const initialState = {
   
      
    langue:'fr',

  
  
   
   
   
  }

  
  const ChangeLangueReducer = (state = initialState, action) => {
     
    switch (action.type) {
      case SET_LANGUE: return {
        ...state,
        langue:action.set_langue,
        
       
     
      }
     
     
      default:{
        return {
        
          ...state
        
        }
      
      }
    }
  }
  
  export default  ChangeLangueReducer