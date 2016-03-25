$(document).ready(function(){
	
	var ivBaseURL = 'http://waterservices.usgs.gov/nwis/iv/?format=json';
	var searchBy = '&stateCd=ga';
	var searchParams = '&parameterCd=00060,00065';
	var fullURL = ivBaseURL + searchBy + searchParams;

	var sites = [];
	var varDescriptions = [];
	$.getJSON(fullURL, function(waterData) {
		console.log(waterData.value.timeSeries);

		var newHTML = '';
		$(waterData.value.timeSeries).each(function(){
			var thisSiteName = this.sourceInfo.siteName;
			var thisSiteCode = this.sourceInfo.siteCode.value;
			var thisSiteLat = this.sourceInfo.geoLocation.geogLocation.latitude;
			var thisSiteLong = this.sourceInfo.geoLocation.geogLocation.latitude;
			var thisVarDescription = this.variable.variableDescription;
			var thisValue = this.values[0].value[0].value;
			var thisSampleTime = this.values[0].value[0].dateTime;

			// saving these for later, just in case
			sites[thisSiteCode] = thisSiteName;
			varDescriptions.push(thisVarDescription);

			// write the table
			newHTML += '<tr>';
			newHTML += updateTable(thisSampleTime);
			newHTML += updateTable(thisSiteName);
			newHTML += updateTable(thisSiteLat);
			newHTML += updateTable(thisSiteLong);
			newHTML += updateTable(thisVarDescription);
			newHTML += updateTable(thisValue);
			newHTML += '</tr>'
		});

		// just kidding, actually write the table
		$('#table-body').html(newHTML);
		// initialize footables
		getFootables();
	});

	function updateTable(thingToLoopThrough) {
		var newTD = '<td>' + thingToLoopThrough + '</td>';
		return newTD;
	}

	function getFootables() {
		$(function() {
			$('.footable').footable();
		});
	}
});