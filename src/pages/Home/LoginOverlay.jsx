import React from "react";
import overlayVector from "../../assets/images/overlay-vector.svg";
import { useHistory } from "react-router-dom";

export default function LoginOverlay() {
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic

    // Redirect to another screen or route
    history.push("/home");
  };

  return (
    <div className="d-flex">
      <div className="flex-grow-1 my-5">
        <img src={overlayVector} alt="hrms project" />
        <a href="https://www.freepik.com/vectors/business" className="d-none">
          Business vector created by katemangostar - www.freepik.com
        </a>
        {/* <img
          src="https://www.freepik.com/vectors/business"
          alt="Background"
          className="img-fluid"
        /> */}
      </div>
      <div
        className="flex-grow-1 d-flex flex-column align-items-center justify-content-center p-5"
        onSubmit={handleFormSubmit}
      >
        <h2 className="mb-4 fw-bold text-primary">LOG IN</h2>
        <form className="w-100">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
            />
          </div> */}
          <button type="submit" className="btn btn-primary">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}

//     <div className="flex h-screen">
//       <div className="w-1/2 flex flex-col justify-center items-center">
//         <h1 className="display-1 fw-bold text-primary">
//           <span className="text-secondary">Login</span>
//           <span className="text-secondary">.</span>
//         </h1>
//         <h4>Welcome to Inhires !</h4>
//         <h4 className="text-primary">Powered by 21SZN group</h4>
//         <div
//           className="w-1/2 bg-cover bg-center"
//           style={{
//             backgroundImage: "https://www.freepik.com/vectors/business",
//           }}
//         >
//           {/* <img src={overlayVector} alt="hrms project" />
//         <a href="https://www.freepik.com/vectors/business" className="d-none">
//           Business vector created by katemangostar - www.freepik.com
//         </a> */}
//         </div>
//         <form
//           className=" row p-3 my-5 mx-5 d-flex justify-align-items-center align-items-center rounded-2 shadow rounded-2"
//           onSubmit={handleFormSubmit}
//         >
//           <div class="d-flex flex-column ">
//             <label for="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               class="form-control"
//               className="form-control"
//               placeholder="Username"
//             />

//             <label for="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               class="form-control"
//               className="form-control"
//               placeholder="Email"
//             />

//             <label for="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               class="form-control"
//               className="form-control"
//               placeholder="Password"
//             />

//             <button type="submit" class="btn btn-primary mt-3">
//               Sign Up
//             </button>
//           </div>
//         </form>
//         {/* <form className=" row p-3 my-5 d-flex justify-align-items-center align-items-center rounded-2 shadow rounded-2">
//             <div className="input-group1">
//               <i className="bi bi-briefcase align-self-center text-muted" />
//               <input
//                 type="search"
//                 className="form-control border-0 shadow-none"
//                 placeholder="Search for job title"
//                 aria-label="job title"
//               />
//             </div>
//             <div className="input-group2">
//               <i className="bi bi-geo-alt align-self-center text-muted" />

//               <input
//                 type="search"
//                 className="form-control border-0 shadow-none"
//                 placeholder="Search for city"
//                 aria-label="city"
//               />
//               <button className="btn btn-primary p-3 rounded" type="submit">
//                 <i className="bi bi-search align-self-center me-1" /> Find
//               </button>
//             </div>
//           </form> */}
//         {/* </section> */}
//         {/* </div> */}
//       </div>
//     </div>
//   );
// }

// // return (
// //     <div className="flex h-screen">
// //       <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(path/to/your-image.jpg)' }}>
// //         {/* Put your picture or image here */}
// //       </div>
// //       <div className="w-1/2 flex flex-col justify-center items-center">
// //         <h2 className="text-2xl mb-6">Login</h2>
// //         <LoginForm />
// //       </div>
// //     </div>
// //   );
