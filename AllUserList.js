import React from "react";
import UserDetails from "./UserDetails";

// const AllUserList = () => {
//     let allUsers = [
//         {name : "Anjali",email: "anjali@email.com",phoneNumber: "6204633809",},
//         {name:"Prince",email: "prince@gmail.com",phoneNumber:"7515486245",},
//         {name:"Nilanjan",email:"nilanjan@gmial.com",phoneNumber:"8423517512",},
//     ];
//     return (
//         <div>
//             <UserDetails user={allUsers[0]}/>
//             <UserDetails user={allUsers[1]}/>
//             <UserDetails user={allUsers[2]}/>
//         </div>
//     )
// };
class AllUserList extends React.Component{
    state={
        name:"Priyanshu Saxena",
    };
    state = {
    allUsers: [
        {name :"Anjali",email:"anjali@gmail.com",phoneNumber:"282329223"},
        {name :"Prince",email:"prince@gmail.com",phoneNumber:"845644854"},

    ],
};
}
export default AllUserList;