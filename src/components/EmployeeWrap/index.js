import React from "react"


function employeeWrap(props) {
    return (

        <table className="table table-hover">
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
export default employeeWrap