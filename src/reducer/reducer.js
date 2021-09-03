
const reducer = (state,action)=>{
    switch(action.type){
        case "CHANGE_HEADING":
            return{
                ...state,
                heading:action.payload
            }

        case 'SET_USER':
            return{
                ...state,
                dashUser:action.payload
            }
            case 'SET_CREDITS':
                localStorage.setItem("credits",action.payload)
                return{
                    ...state,
                    credits:action.payload
                    
                }
            default:
                return state 
    }

}

export default reducer