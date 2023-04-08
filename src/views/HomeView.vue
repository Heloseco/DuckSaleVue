<script setup>
import { ref,computed} from 'vue'
import { 
  Expand,Fold,ShoppingCart
} from '@element-plus/icons-vue'

const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
const btnIndex =ref(0)

const src='RoastDuck.jpg'


const items=[
{id:1,food:'All Food'},
{id:2,food:'Meat'},
{id:3,food:'Vegetable'},
{id:4,food:'Drinks'}
]



</script>
<template>
 

    <!-- header menu -->
    <div class="menu-head">
      <div class="menu-head-item">  
        <el-icon :size="30" v-if="!isActive" @click="toggle"><Expand /></el-icon>
        <el-icon v-else @click="toggle" :size="30"><Fold /></el-icon>
      </div>
      <div class="menu-head-item">  
        <img src="../assets/img/duck.png" class="duck-logo">
      </div>
      <div class="menu-head-item">  
        <el-icon :size="30"><ShoppingCart /></el-icon>
      </div>
    </div>
    
    <div class="divide" />
    <!-- CATEGORY MENU -->
    <el-scrollbar style="background-color: white;">
      <div class="scrollbar-flex-content">
        <div v-for="(item,index) in items">
        <a class="btn scrollbar-demo-item" :class="{'btnActive': index === btnIndex }" @click="btnIndex = index">
        <div class="cate-icon" >
            <img style=" width: 2rem; height: 2rem;" src='../assets/img/duck.png' />
          </div>
          <div style="margin:auto">{{ item.food }}</div>
         </a>
         
        </div>
      </div>
    </el-scrollbar>

    <div class="divide" />

<div style="margin:0 3vw">
  <el-row :gutter="5">
    <el-col
        v-for="(o, index) in 5"
        :key="o"
        :xs="12" :sm="12" :md="8" :lg="6" :xl="4"
        style="margin-top:1vw">
        <el-card :body-style="{ padding: '5px' }">
          <div style="margin: 2vw 2vw">
            <el-avatar :size="150" :src="src" />
          </div>
          <div style="padding: 4vw">
            <span>Chili Sauce Roasted Star</span>
            <div class="bottom">
              <p class="price">$17.00</p>
              <span class="sale-container">
                <span class="sale-text">Hot Sale</span>
              </span>
           
            </div>
            <span class="quantity">10 Sold</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
</div>
    
    

    
    
  </template>

<style scoped>
.cate-icon{
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  margin-left: 0.3rem;
}
.divide{
  border:solid #c8c9cc 0.1rem;
}

.menu-head{
  height:4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 0;
  padding : 0;
}
.menu-head-item{
  display: flex;
  margin: 2vw;
}
.duck-logo{
  width: 4em;
  height: 4em;
}

.scrollbar-flex-content {
  display: flex;
  margin: 0 0.5rem;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8rem;
  height: 3rem;
  margin: 0.4rem;
  text-align: center;
  border-radius: 5rem;
  background: #f4f4f5;
  color: #000000;
}

.btnActive{
  background-color: #e86363;
  color: #ffffff;
}

.quantity {
  font-size: 3vw;
  color: #999;
}

.bottom {
  margin-top: 1vw;
  line-height:1vw;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap ;
  align-items: center;
  border-radius: 5rem;
  color: #ffffff;
}


.image {
  width: 100%;
  display: block;
}
.sale-container{
  width: 8vw;
  margin-left: 1vw;
  padding: 2vw;
  border-radius: 4vw;
  background-color: #f4c436;
}
.sale-text {
  text-align: center;
  font-size: 2vw;
}
.price{
  color:#eb0707 ;
  font-size: 4vw;
}

</style>
