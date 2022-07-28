import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../Store/Actions/userActions";
import { useDispatch} from 'react-redux'

export default function Navbar() {
  const dispatch = useDispatch()
  const { login } = useSelector((state) => state.user);
  return (
    <>
      <nav class="navbar navbar-expand-lg" style={{backgroundColor:"  #ffad33"}}>
        <div class="container-fluid">
          <Link class="navbar-brand fs-2" to={"/admin/alltodos"}>
            ToDo-List
            <i class="bi bi-check2-all" style={{color: "#ff0000"}}></i>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          
          
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active " to={"/"}>
                <button className="btn outline-none">AddToDo</button>
              </Link>

              {login?.name ? (
                <>
                  <div className="d-flex">
                    <i class="bi bi-person-circle mt-3 gap-1"></i>
                    <Link class="nav-link" to={"/profile"}>
                      <button className="btn outline-none">{login.name}</button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link class="nav-link " to={"/login"}>
                    <button className="btn outline-none">Login</button>
                  </Link>
                  <Link class="nav-link" to={"/register"}>
                    <button className="btn outline-none">Register</button>
                  </Link>
                </>
              )}

              <Link class="nav-link" to={"/login"}>
                <button
                  className="btn outline-none"
                  onClick={(e) => dispatch(logoutAction())}
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-blue" style={{ height: "7px",backgroundColor:"#995c00" }}>
      </div>
    </>
  );
}
