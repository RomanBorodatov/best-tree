import React, { Component } from 'react';
import './index.css';
import avatar from '../../avatar.png'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          expanded: true,
        };
    
        this.handleExpand = this.handleExpand.bind(this);
    }

    handleExpand() {
        this.setState({
            expanded: !this.state.expanded,
        })
    }

    render() {
        return (
            <div className={`sidebar ${this.state.expanded ? 'sidebar-expanded' : ''}`} >
                <div>
                    <div className={`sidebar-expand-button ${this.state.expanded ? '' : 'sidebar-expanded-expand-button'}`} onClick={this.handleExpand}>
                        =>
                    </div>
                    <div className="sidebar-content" style={{opacity: `${this.state.expanded ? '1' : '0'}`}}>
                        <img src={avatar} alt='avatar' />
                        <h2>Person Name</h2>
                        <p>Family name</p>
                        <p>Experience</p>
                        <ul>
                            <li>Position</li>
                            <li>Position</li>
                            <li>Position</li>
                            <li>Position</li>
                            <li>Position</li>
                        </ul>
                        <hr/>
                        <p>Events</p>
                        <ul>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                            <li>Event</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;