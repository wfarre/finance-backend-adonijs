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
const BalancesController = () => import('#controllers/balances_controller')

router.resource('/transactions', TransactionsController).apiOnly().only(['index'])
router.resource('/pots', PotsController).apiOnly().only(['index', 'store', 'update', 'destroy'])
router
  .resource('/budgets', BudgetsController)
  .apiOnly()
  .only(['index', 'store', 'update', 'destroy'])
router.resource('/balances', BalancesController).apiOnly().only(['index', 'update'])

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
