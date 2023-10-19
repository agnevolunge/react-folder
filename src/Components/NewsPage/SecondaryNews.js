import NewsItem from "./NewsItem"

const SecondaryNews = () => {

    const secondaryNewsData = [
        {
            title: "Ar „ChatGPT“ užims mūsų darbo vietas?", 
            category: "AI & Deep learning",
            date: "2023-01-21",
            url: "/" ,
            imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg", 
            imageAlt: "Test",
        },
        {
            title: "Ar „ChatGPT“ užims mūsų darbo vietas?" ,
            category: "AI & Deep learning",
            date: "2023-05-10",
            url: "/" ,
            imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" ,
            imageAlt: "Test",
        },
        {
            title: "Ar „ChatGPT“ užims mūsų darbo vietas?" ,
            category: "AI & Deep learning",
            date: "2023-01-23",
            url: "/" ,
            imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/,pexels-christina-morillo-1181467-1536x1025.jpg" ,
            imageAlt: "Test",
        },
        {
            title: "Ar „ChatGPT“ užims mūsų darbo vietas?" ,
            category: "AI & Deep learning",
            date: "2023-08-02",
            url: "/" ,
            imageSrc: "https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" ,
            imageAlt: "Test",
        },
    ]

    console.log(secondaryNewsData)

    const secondaryNewsElement = secondaryNewsData.map((secondaryNewsItem, index) => {

        let {title, category, date, url, imageSrc, imageAlt} = secondaryNewsItem
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

        <div className="secondary-news-list">
            {secondaryNewsElement}
        </div>
    )
}

export default SecondaryNews