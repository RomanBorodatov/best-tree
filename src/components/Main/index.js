import React, { Component } from 'react';
import './index.css'

import MyTree from '../MyTree'

class Main extends Component {
    render() {
        return (
            <div className="main">
                <MyTree/>
            </div>
        )
    }
}

export default Main;