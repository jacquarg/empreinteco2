Vue.component('reference-popup',  {
  template: '<a role="button" data-toggle="popover"  tabindex="0" data-trigger="focus" data-placement="bottom" :title="title" :data-content="content">*</a>',
  props: ['referenceId'],
  data: function() {
    console.log(this.referenceId)
    const item = jsonld[this.referenceId]
    return {
      title: `${item.label} : ${item.value} ${item.unit}`,
      content: `${item.description} <a href=${item.source} target="_blank">--> source</a>`
    }
  },
  mounted: function() {
    this.$nextTick(function () {
      $(this.$el).popover({ html: true })
    })
  },
})

// TODO
// V call popover() "after render"
// V make it work
//* dynamic data
// *
