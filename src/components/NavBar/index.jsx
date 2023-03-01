import CardWidget from "../CardWidget";
import "./navbar.css" ;


function NavBar () {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <button>Adidas</button>
                </li>
                <li>
                    <button>Nike</button>
                </li>
            </ul>
            <CardWidget />
        </div>
    );


}







export default NavBar ;