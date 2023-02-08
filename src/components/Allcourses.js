import React,{useState,useEffect} from "react";
import Course from "./Course"
import base_url from "./../api/bootapi";
import VisibilityIcon from '@material-ui/icons/Visibility';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import {useParams}  from "react-router-dom";
import {Link } from "react-router-dom";
import { Toast,ToastBody,ToastHeader,Table, Button, Card} from "reactstrap";

const Allcourse=()=>{
   
    useEffect(()=>{
        document.title="view courses";
       getallcoursesfromserver();
        
     },[]);

     const[courses,setCourses]=useState([])
     const {id} =useParams();
    

    

     const getallcoursesfromserver=()=>{
        axios.get(`${base_url}`).then(
            (response)=>{
               // console.log(response);

               console.log(response.data);
               <div className="p-3 bg-warning my-2 rounded">
               <Toast>
               <ToastHeader>
                courses has been loaded
               </ToastHeader>
               <ToastBody>
                 Welcome you can see information about course here!
               </ToastBody>
             </Toast>
             </div>
             setCourses(response.data)
              // toast.success("courses has been loaded");
            },
            (error)=>{
                console.log(error);
                
                 <div className="p-3 bg-danger my-2 rounded">
                    <Toast>
                       <ToastHeader>
                         opssssss!
                       </ToastHeader>
                    <ToastBody>
                        Something Went Wrong 
                   </ToastBody>
               </Toast>
                </div>
               // toast.error("something went wrong");
            }
        );
     };
    
     const deleteStudent=(id)=>{
      axios.delete(`${base_url}/${id}`);
      getallcoursesfromserver();
    }

    

    return(
        <div>
           <Link  action   to={`/`} tag="a">  <Button color="primary"   className="bgimg">Log Out</Button></Link>
          <Card  className="add4">
         
            <Table bordered>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
         {courses.map((user,index)=>(
          <tr>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
            <Link  action   to={`/Student/${user.id}`} tag="a">  <Button color="primary"   outline ><VisibilityIcon/></Button> {'  '}</Link>
              <Link  action   to={`/EditStudent/${user.id}`} tag="a">  <Button color="danger" outline ><BorderColorIcon/></Button> {'  '}</Link>
            
              <Button color="danger" outline onClick={()=>{deleteStudent(user.id)}}><DeleteIcon/></Button>  
            </td>
          </tr>
         ))}
        </tbody>
      </Table>

      </Card>
        </div>
    );
}
export default Allcourse;