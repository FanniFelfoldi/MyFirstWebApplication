let name = 'Fanni';
console.log(`Hello, Fanni!`)

//top part

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

var currentPhoto = 0;
var imagesData = [data1, data2, data3, data4, data5, data6, data7, data8, data9]
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);

function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);


}

function loadTitle(photoNumber) {
    $('#photo-title').text(imagesData[photoNumber].title);
}

function loadDescription(photoNumber) {
    $('#photo-description').text(imagesData[photoNumber].description);
}

loadPhoto(currentPhoto);


//jobbra balra nyilak

$('#right').click(() => {
    if (currentPhoto < 9) { currentPhoto++; }
    loadPhoto(currentPhoto);
    loadTitle(currentPhoto);
    loadDescription(currentPhoto);
});
$("#left").click (() => {
    if (currentPhoto > 0) { currentPhoto--; }
    loadPhoto(currentPhoto);
    loadTitle(currentPhoto);
    loadDescription(currentPhoto);
})


//bottom part

let data = ["first", "second", "third"];

imagesData.forEach((item, index) => {
    $('#photoScroll').append(`<div class="imageHolder" data-index="${index}">
    <img class="small1" id="imgSmall" src =${item.photo} data-index="${index}">
    <span class="textOver ">${item.title}</span>
    <p class="smallDescription">${item.description}</p>
    </div>`);
 
    $('.imageHolder').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    let numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#clicked').text(data[indexClicked]);
    $('.photoHolder img').attr('src', imagesData[indexClicked].photo);
    $('#title').text(imagesData[indexClicked].title);
    $('#description').text(imagesData[indexClicked].description);
    currentPhoto = indexClicked;
  });
});

$('.imageHolder').click((event) => {
    var indexClicked = $(event.target).attr('data-index');
    // indexClicked is now a string! if you need it as a number you have to change it
    // because for example "1" + 1 is going to be "11" and not 2
    var numberIndex = parseInt(indexClicked);
    // now numberIndex is a number
    $('#clicked').text(data[indexClicked]);
    $('.imageHolder img').attr('src', imagesData[indexClicked].photo);
    $('.textOver').text(imagesData[indexClicked].title);
    $('.smallDescription').text(imagesData[indexClicked].description);
    currentPhoto = indexClicked;
});

