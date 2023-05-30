import { useSelector } from "react-redux";
import { newsSelector } from "../../redux/selectorts";
import { Box, Grid } from "@mui/material";
import { ItemNews } from "./ItemNews";

export function ListNews() {
  const newsData = useSelector(newsSelector);

  if (!newsData) {
    return <div>No News</div>;
  }
  return (
    <Grid container>
      {newsData.map((news) => (
        <Grid item xs={3} sx={{ m: 2 }} key={news.id_news}>
          <ItemNews news={news} />
        </Grid>
      ))}
    </Grid>
  );
}