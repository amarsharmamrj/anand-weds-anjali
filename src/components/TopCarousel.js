import { Grid } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assests/carousel/carousel1.jpeg'
// import image2 from '../assests/carousel/carousel2.jpeg'
// import image3 from '../assests/carousel/carousel3.jpeg'
// import image4 from '../assests/carousel/carousel4.jpeg'
// import image5 from '../assests/carousel/carousel5.jpeg'
// import image6 from '../assests/carousel/carousel6.jpeg'

const TopCarousel = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12}>
                <div className="top-carousel">
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={2500}
                        dynamicHeight={true}
                        showThumbs={false}
                        stopOnHover={false}
                        // animationHandler='fade'
                        emulateTouch={true}
                    >
                        <div>
                            <img src={image1} alt="" className="carousel-image" />
                        </div>
                        {/* <div>
                            <img src={image2} alt="" />
                        </div>
                        <div>
                            <img src={image3} alt="" />
                        </div>
                        <div>
                            <img src={image4} alt="" />
                        </div>
                        <div>
                            <img src={image5} alt="" />
                        </div> */}
                        {/* <div>
                            <img src={image6} alt="" />
                        </div> */}
                    </Carousel>
                    <div className="overlay"></div>
                    <div className="center-heading">
                            <h1>Anand weds Anjali</h1>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default TopCarousel;