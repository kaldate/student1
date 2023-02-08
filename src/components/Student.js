import React,{useEffect,useState} from "react";
import axios from "axios";
import {useParams}  from "react-router-dom";
import {Link } from "react-router-dom";
import base_url from "./../api/bootapi";
import {  Button,Card,ListGroup,ListGroupItem,Row,Col} from "reactstrap";

const Student=()=>{

    const[student,setStudent]=useState({
      name:" ",
      username:" ",
      email:" ",
      lastname:" ",
      class1:" ",
      class2:" ",
      rno:" ",
      add1:" ",
      add2:" ",
      city:" ",
      pin:" "
      });

      const {id}=useParams();
      useEffect(()=>{
    
       getallcoursesfromserver();
        
     },[]);

     

   

     const getallcoursesfromserver=()=>{
      axios.get(`${base_url}/${id}`).then(
            (response)=>{
               // console.log(response);

               console.log(response.data);
              
               setStudent(response.data)
              // toast.success("courses has been loaded");
            },
            (error)=>{
                console.log(error);
            }
        );
     };
    
      
     
      
    return(
        <div>
<Link  action   to={`/view-courses`} tag="a">  <Button color="primary" className="margin2" >Back To All Students</Button></Link>
              <h1>User Id:{id}</h1>
              
              <hr/>

            <Card className="student1">
              <ListGroup >
             
  <ListGroupItem>
  <h5>Name :{student.name}</h5> 
  </ListGroupItem>
  <ListGroupItem>
    <h5> Username : {student.username}</h5>
 
  </ListGroupItem>
  <ListGroupItem>
    <h5>Email:        {student.email}</h5>
   
  </ListGroupItem>
  <ListGroupItem>
    <h5>LastName:{student.lastname}</h5>
  
  </ListGroupItem>
  <ListGroupItem>
    <h5> First Class:{student.class1}</h5>
 
  </ListGroupItem>
  <ListGroupItem>
    <h5>Second Class:{student.class2}</h5>
  
  </ListGroupItem>
  <ListGroupItem>
    <h5>Roll No:{student.rno}</h5>
  
  </ListGroupItem>
  <ListGroupItem>
    <h5>Address 1:{student.add1}</h5>
  
  </ListGroupItem>
  <ListGroupItem>
    <h5> Address 2:{student.add2}</h5>
 
  </ListGroupItem>
  <ListGroupItem>
    <h5> city:{student.city}</h5>
 
  </ListGroupItem>
  <ListGroupItem>
    <h5> Pincode:{student. pin}</h5>
 
  </ListGroupItem>

</ListGroup>

</Card>
          
              

        </div>
        
        
    );
}

export default Student;