// import React, { useState } from 'react';
// import './View.css';
// import axios from 'axios'
// import {useParams} from 'react-router-dom'
// import profile1 from '../Contact/young-woman-with-round-glasses-yellow-sweater_273609-7091.avif'

// const View =() =>{
//   const {id} =useParams("")
//   console.log("person id",id);


//   return(

//     <div className="container emp-profile">
//       <form method="post" >
//         <div className="row data">
//         <div className="col-md-4 ">
//           <div className="profile-img">
//             <h2></h2>
//             <span>User Profile</span>
//               <img
//                 src={profile1}
//                 alt=""
//               />
//             </div>   
//              </div>
//           <div className="col-md-8 details">
//           <label htmlFor="name">Name:</label>
//             <input type="text" id="name" name="name"  placeholder="" />
//             <br></br>
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email"  placeholder="" />
//             <br></br>
//             <label htmlFor="empId">EmpId:</label>
//             <input type="text" id="empId" name="empId"  placeholder="" />
//             <br></br>
//             <label htmlFor="phone">Phone:</label>
//             <input type="text" id="phone" name="phone"  placeholder="" />
//                   <br></br>
//             <label htmlFor="designation">Designation:</label>
//             <input type="text" id="designation" name="designation"  placeholder="" />
//             <br></br>
//             <label htmlFor="salary">Salary:</label>
//             <input type="text" id="salary" name="salary"  placeholder="" />
//                   <br></br>
//             <label htmlFor="address">Address:</label>
//             <input type="text" id="address" name="address"  placeholder="" />
 
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }




 
// export default View;

// import React, { useState, useEffect } from 'react';
// import './View.css';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import profile1 from '../Contact/young-woman-with-round-glasses-yellow-sweater_273609-7091.avif';




// const View = () => {
//   const { id } = useParams();
//   const [data, setdata] = useState({});

//   useEffect(() => {
//     axios.get(`http://localhost:3030/api/gettask/${id}`)
//       .then(response => {
//         console.log('Response:', response);
//         setdata(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, [id]);








// const {id}=useParams()
// console.log(id);
// const [getEmp,setEmp]=useState([])
// const fullView = async (id) => {
//   try {
//     const res = await axios.post(`http://localhost:3030/api/gettask/${id}`);
//     console.log(res);
//     setEmp(res.data);
//     console.log(res.data);
//   } catch (error) {
//     console.error('Error fetching employee details:', error);
//   }
// };
// useEffect(() => {
//   fullView(id); 
// }, [id]);
// console.log(getEmp);
  

//   return (
    // <div className="container emp-profile">
    //   <form method="post">
    //     <div className="row data">
    //       <div className="col-md-4">
    //         <div className="profile-img">
    //           <h2></h2>
    //           <span>User Profile</span>
    //           <img
    //             src={profile1}
    //             alt=""
    //           />
    //         </div>
    //       </div>
    //       <div className="col-md-8 details">
    //         <label htmlFor="name">Name:</label>
           
    //         <p id='name' name="name">{data.name}</p>
    //         <br></br>
    //         <label htmlFor="email">Email:</label>
           
    //         <p id='email' name="email">{data.email}</p>
    //       </div>
    //     </div>
    //   </form>
    // </div>
//   )
// }

// export default View



import React, { useEffect, useState } from 'react'
import './View.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const View = () => {

const {id}=useParams()
console.log(id);
const [getEmp,setEmp]=useState([])
const fullView = async (id) => {
  try {
    const res = await axios.post(`http://localhost:3030/api/getDetails/${id}`);
    console.log(res);
    setEmp(res.data);
    console.log(getEmp);
  } catch (error) {
    console.error('Error fetching employee details:', error);
  }
};
useEffect(() => {
  fullView(id); // Call fullView when the component mounts
}, [id]);
console.log(getEmp);

  return (
    <div>
      <div className="view-main"> 
        <div className="view-details-div">
          <div className="image-name-email-section">
            <div className="view-img">
              <h2>User <span>Details</span></h2>
              <img src={getEmp.photo} alt="" />
            </div>
          </div>
          <div className="view-other-details">
            <table>
              <tr>
                <th>Name:</th>
                <td> {getEmp.name}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{getEmp.email}</td>
              </tr>
              <tr>
                <th>EmpId:</th>
                <td> {getEmp.empId}</td>
              </tr>
              <tr>
                <th>Phone:</th>
                <td> {getEmp.phone}</td>
              </tr>
              <tr>
                <th>Designation:</th>
                <td> {getEmp.designation}</td>
              </tr>
              <tr>
                <th>Salary:</th>
                <td> {getEmp.salary}</td>
              </tr>
              <tr>
                <th>Address:</th>
                <td> {getEmp.address}</td>
              </tr>
              <tr>
                <th>Experience:</th>
                <td> {getEmp.experience}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View







