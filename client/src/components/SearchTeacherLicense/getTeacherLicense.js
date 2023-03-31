import { ethers } from "ethers";
import pick from "lodash/pick";

import teacherLicenseAbi from "../../abi/TeacherLicense.json";
import { teacherLicenseContractAddress } from "../../config";
import serializeData from "../../utils/serializeData";

export const initialState = {
  citizenId: "",
  prefixName: "",
  firstName: "",
  lastName: "",
  prefixNameEng: "",
  firstNameEng: "",
  lastNameEng: "",
  licenseType: "",
};

async function getTeacherLicense(state) {
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

      const teacherLicense = await teacherLicenseContract.getTeacherLicense(
        state.citizenId
      );
      const serializedTeacherLicense = serializeData(teacherLicense);

      return serializedTeacherLicense;
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
