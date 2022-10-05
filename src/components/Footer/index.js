import React from "react";
import {BottomNavigation, Box, Link, } from "@mui/material"
import {GitHub, Instagram, LinkedIn} from '@mui/icons-material';



export default function Footer (){
    return (
        <Box sx={{ position: 'fixed', bottom: 0, left:0, right:0, backroundColor: 'black', alignItems:'center'}} elevation={3}>
            <BottomNavigation sx={{justifyContent:'space-between'}}>
                <Link href='https://github.com/jmonty94' sx={{alignItems:'center', m: 'auto'}}><GitHub></GitHub></Link>
                <Link href="https://www.linkedin.com/in/james-montgomery-b8b8681b2/" sx={{alignItems:'center', m: 'auto'}}><LinkedIn></LinkedIn></Link>
                <Link href="https://www.instagram.com/jmonty94/" sx={{alignItems:'center', m: 'auto'}}><Instagram></Instagram></Link>
            </BottomNavigation>
        </Box>
    )
}