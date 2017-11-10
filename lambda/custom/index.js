/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Copyright VoiceByDesign.tech 2017 All rights reserved worldwide.
LEGAL NOTICES GO HERE
Distributed on AS-IS basis, not responible/liable for anything.
Redistribution strictly prohibited.
REMOVING THIS MESSAGE STRICTLY PROHIBITED
version 1.4 Thurs PM
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
var toCountry;
var myNeuCountry;
var countryName;
var myCodes;
var placeName;
var cName;
var card;
var myPrintCountry = "";
var errorMsg = " ";
var newCountryName = "";
var errMsg = false;
var myDialingCode;
var fromCountry;
var intprefix;

var GOODBYE = [
    "OK, later Dude!",
    "OK, bye for now.",
    "<say-as interpret-as='interjection'>As you wish.</say-as>",
    "OK, later alligator.",
    " ",
    "OK, later Dude!",
    "OK, see you later.",
    "<say-as interpret-as='interjection'>As you wish.</say-as>",
    "OK, no worries.",
    " ",
    "OK, later Dude!",
    "OK, later alligator.",
    "OK, see you later.",
    "OK",
    "OK, later Dude!",
    "<say-as interpret-as='interjection'>As you wish.</say-as>",
    "Sure thing."
];
var MORE = [
    "Anything else?",
    "Is there anything else you need?",
    "<say-as interpret-as='interjection'>Whew!</say-as> That was easy. Need anything else?",
    "Anything more I can do?",
    "What else can I do?",
    "Need anything more?",
    "Can I fetch anything else for you now?"
];
var MOREDE = [
    "Sonst noch was?",
    "Brauchst Du noch was?",
    "Wie kann ich Dir weiter helfen?",
    "Kann ich Dir noch weiter helfen?",
    "Brauchst Du weitere Assistenz?",
    "Wie kann ich Dir sonst dienen?",
    "Sonst noch was?"
];
var ERROR = [
    "<say-as interpret-as='interjection'>Good grief!</say-as> <break time='.5s'/>Something went wrong. <break time='1s'/>Please try again.",
    "<say-as interpret-as='interjection'>Bummer!</say-as><break time='.5s'/> Something went wrong. <break time='1s'/>Please try again.",
    "<say-as interpret-as='interjection'>Uh oh!</say-as><break time='.5s'/> Something went wrong. <break time='1s'/>Please try again.",
    "<say-as interpret-as='interjection'>Darn!</say-as><break time='.5s'/> Something went wrong. <break time='1s'/>Please try again.",
    "<say-as interpret-as='interjection'>Good grief!</say-as><break time='.5s'/> Something went wrong. <break time='1s'/>Please try again.",
    "<say-as interpret-as='interjection'>Aw man!</say-as><break time='.5s'/> Something went wrong. <break time='1s'/>Please try again.",
    "<say-as interpret-as='interjection'>Good grief!</say-as><break time='.5s'/> Something went wrong. <break time='1s'/>Please try again.",
    "<say-as interpret-as='interjection'>Oh dear!</say-as><break time='.5s'/> Something went wrong. <break time='1s'/>Please try again."
];
var UNDERSCORE = [
     "<break time='1s'/><audio src='https://s3.amazonaws.com/snd-effects/magic_crystal_25.mp3' />",
     "<break time='1s'/>Hey, I bet I know what you are thinking <break time='.85s'/> <say-as interpret-as='interjection'>well done</say-as>.",
     "<break time='1s'/><say-as interpret-as='interjection'>Uh huh</say-as><break time='.75s' /><say-as interpret-as='interjection'><break time='1s'/>Swish!</say-as>.",
     "<break time='1s'/><audio src='https://s3.amazonaws.com/snd-effects/magic_crystal_27.mp3' />",
     "<break time='1s'/><audio src='https://s3.amazonaws.com/snd-effects/magic_crystal_25.mp3' />",
     "<break time='1s'/>Hey, I bet I know what you are thinking <break time='.85s'/> <say-as interpret-as='interjection'>well done</say-as>.",
     "<break time='1s'/><say-as interpret-as='interjection'>Uh huh</say-as><break time='.75s' /><say-as interpret-as='interjection'>Swoosh!</say-as>.",
     "<break time='1s'/><audio src='https://s3.amazonaws.com/snd-effects/hangup_48k.mp3' />"
];
var PROTIPS01 = [ //en-US
    "if you store phone numbers with the plus sign, followed by the country code, your cell will dial the number correctly both at home and abroad. ",
    "for international calls to a mobile number, leave off the zero. Example: this UK mobile number (0)789 345 6789 becomes +44 789 345 6789. ",
    "you can use this skill to do a reverse country code lookup. Example: Alexa, which country has the dialing code 352? ",
    "to enter the plus sign on a mobile device, press and hold the '0' until the '+' appears.",
    "typically phone numbers in Germany are displayed like this +49 172 123 4567.",
    "typically phone numbers in the UK are displayed like this +44 (0)113 123 4567.",
    "typically phone numbers in India are displayed like this +91 (0)11 1234567.",
    "when dialing an international number from a landline in the US, you first need to dial '011' followed by the country code and number. ",
    "when dialing an international number from a mobile phone, you need to enter a '+' followed by the country code and number. Example: +1 206 123-4567. ",
    "when using VOIP or internet calling, dial the number just like you would on your cell. Example: +1 206 123-4567. ",
    "international dialing patterns vary by country and line type. Phone Box assumes you\'re calling from the same region in which your Echo device is located, and provides dialing instructions for both landline and mobile numbers."
  ];
