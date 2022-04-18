import React from 'react'
import ChannelMenssage, {Mention} from '../ChannelMenssage';

import {Container, Message, InputWrapper, Input, InputIcon} from './style'

const ChannelData: React.FC = () => {
    return(
        <Container>
            <Message> 
                <ChannelMenssage 
                    actor='Manuel afonso'
                    date='29/12/2002'
                    content= 'Hoje é o meu dia'
                
                />
                 <ChannelMenssage 
                    actor='Manuel afonso'
                    date='29/12/2002'
                    content= 'Hoje é o meu dia'
                
                />
                 <ChannelMenssage 
                    actor='Manuel afonso'
                    date='29/12/2002'
                    content= 'Hoje é o meu dia'
                
                />
                 <ChannelMenssage 
                    actor='Manuel afonso'
                    date='29/12/2002'
                    content= 'Hoje é o meu dia'
                
                />
                 <ChannelMenssage 
                    actor='Manuel afonso'
                    date='29/12/2002'
                    content= 'Hoje é o meu dia'
                
                />
                 <ChannelMenssage 
                    actor='Manuel afonso'
                    date='29/12/2002'
                    content= 'Hoje é o meu dia'
                
                />
                 <ChannelMenssage 
                    actor='Manuel afonso'
                    date='29/12/2002'
                    content= 'Hoje é o meu dia'
                
                />
                 <ChannelMenssage 
                    actor='Manuel afonso'
                    date='29/12/2002'
                    content= 'Hoje é o meu dia'
                
                />
                 <ChannelMenssage 
                    actor='Manuel afonso'
                    date='29/12/2002'
                    content= 'Hoje é o meu dia'
                
                />
                
                 <ChannelMenssage 
                    actor='Manuel afonso'
                    date='29/12/2002'
                    content= {
                        <>
                            <Mention>Manuel afonso</Mention> pode me adcionar no chat por favor?
                        
                        </>
                    }
                    hasMention
                    isBot
                
                />
                

            </Message>


            <InputWrapper > 
                <Input type="text" placeholder='conversar em chat livre' />
                <InputIcon />
            </InputWrapper>
            
        </Container>
    )
}
export default ChannelData;