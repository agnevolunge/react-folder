const NewsItem = (props) => {
   const { title, category, date, url, imageSrc, imageAlt } = props

    return (
        <div className="news-item">

        <a href={url}>
            <div className="image-wrapper">
            <img src={imageSrc} alt={imageAlt} />
            </div>

            <div className="news-item-content">
            <span className="news-item-category">{category}</span>
            <h2 className="news-item-title">{title}</h2>
            <span className="news-item-date">{date}</span>
            </div>
        </a>

        </div>
    )
}

export default NewsItem