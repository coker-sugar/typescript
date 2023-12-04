// <T,U,V> <>内部都是泛型
// <string> 实参泛型

// 泛型的作用：可以接收任意类型，并且返回的类型受一定限制——安全
    // 只能返回number类型
    function toArray(x:number,y:number): number {
        return x + y;
    }
    // 能返回任意类型，但是x、y的类型不可以保证是相同类型
    function tostring(x:any,y:any): any {
        return x + y;
    }
    // 使用泛型
    function toboolean<T>(x: T,y: T): T {
        return x && y;
    }
    toboolean<boolean>(true,false);
    // 这里的boolean可以省略
    toboolean(true,false);
    // 可以校验传入的值是否一致
    // toboolean(true,1);


// 泛型约束：通过extends定义泛型约束
    interface Point {
        x: number;
        y: number;
    }
    function toPoint<T extends Point>(a: T,b: T): T[] {
        return [a,b];
    }
    toPoint({x:1,y:2},{x:1,y:2});

// 泛型接口：Array就是一个泛型接口
[1,2].forEach((item) => {
    console.log(item);
})

// 泛型类
class Contanier<T> {
    constructor(private readonly data:T) {}
}
const bo = new Contanier<boolean>(true);

// 内置泛型
// 1.Partial：使得类型参数T中所有属性都变为可选属性
interface A {
    a: number;
    version: string;
}
type A1 = Partial<A>;
type Partial1<T> = {
    [K in keyof T]?:T[K]
}
// 2.Required将实际类型参数T中所有只读属性属性的可选删掉
type A2 = Required<A>;
type Required1<T> = {
    [K in keyof T]-?:T[K]
}

// 3.Record：实际类型参数T以联合类型作为新对象类型的属性
type RecordObj = Record<'a' | 'b' | 'c',string>
    // 相当于
    // interface RecordObj {
    //     a: string;
    //     b: string;
    //     c: string;
    // }
let obj: RecordObj = {
    a: "q",
    b: "c",
    c: "e"
}

// 4.pick：挑选对象类型T中U对应的属性和类型，来创建一个新的对象类型
interface Props {
    id: string;
    title: string;
    children: number[];
}
type PickProps = Pick<Props,'id' | 'title'> // PickProps中包括ud和title属性
type Pick1<T,K extends keyof T> = {
    [P in K]:T[P]
}

// 索引签名类型
const arr = [1,2,3]
arr.forEach((item,index,array)=> {
    console.log(item);
})

interface Myarray<Type> {
    [index:number] :Type; // 使用[]
}
let arr1:Myarray<number>= [1,2,3];
console.log(arr1[0]);
// console.log(arr1.concat); // Myarray类型中没有concat这个属性