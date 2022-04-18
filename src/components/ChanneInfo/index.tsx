import React from 'react'

import {Container, Description, HastagaIcon, Separator, Title } from './style'

const ChanneInfo: React.FC = () => {
    return(
        <Container>
            <HastagaIcon />
            <Title>chat livre</Title> 
            
            <Separator />
        <Description>Canal Aberto para Conversas</Description>
        </Container>
    )
}
export default ChanneInfo; 