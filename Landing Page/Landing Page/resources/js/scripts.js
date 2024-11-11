$(document).ready(
    function(){

        //stick nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                $('nav').removeClass('sticky');
                }
            },{
                offset: '500px'
            }
        )

        $('.mobile-nav-icon').click(
            function(){
                if($('.mobile-nav-icon').hasClass('fa-bars')){
                    $('.mobile-nav-icon').addClass('fa-xmark');
                    $('.mobile-nav-icon').removeClass('fa-bars');
                    $('.main-nav').show(300);
                }
                else{
                    $('.mobile-nav-icon').removeClass('fa-xmark');
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.main-nav').hide(500);
                }
            }
        )
    }
)