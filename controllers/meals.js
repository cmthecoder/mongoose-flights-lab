import { Meal } from '../models/meal.js'

function newMeal(req, res) {
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      title: 'Add Meal',
      meals: meals,
    })
  })
}

function create(req, res) {
  Meal.create(req.body)
  .then(meals => {
    res.redirect('/meals/new')
  })
}

export {
  newMeal as new,
  create,
}