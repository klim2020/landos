<script setup>
import { ref, onMounted } from 'vue'
import coinImg from '/img/coin.png?w=128&format=webp';
import usdtImg from '/img/usdt.svg?w=128&format=webp';

const subtractText = ref(1000000);

const addText = ref(50000000);

const itemRefs = ref([])

onMounted(() => {
  setInterval(()=>addText.value+=350,30000);
  setInterval(()=>subtractText.value-=350,30000);
})
</script>

<template>
  <div class="container px-4 py-5" id="custom-cards">
    <h2 class="pb-2 text-center border-bottom">Статистика</h2>

    <div class="row row-cols-1 row-cols-lg-2 align-items-stretch  g-4">
      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg bg-primary bg-gradient">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class=" mb-4 display-6 lh-1 fw-bold">Баланс крипто валюты</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img :src="coinImg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
              </li>
              <li class="d-flex align-items-center me-auto">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                <h3 class = "p-2 text-warning border border-warning rounded">{{ subtractText }}</h3>
              </li>
              <li class="">
                <img :src="usdtImg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg bg-primary bg-gradient">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 class=" mb-4 display-6 lh-1 fw-bold">Криптовалюты продано</h3>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <img :src="coinImg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
              </li>
              <li class="d-flex align-items-center me-auto">
                <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                <h3 class = "p-2 text-warning border border-warning rounded">{{ addText }}</h3>
              </li>
              <li class="">
                <img :src="usdtImg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>