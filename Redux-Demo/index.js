const redux = require('redux');
// const { default: logger } = require('redux-logger');
const reduxLogger = require('redux-logger')


const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();



//action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action creator
function buyCake(){
return {
    type: BUY_CAKE,
    info: "first action"
}
}

function buyIcrecream(){
    return {
        type: BUY_ICECREAM,
        info: "second action"
    }
    }

//(previousState, action) => newState

// const initialState = {
//     numOfCakes:10,
//     numOfIcecreams:20
// }

const initCakeState = {
    numOfCakes:10
    
}

const initIcecreamState = {
    numOfIcecreams:20
    
}

// const reducer = (state = initialState, action) => {
//  switch(action.type){

//      case BUY_CAKE:
//          return {
//              ...state,
//              numOfCakes: state.numOfCakes - 1
//          }
//     case BUY_ICECREAM:
//         return {
//             ...state,
//             numOfIcecreams: state.numOfIcecreams - 1
//             }
//      default:
//          return state   
    
//  }
// }

const cakeReducer = (state = initCakeState, action) => {
    switch(action.type){
   
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state   
       
    }
   }

   const icecreamReducer = (state = initIcecreamState, action) => {
    switch(action.type){
       case BUY_ICECREAM:
           return {
               ...state,
               numOfIcecreams: state.numOfIcecreams - 1
               }
        default:
            return state   
       
    }
   }

const rootReducer = combineReducers
({
    cake : cakeReducer,
    icecream : icecreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(
                    ()=>{}
               );

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcrecream())
store.dispatch(buyIcrecream())
unsubscribe()



