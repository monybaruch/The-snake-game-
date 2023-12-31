import { update as updateSnake, draw as drawsSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';
let lastRenderTime = 0;

let gameOver = false;

const gameBoard = document.querySelector('#game-board');

const main = (currentTime) => {
  if (gameOver) {
    if (confirm('You Lost! Press ok to restart!')) {
      window.location = '/The-snake-game-';
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
};
window.requestAnimationFrame(main);

const update = () => {
  updateSnake();
  updateFood();
  checkDeath();
};

const draw = () => {
  gameBoard.innerHTML = '';
  drawsSnake(gameBoard);
  drawFood(gameBoard);
};

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
