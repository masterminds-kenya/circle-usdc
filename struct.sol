// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Struct{

    struct Student{
        uint id;
        string name;
        string grade;
        bool isregistered;
    }

    struct Lab{
        uint id;
        string company;
        uint salary;
    }

Student[] public  students; // array
Lab[]  public labs; // array


function addStudent( uint _id, string memory _name, string calldata _grade) public {

    Student memory student;
    student.id = _id;
    student.name = _name;
    student.grade = _grade;

    students.push(student);

}

function addLab(uint _id, string memory _company,uint _salary) public {
    
    Lab memory lab;

    lab.id = _id;
    lab.company = _company;
    lab.salary = _salary;

    labs.push(lab);
}







}