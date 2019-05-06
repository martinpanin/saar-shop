import React, { Component }from "react";
import  Link from "next/link";

class Menu extends Component {
    render() {
        return(
            <nav>
                <Link  href={"/"}>
                    <a>Link2</a>
                </Link>
                <Link  href={"/"}>
                    <a>Link1</a>
                </Link>
            </nav>
        );
    }
}
export default Menu;
