const api = {
  archive: "/post/getArchive",
  index: "/post/getPostList",
  laboratory: "/post/getLaboratory",
  post: "/post/getPost/",
  category: "/post/category/",
  keyword: "/post/keyword/",
  tag: "/post/tag/",
  github:'https://github.com/login/oauth/authorize?client_id=b0fbc6a7d4ff2b320158&redirect_uri=http://127.0.0.1:3000/login&scope=user:email',
  addComment:"/post/addComment/",
  getComments:"post/getCommentsByPostId/"
}
export default {
  api
}