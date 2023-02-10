import React from 'react';
import { Messanger } from '../components/messanger'

interface HomepageProps extends React.PropsWithChildren{
    
}

export const Homepage: React.FunctionComponent<HomepageProps> = (props):JSX.Element => {
    return ( 
        <Messanger />
     );
}