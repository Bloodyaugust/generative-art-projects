import '../styles/index.scss';
import * as _ from 'lodash';
import * as p5 from 'p5';
import * as data from './mavenlink-commit-activity.json';

const commits = data.default;
const baseLightnessValue = 42;
const colorScalingValue = 0.15;

const P5 = new p5((sketch) => {
  const allDays = [];

  _.each(commits, (week) => {
    _.each(week.days, (day) => {
      allDays.push(day);
    });
  });

  sketch.setup = () => {
    sketch.createCanvas(window.innerWidth, window.innerHeight);
  };

  sketch.draw = () => {
    let sinScalar = Math.sin(Date.now() / 1000);

    sketch.colorMode(sketch.RGB);

    sketch.background(179, 76, 33);
    sketch.fill(0, 0, 0, 0);

    sketch.colorMode(sketch.HSL);

    _.each(allDays, (day, i) => {
      sketch.stroke(18, 69, baseLightnessValue + (day * sinScalar * colorScalingValue), 1);

      sketch.circle(window.innerWidth / 2, window.innerHeight / 2, day + (i * 1.5));
    });
  };
});
