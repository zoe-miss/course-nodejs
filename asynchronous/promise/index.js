// 如果要看promiss的状态，需要在chrome 里面执行
(function() {
     // .then和.catch 可以返回全新的promise， 根据返回是return还是throw
    // var promise = promise = new Promise(function(reslove, reject) {
    //     setTimeout(() => {
    //         reslove(3);
    //     }, 300);

    //     // 只能从pending ---> reslove/reject
    //     setTimeout(() => {
    //         reject(new Error);
    //     }, 500)
    // }).then(function(res) { // 状态到reslove
    //     console.log(res)
    // }).catch(function(err) { // 状态到reject
    //     console.log(err)
    // })
    // console.log(promise)
    // setTimeout(() => {
    //     console.log(promise)
    // }, 800)

    /** 面试 */  
    // var promise = interview();
    // // promise.then((res) => {
    // //     console.log('smile')
    // // }).catch((err) => {
    // //     console.log('cry')
    // // })
    // var promise2 = promise.then((res) => {
    //     // throw new Error('refuse')
    //     // return 'accept'
    //     return new Promise(function(reslove, reject) {
    //         setTimeout(() => {
    //             reslove('accept')
    //         }, 400)
    //     })
    // })
    /** 多伦面试 */
    // var promise = interview(1)
    //     .then(() => {
    //         return interview(2)
    //     })
    //     .then(() => {
    //         return interview(3)
    //     })
    //     .then(() => {
    //         console.log('smile')
    //     })
    //     .catch((err) => {
    //         console.log('cry at ' + err.round + 'round')
    //     })
    /** 并发控制的异步调用 */
    Promise.all([
        interview('geekbang'), interview('tencent')
    ]).then(() => {
        console.log('smile')
    }).catch((err) => {
        console.log('cry for ' + err.round + ' company')
    })
    // setTimeout(() => {
    //     console.log(promise)
    //     console.log(promise2)
    // }, 800)

    // setTimeout(() => {
    //     console.log(promise)
    //     console.log(promise2)
    // }, 1000)
   
})();


function interview() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                reslove('success');
            } else {
                reject(new Error('fail'));
            }
        }, 500)
    })
    
}

function interview(round) {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.9) {
                reslove('success');
            } else {
                var error = new Error('fail');
                error.round = round;
                reject(error);
                
            }
        }, 500)
    })
    
}