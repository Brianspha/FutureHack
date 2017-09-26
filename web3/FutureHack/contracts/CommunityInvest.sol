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
    address ID;
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
   address Owner;
   mapping (address=> User) UsersWhoHaveInvested;
   address [] InvestorsAddresses;
}

mapping (address => User) Users; //Keep track of all the users in the System
address []  UserAdresses;
mapping (address=>Employee) PeopleToEmploy;
address []  PeopleAddresses;
mapping (address => Proposal) SubmitedByPeople;
address []  ProposalAddresses;
uint test;
bool test2;
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
function AddNewProposal(string Name,string descrip,uint amntseek,uint roi,uint pledge,address owner) returns (string)
{
    address [] memory InvAdd = new address[](0); 
    var prop = Proposal(Name,descrip,amntseek,0,roi,pledge,true,owner,InvAdd);
    SubmitedByPeople[owner]=prop;
    ProposalAddresses.push(owner);
    Users[owner].MyProposals[owner]=prop;
     Users[owner].ProposalAddresses.push(owner);
     return "Added Proposal Successfully";
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
function InvestInBusiness(address Businessadd,address investor,uint amount) returns (string)
{
    if(SubmitedByPeople[Businessadd].Exists && Users[investor].UserID != investor)
    {
        SubmitedByPeople[Businessadd].AmountRaised+=amount;
        SubmitedByPeople[Businessadd].InvestorsAddresses.push(investor);
        SubmitedByPeople[Businessadd].UsersWhoHaveInvested[investor]=Users[investor];
        Users[investor].MyInvestments[investor] = Investment(Businessadd,amount,SubmitedByPeople[Businessadd].ROI,true);
        Users[investor].InvestmentAddresses.push(Businessadd);
        return "Successfully Invested in business";
    }
    else return "Cant Invest in Own Business";
}
function EmployeeSignUp(address add,string name,string sname,string cell,string tel,string mail,string ocupationseeking,string Descrip) returns (string)
{
    var emp =Employee(add,name,sname,cell,tel,mail,ocupationseeking,Descrip,0,true,false);
    if(!PeopleToEmploy[add].Exists){
    PeopleToEmploy[add]=emp;
    PeopleAddresses.push(add);
    return "Added User Succesfully";
    }
    else return "User Already Exist";
}

function EmployIndvidual(address Employeeadd,address EmployerAdd) returns (string Name)
{
    Name = PeopleToEmploy[Employeeadd].Name;
    PeopleToEmploy[Employeeadd].Employer =EmployerAdd;
    PeopleToEmploy[Employeeadd].Employed = true;
    return Name;
}


}