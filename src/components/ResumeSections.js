import React from 'react';

export function ResumeSection(props) {
    return (
        <div>
            <dt>{props.title}</dt>
            <dd>{props.data}</dd>
        </div>
    );
}