import "bootstrap";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CompanyStaffUpdate from "./pages/CompanyStaff/Update/CompanyStaffUpdate";
import Footer from "./layouts/Footer/Footer";
import Signup from "./pages/Home/Signup";
import Login from "./pages/Home/Login";
import Home from "./pages/Home/Home";
import JobAdverts from "./pages/JobAdverts/JobAdverts";
import JobAdvertsAdd from "./pages/JobAdverts/Add/JobAdvertsAdd";
import JobAdvertsVerify from "./pages/JobAdverts/Verify/JobAdvertsVerify";
import JobSeekerCVUpdate from "./pages/JobSeekers/CV/Update/JobSeekerCVUpdate";
// import Navbar from "./layouts/Navbar/Navbar";
import employeeTable from "./pages/Employers/employeeTable";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div id="App" className="d-flex flex-column">
      <Router>
        {/* <Navbar /> */}
        <main>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/employeetable" component={employeeTable} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />

            <Route
              exact
              path="/companystaff/update"
              component={CompanyStaffUpdate}
            />
            <Route exact path="/jobadvert" component={JobAdverts} />
            <Route exact path="/jobadvert/add" component={JobAdvertsAdd} />
            <Route
              exact
              path="/jobadvert/add/verify"
              component={JobAdvertsVerify}
            />
            <Route
              exact
              path="/jobseeker/cv/update"
              component={JobSeekerCVUpdate}
            />
          </Switch>
        </main>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </div>
  );
}

export default App;
