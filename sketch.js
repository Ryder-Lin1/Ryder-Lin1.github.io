//starting at line 211 is when i do the duplicate letter accommodation
const letterButtons = [];
let guesswords = [];
let guessedterm = [];
let printwords;
let count = 0;
let wordfind = false;
let firstclick = false;
let numberofline = 0;
let gameover = false;

let words, wordx;
// function preload() {
//words = loadStrings("words.txt");
//}
var result;
tempString = "";

function preload() {
  words = loadStrings("words.txt");
}

class ButtonClass {
   
  //all classes have a constructor
  //this is used to create objects of that class
  constructor(buttonName, text1, num) {
     if (gameover) noLoop();
    console.log(buttonName + " created");
    this.buttonName = createButton(text1);
    this.buttonName.mousePressed(buttonCommand);
    this.num = num;
    function buttonCommand() {
      //console.log(buttonName + " clicked " + num + " times");

      if (tempString.length >= 5) return;
      tempString += text1;
      console.log(tempString);

      //if ((count + 1) % 5 == 0) {
      //        if (words[x].indexOf(text1.toLowerCase()) == -1) {
      stroke("black");
      fill("black");
      text(text1, 135 + 50 * (count % 5), 149 + 40 * floor(count / 5));
      /**        } else if (
          words[x].indexOf(text1.toLowerCase()) != count % 5 &&
          words[x].indexOf(text1.toLowerCase(), 2) != count % 5 &&
          words[x].indexOf(text1.toLowerCase(), 3) != count % 5 &&
          words[x].indexOf(text1.toLowerCase(), 4) != count % 5
        ) {
          stroke("green");
          fill("green");
          text(text1, 135 + 50 * (count % 5), 270 + 40 * floor(count / 5));
        } else {
          stroke("red");
          fill("red");
          text(text1, 135 + 50 * (count % 5), 270 + 40 * floor(count / 5));
        }
*/
      if (!words.includes(tempString)) {
      }

      count++;
      guesswords.push(text1);
    } //fn command
    //}
  }
  //constructor
} //class Lbtn
function OutputButtons() {
   if (gameover) return;
  let ButtonCount = 0;
  x = 0;
  y = 0;
  let i = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80];
  for (let m = 0; m < 10; m++) {
    letterButtons[i[m] - 65] = new ButtonClass("button", char(i[m]), false);
    /*button.buttonName.position(5+28*(something other than i))
 try declaring an "x" which you can reset to zero
 after 13 itrations of i*/
    letterButtons[i[m] - 65].buttonName.position(100 + 28 * x, 400 + y);
    x++;
    ButtonCount++;
    ButtonCount += 0;
  }
  let j = [65, 83, 68, 70, 71, 72, 74, 75, 76];

  for (let m = 0; m < j.length; m++) {
    letterButtons[j[m] - 65] = new ButtonClass("button", char(j[m]), false);
    /*button.buttonName.position(5+28*(something other than i))
 try declaring an "x" which you can reset to zero
 after 13 itrations of i*/
    letterButtons[j[m] - 65].buttonName.position(-167 + 28 * x, 425 + y);
    x++;
    ButtonCount++;
    ButtonCount += 0;
  }
  let t = [90, 88, 67, 86, 66, 78, 77];
  for (let m = 0; m < t.length; m++) {
    letterButtons[t[m] - 65] = new ButtonClass("button", char(t[m]), false);
    /*button.buttonName.position(5+28*(something other than i))
 try declaring an "x" which you can reset to zero
 after 13 itrations of i*/
    letterButtons[t[m] - 65].buttonName.position(-400 + 28 * x, 450 + y);
    x++;
    ButtonCount++;
    ButtonCount += 0;
  }
  button = createButton("Enter");
  button.position(420, 400);
  button.mousePressed(checkLetter);
  button = createButton("⌦");
  button.position(420, 430);
  button.mousePressed(deleteLetter);
} //outputbuttons;

