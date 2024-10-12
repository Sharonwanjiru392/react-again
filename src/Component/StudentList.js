import axios from "axios"
import useFetch from "./useFetch"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const StudentList = () => {
    const {data: students} = useFetch('http://localhost:4000/students')

    const handleDelete = (id) =>{
        axios.delete ('http://localhost:4000/students/' + id)

        .then (()=>{
            alert('students deleted successfully')
            window.location.reload();
        })
    }

    return(
        <div className="student-list">
            <h2>Student List</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course</th>
                        <th>Class</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students && students.map((student)=>(
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>{student.course}</td>
                            <td>{student.class}</td>
                            
                            <td>
                                <Link to={`/student-detail/${student.id}`}>View</Link>|
                                <Link to={`/edit-student/${student.id}`}>Edit</Link>|
                                <button onClick={()=>handleDelete(student.id)}>Delete</button> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default StudentList;