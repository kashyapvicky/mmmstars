var userAddress = '';
var contractBalanceRate = 0;
var userPercentRate = 0;
var userAvailable = 0;
var userTotalDeposits = 0;
var userTotalWithdrawn = 0;
var userAmountOfDeposits = 0;
var userLastDepositTime = 0;
 var is_matured = 0;



var abi =[{"constant":true,"inputs":[],"name":"contractInfo","outputs":[{"name":"_invested","type":"uint256"},{"name":"_withdrawn","type":"uint256"},{"name":"_match_bonus","type":"uint256"},{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"userInfo","outputs":[{"name":"for_withdraw","type":"uint256"},{"name":"withdrawable_bonus","type":"uint256"},{"name":"total_invested","type":"uint256"},{"name":"total_withdrawn","type":"uint256"},{"name":"total_match_bonus","type":"uint256"},{"name":"structure","type":"uint256[20]"},{"name":"deposit_detail","type":"uint256[4]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"comm_wallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"seperatePayoutOf","outputs":[{"name":"withdrawable","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"investmentsInfo","outputs":[{"name":"ids","type":"uint8[]"},{"name":"endTimes","type":"uint256[]"},{"name":"amounts","type":"uint256[]"},{"name":"totalWithdraws","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"payoutOf","outputs":[{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tarifs","outputs":[{"name":"life_days","type":"uint256"},{"name":"percent","type":"uint256"},{"name":"min_inv","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tarif","type":"uint8"},{"name":"_upline","type":"address"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ref_bonuses","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"releaseTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"match_bonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"withdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"invested","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"players","outputs":[{"name":"upline","type":"address"},{"name":"dividends","type":"uint256"},{"name":"match_bonus","type":"uint256"},{"name":"last_payout","type":"uint256"},{"name":"total_invested","type":"uint256"},{"name":"total_withdrawn","type":"uint256"},{"name":"total_match_bonus","type":"uint256"},{"name":"reinvestment_amt","type":"uint256"},{"name":"direct_team","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"total_player","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"is_exits","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"staking","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":true,"name":"upline","type":"address"},{"indexed":false,"name":"bonus","type":"uint256"}],"name":"Upline","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"tarif","type":"uint8"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"MatchPayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"}];

$(function() {
    console.log('function called');
    function setUserAddress(address) {
        // $('.trxWallet').val(address);
        // $('.trxWalletTa125').html('<a href="https://tronex02.com/?ref=' + address + '"><img src="https://tronex02.com/img/125.gif" width="125" height="125" alt="tronex02.com | Get +200% up to your deposit right now. Safe and legit!"></a>');
        // $('.trxWalletTa468').html('<a href="https://tronex02.com/?ref=' + address + '"><img src="https://tronex02.com/img/468.gif" width="468" height="60" alt="tronex02.com | Get +200% up to your deposit right now. Safe and legit!"></a>');
        // $('.trxWalletTa728').html('<a href="https://tronex02.com/?ref=' + address + '"><img src="https://tronex02.com/img/728.gif" width="728" height="90" alt="tronex02.com | Get +200% up to your deposit right now. Safe and legit!"></a>');
        // $('.reflink').html('https://tronex02.com/?ref=' + address);
        $('#referral_link_input').val('https://msdstars.com/?ref=' + address)
    }
    var obj = setInterval(async () => {
        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
            clearInterval(obj);
            userAddress = window.tronWeb.defaultAddress.base58;

            console.log('user_address',userAddress);
            $('.authFalse').hide();
            $('.authTrue').attr('style', 'display:block !important');
            setUserAddress(userAddress);
            update();
            setTimeout(function() {
                var accountInterval = setInterval(async () => {
                    if (window.tronWeb.defaultAddress.base58 !== userAddress) {
                        userAddress = window.tronWeb.defaultAddress.base58;
                        setUserAddress(userAddress);
                        update()
                         player_info();
                         userInfo();

                    }
                }, 100)
            }, 5000)
        }
    }, 10);

    //  //just to get referral address
     let search = window.location.search;
     let params = new URLSearchParams(search);
     let referral = params.get('ref');
     
     userReferer = referral;
     if(userReferer != null || userReferer != undefined)
     {
         //$('.userReferer').text(userReferer);
     }
    // console.log('userReferer',userReferer);
 
 

    async function invest() {
        console.log('is_mm',is_matured);

        if(is_matured  ==  1)
        {
            alert('Your Provide help is already active');
            $(".close").trigger('click');
            return false;
        }
     
       
        var amount = $('#invest_filed_id').val();
       var tarif =  $('input[name="mavro"]:radio').val();
        console.log(contractAddress);
        var amount  = parseInt(amount);
        if( !(amount === parseInt(amount, 10)))
        {
            alert('enter valid number of tron')
        }else if (amount < 200)
        {
            alert('Min is 200 tron');
        }else{
            amount = Math.floor(amount * 1000000);
            if (!tronWeb.isAddress(userReferer)) {
                userReferer = refererDefault
            }

            try {
                let instance = await tronWeb.contract(abi, contractAddress);
                let res = await instance.deposit(tarif,userReferer).send({ 
                feeLimit:100_000_000,
                 callValue:amount
            });
           
            setTimeout(function() {
                $(".close").trigger('click');
                update()
                
               // alert('successfulll');
               //window.location.reload();
            }, 5000)
            } catch (error) {console.log('deposit method cathc block',error)}

        }
        // var amount = parseFloat($('.trxAmount' + n).val().replace(',', '.'));
        // if (!amount) {
        //     $('.trxAmountError' + n + '1').show()
        // } else if (amount < 100) {
        //     $('.trxAmountError' + n + '2').show()
        // } else {
        //     amount = Math.floor(amount * 1000000);
        //     if (!tronWeb.isAddress(userReferer)) {
        //         userReferer = refererDefault
        //     }
        //     try {
        //         let instance = await tronWeb.contract(abi, contractAddress);
        //         let res = await instance.invest(userReferer).send({
        //             callValue: amount
        //         });
        //         if (!$('div[data-remodal-id="wallet"]').is(':visible')) {
        //             $('#goToWallet').trigger('click')
        //         }
        //         setTimeout(function() {
        //             update()
        //         }, 5000)
        //     } catch (error) {}
        // }
    }
    $(".investButton").click(function(e) {
        //console.log('button clicked');
        e.preventDefault();
        invest();
       //alert('somrthing wonderfull is going to happen');
        return false
    });

    setInterval( async function() {
       // console.log('function callinge each second')
        let instance = await tronWeb.contract(abi, contractAddress);
        let res = await instance.payoutOf(userAddress).call();
        let dividends = parseInt(res.value._hex, 16)/1000000;
       // console.log(res);
       // dividends =  tronWeb.toDecimal(res.value._hex, 16));
        console.log('dividends',dividends);
        $('.roi_span').html(dividends);
    
        if (userAddress) {
            //update()
        }
    }, 5000);
   
   
    async function withdraw() {
        try {
            let instance = await tronWeb.contract(abi, contractAddress);
            let res = await instance.withdraw().send({
                callValue: 0
            });
            if (!$('div[data-remodal-id="wallet"]').is(':visible')) {
                $('#goToWallet').trigger('click')
            }
            setTimeout(function() {
                update()
            }, 5000)
        } catch (error) {}
    }
    $("#withdrawButton").click(function(e) {
        console.log('withdraw_button');
        e.preventDefault();
        if(is_matured)
        {
            withdraw();
        }
        else
        {
            alert('Your help is not matured yet');
        }
        
        
        return false
    });


    async function player_info()
    {
        console.log('player_info function called');
        let instance = await tronWeb.contract(abi, contractAddress);
        let result = await instance.players(userAddress).call();

        $("#referral_avaliable").text(tronWeb.toDecimal(result.total_match_bonus)/1000000);
        console.log('player_info', result);
    }

    async function userInfo()
    {
        console.log('user function called');
        let instance = await tronWeb.contract(abi, contractAddress);
        let result = await instance.userInfo(userAddress).call();

        deposite_amt = tronWeb.toDecimal(result.deposit_detail[0]);
        deposite_date = tronWeb.toDecimal(result.deposit_detail[1]);
        end_time = tronWeb.toDecimal(result.deposit_detail[3]);

      
       
        console.log('dates',deposite_date,end_time);
        if(deposite_amt > 0)
        {
            var dateTimeStamp =  deposite_date;
            var d = new Date(dateTimeStamp * 1000) //x1000 to convert from seconds to milliseconds
            var s = d.toUTCString();
            s = s.substring(0,s.indexOf("GMT")) + "UTC" 
            //console.log('ssssss',s);
            $('#deposit_date').text(s);
            $('.deposit_amt').text(deposite_amt/1000000);
            $('#ph_box').show();

            $('#ph_side_ticket').show();
            $('#participatin_address').text(userAddress);


            var dateTimeStamp =  end_time;
            var d = new Date(dateTimeStamp * 1000) //x1000 to convert from seconds to milliseconds
            
            var s = d.toUTCString();
            endSec = s.substring(0,s.indexOf("GMT")) + "UTC" 
            $('.maturity_date').text(endSec);

            let structure = result.structure;
            
            for(i=0; i < structure.length; i++)
            {
                //console.log(tronWeb.toDecimal(structure[i]));
                $('#str'+i).text(tronWeb.toDecimal(structure[i]));
            }
           // console.log('structure',structure);


            let  current_timestamp   = Date.now();
           // console.log('d',end_time,current_timestamp);
            if(current_timestamp >= end_time)
            {
                is_matured = 1;
            }else
            {
                is_matured = 0;
            }
            console.log('is_matured',is_matured);
        }
        else{
            is_matured = 0;
        }


        //console.log('user_info', end_time);
    }

    


  
  
    async function update() {
        await player_info();
        await userInfo();
       
    }
   
   
});