function loadString() {
  //words = loadStrings('/asset/test.txt');
  words = loadStrings("words.txt");
  console.log(words);
}
function keyPressed() {
  if (gameover) return;
  if (keyCode === BACKSPACE) {
    deleteLetter();
  } //if
  else if (keyCode === ENTER) {
    checkLetter();
  } //else if
  else {
    buttonCommand(char(keyCode));
  } //else
} //KeyPressed
function setup() {
  createCanvas(500, 500);
  background("beige");

  wordx = round(random(words.length));
text('Wordle', 215, 100);
      
  OutputButtons();
  for (let i = 0; i < 30; i++) {
    square(125 + 50 * (i % 5), 130 + 40 * floor(i / 5), 30);
  }
  //loadString();
  //console.log(words,250,250)
} //setup

function checkLetter() {
  if (gameover) return;
  firstclick = false;
  wordfind = false;
  guesswords.push(words[wordx]);
  console.log("The words is "+words[wordx]);
  //let guesswords = [];
  //guesswords.push(text1);
  if (count % 5 != 0) return;
  else {
    //mpString = "";

    guessword = "";
    if (guesswords != null) {
      guessword =
        guesswords[0] +
        guesswords[1] +
        guesswords[2] +
        guesswords[3] +
        guesswords[4];
    }
    guessword = tempString;
         
 
  
    console.log(count);
    console.log(guessword.length);
    //if (guessword.length != 0){

    //if (count == 0) return
    console.log(guessword.length);
    for (let i = 1; i <= words.length; i++) {
      if (words[i] == guessword.toLowerCase()) {
        wordfind = true;
        firstclick = true;
        console.log("words found");
        numberofline = numberofline + 1;
        guessedterm.push(guessword);
        guesswords = [];
        tempString = "";
        createCanvas(500, 500);
        background("beige");
        //OutputButtons();
        //x = round(random(words.length));
        //console.log(x);
       text('Wordle', 215, 100);
        stroke('black')
   
        for (let i = 0; i < 30; i++) {
          square(125 + 50 * (i % 5), 130 + 40 * floor(i / 5), 30);
        }
        for (let f = 1; f <= guessedterm.length; f++) {
          printwords = guessedterm[f - 1];
          let color = [];
          for (let n = 0; n <= printwords.length; n++) {
            color[n] = printwords[n];
          }
          for (let m = 0; m < 5; m++) {
            if (words[wordx].indexOf(color[m].toLowerCase()) == -1) {
              stroke("black");
              fill("black");
              text(printwords[m], 135 + 50 * m, 149 + 40 * (f - 1));
            } else if (
              words[wordx].indexOf(color[m].toLowerCase()) != m &&
              words[wordx].indexOf(color[m].toLowerCase(), 2) != m &&
              words[wordx].indexOf(color[m].toLowerCase(), 3) != m &&
              words[wordx].indexOf(color[m].toLowerCase(), 4) != m //&&
              //words[x].indexOf(color[m].toLowerCase(), 5) != m
            ) {
              stroke("green");
              fill("green");
              text(printwords[m], 135 + 50 * m, 149 + 40 * (f - 1));
            } else {
              stroke("red");
              fill("red");
              text(printwords[m], 135 + 50 * m, 149 + 40 * (f - 1));
            }
          }
          printwords = "";
        }

        noLoop();
      } else {
        //wordfind = false;
        //guesswords=[];
      }
    }
    if (wordfind == false) {
      console.log("words not found");
      console.log(count);
      tempString = "";
      for (let f = count - 5; f <= count - 1; f++) {
        //noFill();
        //noStroke();
        //erase();
        //square(125 + 50 * f, 250 + 40 * floor(f / 5), 30);
        text("", 135 + 50 * (f % 5), 149 + 40 * floor(f / 5));
        console.log("inthe loocount" + f);
      }
      createCanvas(500, 500);
      background("beige");
      //OutputButtons();
      //x = round(random(words.length));
      //console.log(x);
      text('Wordle', 215, 100);
  
      for (let i = 0; i < 30; i++) {
        square(125 + 50 * (i % 5), 130 + 40 * floor(i / 5), 30);
      }
      for (let f = 1; f <= guessedterm.length; f++) {
        printwords = guessedterm[f - 1];
        let color = [];
        for (let n = 0; n <= printwords.length; n++) {
          color[n] = printwords[n];
        }
        for (let m = 0; m < 5; m++) {
          if (words[wordx].indexOf(color[m].toLowerCase()) == -1) {
            stroke("black");
            fill("black");
            text(printwords[m], 135 + 50 * m, 149 + 40 * (f - 1));
          } else if (
            words[wordx].indexOf(color[m].toLowerCase()) != m &&
            words[wordx].indexOf(color[m].toLowerCase(), 2) != m &&
            words[wordx].indexOf(color[m].toLowerCase(), 3) != m &&
            words[wordx].indexOf(color[m].toLowerCase(), 4) != m //&&
            //words[x].indexOf(color[m].toLowerCase(), 5) != m
          ) {
            stroke("green");
            fill("green");
            text(printwords[m], 135 + 50 * m, 149 + 40 * (f - 1));
          } else {
            stroke("red");
            fill("red");
            text(printwords[m], 135 + 50 * m, 149 + 40 * (f - 1));
          }
          console.log(printwords);
          

        }
        printwords = "";
      }

      if (count > numberofline * 5) count = count - 5;
      //}
      console.log(count);
    }
    
           if (guessword.toLowerCase() == words[wordx]) {
          //remove()
                  createCanvas(500, 500);
        background("beige");
          textSize(80)
          fill('red');
          text("you win",200,200,40) 
          
             
          gameover=true;
            
          button = createButton("play again?");
          button.position(50, 50);
          button.mousePressed(resetgame);
             guessword="Game Over";
            noLoop();
          
            
          }
      if ((numberofline ==6) && (guessword.toLowerCase() != words[wordx])) {
                  //remove()
                  createCanvas(500, 500);
        background("beige");
          textSize(20)
          fill('black');
          text("Game Over, the word was "+words[wordx],200,200,40) 
          
             
          gameover=true;
            
          button = createButton("play again?");
          button.position(50, 50);
          button.mousePressed(resetgame);
             guessword="Game Over";
            noLoop();
          
            
      }
    
    
    guesswords = [];
  }
}

