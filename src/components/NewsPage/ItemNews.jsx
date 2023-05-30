import { Box, Typography, Card, CardMedia } from "@mui/material";

export function ItemNews(news) {
  const { id_news, title, text, img } = news.news;

  return (
    <Box data-id={id_news}>
      <Typography variant="h5">{title}</Typography>
      <Card>
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={img}
          title={title}
        />
      </Card>
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
}