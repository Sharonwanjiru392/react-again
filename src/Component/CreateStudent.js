import axios from "axios";
import { useState } from "react";
import { ToastContainer } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { toast } from "react-toastify";

const CreateStudent = () =>{
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        class: ""
    });

    const history = useHistory();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setData((prev) =>({...prev, [name]: value}));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/students", data)
        .then((res) => {
             alert("Success! You have successfully");
             history.push("/");

             toast.success("Success! You have successfully", {
                position:toast.POSITION.TOP_RIGHT,
                autoClose: 5000,
             })
         })
    }

    return (
        <div className="create-student">
          <h2>Add New Student</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input type="text" name="course" placeholder="Course" onChange={handleChange} required />
            <input type="text" name="class" placeholder="Class" onChange={handleChange} required />
            <button type="submit">Submit</button>
          </form>
          <ToastContainer/>
        </div>
      );
}

export default CreateStudent;