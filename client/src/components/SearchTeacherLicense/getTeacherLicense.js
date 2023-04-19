import axios from "axios";
import { ethers } from "ethers";
import isEmpty from "lodash/isEmpty";
import merge from "lodash/merge";

import teacherLicenseAbi from "../../abi/TeacherLicense.json";
import { TEACHER_LICENSE_CONTRACT_ADDRESS, BACKEND_URL } from "../../config.js";
import serializeData from "../../utils/serializeData";

export const initialState = {
  transactionHash: "",
  citizenId: "",
  prefixName: "",
  firstName: "",
  lastName: "",
  prefixNameEng: "",
  firstNameEng: "",
  lastNameEng: "",
  licenseType: "",
  createdAt: "",
  expireAt: "",
};

async function getTeacherLicense(state) {
  try {
    const { data: teacherLicenseDB } = await axios.get(
      `${BACKEND_URL}/apis/teacher-license`,
      {
        params: {
          citizenId: state.citizenId,
        },
      }
    );

    console.log("teacherLicenseDB = ", teacherLicenseDB);

    if (isEmpty(teacherLicenseDB.data)) {
      console.log(`Citizen id ${state.citizenId} not found`);
      return initialState;
    }

    const { ethereum } = window;

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const teacherLicenseContract = new ethers.Contract(
        TEACHER_LICENSE_CONTRACT_ADDRESS,
        teacherLicenseAbi.abi,
        signer
      );

      const teacherLicense = await teacherLicenseContract.getTeacherLicense(
        state.citizenId
      );
      console.log("teacherLicense = ", teacherLicense);
      const serializedTeacherLicense = serializeData(teacherLicense);
      console.log("serializedTeacherLicense = ", serializedTeacherLicense);
      const mergedTeacherLicense = merge(
        serializedTeacherLicense,
        teacherLicenseDB.data
      );

      return mergedTeacherLicense;
    } else {
      console.log("Ethereum object doesn't exist");
      return initialState;
    }
  } catch (error) {
    console.log(error);
    return initialState;
  }
}

export default getTeacherLicense;
