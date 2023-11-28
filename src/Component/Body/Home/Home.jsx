import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Home = () => {
    const [count,setCount]=useState(0)
    const [getEmp,setEmp]=useState([])
    const gettask=async()=>{
      const res=await axios.get("http://localhost:3030/api/gettask")
      setEmp(res.data)
    }
    gettask()

    const deleteEmp = async (id) => {
      const isConfirmed = window.confirm("Are you sure you want to delete this employee?");
  
      if (isConfirmed) {
        try {
          const res = await axios.delete(`http://localhost:3030/api/deltask/${id}`);
          console.log('Employee deleted:', res.data);
        } catch (error) {
          console.error('Error deleting employee:', error);
        }
      } else {
        console.log('Deletion cancelled.');
      }
      getEmployee() 
    };


  return (
   <div className="home-table-main">
         <div id='table-main'>
           <table className='tablemain'>
    <thead>
      <tr>
        <th className='id'>User ID</th>
        <th className='username'>UserName</th>
        <th className='action'>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        getEmp.map((data,index)=>
        <tr key={index}>
        <td>{data.empId}</td>
        <td>{data.name}</td>
       <div className="btn-area">
       <td><Link to={`/view/${data._id}`}><button className="view-btn">View</button></Link>
          <Link  to={`/edit/${data._id}`}><button className="edit-btn">Edit</button></Link>
          <Link className='delete-btn' to={`#${data._id}`} onClick={() => deleteEmp(data._id)}>Delete</Link>
        </td>
       </div>
      </tr>
        )
      }
    
    </tbody>
  </table>
    </div>
   </div>
  )
 
}

export default Home
