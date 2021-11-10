export type MarketDataTreeMap = {
  name: 'Market Data'
  children: [
    {
      name: 'Total Market Cap'
      value: 1000
      children: [
        {
          name: 'Bitcoin'
          value: 60000
          category: 'store-of-value'
        },
        {
          name: 'Etherium'
          value: 4292
          category: 'smart-contracts'
        },
        {
          name: 'Cardano'
          value: 2.19
          category: 'store-of-value'
        }
      ]
    }
  ]
}
