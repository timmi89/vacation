$(function(){
  var count = 0;
  $('#submit').click(function(event){
    var adventure = $('select#adventure').val();
    var mobility = $('select#mobility').val();
    var perfectDay = $('select#perfectDay').val();
    var reaction = $('select#reaction').val();
    var character = $('select#character').val();

        if(adventure === "yes") {
          $(count += 2);
          } else {
          (count);
          }

        if(mobility === "yes") {
          $(count +=2);
          } else {
          (count);
          }

        if(perfectDay === "machuPicchu") {
          $(count += 1);
        } else if(perfectDay === "lasVegas") {
          $(count += 2);
        } else if (perfectDay === "badlands") {
          $(count += 3);
        } else if (perfectDay === "berlin") {
          $(count += 4);
          } else {
          $(count += 5);
        }

        if(reaction === "machuPicchu") {
          $(count += 1);
        } else if(reaction === "lasVegas") {
          $(count += 2);
        } else if (reaction === "badlands") {
          $(count += 3);
        } else if (reaction === "berlin") {
          $(count += 4);
          } else {
          $(count += 5);
        }

        if(character === "machuPicchu") {
          $(count += 1);
        } else if(character === "lasVegas") {
          $(count += 2);
        } else if (character === "badlands") {
          $(count += 3);
        } else if (character === "berlin") {
          $(count += 4);
          } else {
          $(count += 5);
        }

        // alert("Your money is: " + money);
        // $('#flipp').show();
        // console.log("hello and your count is " + count);
        if(count <= 4) {
          $("#machuPicchu").show();
        } else if (count < 8 && count > 4) {
          $("#lasVegas").show();
        } else if (count >= 8 && count < 12) {
          $('#badlands').show();
        } else if (count < 16 && count >= 12) {
          $('#berlin').show();
        } else {
          $("#spaceTime").show();
        }

        event.preventDefault();

      });
    });

    // });
