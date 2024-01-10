import loadable from 'react-loadable';

const Home = loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'../../pages/DashBoard/Home/Home'),
  loading: () => (<></>)
})

const Schools = loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'../../pages/DashBoard/Schools/Schools'),
  loading: () => (<></>)
})

const Subscriptions = loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'../../pages/DashBoard/Subscriptions/Subscriptions'),
  loading: () => (<></>)
})

const Curriculam = loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'../../pages/DashBoard/Curriculam/Curriculam'),
  loading: () => (<></>)
})

const AddCurriculum = loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'../../pages/DashBoard/Curriculam/NewCurriculam/NewCurriculam'),
  loading: () => (<></>)
})
const AppRoutes = [
  {
    path: "/",
    Component: Home
  },
  {
    path: "/schools",
    Component: Schools
  },
  {
    path: "/subscriptions",
    Component: Subscriptions
  },
  {
    path: "/curriculam",
    Component: Curriculam
  },
  {
    path: "/addcurriculam",
    Component: AddCurriculum
  }
]

export default AppRoutes