import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"

const EditStudent = ()=>{
    const {id} = useParams();
    const history = useHistory();
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        class: ""
    });

    //use effect
    useEffect(()=>{
        axios.get('http://localhost:4000/students/' + id)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [id]);

    //handle change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prev)=>({...prev, [name]: value})
    )};

    //handle Submit

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:4000/students/' + id, data)
          .then(() => {
            alert('Student updated successfully');
            history.push('/');
          })
          .catch(() => alert('Error occurred while updating student'));
      };
    
      return (
        <div className="edit-student">
          <h2>Edit Student</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={data.name} onChange={handleChange} required />
            <input type="email" name="email" value={data.email} onChange={handleChange} required />
            <input type="text" name="phone" value={data.phone} onChange={handleChange} required />
            <input type="text" name="course" value={data.course} onChange={handleChange} required />
            <input type="text" name="class" value={data.class} onChange={handleChange} required />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default EditStudent;