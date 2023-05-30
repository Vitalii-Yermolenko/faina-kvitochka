import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, IconButton } from '@mui/material';


export function Basket(){

    return(
        <div>
            <IconButton>
                    <ShoppingCartIcon sx={{ margin: '16px' }} fontSize="medium" color='primary' />
            </IconButton>
            <Button/>
        </div>
    )
}