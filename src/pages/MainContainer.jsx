import { Outlet } from 'react-router-dom';
import {Header} from '../components/Header';
import { Footer } from '../components/Footer';
import { Box, Container, Hidden } from '@mui/material';





export function MainContainer() {

    return (
        <Box sx={{minWidth:'1200px', maxWidth:'1930px'}}>
            <Header/>
            
            <Outlet />

           <Footer/>         
        </Box>

    )
}
