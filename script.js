!function ($) {
    $(function () {
        var j = false;
        $('#navbar-main li a, .navbar-header a').click(function () {
            var ab = $(this);
            if (ab.attr('href') == '#top') {
                $('html,body').animate({ 'scrollTop': 0 }, 100);
            }
            else {
                var b = $(ab.attr('href'));
                $('html,body').animate({ 'scrollTop': b.offset().top - 50 }, 100);
            }
            return false
        });
        $('#t').keyup(function () {
            if (event.keyCode == 13) {
                $('#search-by-title-button').click();
            } else {
                return false
            }
        });
        $('#i').keyup(function () {
            if (event.keyCode == 13) {
                $('#search-by-id-button').click();
            } else {
                return false
            }
        });
        $('#search-by-id-button').click(function () {
            var c = $("#search-by-id-form :input").filter(function (index, element) {
                return $(element).val() != "";
            }).serialize();
            var d = 'http://www.omdbapi.com/?apikey=e9e94db7&' + c;
            var e = $('#search-by-id-request');
            e.find('a').attr('href', d).html(d);
            e.show('slow');
            var f = $('#search-by-id-progress');
            f.show('slow');
            var g = $('#search-by-id-response');
            $.ajax({
                type: 'GET',
                dataType: 'text',
                url: 'http://www.omdbapi.com/?apikey=e9e94db7&' + c,
                success: function (a) {
                    g.find('pre').html(a.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
							
                },
                complete: function () {
                    f.hide();
                    g.show('slow')
                }
            })
        });
        $('#search-by-id-reset').click(function () {
            var a = $('#search-by-id-request');
            a.hide('slow');
            a.find('a').attr('href', 'javascript:;').html('');
            var b = $('#search-by-id-response');
            b.hide('slow');
            b.find('pre').html('');
        });
        $('#search-by-title-button').click(function () {
            var c = $("#search-by-title-form :input").filter(function (index, element) {
                return $(element).val() != "";
            }).serialize();
            var d = 'http://www.omdbapi.com/?apikey=e9e94db7&' + c;
            var e = $('#search-by-title-request');
            e.find('a').attr('href', d).html(d);
            e.show('slow');
            var f = $('#search-by-title-progress');
            f.show('slow');
            var g = $('#search-by-title-response');
            $.ajax({
                type: 'GET',
                dataType: 'text',
                
                url: 'http://www.omdbapi.com/?apikey=e9e94db7&' + c,
               
                success: function (a) {
                    g.find('pre').html(a.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
				},
                complete: function () {
                    f.hide();
                    g.show('slow')
                }
            })
			
        });
        $('#search-by-title-reset').click(function () {
            var a = $('#search-by-title-request');
            a.hide('slow');
            a.find('a').attr('href', 'javascript:;').html('');
            var b = $('#search-by-title-response');
            b.hide('slow');
            b.find('pre').html('');
        });
    })
} (window.jQuery);