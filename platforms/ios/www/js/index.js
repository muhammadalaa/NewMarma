﻿
var lat = 27.5162591;
var lng = 41.7342923;

var pglist = [];
var url = 'http://marma.co/';
var regbtn = $('#regbtn');
var loginbtn = $('#loginbtn');
var skipbtn = $('#skipbtn');
var skipbtn2 = $('#skipbtn2');
var skipbtn3 = $('#skipbtn3');
var pgalbumlnk = $('#pgalbumlnk');
var reservebtn = $('#reservebtn');

var userloginbtn = $('#userloginbtn');
var userregisterbtn = $('#userregisterbtn');
var playgroundsbackbtn = $('#playgroundsbackbtn');
var backtolistbackbtn = $('#backtolistbackbtn');
var playgrounddetailsbackbtn = $('#playgrounddetailsbackbtn');

var usernametb = $('#usernametb');
var reservedate = $('#reservedate');
var reservetime = $('#reservetime');
var passwordtb = $('#passwordtb');
var rusernametb = $('#rusernametb');
var rpasswordtb = $('#rpasswordtb');
var remailtb = $('#remailtb');
var rphonetb = $('#rphonetb');
var indexdiv = $('#indexdiv');
var logindiv = $('#logindiv');
var registerdiv = $('#registerdiv');
var playgroundsdiv = $('#playgroundsdiv');
var playgrounddetailsdiv = $('#playgrounddetailsdiv');
var playgroundpicturesdiv = $('#playgroundpicturesdiv');
var playgroundpicsdiv = $('#playgroundpicsdiv');
var bemandoobDiv = $('#bemandoobDiv');
var loadingdiv = $('#loadingdiv');
var reservedate = $('#reservedate');
var pgpricespan = $('#pgpricespan');
var pgnamespan = $('#pgnamespan');
var pgadressspan = $('#pgadressspan');
var pgcpctyspan = $('#pgcpctyspan');
var pgpricepspan = $('#pgpricepspan');
var pgimg = $('#pgimg');
var pgpicture = $('#pgpicture');
var pgmaplink = $('#pgmaplink');
var mandoobselectdiv = $('#mandoobselectdiv');
var addPlaygrounddiv = $('#addPlaygrounddiv');
var manadeebdiv = $('#manadeebdiv');
var choosemandoobbackbtn = $('#choosemandoobbackbtn');
var choosemandoob = $('#choosemandoob');
var mandoobordersdiv = $('#mandoobordersdiv');
var mandooborders = $('#mandooborders');
var userprofiletablnk = $('#userprofiletablnk');
var puserregisterbtn = $('#puserregisterbtn');
var prusernametb = $('#prusernametb');
var prpasswordtb = $('#prpasswordtb');
var premailtb = $('#premailtb');
var prphonetb = $('#prphonetb');
var changepasswordlnk = $('#changepasswordlnk');
var manadeebofferstablnk = $('#manadeebofferstablnk');
var manadeeborders = $('#manadeeborders');
var mmbrshipselect = $('#mmbrshipselect');
var bemandoob = $('#bemandoob');
var addplayground = $('#addplayground');
var titleimgcen = $('#titleimgcen');
var searchpgbox = $('#searchpgbox');
var playgroundstablnk = $('#playgroundstablnk');
var addplaygroundtablnk = $('#addplaygroundtablnk');
var personalimg = $('#personalimg');
var licenseimg = $('#licenseimg');
var personalimghdn = $('#personalimghdn');
var licenseimghdn = $('#licenseimghdn');
var addPlaygroundbtn = $('#addPlaygroundbtn');
var pgnametb = $('#pgnametb');
var pgpricetb = $('#pgpricetb');
var pgcapacityselect = $('#pgcapacityselect');
var pgaddressta = $('#pgaddressta');
var joinreasontb = $('#joinreasontb');
var pgphonetb = $('#pgphonetb');
var bemandoobbtn = $('#bemandoobbtn');
var cancelbemandoob = $('#cancelbemandoob');
var changepersonalimglnk = $('#changepersonalimglnk');
var changelicenseimglnk = $('#changelicenseimglnk');
var choosepgaddimglnk = $('#choosepgaddimglnk');
var pgaddimgspreviewdiv = $('#pgaddimgspreviewdiv');
var pgaddimghdn1 = $('#pgaddimghdn1');
var pgaddimghdn2 = $('#pgaddimghdn2');
var pgaddimghdn3 = $('#pgaddimghdn3');
var pgaddimghdn4 = $('#pgaddimghdn4');
var pgaddimghdn5 = $('#pgaddimghdn5');
var canceladdpg = $('#canceladdpg');
var playground_google_lathdn = $('#playground_google_lathdn');
var playground_google_lnghdn = $('#playground_google_lnghdn');
var pgimage1 = $('#pgimage1');
var pgimage2 = $('#pgimage2');
var pgimage3 = $('#pgimage3');
var pgimage4 = $('#pgimage4');
var pgimage5 = $('#pgimage5');
var delimgbtn1 = $('#delimgbtn1');
var delimgbtn2 = $('#delimgbtn2');
var delimgbtn3 = $('#delimgbtn3');
var delimgbtn4 = $('#delimgbtn4');
var delimgbtn5 = $('#delimgbtn5');
var searchpgtxt = $('#searchpgtxt');
var playground_id_pk;
var mandoobordersLst;
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
        console.log('calling setup push');
        app.setupPush();

    },
    setupPush: function () {
        console.log('calling push init');
        var push = PushNotification.init({
            "android": {},
            "browser": {},
            "ios": {
                "sound": true,
                "vibration": true,
                "badge": true
            },
            "windows": {}
        });
        console.log('after init');

        push.on('registration', function (data) {
            console.log('registration event: ' + data.registrationId);
            //alert('regId:'+  data.registrationId);
            var oldRegId = localStorage.getItem('registrationId');
            if (oldRegId !== data.registrationId) {
                // Save new registration ID
                localStorage.setItem('registrationId', data.registrationId);
                // Post registrationId to your app server as the value has changed
            }

            /*var parentElement = document.getElementById('registration');
            var listeningElement = parentElement.querySelector('.waiting');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');*/
        });

        push.on('error', function (e) {
            console.log("push error = " + e.message);
        });

        push.on('notification', function (data) {
            console.log('notification event');
            alert('notification:' + data.message);
            navigator.notification.alert(
                data.message,         // message
                null,                 // callback
                data.title,           // title
                'Ok'                  // buttonName
            );
        });
    }
    // Update DOM on a Received Event
    , receivedEvent: function (id) {

        sessionStorage.clear();
    }
};


