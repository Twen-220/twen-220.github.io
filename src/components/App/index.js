import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import BuildingTree from '../BuildingTree'
import './styles.css'

class App extends Component {
    render (){
        var body=
            <div className="container app-wrapper">
                <BuildingTree/>
            </div>
        ;
        return body
    }
}

export default App