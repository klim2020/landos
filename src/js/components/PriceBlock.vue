<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios'
const neededValues =[
    {name:"Биткоин",sign:"BTC"},
    {name:"Эфир",sign:"ETH"},
    {name:"Этериум",sign:"ETC"},
    {name:"Tether",sign:"USDT"},
    {name:"Litecoin",sign:"LTC"},
]

const currencyList = ref([]);

const itemRefs = ref([]);

onMounted(() => {
  axios
    .get("https://api.coinbase.com/v2/exchange-rates")
    .then(function (response) {
    neededValues.forEach(el=>{
        let record = {
        name: el.name,
        sign: el.sign,
        currency: 1 / response.data.data.rates[el.sign],
      };
      currencyList.value.push(record);
      console.log(record);
    })
      
    });
});
</script>

<template>
  <div class="container dark-mode">
    <h2 class="pb-4 text-center">Курсы валют</h2>
    <table class="table table-primary table-sm ">
      <thead class="">
        <tr>
          <th class="d-none d-sm-table-cell" scope="col"></th>
          <th class="d-none d-sm-table-cell" scope="col">Название</th>
          <th scope="col">Знак</th>
          <th scope="col">Стоимость(USD)</th>
          <th scope="col">Купить</th>
        </tr>
      </thead>
      <tbody>
        <tr class="my-4" v-for="item,index in currencyList" :key="index">
          <td class="align-middle d-none d-sm-table-cell">{{ index+1 }}</td>
          <td class="align-middle d-none d-sm-table-cell">{{ item.name }}</td>
          <td class="align-middle text-secondary">{{ item.sign }}</td>
          <td class="align-middle">${{ item.currency }}</td>
          <td class="align-middle"><a class="btn bg-secondary-hover border border-secondary rounded">Купить</a></td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>