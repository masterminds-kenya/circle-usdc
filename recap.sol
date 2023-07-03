// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;


contract recap {
    uint256 number = 10;
    event setScoreEvent(uint256 );
    address owner;

    //modifiers
    modifier onlyOwner{
        if (msg.sender == owner){
            _;
        }
    }

   modifier  Fee(uint256 fee){
       if(msg.value == fee){
           _;
       }
   }

   mapping (uint256 => address)balances;
   

   constructor () {
       owner = msg.sender;
   }
    function getScore() public view returns (uint256){
        return number;
    }

   function setScore(uint256 _number)  public  onlyOwner {
       number =_number;
       emit  setScoreEvent(number);
   }
}