import React, { useState } from "react";
import SearchForm from "./SearchForm";
import TeacherLicenseContent from "./TeacherLicenseContent";

function SearchTeacherLicense() {
  const [licenseData, setLicenseData] = useState({});
  return <div>{licenseData ? <SearchForm /> : <TeacherLicenseContent />}</div>;
}

export default SearchTeacherLicense;
