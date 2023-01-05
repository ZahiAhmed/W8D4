class Clock {
    constructor(hours = 0, mins = 0, seconds = 0) {
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
        this.hours = hours;
        this.mins = mins;
        this.seconds = seconds;

        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        let hrStr = this.hours;
        let minsStr = this.mins;
        let secStr = this.seconds;


        if (this.hours < 10) {
            hrStr = "0" + this.hours;
        }
        if (this.mins < 10) {
            minsStr = "0" + this.mins;
        }
        if (this.seconds < 10) {
            secStr = `0${this.seconds}`;
        }

        console.log(hrStr + ":" + minsStr + ":" + secStr);
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        this.seconds += 1;

        if (this.seconds >= 60) {
            this.seconds = 0;
            this.mins += 1;
        }

        if (this.mins >= 60) {
            this.mins = 0;
            this.hours += 1;
        }

        if (this.hours >= 24) {
            this.hours = 0;
        }
        this.printTime();
    }
}

// const time = new Date()
// const hr = time.getHours()
// const min = time.getMinutes()
// const sec = time.getSeconds()



// const clock = new Clock(hr, min, sec);
