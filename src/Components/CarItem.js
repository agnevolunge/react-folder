

const CarItem = (props) => {
    const { onRemoveCar } = props
    const { brand, model, color, engine, image, mileage, basePrice, customColor, discount, id} = props.data
  
 

    // if (engine === 'electric') {
    //     enginePrice = 10000
    // } else if (engine === 'hybrid') {
    //     enginePrice = 7500
    // } else if (engine === 'diesel') {
    //     enginePrice = 5000
    // }

    // switch (engine) {
    //     case 'electric':
    //         enginePrice = 10000
    //         break
    //     case 'hybrid':
    //         enginePrice = 7500
    //         break
    //     case 'diesel':
    //         enginePrice = 5000
    //         break
    //     default:
    //         enginePrice = 0 
    //         break;
    // }

    const getEnginePrice = () => {
        if (engine === 'electric') {
            return 10000
        }
        if (engine === 'hybrid') {
            return 7500
        }
        if (engine === 'diesel') {
            return 5000
        }
        return 0
    }
  
    const getMileageDiscount = () => {
        if (mileage > 400000) {
            return 50
        }
        if (mileage > 100000) {
            return 30
        }
        if (mileage > 50000) {
            return 20
        }
        if (mileage > 20000) {
            return 15
        }
        if (mileage > 0) {
            return 10
        }
        return 0
    }

    const getColorPrice = () => {
        if (color === 'special blue') {
            return 500
        }
        if (customColor) {
            return 3000
        }
        return 0
    }

    const enginePrice = getEnginePrice()
    const colorPrice = getColorPrice()

    const extrasPrice = enginePrice + colorPrice

    const mileageDiscount = getMileageDiscount()

    const priceDiscount = discount ? discount : 0
    const priceAfterMileageDiscount = basePrice - (basePrice / 100 * mileageDiscount)
    const totalDiscount = priceAfterMileageDiscount - (priceAfterMileageDiscount / 100 * priceDiscount)

    const totalPrice = totalDiscount + extrasPrice

    const vatPrice = totalPrice * 0.21
    const totalPriceVat = totalPrice + vatPrice

    return (
       <div className="car-item">
         <h2>{brand}({model})</h2>

         {image && <img style={{width: '100%'}} src={image} alt={`${color} ${brand} ${model}`} />}
          <div>
            <h3>1. Automobilio kaina: </h3>
                <p>1.1. Base price: {basePrice} $</p>
          </div>

          <div>
            <h3>2. Papildomos paslaugos: </h3>
                <p>2.1. Variklio tipas ({engine}): {enginePrice} $</p>
                <p>2.2. Spalva ({color}): {colorPrice} $</p>
                <p>2.3. VISO: {extrasPrice} $</p>
          </div>

          <div>
            <h3>3. Kainos sumažėjimas:</h3>
                <p>3.1. Dėl kilometražo: {mileageDiscount}%</p>
                <p>3.2. Nuolaida: {priceDiscount}%</p>
                <p>3.3. VISO: {totalDiscount}$</p>
          </div>

          <div>
            <h3>GALUTINĖ KAINA:</h3>
                <p>4. Galutinė kaina: {totalPrice} $ </p>
                <p>5. PVM: {vatPrice} $ </p>
                <p>6. Galutinė kaina su PVM: {totalPriceVat} $ </p>
          </div>

          <button onClick={() => onRemoveCar(id)}>Delete</button>
       </div>
  )
}

export default CarItem

