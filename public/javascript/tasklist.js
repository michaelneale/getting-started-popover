$(document).ready(function() {

	$.ajax({
  		dataType: 'jsonp',  		
  		jsonpCallback: 'taskdata',
  		jsonp: false,
  		url: window.location.href.split('_data_=')[1],
  		success: function (data) {
    				var tasks = $('#task-list'); 
					var completed = data["completed"];
					$.each(data['tasks'], function(title, desc) {
						if (completed.indexOf(title) === -1) {
							tasks.append('<div data-role="collapsible" data-collapsed="true" data-theme="b"><h3>' 
												+ title + '</h3><p>' + desc + '</p></div>');						
						} else {
							tasks.append('<div data-role="collapsible" data-collapsed="true"><h3>' 
												+ title + '</h3> <h5>(You are already doing this !)</h5><p>' + desc + '</p></div>');																			
						}	
					});
					
					$('#welcome').html('What should I do now?');					
					tasks.page();

//					alert(window.location.href);

  		}
		});
		
				
});


