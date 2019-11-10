import React, {Component} from 'react'
import './styles.css'

class BuildingTree extends Component {
    render() {
        return <div className="row">
            <div className="col-md-4">
                <ul className="tree-list">
                    <li className="element">
                        <div className="element__button">+</div>
                        <div className="element__text">Text</div>
                        <div className="element__indicator">(20)</div>
                        <div className="clearfix"></div>
                    </li>
                    <li className="element">
                        <div className="element__button">-</div>
                        <div className="element__text">Text</div>
                        <div className="element__indicator">(20)</div>
                        <div className="clearfix"></div>
                    </li>
                    <li className="element">
                        <div className="element__button">+</div>
                        <div className="element__text">Text</div>
                        <div className="element__indicator">(20)</div>
                        <div className="clearfix"></div>
                    </li>
                </ul>
            </div>
            <div className="equipment-block col-md-8">
                
            </div>
        </div>
    }
}

export default BuildingTree