function skiploginregister() {
    indexdiv.hide();
    registerdiv.hide();
    logindiv.hide();
    ShowPlaygrounds();
    return false;
}
function displayPlaygroundDetails(id) {
    var now = new Date();

    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    reservedate.min = today;
    reservedate.val(today);
    playground_id_pk = id;
    SetLoading(true);
    $.ajax({
        type: 'Get',
        url: url + 'Api/StadiumDetails/' + id,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        data: {},
        success: function (data) {
            //ProgressIndicator.hide();
            SetLoading(false);
            if (data && data.length > 0) {
                pgpricespan.text(data[0].playground_cost);
                pgnamespan.text(data[0].playground_name);
                pgadressspan.text(data[0].playground_address);
                pgcpctyspan.text(data[0].playground_capacity);
                pgpricepspan.text(data[0].playground_cost);
                pgimg.attr('src', data[0].image_name);
                pgpicture.attr('src', data[0].image_name);
                pgmaplink.attr('href', 'https://www.google.com/maps/?q=' + data[0].playground_google_lat + ',' + data[0].playground_google_lng);
                playgroundsdiv.hide();
                playgrounddetailsdiv.show();

            } else {
                navigator.notification.alert('عذرا ولكن تعذر تحميل بيانات الملعب!', null, 'خطأ', 'موافق');
            }
        }, error: function (a, e, d) {
            //ProgressIndicator.hide();
            SetLoading(false);
            var err = a.responseText + ' ' + e + ' ' + d;
            navigator.notification.alert(err, null, 'خطأ', 'موافق');
        }
    });

    return false;
}
skipbtn.click(skiploginregister);
skipbtn2.click(skiploginregister);
skipbtn3.click(skiploginregister);

regbtn.click(function () {
    logindiv.hide();
    rusernametb.val('');
    rpasswordtb.val('');
    remailtb.val('');
    rphonetb.val('');
    registerdiv.show();
    return false;
});
reservebtn.click(function () {

    if (sessionStorage.getItem("userid") != 'undefined') {
        if (reservedate.val()) {
            if (reservetime.val()) {
                var dt = reservedate.val();
                var tm = reservetime.val();
                var now = new Date();

                var day = ("0" + now.getDate()).slice(-2);
                var month = ("0" + (now.getMonth() + 1)).slice(-2);

                var today = now.getFullYear() + "-" + (month) + "-" + (day);
                if (dt < today) {
                    navigator.notification.alert('عذرا ولكن لا يمكنك اختيار تاريخ قديم!', null, 'خطأ', 'موافق');
                }
                if (dt == today) {
                    $.ajax({
                        type: 'POST',
                        url: url + 'Api/AddOrederAdmin',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        dataType: 'json',
                        async: true,
                        data: { 'playground_id': playground_id_pk, 'date_reservation': dt, 'time_reservation': tm, 'user_id': sessionStorage.getItem("userid") },
                        success: function (data) {
                            //ProgressIndicator.hide();
                            SetLoading(false);
                            if (data && data.success == 1) {
                                if (data.time == 1) {
                                    navigator.notification.alert('تم حجز الملعب', null, 'تم', 'موافق');
                                } else {
                                    navigator.notification.alert('عذرا ولكن الملعب غير متاح في هذا الوقت الذي اخترته يرجى اختيار ميعاد آخر!', null, 'خطأ', 'موافق');
                                }
                            } else {
                                navigator.notification.alert('عذرا ولكن تعذر حجز الملعب!', null, 'خطأ', 'موافق');
                            }
                        }, error: function (a, e, d) {
                            //ProgressIndicator.hide();
                            SetLoading(false);
                            var err = a.responseText + ' ' + e + ' ' + d;
                            navigator.notification.alert(err, null, 'خطأ', 'موافق');
                        }
                    });
                } else {
                    playgrounddetailsdiv.hide();

                    SetLoading(true);
                    $.ajax({
                        type: 'Get',
                        url: url + 'Api/AllDelegate',
                        contentType: 'application/json; charset=utf-8',
                        dataType: 'json',
                        async: true,
                        data: {},
                        success: function (data) {
                            //ProgressIndicator.hide();
                            SetLoading(false);
                            if (data && data.length > 0) {
                                var ht = '';
                                for (var i = 0; i < data.length; i++) {
                                    ht += '<div class="row"><div class="col-xs-12 col-sm-12 col-lg-12 mandoob"><input id="mandoob' + data[i].id + '" type="checkbox" class="mandoobchbx" value="' + data[i].id + '"/> <label for="mandoob' + data[i].id + '">' + data[i].user_name + '</label></div></div>';
                                }
                                manadeebdiv.html(ht);
                                mandoobselectdiv.show();
                            } else {
                                playgrounddetailsdiv.show();
                                navigator.notification.alert('عذرا ولكن تعذر تحميل بيانات الملعب!', null, 'خطأ', 'موافق');
                            }
                        }, error: function (a, e, d) {
                            //ProgressIndicator.hide();
                            playgrounddetailsdiv.show();
                            SetLoading(false);
                            var err = a.responseText + ' ' + e + ' ' + d;
                            navigator.notification.alert(err, null, 'خطأ', 'موافق');
                        }
                    });

                }

            }
        }
    } else {
        playgrounddetailsdiv.hide();
        usernametb.val('');
        passwordtb.val('');
        logindiv.show();
    }
    return false;
});


