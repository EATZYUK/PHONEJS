let qrOption = {
  render: 'canvas',
  minVersion: 1,
  maxVersion: 40,
  ecLevel: 'M',
  left: 0,
  top: 0,
  size: 700,
  fill: '#000',
  background: null,
  // content
  text: '',
  radius: 0.5, 
  quiet: 1,
  mode: 2,
  mSize: 0.1,
  mPosX: 0.5,
  mPosY: 0.03,
  label: 'EATZY',
  fontname: 'sans',
  fontcolor: '#000',
  image: null
};
var PAYTERMINAL = 1;
var queue = {
  started: false,
  lastNumber: 0,
  currentOrder: 0,
  waiting: 0,
  newCustomer: false,
  refreshTimer: false,
  refreshWaitingList: false,
  checkQueueIntervalTime: 5000,
  updateServingTimeInterval: 1000,
  servingTime: new Date(),
  servingTimer: null,
  checkQueueInterval: null
}

function check_numbers(number) {
    if(typeof(number) === 'string'){
        number = number.replace(/,/g,'');
    }
    if (isNaN(parseFloat(number))) {
      if (isNaN(Number(number))) {
        return 0;
      } else {
        return parseFloat(Number(number));
      }
    } else {
      return parseFloat(number);
    }
  }

if(false){
        setInterval(() => {
        //mertcan
             var jsonString = JSON.stringify(BasketItems);
             $.ajax({
                  type: 'POST',
                  url: "basketToSession.proweb",
                  data: {data : jsonString, prices : { total : check_numbers(localget('TOTALFEE')), delivery : check_numbers(localget('DELCHARGE')), discount : check_numbers(localget('discountAmount')), option : localget('METHOD') }},
                  async: true,
                  success: function (data) {  }
              });
          //mertcan
    },2000);
}



// var messageServer = 'localhost';
// var messageServerPort = 9000;
// var eatzyFoodKey = 'KEY_HERE';
// var serverKey = 'AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAAl5KK7bxP0kymbkHtPWjIqAAAAAACAAAAAAAQZgAAAAEAACAAAADy7oHJ89k4i_trxZv0cVAnGaBPNFy1fcA3AqnHAbcKAgAAAAAOgAAAAAIAACAAAACl1mAES4Og3bB7xNFxkXh9aZwu760oGSbMHOvP5Uh8CfAAAACqLTwwL9mG1PYojyXfPEkcqooRZqy3e7rKkbodhXJVZfOFyBOmHxMElbFEHdEuMxcfdrK62Z-XMPJJxM5A6CP9Q_vWLqpdE6S0CQSP4EBRNCfKRwVCnItw-0o2pP-1U0kvJ6pIAqRbx2ZWzKmyWZrgj3f9i04-9ukhImJW_JzS6C6LuJYVShoyOvAYwmiWxvG2Ja2ibLrL_Kr7cPu25pVFwvb6L5fum9naXLtLboPMd3ZtCOWwWVbKB6oEXFkzAS4rhC18qWq8Gv3VukO8cupbvpxwV5p7c3cBzKCuDmd_HQXZCLDZCeoTj8oGgQH9q3JAAAAAEnNe7OIO18f1lzDxJvp50UemJVKRpSx1XNSuQbkIXcXQ2t3hNfAp_iPRa7fq3iIHWJTHwLLUpai57aT46tcmvA';
// var timeout = 30000;
// var customerEntityType = 'Customers';
// var itemTagName = 'Eazty Name';
// var ticketType = 'Delivery Ticket';
// var ticketTypeDel = 'Delivery Ticket';
// var ticketTypeCol = 'Collection Ticket';
// var departmentName = 'Restaurant';
// var userName = 'Administrator';
// var terminalName = 'Server';
// var printJobName = 'Print Orders to Kitchen Printer';
// var additionalPrintJobs = [];  // array of additional print job names
// var miscProductName = 'Misc';
// var deliveryFeeCalculation = 'Delivery Service';
// var collectionFeeCalculation = 'Collection Service';
// var tipCalculation = 'Tip';
// var accessToken = undefined;
// var accessTokenExpires = '';


// function Authorize( callback) {
    
//     var user = 'samba';
//     var password='1234'
//     accessToken = undefined;
//     var form = {grant_type: 'password', username:user,password:password, client_secret: password, client_id: user};
//     var formData = JSON.stringify(form);
//     var contentLength = formData.length;

//     request({
//         headers: {
//             'Content-Length': contentLength,
//             'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         uri: 'http://' + messageServer + ':' + messageServerPort + '/Token',
//         body: formData,
//         method: 'POST'
//     }, function (err, res, body) {
//         if (err) {
//             console.log('Error while trying to authorize >', err.message);
//             if (callback) callback();
//         } else if (res.statusCode === 400) {
//             console.log(body);
//             if (callback) callback();
//         } else {
//             var result = JSON.parse(body);
//             accessToken = result.access_token;
//             accessTokenExpires = new Date(result['.expires']);
//             if (callback) callback();
//               gql(createBroadcasting('30-Tset Broadcast'), messages => {
//                             console.log(`Return ${messages} created`);
//                         });
//         }
//     });
// }


// function gql(query, callback) {
//     if (!accessToken) {
//         console.log('Valid access Token is needed to execute GQL calls.')
//         return;
//     }
//     var data = JSON.stringify({query: query});
//     request({
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization': 'Bearer ' + accessToken
//         },
//         uri: 'http://' + messageServer + ':' + messageServerPort + '/api/graphql',
//         body: data,
//         method: 'POST'
//     }, function (err, res, body) {
//         if (res.statusCode === 401) {
//             console.log('Should Authorize...');
//             Authorize(() => gql(query, callback));
//         } else {
//             var data = JSON.parse(body).data;
//             if (callback) callback(data);
//         }
//     });
// }


// function createBroadcasting(id){
// 	 return `mutation m {
//   				postBroadcastMessage(
// 				message:"${id}"){message}}`
// }





// gqlAuthorize = function (user, password, callback) {
//     var aurl = 'http://localhost:9000/Token';
//     user = (user ? user : 'samba');
//     password = (password ? password : 'password');
    
//         jQuery.ajax({
//         'type': 'POST',
//         'url': aurl,
//         cache:false,
//         headers: {'Content-Type':'application/x-www-form-urlencoded'},
//         data: $.param({grant_type:'password', username:user, password:password, client_id:user, client_secret:password})
//         })
//         .done(function d(response){
//             accessToken = response.access_token;
//             console.log('AUTHORIZED GQL: ' + accessToken.substr(0,20) + ' ...');
//             if (callback) {
//                 callback(accessToken);
//             }
//         });
// };
//  gqlAuthorize('samba','1234', authResp => {
//     // authResp should contain the Access Token which you can check/verify and either continue or not
   
//     if (authResp) {
         
//                 $.ajax({
//   type: "POST",
//   beforeSend: function(request) {
//       request.setRequestHeader("Content-Type", 'application/json');
//       request.setRequestHeader("Accept", 'application/json');
//     request.setRequestHeader("Authorization",  'Bearer ' + accessToken);
    
//   },
//   url: 'http://' + messageServer + ':' + messageServerPort + '/api/graphql',
//   data: data,
//   processData: false,
//   success: function(msg) {
//       alert(msg);
//   }
// });
        
        
        
//     } else {
//       // auth failed, show a message
//     }
//   });
  
  

  



var BasketTotal = 0; //To check if total below zero
var BasketTotalQtyChange = false; //Qty change tracing for BasketTotal
var opHours = '';
var changedOpHours = {};
var opHoursSelectOnChange = true;
$.cookie('EDITORDER', 0);
localSet("BASKETNOTE", '');
localSet('CALLER', 0);
let PostCodesTopT = '';
let lat;
let long;
var requestid = '';
var tpi = '22162938';
var host = 'sz295y490000.test.connect.paymentsense.cloud';
var api = 'aad6313f-5913-464e-8151-8471ea03f527';
var url = 'https://' + host + '/pac/terminals?token=' + api + '&api-version=0';
var urlPay = 'https://' + host + '/pac/terminals/' + tpi + '/transactions';
var ReportURL = 'https://' + host + '/pac/terminals/' + tpi + '/reports';
var datarollPaymentAut = "";
var TableURL = 'https://' + host + '/pat/tables';
var TableCheckTime = '';
var PAYTERMINAL = 3;
$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');

  let [hours, minutes, second] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}:${second}`;
}
   

function localSet(key, val) {
  $.cookie(key, val);
}

function localget(key) {
  return $.cookie(key);
}
var CALLCHECK = 3000;
var timmer;
var CashUpArray = {};
var FreeArray = [];
var ITEMLIMIT = [];
var BasketItems = [];
var TempArray = [];
var Dis = '';
var HourSelectedList = {};
var handled = false;
var MainID = window.app.MAINSELECT;
var dataProducts = [];
var dataCategories = [];
var dataEXTRAS = [];
var dataDEALS = [];
var DeleteHistory = [];
var DeleteBasket = [];
var DeleteItem = [];

var fontsize = window.app.BASKETFONTSIZE;
var taxNumber = window.app.TAX_NUMBER;
if (taxNumber != "") {
  taxNumber = "<h3>VAT Registration No :" + taxNumber + " </h3><br/><br/>";
}
//0 = takeaway , 1 = Both, 2 Eatin
let catTypes = 0;
if (window.app.EATINPRICE == 'Yes') {
  catTypes = 2;

  localSet('METHOD', "COLLECTION");

  $("#payment_Type").html("EatIn Price");
}
let merges = 0;
let mergeid = 0;
if (window.app.SYSTEMMERGE == "Yes") {
  merges = 1;
}
// DEALS Array 19/04/21
var SelectedProduct = [];
var pages = 0;
var NoSub = false;
var StepByStepList = [];
var CurrentStep = 0;
var BasketListItems = [];
var level = 1;
var parentcat = 0;
var AddNoteCharge = '';

$(document).ready(function (e) {
  "use strict";
  
   let jsonLangFile = [];
    async function fetchLangData() {
    let response = await fetch('/lang/'+ document.cookie.split("lang")[1].split('=')[1].split(';')[0] +'/phone/versionjs.json');
    if (response.status === 200) {
        jsonLangFile = await response.json();
    }
}
fetchLangData();
function tword(word){
    if(jsonLangFile[word] == "undefined"){
        return "";
    }
     return jsonLangFile[word];
}



  $('body').on('touchend click', ".BackButton", function (e) {
    e.preventDefault();
    GetCategories(1, 0)

  });

  function SendEmailC(e, i) {
    let dataString = '&email=' + e + '&id=' + i
    $.ajax({
      type: 'POST',
      url: "Pro-Send-Email.proweb",
      data: dataString,
      success: function (data) {}
    });
  }
  const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
  });

  function NetPrint(orderid, counter, reprint, printqty, kitchenprintqty) {
    $('#loading').show();
    $.ajax({
      type: 'GET',
      url: "PrintLay.proweb",
      data: "saleid=" + orderid + "&number=" + counter + "&reprint=" + reprint + "&printQty=" + printqty + "&KPrintQty=" + kitchenprintqty,
      async: false,
      success: function (data) {
        $('#loading').hide();
        let mes = JSON.parse(data);
        swal({
          type: 'warning',
          title: mes['message'],
          html: 'Printer.',
          timer: 2000
        });
      }
    });
  }

  function NosalePrintNetWork() {
    $('#loading').show();
    $.ajax({
      type: 'GET',
      url: "NoSales.proweb",
      data: "token=2019TokenPro",
      async: false,
      success: function (data) {
        $('#loading').hide();
        let mes = JSON.parse(data);
        swal({
          type: 'warning',
          title: mes['message'],
          html: 'Printer.',
          timer: 2000
        });
      }
    });
  }
  insert_print_iframe();

  function insert_print_iframe() {
    let $iframe = document.getElementById("webprinteasy");
    if (!$iframe) {
      let printI = document.createElement("iframe");
      printI.id = "webprinteasy";
      printI.style.position = 'fixed'
      printI.style.width = '0'
      printI.style.height = '0'
      printI.style.top = '-100px'
      printI.onload = () => {}
      document.body.appendChild(printI);
    }
  }

  function getMapURL(lat, long) {

    let map = 'https://www.google.com/maps/dir/?api=1&destination=' + lat + ',' + long + '&travelmode=driving'

    return map;
  }
  async function print_iframe_get(body, style = null, qrCh = 0, method = null, postcode = null, dtpsnul = null) {
    let $iframe = document.getElementById("webprinteasy");
    if (!$iframe) {
      let printI = document.createElement("iframe");
      printI.id = "webprinteasy";
      printI.style.position = 'fixed'
      printI.style.width = '0'
      printI.style.height = '0'
      printI.style.top = '-100px'
      printI.onload = () => {
        let link = document.createElement("style");
        link.innerHTML = style;
        link.id = 'stylesAllPrint';
        printI.contentDocument.head.appendChild(link);
      }
      document.body.appendChild(printI);
      $iframe = document.getElementById("webprinteasy");
    } else {
      if (style != null) {
        let link = document.createElement("style");
        link.innerHTML = style;
        link.id = 'stylesAllPrint';
        $iframe.contentDocument.head.appendChild(link);
      }
    }
    let qr = '';
    if (qrCh == 1 && method == 'DELIVERY' && postcode != '' && window.app.PRINT_QRCODE == 'Yes') {
      qr = '<div><center id="qrIframe" style="width: 150px;height: 150px; display: inline-flex;"></center></div>';
    }
    $iframe.contentDocument.body.innerHTML = qr + body;

    if (qrCh == 1 && method == 'DELIVERY' && lat != null && window.app.PRINT_QRCODE == 'Yes' && long != null) {
      qrOption.text = getMapURL(lat, long);
      $("#webprinteasy").contents().find("#qrIframe").qrcode(qrOption);


    }
    var onPrintFinished = async function () {
        
      $iframe.contentDocument.body.innerHTML = '';
      if (style != null) {
        $iframe.contentWindow.document.getElementById('stylesAllPrint').remove();
      }
      await delay(1000);
      if (window.app.KITCHENPRINT == "Yes" && dtpsnul != null) {
        await print_iframe_get(dtpsnul, style, 0, method, postcode, null);
      }
      return 1;
    }
    $iframe.contentWindow.focus()
    return new Promise(async function (resolve, reject) {
       
      resolve(await onPrintFinished($iframe.contentWindow.print()))
        
    })
  }
  window.setInterval(function () {
    CheckOrderNew();
  }, 6000);

  function clickedOrder(idClick) {
    $(idClick).trigger("click");
  }

  function setTimeoutsCalls(ft, idClick, time) {
    setTimeout(function () {
      ft(idClick);
    }, time);
  }
  
  
  function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    const notification = new Notification("You Have New Order!",
                {
                  body: "Check Phone Screen",
                  icon: "/images/EATZY-LOGO-FINAL.png",
                }
        );
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification("You Have New Order!",
                {
                  body: "Check Phone Screen",
                  icon: "/images/EATZY-LOGO-FINAL.png",
                }
        );
      }
    });
  }
}
  function CheckOrderNew() {
    if (window.app.ONLINEORDER == "Yes") {
      $.ajax({
        url: "OrderCount.proweb",
        type: 'GET',
        success: function (data) {
          if (data == 2) {
            location.reload();
          } else if (data != 0) {
            if(window.app.NOTIFYME == "Yes"){
                notifyMe();
            }
            
            $('#chatAudio').remove();
            $('.PoupNewOrders').remove();
            var orderid = (data.order[0].orderid);
            var method = (data.order[0].method);
            $('<audio id="chatAudio"><source src="audio/selection/' + window.app.SELECTED_AUDIO + '.ogg" type="audio/ogg"></audio>').appendTo('body');
            $('#chatAudio')[0].play();
            $('.slide-in').addClass('show');
            var buttons = '<button  data-history="0" data-counter="1" data-otype="' + orderid.substring(0, 3) + '" class="PoupNewOrders ' + method + '  btn btn btn-primary hvr-shutter-out-horizontal ITEMButton Pending WEB" id="order' + orderid + '_Pop" data-orderid="' + orderid + '"><div class="OrderTypeArea">'+ tword('WEB') +'</div><div style="float:right;"><span style="font-size:24px;">' + method + ' </span><br>Time:' + data.order[0].adddate + ' |  || '+ tword('PENDING') +' </div></button>';
            $('#OrderMethod').html(buttons);
            let times = 15;
            if (window.app.AUTOPRINT == "Yes") {
              if (window.app.TIMESELLECT == "No" || (window.app.TIMESELLECT == "Yes" && data.order[0].hourSelect == '0')) {
                if (method == 'COLLECTION') {
                  times = window.app.AUTOCOLLECTIONTIME;
                } else if (method == 'DELIVERY') {
                  times = window.app.AUTODELIVERYTIME;
                }
              } else {
                times = 0;
              }
              setTimeoutsCalls(clickedOrder, "#order" + orderid + "_Pop", 500)
              setTimeoutsCalls(clickedOrder, '.OrderAction[data-title="Accepted"][id="' + orderid + '"]', 1000);
              setTimeoutsCalls(clickedOrder, '.setupTimeConcept[data-title="Accepted"][id="' + orderid + '"][data-otime="' + times + '"]', 1500);
            }
          } else {
            $('.slide-in').removeClass('show');
            $('.slide-in').hide();
            $('#chatAudio').remove();
            $('.PoupNewOrders').remove();
          }
        },
        dataType: "json"
      });
    } else if (window.app.ONLINEORDER == "No" && window.app.CallerId == 'No') {
      $.ajax({
        type: 'POST',
        url: "ProTChLog.proweb",
        async: false,
        success: function (data) {
          if (data == 0) {
            location.reload();
          }
        }
      });
    }
  }
  $('body').on('touchend click', ".CustomerSelectedTime", function (e) {
    e.preventDefault();
    Swal.fire({
      title: tword('PICK_A_TIME')+':',
      type: 'question',
      html: '<input id="datepicker" readonly class="swal2-input">',
      customClass: 'swal2-overflow',
      onOpen: function () {
        $('#datepicker').timepicker({
          timeFormat: 'HH:mm',
          minTime: new Date(),
          maxHour: 20,
          defaultTime: new Date(),
          maxTime: '11:50pm',
          maxMinutes: 30,
          startTime: '11:00',
          interval: 15,
        });
      }
    }).then(function (result) {
      if (result.value) {
        window.app.CUSTOMERSELECTTIME = $('#datepicker').val();
        setuptimeOpen($('#datepicker').val());
      }
    });
  });



  function setuptimeOpen(dtime) {

    if (localget('PayType') == "" && window.app.PayTypeCHECK == "Yes") {
      swal({
        title: tword('SELECT_PAYMENT_TYPE'),
        type: "warning"
      });
      return false;
    }
    var price = check_numbers($('#prices').html().split('.').join(""));

    var paid = check_numbers($('#MainTotalFee').html().split('.').join(""));

    var val = dtime;
    var change = check_numbers($('#prices').html() - $('#MainTotalFee').html());




    if ($('#prices').html() == "") {
      change = 0;
    } else {
      if (price < paid) {
        setTimeout(function () {
          swal({
            title: tword('CORRECT_PAID_AMOUNT'),
            text: tword('CORRECT_PAID_AMOUNT_TEXT'),
            confirmButtonText: "Ok",
            confirmButtonColor: "#DD6B55",
            showCancelButton: true,
            type: "warning",
            html: true
          });
        }, 200)
        return false;
      }
    }
    if (typeof localget('METHOD') == 'undefined') {
      setTimeout(function () {
        swal(tword('DELIVERY_OR_COLLECTION'), tword('DELIVERY_OR_COLLECTION_TEXT'), "warning");
      }, 200)
    }
    $('#PaidAmountLabel').html($('#prices').html());
    $('#ChangeAmount').html(check_numbers(change).toFixed(2));

    PostCodesTopT = localget("POSTCODE");

    if ($.cookie('EDITORDER') == 0) {
      DeleteBasket = [];
      DeleteHistory = [];
    }
DisableButtons();
    var dataroll = '&TotalSale=' + localget('TOTALFEE') + '&note=' + localget("BASKETNOTE") + '&DTime=' + val + "&DType=" + localget('METHOD') + "&Phone=" + localget('PHONE') + "&PayType=" + localget('PayType') + "&changeDue=" + change + "&basketArray=" + JSON.stringify(BasketItems) + datarollPaymentAut + "&deleteHistory=" + JSON.stringify(DeleteHistory);
    if (change != 0) {
      setTimeout(function () {
        swal(check_numbers(change).toFixed(2), tword('TOTAL_CHANGE'), "success");
      }, 200)
    }
    var orderid = '';
    $.ajax({
      type: 'POST',
      url: "completeCheckoutTime.proweb",
      data: dataroll,
      async: false,
      success: function (data) {
        orderid = data.replace(/\s/g, "");

        var type = localget('METHOD').substr(0, 1);
        var discounted = localget('discountAmount') || 0
        var AmountPaid = check_numbers($('#prices').html());
        PostCodesTopT = localget("POSTCODE");
        return new Promise(function (resolve, reject) {
          resolve(WEBORDERPRINTONLINE(orderid, 'Accepted', '', AmountPaid, change, $('#caller').html(), dtime, localget('METHOD'), dtime, '', BasketItems, localget("DELCHARGE"), discounted))
        }).then(function () {
          CLOSECALL();
          TempArray = [];
          localSet("DELCHARGE", 0)
          $('#PmethodNew').html('');
          return 'end';
        });
      }
    });
  }

  $('body').on('touchend click', ".changeAudio", function (e) {
    e.preventDefault();
    AudioListGet();
  });



  function AudioListGet() {
    let audioTum = window.app.AUDIO_LIST;

    var div = document.createElement('div');
    audioTum.split(",").forEach(function (item) {
      var divinside = document.createElement('div');
      divinside.style.cssText = "text-align: left;align-content: center;display: inline-flex;width: 100%;margin-bottom: 2%;border-bottom: 1px solid #000;";

      var divinsideche = document.createElement('div');
      divinsideche.style.cssText = "width: 40%;";

      var checkbox = document.createElement('input');
      checkbox.type = 'radio';
      checkbox.id = item;
      checkbox.name = 'audiorad';
      checkbox.value = item;
      checkbox.style.cssText = 'font-size:24px;';

      var label = document.createElement('label')
      label.htmlFor = item;
      label.style.cssText = 'font-size:24px;margin-left: 20px;';
      label.appendChild(document.createTextNode(item + ' sound'));
      var br = document.createElement('br');
      var audio = document.createElement('audio');
      audio.setAttribute("src", "audio/selection/" + item + ".ogg");
      audio.setAttribute("controls", "controls");
      audio.style.cssText = "margin-left: 10%;width: 50%;";
      divinsideche.appendChild(checkbox);
      divinsideche.appendChild(label);
      divinside.appendChild(divinsideche);
      divinside.appendChild(audio);
      divinside.appendChild(br);
      div.appendChild(divinside);
    });
    Swal.fire({
      title: '<strong>Select <u>'+ tword('WEB_ORDER_SOUND') +'</u></strong>',
      icon: 'info',
      html: div,
      customClass: 'swal-wide',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: tword('CONFIRM'),
      cancelButtonText: tword('CANCEL'),
      preConfirm: function () {
        return new Promise((resolve, reject) => {
          resolve({
            audio: $('input[name="audiorad"]:checked').val(),
          });
        });
      }
    }).then((data) => {
      if (data.isConfirmed && typeof (data.value.audio) !== 'undefined') {

        $.ajax({
          type: 'POST',
          url: "code/changeAudio.php",
          async: false,
          data: 'audio=' + data.value.audio,
          success: function (datas) {
            if (datas == 1) {
              window.app.SELECTED_AUDIO = data.value.audio;
              pageRefreshSwal(tword('CHANGED_BUZZER'), 2);
            }
          }
        });
      }

    });
  }

  function pageRefreshSwal(title, refresh) {
    let timerInterval
    Swal.fire({
      title: title,
      html: tword('I_WILL_CLOSE'),
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        if (refresh == 1) {
          location.reload();
        } else {
          $('#TakeawayPro').click();
        }
      }
    })
  }

  function DisableButtons() {
    $(".setupTime").prop('disabled', true);
    $(".CustomerSelectedTime").prop('disabled', true);
    $(".SavePrintOrder").prop('disabled', true);
  }

  function EnableButtons() {
    $(".setupTime").prop('disabled', false);
    $(".CustomerSelectedTime").prop('disabled', false);
    $(".SavePrintOrder").prop('disabled', false);
  }
  LOADDATA();
  if (window.app.PHONEFOLDER == 'Yes') {
    $('#loading').show();

    setTimeout(
      function () {
        if (merges == 1) {
          MergeStartPHONE();
        } else {
          StartPHONE();
        }
        $('#loading').hide();
      }, 1000);
  } else {
    LogGetAll();
  }


    var isCompletedOrdersHidden = window.app.PHONE_TOGGLE_ORDERS_DEFAULT == "Show" ? false : true;
    function toggleCompletedOrders(show){
       // let statusesToHide = ['cash_received', 'card_received','just_received','uber_received'];
       var statusesToHide  = [];
        app.PHONEPAYOPTION.split(',').forEach((val) => {
            statusesToHide.push(val.toLowerCase() + '_received');
       });
        show = typeof(show) === 'undefined' ? isCompletedOrdersHidden : show;
        if(show){
            statusesToHide.forEach((status, i) => {
                $('#OrderLog button.' + status).show();
            });
            isCompletedOrdersHidden = false;
            $('#HIDE_COMPLETED_ORDERS').html('<i class="glyphicon glyphicon-plane"></i> HIDE');
        }else{
            statusesToHide.forEach((status, i) => {
                $('#OrderLog button.' + status).hide();
            });
            isCompletedOrdersHidden = true;
            $('#HIDE_COMPLETED_ORDERS').html('<i class="glyphicon glyphicon-plane"></i> SHOW');
        }
    }

  function LogGetAll() {
    $('#basketlayout').css('display', 'block');
    $('#OrderDetail').html('').css('display', 'none').css('transform', 'translateX(100%)');
    $('#productsettings').css('display', 'none');
    $('#FooterBar').css('display', 'none');
    $('#HistoryButtons').css('display', 'none');
    $('#OrderLogPage').css('display', 'block');
    $('#OrderDetail').html("")
    $('.OrderConcept').remove();
    $('#Admin').css('display', 'none');
    $.ajax({
      type: 'POST',
      url: "Orders.proweb",
      data: "",
      async: false,
      success: function (data1) {
        var itemList = '';
        var data = jQuery.parseJSON(data1);
        var ords = [];
        var PriceButtons = window.app.PHONEPRICEBUTTON;
        var arr = PriceButtons.split(',');
        var tms = "";
        var keysall = [];
        $.each(arr, function (key, vals) {
          var first = vals.substr(0, 1);
          tms = tms + '<button id="' + vals + '" class="btn btn-primary hvr-shutter-out-horizontal orderslist ORDERBUTTON" type="button"><i class="glyphicon glyphicon-plane"></i> ' + vals + ' (' + data[first] + ')</button>'
        });
        var List = '<div class=" col-md-12 col-lg-12 col-sm-12"><button id="WEB" class="btn btn-primary hvr-shutter-out-horizontal orderslist ORDERBUTTON" type="button"><i class="glyphicon glyphicon-world"></i> ' + tword('WEB_ORDERS') + '</button>'
        var arrpay = (window.app.PHONEPAYOPTION).split(',');

        $.each(arrpay, function (key, vals) {
          List = List + '<button id="' + vals.toLowerCase() + '" class="btn btn-primary hvr-shutter-out-horizontal orderslist ORDERBUTTON" type="button"><i class="glyphicon glyphicon-plane"></i> ' + vals + '</button>'
        });
        List = List + tms;
        if (window.app.ACTIVEREFUND == 'Yes') {
          List = List + '<button id="REFUND" class="btn btn-primary hvr-shutter-out-horizontal orderslist ORDERBUTTON" type="button"><i class="glyphicon glyphicon-plane"></i> '+ tword('REFUND') +'</button>'
        }
        List = List + '<button id="All" class="btn btn-primary hvr-shutter-out-horizontal orderslist mainCheck ORDERBUTTON" type="button"><i class="glyphicon glyphicon-cutlery"></i> '+ tword('ALL_ORDERS') +' ( ' + data['Totals'] + ')</button><button  class="btn btn-primary hvr-shutter-out-horizontal orderslist DriverList" type="button"><i class="glyphicon glyphicon-road"></i>Select Driver</button><button  class="btn btn-primary hvr-shutter-out-horizontal orderslist DeleteOrder" type="button"><i class="glyphicon glyphicon-remove"></i>'+ tword('REMOVE_ORDER') +'</button>';
         if(app.PAIDBUTTON == "Yes"){
          List = List + '<button id="HIDE_COMPLETED_ORDERS" class="btn btn-primary hvr-shutter-out-horizontal" type="button"><i class="glyphicon glyphicon-plane"></i> HIDE</button></div>';
        }else{
            List = List + '</div>';
        }
        
        $.each(data['orders'], function (key, val) {
          var color = val.color;
          if (color != null) {
            if (color == "#000000") {
              color = 'style="background-color:' + color + ' !important;color:#fff;"'
            } else {
              color = 'style="background-color:' + color + ' !important;"'
            }

          } else {
            color = '';
          }


          var orderid = val.orderid;
          var Counter = val.order;
          var orderType = val.orderid.substring(0, 3);
          var pMethod = val.paymentMethod.replace(/ /g, '').toLowerCase();
          var date22 = val.adddate.split(' ');
          var met = 'val.method time'
          var CustAdd = '';
          if ((val.street) != 0 && val.method == "DELIVERY") {
            CustAdd = val.street + ' - ' + val.street2 + ' - ' + val.postcode;
          } else {
            CustAdd = ''
          }
          var driverName = '';
          if (val.duser != 0) {
            driverName = " | Driver: " + val.duser;
          }
          var t = val.orderid.substr(0, 3);
          if (val.hourSelect != 0 && val.status != "Reprint") {
            HourSelectedList[val.orderid] = val.hourSelect;
          }
          if (val.hourSelect != 0 && val.status == "Reprint") {
            delete HourSelectedList[val.orderid];
          }

          let total = 0;
          total = val.Total.replace(',','');

          itemList = itemList + '<button data-history="0" data-driver="' + val.duser + '" ' + color + ' data-counter="' + Counter + '" data-otype="' + orderType + '" class="' + val.method + " " + pMethod + ' btn btn btn-primary hvr-shutter-out-horizontal ITEMButton ' + val.status + ' ' + t + '" id="order' + val.orderid + '" data-orderid="' + val.orderid + '"><div class="OrderTypeArea">' + t + '</div><div style="float:right;width:89%;"><span style="font-size:21px;">'+ tword('ORDER') +' : ' + Counter + ' | ' + val.method + ' </span><hr>' + CustAdd + ' ' + pMethod + '<hr>'+ tword('RECEIVED_TIME') +':' + date22[1] + ' | ' + driverName + ' ||' + val.status + '<hr><span style="   font-size: 18px;color: #fff;">' + val.orderid + ' | | £' + parseFloat(total).toFixed(2) + '</span></div></button>';
        });
        $('#orderlist').html(List);
        $('#OrderLog').html(itemList);
      }
    });
    $('#HIDE_COMPLETED_ORDERS').on('touchend click', function(e){
                    e.preventDefault();
                    toggleCompletedOrders();
                });
                toggleCompletedOrders(!isCompletedOrdersHidden);
  }
  // Log End
  $('body').on('touchend click', '#TakeawayPro', function (e) {
    e.preventDefault();
    $(this).css("background-color", "red");
    $("#EatinPro").css("background-color", "blue");
    localSet('METHOD', "DELIVERY");
    $('#DeliveryButtons').hide();
    $('#kioskhome').hide();
    
    $('#QueuePage').hide();
    $('#DeliveryComplete').show();
    $("#payment_Type").html(tword('PAYMENT_TYPE_TAKE_AWAY'));
    catTypes = 0;
    GetCategories(level, parentcat);
    phone_order_page();


  });
  $('body').on('touchend click', '#EatinPro', function (e) {
    e.preventDefault();
    $(this).css("background-color", "red");
    $("#TakeawayPro").css("background-color", "blue");
    localSet('METHOD', "COLLECTION");
    //   $('.DeliveryType').attr("data-type",$.cookie('METHOD')).html($.cookie('METHOD'))
    $('#DeliveryButtons').hide();
    $('#QueuePage').hide();
     $('#kioskhome').hide();
    $('#DeliveryComplete').show();
    $("#payment_Type").html(tword('EATIN_PRICE'));
    catTypes = 2;
    GetCategories(level, parentcat);
    phone_order_page();
    $('.swiper-slide').show();
  });

  function phone_order_page() {
    $('#productsettings').css('display', 'block');
    $('#basketlayout').css('display', 'block');
    $('#productCat').css('display', 'block'); //StartPHONE();
    $('#Admin').hide();
    $('#OrderLogPage').hide();
    var MainID = window.app.MAINSELECT || 2;
    getproducts(MainID, "", 0);
    $('#OrderDetail').hide()
    $('#FooterBar').css('display', 'block');
    $('#HistoryButtons').css('display', 'block');
  }

  function LOADDATA() {
    $.get('Product.proweb', function (data) {
      dataProducts[0] = data;
    });
    $.get('Categories.proweb', function (data) {
      dataCategories[0] = jQuery.parseJSON(data);
    });
    $.get('ProductExtras.proweb', function (data) {
      dataEXTRAS[0] = jQuery.parseJSON(data);
    });
    $.get('Deals.proweb', function (data) {
      dataDEALS[0] = jQuery.parseJSON(data);
    });
    if (window.app.SYSTEMMERGE == "Yes") {
      $.get(window.app.SYSTEMMERGEURL + 'PHONE/code/products.txt', function (data) {
        dataProducts[1] = data;
      });
      $.get(window.app.SYSTEMMERGEURL + 'PHONE/code/categories.txt', function (data) {
        dataCategories[1] = jQuery.parseJSON(data);
      });
      $.get(window.app.SYSTEMMERGEURL + 'PHONE/code/productextras.txt', function (data) {
        dataEXTRAS[1] = jQuery.parseJSON(data);
      });
      $.get(window.app.SYSTEMMERGEURL + 'PHONE/code/deals.txt', function (data) {
        dataDEALS[1] = jQuery.parseJSON(data);
      });
    }

    //ASLAN 28/04/2021 userbase data


  }
  $('#PhoneButtons').on('click', ".JustNo", function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $('.JustNo').removeClass('active');
    } else {
      $('.JustNo').removeClass('active');
      $(this).addClass('active')
    }
  });
  $('#Admin').on('click', ".DisableProduct", function (e) {
    e.preventDefault();
    var ref = $(this).attr('id');
    var satusAc = $(this).attr('data-satus');
    var type = $(this).attr('data-type');
    var DataCenter = "&ref=" + ref + "&satusAc=" + satusAc + "&type=" + type;
    $.ajax({
      type: 'POST',
      url: "code/stockControlRemove.php",
      async: false,
      data: DataCenter,
      success: function (data) {
        $('#StockControl').click();
      }
    });
    $.ajax({
      type: 'POST',
      url: "CheckDbSet.proweb",
      async: false,
      data: "",
      success: function (data) {}
    });
    return true;
  });

  $('.slide-in').on('touchend click', ".slide-in-content", function (e) {
    var orderid = $('#OrderID').html();
  });

  $('#productsettings').on('touchend click', ".PriceType", function (e) {
    e.preventDefault();
    var type = $(this).attr("data-type");
    localSet('METHOD', type);
    getproducts(MainID, "", 0);
  });

  $('#Admin').on('touchend click', "#UpdateStock", function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "CheckDbSet.proweb",
      async: false,
      data: "",
      success: function (data) {}
    });
    return true;
  });
  $('#Admin').on('touchend click', "#StockControl", function (e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: "code/getProductStock.php",
      async: false,
      data: '',
      success: function (data) {
        var Com = '<button id="UpdateStock" class="btn" style="width:200px;height:50px;float: right;margin-bottom: 20px;font-size: 20px;background-color: red;color: #fff;font-weight: bold;">'+ tword('UPDATE_STOCK') +'</button>';
        $('#ReportArea').html(Com).show();
        $('#ReportArea').append(data)
      }
    });
  });
  $('#Admin').on('touchend click', '#DeleteOrderFIles', function (e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: "code/deleteFIlesFromOrder.php",
      async: false,
      data: '',
      success: function (data) {
        $('#phone').click();
      }
    });
  });
  $('body').on('touchend click', ".PrintMeT", function (e) {

    e.preventDefault();
    if (window.app.NETPRINTER == 'Yes') {
      $('#loading').show();
      $.ajax({
        type: 'GET',
        url: "PrintReport.proweb",
        data: "type=Z-Report",
        async: false,
        success: function (data) {
          $('#loading').hide();
          let mes = JSON.parse(data);
          swal({
            type: 'warning',
            title: mes['message'],
            html: 'Printer.',
            timer: 2000
          });
        }
      });
    } else {
      let $iframe = document.getElementById("topProIframe");
      var onPrintFinished = function (printed) {

        return 1;
      }

      setTimeout(() => {
        onPrintFinished($iframe.contentWindow.print());
      }, 100);
    }

    $.ajax({
      type: 'POST',
      url: "SaveReport.proweb",
      data: "type=Z&data=" + JSON.stringify(window.app.fullData),
      async: false,
      success: function (data) {
        $('#loading').hide();

        closeTillAllOption();
      }
    });


    return true;



  });


  $('#ReportArea').on('click', ".PrintMe", function (e) {
    e.preventDefault();
    if (window.app.NETPRINTER == 'Yes') {
      $('#loading').show();
      $.ajax({
        type: 'GET',
        url: "PrintReport.proweb",
        data: "type=Z-Report",
        async: false,
        success: function (data) {
          $('#loading').hide();
          let mes = JSON.parse(data);
          swal({
            type: 'warning',
            title: mes['message'],
            html: 'Printer.',
            timer: 2000
          });
        }
      });
    } else {
      print_iframe_get($('#basket').html(), null, 0);
    }
    closeTillAllOption();
    return true;
  });


  $('#Admin').on('touchend click', '#RefreshPage', function (e) {
    e.preventDefault();
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "code/restartSystem.php",
      async: false,
      success: function (data) {
        if (data == 1) {
          location.reload();
        }
      }
    });

  });
  $('#Admin').on('touchend click', '#ViewCARDREPORT', function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "code/getCardZPDQ.php",
      async: false,
      data: "",
      success: function (data) {
        data = JSON.parse(data);
        $('#ReportArea').html('<pre>' + data + '</pre>');
      }
    });
  });
  $('#Admin').on('touchend click', '#printCARDREPORT', function (e) {
    e.preventDefault();
    printCARDREPORT();
  });

  function printCARDREPORT() {
    if (PAYTERMINAL == 1) {
      var datast = '{"reportType": "END_OF_DAY"}';
      var loger = '';
      $.ajax({
        type: 'POST',
        url: ReportURL,
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", "Basic " + btoa('1:' + api));
        },
        data: datast,
        contentType: 'application/json',
        statusCode: {
          401: function (data) {
            swal({
              type: 'warning',
              title: tword('INVALID_AUTH'),
              html: 'Submitted'
            });
          },
          404: function () {
            swal({
              type: 'warning',
              title: tword('INVALID_URL'),
              html: 'Submitted'
            });
          },
          200: function () {},
          201: function () {},
          503: function () {
            swal({
              type: 'warning',
              title: tword('CHECK_TERMINAL'),
              html: 'Submitted'
            });
          },
          202: function () {}
        },
        success: function (data) {
          requestid = data.requestId;
          var ReportURLSAVE = 'https://' + host + '/pac/terminals/' + tpi + '/reports/' + requestid;
          swal({
            type: 'warning',
            title: tword('WAIT_FOR_REPORT'),
            html: 'Submitted',
            timer: 15000,
          });
          setTimeout(function () {
            $.ajax({
              type: 'GET',
              url: ReportURLSAVE,
              beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa('1:' + api));
              },
              data: "",
              contentType: 'application/json',
              statusCode: {
                401: function (data) {
                  swal({
                    type: 'warning',
                    title: tword('INVALID_AUTH'),
                    html: 'Submitted'
                  });
                },
                404: function () {
                  swal({
                    type: 'warning',
                    title: 'ERROR',
                    text: tword('404_WARNING_REPORT') + tpi,
                    html: 'Submitted'
                  });
                },
                200: function () {},
                201: function () {},
                503: function () {
                  swal({
                    type: 'warning',
                    title: tword('INVALID_URL'),
                    html: 'Submitted'
                  });
                },
                202: function () {}
              },
              success: function (data) {
                loger = JSON.stringify(data);
                var dataroll = 'loger=' + loger;
                $.ajax({
                  type: 'POST',
                  url: "code/SaveZReport.php",
                  data: dataroll,
                  success: function (data) {}
                });
              }
            });
          }, 15000)
        }
      });
    }
  }
  //LABEL PRINT
  $('body').on('touchend click', '#Printlabel', function (e) {
    e.preventDefault();
    var msg = '<body style="width:80mm;"><div style="width:100mm;font-size:' + fontsize + 'pt;"><center><strong>' + window.app.LABELMESSAGE + '</strong></center></div></body>';
    print_iframe_get(msg, null, 0);
    return true;
  });


  
  $('#mainBoxContainer').on('touchend click', "#TABLE", function (e) {
    e.preventDefault();
    $('.panel-wrap2').addClass('checked').css("display", "block").css('transform', 'translateX(0%)');

  });

  $('#mainBoxContainer').on('touchend click', "#QUEUE", function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "QueueManager.proweb",
      data: "action=Page",
      async: false,
      success: function (data) {
        data = JSON.parse(data);
        if (data.status) {
          $('#OrderLogPage').hide();
          $('#Admin').hide();
          $('#productsettings').hide();
          $('#FooterBar').hide();
          $('#HistoryButtons').hide();
          $('#QueuePage').show();
          updateQueueNumbers(data);
          if (data.queueStarted) {
            $('#QueueStartButton').prop('disabled', true);
            $('#QueueCloseButton').prop('disabled', false);
            if (!queue.started) {
              queue.started = true;
            }
            clearInterval(queue.checkQueueInterval);
            queue.checkQueueInterval = setInterval(checkQueue, queue.checkQueueIntervalTime);
          } else {
            $('#QueueStartButton').prop('disabled', false);
            $('#QueueCloseButton').prop('disabled', true);
            $('#QueueNextButton').prop('disabled', true);
          }
          if (queue.waiting > 0) {
            $('#QueueNextButton').prop('disabled', false);
            updateQueueWaitingList();
            if (queue.servingTimer === null) {
              queue.servingTimer = setInterval(updateServingTimer, queue.updateServingTimeInterval);
            }
          }
        } else {
          swal('ERROR', 'Coulnd\'t reach queue manager');
        }
      }
    });
  });

  $('#mainBoxContainer').on('touchend click', "#QueueNextButton", function (e) {
    e.preventDefault();
    $('#QueueNextButton').prop('disabled', true);
    $.ajax({
      type: 'POST',
      url: "QueueManager.proweb",
      data: "action=Next",
      async: false,
      success: function (data) {
        data = JSON.parse(data);
        if (data.status) {
          queue.refreshTimer = true;
          queue.refreshWaitingList = true;
          updateQueueNumbers(data);
        } else {
          swal('ERROR', data.message);
        }
      }
    });
    setTimeout(function () {
      if (queue.waiting > 0) {
        $('#QueueNextButton').prop('disabled', false);
      }
    }, 5000);
  });

  $('#mainBoxContainer').on('touchend click', "#QueueStartButton", function (e) {
    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: "QueueManager.proweb",
      data: "action=Start",
      async: false,
      success: function (data) {
        data = JSON.parse(data);
        if (data.status) {
          $('#QueueStartButton').prop('disabled', true);
          $('#QueueCloseButton').prop('disabled', false);
          $('#QueueNextButton').prop('disabled', false);
          if (!queue.started) {
            queue.started = true;
            if (data.lastNumber == data.currentOrder) {
              queue.refreshTimer = true;
              queue.checkQueueInterval = setInterval(checkQueue, queue.checkQueueIntervalTime);
            } else if (queue.servingTimer === null) {
              queue.servingTimer = setInterval(updateServingTimer, queue.updateServingTimeInterval);
            }
            updateQueueNumbers(data);
          }
        } else {
          swal('ERROR', data.message);
        }
      }
    });
  });

  $('#mainBoxContainer').on('touchend click', "#QueueCloseButton", function (e) {
    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: "QueueManager.proweb",
      data: "action=Close",
      async: false,
      success: function (data) {
        data = JSON.parse(data);
        if (data.status) {
          swal(tword('SUCCESS'), tword('QUEUING_CLOSED'));
          if (queue.started) {
            $('#QueueStartButton').prop('disabled', false);
            $('#QueueCloseButton').prop('disabled', true);
            queue.started = false;
            updateQueueNumbers(data);
          }
        } else {
          swal('ERROR', data.message);
        }
      }
    });
  });

  function checkQueue() {
    $.ajax({
      type: 'POST',
      url: "QueueManager.proweb",
      data: 'action=checkQueue',
      success: function (data) {
        data = JSON.parse(data);

        if (data.status) {
          if (data.queueStarted) {
            if (!queue.started) {
              queue.started = true;
              queue.checkQueueInterval = setInterval(checkQueue, queue.checkQueueIntervalTime);
            }
            if (data.lastNumber > queue.lastNumber) {
              queue.newCustomer = true;
              if (queue.waiting === 0) {
                queue.refreshTimer = true;
              }
            }
          } else if (queue.waiting <= 0) {
            clearInterval(queue.checkQueueInterval);
          }
          updateQueueNumbers(data);
        } else {
          alert(tword('QUEUING_CLOSED'));
        }
      }
    });
  }

  function updateServingTimer() {
    var currentTime = new Date();
    var diff = ((currentTime - queue.servingTime) / 1000);
    var second = parseInt(diff % 60);
    var minute = parseInt((diff / 60) % 60);
    var hour = parseInt((diff / 3600));
    $('#serving-timer').html((hour <= 9 ? '0' + hour : hour) + ':' + (minute <= 9 ? '0' + minute : minute) + ':' + (second <= 9 ? '0' + second : second));
  }

  function updateQueueWaitingList() {
    var WaitingListContent = '';
    for (var i = queue.currentOrder + 1; i <= queue.lastNumber; i++) {
      WaitingListContent += '<li>Ticket :' + i + '</li>';
    }
    $('#QueueList ul').html(WaitingListContent);
  }

  function updateQueueNumbers(data) {
    queue.lastNumber = data.lastNumber;
    queue.currentOrder = data.currentOrder;
    queue.waiting = queue.lastNumber - queue.currentOrder;

    $('#QueueCurrentOrder').html(queue.currentOrder);
    $('#QueueList span').html(queue.waiting);
    $('#QueueInfo p b').html(queue.currentOrder);

    if (queue.waiting <= 0) {
      $('#QueueNextButton').prop('disabled', true);
      queue.servingTime = new Date();
      clearInterval(queue.servingTimer);
    } else {
      $('#QueueNextButton').prop('disabled', false);
      if (queue.newCustomer) {
        queue.servingTimer = setInterval(updateServingTimer, queue.updateServingTimeInterval);
      }
    }

    if (queue.newCustomer || queue.refreshWaitingList) {
      updateQueueWaitingList();
      queue.newCustomer = false;
      queue.refreshWaitingList = false;
    }
    if (queue.refreshTimer) {
      queue.servingTime = new Date();
      queue.refreshTimer = false;
    }
  }

  //LOAD CAFE
  $('#mainBoxContainer').on('touchend click', "#CAFE", function (e) {
    e.preventDefault();
    $('.panel-wrap').addClass('checked').css('transform', 'translateX(0%)');
    $('#CAFEHIDE').show();
  });
  $('#mainBoxContainer').on('touchend click', "#CAFEHIDE", function (e) {
    e.preventDefault();
    $('.panel-wrap').removeClass('checked').css('transform', 'translateX(100%)');
    $(this).hide();
  });
  //HoldSale Function
  $('body').on('touchend click', "#HoldSale", function (e) {
    e.preventDefault();
    if (BasketItems != "") {
      swal({
          title: tword('WANT_TO_PRINT_RECEIPT'),
          text: tword('WANT_TO_PRINT_RECEIPT_TEXT'),
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: "btn-danger",
          confirmButtonText: tword('YES_PRINT'),
          cancelButtonText: tword('NO_PRINT'),
          closeOnConfirm: true,
          closeOnCancel: true
        },
        function (isConfirm) {
          if (isConfirm) {
            var discounted = localget('discountAmount') || 0
            localSet('PayType', "NotPaid");
            $('#PmethodNew').html("NotPaid");
            $('#Pmethod').html("NotPaid");
            var price = check_numbers($('#MainTotalFee').html().split('.').join(""));
            var paid = 0
            var val = $(this).attr('data-title');
            var dTime = "";
            var change = check_numbers($('#prices').html() - $('#MainTotalFee').html());
            $('#PaidAmountLabel').html($('#prices').html());
            var orderid = '';
            if ($.cookie('EDITORDER') == 0) {
              DeleteBasket = [];
              DeleteHistory = [];
            }
            var dataroll = '&SequenceNo=' + 1 + '&TotalSale=' + localget('TOTALFEE') + '&DTime=' + val + "&DType=COLLECTION&Phone=" + localget('PHONE') + "&PayType=NotPaid&changeDue=0&basketArray=" + JSON.stringify(BasketItems) + datarollPaymentAut + "&deleteHistory=" + JSON.stringify(DeleteHistory);
            $.ajax({
              type: 'POST',
              url: "ComplateCheckout.proweb",
              async: false,
              data: dataroll,
              success: function (data) {
                orderid = data.replace(/\s/g, "");
                WEBORDERPRINTONLINE(orderid, 'Accepted', '', '', '', "", dTime, "COUNTER", dTime, "", BasketItems, 0, discounted);
              }
            });
          } else {
              DisableButtons();
            if ($.cookie('EDITORDER') == 0) {
              DeleteBasket = [];
              DeleteHistory = [];
            }
            var discounted = localget('discountAmount') || 0
            localSet('PayType', "NotPaid");
            $('#PmethodNew').html("NotPaid");
            $('#Pmethod').html("NotPaid");
            var price = check_numbers($('#MainTotalFee').html().split('.').join(""));
            var paid = 0
            var val = $(this).attr('data-title');
            var dTime = "";
            var change = check_numbers($('#prices').html() - $('#MainTotalFee').html());
            $('#PaidAmountLabel').html($('#prices').html());
            var orderid = '';
            var dataroll = '&TotalSale=' + localget('TOTALFEE') + '&DTime=' + val + "&DType=COLLECTION&Phone=" + localget('PHONE') + "&PayType=NotPaid&changeDue=0&basketArray=" + JSON.stringify(BasketItems) + datarollPaymentAut + "&deleteHistory=" + JSON.stringify(DeleteHistory);
            $.ajax({
              type: 'POST',
              url: "ComplateCheckout.proweb",
              async: false,
              data: dataroll,
              success: function (data) {}
            });
            CLOSECALL();
          }
        });
    }
    // END OF HOLDSALE
  });
  
  if ( window.app.DISCOUNTLIST.length > 0 &&  typeof (window.app.DISCOUNTLIST[0].dtype) != undefined && window.app.DISCOUNTLIST[0].dtype   != null) {
    var data = window.app.DISCOUNTLIST;
    Dis = window.app.DISCOUNTLIST;
  }
  
  
  $('body').on('touchend click', ".HomeBackAll", function (e) {
    mergeid = 0;
    MergeStartPHONE();
  });

  function MergeStartPHONE() {
    $('#OrderLogPage').css('display', 'none');
    $('#Admin').css('display', 'none');
    CheckCallerID();
    $('#productbuttons').css('display', 'block');
    $('#productlayout').removeClass('col-md-12');
    $('#productlayout').addClass('col-md-10');
    $('#productlayout').removeClass('col-sm-12');
    $('#productlayout').addClass('col-sm-10');
    $('#productlayout').html('');
    $("<ul/>", {
      "class": "productInfo",
      html: '<div>'+ tword('SELECT_BRACH') +'</div>'
    }).appendTo("#productlayout");
    $('.productInfo li').hide();
    $('.productInfo li:lt(24)').show();
    var MainID = window.app.MAINSELECT;
    if ((MainID) == 'null') {
      MainID = 12;
    }
    localSet("METHOD", "COLLECTION");
    var MergeCategories = window.app.SYSTEMMERGECAT.split(",")
    var cate = [];
    var fpro = '';
    var counterr = 0;
    $.each(MergeCategories, function (key, vale) {
      cate = cate + ("<button class='catitemsMerge' style='color: #fff;font-size: 21PX;text-transform: uppercase !important;height: 75px;margin: 2px;width: 193px;background-color: #ab2155;white-space: normal;text-overflow: ellipsis;display: block;float: left;border-radius: 5px !important;' id='" + counterr + "' title='" + vale + "' >" + vale + "</button>");
      counterr++;
    });
    $('#productCat').html('');
    $("<div/>", {
      "class": "categories",
      html: cate
    }).appendTo("#productCat").show();
    $("#productCat").css('display', 'block !important');
    $('.ui-keyboard').remove();
    //  getproducts(MainID, "", 0);
  }
  $('#productsettings').on('touchend click', ".catitemsMerge", function (e) {
    e.preventDefault();
    var id = $(this).attr('id');
    mergeid = id;
    StartPHONE();
  });
  // Start the System
  function StartPHONE() {

    var MainID = window.app.MAINSELECT;
    if ((MainID) == 'null') {
      MainID = 4;
    }
    localSet("METHOD", "COLLECTION");
    $('#OrderLogPage').css('display', 'none');
    $('#Admin').css('display', 'none');


    // ASLAN 28/04/2021 user base price fetch
    if (window.app.LEVELNAVIGATION == "Yes") {
      level = 1;
      parentcat = 0;
    } else {
      level = 2;
      parentcat = 1
    }
    CheckCallerID();
    GetCategories(level, parentcat);

    getproducts(MainID, "", 0);


  }
  //END STARTPHONE FUNCTION
  $('#productsettings').on('touchend click', ".deals", function (e) {
    e.preventDefault();
    getDeals();
  });

  function getDeals() {
    LoadDeals(0);
  }

  function LoadDeals(from) {
    data = dataDEALS[mergeid];
    var items = '<section class="swiper-container-deal"><div class="swiper-scrollbar"></div><div class="swiper-wrapper">';
    var topsp = 1;
    $.each(data.name, function (key, val) {

      if (topsp == 1) {
        items = items + '<div class="swiper-slide">';
      }

      if (window.app.EATINPRICE == "Yes") {
        items = items + ('<li id="' + key + '"><button class="btn btn-primary hvr-shutter-out-horizontal dealbasket" data-title="1" data-listing="' + val.ExtraList + '" data-pname="' + val.name + '" data-price=' + val.price + ' data-eatprice=' + val.eatprice + ' data-itemids="' + val.id + '" data-ref="' + val.ref + '"  >' + val.name + '</button></li>');
      } else {
        items = items + ('<li id="' + key + '"><button class="btn btn-primary hvr-shutter-out-horizontal dealbasket" data-title="1" data-listing="' + val.ExtraList + '" data-pname="' + val.name + '" data-price=' + val.price + '  data-itemids="' + val.id + '" data-ref="' + val.ref + '"  >' + val.name + '</button></li>');
      }

      if (topsp == 24) {
        items = items + '</div>';
        topsp = 1;
      } else {
        topsp++;
      }

    });
    $('#productlayout').html('');
    $("<ul/>", {
      "class": "productInfo",
      html: items
    }).appendTo("#productlayout");
    new Swiper({
      el: '.swiper-container-deal',
      initialSlide: 0,
      spaceBetween: 50,
      slidesPerView: 1,
      centeredSlides: false,
      slideToClickedSlide: true,
      autoHeight: true,
      grabCursor: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: {
        enabled: true,
      },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      a11y: {
        containerMessage: 'Example content',
        containerRoleDescriptionMessage: 'carousel',
        itemRoleDescriptionMessage: 'slide',
      },
    });
  }

  function getproducts(id, icon, from) {
    if (id == 0) {
      id = 2;
      icon = "../images/products/kebabs/fast.png";
    }
    $('.loadless').css('pointer-events', 'auto');
    $('.loadless').css('opacity', '1');
    $('.currentCat').attr('id', id);
    $('.currentCat').attr('data-title', icon);
    $('.currentCat').attr('data-from', 24);
    var sizesAll = 0;
    var items = '<section class="swiper-container-pro"><div class="swiper-scrollbar"></div><div class="swiper-wrapper">';
    var w = "width:60%";
    var i = from + 1;
    var settings = '';
    data = jQuery.parseJSON(dataProducts[mergeid]);
    var topsp = 1;
    $.each(data.name[id], function (key, vale) {
      var prices = [];
      var hasextra = 0;
      var title = "";
      var selectqty = "";
      var itemVal = 0;
      var itemref = 0;
      var unitprice = 0;
      var type = "";
      var typecheck = '';
      var desc = '';
      var priceList = '';
      var numDeg = 0;
      var colors;
      var image = '';
      sizesAll = 0;

      if (window.app.EATINPRICE == "Yes" && localget('METHOD') != "DELIVERY") {
        $.each(data.name[id][key], function (index, value) {
          if (value['eatinprice'] > 0 && value["eatintype"] != 0) {
            sizesAll += 1;
          }
        });
      } else {
        $.each(data.name[id][key], function (index, value) {
          if (value['ovalue'] > 0 && value["type"] != 0) {
            sizesAll += 1;
          }
        });
      }

    
    //   data.name[id][key].sort(function(a, b){
    //             const matchextra = dataEXTRAS[0]["SIZE"].filter(item1 => item1.ovalue === a.type);
    //             const matchextra1 = dataEXTRAS[0]["SIZE"].filter(item1 => item1.ovalue === b.type);
    //             var ord = 0;
    //             var ord1 = 0;
    //              if(matchextra.length > 0)
    //                 {
    //                     ord = matchextra[0].ord;
    //                 }
    //             if(matchextra1.length > 0)
    //                 {
    //                     ord1 = matchextra1[0].ord;
    //                 }
    //              return (ord > ord1) ? 1 : -1;
    //       }); 



      $.each(data.name[id][key], function (keys, val) {
        //   console.log(val);
        if (window.app.EATINPRICE == "Yes" && localget('METHOD') != "DELIVERY") {
          unitprice = val['eatinprice'];
          typecheck = val["eatintype"].replace('"', '');
          typecheck = typecheck.replace(".", "");
        } else {
          unitprice = val['ovalue'];
          typecheck = val["type"].replace('"', '');
          typecheck = typecheck.replace(".", "");
        }
        if (unitprice > 0 && typecheck != 0) {
          type = typecheck.replace('"', '');
          type = type.replace(".", "");
          numDeg = 1;
          hasextra = val.colour || 0;
          if (sizesAll == 1) {
            prices = '';
            title = val["colour"];
          } else {
            prices = prices + ("<button data-hasextra='" + hasextra + "' data-ord='" + keys + "' data-dtype='" + type + "' data-selectqty='" + val['selectqty'] + "' data-dealoffer='" + val['dealoffer'] + "' data-cat='" + id + "' data-settings='" + val['settings'] + "' data-pname='" + key + "' data-desc='"+val.desc +"'   class='btn btn-primary hvr-shutter-out-horizontal SaveItem productbutton' id='" + val['item_id'] + "' title='" + val['colour'] + "' value='" + unitprice + "' data-ptype='" + type + "' data-dealitem='' data-itemids='" + val['item_id'] + "'  >" + type.replace('"', '') + " £" + unitprice + "</button> ");
            title = 1;
          }

          colors = ''; 
          if (typeof (val.color) != undefined && val.color != "0") {
            colors = "background: "+ val.color +" !important;"
          }

          if (window.app.SHOWPRICEONBUTTON == "Yes") {
            priceList = priceList + " " + type + ' ' + unitprice + " | ";
          }
          desc = val.desc;
          settings = val['settings'];
          selectqty = val["selectqty"];
          itemVal = unitprice;
          itemref = val.item_id;
        }
      });
      if (numDeg == 1) {
        if (topsp == 1) {
          items = items + '<div class="swiper-slide">';
        }
      
        if(window.app.SHOW_PRODUCT_IMAGE_ON_PHONE == "Yes"){
            if(vale[0].image != ''){
              colors = "background-image : url('../" + vale[0].image + " ') !important; background-size: cover !important; margin-bottom:10px;";
            }else{
              colors = "background-image : url('/_assets/images/no-image.jpg') !important; background-size: cover !important; margin-bottom:10px;";
            }
        }
       
        items = items + (`<li id="${key}"><button class="btn btn-primary hvr-shutter-out-horizontal addbasket productbutton ${window.app.SHOW_PRODUCT_IMAGE_ON_PHONE == "Yes" ? 'wimages' : ''}" style="${colors}" data-desc="${desc}" data-title="${title}" data-dtype="${type}" data-settings="${settings}"  data-price='${itemVal}' data-str="${prices}" data-cat="${id}" data-pname="${key.replace('&', '').replace("amp;", "and")}" data-itemids="${itemref}" data-hasextra="${hasextra}">
            ${ window.app.SHOW_PRODUCT_IMAGE_ON_PHONE == "Yes" ?  '<span style="height:50px;font-weight:bold">'+key+'</span>' : key } 
        
        <br/>
        
        ${ priceList != '' ? '<span id="PriceList" style="font-size: 16px;color: yellow;">' + priceList + '</span>' : '' }
        
        </button></li>`);

        if (topsp == window.app.MaxProduct) {
          items = items + '</div>';
          topsp = 1;
        } else {
          topsp++;
        }

      }
      //items.push("<li id='" + key + "'><div class='iconflot'><div class='count'>"+i+"</div><div class=''><img src='"+icon+"'></div></div><div class='prow'><h2 class='product-name' style='"+w+"'>"+key +"</h2>"+ prices+"</div></li>" );
      i++;
    });
 
    items = items + '<div class="swiper-pagination"></div></section>';
    $('#productbuttons').css('display', 'block');
    $('#productlayout').removeClass('col-md-12');
    $('#productlayout').addClass('col-md-10');
    $('#productlayout').removeClass('col-sm-12');
    $('#productlayout').addClass('col-sm-10');
    $('#productlayout').html('');
    $("<ul/>", {
      "class": "productInfo",
      html: items
    }).appendTo("#productlayout");
    // $('.productInfo li').hide();
    // $('.productInfo li:lt(24)').show();
    new Swiper({
      el: '.swiper-container-pro',
      initialSlide: 0,
      spaceBetween: 50,
      slidesPerView: 1,
      centeredSlides: false,
      slideToClickedSlide: true,
      autoHeight: true,
      grabCursor: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: {
        enabled: true,
      },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      a11y: {
        containerMessage: 'Example content',
        containerRoleDescriptionMessage: 'carousel',
        itemRoleDescriptionMessage: 'slide',
      },
    });
  }
  $('body').on('touchend click', ".siteonof", function (e) {
    e.preventDefault();
    var status = $(this).attr('data-status');
    var dataroll = "status=" + status;
    if (status == "No") {
      swal({
          title: tword('ARE_YOU_SURE'),
          text: tword('NOT_TAKE_ORDER_TEXT'),
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: tword('TURN_ONLINE_ORDERS'),
          closeOnConfirm: false
        },
        function () {
          $.ajax({
            type: 'POST',
            url: "WebSiteStatus.proweb",
            data: dataroll,
            async: false,
            success: function (data) {
              swal(tword('SITE_STATUS'), tword('SITE_STATUS_TEXT'), "warning");
            }
          });
          $.ajax({
            type: 'POST',
            url: "CheckDbSet.proweb",
            data: dataroll,
            async: false,
            success: function (data) {
              location.reload();
            }
          });
        });
    } else {
      $.ajax({
        type: 'POST',
        url: "WebSiteStatus.proweb",
        data: dataroll,
        async: false,
        success: function (data) {
          swal(tword('SITE_ONLINE'), tword('SITE_ONLINE_TEXT'), "info");
        }
      });
      $.ajax({
        type: 'POST',
        url: "CheckDbSet.proweb",
        data: dataroll,
        async: false,
        success: function (data) {
          location.reload();
        }
      });
    }
  });
  
  
  
  $('body').on('touchend click', "#SendSMS", async function (e) {
    e.preventDefault();
    var urladd = "code/totalMobile.php";
    var dataroll = '';
    var TotalMobiles = AjaxCall(urladd, dataroll);
    var TotalMobile = TotalMobiles.split(",");
    var smsCredit = 0;
    var domain = document.domain;
    var tel = window.app.TEL;
    var organisator = window.app.ORGANISATOR || "ONLINEORDER";
    var price_list = await fetch('https://meditastes.com/efiles/pwd_sms.php')
              .then((response) => response.json())
              .then((data) =>  {
                 return data;
              });
    
    var price_options =  '<select name="os0">';
        for(let i = 0;i < price_list.length;i++){
            price_options += '<option value="'+price_list[i]["qty"]+'">' + price_list[i]["qty"] + ' £ ' + price_list[i]["name"] + '</option>';
        } 
    price_options += '</select>';
    console.log(TotalMobile[1])
    
    if(TotalMobile[1] < 100){
        alert('Your sms credit has dropped below 100. You can contact us.');
    }
    
   
    
    var content = '<style>.paypalForm select,.paypalForm select option{color:black;}</style><div style="float:left; width:50%;"><h1 style="color:#fff;">'+ tword('PLEASE_ENTER_MESSAGE') +'</h1><input type="text" class="msg"  style="height: 71px !important;  margin: 10px 1px;  width: 66%;" ><button class="btn btn-primary hvr-shutter-out-horizontal SendSMS" ><span aria-hidden="true" class="glyphicon glyphicon-remove-circle"></span>Send SMS</button><div id="smsCount"><ul id="sms-counter">	<li>Character Count: <span class="SMSlength"></span></li><li>Messages: <span class="smsmessages"></span></li><li>Total SMS: <span class="per_message"></span></li><li>Remain: <span class="smsremaining"></span></li></ul></div><div class="smsTemplates"><ul><li>Message Content:<span id="temp1">Dear Customer of ' + organisator + '. Order from us directly on www.' + domain + ' and receive 10% Discount. We will be closing our JustEat Account Soon</span><button class="SMSbutton" id="sms1" data-sms="temp1">Select Template</button></li><li>Message Content:<span id="temp2">Dear Customer of ' + organisator + '. Order from us directly on www.' + domain + ' and receive 10% Discount.</span><button class="SMSbutton" id="sms2" data-sms="temp2">Select Template</button></li><li>Message Content:<span id="temp3">Treat yourself to a tasty kebab Life€™s too short for boring food You can order directly on www.' + domain + ' or call our branch ' + tel + '</span><button class="SMSbutton" id="sms3" data-sms="temp3">Select Template</button></li></ul></div></div><div style="float:left;color:#fff;"><ul id="smssettings"><li>SMS Credit: <span id="smsCredit"></span></li><li>Total Mobile: <span id="totalMobile"></span></li><li>Organisator: <span id="smsFrom"></span></li></ul><div class="paypalForm" ><h1>Buy SMS Credit</h1><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="L4443BD7ETW9J"><table><tr><td><input type="hidden" name="on0" value="SMS Quantity">SMS Quantity</td></tr><tr><td>'+ price_options +' </td></tr></table><input type="hidden" name="currency_code" value="GBP"><input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"></form></div></div><script>$(function(){$(".msg").keyboard({layout : "qwerty",accepted : function(e, keyboard, el){ var sms = el.value.length; messages = Math.ceil(sms / 160); remaining = messages * 160 - (sms % (messages * 160) || messages * 160); $(".SMSlength").html(sms); $(".smsmessages").html(el.value); $(".per_message").html(messages);  $(".smsremaining").html(remaining);  } });});';
    $('#ReportArea').html(content).show();
    $("#smsFrom").html(organisator);
    $("#totalMobile").html(TotalMobile[0]);
    $("#smsCredit").html(TotalMobile[1]);
    if (TotalMobile[1] == 0) {
      swal(tword('SMS_CREDIT'), tword('SMS_CREDIT_TEXT'), "warning");
      $('.SendSMS').remove();
      $('.SMSbutton').remove();
    }
  });
  
  
  $('body').on('touchend click', ".SendSMS", function (e) {
    e.preventDefault();
    let totalmobile = $("#totalMobile").html()
    if(totalmobile < 5){
        alert('Your sms credit has dropped below 1. You can contact us.');
        return;
    }
    var msg = $('.msg').val();
    var organisator = $('#smsFrom').html();
    var smsCredit = parseInt($('#smsCredit').html());
    if (smsCredit == 0) {
        swal(tword('SMS_CREDIT'), tword('SMS_CREDIT_TEXT'), "warning");
    }
    let options = ''
    if (totalmobile > 50) {
      var i = 0;
      for (i; i <= totalmobile; i = i + 50) {
        options += '<option value="' + i + '">' + i + '</option>'
      }

      if (totalmobile - (i - 50) > 0) {
        options += '<option value="' + totalmobile + '">' + totalmobile + '</option>'
      }
    } else {
      options += '<option value="0">0</option>'
      options += '<option value="' + totalmobile + '">' + totalmobile + '</option>'
    }


    var swalform = '<br/><label> '+ tword('FROM') +'</label><select name="swalfrom" id="fromSMS">' + options + '</select><label> '+ tword('TO') +'</label><select name="swalfrom" id="fromTo">' + options + '</select>';
    let data;
    swal({
      html: true,
      title: tword('SMS_MESSAGE'),
      text: tword('SMS_CONTENT')+":" + msg + "<br/>"+ tword('TOTAL_AVAIBLE_CREDIT') +": " + smsCredit + " " + swalform,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: tword('SEND_SMS'),
      closeOnConfirm: true,
      showLoaderOnConfirm: true
    }, function () {
      var from = $("#fromSMS option:selected").val();
      var to = $("#fromTo option:selected").val();
      var urladd = "code/smssender.php";
      var dataroll = '&msg=' + msg + "&from=" + from + "&to=" + to + "&organisator=" + organisator;
        data = jQuery.parseJSON(AjaxCall(urladd, dataroll));
      $('.sweet-overlay').hide();
      $('.sweet-alert').hide();
      $('#smsCredit').html(($('#smsCredit').html() - data.tops))
         Swal.fire(tword('SMS_RESULT'), data.message, 'success')
    });
   
  });
  $('body').on('touchend click', ".SMSbutton", function (e) {
    e.preventDefault();
    var temp = $(this).attr('data-sms');
    var msg = $('#' + temp).html();
    var organisator = $('#smsFrom').html();
    let totalmobile = $("#totalMobile").html()
    var smsCredit = parseInt($('#smsCredit').html());
    if (smsCredit == 0) {
      swal(tword('SMS_CREDIT'), tword('SMS_CREDIT_TEXT'), "warning");
    }
    let options = ''
    if (smsCredit > totalmobile) {
      if (totalmobile > 50) {
        var i = 0;
        for (i; i <= totalmobile; i = i + 50) {
          options += '<option value="' + i + '">' + i + '</option>'
        }
        if (totalmobile - i > 0) {
          options += '<option value="' + totalmobile + '">' + totalmobile + '</option>'
        }
      } else {
        options += '<option value="0">0</option>'
        options += '<option value="' + totalmobile + '">' + totalmobile + '</option>'
      }
    } else {
      if (smsCredit > 50) {
        var i = 0;
        for (i; i <= smsCredit; i = i + 50) {
          options += '<option value="' + i + '">' + i + '</option>'
        }
        if (smsCredit - i > 0) {
          options += '<option value="' + smsCredit + '">' + smsCredit + '</option>'
        }
      } else {
        options += '<option value="0">0</option>'
        options += '<option value="' + smsCredit + '">' + smsCredit + '</option>'
      }
    }

    var swalform = '<br/><label> '+ tword('FROM') +'</label><select name="swalfrom" id="fromSMS">' + options + '</select><label> '+ tword('TO') +'</label><select name="swalfrom" id="fromTo">' + options + '</select>';
    swal({
      html: true,
      title: tword('SMS_MESSAGE'),
      text: tword('SMS_CONTENT') +":" + msg + "<br/>"+ tword('TOTAL_AVAIBLE_CREDIT') +": " + smsCredit + " " + swalform,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: tword('SEND_SMS'),
      closeOnConfirm: true,
      showLoaderOnConfirm: true
    }, function () {
      var from = $("#fromSMS option:selected").val();
      var to = $("#fromTo option:selected").val();
      var urladd = "code/smssender.php";
      var dataroll = '&msg=' + msg + "&from=" + from + "&to=" + to + "&organisator=" + organisator;
      $('.sweet-overlay').hide();
      $('.sweet-alert').hide();
      var data = AjaxCall(urladd, dataroll);
      swal(tword('SMS_RESULT'), data, "success");
    });
  });
  $('body').on('touchend click', "#issueRefund", function (e) {
    e.preventDefault();
    if (window.app.ACTIVEREFUND == 'Yes') {
      var content = '<h1 style="color:#fff;">'+ tword('ENTER_ORDER_ID') +'</h1><input type="text" class="msg"  style="height: 71px !important;  margin: 10px 1px;  width: 66%;" ><button class="btn btn-primary hvr-shutter-out-horizontal SearchOrder" ><span aria-hidden="true" class="glyphicon glyphicon-remove-circle"></span>SEARCH ORDER</button><script>$(function(){$(".msg").keyboard({layout : "qwerty"});});';
      $('#ReportArea').html(content).show();
    }
  });
  $('body').on('touchend click', ".SearchOrder", function (e) {
    e.preventDefault();
    var id = $('.msg').val();
    var urladd = "RefundLog.proweb";
    var dataroll = '&orderid=' + id;
    var data = jQuery.parseJSON(AjaxCall(urladd, dataroll));
    if (data == "" || data == null) {
      swal(tword('NO_DATA'), tword('NO_DATA_TEXT') + ": " + id, "warning");
    } else {
      var total = 0;
      var cardfee = 0;
      var dcharge = 0;
      var discount = 0;
      var CrossRefference = '';

      total = check_numbers(val.Total).toFixed(2);
      swal({
        title: tword('REFUND_ORDER') +": " + id,
        text: tword('REFUND_ORDER_TEXT') + total,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: tword('PROCESS_REFUND'),
        closeOnConfirm: false
      }, function () {
        var dstring = "&OrderID=" + id + "&ProTWcd=R12";
        $.ajax({
          type: 'POST',
          url: "RefundCheck.proweb",
          data: dstring,
          async: false,
          success: function (data) {
            swal({
              title: tword('REFUND_RESULT'),
              html: true,
              text: data,
              type: "info"
            });
          }
        });
      });
    }
  });
  $('body').on('touchend click', "#RefundOrders", function (e) {
    e.preventDefault();
    var urladd = "GetRefundLog.proweb";
    var dataroll = '';
    var data = jQuery.parseJSON(AjaxCall(urladd, dataroll));
    var blockpan = '<style>#PrintListings { width:100%;}#PrintListings td { font-size: 15px;}</style><button id="issueRefund">'+tword('REFUND_A_SALE') +'</button>';
    if (data == "") {
      swal(tword('NO_DATA'), tword('NO_DATE_REFUND_TEXT'), "info");
      $('#online').click();
    } else {
      blockpan += '<h1>'+ tword('2_WEEK_REFUND_LIST') +'</h1><table id="PrintListings"><tr><th>'+ tword('NAME') +'</th><th>'+ tword('ORDER_ID') +'</th><th>'+ tword('DATE') +'</th><th>'+tword('RESULT') +'</th><th>Total</th><th>Tel</th><th>'+tword('TRANSACTION_ID') +'</th></tr>';
      $.each(data.orders, function (key, val) {
        var c = ''
        if (val.refunded == 30) {
          c = 'style="background-color:red; color:#fff;"';
        } else if (val.refunded == 20 || val.refunded == 0) {
          c = 'style="background-color:green; color:#fff;"';
        }
        var cross = val.crossref.split("<br />");
        cross = cross[1].split(":");
        if (cross[0] == "Message") {
          cross = val.crossref.split("<br />");
          cross = cross[3].split(":");
          var total = check_numbers(parseInt(cross[1]) / 100).toFixed(2);
        } else {
          var total = check_numbers(parseInt(cross[1]) / 100).toFixed(2);
        }
        blockpan += '<tr class="block-' + val.txn_id + '"><td ' + c + '>' + val.name + '<br/>' + val.street + ' ' + val.postcode + '</td><td ' + c + '>' + val.orderid + '</td><td ' + c + '>' + val.adddate + '</td><td ' + c + '>' + val.crossref + '</td><td ' + c + '>' + total + '</td><td ' + c + '>' + val.tel + '</td><td ' + c + '>' + val.txn_id + '</td></tr>';
      });
    }
    $('#ReportArea').html(blockpan).show();
  });
  $('body').on('touchend click', "#CustomerBlock", function (e) {
    e.preventDefault();
    var urladd = "code/getblock.php";
    var dataroll = '';
    var data = jQuery.parseJSON(AjaxCall(urladd, dataroll));
    if (data == "") {
      swal(tword('NO_DATA'), tword('NO_DATA_CUSTOMER_BLOCK_TEXT'), "info");
      $('#online').click();
    } else {
      var blockpan = '<table id="PrintListings"><tr><th>'+ tword('NAME') +'</th><th>IP</th><th>'+ tword('ORDER_ID')+'</th><th>'+ tword('ADDRESS') +'</th><th>'+ tword('TEL') +'</th><th>'+ tword('ACTION') +'</th></tr>';
      $.each(data.orders, function (key, val) {
        var classw = val.IP;
        classw = classw.replace(/\./g, '');
        blockpan += '<tr class="block-' + classw + '"><td>' + val.name + '</td><td>' + val.IP + '</td><td>' + val.orderid + '</td><td>' + val.street + ',' + val.postcode + '</td><td>' + val.tel + '</td><td><button title="' + val.IP + '"  class="unblock">Unblock</button></td></tr>';
      });
      $('#ReportArea').html(blockpan).show();
    }
  });
  $('body').on('touchend click', ".unblock", function (e) {
    e.preventDefault();
    var IP = $(this).attr('title');
    var urladd = "code/unblock.php";
    var dataroll = '&IP=' + IP;
    var result = AjaxCall(urladd, dataroll);
    if (result == 1) {
      $('#CustomerBlock').click();
    }
  });

  function AjaxCall(urladd, dataroll) {
      let da= '';
    $.ajax({
      type: 'POST',
      url: urladd,
      data: dataroll,
      async: false,
      success: function (datas) {
             da = datas;
      }
    });
   return  da;
  }
  // CHANGE CATEGORY ITEMS
  $('#productsettings').on('touchend click', ".catitems", function (e) {
    e.preventDefault();
    var level = $(this).attr('data-leve');
    var p = $(this).attr('data-parentcat');

    if (level == 1) {
      GetCategories(2, p);
      return false;
    }

    $('.catitems').removeClass('active');
    $('.JustNo').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    var caticon = $(this).attr('title');
    getproducts(id, caticon, 0);
    $('.QtyButton').attr('data-title', '');
    $('.DeliveryType').attr('data-order', '');
  });
  //DEALBASKET UPDATE 20/04/21
  if (window.app.STEP_BY_STEP_PRODUCT == "Yes") {
    $('#productsettings').on('touchend click', ".dealbasket", function (e) {
      e.preventDefault();
      SelectedProduct = [];
      //SelectedProduct Array Created

      data = dataDEALS[mergeid];



      $('#Note').attr('data-title', 0);
      $('.QtyButton').attr('data-title', 0);
      $('#productlayout').attr('data-title', 0);
      $('.QtyButton').attr('data-optSelect', "");
      var ref = $(this).attr('data-itemids').replace("&", "");
      var id = $(this).attr('data-ref');

      var name = data.name[ref].name;
      var dref = data.name[ref].ref;
      if (catTypes == 0) {
        var price = $(this).attr('data-price');
      } else {
        var price = $(this).attr('data-eatprice');
      }

      if(BasketTotal + check_numbers(price) >= 0){
        BasketTotal += check_numbers(price);
      }else{
        swal({
          html: true,
          title: tword('BASKET_TOTAL_ERROR'),
          text: tword('BASKET_TOTAL_ERROR_TEXT'),
          type: "error",
          showConfirmButton: true
        });
      }
      var listing = $(this).attr('data-listing');
      BasketItems.unshift({
        keyNo: 0,
        name: name,
        price: price,
        step: 9,
        uid: ref,
        qty: 1,
        catid: 0,
        ref: ref,
        settings: '',
        ditemids: "",
        dealprice: "",
        type: "deal",
        item_desc: clean(data.name[ref].listing),
        deal: 1,
        pcart: [],
        data: []
      });
      var itdescle = BasketItems.length;
      for (var i = 0; i < itdescle; i++) {
        BasketItems[i]["keyNo"] = i;
      }
      UpdateBasket(BasketItems);


      var prod = dataEXTRAS[mergeid];



      if (data.name[ref].ExtraList != "") {
        listing = data.name[ref].ExtraList.split(",");
        var counter = 0;
        var id = $('#productlayout').attr('data-title');
        var stCount = 9;
        var exID = $('.DeliveryType').attr('data-title') || id;
        var count = $('.extraOptions' + exID + ' li:last').index() + 1;
        $.each(listing, function (key, val) {
          var order = check_numbers($('.DeliveryType').attr('data-order')) || 0;
          if (!isNaN(order)) {
            count = check_numbers(order + 1);
            $('.DeliveryType').attr('data-order', count);
          }
          var name = val.replace('&', ' and ');
          //  var ref = 0
          counter++;
          stCount++;
          BasketItems[0]['pcart'].push({
            ref: counter,
            catid: 0,
            prie: 0,
            name: name,
            step: stCount,
            uid: ref,
            qty: 1,
            exID: id,
            pcartorder: 0,

          })
        });
        UpdateBasket(BasketItems);
      }





      if (data.name[ref].qty5 != '0') {
        pages = 5;
      } else if (data.name[ref].qty4 != '0') {
        pages = 4;
      } else if (data.name[ref].qty3 != '0') {
        pages = 3;
      } else if (data.name[ref].qty2 != '0') {
        pages = 2;
      } else if (data.name[ref].qty1 != '0') {
        pages = 1;
      }


      //DEAL OPTION 1 ITEMS
      var qty1 = data.name[ref].qty1;

      if (qty1 != 0) {

        var option1 = data.name[ref].option1;

        option1 = option1.split(':');

        if (typeof (option1[1]) == "undefined") {
          option1[1] = "";
        }
        var option1Head = option1[0];
        var OptionItems = option1[1].split('-');
        var OptionsTotal = data.name[ref].settings1;
        var Filters = OptionsTotal.split(',');
        var FilterLenght = Filters.length;
        var Fil = [];
        var Pro = [];
        for (var i = 0; i < FilterLenght; i++) {
          var priceExtra = Filters[i].split(':');
          var fName = priceExtra[0];
          var fMax = priceExtra[1];
          var fFree = priceExtra[2];
          var fPrice = priceExtra[3];
          var fMin = priceExtra[4];
          var fOrder = priceExtra[5];
          var fSkip = priceExtra[6];


          if (typeof (Pro[fOrder]) == "undefined") {
            Pro[fOrder] = [];
          }

          Pro[fOrder].push(prod[fName])

          Fil[fOrder] = {
            keyNo: fOrder,
            fName: fName,
            fMax: fMax,
            fFree: fFree,
            fPrice: fPrice,
            fMin: fMin,
            fOrder: fOrder,
            fSkip: fSkip,
            extras: prod[fName]

          }
        }

        Fil = Fil.filter(function (e) {
          return e
        });
        SelectedProduct.push({
          keyNo: 0,
          itemRef: dref,
          list: [{
            itemName: option1Head,
            totalStep: pages,
            opitcount: Fil.length,
            option: [{
              keyNo: "opt1",
              op: OptionItems,
              step: 1,
              opit: Fil

            }]
          }]


        });

      }
      var qty2 = data.name[ref].qty2;
      if (qty2 != 0) {

        var option1 = data.name[ref].option2;

        option1 = option1.split(':');
        if (typeof (option1[1]) == "undefined") {
          option1[1] = "";
        }
        var option1Head = option1[0];
        var OptionItems = option1[1].split('-');

        var OptionsTotal = data.name[ref].settings2;
        var Filters = OptionsTotal.split(',');

        var FilterLenght = Filters.length;
        var Fil = [];
        var Pro = [];
        for (var i = 0; i < FilterLenght; i++) {
          var priceExtra = Filters[i].split(':');
          var fName = priceExtra[0];
          var fMax = priceExtra[1];
          var fFree = priceExtra[2];
          var fPrice = priceExtra[3];
          var fMin = priceExtra[4];
          var fOrder = priceExtra[5];
          var fSkip = priceExtra[6];


          Fil[fOrder] = {
            keyNo: fOrder,
            fName: fName,
            fMax: fMax,
            fFree: fFree,
            fPrice: fPrice,
            fMin: fMin,
            fOrder: fOrder,
            fSkip: fSkip,
            extras: prod[fName]

          }

        }

        Fil = Fil.filter(function (e) {
          return e
        });
        SelectedProduct.push({
          keyNo: 1,
          itemRef: dref,
          list: [{
            itemName: option1Head,
            totalStep: pages,
            opitcount: Fil.length,
            option: [{
              keyNo: "opt2",
              op: OptionItems,
              step: 2,
              opit: Fil

            }]
          }]


        });
      }
      //STEP 3     
      var qty3 = data.name[ref].qty3;
      if (qty3 != 0) {

        var option1 = data.name[ref].option3;

        option1 = option1.split(':');
        if (typeof (option1[1]) == "undefined") {
          option1[1] = "";
        }
        var option1Head = option1[0];
        var OptionItems = option1[1].split('-');
        if (OptionItems == "") {
          OptionItems[0] = option1[1];
        }


        var OptionsTotal = data.name[ref].settings3;
        var Filters = OptionsTotal.split(',');

        var FilterLenght = Filters.length;
        var Fil = [];
        var Pro = [];
        for (var i = 0; i < FilterLenght; i++) {
          var priceExtra = Filters[i].split(':');
          var fName = priceExtra[0];
          var fMax = priceExtra[1];
          var fFree = priceExtra[2];
          var fPrice = priceExtra[3];
          var fMin = priceExtra[4];
          var fOrder = priceExtra[5];
          var fSkip = priceExtra[6];
          Fil[fOrder] = {
            keyNo: fOrder,
            fName: fName,
            fMax: fMax,
            fFree: fFree,
            fPrice: fPrice,
            fMin: fMin,
            fOrder: fOrder,
            fSkip: fSkip,
            extras: prod[fName]

          }


        }

        Fil = Fil.filter(function (e) {
          return e
        });
        SelectedProduct.push({
          keyNo: 2,
          itemRef: dref,
          list: [{
            itemName: option1Head,
            totalStep: pages,
            opitcount: Fil.length,
            option: [{
              keyNo: "opt3",
              op: OptionItems,
              step: 3,
              opit: Fil

            }]
          }]


        });

      }

      //STEP 4     
      var qty4 = data.name[ref].qty4;
      if (qty4 != 0) {

        var option1 = data.name[ref].option4;

        option1 = option1.split(':');
        if (typeof (option1[1]) == "undefined") {
          option1[1] = "";
        }
        var option1Head = option1[0];
        var OptionItems = option1[1].split('-');
        var OptionsTotal = data.name[ref].settings4;
        var Filters = OptionsTotal.split(',');

        var FilterLenght = Filters.length;
        var Fil = [];
        var Pro = [];
        for (var i = 0; i < FilterLenght; i++) {
          var priceExtra = Filters[i].split(':');
          var fName = priceExtra[0];
          var fMax = priceExtra[1];
          var fFree = priceExtra[2];
          var fPrice = priceExtra[3];
          var fMin = priceExtra[4];
          var fOrder = priceExtra[5];
          var fSkip = priceExtra[6];
          Fil[fOrder] = {
            keyNo: fOrder,
            fName: fName,
            fMax: fMax,
            fFree: fFree,
            fPrice: fPrice,
            fMin: fMin,
            fOrder: fOrder,
            fSkip: fSkip,
            extras: prod[fName]

          }

        }

        Fil = Fil.filter(function (e) {
          return e
        });
        SelectedProduct.push({
          keyNo: 4,
          itemRef: dref,
          list: [{
            itemName: option1Head,
            totalStep: pages,
            opitcount: Fil.length,
            option: [{
              keyNo: "opt4",
              op: OptionItems,
              step: 4,
              opit: Fil

            }]
          }]


        });
      }

      //STEP 5     
      var qty5 = data.name[ref].qty5;
      if (qty5 != 0) {

        var option1 = data.name[ref].option5;

        option1 = option1.split(':');
        if (typeof (option1[1]) == "undefined") {
          option1[1] = "";
        }
        var option1Head = option1[0];
        var OptionItems = option1[1].split('-');
        var OptionsTotal = data.name[ref].settings5;
        var Filters = OptionsTotal.split(',');

        var FilterLenght = Filters.length;
        var Fil = [];
        var Pro = [];
        for (var i = 0; i < FilterLenght; i++) {
          var priceExtra = Filters[i].split(':');
          var fName = priceExtra[0];
          var fMax = priceExtra[1];
          var fFree = priceExtra[2];
          var fPrice = priceExtra[3];
          var fMin = priceExtra[4];
          var fOrder = priceExtra[5];
          var fSkip = priceExtra[6];
          Fil[fOrder] = {
            keyNo: fOrder,
            fName: fName,
            fMax: fMax,
            fFree: fFree,
            fPrice: fPrice,
            fMin: fMin,
            fOrder: fOrder,
            fSkip: fSkip,
            extras: prod[fName]

          }

        }

        Fil = Fil.filter(function (e) {
          return e
        });
        SelectedProduct.push({
          keyNo: 5,
          itemRef: dref,
          list: [{
            itemName: option1Head,
            totalStep: pages,
            opitcount: Fil.length,
            option: [{
              keyNo: "opt5",
              op: OptionItems,
              step: 5,
              opit: Fil

            }]
          }]


        });

      }

      ShowDealItems(0, 0);




    });
    $('#productsettings').on('touchend click', ".DealButton", function (e) {
      e.preventDefault();

      var id = $('.QtyButton').attr('data-title');
      var counter = $(this).attr('data-selected') || 0
      var ex = $('.QtyButton').attr('data-title');

      var count = $('#basketlistitems tr:last').index() + 1;
      if (ex != "") {
        count = ex;
      }
      var step = $(this).attr('data-cstep');
      var optname = $(this).attr('data-optname');
      var maxS = $(this).attr('data-maxs') || 1;
      var frees = $(this).attr('data-free');
      var head = $(this).attr('data-head');
      var name = $(this).attr('data-title').replace('&', ' and ');
      var itemCharge = $(this).attr('data-itemcharge') || 0;
      var ref = $(this).attr('data-ref');
      var subref = step
      var exID = $(this).attr('data-cstep') + ref + subref
      ref = exID.replace(/ /g, '').replace(".", "").replace("&", "");
      var pref = $('.basket' + exID).attr('data-ref');
      var newid = $(this).attr('data-optname').replace(/ /g, '').replace(".", "") + count;

      var speRef = "it" + exID + name.replace(/ /g, '')

      var arrayLen = $.inArray(speRef, ITEMLIMIT);
      var name = $(this).attr('data-title').replace('&', ' and ');

      if (typeof (ITEMLIMIT[id]) == "undefined") {
        ITEMLIMIT[id] = [];
      }
      if (typeof (ITEMLIMIT[id][subref]) == "undefined") {
        ITEMLIMIT[id][subref] = [];
      }
      if (typeof (ITEMLIMIT[id][subref][newid]) == "undefined") {
        ITEMLIMIT[id][subref][newid] = [];
      }


      if ((check_numbers($('#' + id + 'bitemhead .slectDeal[data-optname=' + ref + newid + ']').length)) < maxS) {
        ITEMLIMIT[id][subref][newid].push(name);
      } else {
        swal(tword('ERROR'), tword('ERROR_ITEM_LIMIT_TEXT') + maxS, "warning");
        return false;
      }

      if (optname == "undefined ") {
        var mainSelect = $('.QtyButton').attr('data-optSelect');
        optname = '';
      } else {
        $('.QtyButton').attr('data-optSelect', optname);
        var mainSelect = optname;
      }

      var section = $(this).attr('data-section');
      //Mahir

      var freeSelect = $(this).attr('data-free');
      counter++;
      $('.' + section).attr('data-selected', counter);
      if (typeof (mainSelect) == "undefined") {
        mainSelect = '';
      }

      if (freeSelect >= (check_numbers($('.slectDeal[data-optname=' + ref + newid + ']').length) + 1)) {
        itemCharge = 0;
      }
      var main = $(this).attr('data-main') || 0;
      var proname = $(this).attr('data-title');
      var pdesc = '';
      if (main == 1) {
        name = '<strong>' + name + '</strong>';
        $('.DealButton').removeClass('selecteditem');
        $.get('Product.proweb', function (data) {
          var items = [];
          data = jQuery.parseJSON(data);
          var cat = window.app.PIZZACAT;
          $.each(data.name[cat], function (key, vale) {
            if (proname.replace('&', '&') == key) {
              pdesc = vale[0].desc;
              $('#pdescarea').html(pdesc);
            }
          });
        });
      }
      if ((itemCharge) == "undefined") {
        itemCharge = 0;
      }
      var jn = $('.JustNo.active').attr('id');
      $('.JustNo').removeClass('active');
      if (jn === "No" && typeof (jn) != "undefined") {
        name = "No " + name;
        itemCharge = 0;
      }
      if (jn === "Extra" && typeof (jn) != "undefined") {
        name = "Extra " + name;
      }
      if (jn == "Separate" && typeof (jn) != "undefined") {
        name = "Separate " + name;
      }
      if (jn == "Little" && typeof (jn) != "undefined") {
        name = "Little " + name;
      }
      if (localget("FREE") == 1) {
        itemCharge = 0;
        localSet("FREE", 0);
      }
      if (localget("HALF") == 1) {
        itemCharge = check_numbers(itemCharge / 2);
        localSet("HALF", 0);
      }
      var order = check_numbers($('.DeliveryType').attr('data-order')) || 0;
      if (!isNaN(count)) {
        count = check_numbers(count + 1);
        $('.DeliveryType').attr('data-order', count);
      }
      if(BasketTotal + check_numbers(itemCharge) >= 0){
        BasketItems[id]['pcart'].push({
          ref: ref + newid,
          uid: $(this).attr('data-ref'),
          step: step,
          catid: 0,
          prie: itemCharge,
          name: name,
          main: main,
          newid: newid,
          qty: 1,
          exID: id,
          pcartorder: count,
          subref: subref
        })
  
        BasketTotal += check_numbers(itemCharge);
        UpdateBasket(BasketItems);
      }else{
        swal({
          html: true,
          title: tword('BASKET_TOTAL_ERROR'),
          text: tword('BASKET_TOTAL_ERROR_TEXT'),
          type: "error",
          showConfirmButton: true
        });
      }


      if (NoSub == true) {
        NoSub = false;


      }
      var CurrentPosition = $(this).attr("data-subcurrent");
      var TotalSub = $(this).attr("data-subcount");
      $('.MainItems').hide();
      $('#SubItems' + CurrentPosition).show();
      if ((check_numbers($('.slectDeal[data-optname=' + ref + newid + ']').length)) == maxS) {
        var keyNo = $(this).closest('div').attr('id');
        var keyNo = $('#' + keyNo + " .ContinueArea button").attr('id');
        $('#' + keyNo).click();


      }
    });
  } else {
    $('#productsettings').on('touchend click', ".dealbasket", function (e) {
      e.preventDefault();



      $('#Note').attr('data-title', 0);
      $('.QtyButton').attr('data-title', 0);
      $('#productlayout').attr('data-title', 0);
      var ref = $(this).attr('data-itemids').replace("&", "");

      var id = $(this).attr('data-ref');
      if (catTypes == 0) {
        var price = $(this).attr('data-price');
      } else {
        var price = $(this).attr('data-eatprice');
      }

      var name = $(this).attr('data-pname');

      var listing = $(this).attr('data-listing');
      $('.QtyButton').attr('data-optSelect', "");
      if(BasketTotal + check_numbers(price) >= 0){
        BasketTotal += check_numbers(price);
        BasketItems.unshift({
          keyNo: 0,
          name: name,
          price: price,
          qty: 1,
          catid: 0,
          ref: ref,
          settings: listing,
          item_desc: clean(listing),
          ditemids: "",
          dealprice: "",
          type: "deal",
          deal: 1,
          pcart: []
        });
  
        var itdescle = BasketItems.length;
        for (var i = 0; i < itdescle; i++) {
          BasketItems[i]["keyNo"] = i;
        }
        UpdateBasket(BasketItems);
      }else{
        swal({
          html: true,
          title: tword('BASKET_TOTAL_ERROR'),
          text: tword('BASKET_TOTAL_ERROR_TEXT'),
          type: "error",
          showConfirmButton: true
        });
      }


      data = dataDEALS[mergeid];

      var name = '';

      var dref = '';

      var qty1 = 0;
      var option1 = '';

      var qty2 = 0;
      var option2 = '';

      var listing = '';

      var option3 = '';
      var qty3 = 0;

      var option4 = '';
      var qty4 = 0;
      var option4Head = '';

      var option5 = '';
      var qty5 = 0;

      var ExtraFilters = '';
      var ExtraOvalue = '';


      var optionFilterExtra = "";
      var ItemHeader = '';

      var arFilter = [];
      var arFilter2 = [];
      var Filters = "";

      var OptionsTotal = '';

      var itemDesc = '';
      var optionHeadButtons = '';


      name = data.name[ref].name;


      dref = data.name[ref].ref;

      qty1 = data.name[ref].qty1;
      qty2 = data.name[ref].qty2;


      option1 = data.name[ref].option1;
      ItemHeader = data.name[ref].ItemHeader;
    //   console.log(data.name[ref]);
      if (option1 !== "") {

        OptionsTotal = data.name[ref].settings1;

      }

      if (data.name[ref].settings1 !== "") {
        OptionsTotal = data.name[ref].settings1;
      }

      option2 = data.name[ref].option2;


      if (option2 !== "" || data.name[ref].settings2 !== "") {
        OptionsTotal = OptionsTotal + ',' + data.name[ref].settings2;
      }


      if (data.name[ref].ExtraList != "") {
        listing = data.name[ref].ExtraList.split(",");
        var counter = 0;
        var id = $('#productlayout').attr('data-title');


        var exID = $('.DeliveryType').attr('data-title') || id;
        var count = $('.extraOptions' + exID + ' li:last').index() + 1;
        $.each(listing, function (key, val) {

          var order = check_numbers($('.DeliveryType').attr('data-order')) || 0;


          if (!isNaN(order)) {
            count = check_numbers(order + 1);
            $('.DeliveryType').attr('data-order', count);
          }
          var name = val.replace('&', ' and ');
          var ref = 0
          counter++;

          BasketItems[0]['pcart'].push({
            ref: counter,
            catid: 0,
            prie: 0,
            name: name,
            qty: 1,
            exID: id,
            pcartorder: count
          })

        });

        UpdateBasket(BasketItems);
      }


      itemDesc = data.name[ref].listing;

      option3 = data.name[ref].option3;
      option5 = data.name[ref].extraOPTIONButtons;

      option4 = data.name[ref].option4;
      option5 = data.name[ref].option5;

      qty3 = data.name[ref].qty3;
      qty4 = data.name[ref].qty4;
      qty5 = data.name[ref].qty5;
      ExtraFilters = data.name[ref].ExtraFilters;

      optionFilterExtra = data.name[ref].ExtraList;
      if (option3 !== "" || data.name[ref].settings3 !== "") {
        OptionsTotal = OptionsTotal + ',' + data.name[ref].settings3;
      }
      if (option4 !== "" || data.name[ref].settings4 !== "") {
        OptionsTotal = OptionsTotal + ',' + data.name[ref].settings4;
      }

      if (option5 !== "" || data.name[ref].settings5 !== "") {
        OptionsTotal = OptionsTotal + ',' + data.name[ref].settings5;
      }

      Filters = OptionsTotal.split(',');


      // BOTTLE:1:1:0:0,EXTRA TOPPINGS FOR 12 PIZZA:7:4:1.50:0

      var FilterLenght = Filters.length;

      for (var i = 0; i < FilterLenght; i++) {

        var priceExtra = Filters[i].split(':');


        arFilter[priceExtra[0].replace(/ /g, '')] = priceExtra[3];
        arFilter2[priceExtra[0].replace(/ /g, '')] = priceExtra[2];


      }
      $('#productbuttons').css('display', 'block');

      $('#productlayout').removeClass('col-md-10');

      $('#productlayout').addClass('col-md-12');

      $('#productlayout').removeClass('col-sm-10');

      $('#productlayout').addClass('col-sm-12');

      $('#productbuttons').css('display', 'none');


      if (typeof (option1) != 'undefined' && option1 != "" && option1.indexOf(":") != -1 && option1 != ':') {

        option1 = option1.split(':');
        var option1Head = option1[0];

        var option1Options = option1[1].split('-');

        option1 = '';
        var B = option1Head.replace(/ /g, '');

        $.each(option1Options, function (key, val) {

          option1 = option1 + '<button  data-itemcharge="' + arFilter[B] + '" class="btn DealButton" data-main="1" data-title="' + val + '" data-head="' + option1Head + '" data-optName="' + B + '"  >' + val + '</button>';

        });


        var optionHeadButtons = '<div class="MealButton" id="Meal' + B + '" data-target="' + B + '">' + option1Head + ' Options</div>';
        option1 = '<div class="col-md-12 Options ' + B + '"><div class="OptionHead">' + option1Head + '<span>(Qty:' + qty1 + ')</span></div><div class="col-md-12 col-sm-12">' + option1 + '</div></div>';

      } else {
        option1 = '';
      }

      if (typeof (option2) != 'undefined' && option2 != "" && option2.indexOf(":") != -1 && option2 != ':') {

        option2 = option2.split(':');

        var option2Head = option2[0];

        var option2Options = option2[1].split('-');
        var B = option2Head.replace(/ /g, '');
        option2 = '';

        $.each(option2Options, function (key, val) {

          option2 = option2 + '<button data-optName="' + B + '" data-itemcharge="0" class="btn DealButton" data-main="1" data-title="' + val + '" data-head="' + option2Head + '"  >' + val + '</button>'


        });
        optionHeadButtons = optionHeadButtons + '<div class="MealButton" id="Meal' + B + '" data-target="' + B + '">' + option2Head + ' Options</div>';
        option2 = '<div class="col-md-12 Options ' + B + '"><div class="OptionHead">' + option2Head + '<span>(Qty:' + qty2 + ')</span></div><div class="col-md-12 col-sm-12">' + option2 + '</div></div>';

      } else {

        option2 = '';
      }

      if (typeof (option3) != 'undefined' && option3 != "" && option3.indexOf(":") != -1 && option3 != ':') {

        option3 = option3.split(':');

        var option3Head = option3[0];
        var B = option3Head.replace(/ /g, '');
        var option3Options = option3[1].split('-');

        option3 = '';

        $.each(option3Options, function (key, val) {

          option3 = option3 + '<button data-optName="' + B + '" data-itemcharge="0" class="btn DealButton" data-main="1" data-title="' + val + '" data-head="' + option3Head + '"  >' + val + '</button>';

        });
        optionHeadButtons = optionHeadButtons + '<div class="MealButton" id="Meal' + B + '" data-target="' + B + '">' + option3Head + ' Options</div>';
        option3 = '<div class="col-md-12 Options ' + B + '"><div class="OptionHead" >' + option3Head + '<span>(Qty:' + qty3 + ')</span></div><div class="col-md-12 col-sm-12">' + option3 + '</div></div>';

      } else {

        option3 = '';
      }
      if (typeof (option4) != 'undefined' && option4 != "" && option4.indexOf(":") != -1 && option4 != ':') {

        option4 = option4.split(':');

        var option4Head = option4[0];
        var B = option3Head.replace(/ /g, '');
        var option4Options = option4[1].split('-');

        option4 = '';

        $.each(option4Options, function (key, val) {

          option4 = option4 + '<button data-optName="' + B + '" data-itemcharge="0" class="btn DealButton" data-main="1" data-title="' + val + '" data-head="' + option4Head + '"  >' + val + '</button>';

        });
        optionHeadButtons = optionHeadButtons + '<div class="MealButton" id="Meal' + B + '" data-target="' + B + '">' + option4Head + ' Options</div>';
        option4 = '<div class="col-md-12 Options ' + B + '"><div class="OptionHead" >' + option4Head + '<span>(Qty:' + qty4 + ')</span></div><div class="col-md-12 col-sm-12">' + option4 + '</div></div>';

      } else {

        option4 = '';
      }



      if (typeof (option5) != 'undefined' && option5 != "" && option5.indexOf(":") != -1 && option5 != ':') {

        option5 = option5.split(':');
        var option5Head = option5[0];
        var B = option5Head.replace(/ /g, '');
        var option5Options = option5[1].split('-');

        option5 = '';

        $.each(option5Options, function (key, val) {

          option5 = option5 + '<button data-optName="' + B + '" data-itemcharge="0" class="btn DealButton" data-main="1" data-title="' + val + '" data-head="' + option5Head + '"  >' + val + '</button>';

        });
        optionHeadButtons = optionHeadButtons + '<div class="MealButton" id="Meal' + B + '" data-target="' + B + '">' + option5Head + tword('OPTIONS') + '</div>';
        option5 = '<div class="col-md-12 Options ' + B + '"><div class="OptionHead" >' + option5Head + '<span>(Qty:' + qty5 + ')</span></div><div class="col-md-12 col-sm-12">' + option5 + '</div></div>';

      } else {

        option5 = '';
      }






      var prod = dataEXTRAS[0];
      var FilterLenght = Filters.length;
      var Fil = [];
      for (var i = 0; i < FilterLenght; i++) {
        var priceExtra = Filters[i].split(':');
        var fName = priceExtra[0];
        var fMax = priceExtra[1];
        var fFree = priceExtra[2];
        var fPrice = priceExtra[3];
        var fMin = priceExtra[4];
        var fOrder = priceExtra[5];
        var fSkip = priceExtra[6];
        Fil.push({
          keyNo: fOrder,
          fName: fName,
          fMax: fMax,
          fFree: fFree,
          fPrice: fPrice,
          fMin: fMin,
          fOrder: fOrder,
          fSkip: fSkip,
          extras: prod[fName]

        })
      }

      var itemPalen = '';
      if (Fil != "" && typeof (Fil) != 'undefined') {
        for (var i = 0; i < Fil.length; ++i) {
          if (typeof (Fil[i]) != 'undefined' && typeof (Fil[i]['fName']) != 'undefined' && typeof (Fil[i]['extras']) != 'undefined') {

            var op = Fil[i]['fName'].replace(/ /g, '');

            var ButtList = '';
            for (var b = 0; b < Fil[i]['extras'].length; ++b) {


              if (Fil[i]['extras'][b]['ovalue'] != "") {
                ButtList = ButtList + '<button data-itemcharge="' + Fil[i]['fPrice'] + '" class="btn DealButton" data-main="1" data-title="' + Fil[i]['extras'][b]['ovalue'] + '" data-head="' + Fil[i]['extras'][b]['ovalue'] + '">' + Fil[i]['extras'][b]['ovalue'] + '</button>';
              }
            }

            itemPalen = itemPalen + '<div class="accordion-group YesTopping" style="display: table;" id="T' + op + '"><div class="accordion-heading"> <a class="accordion-toggle collapsed" data-toggle="collapse" data-target="#' + op + '" href="#" aria-expanded="false">' + op + '</a></div><div id="' + op + '" class="collapse out" aria-expanded="false" style=""><div class="accordion-inner">' + ButtList + '</div></div></div>';

          }
        }


      }


      var OptionsMain = '<div class="col-md-12">' + optionHeadButtons + option1 + option2 + option3 + "<div class='col-md-12 extraoptionboxs' style=' width:100%; margin-top:20px;'>" + itemPalen + '</div></div>';


      $('#productlayout').html('<div class="col-md-12 col-sm-12 QtyButton" id="offerHead" data-ref="' + dref + '"><h2>' + name + ' <span>(' + itemDesc + ')</span></h2><span id="pdescarea"></span></div><div class="col-md-12 col-sm-12">' + OptionsMain + option4Head + '</div>');

      $('.productInfo li').hide();

      $('.productInfo li:lt(15)').show();


      // END DEALS


    });
    $('#productsettings').on('touchend click', ".DealButton", function (e) {
      e.preventDefault();
      var id = $('#productlayout').attr('data-title');

      var counter = $(this).attr('data-selected') || 0
      var exID = $('.DeliveryType').attr('data-title') || id;

      var count = $('.extraOptions' + exID + ' li:last').index() + 1;
      var optname = $(this).attr('data-optname') + " ";


      if (optname == "undefined ") {
        var mainSelect = $('.QtyButton').attr('data-optSelect');
        optname = '';
      } else {
        $('.QtyButton').attr('data-optSelect', optname);
        var mainSelect = optname;
      }


      var section = $(this).attr('data-section');
      var freeSelect = $(this).attr('data-freeSelect');
      counter++;
      $('.' + section).attr('data-selected', counter);

      if (typeof (mainSelect) == "undefined") {

        mainSelect = '';
      }
      var head = $(this).attr('data-head');
      var name = $(this).attr('data-title').replace('&', ' and ');
      var itemCharge = $(this).attr('data-itemcharge') || 0;
      var ref = $('#offerHead').attr('data-ref').replace("&", "") + name.replace(/ /g, '');
      if (freeSelect >= counter) {
        itemCharge = 0;
      }
      var main = $(this).attr('data-main') || 0;
      var proname = $(this).attr('data-title');
      var pdesc = '';
      if (main == 1) {
        name = '<strong>' + name + '</strong>';


        $('.DealButton').removeClass('selecteditem');


        $.get('Product.proweb', function (data) {

          var items = [];

          data = jQuery.parseJSON(data);

          var cat = window.app.PIZZACAT;

          $.each(data.name[cat], function (key, vale) {


            if (proname.replace('&', '&') == key) {


              pdesc = vale[0].desc;

              $('#pdescarea').html(pdesc);

            }


          });
        });


      }


      if ((itemCharge) == "undefined") {

        itemCharge = 0;

      }


      var jn = $('.JustNo.active').attr('id');

      if (jn === "No" && typeof (jn) != "undefined") {

        name = "No " + name;

        itemCharge = 0;


      }

      if (jn === "Extra" && typeof (jn) != "undefined") {

        name = "Extra " + name;

      }



      if (jn == "Separate" && typeof (jn) != "undefined") {

        name = "Separate " + name;


      }
      if (jn == "Little" && typeof (jn) != "undefined") {

        name = "Little " + name;


      }

      if ($.cookie("FREE") == 1) {

        itemCharge = 0;

        $.cookie("FREE", 0);

      }

      if ($.cookie("HALF") == 1) {

        itemCharge = check_numbers(itemCharge / 2);

        $.cookie("HALF", 0);

      }


      var order = check_numbers($('.DeliveryType').attr('data-order')) || 0;


      if (!isNaN(order)) {
        count = check_numbers(order + 1);
        $('.DeliveryType').attr('data-order', count);
      }

      if(BasketTotal + check_numbers(itemCharge) >= 0){
        BasketTotal += check_numbers(itemCharge);
        BasketItems[id]['pcart'].push({
          ref: ref,
          catid: 0,
          prie: itemCharge,
          name: name,
          qty: 1,
          exID: id,
          pcartorder: count
        })
  
  
        UpdateBasket(BasketItems);
      }else{
        swal({
          html: true,
          title: tword('BASKET_TOTAL_ERROR'),
          text: tword('BASKET_TOTAL_ERROR_TEXT'),
          type: "error",
          showConfirmButton: true
        });
      }



      //updateTotalArea(itemCharge);


      //	var currentFee = ($('#basketPrice'+exID).html().replace('£ ', ''));

      //		var newPrice = check_numbers(currentFee) + check_numbers(itemCharge);

      // 	$('#basketPrice'+exID).html('£ '+check_numbers(newPrice).toFixed(2));

    });
  }

  //ASLAN DEAL STEP 19/04/21
  function ShowDealItems(step, edit) {
    if (edit == 0) {
      edit = step
    }
    if (typeof (SelectedProduct[step]) != "undefined") {
      var titleArea = '';
      var options = '';
      var dealRef = '';
      var counter = SelectedProduct[step].list[0].opitcount;
      var itemSet = '';
      var itemSetBut = '';
      var optName = '';
      var keyNo = "opt" + edit;
      var contButton = "";
      var backButton = "";
      var itemNames = SelectedProduct[step].list[0].itemName;

      if (itemNames == "") {
        itemNames = tword('DEAL_OPTIONS') + step;
      }
      titleArea =  tword('PLEASE_SELECT') + itemNames;

      dealRef = SelectedProduct[step].itemRef;


      $.each(SelectedProduct[step].list[0].option[0], function (key, val) {


        if (key == "op") {
          $.each(val, function (k, v) {
            var vname = v;
            if (vname == "") {
              vname = "Deal Option"
            }
            var B = vname.replace(/ /g, '');
            B = B.replace("&", '');
            options = options + '<button style="width:16% !important; height:70px !important; font-size:23px"  data-itemcharge="0" class="btn DealButton MainItems" data-ref="' + dealRef + '" data-cStep="' + edit + '" data-optname="' + B + '"  data-head="' + vname + '" data-main="1" data-title="' + vname + '" data-subCount="' + counter + '" data-subCurrent="0" >' + vname + '</button>';
          });
        }
        if (key == "opit") {

          if (val.length != 0) {
            $.each(val, function (k, v) {

              if (typeof (v) != "undefined") {
                itemSet = itemSet + '<div id="SubItems' + k + '" style="width: 100%;height: 455px; display:none;"><h2 style="color: #fff;padding: 40px 0px;">'
                itemSetBut = '';
                var fprice = v.fPrice;
                var fMin = v.fMin;
                var fMax = v.fMax
                var fFree = v.fFree;

                $.each(v.extras, function (key, x) {


                  var B = x.ovalue.replace(/ /g, '');
                  optName = x.fname;

                  if (fprice == "-") {
                    var price = x.price;
                  } else {
                    var price = fprice;
                  }
                  itemSetBut = itemSetBut + '<button style="width:24% !important; height:60px !important; font-size:27px" data-ref="' + dealRef + '" data-free="' + fFree + '" data-itemcharge="' + price + '" data-min="' + fMin + '" data-maxs="' + fMax + '" class="btn DealButton" data-cStep="' + edit + '" data-optname="' + optName + '"  data-head="' + x.ovalue + '" data-main="0" data-title="' + x.ovalue + '" data-keyNo="' + keyNo + '" >' + x.ovalue + '</button>';



                });

                contButton = '<div class="ContinueArea" id="ContinueArea' + k + '"><button class="btn ContinueItems" id="Continue' + k + '" data-cstep="' + edit + '" data-current="' + k + '" data-totalCount="' + counter + '" style="position: absolute;top: 14%;right: 40px;width: 24%;height: 51px;color: #000;font-size: 25px;">Continue</button></div>'
                backButton = '<div class="ContinueArea" id="ContinueArea' + k + '"><button class="btn BACKItems" id="BACK' + k + '" data-cstep="' + edit + '" data-current="' + k + '" data-totalCount="' + counter + '" style="position: absolute;top: 5%;right: 40px;width: 24%;height: 51px;color: #000;font-size: 25px;">BACK</button></div>'

                itemSet = itemSet + optName + "(Max : " + fMax + ")</h2>" + itemSetBut + contButton + backButton + "</div>"

              } //end of undefined


            });
          } else {
            contButton = '<div class="ContinueArea " id="ContinueArea0"><button class="btn ContinueItems" id="Continue0" data-cstep="' + edit + '" data-current="1" data-totalCount="2" style="position: absolute;top: 10%;right: 40px;width: 24%;height: 51px;color: #000;font-size: 25px;">Continue</button></div>'
            backButton = '<div class="ContinueArea " id="ContinueArea0"><button class="btn BACKItems" id="BACK0" data-cstep="' + edit + '" data-current="1" data-totalCount="2" style="position: absolute;top: 5%;right: 40px;width: 24%;height: 51px;color: #000;font-size: 25px;">BACK</button></div>'

            itemSet = itemSet + "</h2>" + contButton + "</div>"
            NoSub = true;
          }
        }






      });
      $('#productlayout').html('<div class="col-md-12 col-sm-12" id="offerHead"  data-ref="' + dealRef + '"><h2>' + titleArea + '<h2></div><div id="OfferOptions">' + options + '</div>' + itemSet);
      $('.productInfo li').hide();
      $('.productInfo li:lt(15)').show();
    } else {
      //     ITEMLIMIT =[];
      $('.deals').click();
    }
  }

  //EDIT DEAL SELECTION 20/04/21 ASLAN

  $('#basketlayout').on('touchend click', ".MainSelect", function (e) {
    e.preventDefault();
    SelectedProduct = [];
    var step = $(this).attr('data-step');
    var id = $('.QtyButton').attr('data-title');
    var pcartord = $(this).attr('data-pcartord');
    var ref = $(this).attr('data-ref');
    var uid = '';

    var keyNo = $(this).closest('tr').attr('id');
    $('#productlayout').attr('data-title', keyNo);


    swal({
        title: tword('ARE_YOU_SURE'),
        text: tword('DELETE_SELECTED_PART_OFFER'),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: tword('EDIT'),
        closeOnConfirm: true
      },
      function () {

        $.each($('#' + id + 'bitemhead .' + ref), function (key, x) {
          var current = $(this);

          uid = $(this).attr('data-uid');
          var step = $(this).attr('data-step');
          RemoveBasket(current.attr('data-ref'), 1, id);

          var subref = current.attr('data-ref').replace(uid, "");
          subref = subref.substring(2);

          var pname = $(this).attr('data-pname');

          ITEMLIMIT[step] = [];
        });

        var prod = dataDEALS[mergeid];
        Object.keys(prod['name']).forEach(kv => {

          if (prod['name'][kv]['ref'] == uid) {


            data = (prod['name'][kv]);


          }

        })


        var name = data.name;
        var dref = data.ref;

        var qty1 = '';
        var option1 = '';
        var OptionsTotal = '';
        switch (step) {
          case "0":

            qty1 = data.qty1;
            option1 = data.option1;
            OptionsTotal = data.settings1;
            break;
          case "1":

            qty1 = data.qty2;
            option1 = data.option2;
            OptionsTotal = data.settings2;
            break;
          case "2":

            qty1 = data.qty3;
            option1 = data.option3;
            OptionsTotal = data.settings3;
            break;
          case "3":

            qty1 = data.qty4;
            option1 = data.option4;
            OptionsTotal = data.settings4;
            break;
          case "4":

            qty1 = data.qty5;
            option1 = data.option5;
            OptionsTotal = data.settings5;
            break;


        }



        if (qty1 != 0) {
          var prods = dataEXTRAS[0];

          option1 = option1.split(':');
          if (typeof (option1[1]) == "undefined") {
            option1[1] = "";
          }
          var option1Head = option1[0];
          var OptionItems = option1[1].split('-');

          var Filters = OptionsTotal.split(',');
          var FilterLenght = Filters.length;
          var Fil = [];
          var Pro = [];
          for (var i = 0; i < FilterLenght; i++) {
            var priceExtra = Filters[i].split(':');
            var fName = priceExtra[0];
            var fMax = priceExtra[1];
            var fFree = priceExtra[2];
            var fPrice = priceExtra[3];
            var fMin = priceExtra[4];
            var fOrder = priceExtra[5];
            var fSkip = priceExtra[6];
            if (typeof (Pro[fOrder]) == "undefined") {
              Pro[fOrder] = [];
            }
            Pro[fOrder].push(prods[fName])

            Fil[fOrder] = {
              keyNo: fOrder,
              fName: fName,
              fMax: fMax,
              fFree: fFree,
              fPrice: fPrice,
              fMin: fMin,
              fOrder: fOrder,
              fSkip: fSkip,
              extras: prods[fName]

            }
          }

          Fil = Fil.filter(function (e) {
            return e
          });
          SelectedProduct.push({
            keyNo: 1,
            itemRef: dref,
            list: [{
              itemName: option1Head,
              totalStep: pages,
              opitcount: Fil.length,
              option: [{
                keyNo: "opt1",
                op: OptionItems,
                step: 1,
                opit: Fil

              }]
            }]


          });

        }

        ShowDealItems(0, step);
      }
    )






  });

  $('#productMainBox').on('touchend click', ".ContinueItems", function (e) {

    e.preventDefault();
    var current = $(this).attr('data-current');
    var TotalC = $(this).attr('data-totalcount');
    $('#SubItems' + current).hide();
    current++;
    if (current != TotalC) {
      $('#SubItems' + current).show();
    } else {
      var current = $(this).attr('data-cstep');
      current++;

      ShowDealItems(current, 0)
    }

  });

  $('#productMainBox').on('touchend click', ".BACKItems", function (e) {

    e.preventDefault();
    var current = $(this).attr('data-current');
    var TotalC = $(this).attr('data-totalcount');
    $('#SubItems' + current).hide();
    current--;
    if (current != TotalC) {
      $('#SubItems' + current).show();
    } else {
      var current = $(this).attr('data-cstep');
      current--;
      ShowDealItems(current, 0)
    }

  });


  $('#productMainBox').on('touchend click', ".MealButton", function (e) {
    e.preventDefault();
    var id = $(this).attr('data-target');
    if ($('.' + id).is(":visible") === false) {
      $('.Options').hide().slideUp(4000);
      $('.' + id).show().slideDown(5000);
    } else {
      $('.Options').hide().slideUp(4000);
    }
  });

  Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
  };



  function SaveBasketExtrasDeals(ref, price, name, cat, exID, obj, counter, main) {
    var id = exID.replace(/\s/g, "");
    if (BasketTotal + check_numbers(price) >= 0) {
      if (exID != "" && name != "") {
        var dataroll = 'ref=' + ref + '&catid=' + cat.replace(/\s/g, "") + '&price=' + price + '&name=' + name + '&qty=1&exID=' + exID.replace(/\s/g, "") + '&c=' + counter + '&main=' + main;
        if (main == 1) {
          var MainSelect = "MainSelect";
        } else {
          var MainSelect = "";
        }
        var basketitems = [];
        $.ajax({
          type: 'POST',
          url: "SaveExtra.proweb",
          data: dataroll,
          async: false,
          success: function (data) {
            BasketTotal += check_numbers(price);
            //UpdateBasket();
            data = data.replace(/\s/g, "");
            //UpdateBasketWithNoLoad(ref,name,"Deal",price,name,'','',exID,price,str, cartid,desc);
            obj.attr('id', "AddedtoBasket" + data);
            obj.addClass("selecteditem");
            //$('.extraOptions'+id).append('<li class="listitems" id="item'+data+'">'+name+'<div style="float:right;" class="changeprice" data-iprice="'+check_numbers(price).toFixed(2)+'" data-iref="'+data+'">£'+check_numbers(price).toFixed(2)+'<button id="'+data+'" class="btn remove" data-title="'+price+'"><span aria-hidden="true"  class="glyphicon glyphicon-remove-circle" ></span></button></div></li>');
            if (name != "") {
              $('.extraOptions' + id).append('<li data-pcartord="' + counter + '" class="listitems ' + MainSelect + ' " id="item' + data + '">' + name + '<div style="float:right;" data-iref="' + data + '" class="changeprice" data-iprice="' + check_numbers(price).toFixed(2) + '">£' + check_numbers(price).toFixed(2) + '</div><div style="float:left; margin-right:20px;"><button id="' + data + '" class="btn remove" data-title="' + price + '"><span aria-hidden="true"  class="glyphicon glyphicon-remove-circle" ></span></button></div></li>');
            }
            $('.extraOptions' + id).each(function () {
              $(this).html($(this).children('li').sort(function (a, b) {
                return ($(b).data('pcartord')) < ($(a).data('pcartord')) ? 1 : -1;
              }));
            });
          }
        });
      }
    } else {
    //   console.log(3536);
      swal({
        html: true,
        title: tword('BASKET_TOTAL_ERROR'),
        text: tword('BASKET_TOTAL_ERROR_TEXT'),
        type: "error",
        showConfirmButton: true
      });
    }
  }
  $('#productsettings').on('touchend click', ".addbasket", function (e) {
    e.preventDefault();
    FreeArray = [];
   
    var ref = $(this).attr('data-itemids').replace("&", "");
    var type = $(this).attr('data-dtype').replace('"', '');
    var price = $(this).attr('data-price');
    var hasextra = $(this).attr('data-hasextra');
    var name = $(this).attr('data-pname').replace("&", " and ");
    var settings = $(this).attr('data-settings');
    var cat = $(this).attr('data-cat');
    var ditemids = $(this).attr('data-itemids');
    var dealprice = $(this).attr('data-dealitem');
    var title = $(this).attr('data-title');
    var str = $(this).attr('data-str');
    var desc = $(this).attr('data-desc');
    if (localget("FREE") == 1) {
      price = 0;
      localSet("FREE", 0);
    }
    if (localget("HALF") == 1) {
      price = check_numbers(price / 2);
      localSet("HALF", 0);
    }
    if (str != "" && window.app.SHOPPOPUP == "Yes") {
      swal({
        html: true,
        title: "Please Select Size",
        text: str,
        type: "warning",
        showCancelButton: false,
        showConfirmButton: false
      });
    }
    SaveBasket(ref, title, type, price, name, settings, cat, ditemids, dealprice, str, desc, '', hasextra);
  });

  $('#productsettings').on('touchend click', "#FindCustomer", function (e) {
    e.preventDefault();
    var phone = $('#cphone').val();


    localSet('PHONE', phone);
    localSet('CALLER', 1)
    localSet("fullname", '');
    localSet("customeremail", '');
    localSet("Step", 'Data');
    localSet("SETSAVE", 1);
    GetCallData(phone);
    $('#productlayout').html('');
    $('#phone').click();
  });
  $('body').on('touchend click', ".SaveItem", function (e) {
    e.preventDefault();
    $('.listAdditem').removeClass('selecteditem');
    FreeArray = [];
    var ref = $(this).attr('id').replace("&", "");
    var title = $(this).attr('data-title');
    var type = $(this).attr('data-ptype').replace('"', '').replace("(", "").replace(")", "");
    var price = $(this).attr('value');
    var name = $(this).attr('data-pname').replace('&', ' and ');
    var settings = $(this).attr('data-settings');
    var cat = $(this).attr('data-cat');
    var ditemids = $(this).attr('data-itemids').replace("&", "");
    var dealprice = $(this).attr('data-dealitem');
    var hasextra = $(this).attr('data-hasextra');
    SaveBasketItem(ref, title, type, price, name, settings, cat, ditemids, dealprice, hasextra);
    StepByStepList = [];
    var i = 1;
    $('.YesTopping').hide();
    
    var temp_ty = new Array();
                temp_ty = window.app.PIZZA_BASE_FILTER.split(',');
    
    $('.YesTopping').each(function () {
      var id = $(this).attr('id');
      var id2 = id.toLowerCase();
      var toggle = id.substring(1);
      var types = 'T' + type;
      var fname = toggle;



      if (window.app.STEP_BY_STEP_PRODUCT == "Yes") {
        if (id.toLowerCase().indexOf(type.toLowerCase()) >= 0 ||  jQuery.inArray(toggle, temp_ty) !== -1) {


          StepByStepList.push({
            "id": id,
            "toggle": toggle
          });


        } else {

          if ((isNaN(parseFloat(toggle))) && fname.toLowerCase().indexOf("free") != 0 && (fname.toLowerCase().indexOf("cooktype") >= 0 || fname.toLowerCase().indexOf("base") >= 0 || fname.toLowerCase().indexOf("extrasfor") >= 0)) {
            StepByStepList.push({
              "id": id,
              "toggle": toggle
            });
          }

          $('#' + types).css('display', 'none');
          $('#' + id).hide();
        }

      } else {
        if (id.toLowerCase().indexOf(type.toLowerCase()) >= 0) {
          $('#' + types).css('display', 'table !important;');
          $('#' + id).show();
          // $('#'+toggle).addClass("in");
        }

      }

    });
    if (settings.toLowerCase().indexOf("free") >= 0) {
      $('#TFREE').css('display', 'table');
    }

    if (StepByStepList.length != 0) {

      CurrentStep = 0;
      ShowStepByStepList(StepByStepList, CurrentStep);
    }
  });

  function ShowStepByStepList(StepByStepList, step) {

    if ((StepByStepList[step]) != undefined) {
      $.each(StepByStepList[step], function (key, val) {

        $('#' + val).show();
        $('#' + val).addClass("in");
        $('#' + val + " .collapse").show().addClass("in");
      });
    } else {
      var temp = window.app.PIZZACAT.split(',');

      getproducts(temp[0], "", 0)
    }

  }


  $('#productsettings').on('touchend click', ".ContinueItemsPizza", function (e) {
    e.preventDefault();
    $('.YesTopping').hide();

    if (StepByStepList.length != 0) {

      CurrentStep++;
      ShowStepByStepList(StepByStepList, CurrentStep);
    }

  });
  $('#productsettings').on('touchend click', ".BackItemsPizza", function (e) {
    e.preventDefault();
    $('.YesTopping').hide();
    if (StepByStepList.length != 0) {

      CurrentStep--;
      ShowStepByStepList(StepByStepList, CurrentStep);
    }

  });



  $('#productsettings').on('touchend click', ".Charge", function (e) {
    e.preventDefault();

    var price = check_numbers($('#prices').html());

    if (!isNaN(price)) {
      var ref = Math.floor(Math.random() * 26) + Date.now();

      var title = AddNoteCharge || tword('MISCELLANEOUS_ITEM');

      var type = "";


      var name = AddNoteCharge || tword('MISCELLANEOUS_ITEM');
      AddNoteCharge = '';
      $('#NoteArea').html('');
      var settings = "";
      var cat = "";
      var ditemids = "";
      var dealprice = "";
      $('.YesTopping').css('display', 'none');
      SaveBasketItem(ref, title, type, price, name, settings, cat, ditemids, dealprice);
      $('#prices').html('');
      $('#prices').attr('title', '');
    } else {
      swal(tword('WARNING'), tword('ENTER_AMOUNT_CHARGE'), "warning");
    }
  });
  $('#PhoneButtons').on('touchend click', ".extrasButtonP", function (e) {
    e.preventDefault();
    var text = $(this).attr('id');
    var price = $(this).attr('data-price');
    ExtraItemnum(price, text);
  });

  function ExtraItemnum(price, name) {
    var ref = Math.floor(Math.random() * 26) + Date.now();
    var title = "Item ";
    var type = "";
    var settings = "";
    var cat = "";
    var ditemids = "";
    var dealprice = "";
    SaveBasketItem(ref, title, type, price, name, settings, cat, ditemids, dealprice);
  }
  $('#mainBoxContainer').on('touchend click', "#OpenSale", function (e) {
    e.preventDefault();
    var calculator = '';
    var fullamount = '';
    var discount = '';
    var system = '';
    var delivery = '';
    for (var i = 9; i > 0; i--) {
      calculator = calculator + '<button class="btn Numbers" data-title="' + i + '">' + i + '</button>';
    }
    calculator = calculator + '<button class="btn Numbers" data-title="0">0</button>';
    calculator = calculator + '<button class="btn Numbers" data-title="00">00</button>';
    fullamount = '<button class="btn Numbers fullamount" data-title="5.00">' + tword('PRICE_SEMBOL') + tword('CALC_5') +'</button>';
    fullamount = fullamount + '<button class="btn Numbers fullamount" data-title="10.00">' + tword('PRICE_SEMBOL') + tword('CALC_10') +'</button>';
    fullamount = fullamount + '<button class="btn Numbers fullamount" data-title="20.00">' + tword('PRICE_SEMBOL') + tword('CALC_20') +'</button>';
    fullamount = fullamount + '<button class="btn Numbers fullamount" data-title="50.00">' + tword('PRICE_SEMBOL') + tword('CALC_50') +'</button>';
    system = system + '<button class="btn Charge" >'+ tword('CHARGE') +'</button>';
    system = system + '<button class="btn system" data-title="C">'+ tword('CLEAR') +'</button>';
    system = system + '<button id="NoteCharge"  class="btn btn-primary hvr-shutter-out-horizontal Notes" data-top="1"><i class="glyphicon glyphicon-copy"></i> '+ tword('NOTE') +' </button>';
    system = system + '<button class="btn system" id="CloseOrder" >'+ tword('CLOSE') +'</button>';

    system = system + '<button class="btn system SaveNoPrint" style="position: relative !important; bottom: 0 !important; left: 0!important; width: 197px !important;height: 94px !important;color: #fff !important;">'+ tword('SAVE_NO_PRINT') +'</button>';
    var buttons = '<div id="pricebox" class="col-md-12 col-sm-12"><div id="NoteArea"></div><span id="prices"></span><input type="hidden" id="messagebox"></div><div class="col-md-12 col-sm-12"><div class="col-md-6 col-sm-6">' + calculator + '</div><div class="col-md-2 col-sm-2">' + fullamount + '</div><div class="col-md-2 col-sm-2">' + discount + '</div><div class="col-md-2 col-sm-2">' + system + '</div><div class="col-md-12 col-sm-12">' + delivery + '</div></div>';
    $('#productlayout').removeClass('col-md-10');
    $('#productlayout').addClass('col-md-12');
    $('#productlayout').removeClass('col-sm-10');
    $('#productlayout').addClass('col-sm-12');
    $('#productlayout').html(buttons);
    $('#productbuttons').css('display', 'none');
    $('#productCat').css('display', 'block');
  });

  function COMPLETE() {
    if (localget('CALLER') == 0) {
      swal(tword('ERROR'), tword('SELECT_C_C_SALE'), "warning");
      return;
    }

    if (typeof localget('METHOD') == 'undefined') {
      swal(tword('ERROR'), tword('SELECT_D_C_SALE'), "warning");
      return;
    }
    if (typeof localget('METHOD') != 'undefined') {
      $('#productlayout').html("");
      var calculator = '';
      var fullamount = '';
      var discount = '';
      var system = '';
      var delivery = '';
      for (var i = 9; i > 0; i--) {
        calculator = calculator + '<button class="btn Numbers" data-title="' + i + '">' + i + '</button>';
      }
      calculator = calculator + '<button class="btn Numbers" data-title="0">0</button>';
      calculator = calculator + '<button class="btn Numbers" data-title="00">00</button>';
      fullamount = '<button class="btn Numbers fullamount" data-title="5.00">' + tword('PRICE_SEMBOL') + tword('CALC_5') +'</button>';
      fullamount = fullamount + '<button class="btn Numbers fullamount" data-title="10.00">' + tword('PRICE_SEMBOL') + tword('CALC_10') +'</button>';
      fullamount = fullamount + '<button class="btn Numbers fullamount" data-title="20.00">' + tword('PRICE_SEMBOL') + tword('CALC_20') +'</button>';
      fullamount = fullamount + '<button class="btn Numbers fullamount" data-title="50.00">' + tword('PRICE_SEMBOL') + tword('CALC_50') +'</button>';
      var discbtn = [];
      discbtn = window.app.PHONE_DISCOUNT_BUTTON.split(',');
        if (discbtn.length > 0) {
            discbtn.forEach(function(discountValue) {
                discount += '<button class="btn discount" data-title="' + (discountValue / 100) + '">' + discountValue + '%</button>';
            });
        }
    
      discount = discount + '<button class="btn  discountEnter" data-title="0">% D</button><button class="btn  discountEnterMoney" data-title="0">£ D</button>';
      system = system + '<button class="btn system" data-title="C">'+ tword('CLEAR') +'</button>';
      var arrpay = (window.app.PHONEPAYOPTION).split(',');

      $.each(arrpay, function (key, vals) {
        system = system + '<button class="btn PayType" data-title="' + vals.toUpperCase() + '">' + vals.toUpperCase() + '</button>';
      });
      if (window.app.PayByLink == "Yes") {
        system = system + '<button class="btn PayType" data-title="Pay_By_Link">Pay Link</button>';
      }
      
      if (window.app.PayByLinkQr == "Yes") {
        system = system + '<button class="btn PayType" data-title="Eatzy_Qr">Eatzy Pay</button>';
      }

      var delivery = '';
      
       if (window.app.CUSTOMERTYPE != "Barber") { 
      if(localget('METHOD') == "DELIVERY"){
               if (window.app.setupTimeDelivery != "") {
            var timeCon = window.app.setupTimeDelivery;
            timeCon = timeCon.split(",");
            $.each(timeCon, function (key, val) {
              delivery = delivery + '<button class="btn setupTime" data-title="' + val + '" id="SetupTime' + val + '">' + val +  tword('MINS') +'</button>';
            });
            delivery = delivery + '<button class="btn SaveNoPrint"  >'+ tword('SAVE_ORDER_NO_PRINT') +'</button>';
            delivery = delivery + '<button class="btn SavePrintOrder"  >'+ tword('PRINT_ORDER') +'</button>';
          } else {
            delivery = '<button class="btn setupTime" data-title="20" id="SetupTime20">20 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="30" id="SetupTime30">30 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="45" id="SetupTime45">45 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="60" id="SetupTime60">60 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="75" id="SetupTime75">75 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="90" id="SetupTime90">90 '+ tword('MINS') +'</button>';
          }
      }else{
               if (window.app.setupTime != "") {
            var timeCon = window.app.setupTime;
            timeCon = timeCon.split(",");
              $.each(timeCon, function (key, val) {
              delivery = delivery + '<button class="btn setupTime" data-title="' + val + '" id="SetupTime' + val + '">' + val +  tword('MINS') +'</button>';
            });
            delivery = delivery + '<button class="btn SaveNoPrint"  >'+ tword('SAVE_ORDER_NO_PRINT') +'</button>';
            delivery = delivery + '<button class="btn SavePrintOrder"  >'+ tword('PRINT_ORDER') +'</button>';
          } else {
            delivery = '<button class="btn setupTime" data-title="20" id="SetupTime20">20 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="30" id="SetupTime30">30 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="45" id="SetupTime45">45 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="60" id="SetupTime60">60 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="75" id="SetupTime75">75 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="90" id="SetupTime90">90 '+ tword('MINS') +'</button>';
          }
      }
        delivery = delivery + '<button class="btn CustomerSelectedTime" >'+ tword('SETUP_TIME') +'</button>';
       }else{
                delivery = '<button class="btn setupTime" data-title="0" id="SetupTime20">Print '+ tword('MINS') +'</button>';
       }
    
      var buttons = '<div id="pricebox" class="col-md-12 col-sm-12"><span id="prices"></span><input type="hidden" id="messagebox"></div><div class="col-md-12 col-sm-12"><div class="col-md-6 col-sm-6">' + calculator + '</div><div class="col-md-2 col-sm-2">' + fullamount + '</div><div class="col-md-2 col-sm-2">' + discount + '</div><div class="col-md-2 col-sm-2">' + system + '</div><div class="col-md-12 col-sm-12">' + delivery + '</div></div>';
      $('#productlayout').removeClass('col-md-10');
      $('#productlayout').addClass('col-md-12');
      $('#productlayout').removeClass('col-sm-10');
      $('#productlayout').addClass('col-sm-12');
      $('#productlayout').html(buttons);
      $('#productbuttons').css('display', 'none');
      $('#productCat').css('display', 'none');
    } else {
      alert(tword('PLEASE_D_C'));
    }
    
  }
  //setupTimePOPUP
  $('body').on('touchend click', ".setupTimePOPUP", function (e) {
    e.preventDefault();
    var id = $(this).attr('data-title');
    $('#SetupTime' + id).click();
  });
  $('body').on('touchend click', ".SaveNoPrint", function (e) {
    e.preventDefault();
    closeColTops();
  });


  function closeColTops() {
    var price = check_numbers($('#prices').html().split('.').join(""));
    var paid = check_numbers($('#MainTotalFee').html().split('.').join(""));
    var val = $(this).attr('data-title');
    var dTime = 30;
    var orderid = "";
    var change = check_numbers($('#prices').html() - $('#MainTotalFee').html());
    if ($('#prices').html() == "") {
      change = 0;
    } else {
      if (price < paid) {
        setTimeout(function () {
          swal({
            title: tword('CORRECT_PAID_AMOUNT'),
            text: tword('CORRECT_PAID_AMOUNT_TEXT'),
            confirmButtonText: "Ok",
            confirmButtonColor: "#DD6B55",
            showCancelButton: true,
            type: "warning",
            html: true
          });
        }, 200)
        return false;
      }
    }

    if (typeof localget('METHOD') == 'undefined') {
      setTimeout(function () {
        swal(tword('DELIVERY_OR_COLLECTION'), tword('DELIVERY_OR_COLLECTION_TEXT'), "warning");
      }, 200)
    }
    if (change != 0) {
      setTimeout(function () {
        swal(check_numbers(change).toFixed(2), tword('TOTAL_CHANGE'), "success");
      }, 200)
    }
    if ($.cookie('EDITORDER') == 0) {
      DeleteBasket = [];
      DeleteHistory = [];
    }
DisableButtons();
    PostCodesTopT = localget("POSTCODE");
    var dataroll = '&TotalSale=' + localget('TOTALFEE') + "&note=" + localget("BASKETNOTE") + "&DTime=30&DType=" + localget('METHOD') + "&Phone=" + localget('PHONE') + "&PayType=" + localget('PayType') + "&changeDue=" + change + "&basketArray=" + JSON.stringify(BasketItems) + datarollPaymentAut + "&deleteHistory=" + JSON.stringify(DeleteHistory);
    $.ajax({
      type: 'POST',
      url: "ComplateCheckout.proweb",
      async: false,
      data: dataroll,
      success: function (data) {
        orderid = data;
        CLOSECALL();
        if (window.app.OPEN_CASH_DRAWER_ON_SAVE_ORDER_NO_PRINT === "Yes") {
          NosaleFuncOp();
        }
      }
    });

    return orderid;
  }
  $('body').on('touchend click', ".SavePrintOrder", function (e) {
    e.preventDefault();
    var price = check_numbers($('#prices').html().split('.').join(""));
    var paid = check_numbers($('#MainTotalFee').html().split('.').join(""));
    var val = $(this).attr('data-title');
    var dTime = 30;
    var change = check_numbers($('#prices').html() - $('#MainTotalFee').html());
    if ($('#prices').html() == "") {
      change = 0;
    } else {
      if (price < paid) {
        setTimeout(function () {
          swal({
            title: tword('CORRECT_PAID_AMOUNT'),
            text: tword('CORRECT_PAID_AMOUNT_TEXT'),
            confirmButtonText: "Ok",
            confirmButtonColor: "#DD6B55",
            showCancelButton: true,
            type: "warning",
            html: true
          });
        }, 200)
        return false;
      }
    }

    if (typeof localget('METHOD') == 'undefined') {
      setTimeout(function () {
        swal(tword('CORRECT_PAID_AMOUNT'), tword('CORRECT_PAID_AMOUNT_TEXT'), "warning");
      }, 200)
    }
    if (change != 0) {
      setTimeout(function () {
        swal(check_numbers(change).toFixed(2), tword('TOTAL_CHANGE'), "success");
      }, 200)
    }
    if ($.cookie('EDITORDER') == 0) {
      DeleteBasket = [];
      DeleteHistory = [];
    }
    
    DisableButtons();
    var dataroll = '&TotalSale=' + localget('TOTALFEE') + "&note=" + localget("BASKETNOTE") + "&DTime=30&DType=" + localget('METHOD') + "&Phone=" + localget('PHONE') + "&PayType=" + localget('PayType') + "&changeDue=" + change + "&basketArray=" + JSON.stringify(BasketItems) + datarollPaymentAut + "&deleteHistory=" + JSON.stringify(DeleteHistory);
    var orderid = '';
    PostCodesTopT = localget("POSTCODE");
    $.ajax({
      type: 'POST',
      url: "ComplateCheckout.proweb",
      data: dataroll,
      async: false,
      success: function (data) {

        orderid = data.replace(/\s/g, "");
        var type = localget('METHOD').substr(0, 1);
        var discounted = localget('discountAmount') || 0
        var AmountPaid = check_numbers($('#prices').html());
        return new Promise(function (resolve, reject) {
          resolve(WEBORDERPRINTONLINE(orderid, 'Accepted', '', AmountPaid, change, $('#caller').html(), dTime, localget('METHOD'), dTime, '', BasketItems, localget("DELCHARGE"), discounted));
        }).then(function () {
          TempArray = [];
          localSet("DELCHARGE", 0)
          $('#PmethodNew').html('');
          localSet('METHOD', "");
          CLOSECALL();
          return 'end';
        });
      }
    });
   
  });
  $('#productsettings').on('touchend click', ".PayType", function (e) {
    e.preventDefault();

    localSet('PayType', $(this).attr('data-title'));
    $('#PmethodNew').html($(this).attr('data-title'));
    $('#Pmethod').html($(this).attr('data-title'));
    if ($(this).attr('data-title') === 'CARD') {
       
      var ref = Math.floor(Math.random() * 26) + Date.now();
      var title = "Service Fee ";
      var type = "";
      var price = check_numbers(window.app.CARD_FEE).toFixed(2) || 0;
      var name = "Service Fee";
      var settings = "";
      var cat = "";
      var ditemids = "";
      var dealprice = "";
      var price = check_numbers($('#prices').html().split('.').join(""));
      var paid = check_numbers($('#MainTotalFee').html().split('.').join(""));
      console.log($.cookie('connectTerminal'));
      if ( $.cookie('connectTerminal')=="Yes") {
        swal({
          title: "Do You Want To Connect Terminal?",
          text: "The Terminal will only transact the amout on screen",
          type: "warning",
          showCancelButton: true,
          closeOnConfirm: false,
          confirmButtonText: "Continue",
          confirmButtonColor: "#ec6c62",
          showLoaderOnConfirm: true,
        }, function () {
          var datastring = "&paid=" + paid;
          var jsonObj = ['"params":{        "status": "AVAILABLE","currency": "GBP","capabilities": ["SALE"]}'];
          var sale = '{"transactionType": "SALE", "amount": ' + paid + ',"currency": "GBP"}';
          console.log();
          //START TERMINAL CONNECTION
          
         if(window.app.PAYMENTTYPE=="PAYMENTSENSE"){
          $.ajax({
            type: 'GET',
            url: url,
            beforeSend: function (xhr) {
              xhr.setRequestHeader("Authorization", "Basic " + btoa('1:' + api));
            },
            data: jsonObj,
            statusCode: {
              503: function (data) {
                swal({
                  type: 'warning',
                  title: tword('CHECK_TERMINAL'),
                  html: 'Submitted'
                });
              },
              401: function (data) {
                swal({
                  type: 'warning',
                  title: tword('INVALID_API_TEXT'),
                  text: tword('INVALID_API_KEY'),
                  html: 'Submitted'
                });
              },
              404: function () {
                swal({
                  type: 'warning',
                  title: tword('INVALID_URL'),
                  html: 'Submitted'
                });
              },
              200: function () { // SET AMOUNT TO TERMINAL
                $.ajax({
                  type: 'POST',
                  url: urlPay,
                  beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa('1:' + api));
                  },
                  data: sale,
                  contentType: 'application/json',
                  statusCode: {
                    401: function (data) {
                      swal({
                        type: 'warning',
                        title: tword('INVALID_AUTH'),
                        html: 'Submitted'
                      });
                    },
                    404: function () {
                      swal({
                        type: 'warning',
                        title: tword('ERROR'),
                        text: tword('CHECK_CARD_TERIMAL_URL_TEXT') + tpi,
                        html: 'Submitted'
                      });
                    },
                    200: function () {},
                    201: function () {},
                    503: function () {
                      swal({
                        type: 'warning',
                        title: tword('CHECK_CARD_URL'),
                        html: 'Submitted'
                      });
                    },
                    202: function () {}
                  },
                  success: function (data) {
                    requestid = data.requestId;
                    // START CHECKING TERMINAL
                    var CheckTrans = 'https://' + host + '/pac/terminals/' + tpi + '/transactions/' + requestid
                    var C = 0;
                    var authCode = '';
                    var transactionId = '';
                    var loger = ''
                    var CheckTime = 0;
                    var TimCheck = setInterval(function () {
                      $.ajax({
                        type: 'GET',
                        url: CheckTrans,
                        beforeSend: function (xhr) {
                          xhr.setRequestHeader("Authorization", "Basic " + btoa('1:' + api));
                        },
                        contentType: 'application/json',
                        success: function (data) {
                          var current = data.notifications[0];
                          var sysMsg = data.notifications[0].replace("_", " ");
                          swal({
                            type: 'success',
                            title: sysMsg,
                            showConfirmButton: false,
                            timmer: 1000,
                            showCancelButton: false,
                            closeOnConfirm: false,
                          })
                          if (current == "APPROVED") {
                            CheckTime++;
                          }
                          if (current == "TIMED_OUT" || CheckTime == 45) {
                            clearInterval(TimCheck);
                            swal({
                              title: tword('COMMUNICATION_FAILED'),
                              text: tword('COMMUNICATION_FAILED_TEXT'),
                              type: "warning",
                              showCancelButton: true,
                              closeOnConfirm: false,
                              confirmButtonText: "Sucessful",
                              cancelButtonText: "Failed",
                              confirmButtonColor: "#ec6c62",
                              showLoaderOnConfirm: true,
                            }, function (isconfirm) {
                              if (isconfirm) {
                                authCode = data.authCode;
                                transactionId = data.transactionId;
                                loger = JSON.stringify(data);
                                swal({
                                  type: 'success',
                                  title: tword('PAYMENT_AUTHROISED'),
                                  timmer: 1000,
                                  showConfirmButton: true,
                                })
                                var dataroll = "table=" + TABLENO + "&ptype=CARD&price=" + paid + "&saleid=" + saleid;
                                $.ajax({
                                  type: 'POST',
                                  url: "poscode/card.php",
                                  data: dataroll,
                                  success: function (data1) {
                                    var data1Array = data1.split(",");
                                    var data = data1Array[0];
                                    var kalan = data1Array[1];
                                    var balance = data1Array[1];
                                    var cashp = data1Array[4];
                                    var cardp = data1Array[2];
                                    var tillbalance = data1Array[5];
                                    var change = data1Array[5];
                                    $('.TotalAmount').html(check_numbers(tillbalance).toFixed(2));
                                    var CardPaymentTotal = check_numbers(cardp).toFixed(2);
                                    $('.CardPayment').html(check_numbers(CardPaymentTotal).toFixed(2));
                                    $('.CashPayment').html(check_numbers(cashp).toFixed(2));
                                    $('#pricesPOSAmount').attr('title', "0");
                                    $('#pricesPOSAmount').html("");
                                    if (tillbalance == 0 || tillbalance < 0) {
                                      Print(TABLENO, balance, balance, tillbalance, cashp, cardp, change);
                                      var dataroll = "table=" + TABLENO + "&status=0&ptype=CARD&saleid=" + saleid + "&kalan=" + change + "&paid=" + paid + "&authCode=" + authCode + "&transactionId=" + transactionId + "&loger=" + loger;
                                      $.ajax({
                                        type: 'POST',
                                        url: "poscode/TableStatus.php",
                                        data: dataroll,
                                        success: function (data) {
                                          $('.CallListPopUp').html('').hide().removeClass('PaymentPOST');
                                          // $.removeCookie("saleTotal-" + TABLENO);
                                        }
                                      });
                                      setTimeout(function () {
                                        $('#pos').click();
                                      }, 1000);
                                    } else {
                                      BasketLOAD(TABLENO);
                                    }
                                  }
                                });
                              } else {
                                swal({
                                  type: 'warning',
                                  title: tword('TRANSACTION_NO_PAYMENT'),
                                  html: 'Submitted'
                                });
                              }
                            });
                          }
                          if (current == "SIGNATURE_VERIFICATION") {
                            //clearInterval(TimCheck);
                            swal({
                              title: tword('PLEASE_CONFIRM_SIGN'),
                              text: "",
                              type: "warning",
                              showCancelButton: true,
                              closeOnConfirm: false,
                              confirmButtonText: tword('VERIFY'),
                              cancelButtonText: tword('NOT_VERIFIED'),
                              confirmButtonColor: "#ec6c62",
                              cancelButtonColor: "#ec6c62",
                              showLoaderOnConfirm: true,
                            }, function (isConfirm) {
                              if (isConfirm) {
                                var Sig = '{"accepted": true}';
                              } else {
                                var Sig = '{"accepted": false}';
                              }
                              var Signature = 'https://' + host + '/pac/terminals/' + tpi + '/transactions/' + requestid + '/signature';
                              $.ajax({
                                type: 'PUT',
                                url: Signature,
                                data: Sig,
                                beforeSend: function (xhr) {
                                  xhr.setRequestHeader("Authorization", "Basic " + btoa('1:' + api));
                                },
                                contentType: 'application/json',
                                success: function (data) {}
                              });
                            });
                          }
                          if (current == "TRANSACTION_FINISHED") {
                            clearInterval(TimCheck);
                            if (data.transactionResult == "SUCCESSFUL") {
                              authCode = data.authCode;
                              transactionId = data.transactionId;
                              loger = JSON.stringify(data);
                              swal({
                                type: 'success',
                                title: 'Payment Authroised',
                                html: 'Submitted'
                              })
                              datarollPaymentAut = "&authCode=" + authCode + "&transactionId=" + transactionId;
                              $('#SetupTime30').click();
                              //AJAX CONNECT
                            }
                            if (data.transactionResult == "CANCELLED" || data.transactionResult == "DECLINED" || data.transactionResult == "VOID" || data.transactionResult == "UNSUCCESSFUL") {
                              swal({
                                type: 'warning',
                                title: 'Payment ' + data.transactionResult,
                                html: 'Submitted'
                              });
                            }
                          }
                        },
                      })
                    }, 1000);
                    //END CHECK TRANSACTION
                  }
                });
              },
              201: function () {},
              202: function () {}
            },
            contentType: 'application/json',
            success: function (data) {},
            error: function (xhr) { // if error occured
              swal({
                type: 'warning',
                title: tword('CHECK_CARD_TERMINAL'),
                text: tword('Invalid URL'),
                html: 'Submitted'
              });
            }
          });
         }else{
             //BURASI TEKRAR GUNCELENECEK ConnectCardMachine.proweb
            // var dataroll = "sales="+'{"prices":{"transactionType": "SALE", "amount": ' + paid + ',"currency": "GBP"}}';
              var dataroll = '{ "transType": "SALE","amountTrans": ' + paid + ',   "reference": "TEST_CARD"}';
              var postURL="https://"+$.cookie('TERMINAL_ID')+":8080/POSitiveWebLink/1.1.0/rest/transaction?tid="+$.cookie('TID');
             
               $.ajax({
                   beforeSend: function(request) {
       request.setRequestHeader("Content-Type", 'application/json');
       request.setRequestHeader("Access-Control-Allow-Origin", '*');
       request.setRequestHeader("Accept", '*');
        request.setRequestHeader("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
        request.setRequestHeader("Access-Control-Allow-Headers", '*');
        request.setRequestHeader("Connection", 'keep-live');
       request.setRequestHeader("Authorization",  'Bearer 6945595921271780');
  },
            type: 'POST',
         url: postURL,
            data: dataroll, 
            success: function (data) {
             
               var uti = data.uti;
              var TimCheck = setInterval(function () {
            
                                  $.ajax({ beforeSend: function(request) {
                   request.setRequestHeader("Content-Type", 'application/json');
                   request.setRequestHeader("Accept", 'application/json');
                   request.setRequestHeader("Authorization",  'Bearer 6945595921271780');
                
              },
                        type: 'GET',
                        url: postURL+"&uti="+uti,
                        success: function (data) {
                            
                       
                          var current = data.DisplayData[data.DisplayData.length-1].description;
                          current = current.replace(" ","_");
                         console.log("CURRENT"+current);
                      //    var sysMsg = data.notifications[0].replace("_", " ");
                      if(current!=""){
                          if (current == "GetCard_Screen_Displayed") {
                               swal({
                            type: 'success',
                            title: "Please Insert Card",
                            showConfirmButton: false,
                            showCancelButton: false,
                            closeOnConfirm: true,
                          })
                          }else if(current=="Transaction_Finished"){
                                       swal({
                                    type: 'success',
                                    title: "Transaction Completed",
                                    showConfirmButton: true,
                                    showCancelButton: false,
                                    timer:1000,
                                    closeOnConfirm: true,
                                  });
                            
                             clearInterval(TimCheck); 
                            
                          
                   
                          
                          }else if(current=="Card_type_CTLS"){
                                    swal({
                            type: 'info',
                            title: "Contactless Transaction (Card Tapped)",
                            showConfirmButton: false,
                            showCancelButton: false,
                            closeOnConfirm: true,
                          })
                          }else if(current=="Card_type_EMV"){
                               swal({
                            type: 'warning',
                            title: "Insert card transaction",
                            showConfirmButton: false,
                            showCancelButton: false,
                            closeOnConfirm: true,
                          })
                          }else if(current=="Card_type_MSR"){
                                  swal({
                            type: 'warning',
                            title: "Mag Stripe Transaction (Card Swiped)",
                            showConfirmButton: false,
                            showCancelButton: false,
                            closeOnConfirm: true,
                          })
                          }else if(current=="Card_type_UTI"){
                              
                                  swal({
                            type: 'warning',
                            title: "Unique Transaction Identifier (used for transaction lookup)",
                            showConfirmButton: false,
                            showCancelButton: false,
                            closeOnConfirm: true,
                          })
                          }else if(current=="Card_type_=_manual"){
                                  swal({
                            type: 'warning',
                            title: "Please Enter CSC Code",
                            showConfirmButton: false,
                            showCancelButton: false,
                            closeOnConfirm: true,
                          }) 
                          }else if(current=="Transaction_Approved"){
                                   swal({
                            type: 'success',
                            title: "Transaction Approved",
                            showConfirmButton: true,
                            showCancelButton: false,
                            timer:1000,
                            closeOnConfirm: true,
                          })
                          clearInterval(TimCheck); 
                            
                              $('#SetupTime30').click();
                              
                          }else if(current=="Transaction_Declined" || current=="Transaction_Cancelled" || current=="Reversal_Declined" || current=="Card_User_Cancelled"){
                                 swal({
                            type: 'warning',
                            title: current,
                            showConfirmButton: false,
                            showCancelButton: true,
                            closeOnConfirm: true,
                             timer:1000,
                          })
                             clearInterval(TimCheck); 
                             
                      
                             
                          }else if(current=="Pin_Requested(Offline)" || current=="Pin Requested(Online)"){
                                  swal({
                            type: 'success',
                            title: "Please Enter Pin",
                            showConfirmButton: false,
                            showCancelButton: false,
                            closeOnConfirm: true,
                          })
                           }else if(current=="Manual_Pan_Screen_Displayed"){
                               swal({
                            type: 'success',
                            title: "Please Enter Your Card Details ",
                            showConfirmButton: false,
                            showCancelButton: false,
                            closeOnConfirm: true,
                          })
                           }else{
                             swal({
                            type: 'success',
                            title:current.replace('_', ' ' ),
                            showConfirmButton: true,
                            showCancelButton: false,
                            closeOnConfirm: true,
                          })
                          }
                      }
                         
                        },
                      })
      
                    }, 1000);

                
            },
            error: function (xhr) { // if error occured
              swal({
                type: 'warning',
                title: tword('CHECK_CARD_TERMINAL'),
                text: tword('Invalid URL'),
                html: 'Submitted'
              });
            }
          });
             
         }
        });
        return true;
      } else if (PAYTERMINAL == 2) {} else {}
       
    }
    
    var val = 0;
    var dTime = 0;
    var change = check_numbers($('#prices').html() - $('#MainTotalFee').html());
    if ($('#prices').html() == "") {
      change = 0;
    } else {
      if (price < paid) {
        swal(tword('CORRECT_PAID_AMOUNT'), tword('CORRECT_PAID_AMOUNT_TEXT'), "warning");
        return;
      }
    }

    if (typeof localget('METHOD') == 'undefined') {
      swal("DELIVERY OR COLLECTION", "Please select collection or delivery option", "warning");
    }
    $('#PaidAmountLabel').html($('#prices').html());
    $('#ChangeAmount').html(check_numbers(change).toFixed(2));
    if (change != 0) {
      swal(check_numbers(change).toFixed(2), tword('TOTAL_CHANGE'), "success");
    }
    
    
    
     if ($(this).attr('data-title') == "Eatzy_Qr") {
      var sms = false;
      var email = false;
      var objs = JSON.parse($.cookie('customer')); //COOKIE
      var totalfes = localget('TOTALFEE');
      var name = objs['fullname'];
      var phone = objs['cphone'];
      var emailTp = "noemail@gmail.com"
      function printQr(data) {
            
     }
        Swal.fire({
          title: "Do you want to Pay By Link with Eatzy Qr Code ?",
          showConfirmButton: true,
          showCloseButton: true,
          confirmButtonText: "Yes",
          denyButtonText: "No",
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            var closepayId = closeColTops();
                localSet("customeremail", '');
                localSet('PHONE', '');
                const inputOptions = new Promise((resolve) => {
                   var dataroll = "orderid=" + closepayId + "&email=" + emailTp + "&name=" + name + "&total=" + totalfes + "&type=qr";
                      $.ajax({
                        type: 'GET',
                        url: "PaybylinkQrCode.proweb",
                        data: dataroll,
                        async: false,
                        success: function (data) {
                        // print qr for usb
                        var printWindow = window.open('', 'Print Window','height=200,width=600');
                        printWindow.document.write('<html><head><title>Eatzy Pay</title>');
                        printWindow.document.write('</head><body><img style="width:100% !important;" src=\'');
                        printWindow.document.write(`https://eatzyqr.co.uk/new/imageWithoutLogo.php?url=${data}`);
                        printWindow.document.write('\' /><h2 style="width:100% !important;text-align:center;">'+ closepayId +'<br>Total : '+ totalfes +'</h2><p style="width:100% !important;text-align:center;">Thank You!</p></body></html>');
                        setTimeout(() => {
                            printWindow.document.close();
                            printWindow.print();
                             printWindow.close();
                        },3000);
                       
                        // print qr for usb
                        
                              Swal.fire({
                              title: tword('PLEASE_WAITING_PAYMENT'),
                              html : `<img style="width:350px !important;" src="https://eatzyqr.co.uk/new/imageWithoutLogo.php?url=${data}">`
                            })
                            }
                          });
            });
          } 
        })
    }else if ($(this).attr('data-title') == "Pay_By_Link") {
      var sms = false;
      var email = false;
      var objs = JSON.parse($.cookie('customer')); //COOKIE
      var totalfes = localget('TOTALFEE');
      var name = objs['fullname'];
      var phone = objs['cphone'];
      var emailTp = objs['customeremail'];

      if (window.app.PayByLinkSMS == "Yes" && phonenumberUK(phone)) {
        sms = true;
      }
      if (window.app.PayByLinkEMAIL == "Yes" && emailCheck(emailTp)) {
        email = true;
      }

      if (email == true || sms == true) {
        Swal.fire({
          title: tword('SEND_PAY_LINK_Q'),
          showConfirmButton: email,
          showDenyButton: sms,
          showCloseButton: true,
          confirmButtonText: tword('EMAIL_SEND'),
          denyButtonText: tword('SMS_SEND'),
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            var closepayId = closeColTops();
            checkPayStatus('email', closepayId, totalfes, name, emailTp)
          } else if (result.isDenied) {
            var closepayId = closeColTops();
            checkPayStatus('sms', closepayId, totalfes, name, phone);
          }
        })
      } else {
        Swal.fire(tword('EMAIL_OR_PHONE_CHECK'), '', 'warning')
      }
    } else {
        console.log('selam')
      if (window.app.Paid_Button_Auto_Print == 'Yes') {
        $('.setupTime').eq(0).trigger("click");
      } else if (window.app.Paid_Button_Auto_Print == 'NoPrint') {
        closeColTops();
        NosaleFuncOp();
      }
    }
  });


  async function checkPayStatus(type, ordrrid, total, name, vpg) {

    localSet("customeremail", '');
    localSet('PHONE', '');
    const inputOptions = new Promise((resolve) => {
      var dataroll = "orderid=" + ordrrid + "&email=" + vpg + "&name=" + name + "&total=" + total + "&type=" + type;
      $.ajax({
        type: 'GET',
        url: "PaybylinkSendmail.proweb",
        data: dataroll,
        async: false,
        success: function (data) {
          resolve(data);
        }
      });
    });
    const {
      value: sentype
    } = await Swal.fire({
      title: tword('PLEASE_WAITING_PAYMENT'),
      input: 'text',
      inputValue: ordrrid,
      inputLabel: type + tword('SENDED_ORDER_ID') +";",
      inputValidator: (value) => {
        if (!value) {
          tword('NEED_CHOOSE')
        }
      }
    })
    if (sentype) {
      Swal.fire({
        html: " " + tword('YOU_SELECTED') + sentype + " "
      })
    }
  }


  function phonenumberUK(number) {

    var phone_number = number;
    var patter = /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/;

    if (phone_number.length > 9 && patter.test(phone_number)) {
      //  alert($.cookie('PHONE'));
      return true
    } else {
      return false;
    }
  }

  function emailCheck(email) {
    var re = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (email.length > 6 && re.test(email)) {
      return true;

    } else {
      return false;
    }
  }
  $('body').on('click', ".setupTime", function (e) {
    e.preventDefault();


    if (localget('PayType') == "" && window.app.PayTypeCHECK == "Yes") {
      swal({
        title: tword('SELECT_PAYMENT_TYPE'),
        type: "warning"
      });
      return false;
    }
    var price = check_numbers($('#prices').html().split('.').join(""));
    var paid = check_numbers($('#MainTotalFee').html().split('.').join(""));
    var val = $(this).attr('data-title');
    var dTime = $(this).attr('data-title');
    var change = check_numbers($('#prices').html() - $('#MainTotalFee').html());
    if ($('#prices').html() == "") {
      change = 0;
    } else {
      if (price < paid) {
        setTimeout(function () {
          swal({
            title: tword('CORRECT_PAID_AMOUNT'),
            text: tword('CORRECT_PAID_AMOUNT_TEXT'),
            confirmButtonText: "Ok",
            confirmButtonColor: "#DD6B55",
            showCancelButton: true,
            type: "warning",
            html: true
          });
        }, 200)
        return false;
      }
    }
    if (typeof localget('METHOD') == 'undefined') {
      setTimeout(function () {
        swal(tword('DELIVERY_OR_COLLECTION'), tword('DELIVERY_OR_COLLECTION_TEXT'), "warning");
      }, 200)
    }
    $('#PaidAmountLabel').html($('#prices').html());
    $('#ChangeAmount').html(check_numbers(change).toFixed(2));
    PostCodesTopT = localget("POSTCODE");

    if ($.cookie('EDITORDER') == 0) {
      DeleteBasket = [];
      DeleteHistory = [];
    }
    DisableButtons();
    
    var dataroll = '&TotalSale=' + localget('TOTALFEE') + '&note=' + localget("BASKETNOTE") + '&DTime=' + val + "&DType=" + localget('METHOD') + "&Phone=" + localget('PHONE') + "&PayType=" + localget('PayType') + "&changeDue=" + change + "&basketArray=" + JSON.stringify(BasketItems) + datarollPaymentAut + "&deleteHistory=" + JSON.stringify(DeleteHistory);
    if (change != 0) {
      setTimeout(function () {
        swal(check_numbers(change).toFixed(2), tword('TOTAL_CHANGE'), "success");
      }, 200)
    }
    var orderid = '';
    $.ajax({
      type: 'POST',
      url: "ComplateCheckout.proweb",
      data: dataroll,
      async: false,
      success: function (data) {

        orderid = data.replace(/\s/g, "");
        var type = localget('METHOD').substr(0, 1);
        var discounted = localget('discountAmount') || 0
        var AmountPaid = check_numbers($('#prices').html());
        PostCodesTopT = localget("POSTCODE");
        return new Promise(function (resolve, reject) {
          resolve(WEBORDERPRINTONLINE(orderid, 'Accepted', '', AmountPaid, change, $('#caller').html(), dTime, localget('METHOD'), dTime, '', BasketItems, localget("DELCHARGE"), discounted))
        }).then(function () {
          CLOSECALL();
          TempArray = [];
          localSet("DELCHARGE", 0)
          $('#PmethodNew').html('');
          return 'end';
        });
      }
    });
  });

  function findById(source, id) {
    for (var i = 0; i < source.length; i++) {
      if (source[i].id === id) {
        return source[i];
      }
    }
    throw "Couldn't find object with id: " + id;
  }
  var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
      timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      timezoneClip = /[^-+\dA-Z]/g,
      pad = function (val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) val = "0" + val;
        return val;
      };
    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
      var dF = dateFormat;
      // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
      if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
        mask = date;
        date = undefined;
      }
      // Passing date through Date applies Date.parse, if necessary
      date = date ? new Date(date) : new Date;
      if (isNaN(date)) throw SyntaxError("invalid date");
      mask = String(dF.masks[mask] || mask || dF.masks["default"]);
      // Allow setting the utc argument via the mask
      if (mask.slice(0, 4) == "UTC:") {
        mask = mask.slice(4);
        utc = true;
      }
      var _ = utc ? "getUTC" : "get",
        d = date[_ + "Date"](),
        D = date[_ + "Day"](),
        m = date[_ + "Month"](),
        y = date[_ + "FullYear"](),
        H = date[_ + "Hours"](),
        M = date[_ + "Minutes"](),
        s = date[_ + "Seconds"](),
        L = date[_ + "Milliseconds"](),
        o = utc ? 0 : date.getTimezoneOffset(),
        flags = {
          d: d,
          dd: pad(d),
          ddd: dF.i18n.dayNames[D],
          dddd: dF.i18n.dayNames[D + 7],
          m: m + 1,
          mm: pad(m + 1),
          mmm: dF.i18n.monthNames[m],
          mmmm: dF.i18n.monthNames[m + 12],
          yy: String(y).slice(2),
          yyyy: y,
          h: H % 12 || 12,
          hh: pad(H % 12 || 12),
          H: H,
          HH: pad(H),
          M: M,
          MM: pad(M),
          s: s,
          ss: pad(s),
          l: pad(L, 3),
          L: pad(L > 99 ? Math.round(L / 10) : L),
          t: H < 12 ? "a" : "p",
          tt: H < 12 ? "am" : "pm",
          T: H < 12 ? "A" : "P",
          TT: H < 12 ? "AM" : "PM",
          Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
          o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
        };
      return mask.replace(token, function ($0) {
        return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
      });
    };
  }();
  // Some common format strings
  dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
  };
  // Internationalization strings

//   dateFormat.i18n = {
//     dayNames: [
//       tword('SUNDAY_MIN'), tword('MONDAY_MIN'), tword('TUESDAY_MIN'), tword('WEDNESDAY_MIN'), tword('THURSDAY_MIN'), tword('FRIDAY_MIN'), tword('SATURDAY_MIN'),
//       tword('SUNDAY'), tword('MONDAY'),tword('TUESDAY'),tword('WEDNESDAY'),tword('THURSDAY'), tword('FRIDAY'), tword('SATURDAY')
//     ],
//     monthNames: [
//       tword('JANUARY_MIN'), tword('FEBRUARY_MIN'), tword('MARCH_MIN'), tword('APRIL_MIN'), tword('MAY_MIN'), tword('JUNE_MIN'), tword('JULY_MIN'),tword('AUGUST_MIN'),tword('SEPTEMBER_MIN'),tword('OCTOBER_MIN'), tword('NOVEMBER_MIN'),tword('DECEMBER_MIN'),
//       tword('JANUARY'), tword('FEBRUARY'), tword('MARCH'), tword('APRIL'), tword('MAY'), tword('JUNE'), tword('JULY'),tword('AUGUST'),tword('SEPTEMBER'),tword('OCTOBER'), tword('NOVEMBER'),tword('DECEMBER')
//     ]
//   };
 dateFormat.i18n = {
    dayNames: [
      "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
  };
  // For convenience...
  Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
  };
  
  
  async function WEBORDERPRINTONLINE(orderid, status, cemail, paid, change, callerData, otime, method, dtime, counter, delivery, discount, isHistory) {
    $('.slide-in').hide();
    orderid = orderid.replace(/(\r\n|\n|\r)/gm, "");
    $('#' + orderid).removeClass('Accepted');
    $('#' + orderid).removeClass('Pending');
    $('#' + orderid).removeClass('Rejected');
    $('#' + orderid).removeClass('Ready');
    $('#' + orderid).addClass(status);
    $('#itemStatus' + orderid).html(status);
    var TicketNumber = 0;
    var shopdetails = '';
    var history = '';
    if (typeof (isHistory) !== 'undefined') {
      history = '&history=' + parseInt(isHistory);
    }

    lat = null;
    long = null;
    
   var armShopDet={} ;
  
    if (status === "Accepted" || status === "Reprint") {
      $.ajax({
        type: 'POST',
        url: "Orderslog.proweb",
        data: "orderid=" + orderid + history + "&phone="+localget('PHONE'),
        async: false,
        success: function (data) {
          data = jQuery.parseJSON(data);
          var basketitems = '';
          if (typeof (data.total.sequenceNo) !== 'undefined') {
            TicketNumber = method + "-" + data.total.sequenceNo;
          } else {
            TicketNumber = method + "-" + data.total.order;
          }
          if (window.app.SHOW_SHOP_ADDRESS == "Yes") {
            shopdetails = '<div style="width:100%;font-size:12pt;"><center><strong>' + window.app.SHOPTITLE + '<br/>' + window.app.SHOPADDRESS + '<br/>' + window.app.SHOPTEL + '</strong></center></div>';
            
            armShopDet = {
                title : window.app.SHOPTITLE,
                adress: window.app.SHOPADDRESS,
                tel:  window.app.SHOPTEL
                
            };
  
            
          }

          if (window.app.PRINTLAYOUT == 2) {
            basketitems = ('<table style="width:100%"><tbody>');
          } else {
            basketitems = ('<table style="width:100%"><thead><tr><th width="80%">'+ tword('FOOD') +'</th><th width="20%">'+ tword('PRICE') +'</th></tr></thead><tbody>');
          }
          let postcodesQr = '';
          var CategoryItems = [];

          if (data == null) {
            return
          }
          var orBasArmi = data.orders;
          
          $.each(data.orders, function (key, val) {
            let catname = '';
            let catdisplay = '';
            if (window.app.PRINTLAYOUT == 2 || window.app.KITCHENPRINT == "Yes") {
              if (val.cat == 0) {
                catname = '0';
                catdisplay = "Deals";
              } else if (val.cat == 9999) {
                catname = '0';
                catdisplay = "Free Option";
              } else {
                var prod = JSON.parse(dataProducts[mergeid]);
                prod = prod.name[val.cat];



                Object.keys(prod).forEach(kv => {
                  if (prod[kv][0]['item_id'] == val.item_number) {
                    catname = (prod[kv][0]['product_cat']); //7
                    catdisplay = (prod[kv][0]['name']);

                  }

                })

                if (catname == null) {
                  catname = '999';
                  catdisplay = "Other"
                }
              }
              if (typeof (CategoryItems[catname]) == "undefined") {
                CategoryItems[catname] = [];
              }

              let itemQty = check_numbers(val.qty);
              let itemPrice = check_numbers(val.item_price * itemQty) + check_numbers(val.extraPrice * itemQty);

              CategoryItems[catname].push({
                price: itemPrice,
                catname: catdisplay,
                name: val.item_name,
                item_number: val.item_number,
                qty: itemQty,
                order_desc: val.order_desc,
                item_desc: clean(val.item_desc)
              }); 
              
              
            }

            if (window.app.PRINTLAYOUT != 2) {
              var underItemsk = '';
              var undeer1 = val.order_desc.replace("+", ",");
              var underitem = undeer1.split(",");

              $.each(underitem, function (i) {
                if (underitem[i].match('<strong>')) {
                  var xstyle = "border-top:2px solid #000;"
                } else {
                  var xstyle = "border-top:0px"
                }
                underItemsk = underItemsk + '<li style="list-style:inside; margin-top:5px; font-size:18px!important; font-weight:600!improtant;' + xstyle + '">' + underitem[i] + '</li>';
              });
              if (underItemsk != "") {
                underItemsk = '<ul>' + underItemsk + '</ul>';
              }
                let itemQty = check_numbers(val.qty);
                var itemPrice = check_numbers(val.item_price * itemQty);
                itemPrice += check_numbers(val.extraPrice * itemQty);

              basketitems = basketitems + ('<tr style="border-top:2px solid black"><td class="itemPrice"><strong style="font-size:25px!important;" class="itemName" >' + val.qty+'x'+ val.item_name + '</strong></br>' + underItemsk + '</td><td class="itemPrice"> £' + check_numbers(itemPrice).toFixed(2) + '</td></tr>');
            }
          });
          
          if (window.app.PRINTLAYOUT == 2 || window.app.KITCHENPRINT == "Yes") {
            if (window.app.KITCHENPRINT == "Yes") {
              var basItemK = '<table style="width:100%"><tbody>';
            }
            var myArrayNew = CategoryItems.filter(function (el) {
              return el != null && el != "";
            });
            CategoryItems = myArrayNew;
            for (var key in CategoryItems) {
              if (typeof (CategoryItems[key][0]) !== 'undefined') {
                if (window.app.PRINTLAYOUT == 2) {
                  basketitems = basketitems + '<tr><td colspan="3" style="font-size:25px;font-weight:bold;border:2px solid #000 !important;">' + CategoryItems[key][0]['catname'] + '</td></tr>';
                }
                if (window.app.KITCHENPRINT == "Yes") {
                  basItemK = basItemK + '<tr><td colspan="2" style="font-size:18px;font-weight:bold;border:2px solid #ccc !important;"><center>' + CategoryItems[key][0]['catname'] + '</center></td></tr>';
                }
                $.each(CategoryItems[key], function (keyi, vali) {
                  var underItemsk = '';
                  let items = '';
                  if (typeof (keyi) != "undefined") {
                    var undeer1 = vali.order_desc.replace("+", ",");
                    var underitem = undeer1.split(",");
                    $.each(underitem, function (i) {
                      if (underitem[i] != "" && typeof (underitem[i]) != "undefined" && underitem[i] != null) {
                        items = items + '<li style="margin-top:5px;text-align:left;">' + underitem[i] + '</li>';
                        underItemsk = underItemsk + '<li style="margin-top:5px;margin-left:6px;"> ' + window.app.PRODUCTS_EXTRAS_PREFIX + underitem[i] + '</li>';
                      }
                    });
                  }
                    
           
                  if (window.app.PRINTLAYOUT == 2) {
                    basketitems = basketitems + ('<tr><td style="font-size:25px;" colspan="2">' + vali.qty + '  x <b>' + vali.name + '<br/> </b><ul>' + items + '</ul></td><td><div>£ ' + check_numbers((vali.price)).toFixed(2) + '</div></td></tr>');
                  }
                  if (window.app.KITCHENPRINT == "Yes") {
                    basItemK = basItemK + '<tr><td class="itemPrice"><div style="font-size:20pt;">' + vali.qty + ' x </div><td><strong class="itemName" style="">' + vali.name + ' <br/> </strong><ul>' + underItemsk + '</ul></td></tr>';
                  }
                    
                 
                 
                });
              }
            }
          }
          
          data = data.total;
          var delivery = parseFloat(data.shipCharge).toFixed(2);
          var discount = check_numbers(data.discount).toFixed(2);
          var shiptype = data.method;
          var paymentMethod = data.paymentMethod;

          var orderType = data.orderid.substring(0, 3);
          var change = "";
          var custpay = "";
          var BasketTotalArea = check_numbers(data.Total);
          if (orderType != 'WEB') {
            change = check_numbers($('#prices').html() - $('#MainTotalFee').html());
            if (change > 0) {
              custpay = check_numbers($('#prices').html());

              custpay = '<tr><td width="50%" style="border-left: none;border-bottom: none;border-top: none;"></td><td style="text-align:left;" width="40%"><strong>'+ tword('TOTAL_PAY') +'</strong></td><td width="10%">£' + check_numbers(custpay).toFixed(2) + '</td></tr>';
              change = custpay + '<tr><td width="50%" style="border-left: none;border-bottom: none;border-top: none;"></td><td style="text-align:left;" width="40%"><strong>'+ tword('CHANGE') +'</strong></td><td width="10%">£' + check_numbers(change).toFixed(2) + '</td></tr>';

            } else {
              change = "";
            }
          }



          var Address = '';
          var DIS = '';

          if (data.street != null && data.street != 0 && data.street != '' && shiptype != "COLLECTION") {
            Address = data.street.toUpperCase() + '  ' + data.street2.toUpperCase() + '<br><strong>' + data.postcode.toUpperCase() + '</strong>';
            postcodesQr = data.postcode != '' && data.postcode != '0' ? data.postcode.toUpperCase() : '';

            if (data.LAT != '0' && data.LONG != '0' && data.LAT != '' && data.LONG != '') {
              lat = data.LAT;
              long = data.LNG;
            }

            if (data.street != '0' && data.street != '') {
              postcodesQr += ',' + data.street.replace(/ /g, '+')
            }

            if (data.street2 != '0' && data.street2 != '') {
              postcodesQr += ',' + data.street2.replace(/ /g, '+')
            }
          }
          DIS = data.DIS != '' && data.DIS != '0' ?  data.DIS : '';

          if (data.city == "TABLE") {
            Address = '<strong>'+ tword('TABLE') +':</strong>' + data.street.toUpperCase() + '  DINE:' + data.street2.toUpperCase() + '</strong>';
          }


          var hourSelect = '';
          if (data.hourSelect != "" && data.hourSelect != '0') {
            hourSelect = '<br/><strong class="HourSelected">'+ tword('HOUR_SELECTED') +': ' + data.hourSelect + '</strong>';
          }


          var selectMin = '';
          if (data.selectMin != "" && data.selectMin != '0') {
            selectMin = data.selectMin + tword('MIN');
          }

          var CallerData = "";
          if (data.cusname != 0 && data.cusname != '') {
            CallerData += '<div style="font-size:' + fontsize + 'px;">' + tword('NAME') + ":" + data.cusname.toUpperCase() + '</div>';
          }

          if (data.phone != 0 && data.phone != '') {
            CallerData += '<div style="font-size:' + fontsize + 'px;">' + tword('PHONE') + ":" + data.phone + '</div>';
          }
          if (Address != 0 && Address != '') {
            CallerData += '<div style="font-size:' + fontsize + 'px;">' + tword('ADDRESS') + ":" + Address + '</div>';
          }

          if (DIS != 0 && DIS != '') {
            CallerData += '<div style="font-size:' + fontsize + 'px;">' + tword('DIS') + ":" + DIS + '</div>';
          }


          if (data.hourSelect != 0 && data.hourSelect != '') {
            CallerData += '<div style="font-size:' + fontsize + 'px;">'+ tword('HOUR_SELECTED') +': ' + data.hourSelect + '</div>';
          }
          if (data.instruction != 0 && data.instruction != '') {
            CallerData += '<div style="font-size:' + fontsize + 'px;">Note: ' + data.instruction + '</div>';
          }


          var subtoal = '<tr style="border-width:2px 0px 2px 0px; border-color: #000; border-style: dashed;"><td style="text-align:left;" width="50%"><strong>'+ tword('SUB_TOTAL') +'</strong></td><td width="5-10%">'+ tword('PRICE_SEMBOL') + check_numbers(data.subTotal).toFixed(2) + '</td></tr>';
          if (shiptype == "COLLECTION") {

            delivery = '';
          } else {

            delivery = '<tr style="border-width:2px 0px 2px 0px; border-color: #000; border-style: dashed;"><td style="text-align:left;" width="50%"><strong>' + shiptype + '</strong></td><td width="10%">'+ tword('PRICE_SEMBOL') + check_numbers(delivery).toFixed(2) + '</td></tr>';
          }
          var cardfee = '';

          if (check_numbers(data.cardFee).toFixed(2) != "0.00" && data.cardFee != '') {
            cardfee = '<tr ><td width="50%" style="border-left: none;border-bottom: none;border-top: none;"></td><td style="text-align:left;" width="40%"><strong>'+ tword('SERVICE_FEE') +'</strong></td><td width="10%">'+ tword('PRICE_SEMBOL') + check_numbers(data.cardFee).toFixed(2) + '</td></tr>';
          }

          var DriverTips = '';
          if (data.DriverTips != "" && data.DriverTips != "0" && typeof (data.DriverTips) != "undefined") {
            DriverTips = '<tr><td width="50%" style="border-left: none;border-bottom: none;border-top: none;"></td><td style="text-align:left;" width="40%">'+ tword('DRIVER_TIPS') +'</td><td width="10%">' + (check_numbers(data.DriverTips)).toFixed(2) + '</td></tr>';
          }
          var discount2 = '';
          if (check_numbers(discount).toFixed(2) != "0.00") {
            discount2 = '<tr><td width="50%" style="border-left: none;border-bottom: none;border-top: none;"></td><td style="text-align:left;" width="40%"><strong>'+ tword('DISCOUNT') +' -</strong></td><td width="10%">' + tword('PRICE_SEMBOL') + check_numbers(discount).toFixed(2) + '</td></tr>';
          }
          var mainTotal = '<tr style="border-width:2px 0px 2px 0px; border-color: #000; border-style: dashed;"><td width="100mm" colspan="3" style=""><strong style="width:50%;padding:3px;height:90px;font-size:20pt; font-weight:bold;text-transform: uppercase">'+ tword('TOTAL_BILL') +'</strong></td><td width="10%">' + tword('PRICE_SEMBOL') + (check_numbers(BasketTotalArea)).toFixed(2) + '</td></tr>';


          var caller = '<div style="width:99%; border-width:0px 0px 0px 0px; border-color: #000; border-style: solid;    padding:3px;height:30px;font-size:20pt; font-weight:bold;text-transform: uppercase;">' + shiptype +' </div>';
          // var detailsOrder = shopdetails + '<div style="border:1px solid #000;border-radius:10px; width:100mm;"><h2>Order Ref:' + orderid + '</h2><hr/><div  style="height:50px;font-size: 16px; border-bottom:1px solid #000;"><div style="float:right; font-size:18px; width:100%;"><div style="float:left;">' + dateFormat(new Date(data.adddate), "dddd, mmmm dS, yyyy") +'</div><div style="float:right;text-align:right">'+dateFormat(new Date(data.adddate), "h:MM:ss TT")+'</div></div><div style="float:right; font-size:18px; width:100%;"><div style="float:left;">Order No:' + data.order +'</div><div style="float:right;text-align:right">Select Min:'+selectMin+'</div></div></div> ' + CallerData + caller + basketitems + subtoal + delivery  + cardfee +DriverTips+discount2+ mainTotal + '</div><div style="width:100%;font-size:13pt;"></div>'+ taxNumber +'<h2>Thank you for your customs</h2>';
          var detailsOrder = '<div style="border:0px solid #000;border-radius:10px; width:100mm;"><h2>'+ tword('ORDER_REF') +':' + orderid + '</h2><hr/><div  style="height:50px;font-size: 16px; border-bottom:0px solid #000;"><div style="float:right; font-size:18px; width:100%;"><div style="float:left;">' + dateFormat(new Date(data.adddate), "dddd, mmmm dS, yyyy") + '</div><div style="float:right;text-align:right">' + dateFormat(new Date(data.adddate), "HH:MM:ss") + '</div></div><div style="float:right; font-size:18px; width:100%;"><div style="float:left;">'+ tword('ORDER_NO') +':' + data.order + '</div><div style="float:right;text-align:right">Select Min:' + selectMin + '</div></div></div> ' +caller  + CallerData + basketitems + '</tbody></table><table style="width:100%"><tbody>' + subtoal + delivery + cardfee + DriverTips + discount2 + mainTotal + '</tbody></table><div style="width:99%; border-width:0px 0px 0px 0px; border-color: #000; border-style: solid;    padding:3px;height:auto;font-size:18pt; font-weight:bold;text-transform: uppercase;text-align: center;"><hr/> ' + paymentMethod + '<hr/> ' + TicketNumber + '</div></div><div style="width:100%;font-size:13pt;"></div>' + taxNumber + '<h2 style="text-align:center;">'+ tword('THANK_CUSTOMS') +'</h2>' + shopdetails ;
          let styles = 'body{font-family:arial;width:100mm;}#bitems { width:100mm;}#valdesc{font-size: 10pt;}.totalArea { width:100mm;} th {font-size: 16pt;}td,th {vertical-align: middle;height:50px;border:0px solid #000; padding:0px; text-align:left;margin:0px;}td:last-of-type, th:last-of-type{ font-size: 21px; border-right:0px;}  ul{ width:100%;margin:0px; padding:0px;}.bitemhead{ font-size:14.5pt;text-transform:uppercase; font-weight:bold;} ul li {list-style:none;font-size:15pt;font-weight:bold;text-transform: capitalize;}.bitemPrice, .totalArea {font-weight:bold; font-size:15pt; width:100%;}.btn { display:none !important;}.basketTotalArea { font-size:16pt;}.Customer p{padding:0px;margin: 7px;}ul{text-align: left;}.itemName { font-size:16pt;}.itemPrice { font-size:17px;}table { border-collapse: collapse;border-spacing: 0;}.Customer span,.Customer p strong{ font-size:30px;}';
          var reprint = 0;
          let printqty = 1;

          if (status.toLowerCase() == "reprint") {
            reprint = 1;
            if (shiptype == "DELIVERY") {
              printqty = window.app.DELIVERY_REPRINTQTY;
            } else {
              printqty = window.app.REPRINTQTY;
            }
          } else {
            if (shiptype == "DELIVERY") {
              printqty = window.app.DELIVERY_PRINTQTY;
            } else {
              printqty = window.app.PRINTQTY;
            }
          }
          var dtime = (data.adddate).split(" ");
          let detOrdsP = null;
          let Kprint = 0;
          if (window.app.KITCHENPRINT == 'Yes') {
            var callerK = '<div style="width:99%; border-width:2px 0px 2px 0px; border-color: #000; border-style: solid;    padding:3px;height:30px;font-size:18pt; font-weight:bold;text-transform: uppercase;text-align: center;">' + shiptype + ' - ' + data.order + ' </div>';
            detOrdsP = '<center><h2>'+ tword('KITCHEN_PRINT') +'</h2><center><div style="border:1px solid #000;border-radius:10px; width:100mm;">' + CallerData + caller + '<h2>'+ tword('ORDER_REF') +':' + orderid + '</h2><hr/><div  style="height:30px;font-size: 16px; border-bottom:1px solid #000;"><div style="width: 50%;float: left;">Date:' + dtime[0] + '</div><div style="width: 50%;float: right;">Time: ' + dtime[1] + '</div></div> ' + callerK + basItemK + '</tbody></table></div> <br> <style>' + styles + "</style>";
            if (reprint == "1") {
              Kprint = window.app.KITCHEN_REPRINTQTY;
            } else {
              Kprint = window.app.KITCHEN_PRINTQTY;
            }
          }

          setTimeout(() => {
              (async function () {
            if (window.app.NETPRINTER == 'Yes') {
              await NetPrint(orderid, data.order, reprint, printqty, Kprint);
            } else {
                if( typeof getTestFunc == 'function'){
        getTestFunc(JSON.stringify(armShopDet),JSON.stringify(orBasArmi),JSON.stringify(data,reprint), printqty, Kprint);
        }else{
              for (var i = 0, il = printqty; i < il; i++) {
                if (Kprint <= 0) {
                  detOrdsP = null;
                } else {
                  Kprint -= 1;
                }

                await print_iframe_get(detailsOrder, styles, 1, shiptype, postcodesQr, detOrdsP);
                await delay(1000);
                if (window.app.PRINT_TICKET_NUMBER == "Yes" && status != "Reprint" && orderType == 'TIL') {
                  printTicketNumber(TicketNumber);
                }
              }
            }
            }
          })();
          },100)

          if (window.app.PRINT_TICKET_NUMBER == "Yes" && status != "Reprint" && orderType == 'TIL') {
            printTicketNumber(TicketNumber);
          }

        }
      });
    }
    
  }
        
  function printTicketNumber(ticketNo,saleId = 0) {
    if (window.app.NETPRINTER == 'Yes') {
      $.ajax({
        type: 'GET',
        url: "TicketNumber.proweb",
        data: "token=2019TokenPro&saleId="+saleId+"&msg=" + ticketNo,
        async: false,
        success: function (data) {
          $('#loading').hide();
          let mes = JSON.parse(data);
          swal({
            type: 'warning',
            title: mes['message'],
            html: 'Printer.',
            timer: 2000
          });
        }
      });
    } else {
      print_iframe_get(ticketNo, null, 0);
    }
  }

  $('body').on('touchend click', '#SystemLineSetup', function (e) {
    e.preventDefault();
    var Phoneline = localget('Phoneline');
    var swalform = '<br/><label> Line</label><select name="swalfrom" id="LineSelect"><option value="1">1</option><option value="2">2</option></select>';
    swal({
      html: true,
      title: tword('SELECT_LINE'),
      text:  tword('CURRENT_LINE') + ":" + Phoneline + " " + swalform,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: tword('SELECT_LINE'),
      closeOnConfirm: true,
      showLoaderOnConfirm: true
    }, function () {
      var line = $("#LineSelect option:selected").val();

      localSet('Phoneline', line)
      $('#phone').click();
      swal(tword('LINE_SAVED'), data, "success");
    });
  });
  $('body').on('touchend click', '#SystemTypeSetup', function (e) {
    e.preventDefault();
    var Phoneline = $.cookie('SystemTypeAll'); //COOKIE
    var swalform = '<br/><label> '+ tword('SYSTEMS') +'</label><select name="swalfrom" id="LineSelectSystem">';
    var PriceButtons = window.app.PHONE_SYSTEM;
    var arr = PriceButtons.split(',');
    $.each(arr, function (key, vals) {
      var name = (vals == 'TEL' ? 'PHONE' : vals);
      var checket = (vals == Phoneline ? 'selected' : '');
      swalform = swalform + '<option value="' + vals + '" ' + checket + '>' + name + '</option>'
    });
    swalform = swalform + '</select>';
    swal({
      html: true,
      title: tword('SELECT_LINE'),
      text: tword('CURRENT_LINE') +":" + Phoneline + " " + swalform,
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: tword('SELECT_LINE'),
      closeOnConfirm: true,
      showLoaderOnConfirm: true
    }, function () {
      var line = $("#LineSelectSystem option:selected").val();
      $.cookie('SystemTypeAll', line, {
        expires: 365
      }); //COOKIE
      swal(tword('SYSTEM_SAVED'), data, "success");
      location.reload();
    });
  });
  $('body').on('touchend click', '.AdminButtons', function (e) {
    e.preventDefault();
    $('.AdminButtons').hide();
    $('.anydesk').hide();
  });


  function closeTillAllOption() {
    swal({
      title: tword('CLOSE_TILL'),
      text: tword('END_OF_THE_DAY'),
      confirmButtonText: tword('YES'),
      confirmButtonColor: "#DD6B55",
      showCancelButton: true,
      type: "warning",
    }, function (isConfirm) {
      if (isConfirm == true) {
        $.ajax({
          type: 'POST',
          url: "CloseTill.proweb",
          data: "tok=ProT2019GetZAll",
          async: false,
          success: function (data) {
            if (data == 1) {
              swal(tword('END_DAY_DONE'), '', 'success');
            }
          }
        });
      }
    });
  }
  $('#ReportArea').on('click', ".PrintMeX", function (e) {

    if (window.app.NETPRINTER == 'Yes') {
      $('#loading').show();
      $.ajax({
        type: 'GET',
        url: "PrintReport.proweb",
        data: "type=X-Report",
        async: false,
        success: function (data) {
          $('#loading').hide();
          let mes = JSON.parse(data);
          swal({
            type: 'warning',
            title: mes['message'],
            html: 'Printer.',
            timer: 2000
          });
        }
      });
    } else {

      print_iframe_get($('#basket').html(), null, 0);
    }
    return true;
  });
  $('#ReportArea').on('click', ".PrintMeXT", function (e) {

    if (window.app.NETPRINTER == 'Yes') {
      $('#loading').show();
      $.ajax({
        type: 'GET',
        url: "PrintReport.proweb",
        data: "type=X-Report",
        async: false,
        success: function (data) {
          $('#loading').hide();
          let mes = JSON.parse(data);
          swal({
            type: 'warning',
            title: mes['message'],
            html: 'Printer.',
            timer: 2000
          });
        }
      });
    } else {

      let $iframe = document.getElementById("topProIframe");
      var onPrintFinished = function (printed) {

        return 1;
      }

      setTimeout(() => {
        onPrintFinished($iframe.contentWindow.print());
      }, 100);
    }
    return true;
  });
  $('#productsettings').on('touchend click', ".system", function (e) {
    e.preventDefault();
    var val = $(this).attr('data-title');
    if (val == 'C') {
      $('#prices').html('');
      $('#prices').attr('title', '');
    }
  });
  $('#productsettings').on('touchend click', ".Numbers", function (e) {
    e.preventDefault();
    var val = $(this).attr('data-title');
    var span = $('#prices').html();
    //lert(span.indexOf('.'));
    //alert(val.indexOf('.'));
    if (span.indexOf('.') < 0) {
      //	$('#prices').html(val);
      //	return true;
    }
    if ($(this).hasClass('fullamount')) {
      $('#prices').html(val);
      return
    }
    var newval = $('#prices').attr('title');
    if (typeof (newval) == "undefined") {
      $('#prices').attr('title', 0);
    }
    var newspan = ($('#prices').attr('title') + val);
    $('#prices').attr('title', newspan);
    // alert(newspan);
    $('#prices').html(check_numbers(newspan / 100).toFixed(2));
  });
  $('#productsettings').on('touchend click', "#Little", function (e) {
    e.preventDefault();
    $('.BtnExtra').removeClass('activeBtn');
    $(this).addClass('activeBtn');

    localSet("Little", 1);
  });
  $('body').on('touchend click', ".listAdditem", function (e) {
    e.preventDefault();
    var maxS = $(this).attr('data-maxs') || 0;
    var ref = $(this).attr('id').replace("&", "");
    var price = $(this).attr('value');
    var toggle = $(this).data('toggle');
    var toggleState = $(this).data('togglestate'); // 0: Not Added -> Yes -> No -> 0
    var name = $(this).attr('data-pname');
    var cat = $(this).attr('data-cat');
    var exID = $('.QtyButton').attr('data-title');
    var frees = $(this).attr('data-free');
    if (maxS == 0) {
      maxS = 10;
    }
    var jn = $('.JustNo.active').attr('id');
    $('.JustNo').removeClass('active');
    var sp = localget('Separate');
    var pref = $('.basket' + exID).attr('data-ref');
    var subref = $(this).attr('data-Subref');
    var speRef = "it" + exID + name

    var id = $('.QtyButton').attr('data-title');
    if (typeof (id) == "undefined") {
      swal("PLEASE SELECT A SIZE FIRST", '', 'warning');
      return false;
    }

    if (typeof (BasketItems[exID]['data'][subref]) == "undefined") {
      BasketItems[exID]['data'][subref] = [];
    }
    if (BasketItems[exID]['data'][subref].length < maxS) {
        if(toggle !== 1 || (toggle === 1 && toggleState === 0)){
            BasketItems[exID]['data'][subref].push(name);
        }
    }else if(BasketItems[exID]['data'][subref].length == maxS){
        if(toggle === 0 || (toggle === 1 && togglestate === 0)) {
            swal("WARNING", "Item Limit. Maximum " + maxS + " items can be added", "warning");
            return false;
        }
    }


    if (jn === "No" && typeof (jn) != "undefined") {
      name = "No " + name;
      price = 0;
      frees = -1;
    }
    if (jn === "Little" && typeof (jn) != "undefined") {
      price = check_numbers(price / 2);
      name = "Little " + name;
      frees = -1;
    }
    if (jn === "Separate" && typeof (jn) != "undefined") {
      name = "Separate " + name;
    }
    if (jn === "Extra" && typeof (jn) != "undefined") {
      name = "Extra " + name;
    }
    if (localget("FREE") == 1) {
      price = 0;
      frees = -1;
      localSet("FREE", 0);
    }
    if (localget("HALF") == 1) {
      price = check_numbers(price / 2);
      frees = -1;
      name = "Half " + name;
      localSet("HALF", 0);
    }
    var free = $(this).attr('data-free');
    if (cat == window.app.PIZZACAT) {
      FreeArray.push(ref);
      if (FreeArray.length < 5) {}
    }
    if (typeof exID !== 'undefined') {
      $(this).addClass('selecteditem');

      SaveBasketExtras(ref, price, name, cat, exID, $(this), frees, toggle, toggleState);
    }

    var nextS = BasketItems[exID]['data'][subref].length;


    if (nextS == maxS) {

      if (StepByStepList.length != 0) {
        CurrentStep++;
        $('.YesTopping').hide();
        ShowStepByStepList(StepByStepList, CurrentStep);
      }
    }

  });


  function SaveBasketItem(ref, title, type, price, name, settings, cat, ditemids, dealprice, hasextra) {
    $('#activeproduct').val(title);
    if (localget("FREE") == 1) {
      price = 0;
      localSet("FREE", 0);
    }
    if (localget("HALF") == 1) {
      price = check_numbers(price / 2);
      localSet("HALF", 0);
    }
    var basketitems = [];

    if (BasketTotal + check_numbers(price) >= 0) {
      name = type + " " + name;
      BasketItems.unshift({
        keyNo: 0,
        name: name,
        price: price,
        qty: 1,
        catid: cat,
        ref: ref,
        settings: settings,
        ditemids: ditemids,
        dealprice: dealprice,
        type: type,
        deal: 0,
        pcart: [],
        hasextra: hasextra,
        data: [],
      });
      var itdescle = BasketItems.length;
      for (var i = 0; i < itdescle; i++) {
        BasketItems[i]['keyNo'] = i;
      }
      $('.QtyButton').attr('data-title', 0);
      UpdateBasket(BasketItems);
      BasketTotal += check_numbers(price);
    } else {
    //   console.log(5266);
      swal({
        html: true,
        title: tword('BASKET_TOTAL_ERROR'),
        text: tword('BASKET_TOTAL_ERROR_TEXT'),
        type: "error",
        showConfirmButton: true
      });
    }
  }

  function SaveBasketComment(ref, price, name, cat, exID) {
    var id = $('.QtyButton').attr('data-title');
    if (id != "") {
      if (BasketTotal + check_numbers(price) >= 0) {
        var dataroll = "ref=" + ref + "&catid=" + cat + "&price=" + price + "&name=" + name + "&qty=1&exID=" + exID;
        var basketitems = [];
        $.ajax({
          type: 'POST',
          url: "SaveExtra.proweb",
          data: dataroll,
          success: function (data) {
            obj.attr('id', "AddedtoBasket" + data);
            $('.extraOptions' + id).append('<li class="listitems" id="item' + data + '">' + name + '<div style="float:right;" data-iref="' + data + '" class="changeprice" data-iprice="' + check_numbers(itemprice).toFixed(2) + '"></div><div style="float:left; margin-right:20px;"><button id="' + data + '" class="btn remove" data-title="0"><span aria-hidden="true"  class="glyphicon glyphicon-remove-circle" ></span></button></div></li>');
            var currentFee = ($('#basketPrice' + id).html().replace('£ ', ''));
            var newPrice = check_numbers(currentFee) + check_numbers(price);
            $('#basketPrice' + id).html('£ ' + check_numbers(newPrice).toFixed(2));
            BasketTotal += check_numbers(price);
          }
        });
      } else {
        // console.log(5297);
        swal({
          html: true,
          title: tword('BASKET_TOTAL_ERROR'),
          text: tword('BASKET_TOTAL_ERROR_TEXT'),
          type: "error",
          showConfirmButton: true
        });
      }
    }
  }

  function SaveBasketExtras(ref, price, name, cat, exID, obj, free, toggle = 0, toggleState = 0) {
    var id = $('.QtyButton').attr('data-title') || $('#Note').attr('data-title');
    var pcartNo = BasketItems[id]['pcart'].length
    var basketcat = BasketItems[id]["settings"];
    
    var subref = $(obj).attr('data-Subref');
    if (id != "") {
      if (basketcat.length > 0 && typeof (basketcat) != "undefined" && basketcat !== null) {
        var valNew = basketcat.split(',');
        for (var i = 0; i < valNew.length; i++) {
          var newss = valNew[i].split(':');
          if (newss[0] == subref) {
            if (newss[1] !== "-" && typeof (newss[1]) != "undefined" && newss[1] !== null) {
              free = newss[1];
            }
          }
        }
      }

      if (free > 0) {
        var count = 1;
        for (var i = 0; i < pcartNo; i++) {
          count += (BasketItems[id]['pcart'][i]["subref"] == subref);
        }
        if (free >= count) {
          price = 0;
        }
      }
      if (BasketTotal + check_numbers(price) >= 0) {
          if(toggle !== 1){
            BasketItems[id]['pcart'].push({
              ref: ref + exID,
              catid: cat,
              prie: price,
              name: name,
              qty: 1,
              exID: exID,
              pcartord: pcartNo,
              subref: subref,
              free: free
            });
          }else if (toggle === 1){
              let index;
              if(toggleState === 0){
                  BasketItems[id]['pcart'].push({
                      ref: ref + exID,
                      catid: cat,
                      prie: price,
                      name: 'Extra ' + name,
                      qty: 1,
                      exID: exID,
                      pcartord: pcartNo,
                      subref: subref,
                      free: free,
                      togglestate: 'Yes'
                    });
                    
                $('#'+ref).data('togglestate', 'Yes');
                $('#'+ref).addClass('togglestate-yes');
              }
              else if(toggleState === 'Yes'){
                  index = BasketItems[id]['pcart'].findIndex( BasketExtra => BasketExtra.ref === ref + BasketExtra.exID );
                  BasketItems[id]['pcart'][index]['togglestate'] = 'No';
                  BasketItems[id]['pcart'][index]['name'] = 'No ' + name;
                  $('#'+ref).data('togglestate', 'No');
                  $('#'+ref).removeClass('togglestate-yes');
                  $('#'+ref).addClass('togglestate-no');
              }
              else if(toggleState === 'No'){
                  index = BasketItems[id]['pcart'].findIndex( BasketExtra => BasketExtra.ref === ref + BasketExtra.exID );
                    BasketItems[id]['pcart'].splice(index, 1);
                    var currentFee = $('#basketPrice' + id).html().replace('£ ', '');
                    var newPrice = check_numbers(currentFee) - check_numbers(BasketItems[id]['pcart'][index]['prie']);
                    $('#basketPrice' + id).html('£ ' + check_numbers(newPrice).toFixed(2));
                    BasketTotalQtyChange = true;
                    index = BasketItems[id]['data'][subref].findIndex( Extra => Extra === name );
                    BasketItems[id]['data'][subref].splice(index, 1);
                    UpdateBasket(BasketItems);
                    $('#'+ref).data('togglestate', 0);
                    $('#'+ref).removeClass('selecteditem');
                    $('#'+ref).removeClass('togglestate-no');
              }
          }
        UpdateBasket(BasketItems);
        BasketTotal += check_numbers(price);
      } else {
        // console.log(5353);
        swal({
          html: true,
          title: tword('BASKET_TOTAL_ERROR'),
          text: tword('BASKET_TOTAL_ERROR_TEXT'),
          type: "error",
          showConfirmButton: true
        });
      }
    }
  }

  function UpdateBasket(BasketItems) {
   
    var totalBasket = 0;
    var delivery = 0;
    var discount = 0;
    var totalsdiscount = 0;
    var basketitems = [];
    var DisTotal = [];
    var e = '';
    basketitems = ('<table id="bitems"><tr><th width="22">#</th><th>'+ tword('NAME') +'</th><th width="60" class="hidemobile">'+ tword('PRICE') +'</th><th width="22">'+ tword('NOTE') +'</th></tr><tbody id="basketlistitems">');
    var data = BasketItems;
    if (data != null) {
      $.each(data, function (key, val) {
        var hasextra = val.hasextra;
        var strlist = "basketlisting";
        var underItems = [];
        var totalExtraCharge = 0;
        var eachitem = 0;
        var iqty = val.qty;
        
 $.each(window.app.DISCOUNTLIST, function (kdis, vdis) {
   
        if (val.catid == vdis.cat) {
            let  DisSize = vdis.size.split(",");
          if (jQuery.inArray(val.type, DisSize) != "-1") {
               if (typeof DisTotal[val.catid] == 'undefined') {
                   DisTotal[val.catid]=[];
               }
           DisTotal[val.catid].push(val.price);
          }
        }
    });
        let i = 0;
        $.each(data[val.keyNo]['pcart'], function (k, v) {
          var step = v.step;
          totalExtraCharge += check_numbers(v.prie);
          if (v.prie != 0) {
            eachitem += check_numbers(v.prie);
          }


          if (v.main == 1) {
            var c = "MainSelect MainBox" + step;
            var b = "border-top:2px solid #000 !important;"
            var d = "display:none;"
            e = v.ref;
            var f = " << EDIT";
          } else {
            var c = "";
            var b = "";
            var d = "";
            var f = "";
          }

          var subprice = "£" + check_numbers(v.prie * v.qty).toFixed(2) || '';
          if (v.prie == 0) {
            subprice = ''
          }


          let ids = 'item' + val.keyNo + '-' + i;
          if (val.deal == 1) {
            underItems = underItems + ('<li data-selection="0"  data-pname="' + v.name + '" data-optname="' + v.ref + '" data-uid="' + v.uid + '" data-ref="' + v.ref + '" data-step="' + step + '" style="font-size:21px; padding: 10px 0px !important;list-style: none; ' + b + '" data-pcartord="' + v.pcartorder + '" class="slectDeal ' + c + ' ' + e + '" id="' + ids + '" data-settings="' + val.settings + '">' + v.name + f + '<div style="float:right;" data-iref="' + v.ref + '" class="changeprice" data-iprice="' + check_numbers(v.prie * v.qty).toFixed(2) + '">' + subprice + '</div><div style="float:left; margin-right:20px; ' + d + '"><button data-itemid="' + val.keyNo + '" data-ref="' + val.ref + '"  id="' + v.ref + '" data-rem="' + ids + '" data-key="' + k + '" data-subref="' + v.subref + '" class="btn remove" data-deal="1" data-title="' + v.prie + '" data-itemname="' + v.name + '"><span aria-hidden="true"  class="glyphicon glyphicon-remove-circle"></span></button></div></li>');
          } else {
            underItems = underItems + ('<li data-pcartord="' + v.pcartord + '" class="listitems ' + c + '" id="item' + val.keyNo + '" data-settings="' + val.settings + '" id="' + ids + '">' + v.name + '<div style="float:right;" data-iref="' + v.ref + '" class="changeprice" data-iprice="' + check_numbers(v.prie * v.qty).toFixed(2) + '">' + subprice + '</div><div style="float:left; margin-right:20px;"><button data-itemid="' + val.keyNo + '"  id="' + v.ref + '" data-rem="' + ids + '" data-key="' + k + '" data-subref="' + v.subref + '" class="btn remove" data-ref="' + val.ref + '" data-deal="1" data-title="' + v.prie + '" data-itemname="' + v.name + '"><span aria-hidden="true"  class="glyphicon glyphicon-remove-circle"></span></button></div></li>');
          }

          i++;
        });

        if (val.deal == 1) {
          strlist = "deallisting";
        }
        var itemP = val.qty * (check_numbers(val.price) + check_numbers(eachitem));
        var style = '';
        if (fontsize < 10) {
          style = 'style="font-size: 32px !important;"';
        } else {
          style = 'style="font-size: ' + fontsize + 'px !important;"';
        }
        basketitems = basketitems + ('<tr data-desc="'+clean(val.item_desc)+'" data-title="' + val.catid + '" id="' + val.keyNo + '" class="basket' + val.keyNo + " " + strlist + '  deal' + val.deal + ' " data-qty="' + val.qty + '" data-hasextra="' + hasextra + '"   data-settings="' + val.settings + '"data-ref="' + val.ref + '"  data-type="' + val.type + '" ><td id="cartqty' + val.keyNo + '" ' + style + '>' + val.qty + '</td><td><div  class="bitemhead"><strong>' + val.name + '</strong><ul class="extraOptions' + val.keyNo + '" id="' + val.keyNo + 'bitemhead">' + underItems + '</ul></div></td><td class="hidemobile"><div class="bitemPrice" id="basketPrice' + val.keyNo + '">£ ' + check_numbers(itemP).toFixed(2) + '</div></td><td> <button id=Note" data-pcart="' + val.keyNo + '" data-top="0" style="float:left; background-color: #3FD2C7;width: 100% !important;" class="btn btn-primary hvr-shutter-out-horizontal Note"><i class="glyphicon glyphicon-copy"></i></button>£' + check_numbers(itemP).toFixed(2) + '</td></tr>');
        //	alert(totalBasket);
        totalBasket += itemP;
      });
     
           if(DisTotal.length > 0 ){
       $.each(window.app.DISCOUNTLIST, function (kdis, vdis) {
$.each(DisTotal, function (kdt, vdt) {
           if(kdt == vdis.cat){
        let CatCount = DisTotal[vdis.cat].length;
if (CatCount >= vdis.selectqty) {
        var itemcounter = Math.floor(check_numbers(CatCount / vdis.selectqty));
        var totacon = itemcounter * vdis.selectqty;
        for (var i = 0; i < totacon; i++) {
          totalsdiscount += check_numbers(DisTotal[vdis.cat][i]);
        }
        let discoint =0;
        for (var i = 0; i < itemcounter; i++) {
          discoint += Math.min.apply(Math, DisTotal[vdis.cat]);
        //  console.log(discoint);
          DisTotal[vdis.cat].splice(DisTotal[vdis.cat].indexOf(discoint), 1);
        //   console.log(DisTotal);
        }
        discount += check_numbers(vdis.dealoffer * (discoint / 100))
}
           }
       });
       });
       
        localSet('discountAmount', discount)
        localSet('discountAmountRule', discount)
        localSet('discountAmountWhitout', totalsdiscount)
        var dataroll = "discountAmount=" + discount;
        $.ajax({
          type: 'GET',
          url: "DiscountCalculation.proweb",
          data: dataroll,
          async: false,
          success: function (data) {}
        });
           }

      $("#basketitems").html("");

      $("<div>", {
        "class": "basketitems",
        html: basketitems
      }).appendTo("#basketitems");
      var mainTotals = check_numbers(totalBasket) + check_numbers(delivery) - check_numbers(discount);

      if (mainTotals < 0) {
        swal({
          html: true,
          title: tword('BASKET_TOTAL_ERROR'),
          text: tword('BASKET_TOTAL_ERROR_TEXT'),
          type: "error",
          showConfirmButton: true
        });
      } else {
        if (BasketTotalQtyChange) {
          BasketTotal = mainTotals;
          BasketTotalQtyChange = false;
        }
      }
      

      localSet('TOTALFEE', check_numbers(check_numbers(totalBasket) + check_numbers(delivery)).toFixed(2));
      
      
      if(window.app.CUSTOMERTYPE!="Barber"){
      delivery = '<tr><td class="totalLabel" id="DeliveryLabel">' + localget("METHOD") + '</td><td class="totalValue" id="DeliveryFee">' + check_numbers(delivery).toFixed(2) + '</td></tr>';
      }else{
          delivery="";
      }
      
      discount = '<tr><td class="totalLabel">Discount</td><td class="totalValue" id="DiscountFee">' + check_numbers(discount).toFixed(2) + '</td></tr>';
      if (typeof (localget("PayType")) == "undefined") {
        localSet("PayType", "")
      }
      var mainTotal = '<tr><td class="totalLabel">Total</td><td class="totalValue" id="MainTotalFee">' + (check_numbers(mainTotals)).toFixed(2) + '</td></tr><div><h4 id="PmethodNew">' + localget("PayType") + '</h4></div>';
      $("<div>", {
        "class": "basketTotalArea",
        html: '<table class="totalArea"><tr ><td class="totalLabel">Note: </td><td class="totalValue"><div>' + localget("BASKETNOTE") + '</div></td></tr><tr ><td class="totalLabel">Sub Total: </td><td class="totalValue"><div class="TotalValue">' + check_numbers(totalBasket).toFixed(2) + '</div></td></tr>' + delivery + discount + mainTotal + '</table>'
      }).appendTo("#basketitems");
      
      
      var rowCountbasket = $('#basketlistitems tr').length;
      $('#BasketFooter').html("("+rowCountbasket+")");
    }
    $('.bitemhead ul').each(function () {
      $(this).html($(this).children('li').sort(function (a, b) {
        return ($(b).data('pcartord')) < ($(a).data('pcartord')) ? 1 : -1;
      }));
    });
    $('#bitems tbody').each(function () {
      $(this).html($(this).children('tr').sort(function (a, b) {
        //  return ($(b).attr('id')) > ($(a).attr('id')) ? 1 : 1;
      }));
    });
  }
  $('#productsettings').on('touchend click', ".listitems", function (e) {
    e.preventDefault();
    var order = $(this).attr('data-pcartord');
    $('.DeliveryType').attr('data-order', order);
  });
  $('#productsettings').on('touchend click', ".deallisting", function (e) {
    e.preventDefault();
    var id = $(this).attr('id');
    var ref = $(this).attr('data-ref');
    $('.DeliveryType').attr('data-title', id);
    $('.QtyButton').attr('data-title', id)
    // GETDEALCONTENT(ref, id);
  });

  function GETDEALCONTENT(ref, id) {
    data = dataDEALS[mergeid];
    var name = '';
    var dref = '';
    var qty1 = 0;
    var qty2 = 0;
    var option1 = '';
    var option2 = '';
    var listing = '';
    var option3 = '';
    var qty3 = 0;
    var ExtraFilters = '';
    var option4 = '';
    var ExtraOvalue = '';
    var option4Head = '';
    var optionFilterExtra = "";
    var ItemHeader = '';
    var arFilter = [];
    var arFilter2 = [];
    var Filters = "";
    var OptionsTotal = '';
    var itemDesc = '';
    name = data.name[ref].name;
    ItemHeader = data.name[ref].ItemHeader;
    dref = data.name[ref].ref;
    qty1 = data.name[ref].qty1;
    qty2 = data.name[ref].qty2;
    option1 = data.name[ref].option1;
    if (option1 !== "") {
      OptionsTotal = data.name[ref].settings1;
    }
    option2 = data.name[ref].option2;
    if (option2 !== "") {
      OptionsTotal = OptionsTotal + ',' + data.name[ref].settings2;
    }
    listing = data.name[ref].ExtraList;
    itemDesc = data.name[ref].listing;
    option3 = data.name[ref].option3;
    qty3 = data.name[ref].qty3;
    ExtraFilters = data.name[ref].ExtraFilters;
    optionFilterExtra = data.name[ref].ExtraList;
    if (option3 !== "") {
      OptionsTotal = OptionsTotal + ',' + data.name[ref].settings3;
    }
    //BOTTLEOFSOFTDRINK*7-up:0,Diet Coke:0,Pepsi:0,Tango Orange:0
    if (ItemHeader != "") {
      var listItems = ItemHeader.split('_');
      var itemPalen = '';
      $.each(listItems, function (key, val) {
        var Split1 = val.split('*');
        var op = Split1[0].replace(/ /g, '');
        var but = Split1[1].split(",");
        var ButtList = '';
        $.each(but, function (k, v) {
          var It1 = v.split(':');
          ButtList = ButtList + '<button data-itemcharge="' + It1[1] + '" class="btn DealButton" data-main="1" data-title="' + It1[0] + '" data-head="' + It1[0] + '">' + It1[0] + '</button>';
        });
        itemPalen = itemPalen + '<div class="accordion-group YesTopping" style="display: table;" id="T' + op + '"><div class="accordion-heading"> <a class="accordion-toggle collapsed" data-toggle="collapse" data-target="#' + op + '" href="#" aria-expanded="false">' + Split1[0] + '</a></div><div id="' + op + '" class="collapse out" aria-expanded="false" style=""><div class="accordion-inner">' + ButtList + '</div></div></div>';
      });
    }
    //	OptionsTotal =	OptionsTotal+','+ExtraFilters;
    Filters = OptionsTotal.split(',');
    // BOTTLE:1:1:0:0,EXTRA TOPPINGS FOR 12 PIZZA:7:4:1.50:0
    var FilterLenght = Filters.length;
    for (var i = 0; i < FilterLenght; i++) {
      var priceExtra = Filters[i].split(':');
      arFilter[priceExtra[0].replace(/ /g, '')] = priceExtra[3];
      arFilter2[priceExtra[0].replace(/ /g, '')] = priceExtra[2];
    }
    $('#productbuttons').css('display', 'block');
    $('#productlayout').removeClass('col-md-10');
    $('#productlayout').addClass('col-md-12');
    $('#productlayout').removeClass('col-sm-10');
    $('#productlayout').addClass('col-sm-12');
    $('#productbuttons').css('display', 'none');
    if (typeof (option1) != 'undefined' && option1 != "" && option1.indexOf(":") != -1) {
      option1 = option1.split(':');
      // BOTTLE:1:1:0:0,EXTRA TOPPINGS FOR 12 PIZZA:7:4:1.50:0
      var option1Head = option1[0];
      var option1Options = option1[1].split('-');
      option1 = '';
      $.each(option1Options, function (key, val) {
        var B = option1Head.replace(/ /g, '');
        option1 = option1 + '<button  data-itemcharge="' + arFilter[B] + '" class="btn DealButton" data-main="1" data-title="' + val + '" data-head="' + option1Head + '"  >' + val + '</button>';
      });
      option1 = '<div class="col-md-12 Options"><div class="OptionHead">' + option1Head + '<span>('+ tword('QTY') +':' + qty1 + ')</span></div><div class="col-md-12 col-sm-12">' + option1 + '</div></div>';
    } else {
      if (option1 != "") {
        option1 = '<button  style="width:187px !important;" data-itemcharge="0" class="btn DealButton" data-main="1" data-title="' + option1 + '" data-head="' + option1 + '"  >' + option1 + '</button>';
      }
    }
    listing = listing.split(',');
    var liop = '';
    if (listing != "") {
      $.each(listing, function (key, val) {
        var B = "OPTION";
        liop = liop + '<button  data-itemcharge="0.00" class="btn DealButton" data-title="' + val + '" data-main="1" data-head="Option"  >' + val + '</button>';
      });
      liop = '<div class="col-md-12 Options"><div class="OptionHead">'+ tword('OPTION') +'<span></span></div><div class="col-md-12 col-sm-12">' + liop + '</div></div>';
    }
    if ((option2) !== '' && option2.indexOf(":") != -1) {
      option2 = option2.split(':');
      var option2Head = option2[0];
      var option2Options = option2[1].split('-');
      option2 = '';
      $.each(option2Options, function (key, val) {
        option2 = option2 + '<button  data-itemcharge="0" class="btn DealButton" data-main="1" data-title="' + val + '" data-head="' + option2Head + '"  >' + val + '</button>'
      });
      option2 = '<div class="col-md-12 Options"><div class="OptionHead">' + option2Head + '<span>('+ tword('QTY') +':' + qty2 + ')</span></div><div class="col-md-12 col-sm-12">' + option2 + '</div></div>';
    } else {
      if (option2 != "") {
        option2 = '<button style="width:187px !important;"  data-itemcharge="0" class="btn DealButton" data-main="1" data-title="' + option2 + '" data-head="' + option2 + '"  >' + option2 + '</button>';
      }
    }
    if ((option3) !== '' && option3.indexOf(":") != -1) {
      option3 = option3.split(':');
      var option3Head = option3[0];
      var option3Options = option3[1].split('-');
      option3 = '';
      $.each(option3Options, function (key, val) {
        option3 = option3 + '<button  data-itemcharge="0" class="btn DealButton" data-main="1" data-title="' + val + '" data-head="' + option3Head + '"  >' + val + '</button>';
      });
      option3 = '<div class="col-md-12 Options"><div class="OptionHead" >' + option3Head + '<span>('+ tword('QTY') +':' + qty3 + ')</span></div><div class="col-md-12 col-sm-12">' + option3 + '</div></div>';
    } else {
      if (option3 != "") {
        option3 = '<button  data-itemcharge="0" class="btn DealButton" data-main="1" data-title="' + option3 + '" data-head="' + option3 + '" style="width:187px !important;" >' + option3 + '</button>';
      }
    }
    var OptionsMain = '<div class="col-md-12">' + option1 + option2 + option3 + '</div>';
    //alert($('.QtyButton').attr('data-title'));
    //<button class="btn btn-primary hvr-shutter-out-horizontal QtyButton" id="+"><span aria-hidden="true" class="glyphicon glyphicon-plus"></span></button><button class="btn btn-primary hvr-shutter-out-horizontal QtyButton" id="-"><span aria-hidden="true" class="glyphicon glyphicon-minus"></span></button>
    $('#productlayout').html('<div class="col-md-12 col-sm-12 QtyButton" id="offerHead" data-ref="' + dref + '"><h2>' + name + ' <span>(' + itemDesc + ')</span></h2><span id="pdescarea"></span></div><div class="col-md-12 col-sm-12">' + liop + OptionsMain + option4Head + itemPalen + '</div>');
    $('.productInfo li').hide();
    $('.productInfo li:lt(15)').show();
    //END DEALS
  }
  $('#productsettings').on('touchend click', ".remove", function (e) {
    e.preventDefault();
    var id = $(this).attr('id').replace(/\s/g, "");
    var title = $(this).attr('data-title');
    var mainID = ($(this).closest('ul').attr('id').replace('bitemhead', ''));
    var currentFee = $('#basketPrice' + mainID).html().replace('£ ', '');
    var newPrice = check_numbers(currentFee) - check_numbers(title);

    var exID = $(this).attr('data-itemid');
    var pref = $(this).attr('data-ref')
    var name = $(this).attr('data-itemname');
    var speRef = "it" + exID + name;
    var subref = $(this).attr('data-subref');
    var ids = $(this).attr('data-rem');
    var keys = $(this).attr('data-key');
    $('#basketPrice' + mainID).html('£ ' + check_numbers(newPrice).toFixed(2));
    BasketTotalQtyChange = true;
    RemoveBasketDeal(id, 1, keys, exID);
    BasketItems[exID]['data'][subref].splice(name, 1)
  });

  function RemoveBasket(ref, title, extId) {

    if (title != -1) {
      var itt = BasketItems[extId]['pcart'].length;
      for (var b = 0; b < itt; b++) {
        var reflick = BasketItems[extId]['pcart'][b];
        if (typeof (reflick) != "undefined" && reflick !== null && reflick.ref == ref) {
          BasketItems[extId]['pcart'].splice(b, 1);
          UpdateBasket(BasketItems);
        }
      }
    }
  }
  Array.prototype.remove = function (el) {
    return this.splice(this.indexOf(el), 1);
  }

  function RemoveBasketDeal(ref, title, key, exID) {
    if (title != -1) {

      var reflick = BasketItems[exID]['pcart'][key];
      if (typeof (reflick) != "undefined" && reflick !== null && reflick.ref == ref) {
        BasketItems[exID]['pcart'].splice(key, 1)
        UpdateBasket(BasketItems);
      }

    }
  }
  $('body').on('touchend click', "#OptOutCustomer", function (e) {
    e.preventDefault();
    var tel = $('#cphone').val();
    var dataroll = "phone=" + tel;
    $.ajax({
      type: 'POST',
      url: "OptOut.proweb",
      data: dataroll,
      async: false,
      success: function (data) {
        if (data == 1) {
          swal(tword('OPT_OUT'), tword('P_CHECK_NUMBER') + tel, "warning");
          $('#cphone').val('')
        }
      }
    });
  });

  function UpdateBasketWithNoLoad(ref, title, type, price, name, settings, cat, ditemids, dealprice, str, cartid, desc) {
    var itemid = "basketPrice" + cartid.replace(/\s/g, "");
    var dataroll = "d=" + ref + "&qty=" + title;
    $.ajax({
      type: 'POST',
      url: "ProductDelete.proweb",
      data: dataroll,
      async: false,
      success: function (data) {}
    });
    var strlist = " basketlisting";
    if (type == "Deal") {
      strlist = " deallisting";
    }
    if (window.app.SHOW_RGL == "Yes"){
       type = "(" + type + ") "
    }else {
        if(type == "RGL" || type == ""){
            type = "";
        }else{
            type = "(" + type + ") "
        }
    }
    var basketitems = ('<tr data-ref="' + ref + '" data-desc="' + desc + '"  data-qty="1" id="' + cartid.replace(/\s/g, "") + '" class="saveNoLoad basket' + cartid.replace(/\s/g, "") + strlist + '" data-type="' + type + '" data-title="' + cat + '" data-extra="' + title + '" data-settings="' + settings + '"><td>1</td><td><div  class="bitemhead">' + type + name + '<ul id="' + cartid.replace(/\s/g, "") + 'bitemhead"  class="extraOptions' + cartid + '"></ul></div></td><td><div id="' + itemid + '" class="' + itemid + '">£ ' + check_numbers(price).toFixed(2) + '</div></td></tr>');
    //basketitems = basketitems + ('<tr  data-title="'+val.cat+'" id="'+val.cartid+'" class="basket'+val.cartid+" "+strlist+' deal'+val.deal+' " data-qty="'+val.qty+'"   data-settings="'+val.settings+'"data-ref="'+val.ref+'"  data-type="'+val.type+'" ><td id="cartqty'+val.cartid+'">'+val.qty+'</td><td><div  class="bitemhead">'+val.Name+'<ul class="extraOptions'+val.cartid+'" id="'+val.cartid+'bitemhead">'+underItems+'</u l></div></td><td><div class="bitemPrice" id="basketPrice'+val.cartid+'">£ '+ check_numbers( eachitem +  (val.price * val.qty) ).toFixed(2)+'</div></td></tr>');
    $('#basketlistitems').prepend(basketitems);
    updateTotalArea(price);
  }

  function updateTotalArea(price) {
    var total = check_numbers($('.TotalValue').html()) + check_numbers(price);

    $('.TotalValue').html(total.toFixed(2));
    var MainTotal = check_numbers($('#MainTotalFee').html()) + check_numbers(price);
    $('#MainTotalFee').html(MainTotal.toFixed(2));

    localSet('TOTALFEE', MainTotal.toFixed(2));
  }
  $('#productsettings').on('touchend click', "#saveaddress", function (e) {
    e.preventDefault();
    $('#basketlayout').show();
    $('#Newcustomer').hide();
    $('#Edit').show();
    SaveAddress2();
  });
  $('#productsettings').on('touchend click', ".discountEnterMoney", function (e) {
    e.preventDefault();
    var val = check_numbers($('#prices').html());

    var newval = check_numbers(val) + check_numbers(localget('discountAmountRule'));
    if(BasketTotal - newval >= 0){
      $('#DiscountFee').html(newval);
      updateMainTotalArea($('#DeliveryFee').html());
      localSet('discountAmount', newval);
      var dataroll = "discountAmount=" + newval;
      BasketTotal -= newval;
      $.ajax({
        type: 'GET',
        url: "DiscountCalculation.proweb",
        data: dataroll,
        async: false,
        success: function (data) {}
      });
    } else {
    //   console.log(5838);
      swal({
        html: true,
        title: tword('BASKET_TOTAL_ERROR'),
        text: tword('BASKET_TOTAL_ERROR_TEXT'),
        type: "error",
        showConfirmButton: true
      });
    }
  });
  $('#mainBoxContainer').on('touchend click', "#Edit", function (e) {
    e.preventDefault();
    $('#basketlayout').hide();
    $('#productbuttons').css('display', 'none');
    $('#productCat').css('display', 'none');
    $.ajax({
      type: 'POST',
      url: "CustomerNewAdress.proweb",
      data: "",
      success: function (data) {
        $('#productlayout').html(data).show();
      }
    });
  });
  $('.CallListPopUp').on('click', "#CallerSelect", function (e) {
    e.preventDefault();

    var phone = $('.CallListPopUp select option:selected').val();
    localSet('PHONE', phone);
    GetCallData(phone);
    localSet('CALLER', 1)
    localSet('PHONE', phone);
    $('.CallListPopUp').hide()
  });
  $('.CallListPopUp').on('touchend click', "#CancelCallerList", function (e) {
    e.preventDefault();
    localSet('CALLER', 0)
    $('.CallListPopUp').hide()
  });
  $('#mainBoxContainer').on('touchend click', "#CallList", function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "CallerList.proweb",
      data: "",
      async: false,
      success: function (data) {
        $('.CallListPopUp').html(data).show();
      }
    });
  });
  $('#mainBoxContainer').on('touchend click', "#OrderHistory", function (e) {
    e.preventDefault();

    var CallNo = localget("PHONE");
    if (localget('CALLER') == 1) {
      var dataroll = "phone=" + CallNo;
      $('#productsettings').css('display', 'none');
      $('#OrderLogPage').css('display', 'block');
      $('#OrderDetail').html("")
      $('.OrderConcept').remove();
      $('#Admin').css('display', 'none');
      $.ajax({
        type: 'POST',
        url: "OrderHistory2.proweb",
        data: dataroll,
        success: function (data1) {
          $('#basketlayout').css('display', 'block');
          $('#OrderDetail').html('').css('display', 'none').css('transform', 'translateX(100%)');
          $('#productsettings').css('display', 'none');
          $('#FooterBar').css('display', 'none');
          $('#HistoryButtons').css('display', 'none');
          $('#OrderLogPage').css('display', 'block');
          $('#OrderDetail').html("")
          $('.OrderConcept').remove();
          $('#Admin').css('display', 'none');
          var itemList = '';
          var data = jQuery.parseJSON(data1);
          var ords = [];
          var PriceButtons = window.app.PHONEPRICEBUTTON;
          var arr = PriceButtons.split(',');
          var tms = "";
          var keysall = [];
          $.each(arr, function (key, vals) {
            var first = vals.substr(0, 1);
            tms = tms + '<button id="' + vals + '" class="btn btn-primary hvr-shutter-out-horizontal orderslist ORDERBUTTON" type="button"><i class="glyphicon glyphicon-plane"></i> ' + vals + ' (' + data[first] + ')</button>'
          });
          var List = '<div class=" col-md-12 col-lg-12 col-sm-12"><button id="WEB" class="btn btn-primary hvr-shutter-out-horizontal orderslist ORDERBUTTON" type="button"><i class="glyphicon glyphicon-world"></i> '+ tword('WEB_ORDERS') +'</button>'
          var arrpay = (window.app.PHONEPAYOPTION).split(',');

          // $.each(arrpay, function (key, vals) {
          //     List = List + '<button id="' + vals.toLowerCase() + '" class="btn btn-primary hvr-shutter-out-horizontal orderslist ORDERBUTTON" type="button"><i class="glyphicon glyphicon-plane"></i> ' + vals + '</button>'
          // });

          List = List + tms;
          List = List + '<div style="width: 15%;float: right;"><span  class="btn-primary" style="float: left;width: 100%;">Total WEB Card= <strong>' + data['Total_Price']['Web']['Card'] + '</strong></span>';
          List = List + '<span  class="btn-primary" style="float: left;width: 100%;">Total WEB Cash= <strong>' + data['Total_Price']['Web']['Cash'] + '</strong></span></div>';
          List = List + '<button id="All" class="btn btn-primary hvr-shutter-out-horizontal orderslist mainCheck ORDERBUTTON" type="button"><i class="glyphicon glyphicon-cutlery"></i> '+ tword('ALL_ORDERS') +' ( ' + data['Totals'] + ')</button><button  class="btn btn-primary hvr-shutter-out-horizontal orderslist DriverList" type="button"><i class="glyphicon glyphicon-road"></i>'+ tword('SELECT_DRIVER') +'</button><button  class="btn btn-primary hvr-shutter-out-horizontal orderslist DeleteOrder" type="button"><i class="glyphicon glyphicon-remove"></i>'+ tword('REMOVE_ORDER') +'</button></div>';
          $.each(data['orders'], function (key, val) {
            var color = val.color;
            if (color != null) {
              color = 'style="background-color:' + color + ' !important;"'
            } else {
              color = '';
            }
            var orderid = val.orderid;
            var Counter = val.order;
            var sequenceNo = val.sequenceNo;
            var orderType = orderid.substring(0, 3);
            var pMethod = val.paymentMethod.replace(/ /g, '').toLowerCase();
            var date22 = val.adddate.split(' ');
            var met = 'val.method time'
            var CustAdd = '';
            if ((val.street) != 0 && val.method == "DELIVERY") {
              CustAdd = val.street + ' - ' + val.street2 + ' - ' + val.postcode;
            } else {
              CustAdd = ''
            }
            var driverName = '';
            if (val.duser != 0) {
              driverName = " | Driver: " + val.duser;
            }
            var t = val.orderid.substr(0, 3);
            if (val.hourSelect != 0 && val.status != "Reprint") {
              HourSelectedList[val.orderid] = val.hourSelect;
            }
            if (val.hourSelect != 0 && val.status == "Reprint") {
              delete HourSelectedList[val.orderid];
            }
            itemList = itemList + '<button data-phone="' + CallNo + '" data-history="1" data-driver="' + val.duser + '" ' + color + ' data-counter="' + sequenceNo + '" data-otype="' + orderType + '" class="' + val.method + " " + pMethod + ' btn btn btn-primary hvr-shutter-out-horizontal ITEMButton ' + val.status + ' ' + t + '" id="order' + val.orderid + '" data-orderid="' + val.orderid + '"><div class="OrderTypeArea">' + t + '</div><div style="float:right;width:89%;"><span style="font-size:21px;">Order : ' + sequenceNo + ' | ' + val.method + ' </span><hr>' + CustAdd + ' ' + pMethod + '<hr>Received Time:' + date22[1] + ' | ' + driverName + ' ||' + val.status + '<hr><span style="   font-size: 18px;color: #fff;">' + val.orderid + ' | | £' + parseFloat(val.Total).toFixed(2) + '</span></div></button>';
          });
          $('#orderlist').html(List);
          $('#OrderLog').html(itemList);
        }
      });
    }
  });
  $('body').on('touchend click', ".HalfHalfButton", function (e) {
    e.preventDefault();
    var text = $(this).attr('data-title').replace(/ /g, "");
    var ref = text;
    var price = 0;
    var name = text;
    var cat = "";
    var exID = $('.QtyButton').attr('data-title');
    if (exID != "" && typeof (exID) != "undefined") {
      SaveBasketExtras(ref, price, name, cat, exID, "", -1);
    }
  });
  $('#mainBoxContainer').on('touchend click', "#Newcustomer", function (e) {
    e.preventDefault();
    $('#basketlayout').hide();
    $('#productbuttons').css('display', 'none');
    $('#productCat').css('display', 'none');
    $('#productlayout').load('CustomerNewAdress.proweb');
  });
  $('#productsettings').on('touchend click', ".discountEnter", function (e) {
    e.preventDefault();
    var val = check_numbers($('#prices').html());

    var Total = check_numbers(localget('TOTALFEE')) - check_numbers(localget('discountAmountWhitout'));
    var newval = check_numbers((Total * val)) + check_numbers(localget('discountAmountRule'));
    if(BasketTotal - newval >= 0){
      localSet('discountAmount', newval);
      $('#DiscountFee').html(newval);
      updateMainTotalArea($('#DeliveryFee').html());
      var dataroll = "discountAmount=" + newval;
      BasketTotal -= newval;
      $.ajax({
        type: 'GET',
        url: "DiscountCalculation.proweb",
        data: dataroll,
        async: false,
        success: function (data) {}
      });
    } else {
    //   console.log(6013);
      swal({
        html: true,
        title: tword('BASKET_TOTAL_ERROR'),
        text: tword('BASKET_TOTAL_ERROR_TEXT'),
        type: "error",
        showConfirmButton: true
      });
    }
  });
  $('#productsettings').on('touchend click', ".discount", function (e) {
    e.preventDefault();
    var val = $(this).attr('data-title');
    var Total = $('.TotalValue').html();
    var newval = check_numbers(Total * val).toFixed(2);

    discountCalculate(newval)
  });

  function discountCalculate(newval) {
    $('#DiscountFee').html(newval);
    updateMainTotalArea($('#DeliveryFee').html());
    var dataroll = "discountAmount=" + newval;

    localSet('discountAmount', newval);
    $.ajax({
      type: 'GET',
      url: "DiscountCalculation.proweb",
      data: dataroll,
      success: function (data) {
          
      }
    });
  }

  function updateMainTotalArea(price) {
    var total = check_numbers($('.TotalValue').html());
    var discount = check_numbers($('#DiscountFee').html());
    var MainTotal = check_numbers(total - discount) + check_numbers(price);
    $('#MainTotalFee').html(MainTotal.toFixed(2));

    localSet('TOTALFEE', total.toFixed(2));

  }
  

  function SaveBasket(ref, title, type, price, name, settings, cat, ditemids, dealprice, str, desc, editdeal, hasextra) {
    var editable = editdeal || 0;
    if (BasketTotal + check_numbers(price) >= 0) {
      if (editable == 1) {} else {
        $('.DeliveryType').attr('data-title', '');
        $('#activeproduct').val(title);
        name = name.replace("&", "&");
        cat = cat;
        var basketitems = [];
        if (window.app.SHOW_RGL == "Yes"){
            type = "(" + type + ") "
        }else {
            if(type == "RGL" || type == ""){
                type = "";
            }else{
                type = "(" + type + ") "
            }
        }
        if (title == 1) {
          if (str == "") {
            name = type + " " + name;

            BasketItems.unshift({
              keyNo: 0,
              name: name,
              price: price,
              qty: 1,
              catid: cat,
              ref: ref,
              settings: settings,
              ditemids: ditemids,
              dealprice: dealprice,
              type: type,
              deal: 0,
              pcart: [],
              hasextra: hasextra,
              data: [],
              item_desc: clean(desc)
            });
            BasketTotal += check_numbers(price);
            var itdescle = BasketItems.length;
            for (var i = 0; i < itdescle; i++) {
              BasketItems[i]['keyNo'] = i;
            }
            $('.QtyButton').attr('data-title', 0);
            UpdateBasket(BasketItems);
          }
          var buttons = '<div class="ProductDesc">' + desc + '</div>';
          if (str != "") {
            buttons = buttons + '<div style="width: 99%;float: left;background-color: #646C79;padding: 8px;border-radius: 12px;">' + str + '' + '</div>';
          }
          var msg = '';
          if (str != "" && hasextra == 0) {
            $('#productlayout').html(buttons);
          }
        } else {

          name = type + " " + name;
          BasketTotal += check_numbers(price);
          BasketItems.unshift({
            keyNo: 0,
            name: name,
            price: price,
            qty: 1,
            catid: cat,
            ref: ref,
            settings: settings,
            ditemids: ditemids,
            dealprice: dealprice,
            type: type,
            deal: 0,
            hasextra: hasextra,
            pcart: [],
            data: [],
            item_desc: clean(desc)
          });
          var itdescle = BasketItems.length;
          for (var i = 0; i < itdescle; i++) {
            BasketItems[i]['keyNo'] = i;
          }
          $('.QtyButton').attr('data-title', 0);
          UpdateBasket(BasketItems);
        }
      }
      if (hasextra == 1) {
          
          var temp_ty = new Array();
                temp_ty = window.app.PIZZA_BASE_FILTER.split(',');
        data = dataEXTRAS[mergeid];
        var heading = [];
        var free = '';
        var fname = '';
        var style = '';
        var topping = '';
        heading = heading + (buttons);
        $.each(data[cat], function (key, vale) {
          var FilterOptions = vale[0].selections;
          var free = vale[0].free;
          var maxS = vale[0].maxS;


          if (FilterOptions != "" && FilterOptions != null) {
            var Filters = FilterOptions;
            Filters = JSON.parse(Filters);
            var Phone = vale[0].Phone;
            var Web = vale[0].Web;
          } else {

            var Filters = data[cat][key];
            var Phone = vale[0].Phone;
            var Web = vale[0].Web;
          }



          let evTc = 0;
          if (window.app.EATINPRICE == 'Yes') {
            if (catTypes == 2 && Phone == 1) {
              evTc = 1;
            } else if (catTypes == 0 && Web == 1) {
              evTc = 1;
            }
          } else {
            evTc = 1;
          }
          if (evTc == 1) {
            var optionsl = [];
            fname = key.replace(/ /g, '');
            if (window.app.PIZZACAT == ' ' || window.app.PIZZACAT == 'undefined' || window.app.PIZZACAT == '') {
              temp = '';
            } else {
              temp = window.app.PIZZACAT.split(',');
            }
            if ((jQuery.inArray(cat, temp) !== -1)  || jQuery.inArray(fname, temp_ty) !== -1 ||  fname.toLowerCase().indexOf("free") != 0 && (fname.toLowerCase().indexOf("cooktype") >= 0 || fname.toLowerCase().indexOf("topping") >= 0 || fname.toLowerCase().indexOf("base") >= 0 || fname.toLowerCase().indexOf("crust") >= 0 || fname.toLowerCase().indexOf("type") >= 0 || fname.toLowerCase().indexOf("extrasfor") >= 0)) {
              style = "display:none !important;"
              topping = 'YesTopping'
              //var NewFname = fname.replace("TOPPINGS", "");
              var NewFname = fname.replace(".", "");
              NewFname = NewFname.replace('"', "");
              NewFname = NewFname.replace('(', "");
              NewFname = NewFname.replace(')', "");
            } else {
              //style = "display:table !important;"

              topping = 'NoTopping'
              var NewFname = key.replace(/ /g, '');
              NewFname = NewFname.replace(".", "");
              NewFname = NewFname.replace('"', "");
              NewFname = NewFname.replace(/\_/g, '');
            }




            var MaxSellect = 0
            $.each(Filters, function (keys, val) {

              // var catid = FilterOptions['catid'];

              var ovalue = val['name'] || val['ovalue'];
              var price = val['price'];
              var toggle = val['toggle'];
              var id = val['id'];

              if (price == '0') {
                price = val['price'];
              }
              var pricenew = '';
              //free = val.free;
              if (price != '0') { 
                pricenew = "";
              } else {
                pricenew = '';
              };
              if (price == '-') {
                pricenew = '';
                price = 0;
              }

              //	optionsl.push('<div class="field"><input class="'+(key).trim()+'" type="checkbox" name="'+(key).trim()+'[]"  id="'+id+(key).trim()+'" value="'+ovalue+'" /><label for="'+id+(key).trim()+'" class="tick"></label><span style="line-height: 40px; font-size: 19px;margin-left: 20px;">'+ovalue+'</span></div>');
              var cla = ''
              desc = desc.replace("&", ",").replace(".", "");
              var itdesc = desc.split(',');

              var itdescle = itdesc.length;

              for (i = 0; i < itdescle; i++) {
                if (ovalue.toLowerCase() == $.trim(itdesc[i]).toLowerCase()) {
                  cla = "CheckedPro ";
                  break;
                } else {
                  cla = '';
                }
              }
              MaxSellect = maxS;
                var toggleState = 0;
                var toggleClass = '';
                if(editable == 1 && toggle == 1){
                    let result = BasketItems[ref]['pcart'].filter( element => element.ref === val.id + element.exID  );
                    if(result.length > 0){
                        toggleState = result[0]['togglestate'];
                        if(toggleState === 'Yes'){
                            toggleClass = 'togglestate-yes';
                        }else if(toggleState === 'No'){
                            toggleClass = 'togglestate-no';
                        }
                    }
                    
                }

              optionsl = optionsl + ('<button data-toggle="'+toggle+'" data-togglestate="'+toggleState+'" data-Subref="' + NewFname + '" data-maxs="' + maxS + '" value="' + price + '" data-pname="' + ovalue + '" data-cat="' + cat + '" class="btn-primary hvr-shutter-out-horizontal listAdditem ' + cla + ' ' + toggleClass + '" id="' + id + '" data-title="' + price + '" data-free="' + free + '" data-title="' + price + '">' + ovalue + pricenew + '</button>');
            });
            //heading=heading+('<div class="extraoptions '+topping+'" id="'+NewFname+'" style="'+style+'"><button type="button" class="btn btn-info" data-toggle="collapse" data-target="#'+key.replace(/ /g,'')+'">'+key+'</button><div id="'+key.replace(/ /g,'')+'" class="collapse">'+optionsl+'</div></div>');
            var keys = key.replace(/ /g, '');
            keys = keys.replace(".", '');
            keys = keys.replace('"', "");
            keys = keys.replace('(', "").replace(')', "");
            var temp = new Array();
            if (window.app.PIZZACAT == ' ' || window.app.PIZZACAT == 'undefined' || window.app.PIZZACAT == '') {
              temp = '';
            } else {
              temp = window.app.PIZZACAT.split(',');
            }
            if (jQuery.inArray(cat, temp) !== -1 && (jQuery.inArray(NewFname, temp_ty) !== -1  || NewFname != "FreeChoice"  )) {

              heading = heading + ' <div class="accordion-group ' + topping + '" style="' + style + '"  id="T' + NewFname + '" ><div class="accordion-heading"> <a class="accordion-toggle"   data-toggle="collapse" data-target="#' + keys + '" href="#">' + key + '</a></div><div id="' + keys + '" class="collapse"><div class="accordion-inner">' + optionsl + '</div></div></div>';
            } else {
              //  style = "display:table !important;"
              heading = heading + ('<div class="extraoptions ' + topping + '" id="TOP' + NewFname + '" style="' + style + '"><div class="heading">' + key.replace("_", " ") + ' (ONLY ' + MaxSellect + ' Option(s))</div>' + optionsl + '</div>');
            }
          }
        });
        //	}
        var o = '';
        if (window.app.PIZZACAT == ' ' || window.app.PIZZACAT == 'undefined' || window.app.PIZZACAT == '') {
          temp = '';
        } else {
          temp = window.app.PIZZACAT.split(',');
        }
        if (jQuery.inArray(cat, temp) !== -1) {
          $('.ContinueItemsPizza').show();
          $('.NoTopping').hide();
          var HalfHalfPrice = window.app.PIZZAHALFHALF || 0;
          var PIZZAHALFHALFON = window.app.PIZZAHALFHALFON;
          if (PIZZAHALFHALFON == 'Yes') {
            heading = heading += '<div class="accordion-group  NoTopping" style="display:table !important;"  id="TBASE2"  ><div class="accordion-heading"> <a class="accordion-toggle"   data-toggle="collapse" data-target="#BASE2" href="#">HALF HALF PIZZA</a></div><div id="BASE2" class="collapse"><div class="accordion-inner" id="HALFHALFLIST">' + o + '</div></div></div>';
          }
          if (HalfHalfPrice > 0) {
            heading = heading + '<div class="HalfHalfButtonDiv"><button class="btn btn-primary hvr-shutter-out-horizontal HalfHalfButton"  data-title="2nd Half">'+ tword('2NDHALF') +'</button><button class="btn btn-primary hvr-shutter-out-horizontal HalfHalfButton"  data-title="1st Half">'+ tword('1STHALF') +'</button></div>';
          }
          var ContinueItemsPizza = '<button class="btn ContinueItemsPizza"  data-cstep="0" style="position: absolute;top: 5%;right: 40px;width: 24%;height: 51px;color: #000;font-size: 25px;">Continue</button> <button class="btn BackItemsPizza"  data-cstep="0" style="position: absolute;top: 16%;right: 40px;width: 24%;height: 51px;color: #000;font-size: 25px;">'+ tword('BACK') +'</button>';



        } else {
          var ContinueItemsPizza = '';
        }
        $('#productlayout').removeClass('col-md-10');
        $('#productlayout').addClass('col-md-12');
        $('#productlayout').removeClass('col-sm-10')
        $('#productlayout').addClass('col-sm-12');
        $('#productbuttons').css('display', 'none');
        $('#productlayout').html('');

        $("<ul/>", {
          "class": "listextras",
          html: '<div class=""><div class="accordion" id="accordion" >' + heading + ContinueItemsPizza + '</div></div>' + msg
        }).appendTo("#productlayout");
        if (window.app.PIZZACAT == ' ' || window.app.PIZZACAT == 'undefined' || window.app.PIZZACAT == '') {
          temp = '';
        } else {
          temp = window.app.PIZZACAT.split(',');
        }
        if (jQuery.inArray(cat, temp) !== -1) {
          $.get('Product.proweb', function (data) {
            var items = [];
            data = jQuery.parseJSON(data);
            $.each(data.name[cat], function (key, vale) {
              $('#HALFHALFLIST').append('<button value="' + HalfHalfPrice + '" id="' + vale[0].id + '"    data-pname="Half Half ' + key + '" data-cat="' + cat + '" class="btn-primary hvr-shutter-out-horizontal listAdditem "  data-title="Half Half ' + key + '">' + key + '</button>');
            });
          });
        }
        if ($('.btn').hasClass('SaveItem') == false && typeof ($('.QtyButton').attr('data-title')) == 'undefined') {
          $('.QtyButton').attr('data-title', ref);
        }

        if (settings != "") {
          $('.NoTopping').css('display', 'none');
          $('.YesTopping').css('display', 'none');
          var temp = new Array();
          temp = settings.split(',');
          var temp2 = new Array();

          $.each(temp, function (key, value) {
            var values = value.split(':');
            temp2.push(values[0]);
          });
          $.each(temp2, function (key, value) {
            $('#TOP' + value.replaceAll(" ", "").replaceAll(/\_/g, "")).css('display', 'table');
          });
          $(".YesTopping").removeClass("YesTopping");


          $.each(temp2, function (key, value) {

            $('#T' + value.replaceAll(" ", "").replaceAll(/\_/g, "")).css('display', 'table');
            $('#T' + value.replaceAll(" ", "").replaceAll(/\_/g, "")).addClass("YesTopping")
          });


        } else {
          // $('.NoTopping').css('display', 'table');
        }
        if (typeof ($('.QtyButton').attr('data-title')) != 'undefined') {
          var i = 1;

        }

        // END EXTRAS
        StepByStepList = [];
        var i = 1;


        $('.YesTopping').each(function () {
          var id = $(this).attr('id');
          var id2 = id.toLowerCase();
          var toggle = id.substring(1);
          var types = 'T' + type;
          if (id.toLowerCase().indexOf(type.toLowerCase()) >= 0  ||  jQuery.inArray(toggle, temp_ty) !== -1) {

            //    $('#' + types).css('display', 'table !important;');
            //   $('#' + id).show();
            //    $('#'+toggle).addClass("in");


            if (window.app.STEP_BY_STEP_PRODUCT == "Yes") {
              StepByStepList.push({
                "id": id,
                "toggle": toggle
              })
            } else {
              $('#' + types).css('display', 'table !important;');
              $('#' + id).show();
              // $('#'+toggle).addClass("in");
              $('.ContinueItemsPizza').hide();
              $('.BackItemsPizza').hide();
            }


          } else {
            $('#' + types).css('display', 'none');
            $('#' + id).hide();
          }

        });


      }

      // if (CurrentStep == 99) {

      //     $('.NoTopping').each(function () {

      //         $(this).find("button").each(function () {
      //             var obk = $(this);
      //             var li = obk.attr('data-pname');

      //             if (jQuery.inArray(li, BasketListItems) !== -1) {
      //                 obk.addClass("selecteditem");
      //             } else {
      //                 obk.removeClass("selecteditem");

      //             }
      //         });


      //         var id = $(this).attr('id');
      //         var toggle = id.substring(1);
      //         StepByStepList.push({
      //             "id": id,
      //             "toggle": toggle
      //         })




      //     });
      //     if (window.app.STEP_BY_STEP_PRODUCT == "Yes") {
      //         CurrentStep = 0;
      //         ShowStepByStepList(StepByStepList, 0);
      //     }
      // }

      if (CurrentStep == 99) {


        $.each(temp2, function (key, value) {
          let butlist = '#TOP' + value.replaceAll(" ", "").replaceAll(/\_/g, "");

          $(butlist).find("button").each(function () {
            var obk = $(this);
            var li = obk.attr('data-pname');

            if (jQuery.inArray(li, BasketListItems) !== -1) {
              obk.addClass("selecteditem");
            } else {
              obk.removeClass("selecteditem");

            }
          });


          var id = 'TOP' + value.replaceAll(" ", "").replaceAll(/\_/g, "");
          var toggle = id.substring(1);
          StepByStepList.push({
            "id": id,
            "toggle": toggle
          })

        });

        if (window.app.STEP_BY_STEP_PRODUCT == "Yes") {
          CurrentStep = 0;
          ShowStepByStepList(StepByStepList, 0);
        }
      }

    } else {
      swal({
        html: true,
        title: tword('BASKET_TOTAL_ERROR'),
        text: tword('BASKET_TOTAL_ERROR_TEXT'),
        type: "error",
        showConfirmButton: true
      });
    }

  }
  String.prototype.replaceAll = function (searchText, replacementText) {
    return this.split(searchText).join(replacementText);
  };
  $('body').on('touchend click', "#Dressing", function (e) {
    e.preventDefault();
    data = dataEXTRAS[mergeid];
    var button = '';
    $.each(data['Dressing'], function (keys, val) {
      button += "<div class='DressingSection'><h2>" + keys + "</h2>";
      $.each(data['Dressing'][keys], function (k, v) {
        button += "<button class='ExtraDressing' id='" + v.id + "'  data-pname='" + v.ovalue + "' data-cat='" + v.fname + "' value='" + v.price + "'>" + v.ovalue + "</button>";
      });
      button += "</div>"
    });
    $('#productlayout').html(button);
  });
  $('body').on('touchend click', ".ExtraDressing", function (e) {
    e.preventDefault();
    var ref = $(this).attr('id').replace("&", "");
    var price = $(this).attr('value');
    var name = $(this).attr('data-pname');
    var cat = $(this).attr('data-cat');
    var exID = $('.QtyButton').attr('data-title');
    var maxS = 10;

    var jn = localget('JUSTNO');
    var sp = localget('Separate');
    var pref = $('.basket' + exID).attr('data-ref');
    var subref = $(this).attr('data-Subref');
    var speRef = "it" + exID + name
    var arrayLen = $.inArray(speRef, ITEMLIMIT);
    var id = $('.QtyButton').attr('data-title');
    if (typeof (id) == "undefined") {
      swal(tword('SELECT_SIZE_FIRST'), '', 'warning');
      return false;
    }
    if (typeof (ITEMLIMIT["it" + exID + subref]) == "undefined") {
      ITEMLIMIT["it" + exID + subref] = {
        items: []
      };
    }
    if (ITEMLIMIT["it" + exID + subref]['items'].length < maxS) {
      ITEMLIMIT["it" + exID + subref].items.push(speRef);
    } else {
      swal(tword('ERROR'), wtord('ERROR_ITEM_LIMIT_TEXT') + maxS, "warning");
      return false;
    }
    if (jn === "No" && typeof (jn) != "undefined") {
      name = "No " + name;
      price = 0;
      localSet('JUSTNO', '');
    }
    if (localget("Little") == 1) {
      price = check_numbers(price / 2);
      name = "Little " + name;
      localSet("Little", 0);
    }
    var sp = localget('Separate');
    if (sp == 1 && typeof (sp) != "undefined") {
      name = "Separate " + name;
      localSet('Separate', '');
    }
    if (jn === "Extra" && typeof (jn) != "undefined") {
      name = "Extra " + name;
      localSet('JUSTNO', '');
    }
    if (localget("FREE") == 1) {
      price = 0;
      localSet("FREE", 0);
    }
    if (localget("HALF") == 1) {
      price = check_numbers(price / 2);
      name = "Half " + name;
      localSet("HALF", 0);
    }
    var free = $(this).attr('data-free');
    if (cat == window.app.PIZZACAT) {
      FreeArray.push(ref);
      if (FreeArray.length < 5) {}
    }
    if (typeof exID !== 'undefined') {
      $(this).addClass('selecteditem');
      SaveBasketExtras(ref, price, name, cat, exID, $(this), -1);
    }
  });
  //CATEGORIES
  function GetCategories(level, parentcat) {
    var Main = level;
    var mainParentCate = parentcat;
    var cate = ' <section class="swiper-container"><div class="swiper-scrollbar"></div><div class="swiper-wrapper">';
    var fpro = '';
    var tops = 1;
    $.each(dataCategories[mergeid].rows, function (key, vale) {

      if (vale['parentCat'] == 1 && mainParentCate == 0) {
        level = 2;
        parentcat = 1


      } else {
        level = Main;
        parentcat = mainParentCate;
      }


      if (vale['level'] == level && vale['parentCat'] == parentcat && vale['cat'] != "Menu") {
        if (vale['eatin'] == catTypes || vale['eatin'] == 1) {
          if (tops == 1) {
            cate = cate + ("<div class='swiper-slide' style='visibility:visible;'>");
          }
          var colors;
          if (typeof (vale['color']) != undefined && vale['color'] != "0") {
            colors = "background: "+vale['color']+" !important;"
          }
          cate = cate + ("<button data-parentcat='" + vale['id'] + "' data-leve='" + vale['level'] + "' class='btn btn-primary hvr-shutter-out-horizontal catitems' id='" + vale['id'] + "' title='" + vale['dtype'] + "' style='background-size: cover;" + colors + " '>" + vale['cat'] + "</button>");

          if (tops == window.app.MaxCategory) {
            cate = cate + ("</div>");
            tops = 1;
          } else {
            tops++;
          }
        }
      }
    });


    if (window.app.HAVEDEALS == "Yes" || window.app.HAVEDEALS == "HAVEDEALS" || typeof (window.app.HAVEDEALS) == "undefined") {
      cate = cate + ("<button  class='btn btn-primary hvr-shutter-out-horizontal productButton deals' >" + window.app.MEALS_BUTTON_TEXT + "</button>");
    }
    //  cate = cate + (' <button id="CloseOrder" class="btn btn-primary hvr-shutter-out-horizontal productButton">CANCEL</button><button id="Note" style="float:left; background-color: #3FD2C7;" class="btn btn-primary hvr-shutter-out-horizontal Note" data-top="1"><i class="glyphicon glyphicon-copy"></i> Note </button><button style="float:left;  background-color: #00458B;color:#fff;" id="OpenSale" type="button" class="btn btn-primary hvr-shutter-out-horizontal "><i class="glyphicon glyphicon-tag"></i> Open Sale</button>');
    if (window.app.LEVELNAVIGATION == "Yes" && level != 1 && Main == 2) {
      cate = cate + ("<button data-parentCat='0' data-leve='1' class='btn btn-primary hvr-shutter-out-horizontal BackButton'>"+ tword('BACK') +"</button>");
    }
    if (window.app.HAVEDRESSING == "Yes") {
      cate = cate + '<button id="Dressing" class="btn btn-primary hvr-shutter-out-horizontal" >'+ tword('DRESSING') +'</button>'
    }
    cate = cate + '<div class="swiper-pagination"></div></section>'
    $('#productCat').html('');
    $("<div/>", {
      "class": "categories",
      html: cate
    }).appendTo("#productCat").show();
    $("#productCat").css('display', 'block !important');
    $('.ui-keyboard').remove();
    new Swiper({
      el: '.swiper-container',
      initialSlide: 0,
      spaceBetween: 50,
      slidesPerView: 1,
      centeredSlides: false,
      slideToClickedSlide: true,
      autoHeight: true,
      grabCursor: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: {
        enabled: true,
      },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      a11y: {
        containerMessage: 'Example content',
        containerRoleDescriptionMessage: 'carousel',
        itemRoleDescriptionMessage: 'slide',
      },
    });
  }

  function minsToMidnight(hour, minute) {
    var d = new Date();
    return (-d + d.setHours(hour, minute, 0, 0)) / 6e4;
  }
  //CHECK IF THERE IS A CALLER
  function CheckOrderCOOK() {}

  function callerdataDel(phone) {
    $.ajax({
      type: 'POST',
      url: "code/DeleteCaller.php",
      data: "&phone=" + phone,
      async: true,
      cache: false,
      success: function (data) {}
    });
  }

  function CheckCallerID() {
    Timmer(1)
    if (window.app.CallerId == 'Yes') {
      CheckOrderCOOK();
      let datafd;

      if (typeof (localget('Phoneline')) != undefined && typeof (localget('Phoneline')) != "undefined" && localget('Phoneline') > 0) {
        datafd = "&line=" + localget('Phoneline');
      } else {
        datafd = "&line=1";
      }
      $.ajax({
        type: 'POST',
        url: "CallerID.proweb",
        data: datafd,
        async: false,
        success: function (data) {

          var obj = JSON.parse(data);
          if (typeof (obj['calls'][0].error) !== 'undefined' && obj['calls'][0].error == 0) {
            if (typeof (obj['calls'][0].phoneno) !== 'undefined' && obj['calls'][0].phoneno != 0) {
              var currentTime = new Date($.now());
              var HTMLL = "Line" + obj['calls'][0].line
              //	swal("Plese Select a Line",HTMLL,"success");
              callerdataDel(obj['calls'][0].phoneno);
              if (localget('CALLER') == 0) {
                localSet("Step", "Data")
                GetCallData(obj['calls'][0].phoneno)
                localSet('CALLER', 1)
                localSet('CALLERLINE', obj['calls'][0].line);
                localSet('PHONE', obj['calls'][0].phoneno);
                $('#SelectCustomer').attr('data-tel', obj['calls'][0].phoneno).show();
              } else {
                swal({
                  title: "New Call on Line" + obj['calls'][0].line,
                  text: "<h1>Phone No:" + obj['calls'][0].phoneno + "</h1><br/>" + currentTime,
                  confirmButtonText: tword('ACCEPT_THIS_CALL'),
                  confirmButtonColor: "#DD6B55",
                  showCancelButton: true,
                  type: "warning",
                  html: true
                }, function (isConfirm) {
                  if (isConfirm == true) {

                    localSet("Step", "Data")
                    GetCallData(obj['calls'][0].phoneno)
                    localSet('CALLER', 1)
                    localSet('CALLERLINE', obj['calls'][0].line);
                    localSet('PHONE', obj['calls'][0].phoneno);
                    $('#SelectCustomer').attr('data-tel', obj['calls'][0].phoneno).show();
                  }
                });
              }
            } else {
              if (localget('CALLER') == 0) {
                localSet('PHONE', '')
                $('#callerdata').html("<div id='caller'><div class='Customer'><p>"+ tword('PHONE') +":<span id='callerfound'></span> || "+ tword('NAME') +":</p><p id='newaddressdetails'>"+ tword('ADDRESS') +":</p></div></div>");
                $('#Edit').css('display', 'none');
                $('#OrderHistory').css('display', 'none');
                $('#Map').css('display', 'none');
                $('#Newcustomer').css('display', 'block');
              }
            }

          } else {
            location.reload();
          }
        }
      });
    }
  }

  function GetCallDataCart(phone) {
    $.ajax({
      type: 'POST',
      url: "GetCallDataCart.proweb",
      data: "orderid=" + phone,
      async: false,
      success: function (data) {
        var obj = JSON.parse(data);
        if (obj.total != null) {
          TempArray = obj.orders;
          var objs = JSON.parse($.cookie('customer')); //COOKIE
          var street1 = objs['address1'];
          var street2 = objs['address2'];
          var distance = objs['DISTANCE'];
          var dcharge = window.app.DCHARGE.split(",");
          if (distance != 0) {
            $('#Map').html("MAP " + distance + " (mil)");
          }
          var phone = '';
          var cusname = '';
          var postcode = '';
          if (objs['cphone'] != 0) {
            phone = objs['cphone'];
          }
          if (objs['postcode'] != 0) {
            postcode = objs['postcode'];
          }
          if (objs['fullname'] != 0) {
            cusname = objs['fullname'];
          }
          $('#callerdata').html("<div id='caller' data-cPhone='" + phone + "' data-cName='" + cusname + "' ><div class='Customer'><p>Phone:<strong><span id='callerfound'>" + phone + "</span></strong></p><p>"+ tword('CUSTOMER_NAME') +":<strong>" + cusname + "</strong></p><p id='newaddressdetails'>"+ tword("ADDRESS") +":<strong>" + street1 + " " + street2 + " " + postcode + "</strong></p></div></div>");

          localSet("customeremail", objs['customeremail'] != 0 ? objs['customeremail'] : '');
          $('#Edit').css('display', 'block');
          $('#Map').css('display', 'block');
          $('#Newcustomer').css('display', 'none');
        } else {
          $('#callerdata').html("<div id='caller'><div class='Customer'><p>"+ tword('PHONE') +":<span id='callerfound'>" + phone + "</span></p><p>"+ tword('CUSTOMER_NAME') +":</p><p id='newaddressdetails'>"+ tword("ADDRESS") +":</p></div></div>");
          $('#Edit').css('display', 'none');
          $('#Newcustomer').css('display', 'block');
          $('#Edit').click();
        }
      }
    });
  }

  function GetCallData(phone) {

    if (localget("Step") == "Data") {
      $.ajax({
        type: 'POST',
        url: "GetCallData.proweb",
        data: "phone=" + phone,
        async: false,
        success: function (datas) {
          var obj = '';
          if (typeof $.cookie('customer') !== 'undefined') { //COOKIE
            obj = JSON.parse($.cookie('customer')); //COOKIE
          }
          if (datas == 0 || datas == '0') {
            $('#callerdata').html("<div id='caller'><div class='Customer'><p>"+ tword("PHONE") +":<span id='callerfound'>" + phone + "</span></p><p>"+ tword("CUSTOMER_NAME") +":</p><p id='newaddressdetails'>"+ tword("ADDRESS") +":</p></div></div>");
            $('#Edit').css('display', 'none');
            $('#Newcustomer').css('display', 'block');

            localSet('PHONE', phone);
            $('#productCat').css('display', 'none');
            $('#Newcustomer').click();
          } else if (typeof $.cookie('customer') !== 'undefined' && obj != null && obj != '') { //COOKIE
            var street1 = obj['address1'];
            var street2 = obj['address2'];
            var distance = obj['DISTANCE'];
            var FinalCharge = 0;
            localSet('DELIVERYFEE', FinalCharge);
            if (distance != "") {
              $('#Map').html("MAP " + distance + " (mil)")
            }
            $('#callerdata').html("<div id='caller'  data-cPhone='" + obj['cphone'] + "' data-cName='" + obj['fullname'] + "'><div class='Customer'><p>Phone:<strong><span id='callerfound'>" + obj['cphone'] + "</span></strong></p><p>Customer Name:<strong>" + obj['fullname'] + "</strong></p><p id='newaddressdetails'>Address:<strong>" + street1 + " " + street2 + " " + obj['postcode'] + "</strong></p></div></div>");
            $('#OrderHistory').css('display', 'block');
            $('#Edit').css('display', 'block');
            $('#Map').css('display', 'block');
            $('#Newcustomer').css('display', 'none');
            $('#SelectCustomer').attr('data-tel', phone).show();
            SaveAddress(street1, street2, obj['postcode'], obj['city'], obj['postcode'], obj['email'], obj['fullname'], obj['cphone'], '', obj['LAT'], obj['LONG'], obj['DISTANCE']);
          } else {
            $('#callerdata').html("<div id='caller'><div class='Customer'><p>"+ tword("PHONE") +":<span id='callerfound'>" + phone + "</span></p><p>"+ tword("CUSTOMER_NAME") +":</p><p id='newaddressdetails'>"+ tword("ADDRESS") +":</p></div></div>");
            $('#Edit').css('display', 'none');
            $('#Newcustomer').css('display', 'block');
            $('#Newcustomer').click();
            $('#productCat').css('display', 'none');
          }
        }
      });
    } else {
      localSet("Step", "Data");
    }
  }

  function GetCallDataBYID(phone, cart) {

    localSet('CALLER', 1)
    $.ajax({
      type: 'POST',
      url: "GetCallDataByID.proweb",
      data: "phone=" + phone,
      async: false,
      success: function (data) {
        var obj = '';
        if (typeof $.cookie('customer') !== 'undefined') { //COOKIE
          obj = JSON.parse($.cookie('customer')); //COOKIE
        }
        if (typeof $.cookie('customer') !== 'undefined' && obj != null) { //COOKIE
          var street1 = obj['address1'];
          var street2 = obj['address2'];
          var distance = obj['DISTANCE'];
          var dcharge = window.app.DCHARGE.split(",");
          var FinalCharge = '';
          $.each(dcharge, function (x, y) {
            var del = y.split('=');
            if (distance <= del[0]) {
              FinalCharge = del[1];
              return false;
            } else {
              FinalCharge = 0;
            }
          });
          localSet('DELIVERYFEE', FinalCharge);
          if (distance != "") {
            $('#Map').html("MAP " + distance + " (mil)")
          }
          $('#callerdata').html("<div id='caller'  data-cPhone='" + obj['cphone'] + "' data-cName='" + obj['fullname'] + "' ><div class='Customer'><p>Phone:<strong><span id='callerfound'>" + obj['cphone'] + "</span></strong></p><p>Customer Name:<strong>" + obj['fullname'] + "</strong></p><p id='newaddressdetails'>Address:<strong>" + street1 + " " + street2 + " " + obj['postcode'] + "</strong></p></div></div>");
          SaveAddress(street1, street2, obj['postcode'], obj['city'], obj['postcode'], obj['email'], obj['fullname'], obj['cphone'], '', obj['LAT'], obj['LONG'], obj['DISTANCE']);
          localSet("Step", "BYID");
          localSet("customeremail", obj['email']);
          $('#Edit').css('display', 'block');
          $('#Map').css('display', 'block');
          $('#OrderHistory').css('display', 'block');
          $('#SelectCustomer').css('display', 'block');
          $('#phone').click();
          $('#TakeawayPro').click();
          $('#Newcustomer').css('display', 'none');
        } else {
          $('#callerdata').html("<div id='caller'><div class='Customer'><p>"+ tword("PHONE") +":<span id='callerfound'>" + phone + "</span></p><p>"+ tword("CUSTOMER_NAME") +":</p><p id='newaddressdetails'>"+ tword("ADDRESS") +":</p></div></div>");
          $('#Edit').css('display', 'none');
          $('#Newcustomer').css('display', 'block');
          $('#Edit').click();
        }
      }
    });
  }
  
  function clean(text){
      if(typeof(text) === 'string'){
        return  text.replace(/[0-9`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,'');
      }
      return '';
  }

  function Timmer(type) {
    clearInterval(timmer);
    if (type == 1) {
      timmer = setTimeout(CheckCallerID, CALLCHECK);
    } else {
      clearInterval(timmer);
    }
  }

  function SaveAddress2() {

    localSet('CALLER', 1)
      if (localget('METHOD') === "DELIVERY") {
            var postcode = $('#postcode').val();
            var country = $('#country option:selected').val();
            var email = $('#customeremail').val();
            var name = $('#customername').val();
            var guestaccount = $('#guestaccount').val();
            var phone = $('#cphone').val();
               let obj = '';
            if (typeof $.cookie('NewAdressCustomer') !== 'undefined') { 
                obj = JSON.parse($.cookie('NewAdressCustomer')); 
            }
            if (typeof $.cookie('NewAdressCustomer') !== 'undefined' && obj != null && obj != '') { 
                var street = obj['adress'][0];
                 var street2 = obj['adress'][1];
                 var city = obj['adress'][3];
                 var LAT =  obj['lat'];
                 var LONG = obj['lng'];
                 var DIS = obj['dist'];
                
            }else{
            var street = $('#street').val().replace("'", '');
            var street2 = $('#street2').val().replace("'", '');
            var city = $('#city').val();
            var LAT = $('#LAT').val();
            var LONG = $('#LONG').val();
            var DIS = $('#DIS').val();
            }
             
            
            SaveAddress(street, street2, postcode, city, country, email, name, phone, '', LAT, LONG, DIS);
            getproducts(0, "", 0);
            localSet("PHONE", phone);
            localSet('CALLER', 1)
            localSet("SETSAVE", 2);
            localSet("Step", "SAVED");
        } else {
      var street = "Collection";
      var street2 = "";
      var postcode = "";
      var city = "";
      var country = "";
      var email = $('#customeremail').val();
      var name = $('#customername').val();
      var guestaccount = "Yes"
      var phone = $('#cphone').val();
      var LAT = ""
      var LONG = ""
      var DIS = ""
      SaveAddress(street, street2, postcode, city, country, email, name, phone, '', LAT, LONG, DIS);
      getproducts(0, "", 0);
      localSet("PHONE", phone);
      localSet('CALLER', 1)

      let obj = '';
      if (typeof $.cookie('customer') !== 'undefined') { //COOKIE
        obj = JSON.parse($.cookie('customer')); //COOKIE
      }
      if (typeof $.cookie('customer') !== 'undefined' && obj != null && obj != '') { //COOKIE
        var street1 = obj['address1'];
        var street2 = obj['address2'];
        var distance = obj['DISTANCE'];
        var FinalCharge = 0;
        localSet('DELIVERYFEE', FinalCharge);
        if (distance != "") {
          $('#Map').html("MAP " + distance + " (mil)")
        }
        $('#callerdata').html("<div id='caller'  data-cPhone='" + obj['cphone'] + "' data-cName='" + obj['fullname'] + "'><div class='Customer'><p>"+ tword("PHONE") +":<strong><span id='callerfound'>" + obj['cphone'] + "</span></strong></p><p>"+ tword("CUSTOMER_NAME") +":<strong>" + obj['fullname'] + "</strong></p><p id='newaddressdetails'>"+ tword("ADDRESS") +":<strong>" + street1 + " " + street2 + " " + obj['postcode'] + "</strong></p></div></div>");
        $('#OrderHistory').css('display', 'block');
        $('#Edit').css('display', 'block');
        $('#Map').css('display', 'block');
        $('#Newcustomer').css('display', 'none');
        $('#SelectCustomer').attr('data-tel', phone).show();
        //  SaveAddress(street1, street2, obj['postcode'], obj['city'], obj['postcode'], obj['email'], obj['fullname'], obj['cphone'], '', obj['LAT'], obj['LONG'], obj['DISTANCE']);
      } else {
        GetCallData(phone);
      }




    }
    $('#Map').html('Map ' + localget("DIS") + ' (mil)');
    $('#productCat').css('display', 'block');
    $('#Map').css('display', 'block');
  }

  function SaveAddress(street, street2, postcode, city, country, email, name, phone, user, LAT, LONG, DIS) {
    var dataString = "func=saveNewAddress&street=" + street + "&street2=" + street2 + "&city=" + city + "&postcode=" + postcode + "&country=" + country + "&customeremail=" + email + "&customername=" + name + "&phone=" + phone + "&user=" + user + "&LAT=" + LAT + "&LONG=" + LONG + "&DIS=" + DIS;
    $.ajax({
      type: 'POST',
      url: "SaveCustomerAdress.proweb",
      data: dataString,
      async: false,
      success: function (data) {


        localSet("POSTCODE", postcode);


        localSet("DIS", data);
        $('#callerdata').html("<div id='caller'  data-cPhone='" + phone + "' data-cName='" + name + "'><div class='Customer'><p>"+ tword("PHONE") +":<strong><span id='callerfound'>" + phone + "</span></strong>   || "+ tword("CUSTOMER_NAME") +":<strong>" + name + "</strong></p><p id='newaddressdetails'>"+ tword("ADDRESS") +":<strong>" + street + " " + street2 + " " + postcode + "</strong></p></div></div>");

        $('#SelectCustomer').attr('data-tel', phone).show();
        $('#OrderHistory').show();
      }
    });
  }
  $('body').on('touchend click', "#CloseMap", function (e) {
    e.preventDefault();
    $('#MapLoader').html('').hide();
  });
  $('#mainBoxContainer').on('touchend click', "#Map", function (e) {
    e.preventDefault();
    $('#MapLoader').html('<iframe src="map/old-map.php" width="100%" height="1050px;"></iframe> <div id="CloseMap" ><button ><i class="glyphicon glyphicon-remove"></i></button></div>').show();
  });
  $('#productsettings').on('click', ".accordion-heading", function (e) {
    e.preventDefault();
    $('.Options').hide().slideUp(4000);
    var $myGroup = $('.accordion-group');
    $myGroup.on('show.bs.collapse', '.collapse', function () {
      $myGroup.find('.collapse.in').collapse('hide');
    });
  });
  $('body').on('touchend click', ".DeleteHistoryLog", function (e) {
    var basketitems = '<h1>'+ tword('DELETE_HISTORY') +'</h1><div id="basketitems"><table class="OrderDetails" id="bitems"><tr><th width="21">'+ tword('NAME') +'</th><th>Name</th><th width="21">'+ tword('PRICE') +'</th></tr>';
    var SubTotal = 0;
    $.each(((DeleteBasket)), function (k, z) {
      SubTotal += check_numbers((z.price * z.qty));
      basketitems = basketitems + '<tr><td >' + z.qty + '</td><td><div  ><strong>' + z.name + '</strong></div></td><td><div >£ ' + check_numbers((z.price * z.qty)).toFixed(2) + '</div></td></tr>';
    });
    basketitems = basketitems + '<tr><td></td><td colspan="2"><h1>Total:' + SubTotal.toFixed(2) + "</h1></td></tr></table>"
    $('.DeleteHistoryArea').html(basketitems).show();
    DeleteBasket = [];
    DeleteHistory = [];
  });
  $('#productsettings').on('touchend click', ".QtyButton", function (e) {
    e.preventDefault();
    var id = $(this).attr('data-title');
    var type = $(this).attr("data-type");
    var qty = $('.basket' + id).attr('data-qty');
    BasketTotalQtyChange = true;
    if (typeof (qty) === "undefined") {
      qty = 1;
    }
    if ($(this).attr('id') == '+') {
      BasketItems[id].qty++;
      UpdateBasket(BasketItems);
    } else {
        deleteProductFromOrder(0, BasketItems[id].ref, BasketItems[id].pcart, BasketItems[id].price, 1, (type === 'deal'))
      if ($.cookie('EDITORDER') == 1) {
        DeleteHistory.push({
          keyNo: BasketItems[id].keyNo,
          name: BasketItems[id].name,
          price: BasketItems[id].price,
          qty: 1,
          catid: BasketItems[id].catid,
          ref: BasketItems[id].ref,
          settings: BasketItems[id].settings,
          ditemids: BasketItems[id].ditemids,
          dealprice: BasketItems[id].dealprice,
          type: BasketItems[id].type,
          deal: 0,
          pcart: BasketItems[id].pcart,
          hasextra: BasketItems[id].hasextra
        });
      }
      var currentqty = BasketItems[id].qty;
      if (currentqty <= 1) {
        ITEMLIMIT.splice(id, 1);
        BasketItems.splice(id, 1);
        var itdescle = BasketItems.length;
        for (var i = 0; i < itdescle; i++) {
          BasketItems[i]['keyNo'] = i;
        }
        UpdateBasket(BasketItems);
      } else {
        BasketItems[id].qty--;
      }
      UpdateBasket(BasketItems);
    }
  });
  
  const pcartKeys = ['ref','prie','qty','name'];
  function deleteProductFromOrder(order=0, product, pcart, price, qty, isDeal) {
    var isEdit = 0;
    if($.cookie('EDITORDER') == 1){
        isEdit = 1;
        order = $.cookie('EDITORDERID');
    }
    var pcartFiltered = [];
    pcart.forEach( extra => pcartFiltered.push(
        Object.keys(extra).filter(key => pcartKeys.includes(key)).reduce((obj, key) => {
          obj[key] = extra[key];
          return obj;
        }, {})
      )
    );
    
    $.ajax({
      type: 'POST',
      url: "DeleteProductFromOrder.proweb",
      data: {
        order:order,
        product:product,
        pcart:JSON.stringify(pcartFiltered),
        price:price,
        qty:qty,
        is_edit:isEdit,
        is_deal:isDeal == 'true' ? 1:0
      },
      async: false,
      success: function (data) {
      }
    });
  }
  
  $('#productsettings').on('touchend click', ".CustButton", function (e) {
    e.preventDefault();

    var type = $(this).attr('data-type');
    if (type == "DELIVERY") {
      $('.AddressArea').css('display', 'block');
      var totalSale = check_numbers($('.TotalValue').html())
      var charge = check_numbers(localget('DELIVERYFEE'));
      if (typeof (charge) == "undefined") {
        charge = 0;
      }
      var dataroll = "func=" + type + '&DCharge=' + charge;
      if (totalSale < window.app.MINORDER) {
        //alert("PLEASE NOTE: MINIMUM ORDER FOR DELIVERY IS " +window.app.MINORDER );
        var t = window.app.MINORDER - totalSale;
        $('#DeliveryFee').html(check_numbers(charge).toFixed(2));
        updateMainTotalArea(check_numbers(charge).toFixed(2));
      }
    } else {
      $('.AddressArea').css('display', 'none');
      if (localget('CALLER') == 0) {}
    }
    localSet('METHOD', type);
  });
  $('#productsettings').on('touchend click', "#COUNTERBUTTON", function (e) {
    e.preventDefault();

    if (localget('CALLER') == 0) {
      localSet('CALLER', 1)
      localSet('PHONE', window.app.SHOPTEL);
      $('#COUNTERBUTTON').click();
    } else {
      $('#productlayout').html("");
      var calculator = '';
      var fullamount = '';
      var discount = '';
      var system = '';
      var delivery = '';
      for (var i = 9; i > 0; i--) {
        calculator = calculator + '<button class="btn Numbers" data-title="' + i + '">' + i + '</button>';
      }
      calculator = calculator + '<button class="btn Numbers" data-title="0">0</button>';
      calculator = calculator + '<button class="btn Numbers" data-title="00">00</button>';
      fullamount = '<button class="btn Numbers fullamount" data-title="5.00">'+ tword('PRICE_SEMBOL') +'5</button>';
      fullamount = fullamount + '<button class="btn Numbers fullamount" data-title="10.00">'+ tword('PRICE_SEMBOL') +'10</button>';
      fullamount = fullamount + '<button class="btn Numbers fullamount" data-title="20.00">'+ tword('PRICE_SEMBOL') +'20</button>';
      fullamount = fullamount + '<button class="btn Numbers fullamount" data-title="50.00">'+ tword('PRICE_SEMBOL') +'50</button>';
      discount = '<button class="btn discount" data-title="0.05">5%</button>';
      discount = discount + '<button class="btn  discount" data-title="0.10">10%</button>';
      discount = discount + '<button class="btn  discount" data-title="0.25">25%</button>';
      discount = discount + '<button class="btn  discountEnter" data-title="0">% D</button><button class="btn  discountEnterMoney" data-title="0">'+ tword('PRICE_SEMBOL')+' D</button>';
      system = system + '<button class="btn system" data-title="C">'+ tword('CLEAR') +'</button>';
      system = system + '<button  class="btn PayType PAYME" data-title="CASH">'+ tword('CASH') +'</button><button class="btn PayType PAYME" data-title="CARD">'+ tword('CARD') +'</button><button class="btn system" id="CloseOrder">'+ tword('CLOUSE') +'</button>';
      var delivery = '';
      
      if(localget('METHOD') == "DELIVERY"){
            if (window.app.setupTimeDelivery != "") {
                var timeCon = window.app.setupTimeDelivery;
                timeCon = timeCon.split(",");
                $.each(timeCon, function (key, val) {
                  delivery = delivery + '<button class="btn setupTime" data-title="' + val + '">' + val + ' '+ tword('MINS') +'</button>';
                });
                delivery = delivery + '<button class="btn SaveNoPrint"  >'+ tword('SAVE_ORDER_NO_PRINT') +'</button>';
                delivery = delivery + '<button class="btn SavePrintOrder"  >'+ tword('PRINT_ORDER') +'</button>';
              } else {
                delivery = '<button class="btn setupTime" data-title="15">15 '+ tword('MINS') +'</button>';
                delivery = delivery + '<button class="btn setupTime AutoPrintOrder" data-title="30">30 '+ tword('MINS') +'</button>';
                delivery = delivery + '<button class="btn setupTime" data-title="45">45 '+ tword('MINS') +'</button>';
                delivery = delivery + '<button class="btn setupTime" data-title="60">60 '+ tword('MINS') +'</button>';
              }
      }else{
          
           if (window.app.CUSTOMERTYPE != "Barber") {
           if (window.app.setupTime != "") {
            var timeCon = window.app.setupTime;
            timeCon = timeCon.split(",");
            $.each(timeCon, function (key, val) {
              delivery = delivery + '<button class="btn setupTime" data-title="' + val + '">' + val + ' '+ tword('MINS') +'</button>';
            });
            delivery = delivery + '<button class="btn SaveNoPrint"  >'+ tword('SAVE_ORDER_NO_PRINT') +'</button>';
            delivery = delivery + '<button class="btn SavePrintOrder"  >'+ tword('PRINT_ORDER') +'</button>';
          } else {
            delivery = '<button class="btn setupTime" data-title="15">15 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime AutoPrintOrder" data-title="30">30 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="45">45 '+ tword('MINS') +'</button>';
            delivery = delivery + '<button class="btn setupTime" data-title="60">60 '+ tword('MINS') +'</button>';
          }
           }
      }
      
      
     
      
      
      var buttons = '<div id="pricebox" class="col-md-12 col-sm-12"><span id="prices"></span><input type="hidden" id="messagebox"></div><div class="col-md-12 col-sm-12"><div class="col-md-6 col-sm-6">' + calculator + '</div><div class="col-md-2 col-sm-2">' + fullamount + '</div><div class="col-md-2 col-sm-2">' + discount + '</div><div class="col-md-2 col-sm-2">' + system + '</div><div class="col-md-12 col-sm-12">' + delivery + '</div></div>';
      $('#productlayout').removeClass('col-md-10');
      $('#productlayout').addClass('col-md-12');
      $('#productlayout').removeClass('col-sm-10');
      $('#productlayout').addClass('col-sm-12');
      $('#productlayout').html(buttons);
      $('#productbuttons').css('display', 'none');
      $('#productCat').css('display', 'none');
    }
  });
  $('.CallListPopUp').on('touchend click', ".dCharge", function (e) {
    e.preventDefault();
    var charge = $(this).attr('data-title');
    delChargeTopAll(charge);
  });


  function delChargeTopAll(charge) {
    $('#DeliveryFee').html(check_numbers(charge).toFixed(2));
    updateMainTotalArea(check_numbers(charge).toFixed(2));
    var dataroll = "func=Delivery&DCharge=" + charge;
    $.ajax({
      type: 'POST',
      url: "DeliveryCheck.proweb",
      data: dataroll,
      async: false,
      success: function (data) {}
    });
    COMPLETE();
    $('.CallListPopUp').hide();

    localSet("DELCHARGE", charge);
  }



  $('#productsettings').on('touchend click', ".DeliveryType", function (e) {
      
    e.preventDefault();

    $('#loading').show();
    var type = $(this).attr("data-type");
    
    if(BasketItems.length < 1){
        $('#loading').hide();
        swal("Error", "Please add product to cart.", "warning");
        return;
    }
    
    
      if (type == "DELIVERY") {
        if(localget('CALLER') == 0){
          $('#loading').hide();
          localSet('METHOD', 'COLLECTION');
          swal(tword('ERROR_NO_CALLER_FOUND'), tword('SELECT_C_C_SALE'), "warning");
          return;
        }else{
            let customer = JSON.parse( localget('customer') );
            if(customer.cphone === ''){
                $('#loading').hide();
                localSet('METHOD', 'COLLECTION');
                swal(tword('ERROR_NO_CALLER_FOUND'), tword('SELECT_C_C_SALE'), "warning");
                return;
            }
        }
        localSet('METHOD', type);
        $('.AddressArea').css('display', 'block');
        var totalSale = check_numbers(localget('TOTALFEE')) - check_numbers(localget('discountAmountWhitout'));
    
        var charge = check_numbers(localget('DELIVERYFEE'));
        $('#DeliveryLabel').html("DELIVERY")
        if (typeof (charge) == "undefined" || isNaN(charge)) {
          charge = 0;
        }
    
        if (totalSale >= check_numbers(window.app.DISCOUNT_SPEND) && window.app.AUTO_DISCOUNT_CALCULATE == "Yes") {
          let colDistop = check_numbers((totalSale * (window.app.DELIVERY_DISCOUNT / 100))) + check_numbers(localget('discountAmountRule'));
          if (colDistop > 0) {
            swal({
              type: 'info',
              title: tword('SUCCESS_DISCOUNTED'),
              html: colDistop.toFixed(2),
              timer: 2000
            });
    
            discountCalculate(colDistop.toFixed(2));
          }
        }
    
    
        var objs = JSON.parse($.cookie('customer')); //COOKIE
        if (objs['shipCharge'] > 0 && window.app.AUTO_SELECT_DELIVERY_FEE == "Yes") {
          delChargeTopAll(check_numbers(objs['shipCharge']).toFixed(2));
        } else {
          var delcharges = '<h1>'+ tword('DELIVERY_CHARGE') +'</h1>';
    
          if (objs['shipCharge'] > 0 && window.app.AUTO_SELECT_DELIVERY_FEE == "No") {
            delcharges += '<button class="btn dCharge" data-title="' + objs['shipCharge'] + '">' + objs['shipCharge'] + '</button>'
          }
    
          $.each((window.app.DELIVERY_AMOUNT).split(","), function (index, value) {
            delcharges += '<button class="btn dCharge" data-title="' + value + '">' + value + '</button>'
          });
          $('.CallListPopUp').html(delcharges).show().css('height', 'auto');
    
        }
    
    
    
        if (totalSale < window.app.MINORDER) {
          //alert("PLEASE NOTE: MINIMUM ORDER FOR DELIVERY IS " +window.app.MINORDER );
          //var t = window.app.MINORDER-totalSale;
          //$('#DeliveryFee').html(check_numbers(charge).toFixed(2));
          // updateMainTotalArea(check_numbers(charge).toFixed(2));
        }
      } else {
          localSet('METHOD', type);
        $('.AddressArea').css('display', 'none');
        if (localget('CALLER') == 0) {
          COUNTERCLICK();
        } else {
          COMPLETE();
        }
      }
    
      if (type == "COLLECTION") {
    
        var totalSale = check_numbers(localget('TOTALFEE')) - check_numbers(localget('discountAmountWhitout'));
        if (totalSale >= check_numbers(window.app.DISCOUNT_SPEND)) {
          let colDistop = check_numbers((totalSale * (window.app.COLLECTION_DISCOUNT / 100))) + check_numbers(localget('discountAmountRule'));
    
          if (colDistop > 0) {
            swal({
              type: tword('INFO'),
              title: tword('SUCCESS_DISCOUNTED'),
              html: colDistop.toFixed(2),
              timer: 2000
            });
            discountCalculate(colDistop.toFixed(2));
          }
        }
      }
    $("#loading").hide();
  });

  $('#mainBoxContainer').on('touchend click', ".Notes", function (e) {
    e.preventDefault();



    var content = '<input type="text" class="msg"  style="font-size: 20px; height: 72px !important;  margin: 10px 1px;  width: 66%;" ><button class="btn btn-primary hvr-shutter-out-horizontal AddNoteCharge"><span aria-hidden="true" class="glyphicon glyphicon-remove-circle"></span>'+ tword('SAVE_NOTE')+'</button><script>$(function(){$(".msg").keyboard({layout : "qwerty"});});</script>'
    $('#MessageArea').html(content).show().fadeIn();

  });

  $('#mainBoxContainer').on('touchend click', ".Note", function (e) {
    e.preventDefault();
    var pcart = $('.QtyButton').attr('data-title')

    var types = $(this).attr('data-top');
    if (typeof (pcart) != "undefined") {
      var content = '<input type="text" class="msg"  style="font-size: 20px; height: 72px !important;  margin: 10px 1px;  width: 66%;" ><button class="btn btn-primary hvr-shutter-out-horizontal AddNote" data-top="' + types + '"><span aria-hidden="true" class="glyphicon glyphicon-remove-circle"></span>'+ tword('SAVE_NOTE')+'</button><script>$(function(){$(".msg").keyboard({layout : "qwerty"});});</script>'
      $('#MessageArea').html(content).show().fadeIn();
    } else {
      swal(tword('BASKET_ERROR'), tword('ADD_SELECT_NO'), "warning");
    }
  });
  $('#mainBoxContainer').on('touchend click', ".AddNoteCharge", function (e) {
    e.preventDefault();

    AddNoteCharge = $('.msg').val();
    $('#MessageArea').html("").hide().fadeOut();
    $('#NoteArea').html("Note:" + AddNoteCharge);

    if ($('#prices').html() != "") {
      $('.Charge').click();
    }

  });




  $('#mainBoxContainer').on('touchend click', ".AddNote", function (e) {
    e.preventDefault();
    if ($('.msg').val().length > 0) {

      var toptype = $(this).attr('data-top');

      if (toptype == "1") {
        localSet("BASKETNOTE", $('.msg').val());
        UpdateBasket(BasketItems);
      } else {
        var pcart = $('.QtyButton').attr('data-title');
        var ref = pcart
        var price = 0;
        var name = $('.msg').val();
        var cat = 0
        var exID = pcart;
        SaveBasketExtras(ref, price, name, cat, exID, $(this), -1);
      }
    }
    $('#MessageArea').html("").hide().fadeOut();
  });
  $('#PhoneButtons').on('touchend click', "#Free", function (e) {
    e.preventDefault();
    $('.BtnExtra').removeClass('activeBtn');
    $(this).addClass('activeBtn');

    localSet("FREE", 1);
  });
  $('#PhoneButtons').on('touchend click', ".Yes", function (e) {
    e.preventDefault();
    var text = $(this).attr('id');
    var ref = text;
    var price = $(this).attr('data-price');
    var name = text;
    var cat = "";
    var exID = $('.QtyButton').attr('data-title');
    if (exID != "" && typeof (exID) != "undefined") {
      SaveBasketExtras(ref, price, name, cat, exID, "", -1);
    }
  });
  $('#productsettings').on('touchend click', "#Separate", function (e) {
    e.preventDefault();
    $('.BtnExtra').removeClass('activeBtn');
    $(this).addClass('activeBtn');

    localSet("Separate", 1);
  });
  $('#productsettings').on('touchend click', "#Half", function (e) {
    e.preventDefault();
    $('.BtnExtra').removeClass('activeBtn');
    $(this).addClass('activeBtn');

    localSet("HALF", 1);
  });
  $('#productsettings').on('touchend click', ".changeprice", function (e) {
    e.preventDefault();
    var price = $(this).attr('data-iprice');
    var ref = $(this).attr('data-iref');
    var content = '<input type="text" class="msg" value="' + price + '" style=" font-size: 20px; height: 50px;  margin: 10px 1px;   width: 66%;" ><button id="' + ref + '" class="btn btn-primary hvr-shutter-out-horizontal  UpdatePrice" ><span aria-hidden="true" class="glyphicon glyphicon-remove-circle"></span></button><script>$(function(){$(".msg").keyboard({layout : "qwerty"});});'
    $('#MessageArea').html(content);
  });
  $('#productsettings').on('touchend click', ".UpdatePrice", function (e) {
    e.preventDefault();
    var dataroll = "ref=" + $(this).attr('id') + "&price=" + $('.msg').val();
    $.ajax({
      type: 'POST',
      url: "UpdatePriceBasket.proweb",
      data: dataroll,
      async: false,
      success: function (data) {
        UpdateBasket()
        $('#MessageArea').html("").hide().fadeOut();
      }
    });
  });
  
  $('#productsettings').on('touchend click', ".changePrice", function (e) { 
        e.preventDefault();
        
       var datakey = $(this).attr('data-key');
       swal({
            title: "CHANGE PRICE",
            text: "New Price",
            type: "input",
            inputType: "text",
            showCancelButton: true,
            closeOnConfirm: true,
            inputPlaceholder: "ENTER NEW PRICE"
          }, (inputValue) => {
              if(typeof inputValue != "undefined" || inputValue != 0){
                   BasketItems[datakey].price = inputValue;
                   UpdateBasket(BasketItems);
                 
              }
                return true
        });
  });
  
  $('#productsettings').on('touchend click', ".basketlisting", function (e) {
    e.preventDefault();
    CurrentStep = 99;
    
    var id = $(this).attr('id');
    var cat = $(this).attr('data-title');
    var type = $(this).attr('data-type');
    var extra = $(this).attr('data-type');
    var desc = $(this).attr('data-desc');
    var settings = $(this).attr('data-settings');
    var hasextra = $(this).attr('data-hasextra');
    var pref = $(this).attr('data-ref');
    $('.QtyButton').attr('data-title', id)
    $('.basketlisting').removeClass('activeP');

    BasketListItems = [];
    $(this).find("li").each(function () {
      var li = $(this);

      BasketListItems.push(li.text().replace(/\d+/g, '').replace("£", "").replace(".", ''));
    });


    //
    $(this).addClass('activeP');
    if (hasextra == 1) {
      var editdeal = 1;
    } else {
      var editdeal = 1;
    }
    SaveBasket(id, 1, type, '', '', settings, cat, pref, '', settings, desc, editdeal, hasextra);
  });
  //LOAD MORE AND LESS
  //     $('#productsettings').on('touchend click', ".loadmore", function (e) {
  //         e.preventDefault();
  //         showNext($('.productInfo'))
  //     });
  //   $('#productsettings').on('touchend click', ".loadless", function (e) {
  //         e.preventDefault();
  //         showPrevious($('.productInfo'))
  //     });
  function showNext(list) {
    var from = parseInt($('.currentCat').attr('data-from')),
      step = 24;
    if ($('.productInfo li').length > from) {
      list
        .find('li').hide().end()
        .find('li:lt(' + (from + step) + '):not(li:lt(' + from + '))')
        .show();
      from += step;
      $('.currentCat').attr('data-from', from);
    }
  }

  function showPrevious(list) {
    var from = parseInt($('.currentCat').attr('data-from')),
      step = 24;
    if (from > 6) {
      from -= step;
      list
        .find('li').hide().end()
        .find('li:lt(' + from + '):not(li:lt(' + (from - step) + '))')
        .show();
      $('.currentCat').attr('data-from', (from));
    }
  }
  $('#productsettings').on('touchend click', "#CloseOrder", function (e) {
    e.preventDefault();

    swal({
        title: tword('ARE_YOU_SURE'),
        text: tword('NOT_ABLE_RECOVER_ORDER'),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: tword('YES_DELETE_IT'),
        closeOnConfirm: true
      },
      function () {
        CLOSECALL();
        localSet('PayType', '')
        $('#MessageArea').html("").hide().fadeOut();
        localSet("fullname", "");
        localSet("customeremail", "");
        $('#SelectCustomer').attr("data-tel", "").hide();
        BasketItems = [];
        UpdateBasket(BasketItems);
        $('#basketlayout').show();
      });
  });

  function CLOSECALL() {

    localSet("BASKETNOTE", '');
    ITEMLIMIT = [];
    localSet('discountAmount', 0);
    localSet('discountAmountRule', 0)
    localSet('discountAmountWhitout', 0)
    localSet("DELCHARGE", 0);
    localSet('PayType', '')
    localSet('CALLER', 0)
    localSet('PHONE', '');
    localSet('METHOD', '');
    localSet('TOTALFEE', 0);
    localSet('DELIVERYFEE', 0);
    if (window.app.CallerId == 'Yes') {
      var phone = localget('PHONE');
      var dataroll = "phone=" + phone;
      $.ajax({
        type: 'POST',
        url: "CallerIDOff.proweb",
        data: dataroll,
        async: false,
        success: function (data) {
          $('#productlayout').removeClass('col-md-12');
          $('#productlayout').addClass('col-md-10');
          $('#productbuttons').css('display', 'block');
          $('#productCat').css('display', 'block');

          $('#PmethodNew').html("")
          BasketItems = [];
          UpdateBasket(BasketItems);
          StartPHONE();
        }
      });
    } else {
      $('#productlayout').removeClass('col-md-12');
      $('#productlayout').addClass('col-md-10');
      $('#productbuttons').css('display', 'block');
      $('#productCat').css('display', 'block');
      $('#PmethodNew').html("")
      BasketItems = [];
      UpdateBasket(BasketItems);
      StartPHONE();
    }
    PostCodesTopT = '';
    localSet('POSTCODE', '');
    BasketTotal = 0;
    $.removeCookie('customer'); //COOKIE
     $.removeCookie('NewAdressCustomer');

    EnableButtons();

  }
  //TELEPHONE ORDER PAGE
  $("#phone").on("click", function () {
    $('#productsettings').css('display', 'block');
    $('#basketlayout').css('display', 'block');
    $('#productCat').css('display', 'block'); //StartPHONE();
    $('#Admin').hide();
    $('#QueuePage').hide();
    $('#OrderLogPage').hide();
    var MainID = window.app.MAINSELECT || 2;
    getproducts(MainID, "", 0);
    $('#OrderDetail').hide()
    $('#FooterBar').css('display', 'block');
    $('#HistoryButtons').css('display', 'block');
  });
  $('.navigation').on('touchend click', ".Counter", function (e) {
    e.preventDefault();
    COUNTERCLICK();
  });

  function COUNTERCLICK() {
    localSet('CALLER', 1)
    var tel = window.app.SHOPTEL.toString();

    localSet('PHONE', tel);
    Timmer(0);
    localSet("Step", "Data");
    if (localget('TOTALFEE') != 0.00) {

    }
    COMPLETE();
  }
  $('#Admin').on('touchend click', "#SaveForm", function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "NewDriverSave.proweb",
      data: $('#DriverForm').serialize(),
      success: function (data) {
        $('#DriverList').click();
      }
    });
    return false;
  });
  $('#Admin').on('touchend click', ".DeleteDriver", function (e) {
    e.preventDefault();
    var driver = "user=" + $(this).attr('id');
    $.ajax({
      type: 'POST',
      url: "DeleteDrivers.proweb",
      data: driver,
      async: false,
      success: function (data) {
        $('#DriverList').click();
      }
    });
  });
  $('#Admin').on('touchend click', "#AddVehicle", function (e) {
    e.preventDefault();
    var content = '<script>$(function(){$("input.keyboard").keyboard({layout : "qwerty"});});<\/script>';
    var driverpan = '<form id="DriverForm" ><table id="PrintListings"><tr><th>'+ tword('DRIVER') +'</th><th>'+ tword('VEHICLE') +'</th><th>'+ tword('REG') +'</th><th>'+ tword('COLOUR') +'</th><th>'+ tword('SAVE') +'</th></tr>';
    driverpan += '<tr><td><input type="text" name="dname" id="dname" class="keyboard"></td><td><input type="text" name="vmodel" id="vmodel" class="keyboard"></td><td><input type="text" name="vreg" id="vreg" class="keyboard"></td><td><input type="color" name="color" id="="dcolor" value="#"></td><td><button id="SaveForm">'+ tword('SAVE') +'</button></td></tr></table></form>' + content
    $('#ReportArea').html(driverpan).show();
  });
  $('#Admin').on('touchend click', ".DeleteCashup", function (e) {
    e.preventDefault();
    var id = $(this).attr('data-ref');
    $('#RowD' + id).remove();
    var totalDelete = $(this).attr('data-total');
    var SubTotal = $('#CashUpTotalArea').html();
    var newTotal = check_numbers(SubTotal) - check_numbers(totalDelete);
    $('#CashUpTotalArea').html(check_numbers(newTotal).toFixed(2));
    delete CashUpArray[id];
    $(".MainCashUpTable #CASHROW" + id + ' td').css('background-color', '#fff');
  });
  $('#Admin').on('touchend click', ".CashUpSelect", function (e) {
    e.preventDefault();
    var Total = $(this).attr('data-total');
    var id = $(this).attr('data-id');
    var driverpan = '<table id="PrintListings" class="CashUpListingTable"><tr><th>'+ tword('ORDER') +'</th><th>'+ tword('TOTAL') +'</th><th>'+ tword('ACTION') +'</th></tr>';
    CashUpArray[id] = Total;
    var cashpan = '';
    var STotal = 0;
    $.each(CashUpArray, function (key, val) {
      cashpan += '<tr id="RowD' + key + '"><td>' + key + '</td><td>' + check_numbers(val).toFixed(2) + '</td><td><button data-total="' + check_numbers(val).toFixed(2) + '" class="DeleteCashup" data-ref="' + key + '">Delete</button></td></tr>';
      $(".MainCashUpTable #CASHROW" + key + ' td').css('background-color', '#13AAB1');
      STotal += check_numbers(val);
    });
    cashpan += '<tr><td>Sub Total</td><td id="CashUpTotalArea">' + check_numbers(STotal).toFixed(2) + '</td><td><button id="PrintCashup">'+ tword('PRINT')+'</button></td></tr>';
    $('.CashupSlot').html(driverpan + cashpan).show().css('float', 'right');
  });
  $('#Admin').on('touchend click', "#PrintCashup", function (e) {
    e.preventDefault();
    let styles = '#PrintListings {background-color: #fff;    float: left;    width: 45%; margin-left:20px;}#PrintListings td{ border-bottom: 1px solid #000;border-right: 1px solid #000;    font-size: 24px;    padding: 11px;}#PrintListings th{background-color: #dc585a;    border-left: 1px solid #fff;    color: #fff;    font-size: 20px;    padding: 10px;    text-align: center;}#PrintListings  input{width:234px;}';
    print_iframe_get($('.CashupSlot').html(), styles, 0);
    var DeliverAccount = "";
    $.each(CashUpArray, function (key, val) {
      $("#CASHROW" + key).remove().slice();
      DeliverAccount += "orderid='" + key + "' OR ";
    });
    var dataString = "Str=" + DeliverAccount;
    $.ajax({
      type: 'POST',
      url: "code/CashupSave.php",
      data: dataString,
      async: false,
      success: function (data) {}
    });
    $('.CashUpListingTable').remove();
    CashUpArray = {};
  });
  $('#Admin').on('touchend click', "#Cashup", function (e) {
    e.preventDefault();
    var Counter = 0;
    $.ajax({
      type: 'POST',
      url: "CashRowOpen.proweb",
      data: "",
      async: false,
      success: function (data) {
        data = jQuery.parseJSON(data);
        var driver = data.drivers || ""
        var D = 0;
        var driverpan = '<table id="PrintListings" class="MainCashUpTable"><tr><th>'+ tword('ORDER') +'</th><th>'+ tword('RECEIPT_NO') +'</th><th>'+ tword('TOTAL') +'</th><th>'+ tword('TYPE') +'</th><th>'+ tword('DRIVER')+'</th><th>'+ tword('ACTION')+'</th></tr>';
        $.each(data.orders, function (key, val) {
          if (val.method == "DELIVERY" || val.method == "Delivery") {
            Counter++;
            var driver = val.dname || " "

            var orderType = val.orderid;
            orderType = orderType.substring(0, 3);
            var Total = 0;
            Total = check_numbers(val.Total)

            var paymentMethod = val.paymentMethod || "CASH";
            var DriverButton = '<button data-totalbill="' + check_numbers(Total).toFixed(2) + '" data-paymentmethod="' + paymentMethod + '" data-cart="' + val.orderid + '" style="font-size:18px;width: 200px;display: inline-block;" class="btn btn-primary hvr-shutter-out-horizontal orderslist DriverList" type="button"><i class="glyphicon glyphicon-road"></i> '+ tword('SELECT_DRIVER') +' </button>';
            var street = val.street || '';
            var street2 = val.street2 || '';
            var postcode = val.postcode || '';
            street = street + "<br>" + street2 + " " + postcode
            driverpan += '<tr id="CASHROW' + val.orderid + '" data-id="Row' + val.order + '"><td>' + val.order + '</td><td>' + val.orderid + '<br/>' + street + '</td><td>' + check_numbers(Total).toFixed(2) + '</td><td>' + paymentMethod + '</td><td><div id="DriverName' + val.orderid + '">' + driver + '</div> ' + DriverButton + '</td><td><button class="CashUpSelect" data-id="' + val.orderid + '" data-total="' + check_numbers(Total).toFixed(2) + '">'+ tword('SELECT') +'</button></td></tr>'
          }
        });
        var cashupSlot = '<div class="CashupSlot"></div><div class="col-md-12 col-sm-12 DriverPanel"  style="display: hidden;"><div id="CloseDriver"><button><i class="glyphicon glyphicon-remove"></i></button></div></div>'
        $('#ReportArea').html(driverpan + cashupSlot).show();
      }
    });
  });
  $('#Admin').on('touchend click', "#DriverList", function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      async: false,
      url: "GetDrivers.proweb",
      data: '',
      success: function (data) {
        data = jQuery.parseJSON(data);
        var driverpan = '<table id="PrintListings"><tr><th>Driver</th><th>'+ tword('VEHICLE') +'</th><th>'+ tword('REF') +'</th><th>'+ tword('USERNAME') +'</th><th>'+ tword('PASSWORD') +'</th><th>'+ tword('COLOUR') +'</th><th>'+ tword('ACTION') +'</th></tr>';
        $.each(data['driver'], function (key, val) {
          var dimage = val.avatar;
          if (dimage == "") {
            dimage = "assets/img/table.jpg";
          }
          driverpan += '<tr><td>' + val.dname + '</td><td>' + val.vmodel + '</td><td>' + val.vreg + '</td><td>' + val.duser + '</td><td class="changePass" data-id="' + val.duser + '">*****</td><td style="background-color:' + val.color + '">' + val.color + '</td><td><button id="' + val.duser + '" class="DeleteDriver">Delete</button></td></tr>'
        });
        driverpan += '</table><div class="AddDriver"><img src="assets/img/addcar.png" id="AddVehicle"></div>';
        $('#ReportArea').html(driverpan).show();
      }
    });
  });
  $('#Admin').on('touchend click', ".DeleteOrderDriver", function (e) {
    e.preventDefault();
    var orderid = $(this).attr('title');
    $.ajax({
      type: 'POST',
      async: false,
      url: "DeleteDriverList.proweb",
      data: '&orderid=' + orderid,
      success: function (data) {
        $('#box-' + orderid).remove()
        $('#DriverListings').click();
      }
    });
  });
  $('#Admin').on('touchend click', "#DriverListings", function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "DriverListGet.proweb",
      data: '',
      success: function (data) {
        data = jQuery.parseJSON(data);
        var users = [];
        var i = 0;
        var driverpan = ''
        $.each(data['driver'], function (ke, va) {
          driverpan = driverpan + '<table id="PrintListings"><tr><th>'+ tword('DRIVER') +'</th><th>'+ tword('ORDER_NO') +'</th><th>'+ tword('PAYMENT') +'</th><th>'+ tword('TOTAL') +'</th><th>'+ tword('ACTION') +'</th></tr>';
          var total = 0;
          var MainTOtal = 0;
          var MainTOtalCard = 0;
          $.each(va, function (key, val) {
            total = check_numbers(val.Total);
            if ($.trim(val.paymentMethod) != "CARD" && $.trim(val.paymentMethod) != "PAID") {
              MainTOtal += total;
            } else {
              MainTOtalCard += check_numbers(val.Total);;
            }
            users[i] = val.duser;
            i++;
            var street = val.street != "" && val.street != "0" ? val.street : '';
            var street2 = val.street2 != "" && val.street2 != "0" ? val.street2 : '';
            var postcode = val.postcode != "" && val.postcode != "0" ? val.postcode : '';
            street = street + "<br>" + street2 + " " + postcode
            driverpan += '<tr id="box-' + val.orderid + '"><td>' + val.dname + '</td><td>' + val.orderid + '<br>' + street + '</td><td>' + val.paymentMethod + '</td><td>' + total.toFixed(2) + '</td><td><button title="' + val.orderid + '" class="DeleteOrderDriver">Delete</button></td></tr>'
          });
          driverpan = driverpan + '<tr><td colspan="4"><h2>'+ tword('TOTAL_CASH_ORDERS') +'</h2></td><td> £' + parseFloat(MainTOtal).toFixed(2) + '</td></tr><tr><td colspan="4"><h2>'+ tword('TOTAL_CASH_ORDERS') +'</h2></td><td> £' + parseFloat(MainTOtalCard).toFixed(2) + '</td></tr><tr><td colspan="4"><h2>'+ tword('TOTAL') +' </h2></td><td>  '+ tword('PRICE_SEMBOL') +' ' + parseFloat(MainTOtalCard + MainTOtal).toFixed(2) + '</td></tr></table>';
        });
        $('#ReportArea').html(driverpan).show();
      }
    });
  });
  $('body').on('touchend click', ".DriverBox", function (e) {
    e.preventDefault();
    var orderid = $(this).attr('data-cart');
    var paymentmethod = $(this).attr('data-paymentmethod');
    var user = $(this).attr('id');
    var TotalBill = $(this).attr('data-totalbill');
    if (paymentmethod == " ") {
      paymentmethod = "CASH";
    }
    var dataString = "user=" + user + "&orderid=" + orderid + "&Total=" + TotalBill + "&paymentMethod=" + paymentmethod;
    $('#DriverName' + orderid).html(user)
    $.ajax({
      type: 'POST',
      url: "DriverSave.proweb",
      data: dataString,
      async: false,
      success: function (data) {
        data = JSON.parse(data);
        $('.DriverPanel').html('').hide();
        $('#OrderDetail > button.DriverList').html('<i class="glyphicon glyphicon-road"></i> '+ tword('SELECT_DRIVER') +'-' + data.user + '</button>');
        var orderButton = $('#OrderLog #order' + data.orderid);
        $(orderButton).css('backgroundColor', data.color + ' !important');
        var newDriver = 'Driver: ' + data.user + ' ';
        var buttonContent = $(orderButton).html();
        var begin = buttonContent.indexOf('Driver');
        var end = buttonContent.indexOf('|', begin);
        $(orderButton).html(buttonContent.substring(0, begin) + newDriver + buttonContent.substring(end));
        // $('.DriverList').attr('data-cart', '').hide();
      }
    });
  });
  $('body').on('touchend click', "#CloseDriver", function (e) {
    e.preventDefault();
    $('.DriverPanel').html('').hide();
  });
  $('body').on('touchend click', ".DriverList", function (e) {
    e.preventDefault();
    var orderid = $(this).attr('data-cart');
    var TotalBill = $(this).attr('data-totalbill');
    var paymentmethod = $(this).attr('data-paymentmethod');
    $.ajax({
      type: 'POST',
      url: "GetDrivers.proweb",
      data: '',
      success: function (data) {
        data = jQuery.parseJSON(data);
        var driverpan = '';
        $.each(data['driver'], function (key, val) {
          var dimage = val.avatar;
          if (dimage == "") {
            dimage = "assets/img/user.png";
          }
          driverpan += '<div class="DriverBox" id="' + val.duser + '" data-cart="' + orderid + '" data-totalbill="' + TotalBill + '" data-paymentmethod="' + paymentmethod + '"><div class="DriverImage"><img src="' + dimage + '"></div><div class="DriverInfo"><h1>' + val.dname + '</h1><h2>' + val.vmodel + ' ' + val.vreg + '</h2></div> </div>';
        });
        $('.DriverPanel').html(driverpan + '<div id="CloseDriver" ><button ><i class="glyphicon glyphicon-remove"></i></button></div>').show();
        $('.DriverPanel').show();
      }
    });
  });
  $('body').on('touchend click', ".DeleteOrder", function (e) {
    e.preventDefault();
    var orderid = $(this).attr('data-orderid');
    swal({
      title: tword('MANAGER_PIN'),
      text: "",
      type: "input",
      inputType: "password",
      showCancelButton: true,
      closeOnConfirm: false,
      inputPlaceholder: tword('ENTER_PIN')
    }, function (inputValue) {
      if (inputValue === false) {
        return false
      };
      if (inputValue === "") {
        swal.showInputError(tword('YOU_NEED_PIN'));
        return false
      }
      if (inputValue != window.app.ADMINPIN) {
        swal.showInputError(tword('WRONG_PIN'));
        return false
      }
      swal({
          title: tword('ARE_YOU_SURE'),
          text: tword('NOT_ABLE_RECOVER_ORDER'),
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: tword('YES_DELETE_IT'),
          closeOnConfirm: false
        },
        function () {
          var datast = "orderid=" + orderid;
          $.ajax({
            type: 'POST',
            url: "OrderDelete.proweb",
            data: datast,
            async: false,
            success: function (data) {
              $('.DeleteOrder').attr('data-orderid', '').hide();
              $('#Log').click();
            }
          });
          swal(tword('DELETED'), tword('HAS_BEEN_DELETED'), "success");
        });
    });
  });
  $('body').on('touchend click', "#DeleteHistroy", function (e) {
    var itemList = '';
    var orderType = "TEL";
    $.ajax({
      type: 'POST',
      url: "DeletedOrders.proweb",
      data: "",
      async: false,
      success: function (data1) {
        var data = jQuery.parseJSON(data1);
        DeleteHistory = data.orders.reduce((obj, order)=>{
            if(typeof obj === 'undefined'){
                obj = [];
            }
            if(typeof obj[order.dp_orderid] === 'undefined'){
                obj[order.dp_orderid] = [];
            }
            obj[order.dp_orderid].push(order);
            return obj;
        }, []);
        Object.keys(DeleteHistory).forEach(function(key) {
          var val = DeleteHistory[key];
          var color = val[0].color;
          if (color != null) {
            color = 'style="background-color:' + color + ' !important;"'
          } else {
            color = '';
          }
          var pMethod = val[0].paymentMethod;
          var t = val[0].orderid.substr(0, 3);
          var CustAdd = '';
          if ((val[0].street) != null && val[0].method == "DELIVERY") {
            CustAdd = val[0].street + ' - ' + val[0].street2 + ' - ' + val[0].postcode;
          } else {
            CustAdd = ''
          }
          var date22 = val[0].adddate.split(' ');
          var driverName = '';
          if (val[0].dname != null) {
            driverName = " | Driver: " + val[0].dname;
          }
          
          var pcartTotal = val.reduce((oldVal, newVal) => {
              return oldVal + JSON.parse(newVal.dp_pcart).reduce( function(sum, product){
                    return sum + check_numbers(product.prie);
                  }, 0);
              
          }, 0);
          var deletedTotal = val.reduce((oldVal, newVal) => {
              return oldVal + check_numbers(newVal.dp_price);
          }, 0);
          
          itemList = itemList + '<button data-history="0" data-dpid="'+val[0].dp_id+'" data-pcart="'+val[0].dp_cart+'" data-productname="'+val[0].dp_product_name+'" data-totalprice="'+deletedTotal+'" data-deluser="'+val[0].dp_user+'" data data-driver="' + val[0].duser + '" ' + color + '  data-otype="' + orderType + '" class="' + val[0].method + " " + pMethod + ' btn btn btn-primary hvr-shutter-out-horizontal ITEMButtonHistory ' + val[0].status + ' ' + t + '" id="order' + val[0].orderid + '" data-orderid="' + val[0].orderid + '"><div class="OrderTypeArea">' + t + '</div><div style="float:right;width:89%;"><span style="font-size:21px;"> ' + val[0].method + ' </span><hr>' + CustAdd + ' ' + pMethod + '<hr>Received Time:' + date22[1] + ' | ' + driverName + ' ||' + val.status + '<hr><span style="   font-size: 18px;color: #fff;">' + val[0].orderid + ' | | £' + (deletedTotal + pcartTotal).toFixed(2) + '</span></div></button>';
        });
      }
    });
    $('#ReportArea').html(itemList);
  });

  $('body').on('touchend click', ".ITEMButtonHistory", function (e) {
    e.preventDefault();
    PostCodesTopT = '';
    $('#OrderDetail').show();
    $('.OrderConcept').remove();
    $('.slide-in').removeClass('show');
    var orderid = $(this).attr('data-orderid');
    
    var data = DeleteHistory[orderid];
    $('#OrderDetail').attr('style', 'top: ' + ($('.topbar').position().top + $('.topbar').outerHeight(true) + $('#orderlist').position().top + $('#orderlist').outerHeight(true)) + 'px !important;z-index:1000');
    var counter = $(this).attr('data-counter');
    var history = $(this).attr('data-history');
    var unpaid = $(this).attr('data-unpaid') || 0;
    var DriverName = $(this).attr('data-driver');
    if (DriverName == "null") {
      DriverName = ""
    }
    $('.DriverList').attr('data-cart', orderid).show();
    $('.DeleteHistoryArea').hide();
    $('.DeleteOrder').attr('data-orderid', orderid).show();
    var orderType = orderid.substring(0, 3);
    var phonesHist = "";
    var cEmail = '';
    if (typeof(data[0].customer_email) != "undefined" && data[0].customer_email != "") {
      cEmail = '<br/>Email:<strong>' + data[0].customer_email;
    }
    
    var basketitems = '<div id="timeFrame"></div><h1>Order Ref: ' + orderid + '</h1><div id="basketitems"><table class="OrderDetails" id="bitems"><tr><th width="21">Qty</th><th>Name</th><th width="21">Price</th></tr>';
    var deletedTotal = 0;
    $.each(data, function (key, val) {
      var underitemtext = '';
      var underitems = '';
      var underItemsTotal = 0;
      if (val.dp_pcart != "" && val.dp_pcart != "[]") {
        underitems = JSON.parse(val.dp_pcart);
        if (underitems.length > 0) {
          underitemtext += '<ul>';
          for (var i = 0; i < underitems.length; i++) {
            var underItemPrice = check_numbers(underitems[i].prie);
            var underItemQty = check_numbers(underitems[i].qty);
            underitemtext += "<li>" + underItemQty + " × " + underitems[i].name + " - £" + underItemPrice + "</li>";
            underItemsTotal += underItemQty * underItemPrice;
          }
          underitemtext += '</ul>';
        }
      }
      var itemPriceAll = check_numbers(val.dp_price * val.qty) + underItemsTotal;
      deletedTotal += itemPriceAll;
      basketitems = basketitems + ('<tr><td>' + val.qty + '</td><td><div  class="bitemhead">' + val.dp_product_name + underitemtext + '</div></td><td><div class="bitemPrice">' + check_numbers(itemPriceAll).toFixed(2) + '</div></td></tr>');
    });

    var Loc = "";
    if (data[0].method == "DELIVERY") {
      Loc = 'ADDRESS:<strong>' + data[0].street + '  ' + data[0].street2 + ' ' + data[0].postcode + '<br/>';
    }

    if (typeof(data[0].qrTable) != 'undefined' && data[0].qrTable.set == "1") {
      Loc = '<br><strong>TABLE:</strong>' + data[0].qrTable.tableno.toUpperCase() + '  DINE:' + data[0].qrTable.dine.toUpperCase() + '</strong><br/>';
    }
    if (data[0].postcode != '' && data[0].postcode != 0) {
      PostCodesTopT = data[0].postcode;
    }
    var contactinfo = '<div class="col-md-12 col-sm-12" style="background-color:#fff;font-size:20px;" id="CallerData">' + (data[0].customer_name != 0 ? "NAME:<strong>" + data[0].customer_name + "</strong><br/>" : "") + (data[0].ctel != 0 ? "PHONE:<strong id='CtelC'>" + data[0].ctel + "</strong>" : "") + cEmail + '</strong><br/></strong>' + Loc;
    if (data[0].hourSelect != '0' && data[0].hourSelect != '') {
      contactinfo = contactinfo + '<strong class="HourSelected">Customer Hour Selected:' + data[0].hourSelect + '</strong> ';
    }

    contactinfo = "<hr>" + contactinfo + '<hr> </div>';
    var ticketNumber = (typeof (data[0].sequenceNo) == 'undefined' ? data[0].order : data[0].sequenceNo);
    var caller = '<div style="background-color:#fff;border: 3px solid rgb(0, 0, 0); padding: 3px; font-size: 18pt; font-weight: bold; text-transform: uppercase; width: 100%; height: 40px;" id="DeliveryLabel">' + data[0].method + ' - ' + data[0].sequence_no + ' <div style="float:right;" id="PaymentType">' + data[0].paymentMethod + '</div></div>';

    var BasketTotalArea = deletedTotal;
    var TotalArea = '</div><div class="basketTotalArea"><table class="totalArea"><tbody><tr><td class="totalLabel">Sub Total: </td><td class="totalValue"><div class="TotalValue">' + deletedTotal.toFixed(2) + '</div></td></tr><tr><td class="totalLabel">Total</td><td id="MainTotalFee" class="totalValue">' + check_numbers(BasketTotalArea).toFixed(2) + '</td></tr> </tbody></table>' + caller + '</div>';

    var actionButtons = '<div class="ActionButtons" style="width: 90%;"><h1>HISTORY: ' + data[0].customer_name + '</h1>';
    //actionButtons += '<button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-history="1" data-title="Reprint" data-paymentMethod="' + data.paymentMethod + '" data-method=' + data.method + '  data-delivery="' + check_numbers(data.shipCharge) + '" data-cEmail="' + data.customer_email + '" data-discount="' + data.discount + '" data-array="">Re Print</button></div>';

    var CloseBasketItem = '<div class="CloseBasketItem"><button id="CloseBasketItem" style="font-size: 34px;color:#fff;background-color:#FF6864;"> X </div></div>' + contactinfo;
    $('#OrderDetail').html(CloseBasketItem + basketitems + TotalArea + actionButtons + '<div class="DeleteHistoryArea" style="position: absolute;left: 0px;width: 100%;height: 463px !important;top: 237px;background-color: #fff;display:none;"></div>').css('display', 'block').css('transform', 'translateX(0%)');
    var dtime = (data[0].adddate).split(" ");
    var selectMin = '0';
    if (data[0].selectMin != "" && data[0].selectMin != '0') {
      selectMin = "  Select Min: " + data[0].selectMin + "Min ";
    }

    var odate = "<hr><h4>Date:" + dtime[0] + " ||  Order Time: " + dtime[1] + " || " + selectMin + "<hr>"
    $('#timeFrame').html(odate)
  });


  $('body').on('touchend click', ".ITEMButton", function (e) {
    e.preventDefault();
    PostCodesTopT = '';
    $('#OrderDetail').show();
    $('.OrderConcept').remove();
    $('.slide-in').removeClass('show');
    var orderid = $(this).attr('data-orderid');


    $('#OrderDetail').attr('style', 'top: ' + ($('.topbar').position().top + $('.topbar').outerHeight(true) + $('#orderlist').position().top + $('#orderlist').outerHeight(true)) + 'px !important');

    var counter = $(this).attr('data-counter');
    var history = $(this).attr('data-history');
    var unpaid = $(this).attr('data-unpaid') || 0;
    var DriverName = $(this).attr('data-driver');
    if (DriverName == "null") {
      DriverName = ""
    }
    $('.DriverList').attr('data-cart', orderid).show();
    $('.DeleteHistoryArea').hide();
    $('.DeleteOrder').attr('data-orderid', orderid).show();
    var orderType = orderid.substring(0, 3);
    var phonesHist = "";
    if (history == "1") {
      phonesHist = $(this).attr('data-phone');
    }




    var datast = "orderid=" + orderid + "&history=" + history + "&phone=" + phonesHist;
    $.ajax({
      type: 'POST',
      url: "Orderslog.proweb",
      data: datast,
      beforeSend: function () {
        $('#loading').show();
      },
      complete: function () {
        $("#loading").hide();
      },
      success: function (data) {
        data = jQuery.parseJSON(data);
        
        var basketitems = '<div id="timeFrame"></div><h1>'+ tword('ORDER_REF') +': ' + orderid + '</h1><div id="basketitems"><table class="OrderDetails" id="bitems"><tr><th width="21">'+ tword('QTY') +'</th><th>'+ tword('NAME') +'</th><th width="21">'+ tword('PRICE') +'</th></tr>';
        $.each(data.orders, function (key, val) {
          var underitemtext = '';
          if (val.order_desc != "") {
            var undeer1 = val.order_desc.replace("+", ",");
            undeer1 = undeer1.replace("-,", "");
            var underitems = undeer1.split(",");
            if (underitems.length != 0) {
              underitemtext += '<ul>';
              for (var i = 0; i < underitems.length; i++) {
                underitemtext += "<li>" + underitems[i] + "</li>";
              }
              underitemtext += '</ul>';
            }
          }
          var itemPriceAll = check_numbers(val.item_price * val.qty);

          if (typeof (val.extraPrice) != "undefined") {
            itemPriceAll += check_numbers(val.extraPrice)
          }

          basketitems = basketitems + ('<tr><td>' + val.qty + '</td><td><div  class="bitemhead">' + val.item_name + underitemtext + '</div></td><td><div class="bitemPrice">' + check_numbers(itemPriceAll).toFixed(2) + '</div></td></tr>');
        });
        data = data.total;
        var instruction = tword('CUSTOMER_NOTE')+":" + data.instruction + "";
        var cEmail = '';
        if (data.email != "" && data.email != "0") {
          cEmail = '<br/>'+ tword('EMAIL') +':<strong>' + data.email;
        }
        var DIst = '';
        if (data.DIS != "" && data.DIS != "0") {
          DIst = tword('DISTANCE') +':' + data.DIS + tword('MILES') + '<br/>'
        }
        var Loc = "";
        if (data.method == "DELIVERY") {
          Loc = tword('ADDRESS')+':<strong>' + data.street + '  ' + data.street2 + ' ' + data.postcode + '<br/>';
        }

        if (data.qrTable != null && data.qrTable.set == "1") {
          Loc = '<br><strong>'+ tword('TABLE') +':</strong>' + data.qrTable.tableno.toUpperCase() + '  DINE:' + data.qrTable.dine.toUpperCase() + '</strong><br/>';
        }
        if (data.postcode != '' && data.postcode != 0) {
          PostCodesTopT = data.postcode;
        }
        var contactinfo = '<div class="col-md-12 col-sm-12" style="background-color:#fff;font-size:20px;" id="CallerData">' + (data.cusname != 0 ? "NAME:<strong>" + data.cusname + "</strong><br/>" : "") + (data.phone != 0 ? "PHONE:<strong id='CtelC'>" + data.phone + "</strong>" : "") + cEmail + '</strong><br/></strong>' + Loc + DIst;
        if (data.hourSelect != '0' && data.hourSelect != '') {
          contactinfo = contactinfo + '<strong class="HourSelected">'+ tword('CUSTOMER_HOUR_SELECTED') +':' + data.hourSelect + '</strong> ';
        }
        // else if (data.deltime != '0' && data.deltime != '') {
        //     contactinfo = contactinfo + '<strong class="HourSelected">Order Select Time:' + data.deltime + '</strong>';
        //
        // }

        contactinfo = "<hr>" + contactinfo + instruction + '<hr> </div>';
        var ticketNumber = (typeof (data.sequenceNo) == 'undefined' ? data.order : data.sequenceNo);
        var caller = '<div style="background-color:#fff;border: 3px solid rgb(0, 0, 0); padding: 3px; font-size: 18pt; font-weight: bold; text-transform: uppercase; width: 100%; height: 40px;" id="DeliveryLabel">' + data.method + ' - ' + ticketNumber + ' <div style="float:right;" id="PaymentType">' + data.paymentMethod + '</div></div>';
        var shipcharge22 = '';
        if (data.shipCharge != '' && data.shipCharge != '0' && data.shipCharge != 'NaN' && data.shipCharge != "0.00") {
          shipcharge22 = '<tr><td  class="totalLabel">' + data.method + '</td><td id="DeliveryFee" class="totalValue">' + (check_numbers(data.shipCharge)).toFixed(2) + '</td></tr>';
        }

        var discount22 = '';
        if ((check_numbers(data.discount)).toFixed(2) != '' && (check_numbers(data.discount)).toFixed(2) != 0 && (check_numbers(data.discount)).toFixed(2) != 'NaN' && (check_numbers(data.discount)).toFixed(2) != ' ') {
          discount22 = '<tr><td class="totalLabel">Discount</td><td id="DiscountFee" class="totalValue">' + (check_numbers(data.discount)).toFixed(2) + '</td></tr>';
        }
        var cardfee22 = '';
        if (data.cardFee != '' && data.cardFee > 0 && data.cardFee != 'NaN') {
          cardfee22 = '<tr><td class="totalLabel">' + window.app.CARD_FEE_TEXT + '</td><td class="totalValue" >' + check_numbers(data.cardFee).toFixed(2) + '</td></tr>';
        }
        // var PaidTotal = check_numbers(data.Total);
        // // var PaymentList = ''
        //
        //  var   PaymentList = '<tr><td class="totalLabel">PAID TOTAL</td><td id="MainTotalFee" class="totalValue">' + check_numbers(PaidTotal).toFixed(2) + '</td></tr> <tr><td class="totalLabel">Change</td><td id="MainTotalFee" class="totalValue">' + check_numbers(ChangeAmount).toFixed(2) + '</td></tr>';
        //


        //ASLAN EKLEDI
        var orderType = data.orderid.substring(0, 3);


        var BasketTotalArea = check_numbers(data.Total);

        var DriverTips = '';
   if (window.app.CUSTOMERTYPE != "Barber") { 
        if (data.DriverTips != "" && data.DriverTips != "0" && typeof (data.DriverTips) != "undefined") {
          DriverTips = '<tr><td class="totalLabel">DRIVER TIPS</td><td id="" class="totalValue">' + (check_numbers(data.DriverTips)).toFixed(2) + '</td></tr>';
          DriverTips = '<tr><td class="totalLabel">DRIVER TIPS</td><td id="" class="totalValue">' + (check_numbers(data.DriverTips)).toFixed(2) + '</td></tr>';
        }
   }
        
        var TotalArea = '</div><div class="basketTotalArea"><table class="totalArea"><tbody><tr><td class="totalLabel">'+ tword('SUB_TOTAL') +': </td><td class="totalValue"><div class="TotalValue">' + (check_numbers(data.subTotal)).toFixed(2) + '</div></td></tr>' + shipcharge22 + cardfee22 + DriverTips + discount22 + '<tr><td class="totalLabel">'+ tword('TOTAL') +'</td><td id="MainTotalFee" class="totalValue">' + BasketTotalArea.toFixed(2) + '</td></tr> </tbody></table>' + caller + '</div>';

        var actionButtons = '<div class="ActionButtons" style="width: 60%;"><h1>'+ tword('HISTORY') +': ' + data.cusname + '</h1></div>';
        
           if (window.app.CUSTOMERTYPE == "Barber") { history=1;
           }
        if (history != "1") {  
          actionButtons = '<div class="ActionButtons"><button data-hours="' + data.hourSelect + '" class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction AcceptOrder" data-unpaid="' + unpaid + '" id="' + orderid + '" data-delivery="' + check_numbers(data.shipCharge) + '" data-title="Accepted" data-paymentMethod="' + data.paymentMethod + '" data-otype="' + orderType + '" data-method="' + data.method + '" data-cEmail="' + cEmail + '" data-discount="' + data.discount + '">'+ tword('ACCEPT')+'</button><button class="Refund btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-cEmail="' + cEmail + '" data-title="Rejected">'+ tword('REJECT') +'</button><button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Reprint" data-paymentMethod="' + data.paymentMethod + '" data-method=' + data.method + '  data-delivery="' + check_numbers(data.shipCharge) + '" data-cEmail="' + cEmail + '" data-discount="' + data.discount + '" data-array="">'+ tword('RE_PRINT') +'</button><button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Block" data-email="'+data.email+'" data-phone="'+data.phone+'" data-method="' + data.method + '" data-IP="--" >'+ tword('BLOCK') +'</button><button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Ready" data-method="' + data.method + '" data-IP="--" >'+ tword('READY') +'</button>';

          if (window.app.PAIDBUTTON == "Yes") {
            actionButtons = actionButtons + ' <button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Paid" >'+ tword('PAID') +'</button>'
          }

          if (orderType != 'WEB') {
            actionButtons = actionButtons + '<button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Edit" data-method="' + data.method + '" >'+ tword('EDIT') +'</button>';
          }
          if (orderType == 'WEB' && data.paymentMethod != "REFUND" && window.app.ACTIVEREFUND == "Yes" && data.paymentTur == "OPTOMANY") {
            actionButtons = actionButtons + '<button class="Refund btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Refund">'+ tword('REFUND') +'</button>';
          }
          if (data.method == "COLLECTION") {
            actionButtons = actionButtons + '<button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="PrintTicketNumber" data-ticketno="' + data.order + '">'+ tword('PRINT') +'<br/>'+ tword('TICKET') +'</button>';
          }
          actionButtons = actionButtons + '<button style="background-color:#d11141 !important;border-radius: 5px;height: 65px;margin-left: 2px;margin-right: 1px;width: 229px;margin-top: 10px;font-size: 20px;display:block;float:right;" class="btn btn-primary hvr-shutter-out-horizontal orderslist DeleteOrder" type="button" data-orderid="' + orderid + '" style="display: inline-block;"><i class="glyphicon glyphicon-remove"></i>'+ tword('REMOVE_ORDER') +'</button></div>';
        } else {
          actionButtons += '<div class="ActionButtons"><button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-history="1" data-title="Reprint" data-paymentMethod="' + data.paymentMethod + '" data-method=' + data.method + '  data-delivery="' + check_numbers(data.shipCharge) + '" data-cEmail="' + cEmail + '" data-discount="' + data.discount + '" data-array="">'+ tword('RE_PRINT') +'</button></div>';
        }

        // var actionButtons = '<div class="ActionButtons"><button data-hours="'+hourSelect+'" class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" data-unpaid="' + unpaid + '" id="' + orderid + '" data-delivery="' + check_numbers(shipcharge) + '" data-title="Accepted" data-paymentMethod="' + paymentMethod + '" data-otype="' + orderType + '" data-method="' + shiptype + '" data-cEmail="' + cEmail + '" data-discount="' + discount + '">Accept</button><button class="Refund btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-cEmail="' + cEmail + '" data-title="Rejected">Reject</button><button class="Ready btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Ready" data-cEmail="' + cEmail + '">Ready</button><button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Paid" >Paid</button><button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Reprint" data-paymentMethod="' + paymentMethod + '" data-method=' + shiptype + '  data-delivery="' + check_numbers(shipcharge) + '" data-cEmail="' + cEmail + '" data-discount="' + discount + '" data-array="">Re Print</button><button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Block" data-method="' + shiptype + '" data-IP="' + IP + '" >Block</button> <button class="Refund btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Refund" " >Refund</button>'+DelBut+'</div>';
        //<button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="'+orderid+'" data-title="Edit" data-method="'+shiptype+'" >Edit</button>
        var DriverPage="";
            if (window.app.CUSTOMERTYPE != "Barber") { 
          DriverPage='<button data-totalbill="' + check_numbers(data.Total).toFixed(2) + '" data-paymentmethod="' + data.paymentMethod + '" data-cart="' + orderid + '" style="font-size:18px;top: 9px;position: absolute;left: 86px;width: 287px;display: inline-block;" class="btn btn-primary hvr-shutter-out-horizontal orderslist DriverList" type="button"><i class="glyphicon glyphicon-road"></i> '+ tword('SELECT_DRIVER') +' ' + (data.dname != '0' && data.dname != '' ? '-' + data.dname : '') + '</button>';
            }
          
        var CloseBasketItem = '<div class="CloseBasketItem"><button id="CloseBasketItem" style="font-size: 34px;color:#fff;background-color:#FF6864;"> X </div></div>'+DriverPage + contactinfo;
        $('#OrderDetail').html(CloseBasketItem + basketitems + TotalArea + actionButtons + '<div class="DeleteHistoryArea" style="position: absolute;left: 0px;width: 100%;height: 463px !important;top: 237px;background-color: #fff;display:none;"></div>').css('display', 'block').css('transform', 'translateX(0%)');
        var dtime = (data.adddate).split(" ");
        var selectMin = '0';
        if (data.selectMin != "" && data.selectMin != '0') {
          selectMin = tword('SELECT_MIN')+": " + data.selectMin + tword('MIN');
        }

        var odate = "<hr><h4>"+ tword('DATE') +":" + dtime[0] + " ||  "+ tword('ORDER_TIME') +": " + dtime[1] + " || " + selectMin + "<hr>"
        $('#timeFrame').html(odate)
      }
    });
  });
  $('body').on('touchend click', ".ITEMButtonUnpaid", function (e) {
    e.preventDefault();
    PostCodesTopT = '';
    $('#OrderDetail').show();
    $('.OrderConcept').remove();
    $('.slide-in').removeClass('show');
    var orderid = $(this).attr('data-orderid');
    var datast = "orderid=" + orderid;
    var counter = $(this).attr('data-counter');
    var unpaid = $(this).attr('data-unpaid') || 0;
    var DriverName = $(this).attr('data-driver');
     var desciptest = $(this).attr('data-desc');
    if (DriverName == "null") {
      DriverName = ""
    }
    
    if(desciptest != ''){
      var  desciptestsd=  desciptest.split(",");
      desciptest='';
       for (var i = 0; i < desciptestsd.length; i++) {
           desciptest += "<h1 class='HourSelected'>"+(i+1)+" ) "+desciptestsd[i]+"</h1>";
        }
    }else{
        desciptest = "<h1 class='HourSelected'>1 ) The Customer Did Not Try To Pay yet</h1>";
    }
    
    $('.DriverList').attr('data-cart', orderid).show();
    $('.DeleteHistoryArea').hide();
    $('.DeleteOrder').attr('data-orderid', orderid).show();
    var orderType = orderid.substring(0, 3);
    $.ajax({
      type: 'POST',
      url: "OrdersUnpaidLog.proweb",
      data: datast,
      beforeSend: function () {
        $('#loading').show();
      },
      complete: function () {
        $("#loading").hide();
      },
      success: function (data) {
        data = jQuery.parseJSON(data);
        var basketitems = '<div id="timeFrame"></div><h1>'+ tword('ORDER_REF') +': ' + orderid + '</h1>'+desciptest+'<div id="basketitems"><table class="OrderDetails" id="bitems"><tr><th width="21">'+ tword('QTY') +'</th><th>'+ tword('NAME') +'</th><th width="21">'+ tword('PRICE') +'</th></tr>';
        $.each(data.orders, function (key, val) {
          var underitemtext = '';
          if (val.order_desc != "") {
            var undeer1 = val.order_desc.replace("+", ",");
            undeer1 = undeer1.replace("-,", "");
            var underitems = undeer1.split(",");
            if (underitems.length != 0) {
              underitemtext += '<ul>';
              for (var i = 0; i < underitems.length; i++) {
                underitemtext += "<li>" + underitems[i] + "</li>";
              }
              underitemtext += '</ul>';
            }
          }
          basketitems = basketitems + ('<tr><td>' + val.qty + '</td><td><div  class="bitemhead">' + val.item_name + underitemtext + '</div></td><td><div class="bitemPrice">' + check_numbers((val.item_price * val.qty)).toFixed(2) + '</div></td></tr>');
        });
        data = data.total;
        var cEmail = '';
        if (data.email != "" && data.email != "0") {
          cEmail = '<br/>'+ tword('EMAIL') +':<strong>' + data.email;
        }
        var DIst = '';
        if (data.DIS != "" && data.DIS != "0") {
          DIst = tword('DISTANCE')+':' + data.DIS + tword('MILES') + '<br/>'
        }
        var Loc = "";
        if (data.method == "DELIVERY") {
          Loc = tword('ADDRESS')+':<strong>' + data.street + '  ' + data.street2 + ' ' + data.postcode + '<br/>';
        }
        if (data.postcode != '' && data.postcode != 0) {
          PostCodesTopT = data.postcode;
        }
        var contactinfo = '<div class="col-md-12 col-sm-12" style="background-color:#fff;" id="CallerData">' + (data.cusname != 0 ? "NAME:<strong>" + data.cusname + "</strong><br/>" : "") + (data.phone != 0 ? "PHONE:<strong id='CtelC'>" + data.phone + "</strong>" : "") + cEmail + '</strong><br/></strong>' + Loc + DIst;
        if (data.hourSelect != '0' && data.hourSelect != '') {
          contactinfo = contactinfo + '<strong class="HourSelected">Customer Hour Selected:' + data.hourSelect + '</strong>';
        }
        // else if (data.deltime != '0' && data.deltime != '') {
        //     contactinfo = contactinfo + '<strong class="HourSelected">Order Select Time:' + data.deltime + '</strong>';
        //
        // }

        contactinfo = contactinfo + ' </div>';
        var caller = '<div style="background-color:#fff;border: 3px solid rgb(0, 0, 0); padding: 3px; font-size: 18pt; font-weight: bold; text-transform: uppercase; width: 100%; height: 40px;" id="DeliveryLabel">' + data.method + ' - ' + data.order + ' <div style="float:right;" id="PaymentType">' + data.paymentMethod + '</div></div>' + contactinfo;
        var shipcharge22 = '';
        if (data.shipCharge != '' && data.shipCharge != '0' && data.shipCharge != 'NaN' && data.shipCharge != "0.00") {
          shipcharge22 = '<tr><td  class="totalLabel">' + data.method + '</td><td id="DeliveryFee" class="totalValue">' + (check_numbers(data.shipCharge)).toFixed(2) + '</td></tr>';
        }
        var discount22 = '';
        if ((check_numbers(data.discount)).toFixed(2) != '' && (check_numbers(data.discount)).toFixed(2) != 0 && (check_numbers(data.discount)).toFixed(2) != 'NaN' && (check_numbers(data.discount)).toFixed(2) != ' ') {
          discount22 = '<tr><td class="totalLabel">'+ tword('DISCOUNT') +'</td><td id="DiscountFee" class="totalValue">' + (check_numbers(data.discount)).toFixed(2) + '</td></tr>';
        }
        var cardfee22 = '';
        if (data.cardFee != '' && data.cardFee > 0 && data.cardFee != 'NaN') {
          cardfee22 = '<tr><td class="totalLabel">' + window.app.CARD_FEE_TEXT + '</td><td class="totalValue" >' + check_numbers(data.cardFee).toFixed(2) + '</td></tr>';
        }
        var DriverTips = '';

        if (data.DriverTips != "" && data.DriverTips != "0" && typeof (data.DriverTips) != "undefined") {
          DriverTips = '<tr><td class="totalLabel">'+ tword('DRIVER_TIPS') +'</td><td id="" class="totalValue">' + (check_numbers(data.DriverTips)).toFixed(2) + '</td></tr>';
        }
        // var PaidTotal = check_numbers(data.Total);
        // // var PaymentList = ''
        //
        //  var   PaymentList = '<tr><td class="totalLabel">PAID TOTAL</td><td id="MainTotalFee" class="totalValue">' + check_numbers(PaidTotal).toFixed(2) + '</td></tr> <tr><td class="totalLabel">Change</td><td id="MainTotalFee" class="totalValue">' + check_numbers(ChangeAmount).toFixed(2) + '</td></tr>';
        //
        var TotalArea = '</div><div class="basketTotalArea"><table class="totalArea"><tbody><tr><td class="totalLabel">'+ tword('SUB_TOTAL') +': </td><td class="totalValue"><div class="TotalValue">' + (check_numbers(data.subTotal)).toFixed(2) + '</div></td></tr>' + shipcharge22 + discount22 + cardfee22 + '<tr><td class="totalLabel">'+ tword('TOTAL') +'</td><td id="MainTotalFee" class="totalValue">' + check_numbers(data.Total).toFixed(2) + '</td></tr> </tbody></table>' + caller + '</div>';
        var actionButtons = '<div class="ActionButtons"><button data-hours="' + data.hourSelect + '" class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction AcceptOrder" data-unpaid="' + unpaid + '" id="' + orderid + '" data-delivery="' + check_numbers(data.shipCharge) + '" data-title="Accepted" data-paymentMethod="' + data.paymentMethod + '" data-otype="' + orderType + '" data-method="' + data.method + '" data-cEmail="' + cEmail + '" data-discount="' + data.discount + '">Accept</button></div>';
        // var actionButtons = '<div class="ActionButtons"><button data-hours="'+hourSelect+'" class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" data-unpaid="' + unpaid + '" id="' + orderid + '" data-delivery="' + check_numbers(shipcharge) + '" data-title="Accepted" data-paymentMethod="' + paymentMethod + '" data-otype="' + orderType + '" data-method="' + shiptype + '" data-cEmail="' + cEmail + '" data-discount="' + discount + '">Accept</button><button class="Refund btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-cEmail="' + cEmail + '" data-title="Rejected">Reject</button><button class="Ready btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Ready" data-cEmail="' + cEmail + '">Ready</button><button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Paid" >Paid</button><button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Reprint" data-paymentMethod="' + paymentMethod + '" data-method=' + shiptype + '  data-delivery="' + check_numbers(shipcharge) + '" data-cEmail="' + cEmail + '" data-discount="' + discount + '" data-array="">Re Print</button><button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Block" data-method="' + shiptype + '" data-IP="' + IP + '" >Block</button> <button class="Refund btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="' + orderid + '" data-title="Refund" " >Refund</button>'+DelBut+'</div>';
        //<button class="btn btn btn-primary hvr-shutter-out-horizontal OrderAction" id="'+orderid+'" data-title="Edit" data-method="'+shiptype+'" >Edit</button>
        var CloseBasketItem = '<div class="CloseBasketItem"><button id="CloseBasketItem" style="font-size: 34px;color:#fff;background-color:#FF6864;"> X </div></div><button data-totalbill="' + check_numbers(data.Total).toFixed(2) + '" data-paymentmethod="' + data.paymentMethod + '" data-cart="' + orderid + '" style="font-size:18px;top: 9px;position: absolute;left: 86px;width: 287px;display: inline-block;" class="btn btn-primary hvr-shutter-out-horizontal orderslist DriverList" type="button"><i class="glyphicon glyphicon-road"></i> Select Driver' + (data.dname != '0' && data.dname != '' ? '-' + data.dname : '') + '</button>';
        $('#OrderDetail').html(CloseBasketItem + basketitems + TotalArea + actionButtons + '<div class="DeleteHistoryArea" style="position: absolute;left: 0px;width: 100%;height: 463px !important;top: 237px;background-color: #fff;display:none;"></div>').css('display', 'block').css('transform', 'translateX(0%)');
        var dtime = (data.adddate).split(" ");
        var selectMin = '0';
        if (data.selectMin != "" && data.selectMin != '0') {
          selectMin = "<h4> "+ tword('SELECT_MIN') +": " + data.selectMin + tword('MIN') +"</h4>";
        }


        var odate = "<hr><h4>"+ tword("DATE") +":" + dtime[0] + "</h4><h4> "+ tword('ORDER_TIME') +": " + dtime[1] + "</h4>" + selectMin + "<hr>"
        $('#timeFrame').html(odate)
      }
    });
  });
  $('body').on('touchend click', "#CloseBasketItem", function (e) {
    e.preventDefault();
    $('#OrderDetail').html('').hide();
  });

  function REFUNDORDER(id) {
    var urladd = "RefundLog.proweb";
    var dataroll = '&orderid=' + id;
    var data = jQuery.parseJSON(AjaxCall(urladd, dataroll));
    if (data == "" || data == null) {
      swal(tword('NO_DATA'), tword('NO_DATA_TEXT') + id, "warning");
      //$('#online').click();
    } else {
      var total = data.total.Total;

      total = check_numbers(total).toFixed(2);
      swal({
        title: tword("REFUND_ORDER") + ": " + id,
        text: tword('REFUND_ORDER_TEXT') + total,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: tword('PROCESS_REFUND'),
        closeOnConfirm: false
      }, function () {
        $('#loading').show();
        var dstring = "&orderId=" + id + "&ProTWcd=R12";
        $.ajax({
          type: 'POST',
          url: "RefundCheck.proweb",
          data: dstring,
          async: false,
          success: function (data) {
            $('#loading').hide();
            swal({
              title: "REFUND RESULT",
              html: true,
              text: data,
              type: "info"
            });
          }
        });
      });
    }
  }
  $('body').on('click', ".sweet-alert input", function (e) {
    $(".ui-keyboard").css({
      top: $('.sweet-alert').position().top + $('.sweet-alert').outerHeight(true) + 'px'
    });
    $(this).keyboard({
      layout: 'custom',
      customLayout: {
        'normal': [
          '1 2 3',
          '4 5 6',
          '7 8 9 0',
          '{clear} {bksp} {a} .'
        ]
      },
      maxLength: 18,
      // Prevent keys not in the displayed keyboard from being typed in
      restrictInput: true,
      // include lower case characters (added v1.25.7)
      restrictInclude: 'a b c d e f',
      // don't use combos or A+E could become a ligature
      useCombos: false
    });
  });
  $('body').on('click', ".OrderAction", function (e) {
    e.preventDefault();
    var orderid = $(this).attr('id');
    var status = $(this).attr('data-title');
    var hour = $(this).attr('data-hours') || 0;
    var method = $(this).attr('data-method');
    var paymentMethod = $.trim($(this).attr('data-paymentMethod')) || $.trim($('#PaymentType').html());
    var cEmail = $(this).attr("data-cemail");
    var delivery = $(this).attr("data-delivery");
    var discount = $(this).attr("data-discount");
    var iplog = '';
    if (typeof ($(this).attr("data-IP")) != "undefined") {
      iplog = "&IP=" + $(this).attr("data-IP")
    }
    if (paymentMethod == "CARD") {
      paymentMethod = "PAID"
    }
    var orderType = orderid.substring(0, 3);
    var datarol = "orderid=" + orderid + "&status=" + status + "&total=" + $('.MainTotalFee').html() + iplog;
    var unpaid = $(this).attr("data-unpaid") || 0;
    // if (unpaid == 1) {
    //     $.ajax({
    //         type: 'POST',
    //         url: "code/markPaid.php",
    //         data: datarol,
    //         async: false,
    //         success: function (data) {
    //         }
    //     });
    // }
    if (status === 'Reprint') {
      var counter = $('#order' + orderid).attr('data-counter');
      var history = $(this).attr("data-history");
      var paid = $('#MainTotalFee').html();
      var deltime = '';
      var change = 0;
      var callerData = '';
      if (window.app.CallerId == 'Yes') {
        callerData = $('#CallerData').html();
      }
      var val = 0;
      var otime = 30;
      var str = orderid.substring(0, 3);

      return new Promise(function (resolve, reject) {
        //resolve(WEBORDERPRINTONLINE(orderid, status, cEmail, paid, change, callerData, otime, method, deltime, counter, TempArray, delivery, discount, history));
        resolve(WEBORDERPRINTONLINE(orderid, status, cEmail, paid, change, callerData, otime, method, deltime, counter, delivery, discount, history));
      }).then(function () {
        TempArray = [];
        localSet("DELCHARGE", 0)
        return 'end';
      })
    } else if (status == "Edit") {

      $.cookie('EDITORDER', 1);
      $.cookie('EDITORDERID', orderid);
      var DeleteHistory = [];
      var DeleteBasket = [];
      var DeleteItem = [];
      GetCallDataCart(orderid);
      localSet('PHONE', $('#CtelC').html());

      localSet('CALLER', 1)
      Timmer(0);
      BasketItems = TempArray
      UpdateBasket(BasketItems);
      $('#phone').click();
      $('#TakeawayPro').click();
    } else if (status == "Paid") {
      var btn = "";
      var arrpay = (window.app.PHONEPAYOPTION).split(',');
      $.each(arrpay, function (key, vals) {
        btn += "<button type='button' data-orderid='" + orderid + "' id='PayChangeOptsSwal" + vals + "'  data-id='" + vals + "' class='PayChangeOptsSwal"+orderid+"'>" + vals + "</button>";
        btn += "<button type='button' data-orderid='" + orderid + "' id='PayChangeOptsSwal" + vals + "_RECEIVED'  data-id='" + vals + "_RECEIVED' class='PayChangeOptsSwal"+orderid+"'>" + vals + "_RECEIVED</button>"
      });

      swal({
        title: tword('PAYMENT_METHOD'),
        text: btn,
        html: true,
        showConfirmButton: false
      },function(result){
          
           $('body').on('touchend click', ".PayChangeOptsSwal"+orderid, function (e) {
                              var datarol = "orderid=" + orderid + "&status="+ $(this).attr('data-id');+"&total=" + $('.MainTotalFee').html() + iplog;
      $.ajax({
        type: 'POST',
        url: "code/markPaid.php",
        data: datarol,
        async: false,
        success: function (data) {
          $('#Log').click();
          if (window.app.NETPRINTER == 'Yes') {
            NosalePrintNetWork()
          }
        }
      });
               
 });
          

      });
      
      // swal({
      //         title: "PAYMENT METHOD",
      //         text: "Please Select the Payment Method",
      //         type: "warning",
      //         showCancelButton: true,
      //         confirmButtonClass: "btn-danger",
      //         confirmButtonText: "CARD PAYMENT",
      //         cancelButtonText: "CASH PAYMENT",
      //         closeOnConfirm: true,
      //         closeOnCancel: true
      //     },
      //     function (isConfirm) {
      //         if (isConfirm) {
 
      //         } else {
      //             var datarol = "orderid=" + orderid + "&status=CASH&total=" + $('.MainTotalFee').html() + iplog;
      //             $.ajax({
      //                 type: 'POST',
      //                 url: "code/markPaid.php",
      //                 data: datarol,
      //                 async: false,
      //                 success: function (data) {
      //                     $('#Log').click();
      //                     if (window.app.NETPRINTER == 'Yes') {
      //                         NosalePrintNetWork()
      //                     }
      //                 }
      //             });
      //         }
      //     });
      
      
    } else if (status === "Accepted") {
      var deliveryConcept = '';
      if (hour == 0) {
        if (window.app.setupTime != "") {
          var timeCon = window.app.setupTime;
          timeCon = timeCon.split(",");
          $.each(timeCon, function (key, val) {
            deliveryConcept = deliveryConcept + '<button data-unpaid="' + unpaid + '"  data-cEmail="' + cEmail + '" data-pmethod="' + paymentMethod + '"  class="btn setupTimeConcept" id="' + orderid + '" data-title="' + status + '" data-method="' + method + '" data-otype="' + orderType + '" data-otime="' + val + '" data-delivery="' + delivery + '" data-discount="' + discount + '"> ' + val + tword('MINS') +'</button>';
          });
        } else {
          deliveryConcept = '<button data-unpaid="' + unpaid + '"  data-cEmail="' + cEmail + '" data-pmethod="' + paymentMethod + '"  class="btn setupTimeConcept" id="' + orderid + '" data-title="' + status + '" data-method="' + method + '" data-otype="' + orderType + '" data-otime="10" data-delivery="' + delivery + '" data-discount="' + discount + '">10 '+ tword('MINS') +'</button>';
          deliveryConcept = deliveryConcept + '<button data-unpaid="' + unpaid + '" data-cEmail="' + cEmail + '" data-pmethod="' + paymentMethod + '"  class="btn setupTimeConcept" id="' + orderid + '" data-title="' + status + '" data-method="' + method + '" data-otype="' + orderType + '" data-otime="15" data-delivery="' + delivery + '" data-discount="' + discount + '">15 '+ tword('MINS') +'</button>';
          deliveryConcept = deliveryConcept + '<button data-unpaid="' + unpaid + '" data-cEmail="' + cEmail + '" data-pmethod="' + paymentMethod + '"  class="btn setupTimeConcept" id="' + orderid + '" data-title="' + status + '" data-method="' + method + '" data-otype="' + orderType + '" data-otime="30" data-delivery="' + delivery + '" data-discount="' + discount + '">30 '+ tword('MINS') +'</button>';
          deliveryConcept = deliveryConcept + '<button data-unpaid="' + unpaid + '" data-cEmail="' + cEmail + '"data-pmethod="' + paymentMethod + '"  class="btn setupTimeConcept" id="' + orderid + '" data-title="' + status + '" data-method="' + method + '" data-otype="' + orderType + '" data-otime="45" data-delivery="' + delivery + '" data-discount="' + discount + '">45 '+ tword('MINS') +'</button>';
          deliveryConcept = deliveryConcept + '<button data-unpaid="' + unpaid + '" data-cEmail="' + cEmail + '"data-pmethod="' + paymentMethod + '"  class="btn setupTimeConcept" id="' + orderid + '" data-title="' + status + '" data-method="' + method + '" data-otype="' + orderType + '" data-otime="50" data-delivery="' + delivery + '" data-discount="' + discount + '">50 '+ tword('MINS') +'</button>';
          deliveryConcept = deliveryConcept + '<button data-unpaid="' + unpaid + '" data-cEmail="' + cEmail + '"data-pmethod="' + paymentMethod + '"  class="btn setupTimeConcept" id="' + orderid + '" data-title="' + status + '" data-method="' + method + '" data-otype="' + orderType + '" data-otime="60" data-delivery="' + delivery + '" data-discount="' + discount + '">60 '+ tword('MINS') +'</button>';
          deliveryConcept = deliveryConcept + '<button data-unpaid="' + unpaid + '" data-cEmail="' + cEmail + '" data-pmethod="' + paymentMethod + '"  class="btn setupTimeConcept" id="' + orderid + '" data-title="' + status + '" data-method="' + method + '" data-otype="' + orderType + '" data-otime="75" data-delivery="' + delivery + '" data-discount="' + discount + '">75 '+ tword('MINS') +'</button>';
          deliveryConcept = deliveryConcept + '<button data-unpaid="' + unpaid + '" data-cEmail="' + cEmail + '" data-pmethod="' + paymentMethod + '"  class="btn setupTimeConcept" id="' + orderid + '" data-title="' + status + '" data-method="' + method + '" data-otype="' + orderType + '" data-otime="90" data-delivery="' + delivery + '" data-discount="' + discount + '">90 '+ tword('MINS') +'</button>';
        }
      } else {
        var minutes = 0;
        if (window.app.TIMESELLECT != "Yes") {
          var dt = new Date();
          var time = dt.getHours() + ':' + dt.getMinutes();
          var diff = Math.abs(new Date("1970-1-1 " + hour) - new Date("1970-1-1 " + time));
          var seconds = Math.floor(diff / 1000); //ignore any left over units smaller than a second
          minutes = Math.floor(seconds / 60);
        }
        deliveryConcept = '<button data-unpaid="' + unpaid + '" data-cEmail="' + cEmail + '" data-pmethod="' + paymentMethod + '"  class="btn setupTimeConcept" id="' + orderid + '" data-title="' + status + '" data-method="' + method + '" data-otype="' + orderType + '" data-otime="' + minutes + '" data-delivery="' + delivery + '" data-discount="' + discount + '">' + hour + '</button>';
      }
      $('.OrderConcept').html("");
      var term = '<div class="OrderConcept">' + deliveryConcept + '</div>';
      $('#OrderDetail').append(term);
    } else if (status == 'Refund') {
      if (window.app.ACTIVEREFUND == 'Yes') {
        REFUNDORDER(orderid);
      } else {
        watSwal(1, tword('NOT_OPEN_REFUND'), tword('PLEASE_CONTACT_TECH'), 2000)
      }
    } else if (status == 'Rejected') {
      var datarol = "orderid=" + orderid + "&status=" + status + "&time=0";
      $.ajax({
        type: 'POST',
        url: "UpdateOrders.proweb",
        data: datarol,
        async: false,
        success: function (data) {
          watSwal(3, 'Order Update', 'Order Rejected', 2000)
          SendEmailC("", orderid);
          $('#OrderDetail').html('').hide();
          $('#Log').click();
        }
      });
    } else if (status == 'Block') {
      const phonelog = $(this).attr("data-phone");
      const emaillog = $(this).attr("data-email");
      if (iplog != '') {
        var blockedIp = AjaxCall('code/blockIp.php', iplog + '&orderid=' + orderid+'&phone='+phonelog+'&email='+emaillog);
        watSwal(1, tword('ERROR'), blockedIp, 2000)
      } else {
        watSwal(1, tword('ERROR'), tword('IP_NOT_FOUND'), 2000)
      }
    } else if (status == 'PrintTicketNumber') {
      let ticketNo = $(this).data('ticketno');
      printTicketNumber(ticketNo);
    }
    // LogGetAll();
  });

  function watSwal(type, title, html, time) {
    if (type == 1) {
      type = "warning";
    } else if (type == 2) {
      type = "error";
    } else if (type == 3) {
      type = "success";
    } else if (type == 4) {
      type = "info";
    } else {
      type = "info";
    }
    swal({
      type: type,
      title: title,
      text: html,
      timer: time
    });
  }
  $('body').on('touchend click', ".setupTimeConcept", function (e) {
    e.preventDefault();
    LogGetAll();
    var orderid = $(this).attr('id');
    var status = $(this).attr('data-title');
    var cemail = $(this).attr("data-cemail");
    var otime = $(this).attr("data-otime");
    var method = $(this).attr("data-method");
    var unpaids = $(this).attr("data-unpaid");
    var counter = $('#order' + orderid).attr('data-counter');
    var paid = $('#MainTotalFee').html();
    var delivery = $(this).attr("data-delivery");
    var discount = $(this).attr("data-discount");
    var pmethod = $(this).attr("data-pmethod");
    var deltime = '';
    var datarol = "orderid=" + orderid + "&status=" + status + "&time=" + otime;
    var urld = 'UpdateOrders.proweb'
    if (unpaids == 1) {
      urld = 'UpdateOrdersUnpaids.proweb'
    }
    $.ajax({
      type: 'POST',
      url: urld,
      data: datarol,
      async: false,
      success: function (data) {
        $('#' + orderid).removeClass('Accepted');
        $('#' + orderid).removeClass('Pending');
        $('#' + orderid).removeClass('Rejected');
        $('#' + orderid).removeClass('Ready');
        $('#' + orderid).addClass(status);
        $('#itemStatus' + orderid).html(status)
        SendEmailC("", orderid);
        var d = new Date();
        deltime = data;
        $('#timeFrame').html('<div style="border:1px solid #000;border-radius:10px;"><div style="padding:10px;">Date:' + d.toUTCString() + '<br/>'+ tword('ORDER_FRAME') +': ' + data + tword('MINS') +' </div>')
      }
    });
    var change = 0;
    var callerData;
    if (window.app.CallerId == 'Yes') {
      callerData = $('#CallerData').html();
    }
    var val = 0;
    return new Promise(function (resolve, reject) {
      resolve(WEBORDERPRINTONLINE(orderid, status, cemail, paid, change, callerData, otime, method, deltime, counter, delivery, discount));
    }).then(function () {
      TempArray = [];

      localSet("DELCHARGE", 0)
      $('#Log').click();
      return 'end';
    });
  });
  $('#OrderLogPage').on('touchend click', ".OrderAction2", function (e) {
    e.preventDefault();
    var orderid = $(this).attr('id');
    var status = $(this).attr('data-title');
    var method = $(this).attr('data-method');

    localSet("METHOD", method);
    var datarol = "orderid=" + orderid + "&status=" + status;
    if (status != "Edit") {
      $.ajax({
        type: 'POST',
        url: "UpdateOrders.proweb",
        data: datarol,
        async: false,
        success: function (data) {
          $('#' + orderid).removeClass('Accepted');
          $('#' + orderid).removeClass('Pending');
          $('#' + orderid).removeClass('Rejected');
          $('#' + orderid).removeClass('Ready');
          $('#' + orderid).addClass(status);
          $('#itemStatus' + orderid).html(status)
          SendEmailC("", orderid);
          if (status === "Accepted") {
            var shopdetails = '<div style="width:100%; margin-bottom:10px;font-size:15pt;">' + window.app.SHOPTITLE + '<br/>' + window.app.SHOPADDRESS + window.app.SHOPTEL + '<hr/></div>';
            var OrderDetail = $('#OrderDetail').html();
            let styles = 'body{font-family:arial;}#bitems { width:100mm;}#bitems tr td{ border-bottom:1px solid #000;}.totalArea { width:100mm;}.totalArea td {padding: 2px !important;}.totalArea td {border-bottom: 1px solid #22262e;}.totalArea .totalLabel { float: right; width: 100px;}.totalArea .totalValue { float: right;    padding-right: 10px;   text-align: right;    width: 150px;} ul{ width:70%;}.bitemhead{ font-size:14.5pt;text-transform:uppercase; font-weight:bold;}.bitemhead ul li {font-size:14pt;text-transform: capitalize;}.bitemPrice, .totalArea {font-weight:bold; font-size:15pt; width:100%;}.btn { display:none !important;}.basketTotalArea { font-size:16pt;}';
            print_iframe_get(shopdetails + OrderDetail, styles, 0);
            return true;
          }
        }
      });
      $('#Log').click();
    } else {
      $.ajax({
        type: 'POST',
        url: "EditOrder.proweb",
        data: datarol,
        async: false,
        success: function (data) {

          localSet('PHONE', $('#CtelC').html());
          Timmer(0);
          GetCallDataCart(orderid);
          $('#phone').click();
          UpdateBasket();
        }
      });
    }
  });
  $('#Admin').on('touchend click', ".SelectCustomerMain", function (e) {
    e.preventDefault();

    Timmer(0);
    var cart = $(this).attr('data-cart');
    localSet('PHONE', $(this).attr('data-tel'));
    GetCallDataBYID($(this).attr('id'), cart);
    $('#SelectCustomer').attr("data-tel", $(this).attr('data-tel'));
    $('#phone').click();
    $('#Admin').hide();
  });
  $('#mainBoxContainer').on('touchend click', ".SelectCustomer", function (e) {
    e.preventDefault();
    $('.AdminOrderlist').hide();
    $('#online').click();
    var phone = $(this).attr('data-tel');
    var dataStrubg = "phone=" + phone;
    $.ajax({
      type: 'POST',
      url: "CustomerAdressGet.proweb",
      data: dataStrubg,
      async: false,
      success: function (data) {
        $('#ReportArea').html(data);
      }
    });
  });
  $('#Admin').on('touchend click', ".DeleteCustomer", function (e) {
    e.preventDefault();
    var postcode = $(this).attr('data-postcode');
    var street = $(this).attr('data-street');
    var tel = $(this).attr('data-tel');
    var dataStrubg = "tel=" + tel + "&street=" + street + "&postcode=" + postcode;
    $.ajax({
      type: 'POST',
      url: "CustomerDelete.proweb",
      data: dataStrubg,
      async: false,
      success: function (data) {
        var dataStrubg = "phone=" + tel;
        $.ajax({
          type: 'POST',
          async: false,
          url: "CustomerAdressGet.proweb",
          data: dataStrubg,
          success: function (data) {
            $('#ReportArea').html(data);
          }
        });
      }
    });
  });
  $('body').on('touchend click', "#FullScreenMode", function (e) {
    e.preventDefault();
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) { //in fullscreen, so exit it
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } else { //not fullscreen, so enter it
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    }
  });
  $('body').on('touchend click', "#Logout", function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "Logout.proweb",
      data: "",
      async: false,
      success: function (data) {
        location.reload();
      }
    });
  });
  $('#Admin').on('touchend click', "#CustomerDB", function (e) {
    e.preventDefault();
    $('#loading').show();
    
              let formdata = '<style> .dataTables_wrapper {background:white;padding:10px;} </style>  <table class="tablesorter" width="100%" cellpadding="0" cellspacing="0" id="gradient-style"><thead><tr><th width="50"> id</th><th width="111" align="left" class="header">'+ tword('FULL_NAME') +' <br/></th><th width="137" align="left" class="header">'+ tword('ADDRESS') +'</th><th width="126" align="left" class="header">'+ tword('POST_CODE') +'</th><th width="134" align="left" class="header">'+ tword('TEL') +'</th><th width="134" align="left" class="header">'+ tword('EMAIL') +'</th><th width="67" style="width: 52px" class="header">'+ tword('ACTIONS') +'</th></tr></thead>';
              formdata += '</table>';
              $('#ReportArea').html(formdata);
              
    $('#gradient-style').DataTable({
        "sFilterInput": "SearchBox",
        "processing": true,
        "ordering" : true,
        "paging" : true,
        serverSide: true,
        "rowId": 'data.id',
        "rowClass" : 'data.name',
        "pageLength" : 25,
        "ajax": {
            url: "GetCustomerDataBase.proweb",
            type: "POST"
        },
         "columns": [
            { data: "id", name : "id" },
            { data: "name", name : "name" },
            { data: "street", name : "street" },
            { data: "postcode", name : "postcode" },
            { data: "email", name : "email" },
            { data: "tel", name : "tel" },
            {
                data: null,
                defaultContent:tword('SELECT'),
                render: function ( data, type, row ) {
                return '<button class="btn btn-primary SelectCustomer" id="' + data['id'] + '" data-cart="' + data['id'] + '" data-tel="' + data['tel'] + '"><i class="icon-envelope"></i>'+ tword('SELECT') +'</button>'
            }
            },
        ]
    } );
    $.fn.dataTable.ext.errMode = 'none';
    $('div.dataTables_filter input').keyboard({
      layout: 'qwerty'
    });
    setInterval(function () {
      $("div.dataTables_filter input").keyup()
    }, 1000);
    
    $('#loading').hide();
    
    
    // $.ajax({
    //   type: 'POST',
    //   url: "GetCustomerDataBase.proweb",
    //   success: function (data) {
    //     let response = JSON.parse(data);
    //     if (response['error'] == 0) {
    //       var c = 0;
    //       let formdata = '<table class="tablesorter" width="100%" cellpadding="0" cellspacing="0" id="gradient-style"><thead><tr><th width="50"> id</th><th width="111" align="left" class="header">'+ tword('FULL_NAME') +' <br/></th><th width="137" align="left" class="header">'+ tword('ADDRESS') +'</th><th width="126" align="left" class="header">'+ tword('POST_CODE') +'</th><th width="134" align="left" class="header">'+ tword('TEL') +'</th><th width="134" align="left" class="header">'+ tword('EMAIL') +'</th><th width="67" style="width: 52px" class="header">'+ tword('ACTIONS') +'</th></tr></thead>';
    //       $.each(response['data'], function (key, val) {
    //         $.each(val, function (keys, vals) {
    //           formdata += '<tr id="box' + vals['id'] + '"><td>' + vals['id'] + '</td><td class="pointer">' + vals['name'] + '</td><td class="pointer">' + vals['street'] + ' - ' + vals['street2'] + '</td><td class="pointer">' + vals['postcode'] + '</td><td class="pointer">' + vals['tel'] + '</td><td class="pointer">' + vals['email'] + '</td><td class="center" style="white-space: nowrap;"><button class="btn btn-primary SelectCustomer" id="' + vals['id'] + '" data-cart=" ' + response['id'] + '" data-tel="' + vals['tel'] + '"><i class="icon-envelope"></i>'+ tword('SELECT') +'</button></td></tr>';
    //           c += 1;

    //         });


    //       });



    //       formdata += '</table>';
    //       $('#ReportArea').html(formdata);
    //       cusTopsearcy();
    //     }

    //   }
    // });
    
    
  });


  function cusTopsearcy() {
    $('#gradient-style').dataTable({
       "processing": true,
       "serverSide": true,
      "bJQueryUI": true,
      "sPaginationType": "full_numbers",
      "order": [
        [0, "ASC"]
      ]
    });
    
    $('#SearchBox').keyboard({
      layout: 'qwerty'
    });
    setInterval(function () {
      $("#SearchBox").keyup()
    }, 1000);
    $('#loading').hide();

  }


  $('#Admin').on('touchend click', "#NoSale", function (e) {
    e.preventDefault();
    if (window.app.ASK_ADMIN_PIN_ON_PHONE_SETTING_TOGGLE === "No") {
      NosaleFuncOp();
    } else {
      swal({
        title: tword('MANAGER_PIN'),
        text: "",
        type: "input",
        inputType: "password",
        showCancelButton: true,
        closeOnConfirm: false,
        inputPlaceholder: tword('ENTER_PIN')
      }, function (inputValue) {
        if (inputValue === false) {
          return false
        };
        if (inputValue === "") {
          swal.showInputError(tword('YOU_NEED_PIN'));
          return false
        }
        if (inputValue != window.app.ADMINPIN) {
          swal.showInputError(tword('WRONG_PIN'));
          return false
        }
        NosaleFuncOp();
      });
    }


    return true;
  });

  $('body').on('touchend click', ".NoSale", function (e) {
    e.preventDefault();
    if (window.app.ASK_ADMIN_PIN_ON_PHONE_SETTING_TOGGLE === "No") {
      NosaleFuncOp();
    } else {
      swal({
        title: tword('MANAGER_PIN'),
        text: "",
        type: "input",
        inputType: "password",
        showCancelButton: true,
        closeOnConfirm: false,
        inputPlaceholder: tword('ENTER_PIN')
      }, function (inputValue) {
        if (inputValue === false) {
          return false
        };
        if (inputValue === "") {
          swal.showInputError(tword('YOU_NEED_PIN'));
          return false
        }
        if (inputValue != window.app.ADMINPIN) {
          swal.showInputError(tword('WRONG_PIN'));
          return false
        }
        NosaleFuncOp();
      });
    }


    return true;
  });

  function NosaleFuncOp() {


    if (window.app.NETPRINTER == 'Yes') {
      NosalePrintNetWork();
    } else {
      print_iframe_get('No Sale', null, 0);
    }


  }
  $('body').on('touchend click', "#unPaidToday", function (e) {
    e.preventDefault();
    $('#productsettings').css('display', 'none');
    $('#OrderLogPage').css('display', 'block');
    $('#OrderDetail').html("")
    $('.OrderConcept').remove();
    $('#Admin').css('display', 'none');
    $.ajax({
      type: 'POST',
      url: "code/unpaid.php",
      data: "",
      async: false,
      success: function (data1) {
        var itemList = '';
        var data = jQuery.parseJSON(data1);
        var C = 0;
        var D = 0;
        $.each(data.C, function (key, val) {
          C++;
        });
        $.each(data.D, function (key, val) {
          D++;
        });
        var TotalItems = check_numbers(D) + check_numbers(C);
        var orderid = "";
        if (typeof (data.orders) == "undefined") {
          swal(tword('INFORMATION'), tword('INFORMATION_TEXT'), "warning");
          $('#online').click();
        }
        $.each(data.orders, function (key, val) {
          var orderid = val.orderid;
          if (val.method == "DELIVERY" && typeof (data.D[orderid]) != "undefined") {
            if (data.D != "") {
              var Counter = data.D[orderid].rank;
            }
          } else {
            if (data.C != "" && typeof (data.C[orderid]) != "undefined") {
              var Counter = data.C[orderid].rank;
            }
          }
          //	itemList=itemList+'<div id="'+val.txn_id+'"  class="orderdetail col-md-3"  ><div style="margin:20px 20px 0px 0px; " class="panel panel-primary"  ><div class="panel-heading"><span class="glyphicon glyphicon glyphicon-shopping-cart">Ref:'+val.txn_id+'</span></div><div class="'+val.status+'"><h4 style="color:#fff !important;">Status:'+val.status+'<br />'+val.method+'</h4> </div></div></div>'});
          var orderType = val.orderid.substring(0, 3);
          var pMethod = val.paymentMethod.replace(/ /g, '').toLowerCase();
          var date22 = val.adddate.split(' ');
          if (val.method == 'DELIVERY') {
            var met = 'DELIVERY time';
          } else if (val.method == 'COLLECTION') {
            var met = 'COLLECTION time'
          }
          var descriptor='';
          if(pMethod == 'paid' && typeof val.JSONlONG != 'undefined'){
              descriptor = [];
              var toprepjsonlog = val.JSONlONG.slice(4);
              
              toprepjsonlog = toprepjsonlog.replace("----", ",");
              
              
              
              toprepjsonlog = JSON.parse('[' + toprepjsonlog + ']');
              
              for (var i = 0; i < toprepjsonlog.length; i++) {
              
                       descriptor.push(toprepjsonlog[i].statusDetail);
                
                    
                } 
              
            //   descriptor = toprepjsonlog.statusDetail;
          }
          
          itemList = itemList + '<button data-history="0" data-desc="'+descriptor+'" data-counter="' + Counter + '" data-otype="' + orderType + '" class="' + val.method + " " + pMethod + ' btn btn btn-primary hvr-shutter-out-horizontal ITEMButtonUnpaid ' + val.status + '" id="order' + val.orderid + '" data-orderid="' + val.orderid + '" data-unpaid="1">' + val.orderid + '<br/><span id="itemStatus' + val.orderid + '">' + val.status + " " + val.Total + '</span><br/><hr>' + val.method + " " + val.paymentMethod.toLowerCase() + '<br/>' + val.ctel + '<br/><hr>' + date22[0] + '--' + date22[1] + '<br/>' + met + ':' + val.deltime + ' </button>';
        });
        $('#OrderLog').html(itemList);
      }
    });
  });

  $('#OrderLogPage').on('touchend click', ".ORDERBUTTON", function (e) {
    e.preventDefault();
    e.preventDefault();
    $('#QueuePage').hide();
    var type = $(this).attr('id');
    if (type.toLowerCase() !== 'all') {
      $('.ITEMButton').css('display', 'none');
      $('.' + type).css('display', 'block');
    } else {
      $('.ITEMButton').css('display', 'block');
    }
  });
  $('.topbar').on('touchend click', "#Log", function (e) {
    e.preventDefault();
    $('#QueuePage').hide();
    LogGetAll();
  });
  $('.navigation').on('touchend click', ".Manage", function (e) {
    e.preventDefault();
    $('#HistoryButtons').css('display', 'none');
    $('#OrderLogPage').css('display', 'none');
    $('#productsettings').css('display', 'none');
    $('#FooterBar').css('display', 'none');
    $('#Admin').css('display', 'block');
    $('#ReportArea').html("");
    $('#QueuePage').hide();
    $('.AdminButtons').show();
    $('.anydesk').show();
    $('.AdminOrderlist').show();
  });
  $('#Admin').on("click", '#CHECKX', function (e) {
    e.preventDefault();
    var id = $('#zcode').val()
    var dataString = "id=" + id;
    $.ajax({
      type: 'POST',
      url: "XReport.proweb",
      data: dataString,
      async: false,
      success: function (data) {
        $('#ReportArea').html(data);
      }
    });
  });
  $('#Admin').on("click", '#CHECK', function (e) {
    e.preventDefault();
    var id = $('#zcode').val()
    var dataString = "id=" + id;
    $.ajax({
      type: 'POST',
      url: "ZReport.proweb",
      data: dataString,
      async: false,
      success: function (data) {
        $('#ReportArea').html(data);
      }
    });
  });
  $('#Admin').on('touchend click', "#TakingX", function (e) {
    e.preventDefault();
    $('#ReportArea').html("");
    var dataString = "";
    $.ajax({
      type: 'GET',
      url: "XReport-id.proweb",
      data: dataString,
      async: false,
      success: function (data) {
        $('#ReportArea').html(data);
      }
    });
  });
  $('#Admin').on('touchend click', "#Taking", function (e) {
    e.preventDefault();
    $('#ReportArea').html("");
    var dataString = "";
    $.ajax({
      type: 'GET',
      url: "ZReport-id.proweb",
      data: dataString,
      async: false,
      success: function (data) {
        $('#ReportArea').html(data);
      }
    });
  });
  $('#Admin').on('touchend click', "#WindowsCLose", function (e) {
    var win = window.open('', '_self');
    window.close();
    win.close();
    return false;
  });
  $('body').on('touchend click', ".SavePayment", function (e) {
    var paymenttype = $(this).attr("data-title");
    var dataString = "&paymenttype=" + paymenttype
    $.ajax({
      type: 'POST',
      url: "v6/paymenttype.php",
      data: dataString,
      async: false,
      success: function (data) {
        window.app.PAYMENTTYPE = "CASH," + paymenttype;
      }
    });
  });
  
  $('#Admin').on('touchend click', ".PaymentProvider", function (e) {
    var paymenttype = $(this).attr("id");
    var currentP = window.app.PAYMENTTYPE.split(",");
    var paymentB = '<button class="btn SavePayment" data-title="ELEVON">ELEVON</button>';
    paymentB = paymentB + '<button class="btn SavePayment" data-title="PAYMENTSENSE">PAYMENT SENSE</button>';
    paymentB = paymentB + '<button class="btn SavePayment" data-title="FIRSTDATA">FIRST DATA</button>';
    paymentB = paymentB + '<button class="btn SavePayment" data-title="WORLDPAY">WORLDPAY</button>';
    paymentB = paymentB + '<button class="btn SavePayment" data-title="PAYPAL">PAYPAL</button>';
    paymentB = paymentB + '<button class="btn SavePayment" data-title="OPTOMANY">OPTOMANY</button>';
    swal({
      title: tword('SELECT_PAYMENT_PROVIDER') + currentP[1],
      text: paymentB,
      showConfirmButton: false,
      customClass: 'swal-wide',
      showCancelButton: false,
      type: "warning",
      html: true,
      closeOnClickOutside: true,
      allowOverwrite: true,
      showLoaderOnConfirm: true
    });
  });
  $('#Admin').on("click", '#Exit', function (e) {
    e.preventDefault();
    var mywindow = window.self();
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10
    mywindow.close();
  });
  $('#Admin').on('touchend click', ".PrintMe1", function (e) {
    e.preventDefault();
    var OrderDetail = $('#basket').html();
    let styles = 'body{font-family:arial;}#bitems { width:100mm;}#bitems tr td{ border-bottom:1px solid #000;}.totalArea { width:100mm;}.totalArea td {padding: 2px !important;}.totalArea td {border-bottom: 1px solid #22262e;}.totalArea .totalLabel { float: right; width: 100px;}.totalArea .totalValue { float: right;    padding-right: 10px;   text-align: right;    width: 150px;} ul{ width:70%;}.bitemhead{ font-size:14.5pt;text-transform:uppercase; font-weight:bold;}.bitemhead ul li {font-size:14pt;text-transform: capitalize;}.bitemPrice, .totalArea {font-weight:bold; font-size:15pt; width:100%;}.btn { display:none !important;}.basketTotalArea { font-size:16pt;}';
    print_iframe_get(OrderDetail, styles, 0);
    return true;
  });

  function settingToggle(status, tag, id) {
    $.ajax({
      type: 'POST',
      url: "SettingToggle-get.proweb",
      data: {
        'status': status,
        'tag': tag,
        'id': id
      },
      async: false,
      success: function (data) {

        data = data.replace("0", "");
        let response = JSON.parse(data);
        let timerInterval;
        if (response.error == 1) {
          timerInterval = setInterval(() => {
            $.ajax({
              type: 'POST',
              url: "CheckDbSet.proweb",
              data: {
                'status': status,
                'tag': tag
              },
              async: false,
              success: function (data) {
                location.reload();
              }
            });
          }, 100)
        }
        swal({
            title: response.title,
            text: response.message,
            type: response.type
          },
          function () {

            $.ajax({
              type: 'POST',
              url: "CheckDbSet.proweb",
              data: {
                'status': status,
                'tag': tag
              },
              async: false,
              success: function (data) {
                location.reload();
              }
            });
          });
      }
    });
  }

  $('body').on('touchend click', '.DCTimeModalOpen', function (e) {
    $('#dc-time-modal-lg').modal('show');
  });

  $('body').on('touchend click', '.OnlineServiceStatusModalOpen', function (e) {
    $('#online-service-status-modal-lg').modal('show');
  });

  $('.AdminModal').on('touchend click', ".dc-time-increase", function (e) {
    var val = parseInt($(this).siblings('input[type="number"]').val());
    if (val <= 90) {
      val = (val + 1).toFixed(1);
      $(this).siblings('input[type="number"]').val(val);
      $(this).siblings('.range-container').children('.serviceRange').val(val);
    }
  });

  $('.AdminModal').on('touchend click', ".dc-time-decrease", function (e) {
    var val = parseInt($(this).siblings('input[type="number"]').val());
    if (val >= 1) {
      val = (val - 1).toFixed(1);
      $(this).siblings('input[type="number"]').val(val);
      $(this).siblings('.range-container').children('.serviceRange').val(val);
    }
  });

  $('.AdminModal').on('input', ".dc-time-range", function (e) {
    $(this).parent().siblings('input[type="number"]').val($(this).val());
  });

  $('body').on('touchend click', '.ServiceMileModalOpen', function (e) {
    $('#service-mile-modal-lg').modal('show');
  });

  $('.AdminModal').on('touchend click', ".service-increase", function (e) {
    var val = parseFloat($(this).siblings('input[type="number"]').val());
    if (val <= 9.9) {
      val = (val + 0.1).toFixed(1);
      $(this).siblings('input[type="number"]').val(val);
      $(this).siblings('.range-container').children('.serviceRange').val(val);
    }
  });

  $('.AdminModal').on('touchend click', ".service-decrease", function (e) {
    var val = parseFloat($(this).siblings('input[type="number"]').val());
    if (val >= 0.1) {
      val = (val - 0.1).toFixed(1);
      $(this).siblings('input[type="number"]').val(val);
      $(this).siblings('.range-container').children('.serviceRange').val(val);
    }
  });

  $('.AdminModal').on('input', ".serviceRange", function (e) {
    $(this).parent().siblings('input[type="number"]').val($(this).val());
  });

  $('#Admin').on("click", '#SettingToggleCheck', function (e) {
    e.preventDefault();
    var id = $('#SettingToggleCode').val()
    var status = $('#SettingToggleCode').attr('data-status');
    var tag = $('#SettingToggleCode').attr('data-tag');
    settingToggle(status, tag, id);
  });

  $('body').on('touchend click', ".serviceMileFeeSettingsButton", function (e) {
    e.preventDefault();
    let count = $(this).attr('data-count');
    let result = '';
    let miles = {};

    for (let i = 1; i <= count; i++) {
      let m = $('#serviceMile' + i).val();
      let f = $('#serviceFee' + i).val();

      if (m > 0 && f > 0) {
        result += '' + m + '=' + f + ',';
        miles[m] = Number(f);
      }

    }
    result = '';
    let maxMile = '';
    const ordered = Object.keys(miles).sort().reduce(
      (obj, key) => {
        obj[key] = miles[key];
        result += '' + key + '=' + miles[key] + ',';
        maxMile = key;
        return obj;
      }, {}
    );
    result = result.slice(0, -1);

    $.ajax({
      url: 'ServiceMileAndFee.proweb',
      data: {
        value: result,
        max_mile: maxMile
      },
      method: 'POST',
      success: function (response) {
        $("#service-mile-modal-close").click();
        swal(tword('SUCCESS'), tword('S_F_UPDATED'), "success")

        swal({
            title: tword('SUCCESS'),
            text: tword('S_F_UPDATED'),
            type: "success",
            confirmButtonText: "OK"
          },
          function (isConfirm) {
            if (isConfirm) {
              $.ajax({
                type: 'POST',
                url: "CheckDbSet.proweb",
                data: '',
                async: false,
                success: function (data) {
                  location.reload();
                }
              });
            }
          });
      }
    })
  });

  $('body').on('touchend click', ".DCTimeSettingsButton", function (e) {
    e.preventDefault();
    var collection = $('#dc-time-collection').val();
    var delivery = $('#dc-time-delivery').val();

    $.ajax({
      url: 'DCTimeSetting.proweb',
      data: {
        value: 'COLLECTION:' + collection + ',DELIVERY:' + delivery
      },
      method: 'POST',
      success: function (response) {
        $("#dc-time-modal-close").click();
        swal(tword('SUCCESS'), tword('C_D_T_UPDATED'), "success")

        swal({
            title: tword('SUCCESS'),
            text: tword('C_D_T_UPDATED'),
            type: "success",
            confirmButtonText: "OK"
          },
          function (isConfirm) {
            if (isConfirm) {
              $.ajax({
                type: 'POST',
                url: "CheckDbSet.proweb",
                data: '',
                async: false,
                success: function (data) {
                  location.reload();
                }
              });
            }
          });
      }
    });
  });

  $('body').on('touchend click', '.OpHoursModalOpen', function (e) {
    $.ajax({
      type: 'GET',
      url: "GetOperationHours.proweb",
      async: false,
      success: function (data) {
        opHours = JSON.parse(data);
        var titles = ['Opening', 'Collection', 'Delivery'];
        var weekdays = [tword('MONDAY'), tword('TUESDAY'), tword('WEDNESDAY'), tword('THURSDAY'), tword('FRIDAY'), tword('SATURDAY'), tword('SUNDAY')];
        var selectHourOptions = '';
        var selectMinOptions = '';

        for (let i = 0; i <= 23; i++) {
          let v = (i <= 9 ? '0' + i : i);
          selectHourOptions += '<option value="' + v + '">' + v + '</option>';
        }
        for (let i = 0; i <= 55; i += 5) {
          let v = (i <= 9 ? '0' + i : i);
          selectMinOptions += '<option value="' + v + '">' + v + '</option>';
        }
        selectMinOptions += '<option value="59">' + 59 + '</option>';

        titles.forEach(function (title) {
          $('#op-hours-modal-lg .' + title.toLowerCase() + '-hours .hours-container').html('');
          changedOpHours[title] = {};
        });

        weekdays.forEach(function (day) {
          titles.forEach(function (title) {
            let d = day.toLowerCase();
            let t = title.toLowerCase();
            $('#op-hours-modal-lg .' + t + '-hours .hours-container').append('<div class="day-container"><span>' + day + '</span><div class="hour-container"><select name="' + t + '-' + d + '-hour-open">' + selectHourOptions + '</select><select name="' + t + '-' + d + '-min-open">' + selectMinOptions + '</select></div><b> - </b><div class="hour-container"><select name="' + t + '-' + d + '-hour-close">' + selectHourOptions + '</select><select name="' + t + '-' + d + '-min-close">' + selectMinOptions + '</select></div></div>');

            let setting = opHours[title][day][0];
            let [opening, closing] = setting.split('-');
            let [openHour, openMin] = opening.split(':');
            let [closeHour, closeMin] = closing.split(':');
            $('#op-hours-modal-lg select[name="' + t + '-' + d + '-hour-open"] option[value="' + openHour + '"]').prop('selected', true);
            $('#op-hours-modal-lg select[name="' + t + '-' + d + '-min-open"] option[value="' + openMin + '"]').prop('selected', true);
            $('#op-hours-modal-lg select[name="' + t + '-' + d + '-hour-close"] option[value="' + closeHour + '"]').prop('selected', true);
            $('#op-hours-modal-lg select[name="' + t + '-' + d + '-min-close"] option[value="' + closeMin + '"]').prop('selected', true);
          });
        });

        $('#op-hours-modal-lg select').on('change', function () {
          let name = $(this).prop('name');
          let [title, day, time, type] = name.split('-');
          let t = title.substr(0, 1).toUpperCase() + title.substr(1);
          let d = day.substr(0, 1).toUpperCase() + day.substr(1);
          let [open, close] = opHours[t][d][0].split('-');

          if (type === 'open') {
            let [h, m] = open.split(':');
            if (time === 'hour') {
              h = $(this).val();
            } else { //minute
              m = $(this).val();
            }
            opHours[t][d][0] = h + ':' + m + '-' + close;
          } else { //close
            let [h, m] = close.split(':');
            if (time === 'hour') {
              h = $(this).val();
            } else { //minute
              m = $(this).val();
            }
            opHours[t][d][0] = open + '-' + h + ':' + m;
          }
          changedOpHours[t][d] = opHours[t][d];
        });
        opHoursSelectOnChange = false;

        $('#op-hours-modal-lg').modal('show');
      }
    });
  });

  $('body').on('touchend click', '.OpHoursButton', function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "SetOperationHours.proweb",
      data: {
        'hours': JSON.stringify(changedOpHours)
      },
      async: false,
      success: function (data) {
        if ($.trim(data) == '1') {
          swal({
              title: tword('SUCCESS'),
              text: tword('HOURS_SETTINGS_UPDATED'),
              type: "success",
              confirmButtonText: "OK"
            },
            function (isConfirm) {
              if (isConfirm) {
                location.reload();
              }
            }
          );
        } else {
          swal({
            title: tword('ERROR'),
            text: tword('HOURS_SETTINGS_ERROR'),
            type: "error",
            confirmButtonText: "OK"
          });
        }
      }
    });

  });

  $('body').on('touchend click', ".settingToggle", function (e) {
    e.preventDefault();
    var id = window.app.ADMINPIN;
    var status = $(this).attr('data-status');
    var tag = $(this).attr('data-tag');
    if (window.app.ASK_ADMIN_PIN_ON_PHONE_SETTING_TOGGLE === "No") {
      settingToggle(status, tag, id);
    } else {
      $('#ReportArea').html("");
      $.ajax({
        type: 'GET',
        url: "SettingToggle-id.proweb",
        data: {
          'status': status,
          'tag': tag
        },
        async: false,
        success: function (data) {
          $('#ReportArea').html(data);
        }
      });
    }
  });
  $('body').on('touchend click', ".setIp", function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: "setIp.proweb",
      data: {},
      async: false,
      success: function (data) {

        swal({
            title: tword('SUCCESS'),
            text: tword('COMPLETED'),
            type: 'success'
          },
          function () {


          });
      }
    });
  });
  (function () {
    var
      fullScreenApi = {
        supportsFullScreen: false,
        isFullScreen: function () {
          return false;
        },
        requestFullScreen: function () {},
        cancelFullScreen: function () {},
        fullScreenEventName: '',
        prefix: ''
      },
      browserPrefixes = 'webkit moz o ms khtml'.split(' ');
    // check for native support
    if (typeof document.cancelFullScreen != 'undefined') {
      fullScreenApi.supportsFullScreen = true;
    } else {
      // check for fullscreen support by vendor prefix
      var browserPrefixes = browserPrefixes.length
      for (var i = 0, il = browserPrefixes; i < il; i++) {
        fullScreenApi.prefix = browserPrefixes[i];
        if (typeof document[fullScreenApi.prefix + 'CancelFullScreen'] != 'undefined') {
          fullScreenApi.supportsFullScreen = true;
          break;
        }
      }
    }
    // update methods to do something useful
    if (fullScreenApi.supportsFullScreen) {
      fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';
      fullScreenApi.isFullScreen = function () {
        switch (this.prefix) {
          case '':
            return document.fullScreen;
          case 'webkit':
            return document.webkitIsFullScreen;
          default:
            return document[this.prefix + 'FullScreen'];
        }
      }
      fullScreenApi.requestFullScreen = function (el) {
        return (this.prefix === '') ? el.requestFullScreen() : el[this.prefix + 'RequestFullScreen']();
      }
      fullScreenApi.cancelFullScreen = function (el) {
        return (this.prefix === '') ? document.cancelFullScreen() : document[this.prefix + 'CancelFullScreen']();
      }
    }
    // jQuery plugin
    if (typeof jQuery != 'undefined') {
      jQuery.fn.requestFullScreen = function () {
        return this.each(function () {
          var el = jQuery(this);
          if (fullScreenApi.supportsFullScreen) {
            fullScreenApi.requestFullScreen(el);
          }
        });
      };
    }
    // export api
    window.fullScreenApi = fullScreenApi;
  })();
}); //END DOCUMENT READY