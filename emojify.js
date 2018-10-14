//https://www.youtube.com/watch?v=mP0VHJYFOAU

//inspiration: http://clap.space
//helpfull helps: https://www.kirupa.com/html5/emoji.htm
//future addons: Youtube captions making emoji karaoke
//all emojis: https://unicode.org/emoji/charts/full-emoji-list.html#1f354
//Only these work so far using DEC codes https://www.w3schools.com/charsets/ref_utf_misc_symbols.asp



//<p>🍔</p>
//<p>&#x1F354</p>

//emoji can be called by shortcodes in supported programs or codepoints.....
//ex shortcode :hamburger:
//ex codepoint U+1F354


//loop that reads texfield
//loop that translates textfield and update translated field (1 textbox, making emojis as you type? or have 1 clean box)


document.addEventListener('DOMContentLoaded', startEmoji)

var tempStr = "";


//need one array containing dictionary in format [[word, symbol][word, symbol]]
//var emoDictionary = [[ , ] , ["hamburger", "🍔"] , ["watch", "⌚️"] , ["happy", "😃"]];

var emoDictionary = [
"blat",
"alien",
"anger",
"angry",
"anguished",
"anxious",
"astonished",
"baby",
"left",
"right",
"up",
"down",
"beaming",
"beating",
"black",
"blue",
"bomb",
"bone",
"boy",
"brain",
"broken",
"call",
"cat",
"child",
"clapping",
"clown",
"cold",
"collision",
"confounded",
"confused",
"cowboy",
"crossed",
"crying",
"dashing",
"disappointed",
"dizzy",
"downcast",
"drooling",
"ear",
"exploding",
"expressionless",
"eye",
"eyes",
"joy",
"kiss",
"savoring",
"tongue",
"mouth",
"eyebrow",
"silent",
"rolling",
"medical",
"sick",
"bandage",
"vomit",
"monocle",
"surprised",
"fear",
"steam",
"frustrated",
"fearful",
"flexed",
"flushed",
"folded",
"foot",
"frowning",
"ghost",
"girl",
"goblin",
"green",
"grimacing",
"grinning",
"awkward",
"growing",
"hand",
"handshake",
"hear-no-evil",
"heart",
"heavy",
"hole",
"hot",
"hugging",
"hundred",
"hushed",
"index",
"kisses",
"smooch",
"smooching",
"smooches",
"kissing",
"left-facing",
"leg",
"loudly",
"love",
"love-you",
"lying",
"man",
"man:",
"middle",
"money-mouth",
"nail",
"nauseated",
"nerd",
"neutral",
"nose",
"ogre",
"OK",
"grandpa",
"grandma",
"older",
"oncoming",
"open",
"orange",
"palms",
"partying",
"pensive",
"persevering",
"person",
"person:",
"pile",
"pleading",
"pouting",
"purple",
"stop",
"fist",
"raising",
"red",
"relieved",
"revolving",
"argument",
"right-facing",
"robot",
"rofl",
"sad",
"see-no-evil",
"selfie",
"shushing",
"sign",
"skull",
"sleeping",
"sleepy",
"slightly",
"frown",
"smiling",
"angel",
"inlove",
"sunglasses",
"devil",
"smirking",
"sneezing",
"sparkling",
"speak-no-evil",
"speech",
"squinting",
"star-struck",
"sweat",
"thinking",
"thought",
"thumbsup",
"thumbsdown",
"tired",
"tooth",
"two",
"unamused",
"upside-down",
"victory",
"vulcan",
"waving",
"weary",
"winking",
"woman",
"woozy",
"worried",
"writing",
"yellow",
"zany",
"zipper-mouth",
"zzz"];

  var emojiDictionary = [
    0, 
    0x1F47D,
    0x1F4A2,
    0x1F620,
    0x1F627,
    0x1F630,
    0x1F632,
    0x1F476,
    0x1F448,
    0x1F449,
    0x1F446,
    0x1F447,
    0x1F601,
    0x1F493,
    0x1F5A4,
    0x1F499,
    0x1F4A3,
    0x1F9B4,
    0x1F466,
    0x1F9E0,
    0x1F494,
    0x1F919,
    0x1F639,
    0x1F9D2,
    0x1F44F,
    0x1F921,
    0x1F976,
    0x1F4A5,
    0x1F616,
    0x1F615,
    0x1F920,
    0x1F91E,
    0x1F622,
    0x1F4A8,
    0x1F61E,
    0x1F635,
    0x1F613,
    0x1F924,
    0x1F442,
    0x1F92F,
    0x1F611,
    0x1F441,
    0x1F440,
    0x1F602,
    0x1F618,
    0x1F60B,
    0x1F61B,
    0x1F92D,
    0x1F928,
    0x1F636,
    0x1F644,
    0x1F637,
    0x1F912,
    0x1F915,
    0x1F92E,
    0x1F9D0,
    0x1F62E,
    0x1F631,
    0x1F624,
    0x1F92C,
    0x1F628,
    0x1F4AA,
    0x1F633,
    0x1F64F,
    0x1F9B6,
    0x1F626,
    0x1F47B,
    0x1F467,
    0x1F47A,
    0x1F49A,
    0x1F62C,
    0x1F600,
    0x1F605,
    0x1F497,
    0x1F590,
    0x1F91D,
    0x1F649,
    0x1F498,
    0x2763,
    0x1F573,
    0x1F975,
    0x1F917,
    0x1F4AF,
    0x1F62F,
    0x261D,
    0x1F48B,
    0x1F617,
    0x1F61A,
    0x1F619,
    0x1F63D,
    0x1F91B,
    0x1F9B5,
    0x1F62D,
    0x1F48C,
    0x1F91F,
    0x1F925,
    0x1F468,
    0x1F9D4,
    0x1F595,
    0x1F911,
    0x1F485,
    0x1F922,
    0x1F913,
    0x1F610,
    0x1F443,
    0x1F479,
    0x1F44C,
    0x1F474,
    0x1F475,
    0x1F9D3,
    0x1F44A,
    0x1F450,
    0x1F9E1,
    0x1F932,
    0x1F973,
    0x1F614,
    0x1F623,
    0x1F9D1,
    0x1F471,
    0x1F4A9,
    0x1F97A,
    0x1F621,
    0x1F49C,
    0x270B,
    0x270A,
    0x1F64C,
    0x2764,
    0x1F60C,
    0x1F49E,
    0x1F5EF,
    0x1F91C,
    0x1F916,
    0x1F923,
    0x1F625,
    0x1F648,
    0x1F933,
    0x1F92B,
    0x1F918,
    0x1F480,
    0x1F634,
    0x1F62A,
    0x1F642,
    0x1F641,
    0x1F60A,
    0x1F607,
    0x1F60D,
    0x1F60E,
    0x1F608,
    0x1F60F,
    0x1F927,
    0x1F496,
    0x1F64A,
    0x1F4AC,
    0x1F61D,
    0x1F929,
    0x1F4A6,
    0x1F914,
    0x1F4AD,
    0x1F44D,
    0x1F44E,
    0x1F62B,
    0x1F9B7,
    0x1F495,
    0x1F612,
    0x1F643,
    0x270C,
    0x1F596,
    0x1F44B,
    0x1F629,
    0x1F609,
    0x1F469,
    0x1F974,
    0x1F61F,
    0x270D,
    0x1F49B,
    0x1F92A,
    0x1F910,
    0x1F4A4]

