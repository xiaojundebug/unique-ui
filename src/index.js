import Actionsheet from 'packages/actionsheet'
import Button from 'packages/button'
import Cell from 'packages/cell'
import CellGroup from 'packages/cell-group'
import Checkbox from 'packages/checkbox'
import CheckboxGroup from 'packages/checkbox-group'
import Col from 'packages/col'
import Field from 'packages/field'
import Icon from 'packages/icon'
import Modal from 'packages/modal'
import NavBar from 'packages/nav-bar'
import NoticeBar from 'packages/notice-bar'
import Popup from 'packages/popup'
import Radio from 'packages/radio'
import RadioGroup from 'packages/radio-group'
import Row from 'packages/row'
import Slide from 'packages/slide'
import SlideItem from 'packages/slide-item'
import Spinner from 'packages/spinner'
import Sticky from 'packages/sticky'
import Switch from 'packages/switch'
import Tab from 'packages/tab'
import Tabbar from 'packages/tabbar'
import TabbarItem from 'packages/tabbar-item'
import TabItem from 'packages/tab-item'
import Tag from 'packages/tag'
import Toast from 'packages/toast'

const components = [
  Actionsheet,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Field,
  Icon,
  Modal,
  NavBar,
  NoticeBar,
  Popup,
  Radio,
  RadioGroup,
  Row,
  Slide,
  SlideItem,
  Spinner,
  Sticky,
  Switch,
  Tab,
  Tabbar,
  TabbarItem,
  TabItem,
  Tag,
  Toast
]

export {
  Actionsheet,
  Button,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Col,
  Field,
  Icon,
  Modal,
  NavBar,
  NoticeBar,
  Popup,
  Radio,
  RadioGroup,
  Row,
  Slide,
  SlideItem,
  Spinner,
  Sticky,
  Switch,
  Tab,
  Tabbar,
  TabbarItem,
  TabItem,
  Tag,
  Toast
}

const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}

// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default {
  install
}
