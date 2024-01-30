import { Grid } from "@mui/material"
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Heading from "./Heading";

const Countdown = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} mb={6}>
                <div className="center">
                    <Heading name="Days to Go" />
                    <FlipClockCountdown
                        digitBlockStyle={{ width: '2.2rem', fontSize: '2.4rem', backgroundColor: '#00c4ff' }}
                        labelStyle={{ color: '#07a4d3', fontWeight: '500'}}
                        style={{ justifyContent: 'center' }}
                        to={new Date('2024-03-04').getTime() + 5 * 3600 * 1000 + 5000} />
                </div>
            </Grid>
        </Grid>
    )
}

export default Countdown