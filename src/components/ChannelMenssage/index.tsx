import React from 'react'

import {Container, Avatar, Menssage, Header, Content} from './style'
export {Mention} from './style'

export interface Props{
    actor: string,
    date: string,
    content: string | React.ReactElement | React.ReactNode,
    hasMention?: boolean,
    isBot?: boolean 
}


const ChannelMenssage: React.FC<Props> = ({actor, date, content, hasMention, isBot}) => {
    return(
        <Container className={hasMention ?  'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''} />
            <Menssage>
                <Header>
                    <strong>{actor}</strong>
                    {isBot && <span>Bot</span>}
                    <time>{date}</time>
                </Header>
                <Content>
                    {content}
                </Content>
            </Menssage>
        </Container>
    )
}
export default ChannelMenssage;