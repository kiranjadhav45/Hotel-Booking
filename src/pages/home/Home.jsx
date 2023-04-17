import Featured from "../../components/featured/Featured";
import FeaturedPropety from "../../components/featuredPropety/FeaturedPropety";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./Home.css";

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">Browse by property type</div>
        <PropertyList />
        <div className="homeTitle">Homes guests love</div>
        <FeaturedPropety />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default home;
