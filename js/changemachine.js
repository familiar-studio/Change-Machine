$j = jQuery.noConflict();
   
$j(document).ready(function() {

$j('.showDetails').click(function() {
   var actionId = $j(this).attr('actionId');
   console.log('this is the actionID'+actionId);
   $j('#details'+actionId).toggle();
   $j('#sidebar'+actionId).toggle();

   if($j(this).siblings('.actionDetails').is(":visible")){
       $j(this).children('h3:last-child').removeClass('action-show').addClass('action-hide');
   }else{
       $j(this).children('h3:last-child').removeClass('action-hide').addClass('action-show');
   }


   return false;
   });
 
 $j('.overview-header').click(function() {
 $j('.overviewText').toggle();
   if ($j('.overviewText').is(":visible")) { 
    $j('.overviewTab h3:last').removeClass('milestone-show').addClass('milestone-hide');  
  } else { 
  $j('.overviewTab h3:last').removeClass('milestone-hide').addClass('milestone-show');    
  } 
 return false;
 });
 
 $j('.sidebar-header').click(function() {
 

    if ($j(this).parent().children('ul').is(":visible")) { 
       $j(this).children('h3:last-child').removeClass('sidebar-show').addClass('sidebar-hide');

    } else {
       $j(this).children('h3:last-child').removeClass('sidebar-hide').addClass('sidebar-show');

    }
    $j(this).parent().children('ul').toggle();
 return false;
 });




/*
	// Show hidden Submit button when focused in textarea
	$j('.cxnewcommenttext').focus(function() {
		console.log ("text testing");
		/* $j(this).addClass('newcommentbutton-display'); 
	});
	
	
		$j(".cxnewcomment").click(function(){
			$j(this).children("input").addClass("test");
		});
*/

	
	// Change Customer Support Comment Box color
	

/*
		$j(".csCustomerSupportUserIcon").each(function(){
			$j(this).closest('.cxfeedcomment').addClass("customerSupport");
		});

	
$j(".csCustomerSupportUserIcon").parent(".cxquestionheader").siblings(".feeditemextras").children(".feeditemcomments").css("background-color","pink");


	if ($j("span.usericon").hasClass("csCustomerSupportUserIcon") {
	        $j("body").addClass("test");
	}
	
	if ($j("body").hasClass(".ext-chrome") {
	        $j("body").addClass("hello");
	}
*/

});





























