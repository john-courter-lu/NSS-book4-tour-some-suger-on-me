
// previous booking HTML generator. replaced by if...else... when merging into htmlGenerator.js

/* 

import { getBands, getBookings, getVenues } from "./database.js";
import { getObjectById } from "./getObjectById.js";

const venues = getVenues();
const bookings = getBookings()
const bands = getBands()

export const bookingsHtml = () => {
    let htmlString = '<ul>'


    for (const booking of bookings) {
      const  venue = getObjectById(venues, booking.venueID)
      const  band = getObjectById(bands, booking.bandID)
        
        htmlString += `<li id="booking--${booking.id}">${band.name} are playing at ${venue.name} on ${new Date(booking.date).toLocaleDateString()}.
        </li>
        `
    }
    htmlString += '</ul>'
    return htmlString
}

*/
