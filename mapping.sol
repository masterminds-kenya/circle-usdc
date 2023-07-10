// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Mapping{
  address owner;

  //constructor

  constructor(){
      owner = msg.sender;
  }

  modifier onlyOwner(){

    require(msg.sender == owner, "Deployer");
    {
        _;
    }
  }



    struct Member{
        uint id;
        string name;
        bool  isMember;
    }

    Member[] public  members;
    mapping (address => Member) public link;

    function addMember( uint _id, string memory _name) public {
        Member memory member;
        member.id = _id;
        member.name = _name;
        msg.sender;

        members.push(member);
    }

    function findMember(address _add) public  {
        

    }


}