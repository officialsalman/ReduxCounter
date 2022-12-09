const initialState={
    counter:0
}

export const counterReducer=(state=initialState,action)=>{
    if(action.type==="Add"){
        return {counter:state.counter + 1};
    }
    else if(action.type==="SUB"){
        return {counter:state.counter - 1}; 
    }
    else{
        return state
    }

}