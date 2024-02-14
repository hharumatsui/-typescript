// class ClassName {}
// class Point {
//     x:number  
//     y:number  
//     width: number;
//     height: number;
// }
// //let a: Point
// let point: Point = new Point();
// function ts(){
//     point.x = 2
//     point.y = 1
// }
// console.log(ts);

// class Point2 {
//     width:number 
//     height:number 
// }
// let b: Point2
// function ts2(){
//     point.width = 4
//     point.height = 6
// }
// console.log(ts2)

class Temp{
    private x: number
    public y: number
    constructor(val1?:number, val2?: number) {
        val1 ? this.x = val1 : this.x = 1
        val2 ? this.y = val2 : this.y = 2
    }
    public get getX(){
        return this.x
    }
    public set setX(value: number){
        this.x = value
    }
}

let temp2 = new Temp(10,20)
temp2.setX
console.log(temp2.getX)