<template>
     <nav v-if="totalPage>0" class="pagi-contain">
		 <ul class="pagination pagi-list">
			 <li class="pagi-item"><a href="javascript:;" class="pagi-link" v-show="pageNum > 1" @click="count(pageNum = 1)"> 首页 </a></li>
			 <li class="pagi-item"><a href="javascript:;" class="pagi-link" v-show="pageNum > 1" @click="count(--pageNum)"> 上一页 </a></li>

       <li class="pagi-item" v-for="n in totalPage" :class="{ 'active': n  == pageNum }" v-if="">
         <a href="javascript:;" class="pagi-link" @click="count(pageNum=n)"> {{ n }} </a>
       </li>

			 <li class="pagi-item"><a href="javascript:;" class="pagi-link" v-show="pageNum < totalPage" @click="count(++pageNum)"> 下一页</a></li>
			 <li class="pagi-item"><a href="javascript:;"  class="pagi-link" v-show="pageNum < totalPage" @click="count(pageNum = totalPage)"> 尾页 </a></li>
		 </ul>
		 <ul class="pagination pull-right">
			 <li><span> 共 {{ totalCount }} 条数据 </span></li>
			 <li><span> 每页 {{ pageSize }} 条数据 </span></li>
			 <li><span> 共 {{ totalPage }} 页 </span></li>
			 <li><span> 当前第 {{ pageNum }} 页 </span></li>
		 </ul>
	 </nav>
 </template>
 <script>
 export default {
      props: {
        totalCount: {// 总条数
          type: Number,
          default: 0
        },
        totalPage: {//总页码
          type: Number,
          default: 0
        },
        pageSize : {//每页大小
          type: Number,
          default: 3
        },
       pageNum : {  //当前页码
        type: Number,
        default: 1
      }
    },
    computed: {

    },
    methods: {
      count(current) {
        this.$emit("ggg",current)
      }
    }
 }
 </script>
 <style scoped>

 .pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover{
 	    z-index: 3;
 	    color: #fff;
 	    cursor: default;
 	    background-color: #337ab7;
 	    border-color: #337ab7;
 }
 </style>
