const actions={
    INCREMENT:"INCREMENT",
    DECREMENT :"DECREMENT",
    RESET:"RESET"
}
function reducer(state,action){
    switch (action.type) {
        case actions.INCREMENT:
            return{
                count:state.count+1
            }
        case actions.DECREMENT:
            return{
                count:st
            }    
    }
}
function Actionstate(){
}