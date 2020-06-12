const config = {
  encoding: 'etaionsparse',
  renderer: 'etaionsparse',
  fontSize: 15,
  fontWidth: 0.2,  // monospace for now
  lineHeight: 1.5,
  letterSpacing: 0,
  minWidth: 240,
}

const encodingDotsies = {
  ' ': 0,
  a: 0b00001,
  b: 0b00010,
  c: 0b00100,
  d: 0b01000,
  e: 0b10000,
  f: 0b00011,
  g: 0b00110,
  h: 0b01100,
  i: 0b11000,
  j: 0b00101,
  k: 0b01010,
  l: 0b10100,
  m: 0b01001,
  n: 0b10010,
  o: 0b10001,
  p: 0b00111,
  q: 0b01011,
  r: 0b01101,
  s: 0b01110,
  t: 0b10110,
  u: 0b11010,
  v: 0b11100,
  w: 0b10011,
  x: 0b10101,
  y: 0b11001,
  z: 0b01111,
  _31: 0b11111,
}

const encodingEtaisparse = {
  ' ': 0,
  a: 0b01000,
  b: 0b00111,
  c: 0b01010,
  d: 0b00101,
  e: 0b00010,
  f: 0b00110,
  g: 0b11100,
  h: 0b11000,
  i: 0b10001,
  j: 0b01101,
  k: 0b11010,
  l: 0b10100,
  m: 0b10101,
  n: 0b10000,
  o: 0b00100,
  p: 0b01100,
  q: 0b10110,
  r: 0b01001,
  s: 0b10010,
  t: 0b00001,
  u: 0b00011,
  v: 0b11001,
  w: 0b01011,
  x: 0b01110,
  y: 0b10011,
  z: 0b11011,
  '.': 0b01111,
  ',': 0b10111,
  _29: 0b11101,
  _30: 0b11110,
  _31: 0b11111,
}

const encodingLatinoid = {
  ' ': 0,
  a: 0b11000,
  b: 0b01101,
  c: 0b10010,
  d: 0b01001,
  e: 0b10110,
  f: 0b01110,
  g: 0b11010,
  h: 0b11001,
  i: 0b00001,
  j: 0b00010,
  k: 0b11101,
  l: 0b00101,
  m: 0b11100,
  n: 0b10011,
  o: 0b00100,
  p: 0b01100,
  q: 0b10100,
  r: 0b11110,
  s: 0b10001,
  t: 0b10101,
  u: 0b00110,
  v: 0b00011,
  w: 0b00111,
  x: 0b11011,
  y: 0b01011,
  z: 0b01010,
  '.': 0b10000,
  ',': 0b01000,
  _29: 0b01111,
  _30: 0b10111,
  _31: 0b11111,
}

const renderByte = (bitRenderer, byte_, x, y, width, height) => (
  [0, 1, 2, 3, 4]
).reduce((accumulator, bit) => {
  if (0 < (byte_ >> bit) % 2) {
    accumulator.push(bitRenderer(bit, x, y, width, height))
  }
  return accumulator
}, [])

const renderByteEtaionsparse = (byte_, x, y, width, height) => renderByte((
    bit, x, y, width, height) => {
  const grid = [
    [x, y],  // 0
    [x, y + height / 2],  // 1
    [x, y + height],  // 2
    [x + width, y],  // 3
    [x + width, y + height / 3],  // 4
    [x + width, y + height * 2 / 3],  // 5
    [x + width, y + height],  // 6
  ]
  if (bit == 0) {
    return [ grid[0], grid[4], grid[3] ]
  } else if (bit == 1) {
    return [ grid[0], grid[1], grid[4] ]
  } else if (bit == 2) {
    return [ grid[1], grid[5], grid[4] ]
  } else if (bit == 3) {
    return [ grid[1], grid[2], grid[5] ]
  } else if (bit == 4) {
    return [ grid[2], grid[6], grid[5] ]
  }
}, byte_, x, y, width, height)

const renderByteDotsies = (byte_, x, y, width, height) => renderByte((
    bit, x, y, width, height) => [
  [x, y + bit * height / 5],
  [x, y + (bit + 1) * height / 5],
  [x + width, y + (bit + 1) * height / 5],
  [x + width, y + bit * height / 5],
], byte_, x, y, width, height)

const makeTransform = (x, y, width, height) => ([x_, y_]) => [
  x + x_ * width / 5,
  y + y_ * height / 10,
]

const latinoidPolygons = [
  [ [0, 0], [1, 5], [2, 5], [2, 0] ],
  [ [4, 0], [2, 5], [4, 5], [5, 2] ],
  [ [1, 5], [1, 6], [5, 6], [4, 5] ],
  [ [1, 6], [0, 8], [2, 10], [3, 6] ],
  [ [2, 6], [4, 10], [5, 10], [4, 6] ],
]

const renderByteLatinoid = (byte_, x, y, width, height) => renderByte((
    bit, x, y, width, height) => {
  return latinoidPolygons[bit].map(makeTransform(x, y, width, height))
}, byte_, x, y, width, height)

