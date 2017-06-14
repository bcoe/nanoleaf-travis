'use strict';

const API = require('nanoleaves');

const aurora = new API();

const POLL_INTERVAL = 2000

const effect = new API.Animation({
  animName: 'test',
  animType: 'static',
  loop: false,
});

const officelist = [
  { id: 71, r: 0, g: 0, b: 0, transition: 50},
  { id: 26, r: 0, g: 0, b: 0, transition: 50},
  { id: 72, r: 0, g: 0, b: 0, transition: 50},
  { id: 167, r: 0, g: 0, b: 0, transition: 50},
  { id: 198, r: 0, g: 0, b: 0, transition: 50},
  { id: 164, r: 0, g: 0, b: 0, transition: 50},
  { id: 68, r: 0, g: 0, b: 0, transition: 50},
  { id: 241, r: 0, g: 0, b: 0, transition: 50},
  { id: 92, r: 0, g: 0, b: 0, transition: 50},
  { id: 183, r: 0, g: 0, b: 0, transition: 50},
  { id: 170, r: 0, g: 0, b: 0, transition: 50},
  { id: 100, r: 0, g: 0, b: 0, transition: 50}
];

module.exports = function (repos) {
  aurora.setStaticPanel(officelist).then(() => {
    let animationCounter = 0
    setInterval(() => {
      aurora.setStaticPanel(repos.map((repo) => {
        return repo.getState(animationCounter++)
      }))
    }, POLL_INTERVAL)
  })
}
