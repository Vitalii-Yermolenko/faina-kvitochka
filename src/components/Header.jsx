import { MainMenu } from "./MainMenu"
import { Basket } from "./Basket"
import { BorderLine } from "./BorderLine"
import { Box } from "@mui/material"
import { Search } from "./Search"



export function Header() {

    
        return (
            <div>
                <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <div>Logo</div>
                <MainMenu/>
                <Search/>
                <Basket/>
                </Box>
                <BorderLine/>
            </div>
        )
    }