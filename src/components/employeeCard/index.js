import React from "react"


function EmployeeCard(props) {
    return ( 
  
   <tbody>
    <tr>
      <th scope="row"><img className="img-thumbnail"alt={props.name} src={props.image}/></th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr> 
     </tbody>
    )
}
export default EmployeeCard