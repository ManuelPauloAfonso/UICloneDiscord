import React from 'react'
import ChannelButton from '../ChannelButton'
import {Container, Category, AddCategoryIcon} from './style'

const ServerNames: React.FC = () => {
    return(
        <Container>
            <Category>
                <span> Canais de Texto</span>
                <AddCategoryIcon />
            </Category>
            
            <ChannelButton channelNames="chat-livre" />
            <ChannelButton channelNames="trabalho" />
            <ChannelButton channelNames="diversão" />
            <ChannelButton channelNames="bate papo" />
            <ChannelButton channelNames="cargos" />
            <ChannelButton channelNames="reunião" />

    
        </Container>
    )
}
export default ServerNames;