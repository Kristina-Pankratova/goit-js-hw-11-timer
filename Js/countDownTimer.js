export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this._selector = selector;
    this._targetDate = targetDate;
    
    this.refs = {
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      mins: document.querySelector(`${selector} [data-value="mins"]`),
      secs: document.querySelector(`${selector} [data-value="secs"]`),
    }
  }

  defaultTime() {
    this.refs.days.textContent = 0;
    this.refs.hours.textContent = 0;
    this.refs.mins.textContent = 0;
    this.refs.secs.textContent = 0;
  }
 
  
  getTimeComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  console.log(days)

  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hours)

  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  console.log(mins)

  const secs = Math.floor((time % (1000 * 60)) / 1000);
    console.log(secs)
    
    return { days, hours, mins, secs };
}

  timerInitialization() {
    this.defaultTime();

    localStorage.setItem ('timerId', this.intervalId = setInterval(() => {
      const start = Date.now();
      const deltaTime = this._targetDate - start;
      const time = this.getTimeComponents(deltaTime);
      this.setTimerCurrentValue(time);
    }, 1000));
  }
  
  setTimerCurrentValue({ days, hours, mins, secs }) {
    if (days + hours + mins + secs > 0) {
      this.refs.days.textContent = days;
      this.refs.hours.textContent = hours;
      this.refs.mins.textContent = mins;
      this.refs.secs.textContent = secs;
    } else 
    clearInterval(localStorage.getItem('timerId'));
  }
}
