import React from 'react'
import ServerButton from '../ServerButton'

import {Container, Separator} from './style'

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome />


            <Separator />

            <ServerButton hasNotification />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton/>
            <ServerButton />
            <ServerButton   mentions={72}/>
            <ServerButton />

        </Container>
    )
}
export default ServerList;