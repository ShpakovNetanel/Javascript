import React from "react"
import { Link } from "react-router-dom"
import './Button.css'

export function Button(props){
     return (
          <div className="button">
            <Link to={props.link}><input type="submit" className="input-button" value={props.value} /></Link>
          </div>
     )
}