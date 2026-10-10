import {useState} from "react";
import { Link , useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import  "../../styles/Navbar.css";
import logo from "../../assets/logo.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";


function Navbar(){
const [search, setSearch] = useState("");
const navigate = useNavigate();
const handleSearch = (e) => {
    e.preventDefault();
    navigate(search.trim() ? `/?q=${encodeURIComponent(search.trim())}` : "/");
    };

return (
<header className="navbar"> 
<div className="navbar__inner">
<Link to="/" className="navbar__logo">
    <img  src={logo} alt="EasyMart Logo" />
    EasyMart
</Link>

<div className="navbar__location">
    <FaMapMarkerAlt /> <span>10115 New York</span>
    </div>

    <div className="navbar__search__wrapper">
        <form className="navbar__search" onSubmit={handleSearch}>
            <span className="navbar__search__icon">
                <FaSearch /> 
            </span>
            <input type="text" placeholder="Search for products..."  
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        </form>
        
    </div>

    < div className="navbar__actions">
                <Link to="/cart" className="navbar__cart">
                    <ShoppingCart/><span>14</span> Cart
                
                </Link>
                <Link to="/login" className="navbar__login">
                    Login
                </Link>
    </div>


</div>

</header>

)

}

export default Navbar;





