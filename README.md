# newtech

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


<template>
  <div>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  },
  computed: {
	//计算属性
	},
	methods: {
	//子函数
	},
	watch: {
	//监听
	},
	mounted: function () {
    //渲染之前调用
        this.$axios({
        method: "post",
        url: this.HOSTS + "",
        data: {
        }
      })
        .then(res => {
          if (res.data.code == 0) {
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });

	},
}
</script>

<style scoped>

</style>