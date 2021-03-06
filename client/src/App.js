
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/Landing";
import NoMatch from "./components/NoMatch";
import FetchUser from "./components/FetchUser";
import Profile from "./components/Profile";
import ShowQuiz from "./components/ShowQuiz";
import TakeQuiz from "./components/TakeQuiz";
import List from "./components/StudentClasses/StudentList";
import ResultsByQuiz from "./components/results/ResultsByQuiz";
import Results from "./components/results/Results";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import QuizTimeOut from './components/QuizTimeOut'
import "./App.css";

import StudentResults from "./components/studentResults/StudentResults";

const App = () => (
  <>
    <FetchUser>
      <Switch>
        <Route exact path="/" component={Landing} />
        <ProtectedRoute exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/resultsbyquiz" component={ResultsByQuiz} />
        <ProtectedRoute exact path="/results" component={Results} />
        <ProtectedRoute exact path="/classes" component={List} />
        <Route exact path="/quizzes/:id/quiz" component={TakeQuiz} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/teacher" component={Register} />
        <Route exact path="/quizbuilder/:id" component={ShowQuiz} />
        <Route exact path="/graded/" component={StudentResults} />
        <Route exact path="/QuizTimeOut" component={QuizTimeOut} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
    </>

);

export default App;
