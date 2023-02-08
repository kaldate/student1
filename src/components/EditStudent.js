import React,{Fragment,useEffect,useState} from "react"
import { Button, Container, Form,FormGroup,Label,Input,Card } from "reactstrap"
import axios from 'axios';
import {useParams}  from "react-router-dom";
import base_url from "./../api/bootapi";
import { Toast,ToastBody,ToastHeader,Row,Col } from "reactstrap";

const EditStudent=()=>{
  useEffect(()=>{
    document.title="Add courses";
 },[]);

 const {id} =useParams();


 const[course,setCourse]=useState({
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





   
    
   function handle(e){
    const newdata={...course}
    newdata[e.target.id]=e.target.value;
    setCourse(newdata)
   }
   
   useEffect(()=>{
    loadUser();
   },[]);

   



   const handleForm=(e)=>{
    console.log(course);
    e.preventDefault();
    axios.put(`${base_url}/${id}`,course)

}

const loadUser=()=>{
 
  setCourse(axios.get(`${base_url}/${id}`));
}

    return(
        <div>
      <Fragment>
      <Card className="add">
        <h2 className="text-center my-3">Fill Student Detail</h2>
      <Form onSubmit={handleForm} className="margin2">
      <Row>
        <Col>
        
        <FormGroup style={{width:"180px",height:"30px",marginLeft: '100px',marginRight: '10px'}} >
      <Label for="userId">First Name</Label>
        <Input type="text" 
          name="name"
           id="name"
          value={course.name}
          onChange={(e)=>
           handle(e)
           }/>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup style={{width:"180px",height:"30px",marginLeft: '120px'}} >
      <Label for="title">Middle Name</Label>
      <Input type="text"
       name="username" 
       id="username"
       value={course.username}
       className="text"
       onChange={(e)=>
        handle(e)
        }/>
    </FormGroup>
    </Col>

    <Col>

    <FormGroup style={{width:"180px",height:"30px",marginLeft:'120px'}} >
      <Label for="title">Last Name</Label>
      <Input type="text"
       name="lastname" 
       id="lastname"
       value={course.lastname}
       className="text"
       onChange={(e)=>
        handle(e)
        }/>
    </FormGroup>
    </Col>
    </Row>

        <Row>
        <Col>
        
        <FormGroup style={{width:"180px",height:"30px",marginLeft: '100px',marginTop: '40px'}} >
      <Label for="userId">Select Class 1</Label>
        <Input type="text" 
          name="class1"
           id="class1"
          value={course.class1}
          onChange={(e)=>
           handle(e)
           }/>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup style={{width:"180px",height:"30px",marginLeft: '120px',marginTop: '40px'}} >
      <Label for="title">Select Class 2</Label>
      <Input type="text"
       name="class2" 
       id="class2"
       value={course.class2}
       className="text"
       onChange={(e)=>
        handle(e)
        }/>
    </FormGroup>
    </Col>

    <Col>

    <FormGroup style={{width:"180px",height:"30px",marginLeft:'120px',marginTop: '40px'}} >
      <Label for="title">Enter Roll No</Label>
      <Input type="text"
       name="rno" 
       id="rno"
       value={course.rno}
       className="text"
       onChange={(e)=>
        handle(e)
        }/>
    </FormGroup>
    </Col>
   </Row>
     

   <Row>
        <Col>
        
        <FormGroup style={{width:"300px",height:"30px",marginLeft: '100px',marginTop: '40px'}} >
      <Label for="userId">Address Line 1</Label>
        <Input type="text" 
          name="add1"
           id="add1"
          value={course.add1}
          onChange={(e)=>
           handle(e)
           }/>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup style={{width:"300px",height:"30px",marginLeft: '120px',marginTop: '40px'}} >
      <Label for="title">Address Line  2</Label>
      <Input type="text"
       name="add2" 
       id="add2"
       value={course.add2}
       className="text"
       onChange={(e)=>
        handle(e)
        }/>
    </FormGroup>
    </Col>
   </Row>

   <Row>
        <Col>
        
        <FormGroup style={{width:"180px",height:"30px",marginLeft: '100px',marginTop: '40px'}}>
      <Label for="description">Email</Label>
      <Input type="text"
         id="email"
         value={course.email} 
       
         onChange={(e)=>
          handle(e)
          }/>
    </FormGroup>
    </Col>
    <Col>
    <FormGroup style={{width:"180px",height:"30px",marginLeft: '120px',marginTop: '40px'}} >
      <Label for="title">City</Label>
      <Input type="text"
       name="city" 
       id="city"
       value={course.city}
       className="text"
       onChange={(e)=>
        handle(e)
        }/>
    </FormGroup>
    </Col>

    <Col>

    <FormGroup style={{width:"180px",height:"30px",marginLeft:'120px',marginTop: '40px'}} >
      <Label for="title">PinCode</Label>
      <Input type="text"
       name="pin" 
       id="pin"
       value={course.pin}
       className="text"
       onChange={(e)=>
        handle(e)
        }/>
    </FormGroup>
    </Col>
   </Row>
     
        <Container className="text-center ">
        <Button className="margin6" type="submit" color="warning">Update Course</Button>
        {''} 
         <Button className="margin7" type="reset" color="warning">clear</Button>
    </Container>
      </Form>
      </Card>
      </Fragment>
        </div>

    )
}
export default EditStudent;