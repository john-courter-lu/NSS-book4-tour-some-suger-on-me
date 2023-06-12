const database = {
    bands:[
        {
          id: 1,
          name: "Band A",
          memberNumber: 4,
          musicalGenre: "Rock",
          formedYear: 2005
        },
        {
          id: 2,
          name: "Band B",
          memberNumber: 3,
          musicalGenre: "Pop",
          formedYear: 2010
        },
        {
          id: 3,
          name: "Band C",
          memberNumber: 5,
          musicalGenre: "Jazz",
          formedYear: 1998
        },
        {
          id: 4,
          name: "Band D",
          memberNumber: 2,
          musicalGenre: "Hip Hop",
          formedYear: 2003
        },
        {
          id: 5,
          name: "Band E",
          memberNumber: 6,
          musicalGenre: "Metal",
          formedYear: 1980
        },
        {
          id: 6,
          name: "Band F",
          memberNumber: 3,
          musicalGenre: "Indie",
          formedYear: 2012
        },
        {
          id: 7,
          name: "Band G",
          memberNumber: 4,
          musicalGenre: "Country",
          formedYear: 1995
        },
        {
          id: 8,
          name: "Band H",
          memberNumber: 5,
          musicalGenre: "Electronic",
          formedYear: 2008
        },
        {
          id: 9,
          name: "Band I",
          memberNumber: 3,
          musicalGenre: "Blues",
          formedYear: 1972
        },
        {
          id: 10,
          name: "Band J",
          memberNumber: 6,
          musicalGenre: "Reggae",
          formedYear: 1990
        }
        

    ],    
    venues:[
        {
            id: 1,
            name: "Venue A",
            address: "123 Main Street",
            sqFootage: 5000,
            occupancyMaximum: 200
          },
          {
            id: 2,
            name: "Venue B",
            address: "456 Elm Street",
            sqFootage: 8000,
            occupancyMaximum: 300
          },
          {
            id: 3,
            name: "Venue C",
            address: "789 Oak Avenue",
            sqFootage: 4000,
            occupancyMaximum: 150
          },
          {
            id: 4,
            name: "Venue D",
            address: "321 Pine Lane",
            sqFootage: 6000,
            occupancyMaximum: 250
          },
          {
            id: 5,
            name: "Venue E",
            address: "654 Cedar Road",
            sqFootage: 5500,
            occupancyMaximum: 220
          },
          {
            id: 6,
            name: "Venue F",
            address: "987 Maple Drive",
            sqFootage: 3500,
            occupancyMaximum: 120
          },
          {
            id: 7,
            name: "Venue G",
            address: "234 Walnut Court",
            sqFootage: 7000,
            occupancyMaximum: 280
          },
          {
            id: 8,
            name: "Venue H",
            address: "567 Birch Street",
            sqFootage: 4500,
            occupancyMaximum: 180
          },
          {
            id: 9,
            name: "Venue I",
            address: "890 Pine Avenue",
            sqFootage: 5200,
            occupancyMaximum: 210
          },
          {
            id: 10,
            name: "Venue J",
            address: "123 Oak Lane",
            sqFootage: 4800,
            occupancyMaximum: 190
          }

    ],    
    bookings:[
        {
            id: 1,
            bandID: 1,
            venueID: 1,
            date: 1613538111396
          },
          {
            id: 2,
            bandID: 2,
            venueID: 2,
            date: 1614540112442
          },
          {
            id: 3,
            bandID: 3,
            venueID: 3,
            date: 1615542113498
          },
          {
            id: 4,
            bandID: 4,
            venueID: 4,
            date: 1615944114555
          },
          {
            id: 5,
            bandID: 5,
            venueID: 5,
            date: 1616046115611
          },
          {
            id: 6,
            bandID: 6,
            venueID: 6,
            date: 1617548116667
          },
          {
            id: 7,
            bandID: 7,
            venueID: 7,
            date: 1618050117723
          },
          {
            id: 8,
            bandID: 8,
            venueID: 8,
            date: 1618952118779
          },
          {
            id: 9,
            bandID: 9,
            venueID: 9,
            date: 1619254119834
          },
          {
            id: 10,
            bandID: 10,
            venueID: 10,
            date: 1619856120890
          },
          {
            id: 11,
            bandID: 1,
            venueID: 2,
            date: 1621058121946
          },
          {
            id: 12,
            bandID: 2,
            venueID: 3,
            date: 1621560123002
          },
          {
            id: 13,
            bandID: 3,
            venueID: 4,
            date: 1622562124059
          },
          {
            id: 14,
            bandID: 4,
            venueID: 5,
            date: 1623564125115
          },
          {
            id: 15,
            bandID: 5,
            venueID: 6,
            date: 1633566126171
          }

    ]    
}    

export const getBands =() =>{
    return database.bands.map(band => ({...band}))
}
  //  try: delete return and {}

export const getVenues =() => database.venues.map(venue =>({...venue}))

export const getBookings =() => {return database.bookings.map(booking =>({...booking}))}
  