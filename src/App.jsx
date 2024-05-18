import "./App.css";
import Nav from "./components/nav/Nav";
import Head from "./components/head/Head";
import Body from "./components/body/Body";
import Resturant from "./components/resturant/Resturant";
import Work from "./components/work/Work";
function App() {
  return (
    <>
      <Nav />
      <Head />
      <Body/>
      <Resturant/>
      <Work/>
    </>
  );
}

export default App;
