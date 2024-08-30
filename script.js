// Variables to store the selected choices
let indoorOutdoor = "";
let funRelaxing = "";
let creativeExperiential = "";

let foodIndoorsOutdoors = "";
let foodHotCold = "";
let foodEnglishItalian = "";
let foodCasualFancy = "";

let dramaSciFi = "";
let netflixDisney = "";
let storyCharacter = "";

// Function to set choices
function setChoice(type, value) {
    if (type === 'indoorOutdoor') {
        indoorOutdoor = value;
    } else if (type === 'funRelaxing') {
        funRelaxing = value;
    } else if (type === 'creativeExperiential') {
        creativeExperiential = value;
    } else if (type === 'foodIndoorsOutdoors') {
        foodIndoorsOutdoors = value;
    } else if (type === 'foodHotCold') {
        foodHotCold = value;
    } else if (type === 'foodEnglishItalian') {
        foodEnglishItalian = value;
    } else if (type === 'foodCasualFancy') {
        foodCasualFancy = value;
    } else if (type === 'dramaSciFi') {
        dramaSciFi = value;
    } else if (type === 'netflixDisney') {
        netflixDisney = value;
    } else if (type === 'storyCharacter') {
        storyCharacter = value;
    }
    updateResults();
}

// Function to update results based on choices
function updateResults() {
    const activityResult = document.getElementById('activityResult');
    const foodResult = document.getElementById('foodResult');
    const watchResult = document.getElementById('watchResult');

    // Determine activity result
    if (indoorOutdoor === "Indoors" && funRelaxing === "Fun" && creativeExperiential === "Creative") {
        activityResult.textContent = "Building Lego together! (seriously choose something else)";
    } else if (indoorOutdoor === "Indoors" && funRelaxing === "Fun" && creativeExperiential === "Experiential") {
        activityResult.textContent = "Escape room adventure";
    } else if (indoorOutdoor === "Indoors" && funRelaxing === "Relaxing" && creativeExperiential === "Creative") {
        activityResult.textContent = "Pottery painting";
    } else if (indoorOutdoor === "Indoors" && funRelaxing === "Relaxing" && creativeExperiential === "Experiential") {
        activityResult.textContent = "Relaxing spa experience";
    } else if (indoorOutdoor === "Outdoors" && funRelaxing === "Fun" && creativeExperiential === "Creative") {
        activityResult.textContent = "Outdoor scavenger hunt";
    } else if (indoorOutdoor === "Outdoors" && funRelaxing === "Fun" && creativeExperiential === "Experiential") {
        activityResult.textContent = "Go-karting";
    } else if (indoorOutdoor === "Outdoors" && funRelaxing === "Relaxing" && creativeExperiential === "Creative") {
        activityResult.textContent = "Painting by the river";
    } else if (indoorOutdoor === "Outdoors" && funRelaxing === "Relaxing" && creativeExperiential === "Experiential") {
        activityResult.textContent = "Walk around the lakes";
    } else {
        activityResult.textContent = "Please select all options";
    }

    // Determine food result
    if (foodIndoorsOutdoors === "Indoors" && foodHotCold === "Hot" && foodEnglishItalian === "English" && foodCasualFancy === "Casual") {
        foodResult.textContent = "Craig will cook you a nice English meal";
    } else if (foodIndoorsOutdoors === "Indoors" && foodHotCold === "Hot" && foodEnglishItalian === "English" && foodCasualFancy === "Fancy") {
        foodResult.textContent = "Hot, fancy English food? That doesn't exist!";
    } else if (foodIndoorsOutdoors === "Indoors" && foodHotCold === "Hot" && foodEnglishItalian === "Italian" && foodCasualFancy === "Casual") {
        foodResult.textContent = "Craig will cook you a nice Italian meal";
    } else if (foodIndoorsOutdoors === "Indoors" && foodHotCold === "Hot" && foodEnglishItalian === "Italian" && foodCasualFancy === "Fancy") {
        foodResult.textContent = "Dinner at a nice Italian restaurant";
    } else if (foodIndoorsOutdoors === "Indoors" && foodHotCold === "Cold" && foodEnglishItalian === "English" && foodCasualFancy === "Casual") {
        foodResult.textContent = "A Sainsbury's meal deal at home";
    } else if (foodIndoorsOutdoors === "Indoors" && foodHotCold === "Cold" && foodEnglishItalian === "English" && foodCasualFancy === "Fancy") {
        foodResult.textContent = "An M&S meal deal at home";
    } else if (foodIndoorsOutdoors === "Indoors" && foodHotCold === "Cold" && foodEnglishItalian === "Italian" && foodCasualFancy === "Casual") {
        foodResult.textContent = "Italian snack board";
    } else if (foodIndoorsOutdoors === "Indoors" && foodHotCold === "Cold" && foodEnglishItalian === "Italian" && foodCasualFancy === "Fancy") {
        foodResult.textContent = "Italian snack board, but fancy!";
    } else if (foodIndoorsOutdoors === "Outdoors" && foodHotCold === "Hot" && foodEnglishItalian === "English" && foodCasualFancy === "Casual") {
        foodResult.textContent = "Country pub garden lunch";
    } else if (foodIndoorsOutdoors === "Outdoors" && foodHotCold === "Hot" && foodEnglishItalian === "English" && foodCasualFancy === "Fancy") {
        foodResult.textContent = "Country pub lunch";
    } else if (foodIndoorsOutdoors === "Outdoors" && foodHotCold === "Hot" && foodEnglishItalian === "Italian" && foodCasualFancy === "Casual") {
        foodResult.textContent = "Subway meatballs in a cup, eaten with your hands";
    } else if (foodIndoorsOutdoors === "Outdoors" && foodHotCold === "Hot" && foodEnglishItalian === "Italian" && foodCasualFancy === "Fancy") {
        foodResult.textContent = "Alfresco Italian dining";
    } else if (foodIndoorsOutdoors === "Outdoors" && foodHotCold === "Cold" && foodEnglishItalian === "English" && foodCasualFancy === "Casual") {
        foodResult.textContent = "Picnic in the park";
    } else if (foodIndoorsOutdoors === "Outdoors" && foodHotCold === "Cold" && foodEnglishItalian === "English" && foodCasualFancy === "Fancy") {
        foodResult.textContent = "Afternoon tea in the orchard";
    } else if (foodIndoorsOutdoors === "Outdoors" && foodHotCold === "Cold" && foodEnglishItalian === "Italian" && foodCasualFancy === "Casual") {
        foodResult.textContent = "Italian picnic in the park";
    } else if (foodIndoorsOutdoors === "Outdoors" && foodHotCold === "Cold" && foodEnglishItalian === "Italian" && foodCasualFancy === "Fancy") {
        foodResult.textContent = "Gelato in the park while wearing a ball gown (are you sure?!)";
    } else {
        foodResult.textContent = "Please select all options";
    }

    // Determine watch result
    if (dramaSciFi === "Drama" && netflixDisney === "Netflix" && storyCharacter === "Story Driven") {
        watchResult.textContent = "LOST";
    } else if (dramaSciFi === "Drama" && netflixDisney === "Netflix" && storyCharacter === "Character Driven") {
        watchResult.textContent = "LOST";
    } else if (dramaSciFi === "Drama" && netflixDisney === "Disney" && storyCharacter === "Story Driven") {
        watchResult.textContent = "Lost (TV show)";
    } else if (dramaSciFi === "Drama" && netflixDisney === "Disney" && storyCharacter === "Character Driven") {
        watchResult.textContent = "LOST";
    } else if (dramaSciFi === "Sci-Fi" && netflixDisney === "Netflix" && storyCharacter === "Story Driven") {
        watchResult.textContent = "LOST";
    } else if (dramaSciFi === "Sci-Fi" && netflixDisney === "Netflix" && storyCharacter === "Character Driven") {
        watchResult.textContent = "LOST";
    } else if (dramaSciFi === "Sci-Fi" && netflixDisney === "Disney" && storyCharacter === "Story Driven") {
        watchResult.textContent = "Star Trek. Just kidding! LOST";
    } else if (dramaSciFi === "Sci-Fi" && netflixDisney === "Disney" && storyCharacter === "Character Driven") {
        watchResult.textContent = "LOST";
    } else {
        watchResult.textContent = "Please select all options";
    }
}
