import Link from "next/link";

const NavLink = ({href, title}) => {
    return (
        <Link href={"href"} className='block py-2 pl-3 pr-4 text-white text-2xl sm-text-xl rounded md:p-0 font-bold hover:text-white'>
            {title}
            </Link>
    );
};

export default NavLink;