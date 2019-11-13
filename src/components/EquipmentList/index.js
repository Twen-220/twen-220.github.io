import React from 'react'

class EquipmentList extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            isLoaded: false,
            data: null
        }
    }

    render(){
        return <h1>{this.state.data}</h1>
    }

    componentDidMount(){
        console.log(this.props)
    }
}
export default EquipmentList