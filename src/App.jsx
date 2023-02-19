import GameBoard from "./components/GameBoard";
import { useAuth } from "@arcana/auth-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import ProtectedRoute from "./protectedRoutes";
import "./App.css";
const App = () => {
  const auth = useAuth();
  return (
    <>
      {/* <Header /> */}
      <div className="body">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<MainScreen />}></Route>
            <Route
              path="/gameboardeasy"
              element={
                <ProtectedRoute auth={auth}>
                  <GameBoard speed={200} level={"easy"} />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/gameboardmedium"
              element={
                <ProtectedRoute auth={auth}>
                  <GameBoard speed={100} level={"medium"} />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/gameboardhard"
              element={<GameBoard speed={55} level={"hard"} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
