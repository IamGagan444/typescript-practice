//================ TyPE ALIES IN TYPESCTIPT ==========================
//type is a keyword for declaring type alies
// const arrs: User = {
//     email: "gagan_palai537@gmail.com",
//     password: 123,
// };
// type User = {
//     email: string;
//     password: number;
//     name?: string;
// };
// function login(user: User): User {
//     return user;
// }
// console.log(login(arrs));

// type Id = string | number;
// // | it means union
// const id: Id = "12" || 23;

// console.log(id);

//=========== INTERFACES IN TYPESCRIPT ===============

// interface Transaction {
//     payerAccount: number;
//     payeeAccount: number;
// }

// interface BankAccount {
//     accountNumber: number;
//     accountHolder: string;
//     balance: number;
//     isActive: boolean;
//     transaction: Transaction[];
// }
// const transaction1: Transaction = {
//     payeeAccount: 40365319025,
//     payerAccount: 34352593676,
// };
// const transaction2: Transaction = {
//     payeeAccount: 40365319026,
//     payerAccount: 34352593676,
// };

// const bankAccount: BankAccount = {
//     accountNumber: 34352593676,
//     accountHolder: "Ramesh Choudhary",
//     balance: 456,
//     isActive: true,
//     transaction: [transaction1, transaction2],
// };

// console.log(bankAccount);

// ============= EXTENDS ======= HOW TO DO EXTENDS IN INTERFACE ==================

// type Book = {
//     name: string;
//     price: number;
// }
// interface Ebook extends Book {
//     size: number;
//     format: string;
// }
// interface AudioBook extends Ebook {
//     duration: number;
// }
// type ReleteadBooks = {
//     name: string,
//     writer: string
// }
// // i have did interface merge here
// interface AudioBook {
//     diraction: string
//     releted: ReleteadBooks[]
// }
// const book2: ReleteadBooks = {
//     name: "The Ramayan",
//     writer: "Maharsi Balmiki"

// }
// const book: AudioBook = {
//     name: "Srimad bhagvat gita",
//     price: 490,
//     size: 4,
//     format: "pdf",
//     duration: 30,
//     diraction: "south",
//     releted: [book2]
// };
// console.log(book)


// ===================== UNIONS IN TYPESCRIPT:"|" ================
// === THE SYMBOL OF UNIONS IS | , 

// type Price = string | number[];
// const mouse: Price = "450 rs"
// console.log(mouse)

// function get3(any: Price) {
//     return (any.slice(0, 2))

// }

//  console.log(get3(mouse));

// type x = string | number
// function some(val: Price) {
//     if (typeof val === "number") {
//         return (val)
//     } else {
//         return (val.slice(0, 4))
//     }
// }

// console.log(some(mouse));



/// ================== GENERICS IN TYPESCRIPT ============================


// interface People {
//     age: number
// }

// const people: People[] = [{ age: 45 }, { age: 48 }, { age: 40 }, { age: 85 }];

// function getOldest<T extends People>(people: T[]) {
//     return people.sort((a, b) => b.age - a.age)[0]

// }
// interface Player extends People{
//     name:string
// }


// const players:Player[] = [
//     {
//         name: "virat kholi",
//         age: 34
//     },
//     {
//         name: "hardik pandya",
//         age: 28
//     },
//     {
//         name: "rohit sharma",
//         age: 36
//     },
//     {
//         name: "jasprit bumhra",
//         age: 29
//     },

// ]

// console.log(getOldest(people))

// // EXAMPLE:2

interface User{
    name:string
    age:number
}
interface Post{
    title:string,
    description:string,
    totalLikes:number
}

const fetchUserData=async(path:string)=>{
    const userData=await fetch(`https://examples.com/${path}`)
    return userData.json()
}
const fetcpostsData=async(path:string)=>{
    const postData=await fetch(`https://examples.com/${path}`)
    return postData.json()
}
const fetchData=async<ResultType>(path:string):Promise<ResultType>=>{
    const Data=await fetch(`https://examples.com/${path}`)
    return Data.json()
}

(async()=>{
 const userData=await fetchData<User[]>("/users")
 const postData=await fetchData<Post[]>("/posts")
 
})
