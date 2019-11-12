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
        return <li>{this.state.data["name"]}</li>
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