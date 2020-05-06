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
// main
//-----------------------------------------------------------------------------

window.onload = function () {
    setupMenuHover();
    setupEmailClick();
};

//-----------------------------------------------------------------------------

})();
