
// Creating form for new information
const travelContainer = document.querySelector("#display-container")

const ttforms = {

    addNewTravelButton() {
        const newTravelPointButton = document.createElement("button")
        newTravelPointButton.textContent = ("Add New Destination")
        newTravelPointButton.addEventListener("click", this.addNewTravelPointForm)
        travelContainer.appendChild(newTravelPointButton)

        const newTravelFormSection = document.createElement()
    },

    addNewTravelPointForm() {
        const newTravelPointDisplay = document.createElement("section")
        travelContainer.appendChild(newTravelPointDisplay)

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
        newPlaceDropdown.setAttribute = ("id", "newPlaceDropdown")

    }
}

export default ttforms