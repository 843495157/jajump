(function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;

            if (clientWidth >= 750)
                clientWidth = 750;

            if (!clientWidth) return;
            window.remvalue = 20 * (clientWidth / 375);
            docEl.style.fontSize = window.remvalue + 'px';
        };

    if (!doc.addEventListener) return;
    recalc();

    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
