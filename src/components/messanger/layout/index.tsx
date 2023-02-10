import React, { useContext, useEffect } from 'react'
import { ContextActionTypes } from '../../../@types/context/context.types'
import { AppContext } from '../../../context/store'
import { Main } from './main'
import { SendMessage } from './main/sendmessage'
import { Sidebar } from './sidebar'
interface MessangerLayoutProps extends React.PropsWithChildren{}

export const MessangerLayout:React.FunctionComponent<MessangerLayoutProps> =(props):JSX.Element=>{
    const { state:{messages},dispatch } = useContext(AppContext);
    useEffect(()=>{
        dispatch({
            type:ContextActionTypes.Get_current_Contact,
            payload:messages.roomId
        })
    },[])
    console.log(messages.roomId)
    return(<>
    <div className='flex flex-row h-[calc(100vh-105px)]'>
        
        <div className={`${messages.roomId ? 'hidden px-5 md:flex md:flex-col md:flex-[0_0_250px] md:w-1/5 lg:w-[35vw]' : 'w-full px-5 md:flex-[0_0_250px] md:w-[40vw] lg:w-[35vw]'}`}>
            <Sidebar />
        </div>
        <div className={`${messages.roomId ? 'w-full flex flex-col flex-shrink md:flex md:w-4/5' : 'hidden md:flex md:w-4/5 flex-shrink  md:flex-col' }`}>
            <Main />
        </div>
    </div>
    </>
    )
}