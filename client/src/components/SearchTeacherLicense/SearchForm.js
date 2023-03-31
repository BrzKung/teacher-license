import React, { useReducer } from "react";

import { initialState, reducer } from "./searchReducer";
import getTeacherLicense from "./getTeacherLicense";

function SearchForm({ setTeacherLicenseData, setIsSubmitted }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    <div>
      <form onSubmit={onSubmit}>
        ID Card Number
        <input
          type="text"
          name="citizenId"
          value={state.citizenId}
          onChange={onChange}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
}

export default SearchForm;
