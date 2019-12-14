<template>
  <div>
    <div class="middle">
      <el-card class="box-card1">
        <div slot="header" class="clearfix">
          <span style="font-weight: bold;font-size: 20px">上传菜谱</span>
        </div>
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="菜谱名称" placement="top">
              <div class="name">
                <el-input v-model="name" placeholder="菜谱名称"></el-input>
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp="tag" placement="top">
              <div class="tag">
                <el-select v-model="tag" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp="tag" placement="top">
              <div class="cover">
                <ImgUpload ref="img" />
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp="用料" placement="top">
              <div class="material">
                <el-card class="box-card2">
                  <Material ref="material" />
                </el-card>
              </div>
            </el-timeline-item>
            <el-timeline-item timestamp="做法" placement="top">
              <div class="step">
                <StepList ref="steps" />
              </div>
            </el-timeline-item>

            <el-timeline-item>
              <div class="step"></div>
            </el-timeline-item>
          </el-timeline>
        </div>
        <div class="button">
          <el-button type="primary" @click.prevent="submit">确定上传</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Material from "./components/Material";
import ImgUpload from "./components/ImgUpload";
import StepList from "./components/StepList";

import global from "@/global/global";
import axios from "axios";

export default {
  components: {
    Material,
    ImgUpload,
    StepList
  },
  data() {
    return {
      name: "",
      tag: "",
      options: [
        {
          value: "早餐"
        },
        {
          value: "午餐"
        },
        {
          value: "晚餐"
        },
        {
          value: "无糖"
        },
        {
          value: "减肥"
        },
        {
          value: "孕妇"
        },
        {
          value: "老人"
        },
        {
          value: "小孩"
        },
        {
          value: "烘焙"
        }
      ]
    };
  },
  methods: {
    submit() {
      let temp = this.$refs.steps.getAll();
      let a = [],
        b = [];
      temp.map(i => {
        a.push(i.content);
        b.push(i.img);
      });

      let formData = new FormData();
      formData.append("recipeName", this.name);
      formData.append("recipeDesc", "");
      formData.append("recipeTag", this.tag);
      formData.append("userId", global.id);
      formData.append("size", "0");
      formData.append("pic", this.$refs.img.getAll());

      formData.append("picList", b);
      formData.append("recipeContentList", a);
      formData.append("recipeMaterials", this.$refs.material.getAll());
      formData.append("userId", global.id);

      axios
        .post(global.url + "/release", formData, {
          dataType: "json",
          contentType: "application/json"
        })
        .then(res => {
          console.log(res);
        });

      this.$router.push({ path: "/home" });
    }
  },
  mounted() {}
};
</script>

<style>
.middle {
  position: relative;
  margin: 18%;
}
.button {
  display: flex;
  justify-content: center;
}
.box-card1 {
  text-align: left;
  margin: 0 auto;
}
.material {
  align-content: center;
}
.el-timeline-item {
  font-weight: bold;
  font-size: 30px；;
}
.block {
  width: 90%;
}
</style>