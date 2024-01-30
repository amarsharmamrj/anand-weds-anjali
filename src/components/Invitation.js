import image from '../assests/flowers/couple-gif.gif'
import Heading from './Heading'
const Invitation = () => {
    return (
        <div className="invitation-container">
            <div class="invitation-card">
                <div className="heading" style={{margin: '0rem'}}>
                    <h1>Save the Date</h1>
                </div>
                <h6>for the wedding of</h6>
                <h2>Anand & Anjali</h2>
                 <h5>On</h5>
                <h3> 03 March, 2024</h3>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Invitation