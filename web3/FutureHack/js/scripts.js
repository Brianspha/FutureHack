


(function ($) {
    'use strict';
    jQuery(document).ready(function () {
    var loaded =false;
       /*Preload Idea */
    var line1= "<div class='columns'>";
    var line2 ="<ul class='price'>";
    var name="<li class='header'>";
    var descrip= "</li><li class='grey'>";
    var Seek="</li><li>"
    var Raised="</li><li id='raised'>";
    var line3 = " </li>";
    var line4 = "<li class='grey'><button href='#' onclick ='InvestInBusiness('document.getElementById(raised)')'class='button'>Invest</button></li></ul></div>";
    document.getElementById('props').innerHTML +=line1 +line2+name +"Siyaphuza Energy Drink"+descrip+"Struggling to stay awake or run out of energy while studying?\n Siyaphuza Energy drink is the answer an energy drink that will help you get through those late nights. "+Seek+"20000"+Raised +"1234" +line3+line4;
/*End Preloaded Idea */
        $(window).load(function () {
            $('.preloader').delay(3000).fadeOut('slow');
        });
    
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
    


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
     
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
    
    
    
    
       /* Mobile Navigation Hide or Collapse on Click */
    
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
     });
     
    
    
    
        /* Scroll To Top */
    
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
     });
  
  
      $('.scroll-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
      });
    

        
        /* Tooltip */
         
         $(function () {
           $('[data-toggle="tooltip"]').tooltip()
           })
       
     
        
        /* Ajaxchimp for Subscribe Form */
    
         $('#mc-form').ajaxChimp();
       
       
  
    
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


       
        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
      
            gallery: { enabled: true },
      zoom: { enabled: true,
              duration: 500
          
          },
      
      
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }
      
      
          });
     
     
        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "fadeUp"
        });
    
    
    
    
        /* Statistics Counter */
    
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });
              
       
            });

   })(jQuery);

function myFunction() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

   /* Smart Contract Deployment */
    var web3 =  new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    const fs = require('fs');
    const solc = require('solc')
    const input = fs.readFileSync('CommunityInvest.sol');
    const output = solc.compile(input.toString(), 1);
    const bytecode = output.contracts['CommunityInvest'].bytecode;
    const abi = JSON.parse(output.contracts['CommunityInvest'].interface);
    const contract = web3.eth.contract(abi);
    web3.eth.defaultAccount=web3.eth.accounts[0]
   const contractInstance = contract.new({
    data: '0x' + bytecode,
    from: web3.eth.defaultAccount,
    gas: 90000*50
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    // Log the tx, you can explore status with eth.getTransaction()
    console.log(res.transactionHash);

    // If we have an address property, the contract was deployed
    if (res.address) {
        console.log('Contract address: ' + res.address);
    }
});
var instance = contract.at(contractInstance.address)
function AddNewUser()
{
 var name = document.getElementById('firstname').value;
 var Sname = document.getElementById('lastname').value;
 var Telephone = document.getElementById('Telephone').value;
 var Cellphone = document.getElementById('Cellphone').value;
 var Email = document.getElementById('Email').value;
 var HomeAddress = document.getElementById('Address');
 var userAdd =  web3.eth.accounts[0];
 instance.AddUser(name,Sname,Cellphone,Telephone,Email,HomeAddress,userAdd,{from: web3.eth.accounts[0]}, function() {
  
  });
document.getElementById('snackbar').InnerHtml ="New Account Created Succesfully";
}

function AddProp(){
  var name = document.getElementById('Iname').value;
  var Descrip = document.getElementById('Description').value;
  var Seek = document.getElementById('Amount').value;
  var Email = document.getElementById('EmailAdd').value;
  var Roi = document.getElementById('ROI').value;
 var userAdd =  web3.eth.accounts[0];
 instance.AddNewProposal(name,Descrip,Seek,Email,Roi,userAdd,{from: web3.eth.accounts[0]}, function() {
  document.getElementById('snackbar').InnerHtml ="New Account Created Succesfully";
  });

 UpdateUserProposal(Name,Descrip,Seeks,Roi);
  UpdateMarketProposals(Name,Descrip,Seeks,Roi);
}
function UpdateUserProposal(name,Descrip,Seek,Roi){
var line1= "<div class='columns'>";
var line2 ="<ul class='price'>";
var name="<li class='header'>";
var descrip= "</li><li class='grey'>";
var Seek="</li><li>"
var Raised="</li><li>";
var line3 = " </li></ul></div>";
document.getElementById('MyProps').innerHTML +=line1 +line2+name +Name+descrip+Descrip+Seek+Seeks+Raised +"0" +line3;
}

function UpdateMarketProposals(name,Descrip,Seek,Roi){
var line1= "<div class='columns'>";
var line2 ="<ul class='price'>";
var name="<li class='header'>";
var descrip= "</li><li class='grey'>";
var Seek="</li><li>"
var Raised="</li><li id='raised'>";
var line3 = " </li>";
var line4 = "<li class='grey'><button href='#' onclick ='InvestInBusiness('document.getElementById(raised)')'class='button'>Invest</button></li></ul></div>";
document.getElementById('props').innerHTML +=line1 +line2+name +Name+descrip+Descrip+Seek+Seeks+Raised +"0" +line3+line4;
}
function InvestInBusiness(item)
{
   return;
}
/* End Smart Contract Deployment */






