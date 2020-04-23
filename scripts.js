
var data1 = {
    photo: "/Pictures/biscottini.jpg",
    title: "Biscottini", 
    description: "Biscottini per la nascita. Biscottini con pastafrolla.",
};
var data2 = {
    photo: "/Pictures/bonbons.jpg",
    title: "Bon-Bons", 
    description: "Bon-bons repieni con la crema pistachio o marmellata di fichi",
};

var data3 = {
    photo: "/Pictures/bread.jpg",
    title: "Pane", 
    description: "Pane fatto in casa con lievito madre",
};

var data4 = {
    photo: "/Pictures/fruitcake.jpg",
    title: "Torta Margherita alla frutta", 
    description: "Torta Margherita alla frutta mista, per un compleanno",
};

var data5 = {
    photo: "/Pictures/howToTrainYourDragon.jpg",
    title: "How to train your dragon", 
    description: "Torta al ferrero roche, con un Dragone di marzipano",
};

var data6 = {
    photo: "/Pictures/kuglof.jpg",
    title: "Ciambella", 
    description: "Ciambella, kuglof con lievito madre",
};

var data7 = {
    photo: "/Pictures/pizza.jpg",
    title: "Pizza fatta in casa", 
    description: "Pizza step by step.",
};

var data8 = {
    photo: "/Pictures/treccina.jpg",
    title: "Treccina", 
    description: "Treccina con zafferano.",
};

var data9 = {
    photo: "/Pictures/trotaMargherita.jpg",
    title: "Torta Margherita", 
    description: "Torta Margherita alla cacao",
};



let imagesData = [data1, data2, data3, data4, data5, data6, data7, data8, data9,];
let currentPhoto = 0;
$("#photo").attr("src", imagesData[currentPhoto]);

let loadPhoto = (photoNumber) => {
    $("#photo").attr("src", imagesData[photoNumber].photo);
}
loadPhoto (currentPhoto);

$("#right").click (() => {
    currentPhoto++;
    loadPhoto(currentPhoto);
})

$("#left").click (() => {
    currentPhoto--;
    loadPhoto(currentPhoto);
})

//ezt nezd meg https://www.youtube.com/watch?v=7ZO2RTMNSAY
// hogy a legutolso kepre ugorjo - le kell meg ezt tisztazni
left.addEventListener ("click", function (){
    if(current===0) {
        current = viewerImages.length;
    }
    slideLeft();
})

// hogy a legelso kepre ugorjo, le kell meg tisztazni a kodokat
arrowRight.addEventListener ("click", function (){
    if(current===sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
})
