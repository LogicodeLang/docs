Prism.languages.logicode = {
  "comment": /\#(.*)/,
  "function": [{
    pattern: /([\+=\/&!\|,\(]|out|cond)([ \w]+)(?=\(.*\))/,
    lookbehind: true
  }, {
    pattern: /(circ )(\w+)(?=\()/,
    lookbehind: true
  }],
  "variable": {
    pattern: /(var )(.*?)(?= *=)/,
    lookbehind: true
  },
  "keyword": {
    pattern: /([ \/]*)(cond|circ|var|out)/,
    lookbehind: true
  },
  "number": /[01]+/,
  "symbol": /(->)/,
  "builtin": /([\\+!&\|\/<~@>]|[ab]inp|[^-]>)/
}
