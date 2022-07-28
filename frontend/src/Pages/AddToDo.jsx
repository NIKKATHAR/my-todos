import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addtodoAction, gettodoAction } from "../Store/Actions/todoActions";


export default function AddToDo() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      task: "",
      desc: "",
      date: "",
      priority: "",
      category: "",
      status: "",
    },
    validationSchema: yup.object({
      task: yup.string().required("task can not be empty"),
      desc: yup.string().required("Description can not be empty"),
      date: yup.date().required("Date can not be empty"),
      priority: yup.string().required("required feild"),
      category: yup.string().required("required feild"),
      status: yup.string().required("required feild"),
    }),
    onSubmit: (values) => {
      dispatch(addtodoAction(values));
    },
  });

  useEffect(() => {
  
  }, [])
  
  return (
    <>
      <div class="container mt-5">
        {JSON.stringify(formik.errors)}
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div class="card border-primary">
              <div class="card-header">Todo</div>
              <div class="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <label for="task" class="form-label">
                      First task
                    </label>
                    <input
                      type="text"
                      name="task"
                      value={formik.values.task}
                      onChange={formik.handleChange}
                      class="form-control"
                      id="task"
                      placeholder="Enter Your task"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please add task.</div>
                  </div>
                  <div class="mt-2">
                    <label for="desc" class="form-label">
                      Description
                    </label>
                    <textarea
                      rows="4"
                      type="text"
                      name="desc"
                      value={formik.values.desc}
                      onChange={formik.handleChange}
                      class="form-control"
                      id="desc"
                      placeholder="Enter task description"
                    />
                    <div class="valid-feedback">Looks good!</div>
                    <div class="invalid-feedback">Please add description</div>
                  </div>

                  <div class="mt-2">
                    <label for="date" class="form-label">
                      Date
                    </label>

                    <input
                      type="date"
                      class="form-control"
                      id="date"
                      name="date"
                      value={formik.values.date}
                      onChange={formik.handleChange}
                    />
                  </div>

                  <div class="mt-2">
                    <label for="priority"> Priority</label>
                    <select
                      class="form-select"
                      id="priority"
                      name="priority"
                      value={formik.values.priority}
                      onChange={formik.handleChange}
                    >
                      <option selected>Select Priority</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>

                  <div class="mt-2">
                    <label for="category"> Category</label>
                    <select
                      class="form-select"
                      id="category"
                      name="category"
                      value={formik.values.category}
                      onChange={formik.handleChange}
                    >
                      <option selected>Select Category</option>
                      <option value="personal">Personal</option>
                      <option value="office">Office</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div class="mt-2">
                    <label for="status"> Status</label>
                    <select
                      class="form-select"
                      id="status"
                      name="status"
                      value={formik.values.status}
                      onChange={formik.handleChange}
                    >
                      <option selected>Select Status</option>
                      <option value="pending">Pending</option>
                      <option value="inprogress">Inprogess</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    class="btn btn-primary w-100 mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add Todo
                  </button>
              
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* modal window */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                ToDo Task
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h5>Your todo task added Successfully..!</h5>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
                <button 
                type="button" 
                class="btn btn-primary"
                onClick={e => {
                  dispatch(gettodoAction())
                  navigate("/admin/alltodos")
                 
                }}>
                  ToDo List
                </button>
           
            </div>
          </div>
        </div>
      </div>

     

      
     
      
    </>
  );
}
