 $(document).ready(function(){
        var $main = $('main');
        $main.html('');

        var location = streams.home;

        var displayTweet = function() {
        	$('.tweet').remove();
        	var index = location.length - 1;
	        while(index >= 0 && index >= location.length-15){
	          
	          // Generate timestamp
	          var tweet = location[index];
	          //}
	          

	          var $tweet = $('<div class="tweet"><h4></h4></div>');
	          
	          $tweet.html('<strong>@<a href="#" class="tweetlinks">' + tweet.user + '</a></strong>: ' + tweet.message + "<em> [" + tweet.created_at.toTimeString() + "]</em>");
	          $tweet.appendTo($main);
	          index -= 1;
	        }
        };

        var mainTweetsFlag = true;
        var userclicked;

        $("h3").on("click",function(){
        	location = streams.home;
        	$("h3").hide();
        })

    	setInterval(function(){
    			displayTweet();
        		$(".tweetlinks").on("click",function(){
	      			userclicked = $(this).text();
	      			location = streams["users"][userclicked];
	      			$("h3").show();
	      	
	      		});
        },1000);
 
      });