const etaionsparsePentagonPolygons = [
  [ [2, 1], [3, 3], [5, 2], [5, 0], [3, 0] ],
  [ [0, 2], [0, 3], [2, 1], [3, 3], [1, 4], [0, 3], [0, 4], [2, 5], [4, 3], [2, 0] ],
  [ [2, 5], [4, 7], [5, 6], [5, 4], [4, 3] ],
  [ [0, 6], [0, 7], [1, 6], [3, 7], [2, 9], [0, 7], [0, 8], [2, 10], [4, 7], [2, 5] ],
  [ [2, 9], [3, 10], [5, 10], [5, 8], [3, 7] ],
]

const renderByteEtaionsparsePentagon = (byte_, x, y, width, height) => renderByte((
    bit, x, y, width, height) => {
  return etaionsparsePentagonPolygons[bit].map(makeTransform(x, y, width, height))
}, byte_, x, y, width, height)

const etaionsparsePenPolygons = [
  [ [2, 0], [3, 3], [4, 3], [5, 1], [5, 0] ],
  [ [0, 4], [1, 5], [2, 3], [4, 3], [1, 1], [1, 0] ],
  [ [1, 5], [2, 7], [4, 7], [5, 6], [4, 5], [3, 6], [3, 4], [4, 5], [5, 4], [4, 3], [2, 3] ],
  [ [0, 6], [1, 10], [1, 9], [4, 7], [2, 7], [1, 5] ],
  [ [3, 7], [2, 10], [5, 10], [5, 9], [4, 7] ],
]

const renderByteEtaionsparsePen = (byte_, x, y, width, height) => renderByte((
    bit, x, y, width, height) => {
  return etaionsparsePenPolygons[bit].map(makeTransform(x, y, width, height))
}, byte_, x, y, width, height)

const renderLetters = (text, width, config) => (
  Array.from(text)
).reduce((accumulator, character) => {
  const bruttoLetterWidth = config.fontSize * (
    config.fontWidth + config.letterSpacing)
  const bruttoLineHeight = config.fontSize * config.lineHeight
  const lastPos = accumulator.length ? accumulator[accumulator.length - 1] : {
    x: -bruttoLetterWidth, y: 0 }
  const addRow = width < lastPos.x + 2 * bruttoLetterWidth
  // 2 times because the last letter and this letter follows lastPos
  const x = addRow ? 0 : lastPos.x + bruttoLetterWidth
  const y = lastPos.y + (addRow ? bruttoLineHeight : 0)
  const encoding = getEncoding(config.encoding)
  const renderer = getRenderer(config.renderer)
  let characterToRender = character.toLowerCase()
  if (!(characterToRender in encoding)) {
    characterToRender = '_31'
  }
  const fontHeight = config.fontSize
  const fontWidth = config.fontSize * config.fontWidth
  accumulator.push({
    polygons: renderer(
      encoding[characterToRender], x, y, fontWidth, fontHeight),
    x: x,
    y: y,
  })
  return accumulator
}, [])

const pointsFormat = points => points.reduce((accumulator, point) => {
  return accumulator + `${point[0]},${point[1]} `  // FIXME trailing space
}, '')

const getEncoding = name => ({
  etaionsparse: encodingEtaisparse,
  dotsies: encodingDotsies,
  latinoid: encodingLatinoid,
}[name] || encodingEtaisparse)

const getRenderer = name => ({
  etaionsparse: renderByteEtaionsparse,
  etaionsparsePen: renderByteEtaionsparsePen,
  etaionsparsePentagon: renderByteEtaionsparsePentagon,
  dotsies: renderByteDotsies,
  latinoid: renderByteLatinoid,
}[name] || renderByteEtaionsparse)

const getWidth = () => {
  const parentElement = document.getElementById('render-view')
  if (!parentElement) {
    return config.minWidth
  }
  const parentWidth = parentElement.getBoundingClientRect().width
  return config.minWidth < parentWidth ? parentWidth : config.minWidth
}
  
const ractive = new Ractive({
  target: '#reactive-target',
  template: '#reactive-template',
  data: {
    config: config,
    text: 'etaion shrdl ucmfw ypvbgk jqxz,.;',
    imageFilename: 'untitled.svg',
    imageURL: '#',
    width: config.minWidth,
    pointsFormat: pointsFormat,
    renderLetters: renderLetters,
    updateImageFilename: function () {
      this.set(
        'imageFilename',
        `${ (this.get('text') || 'untitled').substring(0, 15) }.svg`)
    },
    updateImageURL: function () {
      const linkElement = this.find('#image-link')
      const renderElement = this.find('#render-view')
      const svgFile = new Blob([renderElement.innerHTML], { type: 'text/svg' })
      this.set('imageURL', URL.createObjectURL(svgFile))
    },
  },
  observe: {
    'text': function () {
      this.get('updateImageFilename')()
    },
    'text width config.*': function () {
      this.get('updateImageURL')()
    },
  },
  onrender: function () {
    this.set('width', getWidth())
  },
})

window.addEventListener('resize', () => ractive.onrender())
