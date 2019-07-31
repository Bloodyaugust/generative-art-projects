import '../styles/index.scss';
import * as _ from 'lodash';
import * as p5 from 'p5';
import * as data from './weather.json';

const weather = data.default;
console.log(weather);

const COLUMNS = 25;
const LIGHTNESS = 50;
const MAX_HUE = 60;
const MAX_TEMP = _.max(weather);
const MIN_HUE = 20;
const MIN_TEMP = _.min(weather);
const SATURATION = 100;

const ROWS = Math.max(weather.length / COLUMNS);
const BLOCK_SIZE = window.innerWidth / COLUMNS;

const MIN_SIZE = BLOCK_SIZE / 6;

let offsets = weather.map(() => {
  return Math.random() * 1.2;
});

const P5 = new p5((sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(window.innerWidth, window.innerHeight);
    sketch.background(50);

    sketch.colorMode(sketch.HSL);

    sketch.noStroke();

    weather.forEach((temp, index) => {
      let scalar = temp / MAX_TEMP;
      let scaledSize = BLOCK_SIZE * scalar;
      let scaledBackgroundColor = 180 + (40 * scalar);
      let scaledForegroundColor = MAX_HUE - (MAX_HUE * scalar) + MIN_HUE;
      let topLeftX = (index % COLUMNS) * BLOCK_SIZE;
      let topLeftY = Math.floor(index / COLUMNS) * BLOCK_SIZE;

      sketch.fill(scaledBackgroundColor, SATURATION, LIGHTNESS, 0.3);
      sketch.rect(topLeftX - (BLOCK_SIZE / 2), topLeftY - (BLOCK_SIZE / 2), BLOCK_SIZE + (BLOCK_SIZE / 2), BLOCK_SIZE + (BLOCK_SIZE / 2));
    });

    weather.forEach((temp, index) => {
      let scalar = temp / MAX_TEMP;
      let scaledSize = BLOCK_SIZE * scalar;
      let scaledBackgroundColor = 180 + (40 * scalar);
      let scaledForegroundColor = MAX_HUE - (MAX_HUE * scalar) + MIN_HUE;
      let topLeftX = (index % COLUMNS) * BLOCK_SIZE;
      let topLeftY = Math.floor(index / COLUMNS) * BLOCK_SIZE;

      sketch.fill(scaledForegroundColor, SATURATION, LIGHTNESS);
      sketch.ellipse((index % COLUMNS) * BLOCK_SIZE + (BLOCK_SIZE / 2), Math.floor(index / COLUMNS) * BLOCK_SIZE + (BLOCK_SIZE / 2), scaledSize, scaledSize);
    });
  };

  sketch.draw = () => {
    sketch.background(50);

    weather.forEach((temp, index) => {
      let scalar = temp / MAX_TEMP;
      let scaledSize = BLOCK_SIZE * scalar;
      let scaledBackgroundColor = 180 + (40 * scalar);
      let scaledForegroundColor = MAX_HUE - (MAX_HUE * scalar) + MIN_HUE;
      let topLeftX = (index % COLUMNS) * BLOCK_SIZE;
      let topLeftY = Math.floor(index / COLUMNS) * BLOCK_SIZE;

      sketch.fill(scaledBackgroundColor, SATURATION, LIGHTNESS, 0.3);
      sketch.rect(topLeftX - (BLOCK_SIZE / 2), topLeftY - (BLOCK_SIZE / 2), BLOCK_SIZE + (BLOCK_SIZE / 2), BLOCK_SIZE + (BLOCK_SIZE / 2));
    });

    weather.forEach((temp, index) => {
      let scalar = temp / MAX_TEMP;
      let scaledBackgroundColor = 180 + (40 * scalar);
      let scaledForegroundColor = MAX_HUE - (MAX_HUE * scalar) + MIN_HUE;
      let topLeftX = (index % COLUMNS) * BLOCK_SIZE;
      let topLeftY = Math.floor(index / COLUMNS) * BLOCK_SIZE;

      let scaledSize = _.clamp((BLOCK_SIZE * scalar) * ((Math.sin((new Date / 1000) + (topLeftX + topLeftY) + offsets[index]) + 1) / 2), MIN_SIZE, BLOCK_SIZE);

      sketch.fill(scaledForegroundColor, SATURATION, LIGHTNESS);
      sketch.ellipse((index % COLUMNS) * BLOCK_SIZE + (BLOCK_SIZE / 2), Math.floor(index / COLUMNS) * BLOCK_SIZE + (BLOCK_SIZE / 2), scaledSize, scaledSize);
    });
  };
});
