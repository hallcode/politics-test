import ReactDOM from "react-dom/client";
import Test from "./components/Test/Test";
import Wrapper from "./components/Wrapper";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./components/pages/Results";
import THEME from "./utils/theme";

import { MantineProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

function App() {
  const userScheme = useColorScheme();
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ ...THEME, colorScheme: userScheme }}
    >
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="test" element={<Test />} />
            <Route path="results" element={<Results />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </MantineProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("swiper"));
root.render(<App />);
