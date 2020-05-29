import {GET_WALLETS, DELETE_WALLET} from '../actions/types'
const initalState = {
    wallets:[]
}

export default function (state = initalState, action) {
    switch (action.type) {

        case GET_WALLETS:   
            return {...state,wallets:action.payload}

        case DELETE_WALLET:
            return{...state,wallets:state.wallets.filter(x=>x.id!==action.payload)}    

        default:
            return state;
    }
}