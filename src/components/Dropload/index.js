import dropload from './Dropload'

dropload.install = (Vue, options) => {
  Vue.component('dropload', dropload)
}

export default dropload
