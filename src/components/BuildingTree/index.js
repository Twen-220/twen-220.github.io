import React from 'react'
import './styles.css'
import Building from '../Building'

class BuildingTree extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        }
    }

    render() {
        var data = this.state.isLoaded && Array.from(this.state.data);
        var listData = this.state.isLoaded && data.map((building) =>             
            <Building key={building["_id"]} data={building}></Building>
        );
        return this.state.isLoaded && <ul className="list">{listData}</ul>
    }

    componentDidMount() {
        var buildings = new window.sc.Query("buildings");
        buildings.find().then((finded) => {
            let buildingsData = finded.result;
            this.setState({
                isLoaded: true,
                data: buildingsData
            })
        });
    }
}

export default BuildingTree