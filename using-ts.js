"use strict";
// const input1=document.querySelector('.number1')! as HTMLInputElement
// const input2=document.querySelector('.number2')! as HTMLInputElement
// const button=document.querySelector('button')
// function add(number1:number,number2:number){
//     return number1+number2
// }
// function printResult(){
//     console.log("this is result")
// }
// button?.addEventListener('click',function(){
//     console.log(add(+input1.value,+input2.value))
// })
// enum Role{
//     ADMIN=1,
//     READABLE=3,
//     READONLY=5
// }
// let string:any="yui"
// let conbineFunction:(a:number,b:number)=>number
// conbineFunction=add
// for (var i:number = 0; i < 10; i++) {
//    (function(i){
//     setTimeout(function() { console.log(i); }, 100 * i);
//    })(i)
// }
// function printRes():number{
//   let result:number=10
//   if(true){
//     var b=result+1
//     return b
//   }
//   return b
// }
// printRes()
// let object={
//     a:1,
//     b:2
// }
// let {a:newA,b:newB}:{a:number,b:number}=object
// console.log(newA,newB)
// type C={a:string,b:number}
// function addAandB({a,b}:C={a:'3',b:1}):void{
//   console.log(a+b)
// }
// addAandB({a:"4",b:3})
// interface labelOption {
//     label:string
// }
// function labelFunction(object:labelOption){
//     console.log(object.label)
// }
// let object1={a:1,label:"ert"}
// labelFunction(object1)
// interface SquareConfig{
//     color?:string,
//     width?:number,
//     [propName:string]:any
// }
// function createNewSquare(config:SquareConfig):{color:string,area:number}{
//     let newSquare={color:'white',area:100}
//     if(config.color){
//         newSquare.color=config.color
//     }
//     if(config.width){
//         newSquare.area=config.width*config.width
//     }
//     return newSquare
// }
// let mySquare=createNewSquare({color:'black',opcacity:.4} )
// console.log(mySquare.color,mySquare.area)
// interface clockConstroctor{
//     new (h:number,m:number):clockInterface
// }
// interface clockInterface{
//    tick():any
// }
// function createClock(ctr:clockConstroctor,h:number,m:number):clockInterface{
//    return new ctr(h,m)
// }
// class DigitalClock implements clockInterface{
//     tick(){
//         console.log("beep")
//     }
// }
// class AnalogClock implements clockInterface{
//     tick(){
//         console.log("beepee")
//     }
// }
// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
// digital.tick()
// analog.tick()
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
//     const er:Counter=function(start:number):string{
//         return "2"
//     }
//     er.reset=function(): void {
//         throw new Error("Method not implemented.")
//     }
//     er.interval=1
//     er(1)
// class Control {
//     private stud:any
// }
// class Texta extends Control implements selectControl{
// //里面继承了私有成员
// select() {
// }
// }
// interface selectControl extends Control{
//     //里面会继承Control的私有和受保护元素
//     select():any
// }
// class Imagea  extends Control implements selectControl{
//    //Imagea不是Control的子类，所以无法实现该接口，只有Control的子类可以继承
//     select(){}
// }
// class Person{
//     protected name:string
//     constructor(name:string){
//         this.name=name
//     }
// }
// class Mikical extends Person{
// private iuo:string
// constructor(name:string,iou:string){
// super(name)
// this.iuo=iou
// }
// printResult(){
//     console.log(this.name)
// }
// }
// let mink=new Mikical("mikical","dd")
// mink.printResult()
// abstract class Department{
//     constructor(protected name:string){
//     }
//     printName():void{
//         console.log("printName:"+this.name)
//     }
//     abstract printMeeting():void
// }
// class LawDepartment extends Department{
//     constructor(name:string){
//         super(name)
//     }
//     printMeeting(): void {
//         console.log("printMeeting:"+this.name)
//     }
// }
// let department:Department
// department=new LawDepartment("LawDepartment")
// department.printName()
// department.printMeeting()
// type iup ={a:string,name:string}
// type uoi={b:string,name:string}
// type Union = iup | uoi
// type Intersection=iup & uoi
// let obj:Union;
// interface Named{
//     name:string
// }
// let nameOi:Named
// let obj={
//     name:'alise',
//     location:'vancouver'
// }
// nameOi=obj
// let x=(name:string,location:number[])=>({name:'string',location:'vancourver'})
// let y=(name:string,location:number[],ik:number)=>({name:'string'})
// y=x
// enum EventType{
//     mouseEvent
// }
// interface Event{
// timestamp:number
// }
// interface MouseEvent extends Event{
//     xw:number;
//     yw:number
// }
// function listebEvent(eventType:EventType,handler:(e:MouseEvent)=>void){
// }
// listebEvent(EventType.mouseEvent,(e :MouseEvent)=>{
//     console.log(e.xw,e.yw)
// })
// listebEvent(EventType.mouseEvent,(e:MouseEvent)=>{
//     console.log((<MouseEvent>e).xw,(<MouseEvent>e).y)
// })
// listebEvent(EventType.mouseEvent,<(e:Event)=>void>((e:MouseEvent)=>{
//     console.log(e.xw,e.yw)
// }))
// function invokeLater(args:any[],callback:(...args:any[])=>void){
// }
// invokeLater([1,2],(x?,y?)=>{
//     console.log(x,y)
// })
// console.log(2)
// class Person{
//     private name:string
//     constructor(name:string){
//         this.name=name
//     }
// }
// class Micakal extends Person{
//     constructor(name:string,namePrivate:string){
//         super(name)
//     }
// }
// let a:Person
// let b:Micakal
// a=new Person("a")
// b=new Micakal("b","b")
// a=b
// interface Empty<T>{
// }
// let m1:Empty<number>=1
// let m2:Empty<string>=2
// m1=m2//值随便写一个，这时是可以相等的，T未在成员函数中被引用
// interface NotEmpty<T>{
//     data:T
// }
// let p1:NotEmpty<number>={data:1}
// let p2:NotEmpty<string>={data:"w"}
// // p1=p2//值随便写一个，这时是不相等的，T在成员函数中被引用
// let r1:NotEmpty<number>={data:1}
// let r2:NotEmpty<number>={data:2}
// r1=r2//值随便写一个，这时是相等的，T在成员函数中被引用
// "--strictNullChecks"
// function extend<T , U>(first:T,second:U):T & U{
//     let result= <T & U>{}
//     for(let id in first){
//         (<any>result)[id]=(<any>first)[id]
//     }
//     for(let id in second){
//       if(!(<object>result).hasOwnProperty(id)){
//         (<any>result)[id]=(<any>second)[id]
//       }
//     }
//     return result
// }
// class Person{
//     constructor(public name:string){
//         this.name=name
//     }
// }
// interface Loggable{
//     log():any
// }
// class consoleLoggable implements Loggable{
//     log() {
//         console.log(2)
//     }
// }
// let object=extend(new Person("jake"),new consoleLoggable())
// let n=object.name
// let jake=object.log()
// interface Fish{
//     swim():void
//     layEggs():void
// }
// interface Bird{
//     fly():void
//     layEggs():void
// }
// function getSmallPet():Fish | Bird{
//     return 1 as unknown as Fish |Bird
// }
// let pet=getSmallPet()
// pet.layEggs()
// function isFish(pet:Fish|Bird):pet is Fish{
//      return (<Fish>pet).swim!==undefined
// }
// if(isFish(pet)){
//     pet.swim()
// }
// else{
//     pet.fly()
// }
// let u:string
// function f(x:number,y?:number){
//     return x+(y||0)
// }
// f(1,2)
// f(1)
// f(1,undefined)
// f(2,null)
// type linkList<T>=T & {next:linkList<T>}
// interface Person{
//     name:string
// }
// let person:linkList<Person>=1 as unknown as linkList<Person>
// person.name
// person.next.next.next.next
// type numbera<T> ={
//    value:T
// }
// let i:numbera<T>
// let ui:value
// interface Square{
//     kind:'square',
//     size:number
// }
// interface Rectangle{
//     kind:'rectangle',
//     width:number,
//     height:number
// }
// interface Circle{
//     kind:'circle',
//     radius:number
// }
// type Shape =Square | Rectangle | Circle
// function calArea(shape:Shape):number{
//     switch(shape.kind){
//         case 'square':return  shape.size*shape.size
//         case 'rectangle':return  shape.width*shape.height
//         case 'circle':return  shape.radius*shape.radius*Math.PI
//         default:return assertNever(shape)
//     }
// }
// function assertNever(n:never):never{
//     throw new Error
// }
// class basicCalculator{
//     constructor(public number:number=0){
//         this.number=number
//     }
//     public add(x:number){
//         this.number+=x
//         return this
//     }
//     public minus(x:number){
//         this.number-=x
//        return this 
//     }
//     public multiply(x:number){
//         this.number*=x
//         return this
//     }
// }
// let num=new basicCalculator(3).add(3).minus(1).multiply(6)
// console.log(num.number)
// let animal=new Set(["Cat","Dog","Hamster"])
// for(let item in animal){
//     console.log(item)
// }
// for(let item of animal){
//     console.log(item)
// }
// let pets :any= new Set(["Cat", "Dog", "Hamster"]);
// pets["species"] = "mammals";
// for (let pet in pets) {
//     console.log(pet); // "species"
// }
// for (let pet of pets) {
//     console.log(pet); // "Cat", "Dog", "Hamster"
// }
// interface appleee{
//     name:string
// }
// class person implements appleee{
//     name: string;
//     constructor(name:string){
//         this.name=name
//     }
// }
// function seal(constructor:Function) 
// {
// Object.seal(constructor)
// Object.seal(constructor.prototype)
// }
// @seal
// class Greet{
//    greet:string
//    constructor(greet:string){
//     this.greet=greet
//    }
//    greeting(){
//     console.log(this.greet)
//    }
// }
//当执行Greet类的时候，会封装constructor和constructor.prototype
// function classDecoration<T extends {new(...args:any[]):{}}>(constructor:T){
//    return class extends constructor{
//     newProperty="new property"
//     hello="hello"
//    }
// }
// @classDecoration
// class Greeter{
//     newProperty="string"
//     hello:string
//     constructor(hello:string){
//         this.hello=hello
//     }
//     @enumable(false)
//     greet(){
//     }
// }
// let object=new Greeter("world")
// console.log(object)
// function enumable(value:boolean){
//     return function(target:any,property:string,descriptor:PropertyDescriptor){
//         descriptor.enumerable=false
//     }
// }
// class Point{
//     private _x:number
//     private _y:number
//     constructor(x:number,y:number){
//         this._x=x
//         this._y=y
//     }
//     @configable(false)
//     get x(){
//       return this._x
//     }
//     @configable(false)
//     get y(){
//         return this._y
//     }
// }
// function configable(value:boolean){
//     return function(target:object,propertyKey:string,descriptor: PropertyDescriptor){
//         descriptor.configurable=value
//     }
// }
// let point=new Point(1,2)
// console.log(point.x,point.y)
// const getPosition:ClassDecorator=(targrt:Function)=>{
//       targrt.prototype.getposition=function(){
//          return {
//             x:100,
//             y:100
//          }
//       }
// }
// const musicPlay=(target:Function)=>{
//     target.prototype.playMusic=function(){
//         console.log("music play")
//     }
// }
// function playVideo(){
//     return function(target:Function){
//         target.prototype.playvideo=():void=>{
//             console.log("video play")
//         }
//     }
// }
// @playVideo()
// @getPosition
// @musicPlay
// class Tank{
// }
// let t :any=new Tank()
// console.log(t.getposition())
// t.playMusic()
// t.playvideo()
// function messageDecorator():ClassDecorator{
//     return function(target:Function){
//        target.prototype.message=(value:string)=>{
//         console.log(value)
//        }
//     }
// }
// @messageDecorator()
// class Magzine{
//     login(){
//           this.message("恭喜登陆成功")   
//     }
// }
// let a=new Magzine()
// a.login()
// @messageDecorator()
// class newsPaper{
//     store(){
//         this.message("文章保存成功")
//     }
// }
// let b=new newsPaper()
// b.store()
// const showDecorator:MethodDecorator=(target:Function,propertyKey:string,descriptor:PropertyDescriptor)=>{
//     descriptor.value=()=>{
//         console.log("ads")
//     }
// }
// const unwritten:MethodDecorator=(target:Function,propertyKey:string,descriptor:PropertyDescriptor){
//     descriptor.writable=false
// }
// class Person{
//     @showDecorator
//     login(){
//         console.log("25")
//     }
//     @unwritten
//     yui(){
//         return {
//             x:100,y:100
//         }
//     }
// }
// let person=new Person()
// person.login()
// console.log(person.yui())
// person.yui=()=>{
//     console.log(34)
// }
// const sleepDecorator:MethodDecorator=(target:Function,propertyKey:string,descriptor:PropertyDescriptor)=>{
//         const method=descriptor.value
//        descriptor.value=()=>{ setTimeout(()=>{
//            method()
//            console.log(target,propertyKey,typeof target)
//         },2000)
//     }
// }
// const sleepingDecorator=(time:number):MethodDecorator=>{
//     return function(target:Object,propertyKey:string|Symbol,descriptor:PropertyDescriptor){
//         const method=descriptor.value
//         descriptor.value=()=>{ setTimeout(()=>{
//             method()
//          },time*1000)
//      }
//         }
// }
// class User{
//     @sleepDecorator
//      response(){
//         console.log("respond..")
//     }
//     @sleepingDecorator(3)
//     respond(){
//         console.log("respond 3s later")
//     }
// }
// let user=new User()
// user.response()
// user.respond()
// type userType={
//     name:string,
//     isLogin:boolean,
//     permissions:string[]
// }
// let user:userType={
//     name:'mikical',
//     isLogin:true,
//     permissions:["login","manage"]
// }
// function accessValidator(keys:string[]):MethodDecorator{
//    return (target:Object,propertyKey:string|Symbol,descriptor:PropertyDescriptor)=>{
//             let validator=()=>{
//                 return keys.every(k=>{
//                     return user.permissions.includes(k)
//                 })
//             }
//             if(user.isLogin===true&&validator()){
//                 alert("验证通过")
//                 return
//             }
//             alert("验证失败")
//    }
// }
// class Person{
//     @accessValidator(["manage","login"])
//     store(){
//     }
// }
// new Person().store()
// function propDecorator():PropertyDecorator{
//     return function(target: Object, propertyKey: string | symbol)
//     {
//          console.log(target,propertyKey)
//     }
// }
// function paramsProperty():ParameterDecorator{
//     return function(target: Object, propertyKey: string | symbol, parameterIndex: number){
//         console.log(target,propertyKey,parameterIndex)
//     }
// }
// class People{
//       @propDecorator()
//     property:string
//     constructor(property:string){
//         this.property=property
//     }
//     find(ioj:string,@paramsProperty() index:ParameterDecorator){
//     }
// }
// function lowerCase():PropertyDecorator{
//     return function(target:Object,propertyKey:string|Symbol){
//         let value:string
//         Object.defineProperty(target,<string>propertyKey,{
//             set:(v)=>{
//                  value=v
//             },
//             get:()=>{
//                   return value.toLowerCase()
//             }
//         })
//     }
// }
// class kink{
//     @lowerCase()
//     title:string|undefined
// }
// let ki=new kink()
// ki.title="poIddasdSASAS"
// console.log(ki.title)
// function randomcolor():PropertyDecorator{
//      return function(target:Object,propertyKey:string|Symbol){
//         let colorArr=['red','blue','yellow','black','white','gray']
//         Object.defineProperty(target,<string>propertyKey,{
//             get(){
//                return colorArr[Math.floor(Math.random()*colorArr.length)]
//             }
//         })
//      }
// }
// class RandomColor{
//     @randomcolor()
//      color:string|undefined
//     public draw(){
//         document.body.insertAdjacentHTML("beforeend",`<div style="width:200px; height:200px; background-color:${this.color}"></div>`)
//     }
// }
// new RandomColor().draw()
// import 'reflect-metadata'
// let hipo={
//    name:"uyl"
// }
// Reflect.defineMetadata('xj',{url:"www.12.com"},hipo,'name')
// // console.log(Reflect.getMetadata("xj",hipo,'name'))
// // console.log(34)
// const validateDeracotor:MethodDecorator=(target:Object,propertyKey:string|Symbol,descriptor:PropertyDescriptor)=>{
//    const method=descriptor.value
//    descriptor.value=()=>{
//      const requiredDa:number[]= Reflect.getMetadata("required",target,<string>propertyKey)
//      requiredDa.forEach(index => {
//       if(index>arguments.length||arguments[index]===undefined){
//       throw new Error("请传递必要参数")
//       }
//      });
//      return method.apply(this,arguments)
//    }
//    console.log(Reflect.getMetadata("required",target,<string>propertyKey))
// }
// const requiredDecorator:ParameterDecorator=(target:Object,propertyKey:string|Symbol,index:number)=>{
//    let numArr=[]
//    numArr.push(index)
//    Reflect.defineMetadata("required",numArr,target,<string>propertyKey)
// }
// class User{
//    @validateDeracotor
//    find(name:string,@requiredDecorator param:ParameterDecorator){
//    }
// }
// console.log(new User().find("djj",34))
// import zipcoder=require("./text")
// import {Valitator} from './Validation'
// import {LetterOnlyvalidation} from './LettersOnlyValidator'
// import {ZipCodeValidator} from './ZipCodeValidator'
// ///<reference path="node.d.ts">
// import * as URL from 'url'
// let zipcoderr=new zipcoder()
// console.log(zipcoderr.isAccecptable())
// let number="3"
// let string="djalj"
// let letterRegExp=new LetterOnlyvalidation()
// let numberRegExp=new ZipCodeValidator()
// console.log(letterRegExp.isAccectable(string))
// console.log(numberRegExp.isAccectable(number))
// console.log(URL.parse("http://www.typescriptlang.org"))
// let str=3
// console.log(str*10+"3".charCodeAt(0)-"0".charCodeAt(0))
// class basicCalculator{
//    private current:number=0
//    private memory:number=0
//    private opreator:string=""
//    protected processDigit(digit:string,currentValue:number){
//       if(digit>="0"&&digit<="9"){
//       return currentValue*10+(digit.charCodeAt(0)-"0".charCodeAt(0))
//       }
//    }
//    protected processOpeartor(opreator:string){
//        if(["*","/","+","-"].includes(opreator)){
//          return opreator
//        }
//    }
//    protected evaluateOperator(opreator:string,left:number,right:number){
//       switch(opreator){
//          case "+":return left+right
//          case "-":return left-right
//          case "*":return left*right
//          case "/":return left/right
//       }
//    }
//    protected evaluate(){
//       if(this.opreator){
//          this.memory=this.evaluateOperator(this.opreator,this.memory,this.current)!
//       }
//       else{
//          this.memory=this.current
//       }
//       this.current=0
//    }
//    public charProcess(str:string){
//    if(str==="="){
//       this.evaluate()
//       return
//    }
//   else{
//    let value=this.processDigit(str,this.current)
//    if(value!==undefined){
//       this.current=value
//       return
//    }
//    else{
//       let value=this.processOpeartor(str)
//       if(value!==undefined){
//          this.evaluate()
//          this.opreator=value
//          return
//       }
//    }
//   }
//   throw new Error("no such input!")
//    }
//   public getResult(){
//       return this.memory
//    }
// }
// let a=new basicCalculator()
// let str="1+3+4*9="
// function calculator(c:basicCalculator,str:string){
// for(let i=0;i<str.length;i++){
//    c.charProcess(str[i])
// }
// console.log(c.getResult())
// }
// calculator(new basicCalculator(),str)
// class basicCalculator{
//    private current:number=0
//    private memory:number=0
//    private operator:string=""
//    protected processDigit(digit:string,current:number){
//       if(digit<="9"&&digit>="0"){
//          return current*10+(digit.charCodeAt(0)-"0".charCodeAt(0))
//       }
//    }
//    protected processOperator(operator:string){
//       if(["+","-","/","*"].includes(operator))
//       return operator
//    }
//    protected evaluateOperator(operator:string,left:number,right:number){
//       switch(operator){
//          case "+":return left+right
//          case "-":return left-right
//          case "*":return left*right
//          case "/":return left/right
//       }
//    }
//    public evaluate(){
//      if(this.operator){
//      this.memory=this.evaluateOperator(this.operator,this.memory,this.current)!
//      }
//      else{
//       this.memory=this.current
//      }
//      this.current=0
//    }
//    public processChar(str:string){
//       if(str==="="){
//          this.evaluate()
//          return
//       }
//      else{
//       let value=this.processDigit(str,this.current)
//       if(value!==undefined){
//          this.current=value
//          return
//       }
//       else{
//          let value=this.processOperator(str)
//          if(value!==undefined){
//             this.evaluate()
//             this.operator=str
//             return
//          }
//       }
//      }
//    }
//    public getResult(){
//       return this.memory
//    }
// }
// let str="1*3*5/7="
// function calcu(c:basicCalculator,str:string){
//    for(let i=0;i<str.length;i++){
//       c.processChar(str[i])
//    }
//    console.log(c.getResult())
// }
// calcu(new basicCalculator(),str)
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log("" + s + "" + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
    }
}
