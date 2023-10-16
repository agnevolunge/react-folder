const EventsItem = (props) => {

    // const day = props.day
    // const month = props.month
    // const imageSrc = props.imageSrc
    // const imageAlt = props.imageAlt
    // const location = props.location
    // const title = props.title
    // const url = props.url
    
    const { day, month, imageSrc, imageAlt, location, title, url } = props
    
    if (!title || !url) {
        return
    }
    
    let imageElement = ""
        if (imageSrc) {
            imageElement = (
                <div className="image-wrapper">
                <img src={imageSrc} alt={imageAlt}/>
                </div>
            )
        }
    
    const dateElement = day && month && (
        <div className="event-date">
        <span className="event-day">{day}</span>
        <span className="event-month">{month}</span>
        </div>
    )
    
    const locationElement = location && <span className="event-location">{location}</span>
    
    
        return (
            <div className="event-item">
            <a href={url}>
    
            {imageElement} 
                
                {/* jeigu paveikslelis yra, tada tenkinama si salyga, t.y. rodoma nuotrauka. Tai vadinama Conditional rendering */}
                {/* {props.imageSrc && (
                    <div className="image-wrapper">
                        <img src={props.imageSrc} alt={props.imageAlt}/>
                    </div>
                )}  */}
    
            <div className="event-content">
    
                {/* jei neturim dienos arba menesio, kad nerodytu viso gabalo. Siuo atveju apacioj, jei turim diena ir menesi, tada viska atvaizduojam. */}
                {/* {day && month && (
                    <div className="event-date">
                    <span className="event-day">{day}</span>
                    <span className="event-month">{month}</span>
                    </div>
                )} */}
                {dateElement}
               
    
                <div className="event-info">
                    {locationElement}
    
                    {/* jei pvz nera lokacijos galima rasyti kaip zemiau, arba pries return susikurti kintamaji ir ji grazinti returne kaip cia virsuje */}
    
                    {/* {location && <span className="event-location">{location}</span>} */}
                    
                <h3 className="event-title">{title}</h3>
                </div>
            </div>
            </a>
        </div>
        )
    }
    
    export default EventsItem