// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract KibokoDao{

    struct Citizen{
        address addr;
        string  email;
        uint   balance ;
    }
    Citizen[]public  citizens; //array


    function registerCitizen(address _addr,string memory 
    _email, uint _balance )public {

     Citizen memory citizen;
     citizen.addr = _addr;
     citizen.email = _email;
     citizen.balance = _balance;
     citizens.push(citizen);
    }
}