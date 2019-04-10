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

        const newTravenDestinationLabel = document.createElement("label")
        newTravelPointDisplay.appendChild(newTravelDestinationLabel)

        const newTravelDescriptionInput = document.createElement("input")
        newTravelDestinationInput.setAttribute = ("id", "newTravelDestinationInput")
        newTravelPointDisplay.appendChild(newTravelDescriptionInput)

        
    }
}

export default ttform