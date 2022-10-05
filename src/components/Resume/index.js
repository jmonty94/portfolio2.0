import React, {useState} from "react";
import { Box, Button, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import SinglePage from "./pdfviewer";
import resumePDF from './../../assets/jamesMontgomeryFullStackDeveloper.pdf'
import useWindowSize from "./useWindowSize";
  
export default function Resume() {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('jamesMontgomeryFullStackDeveloper.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `jamesMontgomeryFullStackDeveloper.pdf`;
                alink.click();
            })
        })
    }
    const windowSize = useWindowSize();

    const smallWindow = windowSize.width >= 700
    
    return (
        <Box sx={{textAlign: 'center'}}>
                {smallWindow ? (
                    <SinglePage pdf={resumePDF}></SinglePage>
                ) : (
                    <Typography sx={{color: 'white'}}>
                        Sorry your screen is too small at the moment to display the PDF. Feel free to download a copy or go to the contact page to request me to email it to you.
                    </Typography>
                )}
                <Button variant="contained" onClick={onButtonClick} sx={{mx: 'auto'}}>
                    <DownloadIcon/>
                </Button>
            </Box>
    );
};