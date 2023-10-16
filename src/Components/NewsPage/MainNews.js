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

        console.log(newsItem)
        return (

            <NewsItem  
            key = {index}
            title = {newsItem.title}
            category = {newsItem.category}
            date = {newsItem.category}
            url = {newsItem.url}
            imageSrc = {newsItem.imageSrc}
            imageAlt = {newsItem.imageAlt}
            />
        )
       
    })

    return (

        <div className="main-news-list">

        {mainNewsElement}
       {/* <NewsItem 
            title="Ar „ChatGPT“ užims mūsų darbo vietas?" 
            category="AI & Deep learning"
            date="2023-01-27"
            url="/" 
            imageSrc="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" 
            imageAlt="Test"
       />
       
       <NewsItem 
            title="Ar „ChatGPT“ užims mūsų darbo vietas!" 
            category="Deep learning"
            date="2023-04-20"
            url="/" 
            imageSrc="https://codeacademy.lt/wp-content/uploads/2023/01/pexels-christina-morillo-1181467-1536x1025.jpg" 
            imageAlt="Test"
       /> */}

        </div>
    )
}

export default MainNews