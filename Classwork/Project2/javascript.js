// function sumNumbers(a,b,c){
//     const d= a+b+c
//     document.write(d)
// }
// sumNumbers(4,6,9)
// function bankai(){
//     var a=10
//     let e=a++
//     console.log(a,e)
// }
// bankai()
// function baka(){
//     const a=5
//     const f="5"
//     if(a===f)
//     document.write(a)
// }
// baka()
// function omo(){
//     const a=5;
//     const j=5;
//     const g=3;
//     if((a===j) && (j==g))
//     alert("True")
// }
// omo()

// var FirstName="Benedict";
// var LastName="Achikeh";
// let FullName=FirstName+" "+LastName;
// console.log(FullName);

// var FirstName="Benedict"
// console.log(FirstName.length)
// console.log(FirstName.charAt(1))
// console.log(FirstName.charCodeAt(1))

// /*var a=12
// var b=20,
// sum=a+b
// document.write(sum)*/

// /*var a=12
// var b="20"
// let c=a+b,
// console.log(c)*/

// /*var a=12
//     b=20
//     c=50
//     d= c.toString()
//     sum=a+b+d
//     document.write(sum)*/

// var States=["Abuja","Benin","Cross-River","Anambra","Akwaibom","Lagos","Oyo","Uyo","Delta"]
//     States[0]="Imo"
//     States[1]
//     States[6]
//     let X=States.toString()
//     document.write(States)
//     console.log(States.length)

// var text="<ul>"
// const Stateslen=States.length;
// var a=0
// for(a; a<Stateslen; a++){
//     text +="<li>"+ States[a] + "</li>";
// }
// text +="</ul>"
// document.getElementById(Ul)
// document.write(text)

// switch statement syntax

function ben(){
    var day= new Date().getDay()
    switch (day){
        case 0:
            alert("Happy Sunday")
            break;
        case 1:
            alert("Happy Monday")
            break;
        case 2:
            alert("Happy Tuesdayy")
            break;
        case 3:
            alert("Happy Wednesday")
            break;
        case 4:
            alert("Happy Thursday")
            break;
        case 5:
            alert("Happy Friday")
            break;
        case 6:
            alert("Happy Saturday")
            break;
       // default:
        //    break;
    }
}
console.log("I can reach here")
ben()