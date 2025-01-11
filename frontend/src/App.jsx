import Home from "./pages/Home";
import Login from "./pages/Login";
import Forum from "./pages/Forum";
import Layout from "./Components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoubtView from "./pages/DoubtView";
import PostDoubt from "./pages/PostDoubt";
import { DoubtContext } from "./contexts/DoubtContext";
import MyDoubt from "./pages/MyDoubt";
import { VoteContext } from "./contexts/VotesContext";

function App() {
    return (
        <DoubtContext>
            <VoteContext>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/user" element={<Layout />}>
                            <Route path="my" element={<MyDoubt />}></Route>
                            <Route index element={<Home />} />
                            <Route
                                path="forum/:subjectId"
                                element={<Forum />}
                            />
                            <Route
                                path="forum/:subjectId/:doubtId"
                                element={<DoubtView />}
                            />
                            <Route
                                path="forum/:subjectId/post"
                                element={<PostDoubt />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </VoteContext>
        </DoubtContext>
    );
}

export default App;
