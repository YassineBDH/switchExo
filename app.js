let jour = prompt("Veuillez saisir le jour")

switch (jour) {
    case 'lundi':
        console.log("c'est lundi");
        break;
    case 'Lundi':
        console.log("c'est Lundi");
        break;
    case 'Mardi':
        console.log("c'est Mardi");
        break;
    case 'Mercredi':
        console.log("c'est Mercredi");
        break;
    case 'Jeudi':
        console.log("c'est Jeudi");
        break;
    case 'Vendredi':
        console.log("c'est Vendredi");
        break;
    case 'samedi':
        console.log("c'est samedi");
        break;
    case 'Dimanche':
        console.log("c'est Dimanche");
        break;

    default:
        console.log("le jour n'est pas indiqué");
        break;
}

switch (true) {
    case (jour) == "lundi":
        console.log("c'est lundi")
        break;

    case (jour) == "mardi":
        console.log("c'est mardi")
        break;

    default:
        console.log("le jour n'est pas indiqué");
        break;
}