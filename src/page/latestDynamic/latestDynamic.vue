
<template>
  <div class="yqData-cont">
        <div class="yqData-filter">
          <form id="searchForm" action="">
            <div class="yqData-filter-title">
              <h2 class="tit">最新动态</h2>
            </div>
            <div class="yqData-filter-box">

              <div class="yqData-filter-list">
                <h3 class="tit">按源头：</h3>
                <ul class="yqData-filter-ul">
                  <li v-for="(item,index) in source" :class="{'cur':index===selected}" @click="switchTab(index)">
                    <label class="lb"><input type="radio" name="sourceType" :value="item.value" class="ckb"/>{{item.name}}</label>
                  </li>
                </ul>
              </div>

              <div class="yqData-filter-list">
                <h3 class="tit">按主题：</h3>
                <ul class="yqData-filter-ul">
                  <li v-for="(item,index) in topic" @click="chooseCheckBox(index,$event)" :class="{'cur':item.check,'del':isShow}">
                      <label class="lb"><input type="checkbox" name="QueryId" :value="item.value" class="ckb" :checked="item.check" v-model="item.check"/>{{item.name}}
                        <em class="close" v-show="isShow" @click.stop="delSomething(index,$event)"></em>
                      </label>
                  </li>
                  <li class="last">
                    <a href="javascript:;" @click="toggle">自定义</a>
                    <div class="custom-form" v-show="isShow">
                      <input type="text" class="ui-input int" value="生产力" name="" v-model="newWord"><input type="button" class="ui-btn btn" value="添加"
                       name="" @click="addNew">
                    </div>

                  </li>
                </ul>
              </div>

            </div>
            <div class="yqData-filter-btn clearfix">
              <a class="ui-btn ui-btn-yellow" id="searchBtn" href="javascript:;" @click="search(1)">开始搜索</a>
            </div>
          </form>
        </div>

        <!--result table-->
        <div class="yqData-table">
          <table class="yqData-table-tb">
            <tbody>
              <tr>
          			<th width="200">排序</th>
          			<th class="tl">标题</th>
          			<th width="200">时间</th>
          			<th width="200">来源</th>
          			<th width="200">相似条数</th>
          			<th width="300">情感初判<span class="tip">（<em class="red">红</em>为负、<em class="green">绿</em>为正、<em class="blue">蓝</em>为中）</span></th>
          		</tr>
              <tr class="split-tr" v-for="(list,index) in lists" v-if="(index+1)%6===0">
                <td colspan="6">
          				<div class="sp"></div>
          			</td>
              </tr>
              <tr v-else>
                <td>{{index+1}}</td>
                <td class="t1"><div class="title"><a :href="list.SourceUrl" target="_blank">{{list.TitleCN}}</a></div></td>
                <td><span class="sub">{{list.CreatedAt}}</span></td>
                <td><span class="sub">{{list.SourceName}}</span></td>
                <td><span class="sub">{{list.PageId}}</span></td>
                <td><span class="block-red"></span></td>
              </tr>
            </tbody>
          </table>
          <div class="yqData-page">
             <pagination :totalPage="totalPage" :pageNum="pageNum" :totalCount="totalCount" :pageSize="pageSize" @ggg="changePage"></pagination>
          </div>
        </div>

      </div>
</template>
<script>
import Vue from 'vue'
import vueResource from 'vue-resource'
import {latestDynamic} from '../../service/getData'
import pagination from '../../components/common/pagination'
Vue.use(vueResource)
export default {
  data () {
    return {
      source: [
      { name:'全部',  value:0 },
      { name:'网站',  value:1 },
      { name:'手机APP',  value:2 },
      { name:'微博',  value:3 },
      { name:'微信',  value:4 },
      ],
      topic: [
      { name: '涉领导',value:0,check:true},
      { name: '政务',value:1,check:false},
      { name: '民生',value:2,check:false},
      { name: '规划',value:3,check:false},
      { name: '拆迁',value:4,check:false},
      { name: '治安',value:5,check:false},
      { name: '环保',value:6,check:false},
      { name: '财经',value:7,check:false},
      { name: '三农',value:8,check:false},
      { name: '产业',value:9,check:false},
      { name: '旅游',value:10,check:false},
      { name: '文教',value:11,check:false},
      { name: '科技',value:12,check:false},
      ],
      lists: [],
      isCur: true,
      sourceType: 0,
      selected: 0,
      isShow: false,
      newWord:'',
      totalPage : 0,     // 总条数
      totalCount: 0,
      pageSize : 15,   // 每页显示条数
      pageNum : 1,     // 当前页码
      info : ''
    }
  },
  methods: {
    search: function (pageNum) {
      var data = this.getChecked(),
      pageNum = pageNum?pageNum : 1,
      pageSize = this.pageSize;
      console.log("data is"+data);
      latestDynamic(this.sourceType,data,pageNum,pageSize).then(res => {
        this.lists = res.results
        this.totalPage = res.totalPage
        this.totalCount = res.totalCount
        this.pageNum = res.pageNum
        this.pageSize = res.pageSize
      })
    },
    switchTab(index) {
      this.selected = index
    },
    chooseCheckBox(index,$event) {

         var topic = this.topic[index]
         if(topic){
           topic.check = !topic.check
         }
     },
     getChecked() {
       return this.topic.filter(item => item.check).map(item => item.value)
     },
     toggle() {
       this.isShow = !this.isShow
       if(window.localStorage){
         localStorage.setItem("aaa",this.topic)

       }else{
         Cookie.write("aaa",1)

       }

     },
     addNew() {
       if(this.newWord){
         this.topic.push({
           name: this.newWord,
           value: this.newWord,
           check:false
         })
         this.newWord = ""
       }
     },
     delSomething(index,$event) {
       console.log($event.target.tagName.toLowerCase())
       this.topic.splice(index,1)
       $event.stopPropagation()
     },
     created (){
       console.log("init")
     },
     changePage (current) {
       console.log("父组件接收到的页码是" + current)
       this.search(current)
     }
  },
  watch :{
		current : function(v,oval){
			this.info  = ' 页码从' + oval + ' 改变为 ' + v ;
      console.log(this.info)
		}
	},
  components: {
    pagination
  }
}
</script>
<style>

</style>
