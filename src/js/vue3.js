import { createApp } from 'vue/dist/vue.esm-bundler';
import CounterBlock from '@/js/components/CounterBlock.vue'
import PriceBlock from '@/js/components/PriceBlock.vue'
import SideBar from '@/js/components/SideBar.vue'


  var vue = createApp({ })

  createApp({}).component('CounterBlock',CounterBlock).mount('#counter');
  createApp({}).component('PriceBlock',PriceBlock).mount('#price-currency');
  createApp({}).component('SideBar',SideBar).mount('#sidebar2');