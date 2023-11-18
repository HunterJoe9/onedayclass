import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/log-in" element={<Main />} />
        <Route path="/sign-up" element={<Main />} />
        <Route path="/create" element={<Main />} />
        <Route path="/:postId" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;