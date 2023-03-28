//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.3;

contract TeacherLicense {
    
    struct TeacherLicenseDetails {
        string citizenId;
        string prefixName;
        string firstName;
        string lastName;
        string prefixNameEng;
        string firstNameEng;
        string lastNameEng;
        string licenseType;
        uint createdAt;

    }
    
    mapping(string => TeacherLicenseDetails) teacherLicenses;
    
    event AddTeacherLicense(
        string citizenId,
        string prefixName,
        string firstName,
        string lastName,
        string prefixNameEng,
        string firstNameEng,
        string lastNameEng,
        string licenseType,
        uint createdAt
    );
    
    function addTeacherLicense(
        string memory _citizenId,
        string memory _prefixName,
        string memory _firstName,
        string memory _lastName,
        string memory _prefixNameEng,
        string memory _firstNameEng,
        string memory _lastNameEng,
        string memory _licenseType
    ) public {
        TeacherLicenseDetails memory newTeacherLicense = TeacherLicenseDetails(
            _citizenId,
            _prefixName,
            _firstName,
            _lastName,
            _prefixNameEng,
            _firstNameEng,
            _lastNameEng,
            _licenseType,
            block.timestamp
        );
        teacherLicenses[_citizenId] = newTeacherLicense;
        
        emit AddTeacherLicense(
            _citizenId,
            _prefixName,
            _firstName,
            _lastName,
            _prefixNameEng,
            _firstNameEng,
            _lastNameEng,
            _licenseType,
            block.timestamp
        );
        
    }
    
    function getTeacherLicense(string memory _citizenId) public view returns (
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        uint 
    ) {
        TeacherLicenseDetails memory teacherLicense = teacherLicenses[_citizenId];
        return (
            teacherLicense.citizenId,
            teacherLicense.prefixName,
            teacherLicense.firstName,
            teacherLicense.lastName,
            teacherLicense.prefixNameEng,
            teacherLicense.firstNameEng,
            teacherLicense.lastNameEng,
            teacherLicense.licenseType,
            teacherLicense.createdAt
        );
    }
}