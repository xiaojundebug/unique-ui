import Icon from 'packages/icon'
import Button from 'packages/button'
import NavBar from 'packages/nav-bar'
import Tabbar from 'packages/tabbar'
import TabbarItem from 'packages/tabbar-item'
import Spinner from 'packages/spinner'
import Tag from 'packages/tag'
import Row from 'packages/row'
import Col from 'packages/col'
import Slide from 'packages/slide'
import SlideItem from 'packages/slide-item'
import Sticky from 'packages/sticky'
import CellGroup from 'packages/cell-group'
import Cell from 'packages/cell'
import Switch from 'packages/switch'
import CheckboxGroup from 'packages/checkbox-group'
import Checkbox from 'packages/checkbox'
import NoticeBar from 'packages/notice-bar'
import RadioGroup from 'packages/radio-group'
import Radio from 'packages/radio'
import Field from 'packages/field'
import Popup from 'packages/popup'
import Toast from 'packages/toast'
import Modal from 'packages/modal'
import Actionsheet from 'packages/actionsheet'

const components = [
  Icon,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Spinner,
  Tag,
  Row,
  Col,
  Slide,
  SlideItem,
  Sticky,
  CellGroup,
  Cell,
  Switch,
  CheckboxGroup,
  Checkbox,
  NoticeBar,
  RadioGroup,
  Radio,
  Field,
  Popup,
  Toast,
  Modal,
  Actionsheet
]

export {
  Icon,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Spinner,
  Tag,
  Row,
  Col,
  Slide,
  SlideItem,
  Sticky,
  CellGroup,
  Cell,
  Switch,
  CheckboxGroup,
  Checkbox,
  NoticeBar,
  RadioGroup,
  Radio,
  Field,
  Popup,
  Toast,
  Modal,
  Actionsheet
}

const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
