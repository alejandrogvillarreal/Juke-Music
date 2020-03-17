import React from 'react';
import { Link } from 'react-router-dom';


export default ({ stations }) => {
    console.log(stations)
    return (
        <div>
            <h3>Stations</h3>
            <div className="list-group">
                {

                    Object.keys(stations).map(genre => {
                        return (
                            <div className="list-group-item" key={genre}>
                                <Link to={`/stations/${genre}`}>{genre}</Link>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}