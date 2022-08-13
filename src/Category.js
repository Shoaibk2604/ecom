import "./App.css";
import Header from "./Components/header";
import Banner from "./Components/banner";
import Filter from "./Components/Cat-filter";
import Footer from "./Components/footer";

function category() {
  return (
    <div className="Category-p">
      <Header />
      <Banner />
      <Filter />
      <Banner/>
      <Footer/>
    </div>
  );
}
export default category;
