const upgradeItem = (item, label) => {

  if (!item || typeof item === 'string' || item instanceof String) {
      return null
  } else if (isNaN(item)) {
    item.label = item.label || label
    item.total = 0
    item.items = []
    Object.keys(item).forEach(k => {
      const v = item[k]
      if (v === item.total || v === item.items) {
        return
      }

      const res = upgradeItem(v, k)
      if (res == null) {

      } else if (isNaN(res)) {
        item.total += res.total
        item.items.push(res)
      } else {
        item.total += res
      }
    })
    return item
  } else {
    // is number
    return { label: label, total: item }
      // return item
    }
}



const displayChart = (data, id, width) => {
    // data: { label, total, sub item.
    // root : objectif, standard

    // Compute ratio: px^2 / kgeqCO2:
    const r = width * (width / 3) / data.objectif.total

    const widthTotal = data.standard.total * r / width

    // build graph.
    const buildARow = (category) => {
      console.log("buildARow")
      const rowElement = $(`<div class="tgrow" >${category.label}</div>`)
      const height = category.total * r / widthTotal
      rowElement.height(height)
      rowElement.width(widthTotal)
      var currentLeft = 0
      category.items.sort((a, b) => { return a.total - b.total}).forEach(item => {
        const width = item.total * r / height

        const element = $(`<div class="tgcase">${item.label} - ${item.total}</div>`)
        element.width(width)
        element.height(height)
        element.css({ left: currentLeft })
        currentLeft += width
        rowElement.append(element)
      })
      console.log(rowElement)
      return rowElement
    }
    const container = $('#diagram')
    console.log(container)
    data.standard.items.forEach(category => {
      container.append(buildARow(category))
    })
}
