


(function ($) {
    'use strict';
    jQuery(document).ready(function () {
    var loaded =false;
   $( ".snackbar" ).hide();

        $(window).load(function () {
            $('.preloader').delay(5000).fadeOut('slow');
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
function myFunction() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

   /* Smart Contract Deployment */
       /* Preloader */
    var browser_communityinvestment_sol_communityinvestContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"Employeeadd","type":"address"},{"name":"EmployerAdd","type":"address"}],"name":"EmployIndvidual","outputs":[{"name":"Name","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"add","type":"address"},{"name":"name","type":"string"},{"name":"sname","type":"string"},{"name":"cell","type":"string"},{"name":"tel","type":"string"},{"name":"mail","type":"string"},{"name":"ocupationseeking","type":"string"},{"name":"Descrip","type":"string"}],"name":"EmployeeSignUp","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"add","type":"address"}],"name":"GetUser","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"n","type":"string"},{"name":"s","type":"string"},{"name":"c","type":"string"},{"name":"t","type":"string"},{"name":"em","type":"string"},{"name":"add","type":"string"},{"name":"UserId","type":"address"}],"name":"AddUser","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"Name","type":"string"},{"name":"descrip","type":"string"},{"name":"amntseek","type":"uint256"},{"name":"roi","type":"uint256"},{"name":"pledge","type":"uint256"},{"name":"owner","type":"address"}],"name":"AddNewProposal","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"Businessadd","type":"address"},{"name":"investor","type":"address"},{"name":"amount","type":"uint256"}],"name":"InvestInBusiness","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"add","type":"address"}],"name":"GetUserInvesments","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
    var communityinvest = browser_communityinvestment_sol_communityinvestContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b5b612d738061001f6000396000f30060606040523615610081576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630cdfc800146100865780633a1f870a146101585780633b1a3ac7146103e057806376fab6c914610647578063bb87ed321461088c578063e957ae02146109e0578063edc53a1a14610abb575b600080fd5b341561009157600080fd5b6100dc600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b93565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011d5780820151818401525b602081019050610101565b50505050905090810190601f16801561014a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561016357600080fd5b610364600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610d5e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103a55780820151818401525b602081019050610389565b50505050905090810190601f1680156103d25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103eb57600080fd5b610417600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611111565b60405180806020018060200180602001806020018060200186810386528b818151815260200191508051906020019080838360005b838110156104685780820151818401525b60208101905061044c565b50505050905090810190601f1680156104955780820380516001836020036101000a031916815260200191505b5086810385528a818151815260200191508051906020019080838360005b838110156104cf5780820151818401525b6020810190506104b3565b50505050905090810190601f1680156104fc5780820380516001836020036101000a031916815260200191505b50868103845289818151815260200191508051906020019080838360005b838110156105365780820151818401525b60208101905061051a565b50505050905090810190601f1680156105635780820380516001836020036101000a031916815260200191505b50868103835288818151815260200191508051906020019080838360005b8381101561059d5780820151818401525b602081019050610581565b50505050905090810190601f1680156105ca5780820380516001836020036101000a031916815260200191505b50868103825287818151815260200191508051906020019080838360005b838110156106045780820151818401525b6020810190506105e8565b50505050905090810190601f1680156106315780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b341561065257600080fd5b610810600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611680565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108515780820151818401525b602081019050610835565b50505050905090810190601f16801561087e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561089757600080fd5b610964600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001909190803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061197e565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109a55780820151818401525b602081019050610989565b50505050905090810190601f1680156109d25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156109eb57600080fd5b610a3f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611df5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a805780820151818401525b602081019050610a64565b50505050905090810190601f168015610aad5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610ac657600080fd5b610af2600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061252d565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610b3a5780820151818401525b602081019050610b1e565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610b7d5780820151818401525b602081019050610b61565b5050505090500194505050505060405180910390f35b610b9b612897565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c715780601f10610c4657610100808354040283529160200191610c71565b820191906000526020600020905b815481529060010190602001808311610c5457829003601f168201915b5050505050905081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060080160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060080160156101000a81548160ff0219169083151502179055508090505b92915050565b610d66612897565b610d6e6128ab565b610160604051908101604052808b73ffffffffffffffffffffffffffffffffffffffff1681526020018a8152602001898152602001888152602001878152602001868152602001858152602001848152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600115158152602001600015158152509050600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060080160149054906101000a900460ff1615156110c65780600260008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610ee9929190612960565b506040820151816002019080519060200190610f06929190612960565b506060820151816003019080519060200190610f23929190612960565b506080820151816004019080519060200190610f40929190612960565b5060a0820151816005019080519060200190610f5d929190612960565b5060c0820151816006019080519060200190610f7a929190612960565b5060e0820151816007019080519060200190610f97929190612960565b506101008201518160080160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101208201518160080160146101000a81548160ff0219169083151502179055506101408201518160080160156101000a81548160ff0219169083151502179055509050506003805480600101828161103991906129e0565b916000526020600020900160005b8c909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506040805190810160405280601681526020017f416464656420557365722053756363657366756c6c79000000000000000000008152509150611104565b6040805190810160405280601281526020017f5573657220416c726561647920457869737400000000000000000000000000008152509150611104565b5b5098975050505050505050565b611119612897565b611121612897565b611129612897565b611131612897565b611139612897565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160149054906101000a900460ff16156115ed576000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003016000808b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401848054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113675780601f1061133c57610100808354040283529160200191611367565b820191906000526020600020905b81548152906001019060200180831161134a57829003601f168201915b50505050509450838054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114035780601f106113d857610100808354040283529160200191611403565b820191906000526020600020905b8154815290600101906020018083116113e657829003601f168201915b50505050509350828054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561149f5780601f106114745761010080835404028352916020019161149f565b820191906000526020600020905b81548152906001019060200180831161148257829003601f168201915b50505050509250818054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561153b5780601f106115105761010080835404028352916020019161153b565b820191906000526020600020905b81548152906001019060200180831161151e57829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115d75780601f106115ac576101008083540402835291602001916115d7565b820191906000526020600020905b8154815290600101906020018083116115ba57829003601f168201915b5050505050905094509450945094509450611677565b6040805190810160405280601381526020017f5573657220646f6573206e6f7420457869737400000000000000000000000000815250602060405190810160405280600081525060206040519081016040528060008152506020604051908101604052806000815250602060405190810160405280600081525094509450945094509450611677565b5b91939590929450565b611688612897565b611690612a0c565b611698612a20565b60006040518059106116a75750595b908082528060200260200182016040525b509150610160604051908101604052808b81526020018a81526020018981526020018881526020018781526020018681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001600115158152602001838152602001838152602001838152509050806000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082015181600001908051906020019061177e929190612960565b50602082015181600101908051906020019061179b929190612960565b5060408201518160020190805190602001906117b8929190612960565b5060608201518160030190805190602001906117d5929190612960565b5060808201518160040190805190602001906117f2929190612960565b5060a082015181600501908051906020019061180f929190612960565b5060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060e08201518160060160146101000a81548160ff021916908315150217905550610100820151816008019080519060200190611894929190612ac9565b5061012082015181600a0190805190602001906118b2929190612ac9565b5061014082015181600c0190805190602001906118d0929190612ac9565b50905050600180548060010182816118e891906129e0565b916000526020600020900160005b86909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506040805190810160405280601681526020017f416464656420557365722053756363657366756c6c790000000000000000000081525092505b5050979650505050505050565b611986612897565b61198e612a0c565b611996612b53565b60006040518059106119a55750595b908082528060200260200182016040525b509150610120604051908101604052808a8152602001898152602001888152602001600081526020018781526020018681526020016001151581526020018573ffffffffffffffffffffffffffffffffffffffff16815260200183815250905080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019080519060200190611a72929190612960565b506020820151816001019080519060200190611a8f929190612960565b5060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610100820151816008019080519060200190611b3c929190612ac9565b5090505060058054806001018281611b5491906129e0565b916000526020600020900160005b86909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050806000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600b0160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000019080519060200190611c3f929190612960565b506020820151816001019080519060200190611c5c929190612960565b5060408201518160020155606082015181600301556080820151816004015560a0820151816005015560c08201518160060160006101000a81548160ff02191690831515021790555060e08201518160060160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610100820151816008019080519060200190611d09929190612ac9565b509050506000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600c018054806001018281611d6091906129e0565b916000526020600020900160005b86909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506040805190810160405280601b81526020017f41646465642050726f706f73616c205375636365737366756c6c79000000000081525092505b50509695505050505050565b611dfd612897565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160009054906101000a900460ff168015611ee657508273ffffffffffffffffffffffffffffffffffffffff166000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614155b156124e85781600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060030160008282540192505081905550600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206008018054806001018281611f8f91906129e0565b916000526020600020900160005b85909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082018160000190805460018160011615610100020316600290046120c3929190612bca565b50600182018160010190805460018160011615610100020316600290046120eb929190612bca565b5060028201816002019080546001816001161561010002031660029004612113929190612bca565b506003820181600301908054600181600116156101000203166002900461213b929190612bca565b5060048201816004019080546001816001161561010002031660029004612163929190612bca565b506005820181600501908054600181600116156101000203166002900461218b929190612bca565b506006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506006820160149054906101000a900460ff168160060160146101000a81548160ff0219169083151502179055506008820181600801908054612236929190612c51565b50600a820181600a0190805461224d929190612c51565b50600c820181600c01908054612264929190612c51565b509050506080604051908101604052808573ffffffffffffffffffffffffffffffffffffffff168152602001838152602001600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401548152602001600115158152506000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015560608201518160030160006101000a81548160ff0219169083151502179055509050506000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600801805480600101828161243491906129e0565b916000526020600020900160005b86909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050606060405190810160405280602181526020017f5375636365737366756c6c7920496e76657374656420696e20627573696e657381526020017f73000000000000000000000000000000000000000000000000000000000000008152509050612526565b6040805190810160405280601b81526020017f43616e7420496e7665737420696e204f776e20427573696e65737300000000008152509050612526565b5b9392505050565b612535612ca3565b61253d612ca3565b6000612547612ca3565b61254f612ca3565b60008060008060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060060160149054906101000a900460ff1615612885576000808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600801805490509550856040518059106125fd5750595b908082528060200260200182016040525b5094508560405180591061261f5750595b908082528060200260200182016040525b509350600092505b85831015612884576000808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160008060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600801858154811015156126d157fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001015491506000808a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060070160008060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600801858154811015156127cf57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154905081858481518110151561284b57fe5b906020019060200201818152505080848481518110151561286857fe5b90602001906020020181815250505b8280600101935050612638565b5b8484975097505b505050505050915091565b602060405190810160405280600081525090565b61016060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016128dd612cb7565b81526020016128ea612cb7565b81526020016128f7612cb7565b8152602001612904612cb7565b8152602001612911612cb7565b815260200161291e612cb7565b815260200161292b612cb7565b8152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000151581526020016000151581525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106129a157805160ff19168380011785556129cf565b828001600101855582156129cf579182015b828111156129ce5782518255916020019190600101906129b3565b5b5090506129dc9190612ccb565b5090565b815481835581811511612a0757818360005260206000209182019101612a069190612ccb565b5b505050565b602060405190810160405280600081525090565b61016060405190810160405280612a35612cb7565b8152602001612a42612cb7565b8152602001612a4f612cb7565b8152602001612a5c612cb7565b8152602001612a69612cb7565b8152602001612a76612cb7565b8152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600015158152602001612aa9612cf0565b8152602001612ab6612cf0565b8152602001612ac3612cf0565b81525090565b828054828255906000526020600020908101928215612b42579160200282015b82811115612b415782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190612ae9565b5b509050612b4f9190612d04565b5090565b61012060405190810160405280612b68612cb7565b8152602001612b75612cb7565b815260200160008152602001600081526020016000815260200160008152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001612bc4612cf0565b81525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10612c035780548555612c40565b82800160010185558215612c4057600052602060002091601f016020900482015b82811115612c3f578254825591600101919060010190612c24565b5b509050612c4d9190612ccb565b5090565b828054828255906000526020600020908101928215612c925760005260206000209182015b82811115612c91578254825591600101919060010190612c76565b5b509050612c9f9190612d04565b5090565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b612ced91905b80821115612ce9576000816000905550600101612cd1565b5090565b90565b602060405190810160405280600081525090565b612d4491905b80821115612d4057600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101612d0a565b5090565b905600a165627a7a72305820f0e4a2613b068056241320a5563c2aa22e3cf2e0a2686f0ef9a09fadf142fc7a0029', 
     gas: '4476768'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
       $( "#snackbar" ).show();
        document.getElementById('snackbar').InnerHtml ="Contract mined! You can now use the website ";
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
function AddNewUser()
{
 var name = document.getElementById('firstname').value;
 var Sname = document.getElementById('lastname').value;
 var Telephone = document.getElementById('Telephone').value;
 var Cellphone = document.getElementById('Cellphone').value;
 var Email = document.getElementById('Address').value;
 document.getElementById('UserAddress').InnerHtml =web3.eth.accounts[0];
 var userAdd = document.getElementById('UserAddress').value;
 communityinvest.AddNewUser(name,sname,Cellphone,Telephone,Email,userAdd,{from: userAdd}, function() {
  $( ".snackbar" ).show();
  document.getElementById('snackbar').InnerHtml ="New Account Created Succesfully";
  });
$( ".snackbar" ).hide();
}



/* End Smart Contract Deployment */

   })(jQuery);








