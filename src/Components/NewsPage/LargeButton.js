import React from "react"
import arrow from "../../arrow-icon.svg"

const LargeButton = (props) => {
    const { title, url } = props

if (!title || !url) {
    return
}

return (
    <React.Fragment> 
  
        <a href={url} className="large-button">
            <span>{title}</span>
            <img src={arrow} alt="arrow icon" />
        </a> 
        {/* <a href={props.url} className="large-button">{props.title}</a> */}
   
    </React.Fragment>
       
)

}

export default LargeButton