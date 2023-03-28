import React from "react";

function TeacherLicenseForm() {
  return (
    <div>
      Registration
      <form>
        <div>
          <span>เลขประจำตัวประชาชน</span>
          <input type="text"></input>
        </div>
        <div>
          <span>คำนำหน้า</span>
          <input type="text"></input>
        </div>
        <div>
          <span>ชื่อ</span>
          <input type="text"></input>
        </div>
        <div>
          <span>นามสกุล</span>
          <input type="text"></input>
        </div>
        <div>
          <span>Name Title</span>
          <input type="text"></input>
        </div>
        <div>
          <span>Name</span>
          <input type="text"></input>
        </div>
        <div>
          <span>Last name</span>
          <input type="text"></input>
        </div>
        <div>
          <span>ประเภทวิชาชีพ</span>
          <input type="text"></input>
        </div>
        <button>บันทึก</button>
      </form>
    </div>
  );
}

export default TeacherLicenseForm;
