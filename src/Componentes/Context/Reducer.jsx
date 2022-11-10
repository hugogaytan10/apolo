import { types } from './Types.jsx';
export const appReducer = (state, action) => {
    const { payload, type } = action;
    switch(type){
        case types.usuario:
            return{
                ...state,
                usuario: payload
            }
        default:
            return state
    }
}