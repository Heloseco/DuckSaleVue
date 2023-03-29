<template>
        <el-container>
          <el-header style="padding: 0" height="50vh">
            <el-icon :size=25 style="margin: 2%;position:absolute"><Back /></el-icon>
            <div class="demo-image">
              <div class="block">
                <div class="duck-box">
                  <el-image class="duck" :fit="fit" :src="url"  />
                </div>
              </div>
            </div>
          </el-header>
          
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
            <div class="pills">
              <div>
                Optional
              </div>
            </div>
          </div>
          
          <div class="option-check">
            <div class="check">
              <input type="checkbox" class="red-checkbox" />
              <span>Duck Chillie 120%</span>
            </div>
            <div style="color:#9e9898">
              +1.50$
            </div>
          </div>
          
          <div class="option-check">
            <div class="check">
              <input type="checkbox" class="red-checkbox" />
              <span >Duck Chillie 100%</span>
            </div>
            <div style="color:#9e9898">
              +1.50$
            </div>
          </div>
        </div>
      </el-main>
      <el-footer height="5vh" style="padding: 0 2vw;">
        <el-row>
          <el-col :span=12>
            <el-button type="danger" size="large" class="btn btn-buy">Buy Now</el-button>
          </el-col>
          <el-col :span=12>
            <el-button type="warning" size="large" class="btn btn-add">Add to Cart</el-button>
          </el-col>
        </el-row>
  
      </el-footer>
    </el-container>
        
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

</script>

<style scoped>
.divide{
  border:solid #c8c9cc 0.1rem;
  margin: 1rem;
}
.demo-image {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  background-color: pink;
  border-radius:  0 0 5% 5%;
}
.demo-image .block {
  text-align: center;
  display: inline-block;
  width: 45vh;
  height:45vh;
  margin: auto;
}
.demo-image .duck-box{
    width: 95%;
    height: 95%;
    display: inline-block;
}
.demo-image .duck{
  height: 100%;
  width: 100%;
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
  color:   #e86363;
  margin:0 1rem;
}
.amount{
  display: flex;
  align-items: center;
  line-height: 0%;
  margin: 0 1rem;
  background-color:#e3e4e7;
  height: 2.5rem;
  border-radius: 2rem;
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
    border: 2px solid   #e86363;
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
    width: 110%;
    height: 110%;
    border: 2px solid   #e86363;
    border-radius: 5px;
    background-color:   #e86363;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  /* show checkmark icon when checkbox is checked */
  .red-checkbox:checked::before {
    opacity: 1;
  }

  .pills{
    position: relative;
    text-align: center;
    width: 5rem;
    height: 1.2rem;
    border: block 2px #9e9898;
    border-radius: 10px;
    background-color: #9e9898;
    color: #3c3939;
    opacity: 0.5;
  }

  .btn{
    width: 100%;
  }

  .btn-buy{
    border-radius: 5rem 0 0 5rem;
  }

  .btn-add{
    border-radius: 0 5rem 5rem 0;
  }


</style>