function deleteLetter() {
  if (gameover) return;
  //text(words[x], 100, 100);
  OutputButtons();
  noStroke();

  console.log("Delete Button hitted");
  //for (let i = 0; i < 30; i++) {
  //square(125 + 50 * (i % 5), 250 + 40 * floor(i / 5), 30);
  //}
  fill("white");
  stroke("black");
  console.log("number of line" + str(numberofline));
  if (count > numberofline * 5) {
    square(125 + 50 * ((count - 1) % 5), 130 + 40 * floor((count - 1) / 5), 30);
    count = count - 1;
    tempString = tempString.slice(0, tempString.length - 1);
  }
}

function buttonCommand(text1) {
      if (gameover) noLoop();
        if (tempString.length >= 5) return;
      tempString += text1;
      console.log(tempString);

      //if ((count + 1) % 5 == 0) {
      //        if (words[x].indexOf(text1.toLowerCase()) == -1) {
      stroke("black");
      fill("black");
      text(text1, 135 + 50 * (count % 5), 149 + 40 * floor(count / 5));
    
      if (!words.includes(tempString)) {
      }

      count++;
      guesswords.push(text1);
     //fn command

}

function resetgame() {
  gameover = false
  count = 0;
  guesswords = [];
  guessedterm = [];
  printwords="";
  count = 0;
  wordfind = false;
  firstclick = false;
  numberofline = 0;
  createCanvas(500, 500);
  background("beige");
  
//let gameover = false;
  setup();
}
