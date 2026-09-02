//function for setTimeout

function wait(ms) {
    return new Promise((resolve)=> {
        setTimeout(resolve,ms);
    });
}
async function BookTicket() {

    await wait(8000);
    console.log("1. Open BMS");// 8sec
    await wait(3000);
    console.log("2. Select movie");// 3 Sec
   await wait(5000);
    console.log("3. Select seats");// 5 sec
    await wait(1000);
    console.log("4. Make payment");// 1 sec
    await wait(2000);
    console.log("5. Ticket Booked");//2 sec
}
BookTicket();