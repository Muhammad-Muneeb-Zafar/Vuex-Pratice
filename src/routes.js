import JsonData from './components/JsonData'
import View from './components/View'
import Edit from './components/Edit'

export default [
  {path:'/', component: JsonData},
  {path:'/view/:id', component: View},
  {path:'/edit', component: Edit}
]
