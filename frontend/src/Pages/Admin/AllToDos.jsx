import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteSingleToDoAction,
  gettodoAction,
  updateSingleToDoAction,
} from "../../Store/Actions/todoActions";

export default function AllToDos() {
  const [etask, setetask] = useState();
  const [edesc, setedesc] = useState();
  const [edate, setedate] = useState();
  const [epriority, setepriority] = useState();
  const [ecategory, setecategory] = useState();
  const [estatus, setestatus] = useState();
  const [editId, seteditId] = useState();
  const [deleteId, setdeleteId] = useState();

  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.allTodos);

  // console.log(singleToDo);

  const formik = useFormik({
    initialValues: {
      task: etask,
      desc: edesc,
      date: edate,
      priority: epriority,
      category: ecategory,
      status: estatus,
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      task: yup.string().required("Task can not be empty"),
      desc: yup.string().required("This field can not be empty"),
      date: yup.date().required("This field can not be empty"),
      priority: yup.string().required("This field can not be empty"),
      category: yup.string().required("This field can not be empty"),
      status: yup.string().required("This field can not be empty"),
    }),

    onSubmit: async (values) => {
      dispatch(updateSingleToDoAction(editId, values));
    },
  });

  useEffect(() => {
    dispatch(gettodoAction());
  }, []);

  return (
    <>
      <div className="container ">
        <div className="row">
          {todo?.map((item) => (
            <div class="col-sm-4 ">
              <div class="card mt-4">
                <div className="card-header">
                  <h3 class="card-subtitle mb-2 text-muted">{item.task}</h3>
                </div>
                <div class="card-body">
                  <h6 class="card-text">Description : {item.desc}</h6>
                  <h6 class="card-text">
                    Date : {format(new Date(item.date), "dd MMM yyyy")}
                  </h6>
                  <h6 class="card-text">Category : {item.category}</h6>
                  <h6 class="card-text">Priority : {item.priority}</h6>
                  <h6 class="card-text">Status : {item.status}</h6>
                </div>
                <div className="card-footer">
                  <div
                    className="d-flex gap-2 position-relative"
                    style={{ left: "75%" }}
                  >
                    <button
                      class="btn btn-outline-secondary"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Edit ToDo"
                    >
                      <i
                        // edit icon
                        onClick={(e) => {
                          setetask(item.task);
                          setedesc(item.desc);
                          setedate(item.date);
                          setepriority(item.priority);
                          setecategory(item.category);
                          setestatus(item.status);
                          seteditId(item._id);
                        }}
                        class="bi bi-pencil-square"
                        data-bs-toggle="modal"
                        data-bs-target="#editModal"
                      ></i>
                    </button>

                    <button
                      class="btn btn-outline-secondary "
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete ToDo"
                    >
                      <i
                        onClick={(e) => {
                          setdeleteId(item._id);
                        }}
                        class="bi bi-trash3-fill"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* edit model */}
      <div class="modal fade" id="editModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModal">
                Edit Todo
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
                    rows={"4"}
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
                    <option value="pending">pending</option>
                    <option value="inprogress">Inprogess</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary w-100 mt-3"
                  data-bs-dismiss="modal"
                >
                  Update Todo
                </button>
                <button
                  type="button"
                  class="btn mt-2 w-100 btn-outline-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div class="modal fade" id="deleteModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-danger">
                Are you sure you want delete this todo ?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-danger">
              <p class="text-center text-muted mb-5">
                You can delete this todo at any time. If you change your mind,
                you might not be able to recover it
              </p>
              <div class="btn-group w-100">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  data-bs-dismiss="modal"
                  onClick={(e) => {
                    dispatch(deleteSingleToDoAction(deleteId));
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
