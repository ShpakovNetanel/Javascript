import React from "react"
import './Button.css'

export function Button(props){
     return (
          <div className="button">
            <input type="submit" className="input-button" value={props.value} />
          </div>
     )
}