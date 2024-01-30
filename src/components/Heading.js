import flower from '../assests/flowers/flower6.png'

const Heading = (props) => {
    return (
        <div className="heading">
            <h1>{props.name}</h1>
            <img src={flower} alt="" />
        </div>
    )
}

export default Heading