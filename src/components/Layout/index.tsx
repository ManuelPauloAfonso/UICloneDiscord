import React from 'react'

import {Grid} from './style'
import ServerList from '../ServerList'
import ServerNames from '../ServerNames'
import ChanneInfo from '../ChanneInfo'
import ChannelList from '../ChannelList'
import UserInfo from '../UserInfo'
import UserList from '../UserList'
import ChannelData from '../ChannelData'

const Layout: React.FC = () => {
    return(
        <Grid>
            <ServerList />
            <ServerNames />
            <ChanneInfo />
            <ChannelList />
            <UserInfo />
            <ChannelData />
            <UserList />
        </Grid>
    )
}
export default Layout;