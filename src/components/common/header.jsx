import Logo from '../../logo.svg'
import {Grid,  Typography} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SearchBox from "../SearchBox/SearchBox";


const Header = () => {

    return(
        <Grid container>
            <Grid item xs={12} height={80} sx={{boxShadow: "0 0 5px 0 rgba(0 , 0 , 0 , 0.3)"}}>
                <Grid item xs={6} display={"flex"} alignItems={"center"} justifyContent={"start"} height={'100%'}>
                    <img src={Logo} alt={'logo'} height={50}/>
                    <Typography sx={{color: 'black' , fontSize:18 , fontWeight:'bold'}}>
                        {"Contact"}
                    </Typography>
                    <Grid item marginX={1} xs={12} display={"flex"} alignItems={"center"} justifyContent={"center"} height={'100%'}>
                        <IconButton size="large" aria-label="search" color="inherit">
                            <SearchBox/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header;