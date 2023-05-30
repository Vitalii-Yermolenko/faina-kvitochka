import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ItemMainPage } from './ItemMainPage';

export function ListMainPage({ products, page, setPage }) {
  if (!products) {
    return <div>No Items</div>;
  }

  return (
    <Box sx={{ overflowX: 'auto', maxWidth: '100%' }}>
      <Carousel 
        showArrows
        emulateTouch
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        selectedItem={page}
        onChange={setPage}
        slidesToShow={3} 
        centerMode 
        centerSlidePercentage={33.4} 
        swipeScrollTolerance={5} 
      >
        {products.map((product) => (
                    <Box sx={{ mx: 2 }} key={product.id}>
                    <ItemMainPage product={product} />
                  </Box>
        ))}
      </Carousel>
    </Box>
  );
}