<template>
  <div class="page-wrapper">
    <div v-for="(d, i) in market_data.data" :key="i">
      {{ d.id }}
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
    const market_data = await fetch(
      `https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/historical?convert=USD,USD,BTC&date=2021-10-24&limit=100&start=1`
    ).then((res) => res.json())

    this.market_data = this.market_data.concat(market_data.data[0].id)
    console.log(this.market_data)
  },
}
</script>
