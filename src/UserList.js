import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Table, Row, Col, Container } from 'react-bootstrap'

const UserList = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            console.log(res)
            setUsers(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
    return (
        <div className ="App">
            <Container className="contact-content debug-border pt-5 login"  >
           
           <Row className="justify-content-center " >       
                <Col xs="7" md="7" >
            <Table striped bordered hover variant="dark" className="pt-5">
  <thead>
    <tr>
     
      <th>Name</th>
      <th>User Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {
      users.map(user =>(

 
      <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      </tr>
          
          
  
  
   
      
  )
  )
}
</tbody>

</Table>
</Col>
</Row>
</Container>
        </div>
    )
}

export default UserList
