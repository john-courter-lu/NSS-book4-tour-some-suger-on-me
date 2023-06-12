# NSS-book4-tour-some-suger-on-me
# NSS-book4-tour-some-suger-on-me
Step 1: Analytical Thinking

Which modules should you create?

A:  What features do I need to have?
    1. venues click event: window.alert('Here is all the bands that have booked this venue: ...')
    2. bands click event: window.alert('Here is all the venue at which the band is playing: ...')
    3. bookings click event: window.alert('${all 4 attributes of the band that's in this booking}') 
            format: 
            Rocket Pumpkins
            EDM
            Formed in 2005
            3 band members
    4. javascript to generate and append correct html under the section"venues",  which needs to be a bulleted list (unordered list) with all names.    
    5. javascript to generate and append correct html under the section"bands", which needs to be a bulleted list (unordered list) with all names.    
    6. javascript to generate and append correct html under the section"bookings", which needs to be like " Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023".
    
What is the responsibility of each module?
A:  venues.js   html generation + clickevents for venues; 
    bands.js   html generation + clickevents for bands;
    bookings.js   html generation + clickevents for bookings;

What functions should be in which modules?
A:  
    database.js
        getter functions *3
    venues.js 
        html generation function  (export) 
        return venue id in bookings with the input of a band id and vice versa (will be exported and invoked in bands.js)
    bands.js   
        html generation function for bands 
    bookings.js   
        html generation function for bookings;

What is the responsibility of each function?
A:  venues.js 
        html generation function: generate and append html to index.html
        id retrieving /getId function: return venue id in bookings with the input of a band id and vice versa

What should each function return?
A:  venues.js 
        
        html generation function: return html /innerHTML (unordered list with exclusive id name in html opening tag for each list items ) inside the html element: section.venues
        
        id retrieving /getId function: return venue id in bookings with the input of a band id and vice versa

Step 2: Algorithmic Thinking
In which order should you invoke your functions?
A: in the main.js, html generation function will be invoked based on the section's position

What data do you need to get from your database when an event listener is triggered?
A: in the event listner for venues, we'll have venue id or name, we need bookings database to get bands id, which will be a seperate function, then we need bands datebase to get bands name with the information of bands id.

In what order should the data be navigated with for..of loops?
A: with a seperate function, there will be no nested for..of loops.

What is the spcific algorithm for each function? Does the function need parameters? Should it return something?
A: function retrieveId (oneId) => theOtherId

In which order should I write my html, css, js?
A:  -- index.html first, offering structure;
    -- main.js second, temporarily using placeholders for html generation functions, but offering structures as well. 
    -- getter functions, such as getBookings in database.js, exporting for the other 3 modules to get data.
    -- html generation functions for 3 modules, such as bookingsHTML in bookings.js
    -- serve and check html
    -- write main.css, serve and check layout 
    -- getId function in venues.js
    -- click event for venues in venues.js
    -- test it out
    -- click event for ... in ... (import and invoke getId)
    -- test it out
    -- click event for bookings in bookings.js