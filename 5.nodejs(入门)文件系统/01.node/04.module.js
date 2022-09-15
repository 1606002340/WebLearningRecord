// a=10;
var a=10;
/*
*   在node中有一个全局对象global,他的作用和网页中windows类似
*       在全局中创建的变量都会作为global的属性保存
*       在全局中创建的函数都会作为global的方法保存
*   当node在执行模块化代码时，它会首先在代码的最顶部，添加如下代码
*       function (exports, require, module, __filename, __dirname) {
*   在代码的最底部，添加如下代码
*       }
*   实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个实参
*       exports
*           -该对象用来将变量或者函数暴露到外部
*       require
*           -函数，用来引入外部的模块
*       module
*           -module代表的是当前模块本身
*           -exports就是module的属性
*           -即可以使用exports导出，也可以使用module。exports导出
*       __filename
*           -当前模块的完美路径
*       __dirname
*           -当前模块的所在的文件夹的路径
* */

// console.log(global);

/*
*   arguments.callee
*       -这个属性保存的是当前执行的函数对象
*
* */
console.log(arguments.callee + "");