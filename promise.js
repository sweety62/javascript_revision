
const getpromise = () => {
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
});

/*function getData(DataId,getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data", DataId);
            resolve("success");
            if(getNextData){
                getNextData();
            }
        },2000);
    });
}



//callback hell
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5);
            });
        });
    });
});*/












