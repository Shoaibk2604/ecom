import first from '../Assets/offer1.jpg'
import second from '../Assets/offer2.jpg'
import third from '../Assets/offer3.jpg'
const Offer = ()=>{
    return(<div className="offer-contain">
            <h5>Latest Offers</h5>
            <div className='wrapper'>
            <div className="offer-box">
                <a href="#">
                <img src={first} alt="" />
                </a>
            </div>
            <div className="offer-box">
                <a href="#">
                <img src={second} alt="" />
                </a>
            </div>
            <div className="offer-box">
                <a href="#">
                <img src={third} alt="" />
                </a>
            </div>
            </div>
    </div>)
}
export default Offer