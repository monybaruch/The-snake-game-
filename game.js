import { update as updateSnake, draw as drawsSnake, SNAKE_SPEED } from './snake.js';

let lastRenderTime = 0;
const gameBoard = document.querySelector('#game-board');

const main = (currentTime) => {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  console.log('Render');
  lastRenderTime = currentTime;
  update();
  draw();
};
window.requestAnimationFrame(main);

const update = () => updateSnake(console.log('update snake'));
const draw = () => drawsSnake(gameBoard);
