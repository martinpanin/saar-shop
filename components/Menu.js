import React, { Component }from "react";
import  Link from "next/link";

class Menu extends Component {
    render() {
        return(
            <React.Fragment>
            <nav className={'menu'}>
                <Link href={"/"}>
                    <a>Home</a>
                </Link>
                <Link  href={"/services"}>
                    <a>Services</a>
                </Link>
                <Link  href={"/portfolio"}>
                    <a>Portfolio</a>
                </Link>
                <Link  href={"/contacts"}>
                    <a>Contacts</a>
                </Link>
            
            </nav>
            </React.Fragment>
        );
    }
}
export default Menu;
