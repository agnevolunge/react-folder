import NewsItem from "./NewsItem"

const MainNews = () => {

    const mainNewsData = [
        {
            title: "Ar „ChatGPT“ užims mūsų darbo vietas?", 
            category: "AI & Deep learning",
            date: "2023-01-27",
            url: "/" ,
            imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/,pexels-christina-morillo-1181467-1536x1025.jpg",
            imageAlt: "Test",
        },
        {
            title: "Ar „ChatGPT“ užims mūsų darbo vietas!", 
            category: "AI & Deep learning",
            date: "2023-01-14",
            url: "/" ,
            imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/,pexels-christina-morillo-1181467-1536x1025.jpg",
            imageAlt: "Test",
        },
    ]

    const mainNewsElement = mainNewsData.map((newsItem, index) => {

        let {title, category, date, url, imageSrc, imageAlt} = newsItem
        
        return (
            <NewsItem  
            key = {index}
            title = {title}
            category = {category}
            date = {date}
            url = {url}
            imageSrc = {imageSrc}
            imageAlt = {imageAlt}
            />
        )
    })

    return (
        <div className="main-news-list">
        {mainNewsElement}
        </div>
    )
}

export default MainNews