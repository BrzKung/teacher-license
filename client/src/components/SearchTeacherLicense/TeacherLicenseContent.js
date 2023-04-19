import React from "react";
import moment from "moment";
import "moment/locale/th";

import "./TeacherLicenseContent.css";
import downloadPDF from "../../utils/downloadPDF";

moment.locale("th");

function TeacherLicenseContent({ teacherLicenseData }) {
  return (
    <div className="m-5">
      <div className="my-5 text-center fs-4 fw-bold">
        ใบอนุญาตอิเล็กทรอนิกส์
      </div>
      <div id="teacherLicense" className="background rounded-3 p-4">
        <div className="row text-center">
          <div className="col-4 d-flex align-items-center">
            <div className="col-4">
              <div>ใบอนุญาตเลขที่</div>
              <div>License No.</div>
            </div>

            <div className="licenseNo col-8">{teacherLicenseData.id}</div>
          </div>

          <div className="col-4 ">
            <img src="/picture/teacher_council.png" alt="teacher_council" />
          </div>

          <div className="col-4 d-flex align-items-center">
            <div className="col-6">
              <div>สมาชิกประเภทสามัญ</div>
              <div>Ordinary No.</div>
            </div>

            <div className="licenseNo col-6">
              {teacherLicenseData.citizenId}
            </div>
          </div>

          <div className="mt-3 mb-2 fs-5">คุรุสภา</div>
          <div className="mb-5 fw-bold">The Teachers Council of Thailand</div>

          <div>
            {teacherLicenseData.prefixName}
            {teacherLicenseData.firstName} {teacherLicenseData.lastName}
          </div>

          <div className="fw-bold">
            {teacherLicenseData.prefixNameEng}
            {teacherLicenseData.firstNameEng} {teacherLicenseData.lastNameEng}
          </div>

          <div className="my-5">
            มีสิทธประกอบอาชีพภายใต้บทบังคับแห่งกฎหมายและข้อบังคับของคุรุสภา
          </div>

          <div className="mb-5">
            ตั้งแต่วันที่ {moment(teacherLicenseData.createdAt).format("LL")}{" "}
            ถึงวันที่ {moment(teacherLicenseData.expireAt).format("LL")}
          </div>

          <div className="smallText d-flex align-items-center justify-content-end">
            <div className="">
              <div>หมายเลขอ้างอิง</div>
              <div>Reference No.</div>
            </div>

            <div className="mx-3">{teacherLicenseData.transactionHash}</div>
          </div>
        </div>
      </div>

      <div className="text-end">
        <button
          className="btn btn-warning my-3 rounded-pill"
          onClick={downloadPDF}
        >
          <img
            src="/icon/download.svg"
            alt="download"
            width={30}
            className="mx-3"
          />
        </button>
      </div>
    </div>
  );
}

export default TeacherLicenseContent;
