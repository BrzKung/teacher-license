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
    
    mapping(bytes32 => TeacherLicenseDetails) public teacherLicenses;
    
    event AddTeacherLicense(
        bytes32 byteId
    );

    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
        assembly {
                result := mload(add(source, 32))
        }
    }
    
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
        bytes32 byteId = stringToBytes32(_citizenId);

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
        teacherLicenses[byteId] = newTeacherLicense;
        
        emit AddTeacherLicense(
            byteId
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
        bytes32 byteId = stringToBytes32(_citizenId);

        TeacherLicenseDetails memory teacherLicense = teacherLicenses[byteId];
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