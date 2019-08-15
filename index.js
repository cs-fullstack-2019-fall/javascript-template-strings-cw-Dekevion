// exercise one
// var my_name = "Dekevion";
// var my_id = 101;
// var my_address = "Memphis, Tn";
//
//
//
//
// var template_string = (`My name is ${my_name}.
// My id is ${my_id}.
// My address is ${my_address}`);
//
// alert(template_string);
// console.log(template_string);
//
// // // exercise 2
//
// var contestant = "1_M_l337!";
// var score = "9001";
//
//
// var other_template_string =(`Congratulations ${contestant}
// your score is ${score}`);
//
// alert(other_template_string);

// exercise 3
// let emptyArray = [];
// let parent1 ={
//     parent: "Mr Bill",
//     children: ["Sluggo", "Spot", "Linda"]
// };
//
// let parent2 = {
//     parent: "J. Page",
//     children: ["Mick", "Robert",'John', 'Kenny']
// };
//
// let parent3 = {
//     parent: "Randolh H",
//     children: ["Biffy", 'Carl Jr']
// };
//
// function listName(parentNames, childrenNames) {
//     alert(`Hello ${parentNames},
//     ${childrenNames}.`);
//
//
//
// }
//
// (listName(parent1.parent, parent1.children));
// (listName(parent2.parent,parent2.children));
// (listName(parent3.parent,parent3.children));
let parents =
    [
        {
            name: "Mr. Bill",
            children: ["Sluggo", "Spot", "Linda"]
        },
        {
            name: "Nancy R.",
            children: ["Stan"]
        },
        {
            name: "J. Page",
            children: ["Mick", "Robert", "John", "Kenny"]
        },
        {
            name: "Randolh H.",
            children: ["Biffy", "Carl Jr."]
        }
    ];

for (let i in parents) {
    let elName = parents[i].name;
    console.log(elName);                        //i for index

    console.log(parents[i].children);

}

