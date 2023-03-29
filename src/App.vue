

<template>

      <el-container>
        <el-header style="padding: 0;" height=10>
        <div class="demo-image">
          <el-icon :size=25 style="margin: 2%"><Back /></el-icon>
        <div class="block">
          <div class="duck-box">
            <el-image class="duck" :fit="fit" :src="url"  />
          </div>
        </div>
        </div>
        </el-header>
      </el-container>
      <el-main style="padding:0px">
          <p class="Menu-head">Chilli Sauce Roasted Star Duck</p>
          <div class="Sale">
            <div class="price">
              <span>32$</span>
            </div>
            <div class="amount">
              <el-button style="margin:0 0.5rem;" type="info" :icon="Minus" circle />
              <p style="margin:0 0.5rem; font-weight: bold;">2</p>
              <el-button style="margin:0 0.5rem;"  type="warning" :icon="Plus" circle />
            </div>
          </div>
      </el-main>

      <div class="divide" />

      <div class="Desc-Menu">
        <div>
          <span style="font-weight: bold;">Description</span>
        </div>
        <div>
          <span class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veritatis earum neque commodi corporis, placeat eaque. Dolorem, est. Aliquam, praesentium?</span>
        </div>
      </div>

      <div class="divide" />

      <div class="Option-Menu">
        <div class="option">
          <span style="font-weight: bold;">Frequently Bought Together</span>
          <span style="color: #9e9898;margin-right: 1rem;">Optional</span>
        </div>

        <div class="option-check">
          <div class="check">
            <input type="checkbox" class="red-checkbox" />
            <span>Duck Chillie 120%</span>
          </div>
         <div>
          +1.50$
         </div>
        </div>

        <div class="option-check">
          <div class="check">
            <input type="checkbox" class="red-checkbox" />
            <span>Duck Chillie 100%</span>
          </div>
         <div>
          +1.50$
         </div>
        </div>



      </div>
  
</template>



<script setup>
import { ref } from 'vue'
import { ElCheckbox } from 'element-plus';
import { 
  Back,
  Plus,
  Minus
} from '@element-plus/icons-vue'
const fit= 'fill'
const url= 'RoastDuck.jpg'
const isChecked = ref(false);
</script>

<style scoped>
.divide{
  border:solid #c8c9cc 0.1rem;
  margin: 1rem;
}
.demo-image {
  background-color: pink;
  border-radius:  0 0 10% 10%;
}
.demo-image .block {

  text-align: center;
  display: inline-block;
  width: 100%;
  height: 25rem;
  box-sizing: border-box;

}
.demo-image .duck-box{
    width: 95%;
    height: 95%;
    display: inline-block;
}
.demo-image .duck{
  height: 97%;
  width: 97%;
  border-radius: 50%;
}

.Menu-head{
  margin: 1rem;
  font-weight: bold;
  font-size: 1.3rem;
}
.Sale{
  display: flex;
  justify-content:space-between;
}

.price{
  font-size: 1.8rem;
  color: red;
  margin:0 1rem;
}
.amount{
  display: flex;
  align-items: center;
  line-height: 0%;
  margin: 0 1rem;
}

.Desc-Menu{
  margin: 1rem;
}

.Desc-Menu .text{
  font-size: 0.8rem;
  color: #9e9898;
}

.Option-Menu{
  margin: 1rem;;
}
.option{
  display: flex;
  width:100%;
  justify-content: space-between;
}

.option-check{
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 0%;
  margin:1rem 0;
}
.option-check .check{
  display: flex;
  align-items: center;
}
.red-checkbox {
    margin-right: 0.5rem ;
    appearance: none; /* hide default checkbox appearance */
    width: 1.2rem;
    height: 1.2rem;
    border: 2px solid red;
    border-radius: 5px;
    outline: none; /* remove focus border */
    position: relative;
  }

  /* custom checkmark icon */
  .red-checkbox::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-color: red;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  /* show checkmark icon when checkbox is checked */
  .red-checkbox:checked::before {
    opacity: 1;
  }
</style>