import { CountdownTimer } from './js/countDownTimer.js';

const countDownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Feb 25, 2021'),
});

countDownTimer.timerInitialization();
