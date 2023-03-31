import { ethers } from "ethers";

import teacherLicenseAbi from "../../abi/TeacherLicense.json";
import { teacherLicenseContractAddress } from "../../config";

async function addTeacherLicense(state) {
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const teacherLicenseContract = new ethers.Contract(
        teacherLicenseContractAddress,
        teacherLicenseAbi.abi,
        signer
      );

      teacherLicenseContract
        .addTeacherLicense(
          state.citizenId,
          state.prefixName,
          state.firstName,
          state.lastName,
          state.prefixNameEng,
          state.firstNameEng,
          state.lastNameEng,
          state.licenseType
        )
        .then((response) => {
          console.log("Completed Task", JSON.stringify(response));
        })
        .catch((err) => {
          console.log("Error occured while adding a new task", err);
        });
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("Error submitting new Tweet", error);
  }
}

export default addTeacherLicense;
