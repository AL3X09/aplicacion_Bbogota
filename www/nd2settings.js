$(function() {

  // Initialize nativeDroid2

  $.nd2({
    stats : {
      analyticsUA: null // Your UA-Code for Example: 'UA-123456-78'
    },
    advertising : {
      active : true, // true | false
      path : '/examples/',
      extension : '.html' // Define the Ad-Template content Extension (Most case: ".html" or ".php")
    }
  });


});
