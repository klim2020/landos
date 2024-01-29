import { createApp } from 'vue/dist/vue.esm-bundler';
import CounterBlock from '@/js/components/CounterBlock.vue'
import PriceBlock from '@/js/components/PriceBlock.vue'


  var vue = createApp({ })

  createApp({}).component('CounterBlock',CounterBlock).mount('#counter');
  createApp({}).component('PriceBlock',PriceBlock).mount('#price-currency');