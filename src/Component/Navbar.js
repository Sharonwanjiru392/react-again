import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Navbar = () =>{
    return(
        <div className="Navbar">
            <h1>blog Post</h1>
            <div className="Links">
            <Link to="/" className="one">
                StudentList
                </Link>
                <Link to="/create-student" className="one">
                CreateStudent
                </Link>
            </div>
        </div>
    )
}

export default Navbar;