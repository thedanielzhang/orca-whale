$(document).ready(function(){

	
	$(".home-option").css("background", "darkgray");
	$("#home-page").css("height", "100vh");
	$("#home-page").css("width", "100%");
	$("#home-page").fadeIn();
	$("#home-page-content").fadeIn();
	$("#home-page-logo2").hide();
	$("#home-page-logo3").hide();
	$("#home-page-logo4").hide();



	$.fn.animateRotate = function(angle, duration, easing, complete) {
      var args = $.speed(duration, easing, complete);
      var step = args.step;
      return this.each(function(i, e) {
        args.complete = $.proxy(args.complete, e);
        args.step = function(now) {
          $.style(e, 'transform', 'rotate(' + now + 'deg)');
          if (step) return step.apply(e, arguments);
        };
 
        $({deg: 0}).animate({deg: angle}, args);
      });
    };

	function animateLogo() {
	  $("#home-page-logo1").fadeOut(4000, function () {
	    $("#home-page-logo2").fadeIn(4000, function () {
	    	$("#home-page-logo2").fadeOut(4000, function () {
	    		$("#home-page-logo3").fadeIn(4000, function () {
			    	$("#home-page-logo3").fadeOut(4000, function () {
			    		$("#home-page-logo4").fadeIn(4000, function () {
			    			$("#home-page-logo4").fadeOut(4000, function () {
			      				$("#home-page-logo1").fadeIn(4000, animateLogo);
			      			});
			    		});
			      	});
			    });
	      });
	    });
	  });
	}

	animateLogo();

	$(".home-option").on("click", function() {
		$(".home-option").css("background", "transparent");
		$(".projects-option").css("background", "transparent");
		$(".experience-option").css("background", "transparent");
		$(".resume-option").css("background", "transparent");
		$(".contact-option").css("background", "transparent");
		$(".home-option").css("background", "darkgray");

		$(".content").fadeOut();
		$(".page:visible").animate({
	        width: "25px",
	        height: "375px"
	    }, function() {
	        $(this).animateRotate(90);
	    });
	     
	    setTimeout(function() {
	        $(".page").not("#home-page").fadeOut();       
	    }, 700);

	    setTimeout(function() {
        $("#home-page").animateRotate(0, 0);
        $("#home-page").css("height", "25px");
        $("#home-page").css("width", "375px");
        $("#home-page").fadeIn();
        $("#home-page").animate({
            
        }, function() {
            $(this).animate({
                height: "100vh"
	            }, function() {
	                $(this).animate({
	                    width: "100%"
	                }, function() {
	                    $("#home-page-content").fadeIn(300);
	                });
	            });
	        });
    	}, 800);
	});

	$(".projects-option").on("click", function() {
		$(".home-option").css("background", "transparent");
		$(".projects-option").css("background", "transparent");
		$(".experience-option").css("background", "transparent");
		$(".resume-option").css("background", "transparent");
		$(".contact-option").css("background", "transparent");
		$(".projects-option").css("background", "darkgray");

		$(".content").fadeOut();
		$(".page:visible").animate({
	        width: "25px",
	        height: "375px"
	    }, function() {
	        $(this).animateRotate(90);
	    });
	     
	    setTimeout(function() {
	        $(".page").not("#projects-page").fadeOut();       
	    }, 700);

	    setTimeout(function() {
        $("#projects-page").animateRotate(0, 0);
        $("#projects-page").css("height", "25px");
        $("#projects-page").css("width", "375px");
        $("#projects-page").fadeIn();
        $("#projects-page").animate({
            
        }, function() {
            $(this).animate({
                height: "100vh"
	            }, function() {
	                $(this).animate({
	                    width: "100%"
	                }, function() {
	                    $("#projects-page-content").fadeIn(300);
	                    $(".section").hide();
	                });
	            });
	        });
    	}, 800);
	});

	$(".experience-option").on("click", function() {
		$(".home-option").css("background", "transparent");
		$(".projects-option").css("background", "transparent");
		$(".experience-option").css("background", "transparent");
		$(".resume-option").css("background", "transparent");
		$(".contact-option").css("background", "transparent");
		$(".experience-option").css("background", "darkgray");

		$(".content").fadeOut();
		$(".page:visible").animate({
	        width: "25px",
	        height: "375px"
	    }, function() {
	        $(this).animateRotate(90);
	    });
	     
	    setTimeout(function() {
	        $(".page").not("#experience-page").fadeOut();         
	    }, 700);

	    setTimeout(function() {
        $("#experience-page").animateRotate(0, 0);
        $("#experience-page").css("height", "25px");
        $("#experience-page").css("width", "375px");
        $("#experience-page").fadeIn();
        $("#experience-page").animate({
            
        }, function() {
            $(this).animate({
                height: "100vh"
	            }, function() {
	                $(this).animate({
	                    width: "100%"
	                }, function() {
	                    $("#experience-page-content").fadeIn(300);
	                });
	            });
	        });
    	}, 800);
	});

	$(".resume-option").on("click", function() {
		$(".home-option").css("background", "transparent");
		$(".projects-option").css("background", "transparent");
		$(".experience-option").css("background", "transparent");
		$(".resume-option").css("background", "transparent");
		$(".contact-option").css("background", "transparent");
		$(".resume-option").css("background", "darkgray");


		$(".content").fadeOut();
		$(".page:visible").animate({
	        width: "25px",
	        height: "375px"
	    }, function() {
	        $(this).animateRotate(90);
	    });
	     
	    setTimeout(function() {
	        $(".page").not("#resume-page").fadeOut();         
	    }, 700);

	    setTimeout(function() {
        $("#resume-page").animateRotate(0, 0);
        $("#resume-page").css("height", "25px");
        $("#resume-page").css("width", "375px");
        $("#resume-page").fadeIn();
        $("#resume-page").animate({
            
        }, function() {
            $(this).animate({
                height: "100vh"
	            }, function() {
	                $(this).animate({
	                    width: "100%"
	                }, function() {
	                    $("#resume-page-content").fadeIn(300);
	                });
	            });
	        });
    	}, 800);

	});

	$(".contact-option").on("click", function() {
		$(".home-option").css("background", "transparent");
		$(".projects-option").css("background", "transparent");
		$(".experience-option").css("background", "transparent");
		$(".resume-option").css("background", "transparent");
		$(".contact-option").css("background", "transparent");
		$(".contact-option").css("background", "darkgray");

		$(".content").fadeOut();
		$(".page:visible").animate({
	        width: "25px",
	        height: "375px"
	    }, function() {
	        $(this).animateRotate(90);
	    });
	     
	    setTimeout(function() {
	        $(".page").not("#contact-page").fadeOut();       
	    }, 700);

	    setTimeout(function() {
        $("#contact-page").animateRotate(0, 0);
        $("#contact-page").css("height", "25px");
        $("#contact-page").css("width", "375px");
        $("#contact-page").fadeIn();
        $("#contact-page").animate({
            
        }, function() {
            $(this).animate({
                height: "100vh"
	            }, function() {
	                $(this).animate({
	                    width: "100%"
	                }, function() {
	                    $("#contact-page-content").fadeIn(300);
	                });
	            });
	        });
    	}, 800);
	});

	$("#project-spotifind").on("click", function() {
		$("#project-spotifind").addClass("selected");
		$("#project-personal-website").addClass("unselected");
		$("#project-corgoapi").addClass("unselected");

	});

	$("#project-personal-website").on("click", function() {
		$("#project-spotifind").addClass("unselected");
		$("#project-personal-website").addClass("selected");
		$("#project-corgoapi").addClass("unselected");

	});

	$("#project-corgoapi").on("click", function() {
		$("#project-spotifind").addClass("unselected");
		$("#project-personal-website").addClass("unselected");
		$("#project-corgoapi").addClass("selected");

	});


	

	



});