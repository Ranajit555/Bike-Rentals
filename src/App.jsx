import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="base" className="h-screen w-screen">
      <div id="containt_div" className="h-[100%] w-[100%]">
        {/* <div id="head" className="h-[18%] w-[100%] fixed">
          <Header />
        </div> */}
        <div id="containt" className=" flex-col h- w-[100%]">
          <Container />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
