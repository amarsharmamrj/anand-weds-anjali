import { Grid } from "@mui/material"
import Heading from "./Heading"
import thankyouImage from '../assests/flowers/thankyou.png'
import bottomImage from '../assests/carousel/bottom.jpeg'

const ThankYou = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={6}>
                <div class="thank-you">
                    <div className="heading" style={{ margin: '0rem' }}>
                        <h1>Thank You</h1>
                    </div>
                    <img src={thankyouImage} alt="" />
                    <div class="overlay"></div>
                </div> 
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <div class="thank-you">
                    <img  className="bottom-image" src={bottomImage} alt="" />
                    <div class="overlay"></div>
                </div> 
            </Grid>
        </Grid>
    )
}

export default ThankYou