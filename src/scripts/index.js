import '../styles/index.scss';
import * as _ from 'lodash';
import * as p5 from 'p5';
// import * as data from './weather.json';

const P5 = new p5((sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(window.innerWidth, window.innerHeight);
  };

  sketch.draw = () => {
    sketch.background(50);
  };
});
