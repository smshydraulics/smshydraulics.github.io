//-----------------------------------------------------------------------------
// shopify.js
//-----------------------------------------------------------------------------

(function () {

//-----------------------------------------------------------------------------
// variables
//-----------------------------------------------------------------------------

var options = {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#de851b"
        },
        "background-color": "#f7941e",
        ":focus": {
          "background-color": "#de851b"
        },
        "padding-left": "53px",
        "padding-right": "53px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      }
    },
    "contents": {
      "img": false,
      "button": false,
      "buttonWithQuantity": true,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#de851b"
        },
        "background-color": "#f7941e",
        ":focus": {
          "background-color": "#de851b"
        },
        "padding-left": "53px",
        "padding-right": "53px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#de851b"
        },
        "background-color": "#f7941e",
        ":focus": {
          "background-color": "#de851b"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#f7941e",
        ":hover": {
          "background-color": "#de851b"
        },
        ":focus": {
          "background-color": "#de851b"
        }
      },
      "count": {
        "font-size": "14px"
      }
    }
  }
};

//-----------------------------------------------------------------------------
// functions
//-----------------------------------------------------------------------------

function loadScript() {
  var script = document.createElement('script');
  script.async = true;
  script.src = scriptURL;
  (document.getElementsByTagName('head')[0]
    || document.getElementsByTagName('body')[0]).appendChild(script);
  script.onload = ShopifyBuyInit;
}

//-----------------------------------------------------------------------------

/**
 * Attach buy button script to window as promise.
 */
function ShopifyBuyInit() {

  var client = ShopifyBuy.buildClient({
    domain: 'smshydraulics.myshopify.com',
    storefrontAccessToken: 'e4d2bb2f7358c2038b8a2974bd6532fa',
  });

  ShopifyBuy.UI.onReady(client).then(function (ui) {
    var node = document.getElementById('shopify-buy-button');
    var productId = node.getAttribute('data-shopifyid');
    ui.createComponent('product', {
      id: productId,
      node: node,
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: options
    });
  });

}

//-----------------------------------------------------------------------------
// main
//-----------------------------------------------------------------------------

var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
if (window.ShopifyBuy) {
  if (window.ShopifyBuy.UI) {
    ShopifyBuyInit();
  } else {
    loadScript();
  }
} else {
  loadScript();
}

//-----------------------------------------------------------------------------

})();
