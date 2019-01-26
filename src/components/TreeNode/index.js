import React, { Component } from 'react';
import './index.css'

import avatar from '../../avatar.png';

class TreeNode extends Component {
    render() {
        return (
            <div className="tree-node">
                <img src={avatar} alt="img" style={{borderColor: this.props.borderColor}} />
            </div>
        )
    }
}

export default TreeNode;