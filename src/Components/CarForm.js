import { useState } from "react"

const CarForm = (props) => {

    const { onNewCar } = props

    const [brand, setBrand] = useState ('')
    const [model, setModel] = useState ('')
    const [engine, setEngine] = useState ('electric')
    const [basePrice, setBasePrice] = useState ('')
    const [mileage, setMileage] = useState ('')
    const [image, setImage] = useState ('')
    const [selectedColor, setSelectedColor] = useState ('black')
    const [customColor, setCustomColor] = useState('')

  
    const colorHandler = (event) => setSelectedColor(event.target.value)
    const customColorHandler = (event) => setCustomColor(event.target.value)

    const newCarHandler = (event) => {
        event.preventDefault()

        console.log(selectedColor)
        console.log(customColor)
        
        let pickedColor = selectedColor
        if (selectedColor === 'other') {
            pickedColor = customColor
        }
        
        const newCar = {
            brand,
            model,
            engine,
            basePrice,
            mileage,
            image,
            color: pickedColor
        }

        setBrand('')
        setModel('')
        setEngine('electric')
        setBasePrice('')  
        setMileage('')
        setImage('')
        setCustomColor('')
        setSelectedColor('black')

        console.log(newCar)
        onNewCar(newCar)
    }

    const brandInputHandler = (event) => setBrand(event.target.value)
    const modelInputHandler = (event) => setModel(event.target.value)
    const engineInputHandler = (event) => setEngine(event.target.value)
    const basePriceInputHandler = (event) => setBasePrice(event.target.value)
    const mileageInputHandler = (event) => setMileage(event.target.value)
    const imageInputHandler = (event) => setImage(event.target.value)
  
  
    return (
    <form onSubmit={newCarHandler}>

    <div className="form-control">
        <label htmlFor="brand">Brand:</label>
        <input 
          type="text" 
          id="brand" 
          value={brand} 
          onChange={brandInputHandler}
          />
    </div>

    <div className="form-control">
        <label htmlFor="model">Model:</label>
        <input 
          type="text" 
          id="model" 
          value={model} 
          onChange={modelInputHandler}
          />
    </div>

    <div className="form-control">
        <label htmlFor="base-price">Base Price:</label>
        <input 
          type="number" 
          min={0}
          id="base-price" 
          value={basePrice} 
          onChange={basePriceInputHandler}
          />
    </div>
    <div className="form-control">
        <label htmlFor="mileage">Mileage:</label>
        <input 
          type="number" 
          min={0}
          id="mileage" 
          value={mileage} 
          onChange={mileageInputHandler}
          />
    </div>

    <div className="form-control">
        <label htmlFor="image">Image:</label>
        <input 
          type="text" 
          id="image" 
          value={image} 
          onChange={imageInputHandler}
          />
    </div>

    <div className="form-control">
        <label htmlFor="engine">Engine:</label>
        <select id="engine" name="engine" onChange={engineInputHandler} value={engine}>
            <option value="electric">Electric</option>
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="hybrid">Hybrid</option>
        </select>
    </div>

    <div className="form-control">
        <label htmlFor="color">Color</label>
        <select id="color" name="color" onChange={colorHandler} value={selectedColor}>
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="silver">Silver</option>
            <option value="white">White</option>
            <option value="special blue">Special Blue</option>
            <option value="other">Other</option>
        </select>
    </div>

    {selectedColor === 'other' && (
        <div className="form-control">
          <label htmlFor="custom-color">Enter Your custom color:</label>
          <input 
           type="text"
           id="custom-color"
           name="custom-color"
           value={customColor}
           onChange={customColorHandler}
          />
        </div>
    )}

    <button type="submit">Submit</button>
    </form>
  )
}

export default CarForm
