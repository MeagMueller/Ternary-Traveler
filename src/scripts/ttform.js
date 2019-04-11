
// Creating form for new information
const travelContainer = document.querySelector("#display-container")

const ttForms = {

    addNewTravelButton() {
        const newTravelPointButton = document.createElement("button")
        newTravelPointButton.textContent = ("Add New Destination")
        newTravelPointButton.addEventListener("click", this.addNewTravelPointForm)
        travelContainer.appendChild(newTravelPointButton)

        const newTravelSection = document.createElement("section")
        newTravelSection.setAttribute("id", "newTravelSection")
        travelContainer.appendChild(newTravelSection)

        
    },

    newInterestPoint() {
        const name = document.querySelector("#newTravelNameInput")
        
    },

    addNewTravelPointForm() {
        const newTravelPointDisplay = document.createElement("section")
        travelContainer.appendChild(newTravelPointDisplay)

        const newTravelNameLabel = document.createElement("label")
        newTravelNameLabel.textContent = "Name"
        newTravelPointDisplay.appendChild(newTravelNameLabel)

        const newTravelNameInput = document.createElement("input")
        newTravelNameInput.setAttribute = ("id", "newTravelNameInput")
        newTravelPointDisplay.appendChild(newTravelNameInput)

        const newTravelDestinationLabel = document.createElement("label")
        newTravelDestinationLabel.textContent = "Destination"
        newTravelPointDisplay.appendChild(newTravelDestinationLabel)

        const newTravelDescriptionInput = document.createElement("input")
        newTravelDestinationInput.setAttribute = ("id", "newTravelDestinationInput")
        newTravelPointDisplay.appendChild(newTravelDescriptionInput)

        const newTravelCostLabel = document.createElement("label")
        newTravelCostLabel.textContent = "Cost"
        newTravelPointDisplay.appendChild(newTravelCostLabel)

        const newTravelCostInput = document.createElement("input")
        newTravelCostInput.setAttribute = ("id", "newTravelCostInput")
        newTravelPointDisplay.appendChild(newTravelCostInput)

        const newPlaceDropdown = document.createElement("select")
        newPlaceDropdown.setAttribute = ("id", "newPlaceDropdown")

        const saveTravelPointButton = document.createElement("button")
        saveTravelPointButton.textContent = "Save"
        saveTravelPointButton.addEventListener("click", () => {
            ttForms.newInterestPoint()
            .then((saveTravel) => {
                ttForms.createInterestList()
            })
        })
        newTravelPointDisplay.appendChild(saveTravelPointButton)
    },
    
    createInterestList(list) {
        const interestsDisplayContainer = document.createElement("div")
        
        const editButton = document.createElement("button")
        editButton.textContent = "Edit"

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"


    }
}

export default ttForms