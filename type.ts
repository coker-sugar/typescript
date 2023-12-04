// 1.变量类型注解
let mynum: number = 123;
let myname: string = "张三";
let isDone: boolean = false;
// 1.1 Boolean创建的是一个对象而不是一个boolean值
let isTrue: object = new Boolean(1);
    // 事实上Boolean返回的就是Boolean对象
    let isObj: Boolean = new Boolean(1);
// 1.2 空值
function alertName(): void {
    alert(`Myname is Tom`);
}
// 1.3 任意值
let anyThing: any = "hello";
console.log(anyThing.getName);
anyThing = 123; // 这个任意值不受类型限制，就和以前的let近似


// 2.参数类型和返回类型注解 :
function greet(name: string): void {
    console.log("hello" + name);
}
greet(myname);


// 3.类型推论
let yourName = "lisi";
// yourName = 123; // 此时yourName已经自动转为了string类型
// 等价于 let yourName: string = 'lisi;


// 4.对象注解 :
function printcolor(pc:{x: number;y: number}) {
    console.log("x坐标:"+ pc.x + ";y坐标:" + pc.y);
}
printcolor({x :3,y: 7});


// 5.可选属性 ?
function printName(obj:{name:string;age?:number}) {
    console.log("我的名字:" + obj.name);
}
printName({name:"zs"});
printName({name:"zs",age:23});


// 6.联合属性 |
function printId(id: number | string) {
    console.log(id);
}
printId(123);
printId("123");


// 7.类型别名 type
type Point = {
    x : number;
    y : number;
}
function printPoint(pt:Point) {
    console.log(pt.x + " - " + pt.y);
}
printPoint({x : 12,y : 34});


// 8.接口 interface
interface dot {
    x: number;
    y: number;
}
function printDot(pt:dot) {
    console.log(pt.x + '-' + pt.y);
}
printDot({x: 12,y: 34});
    // 8.1允许添加任意属性
    interface People {
        name: string;
        age?: number;
        [propName: string]: any;
    }
    let job: People = {
        name: 'Tome',
        age: 18,
        gender: 'male'
    }
    // 8.2只读属性
    interface Peo {
        readonly name: string
    }
    let peo: Peo = {
        name:"job"
    }
    // peo.name = 'lsi'; 无法修改


// 9.接口和类型的区别：接口的功能类型几乎都可以使用，主要区别是type无法添加新的属性，而interface始终可以扩展
    // 接口
    interface Window {
        title: string
    }
    interface Window {
        dot: number
    }
    // 类型
    type Door = {
        title: string
    }
    // type Door {
    //     dot: number
    // }
    // 再加新功能会报错


// 10.数组的类型
    // 10.1 类型[] 声明数组
    let arr: number[] = [1,2,3,4];
    arr.push(3);
    let strarr: string[] = ["12","23"];
    strarr.push("34");
    // 10.2 数组泛型
    let fibonacci: Array<number> = [1,2,3];
    let strstr: Array<string> = ["12","23"];
    // 10.3 接口表示数组
    interface numberarry {
        [index:number]: number;
    }
    let newarr: numberarry = [1,2,3];
    // 10.4 数组的任意状态
    let list: any[] = [1,'1',true];


// 11.函数
function sum(x: number,y: number): number {
    return x + y;
}
sum(1,2);
    // 11.1 可选参数
    function newfunc(x: number,y?: number) {
        console.log(`x: ${x},y:${y}`);
    }
    newfunc(1,2);
    // 11.2 给参数添加默认值
    function func(x: number,y:number = 1) {
        return x + ' ' + y;
    }
    func(1,2);
    func(1,undefined);
    // 11.3 剩余参数 ...
    function push(array,...items) {
        items.forEach(function(item) {
            array.push(item);
        })
    }
    let a:any[] = [];
    push(a,1,2,3);

// 12.类型断言:欺骗
interface Cat {
    name: string
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
function swim(animal: Cat | Fish) {
    (animal as Fish).swim();
}
const tom: Cat = {
    name: 'Tom',
    run() {
        console.log("run");
    }
}
swim(tom); // 编译时不报错，运行时报错


