import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios'
import profile1 from '../Contact/young-woman-with-round-glasses-yellow-sweater_273609-7091.avif'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const Navigate =useNavigate()
  let photo="";
  const [val,setVal]=useState({
    name:"",
    email:"",
    empId:"",
    phone:"",
    designation:"",
    salary:"",
    address:"",
    experience:"",
    photo:"",
  })

  //ADD DATA

  const getData=(e)=>{
      setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  }

  // UPLOAD IMAGE

  const Upload=async(e)=>{
    photo=await convertToBase64(e.target.files[0])
  }

  //  CONVERT IMAGE

  function convertToBase64(file){
    return new Promise ((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);


      fileReader.onload=()=>{
        resolve(fileReader.result)
      }
      fileReader.onerror=(error)=>{
        reject(error)
      }
    })
  }
  

  //DISPLAY DATA

  const registerData=async(e)=>{
    e.preventDefault();
    console.log({...val});
    console.log(photo);

    const res=await axios.post("http://localhost:3030/api/addtask",{...val,photo:photo})
    console.log(res.status);
    if(res.status!=201)
    {
      alert("Data Not Added")
    }
      else{
        alert("Data Added SuccessFully")
        Navigate("/")
      }
  }



  return (
    <div className="container  emp-profile">
      <form method="post">
        <div className="row data">
        <div className="col-md-4 ">
          <div className="profile-img">
            <h2>Registration</h2>
            <span>Form</span>
              <img src={profile1} alt=""  />         
              <div className="file btn btn-lg btn-primary" id='change-btn'>
                Change Photo
                <input type="file" name="photo" onChange={Upload} />
              </div>
            </div>   
            <Link to='/' onClick={registerData}><button className="button-81" role="button">SUBMIT</button></Link>
             </div>
          <div className="col-md-8 details">
          <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={getData} placeholder="Enter your name" />
            <br></br>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={getData} placeholder="Enter your email" />
            <br></br>
            <label htmlFor="empId">EmpId:</label>
            <input type="text" id="empId" name="empId" onChange={getData} placeholder="Enter your employee ID" />
            <br></br>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" onChange={getData} placeholder="Enter your phone number" />
                  <br></br>
            <label htmlFor="designation">Designation:</label>
            <input type="text" id="designation" name="designation" onChange={getData} placeholder="Enter your designation" />
            <br></br>
            <label htmlFor="salary">Salary:</label>
            <input type="text" id="salary" name="salary" onChange={getData} placeholder="Enter your salary" />
                  <br></br>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" onChange={getData} placeholder="Enter your address" />
                  <br></br>
            <label htmlFor="address">Experience:</label>
            <input type="text" id="experience" name="experience" onChange={getData} placeholder="Enter your experience" />
 
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;






