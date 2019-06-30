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
        const { person } = this.props;
        return (
            <div className={`sidebar ${this.state.expanded ? 'sidebar-expanded' : ''}`} >
                <div>
                    <div className={`sidebar-expand-button ${this.state.expanded ? '' : 'sidebar-expanded-expand-button'}`} onClick={this.handleExpand}>
                        =>
                    </div>
                    <div className="sidebar-content" style={{opacity: `${this.state.expanded ? '1' : '0'}`}}>
                        <img src={avatar} alt='avatar' />
                        <h2>{person.name}</h2>
                        {/* <span>{person.attributes.status}</span>
                        <span>{`${person.attributes.joinSeason} ${person.attributes.joinYear}`}</span>
                        <ul className='contacts'>
                            //contacts
                        </ul>
                        <p>Experience</p>
                        <ul>
                            //positions
                        </ul>
                        <hr/>
                        <p>Events</p>
                        <ul>
                            //events
                        </ul> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;