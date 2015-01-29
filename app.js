$(document).ready(function() {
	
	console.log($("li").length);
	
	$("form").on("submit", function(e) {
		e.preventDefault();
		$("li").remove();
		var searchTerm = $("input[type='text']").val();
		$.ajax({
			url: "http://www.omdbapi.com/?s="+searchTerm,
			dataType: "json",
			success: function(data) {
				console.log(data);
				if (data.Search === undefined) {
					$("div").hide().append("<li> No results found.</li>").fadeIn(700);
				}
				else if(data.Search.length > 0) {
					var dataArray = data.Search;
					for (var i = 0; i < dataArray.length; i++) {
						$("div").hide().append("<li>"+dataArray[i].Title + "</li>").fadeIn(700);
					}
			}
			$("li").css({
							"list-style": "none",
							"padding-top": "10px",
							"margin-left": "30px",
							"font-size": "1.2em",
							"color": "#5a799e"
								});
					$("li:last").css("border-bottom", "1px solid #35475d");
			}

		});
		$("input[type='text']").val("");
	});
});