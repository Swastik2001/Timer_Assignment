window.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-fill');
    const timerDisplay = document.getElementById('timer');
    const addTimeButton = document.getElementById('add-time');
    const stopTimerButton = document.getElementById('stop-timer');
    const taskCard = document.getElementById('task-card');
    const taskName = document.querySelector('.task');
    let totalTime = 0;
    let timeRemaining = 0;
    let intervalId;
  
    function startTimer() {
      intervalId = setInterval(updateTimer, 1000);
    }
  
    function updateTimer() {
        if (timeRemaining <= 0) {
            clearInterval(intervalId);
            progressBar.classList.add('timer-ended');
            return;
          }
  
      const minutes = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
      const seconds = (timeRemaining % 60).toString().padStart(2, '0');
      timerDisplay.textContent = `${minutes}:${seconds}`;
  
      const progress = ((totalTime - timeRemaining) / totalTime) * 360;
      progressBar.style.transform = `rotate(${progress}deg)`;
  
  
      timeRemaining--;
    }
  
    function resetTimer() {
      clearInterval(intervalId);
      progressBar.style.borderTopColor = 'purple';
    }
  
    function addTenSeconds() {
      if (timeRemaining <= 0) {
        timeRemaining = 10;
        totalTime = 10;
        startTimer();
      } else {
        timeRemaining += 10;
      }
    }
  
    function handleTaskClick() {
      const taskTime = 60;
      resetTimer();
      taskName.textContent = `Task: Cleansing (Timer: ${taskTime}s)`;
      timeRemaining = taskTime;
      totalTime = taskTime;
      startTimer();
    }
  
    addTimeButton.addEventListener('click', addTenSeconds);
    stopTimerButton.addEventListener('click', resetTimer);
    taskCard.addEventListener('click', handleTaskClick);
  });