pgalbumlnk.click(function () {
    playgrounddetailsdiv.hide();
    SetLoading(true);
    $.ajax({
        type: 'Get',
        url: url + 'Api/StadiumImages/' + playground_id_pk,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        data: {},
        success: function (data) {
            //ProgressIndicator.hide();
            SetLoading(false);
            if (data && data.length > 0) {
                var ht = '';
                for (var i = 0; i < data.length; i++) {
                    ht += '<div class="row"><div class="col-xs-12 col-sm-12 col-lg-12"><img src="' + data[i].img + '" class="pgimg2 col-lg-12" /></div></div>';
                }
                playgroundpicsdiv.html(ht);
                playgroundpicturesdiv.show();
                playgrounddetailsdiv.hide();
            } else {
                playgrounddetailsdiv.show();
                navigator.notification.alert('عذرا ولكن تعذر تحميل البوم صور الملعب!', null, 'خطأ', 'موافق');
            }
        }, error: function (a, e, d) {
            //ProgressIndicator.hide();
            playgrounddetailsdiv.show();
            SetLoading(false);
            var err = a.responseText + ' ' + e + ' ' + d;
            navigator.notification.alert(err, null, 'خطأ', 'موافق');
        }
    });
    return false;
});


choosemandoob.click(function () {
    if ($('.mandoobchbx:checked').length > 0) {
        var delegates = $('.mandoobchbx:checked').map(function () {
            return $(this).val();
        }).get();
        SetLoading(true);
        var dt = reservedate.val();
        var tm = reservetime.val();

        $.ajax({
            type: 'POST',
            url: url + 'Api/AddOred',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: true,
            data: { 'playground_id': playground_id_pk, 'date_reservation': dt, 'time_reservation': tm, 'user_id': sessionStorage.getItem("userid"), 'delegates': delegates },
            success: function (data) {
                //ProgressIndicator.hide();
                SetLoading(false);
                if (data && data.success == 1) {
                    if (data.time == 1) {
                        navigator.notification.alert('تم حجز الملعب', null, 'تم', 'موافق');
                        mandoobselectdiv.hide();
                        playgroundsdiv.show();
                    } else {
                        navigator.notification.alert('عذرا ولكن الملعب غير متاح في هذا الوقت الذي اخترته يرجى اختيار ميعاد آخر!', null, 'خطأ', 'موافق');
                    }
                } else {
                    navigator.notification.alert('عذرا ولكن تعذر حجز الملعب!', null, 'خطأ', 'موافق');
                }
            }, error: function (a, e, d) {
                //ProgressIndicator.hide();
                SetLoading(false);
                var err = a.responseText + ' ' + e + ' ' + d;
                navigator.notification.alert(err, null, 'خطأ', 'موافق');
            }
        });
    } else {
        navigator.notification.alert('لابد من اختيار مندوب واحد على الاقل', null, 'خطأ', 'موافق');
    }
    return false;
});

loginbtn.click(function () {
    registerdiv.hide();
    usernametb.val('');
    passwordtb.val('');
    logindiv.show();
    return false;
});
userloginbtn.click(function () {
    if (usernametb.val()) {
        if (passwordtb.val()) {
            //ProgressIndicator.showSimple(true);
            SetLoading(true);
            sessionStorage.clear();
            $.ajax({
                type: 'POST',
                url: url + 'Api/Login',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: true,
                data: { 'user_name': usernametb.val(), 'password': passwordtb.val() },
                success: function (data) {
                    //ProgressIndicator.hide();
                    SetLoading(false);
                    if (data.success == 1) {
                        sessionStorage.setItem("user_name", usernametb.val());
                        sessionStorage.setItem("userid", data.id);
                        sessionStorage.setItem("is_delegate", data.is_delegate);
                        logindiv.hide();
                        if (data.is_delegate == 0) {
                            ShowPlaygrounds();
                        } else if (data.is_delegate == 1) {
                            ShowMandoobPage();
                        }
                    } else {

                        navigator.notification.alert('عذرا ولكن البيانات التي قمت بادخالها غير صحيحة!', null, 'خطأ', 'موافق');
                    }
                }, error: function (a, e, d) {
                    //ProgressIndicator.hide();
                    SetLoading(false);
                    var err = a.responseText + ' ' + e + ' ' + d;
                    navigator.notification.alert(err, null, 'خطأ', 'موافق');
                }
            });

        } else {
            navigator.notification.alert('من فضلك أدخل كلمة المرور!', null, 'خطأ', 'موافق');

        }
    } else {
        navigator.notification.alert('من فضلك أدخل اسم المستخدم!', null, 'خطأ', 'موافق');


    }
    return false;
});
userregisterbtn.click(function () {
    if (rusernametb.val()) {
        if (rpasswordtb.val()) {
            //ProgressIndicator.showSimple(true);
            SetLoading(true);
            $.ajax({
                type: 'POST',
                url: url + 'Api/InsertRegistration',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: true,
                data: { 'user_name': rusernametb.val(), 'password': rpasswordtb.val(), 'email': remailtb.val(), 'mobile': rphonetb.val(), 'id_member': mmbrshipselect.val() },
                success: function (data) {
                    //ProgressIndicator.hide();
                    SetLoading(false);
                    if (data.success == 1) {
                        navigator.notification.alert('تم تسجيل حسابك بنجاح', null, 'تم', 'موافق');
                        sessionStorage.setItem("user_name", rusernametb.val());
                        sessionStorage.setItem("userid", data.id);
                        registerdiv.hide();
                        ShowPlaygrounds();
                    } else {
                        navigator.notification.alert('عذرا ولكن البيانات التي قمت بادخالها غير صحيحة!', null, 'خطأ', 'موافق');
                    }
                }, error: function (a, e, d) {
                    //ProgressIndicator.hide();
                    SetLoading(false);
                    var err = a.responseText + ' ' + e + ' ' + d;
                    navigator.notification.alert(err, null, 'خطأ', 'موافق');
                }
            });

        } else {
            navigator.notification.alert('من فضلك أدخل كلمة المرور!', null, 'خطأ', 'موافق');

        }
    } else {
        navigator.notification.alert('من فضلك أدخل اسم المستخدم!', null, 'خطأ', 'موافق');

    }
    return false;
});
playgroundsbackbtn.click(function () {
    playgroundsdiv.hide();
    logindiv.show();
    return false;
});
backtolistbackbtn.click(function () {
    playgrounddetailsdiv.hide();
    ShowPlaygrounds();
    return false;
});
playgrounddetailsbackbtn.click(function () {
    playgroundpicturesdiv.hide();
    playgrounddetailsdiv.show();
    return false;
});
choosemandoobbackbtn.click(function () {
    mandoobselectdiv.hide();
    playgrounddetailsdiv.show();
    return false;
});

