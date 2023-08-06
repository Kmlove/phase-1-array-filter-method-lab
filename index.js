// Code your solution here
function findMatching(driversArray, searchName){
    const filteredNames = driversArray.filter((name) => {
        return (name === searchName || name.toLowerCase() === searchName.toLowerCase())
    })

    return filteredNames
}

function fuzzyMatch(driversArray, searchValue){
    const filteredNames = driversArray.filter((name) => {
        return (searchValue[0] === name[0] && searchValue[1] === name[1])
    })

    return filteredNames
}

function matchName(driversArray, searchName){
    const filteredNames = driversArray.filter((driverObj) => {
        return (driverObj.name === searchName)
    })

    return filteredNames
}