function init_graphs()
{

}
$(function ()
  {

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
	  init_graphs();

  });