function ShowPlaygrounds(txtval) {
    //$('#playgroundslistdiv').html('<span>loading ...</span>');
    if (txtval) {
        SetLoading(true);
        $.ajax({
            type: 'POST',
            url: url + 'Api/SearchPlayground',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: true,
            data: { 'search_playground_name': txtval },
            success: function (data) {
                //ProgressIndicator.hide();
                SetLoading(false);
                if (data) {
                    pglist = data;
                    var ht = '';
                    for (var i = 0; i < data.length; i++) {
                        if (i == 0)
                        { ht += '<div  class="row pgrow">'; }
                        ht += '<div class="pgitem col-xs-12 col-sm-12 col-lg-12"><a href="#" onclick="return displayPlaygroundDetails(' + data[i].playground_id_pk + ')"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><img src="' + data[i].image_name + '" style="width:100%" /><span>' + data[i].playground_name + '</span></div></a></div>';
                        //if ((i + 1) % 4 == 0 && i <= data.length - 1) {
                        //    ht += '</div><div  class="row pgrow">';
                        //}
                        if (i == data.length - 1) {
                            ht += '</div>';
                        }
                    }
                    $('#playgroundslistdiv').html(ht);
                    playgroundsdiv.show();
                } else {
                    navigator.notification.alert('عذرا ولكن تعذر تحميل بيانات الملاعب!', null, 'خطأ', 'موافق');
                }
                setTimeout(function () {
                    searchpgtxt.focus();
                    var fldLength = searchpgtxt.val().length;
                    searchpgtxt[0].setSelectionRange(fldLength, fldLength);
                }, 600);
            }, error: function (a, e, d) {
                //ProgressIndicator.hide();
                SetLoading(false);
                var err = a.responseText + ' ' + e + ' ' + d;
                navigator.notification.alert(err, null, 'خطأ', 'موافق');
            }
        });
    } else {
        playgroundstablnk.click();

        SetLoading(true);
        $.ajax({
            type: 'Get',
            url: url + 'Api/AllStadium',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: true,
            data: { 'user_name': rusernametb.val(), 'password': rpasswordtb.val(), 'email': remailtb.val(), 'mobile': rphonetb.val() },
            success: function (data) {
                //ProgressIndicator.hide();
                SetLoading(false);
                if (data) {
                    pglist = data;
                    var ht = '';
                    for (var i = 0; i < data.length; i++) {
                        if (i == 0)
                        { ht += '<div  class="row pgrow">'; }
                        ht += '<div class="pgitem col-xs-12 col-sm-12 col-lg-12"><a href="#" onclick="return displayPlaygroundDetails(' + data[i].playground_id_pk + ')"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><img src="' + data[i].image_name + '" style="width:100%" /><span>' + data[i].playground_name + '</span></div></a></div>';
                        //if ((i + 1) % 4 == 0 && i <= data.length - 1) {
                        //    ht += '</div><div  class="row pgrow">';
                        //}
                        if (i == data.length - 1) {
                            ht += '</div>';
                        }
                    }
                    $('#playgroundslistdiv').html(ht);
                    playgroundsdiv.show();
                } else {
                    navigator.notification.alert('عذرا ولكن تعذر تحميل بيانات الملاعب!', null, 'خطأ', 'موافق');
                }
            }, error: function (a, e, d) {
                //ProgressIndicator.hide();
                SetLoading(false);
                var err = a.responseText + ' ' + e + ' ' + d;
                navigator.notification.alert(err, null, 'خطأ', 'موافق');
            }
        });
    }
}

