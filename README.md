# Streams of Georgia

## Personal project of March 2016

This project began as a branch of repository kdavidmoore/ajax-api-intro; I modified it to pull data from USGS instead of Yahoo Finance.

Using AJAX (jQuery's $.getJSON method), this web page pulls data from the [USGS REST IV service](http://waterservices.usgs.gov/rest/) and displays the most recent instantaneous-value data from each monitored water body in the state of Georgia. 

### Note: you will get a CORS error if you try to use this without a web server set up (or CORS-enabling browser extension).