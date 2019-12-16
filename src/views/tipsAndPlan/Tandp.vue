 <template>
  <div>
    <el-container>
      <el-aside width="300px">
        <Tips :tips="tips" />
      </el-aside>
      <el-main class="plan">
        <div class="dp">
        <div class="dptitle">
          <h3>今日计划</h3>
          <p></p>
          <span class="cal">根据您的今日计划，预计您今日将摄入</span>
          <span class="col">{{this.energy}}</span>
          <span class="cal">卡路里</span>
        </div>
          <div class="b">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              @change="click"
            ></el-date-picker>
          </div>
        </div>
        <el-divider></el-divider>
        <Plan :plans="plans" />
      </el-main>
      <el-aside width="100px"></el-aside>
    </el-container>
  </div>
</template>

<script>
import Tips from "./components/tips";
import Plan from "./components/plan";

import tandp from "@/data/tipsAndPlan.json";

import axios from "axios";
import global from "@/global/global";

export default {
  components: {
    Tips,
    Plan
  },

  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: "",
      value2: "",
      activeName: "first",
      tips: [],
      plans: [],
      energy: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    getData() {
      let formData = new FormData();
      formData.append("userId", global.id);

      axios.post(global.url + "/mydailyplan",formData).then(res => {
          console.log(res.data)
        this.plans = res.data

          let count=0;
          this.plans.map(i=>{
              count+=i.recipe.calorie;
          })
          // console.log(count)
          this.energy=count;
      });

      axios.get(global.url + "/tips").then(res => {
          console.log(res.data)
          this.tips = res.data
      });

    },
    click(t) {
      console.log(t); //结果为一个数组，如：["2018-08-04", "2018-08-06"]

      let formData = new FormData();
      formData.append("date",t);
      formData.append('userId',global.id);
      axios.post(global.url+"/todayplan",formData).then(res=>{
        this.plans = res.data;
          let count=0;
          this.plans.map(i=>{
              count+=i.recipe.calorie;
          })
          // console.log(count)
          this.energy=count;
      })
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
.nav-menu {
  margin-bottom: 10px;
}

.dptitle {
  margin: 13px;
  margin-bottom: 13px;
}
.plan {
  text-align: left;
}
.cal {
  color: #909399;
  font-size: 15px;
}
.col {
  color: #f9d349;
  font-size: 15px;
  font-weight: bolder;
}
h3 {
  margin-block-end: 1em;
  margin-block-start: 3em;
}
.is-selected {
  color: #f9d349;
}
.b{
  position: absolute;
  padding-left:350px;
  padding-top:3px;
  width: 50px;
}
  .dp{
    display:flex;
    flex-flow:row;
  }
</style>
