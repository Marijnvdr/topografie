import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
      let cntry = this.get('cntry');
      window.google.setOnLoadCallback(drawRegionsMap(cntry));

      function drawRegionsMap(country) {           
          var data = window.google.visualization.arrayToDataTable([
            ['Country'],
            [country.Name]
          ]);

          var options = {
              region: country.Region,
              datalessRegionColor: '#f5f5f5',
              defaultColor: '#8cbbd0'
          };

        var chart = new window.google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);		
      }
	}
});