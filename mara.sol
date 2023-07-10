// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract mara{
    
    struct Member{
        address addr;
        string name;
        uint  balance;  // mara token held

    }

    Member[] public members;
    address public  owner;

    constructor(){
        owner = msg.sender;
    }


  modifier onlyOwner(){
      if(owner == msg.sender){
          _;
      }
  }

    function addMember(address _addr, string memory _name, uint _balance) public  onlyOwner{
        Member memory member;
        member.addr = _addr;
        member.name = _name;
        member.balance = _balance;

        members.push(member);
    }
}
