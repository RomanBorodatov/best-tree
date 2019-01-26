import React, { Component } from 'react';
import './index.css';

import avatar from '../../avatar.png';

class TreeNode extends Component {
    render() {
        const { nodeData } = this.props;
        return (
            <div className="tree-node" onClick={() => console.log(nodeData.attributes)}>
                <img src={avatar} alt="img" style={{borderColor: this.props.borderColor}} />
            </div>
        )
    }
}

export default TreeNode;