console.log('copy of emoDictionary'+ emoDictionary)

function startEmoji(){
  //this function needs to do something when movement is being detected
  document.addEventListener("input", grabSource) 

}


function grabSource(){
  //needs to grab the text and pass on to translateSource
  // console.log('anything')
  var source = document.getElementById("sourceField").value;
  
    // console.log(source)
  translateSource(source)
    
}

function translateSource(source){
  //needs to translate the source and pass on to a temp string to pass it to translated source
    console.log('transslate source called')
  tempStr = source;
      console.log(tempStr +" = tempstring ")

    //need 1 array with the words from the source split up

    var translateWords = tempStr.split(' ');
    // console.log(translateWords + ' = after split');

    //added temporary array due to array splice in if statement causing loop to be broken
    var translateDWords = []
    //boolean to determine if a word has been added or not (see MindBlown ln:81)
    var wordAdded = false
    var emojiAdded = false
  
    for (var i = 0; i < translateWords.length; i++) {
      wordAdded = false

      for (var x = 0; x < emoDictionary.length; x++) {
        emojiAdded = false
//      if (translateWords[i]===emoDictionary[x].split(' ')) {
        if (wordAdded == false) {
          //MIND BLOWN !- due to emoDictionary loop to be performing 3 times (it has 3 entries) it triplicate the results, this else statement is pushing all the attempts to the array.
            console.log('NO MATCHES')
            // console.log('NO match for translateWord = '+ translateWords[i])
            // console.log('NO match for emoDict loop = ' + emoDictionary[x][0])
          translateDWords.push(translateWords[i])
            // console.log('NEW translateDWords ' + translateDWords )
          wordAdded = true;
          

          } else if (((translateWords[i].localeCompare(emoDictionary[x], 'en', {sensitivity: 'base'})) == 0) && emojiAdded == false) {
            // console.log('WE HAVE A MATCH')
            // console.log('translateWord = '+ translateWords[i] +'|| emoDict loop = ' + emoDictionary[x] + '|| emoji = '+ emojiDictionary[x])
            z = String.fromCodePoint(emojiDictionary[x])
            translateDWords.splice(i,1,z)
          
          // translateDWords.push(String.fromCodePoint(emojiDictionary[x])) - borked method, causing duplicates 
          // console.log('NEW translateDWords ' + translateDWords )
          emojiAdded = true
          
          } else {
            console.log ('no more WORDS TO ADD')
          }
          
        }


    }

    //need a function that puts the translated string back together EX: emoji emoji original text emoji emoji
        //look into array to string. Have something to add spaces back between the values.
    
    emojiBoard(translateDWords.join(' '))
    //  console.log("tempstring passed")
    //  console.log(translateDWords.join(' '))
  



}

function emojiBoard(translateWords){
  //shows the translated string 
  // console.log('emojiboard called')
  // console.log('emojiboardTranslateWords = '+ translateWords)
  

  result = translateWords
  //  console.log('result is = '+ result)

  document.getElementById("emojiBoard").innerHTML=result;


}




