let data = {
    photo: "/Pictures/biscottini.jpg",
    title: "Biscottini", 
    description: "Biscottini per la nascita. Biscottini con pastafrolla.",
};
$("photo").attr("src", data.photo);

let data = {
    photo: "/Pictures/bonbons.jpg",
    title: "Bon-Bons", 
    description: "Bon-bons repieni con la crema pistachio o marmellata di fichi",
};
$("photo").attr("src", data.photo);

let data = {
    photo: "/Pictures/bread.jpg",
    title: "Pane", 
    description: "Pane fatto in casa con lievito madre",
};
$("photo").attr("src", data.photo);

let data = {
    photo: "/Pictures/fruitcake.jpg",
    title: "Torta Margherita alla frutta", 
    description: "Torta Margherita alla frutta mista, per un compleanno",
};
$("photo").attr("src", data.photo);

let data = {
    photo: "/Pictures/howToTrainYourDragon.jpg",
    title: "How to train your dragon", 
    description: "Torta al ferrero roche, con un Dragone di marzipano",
};
$("photo").attr("src", data.photo);

let data = {
    photo: "/Pictures/kuglof.jpg",
    title: "Ciambella", 
    description: "Ciambella, kuglof con lievito madre",
};
$("photo").attr("src", data.photo);

let data = {
    photo: "/Pictures/pizza.jpg",
    title: "Pizza fatta in casa", 
    description: "Pizza step by step.",
};
$("photo").attr("src", data.photo);

let data = {
    photo: "/Pictures/treccina.jpg",
    title: "Treccina", 
    description: "Treccina con zafferano.",
};
$("photo").attr("src", data.photo);

let data = {
    photo: "/Pictures/trotaMargherita.jpg",
    title: "Torta Margherita", 
    description: "Torta Margherita alla cacao",
};
$("#photo").attr("src", data.photo);

let imagesData = ["/Pictures/biscottini.jpg", "/Pictures/bonbons.jpg", "/Pictures/bread.jpg", "/Pictures/fruitcake.jpg", "/Pictures/howToTrainYourDragon.jpg", "/Pictures/kuglof.jpg", "/Pictures/pizza.jpg", "/Pictures/treccina.jpg", "/Pictures/trotaMargherita.jpg"];
let currentPhoto = 0;
$("#photo").attr("src", imagesData[currentPhoto].photo);