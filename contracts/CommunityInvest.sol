pragma solidity ^0.4.0;
contract CommunityInvest{
struct User
{
    string Name;
    string Surname;
    string Cellphone;
    string Telephone;
    string Email;
    string Address;
    address UserID;
    bool Exists;
    mapping (address => Investment) MyInvestments;
    address [] InvestmentAddresses;
    mapping (address => Employee) Employees;
    address []  EmployeeAddresses;
    mapping(address => Proposal) MyProposals;
    address [] ProposalAddresses;
}
struct Investment
{
    address ID;
    uint Amount;
    uint ROI;
    bool Exists;
}
struct Employee
{
    string Name;
    string Surname;
    string Cellphone;
    string Telephone;
    string Email;
    string OccupationSeeking;
    string Description;
    address Employer; //Address of the person whos going to hire the indvidual
    bool Exists;
    bool Employed; //If the user has found a job or not so we can remove them on the system DB;
}
struct Proposal
{
   string NameOfBusiness;
   string Description;
   uint AmountSeeking;
   uint AmountRaised;
   uint ROI;
   uint EmployeePledge;
   bool Exists;
   mapping (address=> User) UsersWhoHaveInvested;
   address [] InvestorsAddresses;
}

mapping (address => User) Users; //Keep track of all the users in the System
address []  UserAdresses;
mapping (address=>Employee) PeopleToEmploy;
address []  PeopleAddresses;
mapping (address => Proposal) SubmitedByPeople;
address []  ProposalAddresses;
function AddUser(string n,string s, string c,string t,string em,string add,address UserId) returns (string)
{
    address [] memory InvAdd = new address[](0); 
    var user = User(n,s,c,t,em,add,UserId,true,InvAdd,InvAdd,InvAdd);
    Users[UserId] = user;
    UserAdresses.push(UserId);
    return "Added User Succesfully";
}
function GetUser(address add) returns (string ,string ,string ,string ,string )
{
    if(Users[add].Exists)
    {
        return (Users[add].Name,Users[add].Surname,Users[add].Cellphone,Users[add].Telephone,Users[add].Email);
    }
    else return ("User does not Exist","","","","");
    
}
function GetUserInvesments(address add) returns(uint[],uint [])
{
    if(Users[add].Exists)
    {
        var length = Users[add].InvestmentAddresses.length;
        uint [] memory amounts = new uint[](length);
        uint [] memory Rois = new uint[](length);
        for(uint i = 0; i < length;i++)
        {
            var amnt =Users[add].MyInvestments[Users[add].InvestmentAddresses[i]].Amount;
            var roi = Users[add].MyInvestments[Users[add].InvestmentAddresses[i]].ROI;
           amounts[i] = amnt;
           Rois[i]=roi;
           
        }
    }
    return (amounts,Rois);
}
function GetUserProposals(address add) returns(string [],string[],uint[])
{
    if(Users[add].Exists)
    {
        var length = Users[add].ProposalAddresses.length;
        string [] memory names = new string[](length);
        string [] memory Descriptions = new string[](length);
        uint [] memory Raised = new uint[](length);
        for(uint i = 0; i < length;i++)
        {
            var addresss =Users[add].ProposalAddresses[i];
            var name =Users[add].MyProposals;
            var descript = Users[add].MyProposals;
            var raised = Users[add].MyProposals;
            names[i]=name[addresss].NameOfBusiness;
            Descriptions[i] = descript[addresss].Description;
            Raised[i] =raised[addresss].AmountRaised;
           
        }
    }
    return (names,Descriptions,Raised);
}

}