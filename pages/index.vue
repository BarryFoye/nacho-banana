<template>
  <div class="page-wrapper">
    <font color="red">
      <h1>{{ market_data.name }}</h1>
    </font>
    <h2>{{ market_data.children.name }}:</h2>
    <font color="green">
      <h3>
        <div>{{ market_data.children.value.sum }}</div>
      </h3>
    </font>
    <div v-for="(d, i) in market_data.children.children" :key="i">
      {{ i + 1 }}:
      {{ d.coin_name }}
      {{ d.quote_market_cap }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: 20211024,
      market_data: [],
    }
  },
  async fetch() {
    const url = process.env.DATA_SERVICE_HOST || `localhost`
    const market_data = await fetch(
      // `https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/historical?convert=USD,USD,BTC&date=2021-10-24&limit=100&start=1`
      `http://${url}:3000/v1/market_data/tree_map`
    ).then((res) => res.json())

    this.market_data = market_data
    console.log('L1**************************************')
    console.log(market_data.name)
    console.log('L2**************************************')
    console.log(market_data.children.name)
    console.log(market_data.children.value.sum)
    console.log('L3**************************************')
    this.market_data.children.children.forEach((element) => {
      console.log(element.coin_name)
      console.log(element.quote_market_cap)
    })

    console.log('****************************************')
  },
}
</script>
