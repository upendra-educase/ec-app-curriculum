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

const Curriculum = loadable({
  loader: () => import(/* webpackChunkName: 'Home' */'../../pages/DashBoard/Curriculum/Curriculum'),
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
    path: "/curriculum",
    Component: Curriculum
  }
]

export default AppRoutes