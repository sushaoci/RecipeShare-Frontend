 <template>
  <div>
    <el-container>
      <el-aside width="300px">
        <Tips :tips="tips" />
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
      </el-aside>
      <el-main class="plan">
        <div class="dptitle">
          <h3>今日计划</h3>
          <p></p>
          <span class="cal">根据您的今日计划，预计您今日将摄入</span>
          <span class="col">{{this.energy}}</span>
          <span class="cal">卡路里</span>
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
      // axios.get(global.url + "").then(res => {
      //   this.tips = res.
      //   this.plans = res.
      //   this.energy = res.
      // });

      this.tips = tandp.tips;
      this.plans = tandp.plans;
      this.energy = tandp.energy;
    },
    click(t) {
      console.log(t); //结果为一个数组，如：["2018-08-04", "2018-08-06"]
      // let formData = new FormData();
      // formData.append("",t);
      // formData.append('',global.id);
      // axios.post(global.url+"",formData).then(res=>{
      //   let data = res.data;
      // })
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
  position:fixed;
  margin: 22px;
  padding-top:21%;
  width: 50px;
}
</style>