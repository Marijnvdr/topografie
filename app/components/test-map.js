import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
      let country = this.get('cntry');
      window.google.setOnLoadCallback(drawRegionsMap(country));

      function drawRegionsMap(countryName) {           
          var data = window.google.visualization.arrayToDataTable([
            ['Country'],
            [countryName]
          ]);

          var options = {
              region: '150',
              datalessRegionColor: '#f5f5f5',
              defaultColor: '#8cbbd0'
          };

        var chart = new window.google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);		
      }
	}
});