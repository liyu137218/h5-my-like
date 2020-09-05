const vappHome = () => import("@/views/vapp/home.vue")
const vappUploadImg = () => import("@/views/vapp/uploadImg/index.vue")
const routes = [
    {
        path:'/vapp',
        name:'vappHome',
        component:vappHome,
        children:[{
            path:'/vapp/uploadImg',
            name:'vappUploadImg',
            component:vappUploadImg
        }]
    }
]
export default routes