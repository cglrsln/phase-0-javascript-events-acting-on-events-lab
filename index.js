// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "150px";


//dodgerLeft
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left >= 0) {
      dodger.style.left = `${left - 1}px`;
    }
  };

//dodgerRight
document.addEventListener("keydown", function(e){
      if (e.key === "ArrowRight"){
          moveDodgerRight();
      }
  });

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left >= 0){
        dodger.style.left = `${left + 1}px`;
    }
};


//dodgerUp
document.addEventListener("keydown", function(e){
    if (e.key === "ArrowUp"){
        moveDodgerUp();
    }
});

function moveDodgerUp(){
  const upNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(upNumbers, 10);

  if (bottom >= 0){
      dodger.style.bottom = `${bottom + 1}px`;
  }
};


//dodgerDown

document.addEventListener("keydown", function(e){
    if (e.key === "ArrowDown"){
        moveDodgerDown();
    }
});

function moveDodgerDown(){
  const downNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(downNumbers, 10);

  if (bottom >= 0){
      dodger.style.bottom = `${bottom - 1}px`;
  }
};
