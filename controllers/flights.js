import { Flight } from "../models/flight.js"

// import (Flight)

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res){
  Flight.create(req.body)
  .then(flight => {
    res.redirect(`/flights/new`)
  })
  .catch(err => {
    res.redirect('/flights/new')
  })
}


export {
  newFlight as new,
  create,
}