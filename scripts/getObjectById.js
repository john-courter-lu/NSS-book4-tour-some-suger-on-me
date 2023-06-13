
export const getObjectById = (objectArray, id) => {
    for (const iterator of objectArray) {
        if (iterator.id === id) {
            return iterator
        }
    }
}

import { getBands, getBookings, getVenues } from "./database.js";

const bookings = getBookings()
const bands = getBands()
const venues = getVenues()

export const getBookingsObjectsByForeignKey = (columeAIdNameString, columeAIdNumber) => {
    const filteredBookingsObjects = []
    for (const booking of bookings) {
        if (booking[columeAIdNameString] === columeAIdNumber) {
            filteredBookingsObjects.push(booking)
        }
    }
    return filteredBookingsObjects;
}


document.addEventListener('click', event => {
    if (event.target.id.startsWith('venue')) {
        const [, venueIDstring] = event.target.id.split('--')

        const filteredBookingsObjects = getBookingsObjectsByForeignKey("venueID", Number(venueIDstring))

        let alertString = `Bands playing at ${event.target.innerHTML}: `

        for (const iterator of filteredBookingsObjects) {

            alertString += `${getObjectById(bands, iterator.bandID).name}; `
        }

        window.alert(alertString)
    }
})

document.addEventListener('click', event => {
    if (event.target.id.startsWith('band')) {
        const [, bandIDstring] = event.target.id.split('--')

        const filteredBookingsObjects = getBookingsObjectsByForeignKey("bandID", Number(bandIDstring))

        let alertString = `Veneus ${event.target.innerHTML} plays: `

        for (const iterator of filteredBookingsObjects) {

            alertString += `${getObjectById(venues, iterator.venueID).name}; `
        }

        window.alert(alertString)
    }
})

document.addEventListener('click', event => {
    if (event.target.id.startsWith('booking')) {
        const [, bookingIDstring] = event.target.id.split('--')

        const filteredBookingObject = getObjectById(bookings, Number(bookingIDstring))

        const filteredBandsObject = getObjectById(bands, filteredBookingObject.bandID)

        window.alert(`
${filteredBandsObject.name}
${filteredBandsObject.musicalGenre}
Formed in ${filteredBandsObject.formedYear}
${filteredBandsObject.memberNumber} band members
`)
    }
})

