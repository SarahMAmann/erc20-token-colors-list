import React from 'react'
import '../../src/App.css'
import { colors, getColorFromString } from '../data/color-list'

export class ListArea extends React.Component {
    render() {
        return (
            <div>
            <div className="color-list" style={{color: 'white'}}>
            {colors.map(color => (
              <div key={color}>
              <div className="token-name">{color.name}:</div>
              <div className="color-value" style={{backgroundColor: color.value}}>{color.value}</div>
            </div>
            ))}
          </div>
        </div>
        )
    }
}