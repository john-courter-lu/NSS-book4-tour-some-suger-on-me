
// this function can be used for both venues and bands sections, it generate the unordered list for a section

import { getBookings, getVenues,getBands } from "./database.js"
import { getObjectById } from "./getObjectById.js"



export const htmlGenerator = (databaseArray, objectNameStringInTheArray) => {
    let HtmlString = "<ul>"

    for (const iterator of databaseArray) {
        if (objectNameStringInTheArray === 'booking') { //databaseArray ===booking
            const venue = getObjectById(getVenues(), iterator.venueID)
            const band = getObjectById(getBands(), iterator.bandID)

            HtmlString += `<li id="${objectNameStringInTheArray}--${iterator.id}">${band.name} are playing at ${venue.name} on ${new Date(iterator.date).toLocaleDateString()}.</li>`

        } else { //===venue or band

            HtmlString += `<li id="${objectNameStringInTheArray}--${iterator.id}">${iterator.name}</li>
    `
        }
    }

    HtmlString += '</ul>'

    return HtmlString
}

