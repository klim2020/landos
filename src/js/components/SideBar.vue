
<script setup>
import { ref, onMounted } from 'vue'

const year = ref(document.write(new Date().getFullYear()));

const toggler = ref();
const btn = ref();

onMounted(() => {
      btn.value.addEventListener('click',()=>{toggler.value.classList.toggle('active')});
})

</script>
<template>
    <nav ref = "toggler"
      id="sidebar"
      class="order-last active"
      
    >
      <div class="custom-menu">
        <button
          ref = "btn"
          type="button"
          id="sidebarCollapse"
          class="btn btn-primary"
        ></button>
      </div>
      <div class="">
        <h1>
          <a href="#features" class="logo">Меню <span> Blog Agency</span></a>
        </h1>
        <ul class="list-unstyled components mb-5">
          <li class="active">
            <a href="#heroblock"><span class="fa fa-home mr-3"></span> Миссия и цели</a>
          </li>
          <li>
            <a href="#counter"><span class="fa fa-user mr-3"></span> О нас</a>
          </li>
          <li>
            <a href="#price-currency"><span class="fa fa-sticky-note mr-3"></span> Курсы</a>
          </li>
          <li>
            <a href="#partners"><span class="fa fa-cogs mr-3"></span> Партнеры</a>
          </li>
          <li>
            <a href="#accordeon"
              ><span class="fa fa-paper-plane mr-3"></span> FAQ</a
            >
          </li>
          <li>
            <a href="#tabs"
              ><span class="fa fa-paper-plane mr-3"></span> О Бирже</a
            >
          </li>
        </ul>
        <div class="mb-5 px-4">
          <h3 class="h6 mb-3">Subscribe for newsletter</h3>
          <form action="#" class="subscribe-form">
            <div class="form-group d-flex">
              <div class="icon"><span class="icon-paper-plane"></span></div>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email Address"
              />
            </div>
          </form>
        </div>
        
      </div>
    </nav>
</template>

<style lang="scss">
    //Side menu block
#sidebar{
  width: 300px;
  color: #fff;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  transition: all .3s;
  position: fixed;
  z-index: 5;
  right: 0px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: #2f89fc;
    background: linear-gradient(135deg,#2f89fc 0%,#5effc9 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2f89fc',endColorstr='#5effc9',GradientType=1 );
    opacity: .95;
    z-index: -1;
  }
  .h6 {
    color: #fff
  }
  
   h1 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 30px
  }
  
   h1 .logo {
    color: #fff;
    padding: 10px 30px;
    display: block
  }
  
   h1 .logo span {
    font-size: 13px;
    color: #fff;
    display: block
  }
  
   ul.components {
    padding: 0
  }
  
   ul li {
    font-size: 16px
  }
  
   ul li>ul {
    margin-left: 10px
  }
  
   ul li>ul li {
    font-size: 14px
  }
  
   ul li a {
    padding: 15px 30px;
    display: block;
    color: rgba(255,255,255,.9);
    border-bottom: 1px solid rgba(255,255,255,.1)
  }
  
   ul li a:hover {
    color: #fff;
    background: #2f89fc;
    border-bottom: 1px solid #2f89fc
  }
  
   ul li.active>a {
    background: 0 0;
    color: #fff
  }
  
   ul li.active>a:hover {
    background: #2f89fc;
    border-bottom: 1px solid #2f89fc
  }
}


#sidebar.active {
  right: -300px;
}

#sidebar.active .custom-menu {
  margin-left: -40px
}

#sidebar.active .btn.btn-primary:before {
  content: "\f053";
  font-family: fontawesome;
  right: 2px!important
}

#sidebar.active .btn.btn-primary:after {
  display: none
}




 .custom-menu {
  display: inline-block;
  position: absolute;
  top: 20px;
  left: 0;
  margin-left: -35px;
  -webkit-transition: .3s;
  -o-transition: .3s;
  transition: .3s
}

@media(prefers-reduced-motion:reduce) {
   .custom-menu {
      -webkit-transition: none;
      -o-transition: none;
      transition: none
  }
}

 .custom-menu .btn.btn-primary {
  background: #2f89fc;
  border-color: transparent;
  position: relative;
  color: #000;
  width: 30px;
  height: 30px
}

 .custom-menu .btn.btn-primary:after, .custom-menu .btn.btn-primary:before {
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: fontawesome;
  color: #fff
}

 .custom-menu .btn.btn-primary:after {
  content: "\f054";
  left: 2px
}

a[data-toggle=collapse] {
  position: relative
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%)
}

@media(max-width: 991.98px) {
  #sidebarCollapse span {
      display:none
  }
}
</style>