import { htmlGenerator } from "./htmlGenerator.js";
import { getVenues, getBands, getBookings } from "./database.js";
//import { bookingsHtml } from "./bookings.js";
import "./getObjectById.js"


document.querySelector('#mainContainer').innerHTML = `<h1>Tour Some Suger On Me</h1>
<article class="bookings">
<h2>Bookings</h2>
    ${htmlGenerator(getBookings(), "booking")}
</article>
<article class="lists">
<section class="list-detail venues">
<h2>Venues</h2>
    ${htmlGenerator(getVenues(), "venue")}
</section>
<section class="list-detail bands">
<h2>Bands</h2>
    ${htmlGenerator(getBands(), "band")}
</section>
</article>
`