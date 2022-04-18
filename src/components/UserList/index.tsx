import React from 'react'

import {Container, Role, Use, Avatar} from './style'

interface UserProps {
    nickName: string,
    isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({nickName, isBot}) => {
    return(
        <Use>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickName}</strong>
            {isBot && <span>Bot</span>}
        </Use>
    )
}

const UserList: React.FC = () => {
    return(
        <Container>
            <Role>Disponivel 1</Role>
            <UserRow nickName="Manuel Afonso" />
            <Role>Offline 19</Role>
            <UserRow nickName="Pedro Puna" isBot />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />
            <UserRow nickName="Manuel Afonso" />

            
        </Container>
    )
}
export default UserList;