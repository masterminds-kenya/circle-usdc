// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;


contract  maths{
     uint x = 10;
     uint y  = 20;

string public  name;

struct student{
    uint id;
    string name;
    uint fee;
}

mapping(address => student) public  Student;


 function register(uint id,string  name, uint fee) public {
    


 }


   
   function getNumbers() public  view returns(uint){
       return  x;
   } 

   function addNumbers(uint _x,uint _y) public  pure returns(uint){
       return  _x + _y;
   } 

   function rename(string memory _name) public {
       name = _name;
   }
   function getName()public  view  returns(string memory){
       return  name;

   }


}