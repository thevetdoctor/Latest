var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
var x = languages[""];
for (var x in languages) {
 if((typeof x) == "string") {
     console.log(languages["x"]);
 } else {
     console.log("Not a string !");}
};