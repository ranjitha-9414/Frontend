console.log("1. Open BMS");// 8sec
console.log("2. Select movie");// 3 Sec
console.log("3. Select seats");// 5 sec
console.log("4. Make payment");// 1 sec
console.log("5. Ticket Booked");//2 sec

//settimeout

setTimeout( () => {
    console.log("1. Open BMS");
}, 8000);

setTimeout(() => {
    console.log("2. Select movie");
}, 3000);

setTimeout(() => {
    console.log("3. Select seats");
}, 5000);

setTimeout(() => {
    console.log("4. Make Payment");
}, 1000);

setTimeout(() => {
    console.log("5. Ticket Booked");
}, 2000);

//Using Callback

setTimeout( () => {
    console.log("1. Open BMS");

        setTimeout(() => {
            console.log("2. Select movie");

                setTimeout(() => {
                    console.log("3. Select seats");

                        setTimeout(() => {
                            console.log("4. Make Payment");

                              setTimeout(() => {
                                console.log("5. Ticket Booked");

                               }, 2000);

                        }, 1000);

                }, 5000);
              
        }, 3000);
        
}, 8000);



