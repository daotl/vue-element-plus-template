import { App } from 'vue'
import { Plugin } from '@vue/runtime-core'

// If you want to use the .scss style file, you need to import the base.scss file
import 'element-plus/packages/theme-chalk/src/base.scss'

// Component list reference: https://github.com/element-plus/element-plus/tree/dev/packages
import {
  // ElAlert,
  // ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  ElButton,
  // ElButtonGroup,
  // ElCalendar,
  // ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  // ElCheckbox,
  // ElCheckboxButton,
  // ElCheckboxGroup,
  // ElCol,
  // ElCollapse,
  // ElCollapseItem,
  // ElCollapseTransition,
  // ElColorPicker,
  // ElContainer,
  // ElDatePicker,
  // ElDialog,
  // ElDivider,
  // ElDrawer,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElFooter,
  // ElForm,
  // ElFormItem,
  // ElHeader,
  // ElIcon,
  // ElImage,
  // ElInput,
  // ElInputNumber,
  // ElLink,
  // ElMain,
  // ElMenu,
  // ElMenuItem,
  // ElMenuItemGroup,
  // ElOption,
  // ElOptionGroup,
  // ElPageHeader,
  // ElPagination,
  // ElPopconfirm,
  // ElPopover,
  // ElPopper,
  // ElProgress,
  // ElRadio,
  // ElRadioButton,
  // ElRadioGroup,
  // ElRate,
  // ElRow,
  // ElScrollbar,
  // ElSelect,
  // ElSlider,
  // ElStep,
  // ElSteps,
  // ElSubmenu,
  // ElSwitch,
  // ElTabPane,
  // ElTable,
  // ElTableColumn,
  // ElTabs,
  // ElTag,
  // ElTimePicker,
  // ElTimeSelect,
  // ElTimeline,
  // ElTimelineItem,
  // ElTooltip,
  // ElTransfer,
  // ElTree,
  // ElUpload,
  // ElInfiniteScroll,
  // ElLoading,
  // ElMessage,
  // ElMessageBox,
  // ElNotification,
} from 'element-plus'

const components = [
  // ElAlert,
  // ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  ElButton,
  // ElButtonGroup,
  // ElCalendar,
  // ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  // ElCheckbox,
  // ElCheckboxButton,
  // ElCheckboxGroup,
  // ElCol,
  // ElCollapse,
  // ElCollapseItem,
  // ElCollapseTransition,
  // ElColorPicker,
  // ElContainer,
  // ElDatePicker,
  // ElDialog,
  // ElDivider,
  // ElDrawer,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElFooter,
  // ElForm,
  // ElFormItem,
  // ElHeader,
  // ElIcon,
  // ElImage,
  // ElInput,
  // ElInputNumber,
  // ElLink,
  // ElMain,
  // ElMenu,
  // ElMenuItem,
  // ElMenuItemGroup,
  // ElOption,
  // ElOptionGroup,
  // ElPageHeader,
  // ElPagination,
  // ElPopconfirm,
  // ElPopover,
  // ElPopper,
  // ElProgress,
  // ElRadio,
  // ElRadioButton,
  // ElRadioGroup,
  // ElRate,
  // ElRow,
  // ElScrollbar,
  // ElSelect,
  // ElSlider,
  // ElStep,
  // ElSteps,
  // ElSubmenu,
  // ElSwitch,
  // ElTabPane,
  // ElTable,
  // ElTableColumn,
  // ElTabs,
  // ElTag,
  // ElTimePicker,
  // ElTimeSelect,
  // ElTimeline,
  // ElTimelineItem,
  // ElTooltip,
  // ElTransfer,
  // ElTree,
  // ElUpload,
]

const plugins: Plugin[] = [
  // ElInfiniteScroll,
  // ElLoading,
  // ElMessage,
  // ElMessageBox,
  // ElNotification,
]

export default function setupElementPlus(app: App): void {
  // When importing Element, you can define a global config object. For now this object has two properties: size and zIndex.
  // The property size sets the default size for all components and the property zIndex sets the initial z-index
  // (default: 2000) for modal boxes.
  // app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }

  components.forEach((component) => {
    app.use(component)
  })

  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
