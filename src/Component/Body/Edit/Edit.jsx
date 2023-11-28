import React, { useEffect, useState } from 'react';
import './Edit.css';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { Promise } from 'mongoose';


const Edit = () => {
  const {id}=useParams()
  let navigate=useNavigate()
  let photo="";
  const [val,setVal]=useState({
    name:"",
    email:"",
    empId:"",
    phone:"",
    designation:"",
    salary:"",
    address:"",
    photo:"",
  })
  console.log(id);
  
 

  const getDatas=async()=>{
    const res=await axios.post(`http://localhost:3030/api/getDetails/${id}`)
    if(res.status==200)
    {
      setVal(res.data)
    }
  }

  useEffect(()=>{
    getDatas()

  },[])

  console.log("val",val);


  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
  }
  
  const Getdata=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
  }
  
  const Upload=async(e)=>{
    e.preventDefault()
  
    photo=await convertToBase64(e.target.files[0])
    console.log(photo);
  }
  
  const editData=async(e)=>{
    e.preventDefault()
    console.log(val)
    
    const res=await axios.patch(`http://localhost:3030/api/editEmployee/${id}`,{...val,photo:photo})
    if(res.status!=200){
      console.log(res.status);
      alert("Data Not Edited")
    }else{
      alert("Data Edited SuccessFully")
      navigate("/")
    }
  }

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row data">
        <div className="col-md-4 ">
          <div className="profile-img">
            <h2></h2>
            <span>Edit Page</span>
              <img src={val.photo} alt=""/>
              <div className="file btn btn-lg btn-primary" id='change-btn'>
                Change Photo
                <input type="file" name="photo" onChange={Upload} />
              </div>
            </div>   
            <button className="button-81" role="button" onClick={editData}>SUBMIT</button>
             </div>
          <div className="col-md-8 details">
          <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={val.name} onChange={Getdata}  placeholder="Enter your name" />
            <br></br>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={val.email} onChange={Getdata}  placeholder="Enter your email" />
            <br></br>
            <label htmlFor="empId">EmpId:</label>
            <input type="text" id="empId" name="empId" value={val.empId} onChange={Getdata}  placeholder="Enter your employee ID" />
            <br></br>
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone" value={val.phone} onChange={Getdata}  placeholder="Enter your phone number" />
                  <br></br>
            <label htmlFor="designation">Designation:</label>
            <input type="text" id="designation" name="designation" value={val.designation} onChange={Getdata}  placeholder="Enter your designation" />
            <br></br>
            <label htmlFor="salary">Salary:</label>
            <input type="text" id="salary" name="salary" value={val.salary} onChange={Getdata}  placeholder="Enter your salary" />
                  <br></br>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={val.address} onChange={Getdata}  placeholder="Enter your address" />
                  <br></br>
            <label htmlFor="address">Experience:</label>
            <input type="text" id="experience" name="experience" value={val.experience} onChange={Getdata}  placeholder="Enter your experience" />
 
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;






