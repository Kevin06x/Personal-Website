import {Link} from 'react-scroll';

const NavLink = ({href, title}) => {
    return (
        <Link
            to={href}
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500}
            className='block py-2 pl-3 pr-4 text-white text-2xl sm-text-xl rounded md:p-0 font-bold hover:text-white cursor-pointer'>
            {title}
            </Link>
    );
};

export default NavLink;