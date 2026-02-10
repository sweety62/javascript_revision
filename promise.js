
/*const getpromise = () => {
    return new Promise((resolve,reject) => {
        console.log("i am promise");
        resolve("success");
    });
};

let promise = getpromise();

promise.then((res) => {
    console.log("fullfilled",res);
});
promise.catch((error) => {
    console.log("rejected",error);
});*/

/*function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve("200");
        }, 2000);
    });
}

async function getweather() {
    await api();
    console.log("Weather data fetched");
    await api();
    console.log("Weather data fetched");
    await api();
    console.log("Weather data fetched");
    await api();
    console.log("Weather data fetched");
}*/








function getData(DataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", DataId);
            resolve("success");
            
        },2000);
    });
}



//async-await
async function getalldata(){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
}

//using IIFE
(async function (){
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
})();

//promise chaining
/*getData(1)
.then((res) => {
    return getData(2);
})
.then(res => {
    return getData(3);
})
.then(res => {
    return getData(4);
})

.then(res => {
    console.log(res);
})



//callback hell
/*getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5);
            });
        });
    });
});*/












