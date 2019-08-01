import '../styles/index.scss';
import * as _ from 'lodash';
import * as p5 from 'p5';
import * as data from './mavenlink-commit-activity.json';

const commits = data.default;
const baseLightnessValue = 40;
const colorScalingValue = 20;

const P5 = new p5((sketch) => {
  const allDays = [];

  _.each(commits, (week) => {
    _.each(week.days, (day) => {
      allDays.push(day);
    });
  });

  const dayMax = _.max(allDays);
  const dayMin = _.min(allDays);

  sketch.setup = () => {
    sketch.createCanvas(window.innerWidth, window.innerHeight);
  };

  sketch.draw = () => {
    let sinScalar = Math.abs(Math.sin(Date.now() / 1000));

    sketch.background(18, 69, 60);
    sketch.fill(0, 0, 0, 0);

    sketch.colorMode(sketch.HSL);

    _.each(allDays, (day, i) => {
      let indexedSinScalar = Math.abs(Math.sin((Date.now() / 60000) + i));
      let dayScalar = day / dayMax;

      sketch.stroke(18, 69, baseLightnessValue - (dayScalar * colorScalingValue), 1);

      sketch.circle(window.innerWidth / 2, window.innerHeight / 2, (day + (i * 1.5)) * indexedSinScalar);
    });
  };
});
