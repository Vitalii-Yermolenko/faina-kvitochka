import { Box ,Button, Grid, Paper, Typography, Card, CardMedia} from "@mui/material";


export function ItemMainPage(product){
    const { id, name, image, size, weight, count, collection, form} = product.product;
    console.log(name);

    return(
        <Box data-id={id} sx={{border:'solid 2px black', borderRadius:'12px',p:'4px' }}>
            <Box>
                <Typography variant="h5">{name}</Typography>
            </Box>
            <Grid container> 
            <Grid item xs={6}>
                <Card >
                    <CardMedia
                        component="img"
                        alt={name}
                        height="200"
                        image={image}
                        title={name}
                    />
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{p:'8px'}}>
                    <Typography>Прикраса з колеції: {collection}</Typography>
                    <Typography>Розмір: {size} см</Typography>
                    <Typography>Вага: {weight} г</Typography>
                    <Typography>Форма: {form}</Typography>
                    <Typography>Кількість: {count} од.</Typography>
                    <Button>Детальніше</Button>
                </Paper>
                {count !== 0 ? 
                <Button>Додати до кошика</Button> 
                : 
                <Button>Бажаю під замовлення</Button>
                }
            </Grid>
            </Grid>

        </Box>
    )
}