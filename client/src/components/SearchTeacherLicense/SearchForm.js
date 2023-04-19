import React, { useReducer } from "react";

import { initialState, reducer } from "./searchReducer";
import getTeacherLicense from "./getTeacherLicense";

function SearchForm({ setTeacherLicenseData, setIsSubmitted }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(process.env);

  const onChange = (e) => {
    dispatch({
      type: "CHANGE",
      field: e.target.name,
      value: e.target.value,
    });
  };

  async function onSubmit(e) {
    e.preventDefault();
    console.log("submit");

    const teacherLicense = await getTeacherLicense(state);
    setTeacherLicenseData(teacherLicense);
    setIsSubmitted(true);

    dispatch({
      type: "RESET",
    });
  }

  return (
    <div className="container row mt-5">
      <div className="col-3"></div>
      <form onSubmit={onSubmit} className="col-6">
        <div className="row text-center font-bold fw-bold fs-3 mb-4">
          <span className="col-12">ID Card Number</span>
        </div>

        <div className="row mb-4 justify-content-center">
          <input
            type="text"
            name="citizenId"
            value={state.citizenId}
            onChange={onChange}
            className="col-8 lh-lg rounded form-control"
          />
        </div>

        <div className="row justify-content-center">
          <button
            type="submit"
            className="col-4 rounded-pill text-white lh-lg fs-5 btn btn-warning"
            disabled={!state.citizenId}
          >
            search
          </button>
        </div>
      </form>
      <div className="col-3"></div>
    </div>
  );
}

export default SearchForm;
