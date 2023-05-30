
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, Typography } from '@mui/material';

export function MainMenu() {

  const style = {
    whiteSpace: 'nowrap',
    '&.active': {
      color: 'primary.main'
      // textDecoration: 'underline',
      // textDecorationColor: 'blue',
      // textDecorationThickness: '4px',
      // paddingTop: '8px',
    },
    '&:hover': {
      borderBottom: '1px solid green',
      paddingBottom: '10px',
      boxShadow: '0px 18px 33px -27px rgba(0,0,0,0.75)',
    },
  };

return (
<Box>
<List sx={{display:'flex'}}>
<ListItem
       component={NavLink}
       to="/"
       sx={style}
     >
      <Typography variant='h5'>Головна</Typography>
</ListItem>
<ListItem
       component={NavLink}
       to="/jewelries"
       sx={style}
     >

<Typography variant='h5'>Прикраси</Typography>
</ListItem>
<ListItem
       component={NavLink}
       to="/collections"
       sx={style}
     >

<Typography variant='h5'>Колекції</Typography>
</ListItem>
<ListItem
       component={NavLink}
       to="/about_us"
       sx={style}
     >
<Typography variant='h5'>Про нас</Typography>
</ListItem>
<ListItem 
       component={NavLink}
       to="/delivery"
       sx={style}
     >

<Typography variant='h5'>Доставка і оплата</Typography>
</ListItem>
  <ListItem
        component={NavLink}
        to="/important"
        sx={style}
      >
    <Typography variant='h5'>Важливо для покупця</Typography>
  </ListItem>
  <ListItem
        component={NavLink}
        to="/news"
        sx={style}
      >
    <Typography variant='h5'>Новини</Typography>
  </ListItem>
  <ListItem
        component={NavLink}
        to="/reviews"
        sx={style}
      >
    <Typography variant='h5'>Відгуки</Typography>
  </ListItem>
</List>
</Box>
);
}