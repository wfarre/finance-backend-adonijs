import Transaction from '#models/transaction'

export default class TransactionsController {
  async index() {
    const allTransactions = await Transaction.all()
    return {
      results: allTransactions,
    }
  }
}
