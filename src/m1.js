// import $ from "jquery"

export default{
    setH1(){
        document.body.insertAdjacentHTML("beforeend","<h1>你好webpack</h1>")
        // $("body").append("<h1>你好webpack</h1>")
    }
}
console.log("你好");