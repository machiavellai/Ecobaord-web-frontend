import React from "react";
import overlayVector from "../../assets/images/overlay-vector.svg";
import { useHistory } from "react-router-dom";

export default function SignupOverlay() {
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic

    // Redirect to another screen or route
    history.push("/login");
  };
  return (
    <div className="row mx-5 px-5">
      <h1 className="display-1 fw-bold text-primary">
        <span className="text-secondary">Sign</span>Up
        <span className="text-secondary">.</span>
      </h1>
      <h4>Welcome to Inhires !</h4>
      {/* <div className="col-md d-flex justify-content-center align-items-center"> */}
      {/* <section id="job-advert-search"> */}
      <form
        className=" row p-3 my-5 d-flex justify-align-items-center align-items-center rounded-2 shadow rounded-2"
        onSubmit={handleFormSubmit}
      >
        <div class="d-flex flex-column ">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="form-control"
            className="form-control"
            placeholder="Username"
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            className="form-control"
            placeholder="Email"
          />

          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            className="form-control"
            placeholder="Password"
          />

          <button type="submit" class="btn btn-primary mt-3">
            Sign Up
          </button>
        </div>
      </form>
      {/* <form className=" row p-3 my-5 d-flex justify-align-items-center align-items-center rounded-2 shadow rounded-2">
            <div className="input-group1">
              <i className="bi bi-briefcase align-self-center text-muted" />
              <input
                type="search"
                className="form-control border-0 shadow-none"
                placeholder="Search for job title"
                aria-label="job title"
              />
            </div>
            <div className="input-group2">
              <i className="bi bi-geo-alt align-self-center text-muted" />

              <input
                type="search"
                className="form-control border-0 shadow-none"
                placeholder="Search for city"
                aria-label="city"
              />
              <button className="btn btn-primary p-3 rounded" type="submit">
                <i className="bi bi-search align-self-center me-1" /> Find
              </button>
            </div>
          </form> */}
      {/* </section> */}
      {/* </div> */}
      <div className="col-md">
        <img src={overlayVector} alt="hrms project" />
        <a href="https://www.freepik.com/vectors/business" className="d-none">
          Business vector created by katemangostar - www.freepik.com
        </a>
      </div>
    </div>
  );
}
