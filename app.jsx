import ReactDOM from "react-dom/client";
import Test from "./components/Test/Test";
import Wrapper from "./components/Wrapper";

const root = ReactDOM.createRoot(document.getElementById("swiper"));
root.render(
  <Wrapper>
    <Test />
  </Wrapper>
);
