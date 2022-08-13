import Handbags from '../Assets/catbag.jpeg'
import Decoration from '../Assets/decocat.jpeg'
import homedeco from '../Assets/key.jpeg'
import gifts from '../Assets/gift.jpeg'
import chocolate from '../Assets/choco.jpg' 
import tshirt from '../Assets/TSHIRT.jpeg'
const CategoryList = () =>{
    return(<div className="category-contain">
        <div className="row">
        <div className="col-md-4 cat-box">
            <a href="#"><img src={Handbags} alt=""/>
            <h6>HAND BAGS</h6></a>
        </div>
        <div className="col-md-4 cat-box">
            <a href="#"><img src={Decoration} alt="" />
            <h6>DECORATION</h6></a>
        </div>
        <div className="col-md-4 cat-box">
            <a href="#"><img src={homedeco} alt="" />
            <h6>HOME DECORATION</h6></a>
        </div>
        <div className="col-md-4 cat-box">
            <a href="#"><img src={gifts} alt="" />
            <h6>HAND MADE GIFTS</h6></a>
        </div>
        <div className="col-md-4 cat-box">
            <a href="#"><img src={chocolate} alt="" />
            <h6>HAND MADE CHOCOLATES</h6></a>
        </div>
        <div className="col-md-4 cat-box">
            <a href="#"><img src={tshirt} alt="" />
            <h6>T-SHIRTS</h6></a>
        </div>
        </div>
    </div>)
}
export default CategoryList;