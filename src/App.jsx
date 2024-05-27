import "./App.css";
import Nav from "./components/nav/Nav";
import Head from "./components/head/Head";
import Body from "./components/body/Body";
import Resturant from "./components/resturant/Resturant";
import Work from "./components/work/Work";
import Banner from "./components/banner/Banner";
import LastBaner from "./components/lastBanner/LastBaner";
// import Demo from "./components/Demo/Demo";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Nav />
      <Head />
      <Body/>
      <Resturant/>
      <Work/>
      <Banner/>
      {/* <Demo/> */}
      <LastBaner/>
      <Footer/>
    </>
  );
}

export default App;
