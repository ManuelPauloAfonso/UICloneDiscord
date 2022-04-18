import React from 'react'

import {Container, Profile, Avatar, UserData, Icons, MicIcon, SettingsIcon, Headsett} from './style'

const UserInfo: React.FC = () => {
    return(
        <Container>
            <Profile>
                <Avatar />
                 <UserData> 
                     <span>#2765</span>
                     <strong>Manuel Paulo</strong>

                     
                 </UserData>
            </Profile>
           <Icons >
                <MicIcon />
                <Headsett />
                <SettingsIcon />
            </Icons>
        </Container>
    )
}
export default UserInfo;