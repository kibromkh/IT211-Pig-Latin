document.getElementById("translate-btn").addEventListener("click", function() {
    const text = document.getElementById("input-text").value;
    const translatedText = translateToPigLatin(text);
    document.getElementById("output-text").textContent = translatedText;
  });
  
  function translateToPigLatin(text) {
    if (!text || text.trim().length === 0) {
      return "Input cannot be translated.";
    }
  
    const words = text.trim().split(" ");
    const translatedWords = [];
  
    const vowels = ["a", "e", "i", "o", "u"];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
  
      if (word.length === 1) {
        translatedWords.push(word); // Single letter, no translation needed
      } else if (vowels.includes(word[0])) {
        translatedWords.push(word + "way");
      } else {
        let consonants = "";
  
        for (let j = 0; j < word.length; j++) {
          if (vowels.includes(word[j])) {
            translatedWords.push(word.slice(j) + consonants + "ay");
            break;
          } else {
            consonants += word[j];
          }
        }
      }
    }
  
    return translatedWords.join(" ");
  }
  
