import React, { Component } from 'react';
import './index.css';

import TreeNode from '../TreeNode';

import Tree from 'react-d3-tree';

const myTreeData = [
    {
      name: 'Top Level',
      children: [
        {
          name: 'Level 2: A',
        },
        {
          name: 'Level 2: B',
        },
      ],
    },
];

class MyTree extends Component {
    render() {
        return (
            <div className="tree">
                <Tree 
                    data={myTreeData}
                    orientation="vertical"
                    collapsible={false}
                    allowForeignObjects
                    nodeSvgShape={{shape: 'none'}}
                    nodeLabelComponent={{
                        render: <TreeNode/>,
                        foreignObjectWrapper: {
                        y: -40,
                        x: -40
                        }
                    }}
                />
            </div>
        )
    }
}

export default MyTree;