// function name()
// {
//     console.log("1.alan");
//   }

//   name();
//   var sayi = 44.9354;
//   console.log(sayi.toPrecision(3));
//   console.log(sayi.toFixed(1));

//   var isSayi = '34'
//   console.log(isSayi)
//   console.log(typeof isSayi)
//   console.log(isNaN('44a'));

// const tarih = new Date();
// console.log(tarih.getFullYear());
// console.log(tarih.getMonth());
// console.log(tarih.getDay());

// let kelime="Btk Akademi Türkiye Yazılımı Türkçe"
// let replaceValue=kelime.replace(/ı/g ,"i").replace(/ç/g,"c");
// console.log(replaceValue)

//Ternary

// var ternary = 5 > 1 ? "büyük" : "küçük";
// console.log(ternary);

// //iterative for
// for(let i=0;i<5;i++){
//     console.log(i);
// }

// //while
// let i2=0;
// while(i2<5){
// console.log(i2);
// i2++;
// }

// //do-while
// let i3=6;
// do{
//     console.log(i3);
//     i3--;
// }while(i3>0);

// //for in
// var dizi =[1,2,3,4,5,6,78,9];
// for(var temp in dizi){
//     console.log(`sayilar ${temp}. eleman:${dizi[temp]}`)
   
// }

//For-Each
// var dizi=[1,5,6,8,78];
// dizi.forEach(function(item){
//     console.log(item);
// });
//map Dizilerde return lazımsa
// var yeniDizi =dizi.map(function(item){
//     return item+1;
// });
// console.log(yeniDizi)
//break: döngüyü kırar
//return:methodu kırmak için 
//continue:değeri kırmak için yani sadece bu değer için çalışma sonra devam et
// var dizi =[1,2,4,3,5,"Btk Akademi",[4,9,6,8]];
// var sort = dizi.sort();
// for(var i=0; i<dizi.length; i++){
//     console.log(sort[i]);
// }

// var dizi=[]
// var software={
//     html5:'semantic',
//     css3:'box-shadow',
//     responsive:'@media',
//     bootstrap4:'color',
//     javaScript:'BOM',
//     java:['servlet',"jsp","jsf","spring"],
//     javaEE:{
//         jsf:"X",
//         jsp:"Y",
//         Servlet:"z"
//     }
// }

// console.log(software.html)
// console.log(software.java[1])
// console.log(software.javaEE.jsf)
// console.log(dizi);

// var deneme=[{},{}] 

// function deneme(){
//     console.log("Parametresiz Fonksiyonlar");
// };
// deneme();

// function deneme2(isim){
//     return isim;
// }
// var isim =deneme2("Musa");
// console.log(isim);


// function deneme3(isim,soyisim){
//     return isim +" "+ soyisim;
// }
// var isimSoyisim =deneme3("Musa","Uyumaz");
// console.log(isimSoyisim);

// let isimsizFonkisyon=function(){
//     console.log("isimsiz fonkisyon");}

// isimsizFonkisyon();

// let isimsizArrowFonksiyon=()=>{
//     console.log("Arrow fonksiyon");
// }

