//This app is predicated on the ajax call. When building an app like this, the design should be focused around exctly what is returned when the ajax call is made.

$(function() {
  
  $('#search').click(function() {
    
    var searchFor = $('#searchFor').val(); //This is what the user enters to search for
    
    $.ajax({
      //ajax request details
      type: 'GET',
      dataType: 'jsonp',
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchFor+'&callback=?',
      async: false,
      success: function(data){
//        console.log(data); //success
     $('#searchResults').html('');//this clears away search results when re-running a search for something different
        
        for (var i = 0; i <= 9; i++){ //loop through all search results with for loop
          //we are adding the below code to the end of "Search Results" on our page with .append
          $('#searchResults').append('<a href='+data[3][i] + ' target="_blank">' + data[1][i] + '</h1></a><h3>' + data[2][i] + '</h3><br>');
          //the first data entry is the url of the wiki page. The href allows user to click the title and view that wiki page in new window
          //the second data entry is the title itself, which turns into a link with href
          //the third data entry is the content displayed
        }
      },
      error:function(err){ //this function will run is something goes wrong with the ajax call
        alert("Error!") //if something goes wrong, an error will pop up that says "error"
      },
    })
  });
  
  //below code is for the option to press "enter" on the keyboard instead of clicking "go"
  $("#searchFor").keyup(function(e){
    if (e.keyCode == 13){ //13 is the enter key
      //if the enter key (code 13) is pressed, run the click function
      $('#search').click();
    }
  })
});