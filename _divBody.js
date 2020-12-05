import React, {Component} from 'react';
import './style/_divBody.css';
import _divSelectors from './_divSelectors'

export default class _divBody extends Component {

    generateWorkout = () => {
        let fullBody = document.getElementById('fullBodySplitDay');
        let upperLowerBody = document.getElementById('upperLowerSplitDay');
        let pushPullLegs = document.getElementById('pushPullLegsSplitDay');

        if(fullBody.style.display === 'block') {
            if(fullBody.value === 'fullBodyMainGroupDay'){
                alert("You've Just Selected Main Goup Day!");
            } else if(fullBody.value === 'fullBodySecondaryGroupDay'){
                alert("You've Just Selected Secondary Goup Day!");
            }
            
            
        }
    }


    render() {
        return (
            <div className="_divBody">
                <div id="divWorkoutContainer">
                    <_divSelectors />

                    <span id="generateWorkoutButton" onClick={() => this.generateWorkout()}>
                        Generate Workout
                    </span>

                </div>
            </div>
        )
    }
}