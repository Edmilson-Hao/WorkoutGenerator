import React,{Component} from 'react';
import './style/_divSelectors.css'
export default class _divSelectors extends Component {
    render() {
        return (
            <div className="_divSelectors">
                <div id="divWorkoutSelector">
                        <select id="workoutSplitSelector" name="workoutSplitSelector">
                            <option value="">Select One</option>
                            <option value="fullBodySplit">Full Body Split</option>
                            <option value="upperLowerSplit">Upper Lower Split</option>
                            <option value="pushPullLegsSplit">Push Pull Legs Split</option>
                        </select>

                        <select className='secondarySelector' id="fullBodySplitDay" name="fullBodySplitDay">
                            <option value="">Select One</option>
                            <option value="fullBodyMainGroupDay">Main Group Day</option>
                            <option value="fullBodySecondaryGroupDay">Secondary Group Day</option>
                        </select>

                        <select className='secondarySelector' id="upperLowerSplitDay" name="upperLowerSplitDary">
                        </select>

                        <select className='secondarySelector' id="pushPullLegsSplitDay" name="pushPullLegsSplitDay">
                        </select>


                    </div>
            </div>
        )
    }
}