function init_graphs()
{
	var data = {
		series: [40, 10, 20, 30]
	};
	new Chartist.Pie('#pie', data);
	new Chartist.Bar('#bar', {
		labels: ['', '', '', ''],
		series: [40, 10, 20, 30]
	}, {
		distributeSeries: true,
		axisX: {
			showLabel: false
		},
		axisY: {
			showLabel: false
		}

	});
	new Chartist.Bar('#bar2', {
		labels: ['', '', '', ''],
		series: [40, 10, 20, 30]
	}, {
		horizontalBars: true,
		distributeSeries: true,
		axisX: {
			showLabel: false,
			ticks: [0],
			divisor: [100]
		},
		axisY: {
			showLabel: false
		}

	});

}
$(function ()
  {
	  var spinner = $("#spinner").spinner();

	  if ($('.calendar-input').length)
	  {

		  $('.calendar-input input').datepicker({
			                                        autoSize: true
		                                        });

		  $('.calendar-input button').on('click', function ()
		  {

			  el = $(this);
			  _i = el.parents('.calendar-input').find('input');

			  _i.datepicker("show");

		  });
	  }

	  $("#slider-range").slider({
		                            range: true,
		                            min: 0,
		                            max: 500,
		                            values: [75, 300],
		                            slide: function (event, ui)
		                            {
		                            }
	                            });

	  $('.tiplink').tooltip();

	  init_graphs();

  });
