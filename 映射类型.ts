type PropKeys = 'x' | 'y' | 'z';
type Type1 = {x:number;y:number;z:number}; // 重复了PropKeys的结构
type Type2 = { [key in  PropKeys]: number }; // 类似于for(let x in arr)

// 映射类型只能用于type类型，不可以用于接口类型
// interface Type3 {
//     [Key in PropKeys] :number;
// }


type Prop= {a: number; b: string; c: boolean};
// 先通过keyof获得'a'|'b'|'c'这个集合，再通过key in获得每一个键值,将他们都转为number类型
type Type4 = { [key in keyof Prop]: number};
// 等价于
// type Type4 = {
//     a: number;
//     b: number;
//     c: number;
// }

type TypeA = Prop['a'] // 获取Prop中键为a的类型
type TypeB = Prop['a' | 'b' | 'c']; // 获取a、b、c中各个键值的属性
// 等价于
type TypeC = Prop[keyof Prop];

type Partial1<T> = {
    [p in keyof T]?:T[p]; // 加?使得原来的类型变成可选类型；T后面接[p]使得T中每个键还是原来的类型
}
type TypeD = Partial1<Prop>;

