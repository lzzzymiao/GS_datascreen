<template>
  <!--  动态数字组件  -->
  <countTo :startVal='startVal' :endVal='endVal' :duration='5000'></countTo>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
    components: { countTo },
    // 用于接收父组件传来的值
    props: {
      startVal: {
        type: Number,
        default: 0
      },
      endVal: {
        type: Number,
      },
    },
    data () {
      return {

      }
    }
  }
</script>
