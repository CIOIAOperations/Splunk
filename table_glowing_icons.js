require([
     'underscore',
     'jquery',
     'splunkjs/mvc',
     'splunkjs/mvc/tableview',
     'splunkjs/mvc/simplexml/ready!'
 ], function(_, $, mvc, TableView) {
 
     var RangeMapIconRenderer = TableView.BaseCellRenderer.extend({
         canRender: function(cell) {
             // Only use the cell renderer for the CLevel field
             return cell.field === 'CLevel';
         },
         render: function($td, cell) {
             // Create the icon element and add it to the table cell
             $td.addClass('icon').html(_.template('<i class="icon-alert-circle <%- CLevel %>" title="<%- CLevel %>"></i>', {
                 CLevel: cell.value,
             }));
         }
     });
     mvc.Components.get('table1').getVisualization(function(tableView){
         // Register custom cell renderer, the table will re-render automatically
         tableView.addCellRenderer(new RangeMapIconRenderer());
     });
 });