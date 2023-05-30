import { useEffect } from "react";
import { Box } from "@mui/material";
import { Intro } from "../../components/TitlePage/Intro";
import { NewProducts } from "../../components/TitlePage/NewProducts";
import { TopCollections } from "../../components/TitlePage/TopCollections";
import { TopJewelries } from "../../components/TitlePage/TopJewelries";
import { BorderLine } from "../../components/BorderLine";
import { useDispatch } from "react-redux";
import { getTopJewelriesThunk } from "../../redux/mainPageReducer/getTopJewelriesThunk";


export function TiltlePage(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopJewelriesThunk());
      }, [dispatch]);

    return(
        <Box>
            <Intro/>
            <BorderLine/>
            <NewProducts/>
            <BorderLine/>
            <TopCollections/>
            <BorderLine/>
            <TopJewelries/>
        </Box>
    )
}