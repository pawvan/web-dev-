const actions={
    INCREMENT:"INCREMENT",
    DECREMENT :"DECREMENT",
    RESET:"RESET"
}
export function reducer(state,action){
    switch (action.type) {
        case actions.INCREMENT:
            return{
                count:state.count+1
            }
        case actions.DECREMENT:
            return{
                count:state.count-1
            }    
        case actions.RESET:
            return{
                count:0
            }    

        default:
            throw new Error(`
               Invalid {action.type}`)    
    }
}
