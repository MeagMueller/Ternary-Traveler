
// Creating form for new information
const ttform = {
    addNewTravelPointForm() {
        const newTravelPointDisplay = document.createElement("section")
        display-container.appendChild(newTravelPointDisplay)

        const newTravelNameLabel = document.createElement("label")
        newTravelNameLabel.textContent = ("Name")
        newTravelPointDisplay.appendChild(newTravelNameLabel)

        const newTravelNameInput = document.createElement("input")
        newTravelNameInput.setAttribute = ("id", "newTravelNameInput")
        newTravelPointDisplay.appendChild(newTravelNameInput)

        const newTravelDestinationLabel = document.createElement("label")
        newTravelDestinationLabel.textContent = ("Destination")
        newTravelPointDisplay.appendChild(newTravelDestinationLabel)

        const newTravelDescriptionInput = document.createElement("input")
        newTravelDestinationInput.setAttribute = ("id", "newTravelDestinationInput")
        newTravelPointDisplay.appendChild(newTravelDescriptionInput)

        const newTravelCostLabel = document.createElement("label")
        newTravelCostLabel.textContent = ("Cost")
        newTravelPointDisplay.appendChild(newTravelCostLabel)

        const newTravelCostInput = document.createElement("input")
        newTravelCostInput.setAttribute = ("id", "newTravelCostInput")
        newTravelPointDisplay.appendChild(newTravelCostInput)

        const newPlaceDropdown = document.createElement("select")
        
    }
}

export default ttform