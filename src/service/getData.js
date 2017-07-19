import fetch from '../config/fetch'
export const latestDynamic = (sourceType,topicType,pageNum,pageSize) => fetch('dongtai/all/',{
  sourceType: sourceType,
  topicType: topicType,
  pageNum: pageNum,
  pageSize: pageSize
})
