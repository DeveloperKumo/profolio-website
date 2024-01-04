module.exports = {
  ".indicator": {
    "position": "relative",
    "display": "inline-flex",
    "width": "max-content"
  },
  ".indicator :where(.indicator-item)": {
    "zIndex": 1,
    "position": "absolute",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "whiteSpace": "nowrap"
  }
}