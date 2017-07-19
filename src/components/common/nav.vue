<template>
<div class="yqFrame-left">
  <ul class="yqFrame-left-nav">
    <li viewName="home"><a href="index.html">首　　页</a><span class="icon"></span></li>
    <li viewName="latestDynamic"><a router-link="{path:'latestDynamic'}">最新动态</a><span class="icon"></span></li>
    <li viewName="outburst"><a href="outburst.html">突发事件</a><span class="icon"></span></li>
    <li viewName="prewarning"><a href="prewarning.html">舆情预警</a><span class="icon"></span></li>
    <li viewName="monitor"><a href="monitor.html">重点监控</a><span class="icon"></span></li>
    <!-- <li><a href="javascript:;">舆情态势</a><span class="icon"></span></li> -->
    <li viewName="dynamic"><a href="dynamic.html">舆情指数</a><span class="icon"></span></li>
    <li viewName="sensitivePeople"><a href="sensitivePeople.html">敏感人物</a><span class="icon"></span></li>
    <li viewName="hotTopic"><a href="hotTopic.html">热点话题</a><span class="icon"></span></li>
    <li viewName="hotPeople"><a href="hotPeople.html">热点人物</a><span class="icon"></span></li>
    <li viewName="sentClassify"><a href="sentClassify.html">舆情分类</a><span class="icon"></span></li>
    <li viewName="report"><a href="report.html">舆情报告</a><span class="icon"></span></li>
    <li viewName="kfzx" class="last"><a href="kfzx.html">客服中心</a><span class="icon"></span></li>
  </ul>
</div>
</template>
<script>
import Vue from 'vue'
import Router from '@/router/index'
export default {
  data () {
    return {
      time: '1',
      topic: '',
      people: ''
    }
  }
}
</script>
<style>

</style>
