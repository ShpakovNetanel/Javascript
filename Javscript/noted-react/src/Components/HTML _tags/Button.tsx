import React from "react"
import { useNavigate } from "react-router-dom"
import './Button.css'

export function Button(props){
     const navigate = useNavigate()

     return (
          <div className="button">
            <input type="submit" className="input-button" value={props.value} onClick={() => navigate(props.link)}/>
          </div>
     )
}