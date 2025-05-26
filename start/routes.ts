/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TransactionsController = () => import('#controllers/transactions_controller')
const PotsController = () => import('#controllers/pots_controller')
const BudgetsController = () => import('#controllers/budgets_controller')

router.resource('/transactions', TransactionsController)
router.resource('/pots', PotsController)
router.resource('/budgets', BudgetsController)

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
