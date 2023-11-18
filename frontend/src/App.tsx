import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main";
import SignIn from "./pages/Signin";
import Signup from "./pages/Siginup";
import Create from "./pages/create";
import Detail from "./pages/detail";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:postId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;