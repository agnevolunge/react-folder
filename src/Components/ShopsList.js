import ShopItem from "./ShopItem"

function ShopsList () {

    const shopsData = [
        {   
            title: "Parduotuve 1", 
            phone: "+370563256451",
            email: "shop1@parduotuve.lt",
            address: "Rotušės aikštė 1, Kaunas",
            mapLink:"https://goo.gl/maps/9qJ8dUKJLZSjqHkD7",
        }, 
        {   
            title: "Parduotuve 2", 
            phone: "+370563256451",
            email: "shop1@parduotuve.lt",
            address: "Rotušės aikštė 1, Kaunas",
            mapLink:"https://goo.gl/maps/9qJ8dUKJLZSjqHkD7",
        }, 
        {   
            title: "Parduotuve 3", 
            phone: "+370563256451",
            email: "shop1@parduotuve.lt",
            address: "Rotušės aikštė 1, Kaunas",
            mapLink:"https://goo.gl/maps/9qJ8dUKJLZSjqHkD7",
        }, 
        {   
            title: "Parduotuve 4", 
            phone: "+370563256451",
            email: "shop1@parduotuve.lt",
            address: "Rotušės aikštė 1, Kaunas",
            mapLink:"https://goo.gl/maps/9qJ8dUKJLZSjqHkD7",
        }, 
    ]

    const shopsListElement = shopsData.map((shop, index) => {
       
        return (
            <ShopItem 
                key={index}
                title={shop.title} 
                phone={shop.phone} 
                email={shop.email}
                address={shop.address}
                mapLink={shop.mapLink}
            />
        )
    })

    return (
      <div className="shops-list">
        {shopsListElement}
      </div>
    )
}
export default ShopsList 