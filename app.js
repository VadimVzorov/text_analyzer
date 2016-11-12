// your code here!

/*
Input:
Text in the form


Output:
Total word count of the submitted text 

	split(" ") + delete symbols
	count array

Unique word count of the submitted text

	object or count unique in array by checking if it is there

Average word length in characters of the submitted text

	split ("") + delete symbols + delete spaces
	count average

Average sentence length in characters of the submitted text.

	split by certain symbols, split "", count average



*/

//create word array 1. delete special char 2.create array

//eliminates all special char
function createCleanWord(textString) {
	var cleanWord = textString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
	return cleanWord;
}

//creates word array from string by splittin " "
function creatWordArray(textString) {
	var wordArray = [];
	wordArray = textString.split(" ");
	return wordArray;
}

//counts number of elements in the array and return number
function countArray(array) {
	var arrayCount = array.length;
	return arrayCount;
}

//counts unique words in the array
function countUniqueWords(array) {
	var wordObject = {};
	array.forEach(function (val){
		wordObject[val] = "";
	});
	var uniqueWordCount = Object.keys(wordObject).length;
	return uniqueWordCount;
}

//count average word length: count length of words, sum, divide number of unique words
function countAvrgWordLength(array, wordCount){
	var wordObject = {};
	array.forEach(function (val){
		wordObject[val] = val.length;
	});
	var wordLengthArray = [];
	wordLengthArray = Object.values(wordObject);
	var wordLengthSum = 0;
	for (i = 0; i < wordLengthArray.length; i++){
		wordLengthSum += wordLengthArray[i];
	};
	console.log(wordLengthSum);
	var avrgWordLength = wordLengthSum/wordCount;
	return avrgWordLength;
}

//count average sentence length
function countAvrgSentLength(string){
	debugger
	var sentenceArray = string.split(/[.?!|...|]/gi);
	var sentenceCount = sentenceArray.length - 1;
	var cleanSent = string.replace(/[.?!|...|]/gi, "");
	var charCount = cleanSent.split("").length;
	var avrgSentLength = charCount/sentenceCount;
	return avrgSentLength;
}

//inputs results into the output
function inputResult(selector, value) {
	$(selector).text(value);
}

$(".container").submit(function(event){
	event.preventDefault();
	var userText = $("#user-text").val();
	var cleanWord = createCleanWord(userText);
	var wordArray = creatWordArray(cleanWord);
	var wordCount = countArray(wordArray);
	var uniqueWordCount = countUniqueWords(wordArray);
	var avrgWordLength = countAvrgWordLength(wordArray, wordCount);
	var avrgSentLength = countAvrgSentLength(userText);
	$(".text-report").removeClass("hidden");
	inputResult(".wordCount", wordCount);
	inputResult(".uniqueWordCount", uniqueWordCount);
	inputResult(".avrgWordLength", avrgWordLength);
	inputResult(".avrgSentLength", avrgSentLength);

})


