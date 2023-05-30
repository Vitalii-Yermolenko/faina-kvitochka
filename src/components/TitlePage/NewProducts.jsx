import { Box,Typography } from "@mui/material";
import { ListMainPage } from "./ListMainPage";
import { useSelector } from "react-redux";
import { topJewelriesSelector } from "../../redux/selectorts";
import { useState } from "react";


export function NewProducts(){
    const topCollections = useSelector(topJewelriesSelector);
    const [pageTopJewelries, setPageTopJewelries]=useState(1);



    return(
        <Box>
            <Typography variant="h4" sx={{textAlign:'center'}}>
                Новинки 
            </Typography>
            <ListMainPage
            page={pageTopJewelries}
            setPage={setPageTopJewelries} 
            products={topCollections}/>
        </Box>
    )
}

