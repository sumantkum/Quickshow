

const timeFormat = (minute) =>{
    const hours = Math.floor(minute/60);
    const mintesReminder = minute%60;

    return `${hours}h ${mintesReminder}m`
}

export default timeFormat;