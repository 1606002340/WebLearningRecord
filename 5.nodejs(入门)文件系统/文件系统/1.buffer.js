/*
* Buffer(缓冲区)
*   -Buffer的结构和数组很像，操作的方式和数组类似
*   -数组中是不能存储二进制文件，而buffer就是专门存储二进制数据
*   -使用buffer你不需要引入模块，直接即可使用
*   -在buffer中存储的都是二进制数据，但是显示时都是以十六进制来显示
*       buffer中的每一个范围是从00--ff 0-255
*
*
*
*
*
*
*   -buffer的大小一旦确定，则不能修改，buffer 实际上是对底层内存的直接操作
*
* */

var str = "Hello!";

//将字符串保存到buffer中
var buf=Buffer.from(str);
console.log(buf);

/*
*   Buffer.from(str) 将一个字符串转化为buffer
*   Buffer.alloc(size) 创建一个指定大小的buffer。但是可能包含敏感数据
*   Buffer.alloUnsafe() 创建一个指定大小的buffer，但是可能包含敏感数据
*   buf.tostring() 将缓冲区中的数据转换为字符串
* */