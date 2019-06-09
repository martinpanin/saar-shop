import React, { Component } from 'react';

class BackButton extends Component {

    render(link = this.props.link) {
        return (
            <React.Fragment>
                <a href={link} className={'backButton'}>
                    <img width={100} className={''}  src={'/static/img/left-arrow.svg'}/>
                </a>
            </React.Fragment>
        );
    }
}

export default BackButton;