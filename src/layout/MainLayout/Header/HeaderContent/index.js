// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { GithubOutlined } from '@ant-design/icons';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


// ==============================|| HEADER - CONTENT ||============================== //
import { Chat } from '@pushprotocol/uiweb';
import Utils from 'utils/utils';

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
const handleClick=()=>{
    console.log("Switching to Dark Mode")
    console.log((Utils.getMyAddress()))
}

    return (
        <>
            {!matchesXs && <Search />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}
            <IconButton sx={{ ml: 1 }} onClick={handleClick} color="inherit">
         <Brightness4Icon />
      </IconButton>
            <Notification />
            <Chat
                account="0xc5b9ae9f86684433288abfab2bb725ffe98879e4" //user address
                supportAddress="0x2C0a5B16b9C51ac466ee50baF95b6176Fb9f2b36" //support address
                apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
                env="staging"
            />
            {!matchesXs && <Profile />}
            {matchesXs && <MobileSection />}
        </>
    );
};

export default HeaderContent;
