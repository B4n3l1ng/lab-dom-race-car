class Player {
  constructor(gameScreen, left, top, width, height) {
    // gameScreen div reference
    this.gameScreen = gameScreen;

    //Car position control
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;

    //car movement control
    this.directionX = 0;
    this.directionY = 0;

    this.element = document.createElement('img');
    this.element.src = './images/car.png';
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.position = 'absolute';
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    // Update player's car position based on directionX and directionY
    this.left += this.directionX;
    this.top += this.directionY;

    // Ensure the player's car stays within the game screen
    // handles left hand side
    if (this.left < 10) {
      this.left = 0 + 10;
    }
    // handles top side
    if (this.top < 10) {
      this.top = 10;
    }
    // handles right hand side
    if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
      this.left = this.gameScreen.offsetWidth - this.width - 10;
    }
    // handles bottom side
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }
    // Update the player's car position on the screen
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    //Checks if any part of the player Rectangle is contained inside the obstacle rectangle
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return;
    }
  }
}
