import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function SectionHeader(props: any) {
    return (<h1 className="section-heading mb75px">
        <span>
            <FontAwesomeIcon icon={props.icon}/>
        </span>
        <span>{props.name.toUpperCase()}</span>
    </h1>);
}

export default SectionHeader;