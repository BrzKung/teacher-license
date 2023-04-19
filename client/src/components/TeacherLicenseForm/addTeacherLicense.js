import { ethers } from "ethers";
import axios from "axios";

import teacherLicenseAbi from "../../abi/TeacherLicense.json";
import { TEACHER_LICENSE_CONTRACT_ADDRESS, BACKEND_URL } from "../../config.js";

async function addTeacherLicense(state) {
  try {
    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const teacherLicenseContract = new ethers.Contract(
        TEACHER_LICENSE_CONTRACT_ADDRESS,
        teacherLicenseAbi.abi,
        signer
      );

      const teacherLicenseContractResponse =
        await teacherLicenseContract.addTeacherLicense(
          state.citizenId,
          state.prefixName,
          state.firstName,
          state.lastName,
          state.prefixNameEng,
          state.firstNameEng,
          state.lastNameEng,
          state.licenseType
        );
      console.log(
        "Completed Task 1",
        JSON.stringify(teacherLicenseContractResponse)
      );

      const savedTeacherLicense = await axios.post(
        `${BACKEND_URL}/apis/teacher-license`,
        {
          citizenId: state.citizenId,
          transactionHash: teacherLicenseContractResponse.hash,
        }
      );
      console.log("Completed Task 2", JSON.stringify(savedTeacherLicense));
    } else {
      console.log("Ethereum object doesn't exist!");
    }
  } catch (error) {
    console.log("Error submitting new Tweet", error);
  }
}

export default addTeacherLicense;
