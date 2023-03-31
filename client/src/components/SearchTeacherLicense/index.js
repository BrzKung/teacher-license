import React, { useState } from "react";
import SearchForm from "./SearchForm";
import TeacherLicenseContent from "./TeacherLicenseContent";

function SearchTeacherLicense() {
  const [teacherLicenseData, setTeacherLicenseData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      {!isSubmitted ? (
        <SearchForm
          setTeacherLicenseData={setTeacherLicenseData}
          setIsSubmitted={setIsSubmitted}
        />
      ) : (
        <TeacherLicenseContent teacherLicenseData={teacherLicenseData} />
      )}
    </div>
  );
}

export default SearchTeacherLicense;
