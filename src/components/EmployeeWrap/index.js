import React from "react"
// import employeeCard from "./components/EmployeeCard"


function EmployeeWrap(props) {
    return (

        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>

                </tr>

            </thead>
          {props.children}
          </table>
    )
}
export default EmployeeWrap