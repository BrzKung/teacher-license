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

  console.log("state = ", state);

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
      <div className="m-5 text-center fs-4 fw-bold">Registration</div>
      <div className="row">
        <div className="col-3"></div>
        <form onSubmit={onSubmit} className="col-6 justify-content-center">
          <div>
            <label htmlFor="citizenId" className="form-label">
              เลขประจำตัวประชาชน
            </label>
            <input
              id="citizenId"
              type="text"
              name="citizenId"
              value={state.citizenId}
              onChange={onChange}
              className="form-control mb-3"
            />
          </div>

          <div className="row">
            <div className="col-3">
              <label htmlFor="prefixName" className="form-label">
                คำนำหน้า
              </label>
              <select
                id="prefixName"
                className="form-select mb-3"
                name="prefixName"
                onChange={onChange}
              >
                <option>เลือกคำนำหน้า</option>
                <option value="นาย">นาย</option>
                <option value="นางสาว">นางสาว</option>
              </select>
            </div>
            <div className="col-9">
              <label htmlFor="firstName" className="form-label">
                ชื่อ
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={onChange}
                className="form-control mb-3"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="form-label">
              นามสกุล
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={onChange}
              className="form-control mb-3"
            />
          </div>

          <div className="row">
            <div className="col-3">
              <label htmlFor="prefixNameEng" className="form-label">
                Name Title
              </label>
              <select
                id="prefixNameEng"
                className="form-select mb-3"
                name="prefixNameEng"
                onChange={onChange}
              >
                <option>Choose name title</option>
                <option value="Mr.">Mr.</option>
                <option value="Miss">Miss</option>
              </select>
            </div>
            <div className="col-9">
              <label htmlFor="firstNameEng" className="form-label">
                Name
              </label>
              <input
                id="firstNameEng"
                type="text"
                name="firstNameEng"
                value={state.firstNameEng}
                onChange={onChange}
                className="form-control mb-3"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastNameEng" className="form-label">
              Last name
            </label>
            <input
              id="lastNameEng"
              type="text"
              name="lastNameEng"
              value={state.lastNameEng}
              onChange={onChange}
              className="form-control mb-3"
            />
          </div>
          <div>
            <label htmlFor="licenseType" className="form-label">
              ประเภทวิชาชีพ
            </label>
            <select
              id="licenseType"
              className="form-select mb-3"
              name="licenseType"
              onChange={onChange}
            >
              <option>เลือกประเภทวิชาชีพ</option>
              <option value="วิชาชีพครู">วิชาชีพครู</option>
              <option value="บุคลากรทางการศึกษา">บุคลากรทางการศึกษา</option>
            </select>
          </div>

          <div className="row justify-content-center m-3">
            <button
              type="submit"
              className="btn btn-warning text-white col-2 rounded-pill"
            >
              บันทึก
            </button>
          </div>
        </form>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default TeacherLicenseForm;