function ShowMandoobPage() {
    SetLoading(true);
    $.ajax({
        type: 'Get',
        url: url + 'Api/OneDelegateOrder/' + sessionStorage.getItem("userid"),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        data: {},
        success: function (data) {
            //ProgressIndicator.hide();
            SetLoading(false);
            if (data && data.length > 0) {
                mandoobordersLst = data;
                var ht = '';
                for (var i = 0; i < data.length; i++) {
                    ht += '<div class="row"><div class="col-xs-12 col-sm-12 col-lg-12"><a href="#" onclick="return ShowMandoobOrderDetails(' + data[i].order_id + ')">' +
                            '<div class="mndblblcell col-xs-4 col-sm-4 col-lg-4"><span>الاسم</span></div>' +
                            '<div class="mndbvalcell col-xs-8 col-sm-8 col-lg-8"><span>' + data[i].user_name + '</span></div>' +
                            '<div class="mndblblcell col-xs-4 col-sm-4 col-lg-4"><span>اسم الملعب</span></div>' +
                            '<div class="mndbvalcell col-xs-8 col-sm-8 col-lg-8"><span>' + data[i].playground_name + '</span></div>' +
                            '<div class="mndblblcell col-xs-4 col-sm-4 col-lg-4"><span>التاريخ</span></div>' +
                            '<div class="mndbvalcell col-xs-8 col-sm-8 col-lg-8"><span>' + data[i].date_order + '</span></div>' +
                            '<div class="mndblblcell col-xs-4 col-sm-4 col-lg-4"><span>الوقت</span></div>' +
                            '<div class="mndbvalcell col-xs-8 col-sm-8 col-lg-8"><span>' + data[i].time + '</span></div></a></div></div>';
                }
                mandooborders.html(ht);
                mandoobordersdiv.show();
            } else {
                usernametb.val('');
                passwordtb.val('');
                logindiv.show();
                navigator.notification.alert('عذرا ولكن تعذر تحميل بيانات الطلبات!', null, 'خطأ', 'موافق');
            }
        }, error: function (a, e, d) {
            //ProgressIndicator.hide();
            usernametb.val('');
            passwordtb.val('');
            logindiv.show();
            SetLoading(false);
            var err = a.responseText + ' ' + e + ' ' + d;
            navigator.notification.alert(err, null, 'خطأ', 'موافق');
        }
    });


}
var order_id;
function ShowMandoobOrderDetails(id) {
    order_id = id;
    navigator.notification.prompt(
            'ادخل السعر:',  // message
            onPromptMandoobOrder,                  // callback to invoke
            'عرض سعر من المندوب',            // title
            ['موافق', 'الغاء الامر']              // buttonLabels
        );
    return false;
}
function onPromptMandoobOrder(results) {
    if (results.buttonIndex == 1) {
        var enteredVal = results.input1;
        SetLoading(true);
        $.ajax({
            type: 'POST',
            url: url + 'Api/OrderCost',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: true,
            data: { 'playground_cost': enteredVal, 'id': order_id },
            success: function (data) {
                //ProgressIndicator.hide();
                SetLoading(false);
                if (data.success == 1) {
                    navigator.notification.alert('تم اضافة عرض السعر بنجاح', null, 'تم', 'موافق');
                    ShowMandoobPage();
                } else {
                    navigator.notification.alert('عذرا ولكن حدث خطأ أثناء اضافة عرض السعر!', null, 'خطأ', 'موافق');
                }
            }, error: function (a, e, d) {
                //ProgressIndicator.hide();
                SetLoading(false);
                var err = a.responseText + ' ' + e + ' ' + d;
                navigator.notification.alert(err, null, 'خطأ', 'موافق');
            }
        });
    }
}
playgroundstablnk.click(function () {
    searchpgbox.show();
    titleimgcen.attr('src', 'img/pglist.png');
});
addplaygroundtablnk.click(function () {
    searchpgbox.hide();
    titleimgcen.attr('src', 'img/addpg.png');
    bemandoobDiv.hide();
    $('.addactionbtns').show(); bemandoobDiv.hide(); addPlaygrounddiv.hide();
});
userprofiletablnk.click(function () {
    searchpgbox.hide();
    titleimgcen.attr('src', 'img/profilehead.png');

    SetLoading(true);
    $.ajax({
        type: 'Get',
        url: url + 'Api/UpdateRegistration/' + sessionStorage.getItem("userid"),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        data: {},
        success: function (data) {
            //ProgressIndicator.hide();
            SetLoading(false);
            if (data) {
                prusernametb.val(data.user_name);
                premailtb.val(data.email);
                prphonetb.val(data.mobile);
            } else {
                prusernametb.val('');
                prpasswordtb.val('');
                premailtb.val('');
                prphonetb.val('');
                navigator.notification.alert('عذرا ولكن تعذر تحميل بيانات الملف الشخصي!', null, 'خطأ', 'موافق');
            }
        }, error: function (a, e, d) {
            //ProgressIndicator.hide();
            prusernametb.val('');
            prpasswordtb.val('');
            premailtb.val('');
            prphonetb.val('');
            var err = a.responseText + ' ' + e + ' ' + d;
            navigator.notification.alert(err, null, 'خطأ', 'موافق');
        }
    });
});

