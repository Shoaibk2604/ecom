import logo from '../Assets/logo.png'
import playStore from '../Assets/Store.png'
import appStore from '../Assets/AppStore.png'
import fbicon from '../Assets/Fb.png'
import twitter from '../Assets/Tr.png'
import youtube from '../Assets/Yt.png'
import insta from '../Assets/IG.png'
const Footer = ()=> {
    return (<div className="foot-contain">
        <div className="foot-logo">
            <img src={logo} alt="" width='190px' />
        </div>
        <div className='row'>
        <div className='col-md-3 Foot-p'>
        <h6>Shortcuts</h6>
        <p><a href=""><span>Offers</span></a></p>
        <p><a href=""><span>Track  Your Order</span></a></p>
        <p><a href=""><span>Contact Us</span></a></p>
        <p><a href=""><span>Refund Policy</span></a></p>
        <p><a href=""><span>Shipping Policy</span></a></p>
        <p><a href=""><span>Terms of service</span></a></p>
        </div>
        <div className='col-md-3 Foot-p'>
        <h6>Useful Links</h6>
        <p><a href=""><span>Our Story</span></a></p>
        <p><a href=""><span>Blog</span></a></p>
        <p><a href=""><span>Privacy Policy</span></a></p>
        <p><a href=""><span>Terms & Conditions</span></a></p>
        <p><a href=""><span>Cancellation Policy</span></a></p>
        <p><a href=""><span>Returns & Refunds</span></a></p>
        <p><a href=""><span>Shipping Policy</span></a></p>
        </div>
        <div className='col-md-3 Foot-p'>
        <h6>Contact us</h6>
        <p><a href=""><span>+91-9876543210</span></a></p>
        <p><a href=""><span>support@mail.com</span></a></p>
        <p><a href=""><span>Location</span></a></p>
        </div>
        <div className='col-md-3 Foot-p'>
        <h6>Available On The</h6>
        <p><a href="" className='d-block'><img src={playStore} alt="" /></a></p>
        <a href="" className='d-block'><img src={appStore} alt="" width='135px'/></a>
        <a href="" className='icon-m'><img src={fbicon} alt="" /></a>
        <a href="" className='icon-m'><img src={twitter} alt="" /></a>
        <a href="" className='icon-m'><img src={insta} alt="" /></a>
        <a href="" className='icon-m'><img src={youtube} alt="" /></a>
        </div>
        </div>
    </div>);
}
export default Footer;