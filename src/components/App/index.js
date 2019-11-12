import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import BuildingTree from '../BuildingTree'
import EquipmentList from '../EquipmentList'
import './styles.css'

class App extends Component {
    render (){
        var body=
            <div className="container app-wrapper">
                <div className="row">
                    <div className="col-md-6 block">
                        <BuildingTree></BuildingTree>
                    </div>
                    <div className="col-md-6 block">
                        <EquipmentList></EquipmentList>
                    </div>
                </div>
            </div>
        ;
        return body
    }
}

export default App