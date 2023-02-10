import React from 'react'
import { MessangerLayout } from './layout'
interface MessangerProps extends React.PropsWithChildren{}

export const Messanger:React.FunctionComponent<MessangerProps> =(props):JSX.Element=>{
    return(<MessangerLayout/>)
}