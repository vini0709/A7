/*
    File: /~vini0709/A7/multiplication.js
    91.461 GUI Programming I  Assignment# 7:  Using the jQuery Validation Plugin with Dynamic Table
    Vinishaben Patel, Umass Lowell Computer Science, Vinishaben_Patel@student.uml.edu
    Copyright (c) 2018 by Vinishaben Patel. All rights reserved.
    updated by VP on November 25, 2018 at 8:00 PM
    Description:  this web page use javascript to create dynamic multiplication table from the user's input
*/
"use strict";

$().ready(function(){
  $.validator.addMethod("greaterThan", function(value, max, min){
    return parseInt(value) >= parseInt($(min).val());},
    "Ending number must be greater or equal to Starting number"
  ); // ends addMethod


  $('#frm').validate({
    // validation rules
    rules : {

      sMultiplier : {
        required: true,
        min : -50,
        number: true
      } ,

      eMultiplier : {
        required: true,
        max : 50,
        number: true,
        greaterThan : '#sMultiplier'
      } ,

      sMultiplicand : {
        required: true,
        number: true,
        min : -100
      } ,

      eMultiplicand : {
        required: true,
        number: true,
        max : 100,
        greaterThan : '#sMultiplicand'
      }

    }, // ends rules

    // error messages
    messages: {

      sMultiplier : {
        required : function() {
          return " Starting multiplier is required." ;
        } ,
        min : function() {
          return " Please enter a number greater or equal to -50";
        },
        number : function() {
          return "Please enter valid number" ;
        }
      } ,//sMultiplier

      eMultiplier : {
        required : function() {
          return "Ending multiplier is required." ;
        } ,
        max: function() {
          return " Please enter a number less or equal to 50";
        },
        number : function() {
          return "Please enter valid number" ;
        },
        greaterThan : function() {
          return "Ending number must be greater or equal to Starting number" ;
        }
      }, //eMultiplier

      sMultiplicand : {
        required : function() {
          return "Starting multiplicand is required." ;
        },
        min : function() {
          return "Please enter a number greater or equal to -100";
        },
        number : function() {
          return "Please enter valid number" ;
        }
      } ,//sMultiplicand

      eMultiplicand : {
        required : function() {
          return "Ending multiplicand is required." ;
        },
        max: function() {
          return "Please enter a number less or equal to 100";
        },
        number : function() {
          return "Please enter valid number" ;
        },
        greaterThan : function() {
          return "Ending number must be greater or equal to Starting number" ;
        }
      } //eMultiplicand

    },// messages

    success: function(label) {
      label.addClass("valid");
    },
  }); // ends validate

  $('#btn').on("click", function () {

    if ($("#frm").valid() == false) {
      if (document.getElementById("table").hasChildNodes()){
        document.getElementById("table").innerHTML = "";
      }
      return;
    }
    else {
      if (document.getElementById("table").hasChildNodes()){
        document.getElementById("table").innerHTML = "";
      }

      var sMultiplier = $('#sMultiplier').val();
      var eMultiplier = $('#eMultiplier').val();
      var sMultiplicand = $('#sMultiplicand').val();
      var eMultiplicand = $('#eMultiplicand').val();

      var table =  document.createElement("TABLE");
      table.setAttribute("id", "myTable");
      document.getElementById("table").appendChild(table);

      var i;
      var j;
      var r;
      var s;

      for(i = sMultiplicand - 1,  r = 0;  i <= eMultiplicand;  i++, r++) {

        var row = table.insertRow(r);

        for(j = sMultiplier - 1,  s = 0; j <= eMultiplier; j++, s++) {

          var cell = row.insertCell(s);

          /* multiplier row*/
          if (r === 0 && s > 0) {
            cell.innerHTML = j;
          }

          /* multiplicand column */
          else if (s === 0 && r > 0) {
            cell.innerHTML = i;
          }

          /* multiplication of corresponding entries */
          else if (s > 0 && r > 0) {
            cell.innerHTML = i * j;
          }

        } // inner for loop ends

      }  // outer for loop ends

    } //else
    //your code here is wrong,change to '})',then ok!!
  }); // btn

}); // ready end
