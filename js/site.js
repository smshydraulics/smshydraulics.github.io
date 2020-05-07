//-----------------------------------------------------------------------------
// site.js
//-----------------------------------------------------------------------------

(function () {

//-----------------------------------------------------------------------------
// functions
//-----------------------------------------------------------------------------

function addClass(item, cls) {
    var classes = item.className.split(' ');
    if (classes.indexOf(cls) === -1) {
        item.className += ' ' + cls;
    }
}

//-----------------------------------------------------------------------------

function removeClass(item, cls) {
    var classes = item.className.split(' ');
    var idx     = classes.indexOf(cls);
    if (idx !== -1) {
        classes.splice(idx, 1);
        item.className = classes.join(' ');
    }
}

//-----------------------------------------------------------------------------

function addHoverEvents(item) {
    item.onmouseenter = function () {
        addClass(item, 'hover');
    };
    item.onmouseleave = function () {
        removeClass(item, 'hover');
    };
}

//-----------------------------------------------------------------------------

/**
 * Add hover tag for menu with children.
 */
function setupMenuHover() {
    var idx;

    // add hover events to items with submenus
    var menuItems = document.querySelectorAll('.item-ct');
    for (idx = 0; idx < menuItems.length; ++idx) {
        if (menuItems[idx].querySelector('ul') !== null) {
            addHoverEvents(menuItems[idx]);
        }
    }
}

//-----------------------------------------------------------------------------

function addEmailClickEvent(item) {
    item.onclick = function () {
        var email = item.innerText.split('').reverse().join('');
        window.location.href = 'mailto:' + email;
    };
}

//-----------------------------------------------------------------------------

function setupEmailClick() {
    var idx;

    var emailItems = document.querySelectorAll('.email-ct');
    for (idx = 0; idx < emailItems.length; ++idx) {
        addEmailClickEvent(emailItems[idx]);
    }
}

//-----------------------------------------------------------------------------

function loadGoogleAnalytics() {
  var scriptURL = 'https://www.googletagmanager.com/gtag/js?id=UA-165851168-1';
  var script = document.createElement('script');
  script.async = true;
  script.src = scriptURL;
  (document.getElementsByTagName('head')[0]
    || document.getElementsByTagName('body')[0]).appendChild(script);
  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-165851168-1');
  };
}

//-----------------------------------------------------------------------------
// main
//-----------------------------------------------------------------------------

window.onload = function () {
    setupMenuHover();
    setupEmailClick();
    loadGoogleAnalytics();
};

//-----------------------------------------------------------------------------

})();
