let swap = function(){
//Changement de la source de l'image en fonction de l'ID de l'image
this.src='./assets/img/' + this.id + '_2.jpg';
}

document.getElementById('image1').onmouseover = swap;
document.getElementById('image2').onmouseover = swap;
document.getElementById('image3').onmouseover = swap;
document.getElementById('image4').onmouseover = swap;
document.getElementById('image5').onmouseover = swap;

let reverse = function(){
//Changement de la source vers l'originale de l'image en fonction de l'ID de l'image
this.src='./assets/img/' + this.id + '.jpg';
}
document.getElementById('image1').onmouseout = reverse;
document.getElementById('image2').onmouseout = reverse;
document.getElementById('image3').onmouseout = reverse;
document.getElementById('image4').onmouseout = reverse;
document.getElementById('image5').onmouseout = reverse;