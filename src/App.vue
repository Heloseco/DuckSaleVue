<script lang="ts" setup>
import { ref } from 'vue'
import { 
DocumentChecked,
  Expand,Fold,ShoppingCart
} from '@element-plus/icons-vue'

// import duck from './assets/img/duck.png'

const fits = ['scale-down']
const url = './assets/img/duck.png'



let exp = true
const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if(key === '0'){
    exp = !exp;
    console.log(exp);
    
  }
}
let items;
items=[{id:1,food:'duck'},
{id:2,food:'pig'},
{id:3,food:'beef'},
{id:4,food:'fish'}]
</script>

<template>


  <!-- header menu -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >

      <div class="flex-grow" />
        <el-menu-item index="0" class="menu-item" style="padding-bottom:1em">
          <el-icon v-if="exp" :size="60"><Expand /></el-icon>
          <el-icon v-else :size="60"><Fold /></el-icon>
        </el-menu-item>
        
        <el-menu-item index="1" class="menu-item" style="margin:auto">
          <img src="./assets/img/duck.png" class="duck-logo"/>
        </el-menu-item>
        <el-menu-item index="2" class="menu-item" style="padding-bottom:1em"><el-icon :size="60"><ShoppingCart /></el-icon></el-menu-item>
      </el-menu>

   <!-- CATEGORY MENU -->
    <el-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in items" :key="item.id" native='false' class="scrollbar-demo-item">
        <div style="border-radius: 50%; width: 2.5rem; height: 2.5rem; background-color: white; " >
          <img style=" width: 2rem; height: 2rem;" src='./assets/img/duck.png' />
        </div>
        <div style='padding-right:10%'>{{ item.food }}</div>
      </p>
    </div>
  </el-scrollbar>

    <div style="border:dashed #c8c9cc 0.1rem;" />

  

     






</template>
<style scoped>

.menu-item{
  font-size: 1.2rem;
  text-align: center;
}
.duck-logo{
  width: 4em;
  height: 4em;
}

.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 8rem;
  height: 3rem;
  margin: 0.4rem;
  text-align: center;
  border-radius: 5rem;
  background: #f4f4f5;
  color: #000000;
}

</style>
