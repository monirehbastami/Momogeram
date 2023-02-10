
import { AxiosResponse } from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Contacts } from '../../../../../@types/api.types';
import { ChatItems } from './chatitems'
import { AXIOS } from '../../../../../config/axios.config'
import { ApiRoutes } from '../../../../../constant/api.route';
import { AppContext } from '../../../../../context/store';
import { ContextActionTypes } from '../../../../../@types/context/context.types';
interface ChatListProps extends React.PropsWithChildren{
 
}

export const ChatList:React.FunctionComponent<ChatListProps> =():JSX.Element=>{
    const {state,dispatch} = useContext(AppContext)
    const fetchContacts = useCallback(async () => {
        const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(
          ApiRoutes.GetContacts
        );
        if (response.status === 200) {
          console.log(response.data)
          dispatch({
            type: ContextActionTypes.Get_All_Contact,
            payload:response.data
          })
        }
      }, []);
    
      useEffect(() => {
        fetchContacts();
      }, [fetchContacts]);
      //console.log(state);
   return (
    <>
    {state.contacts.searchList.length === 0 ? (
        state.contacts.contactsList.length === 0 ? (
          <div>فعلا پیامی وجود ندارد ...</div>
        ) : (
          state.contacts.contactsList.map((item) => (
            <ChatItems
              avatar={item.avatar}
              lastmessage={item.lastMessage}
              time={item.time}
              name={item.name}
              key={item.id}
              roomId={item.roomId}
              isActive={item.isActive}
            />
          ))
        )
      ) : (
        state.contacts.searchList.map((item) => (
          <ChatItems
            avatar={item.avatar}
            lastmessage={item.lastMessage}
            time={item.time}
            name={item.name}
            key={item.id}
            roomId={item.roomId}
            isActive={item.isActive}
          />
        ))
      )}
    </>
   )
}
