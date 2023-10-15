import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Leader from "./pages/Leader";

import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import QuizCatalog from "./pages/QuizCatalog";
import Quiz from "./pages/Quiz";
import QuizAttempted from "./pages/QuizAttempted";
import Footer from "./components/Footer";
import Navigation from "./components/navigation";

import Hugging from "./pages/Hugging";
import Test from "./pages/Test";
import Display from "./pages/Display";
import Navbar1 from "./components/Navbar1";

import Instructions from "./pages/Instructions";
import Analyze from "./pages/Analyze";
import Story from "./pages/Story";
import StoryView from "./pages/StoryView";

import Loan from "./pages/Loan";
import Job from "./pages/Jobs";

import Progress from "./pages/Progress";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar1 /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quizzes" element={<QuizCatalog />} />
          <Route path="/quiz/:name" element={<Quiz />} />
          <Route path="/quiz/attempted" element={<QuizAttempted />} />

          <Route path="/login" element={<Login />} />
          <Route path="/hugging" element={<Hugging />} />
          <Route path="/test" element={<Test />} />
          <Route path="/display" element={<Display />} />

          <Route path="/register" element={<Register />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/story" element={<Story />} />
          <Route path="/story/:id" element={<StoryView />} />

          <Route path="/loans" element={<Loan />}></Route>
          <Route path="/jobs" element={<Job />}></Route>
          <Route path="/progress" element={<Progress />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
