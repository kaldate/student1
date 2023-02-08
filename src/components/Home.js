import React,{useEffect} from "react";
import { Button,Container,Row,Col } from  'reactstrap';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Login from "./Login"
import Example from "./Caursolex";

const Home=()=>{
  useEffect(()=>{
    document.title="Home";
 },[]);

 



 const navigate = useNavigate();

  const navigateToService= () => {
    navigate('/Login');
  };
    return  <div>
     <Example/>
      <Row>
        <Col md={6}  >
          <Login/>
       
        </Col>
        <Col md={6}>
          <div className="ball">
        </div>
          </Col>
      </Row>
   
</div>
};
export default Home;