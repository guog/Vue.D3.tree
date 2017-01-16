export default {
  size (tree, size, margin) {
    tree.size([size.height - (margin.y * 2), size.width - (margin.x * 2)])
  },

  transformNode (x, y) {
    return y + ',' + x
  },

  transformSvg (svg, margin) {
    return svg.attr('transform', 'translate(' + margin.x + ',' + margin.y + ')')
  },

  transformText (text, hasChildren) {
    return text.each(d => {
      const children = hasChildren(d)
      const textInfo = {
        x: !children ? 6 : -6,
        rotate: 0,
        anchor: !children ? 'start' : 'end'
      }
      Object.assign(d, {textInfo})
    })
  }
}
