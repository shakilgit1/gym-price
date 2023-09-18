import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/profile/:id", name: "User Profile" },
        { id: 3, path: "/product/:id", name: "Product Details" },
        { id: 4, path: "/category/:name", name: "Category Page" },
        { id: 5, path: "/settings", name: "Settings" }
      ];
      
    return (
        <nav className="bg-red-300 p-4 md:p-0">
            <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
                {
                  open === true? <AiOutlineClose></AiOutlineClose> :
                   <AiOutlineMenu></AiOutlineMenu>                 
                }        
            </div>

           <ul className={`md:flex absolute md:static duration-1000
            ${open? 'top-9' : '-top-60'} bg-red-300 px-4 p-2`}>
             {
             routes.map(route => <Link key={route.id} route={route}></Link>)
             }
           </ul>
        </nav>
    );
};

export default NavBar;