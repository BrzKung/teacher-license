function serializeData(data) {
  const serializedData = {
    citizenId: data[0] || "",
    prefixName: data[1] || "",
    firstName: data[2] || "",
    lastName: data[3] || "",
    prefixNameEng: data[4] || "",
    firstNameEng: data[5] || "",
    lastNameEng: data[6] || "",
    licenseType: data[7] || "",
  };

  return serializedData;
}

export default serializeData;
