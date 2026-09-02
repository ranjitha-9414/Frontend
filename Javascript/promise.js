let p = new Promise((resolve, reject) => {
    
    let app ="BMS";
    if (app === "BMS") {
        resolve();
    } else {
        reject(new Error("BMS is not found"));
    }

});

p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
        console.log("Open Book my Show");
        resolve();
        }, 8000);
    });
})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Select movie");
            resolve();
        }, 3000)
    });

})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Select seats");
            resolve();
        }, 5000);
    });
})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Make a Payment");
            resolve();
        }, 1000);
    });
})

.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ticket Booked");
            resolve();
        }, 2000);
    });
})

.catch((error) => {
    console.log("Error", error.message);
})

.finally(() => {
    console.log("Close app");
});