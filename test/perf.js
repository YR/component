'use strict';

const { el, define } = require('../src/index');
const benchmark = require('benchmark');
const reactDOM = require('react-dom/server');

const BREADTH = 11;
const DEPTH = 4;

const suite = new benchmark.Suite();

const comp = define({
  render(props) {
    const { breadth, depth } = props;

    if (depth <= 0) {
      return el('div', null, 'abcdefghi');
    }

    const children = [];

    for (let i = 0; i < breadth; i++) {
      children.push(comp({ key: i, depth: depth - 1, breadth }));
    }
    return el('div', { children, onClick: this.onClick });
  },

  onClick() {
    console.log('click');
  }
});

function render() {
  return reactDOM.renderToString(el(comp, { depth: DEPTH, breadth: BREADTH }));
}

suite
  .add({ name: 'comp', fn: render })
  .on('complete', function() {
    for (let i = 0; i < this.length; i++) {
      const benchmark = this[i];

      console.log(benchmark.name);
      console.log(`Mean:    ${Math.round(benchmark.stats.mean * 1000)} ms`);
      console.log(`Std Dev: ${Math.round(benchmark.stats.deviation * 1000)} ms\n`);
    }
  })
  .run({ async: true });