var PROTIPS02 = [ //en-GB
    "if you store phone numbers with the plus sign, followed by the country code, your mobile will dial the number correctly both at home and abroad. ",
    "for international calls to a mobile number, leave off the zero. Example: this UK mobile number (0)789 345 6789 becomes +44 789 345 6789. ",
    "you can use this skill to do a reverse country code lookup. Example: Alexa, which country has the dialing code 352? ",
    "to enter the plus sign on a mobile device, long press the '0' until the '+' appears.",
    "typically phone numbers in Germany are displayed like this +49 172 123 4567.",
    "typically phone numbers in the US are displayed like this +1 (206)123-4567.",
    "typically phone numbers in India are displayed like this +91 (0)11 1234567.",
    "when dialing an international number from a landline in the UK, you first need to dial '00' followed by the country code and number. ",
    "when dialing an international number from a mobile phone, you need to enter a '+' followed by the country code and number. Example: +1 206 123-4567. ",
    "when using VOIP or internet calling, dial the number just like on mobile. Example: +1 206 123-4567. ",
    "international dialing patterns vary by country and line type. Phone Box assumes you\'re calling from the same region in which your Echo device is located, and provides dialing instructions for both landline and mobile numbers."
  ];
var PROTIPS03 = [ //en-IN
  "if you store phone numbers with the plus sign, followed by the country code, your mobile will dial the number correctly both at home and abroad. ",
  "for international calls to a mobile number, leave off the zero. Example: this UK mobile number (0)789 345 6789 becomes +44 789 345 6789. ",
  "you can use this skill to do a reverse country code lookup. Example: Alexa, which country has the dialing code 352? ",
  "to enter the plus sign on a mobile device, long press the '0' until the '+' appears.",
  "typically phone numbers in Germany are displayed like this +49 172 123 4567.",
  "typically phone numbers in the US are displayed like this +1 (206)123-4567.",
  "typically phone numbers in the UK are displayed like this +44 (0)113 123 4567.",
  "when dialing an international number from a landline in India, you first need to dial '000' followed by the country code and number. ",
  "when dialing an international number from a mobile phone, you need to enter a '+' followed by the country code and number. Example: +1 206 123-4567. ",
  "when using VOIP or internet calling, dial the number just like on mobile. Example: +1 206 123-4567. ",
  "international dialing patterns vary by country and line type. Phone Box assumes you\'re calling from the same region in which your Echo device is located, and provides dialing instructions for both landline and mobile numbers."
  ];

