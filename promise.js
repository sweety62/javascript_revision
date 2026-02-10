
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

function getData(DataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", DataId);
            resolve("success");
            
        },2000);
    });
}

//promise chaining
getData(1)
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












