import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

export default {
  // 讲师列表
  pageList(current, limit, searchObj) {
    return request({
      url: `${api_name}/findQueryPage/${current}/${limit}`,
      method: `post`,
      // 使用json格式传递： data:searchObj
      // 使用普通格式传递： params:searchObj
      data: searchObj
    })
  },
  // 讲师删除
  removeTeacherId(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: `delete`
    })
  },
  // 讲师添加
  saveTeacher(teacher) {
    return request({
      url: `${api_name}/save`,
      method: `post`,
      data: teacher
    })
  },
  // 根据id查询讲师
  getTeacherById(id) {
    return request({
      url: `${api_name}/getTeacher/${id}`,
      method: `get`

    })
  },
  // 讲师修改
  updateTeacher(teacher) {
    return request({
      url: `${api_name}/update`,
      method: `put`,
      data: teacher
    })
  },
  // 批量删除
  batchRemove(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: `delete`,
      data: idList
    })
  }
}
