import React from 'react'

import {Container, HashtagIcon, Invite, SettingsIcon } from './style'

export interface Props {
channelNames: string;
selected?: boolean;

}

const ChannelButton: React.FC<Props> = ({channelNames, selected}) => {
    return(
        <Container className={selected ? 'active' : ''}>
           <div>
                <HashtagIcon />
                <span>{channelNames}</span>
            </div> 
            <div>
                <Invite />
                <SettingsIcon />
            </div>
        </Container>
    )
}
export default ChannelButton;