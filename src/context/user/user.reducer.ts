import React from 'react';
import { ContextAction, ContextActionTypes, UserAppState } from '../../@types/context/context.types';

interface UserReducerProps extends React.PropsWithChildren{
    
}


export const UserReducer = (state:UserAppState,action:ContextAction<ContextActionTypes,any>): UserAppState =>{
    switch(action.type){
        case ContextActionTypes.Login_Success:
            state.token = action.payload.token;
            state.username = action.payload.username;
            return state;
        case ContextActionTypes.Log_out:
            state.token='';
            state.username = '';
            return state;
        default:
            return state;
    }
}

export default UserReducer;