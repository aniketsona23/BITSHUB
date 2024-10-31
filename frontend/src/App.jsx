import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoubtFull from "./Components/DoubtFull";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/doubt/:id" element={<DoubtFull />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
