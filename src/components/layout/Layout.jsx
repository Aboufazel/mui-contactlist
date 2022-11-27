import {Grid} from "@mui/material";
import Header from "../common/header";
import {Outlet} from "react-router"
import AddContactBtn from "../AddContactBtn/AddContactBtn";
import MyInput from "../PopupForm/PopupForm";


const Layout = ({children}) => {

    return(
        <Grid container>
            <Header/>
            <Grid item xs={12}>
                <Outlet/>
            </Grid>
            <AddContactBtn/>
        </Grid>
    )
}


export default Layout;