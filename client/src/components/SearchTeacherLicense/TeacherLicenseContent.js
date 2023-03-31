import React from "react";

function TeacherLicenseContent({ teacherLicenseData }) {
  return (
    <div>
      ใบอนุญาตอิเล็กทรอนิกส์
      <div>{teacherLicenseData.citizenId}</div>
      <div>{teacherLicenseData.prefixName}</div>
      <div>{teacherLicenseData.firstName}</div>
      <div>{teacherLicenseData.lastName}</div>
      <div>{teacherLicenseData.prefixNameEng}</div>
      <div>{teacherLicenseData.firstNameEng}</div>
      <div>{teacherLicenseData.lastNameEng}</div>
      <div>{teacherLicenseData.licenseType}</div>
    </div>
  );
}

export default TeacherLicenseContent;
