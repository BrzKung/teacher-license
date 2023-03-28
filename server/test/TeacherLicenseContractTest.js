const { ethers } = require("hardhat");
const { expect } = require("chai");

// import { solidity } from "ethereum-waffle";
// chai.use(solidity);

describe("TeacherLicense", () => {
  let teacherLicenseContract;
  let owner;

  beforeEach(async () => {
    const TeacherLicense = await ethers.getContractFactory("TeacherLicense");
    teacherLicenseContract = await TeacherLicense.deploy();
    await teacherLicenseContract.deployed();
    [owner] = await ethers.getSigners();
  });

  describe("addTeacherLicense", () => {
    it("should add a new teacher license", async () => {
      const citizenId = "1234567890";
      const prefixName = "Mr.";
      const firstName = "John";
      const lastName = "Doe";
      const prefixNameEng = "Mr.";
      const firstNameEng = "John";
      const lastNameEng = "Doe";
      const licenseType = "Driver's License";

      await teacherLicenseContract.addTeacherLicense(
        citizenId,
        prefixName,
        firstName,
        lastName,
        prefixNameEng,
        firstNameEng,
        lastNameEng,
        licenseType
      );

      const [
        resultCitizenId,
        resultPrefixName,
        resultFirstName,
        resultLastName,
        resultPrefixNameEng,
        resultFirstNameEng,
        resultLastNameEng,
        resultLicenseType,
        resultCreatedAt,
      ] = await teacherLicenseContract.getTeacherLicense(citizenId);

      expect(resultCitizenId).to.equal(citizenId);
      expect(resultPrefixName).to.equal(prefixName);
      expect(resultFirstName).to.equal(firstName);
      expect(resultLastName).to.equal(lastName);
      expect(resultPrefixNameEng).to.equal(prefixNameEng);
      expect(resultFirstNameEng).to.equal(firstNameEng);
      expect(resultLastNameEng).to.equal(lastNameEng);
      expect(resultLicenseType).to.equal(licenseType);
      expect(resultCreatedAt).to.not.be.undefined;
    });
  });

  describe("getTeacherLicense", () => {
    it("should return an existing teacher license", async () => {
      const citizenId = "1234567890";
      const prefixName = "Mr.";
      const firstName = "John";
      const lastName = "Doe";
      const prefixNameEng = "Mr.";
      const firstNameEng = "John";
      const lastNameEng = "Doe";
      const licenseType = "Driver's License";

      await teacherLicenseContract.addTeacherLicense(
        citizenId,
        prefixName,
        firstName,
        lastName,
        prefixNameEng,
        firstNameEng,
        lastNameEng,
        licenseType
      );

      const [
        resultCitizenId,
        resultPrefixName,
        resultFirstName,
        resultLastName,
        resultPrefixNameEng,
        resultFirstNameEng,
        resultLastNameEng,
        resultLicenseType,
        resultCreatedAt,
      ] = await teacherLicenseContract.getTeacherLicense(citizenId);

      expect(resultCitizenId).to.equal(citizenId);
      expect(resultPrefixName).to.equal(prefixName);
      expect(resultFirstName).to.equal(firstName);
      expect(resultLastName).to.equal(lastName);
      expect(resultPrefixNameEng).to.equal(prefixNameEng);
      expect(resultFirstNameEng).to.equal(firstNameEng);
      expect(resultLastNameEng).to.equal(lastNameEng);
      expect(resultLicenseType).to.equal(licenseType);
      expect(resultCreatedAt).to.not.be.undefined;
    });

    it("should throw an error for a non-existing teacher license", async () => {
      const citizenId = "1234567890";

      await expect(
        teacherLicenseContract.getTeacherLicense(citizenId)
      ).to.be.revertedWith("TeacherLicense not found");
    });
  });
});
