Vue.component('reference-popup',  {
  template: '<sup class="reference"><a style="cursor: pointer;"" role="button" data-toggle="popover"  tabindex="0" data-trigger="focus" data-placement="bottom" :title="title" :data-content="content">[{{ referenceOrder }}]</a></sup>',
  props: ['referenceId'],
  data: function() {
    const item = getReference(this.referenceId)
    return {
      referenceOrder: getReferenceOrder(this.referenceId),
      title: `${item.label} : ${item.value} ${item.unit}`,
      content: `${item.description} <a href=${item.source} target="_blank">--> source</a>`
    }
  },
  mounted: function() {
    this.$nextTick(function () {
      console.log(this)
      console.log(this.$children)
      $(this.$el.firstChild).popover({ html: true })
    })
  },
})

// TODO
// V call popover() "after render"
// V make it work
//* dynamic data
// *
