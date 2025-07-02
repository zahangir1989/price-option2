import { useState } from "react";
import Link from "../Link/Link";
import { LuSquareMenu } from "react-icons/lu";
import { FaRegWindowClose } from "react-icons/fa";

const Header = () => {
 const [open, setOpen] = useState(false)

  const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/contact', name: 'Contact' },
  { id: 4, path: '/services', name: 'Services' },
  { id: 5, path: '/blog', name: 'Blog' }
];
    return (
  
     <nav className="text-black p-6 bg-yellow-300 px-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>

        {
          open === true ? <LuSquareMenu></LuSquareMenu>
           : <FaRegWindowClose></FaRegWindowClose>
        }
      </div>

      <ul className={`md:flex absolute duration-1000 md:static 
      ${open ? 'top-20' : '-top-60'}
        bg-yellow-300`}>
        {
          routes.map(route => <Link key={route.id} route={route}></Link> )
        }
      </ul>
     </nav>
      

    );
};

export default Header;