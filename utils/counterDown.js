export function calcTimeLeft(targetDate) {

    if (!targetDate) targetDate = new Date().setHours(23, 59, 59, 999);
    let timeLeft = targetDate - new Date().getTime();


    const hours = Math.floor(timeLeft /( 60 * 60 * 1000));
    timeLeft  -= hours*60*60*1000;

    const mins =Math.floor(timeLeft /( 60 *1000));
    timeLeft -= mins*60*1000;

    const seconds =Math.floor(timeLeft/1000);


    return {hours,mins,seconds};

}