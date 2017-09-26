pragma solidity ^0.4.0;
contract MyContract {
address public owner;
mapping (address => uint) balances; //allows for the mapping of a hash to be translated into an actual account balance

 function MyContract(){
 owner = msg.sender;//takes on value of the address sending the transaction
 balances[owner]=1000;
 }
 function GetBalance (address user) constant returns (uint bal)
 {
 return balances[user];
 }
 function transfer (address to, address from,uint amnt) returns (bool success)
 { 
   if(amnt <0 && balances[from] <amnt) 
   {
   return false;
   }
   balances[from] -= amnt;
   balances[to] += amnt;
   return true;
 }
}