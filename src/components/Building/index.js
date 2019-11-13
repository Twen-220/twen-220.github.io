import React from 'react'
import './styles.css'
import Room from '../Room'

class Building extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isLoaded: false,
            data: null,
            isOpened: false
        }
    }

    render(){
        if (this.state.isLoaded) {
            var data = this.state.data;
            var rooms = data["rooms"].length > 0 ? this.state.data["rooms"].map((item) =>
             <Room key={item["id"]} id={item["id"]} data={item}></Room>
            ) : undefined;
            rooms = rooms !== undefined ? <ul className="sublist col-sm-12">{rooms}</ul> : undefined;
            var roomsList = this.state.isOpened ? rooms : undefined;
            var button = data["rooms"].length > 0 ? <div onClick={this.handleClick} className="list__button">{this.state.isOpened ? 'V' :'>'}</div> : undefined;
            var building = <li className="list__item row" id={data["_id"]} key={data["_id"]}>
                <div className="col-sm-2">{button}</div>
                <div className="list__text col-sm-10">{data["name"]}</div>
                {roomsList}
            </li>
            return building
        }  else {
            return <span>Loading...</span>
        }            
    }

    componentDidMount(){
        this.setState({
            isLoaded: true,
            data: this.props.data,
        })
    }

    handleClick = () => {
        this.setState({
            isOpened: !this.state.isOpened,
        })
    }
}

export default Building