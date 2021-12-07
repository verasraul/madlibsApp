
function madLibsApp() {
    let storyChoice = prompt("Would you like Story One or Story Two?");
    switch (storyChoice) {
      case "Story One":
        let adjective0 = prompt("type an adjective");
        let genPlace = prompt("type a general place");
        let vName = prompt("type a vehicle name (plural)");
        let game = prompt("type the name of a game");
        let plNoun = prompt("type a plural noun");
        let ingVerb = prompt("type an 'ing' verb");
        let ingVerb2 = prompt("type another 'ing' verb");
        let foodName = prompt("type a food name (plural)");
        let sport = prompt("type the name of a sport");
        let ingVerb3 = prompt("type another 'ing' verb");
        let emotion = prompt("type an emotion");
        let num = prompt("type a number");
  
        let storyOne =
        "A vacation is when you take a trip to some " + adjective + " place near an amazing " + genPlace +
        ". A good vacation place is one where you can ride " + vName + " or play " + game + " or go hunting for " + plNoun +
        ". I like to spend my time " + ingVerb + " or " + ingVerb2 + ". When parents go on a vacation, they spend their time eating three " + foodName +
        " a day. Usually, fathers play " + sport + ", and mothers spend their time " + ingVerb3 + ". Adults need vacations more than kids because adults are always very " + emotion +
        " because they have to work " + num + " hours every day all year just to afford their vacations!"
        
        return document.getElementById("story1").innerHTML = storyOne;
        //return console.log(storyOne);

      case "Story Two":
        let adjective_1 = prompt("type an adjective");
        let famousPlace = prompt("type a famous place");
        let plNoun_2 = prompt("type a plural noun");
        let adjective_2 = prompt("type another adjective");
        let food = prompt("type a food (plural)");
        let emotion_2 = prompt("type an emotion");
        let ingVerb_2 = prompt("type an 'ing' verb");
        let commonPlace = prompt("type a common place");
        let adjective_3 = prompt("type another adjective");
        let noun = prompt("type a noun");
        let adjective_4 = prompt("type another adjective");
        let noun2 = prompt("type another noun");
        let famMember = prompt("type a family member");
        let adjective_5 = prompt("type another adjective");
  
        let storyTwo =
        "Today we took a " + adjective + " fieldtrip to " + famousPlace + ". They're famous for making " + plNoun + " and for cooking " + adjective2 + " " + food +
        ". Eating all that food made me feel " + emotion + ". Next we enjoyed the local tradition of " + ingVerb + " in the middle of the " + commonPlace +
        "! Finally, we went shopping for souvenirs. I bought a " + adjective3 + " " + noun + " for myself, and a " + adjective4 + " " + noun2 + " for my favorite " + famMember +
        ". I'll definitely never forget this " + adjective5 + " trip!"
        
        return document.getElementById("story2").innerHTML = storyTwo;
        //return console.log(storyTwo);
    };
  };
  
  madLibsApp();