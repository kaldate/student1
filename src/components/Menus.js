import React from "react"
import {ListGroup,ListGroupItem} from "reactstrap"
import {Link } from "react-router-dom";
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import GroupIcon from '@material-ui/icons/Group';
const Menus=()=>{
    return(
         <div className="list">
        <ListGroup  horizontal className="col" >
        <Link className="list-group-item list-group-item-action bg-dark text-white text-center"  action   to="/" tag="a">Home</Link>
        <Link className="list-group-item list-group-item-action bg-dark text-white text-center"  action   to="/add-course" tag="a">< GroupIcon/> Add Student</Link>
        <Link className="list-group-item list-group-item-action bg-dark text-white text-center"  action   to="/view-courses" tag="a"><ViewComfyIcon/> Manage Students</Link>
        <Link className="list-group-item list-group-item-action  bg-dark text-white text-center"  action   to="/about" tag="a">About</Link>
        <Link className="list-group-item list-group-item-action bg-dark text-white text-center"  action   to="/service" tag="a">Sevices</Link>
        <Link className="list-group-item list-group-item-action bg-dark text-white text-center"  action   to="/contact" tag="a">Contact Us</Link>
        </ListGroup>
        </div>
    )
}

export default Menus;