import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getNewsThunk } from "../../redux/News/getNewsThunk";
import { ListNews } from "../../components/NewsPage/ListNews";




export function NewsPage(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewsThunk());
      }, [dispatch]);


    return(
        <Box>
            <Typography variant="h3" sx={{textAlign:'center'}} >
                Новини
            </Typography>
            <Box>
                <ListNews/>
            </Box>
        </Box>
    )
}