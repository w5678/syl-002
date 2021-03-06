import Vue from 'vue';
import Router from 'vue-router';
// 引入路由插件
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/',
      component: () => import('../components/common/Home.vue'),
      meta: { title: '自述文件' },
      children: [
        {
          path: 'dashboard',
          component: () => import('../components/page/Dashboard.vue'),
          meta: { title: '系统首页' },
        },
        {
          path: 'table',
          component: () => import('../components/page/BaseTable.vue'),
          meta: { title: '基础表格' },
        },
        {
          path: 'tabs',
          component: () => import('../components/page/Tabs.vue'),
          meta: { title: 'tab选项卡' },
        },
        {
          // 富文本编辑器组件
          path: 'editor',
          component: () => import('../components/page/VueEditor.vue'),
          meta: { title: '富文本编辑器' },
        },
        {
          // markdown组件
          path: 'markdown',
          component: () => import('../components/page/Markdown.vue'),
          meta: { title: 'markdown编辑器' },
        },
        {
          // 图片上传组件
          path: 'upload',
          component: () => import('../components/page/Upload.vue'),
          meta: { title: '文件上传' },
        },
        {
          // vue-schart组件
          path: 'charts',
          component: () => import('../components/page/BaseCharts.vue'),
          meta: { title: 'schart图表' },
        },
        {
          // 拖拽列表组件
          path: 'drag',
          component: () => import('../components/page/DragList.vue'),
          meta: { title: '拖拽列表' },
        },
        {
          // 拖拽Dialog组件
          path: 'dialog',
          component: () => import('../components/page/DragDialog.vue'),
          meta: { title: '拖拽弹框' },
        },
        {
          // 国际化组件
          path: 'i18n',
          component: () => import('../components/page/Icon.vue'),
          meta: { title: '国际化' },
        },
        {
          // 权限页面
          path: 'permission',
          component: () => import('../components/page/Permission.vue'),
          meta: { title: '权限测试', permission: true },
        },
        {
          path: '404',
          component: () => import('../components/page/404.vue'),
          meta: { title: '404' },
        },
        {
          path: '403',
          component: () => import('../components/page/403.vue'),
          meta: { title: '403' },
        },
      ],
    },
    {
      path: '/login',
      component: () => import('../components/page/Login.vue'),
      meta: { title: 'Login' },
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
