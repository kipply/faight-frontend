
import React, { Component } from 'react';
import * as firebase from "firebase";

import { PieChart, Pie,Cell, Tooltip} from 'recharts';


class Charts extends Component {

    constructor(props) {

        super(props);
        this.state = {
            wins: 0,
            losses: 0
        }
        const uid = firebase.auth().currentUser.uid;
        let ctx = this;
        firebase.database().ref('/users/' + uid + '/ai/wins').once('value').then(function(snapshot) {
            ctx.setState({ wins: snapshot.val() });
        });
        firebase.database().ref('/users/' + uid + '/ai/losses').once('value').then(function(snapshot) {
            ctx.setState({ losses: snapshot.val() });
        });
    }


    render() {
    const data = [{name: 'Wins', value: this.state.wins}, {name: 'Losses', value: this.state.losses}];
    const colors = ['#66BB6A', '#EF5350'];
		return (
			<div className="charts">
                    <PieChart width={800} height={400}>
                      <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />

                    <Pie startAngle={180} endAngle={0} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8"
                    >
                        {
                        data.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
                      }
                    </Pie>
                   </PieChart>
                   </div>

        );
	}
}

export default Charts;
