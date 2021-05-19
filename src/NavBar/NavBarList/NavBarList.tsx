import React from "react";
import './NavBarList.css';

function NavBarList(props: { classNames: string | undefined; }) {
    const listItems = ["Home", "About", "Skills", "Experience", "Education", "Portfolio", "Contact"];
    const HASH = "#";
    return (
        <ul className={props.classNames}>
            {listItems.map((listItem, index) =>
                <li key={index}><a
                    href={HASH + listItem.toLocaleLowerCase()}>{listItem[0].toLocaleUpperCase() + listItem.slice(1).toLocaleLowerCase()}</a>
                </li>
            )}
        </ul>
    );
}

export default NavBarList;