"use strict";

var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var speechOutput = '';
var reprompt = '';
var errorMsg  = '';

var handlers = {

'LaunchRequest': function () {
      this.emit('startSession');
},

'startSession' : function () {
      var welcomeOutput = "<audio src='https://s3.amazonaws.com/snd-effects/calling_48k.mp3' /><break time='1s'/>Hello,"
      + "I\'m here to help with international calls."
      +" You can say things like, how do I call India, or what is the dialing code for France?"
      + ' Now, how can I help?';

      var welcomeReprompt = "For help with what you can say, just say help. If you need assistance making a call, say: 'show me how.'";

      this.emit(':ask', welcomeOutput, welcomeReprompt);
},

'getCountryCodeIntent': function () {

       	var speechOutput = "";
       	var response01 = "";
       	var reprompt01 = "";
       	var card = "";

		var toCountry = this.event.request.intent.slots.toCountry.value;
		console.log(toCountry);

		if (toCountry === 'england' || toCountry === 'England') {
		    myNeuCountry = "great britain";
		    console.log("line 153: checking myNeuCountry value: " + myNeuCountry);
		} else if (toCountry === "vatican city" || toCountry === 'Vatican City') {
		    myNeuCountry = "the vatican";
		    console.log("checking myNeuCountry value: " + myNeuCountry);
		} else if (toCountry === 'the states' || toCountry === 'the united states' || toCountry === 'The States' || toCountry === 'The United States') {
		    myNeuCountry = "usa";
		    console.log("checking myNeuCountry value: " + myNeuCountry);
		} else if (toCountry === 'sea shells') {
		    myNeuCountry = "seychelles";
		    console.log("checking myNeuCountry value: " + myNeuCountry);
		} else if (toCountry === 'hungry' || toCountry === 'Hungry') {
		    myNeuCountry = "hungary";
		    console.log("checking myNeuCountry value: " + myNeuCountry);
		} else {
		    myNeuCountry = toCountry;
		}


      httpsGetCodes(myNeuCountry,  (myCodes) => {
              console.log("sent     : " + myNeuCountry);
              console.log("received : " + myCodes.myPlaceCode + ", +" + myCodes.myDialingCode );
              var randomMore = randomPhrase(MORE);
              var reprompt01 = randomPhrase(MORE);
              var newCountryName = "Bahamas";
              var newDialingCode = "";
              var newPlaceCode= "";
              var speechOutput = "";
      	      var response01 = "";
              var rempompt01 = "Is there anything else you need?";
              var locale = this.event.request.locale;

              if (myCodes.myDialingCode === undefined) {
                  this.emit(':ask', randomPhrase(ERROR), randomPhrase(MORE));
                  console.log("Value of toCountry line 165: " + toCountry);
              } else {
                    myPrintCountry = myPrintCountry = toTitleCase(myNeuCountry);
                    console.log("myPrintCountry: " + myPrintCountry);
                    var myCardTitle = myPrintCountry + ' ' + '+' + myCodes.myDialingCode;
                    console.log("myCardTitle: " + myCardTitle);
                    var smImgUrl = 'https://s3.amazonaws.com/world-flags-small/' + myCodes.myPlaceCode +'.png';
                    var lgImgUrl = 'https://s3.amazonaws.com/world-flags-large/' + myCodes.myPlaceCode +'.png';
                    var card = {
                        'type' : 'Standard',
                        'title' : myCardTitle,
                        'desc' : ' ',
                        'image' : {
                            'smallImageUrl' : smImgUrl,
                            'largeImageUrl' : lgImgUrl
                        }
                    };

                    //save properties of most recent service call to DDB
                    this.attributes.newCountryName = myPrintCountry;
                    this.attributes.newDialingCode = myCodes.myDialingCode;
                    this.attributes.newPlaceCode = myCodes.myPlaceCode;

              switch(locale) {
                  case 'en-US':
                      intprefix = "011";
                      response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode
                      + "</say-as>. " + randomPhrase(MORE);
                      desc = "LANDLINE: 011 " + myCodes.myDialingCode + " \n CELL: +" + myCodes.myDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                      this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                      break;
                  case 'en-GB':
                      intprefix = "00";
                      response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode +
                      "</say-as>. " + randomPhrase(MORE);
                      desc = "LANDLINE: 00 " + myCodes.myDialingCode + " \n MOBILE: +" + myCodes.myDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS02);
                      this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                      break;
                  case 'de-DE':
                      intprefix = "00";
                      console.log("Location is DE or AT. Int\'l Prefix is: " + intprefix);
                      response01 = "Die Landesvorwahl für " + myPrintCountry + " ist :" + myCodes.myDialingCode + "." ;
                      desc = "FESTNETZ: 00 " + nDialingCode + " \n HANDY: +" + nDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS02);
                      this.emit(':askWithCard', response01, reprompt01, card.title, card.desc, card.image);
                      break;
                  case 'en-IN':
                      intprefix = "000";
                      console.log("Location is IN. Int\'l Prefix is: " + intprefix);
                      response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode
                      + "</say-as>. " + randomPhrase(MORE);
                      desc = "LANDLINE: 000 " + myCodes.myDialingCode + " \n MOBILE: +" + myCodes.myDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS03);
                      this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                      break;
                  default:
                      intprefix = "011";
                      console.log("Location is US. Int\'l Prefix is: " + intprefix);
                      response01 = "The dialing code for " + myPrintCountry + " is <say-as interpret-as='digits'> " + myCodes.myDialingCode
                      + "</say-as> ." + randomPhrase(MORE);
                      desc = "LANDLINE: 00 " + myCodes.myDialingCode + " \n MOBILE: +" + myCodes.myDialingCode
                      + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                      this.emit(':askWithCard', response01, reprompt01, card.title, desc, card.image);
                      break;

              }//end switch

            }//end if

        });

  },

  'getCountryNameIntent': function () {

    	var response02 = "";
      var reprompt02 = "Is there anything else you need?";
      var locale = this.event.request.locale;
	    var myDialingCode = this.event.request.intent.slots.dialingCode.value;

        httpsGetNames(myDialingCode,  (countryName) => {
              console.log("sent     : " + myDialingCode);
              console.log("received : " + countryName.myPlaceName);

              if (countryName.myPlaceName === "" || countryName.myPlaceName === undefined) {
                  console.log("SORRY, I couldn't find a country with that code");
                  this.emit(':ask', randomPhrase(ERROR), randomPhrase(MORE));
              } else {
                    var myCardTitle = countryName.myPlaceName + ' ' + '+' + myDialingCode;
                    var smImgUrl = 'https://s3.amazonaws.com/world-flags-small/' + countryName.myPlaceCode +'.png';
                    var lgImgUrl = 'https://s3.amazonaws.com/world-flags-large/' + countryName.myPlaceCode +'.png';
                    card = {
                        'type' : 'Standard',
                        'title' : myCardTitle,
                        'desc' : ' ',
                        'image' : {
                            'smallImageUrl' : smImgUrl,
                            'largeImageUrl' : lgImgUrl
                        }
                    };

            switch(locale) {
                case 'en-US':
                    intprefix = "011";
                    response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                    desc = "LANDLINE: 011 " + myDialingCode + " \n CELL: +" + myDialingCode;
                    + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                    this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                    break;
                case 'en-GB':
                    intprefix = "00";
                    response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                    desc = "LANDLINE: 00 " + myDialingCode + " \n MOBILE: +" + myDialingCode;
                    + " \n\n PRO TIP: " + randomPhrase(PROTIPS02);
                    this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                    break;
                case 'de-DE':
                    intprefix = "00";
                    response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                    desc = "LANDLINE:00 " + myDialingCode + " \n MOBILE: +" + myDialingCode;
                    + " \n\n PRO TIP: " + randomPhrase(PROTIPS02);
                    this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                    break;
                case 'en-IN':
                    intprefix = "000";
                    response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                    desc = "LANDLINE: 000 " + myDialingCode + " \n MOBILE: +" + myDialingCode;
                    + " \n\n PRO TIP: " + randomPhrase(PROTIPS03);
                    this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                    break;
                default:
                    intprefix = "011";
                    response02 = "The country with dialing code <say-as interpret-as='digits'> " + myDialingCode + "</say-as> is: " + countryName.myPlaceName +'.';
                    desc = "LANDLINE: 011 " + myDialingCode + " \n CELL: +" + myDialingCode;
                    + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                    this.emit(':askWithCard', response02, reprompt02, card.title, desc, card.image);
                    break;
               }//end switch
             }//end if
         });
     },

  'getFullPrefixIntent': function () {
        var desc= "";
        var response04 = "";
        var reprompt04= "Is there anything else you need?";
        var card;
        var intprefix = "001";
        var nCountryName = "";
      	var nDialingCode = "";
      	var nPlaceCode = "";
      	var myNeuCountry="";
        var prettyCode="";
        var nDialingCode = "";

        var locale = this.event.request.locale;
        var intentObj = this.event.request.intent;
        var toCountry = this.event.request.intent.slots.toCountry.value;
        //console.log("LINE 352: toCountry: "+toCountry);
        var fromCountry=this.event.request.intent.slots.fromCountry.value;
        //console.log("LINE 354:fromCountry: " + fromCountry);

    if (intentObj.slots.fromCountry.value === undefined) {
        switch(locale){
            case "en-US":
                fromCountry = "The US";
                intentObj.slots.fromCountry.value = "North America";
                break;
            case "en-GB":
                fromCountry = "The UK";
                intentObj.slots.fromCountry.value = "Great Britain";
                break;
            case "en-IN":
                fromCountry = "India";
                intentObj.slots.fromCountry.value = "India";
                break;
            case "de-DE":
                fromCountry = "the EU";
                intentObj.slots.fromCountry.value = "The EU";
                break;
            default:
                fromCountry = "North America";
                break;
        }//end switch
      }//end if

    if (intentObj.slots.fromCountry.confirmationStatus !== 'CONFIRMED') {
    //if (intentObj.slots.fromCountry.value === undefined) {
        if (intentObj.slots.fromCountry.confirmationStatus !== 'DENIED') {
            // Slot value is not confirmed
            var slotToConfirm = 'fromCountry';
            var speechOutput = 'You\'re calling from ' + intentObj.slots.fromCountry.value + ', right?';
            console.log("FROM COUNTRY = " + intentObj.slots.fromCountry.value);
            var repromptSpeech = 'Please tell me where you\'re calling from';
            this.emit(':confirmSlot', slotToConfirm, speechOutput, repromptSpeech);
        } else {
            // Users denies the confirmation of slot value
            var slotToElicit = 'fromCountry';
            var speechOutput = 'Okay, Where are you calling from?';
            this.emit(':elicitSlot', slotToElicit, speechOutput, speechOutput);
        }

        } else {
            //var speechOutput = 'Great, you want to call: ' + intentObj.slots.toCountry.value + ', from' + intentObj.slots.fromCountry.value + '. Let\'s do it!';
            //this.emit(':tell', speechOutput);

        var callingFrom = intentObj.slots.fromCountry.value;

        if(callingFrom === 'The US' || callingFrom === 'Canada' || callingFrom === 'The United States' || callingFrom === 'North America' || callingFrom === 'The USA' || callingFrom ==='US' || callingFrom === 'USA') {
          intprefix = '011';
        } else if (callingFrom === 'India'){
          intprefix = '00';
        } else if (callingFrom === 'Japan' || callingFrom === 'japan'){
          intprefix = '010';
        } else if (callingFrom === 'Australia') {
          intprefix = '0011';
        } else {
          intprefix = '00';
        }

    		if (toCountry === 'england' || toCountry === 'England') {
    		    myNeuCountry = "great britain";
    		    console.log("line 153: checking myNeuCountry value: " + myNeuCountry);
    		} else if (toCountry === "vatican city" || toCountry === 'Vatican City') {
    		    myNeuCountry = "the vatican";
    		    console.log("checking myNeuCountry value: " + myNeuCountry);
    		} else if (toCountry === 'the states' || toCountry === 'the united states' || toCountry === 'The States' || toCountry === 'The United States' || toCountry === "the US") {
    		    myNeuCountry = "usa";
    		    console.log("checking myNeuCountry value: " + myNeuCountry);
    		} else if (toCountry === 'sea shells') {
    		    myNeuCountry = "seychelles";
    		    console.log("checking myNeuCountry value: " + myNeuCountry);
    		} else if (toCountry === 'hungry' || toCountry === 'Hungry') {
    		    myNeuCountry = "hungary";
    		    console.log("checking myNeuCountry value: " + myNeuCountry);
    		} else {
    		    myNeuCountry = toCountry;
    		}

        httpsGetCodes(myNeuCountry,  (myCodes) => {
              console.log("sent     : " + myNeuCountry);
              console.log("received : " + myCodes.myPlaceCode + ", +" + myCodes.myDialingCode );

              var randomMore = randomPhrase(MORE);
              var reprompt01 = randomPhrase(MORE);
              var speechOutput = "";
      	      var response04 = "";
              var rempompt04 = "Is there anything else you need?";


              if (myCodes.myDialingCode === undefined) {
                  this.emit(':ask', randomPhrase(ERROR), randomPhrase(MORE));
              } else {
                    myPrintCountry = myPrintCountry = toTitleCase(myNeuCountry);
                    console.log("myPrintCountry: " + myPrintCountry);
                    var myCardTitle = myPrintCountry + ' ' + '+' + myCodes.myDialingCode;
                    console.log("myCardTitle: " + myCardTitle);
                    var smImgUrl = 'https://s3.amazonaws.com/world-flags-small/' + myCodes.myPlaceCode +'.png';
                    var lgImgUrl = 'https://s3.amazonaws.com/world-flags-large/' + myCodes.myPlaceCode +'.png';

                    var card = {
                        'type' : 'Standard',
                        'title' : myCardTitle,
                        'desc' : ' ',
                        'image' : {
                            'smallImageUrl' : smImgUrl,
                            'largeImageUrl' : lgImgUrl
                        }
                    };
                    //save properties of most recent service call to DDB
                    this.attributes.newCountryName = myPrintCountry;
                    this.attributes.newDialingCode = myCodes.myDialingCode;
                    this.attributes.newPlaceCode = myCodes.myPlaceCode;

                    var nCountryName = myPrintCountry;
                    console.log("line 405 | nCountryName: " + nCountryName);
                    var nDialingCode = myCodes.myDialingCode;
                    console.log("line 407 | nDialingCode: " + nDialingCode);
                    var nPlaceCode = myCodes.myPlaceCode;
                    console.log("line 409 | nPlaceCode: " + nPlaceCode);
                }//end if

        switch(locale) {
            case 'en-US':
                prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                response04 = "Okay, when calling from " + callingFrom + " you need to dial "
                + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                + " Again, that\'s <prosody rate='slow'>" + intprefix + prettyCode + "</prosody>. <break time='0.5s' />"
                + "Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE);
                desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n CELL: +" + nDialingCode
                + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                break;
            case 'en-GB':
                prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                response04 = "Okay, when calling from " + callingFrom + " you need to dial "
                + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                + " Again, that\'s <prosody rate='slow'>" + intprefix + prettyCode + "</prosody>. <break time='0.5s' />"
                + "Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE);
                desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                break;
            case 'en-IN':
                prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                response04 = "Okay, when calling from " + callingFrom + " you need to dial "
                + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                + " Again, that\'s <prosody rate='slow'>" + intprefix + prettyCode + "</prosody>. <break time='0.5s' />"
                + "Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE);
                desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                break;
            case 'de-DE':
                prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                response04 = "Okay, when calling from " + callingFrom + " you need to dial "
                + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                + " Again, that\'s <prosody rate='slow'>" + intprefix + prettyCode + "</prosody>. <break time='0.5s' />"
                + "Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE);
                desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                break;
            case 'jp-JP':
                prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                response04 = "Okay, when calling from " + callingFrom + " you need to dial "
                + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                + " Again, that\'s <prosody rate='slow'>" + intprefix + prettyCode + "</prosody>. <break time='0.5s' />"
                + "Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE);
                desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                break;
            default:
                prettyCode = "<say-as interpret-as='digits'>" + nDialingCode + "</say-as>";
                response04 = "Okay, when calling from " + callingFrom + " you need to dial "
                + "<say-as interpret-as='digits'>" + intprefix + "</say-as>. "
                + "the international prefix, followed by the country code " + prettyCode + " for " + nCountryName + ". "
                + " Again, that\'s <prosody rate='slow'>" + intprefix + prettyCode + "</prosody>. <break time='0.5s' />"
                + "Check your device for these details and more. <break time='1s'/>" + randomPhrase(MORE);
                desc = "LANDLINE:  " + intprefix + " " + nDialingCode + " \n MOBILE: +" + nDialingCode
                + " \n\n PRO TIP: " + randomPhrase(PROTIPS01);
                this.emit(':askWithCard', response04, reprompt04, card.title, desc, card.image);
                break;

              }//end switch

      });//end main https

   } //end if else

},//end getFullPrefixIntent

	'AMAZON.HelpIntent': function () {
	      var randomMore = randomPhrase(MORE);
        var response911 = 'You can say things like, what is the dialing code for Great Britain, or how do I call India, or you can say stop. Now, how can I help?';
        var reprompt911 = randomPhrase(MORE);
        this.emit(':ask', response911, reprompt911);
    },
    'AMAZON.CancelIntent': function () {
        var randomGoodbye = randomPhrase(GOODBYE);
        this.emit(':tell', randomGoodbye);
    },
    'AMAZON.StopIntent': function () {
        var randomGoodbye = randomPhrase(GOODBYE) + "<audio src = 'https://s3.amazonaws.com/snd-effects/hangup_48k.mp3' />";
        this.emit(':tell', randomGoodbye);
    },
    'SessionEndedRequest': function () {
        speechOutput = '';
        //this.emit(':saveState', true);//uncomment to save attributes to db on session end
        this.emit(':tell', speechOutput);
    },
	'Unhandled': function () {
        speechOutput = "Phone Box didn\'t quite understand what you wanted.  Do you want to try something else?";
        this.emit(':ask', randomPhrase(ERROR), randomPhrase(MORE));
    }
};

exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	alexa.dynamoDBTableName = 'phoneBOX'; //uncomment this line to save attributes to DB
    alexa.execute();
};

//https://restcountries.eu/rest/v2/name/toCountry?fields=callingCodes;alpha2Code
//User supplies a country name and gets dialing code
//Example: "Alexa, ask phone box what is the dialing code for belgium?"
//Example: "Alexa, ask phone box how do I call Mexico?"

var https = require('https');

function httpsGetCodes(myData, callback) {

    console.log("myData = " + myData);

   var options = {
       host: 'restcountries.eu',
       port: 443,
       path: '/rest/v2/name/' + encodeURIComponent(myData) + "?fields=callingCodes;alpha2Code;",
       method: 'GET'
   };

   var req = https.request(options, res => {
       res.setEncoding('utf8');
       var returnData = "";

       res.on('data', chunk => {
           returnData = returnData + chunk;
       });

       res.on('error', () => {
        console.log("-------OUCH!-------");
        var myErrorObj = {
            errorType : "InternalServerError",
            httpStatus : 404,
            requestId : context.awsRequestId,
            message : "An unknown error has occurred. Please try again."
         }
        callback(JSON.stringify(myErrorObj));
       });

       res.on('end', () => {

           console.log("RAW RESPONSE" +'\n'+ JSON.stringify(returnData));

          var myData = JSON.stringify(returnData);
          console.log("HERE IS MY DATA STRING: " + myData);

          var myPlaceCode = myData.slice(20,22).toLowerCase();
          console.log("PLACECODE: " + myPlaceCode);

          var myDialingCode = myData.split(":").pop();
          //returns [\\\"33\\\"]}]\" //(example for France)

          myDialingCode = myData.substring(myData.lastIndexOf("[")+3,myData.lastIndexOf("}")-3);
          console.log("DIALINGCODE: " + myDialingCode);

          var myCodes = {
              'myPlaceCode' : myPlaceCode,
              'myDialingCode' : myDialingCode,
              'myPlaceName' : myData
          }

          console.log("myPlaceName: + myCodes.myPlaceName");

          if (myDialingCode === '\\\"status\\\":404,\\\"message\\\":\\\"Not Foun') {
              console.log("LOOKOUT - WE HAVE A BUG!!");
              callback(errMsg);
          } else {
              console.log("HERE IS MY DIALING CODE: " + myDialingCode);
              callback(myCodes);
          }

       });

   });
   req.end();

}
 //https://restcountries.eu/rest/v2/callingcode/52/?fields=name
 //user supplies dialing code and gets country name
 //Example: "Alexa, ask phone box which country has the dialing code 49?"

