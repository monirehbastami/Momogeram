import React from 'react'
interface FooterProps extends React.PropsWithChildren{}

export const Footer:React.FunctionComponent<FooterProps> =(props):JSX.Element=>{
    return(<>
        <div className='w-full h-[0.3rem] text-sm flex justify-center items-center'>
            <h6 className='pt-3 text-light-heading dark:text-dark-content'>&#169;Monireh Bastami</h6>
        </div>
    </>)
}