//primitivni tipovi podataka
//number
let godine: number = 25;

//string
let ime: string = "Danica";

//boolean
let studira: boolean = true;

//kompleksni tipovi podataka
//1. niz stringova 
let predmeti: string[] = ["EPOS", "Cloud", "Programiranje1"];

//niz number-a
let ocene: number[] = [10, 9, 8];

//2. tuples
//uredjena entorka
let entorka:[string, number] = ["Danica", 24];

//3. enumi
enum Modul{
    TehnologijeElektronskogPoslovanja, //0
    InformacioniSistemi, //1
    SoftverskoInz //2
}

let konkretniModul: Modul = Modul.TehnologijeElektronskogPoslovanja;

//4. objekti
let student:{ime:string, godine:number, studira:boolean} = {
    ime: "Danica",
    godine: 24,
    studira: true
}

//5. unija tipova
let brojIliString:number|string = 10;

//6. any tip
let biloSta:any = "Ovo moze biti bilo sta";

//7. void
//najcesce kod funkcija
function sayHello(){
    console.log("Hello");
}

//8. null i undefined
let n:null = null;
let u:undefined = undefined;

//9. type assertions
let nekaVrednost:any = "Ovo je string";
let duzinaStringa:number = (nekaVrednost as String).length;

console.log(godine, ime, studira);//primitivni
console.log(predmeti ,ocene);//nizovi
console.log(entorka);//tuples
console.log(konkretniModul);//enum
console.log(student);//objekat
console.log(brojIliString);//unija tipova
console.log(biloSta);//any
console.log(n, u);//null, undefined
console.log(duzinaStringa);//type assertion






