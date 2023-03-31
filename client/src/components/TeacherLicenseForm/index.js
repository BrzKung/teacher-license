import React, { useReducer } from "react";

import { initialState, reducer } from "./teacherFormReducer";
import addTeacherLicense from "./addTeacherLicense";

function TeacherLicenseForm() {
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

    await addTeacherLicense(state);

    dispatch({
      type: "RESET",
    });
  }

  return (
    <div>
      Registration
      <form onSubmit={onSubmit}>
        <div>
          <span>เลขประจำตัวประชาชน</span>
          <input
            type="text"
            name="citizenId"
            value={state.citizenId}
            onChange={onChange}
          />
        </div>
        <div>
          <span>คำนำหน้า</span>
          <input
            type="text"
            name="prefixName"
            value={state.prefixName}
            onChange={onChange}
          />
        </div>
        <div>
          <span>ชื่อ</span>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={onChange}
          />
        </div>
        <div>
          <span>นามสกุล</span>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={onChange}
          />
        </div>
        <div>
          <span>Name Title</span>
          <input
            type="text"
            name="prefixNameEng"
            value={state.prefixNameEng}
            onChange={onChange}
          />
        </div>
        <div>
          <span>Name</span>
          <input
            type="text"
            name="firstNameEng"
            value={state.firstNameEng}
            onChange={onChange}
          />
        </div>
        <div>
          <span>Last name</span>
          <input
            type="text"
            name="lastNameEng"
            value={state.lastNameEng}
            onChange={onChange}
          />
        </div>
        <div>
          <span>ประเภทวิชาชีพ</span>
          <input
            type="text"
            name="licenseType"
            value={state.licenseType}
            onChange={onChange}
          />
        </div>
        <button type="submit">บันทึก</button>
      </form>
    </div>
  );
}

export default TeacherLicenseForm;
