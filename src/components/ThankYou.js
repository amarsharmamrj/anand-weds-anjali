import { Grid } from "@mui/material"
import Heading from "./Heading"
import thankyouImage from '../assests/flowers/thankyou.png'

const ThankYou = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12}>
                <div class="thank-you">
                    <div className="heading" style={{ margin: '0rem' }}>
                        <h1>Thank You</h1>
                    </div>
                    <img src={thankyouImage} alt="" />
                </div> 
            </Grid>
        </Grid>
    )
}

export default ThankYou