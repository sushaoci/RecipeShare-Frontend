<template>
  <div>
    <el-upload
      action
      :auto-upload="false"
      :limit=1
      accept=".jpg,.jpeg,.png"
      list-type="picture-card"
      :on-change="handleAdd" 
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      aria-setsize="20"
      name="upload"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file:[],
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    getAll(){
      return this.file[0];
    },
    handleAdd(file, fileList) {
      this.file.push(file.raw);
    },
    handleRemove(file, fileList) {
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style>
 .upload {
    width: 18px;
    height: 178px;
  }
</style>
