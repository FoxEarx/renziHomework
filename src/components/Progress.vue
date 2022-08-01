<template>
  <div class="box">
    <div>
      <slot />
    </div>
    <div class="jindu" :style="{ borderRadius: borderRadius }">
      <div
        :style="{
          backgroundColor: color,
          width: title,
          textAlign: textAlign,
          borderRadius: borderRadius,
        }"
      >
        {{ title }}
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String, //进度
    },
    color: {
      type: String, //进度条颜色
    },
    textAlign: {
      type: String, //进度百分比文字位置
    },
    borderRadius: {
      type: String, //
    },
  },
  data() {
    return {}
  },

  created() {},

  methods: {},
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 500px;
}
.jindu {
  border: 1px solid #008c8c;
  background-color: #fff;
  div {
    animation: progress 3s;
    @keyframes progress {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }
}
</style>
