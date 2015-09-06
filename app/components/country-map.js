import Ember from 'ember';

export default Ember.Component.extend({
	didRender: function() {
      let cntry = this.get('cntry');
      window.google.setOnLoadCallback(drawRegionsMap(cntry));

      function drawRegionsMap(country) {           
          var data = window.google.visualization.arrayToDataTable([
            ['Country'],
            [country.code]
          ]);

          var options = {
              region: country.region,
              datalessRegionColor: '#f5f5f5',
              defaultColor: '#8cbbd0'
          };

        var chart = new window.google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);		
      }
	}
});