puserregisterbtn.click(function () {
    if (usrprofilestate == 'normal') {
        if (prusernametb.val()) {
            //ProgressIndicator.showSimple(true);
            SetLoading(true);
            $.ajax({
                type: 'POST',
                url: url + 'Api/UpdateRegistration/' + sessionStorage.getItem("userid"),
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: true,
                data: { 'user_name': prusernametb.val(), 'email': premailtb.val(), 'mobile': prphonetb.val() },
                success: function (data) {
                    //ProgressIndicator.hide();
                    SetLoading(false);
                    if (data.success == 1) {
                        navigator.notification.alert('تم حفظ بياناتك بنجاح', null, 'تم', 'موافق');
                    } else {
                        navigator.notification.alert('عذرا ولكن البيانات التي قمت بادخالها غير صحيحة!', null, 'خطأ', 'موافق');
                    }
                }, error: function (a, e, d) {
                    //ProgressIndicator.hide();
                    SetLoading(false);
                    var err = a.responseText + ' ' + e + ' ' + d;
                    navigator.notification.alert(err, null, 'خطأ', 'موافق');
                }
            });


        } else {
            navigator.notification.alert('من فضلك أدخل اسم المستخدم!', null, 'خطأ', 'موافق');
        }
    } else if (usrprofilestate == 'password') {
        if (prusernametb.val()) {
            //ProgressIndicator.showSimple(true);
            SetLoading(true);
            $.ajax({
                type: 'POST',
                url: url + 'Api/UpdatePassWord',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: true,
                data: { 'id': sessionStorage.getItem("userid"), 'password': prpasswordtb.val() },
                success: function (data) {
                    //ProgressIndicator.hide();
                    SetLoading(false);
                    if (data.success == 1) {
                        $('.passwordlbl').hide();
                        $('.userdata').show();
                        usrprofilestate = 'normal';
                        changepasswordlnk.text('تغيير كلمة المرور');
                        navigator.notification.alert('تم حفظ بياناتك بنجاح', null, 'تم', 'موافق');
                    } else {
                        navigator.notification.alert('عذرا ولكن البيانات التي قمت بادخالها غير صحيحة!', null, 'خطأ', 'موافق');
                    }
                }, error: function (a, e, d) {
                    //ProgressIndicator.hide();
                    SetLoading(false);
                    var err = a.responseText + ' ' + e + ' ' + d;
                    navigator.notification.alert(err, null, 'خطأ', 'موافق');
                }
            });


        } else {
            navigator.notification.alert('من فضلك أدخل اسم المستخدم!', null, 'خطأ', 'موافق');
        }
    }
    return false;
});
var usrprofilestate = 'normal';
changepasswordlnk.click(function () {
    if (usrprofilestate == 'normal') {
        prpasswordtb.val('');
        $('.passwordlbl').show();
        $('.userdata').hide();
        usrprofilestate = 'password';
        changepasswordlnk.text('الغاء الامر');
    } else if (usrprofilestate == 'password') {
        $('.passwordlbl').hide();
        $('.userdata').show();
        usrprofilestate = 'normal';
        changepasswordlnk.text('تغيير كلمة المرور');
    }
    return false;
});
manadeebofferstablnk.click(function () {

    showManadeebOffers();
    searchpgbox.hide();
    titleimgcen.attr('src', 'img/incommingorders.png');
});

function showManadeebOffers() {
    SetLoading(true);
    $.ajax({
        type: 'Get',
        url: url + 'Api/ClientDelegatesOrders/' + sessionStorage.getItem("userid"),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        data: {},
        success: function (data) {
            //ProgressIndicator.hide();
            SetLoading(false);
            if (data) {
                var ht = '';
                for (var i = 0; i < data.length; i++) {
                    ht += '<div class="row"><div class="col-xs-12 col-sm-12 col-lg-12"><div class="mndblblcell col-xs-4 col-sm-4 col-lg-4"><span>المندوب</span></div><div class="mndbvalcell col-xs-8 col-sm-8 col-lg-8"><span>' + data[i].delegates_name + '</span></div>' +
                                '<div class="mndblblcell col-xs-4 col-sm-4 col-lg-4"><span>اسم الملعب</span></div><div class="mndbvalcell col-xs-8 col-sm-8 col-lg-8"><span>' + data[i].playground_name + '</span></div><div class="mndblblcell col-xs-4 col-sm-4 col-lg-4">' +
                                    '<span>التاريخ</span></div><div class="mndbvalcell col-xs-8 col-sm-8 col-lg-8"><span>' + data[i].date_order + '</span></div><div class="mndblblcell col-xs-4 col-sm-4 col-lg-4">' +
                                    '<span>الوقت</span></div><div class="mndbvalcell col-xs-8 col-sm-8 col-lg-8"><span>' + data[i].time + '</span></div><div class="mndblblcell col-xs-4 col-sm-4 col-lg-4">' +
                                    '<span>عرض السعر</span></div><div class="mndbvalcell col-xs-8 col-sm-8 col-lg-8"><span>' + data[i].playground_cost + '</span></div><div class="mndbbtncell col-xs-12 col-sm-12 col-lg-12">' +
                                    '<a href="#" class="loginbtn" onclick="return SelectMandoobOffer(' + data[i].delegates_id_fk + ', ' + data[i].reservation_id_fk + ', ' + data[i].order_id + ')"><img src="img/select.png" /></a></div></div></div>';
                }
                manadeeborders.html(ht);
            } else {
                manadeeborders.html('');
            }
        }, error: function (a, e, d) {
            //ProgressIndicator.hide();
            SetLoading(false);
            var err = a.responseText + ' ' + e + ' ' + d;
            navigator.notification.alert(err, null, 'خطأ', 'موافق');
        }
    });
}

function SelectMandoobOffer(delegates_id_fk, reservation_id_fk, order_id) {
    SetLoading(true);
    $.ajax({
        type: 'POST',
        url: url + 'Api/SelectDelegates',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: true,
        data: { 'delegates_id_fk': delegates_id_fk, 'reservation_id_fk': reservation_id_fk, 'order_id': order_id },
        success: function (data) {
            //ProgressIndicator.hide();
            SetLoading(false);
            if (data.success == 1) {
                navigator.notification.alert('تم اختيار المندوب بنجاح', null, 'تم', 'موافق');
                showManadeebOffers();
            } else {
                navigator.notification.alert('عذرا ولكن حدث خطأ أثناء تنفيذ طلبك!', null, 'خطأ', 'موافق');
            }
        }, error: function (a, e, d) {
            //ProgressIndicator.hide();
            SetLoading(false);
            var err = a.responseText + ' ' + e + ' ' + d;
            navigator.notification.alert(err, null, 'خطأ', 'موافق');
        }
    });
}


function SetLoading(isLoading) {
    if (isLoading == true) {
        loadingdiv.modal('show');
    } else {
        setTimeout(function () {
            loadingdiv.modal('hide');
        }, 400);
    }
}

cancelbemandoob.click(function () {
    bemandoobDiv.hide();
    $('.addactionbtns').show();

    return false;
});

bemandoob.click(function () {
    joinreasontb.val('');
    personalimghdn.val('');
    personalimg.attr('src', 'img/chooseimg.png');
    licenseimghdn.val('');
    licenseimg.attr('src', 'img/chooseimg.png');
    bemandoobDiv.show();
    $('.addactionbtns').hide();
});

