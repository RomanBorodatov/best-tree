import React, { Component } from 'react';
import './index.css';

import TreeNode from '../TreeNode';

import Tree from 'react-d3-tree';

const myTreeData = [
    {
        name: 'Ксенія Єлева',
        attributes: {
            imageLink: '',
            status: 'Alumni',
            joinSeason: 'Осінь',
            joinYear: '2013',
            positions: ['Social responsible on spring course 2014', 'mo mw autumn 2015', 'food resp spring course 2015', 'oscar party team 2015', 'party responsible on RM 2015'],
            events: ['out of region north west rm 2013', 'participant of summer course 2015 in.Veszprem', 'autumn course 2015 in Helsinki', 'delegate on mongolian rm 2015'],
            contacts: {
                fb: '',
                insta: '',
                email: 'kseniaeleva@gmail.com'
            }
        },
        children: [
            {
                name: 'Вікторія Прищепа',
                attributes: {
                    imageLink: '',
                    status: 'Full',
                    joinSeason: 'Осінь',
                    joinYear: '2016',
                    positions: ['MO BEST Travel night 2017', 'MO MW 2017', 'Coorg. BEST Training Weeks 2016', 'Food resp. Spring course 2017', 'Food resp. JBT 2017 (Kyiv)', 'Academ. Resp. Spring course 2018', 'VP4HR (2018-2019)'],
                    events: ['Delegate Double regional meeting in Iasi 2017', 'Out of region Regional meeting in Tallinn 2017', 'Trainings for leaders in Krakow 2017', 'Summer Course in Istanbul (Turkey) 2017', 'Autumn Course in Valladolid, Spain 2018'],
                    contacts: {
                        fb: 'https://www.facebook.com/vitochka.kvitochka.7',
                        insta: '',
                        email: 'vitapryshchepa@gmail.com'
                    }
                },
                children: [
                    {
                        name: 'Міша Швець',
                        attributes: {
                            imageLink: '',
                            status: 'Full',
                            joinSeason: 'Осінь',
                            joinYear: '2017',
                            positions: ['Quest resp Halloween 17', 'Topic Resp EBEC', 'MO MW Spring 18', 'Party (Co)Resp Course', 'Treasurer in XI Board aka inBOARDel'],
                            events: ['RM Lodz Delegate'],
                            contacts: {
                                fb: 'https://www.facebook.com/profile.php?id=100006100150146',
                                insta: '',
                                email: '19mch97@gmail.com'
                            }
                        },
                        children: [],
                    },
                    {
                        name: 'Катя Стефанович',
                        attributes: {
                            imageLink: '',
                            status: 'Full',
                            joinSeason: 'Осінь',
                            joinYear: '2017',
                            positions: ['PR resp КАК', 'Designer EBEC', 'Day Resp Course', 'MO Hackathon', 'Pax Resp Course'],
                            events: ['Brno Summer course – Pax', 'RM Delegate Vienna', 'SLUSH volunteer Helsinki'],
                            contacts: {
                                fb: 'https://www.facebook.com/profile.php?id=100011212662293',
                                insta: '',
                                email: 'estefanovich1@gmail.com'
                            }
                        },
                        children: [],
                    },
                ],
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