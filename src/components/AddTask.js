import React,{ useState , useEffect  } from "react";
import axios from 'axios'
import { FormControl, InputGroup , Button , ListGroup } from 'react-bootstrap'
function AddTask() {
    const [name, setName] = useState('');
    const [info,setInfo]=useState([]);
    const add = (event) =>{
      event.preventDefault();
    console.log(name);
    const postData = {
      name : name
    }
    axios.post("http://localhost:3006/user",postData).then(res =>{
      console.log(res.data)
    })
    setName('');
    }
  
    useEffect(()=>{
      axios.get("http://localhost:3006/user").then(req=>{
        setInfo(req.data)
      })
    },[add])
  
    return (
        <div>
     <>
    <div className="container box">
    <div className="container ">
      <h1 className="text-center mt-4 mb-4">Digikull Students</h1>
      <h4 className="text-center mt-4 mb-4"><strong>Hello User</strong></h4>
    </div>
    <div className="container">
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      placeholder="name" value={name} 
      onChange={(e) =>{setName(e.target.value)}}

    />
    <Button  onClick={add} >
      Add
    </Button>
  </InputGroup>
       </div>
       <ListGroup className="my-10">
       {
        info.map((ele) =>(
          <ListGroup.Item variant="info" className="mx-1">{ele.name}</ListGroup.Item>
        ))
       }
       </ListGroup>
       </div>
    </>

        </div>
    )
}

export default AddTask





































 
 








    
    
