addplayground.click(function () {
    addPlaygrounddiv.show();
    $('.addactionbtns').hide();
    pgnametb.val('');
    pgpricetb.val('');
    pgaddressta.val('');
    pgphonetb.val('');
    pgcapacityselect.val(1);
    pgimage1.attr('src', 'img/chooseimg.png');
    pgimage1.hide(); delimgbtn1.hide();
    pgaddimghdn1.val('');
    pgimage2.attr('src', 'img/chooseimg.png');
    pgimage2.hide(); delimgbtn2.hide();
    pgaddimghdn2.val('');
    pgimage3.attr('src', 'img/chooseimg.png');
    pgimage3.hide(); delimgbtn3.hide();
    pgaddimghdn3.val('');
    pgimage4.attr('src', 'img/chooseimg.png');
    pgimage4.hide(); delimgbtn4.hide();
    pgaddimghdn4.val('');
    pgimage5.attr('src', 'img/chooseimg.png');
    pgimage5.hide(); delimgbtn5.hide();
    pgaddimghdn5.val('');
});
var stle = {
    opacity: 0.75, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
    backgroundColor: '#FF0000', // make sure you use #RRGGBB. Default #333333
    textColor: '#FFFF00', // Ditto. Default #FFFFFF
    textSize: 20.5, // Default is approx. 13.
    cornerRadius: 16, // minimum is 0 (square). iOS default 20, Android default 100
    horizontalPadding: 20, // iOS default 16, Android default 50
    verticalPadding: 16 // iOS default 12, Android default 30
};
bemandoobbtn.click(function () {
    if (personalimghdn.val()) { } else {
        window.plugins.toast.show('من فضلك اختار الصورة الشخصية', 'long', 'center', function (b) { });
        return;
    }
    if (licenseimghdn.val()) { } else {
        window.plugins.toast.show('من فضلك اختار الصورة الرخصة', 'long', 'center', function (b) { });
        return;
    }
    if (joinreasontb.val()) {
        SetLoading(true);
        $.ajax({
            type: 'POST',
            url: url + 'Api/OrdersBeDelegate',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: true,
            data: { 'user_id_fk': sessionStorage.getItem("userid"), 'person_image': personalimghdn.val(), 'person_license': licenseimghdn.val(), 'person_reson': joinreasontb.val() },
            success: function (data) {
                //ProgressIndicator.hide();
                SetLoading(false);
                if (data.success == 1) {
                    navigator.notification.alert('تم ارسال طلبك بنجاح', null, 'تم', 'موافق');
                    cancelbemandoob.click();
                } else {
                    navigator.notification.alert('عذرا ولكن حدث خطأ أثناء تنفيذ طلبك!', null, 'خطأ', 'موافق');
                }
            }, error: function (a, e, d) {
                //ProgressIndicator.hide();
                SetLoading(false);
                var err = a.responseText + ' ' + e + ' ' + d;
                navigator.notification.alert(err, null, 'خطأ', 'موافق');
            }
        });
    } else {
        window.plugins.toast.show('من فضلك أدخل سبب الانضمام', 'long', 'center', function (b) { });
    }
});

