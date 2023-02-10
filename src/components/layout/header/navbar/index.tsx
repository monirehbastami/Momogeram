import React,{useState} from 'react'
import {GoThreeBars} from 'react-icons/go'
import defUser from "../../../../assets/img/defUser.jpg"
import { Image } from '../../../base/image'
import {ThemMode} from './mode'
import {IoIosCloseCircleOutline} from 'react-icons/io'
interface NavbarProps extends React.PropsWithChildren{}

export const Navbar:React.FunctionComponent<NavbarProps> =(props):JSX.Element=>{
    const [isClickedBar,setIsClickedBar] = useState(false);
    const [isClickedClose,setisClickedClose] = useState(false);
    console.log(isClickedBar)
    const clickHandler = (e:any,btnname?:string) => {
        if(btnname === 'bar'){
            setIsClickedBar(!isClickedBar);
        }else{
            setisClickedClose(!isClickedClose);
        }
    };
    return(<>
        <GoThreeBars size={26} onClick={(e) => clickHandler(e,'bar')}/>
        <div className={`${
                 ((isClickedBar && !isClickedClose) || ((!isClickedBar && isClickedClose))) ? "absolute top-0 left-0 w-72 h-full backdrop-blur-sm p-2 flex flex-col bg-dark-btnprimary bg-opacity-60 text-dark-heading text-xl z-10 xl:text-2xl" : "hidden w-0"
                } `}>
            <div className='px-2 py-5 flex flex-col justify-between items-start'>
                <IoIosCloseCircleOutline className='self-end' onClick={(e)=>clickHandler(e,'close')} />
                <h1 className='text-2xl uppercase xl:text-3xl'>Momogram</h1>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row items-center gap-2'>
                    <Image src={defUser} alt={"user picture"}  />
                    <h1 className='inline-block'>Monireh Bastami</h1>
                </div>
                    <ThemMode />
            </div>
        </div>
    </>)
}