jQuery(document).ready(function($) {
	
	
	$('ul.c_solut-tabs__caption').each(function() {
		$(this).find('li').each(function(i) {
			$(this).click(function(){
			$(this).addClass('active').siblings().removeClass('active')
				.closest('div.c_solut-tabs').find('div.c_solut-tabs__content').removeClass('active').eq(i).addClass('active');
			});
		});
	});


});