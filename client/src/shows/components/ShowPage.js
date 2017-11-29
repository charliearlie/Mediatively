import React from 'react';
import CoreInfo from '../../globalComponents/CoreInfo';

class ShowPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { showInfo } = this.props;
        const releaseDate = showInfo.first_air_date ? showInfo.first_air_date : showInfo.release_date;
        return (
            <div>
                <CoreInfo 
                    title={showInfo.title}
                    releaseDate={releaseDate}
                />
            </div>
        )
    }
}

export default ShowPage;