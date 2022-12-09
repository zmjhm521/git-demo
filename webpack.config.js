module.exports = {
    mode: "production",
    // entry:"./hello/hello.js",//指定打包时的主文件 默认 ./src/index.js
    entry:["./src/a.js","./src/b.js"],//数组合并，对象分开
    // entry:{
    //     a:"./src/a.js",
    //     b:"./src/b.js",
    // }

}