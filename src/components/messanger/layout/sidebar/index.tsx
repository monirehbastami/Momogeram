import React from 'react'
import { ChatList } from './chatlist'
import { SearchList } from './searchlist'
interface SidebarProps extends React.PropsWithChildren{}

export const Sidebar:React.FunctionComponent<SidebarProps> =(props):JSX.Element=>{
    return(<>
            <div className='h-10'>
                <SearchList />
            </div>
            <div className='h-[calc(100vh-150px)] pt-2 overflow-y-scroll flex flex-col gap-2'>
                <ChatList />
            </div>
        
    </>)
}