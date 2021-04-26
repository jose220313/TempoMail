import Home from '../pages/Home/Home'
import ReadMail from '../components/ReadMail/ReadMail'

const userRoutes = [
    {path: '/inbox', exact: true, component: ReadMail},
    {path: '/', exact: true, component: Home}
]

export { userRoutes }