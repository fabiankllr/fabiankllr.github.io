const clickable = document.getElementById("board");
var imgBoard = clickable.children[0];
const button = document.getElementById("newGame");
button.style.display = "none";

var images = new Array();
var usedImageIndices = new Set();

images[0] = "herz2.png";
images[1] = "herz3.png";
images[2] = "herz4.png";
images[3] = "herz5.png";
images[4] = "herz6.png";
images[5] = "herz7.png";
images[6] = "herz8.png";
images[7] = "herz9.png";
images[8] = "herz10.png";
images[9] = "herz11.png";
images[10] = "herz12.png";
images[11] = "herz13.png";
images[12] = "herz14.png";
images[13] = "karo2.png";
images[14] = "karo3.png";
images[15] = "karo4.png";
images[16] = "karo5.png";
images[17] = "karo6.png";
images[18] = "karo7.png";
images[19] = "karo8.png";
images[20] = "karo9.png";
images[21] = "karo10.png";
images[22] = "karo11.png";
images[23] = "karo12.png";
images[24] = "karo13.png";
images[25] = "karo14.png";
images[26] = "kreuz2.png";
images[28] = "kreuz3.png";
images[27] = "kreuz4.png";
images[29] = "kreuz5.png";
images[30] = "kreuz6.png";
images[31] = "kreuz7.png";
images[32] = "kreuz8.png";
images[33] = "kreuz9.png";
images[34] = "kreuz10.png";
images[35] = "kreuz11.png";
images[36] = "kreuz12.png";
images[37] = "kreuz13.png";
images[38] = "kreuz14.png";
images[39] = "pik2.png";
images[40] = "pik3.png";
images[41] = "pik4.png";
images[42] = "pik5.png";
images[43] = "pik6.png";
images[44] = "pik7.png";
images[45] = "pik8.png";
images[46] = "pik9.png";
images[47] = "pik10.png";
images[48] = "pik11.png";
images[49] = "pik12.png";
images[50] = "pik13.png";
images[51] = "pik14.png";

imgBoard.addEventListener("click", imgChange, false);

button.addEventListener("click", reset, false);

function imgChange() {
    if (usedImageIndices.size === 52) {
        button.style.display = "block";
        imgBoard.setAttribute("src", "img/backside.png")
    } else {
        number = randomNum();
        console.log(number);
        imgBoard.setAttribute("src", "img/" + images[number])
    }
}

function randomNum() {
    do {
        var number = Math.floor(Math.random() * images.length);
    } while (usedImageIndices.has(number));
    usedImageIndices.add(number);
    return number;
}

function reset() {
    usedImageIndices = new Set();
    button.style.display = "none";
}