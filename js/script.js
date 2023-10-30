// let motTapeOk = false; // Essayez de mettre false à la place de true
// let motUtilisateur = prompt("entrez un mot:");
// if (motTapeOk) {
//     console.log("Bravo, vous avez correctement tapé le mot");
// } else {
//     console.log("Échec, le mot n'est pas correct");
// }
// const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
// let motUtilisateur = prompt("Entrez le mot : " + motApplication);

// if (motUtilisateur === motApplication) {
//     console.log("Bravo !");
// } else {
//     console.log("Vous avez fait une erreur de frappe.");
// }
// switch (motUtilisateur) {
//     case motApplication:
//         console.log("Bravo !")
//         break
//     case "Gredin":
//         console.log("Restez correct !")
//         break
//     case "Mécréant":
//         console.log("Restez correct !")
//         break
//     case "Vilain":
//         console.log("Soyez gentil !")
//         break
//     default:
//         console.log("Vous avez fait une erreur de frappe.")
// }
// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia" , "Serviette"];
let score = 0;
// Déclaration de la variable contenant le mot saisi par l'utilisateur
// Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
let motUtilisateur = prompt("Entrez un mot: " + listeMots[0]);

if (motUtilisateur === listeMots[0]) {
    score++;
} 
if (motUtilisateur === listeMots[1]) {
    score++;
} 
if (motUtilisateur === listeMots[2]) {
    score++;
} 
// Affichage du score de l'utilisateur
console.log("Votre score est de " + score + " sur 3")