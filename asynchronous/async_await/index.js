

// console.log(async function() {
//     // return 4
//     throw new Error(4)
// }())

// console.log(function() {
//     return new Promise((reslove, reject) => {
//         // reslove(4);
//         reject(new Error(4))
//     })
// }())
// 浏览器里面执行
// (function() {
//     const result = async function() {
//         var content = await new Promise((reslove, reject) => {
//             setTimeout(() =>  {
//                 reslove(6)
//             }, 500)
//         })
//         console.log(content)
//         return 4
//     }()
//     setTimeout(() =>  {
//         console.log(result)       
//     }, 800)
// })()

/** 多伦面试终极写法 */
(async function() {
    try {
        await Promise.all([interview(1), interview(2)])
    } catch(e) {
        return console.log('cry at ' + e.round)
    }
    console.log('smile')
})()

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