changepersonalimglnk.click(function () {
    navigator.camera.getPicture(GetPersonalImgData, function (message) {
        navigator.notification.alert('خطأ في اختيار الصورة', null, 'خطأ', 'موافق');
    }, {
        quality: 100,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
    return false;
});
function GetPersonalImgData(imageURI) {
    getFileContentAsBase64(imageURI, function (base64Image) {
        //window.open(base64Image);
        personalimghdn.val(base64Image);
        // Then you'll be able to handle the myimage.png file as base64
        personalimg.attr('src', base64Image);
    });
}
changelicenseimglnk.click(function () {
    navigator.camera.getPicture(GetLicenseImgData, function (message) {
        navigator.notification.alert('خطأ في اختيار الصورة', null, 'خطأ', 'موافق');
    }, {
        quality: 100,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
    return false;
});

canceladdpg.click(function () {
    addPlaygrounddiv.hide();
    $('.addactionbtns').show();

    return false;
});

function GetLicenseImgData(imageURI) {
    getFileContentAsBase64(imageURI, function (base64Image) {
        //window.open(base64Image);
        licenseimghdn.val(base64Image);
        // Then you'll be able to handle the myimage.png file as base64
        licenseimg.attr('src', base64Image);
    });
}


function getFileContentAsBase64(path, callback) {
    window.resolveLocalFileSystemURL(path, gotFile, fail);

    function fail(e) {
        navigator.notification.alert('لم نستطع ايجاد الملف المطلوب', null, 'خطأ', 'موافق');
    }

    function gotFile(fileEntry) {
        fileEntry.file(function (file) {
            var reader = new FileReader();
            reader.onloadend = function (e) {
                var content = this.result;
                callback(content);
            };
            // The most important point, use the readAsDatURL Method from the file plugin
            reader.readAsDataURL(file);
        });
    }
}
addPlaygroundbtn.click(function () {
    if (pgnametb.val()) { } else {
        window.plugins.toast.show('من فضلك أدخل اسم الملعب', 'long', 'center', function (b) { });
        return;
    }
    if (pgpricetb.val()) { } else {
        window.plugins.toast.show('من فضلك أدخل السعر', 'long', 'center', function (b) { });
        return;
    }
    if (pgcapacityselect.val()) { } else {
        window.plugins.toast.show('من فضلك اختر سعة الملعب', 'long', 'center', function (b) { });
        return;
    }
    if (pgaddressta.val()) { } else {
        window.plugins.toast.show('من فضلك أدخل العنوان', 'long', 'center', function (b) { });
        return;
    }
    if (playground_google_lathdn.val() && playground_google_lnghdn.val()) { } else {
        window.plugins.toast.show('من فضلك حدد موقع الملعب', 'long', 'center', function (b) { });
        return;
    }

    var imgarr = [];
    if (pgaddimghdn1.val()) {
        imgarr.push(pgaddimghdn1.val());
    }
    if (pgaddimghdn2.val()) {
        imgarr.push(pgaddimghdn2.val());
    }
    if (pgaddimghdn3.val()) {
        imgarr.push(pgaddimghdn3.val());
    }
    if (pgaddimghdn4.val()) {
        imgarr.push(pgaddimghdn4.val());
    }
    if (pgaddimghdn5.val()) {
        imgarr.push(pgaddimghdn5.val());
    }

    if (imgarr.length >= 2) {
        SetLoading(true);
        $.ajax({
            type: 'POST',
            url: url + 'Api/AddNewPlayground',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            dataType: 'json',
            async: true,
            data: { 'user_id_fk': sessionStorage.getItem("userid"), 'playground_name': pgnametb.val(), 'playground_cost': pgpricetb.val(), 'playground_capacity': pgcapacityselect.val(), 'playground_address': pgaddressta.val(), 'playground_phone': pgphonetb.val(), 'playground_images': imgarr, 'playground_google_lat': playground_google_lathdn.val(), 'playground_google_lng': playground_google_lnghdn.val() },
            success: function (data) {
                //ProgressIndicator.hide();
                SetLoading(false);
                if (data.success == 1) {
                    navigator.notification.alert('تم اضافة الملعب بنجاح', null, 'تم', 'موافق');
                    canceladdpg.click();
                } else {
                    navigator.notification.alert('عذرا ولكن حدث خطأ أثناء تنفيذ طلبك!', null, 'خطأ', 'موافق');
                }
            }, error: function (a, e, d) {
                //ProgressIndicator.hide();
                SetLoading(false);
                var err = a.responseText + ' ' + e + ' ' + d;
                navigator.notification.alert(err, null, 'خطأ', 'موافق');
            }
        });
    } else {
        window.plugins.toast.show('لابد من اختيار صورتين على الاقل', 'long', 'center', function (b) { });

    }

});

choosepgaddimglnk.click(function () {


    if (pgaddimghdn1.val() && pgaddimghdn2.val() && pgaddimghdn3.val() && pgaddimghdn4.val() && pgaddimghdn5.val()) {
        window.plugins.toast.show('أقصى عدد للصور هو 5 صور', 'long', 'center', function (b) { });
        return;
    }

    navigator.camera.getPicture(GetPGImgData, function (message) {
        navigator.notification.alert('خطأ في اختيار الصورة', null, 'خطأ', 'موافق');
    }, {
        quality: 100,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
    return false;
});
function GetPGImgData(imageURI) {
    getFileContentAsBase64(imageURI, function (base64Image) {
        //window.open(base64Image);
        if (pgaddimghdn1.val()) {
            if (pgaddimghdn2.val()) {
                if (pgaddimghdn3.val()) {
                    if (pgaddimghdn4.val()) {
                        if (pgaddimghdn5.val()) {

                        } else {
                            pgaddimghdn5.val(base64Image);
                            pgimage5.attr('src', base64Image);
                            pgimage5.show(); delimgbtn5.show();
                        }
                    } else {
                        pgaddimghdn4.val(base64Image);
                        pgimage4.attr('src', base64Image);
                        pgimage4.show(); delimgbtn4.show();
                    }
                } else {
                    pgaddimghdn3.val(base64Image);
                    pgimage3.attr('src', base64Image);
                    pgimage3.show(); delimgbtn3.show();
                }
            } else {
                pgaddimghdn2.val(base64Image);
                pgimage2.attr('src', base64Image);
                pgimage2.show(); delimgbtn2.show();
            }
        } else {
            pgaddimghdn1.val(base64Image);
            pgimage1.attr('src', base64Image);
            pgimage1.show(); delimgbtn1.show();
        }
        // Then you'll be able to handle the myimage.png file as base64

    });
}

function DeletePgImage(indx) {
    switch (indx) {
        case 1:
            pgimage1.attr('src', 'img/chooseimg.png');
            pgimage1.hide(); delimgbtn1.hide();
            pgaddimghdn1.val('');
            break;
        case 2:
            pgimage2.attr('src', 'img/chooseimg.png');
            pgimage2.hide(); delimgbtn2.hide();
            pgaddimghdn2.val('');
            break;
        case 3:
            pgimage3.attr('src', 'img/chooseimg.png');
            pgimage3.hide(); delimgbtn3.hide();
            pgaddimghdn3.val('');
            break;
        case 4:
            pgimage4.attr('src', 'img/chooseimg.png');
            pgimage4.hide(); delimgbtn4.hide();
            pgaddimghdn4.val('');
            break;
        case 5:
            pgimage5.attr('src', 'img/chooseimg.png');
            pgimage5.hide(); delimgbtn5.hide();
            pgaddimghdn5.val('');
            break;
        default:
            break;
    }
    return false;
}

function initLocationPicker() {
    $('#us3').locationpicker({
        location: {
            latitude: lat,
            longitude: lng
        },
        radius: 10,
        inputBinding: {
            latitudeInput: playground_google_lathdn,
            longitudeInput: playground_google_lnghdn
        },
        enableAutocomplete: true,
        markerIcon: 'img/map-marker-2-xl.png'
    });
    $('#us6-dialog').on('shown.bs.modal', function () {
        $('#us3').locationpicker('autosize');
    });
}

$(document).ready(function () {

    $('#searchpgtxt').typeWatch({
        wait: 1500,
        captureLength: 1,
        callback: function (value) {
            ShowPlaygrounds(value);
            
        }
    });
    initLocationPicker();
});
