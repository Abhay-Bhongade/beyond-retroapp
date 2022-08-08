const INIT_STATE = {
    carts : []
}
const Reducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADDDATA" : 
        const ItemIndex = state.carts.findIndex((ele)=>ele.id === action.payload.id)
        if(ItemIndex >=0){
            state.carts[ItemIndex].qnty +=1
        }else{
            const temp = {...action.payload,qnty:1}
            return{
                ...state,
                carts : [...state.carts,temp]
            }
        }

        case "RMV_ITEM" : 
        const data = state.carts.filter((ele)=> ele.id !== action.payload)
        return {
            ...state,
            carts:data
        }
      

        default : return state
    }
}

export default Reducer;