function httpsGetNames(myDialingCode, callback) {

   var cName;
   var options = {
       host: 'restcountries.eu',
       port: 443,
       path: '/rest/v2/callingcode/'+ encodeURIComponent(myDialingCode) +'?fields=name;alpha2Code;',
       method: 'GET',
       dCode: 'myDialingCode'
   };

   var req = https.request(options, res => {
       res.setEncoding('utf8');
       var returnData = "";

       res.on('data', chunk => {
           returnData = returnData + chunk;
       });

       res.on('end', () => {

           console.log("HERE IS THE RAW RESPONSE" +'\n'+ JSON.stringify(returnData));

           var myData = JSON.stringify(returnData);
           console.log("HERE IS MY DATA STRING: " + myData);

           switch (myDialingCode) { //reformat long strings coming back from service
             case "44":
                var myPlaceName = "Great Britain";
                  console.log("HERE IS MY PLACE NAME: " + myPlaceName);
                break;
            case "1":
                var myPlaceName = "North America";
                console.log("HERE IS MY PLACE NAME: " + myPlaceName);
                break;
            default:
              var myPlaceName = myData.substring(14, myData.lastIndexOf(",")-2);
              console.log("HERE IS MY PLACE NAME: " + myPlaceName);
           }

           //2 letter ISO code
           var myPlaceCode = myData.split(":").pop().toLowerCase().slice(2,4);
           console.log("PLACECODE: " + myPlaceCode);

           var countryName = {
              'myPlaceCode' : myPlaceCode,
              'myPlaceName' : myPlaceName,
              'dCode' : myData
           }

           callback(countryName);

       });

   });
   req.end();
}

function resolveCanonical(slot){
    try{
		var canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
	}catch(err){
	    console.log("from line 355: " + err.message);
	    var canonical = slot.value;
	    console.log("canoncial var at line 362: " + canonical);
	};
	return canonical;
};

function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
	  var updatedIntent= null;
	  // updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer

	  //this code is necessary if using ASK SDK versions prior to 1.0.9
	  if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady', updatedIntent);

    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer

	  //this code necessary is using ASK SDK versions prior to 1.0.9
		if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady');

    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}

//make sure country name has initial caps ==> Great Britain
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}

function isSlotValid(request, slotName){
        var slot = request.intent.slots[slotName];
        console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            console.log("Houston, we have a problem!");
            return false;
        }
}

//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK

function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}

function buildSpeechletResponse(options) {
    var alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };

    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }

    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }

    if (options.directives) {
        alexaResponse.directives = options.directives;
    }

    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Standard',
            title: options.cardTitle,
            content: options.cardContent
        };

        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};

            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;

            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }

            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }

    var returnResult = {
        version: '1.0',
        response: alexaResponse
    };

    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}

function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };

    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }

    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}
