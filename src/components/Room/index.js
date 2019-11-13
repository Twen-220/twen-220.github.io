import React from 'react'

class Room extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        }
    }

    render(){
        if (this.state.isLoaded){
            return <li className="row"><div className="col-md-12">{this.state.data["name"]}</div></li>
        } else
            return <li>Void</li>
    }

    componentDidMount(){
        this.setState({
            isLoaded: true,
            data: this.props.data
        });
    }
}

export default Room