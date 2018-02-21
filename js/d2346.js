DDG.Data.Experiments = {
    about_module: {
        versions: ["v35-1", "v35-2", "v35-3", "v35-4", "v36-7", "v37-1", "v37-2", "v37-3"],
        variants: ["a", "b"]
    },
    stack_overflow: {
        versions: ["v35-5", "v35-6", "v35-7", "v36-1", "v36-2", "v36-3"],
        variants: ["a", "b"]
    },
    spelling: {
        versions: ["v33-6", "v33-7", "v34-1", "v34-2", "v34-3"],
        variants: ["a", "b"]
    },
    region_override: {
        versions: ["v38-2", "v38-3", "v38-4", "v38-5", "v38-6", "v38-7", "v39-1", "v39-2"],
        variants: ["a", "b"]
    },
    control: {
        versions: ["v39-3", "v39-4", "v39-5", "v39-6", "v39-7", "v40-1", "v40-2", "v40-3", "v40-4", "v40-5", "v40-6", "v40-7"],
        variants: ["a", "b"]
    },
    filter_label: {
        versions: ["v41-1", "v41-2", "v41-3", "v41-4", "v41-5", "v41-6", "v41-7"],
        variants: ["a", "b", "c", "d"]
    },
    filters_above_organics: {
        versions: ["v42-1", "v42-2", "v42-3", "v42-4", "v42-5", "v42-6", "v42-7"],
        variants: ["a", "b", "c", "d"]
    },
    organic_ux: {
        versions: ["v44-1", "v44-2", "v44-3", "v44-4", "v44-5", "v44-6", "v44-7"],
        variants: ["a", "b", "c", "d", "e"],
        locale: "en_us"
    },
    static_news: {
        versions: ["v47-6", "v47-7", "v48-1", "v48-2", "v48-3", "v48-4", "v48-5"],
        variants: ["a", "b"]
    },
    control2: {
        versions: ["v51-2", "v51-3", "v51-4", "v51-5"],
        variants: ["a", "b"]
    },
    safe_search_filter: {
        versions: ["v52-1", "v52-2", "v52-3", "v52-4", "v52-5", "v52-6", "v52-7"],
        variants: ["a", "b"]
    },
    map_module: {
        versions: ["v57-1", "v57-2", "v57-3", "v57-4", "v57-5", "v57-6", "v57-7"],
        variants: ["a", "b"],
        locale: "en_us"
    },
    images_ux: {
        versions: ["v58-1"],
        variants: ["a", "b"]
    },
    images_ux_detail: {
        versions: ["v58-6", "v58-7"],
        variants: ["a", "b"]
    },
    images_ux_filters: {
        versions: ["v59-1", "v59-2", "v59-3"],
        variants: ["a", "b"],
        englishOnly: true
    },
    placeholder_delay: {
        versions: ["v61-1", "v61-2", "v61-3"],
        variants: ["a", "b"]
    },
    back_button: {
        versions: ["v63-1", "v63-2", "v63-3", "v63-4", "v63-5", "v63-6"],
        variants: ["a", "b"]
    },
    fixed_ux_header: {
        versions: ["v64-3", "v64-4", "v64-5", "v64-6", "v64-7"],
        variants: ["a", "b"]
    },
    ad_layouts: {
        versions: ["v66-1", "v66-2", "v66-3", "v66-4", "v66-5", "v66-6", "v66-7", "v67-1"],
        variants: ["a", "b", "c"]
    },
    ad_layouts_2: {
        versions: ["v67-2", "v67-3", "v67-4", "v67-5", "v67-6", "v67-7"],
        variants: ["b", "c"]
    },
    serp_ui: {
        versions: ["v88-3", "v88-4", "v88-5", "v88-6", "v88-7", "v89-1", "v89-2", "v89-3", "v89-4"],
        variants: ["q", "r"],
        platformName: "androidwos"
    },
    desktop_homepage_tests: {
        active: true,
        atb: true,
        variants: ["y", "f", "g"],
        allocation: [0.02, 0.51, 1],
        englishOnly: true,
        desktopOnly: true
    },
    tracker_blocking_onboarding: {
        active: true,
        atb: true,
        desktopOnly: true,
        variants: ["w", "b", "y"],
        allocation: [0.3, 0.98, 1],
        englishOnly: true,
        displayBrowserName: "Firefox",
        minBrowserVersion: 51,
        maxBrowserVersion: 56
    }
};
DDG.Data.Onboarding = {
    _: {},
    a: {
        description: "Pagefair campaign 17",
        variant: "z",
        redditLandingPage: true
    },
    b: {
        description: "Control for new extension -- old modal"
    },
    c: {
        description: "Pagefair campaign 18",
        variant: "z",
        redditLandingPage: true
    },
    d: {
        description: "Pagefair campaign 19",
        variant: "z",
        redditLandingPage: true
    },
    e: {
        description: "Pagefair campaign 20",
        variant: "z",
        redditLandingPage: true
    },
    f: {
        description: "ATB modal tagline control"
    },
    g: {
        description: "ATB modal tagline test",
        showNewTagline: true
    },
    h: {
        description: "Tracker blocking onboarding v2",
        trackerBlockingOnboarding: true
    },
    i: {
        description: "Pagefair campaign 1",
        variant: "z",
        redditLandingPage: true
    },
    j: {
        description: "Pagefair campaign 2",
        variant: "z",
        redditLandingPage: true
    },
    k: {
        description: "Pagefair campaign 3",
        variant: "z",
        redditLandingPage: true
    },
    l: {
        description: "Pagefair campaign 4",
        variant: "z",
        redditLandingPage: true
    },
    m: {
        description: "Pagefair campaign 5",
        variant: "z",
        redditLandingPage: true
    },
    n: {
        description: "Pagefair campaign 6",
        variant: "z",
        redditLandingPage: true
    },
    o: {
        description: "Pagefair campaign 7",
        variant: "z",
        redditLandingPage: true
    },
    p: {
        description: "Pagefair campaign 8",
        variant: "z",
        redditLandingPage: true
    },
    q: {
        description: "Pagefair campaign 9",
        variant: "z",
        redditLandingPage: true
    },
    r: {
        description: "Pagefair campaign 10",
        variant: "z",
        redditLandingPage: true
    },
    s: {
        description: "Pagefair campaign 11",
        variant: "z",
        redditLandingPage: true
    },
    t: {
        description: "Pagefair campaign 12",
        variant: "z",
        redditLandingPage: true
    },
    u: {
        description: "Pagefair campaign 13",
        variant: "z",
        redditLandingPage: true
    },
    v: {
        description: "Pagefair campaign 14",
        variant: "z",
        redditLandingPage: true
    },
    w: {
        description: "Tracker blocking onboarding v2",
        trackerBlockingOnboarding: true,
        showNewTagline: true,
        showNewBullets: true
    },
    x: {
        description: "Pagefair campaign 15",
        variant: "z",
        redditLandingPage: true
    },
    y: {
        description: "Poll new users (desktop only)",
        hideEmailForm: true,
        showNewUserPoll: true
    },
    z: {
        description: "Pagefair campaign 16",
        variant: "z",
        redditLandingPage: true
    }
};
DDG.Data.Apps = {
    isIPhone: "https://itunes.apple.com/us/app/id663592361?mt=8",
    isAndroid: "market://details?id=com.duckduckgo.mobile.android"
};
! function(a) {
    a.Data.Homepage = {
        queries: [{
            href: "/?q=tilt+shift+images&ia=images",
            label: "tilt shift images"
        }, {
            href: "/?q=thailand+beach+images&ia=images",
            label: "thailand beach images"
        }, {
            href: "/?q=gopro+videos&ia=videos",
            label: "gopro videos"
        }, {
            href: "/?q=jimmy+fallon+videos&ia=videos",
            label: "jimmy fallon videos"
        }, {
            href: "/?q=weather+in+encinitas&ia=weather",
            label: "weather in encinitas"
        }, {
            href: "/?q=weather+in+paris&ia=weather",
            label: "weather in paris"
        }, {
            href: "/?q=sorbet+recipes&ia=recipes",
            label: "sorbet recipes"
        }, {
            href: "/?q=tilapia+recipes&ia=recipes",
            label: "tilapia recipes"
        }, {
            href: "/?q=thai+food+in+San+Francisco&ia=places",
            label: "thai food in San Francisco"
        }, {
            href: "/?q=bars+near+me",
            label: "bars near me"
        }, {
            href: "/?q=katz%27s+deli+new+york&ia=places",
            label: "katz's deli new york"
        }, {
            href: "/?q=orange&ia=meanings",
            label: "orange"
        }, {
            href: "/?q=daft+punk+soundcloud&ia=soundcloud",
            label: "daft punk soundcloud"
        }, {
            href: "/?q=8oz+to+grams&ia=answer",
            label: "8oz to grams"
        }, {
            href: "/?q=define+superlative&ia=definition",
            label: "define superlative"
        }, {
            href: "/?q=people+in+space&ia=answer",
            label: "people in space"
        }]
    }
}(DDG);
DDG.Data.StaticIAs = [{
    id: "images",
    name: "Images",
    type: "static",
    answerType: "Images",
    meta: {
        idField: "image",
        itemType: l("Images"),
        linkPrimaryText: 1,
        autoExpand: 1,
        developer: [{
            name: "DDG Team"
        }],
        signal_from: "images"
    },
    parameters: [{
        key: "size",
        values: [{
            id: "",
            name: lp("size", "All Sizes")
        }, {
            id: "imagesize-small",
            name: lp("size", "Small")
        }, {
            id: "imagesize-medium",
            name: lp("size", "Medium")
        }, {
            id: "imagesize-large",
            name: lp("size", "Large")
        }, {
            id: "imagesize-wallpaper",
            name: lp("size", "Extra Large")
        }]
    }, {
        key: "type",
        values: [{
            id: "",
            name: lp("image-type", "All Types")
        }, {
            id: "photo-photo",
            name: lp("image-type", "Photograph")
        }, {
            id: "photo-clipart",
            name: lp("image-type", "Clipart")
        }, {
            id: "photo-animatedgif",
            name: lp("image-type", "Animated GIF")
        }, {
            id: "photo-transparent",
            name: lp("image-type", "Transparent")
        }]
    }, {
        key: "layout",
        values: [{
            id: "",
            name: lp("image-layout", "All Layouts")
        }, {
            id: "aspect-square",
            name: lp("image-layout", "Square")
        }, {
            id: "aspect-tall",
            name: lp("image-layout", "Tall")
        }, {
            id: "aspect-wide",
            name: lp("image-layout", "Wide")
        }]
    }, {
        key: "color",
        values: [{
            id: "",
            name: lp("image-color", "All Colors")
        }, {
            id: "color2-color",
            name: lp("image-color", "Color Only")
        }, {
            id: "color2-bw",
            name: lp("image-color", "Black and White")
        }, {
            id: "color2-FGcls_RED",
            name: lp("color", "Red")
        }, {
            id: "color2-FGcls_ORANGE",
            name: lp("color", "Orange")
        }, {
            id: "color2-FGcls_YELLOW",
            name: lp("color", "Yellow")
        }, {
            id: "color2-FGcls_GREEN",
            name: lp("color", "Green")
        }, {
            id: "color2-FGcls_BLUE",
            name: lp("color", "Blue")
        }, {
            id: "color2-FGcls_PURPLE",
            name: lp("color", "Purple")
        }, {
            id: "color2-FGcls_PINK",
            name: lp("color", "Pink")
        }, {
            id: "color2-FGcls_BROWN",
            name: lp("color", "Brown")
        }, {
            id: "color2-FGcls_BLACK",
            name: lp("color", "Black")
        }, {
            id: "color2-FGcls_GRAY",
            name: lp("color", "Gray")
        }, {
            id: "color2-FGcls_WHITE",
            name: lp("color", "White")
        }]
    }],
    sources: [{
        id: "ddg",
        name: "DuckDuckGo",
        requeryURL: "/i.js?l=" + window.rl + "&o=json&q="
    }],
    region: true,
    safeSearch: true,
    templates: DDG.Data.templates.groups.images,
    deferredURL: "/i.js?l=" + window.rl + "&o=json&q="
}, {
    id: "videos",
    name: "Videos",
    model: "Video",
    type: "static",
    parameters: [{
        key: "publishedAfter",
        values: [{
            id: "",
            name: l("Any Time")
        }, {
            id: "d",
            name: l("Past Day")
        }, {
            id: "w",
            name: l("Past Week")
        }, {
            id: "m",
            name: l("Past Month")
        }]
    }, {
        key: "videoDefinition",
        values: [{
            id: "",
            name: lp("video-resolution", "Any Resolution")
        }, {
            id: "high",
            name: lp("video-resolution", "High Definition")
        }, {
            id: "standard",
            name: lp("video-resolution", "Standard Definition")
        }]
    }, {
        key: "videoDuration",
        showDescriptions: true,
        values: [{
            id: "",
            name: lp("video-duration", "Any Duration"),
            description: lp("video-duration", "Show videos of any length")
        }, {
            id: "short",
            name: lp("video-duration", "Short"),
            description: lp("video-duration", "Less than 4 minutes")
        }, {
            id: "medium",
            name: lp("video-duration", "Medium"),
            description: lp("video-duration", "Between 4 and 20 minutes")
        }, {
            id: "long",
            name: lp("video-duration", "Long"),
            description: lp("video-duration", "More than 20 minutes")
        }]
    }, {
        key: "videoLicense",
        values: [{
            id: "",
            name: lp("video-license", "Any License")
        }, {
            id: "creativeCommon",
            name: lp("video-license", "Creative Commons")
        }, {
            id: "youtube",
            name: lp("video-license", "YouTube Standard")
        }]
    }],
    sources: [{
        id: "ddg",
        name: "DuckDuckGo",
        requeryURL: "/v.js?l=" + window.rl + "&o=json&strict=1&q="
    }],
    region: true,
    safeSearch: true,
    meta: {
        idField: "id",
        itemType: l("Videos"),
        developer: [{
            name: "DDG Team"
        }],
        signal_from: "videos",
        linkPrimaryText: 1,
        autoExpand: 1,
        detailOverlay: "VideoDetailOverlay"
    },
    templates: DDG.Data.templates.groups.videos,
    deferredURL: "/v.js?l=" + window.rl + "&o=json&strict=1&q="
}];
DDG.Data.DeferredIAs = {
    news: {
        id: "news",
        name: "News",
        answerType: "News",
        type: "static",
        meta: {
            developer: [{
                name: "DDG Team"
            }],
            signal_from: "news",
            itemType: l("News Articles"),
            rerender: ["image"],
            primaryText: l("Recent News")
        },
        safeSearch: true,
        region: true,
        date: true,
        allowVertical: true,
        templates: {
            item: "news_item"
        },
        deferredURL: "/news.js?l=" + window.rl + "&o=json&q=",
        experimentalDeferredURL: "/news.js?l=" + window.rl + "&o=json&exp=1&q="
    },
    images: DDG.Data.StaticIAs[0],
    videos: DDG.Data.StaticIAs[1]
};
! function(a) {
    a.Data.HiddenFields = {
        DATE_FILTER: "df",
        DATE_SORT: "ds",
        IA_REQUERY: "iar"
    }
}(DDG);
! function(a) {
    var b = a.Models;
    b.Base = function(c) {
        this.setMaxListeners(500);
        $.extend(this, c)
    };
    b.Base.prototype = $.extend({}, EventEmitter2.prototype, a.Utils.Events, {
        set: function(c, i, f) {
            if (typeof c === "object") {
                for (var e in c) {
                    this.set(e, c[e], i)
                }
            }
            f = f || {};
            var h = this[c],
                g = h !== i;
            this[c] = i;
            !f.silent && g && this._emitChange(c, h)
        },
        clear: function(c, e) {
            this.set(c, null, e)
        },
        UUID: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(g) {
                var f = Math.random() * 16 | 0,
                    e = g == "x" ? f : (f & 3 | 8);
                return e.toString(16)
            })
        },
        _emitChange: function(c, e) {
            var f = this[c];
            this.emit("change:" + c, f, e);
            this.emit("change", c, f, e)
        }
    })
}(DDG);
! function(m) {
    var b = m.Models.Base,
        c, p = 1440,
        o = 1079,
        n = 864,
        g = 634,
        j = 425,
        i = [{
            id: "xl",
            width: p
        }, {
            id: "l",
            width: o
        }, {
            id: "m",
            width: n
        }, {
            id: "s",
            width: g
        }, {
            id: "xs",
            width: j
        }],
        f = {
            xl: 94,
            l: 94,
            m: 58,
            s: 0,
            xs: 0
        },
        r = j * 0.75,
        q = j * 0.9,
        e = j,
        a = g,
        h = Math.ceil(g * 1.25);
    m.Models.Device = c = function(A) {
        b.call(this, A);
        this.isEnglish = window.locale && window.locale.substring(0, 2) === "en";
        var s = this.ua,
            B = A.host || window.location.host;
        this.isEdge = !!/edge\//.test(s);
        if (!this.isEdge) {
            this.isIE = !!document.all;
            this.isIE9 = !!/msie 9/.test(s);
            this.isIE10p = !!/msie 1[0123456789]/.test(s);
            this.isIE11p = !!(/trident\/[789]/.test(s) || /edge\/[0123456789]/.test(s));
            if (this.isIE10p || this.isIE11p) {
                this.isIE = true
            }
        }
        this.isWindowsPhone = !!/windows phone/.test(s);
        this.isSafari = !!(!this.isWindowsPhone && /\([windows|macintosh|ipad|iphone].* version.* safari/.test(s));
        this.safariVersion = -1;
        if (this.isSafari) {
            var u = s.match(/version\/([0-9][0-9]?\.[0-9])/);
            this.safariVersion = (u) ? parseFloat(u[1]) : -1
        }
        this.isWebkit = !!/webkit/.test(s);
        this.isYandex = !!/yabrowser/.test(s);
        this.isChromiumBased = !!(/chrome(?!frame)|crios/.test(s) && !this.isIE && !this.isEdge);
        this.isChrome = !!(this.isChromiumBased && !/vivaldi/.test(s) && !this.isYandex && !/opr\/[0-9][0-9]?/.test(s));
        this.isFirefox = !!/firefox|fxios/.test(s);
        this.firefoxVersion = -1;
        if (this.isFirefox) {
            var z = s.match(/(firefox|fxios)\/([0-9]+\.[0-9]+)/);
            this.firefoxVersion = (z) ? parseFloat(z[2]) : -1
        }
        this.isFirefox38AndUp = this.firefoxVersion > 37;
        this.isFirefox51AndUp = this.firefoxVersion > 50;
        this.isFirefoxLessThan57 = this.isFirefox && this.firefoxVersion < 57;
        this.isFirefoxFocus = !!/focus/.test(s);
        this.operaVersion = -1;
        this.isOpera = !!/opera/.test(s);
        if (this.isOpera) {
            var v = s.match(/version\/([0-9.]+)/);
            if (v) {
                this.operaVersion = parseFloat(v[1], 10)
            }
        } else {
            if (/opr\/[0-9][0-9]?/.test(s)) {
                this.operaVersion = parseInt(s.match(/opr\/([0-9][0-9]?)/)[1], 10)
            }
        }
        this.isOperaMini = !!/opera mini|opios/.test(s);
        this.isOperaMobile = !!/opera mobi/.test(s);
        this.isIPod = !!/ipod/.test(s);
        this.isIPad = !!/ipad/.test(s);
        this.isIPhone = !!(!this.isWindowsPhone && /iphone/.test(s));
        this.isIDevice = (this.isIPad || this.isIPhone || /\Wios\W/.test(s));
        this.isIOS8p = !!((this.isIDevice && /os (8|9|10|11)|os 10_10/.test(s)));
        this.isIOS8pSafari = !!((this.isIOS8p && !this.isChrome && !this.isOperaMini && !this.isFirefox));
        this.isAndroid = !!(!this.isWindowsPhone && /android/.test(s));
        this.isLegacyAndroid = this.isAndroid && /android ([1-3])|android (4\.[0-2])/.test(s);
        this.isBlackberry = !!/blackberry/.test(s);
        this.chromeVersion = -1;
        if (this.isChromiumBased) {
            var y = s.match(/(chrome|crios)\/([0-9][0-9]?)/);
            this.chromeVersion = (y) ? parseInt(y[2], 10) : -1
        }
        this.isChrome31AndUpOnAndroid = !!(this.isAndroid && this.isChrome && this.chromeVersion > 30);
        this.isChrome48AndUp = !!(this.isChrome && this.chromeVersion > 47);
        this.isAndroidChromeNoOpenSearch = !!(this.isAndroid && this.isChrome && this.chromeVersion > 31 && this.chromeVersion < 57);
        this.isSilk = !!/silk/.test(s);
        this.isKonqueror = !!/konqueror/.test(s);
        this.isOSX = !!/mac os x [0-9]/.test(s);
        this.isOSXMavericksAndUp = !!/mac os x 10(_|\.)(1\d|9)/.test(s);
        this.isWindows = !!/windows/.test(s);
        this.isWindows10 = !!/windows nt 10/.test(s);
        this.isLinux = !!(!this.isAndroid && /linux/.test(s));
        this.isOnion = !!B.match(/\.onion$/i);
        this.isDDGIgnore = !!/ddgignore/.test(s);
        this.isDDGTest = !!/ddgtest/.test(s);
        this.isBrave = (this.isChrome && !this.isDDGTest && (this.isOSX || this.isWindows || this.isLinux) && (!window.chrome || !window.chrome.csi)) || (this.isIOS8p && this.isFirefox && /\d\.\d\.\d.\d{2}\.\d{2}\.\d{2}\.\d{2}/.test(s)) || /brave chrome/.test(s);
        this.isDDGApp = !!/ddg-(android|ios)/.test(s);
        this.isRetina = is_retina = this.dpr > 1;
        this.is2x = m.is2x = this.dpr > 1;
        this.is3x = m.is3x = this.dpr > 2;
        this.hasFixedHeaderSupport = !this.isIDevice;
        if (this.isIDevice) {
            if (this.isChrome) {
                this.hasFixedHeaderSupport = this.chromeVersion >= 57
            } else {
                if (this.isFirefox) {
                    this.hasFixedHeaderSupport = this.firefoxVersion >= 7.2
                } else {
                    this.hasFixedHeaderSupport = this.isIOS8pSafari
                }
            }
        }
        var x = "Browser";
        if (this.isDDGIgnore) {
            x = "Ignore"
        } else {
            if (/seamonkey/.test(s)) {
                x = "SeaMonkey"
            } else {
                if (/iceape/.test(s)) {
                    x = "Iceape"
                } else {
                    if (/palemoon/.test(s)) {
                        x = "PaleMoon"
                    } else {
                        if (this.isBrave) {
                            x = "Brave"
                        } else {
                            if (this.isFirefox) {
                                x = "Firefox"
                            } else {
                                if (/opr\//.test(s) || ((this.isAndroid || this.isIDevice) && (this.isOperaMobile || this.isOperaMini || this.operaVersion !== -1))) {
                                    x = "Opera"
                                } else {
                                    if (this.isFirefoxFocus) {
                                        x = "Focus"
                                    } else {
                                        if (this.isIPad) {
                                            x = "iPad"
                                        } else {
                                            if (this.isAndroid) {
                                                x = "Android"
                                            } else {
                                                if (/xbox/.test(s)) {
                                                    x = "xBox"
                                                } else {
                                                    if (/midori/.test(s)) {
                                                        x = "Midori"
                                                    } else {
                                                        if (/maxthon/.test(s)) {
                                                            x = "Maxthon"
                                                        } else {
                                                            if (this.isYandex) {
                                                                x = "Yandex"
                                                            } else {
                                                                if (/vivaldi/.test(s)) {
                                                                    x = "Vivaldi"
                                                                } else {
                                                                    if (this.isChrome) {
                                                                        x = "Chrome"
                                                                    } else {
                                                                        if (/fennec/.test(s)) {
                                                                            x = "Fennec"
                                                                        } else {
                                                                            if (/epiphany/.test(s)) {
                                                                                x = "Epiphany"
                                                                            } else {
                                                                                if (this.isFirefox) {
                                                                                    x = "Firefox"
                                                                                } else {
                                                                                    if (/uzbl/.test(s)) {
                                                                                        x = "Uzbl"
                                                                                    } else {
                                                                                        if (this.isEdge) {
                                                                                            x = "Edge"
                                                                                        } else {
                                                                                            if (this.isIE && navigator.platform === "Win64" && !k() && Modernizr.touch && document.documentElement.clientWidth == screen.width) {
                                                                                                x = "IEMetro"
                                                                                            } else {
                                                                                                if (this.isIE) {
                                                                                                    x = "IE"
                                                                                                } else {
                                                                                                    if (this.isOpera) {
                                                                                                        x = "Opera"
                                                                                                    } else {
                                                                                                        if (this.isIPhone) {
                                                                                                            x = "iPhone"
                                                                                                        } else {
                                                                                                            if (/arora/.test(s)) {
                                                                                                                x = "Arora"
                                                                                                            } else {
                                                                                                                if (this.isSafari) {
                                                                                                                    x = "Safari"
                                                                                                                } else {
                                                                                                                    if (this.isKonqueror) {
                                                                                                                        x = "Konqueror"
                                                                                                                    } else {
                                                                                                                        if (this.isBlackberry) {
                                                                                                                            x = "Blackberry"
                                                                                                                        } else {
                                                                                                                            if (/phantomjs/.test(s)) {
                                                                                                                                x = "PhantomJS"
                                                                                                                            } else {
                                                                                                                                if (this.isIDevice) {
                                                                                                                                    x = "iOS"
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this.isDDGApp) {
            x = "DDG " + x
        }
        this.browserName = m.browserName = x;
        this.pixelBrowserName = x.toLowerCase();
        this.pixelPlatformName = this._getPixelPlatformName();
        this.pixelBrowserVersion = this._getPixelBrowserVersion();
        this.displayBrowserName = this.browserName;
        if (x === "IEMetro") {
            this.displayBrowserName = "IE"
        } else {
            if (x === "iPhone" || x === "iPad") {
                this.displayBrowserName = "Safari"
            } else {
                if (x === "Android") {
                    this.displayBrowserName = "Chrome"
                }
            }
        }
        this._updateScreenSize();
        this._updateIsMobileDevice();
        this.isSafariWithNativeDDG = this._isSafariWithNativeDDG();
        this.isFirefoxWithNativeDDG = this._isFirefoxWithNativeDDG();
        if ((this.isIPhone && !this.isIPod) || (/mac os x 10[_.]1\d/.test(this.ua)) || (this.isAndroid && /mobile/.test(this.ua) && (this.isChrome || this.isFirefox)) || this.isWindowsPhone || this.isBlackberry) {
            this.canMakePhoneCalls = true
        } else {
            this.canMakePhoneCalls = false
        }
        if (this.isMobileDevice && this.browserName === "Firefox") {
            if (screen.width && screen.width < this.width) {
                this.width = viewport_width = screen.width
            }
            if (screen.height && screen.height < this.height) {
                this.height = viewport_height = screen.height
            }
            this._updateIsMobileDevice()
        }
        var t = (this.width < 600 || (this.width < 800 && this.height < 500)) ? 1 : 0;
        if (t !== this.isMobile) {
            this.isMobile = is_mobile = t;
            this.emit("changed:mobile")
        }
        this.isDesktop = !this.isMobile && !this.isMobileDevice;
        this.hasMetaReferrerSupport = !!((this.chromeVersion > 20 && !this.isMobileDevice) || (this.chromeVersion >= 50) || (this.safariVersion > 7 && !this.isWindows && !this.isMobileDevice) || (this.isIOS8pSafari || (this.safariVersion >= 8 && this.isIDevice)) || (this.operaVersion > 14 && !this.isMobileDevice) || this.isFirefox38AndUp);
        this.$scrollDoc = $("html,body");
        this.pixelId = (this.isMobile || this.isMobileDevice) ? "m" : "d";
        if (this.isMobileDevice) {
            this._wasPortrait = this.isMobilePortrait()
        }
        this.hasMinDesktopWidth = this.isDesktop && this.width >= 980;
        window.onresize = $.throttle(200, this._onResize.bind(this));
        window.onscroll = this._onScroll.bind(this);
        if (typeof document.hidden !== "undefined") {
            this._visibilityChange = "visibilitychange";
            this._visibilityState = "visibilityState"
        } else {
            if (typeof document.mozHidden !== "undefined") {
                this._visibilityChange = "mozvisibilitychange";
                this._visibilityState = "mozVisibilityState"
            }
        }
        if (this._visibilityChange) {
            d.addEventListener(this._visibilityChange, this._onVisibilityChange.bind(this), false)
        }
    };
    c.prototype = $.extend({}, b.prototype, {
        scrollTop: function(u, t, s) {
            if (typeof u === "undefined") {
                if (typeof this._scrollTop !== "undefined") {
                    return this._scrollTop
                }
                return this._scrollTop = m.$doc.scrollTop()
            }
            if (u === this.scrollTop()) {
                if (s) {
                    s()
                }
                return this._scrollTop = u
            }
            if (t && !$.isNumeric(t)) {
                t = m.animation_speed
            }
            if (!t) {
                this.$scrollDoc.scrollTop(u);
                if (s) {
                    s()
                }
            } else {
                this.$scrollDoc.animate({
                    scrollTop: u
                }, t, s)
            }
            return this._scrollTop = u
        },
        getBrowserMoreURL: function() {
            var s = "https://duck.co/help/desktop/";
            if (this.isChrome) {
                return s + "chrome"
            } else {
                if (this.isOpera) {
                    return s + "opera"
                } else {
                    if (this.isSafari && !this.isSafariWithNativeDDG) {
                        return s + "safari"
                    } else {
                        if (this.browserName === "SeaMonkey") {
                            return "https://addons.mozilla.org/seamonkey/addon/duckduckgo-ssl/"
                        } else {
                            if (this.isFirefox) {
                                return s + "firefox"
                            }
                        }
                    }
                }
            }
        },
        canAddToBrowser: function() {
            var s = this.getAddToBrowserDirections();
            return s.useForSearch || s.setAsHomepage
        },
        getAddToBrowserDirections: function() {
            if (this._addToBrowserDirections) {
                return this._addToBrowserDirections
            }
            var s = this.browserName,
                u, t;
            if (!this._hasInstallationInstructions()) {
                return this._addToBrowserDirections = {}
            }
            if (s === "IE") {
                t = "ie"
            } else {
                if (s === "SeaMonkey") {
                    t = "seamonkey"
                } else {
                    if (s === "PaleMoon") {
                        t = "palemoon"
                    } else {
                        if (m.addToBrowser.canAddToBraveIOS()) {
                            t = "brave_ios"
                        } else {
                            if (m.addToBrowser.canAddToMobileFirefox() && this.isAndroid) {
                                t = "firefox_android"
                            } else {
                                if (m.addToBrowser.canAddToMobileFirefox() && this.isIDevice) {
                                    t = "firefox_ios"
                                } else {
                                    if (this.isFirefoxWithNativeDDG) {
                                        t = "firefox"
                                    } else {
                                        if (s === "Firefox") {
                                            t = "firefox_old"
                                        } else {
                                            if (m.addToBrowser.canAddToChromeAndroid()) {
                                                t = "chrome_android_default"
                                            } else {
                                                if (m.addToBrowser.canAddToBraveAndroid()) {
                                                    t = "chrome_android_default"
                                                } else {
                                                    if (this.isChrome && this.isAndroid) {
                                                        t = "chrome_android"
                                                    } else {
                                                        if (s === "Chrome") {
                                                            t = "chrome"
                                                        } else {
                                                            if (s === "Maxthon" && !this.isOSX) {
                                                                t = "maxthon"
                                                            } else {
                                                                if (this.isSafariWithNativeDDG) {
                                                                    t = "safari"
                                                                } else {
                                                                    if (this.isIOS8p && this.isSafari) {
                                                                        t = "ios8"
                                                                    } else {
                                                                        if (s === "Safari" && window.postMessage && this.isOSX) {
                                                                            t = "safari_old"
                                                                        } else {
                                                                            if (s === "Safari" && window.postMessage) {
                                                                                t = "safari_windows"
                                                                            } else {
                                                                                if (s === "Opera") {
                                                                                    t = "opera"
                                                                                } else {
                                                                                    if (s === "Vivaldi") {
                                                                                        t = "vivaldi"
                                                                                    } else {
                                                                                        if (s === "Edge") {
                                                                                            t = "edge"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (s === "IE") {
                u = "ie"
            } else {
                if (s.match(/^Firefox|PaleMoon|SeaMonkey$/)) {
                    u = "firefox"
                } else {
                    if (s === "Maxthon") {
                        u = "maxthon"
                    } else {
                        if (s === "Chrome") {
                            u = "chrome"
                        } else {
                            if (s === "Safari") {
                                u = "safari"
                            } else {
                                if (s === "Opera") {
                                    u = "opera"
                                } else {
                                    if (s === "Vivaldi") {
                                        u = "vivaldi"
                                    } else {
                                        if (s === "Edge") {
                                            u = "edge"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return this._addToBrowserDirections = {
                useForSearch: t && ("use_for_search_" + t),
                setAsHomepage: u && ("set_as_homepage_" + u)
            }
        },
        DDGisBrowserDefault: function() {
            return this.ua.match(/palemoon|porteus|qupzilla|lxle/gi)
        },
        isTeapot: function() {
            return this.width >= a && this.height <= h
        },
        isMobileLandscape: function() {
            return this.isMobile && (this.height <= r || this.height <= q && this.width >= e)
        },
        isMobilePortrait: function() {
            return this.isMobile && !this.isMobileLandscape()
        },
        widthBreakpoint: function() {
            var s = i.length;
            while (--s) {
                var t = i[s];
                if (this.width < t.width) {
                    return t.id
                }
            }
            return i[0].id
        },
        gutterSize: function() {
            return f[this.widthBreakpoint()]
        },
        isPrv: function() {
            var u = "prv",
                t = w.sessionStorage;
            try {
                t.setItem(u, "1");
                t.removeItem(u)
            } catch (s) {
                if (s.code === DOMException.QUOTA_EXCEEDED_ERR && t.length === 0) {
                    return true
                }
            }
            return false
        },
        getCountry: function(s) {
            if (this.countryCode) {
                return s && s(null, this.countryCode)
            }
            $.ajax({
                url: "/country.json",
                success: function(t) {
                    this.countryCode = t && t.country;
                    return s && s(null, this.countryCode)
                }.bind(this),
                error: function(t) {
                    return s && s(t)
                }
            })
        },
        _updateScreenSize: function() {
            var s, t, u = document.documentElement;
            s = Math.max(u.clientWidth, window.innerWidth || 0);
            t = Math.max(u.clientHeight, window.innerHeight || 0);
            if (s !== this.width || t !== this.height) {
                this.width = viewport_width = s;
                this.height = viewport_height = t;
                return true
            }
            return false
        },
        _updateIsMobileDevice: function() {
            var s = /mobile/.test(this.ua) ? 1 : 0;
            if (this.isOperaMobile || this.isOperaMini || this.isIDevice || this.isAndroid || this.isSilk || (this.width < 600 && this.height < 400)) {
                s = 1
            }
            this.isMobileDevice = is_mobile_device = s
        },
        _isSafariWithNativeDDG: function() {
            if (this.browserName !== "Safari" || this.isMobileDevice) {
                return false
            }
            var s = new RegExp("version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*safari/").exec(this.ua);
            if (!s || !s.length) {
                return false
            }
            s.shift();
            s = s.map(function(t) {
                return t || 0
            }).join("");
            return s && s > 706
        },
        _isFirefoxWithNativeDDG: function() {
            if (this.browserName !== "Firefox") {
                return false
            }
            return navigator.buildID && parseInt(navigator.buildID, 10) >= 20141028112145
        },
        _getPixelBrowserVersion: function() {
            var s = 0;
            if (this.isChrome) {
                s = this.chromeVersion
            } else {
                if (this.isFirefox) {
                    s = this.firefoxVersion
                } else {
                    if (this.isSafari) {
                        s = this.safariVersion
                    } else {
                        if (this.operaVersion !== -1) {
                            s = this.operaVersion
                        } else {
                            if (this.isIE11p) {
                                s = 11
                            } else {
                                if (this.isIE10p) {
                                    s = 10
                                } else {
                                    if (this.isIE9) {
                                        s = 9
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return s
        },
        _getPixelPlatformName: function() {
            var s = "other";
            if (this.isAndroid && (this.chromeVersion < 57 || this.isBrave || this.isFirefoxFocus)) {
                s = "android"
            } else {
                if (this.isAndroid) {
                    s = "androidwos"
                } else {
                    if (this.isIPod) {
                        s = "ipod"
                    } else {
                        if (this.isIPad) {
                            s = "ipad"
                        } else {
                            if (this.isIPhone) {
                                s = "iphone"
                            } else {
                                if (this.isWindowsPhone) {
                                    s = "winphone"
                                } else {
                                    if (this.isWindows) {
                                        s = "windows"
                                    } else {
                                        if (this.isLinux) {
                                            s = "linux"
                                        } else {
                                            if (this.isBlackberry) {
                                                s = "blackberry"
                                            } else {
                                                if (this.isOSX) {
                                                    s = "mac"
                                                } else {
                                                    if (this.browserName === "DDG iOS") {
                                                        s = "ios"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return s
        },
        _hasInstallationInstructions: function() {
            if (this.isSilk) {
                return false
            }
            var s = true;
            if (this.isMobileDevice || this.isMobile) {
                s = m.addToBrowser.canAddToMobileBrowser() || this.isAndroidChromeNoOpenSearch
            }
            return s
        },
        _onResize: function(s) {
            if (this._updateScreenSize()) {
                s.isRotation = this.isMobileDevice && this._wasPortrait != this.isMobilePortrait();
                this._wasPortrait = this.isMobilePortrait();
                this.emit("resize", s)
            }
        },
        _onScroll: function(s) {
            delete this._scrollTop;
            this.emit("scroll", s)
        },
        _onVisibilityChange: function(s) {
            this.emit("visibilitychange", d[this._visibilityState])
        }
    });

    function k() {
        var s;
        try {
            s = !!new ActiveXObject("htmlfile")
        } catch (t) {}
        return s
    }
}(DDG);
! function(c) {
    var a = c.Models.Base,
        e = 500,
        b = {
            13: "enter",
            27: "escape",
            32: "space",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            16: "shift",
            17: "ctrl",
            18: "alt",
            91: "cmd",
            74: "k",
            75: "j"
        };
    c.Models.Keyboard = function(f) {
        a.call(this, f);
        if (!c.device.isMobileDevice) {
            $(document).on("keydown", this._onKeydown.bind(this))
        }
    };
    c.Models.Keyboard.prototype = $.extend({}, a.prototype, {
        namespaced: function(f) {
            if (!f) {
                return !!this.namespace
            }
            return this.namespace && this.namespace.match(f)
        },
        focusedOnInput: function() {
            var f = document.activeElement;
            return f && (f.nodeName === "INPUT" || f.nodeName === "TEXTAREA")
        },
        keyCodeIsOneOf: function(h, g) {
            var f = b[h];
            return (f && g.indexOf(f) > -1)
        },
        _onKeydown: function(h) {
            var g = h.keyCode;
            clearTimeout(this._activeTimeout);
            this.set("active", 1);
            if (!fq && (!kk || kk == "1") && !h.ctrlKey && !h.metaKey && !this.focusedOnInput() && c.duckbar && c.duckbar.areOrganicsShowing()) {
                if (this.enableSERPShortcuts) {
                    this._onSERPKeydown(h)
                }
                if (g == 13) {
                    nke()
                }
                if (g == 84) {
                    nkt()
                }
            }
            var f = b[g];
            if (f && !h.altKey && !h.shiftKey) {
                if (this.namespace) {
                    this.emit(f + "." + this.namespace, h)
                }
                this.emit(f, h)
            }
            this._activeTimeout = setTimeout(function() {
                clearTimeout(this._activeTimeout);
                this.set("active")
            }.bind(this), e)
        },
        _onSERPKeydown: function(g) {
            var f = g.keyCode;
            if (f == 40 || f == 74) {
                if (this.nativeUpDown) {
                    return
                }
                g.preventDefault();
                nkda()
            }
            if (f == 38 || f == 75) {
                if (this.nativeUpDown) {
                    return
                }
                g.preventDefault();
                nkua()
            }
            if (!c.device.isFirefox) {
                if (g.shiftKey === true && f == 191) {
                    nks()
                }
                if (f == 191) {
                    nks()
                }
            }
            if (f == 79 || f == 76) {
                nko()
            }
            if (f == 222 || f == 86) {
                nkn()
            }
            if (f == 111 || f == 72) {
                nks()
            }
            if (f == 32) {
                nksb()
            }
            if (f == 77) {
                nkm()
            }
            if (f == 68) {
                nkd(g)
            }
        }
    })
}(DDG);
! function(c) {
    var b = c.Models,
        a = b.Base;
    b.SelectList = function(e) {
        a.call(this, e);
        this.select(e.selectedId || this.values[0].id)
    };
    b.SelectList.prototype = $.extend({}, a.prototype, {
        select: function(e) {
            var f;
            this.values.forEach(function(g) {
                if (g.id === e) {
                    g.selected = true;
                    f = g
                } else {
                    g.selected = false
                }
            });
            if (!f) {
                this.select(this.values[0].id)
            } else {
                this.set("selected", f)
            }
        }
    })
}(DDG);
! function(c) {
    var b = c.Models,
        a = b.Base;
    b.Deep = function(e) {
        this.hideRelated = window.iqa;
        this.results = {};
        this.resultDomains = {}
    };
    b.Deep.prototype = $.extend({}, a.prototype, {
        isLastResult: false,
        isOutOfResults: false,
        pageNumber: 1,
        started: 0,
        finished: 0,
        _currentPageItems: {
            a: [],
            d: []
        },
        timeSinceStarted: function() {
            return this.started ? new Date().getTime() - this.started : 0
        },
        timeSinceFinished: function() {
            return this.finished ? new Date().getTime() - this.finished : 0
        },
        getResultCount: function() {
            return r1c
        },
        getNewsItems: function(f) {
            if (!this.results.d || !this.results.d.length) {
                return
            }
            var e = [];
            for (var h = 0; h < this.results.d.length; h++) {
                var j = this.results.d[h],
                    g = j.da && j.da.split(",");
                if (g && g.indexOf("news") > -1) {
                    var k = j.d.split("/")[0];
                    e.push({
                        title: j.t,
                        excerpt: j.a,
                        url: j.u,
                        source: k,
                        fetch_image: c.Data.NewsImageDomains.indexOf(k) > -1,
                        rank: h
                    })
                }
            }
            if (f && e.length === 1 && e[0].rank < 5) {
                return []
            }
            return e
        },
        addResults: function(f, e) {
            if (!this.results[f]) {
                this.results[f] = e
            } else {
                this.results[f] = this.results[f].concat(e)
            }
            this._emitChange("results")
        },
        nrnWrapper: function(f, e) {
            this._currentPageItems[f] = e;
            DDG.deep.addResults(f, e);
            if (f === "a" && !c.page.ads.isBlocked()) {
                this._sendAdImpressions(e)
            }
            if (c.page.ads.pendingAds) {
                nrn(f, e, true, f === "d");
                return
            }
            if (this._currentPageItems.a.length && this._currentPageItems.d.length) {
                this._splitNrnResults()
            } else {
                if (f === "d") {
                    nrn(f, e, true, true);
                    this._currentPageItemsReset()
                }
            }
        },
        pageNumberIncrement: function() {
            return ++this.pageNumber
        },
        pageNumberDecrement: function() {
            return --this.pageNumber
        },
        _currentPageItemsReset: function() {
            this._currentPageItems.a = [];
            this._currentPageItems.d = []
        },
        _sendAdImpressions: function(i) {
            var j = {};
            j.n = i.length;
            var n = false;
            i.forEach(function(o) {
                o.adn = i.length;
                if (o.l && o.l.indexOf("sponsored__sitelink-description") > -1) {
                    n = true
                }
                if (this.pageNumber === 1) {
                    o.adf = 1
                }
            }.bind(this));
            j.sld = n ? 1 : 0;
            var f = i[0].d;
            f = f.split("/");
            f = f.shift();
            if (f) {
                j.d = f
            }
            var e, g, m, k;
            for (e = 0; e < i.length; e++) {
                g = i[e].relevancy;
                if (g) {
                    for (m in g) {
                        k = m + "_" + e;
                        j[k] = g[m]
                    }
                }
            }
            var h = DDG.page.ads.adx;
            if (h && h !== "ctl") {
                j.adx = h
            }
            if (w.sourceTag) {
                j.st = w.sourceTag
            }
            DDG.pixel.fire("ad", i[0].s || "default", j)
        },
        _splitNrnResults: function() {
            var g = true,
                e = false,
                f = c.device.isMobile ? 1 : 2;
            if (this._currentPageItems.a.length > f) {
                nrn("a", this._currentPageItems.a.slice(0, f), g);
                nrn("d", this._currentPageItems.d.slice(0, 15), g, e);
                this.pageNumber++;
                this.emit("add-separator");
                nrn("a", this._currentPageItems.a.slice(f, this._currentPageItems.a.length), g);
                e = true;
                nrn("d", this._currentPageItems.d.slice(15, this._currentPageItems.d.length), g, e)
            } else {
                if (this._currentPageItems.a.length) {
                    nrn("a", this._currentPageItems.a, g, e);
                    e = true;
                    nrn("d", this._currentPageItems.d, g, e)
                }
            }
            this._currentPageItemsReset()
        }
    });
    c.deep = new b.Deep()
}(DDG);
! function(c) {
    var b = c.Models,
        a = b.Base,
        e = [{
            name: l("Any Time"),
            id: ""
        }, {
            name: l("Past Day"),
            id: "d"
        }, {
            name: l("Past Week"),
            id: "w"
        }, {
            name: l("Past Month"),
            id: "m"
        }];
    b.Search = function(f) {
        this.dateFilterId = window[c.Data.HiddenFields.DATE_FILTER];
        this.deepAnswerIAs = {};
        this.isAdultQuery = window.iqa;
        this.isMinusQuery = window.iqm;
        this.isQuoteQuery = window.iqq;
        this.isDomainQuery = window.iqd;
        this.isSiteQuery = window.rq && window.rq.indexOf("site%3A") !== -1;
        a.call(this, f);
        this.on("change:dateFilterId", this._setDateFilter.bind(this));
        this._setDateFilter()
    };
    b.Search.prototype = $.extend({}, a.prototype, {
        _dateFilters: e,
        requery: function() {
            this.emit("requery")
        },
        addBangToSiteInQuery: function(f, g) {
            return g.replace(new RegExp("(^|\\s)(" + f + ")($|\\s)", "i"), "$1!$2$3")
        },
        isLatLonQuery: function() {
            return !!c.get_query().match(/latitude|longitude/gi)
        },
        getDateFilterName: function() {
            return this._dateFilterName
        },
        _setDateFilter: function() {
            this._dateFilters.forEach(function(f) {
                if (f.id === this.dateFilterId) {
                    f.selected = 1;
                    this._dateFilterName = f.name
                } else {
                    f.selected = 0
                }
            }.bind(this))
        },
        getDateFilters: function() {
            return this._dateFilters
        },
        getSiteQuery: function(p) {
            if (!p) {
                return false
            }
            p = decodeURIComponentSafe(p);
            p = c.strip_html(p);
            var g, f, s = false,
                m, r = [],
                n, q = p,
                o = [];
            m = p.match(/((NOT )?SITE:)([^\s]+)/);
            if (m) {
                s = !!m[2];
                o = m[3].split(",");
                q = p.substring(0, m.index - 1);
                for (var k = 0; k < o.length; k++) {
                    if (!o[k]) {
                        continue
                    }
                    g = [];
                    for (var h = 0; h < o.length; h++) {
                        if (h !== k) {
                            g.push(o[h])
                        }
                    }
                    n = (s) ? " NOT SITE:" : " SITE:";
                    f = (g.length) ? n + g.join(",") : "";
                    r.push({
                        site: o[k],
                        clearQuery: encodeURIComponent(q + f)
                    })
                }
            }
            if (!this.isYhsSource() && s && (r.length > 1 || rqd.toLowerCase().indexOf("not site:") !== -1)) {
                r = []
            }
            return {
                str: p,
                query: q,
                sites: r,
                isExcluding: s
            }
        },
        isYhsSource: function() {
            return this.src === "yhs"
        },
        isQuotedQuery: function() {
            return c.get_query().match(/(\'.+\')|(\".+\")/)
        }
    });
    c.search = new b.Search()
}(DDG);
! function(b) {
    var a = b.Models.Base;
    b.Models.Search.Spelling = function(c) {
        a.call(this, c);
        this.type = this.type.toLowerCase();
        this.query = decodeURIComponentSafe(c.link);
        this.recourseQuery = decodeURIComponentSafe(c.recourseLink)
    };
    b.Models.Search.Spelling.prototype = $.extend({}, a.prototype, {
        isValidType: function() {
            return (this.type && this.type.match(/irf|dym|nmrc/))
        },
        makeSpellingURL: function(f, e, c) {
            if (c) {
                f += "&iar=" + c + "&ia=" + c
            }
            return "/?q=" + f + (e ? "&norw=1" : "") + (w.rv ? "&v=" + w.rv : "") + (w.kurl ? w.kurl : "")
        }
    })
}(DDG);
var d = document;
var w = window;
var cd, dz, da, fk, fb, fs, fm, fe, fl, fo, fa, fn, fq, fz, ie, io, ir, is, ga, gd, rc, rd, rs, rsd, rdc, rsc, rtc, rii, rin, rir, rl, rp, reb, rebc, sx, sy, tl, tlz, tac, tr, ts, tn, tsl, tz, nir, kurl, is_mobile, dow, iosx, slo;
fb = irl = il = dz = da = dam = daiq = daia = fz = tl = tlz = sx = sy = fl = fo = fa = fn = rdc = rtc = rsc = rii = rin = rebc = tsl = tac = tn = tz = fe = fmx = fmy = ieof = iad = iad2 = iad3 = iadt = 0;
kurl = "";
rpc = fk = fs = 1;
slo = 0;
tr = new Array();
ts = new Array();
rsd = new Array();
reb = new Array();
DDG.device = new DDG.Models.Device({
    ua: navigator.userAgent.toLowerCase(),
    dpr: window.devicePixelRatio
});
! function(c) {
    var b = c.Models,
        a = b.Base;
    b.Hidden = function(f) {
        a.call(this, f);
        this._vals = {};
        for (var g in c.Data.HiddenFields) {
            var e = c.Data.HiddenFields[g];
            if (window[e]) {
                this.set(e, window[e])
            }
        }
    };
    b.Hidden.prototype = $.extend({}, a.prototype, {
        set: function(e, f) {
            this._vals[e] = f;
            this.emit("change")
        },
        get: function(e) {
            return this._vals[e]
        },
        clear: function(e) {
            delete this._vals[e];
            this.emit("change")
        },
        toJSON: function() {
            return $.extend({}, this._vals)
        }
    });
    c.hidden = new b.Hidden()
}(DDG);
! function(c) {
    var a = c.Models.Base,
        b = {
            Firefox: {
                canInstall: function() {
                    return !this.device.isMobileDevice && this.device.isFirefox38AndUp
                },
                url: "https://addons.mozilla.org/firefox/downloads/file/637639/duckduckgo_plus-1.1.4-fx.xpi?src=devhub",
                url2: "https://addons.mozilla.org/firefox/downloads/file/742979/duckduckgo_plus-1.1.26-fx.xpi",
                url3: "https://addons.mozilla.org/firefox/downloads/latest/duckduckgo-for-firefox/addon-385621-latest.xpi",
                watchCSSForSuccess: true
            },
            Chrome: {
                canInstall: function() {
                    return !this.device.isMobileDevice && this.device.isChrome && ((this.device.isWindows && this.device.chromeVersion >= 36) || (this.device.isOSX && this.device.chromeVersion >= 56))
                },
                url: "https://chrome.google.com/webstore/detail/bkdgflcldnnnapblkhphbgpggdiikppg"
            },
            Safari: {
                canInstall: function() {
                    return !this.device.isMobileDevice && this.device.isSafari && this.device.safariVersion >= 5.1 && this.device.isOSX
                },
                url: "/extensions/duckduckgo.safariextz",
                watchCSSForSuccess: true
            }
        };
    c.Models.Extension = function(e) {
        a.call(this, e);
        this.device = e && e.device || c.device;
        $.extend(this, b[this.device.browserName] || {})
    };
    c.Models.Extension.prototype = $.extend({}, a.prototype, {
        canInstall: function() {
            return false
        },
        isInstalled: function(f) {
            if (typeof this._isInstalled !== "undefined" && !(f && f.nocache)) {
                return this._isInstalled
            }
            var e = $('<div class="ddg-extension-check ddg-extension-hide"></div>');
            $("body").append(e);
            this._isInstalled = e.is(":hidden");
            e.remove();
            return this._isInstalled
        }
    });
    c.extension = new c.Models.Extension()
}(DDG);
! function(e) {
    var b = e.Models.Base,
        a = 980,
        c = {
            ctl: {
                rightRailSecond: true
            },
            def: {
                rightRailSecond: true
            },
            tasb: {
                siteLinksBothAds: true
            },
            tas1: {
                siteLinksFirstAdOnly: true
            },
            tas2: {
                siteLinksSecondAdOnly: true
            },
            oag: {
                rightRailSecond: true,
                siteLinksFirstAdOnly: true
            },
            rel2: {
                rightRailBoth: true
            },
            none: {
                rightRailSecond: false,
                rightRailBoth: false,
                smallFirst: false,
                smallSecond: false,
                siteLinksFirstAdOnly: false,
                siteLinksSecondAdOnly: false,
                siteLinksBothAds: false
            }
        };
    e.Models.Ads = function(f) {
        b.call(this, f);
        this.ads = [];
        this.defaultAds = [];
        this.setBucket("def");
        this.on("change:ads", this._updateLayout.bind(this))
    };
    e.Models.Ads.prototype = $.extend({}, b.prototype, {
        block: function() {
            this.set("blocked", 1)
        },
        isBlocked: function() {
            return !!(this.blocked || !DDG.settings.isDefault("k1"))
        },
        getAds: function() {
            return this.ads.length ? this.ads : this.defaultAds
        },
        hasAds: function() {
            var f = this.getAds();
            return !!(f.length || this.pendingAds)
        },
        hasSiteLinks: function(g) {
            g = g || this.getAds();
            var h = g.length && g[0].n >= 2 ? 1 : 0,
                f = this.pendingAds && this.pendingAdsHaveSitelinks;
            return !!(h || f)
        },
        getNumberOfTopAds: function() {
            return this.numTopAds
        },
        setPendingAds: function(f) {
            if (this.isBlocked()) {
                return
            }
            this.set({
                pendingAds: 1,
                pendingAdsHaveSitelinks: f
            })
        },
        setDefaultAds: function(f) {
            if (this.isBlocked() || this.ads.length || !f || !f.length || this.rightRailBoth) {
                return
            }
            this.set("defaultAds", f.map(function(h) {
                var g = this._makeAffiliateAd(h);
                return {
                    a: h.a.substring(0, 75) + (h.a.length > 75 ? "..." : ""),
                    d: h.d,
                    m: 0,
                    s: g.s,
                    p: 1,
                    c: g.c,
                    u: g.u,
                    h: 0,
                    k: 0,
                    i: h.i,
                    t: h.t.substring(0, 60) + (h.t.length > 60 ? "..." : ""),
                    "IE fix": 1
                }
            }.bind(this)))
        },
        setAds: function(f) {
            if (this.isBlocked() || !f || !f.length) {
                return
            }
            this.set("ads", f)
        },
        load: function(g) {
            if (this.loaded || this.isBlocked()) {
                return
            }
            nrj(g);
            var f = "/y.js?x=1&q=" + rq + "&l=" + rl;
            f += ra ? "&a=" + ra : "";
            f += "&safe=" + (e.settings.safeSearch.isStrict() ? 1 : -1);
            nrj(f);
            this.set("loaded", 1)
        },
        hasGoodAds: function() {
            return (this.adx === "tas" || this.adx === "tasb" || this.adx === "tas1" || this.adx === "tas2" || this.adx === "oag")
        },
        canShowGoodAdsLayout: function() {
            return (!e.device.isMobile && this.hasGoodAds() && (e.deep.pageNumber === 1))
        },
        setBucket: function(g, f) {
            if (this._firstBatchShown) {
                return
            }
            if (e.device.isMobile) {
                g = "none"
            }
            if (c[g]) {
                this.adx = g
            }
            var h = e.backData.getData();
            this.adxExperiment = h.adx_name || f || "none"
        },
        _updateLayout: function() {
            var f = this.ads.length;
            $.extend(this, c.none);
            if (this.adx !== "none") {
                $.extend(this, c[this.adx])
            }
            if (f < 2) {
                this.rightRailSecond = false
            }
            if (this.rightRailSecond) {
                this.smallSecond = true
            } else {
                if (this.rightRailBoth) {
                    this.smallFirst = true;
                    this.smallSecond = true
                }
            }
            if (!this.canShowRightRailAds()) {
                this.rightRailBoth = false;
                this.rightRailSecond = false
            }
        },
        setFirstBatchShown: function() {
            if (this._firstBatchShown) {
                return
            }
            this._firstBatchShown = true;
            var f = 2;
            if (this.rightRailSecond) {
                f = 1
            } else {
                if (this.rightRailBoth) {
                    f = 0
                }
            }
            this.numTopAds = Math.min(this.getAds().length, f);
            this.smallFirst = false;
            this.smallSecond = false;
            this.rightRailSecond = false;
            this.rightRailBoth = false
        },
        canShowRightRailAds: function() {
            var f = a;
            if (!e.settings.isDefault("km") || !e.settings.isDefault("kw")) {
                return false
            }
            return e.device.width >= f
        },
        hasRightRailAds: function() {
            if (!this.canShowRightRailAds()) {
                return false
            }
            var f = this.getAds().length;
            if (f && (f > 2 || this.rightRailBoth || this.rightRailSecond || this.rightRailFirst)) {
                return true
            }
            return false
        },
        _makeAffiliateAd: function(g) {
            var f = {},
                h = g.k;
            if (h === "skimlinks") {
                f.c = "http://ad.ddg.gg/?id=40063X1035282&xs=1&url=" + encodeURIComponent(g.c) + "&sref=" + encodeURIComponent("https://duckduckgo.com");
                f.u = "http://ad.ddg.gg/?id=40063X1035282&xs=1&url=" + encodeURIComponent(g.u) + "&sref=" + encodeURIComponent("https://duckduckgo.com")
            } else {
                f.c = "/y.js?u2=" + encodeURIComponent(g.c) + (w.ra ? "&a=" + w.ra : "");
                f.u = "/y.js?u2=" + encodeURIComponent(g.u) + (w.ra ? "&a=" + w.ra : "")
            }
            f.s = h;
            return f
        }
    })
}(DDG);
! function(e) {
    var i = e.Data.Settings.regions,
        h = "kl",
        f = "kah",
        c = "wt-wt",
        j = 3,
        a = e.Models.Base,
        n;
    n = e.Models.Settings.Region = function(o) {
        this.settings = o.settings;
        this.prevRegions = [];
        o.id = o.id || this.settings.get(h);
        o.prevId = o.prevId || this.settings.get(f);
        a.call(this, o);
        this.settings.on("change:" + h, this.setId.bind(this));
        this.settings.on("change:" + f, this.setPrevId.bind(this))
    };
    n.prototype = $.extend({}, a.prototype, {
        getId: function() {
            return (window.rlo && window.rl) || this.id || this.getDefaultId()
        },
        getPrevId: function() {
            return (this.id === this.prevId || this.prevId === this.getDefaultId()) ? null : this.prevId
        },
        getPrevRegions: function() {
            return this.prevRegions
        },
        getDefaultId: function() {
            return c
        },
        hasRegion: function() {
            return this.getId() && this.getId() !== this.getDefaultId()
        },
        hasPrevRegion: function() {
            return this.getPrevId() && this.getPrevId() !== this.getDefaultId()
        },
        hasRegionOrSuggested: function() {
            return this.hasRegion() || this.hasPrevRegion() || this.suggestedRegion
        },
        hasUSRegion: function() {
            return this.getId() && this.getId() !== this.getDefaultId() && this.getId().split("-")[0] === "us"
        },
        isValidRegion: function(o) {
            return !!i[o]
        },
        setId: function(s, q, p) {
            if (s === this.id || !this.isValidRegion(s)) {
                return p && p()
            }
            var o = this,
                r;
            this.id = s;
            if (s !== c) {
                r = this.prevRegions.indexOf(s);
                if (r !== -1) {
                    this.prevRegions.splice(r, 1)
                }
                this.prevRegions.unshift(s);
                this._trimPrevRegions()
            }
            if (q && q.saveToSettings) {
                if (!q.dontSavePrev) {
                    this.settings.set(f, this.prevRegions.join(","))
                }
                this.settings.set(h, s, {
                    saveToCloud: true,
                    updateURLParams: true,
                    fallbackToURLParam: q.fallbackToURLParam
                }, function() {
                    o.emit("change:id", o.id);
                    p && p()
                })
            } else {
                this.emit("change:id", this.id);
                p && p()
            }
        },
        setPrevId: function(o) {
            if (o) {
                this.prevRegions = o.split(",")
            } else {
                this.prevRegions = []
            }
            this._trimPrevRegions();
            this.prevId = this.prevRegions[0]
        },
        setDefault: function() {
            this.setId(this.getDefaultId(), {
                saveToSettings: true
            })
        },
        reset: function(o) {
            this.prevId = null;
            this.settings.clear(f);
            this.setId(this.getDefaultId(), {
                saveToSettings: true,
                dontSavePrev: true
            }, o)
        },
        disableSuggested: function(o) {
            this.setPrevId(this.getDefaultId());
            this.set({
                suggestedRegion: null
            });
            this.settings.set(f, this.prevId, {
                saveToCloud: true
            }, o)
        },
        disabledSuggested: function() {
            return this.prevId && this.prevId === this.getDefaultId()
        },
        getName: function(o) {
            o = o || this.getId();
            return l(i[o] || i[this.getDefaultId()])
        },
        getSmallIconURL: function(o) {
            return k(o || this.getId())
        },
        getXSmallIconURL: function(o) {
            return b(o || this.getId())
        },
        getLargeIconURL: function(o) {
            return g(o || this.getId())
        },
        getAll: function() {
            var u = [],
                s, p = this.getId(),
                o = function(y, v, x) {
                    return {
                        id: y,
                        name: l(v),
                        countryCode: m(y),
                        selected: x
                    }
                };
            var r = this.getPrevRegions();
            if (this.suggestedRegion && r.indexOf(this.suggestedRegion) === -1) {
                r.push(this.suggestedRegion)
            }
            for (var t in i) {
                if (t !== c && r.indexOf(t) === -1) {
                    u.push(o(t, i[t], p === t))
                }
            }
            u.unshift(o(c, i[c], p === c));
            if (r.length && !(r.length === 1 && r[0] === c)) {
                u[0].showDivider = true
            }
            for (var q = r.length - 1; q >= 0; q--) {
                s = o(r[q], i[r[q]], p === r[q]);
                if (r[q] !== c && s.name) {
                    u.unshift(s)
                }
            }
            return u
        },
        fetchSuggested: function(o) {
            e.device.getCountry(this._onFetchedSuggested.bind(this, o))
        },
        _onFetchedSuggested: function(y, r, q) {
            if (!q) {
                return y && y()
            }
            var u = q.toLowerCase(),
                t = [],
                x = function(A) {
                    this.set({
                        suggestedRegion: A
                    });
                    y && y(null, A)
                }.bind(this);
            if (u === "us") {
                return y && y()
            }
            if (u === "gb") {
                u = "uk"
            }
            for (var z in i) {
                var o = z.split("-")[0];
                if (o === u) {
                    t.push(z)
                }
            }
            if (!t.length) {
                return y && y()
            }
            if (t.length === 1 || !window.locale) {
                return x(t[0])
            }
            var p = window.locale.split("_")[0];
            for (var s = 0; s < t.length; s++) {
                var v = t[s].split("-")[1];
                if (p === v) {
                    return x(t[s])
                }
            }
            return x(t[0])
        },
        _trimPrevRegions: function() {
            var o = j;
            if (this.suggestedRegion) {
                o -= 1
            }
            if (this.prevRegions.length > o) {
                this.prevRegions = this.prevRegions.slice(0, o)
            }
        }
    });
    var m = function(o) {
            return o.split("-")[0]
        },
        k = function(o) {
            return "/assets/flags/" + (DDG.is3x ? "60" : DDG.is2x ? "40" : "20") + "/" + m(o) + ".png?v=4"
        },
        b = function(o) {
            return "/assets/flags/" + (DDG.is3x ? "48" : DDG.is2x ? "32" : "16") + "/" + m(o) + ".png?v=3"
        },
        g = function(o) {
            return "/assets/flags/" + (DDG.is3x ? "96" : DDG.is2x ? "64" : "32") + "/" + m(o) + ".png?v=4"
        }
}(DDG);
! function(b) {
    var a = "kae",
        c = b.Data.Settings[a];
    b.Models.Settings.Themes = {
        KEY: a,
        getAll: function() {
            return DDG.objectToArray(c.values)
        },
        getFeaturedThemes: function() {
            return c.featured.map(function(e) {
                return c.values[e]
            })
        },
        getSettingsForTheme: function(i) {
            var h = c.values[i],
                e = c.values[c["default"]].settings;
            if (h) {
                return $.extend({}, e, h.settings)
            }
            var f = tinycolor(i);
            if (f.isValid()) {
                var g = f.toHexString();
                return $.extend({}, e, {
                    kj: g,
                    k7: g
                })
            }
            return $.extend({}, e)
        }
    }
}(DDG);
! function(h) {
    var b = "/settings.js",
        g = "application/json",
        j = "Error ",
        f = " CloudSave Settings",
        e = j + "Loading" + f,
        c = j + "Saving" + f,
        i = j + "Deleting" + f,
        a = {
            url: b,
            type: "POST",
            dataType: "json",
            contentType: g,
            processData: false
        };
    h.Models.Settings.CloudSave = {
        keyField: "objectKey",
        isKeyField: function(k) {
            return k === this.keyField || k === "key"
        },
        load: function(k, m) {
            if (!k) {
                return m(e)
            }
            $.ajax({
                url: b + "?key=" + k,
                dataType: "json",
                success: function(n) {
                    m(null, n)
                },
                error: function() {
                    m(e)
                }
            })
        },
        save: function(k, n, m) {
            if (!k || !n) {
                return m && m(c)
            }
            $.ajax($.extend({
                data: JSON.stringify({
                    command: "write",
                    objectKey: k,
                    obj: n
                }),
                success: function() {
                    m && m(null, n)
                },
                error: function() {
                    m && m(c)
                }
            }, a))
        },
        destroy: function(k, m) {
            if (!k) {
                return m(i)
            }
            $.ajax($.extend({
                type: "POST",
                data: JSON.stringify({
                    command: "delete",
                    objectKey: k
                }),
                success: function() {
                    m && m(null, true)
                },
                error: function(n) {
                    m && m(i)
                }
            }, a))
        },
        phraseToKey: function(k) {
            var m = new jsSHA(k, "ASCII"),
                n = m.getHash("SHA-512", "HEX");
            return n
        },
        validatePassPhrase: function(k, n) {
            if (!k) {
                return n(lp("cloudsave", "Please enter a pass phrase"))
            }
            if (k.length < 9) {
                return n(lp("cloudsave", "Pass phrase must be at least 9 characters long"))
            }
            var m = this.phraseToKey(k);
            $.ajax({
                url: b + "?key=" + m,
                dataType: "json",
                success: function() {
                    n(lp("cloudsave", "Pass phrase is already taken."))
                },
                error: function() {
                    n(null, true)
                }
            })
        },
        suggestPassPhrase: function(k) {
            $.ajax($.extend({
                type: "POST",
                data: JSON.stringify({
                    command: "passphrase"
                }),
                success: function(m) {
                    k(null, m.passphrase)
                },
                error: function() {
                    k(true)
                }
            }, a))
        }
    }
}(DDG);
! function(g) {
    var b = g.Models.Base,
        f = g.Models.Settings,
        e = "kp",
        a = {
            "1": {
                name: lp("safe search", "Strict"),
                description: lp("safe search", "No adult content")
            },
            "-1": {
                name: lp("safe search", "Moderate"),
                description: lp("safe search", "No explicit images or videos")
            },
            "-2": {
                name: lp("setting", "Off"),
                description: lp("safe search", "Don't filter adult content")
            }
        },
        c = "1";
    f.SafeSearch = function(h) {
        b.call(this, h);
        this.settings.on("change:" + e, this._onSettingChange.bind(this))
    };
    f.SafeSearch.prototype = $.extend({}, b.prototype, {
        getId: function() {
            return this.id || c
        },
        getAll: function() {
            var h = [],
                j;
            for (var i in a) {
                j = {
                    id: i,
                    name: a[i].name,
                    description: a[i].description
                };
                j.selected = j.id === this.getId();
                h.push(j)
            }
            return h
        },
        isActive: function() {
            return this.getId() !== c
        },
        getName: function() {
            return a[this.getId()].name
        },
        isStrict: function() {
            return this.getId() === "1"
        },
        isModerate: function() {
            return this.getId() === "-1"
        },
        isOff: function() {
            return this.getId() === "-2"
        },
        setId: function(j, i) {
            var h = {
                saveToCloud: true,
                updateURLParams: true,
                fallbackToURLParam: true
            };
            this.settings.set(e, j, h, i)
        },
        setTemporaryId: function(i, h) {
            g.hidden.set(e, i);
            h && h()
        },
        _onSettingChange: function() {
            var h = this.settings.get(e);
            this.set("id", h)
        }
    })
}(DDG);
! function(j, p) {
    var k = "January 12, 2025",
        c = "abcdefghijklmnopqrstuvwxyz",
        o = p.location.protocol + "//" + p.location.host + "/",
        i = /<|>|\//g,
        m = j.Data.Settings,
        q = j.Models.Settings.CloudSave,
        s = j.Models.Settings.Themes,
        e = j.Models.Base,
        b;
    b = j.Models.Settings.Settings = function(t) {
        t = t || {};
        if (t.cloudSaveKey) {
            this.setCloudSaveKey(t.cloudSaveKey)
        }
        this._settings = {};
        this._savedSettings = {};
        this._urlSettings = {};
        this.region = new j.Models.Settings.Region({
            settings: this
        });
        this.safeSearch = new j.Models.Settings.SafeSearch({
            settings: this
        });
        this.cloudsave = q;
        this.themes = s;
        this._updateDeviceDependentSettings();
        this._setFromURLParams();
        this._setFromQuerystring();
        this._backfillGlobals();
        this._setFromCookie()
    };
    b.prototype = $.extend({}, e.prototype, {
        THEME_KEY: s.KEY,
        AUTOCOMPLETE_KEY: "kac",
        LANGUAGE_KEY: "kad",
        POST_KEY: "kg",
        MOBILE_INSTRUCTIONS_KEY: "kas",
        get: function(t) {
            var u = this._settings[t] || this.getDefault(t);
            u = g(t, u);
            return u
        },
        getDefault: function(t) {
            var u = m[t];
            return u && u["default"]
        },
        isDefault: function(t) {
            return this.get(t) === this.getDefault(t)
        },
        getData: function(v) {
            var x = $.extend({}, m[v]);
            x.id = v;
            if (typeof x.values === "string") {
                x.values = $.extend({}, m[x.values])
            }
            if (x.values && x.order) {
                var y, t = {};
                for (var u = 0; u < x.order.length; u++) {
                    y = x.order[u];
                    if (x.values[y]) {
                        t[y] = x.values[y]
                    }
                }
                for (y in x.values) {
                    if (!t[y]) {
                        t[y] = x.values[y]
                    }
                }
                x.values = t
            }
            return x
        },
        set: function(t, x, v, u) {
            v = v || {};
            x = g(t, x);
            if (typeof x === "undefined" || x === "" || x === null || (this.isDefault(this.THEME_KEY) && x === this.getDefault(t))) {
                this.clear(t, v, u);
                if (t === this.THEME_KEY && v.forceTheme) {
                    this._applyTheme(this.getDefault(t), v)
                }
                return u && u()
            }
            this._settings[t] = x;
            p[t] = x;
            if (v.saveToCookie || typeof v.saveToCookie === "undefined") {
                if (typeof x === "string") {
                    x = x.replace("#", "")
                }
                this._savedSettings[t] = x;
                f(r(t), x, v);
                if (v.fallbackToURLParam && !document.cookie) {
                    this._urlSettings[t] = x
                }
            }
            if (v.updateURLParams && this._urlSettings[t]) {
                this._urlSettings[t] = x
            }
            if (!v.silent) {
                this.emit("change:" + t, x)
            }
            this.emit("change", t);
            if (t === this.THEME_KEY) {
                this._applyTheme(x, v)
            }
            if (v.saveToCloud && this._cloudSaveKey) {
                this.saveToCloud(u)
            } else {
                u && u()
            }
        },
        setTheme: function(v, u, t) {
            u = u || {};
            u.forceTheme = true;
            this.set(this.THEME_KEY, v, u, t)
        },
        setBulk: function(v, u) {
            if (v[this.THEME_KEY]) {
                this.set(this.THEME_KEY, v[this.THEME_KEY], u)
            }
            for (var t in v) {
                if (t !== this.THEME_KEY) {
                    this.set(t, v[t], u)
                }
            }
        },
        setTParam: function(t) {
            this._urlSettings.t = t;
            this.set("t", t, {
                saveToCookie: false
            })
        },
        clear: function(t, v, u) {
            v = v || {};
            p[t] = "";
            delete this._settings[t];
            delete this._savedSettings[t];
            if (v.saveToCookie || typeof v.saveToCookie === "undefined") {
                f(r(t), "", {
                    expires: new Date()
                })
            }
            if (v.updateURLParams) {
                delete this._urlSettings[t]
            }
            if (v.saveToCloud) {
                this.saveToCloud(u)
            }
            if (!v.silent) {
                this.emit("change:" + t)
            }
            this.emit("change", t)
        },
        clearAll: function() {
            for (var t in this._settings) {
                this.clear(t)
            }
        },
        toQueryString: function(t) {
            return $.param(this.toJSON(t))
        },
        toJSON: function(t) {
            t = t || {};
            if (t.onlyURLParams) {
                return $.extend({}, this._urlSettings)
            }
            return $.extend({}, t.all ? this._settings : this._savedSettings)
        },
        toBookmarkletURL: function(u) {
            var t = this.toQueryString(u);
            return t ? o + "?" + t : o
        },
        toCloudSaveBookmarkletURL: function() {
            var t = this.getCloudSaveKey();
            return t ? o + "?key=" + t : o
        },
        getCloudSaveKey: function() {
            return this._cloudSaveKey
        },
        setCloudSaveKey: function(t) {
            f(q.keyField, t);
            this._cloudSaveKey = t;
            this.emit("change:cloudsave");
            return t
        },
        setCloudSavePassPhrase: function(t) {
            return this.setCloudSaveKey(q.phraseToKey(t))
        },
        loadFromCloud: function(t) {
            t = t || {};
            q.load(this._cloudSaveKey, function(x, v) {
                if (v) {
                    if (t && t.clearAll) {
                        this.clearAll()
                    }
                    this._cloudSettings = v;
                    for (var u in v) {
                        if (this._urlSettings[u]) {
                            delete v[u]
                        }
                    }
                    this.setBulk(v);
                    f(q.keyField, this._cloudSaveKey)
                } else {
                    this.clearCloudSave()
                }
                this.emit(t.initial ? "loaded-initial" : "loaded", x, v)
            }.bind(this))
        },
        saveToCloud: function(t) {
            q.save(this._cloudSaveKey, this._savedSettings, t)
        },
        clearCloudSave: function(u, t) {
            if (u && u.deleteFromServer) {
                q.destroy(this._cloudSaveKey, t)
            }
            this.clear(q.keyField);
            this._cloudSaveKey = null;
            this.emit("change:cloudsave")
        },
        getFontName: function(u) {
            var t = m.fonts[u];
            if ((t && t === "Proxima Nova") || (u && !u.match(/^([a-zA-Z0-9\-\s]+)$/))) {
                t = "DDG_ProximaNova, DDG_ProximaNova_UI_1, DDG_ProximaNova_UI_2, DDG_ProximaNova_UI_3, DDG_ProximaNova_UI_4, DDG_ProximaNova_UI_5, DDG_ProximaNova_UI_6"
            }
            return t
        },
        useRedirect: function() {
            return this.isDefault("kd") && !j.device.hasMetaReferrerSupport
        },
        _updateDeviceDependentSettings: function() {
            var u, v, t;
            for (u in m) {
                if (m[u].deviceDependent) {
                    t = m[u].values;
                    if (typeof t === "string") {
                        t = m[t]
                    }
                    for (v in t) {
                        if (!this._isValueValidForDevice(t[v])) {
                            delete t[v]
                        } else {
                            if (!m[u]["default"]) {
                                m[u]["default"] = v
                            }
                        }
                    }
                }
            }
        },
        _isValueValidForDevice: function(x) {
            var v = true,
                u, t;
            if (x.onDevices) {
                v = false;
                for (u = 0; u < x.onDevices.length; u++) {
                    t = x.onDevices[u];
                    if (j.device[t]) {
                        v = true;
                        break
                    }
                }
            }
            if (v && x.notOnDevices) {
                for (u = 0; u < x.notOnDevices.length; u++) {
                    t = x.notOnDevices[u];
                    if (j.device[t]) {
                        v = false;
                        break
                    }
                }
            }
            return v
        },
        isDarkTheme: function() {
            return j.settings.get("kae") === "d" || j.settings.get("kae") === "t"
        },
        _applyTheme: function(x, u) {
            u = u || {};
            var v = s.getSettingsForTheme(x);
            for (var t in v) {
                if (!u.forceTheme && this._settings[t]) {
                    continue
                }
                this.clear(t);
                this.set(t, v[t] || this.getDefault(t), {
                    saveToCookie: false
                })
            }
        },
        _setFromQuerystring: function() {
            for (var t in j.history.curState) {
                var u = j.history.curState[t];
                if (u.match(i)) {
                    continue
                }
                if (q.isKeyField(t) && !this.getCloudSaveKey()) {
                    this._urlSettings[t] = u;
                    this.setCloudSaveKey(u)
                } else {
                    if (t.charAt(0) === "k" || t === "t" || t === "atb") {
                        this._urlSettings[t] = u
                    }
                }
            }
            this.setBulk(this._urlSettings, {
                saveToCookie: false
            })
        },
        _setFromURLParams: function() {
            if (!p.settings_url_params) {
                return
            }
            for (var t in p.settings_url_params) {
                var u = p.settings_url_params[t];
                if (q.isKeyField(t) && !this.getCloudSaveKey()) {
                    this._urlSettings[t] = u;
                    this.setCloudSaveKey(u)
                } else {
                    if (!this._urlSettings[t]) {
                        this._urlSettings[t] = u
                    }
                }
            }
            this.setBulk(this._urlSettings, {
                saveToCookie: false
            })
        },
        _setFromCookie: function() {
            if (!document.cookie) {
                return
            }
            var x = {},
                v = document.cookie.split("; ");
            for (var u = 0; u < v.length; u++) {
                var y = v[u].split("=");
                if (y && y.length == 2) {
                    var t = h(y[0]),
                        z = a(y[1]);
                    if (z.match(i)) {
                        continue
                    }
                    if (q.isKeyField(t)) {
                        this.setCloudSaveKey(z)
                    } else {
                        if (z && !this._urlSettings[t]) {
                            x[t] = z
                        }
                    }
                }
            }
            this.setBulk(x)
        },
        _backfillGlobals: function() {
            var u = 0,
                t, x;
            for (; u < 10; u++) {
                t = h(u.toString());
                if (!p[t]) {
                    p[t] = ""
                }
            }
            for (u = 0; u < c.length; u++) {
                var v = c.charAt(u);
                t = h(v);
                x = h("a" + v);
                if (!p[t]) {
                    p[t] = ""
                }
                if (!p[x]) {
                    p[x] = ""
                }
            }
        }
    });
    var a = function(t) {
            if (!t) {
                return ""
            }
            if (t.indexOf('"') === 0) {
                t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
            }
            return t ? decodeURIComponent(t.replace(/\+/g, " ")) : ""
        },
        f = function(u, y, v) {
            v = v || {};
            v.expires = v.expires || new Date(k);
            var x = encodeURIComponent(u),
                t = encodeURIComponent(y);
            if (!t && (!document.cookie || !document.cookie.match(new RegExp("(^|;)\\s?" + x + "=")))) {
                return
            }
            document.cookie = [x, "=", t, v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join("")
        },
        r = function(t) {
            if (t.charAt(0) === "k") {
                return t.substr(1, t.length)
            }
            return t
        },
        h = function(t) {
            if (q.isKeyField(t)) {
                return t
            }
            return "k" + t
        },
        n = function(t) {
            var u = m[t];
            return typeof u.values === "object" ? u.values : m[u.values]
        },
        g = function(u, x) {
            if (!x || !u) {
                return x
            }
            var v = m[u];
            if (v && v.type === "color") {
                var t = n(u);
                x = t[x] || x
            }
            return x
        };
    j.settings = new b({
        cloudSaveKey: p.key || p[q.keyField]
    })
}(DDG, this);
! function(a) {
    a.Models.TParam = function() {
        this._param = this.DEFAULT_VARIANT;
        this.set(a.settings.get("t"))
    };
    a.Models.TParam.prototype = $.extend({}, {
        DEFAULT_VARIANT: "_",
        get: function() {
            return this._param
        },
        set: function(b) {
            if (!b) {
                return
            }
            if (this._isValidHomepageParam(b)) {
                this._param = (b.length === 1) ? this.DEFAULT_VARIANT : b.substr(1);
                this._fromHomepage = true;
                this._hasValue = true
            } else {
                if (/^[a-z0-9]+$/.test(b)) {
                    this._param = b;
                    this._hasValue = true
                }
            }
        },
        hasValue: function() {
            return this._hasValue
        },
        fromDefaultSearch: function() {
            return this._hasValue && !this.fromHomepage()
        },
        setFromHomepage: function(b) {
            var c = "h" + b;
            if (!a.settings.get("t") && this._isValidHomepageParam(c)) {
                a.settings.setTParam(c)
            }
        },
        fromHomepage: function() {
            return this._fromHomepage
        },
        _isValidHomepageParam: function(b) {
            return /^h[a-z_]?$/.test(b)
        }
    });
    a.tParam = new a.Models.TParam()
}(DDG);
! function(a) {
    a.Models.AddToBrowser = function() {
        this.viewType = (a.device.isMobileDevice) ? "AddToBrowserBanner" : "AddToBrowserBadge"
    };
    a.Models.AddToBrowser.prototype = $.extend({}, {
        BADGE_DISMISS_KEY: "kak",
        BADGE_RECURRING_KEY: "kax",
        canAddToChromeAndroid: function() {
            return a.device.isAndroid && a.device.isChrome && a.device.chromeVersion >= 57 && !a.device.isBrave && !a.device.isFirefoxFocus
        },
        canAddToBraveAndroid: function() {
            return a.device.isAndroid && a.device.isBrave
        },
        canAddToBraveIOS: function() {
            return a.device.isIOS8p && a.device.isBrave
        },
        canAddToMobileFirefox: function() {
            return ((a.device.isIOS8p && a.device.isFirefox) || (a.device.isAndroid && (a.device.isFirefox38AndUp || a.device.isFirefoxFocus)))
        },
        canAddToMobileBrowser: function() {
            return (this.canAddToChromeAndroid() || a.device.isIOS8pSafari || this.canAddToMobileFirefox() || this.canAddToBraveAndroid() || this.canAddToBraveIOS())
        },
        canShowMobileBanner: function() {
            return (this.canAddToMobileBrowser() && a.settings.isDefault(this.BADGE_DISMISS_KEY) && this._canShowAgain())
        },
        canShowBadgeAgain: function() {
            return !(a.device.isDesktop && !this._canShowAgain())
        },
        canShowMobileButton: function() {
            return (this.canAddToMobileBrowser() && (!a.settings.isDefault(this.BADGE_DISMISS_KEY) || !this._canShowAgain()))
        },
        showDarkInstructions: function() {
            return this.canAddToMobileBrowser()
        },
        dismiss: function() {
            var e = 4,
                c = new Date(),
                b;
            if (!a.settings.isDefault(this.BADGE_RECURRING_KEY)) {
                e = 30
            }
            c.setDate(c.getDate() + e);
            b = a.opensearch.getATBVersionInfo(c).version;
            if (this._canShowAgain()) {
                a.settings.set(this.BADGE_RECURRING_KEY, b, {
                    saveToCloud: true,
                    fallbackToURLParam: true
                })
            }
        },
        _canShowAgain: function() {
            return a.settings.isDefault(this.BADGE_RECURRING_KEY) || (!a.settings.isDefault(this.BADGE_RECURRING_KEY) && a.opensearch.getDaysSinceCohort(a.settings.get(this.BADGE_RECURRING_KEY)) >= 0)
        },
        canShowOnMobileSerp: function() {
            return (this.canShowMobileBanner() && a.page.canShowAddToBrowser() && a.tParam.fromHomepage())
        },
        canShowOnDesktopSerp: function() {
            return (this.canShowBadgeAgain() && a.page.canShowAddToBrowser() && a.tParam.fromHomepage())
        }
    });
    a.addToBrowser = new a.Models.AddToBrowser()
}(DDG);
! function(a) {
    var b = "kao";
    a.Models.Settings.OnboardingEducation = {
        KEY: b,
        isDismissed: !a.settings.isDefault(b),
        didUserScroll: false,
        isSVGAnimated: false,
        scrollToAnimationDurationMS: 350,
        pauseForAnimationMS: 1000,
        canShow: function() {
            return (a.settings.isDefault(this.KEY) && !w.extensionsuccess)
        },
        dismiss: function() {
            a.settings.set(b, -1, {
                saveToCloud: true
            });
            this.isDismissed = true
        }
    }
}(DDG);
! function(a) {
    a.Models.Settings.OnboardingEducationSlide = function(b) {
        return {
            slideIndex: b.model.slideIndex || null,
            isSVGAnimated: b.model.isSVGAnimated || false,
            pauseBeforeAnimation: 300,
            pauseBetweenAnimationIterations: 5000,
            maxAnimationLoops: 3,
            animationAnchorEl: {
                slide1: "monster-eye",
                slide2: "ghost-girl-face",
                slide3: "bathtub-periscope",
                slide4: "scarf-back"
            }
        }
    }
}(DDG);
! function(q) {
    var i, e = {
            s: "set-text--small",
            m: "set-text--medium",
            l: "set-text--larger",
            t: "set-text--largest"
        },
        a = {
            w: "set-wide",
            s: "set-super-wide"
        },
        t = "set-theme--dark",
        b = "set-theme--terminal",
        o = q.Data.languages.languageFontLookup,
        h = q.Data.languages.fontSubsets,
        g = tinycolor;
    q.Models.Settings.LiveUpdater = i = function(v) {
        this.settings = v.settings;
        this.$html = q.$html || $("html");
        this.$body = $("body");
        this.isHomePage = v.isHomePage;
        this.$html.removeClass(t);
        this.$html.removeClass(b);
        var u = this;
        this.settings.on("change", function(x) {
            u[x] && u[x](u.settings.get(x))
        })
    };
    i.prototype = {
        updateAll: function() {
            for (var u in i.prototype) {
                if (u.charAt(0) == "k") {
                    this[u](this.settings.get(u))
                }
            }
        },
        loadFonts: function() {
            if (!this.settings.isDefault("kt") && !this.settings.isDefault("ka")) {
                return
            }
            var D = q.Data.languages.resultLanguages || {},
                z = Object.keys(D) || [],
                u = [],
                v = 0,
                C = 6,
                B = "";
            if (!this.settings.isDefault("kad")) {
                z.unshift(this.settings.get("kad").split("_")[0])
            }
            if (locale) {
                z.unshift(locale.split("_")[0])
            }
            if (z && z.length) {
                for (var A = 0; A < z.length; A++) {
                    var x = z[A];
                    if (o[x] && u.indexOf(x) === -1) {
                        var E = $.isArray(o[x]) ? o[x] : [o[x]];
                        for (var y = 0; y < E.length; y++) {
                            B += q.exec_template("theme_font", {
                                name: "_UI_" + v,
                                lang: E[y]
                            });
                            u = u.concat(h[E[y]]);
                            v++
                        }
                        if (v >= C) {
                            break
                        }
                    }
                }
            }
            this._clearCSS("customFonts");
            if (B) {
                this.$customFontscss = r(B)
            }
        },
        k1: function(v) {
            var u = (v && v == "-1") ? "addClass" : "removeClass";
            this.$html[u]("no-ads")
        },
        km: function(v) {
            var u = (v && v === "m") ? "addClass" : "removeClass";
            this.$html[u]("set-align-center")
        },
        ks: function(x) {
            for (var u in e) {
                this.$html.removeClass(e[u])
            }
            var v = e[x];
            v && this.$html.addClass(v)
        },
        kw: function(v) {
            this.$html.removeClass("set-wide").removeClass("set-super-wide");
            var u = a[v];
            u && this.$html.addClass(u)
        },
        kh: function(u) {
            if (!d.x) {
                return
            }
            if ((!u || u == "1") && !d.location.port && d.location.protocol != "https:" && w.location.hostname.indexOf(".onion") == -1) {
                d.x.action = "https://" + w.location.host + "/"
            } else {
                if ((u && u == "-1") && d.location.protocol != "http:") {
                    d.x.action = "http://" + w.location.host + "/"
                } else {
                    if (this.settings.get("kg") === "p" && q.device.isChrome) {
                        d.x.action = w.location.protocol + "//" + w.location.host + "/"
                    } else {
                        d.x.action = "/"
                    }
                }
            }
        },
        kg: function(u) {
            if (!d.x) {
                return
            }
            d.x.method = (u && u === "p") ? "POST" : "GET";
            if (u && u === "p") {
                d.title = "DuckDuckGo"
            }
            if (q.device.isChrome && u && u === "p") {
                d.x.action = window.location.protocol + "//" + window.location.host + "//"
            }
        },
        ko: function(u) {
            if (this.isHomePage) {
                return
            }
            q.isHeaderFixed = false;
            this.$html.removeClass("set-header--menu");
            this.$html.removeClass("set-header--fixed");
            if (u == "1" && q.device.hasFixedHeaderSupport) {
                q.isHeaderFixed = true;
                this.$html.addClass("set-header--fixed")
            } else {
                if (u == "-2" || u == "-1") {
                    this.$html.addClass("set-header--menu");
                    delete q._header_height
                }
            }
        },
        ku: function(u) {
            this.$html[k(u)]("set-underlined-links")
        },
        kaf: function(u) {
            this.$html[k(u)]("full-urls")
        },
        kad: function() {
            this.loadFonts()
        },
        kag: function(u) {
            $(".search__button")[k(u)]("search__button--active")
        },
        kt: function(y) {
            this._clearCSS("kt");
            if (!y || y == this.settings.getDefault("kt")) {
                return
            }
            var u = this.settings.getFontName(y) || y,
                x = this.settings.getFontName(this.settings.getDefault("kt")),
                v = !!u.match(/Helvetica|Arial|Sans-serif/);
            if (u.match(/Helvetica/)) {
                u += ",sans-serif"
            }
            this.$ktcss = r(q.exec_template("theme_custom_font", {
                fontStack: u + "," + x,
                lightenWeight: v
            }))
        },
        ka: function(x) {
            this._clearCSS("ka");
            if (!x || x == this.settings.getDefault("ka")) {
                return
            }
            var u = this.settings.getFontName(x) || x,
                v = this.settings.getFontName(this.settings.getDefault("ka"));
            if (u.match(/Helvetica/)) {
                u += ",sans-serif"
            }
            this.$kacss = r(".result__a { font-family:" + u + "," + v + ";}")
        },
        kj: function(B) {
            this.$html.removeClass("dark-header");
            this._clearCSS("kj");
            if (!B || B == this.settings.getDefault("kj")) {
                return ""
            }
            var u = B,
                z = f(u),
                A = z.root.toHsl().l > 0.5,
                v = z.root.toRgbString().replace(/rgb\(|\)/g, ""),
                y = z.root.toHexString(),
                x = "";
            if (!A || z.root.toHsl().s > 0.5) {
                this.$html.addClass("dark-header")
            }
            if (A) {
                x += q.exec_template("theme_header", {
                    color: y,
                    rgb: v,
                    bottomBorder: z.darker[0],
                    link: z.text[2],
                    activeLink: z.text[0]
                });
                if (!this.isHomePage) {
                    x += p(z);
                    x += q.exec_template("theme_header_menu_button", {
                        icon: z.text[3],
                        hoverBg: z.text[2],
                        hoverColor: z.lighter[2]
                    });
                    x += q.exec_template("theme_zci", {
                        color: y,
                        bg: z.lighter[4],
                        detail: z.lighter[2],
                        border: z.darker[0],
                        bottomBorder: z.darker[0],
                        outline: z.darker[5],
                        text: z.text[1],
                        link: z.text[0],
                        activeLink: z.text[0],
                        tileNav: z.darker[2],
                        modeBg: z.darker[2],
                        modeText: z.text[1],
                        accent1: z.darker[3],
                        accent2: z.darker[4],
                        accent3: z.darker[2],
                        accentText: z.text[2],
                        accentText2: z.text[3],
                        isDark: false
                    })
                }
            } else {
                x += q.exec_template("theme_header", {
                    color: y,
                    rgb: v,
                    bottomBorder: z.darker[0],
                    link: z.text[2],
                    activeLink: z.text[0]
                });
                if (!this.isHomePage) {
                    x += q.exec_template("theme_header_menu_button", {
                        icon: z.text[4],
                        hoverBg: z.text[2],
                        hoverText: z.text[2],
                        hoverColor: z.darker[2]
                    });
                    if (this.settings.get(this.settings.THEME_KEY) !== "r") {
                        x += s(z);
                        x += j(z);
                        x += q.exec_template("theme_zci", {
                            color: y,
                            bg: z.darker[1],
                            detail: z.darker[2],
                            border: z.darker[3],
                            bottomBorder: z.darker[2],
                            outline: z.lighter[5],
                            text: z.text[1],
                            link: z.text[0],
                            activeLink: z.text[3],
                            tileNav: z.darker[0],
                            modeBg: z.lighter[1],
                            modeText: z.text[4],
                            accent1: z.lighter[2],
                            accent2: z.lighter[3],
                            accent3: z.lighter[7],
                            accentText: z.text[2],
                            accentText2: z.text[3],
                            isDark: true
                        })
                    }
                }
            }
            this.$kjcss = r(x)
        },
        k7: function(x) {
            this.$html.removeClass("dark-bg");
            this.$k7css && this.$k7css.remove();
            delete this.$k7css;
            if (!x || x == this.settings.getDefault("k7")) {
                return
            }
            var D = g(x),
                B = D.toHexString(),
                F = D.toPercentageRgbString(),
                y = f(B),
                H = y.root.toHsl().l > 0.5,
                I = y.text[0],
                z = y.text[3],
                G = H ? y.darker[1] : y.lighter[1],
                A = H ? y.darker[0] : y.lighter[2],
                v = H ? y.lighter[1] : y.darker[1],
                E = "",
                u, C;
            u = F.replace("rgb(", "").replace(")", "");
            C = g(v).toPercentageRgbString().replace("rgb(", "").replace(")", "");
            E += q.exec_template("theme_background", {
                bg: B,
                rgbBg: u,
                text: I,
                textTint: z,
                bgTint: G,
                bgTint2: A,
                bgDark: v,
                rgbBgDark: C,
                isDark: !H
            });
            E += q.exec_template("theme_sidemenu", {
                bg: y.darker[1],
                border: y.darker[2],
                text: y.text[5],
                textTint: z,
                link: y.text[3],
                activeLink: y.text[0]
            });
            if (this.isHomePage) {
                E += q.exec_template("theme_header_menu_button", {
                    icon: H ? y.darker[4] : y.text[4],
                    hoverBg: G,
                    border: G,
                    hoverText: y.text[2]
                });
                if (!H) {
                    E += s(y);
                    E += j(y)
                } else {
                    E += p(y)
                }
            } else {
                E += q.exec_template("theme_result_snippet", {
                    color: z,
                    dateColor: I
                });
                E += q.exec_template("theme_result_web_links", {
                    color: z,
                    bgTint: G
                });
                E += q.exec_template("theme_result_highlight", {
                    color: G
                });
                E += q.exec_template("theme_result_message", {
                    textColor: z,
                    bgColor: y.darker[1],
                    borderColor: y.darker[2],
                    linkColor: I
                })
            }
            if (!H || y.root.toHsl().s > 0.5) {
                this.$html.addClass("dark-bg");
                this.isDarkBg = true
            }
            this.$k7css = r(E)
        },
        ky: function(v) {
            this._clearCSS("ky");
            if (is_mobile || !v || v == this.settings.getDefault("ky")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$kycss = r(q.exec_template("theme_result_highlight", {
                    color: u.toHexString()
                }))
            }
        },
        k9: function(v) {
            this._clearCSS("k9");
            if (!v || v == this.settings.getDefault("k9")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$k9css = r(q.exec_template("theme_result_title", {
                    color: u.toHexString()
                }))
            }
        },
        k8: function(v) {
            this._clearCSS("k8");
            if (!v || v == this.settings.getDefault("k8")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$k8css = r(q.exec_template("theme_result_snippet", {
                    color: u.toHexString()
                }))
            }
        },
        kaa: function(v) {
            this._clearCSS("kaa");
            if (!v || v == this.settings.getDefault("kaa")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$kaacss = r(".results a.result__a:visited,.sitelinks__title a.result__a:visited,.module--news__body__title:visited,.module__link:visited, .module__link:visited:hover,.module__link a:visited, .module__link a:visited:hover{ color:" + u.toHexString() + ";}")
            }
        },
        kx: function(v) {
            this._clearCSS("kx");
            if (!v || v == this.settings.getDefault("kx")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$kxcss = r(q.exec_template("theme_result_web_links", {
                    color: u.toHexString()
                }))
            }
        },
        k20: function(v) {
            this._clearCSS("k20");
            if (!v || v == this.settings.getDefault("k20")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$k20css = r(".sitelinks__title a.result__a:visited { color:" + u.toHexString() + " !important;}")
            }
        },
        k19: function(v) {
            this._clearCSS("k19");
            if (!v || v == this.settings.getDefault("k19")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$k19css = r(".module__more-at, .module__more-at:hover, .module__official-url, .module__official-url:hover {color: " + u.toHexString() + ";}")
            }
        },
        k18: function(u) {
            this._clearCSS("k18");
            if (u !== this.settings.getDefault("k18")) {
                this.$k18css = r(".result__check { display: block;}")
            }
        },
        k17: function(v) {
            this._clearCSS("k17");
            if (!v || v == this.settings.getDefault("k17")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$k17css = r(".result__url:hover {color: " + u.toHexString() + ";}")
            }
        },
        k16: function(v) {
            this._clearCSS("k16");
            if (!v || v == this.settings.getDefault("k16")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$k16css = r(".result__url:visited {color: " + u.toHexString() + ";}")
            }
        },
        k15: function(u) {
            this._clearCSS("k15");
            if (!u || u == this.settings.getDefault("k15")) {
                return
            }
            this.$k15css = r(".result__title {font-weight: " + u + ";}")
        },
        k14: function(u) {
            this._clearCSS("k14");
            if (!u || u == this.settings.getDefault("k14")) {
                return
            }
            this.$k14css = r(".result__title {font-size: " + u + ";}")
        },
        k13: function(u) {
            this._clearCSS("k13");
            if (u === "off") {
                this.$k13css = r(".result__title b {font-weight: normal;}")
            }
        },
        k12: function(v) {
            this._clearCSS("k12");
            if (!v || v == this.settings.getDefault("k12")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$k12css = r(".badge--ad {background-color: " + u.toHexString() + ";}")
            }
        },
        k11: function(v) {
            this._clearCSS("k11");
            if (!v || v == this.settings.getDefault("k11")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$k11css = r(".msg--spelling :link,.msg--spelling :visited,.msg--spelling a:hover,.msg__clear,.msg__clear:hover,.msg__all,.msg__all:visited {color: " + u.toHexString() + " !important;}")
            }
        },
        k10: function(v) {
            this._clearCSS("k10");
            if (!v || v == this.settings.getDefault("k10")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$k10css = r(".highlight .result__a,.result__a:hover,.result__a:visited:hover {color: " + u.toHexString() + " !important;}")
            }
        },
        kf: function(u) {
            if (u && u === "-1") {
                $(".result__icon").addClass("is-hidden")
            } else {
                $(".result__icon").removeClass("is-hidden");
                q.ImageLoader.loadMore()
            }
        },
        kai: function(u) {
            if (!u || u == this.settings.getDefault("kai")) {
                $(".result--url-above-snippet").removeClass("result--url-above-snippet");
                $(".result__snippet").each(function(x, y) {
                    var v = $(y),
                        z = v.parent().find(".result__extras");
                    z.before(v)
                })
            } else {
                $(".result").addClass("result--url-above-snippet");
                $(".result__snippet").each(function(x, y) {
                    var v = $(y),
                        z = v.parent().find(".result__extras");
                    z.after(v)
                })
            }
        },
        _clearCSS: function(u) {
            var x = "$" + u + "css",
                v = this[x];
            v && v.remove();
            delete this[x]
        }
    };
    var r = function(u) {
            return $("<div />", {
                html: "&shy;<style>" + u + "</style>"
            }).children().appendTo("body")
        },
        k = function(u) {
            return (u && u == "1") ? "addClass" : "removeClass"
        },
        n = function(v, u) {
            v = g(v);
            return g.lighten(v, u * (1 - v.toHsl().l)).toHexString()
        },
        c = function(v, u) {
            v = g(v);
            return g.darken(v, u * v.toHsl().l).toHexString()
        },
        m = function(u, v, A, z) {
            var y = [];
            for (var x = 1; x <= v; x++) {
                y.push(z(u, A * x))
            }
            return y
        },
        f = function(x) {
            x = g(x);
            var D = x.toHsl().l > 0.5,
                z = g.monochromatic(g.desaturate(x, 80), 20),
                E = g.mostReadable(x, z),
                A = g(E).toHsl().l > 0.5,
                u = D ? 10 : 4,
                C = D ? 4 : 10;
            if (D) {
                C += C * x.toHsl().s
            }
            var v = m(E, 10, 5, A ? c : n),
                B = m(x, 8, C, c),
                y = m(x, 8, u, n);
            return {
                root: x,
                text: v,
                lighter: y,
                darker: B
            }
        },
        s = function(u) {
            return q.exec_template("theme_search_bar", {
                bg: u.darker[1],
                border: u.darker[2],
                iconText: "rgba(255,255,255,0.35)",
                buttonBg: u.darker[3],
                inputText: u.text[0]
            })
        },
        j = function(v) {
            var u = g(v.darker[2]).toRgb();
            return q.exec_template("theme_autocomplete", {
                bg: "rgb(" + u.r + "," + u.g + "," + u.b + ")",
                border: v.darker[0],
                lightText: v.text[1],
                darkText: v.text[5],
                selectedBg: v.lighter[3]
            })
        },
        p = function(u) {
            return q.exec_template("theme_search_bar", {
                bg: "#fff",
                border: u.darker[2],
                iconText: "rgba(0,0,0,0.35)",
                buttonBg: u.darker[4]
            })
        }
}(DDG);
! function(a) {
    a.Pages.Base = function(b) {
        this.views = {};
        this.onboardingTest = {};
        a.keyboard = this.keyboard = new a.Models.Keyboard();
        a.ready(this.ready.bind(this))
    };
    a.Pages.Base.prototype = {
        ready: function() {
            $("head").append('<link title="DuckDuckGo" type="application/opensearchdescription+xml" rel="search" href="' + a.opensearch.getURL() + '" />');
            this._initializePage();
            if (is_mobile) {
                a.addClass("html", a.$html, "is-mobile")
            }
            if (is_mobile_device) {
                a.addClass("html", a.$html, "is-mobile-device")
            } else {
                a.addClass("html", a.$html, "is-not-mobile-device")
            }
            if (a.device.isLegacyAndroid) {
                a.addClass("html", a.$html, "is-legacy-android")
            }
            if (a.device.isFirefoxFocus && a.device.isAndroid) {
                a.addClass("html", a.$html, "is-firefox-focus")
            }
            a.settings.on("loaded-initial", this._onSettingsLoaded.bind(this));
            a.settings.loadFromCloud({
                initial: true
            });
            a.device.on("resize", function() {
                a.ImageLoader.loadMore()
            });
            a.device.on("scroll", function() {
                a.ImageLoader.loadMore()
            });
            this.headerMenuOps = this.headerMenuOps || {};
            if (!this.headerMenuOps.disableSearchBar) {
                this.initSearchBar()
            }
            if (!this.headerMenuOps.disableSideMenu) {
                this.initSideMenu()
            }
            this.initAddToHomepageBanner();
            this.onboardingTest = a.Data.Onboarding[a.opensearch.atbVariant] || {};
            this._verifyMobileInstallation();
            this.isSafeDDG = w.location.host.toLowerCase() === "safe.duckduckgo.com"
        },
        initSearchBar: function() {
            this.searchbar = new a.Views.SearchBar({
                el: ".js-search-form"
            });
            this.searchbar.on("focus", function() {
                this.sideMenu && this.sideMenu.hide()
            }.bind(this))
        },
        initSideMenu: function() {
            this.sideMenu = new a.Views.SideMenu($.extend({
                pageType: this.pageType,
                showATB: this.canShowAddToBrowser(),
                appendLinkTo: ".js-header-wrap",
                appendTo: ".js-site-wrapper"
            }, this.sideMenuOps || {}));
            this.sideMenu.on("opened", function() {
                if (this.searchbar && this.searchbar.hasFocus) {
                    this._restoreSearchFocus = true;
                    this.searchbar.unfocus()
                }
            }.bind(this));
            this.sideMenu.on("closed", function() {
                if (this._restoreSearchFocus) {
                    this.searchbar.focus({
                        focusInput: true
                    });
                    delete this._restoreSearchFocus
                }
            }.bind(this))
        },
        initAddToHomepageBanner: function() {
            if (!a.device.isAndroidChromeNoOpenSearch || !navigator.serviceWorker || a.addToBrowser.canAddToChromeAndroid()) {
                return
            }
            var b = a.tParam.fromDefaultSearch() || a.history.get("atb") || !a.settings.isDefault(a.addToBrowser.BADGE_DISMISS_KEY);
            navigator.serviceWorker.register("service-worker.js", {
                scope: "./"
            });
            window.addEventListener("beforeinstallprompt", function(c) {
                a.pixel.fire("aths", "i");
                if (b || a.addToBrowser.canAddToChromeAndroid()) {
                    c.preventDefault();
                    return false
                }
                $(".js-atb-banner-link").hide();
                c.userChoice.then(function(f) {
                    var e = {};
                    if (b) {
                        e.r = 1
                    }
                    if (f.outcome === "dismissed") {
                        a.pixel.fire("aths", "d", e)
                    } else {
                        a.pixel.fire("aths", "c", e)
                    }
                })
            })
        },
        notify: function(b) {
            if (!this.notifications) {
                this.notifications = new a.Views.Notification({
                    appendTo: "body"
                })
            }
            this.notifications.flash(b)
        },
        isInstalled: function() {
            return (a.device.DDGisBrowserDefault() || a.extension.isInstalled() || (a.tParam.fromDefaultSearch()) || a.history.get("atb") || a.device.isOnion)
        },
        canShowAddToBrowser: function() {
            if (a.addToBrowser.canAddToChromeAndroid() && a.tParam.get() === "crhs") {
                return true
            }
            if (a.device.isMobileDevice && a.settings.isDefault(a.addToBrowser.BADGE_DISMISS_KEY) && !a.tParam.fromDefaultSearch() && !a.history.get("atb") && a.device.canAddToBrowser() && a.page.pageType !== "serp") {
                return true
            }
            return (a.settings.isDefault(a.addToBrowser.BADGE_DISMISS_KEY) && a.addToBrowser.canShowBadgeAgain() && !a.device.DDGisBrowserDefault() && (!a.extension.isInstalled() || a.history.get("exti") == 2) && (!a.tParam.fromDefaultSearch()) && !a.history.get("atb") && !a.device.isOnion && a.device.canAddToBrowser() && a.settings.isDefault("ko") && !a.duckpan)
        },
        canShowHomepageEducationInstallButton: function() {
            return (!a.device.DDGisBrowserDefault() && !a.extension.isInstalled() && (!a.tParam.fromDefaultSearch()) && !a.history.get("atb") && !a.device.isOnion && a.device.canAddToBrowser() && a.settings.isDefault("ko") && !a.duckpan)
        },
        canShowHomepageOnboardingEducation: function() {
            return a.Models.Settings.OnboardingEducation.canShow()
        },
        _onSettingsLoaded: function() {
            var b = a.settings.toQueryString({
                onlyURLParams: true
            });
            if (b) {
                kurl += "&" + b
            }
            if (this.liveUpdater) {
                a.settings.updater = new a.Models.Settings.LiveUpdater({
                    isHomePage: this.pageType === "home",
                    settings: a.settings
                });
                a.settings.updater.updateAll();
                a.settings.on("change:kae", this.notify.bind(this, l("Theme Changed")))
            }
        },
        _checkForForceReload: function() {
            if (a.querystringParam("rld") === "1") {
                a.history.clear("rld", function() {
                    window.location.reload()
                })
            }
        },
        _verifyMobileInstallation: function() {
            var f, e, c, g, b;
            if (!a.device.isMobileDevice || this.pageType !== "serp") {
                return
            }
            f = a.settings.get(a.settings.MOBILE_INSTRUCTIONS_KEY);
            if (a.tParam.fromDefaultSearch() && f) {
                e = f.match(/v\d*-\d/)[0];
                f = f.replace(e, "");
                g = f.substr(3);
                c = a.opensearch.getDaysSinceCohort(e) < 2 ? f.charAt(1) : "_";
                b = a.settings.isDefault(a.addToBrowser.BADGE_RECURRING_KEY) ? 0 : 1;
                a.pixel.fire("exti", a.device.pixelBrowserName, a.opensearch.version, {
                    atbva: c,
                    va: a.opensearch.variant,
                    l: window.locale,
                    cp: g,
                    exte: 0,
                    p: a.device.pixelPlatformName,
                    ak: a.settings.get(a.addToBrowser.BADGE_DISMISS_KEY),
                    ax: b
                });
                a.settings.clear(a.settings.MOBILE_INSTRUCTIONS_KEY)
            }
        },
        _initializePage: function() {
            var c, b = this.pageType === "serp";
            if (b && a.device.isIE) {
                setTimeout("d.x.reset()", 50)
            }
            if (w.postMessage) {
                c = d.createElement("iframe");
                c.id = "iframe_hidden";
                c.src = "/post2.html";
                d.body.appendChild(c)
            }
            if (b) {
                if (nir) {
                    nir("v")
                }
                setTimeout("nis()", 250);
                if (!a.device.isMobileDevice) {
                    $(document).on("mousemove", nkf);
                    $(document).on("mouseup", ncg);
                    $(document).on("keydown", nckd);
                    $(document).on("keyup", ncku)
                }
            }
            $(document).on("mousedown", ncf)
        }
    }
}(DDG);
! function(b) {
    var a = b.Pages.Base;
    b.Pages.Static = function(c) {
        a.call(this, c);
        this.pixelClass = c && c.pixelClass || false
    };
    b.Pages.Static.prototype = $.extend({}, a.prototype, {
        pageType: "static",
        sideMenuOps: {
            hideThemes: true
        },
        headerMenuOps: {
            disableSearchBar: false,
            disableSideMenu: false
        },
        ready: function() {
            if (location.pathname === "/about") {
                this.sideMenuOps.hideAbout = true
            } else {
                if (location.pathname === "/privacy") {
                    this.sideMenuOps.hidePrivacy = true
                } else {
                    if (location.pathname === "/tour") {
                        this.sideMenuOps.hideTour = true
                    } else {
                        if (location.pathname === "/app") {
                            this.sideMenuOps.hideApp = true
                        } else {
                            if (location.pathname === "/bang") {
                                this.sideMenuOps.hideBang = true
                            } else {
                                if (location.pathname === "/iframe") {
                                    this.headerMenuOps.disableSearchBar = true;
                                    this.headerMenuOps.disableSideMenu = true
                                } else {
                                    if (location.pathname === "/press") {
                                        this.sideMenuOps.hidePress = true
                                    }
                                }
                            }
                        }
                    }
                }
            }
            a.prototype.ready.call(this);
            $(".js-show-header").click(function(c) {
                c.preventDefault();
                c.stopPropagation();
                this.searchbar.focus({
                    focusInput: true
                })
            }.bind(this));
            this.$anchors = $(".js-anchor");
            this.$anchorLinks = $(".js-anchor-link");
            this.$anchorLinks.on("click", this._onAnchorLinkClick.bind(this));
            this.$popouts = $(".js-popout");
            this.$popovers = $(".js-popover");
            this._createPopouts();
            this._createPopovers();
            $("img").bind("contextmenu", function(c) {
                return false
            });
            if (this.pixelClass) {
                this.$links = $(".js-static-" + this.pixelClass);
                this.$links.on("click", this._onLinkClick.bind(this, 0))
            }
            this.$footerLinks = $(".js-static-foot-link");
            if (this.$footerLinks.length) {
                this.$footerLinks.on("click", this._onLinkClick.bind(this, 1))
            }
        },
        addTo: function(e, c) {
            var f = DDG.Utils.AddTo.getData();
            if (f[e]) {
                new b.Views.AddTo({
                    appendTo: c,
                    data: f[e]
                })
            }
        },
        _onAnchorLinkClick: function(j) {
            j.preventDefault();
            var h = j.currentTarget.hash.substr(1),
                f = this.$anchors,
                c = "";
            for (var g = 0; f.length > g; g++) {
                if (f[g].name === h || f[g].id === h) {
                    c = $(f[g]);
                    break
                }
            }
            if (c) {
                b.device.scrollTop(c.offset().top, 500)
            }
        },
        _createPopouts: function() {
            this.views.popouts = [];
            var g, c, e, f = 0;
            for (; this.$popouts.length > f; f++) {
                g = $(this.$popouts[f]);
                c = g.find(".js-popout-link");
                e = new b.Views.Modal({
                    $el: g.find(".js-popout-main")
                });
                c.click(e.toggle.bind(e));
                this.views.popouts.push(e)
            }
        },
        _createPopovers: function() {
            this.views.popovers = [];
            var f, c, g, e = 0;
            for (; this.$popovers.length > e; e++) {
                f = $(this.$popovers[e]);
                c = $(f.attr("data-js-selector"));
                g = new b.Views.Modal({
                    $el: f
                });
                c.click(g.toggle.bind(g));
                this.views.popovers.push(g)
            }
        },
        _onLinkClick: function(g, h) {
            var c = $(h.currentTarget),
                f = b.pixel.sanitizeUrl(c.attr("href"));
            b.pixel.fire("splc", this.pageType, f, {
                ft: g
            })
        }
    })
}(DDG);
! function(b) {
    var a = b.Pages.Base;
    b.Pages.Home = function(c) {
        this._checkForForceReload();
        a.call(this, c);
        window.onpageshow = this._onPageShow.bind(this);
        this.canShowMobileButton = b.addToBrowser.canShowMobileButton()
    };
    b.Pages.Home.prototype = $.extend({}, a.prototype, {
        pageType: "home",
        liveUpdater: true,
        sideMenuOps: {
            twitterLink: true,
            hideSettings: true
        },
        ready: function() {
            var c = w.location.host.toLowerCase() === "start.duckduckgo.com",
                e = w.location.hash === "#1";
            this.isStart = c;
            this.scrollToOnboarding = e;
            if (!c) {
                b.tParam.setFromHomepage(b.opensearch.allocateAtbVariant())
            }
            b.$win.scrollTop(0);
            a.prototype.ready.call(this);
            if (c) {
                this.searchbar.$el.attr("action", "//duckduckgo.com/");
                b.settings.set("kak", "-1");
                b.settings.set("kal", "-1");
                b.settings.set("kao", "-1");
                b.settings.set("kaq", "-1")
            }
            if (!b.device.isMobileDevice) {
                this.searchbar.focus({
                    focusInput: true
                })
            }
            this._renderBadgeContent();
            this._initHeaderLinks();
            if (Modernizr.touch && b.device.isIDevice) {
                window.onorientationchange = function() {
                    b.$win.scrollTop(0)
                }
            }
            this.views.tagline = new DDG.Views.HomepageTagline({
                appendTo: ".js-tag-home"
            });
            this.views.onboardingEducation = new b.Views.OnboardingEducation({
                appendTo: ".site-wrapper--home",
                pageView: this
            });
            if (this.canShowHomepageEducationInstallButton()) {
                this._addOnboardingEducationButtons()
            }
            this._fireStat("hi")
        },
        _initHeaderLinks: function() {
            this.views.headerLinks = new b.Views.HeaderLinks({
                appendTo: ".js-header-wrap"
            })
        },
        _createButton: function(c) {
            return new b.Views[b.addToBrowser.viewType]({
                clickPixel: "atb" + c + "c",
                xPixel: "atbbx",
                template: "add_to_browser_badge_button",
                buttonClass: "onboarding-ed__button-small",
                appendTo: ".js-onboarding-ed-button-small-" + c
            })
        },
        _addOnboardingEducationButtons: function() {
            this.views.atb_button = new b.Views[b.addToBrowser.viewType]({
                clickPixel: "atbbc",
                xPixel: "atbbx",
                template: "add_to_browser_badge_button",
                buttonClass: "onboarding-ed__button",
                appendTo: ".js-onboarding-ed-button"
            });
            this.views.atb_button_1 = this._createButton(1);
            this.views.atb_button_2 = this._createButton(2);
            this.views.atb_button_3 = this._createButton(3)
        },
        _onPageShow: function(c) {
            if (c && c.persisted) {
                this._checkForForceReload()
            }
        },
        _fireStat: function(c) {
            b.pixel.fire(c, {
                b: b.device.pixelBrowserName,
                atbi: this.canShowAddToBrowser(),
                ei: this.canShowHomepageOnboardingEducation(),
                i: this.isInstalled(),
                d: b.device.pixelId,
                atb: b.opensearch.version,
                va: b.opensearch.variant,
                atbva: b.opensearch.atbVariant,
                l: w.locale,
                p: b.device.pixelPlatformName
            })
        },
        _renderBadgeContent: function() {
            if (!this.scrollToOnboarding && this.canShowAddToBrowser()) {
                var e = !b.device.isMobileDevice,
                    c = $(".js-foot-home");
                this.views.badge = new b.Views[b.addToBrowser.viewType]({
                    impressionPixel: this.canShowMobileButton ? "atbbi" : "atbhi",
                    clickPixel: this.canShowMobileButton ? "atb0c" : "atbhc",
                    xPixel: "atbhx",
                    topRight: e,
                    fadeIn: e,
                    appendTo: e ? ".js-site-wrapper" : c,
                    hideOnClick: true
                });
                if (e) {
                    this.searchbar.on("typed", function() {
                        this.views.badge && this.views.badge.hide()
                    }.bind(this))
                }
                if (b.addToBrowser.canShowMobileBanner()) {
                    this.searchbar.$el.on("focusin", function() {
                        this.views.badge && this.views.badge.hide()
                    }.bind(this));
                    this.searchbar.$el.on("focusout", function() {
                        this.views.badge && this.views.badge.show(150)
                    }.bind(this))
                }
            } else {
                if (b.newsletter.shouldShowBadge()) {
                    this.views.newsletter = new b.Views.SubscribeToNewsletterBadge({
                        appendTo: ".js-site-wrapper"
                    });
                    b.pixel.fire("nli", b.newsletter.group, "home");
                    this.views.newsletter.show();
                    this.searchbar.on("typed", function() {
                        this.views.newsletter && this.views.newsletter.hide()
                    }.bind(this))
                }
            }
        },
        addOnboarding: function() {
            if (!this.views.onboardingEducation.$el || this.views.onboardingEducation.model.isDismissed) {
                this.views.onboardingEducation.model.isDismissed = false;
                this.views.onboardingEducation = new b.Views.OnboardingEducation({
                    appendTo: ".site-wrapper--home",
                    pageView: this,
                    learnMore: true
                });
                if (this.canShowHomepageEducationInstallButton()) {
                    this._addOnboardingEducationButtons()
                }
            }
            this.views.onboardingEducation.currentSlide = 1;
            this.views.onboardingEducation._snapToSlideScroll()
        }
    })
}(DDG);
DDG.assets_loaded = [];
DDG.templates = {};
DDG.first_result = "r1-0";
DDG.is_header_fixed = true;
DDG.first_source = false;
DDG.last_selection = "";
DDG.animation_speed = 300;
DDG.isJSURL = function(a) {
    return !a || a === "javascript:;" || a === "#"
};
DDG.detect_intent_link = function(a) {
    var b = 0;
    if (DDG.device.isIDevice && a.hostname == "itunes.apple.com") {
        b = 1
    } else {
        if (DDG.device.isAndroid && a.hostname == "play.google.com") {
            b = 1
        }
    }
    return b
};
DDG.get_http_redirect = function(e, f) {
    var b = e.href;
    if (DDG.settings.useRedirect() && e.href.indexOf("/l/?") == -1 && !DDG.isInternalURL(e.href) && !DDG.detect_intent_link(e)) {
        var c = b.match(/^https/) || DDG.device.isOnion,
            a = c ? "" : "http://r.duckduckgo.com";
        b = a + "/l/?kh=-1&uddg=" + encodeURIComponent(e.href);
        if (!(DDG.device.isEdge && f)) {
            nua("nul", e, 500)
        }
    }
    return b
};
DDG.get_query_encoded = function() {
    return rq
};
DDG.get_query = function() {
    return decodeURIComponentSafe(rq)
};
DDG.get_is_safe_search = function() {
    return DDG.settings.safeSearch.isStrict()
};
DDG.stem = function(a) {
    return a.replace(/(?:s)$/, "")
};
DDG.get_asset_path = function(b, a) {
    if (Spice && Spice.sharedir_map && Spice.sharedir_map[b]) {
        return "/share/" + Spice.sharedir_map[b].path + "/" + a
    }
    return "/share/spice/" + b + "/" + spice_version + "/" + a
};
DDG.get_now = function() {
    var a = new Date();
    return a.getTime()
};
DDG.$win = $(window);
DDG.$doc = $(document);
DDG.$html = $("html");
DDG._$cache = {};
DDG.$ = function(a) {
    return DDG._$cache[a.toString()] || (DDG._$cache[a.toString()] = $(a))
};
DDG._$classCache = {};
DDG.addClass = function(c, b, a) {
    DDG._$classCache[c + a] = true;
    b.addClass(a)
};
DDG.removeClass = function(c, b, a) {
    delete DDG._$classCache[c + a];
    b.removeClass(a)
};
DDG.hasClass = function(b, a) {
    return DDG._$classCache[b + a]
};
DDG.toggleClass = function(c, b, a) {
    if (DDG.hasClass(c, a)) {
        DDG.removeClass(c, b, a)
    } else {
        DDG.addClass(c, b, a)
    }
};
DDG.get_header_height = function() {
    return typeof DDG._header_height !== "undefined" ? DDG._header_height : (DDG._header_height = DDG.$("#header_wrapper").outerHeight())
};
DDG.add_sitelinks = function(j, g, b, f) {
    if (b && b[g] && b[g]["l"]) {
        b[g]["l"].forEach(function(p, m, k) {
            var q = m % 2 === 0;
            var i = m === 0;
            var o = m === k.length - 1;
            var n = (o && q && k.length > 1);
            p.id = "r1-" + (m + 1);
            p.nextRow = (q && !i && !o) || (n);
            p.domainName = f
        });
        var e = DDG.$exec_template("sitelinks", {
            links: b[g]["l"]
        });
        j.appendChild(e[0]);
        var a = function(i) {
            return nrl(i, this)
        };
        var h = $(e).find(".result__a");
        for (var c = 0; c < h.length; c++) {
            h[c].onclick = a
        }
        DDG.search.set("hasSiteLinks", true);
        DDG.pixel.fire("dli", {
            d: DDG.device.pixelId
        })
    }
};
DDG.touchOrClick = function(f, e, c) {
    c = typeof e === "object" ? e : c || {};
    e = typeof e === "function" ? e : null;
    var a, b = c.namespace || "touchOrClick";
    f = (typeof f === "string") ? $(f) : f;
    if (e) {
        if (Modernizr.touch) {
            f.on("touchstart." + b, function(g) {
                a = DDG.get_now();
                e(g)
            });
            f.on("click." + b, function(h) {
                var g = DDG.get_now();
                if (!a || (g - a) > 1000) {
                    a = 0;
                    return e(h)
                }
                a = 0;
                h.preventDefault();
                h.stopPropagation();
                return false
            })
        } else {
            f.on("click." + b, e)
        }
    } else {
        if (Modernizr.touch) {
            f.off("touchstart." + b);
            f.off("click." + b)
        } else {
            f.off("click." + b)
        }
    }
};
DDG.tap = function(c, k, a) {
    a = a || {};
    c = typeof c === "string" ? $(c) : c;
    var h, g, n, m, b, f, j = a.pxThreshold || 20,
        e = a.namespace || "tap",
        i = function() {
            h = g = n = m = b = f = 0
        };
    if (k) {
        c.on("touchstart." + e, function(o) {
            i();
            var p = o.originalEvent.touches && o.originalEvent.touches[0];
            if (p) {
                b = DDG.get_now();
                h = p.clientX;
                g = p.clientY
            }
        });
        c.on("touchmove." + e, function(o) {
            var p = o.originalEvent.touches && o.originalEvent.touches[0];
            if (p) {
                n = p.clientX;
                m = p.clientY
            }
        });
        c.on("touchend." + e, function(o) {
            if ((h && g && !(n && m)) || (Math.abs(n - h) < j && Math.abs(m - g) < j)) {
                f = true;
                k.call(this, o)
            }
        });
        c.on("click." + e, function(o) {
            if (f) {
                o.preventDefault();
                o.stopPropagation();
                i();
                return false
            } else {
                if (a.fallbackToClick) {
                    i();
                    k.call(this, o)
                }
            }
        })
    } else {
        c.off("touchstart." + e);
        c.off("touchmove." + e);
        c.off("touchend." + e);
        c.off("click." + e)
    }
};
DDG.linkClickWillOpenInNewTab = function(a) {
    return (a.ctrlKey || a.shiftKey || a.metaKey || (a.button && a.button == 1) || !DDG.settings.isDefault("kn"))
};

function ncku(a) {
    if (!DDG.device.isIE && !a.metaKey) {
        fa = 0
    }
}

function nckd(a) {
    if (!DDG.device.isIE && a.metaKey) {
        fa = 1
    }
}

function ncf(h) {
    var i, a, f, j, k;
    fmx = h.clientX;
    fmy = h.clientY;
    if (fmx > viewport_width - 100 && fmy > parseInt(viewport_height) - 17) {
        if (!DDG.deep.isLastResult && nrb) {
            nrb()
        }
    }
    i = "";
    if (h.srcElement) {
        i = h.srcElement
    } else {
        i = h.target
    }
    var g = 0;
    var c = 0;
    if (DDG.device.isIE && (nkdc(h) || nkdm(h))) {
        g = 1
    }
    if (DDG.device.isEdge && (nkdc(h) || nkdm(h))) {
        c = 1
    }
    var b = h.which && h.which == 2;
    var m = h.which && h.which == 3;
    if (c || g || b || m) {
        fm = 1;
        while (i && i != window) {
            if (i.nodeName && i.nodeName == "A") {
                if (DDG.isJSURL(i.href)) {
                    i.onclick();
                    return false
                } else {
                    i.href = DDG.get_http_redirect(i, m)
                }
                fl = 1;
                break
            }
            a = i.id;
            if (a && !m) {
                if (a == "links") {
                    break
                }
                if (rc && a == rc.id) {
                    nrg(rc, 0, h, 1)
                }
            }
            if (i.parentNode) {
                i = i.parentNode
            } else {
                break
            }
        }
        setTimeout(function() {
            fm = 0;
            fl = 0
        }, 1000)
    } else {
        fm = 0
    }
}

function ncg(a) {
    fmx = 0;
    fmy = 0;
    if (a.clientX > viewport_width - 25) {
        if (!DDG.deep.isLastResult && nrb) {
            nrb()
        }
    }
}

function nir(g) {
    var a, f, e, b, c;
    e = (g) ? ".highlight_" + g : ".result";
    a = $(e);
    a.each(function(h, j) {
        f = $(j);
        if (f.attr("data-nir")) {
            return
        }
        if (!is_mobile_device) {
            f.on("mouseenter", function(i) {
                if (fk || fe) {
                    return false
                }
                if (ky && ky == -1) {
                    return false
                }
                if (rc && rc != this) {
                    nua("nro", rc)
                }
                nua("nrv", this);
                rc = this
            });
            f.on("mouseleave", function(i) {
                if (fk || fe) {
                    return false
                }
                if (ky && ky == -1) {
                    return false
                }
                nua("nro", this)
            })
        }
        if (g != "a") {
            f.click(function(i) {
                if (this.id !== "did_you_mean") {
                    organicClick(this, i)
                }
                if (!fe) {
                    nrg(this, 0, i, 0)
                }
            })
        }
        f.attr("data-nir", 1);
        if (!g || g == "a" || g == "v") {
            b = f.find("a");
            for (c = 0; c < b.length; c++) {
                if (!b[c].onclick && !rs) {
                    b[c].onclick = function(i) {
                        this.blur();
                        return nrl(i || window.event, this)
                    }
                } else {
                    if (!b[c].onclick) {
                        b[c].onclick = function() {
                            this.blur();
                            fl = 1
                        }
                    }
                }
                if (kn && kn === "1" && !DDG.isInternalURL(b[c].href)) {
                    b[c].target = "_blank"
                }
            }
        }
    })
}

function nis() {
    var e, a;
    if (fq) {
        return false
    }
    var c = DDG.backData.getId(),
        b = DDG.backData.getData();
    if (c && c.match(/^r1/)) {
        DDG.deep.lastClickedId = c;
        DDG.deep.lastPage = b.page;
        nrm(5, c)
    } else {
        rc = d.getElementById(DDG.first_result)
    }
    fs = 0;
    if (!DDG.deep.isLastResult && nrb) {
        nrb()
    }
}

function nkda(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    nrm(1)
}

function nkua(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    nrm(2)
}

function nke(c) {
    if (fq) {
        return false
    }
    if (c && (nkdc(c) || nkdm(c) || nkds(c) || nkdt(c) || fa)) {
        return false
    }
    fk = 1;
    if (rc && (!kn || kn != "1")) {
        var b = new RegExp("rl([ei])(\\d+)-(\\d+)");
        var a = new RegExp("^r2-(\\d+)$");
        if (rc.id && b.test(rc.id)) {
            if (a.test(rc.nextSibling.firstChild.id)) {
                rc = rc.nextSibling.firstChild
            } else {
                rc = rc.nextSibling.firstChild.nextSibling
            }
            nrv(rc)
        } else {
            rc.click()
        }
    }
}

function nko(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (rc) {
        rc.click()
    }
}

function nkt(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    rc = "";
    DDG.device.scrollTop(0)
}

function nkd(b) {
    if (fq) {
        return false
    }
    if (b && (nkdc(b) || nkdm(b) || nkds(b) || nkdt(b) || fa)) {
        return false
    }
    fk = 1;
    var a = rc.getElementsByTagName("a");
    nrg(rc, null, null, null, a[a.length - 1])
}

function nkn(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    fn = 1;
    if (rc) {
        rc.click()
    }
}

function nkm(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (d.getElementById(DDG.first_result)) {
        nrm(5, DDG.first_result)
    }
}

function nksb(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (!DDG.deep.isLastResult && nrb) {
        nrb()
    }
}

function nks(b) {
    if (fq) {
        return false
    }
    if (b && (nkdc(b) || nkdm(b) || nkds(b) || fa)) {
        return false
    }
    fk = 1;
    setTimeout("d.x.q.focus()", 10);
    setTimeout("d.x.q.select()", 15);
    var a = DDG.settings.get("ko");
    if (a == "s" || a == "d") {
        setTimeout(function() {
            DDG.device.scrollTop(0)
        }, 10)
    }
}

function nkdc(a) {
    var b;
    if (a) {
        b = a.ctrlKey
    }
    return b
}

function nkdm(a) {
    var b;
    if (!DDG.device.isIE && a) {
        b = a.metaKey
    }
    return b
}

function nkdt(a) {
    var b;
    if (a) {
        b = a.altKey
    }
    return b
}

function nkds(a) {
    var b;
    if (a) {
        b = a.shiftKey
    }
    return b
}

function nkf(c) {
    var b, a;
    if (DDG.device.isIE) {
        b = c.clientX + d.body.scrollLeft;
        a = c.clientY + d.body.scrollTop
    } else {
        b = c.pageX;
        a = c.pageY
    }
    if (fk && sx && sy && (sx != b || sy != a)) {
        fk = 0
    }
    sx = b;
    sy = a
}
var mousewheelevt = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
if (document.attachEvent) {
    document.attachEvent("on" + mousewheelevt, nkw)
} else {
    if (document.addEventListener) {
        document.addEventListener(mousewheelevt, nkw, false)
    }
}

function nkw(a) {
    if (DDG.device.isOpera && !DDG.deep.isLastResult && nrb) {
        nrb()
    }
    fk = 0
}

function nrv(a, h, q, c) {
    if (!a) {
        return false
    }
    var g, n, r, o, m, k, f, j, p, e;
    g = a;
    a = a.parentNode;
    if (g.id == "r1-" + (parseInt(r1c) - 1)) {
        if (DDG.deep.lastClickedId && kc === "-1" && DDG.deep.lastPage > DDG.deep.pageNumber) {
            if (!DDG.deep.isLastResult && nrb) {
                nrb("", 1)
            }
        } else {
            if (!DDG.deep.isLastResult && nrb && (!kc || kc != "-1")) {
                nrb("", 1)
            }
        }
    }
    if (!h) {
        var b = $(g);
        if (!b.hasClass("highlight")) {
            b.addClass("highlight");
            if (b.hasClass("highlight_sponsored")) {
                b.addClass("highlight_sponsored_hover")
            }
            n = nun(g);
            o = b.offset().top;
            m = DDG.device.scrollTop();
            if (c && n && !fq && o > m) {
                n.focus();
                n.onclick = function(i) {
                    return nrl(i, this)
                }
            }
        }
    }
}

function nro(j) {
    var h, f, e, b, g, c;
    if (!j) {
        return false
    }
    var a = $(j);
    if (a.hasClass("highlight")) {
        a.removeClass("highlight");
        if (a.hasClass("highlight_sponsored_hover")) {
            a.removeClass("highlight_sponsored_hover")
        }
        h = nun(j);
        if (h && !fq) {
            h.blur()
        }
    }
}

function nrs(b, f, e) {
    var g, a, c, i, h;
    g = $(b).offset().top;
    c = $(b).outerHeight();
    a = DDG.device.scrollTop();
    h = viewport_height / 2;
    if (!c || g == a) {
        return
    }
    if (f || g + c + 10 > viewport_height + a || g - 10 < a) {
        i = g - h;
        if (!e || e == 1 && g - a > h || e == -1 && g - a < h) {
            DDG.device.scrollTop(i)
        }
    }
}

function nrj(c, f) {
    if (DDG.assets_loaded[c]) {
        return false
    }
    DDG.assets_loaded[c] = 1;
    var b, a;
    b = d.createElement("script");
    b.type = "text/javascript";
    if (!f) {
        b.async = true
    } else {
        b.async = false
    }
    b.src = c;
    if (c && c.match(/\/d\.js/)) {
        var e = "https://duckduckgo-owned-server.yahoo.net";
        if (c.indexOf(e) > -1) {
            b.onerror = function(g) {
                c = c.replace(e, "");
                nrj(c, f)
            }
        }
    }
    a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(b, a);
    return b
}

function nrje(b, c) {
    var a = {
        "de-de": 0,
        "us-en": 1,
        "wt-wt": 1
    };
    if (DDG.extension.isInstalled()) {
        b += "&ext=1";
        c += "&ext=1"
    }
    if (c && (a[rl] && Math.random() < a[rl]) || (DDG.querystringParam("df"))) {
        nrj(c)
    } else {
        nrj(b)
    }
}

function nrc(c) {
    if (DDG.assets_loaded[c]) {
        return false
    }
    DDG.assets_loaded[c] = 1;
    var b, a;
    b = d.createElement("link");
    b.type = "text/css";
    b.rel = "stylesheet";
    b.async = true;
    b.href = c;
    b.media = "screen";
    a = document.getElementsByTagName("head")[0];
    a.parentNode.insertBefore(b, a)
}

function nrg(h, b, e, f, c) {
    var a, g;
    if (!b) {
        b = 0
    }
    e = e || window.event;
    if (!c) {
        c = h.getElementsByTagName("a")[0]
    }
    if (!f) {
        f = nkdc(e) || nkdm(e) || fn
    }
    if (!f && kn && kn == "1") {
        f = 1
    }
    if (is_mobile_device) {
        if (rc && rc != h) {
            nro(rc)
        }
        nrv(h);
        rc = h
    }
    if (!DDG.isJSURL(c.href)) {
        h && DDG.backData.set(h.id, {
            adx_name: DDG.page.ads.adxExperiment,
            page: DDG.deep.pageNumber
        });
        if (fl) {
            fl = 0
        } else {
            fl = 1;
            a = DDG.get_http_redirect(c);
            if (f) {
                nug(a, f)
            } else {
                nua("nug", a, "", "", "", f)
            }
        }
    } else {
        if (fl) {
            fl = 0
        } else {
            if (DDG.isJSURL(c.href)) {
                c.onclick()
            }
        }
    }
}

function nrl(b, a) {
    var c, e;
    b = b || window.event;
    fl = 1;
    c = nkdc(b) || nkdm(b) || "";
    if (!c && kn && kn == "1" && a && a.href && !DDG.isInternalURL(a.href)) {
        c = 1
    }
    if (!c && a.target && a.target === "_blank") {
        c = 1
    }
    if (!c && (nkds(b) || fm || b.button && (b.button == 1 || DDG.device.isIE && b.button == 4))) {
        c = 1
    }
    if (c) {
        a.href = DDG.get_http_redirect(a);
        if (nkds(b) && !DDG.device.isIE && !DDG.device.isSafari) {
            nua("nug", a.href, "", "", "", c);
            return false
        } else {
            return true
        }
    } else {
        e = DDG.get_http_redirect(a);
        nua("nug", e);
        return false
    }
}

function nrrel(o) {
    var m, b, n, a, g, f, h, k, c, j;
    if (d.getElementById("nrreld")) {
        return
    }
    if (DDG.deep.hideNoResults) {
        return
    }
    a = d.getElementById("links");
    k = o.r && o.r.length && !DDG.deep.hideRelated ? 1 : 0;
    g = d.createElement("div");
    g.id = "nrreld";
    g.className = "no-results";
    if (d.getElementById("zero_click_answer") && !r1c) {
        $(g).addClass("t-m")
    }
    if (rq.indexOf("sort%3Adate") != -1 || rq.indexOf("s%3Ad") != -1) {
        c = 1
    } else {
        c = ""
    }
    f = d.createElement("div");
    f.innerHTML = "No " + (r1c ? "more " : "") + (c ? "date " : "") + "results." + (k ? " Try:" : "");
    g.appendChild(f);
    if (k) {
        g.className += " has-related";
        for (var e = 0; e < o.r.length; e++) {
            b = o.u[e];
            m = o.r[e];
            f = d.createElement("div");
            h = d.createElement("a");
            h.href = "/?q=" + encodeURIComponent(b) + (kurl ? kurl : "");
            h.onclick = function() {
                DDG.pixel.fire("rc")
            };
            if (kurl) {
                h.href += kurl
            }
            h.innerHTML = m;
            f.className = "no-results__related-search";
            f.appendChild(h);
            g.appendChild(f)
        }
    }
    f = d.createElement("div");
    g.appendChild(f);
    a.appendChild(g);
    DDG.pixel.fire("related", {
        l: k
    })
}

function nrb(b, c) {
    var e, p, g, j, n, m, o, f, a, h, k;
    if (!DDG.duckbar.areOrganicsShowing()) {
        return
    }
    if (fs) {
        return false
    }
    fs = 1;
    n = document.body.scrollHeight;
    m = DDG.device.scrollTop();
    g = m + viewport_height >= n - 500 ? 1 : 0;
    j = 0;
    if (!c && fmx && fmy && fmx > viewport_width - 100 && fmy < parseInt(viewport_height) - 17) {
        fs = 0;
        return
    }
    if (g || j || c) {
        for (f = parseInt(r1c) - 1; f >= 0; f--) {
            k = "r1-" + (f + ((slo) ? slo : 0));
            a = d.getElementById(k);
            h = a && a.parentNode;
            if ($(h).css("display") == "block") {
                nrm(7, k);
                break
            }
        }
    }
    fs = 0
}

function nrm(q, m) {
    var o, g, f, c, e, a, v, n, u, i, r, j, h, t, z, s, b, p;
    if (fq) {
        return false
    }
    if (fo) {
        setTimeout("nrm(" + q + ",'" + m + "')", 100);
        return false
    }
    fo = 1;
    o = new RegExp("r(\\d+)-(\\d+)");
    g = new RegExp("rl([ei])(\\d+)-(\\d+)");
    f = new RegExp("rld-(\\d+)");
    if (m) {
        if (o.test(m)) {
            c = RegExp.$1 || 0;
            e = RegExp.$2 || 0
        } else {
            if (m == "zero_click_wrapper") {
                c = 1;
                e = -1
            } else {
                fo = 0;
                return false
            }
        }
    } else {
        if (rc && rc.id == "zero_click_wrapper") {
            c = 1;
            e = -1
        } else {
            if (rc && o.test(rc.id)) {
                c = RegExp.$1 || 0;
                e = RegExp.$2 || 0
            } else {
                if (rc && g.test(rc.id)) {
                    c = rs ? 1 : 2;
                    r = 1
                } else {
                    if (rc && f.test(rc.id)) {
                        c = 1;
                        r = 1
                    } else {
                        rc = d.getElementById(DDG.first_result);
                        if (!rc) {
                            rc = d.getElementById("zero_click_wrapper")
                        }
                        if (!rc) {
                            fo = 0;
                            return false
                        } else {
                            e = 0;
                            c = 1
                        }
                    }
                }
            }
        }
    }
    switch (q) {
        case 1:
            if (rc && rc.id && rc.id == DDG.first_result && !$(rc).hasClass("highlight")) {} else {
                e++
            }
            break;
        case 2:
            e--;
            break;
        case 3:
            c++;
            e = 0;
            break;
        case 4:
            c--;
            e = 0;
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            e++;
            break;
        default:
            e++
    }
    n = "r" + c + "-" + e;
    if (e <= -1) {
        n = "zero_click_wrapper"
    }
    u = d.getElementById(n);
    i = 0;
    if (m) {
        i = d.getElementById(m)
    }
    if (q == 1 && c == 2 && !u && r1c) {
        n = DDG.first_result;
        u = d.getElementById(n)
    }
    z = DDG.device.scrollTop();
    if (q == 1) {
        if ($("#" + n).length > 0) {
            t = $("#" + n).offset().top
        }
        if (t && (t < z || t > (z + 1.5 * viewport_height))) {
            a = 0;
            while (a > -1) {
                v = d.getElementById("r1-" + a);
                if (!v) {
                    break
                }
                b = $(v);
                t = b.offset().top;
                p = 10;
                s = b.height() + p;
                if (t - s < z && z !== 0) {
                    a++
                } else {
                    u = v;
                    break
                }
            }
        }
    }
    if (q == 2 && n !== "zero_click_wrapper") {
        if ($("#" + n).length > 0) {
            t = $("#" + n).offset().top
        }
        if (t < (z - 0.5 * viewport_height) || t > (z + viewport_height)) {
            a = r1c - 2;
            while (a > 0) {
                v = d.getElementById("r1-" + a);
                if (!v) {
                    break
                }
                b = $(v);
                t = b.offset().top;
                p = 10;
                s = Math.max(b.height(), 90) + p;
                if (t + s > (z + viewport_height)) {
                    a--
                } else {
                    u = v;
                    break
                }
            }
        }
    }
    if (i && !u && q == 7 && i.nextSibling && i.nextSibling.firstChild) {
        var k = i.nextSibling;
        if (k.className.indexOf("results--ads") > -1) {
            k = k.nextSibling
        }
        if (k.firstChild && k.firstChild.onclick) {
            k.firstChild.onclick()
        }
        fo = 0;
        return
    } else {
        if (!i && !u && q == 7 && rc && rc.nextSibling && rc.nextSibling.firstChild) {
            var k = rc.nextSibling;
            if (k.className.indexOf("results--ads") > -1) {
                k = k.nextSibling
            }
            if (k.firstChild && k.firstChild.onclick) {
                k.firstChild.onclick()
            }
            fo = 0;
            return
        }
    }
    if ((n == "zero_click_wrapper") && $(u).css("display") == "none") {
        fo = 0;
        return
    }
    if (r) {
        switch (q) {
            case 1:
                if (c == 2) {
                    u = rc.nextSibling.nextSibling;
                    if (!u) {
                        n = DDG.first_result;
                        u = d.getElementById(n)
                    } else {
                        if ($(u).css("display") == "none") {
                            u = u.nextSibling.firstChild;
                            if (!u.id && u.nextSibling) {
                                u = u.nextSibling
                            }
                        }
                    }
                } else {
                    if (c == 1 && rc.nextSibling.nextSibling) {
                        u = rc.nextSibling.nextSibling.nextSibling
                    } else {
                        if (1) {
                            n = DDG.first_result;
                            u = d.getElementById(n)
                        } else {
                            u = rc.nextSibling.firstChild
                        }
                    }
                }
                break;
            case 2:
                u = rc.previousSibling.previousSibling;
                if ($(u).css("display") == "none") {
                    u = u.nextSibling.lastChild
                }
                break;
            case 4:
                break;
            case 7:
                if (rc.nextSibling.nextSibling) {
                    u = rc.nextSibling.nextSibling.nextSibling
                } else {
                    u = rc.nextSibling.firstChild
                }
                break;
            default:
                fo = 0;
                return false
        }
    }
    if (u) {
        if (c == 1 && g.test(u.id)) {
            u = u.nextSibling.firstChild
        }
        if (q != 7) {
            if (rc) {
                nua("nro", rc)
            }
        }
        if (q != 5 && (c == 2 || rs) && $(u.parentNode).css("display") == "none") {
            j = u;
            while (j.parentNode.id != "zero_click_topics" && j.parentNode.id != "links" && j.parentNode.id != "content") {
                j = j.parentNode;
                if (!h && $(j).css("display") == "block") {
                    h = j
                }
            }
            if (h && r) {
                u = j.nextSibling.nextSibling
            } else {
                if ($(j).css("display") == "none") {
                    u = j.previousSibling
                } else {
                    if (j.nextSibling && $(j.nextSibling).css("display") == "block") {
                        u = h.lastChild.previousSibling
                    } else {
                        if (q == 2 && j.previousSibling) {
                            u = j.previousSibling
                        } else {
                            if (q == 1 && j.nextSibling && $(j.nextSibling).css("display") == "none") {
                                u = j.nextSibling.nextSibling.firstChild.nextSibling
                            } else {
                                if (q == 1 && !j.nextSibling) {
                                    u = j.previousSibling
                                }
                            }
                        }
                    }
                }
            }
            if (g.test(u.id) && rs && RegExp.$1 == "e") {
                u = u.nextSibling.firstChild
            }
        }
        nua("nrv", u, 0, 1, 0, q == 7 ? 1 : 0, q == 5 || q == 7 ? 1 : 0, 1);
        if (q != 7) {
            rc = u
        }
        if (q != 7 && rc && rc.id) {
            if (fk && (e > 6 + slo || q == 2)) {
                if (!DDG.device.isOpera) {
                    nua("nrs", rc, 0, 1, 0, 1, q == 5 ? 0 : q == 1 ? 1 : -1)
                } else {
                    nrs(rc, 1, q == 5 ? 0 : q == 1 ? 1 : -1)
                }
            } else {
                if (!DDG.device.isOpera) {
                    nua("nrs", rc, 0, 1)
                } else {
                    nrs(rc, 0, 0)
                }
            }
        }
    } else {
        if (c == 1 && n != "zero_click_wrapper" && !DDG.deep.isOutOfResults && (!rs || !it) && DDG.deep.lastPage >= DDG.deep.pageNumber) {
            nrv(d.getElementById("r1-" + parseInt(r1c - 1)), 1);
            setTimeout("nrm(" + q + ",'" + m + "')", 100)
        }
    }
    if (DDG.device.isOpera && q == 1 && nrb) {
        nrb()
    }
    fo = 0
}

function nrn(aa, ar, H, X) {
    if (!aa || !ar) {
        return
    }
    if (!H) {
        DDG.deep.nrnWrapper(aa, ar);
        return
    }
    var ag, n, r, aF, aD, aB, aA, p, k, E, D, B, A, U, q, T, F, an, h, aq, ap, e, R, Q, P, L, ay, Y, K, J, I, c, ai, N, M, aj, S, s, aK, av, aH, ax, Z, b, aw;
    var g = DDG.page.ads.canShowRightRailAds();
    var a = DDG.page.ads.canShowGoodAdsLayout();
    var G = false;
    c = ar.length;
    if (aa === "d") {
        an = "1";
        F = d.getElementById("links");
        h = r1c;
        if (!DDG.deep.started) {
            aH = 1;
            DDG.deep.set("started", new Date().getTime())
        }
    } else {
        if (aa === "a") {
            h = r3c;
            an = "a";
            G = !h && (DDG.deep.pageNumber === 1 || DDG.page.ads.pendingAds);
            var aM = 3;
            if (DDG.device.isMobile) {
                aM = 1
            }
            if (c > aM) {
                ar = ar.slice(0, aM);
                c = ar.length
            }
            if (DDG.page.ads.isBlocked()) {
                return
            }
            if (!DDG.page.ads.hasAds() && G && DDG.deep.timeSinceFinished() > 500) {
                return
            }
            if (G) {
                DDG.page.ads.setAds(ar)
            }
            if (G) {
                var aI = $(".js-sidebar-ads"),
                    o = DDG.page.ads.rightRailBoth,
                    f = DDG.page.ads.rightRailSecond;
                if (f || o || (DDG.page.ads.ads.length > 2 && g)) {
                    aI.addClass("results--ads results--ads--rrail has-ad");
                    $("html").addClass("has-right-rail-ads")
                }
                if (o) {
                    F = aI[0]
                } else {
                    F = d.getElementById("ads")
                }
            } else {
                var aG = DDG.page.ads.hasSiteLinks(ar) ? "has-ad--sitelinks" : "",
                    t;
                t = $('<div class="results--ads has-ad ' + aG + '"></div>');
                $("#links").append(t);
                F = t[0]
            }
        }
    }
    D = B = A = "";
    if (!c && (aa == "r" && rsc <= 0 || aa == "d" && rv == "d")) {
        if (aa == "d" && !r1c) {
            r = d.getElementById("rfd");
            $(r).css("display", "none")
        }
        aa = "r";
        ar.x = new Array();
        ar.x["t"] = "EOH"
    }
    aj = 0;
    if (aa == "d" && (!ar.length || ar[c - 1]["t"] == "EOP" || ar[c - 1]["t"] == "EOF")) {
        aj = 1;
        DDG.deep.set("isOutOfResults", true);
        DDG.deep.set("isLastResult", true);
        if (ar.length && ar[c - 1]["t"] == "EOP") {
            aj = 2
        }
        if (c === 1 && aH) {
            DDG.pixel.fire("nre")
        }
    }
    if (aa == "d") {
        $(".js-results-loading").remove();
        if (c > 1) {
            $(".js-result-sep.is-hidden").removeClass("is-hidden")
        }
    }
    P = L = ai = N = M = 0;
    for (var n = 0; n < c; n++) {
        P++;
        s = 0;
        if (!ar[n]) {
            continue
        }
        if (!aw && n > 0) {
            slo = $(".js-sitelink").length;
            aw = true
        }
        if (!DDG.settings.isDefault("k1") && ar[n]["p"]) {
            continue
        }
        if (aa === "a" && ((n > 0 && DDG.page.ads.rightRailSecond) || (n > 1 && g))) {
            F = $(".js-sidebar-ads")[0]
        }
        if (!Z && aa == "d" && ar[n]["k"]) {
            Z = n
        }
        if (P == 1 && rv == "i") {
            setTimeout('top.location.replace("' + ar[n]["u"] + '")', 100);
            return
        }
        var am = ar[n]["u"] || "";
        var aE = ar[n]["d"] || "";
        aE = aE.split("/");
        var ay = aE.shift() || "";
        var Y = aE.join("/") || "";
        S = 0;
        if (aa == "d" && ar[n]["t"] == "EOP") {
            S = 1;
            continue
        } else {
            if (aa == "d" && ar[n]["t"] == "EOF") {
                S = 1;
                continue
            }
        }
        if (aa == "d" && !S && !ar[n]["p"]) {
            if (!ay || DDG.deep.resultDomains[ar[n]["u"]]) {
                if (L == 0 && P == c && !aH && !DDG.deep.hideNoResults) {
                    nrj("/l.js?q=" + rq);
                    aj = 1
                }
                if (P == c) {
                    s = 1
                } else {
                    continue
                }
            } else {
                DDG.deep.resultDomains[ar[n]["u"]] = ar[n]["u"]
            }
            if (n == (c - 1) && ar[n]["n"]) {
                DDG.page.deepNextURL = ar[n]["n"]
            }
        }
        if (rv == "d" && aa == "d") {
            rsc++;
            nrj("/r.js?u=" + encodeURIComponent(ar[n]["c"]) + "&q=" + rq + (!DDG.settings.safeSearch.isStrict() ? "&p=1" : ""));
            if (h != 0) {
                continue
            }
        }
        if (!s) {
            L++;
            r = d.createElement("div");
            r.id = "r" + an + "-" + (h + ((h === 0) ? 0 : slo));
            h++;
            $(r).addClass("result results_links" + (aa == "d" && !ar[n]["h"] ? "_deep" : "") + " highlight_" + aa);
            if (a && aa == "a") {
                $(r).addClass("result--ad--good")
            }
            if (aa == "d") {
                var v = ar[n]["t"] + " " + ar[n]["a"]
            }
            if (aa === "a" && ar[n]["adn"]) {
                r.setAttribute("data-adn", ar[n]["adn"])
            }
            if (aa === "a" && ar[n]["relevancy"]) {
                r.setAttribute("data-rel", JSON.stringify(ar[n]["relevancy"]))
            }
            if (aa === "a" && ar[n]["adf"]) {
                r.setAttribute("data-adf", 1)
            }
            if (aa == "i" && !rii) {
                rii = r.id
            } else {
                if (aa == "n" && !rin) {
                    rin = r.id
                } else {
                    if (aa == "t" && !rir) {
                        rir = r.id
                    }
                }
            }
            r.setAttribute("data-domain", ay);
            var ah = d.createElement("a");
            ah.href = am;
            r.setAttribute("data-hostname", ah.hostname)
        }
        if (ar[n]["da"]) {
            DDG.search.deepAnswerIAs["r" + (h - 1)] = ar[n]["da"]
        }
        if (aa == "d" && !aj && P == c && !ai && X || aa == "r" && rsc <= 0) {
            aF = d.createElement("div");
            $(aF).addClass("result  result--more");
            k = d.createElement("a");
            k.href = "javascript:;";
            k.onclick = function() {
                nsr(this)
            };
            if (aa == "d" || aa == "r") {
                k.className = "result__a";
                if (aa == "d") {
                    aF.id = "rld-" + ++rdc
                } else {
                    if (aa == "r") {
                        aF.id = "rle0-1"
                    }
                }
                if (aa == "r" && !r1hc) {
                    k.appendChild(d.createTextNode(l("Get Web links") + "..."))
                } else {
                    k.appendChild(d.createTextNode(l("Load More")));
                    k.className = "result--more__btn  btn  btn--alt  btn--full"
                }
            } else {
                if (aa == "t") {
                    aF.id = "rli1-" + ++rtc;
                    k.appendChild(d.createTextNode(l("More Related Topics") + "..."))
                }
            }
            aF.appendChild(k);
            if (aa == "r" && !s) {
                ai = aF;
                M = aD
            } else {
                if (aa == "r") {
                    F.appendChild(aD)
                }
                F.appendChild(aF)
            }
            aF = d.createElement("div");
            if (aa == "d") {
                aF.id = "rrd-" + rdc
            } else {
                if (aa == "r") {
                    aF.id = "rre0-1"
                } else {
                    if (aa == "t") {
                        aF.id = "rri1-" + rtc
                    }
                }
            }
            $(aF).css("display", "none");
            if (aa == "r") {
                aD = d.createElement("div");
                aD.id = "r" + an + "-" + h++;
                aF.appendChild(aD)
            }
            if (aa == "r" && !s) {
                N = aF
            } else {
                F.appendChild(aF);
                F = aF;
                ai = 1;
                if (aa == "r" && h <= 6) {
                    nua("nsr", F.previousSibling.firstChild, 0, 0, 0, 1)
                }
            }
        }
        if (s) {
            continue
        }
        F.ig = "result__icon__img";
        var W = "";
        if (ar[n]["i"] != "") {
            W = d.createElement("span");
            W.className = "result__icon";
            if (kf == "-1") {
                W.className += " is-hidden"
            }
            if (aa != "a") {
                var az = ar[n]["i"];
                q = l("Search domain %s", az)
            }
            var aC = typeof ar[n]["i"] === "string" && ar[n]["i"].indexOf("http") == 0 ? "/iu?u=" + ar[n]["i"] : DDG.get_favicon_url(ar[n]["i"]);
            U = d.createElement("img");
            U.height = 16;
            U.width = 16;
            U.title = q;
            U.className = F.ig + " js-lazyload-icons";
            if (DDG.deep.pageNumber === 1) {
                U.setAttribute("data-src", aC)
            } else {
                U.setAttribute("src", aC)
            }
            if (aa == "a") {
                W.appendChild(U)
            } else {
                k = d.createElement("a");
                k.href = (DDG.search.isSiteQuery ? "/?q=" + rq : "/?q=" + rq + "+site:" + ar[n]["i"]) + (kurl ? kurl : "");
                k.title = q;
                k.appendChild(U);
                k.onclick = function() {
                    fl = 1
                };
                W.appendChild(k)
            }
        }
        aF = d.createElement("div");
        $(aF).addClass("result__body  links_" + (an == 1 || an == "a" ? "main" : "zero_click"));
        if ((aa == "d" || aa == "a") && !ar[n]["h"]) {
            $(aF).addClass("links_deep")
        }
        var u;
        if (aa != "r") {
            k = d.createElement("a");
            u = d.createElement("a");
            if (aa == "d" || aa == "a") {
                k.className = "result__a";
                k.setAttribute("rel", "noopener");
                u.setAttribute("rel", "noopener");
                u.className = "result__check";
                u.innerHTML = '<span class="result__check__tt">' + l("Your browser indicates if you've visited this link") + "</span>"
            }
            k.href = ar[n]["c"];
            u.href = ar[n]["c"];
            if (kn && kn == "1" && k && k.href && k.getAttribute("href").indexOf("http") != -1) {
                k.target = "_blank";
                u.target = "_blank"
            }
            ax = d.createElement("h2");
            ax.className = "result__title";
            k.innerHTML = ar[n]["t"];
            E = k;
            ax.appendChild(k);
            ax.appendChild(u);
            aF.appendChild(ax)
        }
        if (aa == "d" || aa == "a") {
            if (ar[n]["h"] && ar[n]["a"]) {
                p = d.createElement("span");
                p.innerHTML = " " + ar[n]["a"];
                aF.appendChild(p)
            } else {
                if (ar[n]["a"]) {
                    aB = d.createElement("div");
                    aB.className = "result__snippet";
                    if (aa == "a") {
                        B = d.createElement("a");
                        B.href = ar[n]["c"];
                        B.setAttribute("rel", "noopener");
                        if (kn && kn == "1" && B.getAttribute("href").indexOf("http") != -1) {
                            B.target = "_blank"
                        }
                        $(B).html(ar[n]["a"]);
                        aB.appendChild(B)
                    } else {
                        var aL = ar[n]["a"];
                        if (aL.match(/^[A-Z][a-z][a-z]\s[0-9]+?,\s[0-9]+\s·\s/)) {
                            aL = aL.replace(/^([A-Z][a-z][a-z]\s[0-9]+?,\s[0-9]+\s·)/, '<span class="result__date">$1</span>')
                        }
                        aB.innerHTML = aL
                    }
                    aF.appendChild(aB)
                }
            }
            aD = d.createElement("div");
            aD.className = "result__extras";
            aA = d.createElement("div");
            aA.className = "result__extras__url";
            if (W) {
                aA.appendChild(W)
            }
            aD.appendChild(aA);
            D = d.createElement("a");
            D.className = "result__url";
            D.setAttribute("rel", "noopener");
            D.href = ar[n]["c"];
            if (kn && kn == "1" && D.getAttribute("href").indexOf("http") != -1) {
                D.target = "_blank"
            }
            if (aa !== "a") {
                var ac, ab, ak;
                ak = D.protocol === "https:" ? D.protocol + "//" + D.hostname : ay;
                ac = d.createElement("span");
                ac.className = "result__url__domain";
                ac.appendChild(d.createTextNode(ak));
                ab = d.createElement("span");
                ab.className = "result__url__full";
                if (Y) {
                    ab.appendChild(d.createTextNode("/" + Y))
                }
                D.appendChild(ac);
                D.appendChild(ab)
            } else {
                D.appendChild(d.createTextNode(ar[n]["d"]))
            }
            aA.appendChild(D);
            var O = (a && ((DDG.page.ads.siteLinksSecondAdOnly && n > 0) || (DDG.page.ads.siteLinksFirstAdOnly && n === 0) || DDG.page.ads.siteLinksBothAds));
            if (ar[n]["l"] && aa === "a") {
                p = d.createElement("span");
                var m = "result__sitelinks";
                p.className = m;
                var aJ = splitSitelinks(ar[n]["l"], O);
                var V = (O && (ar[n]["l"].indexOf("sponsored__sitelink-description") > -1));
                if (V && a) {
                    r.setAttribute("data-sld", V)
                }
                if (a && V) {
                    aJ = aJ.slice(0, 3);
                    p.innerHTML = getGoodAdSitelinks(aJ)
                } else {
                    if (a && !V) {
                        p.className += " result__sitelinks--nodesc";
                        aJ = aJ.slice(0, 6)
                    } else {
                        aJ = aJ.slice(0, 3)
                    }
                    var af = "js-sitelink-comma sponsored__sitelink__comma";
                    var at = '<span class="' + af + '">,</span>';
                    p.innerHTML = aJ.join(at)
                }
                aB.appendChild(p);
                if (aa == "a") {
                    var ao = $(p).find("a");
                    if (ao.length) {
                        ao.each(function() {
                            $(this).click(function(j, i, x) {
                                adClick(j, i, x);
                                return nrl(x, this)
                            }.bind(this, ar[n].s, r))
                        })
                    }
                }
            }
            if (!S) {
                if (ar[n]["e"]) {
                    p = d.createElement("span");
                    p.className = "result__menu  result__menu--show";
                    p.innerHTML = ar[n]["e"];
                    aD.appendChild(p)
                }
                if (!DDG.search.isSiteQuery && !ar[n]["p"]) {
                    A = d.createElement("a");
                    A.href = "/?q=" + rq + "+site:" + ar[n]["i"];
                    if (kurl) {
                        A.href += kurl
                    }
                    var ad = lp("additional_info_at", "More results"),
                        az = ar[n]["i"];
                    A.appendChild(d.createTextNode(ad));
                    A.title = l("Search domain %s", az);
                    A.className = "result__menu";
                    aD.appendChild(A)
                } else {
                    if (ar[n]["p"]) {
                        A = d.createElement("a");
                        A.href = "https://duck.co/help/company/advertising-and-affiliates";
                        A.onclick = function() {
                            fl = 1
                        };
                        var ae = l("Ad");
                        A.appendChild(d.createTextNode(ae));
                        A.className = "badge--ad";
                        var au = d.createElement("span");
                        au.className = "badge--ad-wrap";
                        au.innerHTML = "&nbsp;";
                        au.appendChild(A);
                        ax.appendChild(au);
                        r.className += "  result--ad  highlight_sponsored  sponsored";
                        if (r.id == DDG.first_result) {
                            DDG.first_result = "r" + an + "-" + h
                        }
                        if (n === 0 && DDG.page.ads.smallFirst || n === 1 && DDG.page.ads.smallSecond || n > 1) {
                            r.className += " result--ad--small"
                        }
                    }
                }
            }
            if ((!aB || !kai || kai != "1")) {
                aF.appendChild(aD)
            } else {
                aF.insertBefore(aD, aF.lastChild);
                r.className += " result--url-above-snippet"
            }
        } else {
            if (aa == "t" && ar[n]["a"] != "") {
                p = d.createElement("span");
                p.innerHTML = " - " + ar[n]["a"];
                p.className = "hidden";
                $(p).css("display", "none");
                aF.appendChild(p)
            } else {
                if (aa == "i") {} else {
                    if (aa == "r") {
                        $(aF).addClass("result__snippet");
                        aF.innerHTML += ar[n]["a"] + "<br>";
                        k = d.createElement("a");
                        k.href = ar[n]["c"];
                        if (kn && kn == "1" && k.getAttribute("href").indexOf("http") != -1) {
                            k.target = "_blank"
                        }
                        k.innerHTML += "" + ar[n]["d"];
                        aF.appendChild(k);
                        if (ar[n]["t"]) {
                            p = d.createElement("span");
                            $(p).addClass("result__url");
                            p.innerHTML += " [" + ar[n]["t"] + "]";
                            aF.appendChild(p)
                        } else {
                            p = d.createElement("span");
                            p.innerHTML += " ";
                            aF.appendChild(p)
                        }
                    }
                }
            }
        }
        r.appendChild(aF);
        if (aa == "t") {
            F.options[F.options.length] = new Option(ar[n]["t"], ar[n]["u"] + (rv ? "?v=" + rv : ""))
        } else {
            if (rv == "d" && aa == "d") {
                aF = d.getElementById("zero_click_answer") || d.getElementById("rfd") || "";
                if (aF) {
                    if (aF.id == "zero_click_answer") {
                        $(aF).css("padding-bottom", "5px")
                    }
                    aF.parentNode.insertBefore(r, aF.nextSibling)
                }
            } else {
                if (aa == "i") {
                    F.insertBefore(r, F.firstChild)
                } else {
                    F.appendChild(r);
                    if (ar[n]["l"] && aa === "d") {
                        DDG.add_sitelinks(F, n, ar, ay)
                    }
                    if (!rc && r.id == DDG.first_result) {
                        rc = r;
                        var aN = d.createElement("div");
                        aN.id = "organic-module";
                        F.appendChild(aN)
                    }
                }
            }
        }
        if (aa == "r" && ai && N) {
            F.appendChild(M);
            F.appendChild(ai);
            F.appendChild(N);
            F = ai;
            if (h <= 6) {
                nua("nsr", ai.firstChild, 0, 0, 0, 1)
            }
        }
        if (aa == "d" && L == 1) {
            aK = 0;
            ap = new RegExp("^r1-(\\d+)$");
            if (rc && ap.test(rc.id)) {
                e = RegExp.$1
            }
            aK = e == h ? 1 : 0;
            if (fk && aK && (!r.previousSibling || r.previousSibling.id.indexOf("r1-") == -1)) {
                nrm(6, r.id)
            }
        }
        var al = function(i, x, j, y) {
            if (i === "a") {
                adClick(x, j, y)
            }
            return nrl(y, this)
        };
        if (E) {
            E.onclick = al.bind(E, aa, ar[n].s, r)
        }
        if (D) {
            D.onclick = al.bind(D, aa, ar[n].s, r)
        }
        if (B) {
            B.onclick = al.bind(B, aa, ar[n].s, r)
        }
        if (A) {
            if (aa === "a") {
                A.onclick = function(i) {
                    return nrl(i, this)
                }
            } else {
                $(A).click(function(i) {
                    i.stopPropagation();
                    DDG.pixel.fire("mrc");
                    return nrl(i, this)
                })
            }
        }
        if (aa == "i") {
            break
        }
    }
    if (aa == "d" && ar[0] && ar[0]["s"] && !d.getElementById("powered_by")) {
        if (aH) {
            DDG.first_source = ar[0]["s"]
        }
        DDG.search.set("src", ar[0]["s"]);
        aF = d.createElement("div");
        aF.id = "powered_by";
        aF.className = "results--powered";
        for (var R = 0; R < c; R++) {
            if (ar[R] && ar[R]["s"] && ar[R]["s"].indexOf("yandex") != -1) {
                ar[0]["s"] = "yandex"
            }
        }
        if (h > 5 && ar[0]["s"] && ar[0]["s"] != "disco" && ar[0]["s"] != "boss" && ar[0]["s"] != "yahooss" && ar[0]["s"] != "yahoo" && ar[0]["s"] != "yhs") {
            var k;
            if (ar[0]["s"].indexOf("yandex") != -1) {
                ar[0]["s"] = "yandex"
            }
            if (ar[0]["s"].indexOf("yhs") != -1) {
                ar[0]["s"] = "yahoo"
            }
            if (ar[0]["s"].indexOf("bing") != -1) {
                ar[0]["s"] = "bing"
            }
            k = d.createElement("a");
            var C = ar[0]["s"] === "yahoo";
            if (C) {
                k.href = "https://duck.co/help/company/yahoo-partnership"
            } else {
                k.href = "https://duck.co/help/results/sources"
            }
            k.target = "_blank";
            k.innerHTML = l("In partnership with");
            k.onclick = function() {
                fl = 1
            };
            aF.appendChild(k);
            k = d.createElement("a");
            if (C) {
                k.href = "https://duck.co/help/company/yahoo-partnership"
            } else {
                k.href = "/" + ar[0]["s"] + "/"
            }
            k.target = "_blank";
            k.className = "results--powered__badge-link";
            k.innerHTML = ' <span class="results--powered__badge  badge--' + ar[0]["s"] + '" title="' + ar[0]["s"] + '"></span>';
            k.onclick = function() {
                fl = 1
            };
            aF.appendChild(k);
            r = $(".js-serp-bottom-right");
            if (r) {
                r.append(aF)
            }
        }
    }
    if (an == "a") {
        if (!r3c) {
            DDG.page.ads.setFirstBatchShown()
        }
        r3c = h
    } else {
        if (!aH && (h - r1c < 10 || r1c < 10)) {
            $(".js-result-sep:last").hide();
            DDG.deep.pageNumberDecrement()
        }
        r1c = h
    }
    if (aH && Z) {
        DDG.page.ads.setDefaultAds([ar[Z]])
    }
    ar = null;
    if (nir) {
        nir(aa)
    }
    DDG.ImageLoader.locateUnloaded();
    if (aH && !DDG.deep.finished) {
        DDG.deep.set("finished", new Date().getTime())
    }
    if (aj && !DDG.deep.hideNoResults) {
        nrj("/l.js?q=" + rq)
    }
    if (nrb) {
        nrb()
    }
}

function nsr(f, s, e) {
    if (!f) {
        return
    }
    var j, i, h, c, g, m, o, n, k, r, a, u, b;
    h = new RegExp("^r[lr](.*)-(\\d+)$");
    f = f.parentNode;
    if (f.id && h.test(f.id)) {
        g = RegExp.$1 || 0;
        m = RegExp.$2 || 0
    }
    if (g && m) {
        if (tn == f.id) {
            return false
        }
        tn = f.id;
        b = j = i = 0;
        c = new RegExp("^r1-(\\d+)$");
        if (rc && c.test(rc.id)) {
            j = RegExp.$1
        }
        if (f.previousSibling && c.test(f.previousSibling.id)) {
            i = RegExp.$1
        }
        b = j && i && parseInt(j) == parseInt(i) + 1 ? 1 : 0;
        if (!fk) {
            b = 2
        }
        o = d.getElementById("rl" + g + "-" + m);
        n = d.getElementById("rr" + g + "-" + m);
        k = d.getElementById("rl" + g + "-" + (parseInt(m) + 1));
        var q = DDG.settings.get("kv");
        if (q && q != "-1" && rds != 0 && (rds != 1 || r1hc) && g && g.indexOf("i") == -1) {
            o.onmouseover = function() {};
            o.onmouseout = function() {};
            o.onclick = function() {};
            o.className = "result result--sep is-hidden js-result-sep";
            var p = DDG.deep.pageNumberIncrement();
            if (q == "m") {
                o.className += " result--sep--hr";
                o.innerHTML = ""
            } else {
                if (q == "l") {
                    o.innerHTML = '<div class="result__pagenum">' + l("Page %s", p) + "</div>"
                } else {
                    o.className += " result--sep--hr has-pagenum";
                    o.innerHTML = '<div class="result__pagenum  result__pagenum--side">' + p + "</div>"
                }
            }
        } else {
            $(o).css("display", "none")
        }
        n.style.display = "block";
        if (k && !s) {
            $(k).css("display", "block")
        } else {
            if (!k && (g == "d" || g == "e0" && !fd) && DDG.page.deepNextURL) {
                a = d.createElement("span");
                a.className = (DDG.settings.isDefault("kc")) ? "result--more" : "btn result--more";
                a.className += " is-loading js-results-loading";
                a.innerHTML = Handlebars.helpers.loader();
                n.parentNode.appendChild(a);
                if (rv == "d") {
                    rv = ""
                }
                if (rds) {
                    rds += 50
                } else {
                    rds += 30
                }
                nrj(DDG.page.deepNextURL, 1);
                delete DDG.page.deepNextURL
            }
        }
        if (!s && !e && b == 1) {
            if (f.nextSibling.firstChild) {
                nrm(6, f.nextSibling.firstChild.id)
            }
        }
    }
}

function nul(b) {
    var a, c;
    var a = b.href.indexOf("/l/?kh=-1&uddg=");
    if (a != -1) {
        c = decodeURIComponent(b.href.substring(a + 15))
    }
    if (c) {
        b.href = c
    }
    fl = 0
}

function nutp(b) {
    var a = b.split("_");
    DDG.pixel.fire.apply(DDG.pixel, a);
    a.unshift("old");
    DDG.pixel.fire.apply(DDG.pixel, a)
}

function nua(i, j, h, g, b, e, c, a) {
    if (!b) {
        b = tr.length;
        tr[b] = j
    }
    if (!h) {
        h = 10
    }
    if (!g) {
        setTimeout(i + "(tr[" + b + "]," + e + "," + c + "," + a + ");", h)
    } else {
        if (!tsl) {
            tsl = ts.length;
            setTimeout(i + "(tr[" + b + "]," + e + "," + c + "," + a + ");tsl=0", 10)
        } else {
            setTimeout("nua(" + i + ",0,1," + b + "," + e + "," + c + "," + a + ")", 100)
        }
    }
}

function nug(e, g) {
    var b, c, f, a;
    fl = 0;
    fn = 0;
    a = "";
    if (window.getSelection) {
        a = window.getSelection().toString()
    } else {
        if (document.selection) {
            a = document.selection.createRange();
            a = a.text
        }
    }
    var h = a == DDG.last_selection ? 1 : 0;
    DDG.last_selection = a;
    if (!h) {
        return false
    }
    if (g) {
        openBlankWindow(e)
    } else {
        if (w.postMessage && !DDG.device.isSafari && !DDG.device.isIDevice && !DDG.device.isKonqueror && kg != "p" && DDG.settings.useRedirect()) {
            b = document.getElementById("iframe_hidden");
            b.contentWindow.postMessage("ddg:" + e, location.protocol + "//" + location.hostname)
        } else {
            if ((DDG.device.isIE || DDG.device.isIDevice || DDG.device.isChrome || DDG.device.isSafari || DDG.device.isFirefox) && e.indexOf("http") != -1 && kg != "p" && DDG.settings.useRedirect()) {
                if (d.getElementById("iframe_hidden")) {
                    d.body.removeChild(d.getElementById("iframe_hidden"))
                }
                c = "<html><head><meta name='referrer' content='origin'></head><body><script language='JavaScript'>parent.window.location.href=\"" + e + '";<\/script></body></html>';
                b = d.createElement("iframe");
                b.id = "iframe_hidden";
                d.body.appendChild(b);
                f = b.document;
                if (b.contentDocument) {
                    f = b.contentDocument
                } else {
                    if (b.contentWindow) {
                        f = b.contentWindow.document
                    }
                }
                f.open();
                f.writeln(c);
                f.close()
            } else {
                w.location = e
            }
        }
    }
}

function nun(a) {
    return a.getElementsByTagName("a")[0]
}

function iframeOpen(c) {
    var e, f, b, g, a;
    e = document.createElement("iframe");
    e.style.display = "none";
    document.body.appendChild(e);
    f = e.contentDocument || e.contentWindow.document;
    g = '"' + c + '"';
    b = f.createElement("script");
    b.type = "text/javascript";
    b.text = "window.parent = null; window.top = null;window.frameElement = null; var child = window.open(" + g + ");if (child) { child.opener = null; }";
    f.body.appendChild(b);
    a = e.contentWindow.child;
    document.body.removeChild(e);
    return a
}

function openBlankWindow(a) {
    if (DDG.device.isSafari) {
        iframeOpen(a)
    } else {
        var b = window.open(a);
        if (b) {
            b.opener = null
        }
    }
}

function getLinkType(e) {
    var f = e.id.split("-");
    var c = f[0] === "ra";
    var b = parseInt(f[1], 10);
    var a = "_cn";
    if (c) {
        a = "_ca"
    } else {
        if (b === 0) {
            a = "_cz"
        } else {
            if (b <= slo) {
                a = "_cs"
            }
        }
    }
    return a
}

function adOrOrganicClick(a, i, f) {
    if (DDG.search.spelling) {
        DDG.pixel.fire("c", DDG.search.spelling.type)
    }
    var g = DDG.duckbar.activeTabId && DDG.duckbar.activeTabId !== "web" && DDG.duckbar.getActiveTab().pixelId,
        k = DDG.duckbar.initialTab && DDG.duckbar.initialTab.pixelId,
        h = DDG.duckbar.moduleAboveOrganics,
        j = {
            t: i,
            ss: DDG.page.showingSafeSearch,
            sp: DDG.search.spelling ? 1 : 0,
            dl: DDG.search.hasSiteLinks ? 1 : 0
        };
    j.u = DDG.search.src;
    if (a) {
        try {
            var m = $(a);
            j.dm = m.attr("data-domain");
            j.hn = m.attr("data-hostname")
        } catch (f) {}
        var c = i === "a" ? "a" : "";
        try {
            j.r = "r" + c + a.id.split("-").pop()
        } catch (f) {}
        j.da = j.r && (DDG.search.deepAnswerIAs[j.r] || 0)
    }
    j.nt = DDG.linkClickWillOpenInNewTab(f) ? 1 : 0;
    if (DDG.page.ads.hasAds()) {
        j.adx = DDG.page.ads.adx;
        j.adc = DDG.page.ads.getNumberOfTopAds()
    }
    if (DDG.page.ads.adxExperiment) {
        j.adx_name = DDG.page.ads.adxExperiment
    }
    j.rl = rl;
    j.dl = dl;
    j.kl = DDG.settings.get("kl");
    j.oll = DDG.Data.languages.resultLanguagesPixelData;
    if (DDG.Data.languages.adLanguagesPixelData) {
        j.adll = DDG.Data.languages.adLanguagesPixelData
    }
    if (DDG.deep.cde) {
        j.cde = DDG.deep.cde
    }
    j.kp = DDG.settings.get("kp");
    if (DDG.backData.getId()) {
        j.bkl = 1
    }
    if (g || k || h) {
        var b = g ? DDG.duckbar.activeTabOpenType : k ? DDG.duckbar.initialTabOpenType : DDG.duckbar.moduleOpenType;
        DDG.pixel.fire("iaolc", g || k || h, b, j)
    } else {
        if (i !== "a") {
            DDG.pixel.fire("lc", j)
        }
    }
}

function organicClick(a, b) {
    adOrOrganicClick(a, "d", b)
}

function adClick(a, c, k) {
    var m = {},
        i = $(c).data("adn"),
        n = $(c).data("adf"),
        p = $(c).data("domain"),
        q = $(c).data("rel"),
        b = $(c).data("sld"),
        f = c && c.id,
        j = DDG.page.ads.adx;
    if (i) {
        m.n = i
    }
    if (n) {
        m.f = n
    }
    if (p) {
        m.d = p
    }
    m.sld = b ? 1 : 0;
    if (q) {
        for (var o in q) {
            m[o] = q[o]
        }
    }
    if (w.sourceTag) {
        m.st = w.sourceTag
    }
    m.nt = DDG.linkClickWillOpenInNewTab(k) ? 1 : 0;
    var h = /ra-(\d+)/.exec(f),
        g = h && h[1];
    m.r = g;
    if (j && j !== "ctl") {
        m.adx = j
    }
    DDG.pixel.fire("ad", a, "c", m);
    if (DDG.deep.cde) {
        m.cde = DDG.deep.cde
    }
    DDG.backData.set(f, m);
    adOrOrganicClick(c, "a", k)
}

function splitSitelinks(g, a) {
    var b = [],
        h = "</a>",
        c = "</div>",
        e, f;
    while (g.length) {
        if (g.indexOf("<a") !== 0) {
            break
        }
        f = g.indexOf(h);
        if (f === -1) {
            break
        }
        f += h.length;
        e = g.slice(0, f);
        g = g.slice(f);
        if (g.indexOf("<div") === 0) {
            f = g.indexOf(c);
            if (f === -1) {
                break
            }
            f += c.length;
            if (a) {
                e += g.slice(0, f)
            }
            g = g.slice(f)
        }
        b.push(e)
    }
    return b
}

function getGoodAdSitelinks(b) {
    var a = "";
    b.forEach(function(c) {
        c = c.replace(/(<div[^>]+>)/, "$1 - ");
        a += "<div class='sponsored__sitelink-wrap'>" + c + "</div>"
    });
    return a
}! function(e) {
    var c = e.Models,
        b = 1456290000000,
        h = 604800000,
        i = 86400000,
        f = 3600000,
        g = 60000,
        a;
    c.OpenSearch = function() {
        a = DDG.Data.Experiments;
        this._updateLatestVersion();
        this.atbVariant = this.getDefaultAtbVariant();
        this.installed = this.parseATB(e.history.get("atb"), {
            experiments: a
        })
    };
    c.OpenSearch.prototype = $.extend({}, {
        getATBVersionInfo: function(q) {
            q = q || new Date();
            var o = q.getTime(),
                u = o + (q.getTimezoneOffset() * g),
                t = new Date(u + (f * -5)),
                p = 13 - ((t.getFullYear() - 2016) % 6),
                r = 6 - ((t.getFullYear() - 2016) % 6),
                j = (t.getMonth() > 2 || (t.getMonth() == 2 && t.getDate() >= p)) && (t.getMonth() < 10 || (t.getMonth() == 10 && t.getDate() < r)),
                k = j ? b - f : b,
                n = o - k;
            var m = Math.ceil(n / h);
            var s = Math.ceil(n % h / i);
            return {
                minorVersion: s,
                majorVersion: m,
                version: "v" + m + "-" + s
            }
        },
        getFullATBParam: function() {
            return this.version + this.variant + this.atbVariant
        },
        getURL: function() {
            var j = w.location.protocol + "//" + w.location.host + "/opensearch.xml?atb=" + this.getFullATBParam();
            if (e.device.isAndroid && e.device.chromeVersion >= 57) {
                j += "&t=cros"
            }
            return j
        },
        setATB: function(j) {
            this._updateLatestVersion(j)
        },
        addSearchProvider: function() {
            if (!w.external || !("AddSearchProvider" in w.external)) {
                return
            }
            w.external.AddSearchProvider(this.getURL());
            if (!e.device.isChrome && w != top) {
                setTimeout(function() {
                    top.location.replace("https://duckduckgo.com")
                }, 10)
            }
        },
        parseATB: function(q, m) {
            if (!q || typeof q !== "string") {
                return {}
            }
            m = m || {};
            var n = q.match(/(v\d+)(\-\d)?/),
                j, k = {};
            if (n && n.length) {
                k.version = k.majorVersion = n[1];
                if (n[2] && n[2].match(/\-\d/)) {
                    k.minorVersion = n[2][1];
                    k.version += n[2]
                }
                if (k.version) {
                    j = q.replace(k.version, "");
                    if (j.length) {
                        if (j[0] && j[0].match(/[a-z]/)) {
                            k.variant = j[0]
                        }
                        if (j[1] && j[1].match(/[a-z]/)) {
                            k.atbVariant = j[1]
                        }
                    }
                    if (m.experiments) {
                        for (var p in m.experiments) {
                            var o = m.experiments[p];
                            if (!o.atb && o.versions.indexOf(k.version) > -1 && (!o.variants || o.variants.indexOf(k.variant) > -1)) {
                                k.experiment = p
                            }
                        }
                    }
                }
            }
            return k
        },
        pickVariant: function(k, m) {
            var j = "_";
            m = m || {};
            if (!e.extension.canInstall() && !e.addToBrowser.canAddToChromeAndroid()) {
                return j
            }
            for (var o in k) {
                var n = k[o];
                if (!n.atb && n.variants instanceof Array && n.versions.indexOf(this.version) > -1 && (!n.englishOnly || m.locale && m.locale.indexOf("en_") === 0) && (!n.platformName || (n.platformName && n.platformName === e.device.pixelPlatformName)) && (!n.locale || m.locale && n.locale === m.locale.toLowerCase())) {
                    j = n.variants[Math.floor(Math.random() * n.variants.length)]
                }
            }
            return j
        },
        _updateLatestVersion: function(j) {
            j = j || this.getATBVersionInfo();
            this.majorVersion = j.majorVersion;
            this.minorVersion = j.minorVersion;
            this.version = j.version;
            this.variant = this.pickVariant(a, {
                locale: window.locale
            })
        },
        getDefaultAtbVariant: function() {
            if (this._getHost() === "start.duckduckgo.com") {
                return e.tParam.DEFAULT_VARIANT
            }
            if (e.tParam.fromHomepage()) {
                return e.tParam.get()
            }
            return e.tParam.DEFAULT_VARIANT
        },
        allocateAtbVariant: function() {
            var n = e.tParam.DEFAULT_VARIANT;
            if (e.tParam.hasValue()) {
                return e.tParam.get()
            }
            for (var p in a) {
                var o = a[p];
                if (!o.atb || !o.active) {
                    continue
                }
                if (o.desktopOnly && e.device.isMobileDevice) {
                    continue
                }
                if (o.mobileOnly && !e.device.isMobileDevice) {
                    continue
                }
                if (o.englishOnly && !this._isEnglish()) {
                    continue
                }
                if (o.displayBrowserName && o.displayBrowserName !== e.device.displayBrowserName) {
                    continue
                }
                if (o.platformName && o.platformName !== e.device.pixelPlatformName) {
                    continue
                }
                if (o && o.displayBrowserName && e.device["is" + o.displayBrowserName]) {
                    var j = o.displayBrowserName.toLowerCase() + "Version";
                    if (o.minBrowserVersion && o.minBrowserVersion > e.device[j]) {
                        continue
                    }
                    if (o.maxBrowserVersion && o.maxBrowserVersion < e.device[j]) {
                        continue
                    }
                }
                if (o && o.minBrowserVersion || o.maxBrowserVersion) {
                    if (!o.displayBrowserName) {
                        throw new Error("experiments specifying min/maxBrowserVersion must specify displayBrowserName")
                    }
                }
                var m = Math.random();
                for (var k = 0; o.allocation && k < o.allocation.length; k++) {
                    if (m <= o.allocation[k]) {
                        n = o.variants[k];
                        break
                    }
                }
            }
            this.atbVariant = n;
            return n
        },
        _getHost: function() {
            return window.location.host.toLowerCase()
        },
        _isEnglish: function() {
            return window.locale && window.locale.indexOf("en_") === 0
        },
        getDaysSinceCohort: function(k) {
            if (!k) {
                return
            }
            var m = k.split("-"),
                j = m[0],
                n = m[1];
            if (!j || !n) {
                return
            }
            j = j.substring(1);
            return this._getDaysBetweenCohorts({
                majorVersion: parseInt(j, 10),
                minorVersion: parseInt(n, 10)
            }, e.opensearch)
        },
        _getDaysBetweenCohorts: function(k, j) {
            return 7 * (j.majorVersion - k.majorVersion) + (j.minorVersion - k.minorVersion)
        }
    });
    e.opensearch = new c.OpenSearch()
}(DDG);
! function(a) {
    a.Views.Base = function(b) {
        this.model = b.model;
        this.views = this.views || {};
        this.$parent = (typeof b.appendTo === "string") ? $(b.appendTo) : b.appendTo;
        this.$before = (typeof b.before === "string") ? $(b.before) : b.before;
        this.$after = (typeof b.after === "string") ? $(b.after) : b.after;
        if (b.events) {
            for (var c in b.events) {
                this.on(c, b.events[c])
            }
        }
        this._render(b);
        this._wrapLinks()
    };
    a.Views.Base.prototype = $.extend({}, EventEmitter2.prototype, a.Utils.Events, {
        destroy: function() {
            this.unbindEvents();
            this.destroyChildViews();
            this.$el.remove()
        },
        destroyChildViews: function() {
            ! function b(e) {
                if (!e) {
                    return
                }
                var f;
                if ($.isArray(e)) {
                    for (var g = 0; g < e.length; g++) {
                        f = e[g];
                        if (f && $.isArray(f)) {
                            b(f)
                        } else {
                            f && f.destroy && f.destroy()
                        }
                    }
                    e = null
                } else {
                    for (var h in e) {
                        f = e[h];
                        if (f && $.isArray(f)) {
                            b(f)
                        } else {
                            f && f.destroy && f.destroy()
                        }
                        delete e[h]
                    }
                }
            }(this.views);
            delete this.views
        },
        _render: function(b) {
            if (!this.$el) {
                if (b && b.$el) {
                    this.$el = b.$el
                } else {
                    this.$el = DDG.$exec_template(this.template, b || {})
                }
            }
            if (!this.$el) {
                throw new Error("Template Not Found: " + this.template)
            }
            this._addToDOM();
            this.$ = this.$el.find.bind(this.$el)
        },
        _rerender: function() {
            var c = this.$el.prev();
            if (c.length) {
                delete this.$parent;
                this.$after = c
            } else {
                var b = this.$el.next();
                if (b.length) {
                    delete this.$parent;
                    this.$before = b
                }
            }
            this.$el.remove();
            delete this.$el;
            this._render();
            this.emit("rerender");
            this._wrapLinks()
        },
        _wrapLinks: function(b) {
            if (!b || !b.length) {
                b = this.$el
            }
            if (!b) {
                return
            }
            b.find("a").each(function(e, f) {
                var c = $(f);
                if (c.data("wrapped")) {
                    return
                }
                c.data("wrapped", true);
                if (!DDG.isInternalURL(f.href)) {
                    c.on("click.wrap", this._onExternalLinkClick.bind(this))
                }
            }.bind(this))
        },
        _addToDOM: function() {
            if (this.$parent) {
                this.$parent.append(this.$el)
            } else {
                if (this.$before) {
                    this.$before.before(this.$el)
                } else {
                    if (this.$after) {
                        this.$after.after(this.$el)
                    }
                }
            }
        },
        _cacheElems: function(f, c) {
            for (var e = 0; e < c.length; e++) {
                var b = f + "-" + c[e],
                    g = "$" + c[e].replace(/-/g, "");
                this[g] = this.$(b)
            }
        },
        _onExternalLinkClick: function(c) {
            var b = c.currentTarget;
            if (DDG.settings && !DDG.settings.isDefault("kn")) {
                b.target = "_blank"
            }
            return nrl(c, b)
        }
    })
}(DDG);
! function(f) {
    var b = f.Views.Base,
        c = "is-open",
        g = ".js-side-menu-open",
        e = "theme-is-selected",
        k = "menuTouchOrClick",
        a = ["home", "serp", "app"];
    f.Views.SideMenu = function(o) {
        this.pageType = o.pageType;
        this.featuredThemes = f.settings.themes.getFeaturedThemes();
        this.showATB = o.showATB && a.indexOf(this.pageType) === -1;
        b.call(this, o);
        f.tap(g, j.bind(this), {
            fallbackToClick: true
        });
        f.tap(this.$close, j.bind(this), {
            fallbackToClick: true
        });
        for (var n = 0; n < this.$theme.length; n++) {
            f.touchOrClick($(this.$theme[n]), h.bind(this, this.featuredThemes[n].id))
        }
        this.$el.bind("touchstart click", function(p) {
            p.stopPropagation()
        });
        this.$("a").click(i.bind(this));
        f.settings.on("change:" + f.settings.THEME_KEY, this._selectTheme.bind(this))
    };
    f.Views.SideMenu.prototype = $.extend({}, b.prototype, {
        template: "side_menu",
        linkTemplate: "side_menu_link",
        show: function() {
            if (this._isShowing) {
                return
            }
            f.ImageLoader.trigger("sidemenu");
            this.$el.addClass(c);
            f.touchOrClick(f.$doc, function() {
                this.hide()
            }.bind(this), {
                namespace: k
            });
            this._isShowing = true;
            this.emit("opened");
            if (this.views.addToBrowser) {
                f.pixel.fire("atbmi", f.device.pixelBrowserName, f.opensearch.version, {
                    va: f.opensearch.atbVariant,
                    l: w.locale
                })
            }
        },
        hide: function() {
            if (!this._isShowing) {
                return
            }
            this.$el.removeClass(c);
            f.touchOrClick(f.$doc, "", {
                namespace: k
            });
            this._isShowing = false;
            this.emit("closed")
        },
        _render: function(o) {
            var p = f.device,
                q = p.canAddToBrowser(),
                n = DDG.$exec_template(this.linkTemplate, o);
            o.themes = this.featuredThemes;
            b.prototype._render.call(this, o);
            this._wrapLinks(n);
            this._cacheElems(".js-side-menu", ["close", "add-to", "theme", "love", "nolove"]);
            $(o.appendLinkTo).append(n);
            this._selectTheme(f.settings.get(f.settings.THEME_KEY));
            if (this.showATB && q && !p.isMobileDevice) {
                this.views.addToBrowser = new f.Views.AddToBrowserBadge({
                    noBreak: true,
                    entryPoint: "sm",
                    clickPixel: "atbmc",
                    xPixel: "atbmx",
                    appendTo: this.$el
                })
            }
            if (o.showFeedbackIcons) {
                this.$love.on("click", m.bind(this, true));
                this.$nolove.on("click", m.bind(this, false))
            }
        },
        _selectTheme: function(o) {
            this.$("." + e).removeClass(e);
            o = o || f.settings.getDefault(f.settings.THEME_KEY);
            for (var n = 0; n < this.featuredThemes.length; n++) {
                if (o === this.featuredThemes[n].id) {
                    $(this.$theme[n]).addClass(e)
                }
            }
        }
    });
    var i = function(q) {
            var n = $(q.target),
                o = n.attr("href"),
                p = n.attr("data-settings");
            if ((f.page.pageType === "serp" || f.page.pageType === "home") && f.device.isSafari && p) {
                f.history.set("rld", "1")
            }
            if (o !== "#") {
                o = f.pixel.sanitizeUrl(o);
                f.pixel.fire("sml", this.pageType, o)
            }
        },
        j = function(o) {
            o.preventDefault();
            o.stopPropagation();
            if (Modernizr.touch) {
                var n = DDG.get_now();
                if (this._lastTime && n - this._lastTime < 600) {
                    return
                }
                this._lastTime = n
            }
            if (!this._isShowing) {
                f.pixel.fire("smo", this.pageType);
                this.show()
            } else {
                this.hide()
            }
        },
        h = function(o, n) {
            n.preventDefault();
            n.stopPropagation();
            f.settings.setTheme(o, {
                saveToCloud: true,
                updateURLParams: true,
                fallbackToURLParam: true
            })
        },
        m = function(o, n) {
            n.preventDefault();
            if (!this.views.feedbackModal) {
                this.views.feedbackModal = new f.Views.Feedback.Modal({
                    appendTo: $("body")
                })
            }
            this.hide();
            this.views.feedbackModal.show(o)
        }
}(DDG);
! function(e) {
    var a = e.Views.Base,
        j = "js-search-hidden-field";
    e.Views.SearchBar = function(o) {
        this.$el = typeof o.el === "string" ? $(o.el) : o.el;
        this.autocompleteOps = o.autocompleteOps || {};
        a.call(this, o)
    };
    e.Views.SearchBar.prototype = $.extend({}, a.prototype, {
        _render: function(o) {
            a.prototype._render.call(this, o);
            this._cacheElems(".js-search", ["input", "clear", "button", "hidden"]);
            this.$body = $("body");
            this._upgradeToJSForm();
            this._updateInput();
            if (e.page.pageType === "serp") {
                this.$el.on("submit", f.bind(this))
            }
            this.$input.on("keyup", m.bind(this)).on("focus", k.bind(this));
            this.$clear.add(this.$button).on("focus", b.bind(this));
            e.keyboard.on("escape.searchbar", h.bind(this));
            e.touchOrClick(this.$clear, n.bind(this));
            e.touchOrClick(this.$el, c.bind(this));
            if (Modernizr.touch) {
                this.$button.on("touchstart", g.bind(this))
            }
            this.$input[0].setAttribute("autocapitalize", "off");
            this.$input[0].setAttribute("autocorrect", "off");
            e.settings.on("change:" + e.settings.AUTOCOMPLETE_KEY, this._updateAutocomplete.bind(this));
            e.settings.on("change", this._updateHiddenFields.bind(this));
            e.settings.on("change:cloudsave", this._updateHiddenFields.bind(this));
            e.hidden.on("change", this._updateHiddenFields.bind(this));
            e.search.on("requery", this.requery.bind(this));
            this._updateAutocomplete();
            this._updateHiddenFields()
        },
        focus: function(o) {
            if (o && o.focusInput) {
                this.$input.focus()
            }
            if (fq) {
                return
            }
            if (o && o.setCursor) {
                this._setCursorPos()
            }
            fq = 1;
            this.$el.addClass("search--focus");
            e.$html.addClass("has-search-focus");
            e.tap(this.$body, i.bind(this), {
                fallbackToClick: true,
                namespace: "searchbar"
            });
            this.hasFocus = true
        },
        unfocus: function() {
            if (!fq) {
                return
            }
            fq = 0;
            this.$input.blur();
            this.$el.removeClass("search--focus");
            e.$html.removeClass("has-search-focus");
            e.tap(this.$body, null, {
                namespace: "searchbar"
            });
            if (e.keyboard.namespace === "searchbar") {
                e.keyboard.set("namespace")
            }
            this.hasFocus = false
        },
        requery: function() {
            e.history.clear("ia", "iai", "iax");
            this._updateHiddenFields();
            this.$el.submit()
        },
        updateQuery: function(o) {
            $("#search_form_input").val(o);
            this.requery()
        },
        _autocompleteOn: function() {
            if (!this.$input || this.autocomplete) {
                return
            }
            this.autocomplete = new DDG.Views.AutoComplete({
                $input: this.$input
            });
            this.autocomplete.on("submit", function() {
                this.$el.submit()
            }.bind(this));
            this.$el.append(this.autocomplete.$el)
        },
        _autocompleteOff: function() {
            this.autocomplete && this.autocomplete.destroy();
            delete this.autocomplete
        },
        _clearForm: function() {
            if (this.autocomplete) {
                this.autocomplete.clear();
                this.autocomplete.hide()
            }
            this.$input.val("") && this.$input.focus();
            this._updateInput()
        },
        _upgradeToJSForm: function() {
            this.$el.addClass("search--adv").removeClass("search");
            this.$input.addClass("search__input--adv").removeClass("search__input");
            this.$el.hover(function() {
                $(this).addClass("search--hover")
            }, function() {
                $(this).removeClass("search--hover")
            })
        },
        _updateAutocomplete: function() {
            var o = this.autocompleteOps.disableAutocomplete ? "-1" : e.settings.get(e.settings.AUTOCOMPLETE_KEY);
            if (o && o == "-1") {
                this._autocompleteOff()
            } else {
                this._autocompleteOn()
            }
        },
        _updateHiddenFields: function() {
            this.$el.find("." + j).remove();
            var p = e.settings.toJSON({
                onlyURLParams: true
            });
            p = $.extend({}, p, e.hidden.toJSON());
            var q;
            for (var o in p) {
                q = $("<input type='hidden' class='" + j + "'>");
                q.attr("name", o);
                q.val(p[o]);
                this.$hidden.append(q)
            }
        },
        _updateInput: function() {
            this._updateClearButton()
        },
        _updateClearButton: function() {
            if (!this.$input) {
                return
            }
            var o = this.$input.val();
            if (!o || o === "") {
                this.$el.removeClass("has-text");
                this.$clear.addClass("empty");
                this._hasText = ""
            } else {
                if (!this._hasText) {
                    this.$el.addClass("has-text");
                    this.$clear.removeClass("empty");
                    this._hasText = 1
                }
            }
        },
        _setCursorPos: function() {
            if (e.device.isIDevice && e.page.pageType === "serp") {
                this.$input[0].focus();
                setTimeout(function() {
                    var o = this.$input[0];
                    o.setSelectionRange(o.value.length, o.value.length, "forward")
                }.bind(this), 0)
            }
        },
        getSiteQuery: function(q) {
            if (!q) {
                return false
            }
            q = e.strip_html(q);
            var p = /^(.*)(site:([^\s]+))(.*)$/i,
                o = q.match(p);
            if (!o || !o.length) {
                return
            }
            return {
                all: o[0],
                url: o[3],
                site: o[2],
                before: o[1],
                after: o[4],
                query: o[1] + o[4]
            }
        },
        addBangToSiteInQuery: function(o, p) {
            return p.replace(new RegExp("(^|\\s)(" + o + ")($|\\s)", "i"), "$1!$2$3")
        }
    });
    var m = function() {
            this.focus();
            if (!e.keyboard.namespace) {
                e.keyboard.set("namespace", "searchbar")
            }
            this._updateClearButton();
            if (!this._emittedTypedEvent) {
                this.emit("typed");
                this._emittedTypedEvent = true
            }
        },
        n = function(o) {
            o.preventDefault();
            o.stopPropagation();
            this._clearForm()
        },
        b = function(o) {
            e.keyboard.set("namespace", "searchbar")
        },
        k = function(o) {
            o.stopPropagation();
            e.keyboard.set("namespace", "searchbar");
            this.emit("focus");
            this.focus()
        },
        g = function(o) {
            o.stopPropagation()
        },
        f = function(p) {
            var o = DDG.get_query() !== this.$input.val() ? 1 : 0;
            e.pixel.fire("rq", o, {
                r: DDG.deep.getResultCount() ? 1 : 0
            })
        },
        c = function(o) {
            o.stopPropagation();
            this.focus({
                setCursor: true
            })
        },
        i = function(o) {
            o.stopPropagation();
            this.emit("unfocus");
            this.unfocus()
        },
        h = function(o) {
            if (this.autocomplete && this.autocomplete.isVisible()) {
                this.autocomplete.hide()
            } else {
                this.unfocus()
            }
        }
}(DDG);
! function(c) {
    var b = c.Views.Base,
        a = "no-scroll";
    c.Views.Slider = function(e) {
        e = e || {};
        this.$el = e.$el || e.el && $(e.el);
        b.call(this, e);
        this.init(e)
    };
    c.Views.Slider.prototype = $.extend({}, b.prototype, {
        init: function(h) {
            if (!h.items) {
                return
            }
            this.items = [];
            this.$items = this.$el.find(h.items);
            this.noLoop = h.noLoop || "";
            if (h.next && h.prev) {
                this.$next = this.$el.find(h.next);
                this.$prev = this.$el.find(h.prev);
                this.$next.bind("click", this._onNextClick.bind(this));
                this.$prev.bind("click", this._onPrevClick.bind(this))
            }
            if (h.nav) {
                this.nav = h.nav;
                this.nav.className = h.nav.className || "slider-nav";
                if (this.nav.bindOnly) {
                    this.$nav = this.$el.find("." + this.nav.className)
                }
            }
            for (var g = 0, e = this.$items.length; g < e; g++) {
                var j = {},
                    f = $(this.$items[g]);
                j.idx = g;
                j.$html = f;
                if (h.nav) {
                    if (h.nav.bindOnly || h.nav.noBind) {
                        j.$nav = $(this.$nav[g]);
                        j.$nav.on("click", this._onNavClick.bind(this, g))
                    } else {
                        j.$nav = this._makeNav(g)
                    }
                }
                this.items[g] = j
            }
            this.items[0].$html.addClass("is-first");
            this.activeByIndex(0);
            if (h.animate) {
                this._animate = true;
                this.$slideEl = (h.slideEl) ? this.$el.find(h.slideEl) : this.items[0].$html;
                this.slideCb = h.animateCallback || ""
            }
            if (h.timeout) {
                this._timing = parseInt(h.timeout, 10);
                this.setTimer();
                if (h.killtimeronclick) {
                    this._killTimer = 1
                }
            }
        },
        _makeNav: function(f) {
            if (!this.$navWrap) {
                this.$navWrap = this._makeNavWrap()
            }
            var e = $('<li class="' + this.nav.className + '__item"></li>');
            e.on("click", this._onNavClick.bind(this, f));
            e.appendTo(this.$navWrap);
            return e
        },
        _makeNavWrap: function() {
            var e = $('<ul class="' + this.nav.className + '"></ul>');
            e.appendTo(this.$el);
            return e
        },
        setTimer: function() {
            this.clearTimer();
            var e = this;
            this.Timer = setTimeout(function() {
                e.advanceSlides()
            }, this._timing)
        },
        clearTimer: function() {
            var e = this;
            clearTimeout(e.Timer)
        },
        killTimer: function() {
            this.clearTimer();
            this._timing = ""
        },
        advanceSlides: function(e) {
            if (!e) {
                e = 1
            }
            e = parseInt(e, 10);
            var f = this._activeItem.idx + e;
            if (this.noLoop && (f >= this.items.length || f < 0)) {
                return false
            }
            if (f >= this.items.length) {
                f = 0
            } else {
                if (f < 0) {
                    f = this.items.length - 1
                }
            }
            this.activeByIndex(f);
            if (this._timing) {
                this.setTimer()
            }
        },
        activeByIndex: function(e) {
            var f = this.items[e];
            if (!f) {
                return
            }
            this.deactivate();
            this._activeItem = f;
            this._activeItem.$html.addClass("is-active");
            if (this.nav) {
                this._activeItem.$nav.addClass("is-active")
            }
            if (this.noLoop && this.$next && this.$prev) {
                this._checkLoopPosition(e)
            }
            if (this._animate) {
                this.slideItems(e)
            }
        },
        deactivate: function() {
            if (!this._activeItem) {
                return
            }
            this._activeItem.$html.removeClass("is-active");
            if (this.nav) {
                this._activeItem.$nav.removeClass("is-active")
            }
        },
        slideItems: function(e) {
            var f = e * 100;
            this.$slideEl.css("margin-left", "-" + f + "%");
            if (this.slideCb) {
                this.slideCb(e)
            }
        },
        _checkLoopPosition: function(e) {
            if (this.$curNav) {
                this.$curNav.removeClass(a);
                delete this.$curNav
            }
            if (e === 0) {
                this.$prev.addClass(a);
                this.$curNav = this.$prev
            } else {
                if (e == this.items.length - 1) {
                    this.$next.addClass(a);
                    this.$curNav = this.$next
                }
            }
        },
        _onNextClick: function() {
            if (this._killTimer) {
                this.killTimer()
            }
            this.advanceSlides()
        },
        _onPrevClick: function() {
            if (this._killTimer) {
                this.killTimer()
            }
            this.advanceSlides(-1)
        },
        _onNavClick: function(f, g) {
            if (this.nav.noClick) {
                return
            }
            if (this._killTimer) {
                this.killTimer()
            }
            this.activeByIndex(f);
            if (this._timing) {
                this.setTimer()
            }
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.HeaderLinks = function(c) {
        a.call(this, c);
        this._cacheElems(".js-showcase", ["item", "button", "twitter"]);
        this.bindEvents([
            [this.$item, "click touchstart", this._onItemClick.bind(this)],
            [this.$button, "click touchstart", this._onToggleClick.bind(this)],
            [this.$twitter, "click touchstart", this._twitterClick.bind(this)]
        ]);
        this._createPopouts()
    };
    b.Views.HeaderLinks.prototype = $.extend({}, a.prototype, {
        template: "showcase_dropdown",
        hide: function() {
            this.popouts.forEach(function(c) {
                c.hide()
            })
        },
        isShowing: function() {
            var c = false;
            this.popouts.forEach(function(e) {
                c = e.isShowing
            });
            return c
        },
        _render: function() {
            a.prototype._render.call(this, {
                showDropdown: b.page.pageType === "serp"
            })
        },
        _twitterClick: function() {
            b.pixel.fire("hlt", b.page.pageType)
        },
        _onItemClick: function(c) {
            var f = $(c.currentTarget).data("id");
            b.pixel.fire("shc", f)
        },
        _onToggleClick: function() {
            this._togglePopouts();
            this.$button.attr("aria-pressed", true);
            b.pixel.fire("shs")
        },
        _createPopouts: function() {
            this.$popouts = this.$el.find(".js-popout");
            this.popouts = [];
            this.$popouts.each($.proxy(function(e, f) {
                var c = new b.Views.Modal({
                    $el: $(f).find(".js-popout-main")
                });
                c.setTrigger(this.$button);
                this.popouts.push(c)
            }, this))
        },
        _togglePopouts: function() {
            this.popouts.forEach(function(c) {
                c.toggle()
            })
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Base;
    c.Views.PlayButton = function(f) {
        this.url = f.url;
        if (!this.url && f.$el) {
            this.url = f.$el.data("url")
        }
        b.call(this, f);
        this.$btn = this.$(".js-play-btn-icn");
        this.$err = this.$(".js-play-btn-err");
        this.$btn.on("click", this.play.bind(this))
    };
    c.Views.PlayButton.prototype = $.extend({}, b.prototype, {
        template: "play_button",
        play: function() {
            this.$btn.text("");
            c.require("audio", a.bind(this))
        }
    });
    var a = function(g) {
            if (!g || !g.ready) {
                return e.call(this)
            }
            var f = this;
            g.play(this.url, this.url, {
                autoPlay: true,
                onloadstart: function() {
                    f.$btn.addClass("is-loading")
                },
                onload: function(h) {
                    if (!h) {
                        e.call(f)
                    }
                },
                onplay: function() {
                    f.$btn.removeClass("is-loading");
                    f.$btn.addClass("is-playing")
                },
                onfinish: function() {
                    f.$btn.removeClass("is-playing");
                    f.$btn.text("►")
                }
            })
        },
        e = function() {
            this.$btn.addClass("is-hidden");
            this.$err.removeClass("is-hidden");
            this.$err.text("Audio Unavailable")
        }
}(DDG);
! function(c) {
    var b = c.Views.Base,
        e = 50,
        a = 50,
        f = 2000;
    c.Views.Notification = function(g) {
        b.call(this, g);
        this.$text = this.$(".js-notification-text");
        this._initTime = new Date().getTime();
        this.$el.on("click touchstart", function(h) {
            h.stopPropagation();
            this.hide()
        }.bind(this))
    };
    c.Views.Notification.prototype = $.extend({}, b.prototype, {
        template: "notification",
        flash: function(h, g) {
            if (new Date().getTime() - this._initTime < e) {
                return setTimeout(this.flash.bind(this, h, g), a)
            }
            this.hide();
            this.$text.text(h);
            this.$el.addClass("is-showing");
            this._timeout = setTimeout(this.hide.bind(this), g || f)
        },
        hide: function() {
            if (this._timeout) {
                clearTimeout(this._timeout);
                delete this._timeout
            }
            this.$el.removeClass("is-showing")
        }
    })
}(DDG);
! function(g) {
    var f = g.Views.Base,
        e = "imgFallback=/assets/icons/favicons/bang.png",
        h = "acp",
        b = h + "--highlight",
        a = "search__autocomplete--bang",
        c = "acp-wrap__column--left",
        i = "acp-wrap__column--right";
    g.Views.AutoComplete = function(j) {
        f.call(this, j);
        this.$input = j.$input;
        this.$wrap = this.$(".acp-wrap");
        this.$footer = this.$(".acp-footer");
        this._endpoint = g.services.getURL("autocomplete");
        this.$el.on("mouseleave.autocomplete", this._onMouseLeave.bind(this)).on("mousemove.autocomplete", "." + h, this._onMouseMove.bind(this)).on("mousedown.autocomplete", "." + h, this._onMouseDown.bind(this)).on("touchstart.autocomplete", "." + h, this._onTouchStart.bind(this)).on("click.autocomplete", "." + h, this._onClick.bind(this));
        this.$input.on("keyup.autocomplete", this._onKeyUp.bind(this)).on("blur.autocomplete", this._onBlur.bind(this)).on("paste.autocomplete", this._onPaste.bind(this)).on("click.autocomplete", this.show.bind(this));
        this.bindEvents([
            [g.keyboard, "escape.autocomplete", this._onEscape],
            [g.keyboard, "enter.autocomplete", this._onEnter],
            [g.keyboard, "up.autocomplete", this._onUp],
            [g.keyboard, "down.autocomplete", this._onDown],
            [g.keyboard, "left.autocomplete", this._onLeft],
            [g.keyboard, "right.autocomplete", this._onRight],
            [g.keyboard, "down.searchbar", this._onSearchBarDown]
        ])
    };
    g.Views.AutoComplete.prototype = $.extend({}, f.prototype, {
        template: "autocomplete",
        suggestions: [],
        _cache: {},
        _selectedIndex: -1,
        _currentQuery: "",
        _visible: false,
        _bangLayoutTemplate: "autocomplete_bang_layout",
        _textItemTemplate: "autocomplete_text_item",
        _bangItemTemplate: "autocomplete_bang_item",
        destroy: function() {
            this.$input.off(".autocomplete");
            f.prototype.destroy.call(this)
        },
        isBangQuery: function(j) {
            return !!j.match(/^![^! ]*\s?$/)
        },
        show: function() {
            if (this.suggestions.length > 0) {
                this._visible = true;
                this._resetMouseMove();
                this.$el.show()
            }
        },
        hide: function() {
            this._visible = false;
            this.$el.hide();
            this._resetMouseMove();
            if (g.keyboard.namespace === "autocomplete") {
                g.keyboard.set("namespace")
            }
        },
        clear: function() {
            this._cache = {};
            this.suggestions = [];
            this._selectedIndex = -1;
            this._currentQuery = ""
        },
        isVisible: function() {
            return this._visible
        },
        _resetMouseMove: function() {
            this._initialMousePos = null;
            this._mouseMoved = false
        },
        _updateScroll: function() {
            var k, n, o, m, j;
            k = this.$("." + h + "." + b);
            if (k.length === 0) {
                return
            }
            n = this.$wrap.scrollTop();
            o = parseInt(this.$wrap.css("height"), 10);
            m = k.position().top;
            j = m + parseInt(k.css("height"), 10) + 2 * parseInt(k.css("padding-bottom"), 10);
            if (m < 0) {
                this.$wrap.scrollTop(n + m)
            } else {
                if (j > o) {
                    this.$wrap.scrollTop(n + j - o)
                }
            }
        },
        _selectItem: function(j) {
            if (j === this._selectedIndex) {
                return
            }
            this.$("." + b).removeClass(b);
            this._selectedIndex = j;
            if (!this.suggestions[j]) {
                this.$input.val(this._currentQuery);
                return
            }
            var m = this.suggestions[j].phrase,
                k = this.isBangQuery(this._currentQuery);
            if (k) {
                m += " "
            }
            this.$input.val(m);
            this.$("." + h + "[data-index='" + j + "']").addClass(b)
        },
        _isColumnLayout: function() {
            return this.isBangQuery(this._currentQuery) && !g.device.isMobile
        },
        _renderBangResults: function(n) {
            var o = this._bangItemTemplate,
                m, q, j = g.device.isMobile,
                p, k;
            this.$wrap.append(DDG.$exec_template(this._bangLayoutTemplate));
            m = this.$("." + c);
            q = this.$("." + i);
            p = Math.ceil(n.length / 2);
            $.each(n, function(s, r) {
                r.i = s;
                r.originalQuery = this._currentQuery;
                if (r.phrase.length > 11) {
                    r.longPhrase = true
                }
                r.image += "?" + e;
                k = DDG.exec_template(o, r);
                if (s < p || j) {
                    m.append(k)
                } else {
                    q.append(k)
                }
            }.bind(this));
            this.$el.addClass(a);
            this.$footer.removeClass("is-hidden")
        },
        _renderTextResults: function(k) {
            var m = this._textItemTemplate,
                j = g.strip_all_html(this._currentQuery);
            $.each(k, function(o, n) {
                var p = g.strip_all_html(n.phrase);
                this.$wrap.append(DDG.$exec_template(m, {
                    i: o,
                    phrase: p.replace(j, "<strong>" + j + "</strong>")
                }))
            }.bind(this));
            this.$el.removeClass(a);
            this.$footer.addClass("is-hidden")
        },
        _displayResults: function(j) {
            if (j.length === 0) {
                this.hide();
                return
            }
            if (!this._visible) {
                this.show()
            }
            this._resetMouseMove();
            this._selectedIndex = -1;
            this.$wrap.html("");
            if (this.isBangQuery(this._currentQuery)) {
                this._renderBangResults(j)
            } else {
                this._renderTextResults(j)
            }
        },
        _getSuggestions: function(j) {
            if (this._cache[j]) {
                this.suggestions = this._cache[j];
                return this._displayResults(this._cache[j])
            }
            if (this._lastAjax && this._lastAjax.abort) {
                this._lastAjax.abort()
            }
            window.autocompleteCallback = function(k) {
                delete this._lastAjax;
                if (j !== this._currentQuery) {
                    return
                }
                this.suggestions = k;
                this._cache[j] = k;
                this._displayResults(k)
            }.bind(this);
            this._lastAjax = $.ajax({
                url: this._endpoint,
                crossDomain: true,
                data: {
                    q: g.strip_all_html(j),
                    kl: g.settings.region.id
                },
                type: "GET",
                context: this,
                dataType: "jsonp",
                jsonpCallback: "autocompleteCallback"
            }).fail(function(m, k) {
                delete this._lastAjax;
                if (k !== "abort") {
                    this.hide()
                }
            }).done(window.autocompleteCallback)
        },
        _selectItemByOffset: function(k) {
            var j = this._selectedIndex + k;
            if (j >= this.suggestions.length) {
                return
            }
            this._selectItem(j);
            this._updateScroll()
        },
        _focusInput: function() {
            var j = this.$input.val();
            this.$input.focus().val(j)
        },
        _onMouseMove: function(m) {
            var j = m.pageX,
                n = m.pageY;
            if (this._mouseMoved) {
                var k = $(m.currentTarget).data("index");
                this._selectItem(k);
                g.keyboard.set("namespace", "autocomplete");
                return
            }
            if (!this._initialMousePos) {
                this._initialMousePos = {
                    x: j,
                    y: n
                }
            } else {
                if (Math.abs(this._initialMousePos.x - j) > 3 || Math.abs(this._initialMousePos.y - n) > 3) {
                    this._mouseMoved = true
                }
            }
        },
        _onMouseLeave: function() {
            if (this._mouseMoved) {
                this._selectItem(-1)
            }
        },
        _onTouchStart: function(k) {
            k.stopPropagation();
            var j = $(k.currentTarget).data("index");
            this._selectItem(j)
        },
        _onBlur: function(j) {
            if (this._selectedIndex > -1) {
                return
            }
            this.hide()
        },
        _onMouseDown: function(k) {
            var j = $(k.currentTarget).data("index");
            this._selectItem(j)
        },
        _onClick: function(j) {
            if (!this.isBangQuery(this._currentQuery)) {
                this.emit("submit")
            }
            this.clear();
            this.hide();
            this._focusInput()
        },
        _onEscape: function(j) {
            if (!this._visible) {
                return
            }
            this._selectItem(-1);
            this._focusInput();
            this.hide()
        },
        _onEnter: function(j) {
            if (!this._visible) {
                return
            }
            if (this.isBangQuery(this._currentQuery)) {
                j.stopImmediatePropagation();
                j.preventDefault();
                this._focusInput()
            } else {
                this.emit("submit")
            }
            this.clear();
            this.hide()
        },
        _onSearchBarDown: function(j) {
            if (!this._visible) {
                return
            }
            this._onDown(j);
            g.keyboard.set("namespace", "autocomplete");
            if (this.isBangQuery(this._currentQuery)) {
                this.$input.blur()
            }
        },
        _onPaste: function(j) {
            this._resetMouseMove();
            setTimeout(function() {
                this._currentQuery = this.$input.val();
                this._getSuggestions(this._currentQuery)
            }.bind(this), 0)
        },
        _onKeyUp: function(k) {
            var j = k.keyCode;
            if (this.$input.val() === this._currentQuery || g.keyboard.keyCodeIsOneOf(j, ["up", "down", "left", "right", "enter", "escape", "shift", "ctrl", "alt", "cmd"])) {
                return
            }
            this._currentQuery = this.$input.val();
            if (this._currentQuery) {
                this._getSuggestions(this._currentQuery)
            } else {
                this.suggestions = [];
                this.hide()
            }
        },
        _onUp: function(k) {
            k.preventDefault();
            var j = Math.ceil(this.suggestions.length / 2);
            if (this._selectedIndex === 0) {
                this._focusInput()
            }
            if (this._isColumnLayout() && this._selectedIndex === j) {
                return
            }
            this._selectItemByOffset(-1)
        },
        _onDown: function(m) {
            m.preventDefault();
            var k = Math.ceil(this.suggestions.length / 2),
                j;
            j = this._selectedIndex === this.suggestions.length - 1 || (this._isColumnLayout() && this._selectedIndex === k - 1);
            if (j) {
                return
            }
            this._selectItemByOffset(1)
        },
        _onLeft: function(k) {
            if (!this.isBangQuery(this._currentQuery)) {
                return
            }
            k.preventDefault();
            var j = Math.ceil(this.suggestions.length / 2);
            if (this._isColumnLayout() && this._selectedIndex >= j) {
                this._selectItemByOffset(-j)
            }
        },
        _onRight: function(k) {
            if (!this.isBangQuery(this._currentQuery)) {
                return
            }
            k.preventDefault();
            var j = Math.ceil(this.suggestions.length / 2);
            if (this._isColumnLayout() && this._selectedIndex < j) {
                this._selectItemByOffset(j)
            }
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.Modal = function(c) {
        a.call(this, c);
        this._isPopover = c.isPopover;
        b.keyboard.on("escape.modal", this.hide.bind(this))
    };
    b.Views.Modal.prototype = $.extend({}, a.prototype, {
        show: function() {
            if (this.isShowing) {
                return
            }
            this.isShowing = true;
            this.$el.addClass("is-showing");
            setTimeout(function() {
                b.$doc.on("mouseup.modal touchend.modal", this.hide.bind(this))
            }.bind(this), 1);
            this.$el.on("mouseup.modal touchend.modal", function(c) {
                c.stopPropagation()
            });
            if (this.$trigger) {
                this.$trigger.on("mouseup.modal touchend.modal", function(c) {
                    c.stopPropagation()
                })
            }
            this._previousNamespace = b.keyboard.namespace;
            b.keyboard.set("namespace", "modal");
            this.emit("shown")
        },
        hide: function() {
            if (!this.isShowing) {
                return
            }
            this.isShowing = false;
            this.$el.removeClass("is-showing");
            b.$doc.off("mouseup.modal touchend.modal");
            this.$el.off("mouseup.modal touchend.modal");
            b.keyboard.set("namespace", this._previousNamespace);
            this.emit("hidden")
        },
        toggle: function() {
            return this.isShowing ? this.hide() : this.show()
        },
        destroy: function() {
            this.hide();
            a.prototype.destroy.call(this)
        },
        pointAt: function(c) {
            if (this._isPopover) {
                return
            }
            this.$el.css(c)
        },
        setTrigger: function(c) {
            this.$trigger = c
        },
        _render: function(c) {
            a.prototype._render.call(this, c);
            this.$(".js-modal-close").click(function(f) {
                f.preventDefault();
                f.stopPropagation();
                this.hide()
            }.bind(this))
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.HomepageTagline = function(c) {
        a.call(this, c);
        this.$(".js-tag-item-learn-more").click(function() {
            b.pixel.fire("htl")
        })
    };
    b.Views.HomepageTagline.prototype = $.extend({}, a.prototype, {
        template: "homepage_tagline"
    })
}(DDG);
! function(c) {
    var a = c.Views.Base,
        b = 5,
        e = 0;
    c.Views.OnboardingEducation = function(g) {
        var f = this;
        this.model = g.model = c.Models.Settings.OnboardingEducation;
        this.pageView = g.pageView;
        this.learnMore = g.learnMore;
        this.template = "hp_onboarding_education";
        this.currentSlide = e;
        this.lastScrollPosition = null;
        this.$body = $("body");
        this.ignoreScrollEvents = true;
        g.doRenderTeaserArrow = this.doRenderTeaserArrow = c.device.isDesktop;
        g.renderFirstSlideArrow = this.renderFirstSlideArrow = c.device.isMobile && (!c.page.canShowAddToBrowser() || (c.page.canShowAddToBrowser() && c.device.isAndroidChromeNoOpenSearch));
        if (!this.learnMore && !c.page.scrollToOnboarding && (!this.pageView.canShowHomepageOnboardingEducation.call(this.pageView) || c.addToBrowser.canShowMobileBanner() || c.device.isLegacyAndroid || !window.Modernizr.svg)) {
            this._render = function() {};
            return
        }
        if (!c.device.isMobile && window.Modernizr.csstransitions) {
            this.model.isSVGAnimated = true
        }
        a.call(this, g);
        this.$body.addClass("body--onboarding");
        this.$logoTT = $(".logo_homepage__tt");
        this.$logoTT.html(l("Learn %sMore%s", "", ""));
        this._cacheElems(".js-onboarding-ed", ["arrow", "teaser", "slide", "slide-1", "slide-2", "slide-3", "slide-4", "image-container-1", "image-container-2", "image-container-3", "image-container-4", "balance-text", "dismiss", "back-to-search", "install", "spread", "tweet-button"]);
        this.bindEvents([
            [c.device, "scroll", $.throttle(100, this._onScroll.bind(this))],
            [c.device, "resize", this._onResize],
            [this.$arrow, "click", this._onArrowClick],
            [this.$teaser, "click", this._onArrowClick],
            [$(".logo_homepage"), "click", this._onArrowClick],
            [$(".js-tag-item-learn-more"), "click", this._onArrowClick],
            [this.$dismiss, "click", this._onDismissClick],
            [this.$backtosearch, "click", this._onBackToSearchClick],
            [this.$tweetbutton, "click", this._onTweetButtonClick],
            [$("form"), "focusin", this._hideAfterKeyboardActivation]
        ]);
        if (!this.pageView.canShowHomepageEducationInstallButton.call(this.pageView)) {
            this.$install.hide();
            this.$spread.show()
        }
        this.$arrow.hide();
        this.isArrowHidden = true;
        if (this.doRenderTeaserArrow) {
            this.$teaser.show()
        }
        if (this.renderFirstSlideArrow) {
            this.$arrow.show();
            this.isArrowHidden = false
        }
        this._balanceText();
        window.setTimeout(function() {
            this._balanceText()
        }.bind(this), 500);
        window.setTimeout(function() {
            var i = c.device.height;
            var h = c.device.scrollTop();
            f.currentSlide = Math.round(h / i);
            if (f.currentSlide > 0) {
                f._snapToSlideScroll()
            } else {
                f.ignoreScrollEvents = false
            }
        }, 750);
        if (c.page.scrollToOnboarding) {
            window.setTimeout(function() {
                if (f.currentSlide === 0) {
                    f.currentSlide = 1;
                    f._snapToSlideScroll()
                }
            }, 1000)
        }
    };
    c.Views.OnboardingEducation.prototype = $.extend({}, a.prototype, {
        _balanceText: function() {
            if (typeof($.balanceText) === "function") {
                $.balanceText(this.$balancetext, {
                    watch: false
                })
            }
        },
        _hideAfterKeyboardActivation: function() {
            if (c.device.isMobile || c.device.isMobileDevice) {
                this._hide()
            }
        },
        _hide: function() {
            this.$el.hide();
            this.$logoTT.html(l("Duck it", "", ""))
        },
        _onArrowClick: function(h) {
            if (this.model.isDismissed) {
                return
            }
            h.preventDefault();
            h.stopPropagation();
            var f = c.device.scrollTop();
            var g = c.device.height;
            this.currentSlide = Math.round(f / g) + 1;
            this._snapToSlideScroll()
        },
        _onDismissClick: function(f) {
            f.preventDefault();
            f.stopPropagation();
            this._hide();
            this.model.dismiss();
            c.pixel.fire("hpec", c.device.pixelBrowserName, c.opensearch.version, {
                atbva: c.opensearch.atbVariant,
                va: c.opensearch.variant,
                l: w.locale
            })
        },
        _onBackToSearchClick: function(g) {
            var f = this;
            g.preventDefault();
            if (this.doRenderTeaserArrow) {
                this.$arrow.fadeOut(100);
                this.isArrowHidden = true
            }
            c.device.scrollTop(0, this.model.scrollToAnimationDurationMS, $.debounce(0, false, function() {
                f.currentSlide = 0
            }))
        },
        _onResize: function() {
            if (this.$arrow) {
                this.$arrow.attr("style", "");
                this.isArrowHidden = false;
                this._updateArrowVisibility()
            }
        },
        _onTweetButtonClick: function(f) {
            c.pixel.fire("hptc", c.device.pixelBrowserName, c.opensearch.version, {
                atbva: c.opensearch.atbVariant,
                va: c.opensearch.variant,
                l: w.locale
            })
        },
        _firePixelSlide1: function() {
            c.pixel.fire("hst", {
                b: c.device.pixelBrowserName,
                atbi: this.pageView.canShowAddToBrowser.call(this.pageView),
                ei: this.pageView.canShowHomepageOnboardingEducation.call(this.pageView),
                i: this.pageView.isInstalled.call(this.pageView),
                d: c.device.pixelId,
                atb: c.opensearch.version,
                atbva: c.opensearch.atbVariant,
                va: c.opensearch.variant,
                l: w.locale
            })
        },
        _firePixelSlide4: function() {
            c.pixel.fire("atbbsb", c.device.pixelBrowserName, c.opensearch.version, {
                atbva: c.opensearch.atbVariant,
                va: c.opensearch.variant,
                l: w.locale
            })
        },
        _onScroll: function(j) {
            var g = c.device.scrollTop(),
                h = this.lastScrollPosition,
                f = g < h,
                i = c.device.height,
                k = Math.round(g / i);
            this.lastScrollPosition = g;
            if (this.model.isDismissed || this.ignoreScrollEvents) {
                return
            }
            if (k !== this.currentSlide) {
                this._handleManualScroll(f)
            }
            this._updateArrowVisibility()
        },
        _handleManualScroll: function(f) {
            var h = this.currentSlide || 0;
            var g = f ? h - 1 : h + 1;
            if (g >= b) {
                return
            }
            this.currentSlide = g;
            if (g === 1 && !this.model.didUserScroll) {
                this.model.didUserScroll = true;
                this._firePixelSlide1()
            } else {
                if (g === 4) {
                    this._firePixelSlide4()
                }
            }
            this._updateArrowVisibility()
        },
        _snapToSlideScroll: function() {
            var g = this;
            var h = this.currentSlide || 0;
            var k = this.$slide.height();
            if (h >= b) {
                return
            }
            if (h === 1 && !this.model.didUserScroll) {
                this.model.didUserScroll = true;
                this._firePixelSlide1()
            } else {
                if (h === 4) {
                    this._firePixelSlide4()
                }
            }
            if (this.model.isSVGAnimated) {
                this.ignoreScrollEvents = true
            }
            var j = h * k;
            var f = this.model.scrollToAnimationDurationMS;
            var i = 300;
            c.device.scrollTop((j), f, $.debounce(i, true, function() {
                if (g.model.isSVGAnimated) {
                    g.ignoreScrollEvents = false
                }
                if (g.model.isSVGAnimated && h > 0) {
                    g._renderCurrentSlideAnimation()
                }
                g._updateArrowVisibility()
            }))
        },
        _updateArrowVisibility: function() {
            var f = c.device.scrollTop(),
                g = c.device.height,
                h = Math.round(f / g);
            if (this.isArrowHidden) {
                if ((!this.renderFirstSlideArrow && h > 0 && h < 4) || (this.renderFirstSlideArrow && h < 4)) {
                    this.$arrow.fadeIn(100);
                    this.isArrowHidden = false
                }
            } else {
                if (!this.isArrowHidden) {
                    if ((!this.renderFirstSlideArrow && (h < 1 || h > 3)) || (this.renderFirstSlideArrow && h > 3)) {
                        if (this.$arrow.css("display") !== "none") {
                            this.$arrow.fadeOut(100);
                            this.isArrowHidden = true
                        }
                    }
                }
            }
        },
        _renderCurrentSlideAnimation: function() {
            if (this.currentSlide === 0) {
                return
            }
            if (!this.model.isSVGAnimated) {
                return
            }
            var h = this.currentSlide;
            var g = "slide" + h;
            var f = "$imagecontainer" + h;
            if (this[f].children(".onboarding-ed__image--animated").length > 0) {
                return
            }
            if (Object.keys(this.views).length > 0) {
                this._destroySlideAnimations()
            }
            this.views[g] = new c.Views.OnboardingEducationSlide({
                model: {
                    slideIndex: h,
                    isSVGAnimated: this.model.isSVGAnimated
                },
                template: "hp_onboarding_ed_slide" + h,
                appendTo: this[f]
            })
        },
        _destroySlideAnimations: function() {
            if (this.views) {
                var f = this;
                var g = Object.keys(this.views);
                g.forEach(function(h) {
                    f.views[h].destroy()
                })
            }
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.OnboardingEducationSlide = function(c) {
        c.model = new b.Models.Settings.OnboardingEducationSlide(c);
        this.template = c.template;
        if (c.model.isSVGAnimated && (c.model.slideIndex > 0)) {
            a.call(this, c);
            this._timeout = null;
            this._loopCount = 0;
            this._initAnimation()
        }
    };
    b.Views.OnboardingEducationSlide.prototype = $.extend({}, a.prototype, {
        _initAnimation: function() {
            var f = this;
            var e = ".js-onboarding-ed-image-container-" + this.model.slideIndex;
            this.$imgcontainer = $(e);
            var c = "slide" + this.model.slideIndex;
            var h = this.model.animationAnchorEl[c];
            this._cacheElems(".js-onboarding-ed-anim", [h]);
            var g = "$" + this.model.animationAnchorEl[c].replace(/-/g, "");
            this[g].on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function(i) {
                if (!f._timeout) {
                    f._pause();
                    f._timeout = window.setTimeout(function() {
                        f._timeout = null;
                        f._start()
                    }, f.model.pauseBetweenAnimationIterations)
                }
            });
            window.setTimeout(function() {
                f._start()
            }, this.model.pauseBeforeAnimation)
        },
        _start: function() {
            if (this._loopCount >= this.model.maxAnimationLoops) {
                return
            }
            this._loopCount++;
            this.$imgcontainer.addClass("is-animated")
        },
        _pause: function() {
            this.$imgcontainer.removeClass("is-animated")
        },
        destroy: function() {
            this.$imgcontainer.removeClass("is-animated");
            a.prototype.destroy.call(this)
        }
    })
}(DDG);
! function(e) {
    var c = e.Views.Base,
        a = false,
        g = "onboarding-bottom-bathroomguy-animation-on";
    e.Views.AddToBrowserBadge = function(j) {
        j.displayBrowserName = e.device.displayBrowserName;
        j.browserId = j.displayBrowserName.toLowerCase();
        j.ctaText = l("Set DuckDuckGo as your %sdefault search engine", "");
        var m = e.Data.Onboarding[e.opensearch.atbVariant] || {};
        j.onboardingTest = m;
        j.va = e.opensearch.variant;
        j.atbva = e.opensearch.atbVariant;
        j.random_number = Math.ceil(Math.random() * 10000000);
        this.animated = m.animateModalIllustration;
        this.isEnglish = j.isEnglish = window.locale && window.locale.substring(0, 2) == "en";
        this.hideOnClick = j.hideOnClick;
        this.badgeType = j.badgeType;
        if (j.template) {
            this.template = j.template
        } else {
            if (j.topRight) {
                this.template = "add_to_browser_badge_top";
                this.topRight = true;
                if (j.fadeIn) {
                    setTimeout(function() {
                        if (!a) {
                            this.$el.fadeIn()
                        }
                    }.bind(this), 500)
                }
            }
        }
        if (j.impressionPixel) {
            e.pixel.fire(j.impressionPixel, e.device.pixelBrowserName, e.opensearch.version, {
                va: e.opensearch.variant,
                atbva: e.opensearch.atbVariant,
                l: w.locale,
                p: e.device.pixelPlatformName
            })
        }
        if (e.extension.canInstall()) {
            if (e.device.isDesktop && e.device.isFirefox && e.device.firefoxVersion > 56) {
                j.url = e.extension.url3
            } else {
                if (e.device.isDesktop && e.device.isFirefox && e.device.firefoxVersion > 50 && e.device.firefoxVersion < 57) {
                    j.url = e.extension.url2
                } else {
                    j.url = e.extension.url
                }
            }
            this._isInstallingExtension = true;
            if (e.device.isChrome) {
                $("head").append('<link rel="chrome-webstore-item" href="' + j.url + '">');
                j.url = null
            }
        } else {
            if ((e.device.isChrome48AndUp || e.device.isEdge || e.device.isIE) && !e.device.isMobileDevice) {
                j.url = "/install";
                j.openInNewTab = true;
                if (e.settings.get("t")) {
                    j.url += ("?t=" + e.settings.get("t"))
                }
                this._isOpeningInNewTab = true
            }
        }
        this.xPixel = j.xPixel;
        this.clickPixel = j.clickPixel;
        this.entryPoint = j.entryPoint || "hp";
        if (e.device.isSafari) {
            j.showButton = true
        }
        c.call(this, j);
        var k = j.topRight ? ".js-badge-main-msg" : this.$el;
        k = j.badgeType === "splash" ? j.button : k;
        this.bindEvents([
            [k, "click", f],
            [".js-badge-link-close", "click", h],
            [".js-badge-link-dismiss", "click", b]
        ]);
        if (this._isInstallingExtension && e.device.isFirefox) {
            this.bindEvents([
                [e.device, "resize", this.hideExtensionOverlay.bind(this)],
                [e.device, "visibilitychange", this.hideExtensionOverlay.bind(this)]
            ])
        }
        var i = e.history.get("exti");
        if (i) {
            e.history.clear("exti");
            this.hide();
            this.addATBDataAttribute();
            if (i == 1) {
                this.showExtensionOverlay()
            } else {
                if (i == 2) {
                    this.showExtensionOverlay();
                    this.showSuccessScreen()
                }
            }
        }
    };
    e.Views.AddToBrowserBadge.prototype = $.extend({}, c.prototype, {
        template: "add_to_browser_badge",
        showModal: function() {
            if (!this.views.modal) {
                this.views.modal = new e.Views.AddToBrowserModal({
                    entryPoint: this.entryPoint,
                    appendTo: $("body")
                })
            }
            setTimeout(function() {
                this.views.modal.show()
            }.bind(this), 50)
        },
        show: function() {
            this.$el.show()
        },
        hide: function() {
            this.$el.hide()
        },
        animate: function() {
            this.$el.addClass(g);
            this.animated = true
        },
        unAnimate: function() {
            this.$el.removeClass(g);
            this.animated = false
        },
        click: function(i) {
            f.call(this, i)
        },
        dismiss: function() {
            e.addToBrowser.dismiss();
            e.pixel.fire(this.xPixel, e.device.pixelBrowserName, e.opensearch.version, {
                va: e.opensearch.variant,
                atbva: e.opensearch.atbVariant,
                l: w.locale,
                p: e.device.pixelPlatformName
            });
            this.dismissed = true
        },
        showExtensionOverlay: function() {
            if (a || !this._isInstallingExtension) {
                return
            }
            a = true;
            this._onBoardingTest = e.Data.Onboarding[e.opensearch.atbVariant] || {};
            var j = "add_to_browser_extension_overlay",
                m = e.device.browserName ? e.device.browserName.toLowerCase() : "",
                k = j + "_" + m,
                i = e.templates[k];
            this.$extOverlay = e.$exec_template(j, {
                browserName: m,
                subTemplate: i && k,
                url: e.extension.url,
                onBoardingTest: this._onBoardingTest,
                isEnglish: this.isEnglish
            });
            setTimeout(function() {
                this.$extOverlay.click(this.hideExtensionOverlay.bind(this))
            }.bind(this), 100);
            if (e.device.isOSX) {
                this.$extOverlay.addClass("is-osx")
            }
            $("body").append(this.$extOverlay);
            e.$html.addClass("is-blurred");
            setTimeout(function() {
                this.$extOverlay && this.$extOverlay.addClass("is-showing")
            }.bind(this), 10);
            if (this._isInstallingExtension && e.extension.watchCSSForSuccess) {
                this._successInterval = setInterval(function() {
                    if (!a || w.extensionsuccess) {
                        return clearInterval(this._successInterval)
                    }
                    if (e.extension.isInstalled({
                            nocache: true
                        }) && !d.getElementById("confetti")) {
                        if (e.device.isSafari) {
                            this.reloadAndResumeAtStep(2)
                        } else {
                            this.showSuccessScreen()
                        }
                    }
                }.bind(this), 500)
            }
        },
        hideExtensionOverlay: function() {
            if (!a) {
                return
            }
            e.$html.removeClass("is-blurred");
            this.$extOverlay && this.$extOverlay.removeClass("is-showing");
            setTimeout(function() {
                this.$extOverlay && this.$extOverlay.remove()
            }.bind(this), 300);
            if (this.hideOnClick) {
                this.show()
            }
            this._successInterval && clearInterval(this._successInterval);
            a = false
        },
        showSuccessScreen: function() {
            if (w.extensionsuccess) {
                return
            }
            this.hideExtensionOverlay();
            this._fireInstalledPixel();
            e.device.scrollTop(0);
            this.$extOverlay && this.$extOverlay.off("click")
        },
        addATBDataAttribute: function() {
            $.ajax({
                dataType: "json",
                url: "/atb.js?" + Math.ceil(Math.random() * 10000000),
                error: function(j, i, k) {
                    e.pixel.fire("exte", {
                        status: j.status,
                        statusText: j.statusText,
                        responseText: j.responseText,
                        msg: k,
                        p: e.device.pixelPlatformName
                    });
                    this._failedToAddATBData = true
                }.bind(this),
                success: function(i) {
                    if (!i || !i.version || !i.majorVersion || !i.minorVersion) {
                        e.pixel.fire("exte", {
                            msg: "invalid-atb-info",
                            d: encodeURIComponent(i),
                            p: e.device.pixelPlatformName
                        });
                        this._failedToAddATBData = true;
                        return
                    }
                    this._failedToAddATBData = false;
                    e.opensearch.setATB(i);
                    if (this.badgeType === "splash") {
                        e.opensearch.atbVariant = e.tParam.get();
                        if (this._onBoardingTest.variant) {
                            e.opensearch.variant = this._onBoardingTest.variant
                        } else {
                            e.opensearch.variant = e.opensearch.atbVariant
                        }
                    }
                    var j = e.device.isChrome ? "data-chromeatb" : "data-atb";
                    $("html").attr(j, e.opensearch.version + e.opensearch.variant + e.opensearch.atbVariant);
                    if (this._onBoardingTest && this._onBoardingTest.hideToolbarButton) {
                        $("html").attr("data-hidetoolbarbutton", true)
                    }
                }.bind(this)
            })
        },
        reloadAndResumeAtStep: function(j, i) {
            e.history.set("exti", j, function() {
                setTimeout(function() {
                    window.location.reload()
                }, i || 0)
            });
            e.history.set("t", "h" + e.opensearch.atbVariant)
        },
        _fireInstalledPixel: function() {
            var i;
            if ((this.clickPixel === "atbhc" || this.clickPixel === "atbsc")) {
                i = e.settings.isDefault(e.addToBrowser.BADGE_RECURRING_KEY) ? 0 : 1
            }
            e.pixel.fire("exti", e.device.pixelBrowserName, e.opensearch.version, {
                atbva: e.opensearch.atbVariant,
                va: e.opensearch.variant,
                l: window.locale,
                cp: this.clickPixel,
                exte: this._failedToAddATBData ? 1 : 0,
                p: e.device.pixelPlatformName,
                ax: (i) ? i : 0
            });
            if ((e.device.isChrome) || (e.device.isFirefox && e.device.firefoxVersion > 56)) {
                return
            }
            var j = this._failedToAddATBData ? "&exte=1" : "";
            $.ajax({
                url: "/exti/?atb=" + e.opensearch.getFullATBParam() + j + "&p=" + e.device.pixelPlatformName + "&l=" + window.locale + "&cp=" + this.clickPixel
            });
            e.pixel.fire("iconf", e.device.pixelBrowserName, e.opensearch.version, {
                atbva: e.opensearch.atbVariant,
                va: e.opensearch.variant,
                l: window.locale,
                cp: this.clickPixel,
                exte: this._failedToAddATBData ? 1 : 0,
                p: e.device.pixelPlatformName
            })
        }
    });

    function f(i) {
        if (this._isOpeningInNewTab) {
            e.pixel.fire(this.clickPixel, e.device.pixelBrowserName, e.opensearch.version, {
                va: e.opensearch.variant,
                atbva: e.opensearch.atbVariant,
                l: w.locale,
                p: e.device.pixelPlatformName
            });
            return
        }
        if (this._isInstallingExtension) {
            e.pixel.fire(this.clickPixel, e.device.pixelBrowserName, e.opensearch.version, {
                va: e.opensearch.variant,
                atbva: e.opensearch.atbVariant,
                exti: 1,
                l: w.locale,
                p: e.device.pixelPlatformName
            });
            if (this.hideOnClick) {
                this.hide()
            }
            if (e.device.isSafari) {
                this.reloadAndResumeAtStep(1, 1000)
            } else {
                if (e.device.isChrome) {
                    chrome.webstore.install(e.extension.url, this.showSuccessScreen.bind(this), this.hideExtensionOverlay.bind(this))
                }
                this.showExtensionOverlay();
                if (this._atbDataTimeout) {
                    clearTimeout(this._atbDataTimeout)
                }
                this._atbDataTimeout = setTimeout(function() {
                    this.addATBDataAttribute()
                }.bind(this), 1000)
            }
            return
        }
        i && i.preventDefault();
        e.pixel.fire(this.clickPixel, e.device.pixelBrowserName, e.opensearch.version, {
            va: e.opensearch.variant,
            atbva: e.opensearch.atbVariant,
            l: w.locale,
            p: e.device.pixelPlatformName
        });
        this.showModal()
    }

    function h(i) {
        i.preventDefault();
        i.stopPropagation();
        this.dismiss();
        this.destroy()
    }

    function b(i) {
        i.preventDefault();
        i.stopPropagation();
        this.dismiss();
        this._showingCookieMessage = true;
        this.$(".js-badge-main-msg").hide();
        this.$(".js-badge-cookie-msg").show();
        setTimeout(function() {
            this.$el && this.$el.fadeOut(600)
        }.bind(this), 7000)
    }
}(DDG);
! function(g) {
    var b = g.Views.Base;
    g.Views.AddToBrowserBanner = function(m) {
        m.displayBrowserName = g.device.displayBrowserName;
        m.androidChromeNoOpenSearch = g.device.isAndroidChromeNoOpenSearch;
        var n = g.Data.Onboarding[g.opensearch.atbVariant] || {};
        this.onboardingTest = m.onboardingTest = n;
        m.isEnglish = g.device.isEnglish;
        this.xPixel = m.xPixel;
        this.clickPixel = m.clickPixel;
        this.entryPoint = m.entryPoint || "hp";
        b.call(this, m);
        this._cacheElems(".js-atb-banner", ["learnmore", "close", "dismiss", "start", "cookiemsg", "mainmsg"]);
        this.bindEvents([
            [this.$el, "click", h],
            [this.$learnmore, "click", c],
            [this.$close, "click", i],
            [this.$dismiss, "click", a],
            [this.$start, "click", f],
            [this.$cookiemsg, "click", e]
        ]);
        var j = parseInt(g.history.get("exti"), 10),
            k = g.history.get("va");
        if (j === 3) {
            this.clickPixel = g.history.get("cp");
            g.opensearch.variant = k;
            g.history.clear("cp");
            g.history.clear("va");
            g.history.clear("exti");
            g.history.clear("q");
            this.showModal()
        }
        if (m.impressionPixel && j !== 3) {
            g.pixel.fire(m.impressionPixel, g.device.pixelBrowserName, g.opensearch.version, {
                va: g.opensearch.variant,
                atbva: g.opensearch.atbVariant,
                l: w.locale,
                p: g.device.pixelPlatformName,
                ak: g.settings.get(g.addToBrowser.BADGE_DISMISS_KEY)
            })
        }
    };
    g.Views.AddToBrowserBanner.prototype = $.extend({}, b.prototype, {
        template: "add_to_browser_banner",
        _render: function(j) {
            if (j.template) {
                this.template = j.template
            } else {
                if (g.addToBrowser.canShowMobileButton()) {
                    this.template = "add_to_browser_button"
                } else {
                    if (g.device.isAndroid && !g.addToBrowser.canShowMobileBanner()) {
                        this.template = "add_to_browser_badge_android"
                    }
                }
            }
            if (this.template === "add_to_browser_banner" || this.template === "add_to_browser_button") {
                this.$parent.addClass("fix-to-bottom");
                if (g.device.isMobile) {
                    this.$parent.addClass("show-on-small-screens")
                }
            }
            if (this.template === "add_to_browser_button_serp") {
                setTimeout(function() {
                    this.$el.addClass("atb-loaded")
                }.bind(this), 500)
            }
            b.prototype._render.call(this, j)
        },
        showModal: function() {
            if (!this.views.modal) {
                this.views.modal = new g.Views.AddToBrowserModalBlurred({
                    entryPoint: this.entryPoint,
                    clickPixel: this.clickPixel,
                    appendTo: $("body")
                })
            }
            setTimeout(function() {
                this.views.modal.show()
            }.bind(this), 50)
        },
        show: function(j) {
            if (j) {
                setTimeout(function() {
                    this.$el.show()
                }.bind(this), j)
            } else {
                this.$el.show()
            }
        },
        hide: function() {
            this.$el.hide()
        },
        dismiss: function() {
            g.addToBrowser.dismiss();
            if (g.page.onboardingTest.bannerAbove) {
                g.removeClass("html", g.$html, "fixed-header")
            }
            g.pixel.fire(this.xPixel, g.device.pixelBrowserName, g.opensearch.version, {
                va: g.opensearch.variant,
                atbva: g.opensearch.atbVariant,
                l: w.locale,
                p: g.device.pixelPlatformName
            });
            this.dismissed = true
        }
    });

    function h(j) {
        j.preventDefault();
        j.stopPropagation();
        if (fq) {
            return false
        }
        g.pixel.fire(this.clickPixel, g.device.pixelBrowserName, g.opensearch.version, {
            va: g.opensearch.variant,
            atbva: g.opensearch.atbVariant,
            l: w.locale,
            p: g.device.pixelPlatformName,
            ak: g.settings.get(g.addToBrowser.BADGE_DISMISS_KEY)
        });
        if (g.addToBrowser.canAddToChromeAndroid() && g.page.pageType !== "serp") {
            window.location.href = "/?q=duckduckgo&exti=3&t=h" + g.opensearch.atbVariant + "&va=" + g.opensearch.variant + "&cp=" + this.clickPixel
        } else {
            this.showModal()
        }
    }

    function i(j) {
        j.preventDefault();
        j.stopPropagation();
        this.dismiss();
        this.destroy()
    }

    function a(j) {
        j.preventDefault();
        j.stopPropagation();
        this.dismiss();
        this._showingCookieMessage = true;
        this.$mainmsg.hide();
        this.$cookiemsg.show();
        setTimeout(function() {
            this.$el && this.$el.fadeOut(600)
        }.bind(this), 7000)
    }

    function f(j) {
        j.preventDefault();
        j.stopPropagation();
        window.location.href = "https://start.duckduckgo.com"
    }

    function e(j) {
        j.preventDefault();
        j.stopPropagation()
    }

    function c(j) {
        j.preventDefault();
        j.stopPropagation();
        this.dismissed = true;
        this.destroy();
        g.page.addOnboarding();
        g.pixel.fire("atbhl", g.device.pixelBrowserName, g.opensearch.version, {
            va: g.opensearch.variant,
            atbva: g.opensearch.atbVariant,
            l: w.locale,
            p: g.device.pixelPlatformName,
            ax: (g.settings.isDefault(g.addToBrowser.BADGE_RECURRING_KEY)) ? 0 : 1
        })
    }
}(DDG);
! function(c) {
    var b = c.Views.Modal,
        a = "js-add-to-browser",
        e = "is-hidden";
    c.Views.AddToBrowserModal = function(f) {
        this.entryPoint = f.entryPoint;
        b.call(this, f)
    };
    c.Views.AddToBrowserModal.prototype = $.extend({}, b.prototype, {
        template: "add_to_browser_modal",
        show: function() {
            b.prototype.show.call(this);
            $(window).on("blur.atb", function() {
                c.pixel.fire("atbob", this.entryPoint, c.device.pixelBrowserName, c.opensearch.version, {
                    va: c.opensearch.atbVariant
                })
            }.bind(this))
        },
        hide: function() {
            b.prototype.hide.call(this);
            $(window).off("blur.atb")
        },
        _render: function() {
            var k = c.device,
                n = k.getAddToBrowserDirections(),
                i = {
                    displayBrowserName: k.displayBrowserName,
                    showExtensionLink: k.displayBrowserName === "Vivaldi" && k.chromeVersion >= 50
                },
                g = n.useForSearch && c.exec_template(n.useForSearch, i),
                f = n.setAsHomepage && c.exec_template(n.setAsHomepage, i),
                m = k.getBrowserMoreURL(),
                j = g && f,
                h = j || m;
            b.prototype._render.call(this, $.extend(i, {
                useForSearch: g,
                setAsHomepage: f,
                moreURL: m,
                hasToggle: j,
                hasFooter: h
            }));
            if (j) {
                this.$("." + a + "-search-link").click(this._showDirections.bind(this, "search"));
                this.$("." + a + "-homepage-link").click(this._showDirections.bind(this, "homepage"))
            }
            this.$(".js-btn-nui").click(function() {
                c.pixel.fire("atboc", this.entryPoint, c.device.pixelBrowserName, c.opensearch.version, {
                    va: c.opensearch.atbVariant
                });
                c.opensearch.addSearchProvider();
                this.$(".has-btn").removeClass("has-btn");
                this.$(".js-hide-on-nui").addClass(e);
                this.$(".js-show-on-nui").removeClass(e);
                return false
            }.bind(this));
            this.$el.click(function(o) {
                o.preventDefault && o.stopPropagation()
            })
        },
        _showDirections: function(f, i) {
            i.preventDefault();
            i.stopPropagation();
            var g = f === "search" ? "homepage" : "search",
                j = "." + a + "-" + g,
                h = "." + a + "-" + f;
            this.$(j).addClass(e);
            this.$(j + "-link").removeClass(e);
            this.$(h).removeClass(e);
            this.$(h + "-link").addClass(e)
        }
    })
}(DDG);
! function(e) {
    var c = e.Views.Modal;
    e.Views.AddToBrowserModalBlurred = function(f) {
        this.clickPixel = f.clickPixel;
        c.call(this, f)
    };
    e.Views.AddToBrowserModalBlurred.prototype = $.extend({}, c.prototype, {
        template: "add_to_browser_modal_blurred",
        _render: function(f) {
            f = f || {};
            var g = e.Data.Onboarding[e.opensearch.atbVariant] || {};
            f.content = e.exec_template(e.device.getAddToBrowserDirections().useForSearch, {
                displayBrowserName: e.device.displayBrowserName,
                height: e.device.height,
                onboardingTest: g
            });
            this.template = (e.addToBrowser.showDarkInstructions()) ? "add_to_browser_modal_blurred_dark" : "add_to_browser_modal_blurred";
            c.prototype._render.call(this, f);
            var h = (e.addToBrowser.showDarkInstructions()) ? "add-to-browser--blurred__backdrop-dark" : "add-to-browser--blurred__backdrop";
            this.$backdrop = $('<div class="' + h + '"></div>');
            $("body").append(this.$backdrop);
            this._measureHeight();
            e.device.on("resize", this._measureHeight.bind(this));
            DDG.touchOrClick(this.$backdrop, a.bind(this));
            DDG.touchOrClick(this.$el, a.bind(this))
        },
        show: function() {
            e.$html.addClass("blurred-animation").addClass("is-blurred");
            this.$backdrop.addClass("is-showing");
            b(this.$el, "translate3d(0px," + this._translateY + "px,0px)");
            this._setViewedCookie();
            c.prototype.show.call(this)
        },
        hide: function() {
            b(this.$el, "translate3d(0px,0px,0px)");
            e.$html.removeClass("is-blurred");
            this.$backdrop.removeClass("is-showing");
            c.prototype.hide.call(this);
            setTimeout(function() {
                e.$html.removeClass("blurred-animation")
            }, 300)
        },
        _measureHeight: function() {
            this._translateY = (this.$el.outerHeight() * -1) - 10;
            if (this.isShowing) {
                this.hide()
            }
        },
        _setViewedCookie: function() {
            if (e.settings.get(e.settings.MOBILE_INSTRUCTIONS_KEY)) {
                return
            }
            var f = "o";
            if (e.page.pageType === "home" || e.page.pageType === "serp") {
                f = e.page.pageType[0]
            }
            e.settings.set(e.settings.MOBILE_INSTRUCTIONS_KEY, e.opensearch.getFullATBParam() + f + this.clickPixel)
        }
    });
    var b = function(f, g) {
            f.css({
                "-webkit-transform": g,
                transform: g
            })
        },
        a = function(f) {
            f.preventDefault();
            f.stopPropagation();
            this.hide()
        }
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.SpreadBadge = function(c) {
        a.call(this, c);
        b.ImageLoader.registerAll(this.$(".js-lazysvg"), "sidemenu", {
            svg: true
        });
        this.bindEvents([
            [this.$el, "click", this._onClick],
            [".js-badge-link-close", "click", this._onCloseClick]
        ])
    };
    b.Views.SpreadBadge.prototype = $.extend({}, a.prototype, {
        template: "spread_badge",
        _onClick: function() {
            b.pixel.fire("sm_spread");
            window.location.href = "/spread"
        },
        _onCloseClick: function() {
            b.settings.set("kak", -1, {
                saveToCloud: true
            });
            this.destroy()
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.NewsletterFormExpand = function(c) {
        a.call(this, c);
        this._cacheElems(".js-badge", ["email", "form", "lock"]);
        this.bindEvents([
            [this.$form, "submit", this._submit]
        ]);
        this._init()
    };
    b.Views.NewsletterFormExpand.prototype = $.extend({}, a.prototype, {
        template: "newsletter_form_expand",
        _init: function() {
            this._animateIn(this.$form);
            this.$email && this.$email.focus()
        },
        _animateIn: function(e) {
            var c = 300;
            e.hide().slideDown(c, "swing");
            setTimeout(function() {
                e.animate({
                    opacity: 1
                }, c);
                this.$lock && this.$lock.animate({
                    opacity: 1
                })
            }.bind(this), c + 100)
        },
        _submit: function(c) {
            c.preventDefault();
            this.params = this.$form.serialize() + "&" + $.param({
                flow: b.opensearch.version + b.newsletter.group,
                campaign: "b"
            });
            $.post("https://duck.co/s/a", this.params);
            this._animateOut(this.$form.add(".js-badge-title"), function() {
                this.emit("subscribed")
            }.bind(this));
            b.settings.set("kaq", "-1");
            b.settings.clear("kap")
        },
        _animateOut: function(c, e) {
            this.$lock.animate({
                opacity: 0
            }, 400);
            c.animate({
                opacity: 0
            }, {
                duration: 100,
                queue: false
            }).delay(300).slideUp({
                duration: 400,
                complete: e
            })
        }
    })
}(DDG);
! function(c) {
    var b = c.Models,
        a = b.Base;
    b.Newsletter = function() {
        a.call(this);
        this.showStartMessage = true;
        this.group = "none"
    };
    b.Newsletter.prototype = $.extend({}, a.prototype, {
        shouldShowBadge: function() {
            if (window.locale && !/en_/.test(window.locale) || c.device.isMobileDevice || !c.settings.isDefault("kaq")) {
                return false
            }
            var g = c.settings.get("kap"),
                i = g && this._getTimeSinceCohort(g) >= 2;
            if (c.history.get("atb")) {
                if (i) {
                    this.group = "installed";
                    return this._getChanceOfShowingBadge()
                }
                if (!g) {
                    c.settings.set("kap", c.opensearch.version)
                }
                return false
            }
            if (!c.settings.isDefault("kak")) {
                if (i) {
                    this.group = "dismissed";
                    return this._getChanceOfShowingBadge()
                }
                if (!g) {
                    c.settings.set("kap", c.opensearch.version)
                }
                return false
            }
            if (c.tParam.fromDefaultSearch()) {
                var f = new Date(),
                    h = f.getMonth(),
                    e = f.getDate();
                if (e === 3 || e === 9 || e === 18 || e === 24 || (e === 28 && h !== 1)) {
                    this.group = "tparam";
                    this.showStartMessage = false;
                    return this._getChanceOfShowingBadge(true)
                }
                return false
            }
            if (!c.device.canAddToBrowser() && (c.page.pageType === "home" && !c.page.isStart || c.page.pageType === "serp" && c.tParam.fromHomepage())) {
                this.group = "noatb";
                return this._getChanceOfShowingBadge()
            }
            return false
        },
        _getTimeSinceCohort: function(f) {
            var g = f.split("-"),
                e = g[0],
                h = g[1];
            if (!e || !h) {
                return
            }
            e = e.substring(1);
            return this._getDaysBetweenCohorts({
                majorVersion: parseInt(e, 10),
                minorVersion: parseInt(h, 10)
            }, c.opensearch)
        },
        _getDaysBetweenCohorts: function(f, e) {
            return 7 * (e.majorVersion - f.majorVersion) + (e.minorVersion - f.minorVersion)
        },
        _getChanceOfShowingBadge: function(f) {
            var e;
            if (c.page.pageType === "home" && !f) {
                e = true
            } else {
                e = Math.random() <= 0.15
            }
            return e
        }
    });
    c.newsletter = new b.Newsletter()
}(DDG);
! function(c) {
    var b = c.Views.Base;
    c.Views.SubscribeToNewsletterBadge = function(g) {
        this.xPixel = "nlx";
        this.successPixel = "nlms";
        this.clickPixel = "nlc";
        this.views = {};
        b.call(this, g);
        this._cacheElems(".js-badge", ["expand", "link", "form-container"]);
        this.bindEvents([
            [this.$expand, "click", e],
            [".js-badge-link-close", "click", f],
            [".js-badge-link-dismiss", "click", a]
        ])
    };
    c.Views.SubscribeToNewsletterBadge.prototype = $.extend({}, b.prototype, {
        template: "subscribe_to_newsletter_badge",
        showForm: function() {
            this._animate(this.$expand, function() {
                this.$formcontainer.html("");
                this.views.newsletterExpand = new c.Views.NewsletterFormExpand({
                    appendTo: ".js-badge-form-container"
                });
                this.xPixel = "nlmx";
                this.views.newsletterExpand.on("subscribed", this._subscribed.bind(this))
            }.bind(this))
        },
        _subscribed: function() {
            this.$success_template = c.$exec_template("newsletter_form_success");
            this.$formcontainer.html(this.$success_template);
            this.views.newsletterExpand.destroy();
            this.$success = $(".js-badge-success");
            this.$success.css({
                opacity: 0
            }).delay(100).animate({
                opacity: 1
            }, 400);
            this.xPixel = "nlxs";
            c.pixel.fire(this.successPixel, c.newsletter.group, c.page.pageType);
            setTimeout(function() {
                this.$link && this.$link.fadeOut(600)
            }.bind(this), 7000)
        },
        _animate: function(g, h) {
            g.animate({
                opacity: 0
            }, 200, h)
        },
        show: function() {
            this.$el.show()
        },
        hide: function() {
            this.$el.hide()
        },
        click: function(g) {
            e.call(this, g)
        },
        dismiss: function() {
            c.pixel.fire(this.xPixel, c.newsletter.group, c.page.pageType);
            c.settings.set("kaq", "-1");
            c.settings.clear("kap")
        }
    });

    function e(g) {
        c.pixel.fire(this.clickPixel, c.newsletter.group, c.page.pageType);
        this.showForm();
        $("body").off("click.atb")
    }

    function f(g) {
        g.preventDefault();
        g.stopPropagation();
        this.dismiss();
        this.destroy()
    }

    function a(g) {
        g.preventDefault();
        g.stopPropagation();
        this.dismiss();
        this.$el.addClass("reset-height");
        this.$(".js-badge-main-msg").hide();
        if (c.newsletter.showStartMessage) {
            this.$(".js-badge-cookie-msg").show();
            setTimeout(function() {
                this.$el && this.$el.fadeOut(600)
            }.bind(this), 7000)
        } else {
            this.$el.hide()
        }
    }
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.NewUserPoll = function(c) {
        a.call(this, c);
        $(".js-extension-overlay").addClass("atb-extension-overlay--new-user-poll");
        this.newUserPixel = "pollnew";
        this.oldUserPixel = "pollold";
        this.iconClass = "atb-extension-overlay__image--small";
        this.pageView = c.pageView;
        this.prefix = ".js-poll";
        this._cacheElems(this.prefix, ["other-radio-returning", "other-text-returning", "radio-returning", "error-returning", "form-returning", "question-returning", "question-new-user", "question-referral", "welcome-back", "balance-text", "other-radio", "other-text", "button-new", "button-old", "thank-you", "radio", "close", "error", "form"]);
        this.bindEvents([
            [this.$form, "submit", this.submitReferral],
            [this.$formreturning, "submit", this.submitReturning],
            [this.$buttonnew, "click", this._onClickNewUser],
            [this.$buttonold, "click", this._onClickOldUser],
            [this.$othertext, "keyup", this._onKeyupOtherTextReferral],
            [this.$othertextreturning, "keyup", this._onKeyupOtherTextReturning],
            [this.$close, "click", this.pageView.hideExtensionOverlay.bind(this.pageView)]
        ])
    };
    b.Views.NewUserPoll.prototype = $.extend({}, a.prototype, {
        template: "new_user_poll",
        submitReferral: function(f) {
            f.preventDefault();
            this._onKeyupOtherTextReferral();
            var c = {};
            var g = true;
            this.$form.serializeArray().forEach(function(e) {
                if (e.value) {
                    c[e.name] = e.value;
                    g = false
                }
            });
            if (g) {
                this.$error.show();
                return
            }
            c.va = b.opensearch.atbVariant;
            c.l = window.locale;
            b.pixel.fire("pollr", b.device.pixelBrowserName, b.opensearch.version, c);
            this.$thankyou.show();
            this._startRedirectTimeout();
            this.$questionreferral.hide();
            if (this.$icon) {
                this.$icon.removeClass(this.iconClass)
            }
        },
        submitReturning: function(f) {
            f.preventDefault();
            this._onKeyupOtherTextReturning();
            var c = {};
            var g = true;
            this.$formreturning.serializeArray().forEach(function(e) {
                if (e.value) {
                    c[e.name] = e.value;
                    g = false
                }
            });
            if (g) {
                this.$errorreturning.show();
                return
            }
            c.va = b.opensearch.atbVariant;
            c.l = window.locale;
            b.pixel.fire("pollret", b.device.pixelBrowserName, b.opensearch.version, c);
            this.$welcomeback.show();
            this._startRedirectTimeout();
            this.$questionreturning.hide();
            if (this.$icon) {
                this.$icon.removeClass(this.iconClass)
            }
        },
        _onClickNewUser: function() {
            this._onNewOldResponse("yes")
        },
        _onClickOldUser: function() {
            this._onNewOldResponse("no")
        },
        _onNewOldResponse: function(c) {
            var e;
            this.$questionnewuser.hide();
            if (c === "yes") {
                e = this.newUserPixel;
                this.$questionreferral.show();
                this._shuffle(this.$radio)
            } else {
                e = this.oldUserPixel;
                this.$questionreturning.show();
                this._shuffle(this.$radioreturning)
            }
            b.pixel.fire(e, b.device.pixelBrowserName, b.opensearch.version, {
                va: b.opensearch.atbVariant,
                l: window.locale
            });
            this.$icon = $(this.prefix + "-icon");
            this.$icon.addClass(this.iconClass);
            $.balanceText(this.$balancetext)
        },
        _startRedirectTimeout: function() {
            setTimeout(function() {
                window.location.reload()
            }, (10 * 1000))
        },
        _shuffle: function(f) {
            var c;
            for (var e = 0; e < f.length; e++) {
                c = Math.floor(Math.random() * f.length);
                $(f[e]).before($(f[c]))
            }
            return this
        },
        _onKeyupOtherTextReferral: function() {
            var c = this.$otherradio.is(":checked");
            if (!this.$othertext.val() && c) {
                this.$otherradio.prop("checked", false)
            } else {
                if (this.$othertext.val() && !c) {
                    this.$otherradio.prop("checked", true)
                }
            }
        },
        _onKeyupOtherTextReturning: function() {
            var c = this.$otherradioreturning.is(":checked");
            if (!this.$othertextreturning.val() && c) {
                this.$otherradioreturning.prop("checked", false)
            } else {
                if (this.$othertextreturning.val() && !c) {
                    this.$otherradioreturning.prop("checked", true)
                }
            }
        }
    })
}(DDG);
! function(c) {
    var a = c.Views.Base,
        b = c.Views.Dropdowns;
    b.Base = function(e) {
        this._verticalPos = e.verticalPos || "bottom";
        this._horizontalPos = e.horizontalPos || "left";
        a.call(this, e);
        this.$scrollParents = this.$el.parent().add(c.$doc)
    };
    b.Base.prototype = $.extend({}, a.prototype, {
        template: "dropdown",
        destroy: function() {
            this.$scrollParents.off("scroll.modal");
            a.prototype.destroy.call(this)
        },
        open: function() {
            if (!this.modalClass) {
                throw new Error("didn't define modalClass for dropdown")
            }
            if (!this.views.modal) {
                this.views.modal = new b[this.modalClass]($.extend({
                    appendTo: $(".js-site-wrapper"),
                    isPopover: c.device.isMobile
                }, this.modalOps || {}));
                this.views.modal.on("shown", this._onModalShown.bind(this));
                this.views.modal.on("hidden", this._onModalHidden.bind(this));
                this.views.modal.on("item-clicked", this._onItemClick.bind(this))
            }
            this.views.modal && this.views.modal.show();
            if (!c.device.isMobile) {
                this.$scrollParents.on("scroll.modal", this.close.bind(this))
            }
            this._repositionModal()
        },
        close: function() {
            this.views.modal && this.views.modal.hide();
            this.$scrollParents.off("scroll.modal")
        },
        _render: function(e) {
            a.prototype._render.call(this, e);
            this._cacheElems(".js-dropdown", ["button"]);
            this.bindEvents([
                [this.$button, "click", this._onClick],
                [this.$button, "mouseup touchend", this._onMouseUp]
            ])
        },
        _repositionModal: function() {
            if (!this.views.modal) {
                return
            }
            var e = this.$el.offset();
            if (this._horizontalPos === "center") {
                e.left += this.$el.outerWidth() / 2
            } else {
                if (this._horizontalPos === "right") {
                    e.left += this.$el.outerWidth()
                }
            }
            if (this._verticalPos === "bottom") {
                e.top += this.$el.outerHeight()
            }
            this.views.modal.pointAt(e)
        },
        _onModalShown: function() {
            this.$el.addClass("is-open");
            this.emit("opened")
        },
        _onModalHidden: function() {
            this.$el.removeClass("is-open");
            this.emit("closed")
        },
        _onClick: function(f) {
            f.preventDefault();
            if (!this.views.modal || !this.views.modal.isShowing) {
                this.open()
            } else {
                this.close()
            }
            return false
        },
        _onMouseUp: function(f) {
            f.stopPropagation()
        },
        _onItemClick: function(f) {
            this.emit("item-clicked", f)
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Dropdowns,
        a = b.Base;
    b.SelectListDropdown = function(e) {
        this._showSelected = e.showSelected;
        this._module = e.module;
        a.call(this, e);
        this.modalOps = {
            header: e.header,
            key: e.key,
            model: this.model,
            position: this._verticalPos
        }
    };
    b.SelectListDropdown.prototype = $.extend({}, a.prototype, {
        modalClass: "SelectListDropdownModal",
        _render: function(e) {
            a.prototype._render.call(this, $.extend({}, this.model, e));
            this.bindEvents([
                [this.model, "change:disabled", this._onDisabledChange],
                [this.model, "change:selected", this._onSelectedChange]
            ]);
            this._updateShowSelected()
        },
        _updateShowSelected: function() {
            var e = this._module ? "<span>" + l("Use") + " </span>" + this.model.selected.name : this.model.selected.name;
            if (this._showSelected) {
                this.$button.html(e)
            }
        },
        _onDisabledChange: function() {
            if (this.model.disabled) {
                this.$el.hide()
            } else {
                this.$el.show()
            }
        },
        _onSelectedChange: function() {
            this._updateShowSelected()
        }
    })
}(DDG);
! function(e) {
    var c = e.Views.Dropdowns,
        b = e.Views.Modal,
        g = "is-disabled",
        f = "is-selected",
        a = "is-active";
    c.SelectListDropdownModal = function(h) {
        b.call(this, h)
    };
    c.SelectListDropdownModal.prototype = $.extend({}, b.prototype, {
        template: "dropdown_modal",
        hasActiveItem: function() {
            return !!this.$("." + a).length
        },
        _render: function(h) {
            b.prototype._render.call(this, $.extend({}, this.model, h));
            this._cacheElems(".js-dropdown", ["items"]);
            this.bindEvents([
                [this.$items, "mouseenter touchstart", this._onItemMouseEnter],
                [this.$items, "mouseleave", this._onItemMouseLeave],
                [this.$items, "click", this._onItemClick],
                [this.model, "change:disabled", this._onDisabledChange],
                [this.model, "change:selected", this._onSelectedChange],
                [e.device, "resize", this.hide]
            ])
        },
        _setValue: function(i) {
            var h = this.$items.filter("[data-value='" + i + "']");
            this.$("." + f).removeClass(f);
            h.addClass(f);
            this._currentValue = i
        },
        _onItemClick: function(i) {
            i.preventDefault();
            var h = $(i.currentTarget),
                j = h.data("value");
            if (j !== this._currentValue && !h.hasClass(g)) {
                this.model.select(j);
                this._setValue(j);
                this.emit("item-clicked", j)
            }
            this.hide();
            return false
        },
        _onItemMouseEnter: function(h) {
            $(h.currentTarget).addClass(a)
        },
        _onItemMouseLeave: function(h) {
            $(h.currentTarget).removeClass(a)
        },
        _onDisabledChange: function() {
            this.model.values.forEach(function(h) {
                this.$items.find("[data-value='" + h.id + "']").toggleClass(g, h.disabled)
            }.bind(this))
        },
        _onSelectedChange: function() {
            this._setValue(this.model.selected.val)
        }
    })
}(DDG);
(function(a) {
    Handlebars.registerHelper("and", function() {
        var c = Array.prototype.slice.call(arguments),
            b = c.pop();
        for (var e = 0; e < c.length; e++) {
            if (!c[e]) {
                return
            }
        }
        return b.fn(this)
    });
    Handlebars.registerHelper("commifyNumber", function(b) {
        return DDG.commifyNumber(b)
    });
    Handlebars.registerHelper("concat", function(h, f) {
        if (!h) {
            return ""
        }
        var e = f.hash.sep || "",
            j = f.hash.conj || "",
            b = h.length,
            c = "";
        if (b === 1) {
            return f.fn(h[0])
        }
        if (b === 2) {
            return f.fn(h[0]) + j + f.fn(h[1])
        }
        if (b === 3) {
            return f.fn(h[0]) + e + " " + f.fn(h[1]) + j + f.fn(h[2])
        }
        for (var g = 0; g < b; g++) {
            if (g == b - 1) {
                c += e + j
            } else {
                if (g > 0) {
                    c += e + " "
                }
            }
            c += f.fn(h[g])
        }
        return c
    });
    Handlebars.registerHelper("condense", function(e, h) {
        var c = 0,
            g = 0;
        var f = h.hash.truncation || "...";
        if (h.hash.maxlen) {
            c = parseInt(h.hash.maxlen, 10)
        }
        if (h.hash.fuzz) {
            g = parseInt(h.hash.fuzz, 10)
        }
        if (!e) {
            return ""
        }
        if (g > c) {
            g = 0
        }
        if (c && e.length > c) {
            var b;
            if (e.length > c && e.lastIndexOf(".", c) + 1 !== 0) {
                b = e.substr(0, e.lastIndexOf(".", c)) + f
            } else {
                if (e.length > c - g && e.lastIndexOf(" ", c) !== 0) {
                    b = e.substr(0, e.lastIndexOf(" ", c)) + f
                }
            }
            if (!(b.length < (c + g) && b.length > (c - g))) {
                return e.substring(0, c) + f
            }
            return b
        }
        return e
    });
    Handlebars.registerHelper("domain", function(b) {
        var c = new RegExp("^.*?//([^/?:#]+)");
        if (c.test(b)) {
            return RegExp.$1.replace("www.", "")
        }
    });
    Handlebars.registerHelper("domainWithPath", function(b) {
        var c = new RegExp("^.*?//([^?:;#]+)");
        if (c.test(b)) {
            return RegExp.$1.replace("www.", "").replace(/\/$/, "")
        }
    });
    Handlebars.registerHelper("durationFormat", function(c, b) {
        return DDG.formatDuration(c)
    });
    Handlebars.registerHelper("ellipsis", function(k, c, m) {
        if (!k) {
            return ""
        }
        if (DDG.isNumber(k)) {
            k = k + ""
        }
        if (m && m.hash.parseFirst) {
            k = DDG.parse_link(k, "rest")
        }
        if (!$.isNumeric(c)) {
            if (m && m.hash.fallback) {
                c = m.hash.fallback
            }
            if (!$.isNumeric(c)) {
                c = 100
            }
        }
        var n = [],
            g = 0,
            h = k.split(" ");
        for (var e = 0; e < h.length; e++) {
            g += h[e].length + (e < h.length - 1 ? 1 : 0);
            if (g <= c) {
                n.push(h[e])
            }
        }
        if (n.length === 0) {
            return k
        }
        var b = h.length > n.length;
        n = n.join(" ");
        var f = n.split("<b>").length - 1;
        var j = n.split("</b>").length - 1;
        n += f > j ? "</b>" : "";
        if (b && !(n[n.length - 1].match(/\.$/))) {
            return n + "..."
        }
        return n
    });
    Handlebars.registerHelper("favicon", function(g, n) {
        var j = g || this.source_url,
            c = n && n.hash || {},
            f = c.lazyload,
            k = c.className || "zci__more-at__icon",
            m = c.w || "16",
            i = c.h || "16",
            b = DDG.get_favicon_url(j),
            e = '<img width="' + m + '" height="' + i + '" class="' + k;
        if (f) {
            e += ' js-lazyload" data-src="' + b + '" />'
        } else {
            e += '" src="' + b + '" />'
        }
        return e
    });
    Handlebars.registerHelper("firstLetter", function(b) {
        return b.charAt(0).toLowerCase()
    });
    Handlebars.registerHelper("formatSubtitle", function(b) {
        if (!b) {
            return "&nbsp;"
        }
        b = $.isArray(b) ? b : [b];
        return DDG.exec_template("subtitle", {
            components: b
        })
    });
    Handlebars.registerHelper("formatTitle", function(f, b) {
        var c = b.hash;
        if (c.parseFirst) {
            f = DDG.parse_link(f, "text")
        }
        var e = DDG.parseAbstract(f),
            g = e.main;
        if (c.ellipsis) {
            g = Handlebars.helpers.ellipsis(e.main, c.ellipsis)
        }
        return DDG.exec_template("title", {
            tagName: c.el || "span",
            className: c.className || "title",
            classNameSec: c.classNameSec,
            subTitle: !c.noSub && e.subTitle,
            optSub: c.optSub,
            title: g,
            href: (c.href && this[c.href]) || c.href,
            hrefTitle: e.main && !e.main.match(/<b>/) ? e.main : null
        })
    });
    Handlebars.registerHelper("imageProxy", function(b) {
        return DDG.getImageProxyURL(b)
    });
    Handlebars.registerHelper("include", function(h, c) {
        var f = c && c.hash || {},
            g = f.wrap,
            e = $.extend(this, f),
            b = "";
        b = DDG.exec_template(h, e);
        if (b && g) {
            return Spice.exec_template(g, {
                content: b
            })
        }
        return b
    });
    Handlebars.registerHelper("keys", function(f, e) {
        var c = "";
        for (var b in f) {
            c += e.fn($.extend({}, this, {
                key: b,
                value: f[b]
            }))
        }
        return c
    });
    Handlebars.registerHelper("l", function() {
        return l.apply(window, arguments)
    });
    Handlebars.registerHelper("lp", function() {
        return lp.apply(window, arguments)
    });
    Handlebars.registerHelper("loop", function(c, g) {
        var b, f;
        c = Math.min(c, 100);
        if (g.data) {
            f = Handlebars.createFrame(g.data)
        }
        b = "";
        for (var e = 0; e < c; e++) {
            if (f) {
                f.index = e;
                f.max = c
            }
            b += g.fn(this, {
                data: f
            })
        }
        return b
    });
    Handlebars.registerHelper("lyricsAbstract", function(b) {
        return b.split(/<(?:<b>)?break(?:<\/b>)?>/).join("<br />")
    });
    Handlebars.registerHelper("lyricsTitle", function(g, c) {
        var h = /^(.*?):\slyrics:\s(?:(.*?):\s(.*?)$|(.*?)$)/,
            b = h.exec(g),
            f = b[1],
            e = b[4] || b[3] + " (" + b[2] + ")";
        return DDG.exec_template("title", {
            tagName: "h1",
            className: "c-info__title",
            title: f,
            subTitle: e,
            href: c
        })
    });
    Handlebars.registerHelper("makeRelative", function(b) {
        if (/^https?:\/\/(?:[^\.]+\.|)duckduckgo.com\/?(.*)$/.test(b)) {
            return RegExp.$1
        } else {
            return b
        }
    });
    Handlebars.registerHelper("momentDate", function(g, c) {
        if (!moment) {
            return ""
        }
        var e = c && c.hash || {},
            b = moment.utc(g, "YYYY-MM-DD HH:mm:ss"),
            f = e.format || "ddd MMM D";
        return b.local().format(f)
    });
    Handlebars.registerHelper("momentTime", function(c) {
        if (!moment) {
            return ""
        }
        var b = moment.utc(c, "YYYY-MM-DD HH:mm:ss");
        return b.local().format("LT")
    });
    Handlebars.registerHelper("moreAt", function(g, e, c) {
        var f = c && c.hash || {};
        g = g || {};
        if (typeof g === "string") {
            if (!e) {
                return
            }
            g = {
                sourceUrl: g,
                sourceName: e,
                sourceIcon: true
            }
        } else {
            if (g.repo === "fathead") {
                if (!e) {
                    return
                }
                g.sourceUrl = e;
                g.sourceName = g.src_name;
                g.sourceIcon = true
            } else {
                if (g.repo === "longtail") {
                    if (!e) {
                        return
                    }
                    if (e === "none") {
                        return
                    }
                    g.sourceName = g.name;
                    g.sourceUrl = e;
                    g.sourceIcon = true
                } else {
                    if (!g.sourceIconUrl && g.sourceUrl && !g.sourceLogo && g.sourceIcon !== false) {
                        g.sourceIcon = true
                    }
                }
            }
        }
        if (!g.sourceUrl) {
            return
        }
        g.className = "zci__more-at";
        g.iconClassName = "zci__more-at__icon";
        var b = g.moreAtText = (DDG.templates.more_at_text(g) || "").trim();
        if (f.noIcon) {
            g.sourceIcon = false
        }
        if (f.className) {
            g.className = f.className
        }
        if (f.iconClassName) {
            g.iconClassName = f.iconClassName
        }
        if (f.iconUrl) {
            g.sourceIconUrl = f.iconUrl;
            g.sourceIcon = false
        }
        if (f.iconPlaceholder) {
            g.sourceIconUrl = "/assets/icon_favicon_placeholder.v104.png";
            g.sourceIcon = false
        }
        if (!g.hideMoreAtText && !f.hideMoreAtText && !f.dynamicMoreAtText && !(DDG.device.isMobile && f.sourceOnlyMobile)) {
            g.moreAtText = l("More at %s ", b)
        }
        if (f.dynamicMoreAtText) {
            g.moreAtText = (g.moreAtText.length < f.dynamicMoreAtText) ? l("More at %s ", b) : g.moreAtText
        }
        return DDG.templates.more_at(g)
    });
    Handlebars.registerHelper("numFormat", function(e, c) {
        if (!e) {
            return ""
        }
        var b = ",",
            f = e.toString();
        if (c && c.hash && c.hash.delimiter) {
            b = c.hash.delimiter
        }
        return f.replace(/\b(\d+)((\.\d+)*)\b/g, function(h, g, i) {
            return (g.charAt(0) > 0 && !(i || ".").lastIndexOf(".") ? g.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : g) + i
        })
    });
    Handlebars.registerHelper("ordinal", function(b) {
        return DDG.getOrdinal(b)
    });
    Handlebars.registerHelper("plural", function(b, c) {
        var e = DDG.pluralize(b, c.hash.singular, c.hash.plural);
        if (!e) {
            return
        }
        if (c.hash.delimiter) {
            b = Handlebars.helpers.numFormat(b, c)
        }
        return b + " " + e
    });
    Handlebars.registerHelper("priceSymbols", function(c, f) {
        var e = "",
            b = 0;
        for (b = 0; b < f; b++) {
            if (b < c) {
                e += "<b>$</b>"
            } else {
                e += "$"
            }
        }
        return e
    });
    Handlebars.registerHelper("renderStars", function(b) {
        if (typeof b === "string") {
            b = {
                rating: b
            }
        }
        return DDG.templates.stars(b)
    });
    Handlebars.registerHelper("retinaImage", function(c) {
        var b = c.split(".");
        b[b.length - 2] += DDG.device.is3x ? "@3x" : DDG.device.is2x ? "@2x" : "";
        return b.join(".")
    });
    Handlebars.registerHelper("reviewCount", function(h, e, j, b) {
        if (!h || h === "") {
            h = 0
        }
        var g, i = '<span class="review-count">',
            f = "</span>",
            c = h;
        if (b && b === true) {
            c = DDG.abbrevNumber(h)
        } else {
            c = DDG.commifyNumber(h)
        }
        if (j === true) {
            if (!h) {
                return ""
            }
            g = i + c + f
        } else {
            g = ln("%2$s %1$s %3$s review", "%2$s %1$s %3$s reviews", c, i, f)
        }
        if (e) {
            g = '<a href="' + e + '">' + g + "</a>"
        }
        return g
    });
    Handlebars.registerHelper("starRating", function(c) {
        c = $.isNumeric(c) ? c : 0;
        var b = c.toString();
        if (b.match(/(\d)\.(\d)/)) {
            var e = parseInt(RegExp.$1, 10);
            var f = parseInt(RegExp.$2, 10) > 4 ? 5 : 0;
            if (e > 5) {
                e = 5
            }
            c = e;
            if (f && e < 5) {
                c += "-" + f
            }
        } else {
            c = Math.floor(c)
        }
        return Handlebars.helpers.renderStars({
            rating: c
        })
    });
    Handlebars.registerHelper("starsAndReviews", function(c, e, b, f) {
        return Handlebars.helpers.starRating(c) + Handlebars.helpers.reviewCount(e, b, f, true)
    });
    Handlebars.registerHelper("stripHTML", function(c, b) {
        return b.fn(DDG.strip_html(c))
    });
    Handlebars.registerHelper("table-each", function(f, c) {
        if (!f) {
            return ""
        }
        var b = "";
        if (f.record_keys) {
            var h = f.record_keys;
            for (var e in h) {
                if (f.record_data[h[e]]) {
                    b += c.fn({
                        key: h[e],
                        value: f.record_data[h[e]]
                    })
                }
            }
        } else {
            for (var g in f.record_data) {
                b += c.fn({
                    key: g,
                    value: f.record_data[g]
                })
            }
        }
        return b
    });
    Handlebars.registerHelper("toHTTP", function(b) {
        return DDG.toHTTP(b)
    });
    Handlebars.registerHelper("toHTTPS", function(b) {
        return DDG.toHTTPS(b)
    });
    Handlebars.registerHelper("trim", function(b) {
        if (b) {
            return b.trim()
        }
    });
    Handlebars.registerHelper("stripNonAlpha", function(b) {
        if (b) {
            return DDG.strip_non_alpha(b.toLowerCase())
        }
    });
    Handlebars.registerHelper("loader", function(f) {
        var b = typeof f === "string" && f,
            i = DDG.is3x ? "x3" : DDG.is2x ? "x2" : "x1";
        if (!b) {
            var g = DDG.settings.get("k7"),
                c = tinycolor(g),
                e = c.isValid() && c.toHsl().l < 0.5;
            b = e ? "white" : "black"
        }
        var h = "/assets/loader/" + b + i + ".png";
        return '<div class="loader" style="background-image:url(\'' + h + "');\"></div>"
    })
})(this);
this["DDG"] = this["DDG"] || {};
this["DDG"]["templates"] = this["DDG"]["templates"] || {};
this["DDG"]["templates"]["add_to_browser_badge"] = Handlebars.template(function(e, r, p, i, u) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    u = u || {};
    var q = "",
        g, a, c = "function",
        b = this.escapeExpression,
        n = this,
        o = p.helperMissing;

    function m(A, z) {
        var v = "",
            x, y;
        v += '<a class="badge-link ddg-extension-hide js-badge-link" href="';
        if (y = p.url) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.url);
            x = typeof y === c ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        v += b(x) + '" ';
        x = p["if"].call(A, (A && A.openInNewTab), {
            hash: {},
            inverse: n.noop,
            fn: n.program(2, k, z),
            data: z
        });
        if (x || x === 0) {
            v += x
        }
        v += ">";
        return v
    }

    function k(x, v) {
        return 'target="_blank"'
    }

    function j(x, v) {
        return '<div class="badge-link ddg-extension-hide js-badge-link">'
    }

    function h(A, z) {
        var x, y, v;
        x = (y = p.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "Set DuckDuckGo as your %sdefault search engine", "", v) : o.call(A, "l", "Set DuckDuckGo as your %sdefault search engine", "", v));
        if (x || x === 0) {
            return x
        } else {
            return ""
        }
    }

    function f(A, z) {
        var x, y, v;
        x = (y = p.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "Set DuckDuckGo as your %sdefault search engine", "<br/>", v) : o.call(A, "l", "Set DuckDuckGo as your %sdefault search engine", "<br/>", v));
        if (x || x === 0) {
            return x
        } else {
            return ""
        }
    }

    function t(x, v) {
        return "</a>"
    }

    function s(x, v) {
        return "</div>"
    }
    g = p["if"].call(r, (r && r.url), {
        hash: {},
        inverse: n.program(4, j, u),
        fn: n.program(1, m, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += '<i class="badge-link__icon browser--';
    if (a = p.browserId) {
        g = a.call(r, {
            hash: {},
            data: u
        })
    } else {
        a = (r && r.browserId);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: u
        }) : a
    }
    q += b(g) + '"></i><span class="badge-link__text">';
    g = p["if"].call(r, (r && r.noBreak), {
        hash: {},
        inverse: n.program(8, f, u),
        fn: n.program(6, h, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += '</span><span class="ddgsi badge-link__close js-badge-link-close">&times;</span>';
    g = p["if"].call(r, (r && r.url), {
        hash: {},
        inverse: n.program(12, s, u),
        fn: n.program(10, t, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    return q
});
this["DDG"]["templates"]["add_to_browser_badge_android"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<div class="js-atb-banner atb-banner--inline"><div class="js-badge-link btn btn--primary atb-banner__btn atb-banner__btn--install">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Add to Home Screen", k) : i.call(j, "l", "Add to Home Screen", k));
    if (a || a === 0) {
        f += a
    }
    f += '</div><div class="js-atb-banner-learnmore btn btn--primary atb-banner__learn-more">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Learn %sMore%s", "", "", k) : i.call(j, "l", "Learn %sMore%s", "", "", k));
    if (a || a === 0) {
        f += a
    }
    f += "</div></div>";
    return f
});
this["DDG"]["templates"]["add_to_browser_badge_button"] = Handlebars.template(function(f, s, q, j, t) {
    this.compilerInfo = [4, ">= 1.0.0"];
    q = this.merge(q, f.helpers);
    t = t || {};
    var r = "",
        g, a, c = "function",
        b = this.escapeExpression,
        o = this,
        p = q.helperMissing;

    function n(z, y) {
        var u = "",
            v, x;
        u += 'href="';
        if (x = q.url) {
            v = x.call(z, {
                hash: {},
                data: y
            })
        } else {
            x = (z && z.url);
            v = typeof x === c ? x.call(z, {
                hash: {},
                data: y
            }) : x
        }
        u += b(v) + '" ';
        v = q["if"].call(z, (z && z.openInNewTab), {
            hash: {},
            inverse: o.noop,
            fn: o.program(2, m, y),
            data: y
        });
        if (v || v === 0) {
            u += v
        }
        return u
    }

    function m(v, u) {
        return 'target="_blank"'
    }

    function k(z, y) {
        var v, x, u;
        v = (x = q.l || (z && z.l), u = {
            hash: {},
            data: y
        }, x ? x.call(z, "Add to Home Screen", u) : p.call(z, "l", "Add to Home Screen", u));
        if (v || v === 0) {
            return v
        } else {
            return ""
        }
    }

    function i(x, v) {
        var u;
        u = q["if"].call(x, (x && x.isEnglish), {
            hash: {},
            inverse: o.program(9, e, v),
            fn: o.program(7, h, v),
            data: v
        });
        if (u || u === 0) {
            return u
        } else {
            return ""
        }
    }

    function h(z, y) {
        var v, x, u;
        v = (x = q.l || (z && z.l), u = {
            hash: {},
            data: y
        }, x ? x.call(z, "Add DuckDuckGo to %s", (z && z.displayBrowserName), u) : p.call(z, "l", "Add DuckDuckGo to %s", (z && z.displayBrowserName), u));
        if (v || v === 0) {
            return v
        } else {
            return ""
        }
    }

    function e(z, y) {
        var v, x, u;
        v = (x = q.lp || (z && z.lp), u = {
            hash: {},
            data: y
        }, x ? x.call(z, "homepage onboarding", "Install DuckDuckGo", u) : p.call(z, "lp", "homepage onboarding", "Install DuckDuckGo", u));
        if (v || v === 0) {
            return v
        } else {
            return ""
        }
    }
    r += '<a class="btn ';
    if (a = q.buttonClass) {
        g = a.call(s, {
            hash: {},
            data: t
        })
    } else {
        a = (s && s.buttonClass);
        g = typeof a === c ? a.call(s, {
            hash: {},
            data: t
        }) : a
    }
    r += b(g) + ' ddg-extension-hide"';
    g = q["if"].call(s, (s && s.url), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, n, t),
        data: t
    });
    if (g || g === 0) {
        r += g
    }
    r += ">";
    g = q["if"].call(s, (s && s.androidChromeNoOpenSearch), {
        hash: {},
        inverse: o.program(6, i, t),
        fn: o.program(4, k, t),
        data: t
    });
    if (g || g === 0) {
        r += g
    }
    r += "</a>";
    return r
});
this["DDG"]["templates"]["add_to_browser_badge_top"] = Handlebars.template(function(f, t, r, m, B) {
    this.compilerInfo = [4, ">= 1.0.0"];
    r = this.merge(r, f.helpers);
    B = B || {};
    var s = "",
        i, a, e, c = "function",
        b = this.escapeExpression,
        p = this,
        q = r.helperMissing;

    function o(D, C) {
        return "serp"
    }

    function n(D, C) {
        return "top"
    }

    function k(D, C) {
        return "badge-link--fadein"
    }

    function j(G, F) {
        var C = "",
            D, E;
        C += '<a class="badge-link__wrap js-badge-main-msg" href="';
        if (E = r.url) {
            D = E.call(G, {
                hash: {},
                data: F
            })
        } else {
            E = (G && G.url);
            D = typeof E === c ? E.call(G, {
                hash: {},
                data: F
            }) : E
        }
        C += b(D) + '" ';
        D = r["if"].call(G, (G && G.openInNewTab), {
            hash: {},
            inverse: p.noop,
            fn: p.program(8, h, F),
            data: F
        });
        if (D || D === 0) {
            C += D
        }
        C += ">";
        return C
    }

    function h(D, C) {
        return 'target="_blank"'
    }

    function A(D, C) {
        return '<div class="badge-link__wrap js-badge-main-msg">'
    }

    function z(G, F) {
        var D, E, C;
        D = (E = r.l || (G && G.l), C = {
            hash: {},
            data: F
        }, E ? E.call(G, "Take back your privacy!", C) : q.call(G, "l", "Take back your privacy!", C));
        if (D || D === 0) {
            return D
        } else {
            return ""
        }
    }

    function y(E, D) {
        var C;
        C = r["if"].call(E, (E && E.isEnglish), {
            hash: {},
            inverse: p.program(17, v, D),
            fn: p.program(15, x, D),
            data: D
        });
        if (C || C === 0) {
            return C
        } else {
            return ""
        }
    }

    function x(G, F) {
        var D, E, C;
        D = (E = r.l || (G && G.l), C = {
            hash: {},
            data: F
        }, E ? E.call(G, "Add DuckDuckGo to %s", (G && G.displayBrowserName), C) : q.call(G, "l", "Add DuckDuckGo to %s", (G && G.displayBrowserName), C));
        if (D || D === 0) {
            return D
        } else {
            return ""
        }
    }

    function v(G, F) {
        var D, E, C;
        D = (E = r.l || (G && G.l), C = {
            hash: {},
            data: F
        }, E ? E.call(G, "Install", C) : q.call(G, "l", "Install", C));
        if (D || D === 0) {
            return D
        } else {
            return ""
        }
    }

    function u(D, C) {
        return "</a>"
    }

    function g(D, C) {
        return "</div>"
    }
    s += '<div class="badge-link badge-link--';
    i = r["if"].call(t, (t && t.serp), {
        hash: {},
        inverse: p.program(3, n, B),
        fn: p.program(1, o, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    s += " ";
    i = r["if"].call(t, (t && t.fadeIn), {
        hash: {},
        inverse: p.noop,
        fn: p.program(5, k, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    s += ' ddg-extension-hide js-badge-link ">';
    i = r["if"].call(t, (t && t.url), {
        hash: {},
        inverse: p.program(10, A, B),
        fn: p.program(7, j, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    s += '<div class="badge-link--thumbnail__thumbnail-wrapper"><img class="badge-link--thumbnail__thumbnail" src="assets/onboarding/sofa-woman.svg"></div><p class="badge-link__title js-badge-link__title">';
    i = (a = r.lp || (t && t.lp), e = {
        hash: {},
        data: B
    }, a ? a.call(t, "homepage ATB modal", "Your data shouldn’t be for sale.", e) : q.call(t, "lp", "homepage ATB modal", "Your data shouldn’t be for sale.", e));
    if (i || i === 0) {
        s += i
    }
    s += "<br>";
    i = (a = r.lp || (t && t.lp), e = {
        hash: {},
        data: B
    }, a ? a.call(t, "homepage ATB modal", "At DuckDuckGo, we agree.", e) : q.call(t, "lp", "homepage ATB modal", "At DuckDuckGo, we agree.", e));
    if (i || i === 0) {
        s += i
    }
    s += '</p><ol class="badge-link__bullets"><li class="badge-link__bullet"><span class="badge-link__bullet-num">1</span>';
    i = (a = r.lp || (t && t.lp), e = {
        hash: {},
        data: B
    }, a ? a.call(t, "reasons-to-use-duckduckgo", "Block advertising trackers.", e) : q.call(t, "lp", "reasons-to-use-duckduckgo", "Block advertising trackers.", e));
    if (i || i === 0) {
        s += i
    }
    s += '</li><li class="badge-link__bullet"><span class="badge-link__bullet-num">2</span>';
    i = (a = r.lp || (t && t.lp), e = {
        hash: {},
        data: B
    }, a ? a.call(t, "reasons-to-use-duckduckgo", "Keep your search history private.", e) : q.call(t, "lp", "reasons-to-use-duckduckgo", "Keep your search history private.", e));
    if (i || i === 0) {
        s += i
    }
    s += '</li><li class="badge-link__bullet"><span class="badge-link__bullet-num">3</span>';
    i = (a = r.lp || (t && t.lp), e = {
        hash: {},
        data: B
    }, a ? a.call(t, "reasons-to-use-duckduckgo", "Take control of your personal data.", e) : q.call(t, "lp", "reasons-to-use-duckduckgo", "Take control of your personal data.", e));
    if (i || i === 0) {
        s += i
    }
    s += '</li></ol><div class="badge-link__btn-group"><span class="badge-link__btn btn btn--primary js-badge-link-button">';
    i = r["if"].call(t, ((i = (t && t.onboardingTest)), i == null || i === false ? i : i.showNewButton), {
        hash: {},
        inverse: p.program(14, y, B),
        fn: p.program(12, z, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    s += '</span></div><span class="ddgsi badge-link__close js-badge-link-dismiss">&times;</span>';
    i = r["if"].call(t, (t && t.url), {
        hash: {},
        inverse: p.program(21, g, B),
        fn: p.program(19, u, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    s += '<div class="badge-link__wrap badge-link__wrap--hidden js-badge-cookie-msg"><div class="badge-link__cookie-msg"><p>';
    i = (a = r.l || (t && t.l), e = {
        hash: {},
        data: B
    }, a ? a.call(t, "Clear your cookies often?", e) : q.call(t, "l", "Clear your cookies often?", e));
    if (i || i === 0) {
        s += i
    }
    s += "</p><p>";
    i = (a = r.l || (t && t.l), e = {
        hash: {},
        data: B
    }, a ? a.call(t, "Try our homepage that never shows these messages:", e) : q.call(t, "l", "Try our homepage that never shows these messages:", e));
    if (i || i === 0) {
        s += i
    }
    s += '</p><p><b><a href="https://start.duckduckgo.com">start.duckduckgo.com</a></b></p></div><span class="ddgsi badge-link__close js-badge-link-close">&times;</span></div></div>';
    return s
});
this["DDG"]["templates"]["add_to_browser_banner"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<div class="atb-banner"><div class="atb-banner__bottom js-atb-banner-mainmsg"><span class="ddgsi atb-banner__close js-atb-banner-dismiss">×</span><img class="atb-banner__thumbnail atb-banner__thumbnail--round" src="assets/onboarding/bathroomguy/thumbnails/new-alpinist@2x.png" height="65"><div class="atb-banner__content"><div class="atb-banner__title">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Take Back Your Privacy!", k) : i.call(j, "l", "Take Back Your Privacy!", k));
    if (a || a === 0) {
        f += a
    }
    f += '</div><div class="atb-banner__copy">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Switch to the search engine that doesn't track you. Ever.", k) : i.call(j, "l", "Switch to the search engine that doesn't track you. Ever.", k));
    if (a || a === 0) {
        f += a
    }
    f += '</div></div><div class="js-atb-banner-link atb-banner__btn atb-banner__btn--exp btn btn--primary">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Add DuckDuckGo to %s", (j && j.displayBrowserName), k) : i.call(j, "l", "Add DuckDuckGo to %s", (j && j.displayBrowserName), k));
    if (a || a === 0) {
        f += a
    }
    f += '</div><div class="js-atb-banner-learnmore atb-banner__link">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Learn %sMore%s", "", "", k) : i.call(j, "l", "Learn %sMore%s", "", "", k));
    if (a || a === 0) {
        f += a
    }
    f += '</div></div><div class="atb-banner__bottom atb-banner--hidden js-atb-banner-cookiemsg"><span class="ddgsi atb-banner__close js-atb-banner-close">×</span><div class="atb-banner__start"><div class="atb-banner__title">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Clear your cookies often?", k) : i.call(j, "l", "Clear your cookies often?", k));
    if (a || a === 0) {
        f += a
    }
    f += '</div><div class="atb-banner__copy">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Try our homepage that never shows these messages:", k) : i.call(j, "l", "Try our homepage that never shows these messages:", k));
    if (a || a === 0) {
        f += a
    }
    f += '<span class="js-atb-banner-start atb-banner__link">start.duckduckgo.com</span></div></div></div></div>';
    return f
});
this["DDG"]["templates"]["add_to_browser_button"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<div class="js-atb-banner atb-banner--inline"><div class="js-atb-banner-link btn btn--primary atb-banner__btn atb-banner__btn--install">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Add to %s", (j && j.displayBrowserName), k) : i.call(j, "l", "Add to %s", (j && j.displayBrowserName), k));
    if (a || a === 0) {
        f += a
    }
    f += '</div><div class="js-atb-banner-learnmore btn btn--primary atb-banner__learn-more">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Learn %sMore%s", "", "", k) : i.call(j, "l", "Learn %sMore%s", "", "", k));
    if (a || a === 0) {
        f += a
    }
    f += "</div></div>";
    return f
});
this["DDG"]["templates"]["add_to_browser_button_serp"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<div class="js-atb-banner btn atb-banner__btn--standalone">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Add DuckDuckGo to %s", (j && j.displayBrowserName), k) : i.call(j, "l", "Add DuckDuckGo to %s", (j && j.displayBrowserName), k));
    if (a || a === 0) {
        f += a
    }
    f += ' <span class="ddgsi ddgsi-close-bold js-atb-banner-close"></span></div>';
    return f
});
this["DDG"]["templates"]["add_to_browser_extension_overlay"] = Handlebars.template(function(f, s, q, j, t) {
    this.compilerInfo = [4, ">= 1.0.0"];
    q = this.merge(q, f.helpers);
    t = t || {};
    var r = "",
        h, a, e, p = q.helperMissing,
        o = this,
        c = "function",
        b = this.escapeExpression;

    function n(z, y) {
        var v, x, u;
        v = (x = q.include || (z && z.include), u = {
            hash: {},
            data: y
        }, x ? x.call(z, (z && z.subTemplate), u) : p.call(z, "include", (z && z.subTemplate), u));
        if (v || v === 0) {
            return v
        } else {
            return ""
        }
    }

    function m(x, v) {
        var u;
        u = q["if"].call(x, ((u = (x && x.onBoardingTest)), u == null || u === false ? u : u.showNewUserPoll), {
            hash: {},
            inverse: o.program(6, i, v),
            fn: o.program(4, k, v),
            data: v
        });
        if (u || u === 0) {
            return u
        } else {
            return ""
        }
    }

    function k(x, v) {
        var u = "";
        return u
    }

    function i(A, z) {
        var u = "",
            x, y, v;
        u += '<h1 class="atb-extension-overlay__headline">';
        x = (y = q.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "Congratulations!", v) : p.call(A, "l", "Congratulations!", v));
        if (x || x === 0) {
            u += x
        }
        u += '</h1><p class="atb-extension-overlay__text text--secondary tx--17">';
        x = (y = q.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "You're now searching with privacy!", v) : p.call(A, "l", "You're now searching with privacy!", v));
        if (x || x === 0) {
            u += x
        }
        u += '</p><a class="atb-extension-overlay__search-btn btn btn--primary tx--15 js-extension-overlay-search" data-search-link="start-button" href="https://duckduckgo.com">';
        x = (y = q.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "Start searching!", v) : p.call(A, "l", "Start searching!", v));
        if (x || x === 0) {
            u += x
        }
        u += "</a>";
        return u
    }

    function g(A, z) {
        var u = "",
            x, y, v;
        u += '<div class="js-extension-overlay--mobile-promotion"><h1 class="atb-extension-overlay__headline js-balance-text">';
        x = (y = q.lp || (A && A.lp), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "mobile promotion on desktop", "Also search privately on your iPad, iPhone, or Android!", v) : p.call(A, "lp", "mobile promotion on desktop", "Also search privately on your iPad, iPhone, or Android!", v));
        if (x || x === 0) {
            u += x
        }
        u += '</h1><p class="atb-extension-overlay__text text--secondary tx--17 js-balance-text">';
        x = (y = q.lp || (A && A.lp), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "mobile promotion on desktop", "Visit %sDuckDuckGo.com%s on your tablet or phone and follow the provided instructions.", "<b>", "</b>", v) : p.call(A, "lp", "mobile promotion on desktop", "Visit %sDuckDuckGo.com%s on your tablet or phone and follow the provided instructions.", "<b>", "</b>", v));
        if (x || x === 0) {
            u += x
        }
        u += '</p><div class="atb-extension-overlay__mobile-image"></div><a class="atb-extension-overlay__search-btn tx--15 js-extension-overlay-show-email btn btn--primary">';
        x = (y = q.lp || (A && A.lp), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "mobile promotion on desktop", "OK, got it!", v) : p.call(A, "lp", "mobile promotion on desktop", "OK, got it!", v));
        if (x || x === 0) {
            u += x
        }
        u += '</a></div><div class="js-extension-overlay-newsletter-form atb-extension-overlay__newsletter-form"><h1 class="atb-extension-overlay__headline">';
        x = (y = q.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "Congratulations!", v) : p.call(A, "l", "Congratulations!", v));
        if (x || x === 0) {
            u += x
        }
        u += '</h1><p class="atb-extension-overlay__text text--secondary tx--17">';
        x = (y = q.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "You're now searching with privacy. %sGet tips to reduce your footprint even more.", "<br/>", v) : p.call(A, "l", "You're now searching with privacy. %sGet tips to reduce your footprint even more.", "<br/>", v));
        if (x || x === 0) {
            u += x
        }
        u += '</p><form class="frm--newsletter frm--newsletter--dialog js-extension-overlay-submit tx--15" method="post" name="y"><input type="email" placeholder="';
        x = (y = q.lp || (A && A.lp), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "email newsletter", "Enter your email address.", v) : p.call(A, "lp", "email newsletter", "Enter your email address.", v));
        if (x || x === 0) {
            u += x
        }
        u += '" class="frm__input frm--newsletter--dialog--email" name="email" required><input type="submit" value="';
        x = (y = q.lp || (A && A.lp), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "email newsletter", "Subscribe", v) : p.call(A, "lp", "email newsletter", "Subscribe", v));
        if (x || x === 0) {
            u += x
        }
        u += '" class="frm__btn  btn  btn--primary frm--newsletter--dialog--submit"><input type="hidden" name="campaign" value="a"></form><p class="atb-extension-overlay__disclaimer text--secondary tx--15">';
        x = (y = q.lp || (A && A.lp), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "newsletter email collection", "Your email address will not be shared, %sor associated with anonymous searches. [%sExample message%s]", "<br/>", '<a href="https://spreadprivacy.com/google-search-history-4bae7619407d" class="atb-extension-overlay__disclaimer__link" target="_blank">', "</a>", v) : p.call(A, "lp", "newsletter email collection", "Your email address will not be shared, %sor associated with anonymous searches. [%sExample message%s]", "<br/>", '<a href="https://spreadprivacy.com/google-search-history-4bae7619407d" class="atb-extension-overlay__disclaimer__link" target="_blank">', "</a>", v));
        if (x || x === 0) {
            u += x
        }
        u += '</p><p class="atb-extension-overlay__nope js-extension-overlay-close tx--15">';
        x = (y = q.lp || (A && A.lp), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "new user poll", "No thanks.", v) : p.call(A, "lp", "new user poll", "No thanks.", v));
        if (x || x === 0) {
            u += x
        }
        u += "</p></div>";
        return u
    }
    r += '<div id="atb-extension-overlay" class="atb-extension-overlay atb-extension-overlay--';
    if (a = q.browserName) {
        h = a.call(s, {
            hash: {},
            data: t
        })
    } else {
        a = (s && s.browserName);
        h = typeof a === c ? a.call(s, {
            hash: {},
            data: t
        }) : a
    }
    r += b(h) + ' js-extension-overlay atb-extension-overlay--promote-mobile"><div class="atb-extension-overlay__nav js-extension-overlay-nav"><a class="atb-extension-overlay__nav-text tx--15 js-extension-overlay-search" data-search-link="header" href="https://duckduckgo.com"><span class="ddgsi ddgsi-loupe"></span> ';
    h = (a = q.l || (s && s.l), e = {
        hash: {},
        data: t
    }, a ? a.call(s, "Search", e) : p.call(s, "l", "Search", e));
    if (h || h === 0) {
        r += h
    }
    r += '</a><span class="ddgsi ddgsi-close-bold pull-right text--secondary js-extension-overlay-close tx--15"></span></div><div class="atb-extension-overlay__content  js-extension-overlay-content  ddg-extension-hide">';
    h = q["if"].call(s, (s && s.subTemplate), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, n, t),
        data: t
    });
    if (h || h === 0) {
        r += h
    }
    r += '</div><div id="atb-extension-overlay__success" class="atb-extension-overlay__success"><div class="js-poll-icon"><svg class="atb-extension-overlay__image" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="120px" height="120px" viewBox="0 0 140 140" style="enable-background:new 0 0 140 140;" xml:space="preserve"><defs><circle id="SVGID_1_" cx="70" cy="70" r="70"/></defs><use xlink:href="#SVGID_1_" style="overflow:visible;fill:#9ED8F7;"/><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" style="overflow:visible;"/></clipPath><g id="Summit" style="clip-path:url(#SVGID_2_);"><g><g><g><defs><path id="SVGID_3_" d="M166.8,166.4L166.8,166.4c0.3,0.2,0.4,0.5,0.3,0.8c-0.1,0.2-0.3,0.3-0.6,0.3l-179.8,0.2l22.8-16.5 c0.9-0.7,1.8-1.6,2.3-2.6c0.6-1.1,1.6-2.5,2.8-3.4c2.2-1.5,5.4-1.5,5.4-1.5s-3.3,0.9,0.1,0c3.4-0.9,9.1-4.3,9.1-4.3 s0.5-1.8,2.2-3.5c1.7-1.7,5.3-3.1,5.3-3.1l0.2-0.1l5.6-3.2c0,0-3,1.9,0.1-0.1c3.1-2,5.8-7.5,8.4-7.9c2.6-0.4,11,1.7,11,1.7 s1.8-1.4,3.6-1.6c1.9-0.2,1.8,1,1.8,1l1.2,0.7c0,0-7.7-1,0,0s10.2,5,13,6.5c2.9,1.4,5-0.5,7,0.3c1.2,0.5,2.1,1.4,2.6,2.6 c0.1,0.1,0.7,1.8,0.7,1.8c4.2,4.8,14.5,5.3,14,4.8h0.1l7.1,0.6c0,0-3.2,1,0.1,0c3.3-1,8,0.1,9.3,0.7c1.3,0.5,1.9,2.3,1.9,2.3 s-1.3-1.5,0.2,0.2c1.4,1.7,12.5,7,12.5,7c2.7,1.3,3.6,5.1,3.6,5.1L166.8,166.4z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_4_);"><rect x="-23" y="112.3" style="fill:#FFFFFF;" width="195.7" height="60.5"/><path style="fill:#C4E0FF;" d="M157.9,141.7L97,123.4l-7.5,2.9c-1.4-1.7-3.7-3.3-7.2-4.2c-2.8-0.8-16.9,0-19.6,1.6 c-6.4,4.1-4.5,3.7-6.3,5.2c-4.2,3.3-7.6-1.3-10.6,3c-2.1,3.1,1.6,3.2,4.9,4.2c3.3,1,2.7,4.9,5.7,4.6c3.9-0.3,8.6,3.5,12.8,2.2 c2.6-0.8,10,0.3,10.4,3.6c0.8,7.6,27.1,10.9,27.1,10.9l22.9,12.4l40.2-1.2L157.9,141.7z"/><path style="fill:#C4E0FF;" d="M48.7,140c-1.9,0.8-1.1,2.9-3.6,2.9s-4.4,3.4-0.5,3.4s9.6,0.3,8.3-2s-1.8-1.8-2.2-2.8 C50.1,139.7,49.3,139.8,48.7,140z"/><path style="fill:#C4E0FF;" d="M13,146.6c-1.9,3.3,1.3,0.9,3.8,0.9s3.8,1.4,1,4.2c-4.3,4.3-12.1,3-10.6-2.5 c0.7-2.6,3.2-3.4,3.6-4.5C11.6,142.9,12.4,146.4,13,146.6z"/></g></g></g></g><path style="opacity:0.3;fill:#07397A;enable-background:new;" d="M58.6,127.3c-3.6,5.1,7.4,4.6,11.5,8.3 c1,0.9,2.3,2.6,4.5,3.4s6.3-0.6,7.6,0.6c5.3,4.6-1.1,7.2,5.7,9.2c4.8,1.4,7.9,4.1,12.5,6.4c2.5,1.3,4.6,2.5,7.6,2.7 c3,0.2,11.2,1.9,16,4.1c9.4,4.2,27.6,1.6,37.5,2.2c-9.8-4.6-20.6-11.9-30.8-15c-3.5-1-6.4-0.3-10.3-1c-5-1-9-5.4-12.9-6.2 c-5.7-1.2-9.4,2.1-15.5-2c-3.7-2.5-6.8-7.2-10.6-10C74.7,124.8,66.4,118.5,58.6,127.3z"/></g><g id="Rucksack" style="clip-path:url(#SVGID_2_);"><path style="fill:#303C3D;" d="M122.4,52.2c0,0,0.6,4.1,2.8,6.3l-1.8,1.8c0,0-2.9-3.4-2.9-6.1L122.4,52.2z"/><g><g><g><defs><path id="SVGID_5_" d="M97.5,35.5c0,0-0.1-5.2,8.1-5.2s14.6,3.6,16,4.5c2.6,1.8,3.3,5.3,3.3,5.3s-0.5,4.1-1.1,11.6 c-1,13.6-4.6,31.8-8.4,39.4c-1.7,3.4-3,5-6,5.8c-0.6,0.2-6,0.9-6,0.9L85.7,85L97.5,35.5z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_6_);"><rect x="86.2" y="25.5" style="fill:#5D6063;" width="41.4" height="76.2"/><path style="fill:#4B4E52;" d="M117.4,35.3c0,0-2.4,28.5-5.1,40.1c-2.1,8.9-5,21.7-8.4,22.3c-3.4,0.6-26.3-11.3-26.3-11.3 l9.2-57.9C86.9,28.5,107.6,28.5,117.4,35.3z"/><path style="fill:#6F7478;" d="M125.2,52.2c0-0.3-0.9-16.7-8.2-12.5c0,0-1.5-5.6-21.1-4.1c-0.1,0,6.6-7.7,6.6-7.7l22.4,1.7 L125.2,52.2z"/><path style="fill:#3E474D;" d="M107,41.5c-1.4,9.6-4,12.9-4,12.9s4.2,0.5,6.8,6c2.6,5.5-7.9,30.4-7.9,30.4l-8-30.6l0.7-23.7 C94.5,36.5,108.4,32.7,107,41.5z"/></g></g></g></g></g><g id="Alpinist" style="clip-path:url(#SVGID_2_);"><g><g><g><defs><path id="SVGID_7_" d="M94.4,52.6c0,0-9.2,0.3-20.3-5.4S61.4,45.6,58.7,46s-9.3-1.5-9.3-1.5L49,52.2c0,0,4.7,1.3,9.1-0.1 c4.4-1.3,23.7,2.5,23.7,2.5l13.8,0.1L94.4,52.6z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_8_);"><rect x="47.3" y="39.5" transform="matrix(0.988 -0.1547 0.1547 0.988 -6.7573 11.795)" style="fill:#79A3C9;" width="50.2" height="19.7"/><path style="opacity:0.1;enable-background:new;" d="M72.4,44c0.4,0.3-2.8,9.8-2.8,9.8l28.7,3.3L96.4,51L72.4,44z"/><polygon style="opacity:0.1;enable-background:new;" points="63.4,42.6 61.4,53.6 55.3,53.8 56.8,44.1"/><polygon style="opacity:0.1;fill:#FFFFFF;enable-background:new;" points="64.4,42.2 62.6,53.8 66.1,53.2 67.9,42.7"/><path style="opacity:0.2;enable-background:new;" d="M85.6,49.5c-0.7,2.6,0.5,5,2.9,7.5c0,0,10.3,0.5,10.6,0.1 c0.3-0.4-2.4-6.4-2.4-6.4L85.6,49.5z"/><polygon style="opacity:0.1;fill:#FFFFFF;enable-background:new;" points="48.2,43.1 51.8,44.2 51.5,54.1 47.5,52.8"/></g></g></g></g><g><g><g><defs><path id="SVGID_9_" d="M91.9,52.8c0,0-6.5,0.6-11.5-0.7c-3.7-0.9-11.2-2.9-17.6-2.7c-6.4,0.2-6.8,3.9-11.8,5.9 c-3.3,1.2-6.8,2.1-10.3,2.7l2.8,4.8c3.1-0.5,6.2-1.5,9-2.9c4.3-2.3,7.1-6,11.1-5.3c13,2.1,28.1,3.4,28.5,2.8L91.9,52.8z"/></defs><clipPath id="SVGID_10_"><use xlink:href="#SVGID_9_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_10_);"><rect x="38.2" y="45" transform="matrix(0.9902 -0.14 0.14 0.9902 -7.026 9.9428)" style="fill:#79A3C9;" width="57.9" height="19.9"/><path style="opacity:0.1;enable-background:new;" d="M58,49.2l2.3,9.1c0,0-8,4.6-8.1,4.3c-0.1-0.4-2.5-8.7-2.5-8.7L58,49.2 z"/><path style="opacity:0.1;enable-background:new;" d="M76.9,50.3l0.1,8.4c0,0,16.9,1.3,17.1,1c0.3-0.3-0.7-8.2-0.7-8.2 L76.9,50.3z"/><polygon style="opacity:0.2;fill:#FFFFFF;enable-background:new;" points="60.8,48.4 62.2,57 65.6,56.6 64.5,48.4"/><path style="opacity:0.15;enable-background:new;" d="M84.9,51.9c-0.8,2.5-0.4,5,1,7.3l8.3,0.8l-0.5-8.9L84.9,51.9z"/></g></g></g></g><path style="fill:#3E4E4F;" d="M62.9,65c0,0-1.6,4.4-3.2,5.8s-3.4-5.3-3.4-6.1c0-0.8-1.5-5.2,1.1-7.2c1.9-1.5,3.5,3.7,4.5,6.3 C62,64.3,62.4,64.7,62.9,65z"/><path style="fill:#EB5C00;" d="M61.9,63.8c0,0,7.4,6.3,14.3,5.2c8.4-1.3,10-7.6,10.9-9.2c0.1-0.1,6.3-0.1,6.3,0l-6.3,8.9 c0,0-1.6,5.5-11,6.3S59,71,59,71C61.9,68.9,62.6,66.4,61.9,63.8z"/><g><g><g><defs><path id="SVGID_11_" d="M61.9,63.8c0,0,7.4,6.3,14.3,5.2c8.4-1.3,10-7.6,10.9-9.2c0.1-0.1,6.3-0.1,6.3,0l-6.3,8.9 c0,0-1.6,5.5-11,6.3S59,71,59,71C61.9,68.9,62.6,66.4,61.9,63.8z"/></defs><clipPath id="SVGID_12_"><use xlink:href="#SVGID_11_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_12_);"><rect x="55.9" y="54" style="fill:#EB5C00;" width="40.6" height="23"/><path style="fill:#C74E00;" d="M59.8,66.9c0,0,7.9,6.1,17.6,5.4c9.8-0.8,14.4-6.8,16-7.7l-1.3,10.2l-35.3,3.4L59.8,66.9z"/><path style="fill:#FFB663;" d="M93.4,57.9c0,0-9.7,12-19.2,11.3l18.5-12L93.4,57.9z"/></g></g></g></g><path style="opacity:0.3;fill:#0C3D5E;enable-background:new;" d="M60,59l-1.8,0.5l0.6,6.7c0.6-0.3,1.2-0.3,1.8,0L60,59z"/><g><g><g><defs><path id="SVGID_13_" d="M61,55.5c0,0,1.5-1.4,1.3-2.4c-0.3-1-1.3-1.7-2.3-0.8S59,54,59,54S59.3,55.7,61,55.5z"/></defs><clipPath id="SVGID_14_"><use xlink:href="#SVGID_13_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_14_);"><rect x="58" y="51.8" transform="matrix(0.9668 -0.2554 0.2554 0.9668 -11.85 17.3735)" style="fill:#3E4E4F;" width="5.9" height="5.1"/><path style="fill:#5E7578;" d="M60.9,55.8c0.4-0.6,0.6-1.2,0.6-1.9c-0.1-1-1.3-1.9-1.3-1.9l2.4-1l1.7,3.2l-2.9,2.3L60.9,55.8z" /></g></g></g></g><path style="fill:#7D5B47;" d="M64.6,127.2c-0.5,0-0.8-0.3-0.9-0.8L55.3,23.6c0-0.5,0.3-0.9,0.8-1c0.5,0,0.9,0.3,1,0.8l8.4,102.8 c0.1,0.5-0.3,0.9-0.8,1H64.6L64.6,127.2z"/><path style="fill:#473429;" d="M60.3,62l-1.8,0.2l0.3,3c0.3-0.2,1.2-0.7,1.7-0.6L60.3,62z"/><path style="fill:#473429;" d="M57.1,23.5c0-0.5-0.4-0.8-0.9-0.8c-0.2,0-0.3,0.1-0.4,0.1c0.3,0.2,0.4,0.4,0.4,0.7l8.4,102.8 c0,0.3-0.1,0.7-0.4,0.8c0.2,0.1,0.3,0.1,0.5,0.1h0.1c0.5,0,0.8-0.4,0.8-0.9v0L57.1,23.5z"/><g><g><g><defs><path id="SVGID_15_" d="M58.8,54.3c2.4,0,3.4,1.5,3.6,2.4c0.2,0.8,0.8,3.5,0.1,5.3c-0.2,0.4-0.6,0.7-1.1,0.6l-0.7-0.1 c-0.4-0.1-1.1-0.3-1.5-0.1s-1.3,1-1.6,2c-0.3,1,0.2,4.3,0.6,5.2c0.2,0.4,0.4,0.8,0.7,1.2c-0.7,1.3-4.4-8-3.1-13 C56.6,55.1,58.2,54.3,58.8,54.3z"/></defs><clipPath id="SVGID_16_"><use xlink:href="#SVGID_15_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_16_);"><rect x="52.7" y="51.7" style="fill:#5E7578;" width="12.7" height="20.3"/><path style="fill:#7A9A9C;" d="M58.8,54.1c0,0-2.9,1.9-2.6,6.5c0.2,3.2-0.6,7.1-0.6,7.1l-1.8,2.1l-1.9-13.3L58.8,54.1z"/><path style="fill:#3E4E4F;" d="M58.9,53.6c1.6,3,1.2,7,0.5,8.9c0,0,3.8,1.8,3.8,1.5c0-0.3,0.2-8.5,0.2-8.5L58.9,53.6z"/><g style="opacity:0.6;"><path style="fill:#222A2B;" d="M57.9,60.9l0.2-0.2c0.2-0.2,0.3-0.3,0.5-0.4L59,60l0.3-0.1h0.8l0.6,0.2c0.4,0.1,0.7,0.3,1,0.6 c0.3,0.2,0.4,0.5,0.6,0.8c0.1,0.2,0.2,0.4,0.3,0.6l0.1,0.3c0,0.1-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0l-0.1-0.2 c-0.1-0.2-0.2-0.4-0.3-0.6c-0.2-0.3-0.3-0.5-0.6-0.7c-0.3-0.3-0.6-0.4-0.9-0.6l-0.5-0.2h-0.5l-0.5,0.1l-0.4,0.2 c-0.2,0.1-0.4,0.2-0.5,0.3L57.9,60.9L57.9,60.9C57.9,60.9,57.9,60.9,57.9,60.9C57.9,60.9,57.9,60.9,57.9,60.9L57.9,60.9z"/></g><g style="opacity:0.6;"><path style="fill:#222A2B;" d="M58.2,58.7l0.2-0.2c0.2-0.2,0.4-0.3,0.6-0.4l0.4-0.2l0.3-0.1h0.8l0.6,0.2 c0.4,0.1,0.7,0.3,1,0.6c0.3,0.2,0.5,0.5,0.6,0.8c0.1,0.2,0.2,0.4,0.3,0.7l0.1,0.3c0,0.1-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0 l-0.1-0.3c-0.1-0.2-0.2-0.4-0.3-0.6c-0.2-0.3-0.3-0.5-0.6-0.7c-0.3-0.3-0.6-0.4-0.9-0.6l-0.5-0.1h-1L59,58.3 c-0.2,0.1-0.4,0.2-0.6,0.3L58.2,58.7L58.2,58.7C58.2,58.8,58.2,58.8,58.2,58.7C58.2,58.7,58.2,58.7,58.2,58.7z"/></g><g style="opacity:0.6;"><path style="fill:#222A2B;" d="M58.4,56.6l0.2-0.2c0.2-0.1,0.4-0.2,0.6-0.3c0.3-0.1,0.7-0.1,1-0.1l0.6,0.1l0.6,0.2 c0.4,0.1,0.7,0.3,1,0.6c0.3,0.2,0.4,0.5,0.6,0.8c0.1,0.2,0.2,0.4,0.3,0.6l0.1,0.3c0,0.1-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0 l-0.1-0.2c-0.1-0.2-0.2-0.4-0.3-0.6c-0.2-0.3-0.3-0.5-0.6-0.7c-0.3-0.3-0.6-0.4-0.9-0.6l-0.5-0.2l-0.5-0.1h-0.5l-0.4,0.1 c-0.2,0.1-0.4,0.1-0.6,0.2L58.4,56.6L58.4,56.6C58.3,56.7,58.3,56.7,58.4,56.6C58.3,56.6,58.4,56.6,58.4,56.6L58.4,56.6z"/></g></g></g></g></g><g><g><g><defs><path id="SVGID_17_" d="M57.3,26.2c0,0-11.8-3.4-19.5-0.2s-11.7,6.4-19,7.1l1.9,23.3c0,0,13.6-1.3,20.1-5.7 c7.3-4.9,18.4-2.5,18.4-2.5L57.3,26.2z"/></defs><clipPath id="SVGID_18_"><use xlink:href="#SVGID_17_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_18_);"><rect x="13" y="17.1" style="fill:#EB5C00;" width="49.5" height="43.5"/><polygon style="fill:#DB5600;" points="46.5,23.7 49,49.5 62.2,48.6 60.3,25.8 53.8,24"/><polygon style="fill:#DB5600;" points="9.4,32.1 11.9,58 25.1,57.1 22.8,30.5 16.7,32.5"/><polygon style="fill:#C44D00;" points="56.4,25.1 58.3,49 60.6,49 58.3,25.1"/></g></g></g></g><path style="fill:#B53C00;" d="M83.9,86.6c0,0,4.8,8.2,10.8,10.5c6,2.3,8.9,2,8.9,2S97.7,85.7,83.9,86.6z"/><g><g><g><defs><path id="SVGID_19_" d="M97.2,148.9c0.3,3.9,1.7,6.8,5,6.6s4.4-3,4.5-6.9c0.1-3.9-2-8.2-2.5-8.7l-6.5,1.6 C97.2,143.9,97,146.4,97.2,148.9z"/></defs><clipPath id="SVGID_20_"><use xlink:href="#SVGID_19_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_20_);"><rect x="95.8" y="139.1" style="fill:#5A7073;" width="12.1" height="17.4"/><path style="fill:#48595C;" d="M100.7,139.5c0,0-1.9,15.5,2.4,16.3c0,0,7.3,0.5,3.1-16.2L100.7,139.5z"/></g></g></g></g><g><g><g><defs><path id="SVGID_21_" d="M98.2,141.3c-0.1-0.1-0.4,7.1,0.5,10.3s2.7,3,3.7,2.9c1.1-0.1,3.2-1.6,3.2-5s-0.9-8.2-1.4-8.9 L98.2,141.3z"/></defs><clipPath id="SVGID_22_"><use xlink:href="#SVGID_21_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_22_);"><rect x="96.8" y="137.4" style="fill:#303C3D;" width="9.9" height="18.4"/><path style="fill:#4C5F61;" d="M98.8,140.4c0,0-0.8,6.7,0.1,10.2c0.9,3.4,1.9,3.4,2.9,3.4s4-3.8-1.3-3.8 C99.6,150.1,99.5,142.8,98.8,140.4z"/></g></g></g></g><g><g><g><defs><path id="SVGID_23_" d="M95.8,134.3l1.3,8.5c0,0,1.3,1.2,4.1,1c2.8-0.3,3.9-1.3,4.1-1.9c0.3-0.6-0.9-9-0.9-9L95.8,134.3z"/></defs><clipPath id="SVGID_24_"><use xlink:href="#SVGID_23_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_24_);"><rect x="93.7" y="131.7" style="fill:#5E7578;" width="14.4" height="14.4"/><path style="fill:#506566;" d="M98.7,132.4l1.9,14.7c0,0,7.9-3,7.9-3.3s-1.7-12-1.7-12L98.7,132.4z"/></g></g></g></g><g><g><g><defs><path id="SVGID_25_" d="M93.1,88.1c-0.6,0-16.9-4-21.6,2c-5.2,6.6-4.6,20.1-3.6,21.9s0.6,2.3,0.6,2.3s4.1,1.3,7.7,0 c1.3-0.5,1.4-3,1.3-5.7c-0.1-3.9-1.4-9.2,0.5-11.8c4.4-6.1,16,1.1,21.2,1.1L93.1,88.1z"/></defs><clipPath id="SVGID_26_"><use xlink:href="#SVGID_25_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_26_);"><rect x="65.5" y="83.6" style="fill:#3A70A3;" width="35" height="37"/><path style="fill:#22507D;" d="M96.6,90.2c0,0-16.6-2.4-20.8,2.9c-4.2,5.3-2.2,13.4-2.2,14.8c0,1.4,1.2,4.6-3.2,5.5 c-1.8,0.4-2.2-0.7-2.2-0.7l-1,5.9l12.5-2.8L88,98.7l14.1-5.2L96.6,90.2z"/><path style="fill:#72A0CC;" d="M83.2,86.7c0-0.1-5.4-0.3-9.2,2.7c-3.8,3-5.6,11-5.5,21c0,1.1-0.8,2.2-1.1,1 C66.5,108,60.6,82.4,83.2,86.7z"/><path style="fill:#22507D;" d="M83.9,86.7c0,0,6.8,1.4,8.6,7c0,0,0.2-5.6,0-6.7C92.2,85.9,86.2,86.1,83.9,86.7z"/></g></g></g></g><g><g><g><defs><path id="SVGID_27_" d="M92.2,87.9c0,0,0.3,9.2,1.1,19.9c0.8,10.2,1.4,20.7,1.4,20.7c-0.3,1.2-0.4,2.4-0.4,3.5 c0,1.9,1.8,5.3,5.7,4.7c3.9-0.7,4.5-1.9,4.5-1.9s0.7-1.3,0.7-3.8c0-2.4-1.3-6.2-1.3-7.8c0-1.5-0.8-28.1-1.3-29.8L92.2,87.9z"/></defs><clipPath id="SVGID_28_"><use xlink:href="#SVGID_27_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_28_);"><rect x="90.1" y="83.3" style="fill:#3A70A3;" width="18.7" height="57.3"/><path style="fill:#22507D;" d="M98.7,88.6l0.4,9.2l1.4,29.4c0,0,2.7,2.9,2.7,5.1c0,2.1-2.9,3.5-5.9,3.5c-3,0-6-1.8-6-1.8 l6.6,5.9l8.5-3.9l-1.8-45.5L98.7,88.6z"/></g></g></g></g><g><g><g><defs><path id="SVGID_29_" d="M106.6,60c-2.7,12.1-3.6,25-3,39.1c-6.6-9.2-17.1-12.5-19.7-12.5c-2.8-9.4,0.8-21.4,1.6-24.8 c0.4-2,1.9-3.5,3.8-4.1L106.6,60z"/></defs><clipPath id="SVGID_30_"><use xlink:href="#SVGID_29_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_30_);"><rect x="81.6" y="51.4" style="fill:#EB5C00;" width="23.8" height="47.3"/><path style="fill:#C74E00;" d="M96.8,57c0,0-8,17.2-4,33.4s13.3,13.6,13.3,13.6l1.9-46.5L96.8,57z"/><path style="fill:#FFAE57;" d="M92.4,57.8c0,0-6.7,10-7.5,15.6c-0.8,5.6-1,12.4-0.2,15.5L78.9,87l4.4-30.8L92.4,57.8z"/></g></g></g></g><g><g><g><defs><path id="SVGID_31_" d="M105.2,59.8c0,0,20.6,3.8,18.5,15.3c-2.1,11.5-19.5,15.5-19.5,15.5l-0.8-6c0,0,12.6-3.3,13.5-8.7 c1.3-7.8-12.9-9.8-12.9-9.8L105.2,59.8z"/></defs><clipPath id="SVGID_32_"><use xlink:href="#SVGID_31_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_32_);"><rect x="98.4" y="55.4" style="fill:#EB5C00;" width="28.4" height="37.8"/><path style="fill:#C74E00;" d="M103.7,63.3c3.5,0.6,6.9,1.8,10,3.6c4.9,2.8,4.4,8.2,2.8,9.7c-1.6,1.6-14.7-6.7-14.7-6.7 L103.7,63.3z"/><path style="fill:#E67A00;" d="M101.9,87.3c0.5-0.5,15.2-2.2,19.8-10c2.4-4.1,1.5-6.9,1.5-9.3c0,0,3.3,10.5-0.4,14.2 s-21.7,11.2-21.7,11.2L101.9,87.3z"/></g></g></g></g><g><g><g><defs><path id="SVGID_33_" d="M110.1,57.9c0,0-0.1,0.5-0.2,0.5c-1.1,0.5-5.1,1-5.6,5.2c-0.6,4.8,2.5,10.6,3.8,12.1 c0,0.2,0.1,0.3,0.1,0.5l-3.1,2.3c0,0-5.8-5.9-5.8-13.1s5.8-8.3,5.8-8.3L110.1,57.9z"/></defs><clipPath id="SVGID_34_"><use xlink:href="#SVGID_33_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_34_);"><rect x="97.5" y="56.1" style="fill:#303C3D;" width="14.6" height="23.6"/><path style="fill:#263030;" d="M105.4,65.3c0,0-3.7-1.3-6.7,2.7c0,0,4.8,10.9,6.3,12.4l5.2-4.5L105.4,65.3z"/></g></g></g></g><path style="fill:#303C3D;" d="M91.3,57.7c0,0-7.1,9.7-8.4,18.8c0.2-2.7,0.5-5.4,1-8c0,0,3.7-10.3,4.5-10.5 C89.1,57.7,91.3,57.7,91.3,57.7z"/><g><g><g><defs><path id="SVGID_35_" d="M89.6,57.5l-3.2,0.9c0,0-1.4,0.3-0.2,1.5c1.2,1.2,6.2,4.8,6.6,5.8c0.4,0.9,0.7,1.7,0.6,2.3 c-0.2,0.6,4.1-7.3,4.1-7.3L89.6,57.5z"/></defs><clipPath id="SVGID_36_"><use xlink:href="#SVGID_35_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_36_);"><rect x="84.1" y="55.4" style="fill:#EB5C00;" width="14.3" height="13.9"/><path style="fill:#FFB663;" d="M88.1,57.8c0,0-1.9,0.6-1.6,1.5s4.9,4.5,5.6,5.2c0.8,0.8,1.3,2,1.3,3.1c0,1.3-9.3-7.6-9.3-7.6 S85.5,57.5,88.1,57.8z"/></g></g></g></g><path style="fill:#E67A00;" d="M91.8,56.3h-4.4c0,0-2.1-0.2-0.8,1.1c1.3,1.3,5.7,6,6.2,6.9c0.5,0.9,1.2,2,0.5,3.5 c-0.7,1.6,4-7.3,4.1-7.3L91.8,56.3z"/><g><g><g><defs><path id="SVGID_37_" d="M91.8,56.3h-4.4c0,0-2.1-0.2-0.8,1.1c1.3,1.3,5.7,6,6.2,6.9c0.5,0.9,1.2,2,0.5,3.5 c-0.7,1.6,4-7.3,4.1-7.3L91.8,56.3z"/></defs><clipPath id="SVGID_38_"><use xlink:href="#SVGID_37_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_38_);"><rect x="85.1" y="54.6" style="fill:#EB5C00;" width="12.7" height="13.3"/><path style="fill:#FFB663;" d="M89.7,56.5c0,0-2.8-0.4-2.5,0.5c0.3,0.9,7.8,7.9,6.5,10.3c0,0-8.7-10.6-8.9-10.7 c-0.2-0.1,3.6-1.3,3.6-1.2C88.4,55.6,89.7,56.5,89.7,56.5z"/></g></g></g></g><g><g><g><defs><path id="SVGID_39_" d="M90.7,44.8l-2-0.3c-0.3,0-0.4-0.3-0.4-0.5v0c0.3-1.5,1.2-6.5,2.4-8.9c1.5-3,4.2-5.7,8.9-4.7 c4.7,1,5.9,6.7,5.9,8.2c0,1.5-2.5,7.2-3.9,10.4c-1.3,3.2-1.3,5-1.3,5s-5.2,1-5.2,0.6c0-0.4,0.4-2.2,0.4-2.2S89,52.3,90.7,44.8z"/></defs><clipPath id="SVGID_40_"><use xlink:href="#SVGID_39_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_40_);"><rect x="87.3" y="26.2" style="fill:#9E552F;" width="20.9" height="32.9"/><path style="fill:#854521;" d="M101.3,29.4c0,0,2.1,6.3-1.6,17.1c-1.4,4.2-4.2,5.7-4.2,5.7l-0.2,3.9l5.7,0.1l7.9-16.6 l-1.9-10.8L101.3,29.4z"/><path style="fill:#CF8B68;" d="M93.9,30.8c0,0-3.8,6.4-4.6,13.4c-0.1,1,2.3,0.4,2.3,0.7s-1.6,3.7,0.7,6.9c0,0-7.2-1.7-7.3-1.8 c-0.1-0.1,3.7-18,3.7-18L93.9,30.8z"/><path style="opacity:0.3;fill:#0C3D5E;enable-background:new;" d="M90,46.3c0,0,0.7-1.3,3.4-1.9c2.7-0.6,4.8,1.9,6.6,1.9 s1.9-3.4,2-4.9c0.1-1.5,0.5-2.9,1.9-3.7s3,3.5,3,3.5s-2.4-2.6-3.3-1.3c-0.9,1.3,0.5,6.1-2.3,9.5c-1.5,1.6-3.5,2.7-5.6,3 c-1.9,0.3-4.4-0.1-4.4-0.1s-1.6-3.9-1.8-4.1C89.2,47.9,90,46.3,90,46.3z"/></g></g></g></g><path style="fill:#2A3636;" d="M103.7,82.6c-0.2-0.2-2.5-3.3-2.9-4.5c-0.4-1.2-1.6,0.7-1.6,1.4s0.5,3.9,1.1,4.2 C100.9,84.1,103.7,82.6,103.7,82.6z"/><g><g><g><defs><path id="SVGID_41_" d="M104.5,92.1c0,0-2.9-4.5-3.7-5c-0.8-0.5-2.8,0.2-3.7,0.7s-2.7,1.2-3.4,0.7c-0.7-0.5-1.6-2.8-0.4-3.9 c1.2-1.2,2.1-2.1,3.4-2.8c2.1-1.2,3.5-1,4.6-0.6c1.1,0.4,4,1.8,4,1.8S109.2,87.7,104.5,92.1z"/></defs><clipPath id="SVGID_42_"><use xlink:href="#SVGID_41_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_42_);"><rect x="89.7" y="77.7" style="fill:#303C3D;" width="18.6" height="16.7"/><path style="fill:#405152;" d="M96.4,80.5c-1,1.5-1.3,3.4-1,5.1c0.7,2.9,4.4,3.4,4.4,3.4l-7.2,2.5l-2.5-8.7L96.4,80.5z"/><path style="fill:#2A3636;" d="M98.9,76.5c0,0,5.5,7.1,2.2,10.9c-4.6,5.3,5.7,6.6,5.7,6.6l2.4-9.5L98.9,76.5z"/><g style="opacity:0.6;"><path d="M92.5,86.7c0.3-0.4,0.5-0.7,0.8-1.1c0.7-0.7,1.4-1.4,2.2-2l0.3-0.2l0.3-0.2l0.3-0.2l0.3-0.2c0.4-0.2,0.9-0.3,1.3-0.3 l1-0.1h0.4c0,0,0.1,0,0.1,0.1l0,0l-0.1,0.1h-0.4l-0.9,0.1l-0.6,0.2L97,83l-0.7,0.3l-0.3,0.2l-0.3,0.2c-0.8,0.6-1.5,1.3-2.2,2 l-0.6,0.7l-0.2,0.3c0,0-0.1,0.1-0.2,0C92.5,86.8,92.5,86.7,92.5,86.7z"/></g><g style="opacity:0.6;"><path d="M92.7,87.9c0.3-0.4,0.5-0.7,0.8-1.1c0.7-0.8,1.4-1.4,2.2-1.9l0.7-0.4l0.7-0.3c0.4-0.2,0.8-0.3,1.3-0.4 c0.4-0.1,0.9-0.2,1.3-0.2l0.1,0.1l-0.1,0.1c-0.4,0.1-0.9,0.2-1.3,0.3c-0.4,0.1-0.8,0.3-1.3,0.4l-0.7,0.3l-0.7,0.4 c-0.8,0.5-1.5,1.2-2.1,1.9c-0.3,0.3-0.6,0.7-0.8,1c0,0-0.1,0.1-0.2,0C92.7,88,92.7,87.9,92.7,87.9L92.7,87.9z"/></g><g style="opacity:0.6;"><path d="M93.3,89c0.2-0.4,0.4-0.8,0.7-1.1c0.3-0.3,0.6-0.7,0.9-1l0.6-0.5l0.7-0.4l0.7-0.3l0.7-0.3l1.3-0.3 c0.4-0.1,0.8-0.2,1.3-0.2l0.1,0.1c0,0,0,0.1,0,0.1l-1.3,0.3c-0.9,0.2-1.8,0.5-2.6,1l-0.6,0.4L95,87.1c-0.5,0.5-1,1.1-1.4,1.7 l-0.2,0.3c-0.1,0-0.1,0-0.2,0C93.3,89.1,93.3,89.1,93.3,89L93.3,89z"/></g></g></g></g></g><g><g><g><defs><path id="SVGID_43_" d="M90,57c-0.3-0.1,4.2,4.3,4,9.1c0,0,2.1-4.2,3.5-5.6c1.3-1.2,2.7-2.4,4.2-3.5C101.6,57,92,57.7,90,57z" /></defs><clipPath id="SVGID_44_"><use xlink:href="#SVGID_43_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_44_);"><rect x="88.3" y="55.3" style="fill:#79A3C9;" width="13.8" height="12"/><path style="opacity:0.1;enable-background:new;" d="M101.2,58.1l-7.7,1.7c0,0,1.3,1.1,0.6,7c0,0-6.7-2.3-6.6-2.4 c0.1,0,1.8-7.9,1.8-7.9l13.5-0.4L101.2,58.1z"/></g></g></g></g><ellipse cx="90.6" cy="38.2" rx="0.3" ry="0.8"/><g><g><g><defs><path id="SVGID_45_" d="M90.9,34.7c0,0,4.7-1.8,9.7,1.4c3.3,2.1,4.1,5.9,4.1,5.9s3.8-9-2.3-12.1C99.4,28.3,93.3,28.8,90.9,34.7 z"/></defs><clipPath id="SVGID_46_"><use xlink:href="#SVGID_45_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_46_);"><rect x="90.1" y="27.3" style="fill:#5E7578;" width="17.1" height="15.7"/><path style="fill:#465859;" d="M101.1,29.3c0.6,1.4,1,8.1,0,11.5c0,0.1,4,2.9,4,2.8c0-0.1,2.5-11.5,2.5-11.5L101.1,29.3z"/></g></g></g></g><ellipse cx="95.9" cy="38.5" rx="0.5" ry="1"/><path d="M94.4,47.8h0.6l0.6-0.1l0.6-0.2l0.3-0.1l0.3-0.1l0.3-0.1l0.2-0.1l0.2-0.1l0.2-0.1l0.1-0.1l0,0c0,0,0.1,0,0.1,0 c0,0,0,0.1,0,0.1L97.7,47l-0.1,0.2l-0.2,0.2l-0.2,0.2l-0.3,0.2l-0.3,0.2L96.2,48c-0.2,0.1-0.5,0.1-0.7,0.1h-0.6 c-0.2,0-0.4-0.1-0.6-0.2c0,0-0.1-0.1,0-0.1l0,0L94.4,47.8z"/><path style="fill:#303C3D;" d="M58.7,128.8l18.7-3.1l-0.1,1.5c0,0-0.5,1.7-2,2.2s-4.3,0.3-5.3,0.5c-1.1,0.2-3.4,1-4.9,1.4 c-4.2,0.9-6.1-0.6-6.3-1.1L58.7,128.8z"/><path style="fill:#48595C;" d="M59.4,127.7c0,0-0.9,0.5-0.6,1.3c0.3,0.8,2.1,1.7,4.8,1.3s5.4-1.5,6.6-1.6c1.2-0.1,3.1,0.1,4.7-0.5 c1.6-0.6,2.2-1.6,2.4-2.4c0.2-0.8-1.1-1.4-1.1-1.4L59.4,127.7z"/><path style="fill:#5A7073;" d="M60.2,129.2c-0.3-0.8,0.6-1.3,0.6-1.3l16.1-3.1c-0.2-0.2-0.4-0.3-0.6-0.4l-16.9,3.3 c0,0-0.9,0.5-0.6,1.3c0.3,0.8,1.4,1.3,3.2,1.4C61.1,130.2,60.5,129.7,60.2,129.2z"/><g><g><g><defs><path id="SVGID_47_" d="M69.3,120.5c0,0,0.6,2.7-5.1,4c-5.1,1.2-5.3,3.7-4.6,4.4c0.7,0.7,2.6,1.7,6.9,0.4c3.1-1,3.7-1,3.7-1 s3,0.2,4.6-0.6c2.1-1,2.2-2.9,1.7-4.2c-0.5-1.2-1.3-2-1.3-3.2"/></defs><clipPath id="SVGID_48_"><use xlink:href="#SVGID_47_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_48_);"><rect x="58.6" y="119" style="fill:#303C3D;" width="20.4" height="13.2"/><path style="fill:#60787A;" d="M68.8,121.3c0,0,0.3,1.8-1.7,2.9c-1.9,1.1-5.9,1.8-4.4,2.7c1.5,0.9,1.2,1.6-0.2,1.6 c-2.2,0-3.2-0.5-3.1-1.2c0.1-0.6,4.5-5.7,4.5-5.7l4.7-0.3"/></g></g></g></g><path d="M90.8,35.6c0-0.1,0.1-0.2,0.2-0.2l0.2-0.2l0.3-0.1c0.2-0.1,0.3-0.1,0.5-0.1h0.3c0,0,0.1,0,0.1,0.1v0l-0.1,0.1l-0.2,0.1 l-0.5,0.1l-0.5,0.2L90.8,35.6L90.8,35.6C90.8,35.6,90.8,35.6,90.8,35.6z"/><path d="M98.6,36.6c-0.1-0.2-0.2-0.3-0.3-0.4L98,35.8c-0.2-0.2-0.3-0.3-0.5-0.4l-0.3-0.2l-0.3-0.1L96.6,35l-0.3-0.1h-0.5 c0,0-0.1,0-0.1-0.1l0,0l0.1-0.1h0.8l0.3,0.1l0.3,0.1l0.3,0.2c0.3,0.2,0.7,0.5,0.9,0.9c0.1,0.1,0.1,0.3,0.2,0.4L98.6,36.6L98.6,36.6 C98.7,36.6,98.7,36.7,98.6,36.6L98.6,36.6z"/><path style="fill:#303C3D;" d="M91.1,34.2c3.2-1.3,10.2-0.9,14.3,5.1l0.3-1.3c-1.9-3.9-8.2-7.1-14-5.2L91.1,34.2z"/><path style="fill:#9E4212;" d="M103.5,43.8c1.2,0.1,1.8-1.8,1.8-3.1s-1.4-1.4-1.7-0.9s0.3,1.1,0,1.9S103.2,43.8,103.5,43.8z"/><path style="fill:#717F87;" d="M90.2,32.9l0.3,0.8v0.1l0,0c0.3,0.5,1.4,0.5,2.5,0c1.1-0.5,1.8-1.2,1.8-1.7L94.4,31L90.2,32.9z"/><path style="fill:#717F87;" d="M96.1,31.5l-0.3,1.2c0,0.6,0.9,1.2,2.2,1.5s2.4,0.1,2.6-0.4l0,0v-0.1l0.2-0.9L96.1,31.5z"/><ellipse transform="matrix(0.9225 -0.3859 0.3859 0.9225 -5.3232 38.0997)" style="fill:#E3EEFF;" cx="92.2" cy="32.3" rx="2.3" ry="1"/><ellipse transform="matrix(0.2368 -0.9716 0.9716 0.2368 43.818 119.9818)" style="fill:#C7DEFF;" cx="98.3" cy="32.1" rx="1.1" ry="2.5"/><path style="fill:#D47200;" d="M103.7,56.9c-4.2,0.4-9.1,7.4-10.2,10.9c2.9-3.5,9.9-7.4,10.4-7.6c0.5-0.2,0.8-0.5,0.4-1.2 S103.7,56.9,103.7,56.9z"/><g><g><g><defs><path id="SVGID_49_" d="M102.6,56.3c-3.9,0.3-8.5,8.4-8.9,10.8c2.5-4,8.3-7,9.1-7.4c0.8-0.4,0.8-0.5,0.4-1.2 C102.7,57.7,102.6,56.3,102.6,56.3z"/></defs><clipPath id="SVGID_50_"><use xlink:href="#SVGID_49_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_50_);"><rect x="93.4" y="55.1" style="fill:#EB5C00;" width="11" height="12"/><path style="opacity:0.46;fill:#FFB663;enable-background:new;" d="M102.8,57.2c0.3,0.4-0.4,1.8-3.6,4.2 c-1.4,1-3.1,1.8-4.9,4.9l10-6.5L102.8,57.2z"/></g></g></g></g><ellipse style="fill:#85380D;" cx="103.8" cy="41.5" rx="0.6" ry="0.7"/><g><g><g><defs><path id="SVGID_51_" d="M68.5,114v7.7c0,0,0.3,0.6,4,0.6s3.7-1,3.7-1v-7C76.2,114.3,71.6,115.8,68.5,114z"/></defs><clipPath id="SVGID_52_"><use xlink:href="#SVGID_51_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_52_);"><rect x="66" y="111.1" style="fill:#5E7578;" width="14.2" height="14.2"/><path style="fill:#506566;" d="M72.7,113.6l0.1,10.4c0,0,5.7-0.7,5.5-0.9c-0.2-0.2-0.2-10.5-0.2-10.5L72.7,113.6z"/></g></g></g></g><g><g><g><defs><path id="SVGID_53_" d="M92.1,52.7c0,0,3.5,0.5,6.3,0.3c1.3-0.1,2.6-0.3,3.9-0.6c0.9,0.3,1.4,1.5,1.3,2.6c0.1,1-0.5,2-1.4,2.5 c0,0-7.2,2.2-11.7,0.3C88,56.6,89.3,52.5,92.1,52.7z"/></defs><clipPath id="SVGID_54_"><use xlink:href="#SVGID_53_" style="overflow:visible;"/></clipPath><g style="clip-path:url(#SVGID_54_);"><rect x="87.9" y="50.8" style="fill:#79A3C9;" width="19.3" height="9.8"/><path style="opacity:0.8;fill:#DEF4FF;enable-background:new;" d="M94.2,52.8c0,0-3.4,0.3-3.6,2.8 c-0.1,2.5,1.8,3.1,1.3,2.8c0,0-5-0.5-4.5-2.6C87.9,53.6,90.6,51.3,94.2,52.8z"/><path style="opacity:0.1;enable-background:new;" d="M97.3,52.2c0,0,4.2,1.6,0,7.1l9.4-0.8l-1.1-7.5L97.3,52.2z"/></g></g></g></g><path style="opacity:0.3;fill:none;stroke:#000000;stroke-width:1.42;stroke-linecap:round;stroke-miterlimit:10;enable-background:new;" d=" M91.2,67.5c0,0-1.5,2.9-1.5,5.2"/><polygon style="fill:#668082;" points="89.6,73 89.2,74.9 90.1,74.9 89.9,73"/></g></svg></div><div class="atb-extension-overlay__fade-out js-extension-overlay-fade-out">';
    h = q["if"].call(s, ((h = (s && s.onBoardingTest)), h == null || h === false ? h : h.hideEmailForm), {
        hash: {},
        inverse: o.program(8, g, t),
        fn: o.program(3, m, t),
        data: t
    });
    if (h || h === 0) {
        r += h
    }
    r += '</div><div class="atb-extension-overlay__success-message js-extension-overlay-submit"><p class="atb-extension-overlay__thanks tx--19 tx-clr--lt2">';
    h = (a = q.lp || (s && s.lp), e = {
        hash: {},
        data: t
    }, a ? a.call(s, "homepage onboarding", "Thank you.", e) : p.call(s, "lp", "homepage onboarding", "Thank you.", e));
    if (h || h === 0) {
        r += h
    }
    r += "<br>";
    h = (a = q.lp || (s && s.lp), e = {
        hash: {},
        data: t
    }, a ? a.call(s, "homepage onboarding", "Welcome to the Duck Side!", e) : p.call(s, "lp", "homepage onboarding", "Welcome to the Duck Side!", e));
    if (h || h === 0) {
        r += h
    }
    r += '</p><div class="atb-extension-overlay__lower-loupe"><a class="atb-extension-overlay__nav-text tx--15 js-extension-overlay-search" data-search-link="start-link" href="https://duckduckgo.com"><span class="ddgsi ddgsi-loupe"></span> ';
    h = (a = q.l || (s && s.l), e = {
        hash: {},
        data: t
    }, a ? a.call(s, "Start searching!", e) : p.call(s, "l", "Start searching!", e));
    if (h || h === 0) {
        r += h
    }
    r += "</a></div></div></div></div>";
    return r
});
this["DDG"]["templates"]["add_to_browser_extension_overlay_chrome"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<div class="atb-extension-overlay__instructions atb-extension-overlay__instructions--chrome"><p class="atb-extension-overlay__directions">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "install-duckduckgo", "Click %sAdd Extension%s.", "<b>", "</b>", k) : i.call(j, "lp", "install-duckduckgo", "Click %sAdd Extension%s.", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p><p class="atb-extension-overlay__permissions">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "These browser permissions are used to add privacy protection on websites you visit by blocking hidden trackers, encrypting connections where possible, and by making DuckDuckGo your default search engine.", k) : i.call(j, "l", "These browser permissions are used to add privacy protection on websites you visit by blocking hidden trackers, encrypting connections where possible, and by making DuckDuckGo your default search engine.", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p><p class="atb-extension-overlay__permissions">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "As per our privacy policy, we do not collect or share any personal information ourselves. All of this privacy protection happens on your device.", k) : i.call(j, "l", "As per our privacy policy, we do not collect or share any personal information ourselves. All of this privacy protection happens on your device.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</p></div>";
    return f
});
this["DDG"]["templates"]["add_to_browser_extension_overlay_firefox"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<div class="atb-extension-overlay__instructions"><p class="atb-extension-overlay__directions">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "install-duckduckgo", "Click %sAllow%s, then %sAdd%s.", "<b>", "</b>", "<b>", "</b>", k) : i.call(j, "lp", "install-duckduckgo", "Click %sAllow%s, then %sAdd%s.", "<b>", "</b>", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p><p class="atb-extension-overlay__permissions">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "These browser permissions are used to add privacy protection on websites you visit by blocking hidden trackers, encrypting connections where possible, and by making DuckDuckGo your default search engine.", k) : i.call(j, "l", "These browser permissions are used to add privacy protection on websites you visit by blocking hidden trackers, encrypting connections where possible, and by making DuckDuckGo your default search engine.", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p><p class="atb-extension-overlay__permissions">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "As per our privacy policy, we do not collect or share any personal information ourselves. All of this privacy protection happens on your device.", k) : i.call(j, "l", "As per our privacy policy, we do not collect or share any personal information ourselves. All of this privacy protection happens on your device.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</p></div>";
    return f
});
this["DDG"]["templates"]["add_to_browser_extension_overlay_safari"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<div class="atb-extension-overlay__left-col"><div class="atb-extension-overlay__col-inner"><h1 class="atb-extension-overlay__header">';
    a = (e = b.lp || (k && k.lp), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "install-duckduckgo", "Almost there!", m) : j.call(k, "lp", "install-duckduckgo", "Almost there!", m));
    if (a || a === 0) {
        f += a
    }
    f += '</h1><p class="atb-extension-overlay__text">';
    a = (e = b.lp || (k && k.lp), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "install-extension", "1. Open %sDownloads%s", "<b>", "</b>", m) : j.call(k, "lp", "install-extension", "1. Open %sDownloads%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</p><p class="atb-extension-overlay__text">';
    a = (e = b.lp || (k && k.lp), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "install-extension", "2. Double-click %sduckduckgo.safariextz%s", "<b>", "</b>", m) : j.call(k, "lp", "install-extension", "2. Double-click %sduckduckgo.safariextz%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</p><p class="atb-extension-overlay__subtext">';
    a = (e = b.lp || (k && k.lp), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "install-extension", "Don't see it? %s%s%sClick here to re-download%s", '<a class="atb-extension-overlay__link" href="', (k && k.url), '" target="_blank">', "</a>", m) : j.call(k, "lp", "install-extension", "Don't see it? %s%s%sClick here to re-download%s", '<a class="atb-extension-overlay__link" href="', (k && k.url), '" target="_blank">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</p></div></div><div class="atb-extension-overlay__right-col"><img class="atb-extension-overlay__img" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/safari-extension.png", m) : j.call(k, "retinaImage", "/assets/add-to-browser/safari-extension.png", m))) + '" /></div>';
    return f
});
this["DDG"]["templates"]["add_to_browser_extension_overlay_v2"] = Handlebars.template(function(f, o, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var i = "",
        b, g, r, n = e.helperMissing,
        h = "function",
        j = this.escapeExpression,
        q = this;

    function c(x, v) {
        var t, u, s;
        t = (u = e.include || (x && x.include), s = {
            hash: {},
            data: v
        }, u ? u.call(x, (x && x.subTemplate), s) : n.call(x, "include", (x && x.subTemplate), s));
        if (t || t === 0) {
            return t
        } else {
            return ""
        }
    }

    function a(t, s) {
        return "new"
    }

    function p(t, s) {
        return "old"
    }
    i += '<div id="atb-extension-overlay" class="atb-extension-overlay atb-extension-overlay--v2 atb-extension-overlay--';
    if (g = e.browserName) {
        b = g.call(o, {
            hash: {},
            data: k
        })
    } else {
        g = (o && o.browserName);
        b = typeof g === h ? g.call(o, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ' js-extension-overlay-v2 js-extension-overlay"><div class="atb-extension-overlay__nav js-extension-overlay-nav"><span class="ddgsi ddgsi-close-bold pull-right js-extension-overlay-close tx-clr--white tx--15"></span></div><div class="atb-extension-overlay__content  js-extension-overlay-content  ddg-extension-hide">';
    b = e["if"].call(o, (o && o.subTemplate), {
        hash: {},
        inverse: q.noop,
        fn: q.program(1, c, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += '</div><div id="atb-extension-overlay__success" class="atb_extension-overlay__success atb-extension-overlay__success-v2"><div class="atb-extension-overlay__fade-out js-extension-overlay-fade-out"><h1 class="atb-extension-overlay__title">';
    b = (g = e.l || (o && o.l), r = {
        hash: {},
        data: k
    }, g ? g.call(o, "Privacy, simplified.", r) : n.call(o, "l", "Privacy, simplified.", r));
    if (b || b === 0) {
        i += b
    }
    i += '</h1><p class="atb-extension-overlay__subtitle tx--21">';
    b = (g = e.l || (o && o.l), r = {
        hash: {},
        data: k
    }, g ? g.call(o, "You now have the tools you need to control your online footprint and take back your privacy!", r) : n.call(o, "l", "You now have the tools you need to control your online footprint and take back your privacy!", r));
    if (b || b === 0) {
        i += b
    }
    i += '</p><ul class="atb-extension-overlay__browser atb-extension-overlay__browser--';
    b = e["if"].call(o, (o && o.newUx), {
        hash: {},
        inverse: q.program(5, p, k),
        fn: q.program(3, a, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += '"><li class="atb-extension-overlay__feature atb-extension-overlay__feature--search"><h3 class="atb-extension-overlay__feature-title tx--25">';
    b = (g = e.l || (o && o.l), r = {
        hash: {},
        data: k
    }, g ? g.call(o, "Search Anonymously", r) : n.call(o, "l", "Search Anonymously", r));
    if (b || b === 0) {
        i += b
    }
    i += '</h3><p class="atb-extension-overlay__feature-subtitle tx--17">';
    b = (g = e.l || (o && o.l), r = {
        hash: {},
        data: k
    }, g ? g.call(o, "Keep your search history private and minimize ad targeting.", r) : n.call(o, "l", "Keep your search history private and minimize ad targeting.", r));
    if (b || b === 0) {
        i += b
    }
    i += '</p></li><li class="atb-extension-overlay__feature atb-extension-overlay__feature--https"> <h3 class="atb-extension-overlay__feature-title tx--25">';
    b = (g = e.l || (o && o.l), r = {
        hash: {},
        data: k
    }, g ? g.call(o, "Encrypt Connections", r) : n.call(o, "l", "Encrypt Connections", r));
    if (b || b === 0) {
        i += b
    }
    i += '</h3><p class="atb-extension-overlay__feature-subtitle tx--17">';
    b = (g = e.l || (o && o.l), r = {
        hash: {},
        data: k
    }, g ? g.call(o, "Avoid eavesdropping and enhance wi-fi security.", r) : n.call(o, "l", "Avoid eavesdropping and enhance wi-fi security.", r));
    if (b || b === 0) {
        i += b
    }
    i += '</p></li><li class="atb-extension-overlay__feature atb-extension-overlay__feature--blocking"><h3 class="atb-extension-overlay__feature-title tx--25">';
    b = (g = e.l || (o && o.l), r = {
        hash: {},
        data: k
    }, g ? g.call(o, "Block Trackers", r) : n.call(o, "l", "Block Trackers", r));
    if (b || b === 0) {
        i += b
    }
    i += '</h3><p class="atb-extension-overlay__feature-subtitle tx--17">';
    b = (g = e.l || (o && o.l), r = {
        hash: {},
        data: k
    }, g ? g.call(o, "Prevent advertisers and corporations from tracking you across the internet.", r) : n.call(o, "l", "Prevent advertisers and corporations from tracking you across the internet.", r));
    if (b || b === 0) {
        i += b
    }
    i += '</p></li></ul><a class="atb-extension-overlay__cta atb-extension-overlay__cta--';
    b = e["if"].call(o, (o && o.newUx), {
        hash: {},
        inverse: q.program(5, p, k),
        fn: q.program(3, a, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += ' btn tx--17" href="https://duckduckgo.com">';
    b = (g = e.l || (o && o.l), r = {
        hash: {},
        data: k
    }, g ? g.call(o, "Start Searching", r) : n.call(o, "l", "Start Searching", r));
    if (b || b === 0) {
        i += b
    }
    i += "</a> </div></div></div>";
    return i
});
this["DDG"]["templates"]["add_to_browser_modal"] = Handlebars.template(function(e, r, p, i, t) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    t = t || {};
    var q = "",
        f, o = p.helperMissing,
        b = "function",
        n = this,
        a = this.escapeExpression;

    function m(A, z) {
        var u = "",
            x, y, v;
        u += '<div class="js-add-to-browser-search"><h1 class="add-to-browser__title">';
        x = (y = p.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "Set as Default Search Engine", v) : o.call(A, "l", "Set as Default Search Engine", v));
        if (x || x === 0) {
            u += x
        }
        u += "</h1>";
        if (y = p.useForSearch) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.useForSearch);
            x = typeof y === b ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        if (x || x === 0) {
            u += x
        }
        u += "</div>";
        return u
    }

    function k(A, z) {
        var u = "",
            x, y, v;
        u += '<div class="';
        x = p["if"].call(A, (A && A.hasToggle), {
            hash: {},
            inverse: n.noop,
            fn: n.program(4, j, z),
            data: z
        });
        if (x || x === 0) {
            u += x
        }
        u += ' js-add-to-browser-homepage"><h1 class="add-to-browser__title">';
        x = (y = p.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "Set as Homepage", v) : o.call(A, "l", "Set as Homepage", v));
        if (x || x === 0) {
            u += x
        }
        u += "</h1>";
        if (y = p.setAsHomepage) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.setAsHomepage);
            x = typeof y === b ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        if (x || x === 0) {
            u += x
        }
        u += "</div>";
        return u
    }

    function j(v, u) {
        return "is-hidden"
    }

    function h(y, x) {
        var u = "",
            v;
        u += '<div class="add-to-browser__footer">';
        v = p["if"].call(y, (y && y.hasToggle), {
            hash: {},
            inverse: n.noop,
            fn: n.program(7, g, x),
            data: x
        });
        if (v || v === 0) {
            u += v
        }
        v = p["if"].call(y, (y && y.moreURL), {
            hash: {},
            inverse: n.noop,
            fn: n.program(9, c, x),
            data: x
        });
        if (v || v === 0) {
            u += v
        }
        u += "</div>";
        return u
    }

    function g(A, z) {
        var u = "",
            x, y, v;
        u += '<a class="add-to-browser__toggle-search is-hidden js-add-to-browser-search-link" href="#">';
        x = (y = p.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "Set as Default Search Engine", v) : o.call(A, "l", "Set as Default Search Engine", v));
        if (x || x === 0) {
            u += x
        }
        u += '</a><a class="add-to-browser__toggle-homepage js-add-to-browser-homepage-link" href="#">';
        x = (y = p.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "Set as Homepage", v) : o.call(A, "l", "Set as Homepage", v));
        if (x || x === 0) {
            u += x
        }
        u += "</a>";
        return u
    }

    function c(A, z) {
        var u = "",
            x, y, v;
        x = p["if"].call(A, (A && A.hasToggle), {
            hash: {},
            inverse: n.noop,
            fn: n.program(10, s, z),
            data: z
        });
        if (x || x === 0) {
            u += x
        }
        u += '<a class="add-to-browser__more" href="';
        if (y = p.moreURL) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.moreURL);
            x = typeof y === b ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        u += a(x) + '" target="_blank">';
        x = (y = p.l || (A && A.l), v = {
            hash: {},
            data: z
        }, y ? y.call(A, "Extensions & More", v) : o.call(A, "l", "Extensions & More", v));
        if (x || x === 0) {
            u += x
        }
        u += "</a>";
        return u
    }

    function s(v, u) {
        return '<span class="sep"></span>'
    }
    q += '<div class="modal  modal--popover  modal--popover--dk"><a href="#" class="modal__overlay  js-modal-close"></a><div class="modal__wrap"><div class="modal__box  modal__box--add-to-browser">';
    f = p["if"].call(r, (r && r.useForSearch), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, t),
        data: t
    });
    if (f || f === 0) {
        q += f
    }
    f = p["if"].call(r, (r && r.setAsHomepage), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, k, t),
        data: t
    });
    if (f || f === 0) {
        q += f
    }
    f = p["if"].call(r, (r && r.hasFooter), {
        hash: {},
        inverse: n.noop,
        fn: n.program(6, h, t),
        data: t
    });
    if (f || f === 0) {
        q += f
    }
    q += '<a href="#" class="modal__close  js-modal-close">X</a></div></div></div>';
    return q
});
this["DDG"]["templates"]["add_to_browser_modal_blurred"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var g = "",
        a, e, f = "function";
    g += '<div class="add-to-browser--blurred">';
    if (e = b.content) {
        a = e.call(j, {
            hash: {},
            data: h
        })
    } else {
        e = (j && j.content);
        a = typeof e === f ? e.call(j, {
            hash: {},
            data: h
        }) : e
    }
    if (a || a === 0) {
        g += a
    }
    g += "</div>";
    return g
});
this["DDG"]["templates"]["add_to_browser_modal_blurred_dark"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var g = "",
        a, e, f = "function";
    g += '<div class="add-to-browser--blurred-dark">';
    if (e = b.content) {
        a = e.call(j, {
            hash: {},
            data: h
        })
    } else {
        e = (j && j.content);
        a = typeof e === f ? e.call(j, {
            hash: {},
            data: h
        }) : e
    }
    if (a || a === 0) {
        g += a
    }
    g += "</div>";
    return g
});
this["DDG"]["templates"]["autocomplete"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<div class="search__autocomplete" style="position: absolute; display: none;"><div class="acp-wrap"></div><div class="acp-footer is-hidden"><span class="acp-footer__instructions">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Select a !bang for a direct site search", k) : i.call(j, "l", "Select a !bang for a direct site search", k));
    if (a || a === 0) {
        f += a
    }
    f += '</span><span class="acp-footer__link"><a class="no-visited" href=\'/bang\'>';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "More about !bangs", k) : i.call(j, "l", "More about !bangs", k));
    if (a || a === 0) {
        f += a
    }
    f += "</a></span></div></div>";
    return f
});
this["DDG"]["templates"]["autocomplete_bang_item"] = Handlebars.template(function(f, o, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var i = "",
        b, g, n = e.helperMissing,
        j = this.escapeExpression,
        h = "function",
        q = this;

    function c(s, r) {
        return "acp--long-phrase"
    }

    function a(v, u) {
        var r = "",
            t, s;
        r += '<div class="acp--bang__img-wrap"><img src="' + j((t = e.imageProxy || (v && v.imageProxy), s = {
            hash: {},
            data: u
        }, t ? t.call(v, (v && v.image), s) : n.call(v, "imageProxy", (v && v.image), s))) + '" class="acp--bang__img" alt="" /></div>';
        return r
    }

    function p(v, u) {
        var r = "",
            s, t;
        r += '<span class="acp--bang__snippet">';
        if (t = e.snippet) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.snippet);
            s = typeof t === h ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        r += j(s) + "</span>";
        return r
    }
    i += '<div class="acp acp--bang ';
    b = e["if"].call(o, (o && o.longPhrase), {
        hash: {},
        inverse: q.noop,
        fn: q.program(1, c, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += '" data-index="';
    if (g = e.i) {
        b = g.call(o, {
            hash: {},
            data: k
        })
    } else {
        g = (o && o.i);
        b = typeof g === h ? g.call(o, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + '">';
    b = e["if"].call(o, (o && o.image), {
        hash: {},
        inverse: q.noop,
        fn: q.program(3, a, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += '<div class="acp--bang__body"><span class="acp--bang__phrase">';
    if (g = e.phrase) {
        b = g.call(o, {
            hash: {},
            data: k
        })
    } else {
        g = (o && o.phrase);
        b = typeof g === h ? g.call(o, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + "</span>";
    b = e["if"].call(o, (o && o.snippet), {
        hash: {},
        inverse: q.noop,
        fn: q.program(5, p, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += "</div></div>";
    return i
});
this["DDG"]["templates"]["autocomplete_bang_layout"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<div class="acp-wrap__column acp-wrap__column--left"></div><div class="acp-wrap__column acp-wrap__column--right"></div>'
});
this["DDG"]["templates"]["autocomplete_text_item"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += '<div class="acp" data-index="';
    if (e = b.i) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.i);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '">';
    if (e = b.phrase) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.phrase);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    if (a || a === 0) {
        g += a
    }
    g += "</div>";
    return g
});
this["DDG"]["templates"]["dropdown"] = Handlebars.template(function(f, n, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var i = "",
        b, g, h = "function",
        j = this.escapeExpression,
        q = this;

    function c(s, r) {
        return "dropdown--disabled"
    }

    function a(s, r) {
        return "is-active"
    }

    function p(t, s) {
        var r;
        return j(((r = ((r = ((r = (t && t.values)), r == null || r === false ? r : r[0])), r == null || r === false ? r : r.name)), typeof r === h ? r.apply(t) : r))
    }

    function o(u, t) {
        var r, s;
        if (s = e.buttonContent) {
            r = s.call(u, {
                hash: {},
                data: t
            })
        } else {
            s = (u && u.buttonContent);
            r = typeof s === h ? s.call(u, {
                hash: {},
                data: t
            }) : s
        }
        return j(r)
    }
    i += '<div class="dropdown ';
    b = e["if"].call(n, (n && n.disabled), {
        hash: {},
        inverse: q.noop,
        fn: q.program(1, c, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += " dropdown--";
    if (g = e.key) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.key);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + " ";
    b = e["if"].call(n, (n && n.isActive), {
        hash: {},
        inverse: q.noop,
        fn: q.program(3, a, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += '"><a href="#" class="dropdown__button js-dropdown-button">';
    b = e["if"].call(n, (n && n.showSelected), {
        hash: {},
        inverse: q.program(7, o, k),
        fn: q.program(5, p, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += "</a></div>";
    return i
});
this["DDG"]["templates"]["dropdown_modal"] = Handlebars.template(function(e, r, p, j, y) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    y = y || {};
    var q = "",
        g, a, c = "function",
        b = this.escapeExpression,
        o = this;

    function n(B, A) {
        return "modal--popover modal--popover--dk"
    }

    function m(D, C) {
        var A = "",
            B;
        A += "modal--popout ";
        B = p["if"].call(D, (D && D.position), {
            hash: {},
            inverse: o.program(6, i, C),
            fn: o.program(4, k, C),
            data: C
        });
        if (B || B === 0) {
            A += B
        }
        return A
    }

    function k(E, D) {
        var A = "",
            B, C;
        A += "modal--popout--";
        if (C = p.position) {
            B = C.call(E, {
                hash: {},
                data: D
            })
        } else {
            C = (E && E.position);
            B = typeof C === c ? C.call(E, {
                hash: {},
                data: D
            }) : C
        }
        A += b(B);
        return A
    }

    function i(B, A) {
        return "modal--popout--bottom"
    }

    function f(B, A) {
        return "has-header"
    }

    function z(E, D) {
        var A = "",
            B, C;
        A += '<div class="modal__header"><span class="modal__header__title">';
        if (C = p.header) {
            B = C.call(E, {
                hash: {},
                data: D
            })
        } else {
            C = (E && E.header);
            B = typeof C === c ? C.call(E, {
                hash: {},
                data: D
            }) : C
        }
        A += b(B) + "</span>";
        B = p["if"].call(E, (E && E.isPopover), {
            hash: {},
            inverse: o.noop,
            fn: o.program(11, x, D),
            data: D
        });
        if (B || B === 0) {
            A += B
        }
        A += "</div>";
        return A
    }

    function x(B, A) {
        return '<a href="#"  class="modal__close  js-modal-close">X</a>'
    }

    function v(F, D, E) {
        var A = "",
            B, C;
        A += '<li><a href="#" data-value="';
        if (C = p.id) {
            B = C.call(F, {
                hash: {},
                data: D
            })
        } else {
            C = (F && F.id);
            B = typeof C === c ? C.call(F, {
                hash: {},
                data: D
            }) : C
        }
        A += b(B) + '" class="modal__list__link ';
        B = p["if"].call(F, (F && F.disabled), {
            hash: {},
            inverse: o.noop,
            fn: o.program(14, u, D),
            data: D
        });
        if (B || B === 0) {
            A += B
        }
        A += " ";
        B = p["if"].call(F, (F && F.selected), {
            hash: {},
            inverse: o.noop,
            fn: o.program(16, t, D),
            data: D
        });
        if (B || B === 0) {
            A += B
        }
        A += " ";
        B = p["if"].call(F, (E && E.showDescriptions), {
            hash: {},
            inverse: o.noop,
            fn: o.program(18, s, D),
            data: D
        });
        if (B || B === 0) {
            A += B
        }
        A += ' js-dropdown-items">';
        if (C = p.name) {
            B = C.call(F, {
                hash: {},
                data: D
            })
        } else {
            C = (F && F.name);
            B = typeof C === c ? C.call(F, {
                hash: {},
                data: D
            }) : C
        }
        A += b(B);
        B = p["if"].call(F, (E && E.showDescriptions), {
            hash: {},
            inverse: o.noop,
            fn: o.program(20, h, D),
            data: D
        });
        if (B || B === 0) {
            A += B
        }
        A += "</a></li>";
        return A
    }

    function u(B, A) {
        return "is-disabled"
    }

    function t(B, A) {
        return "is-selected"
    }

    function s(B, A) {
        return "has-description"
    }

    function h(E, D) {
        var A = "",
            B, C;
        A += '<span class="modal__list__link__description">';
        if (C = p.description) {
            B = C.call(E, {
                hash: {},
                data: D
            })
        } else {
            C = (E && E.description);
            B = typeof C === c ? C.call(E, {
                hash: {},
                data: D
            }) : C
        }
        A += b(B) + "</span>";
        return A
    }
    q += '<div class="modal--dropdown modal--dropdown--';
    if (a = p.key) {
        g = a.call(r, {
            hash: {},
            data: y
        })
    } else {
        a = (r && r.key);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: y
        }) : a
    }
    q += b(g) + " modal ";
    g = p["if"].call(r, (r && r.isPopover), {
        hash: {},
        inverse: o.program(3, m, y),
        fn: o.program(1, n, y),
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    q += " ";
    g = p["if"].call(r, (r && r.header), {
        hash: {},
        inverse: o.noop,
        fn: o.program(8, f, y),
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    q += ' js-dropdown-popout"><div class="modal__overlay  js-modal-close"></div><div class="modal__wrap"><div class="modal__box">';
    g = p["if"].call(r, (r && r.header), {
        hash: {},
        inverse: o.noop,
        fn: o.program(10, z, y),
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    q += '<div class="modal__body"><ol class="modal__list">';
    g = p.each.call(r, (r && r.values), {
        hash: {},
        inverse: o.noop,
        fn: o.programWithDepth(13, v, y, r),
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    q += "</ol></div></div></div></div>";
    return q
});
this["DDG"]["templates"]["homepage_tagline"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<div class="tag-home__wrapper"><div class="tag-home__item">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "frontpage", "The search engine that doesn't track you.", k) : i.call(j, "lp", "frontpage", "The search engine that doesn't track you.", k));
    if (a || a === 0) {
        f += a
    }
    f += '<span class="hide--screen-xs"> ';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "frontpage", "%sLearn More%s.", '<a class="tag-home__link js-tag-item-learn-more" href="/about">', "</a>", k) : i.call(j, "lp", "frontpage", "%sLearn More%s.", '<a class="tag-home__link js-tag-item-learn-more" href="/about">', "</a>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</span></div></div>";
    return f
});
this["DDG"]["templates"]["hp_onboarding_ed_slide1"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="460" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMax" class="onboarding-ed__image--animated"><style>.cloud-bottom{fill:#94d2ba;}.cloud-top{fill:#79c6a8;}.st1{fill:#000}.st2{clip-path:url(#SVGID_2_)}.st3{fill:#e1eff5}.st4{fill:#f4bd5d}.st5{fill:#cadfeb}.st6{clip-path:url(#SVGID_4_)}.st7{fill:#2c2c45}.st8{clip-path:url(#SVGID_6_)}.st9{fill:#974c2c}.st10{fill:#783e1f}.st11{fill:#d6e7f0}.st12{clip-path:url(#SVGID_8_)}.st13{fill:#6b6260;stroke:#000;stroke-miterlimit:10}.st14{opacity:.2;fill:#0f2229;enable-background:new}.st15{clip-path:url(#SVGID_10_)}.st16{fill:#e8f3f7}.st17{fill:#fff}.st18{clip-path:url(#SVGID_12_)}.st19{fill:#041624}.st20{clip-path:url(#SVGID_14_)}.st21{fill:#5c2e1b}.st22{fill:#000}.st23{clip-path:url(#SVGID_16_)}.st24{fill:#d9dde0}.st25{fill:#c3c7c9}.st26{fill:#ffe100}.st27{fill:#006e37}.st28{clip-path:url(#SVGID_18_)}.st29{fill:#d5e000}.st30{fill:#b3c700}.st31{fill:#ebdaca}.st32{clip-path:url(#SVGID_20_)}.st33{fill:#00b35c}.st34{fill:#008f48}.st35{fill:#d8e300}.st36{fill:#c7d100}.st37{fill:#00b35a}.st38{clip-path:url(#SVGID_22_)}.st39{fill:#ffff7a}.st40{fill:#ffffc9}.st41{fill:#ffb700}.st42{clip-path:url(#SVGID_24_)}.st43{clip-path:url(#SVGID_26_)}.st44{fill:#6d7375}.st45{clip-path:url(#SVGID_28_)}.st46{fill:#ffc800}.st47{fill:#383835}.st48{opacity:.29;fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10;enable-background:new}.st49{clip-path:url(#SVGID_30_)}.st50{opacity:.44}.st51{fill:#bdc8cc}.st52{clip-path:url(#SVGID_32_)}.st53{fill:#2a4c63}.st54{fill:#0e1921}.st55{fill:#223b4f}.st56{opacity:.6}.js-onboarding-ed-anim-flame3{fill:#ffe100}</style><g><g><path class="js-onboarding-ed-anim-cloud cloud-top" d="M802.1 122c0-32.1-27.9-58.1-62.2-58.1s-62.2 26-62.2 58.1c0 1.3.1 2.6.2 3.9l-6.7-.2c-47.8 0-86.6 36.2-86.6 80.9s38.8 80.9 86.6 80.9 86.6-36.2 86.6-80.9c0-9.4-1.8-18.8-5.2-27.6 28.3-5.6 49.5-29 49.5-57z"/><path class="js-onboarding-ed-anim-cloud cloud-bottom" d="M604.4 229.4c0-44.7 38.8-80.9 86.6-80.9l6.7.2c-.1-1.3-.2-2.6-.2-3.9 0-32.1 27.9-58.1 62.2-58.1 12.8-.1 25.3 3.7 36 10.7-9.9-19.9-31.4-33.7-56.4-33.7-34.4 0-62.2 26-62.2 58.1 0 1.3.1 2.6.2 3.9l-6.7-.2c-47.8 0-86.6 36.2-86.6 80.9 0 25.1 12.2 47.5 31.4 62.3-7.2-11.9-11-25.4-11-39.3z"/></g><g><path class="js-onboarding-ed-anim-cloud cloud-top" d="M749.9 197.7c0-12.2-10.6-22.2-23.7-22.2s-23.7 9.9-23.7 22.2c0 .5 0 1 .1 1.5H700c-18.2 0-33 13.8-33 30.8s14.8 30.8 33 30.8 33-13.8 33-30.8c0-3.6-.7-7.2-2-10.5 10.8-2.2 18.9-11.1 18.9-21.8z"/><path class="js-onboarding-ed-anim-cloud cloud-bottom" d="M674.6 238.7c0-17 14.8-30.8 33-30.8h2.5c0-.5-.1-1-.1-1.5 0-12.2 10.6-22.2 23.7-22.2 4.9 0 9.6 1.4 13.7 4.1-4.2-8-12.5-12.9-21.5-12.8-13.1 0-23.7 9.9-23.7 22.2 0 .5 0 1 .1 1.5h-2.5c-18.2 0-33 13.8-33 30.8.1 9.4 4.5 18.2 12 23.8-2.8-4.6-4.2-9.8-4.2-15.1z"/></g></g><g><path class="st1" d="M287.3 30.2l16.8 16.1-1.8-14.7-3.8-4.2z"/><defs><path id="SVGID_1_" d="M272.6 229.6s31.3 180.9 52.5 231.4l-34.1 1.5s-37.3-163.8-38.3-169.4c-7.1-41.8 19.9-63.5 19.9-63.5z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st2"><path class="st3" d="M227.7 211.9h111.7v257.7H227.7z"/><path class="st4 js-onboarding-ed-anim-glow" d="M273.6 234.6s9.7 108.3 39.2 223.1l14.4-15-53.6-208.1z"/><path class="st5" d="M260.3 241.5s32.1 205.3 38.8 214.8l-17.9 3.9-39.5-186.3s20-33.2 18.6-32.4z"/></g><defs><path id="SVGID_3_" d="M261 131.9s18.3 3 23.1 14.2c7.7 18.2-4.5 40.5-1.5 53s18.3 26.3 27 31.3c0 0-15.8 17.3-36.5-8.5-24.3-30.3-38.2-49-38.2-49l26.1-41z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><g class="st6"><path class="st1" d="M229.6 114.2H329v147.9h-99.4z"/><path class="st7" d="M252.9 136.6s19.3 6 19.3 33.9 0 58.4 29.6 61.7c7.2.8 14.4-4.8 14.4-4.8s-22.4-94.2-24.7-95.5-38.6-7-38.6-7v11.7z"/></g><path class="st1" d="M219.3 53.6l-35.6 60.6L179 183l62.7-31.3z"/><defs><path id="SVGID_5_" d="M216 169.4l8-32s-6.6-19.1-4-53.3c2.1-26.6 12.7-74.7 54-64s33.3 46.5 29.3 73.9c-2.5 17.1-4.7 24.6-6.1 27.8-.6 1.3-2.1 2.1-3.5 1.7l-9.1-2.4s-6.6 17-23.3 20.3l-6.9 27.8 6.9 22.9-30.7 16-14.6-38.7z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st8"><path class="st9" d="M188.5-21.5h134.7V231H188.5z"/><path class="st4 js-onboarding-ed-anim-glow" d="M310.4 48.4c21.3 17.6-8.6 82.3-8.6 82.3l-13.4-3s-2.7 10.8-12.7 13.8-24.5 1.1-28.9.6c-.1 0-.2-.1-.2-.2s.1-.2.2-.2c3-.5 8.7-.9 10.4-1.7 19.3-8.6 25-24.9 25-24.9l11.4 3.2c10.1-26.4 14-73 14-73l2.8 3.1z"/><path class="st10" d="M316.2 60.6s-64.1-27-74.5 27c-8.2 42.2-.1 54.1-.1 54.1l-20.2 74.6S178 144 178 145.1 207.5 37 207.5 37l12-14.6 64.6-16.8 32.1 55z"/><path class="st4" d="M249.5 179.7l7.6-1.7 8.3-36.5H258z"/></g><path class="st11" d="M125.6 396.6c3.7 0 91.2 17.7 91.2 17.7l50-209.4-10.9-40.9-3 4.2-12.9 18.4-22.9-34.8-91.5 244.8z"/><defs><path id="SVGID_7_" d="M172.9 379c15.2 4.9 30.7 8.5 46.5 11l-17.5 121.8-77.5 9.5L172.9 379z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><g class="st12"><path class="st13" d="M116.9 351.4h121.6v187.7H116.9z"/><path d="M165.9 374.5l-5 15c11 3.4 22.2 6.2 33.5 8.5 10.6 1.8 21.4 2.7 32.2 2.5l1.6-15s-54.2-6.4-62.3-11zM175.2 443.8l-21.8 68.5 7.4 2.5z"/></g><path class="st14" d="M255.8 164.1s-85.4 322.4-84.7 322.4 36-15.1 36-15.1l54.9-299-6.2-8.3z"/><defs><path id="SVGID_9_" d="M181.3 484.2s59-232.7 73.4-278.2c5.3-16.9 1.6-37.3 1.6-37.3l.5-8.7c8.4 9.1 24.7 44.9 20.6 65.4-5.3 26.7-24.5 77.2-31.7 126.7-4.7 32.2-12.9 97.1-8.9 121.7l-55.5 10.4z"/></defs><clipPath id="SVGID_10_"><use xlink:href="#SVGID_9_" overflow="visible"/></clipPath><g class="st15"><path class="st16" d="M170.3 129.7h125.4v371.6H170.3z"/><path class="st4 js-onboarding-ed-anim-glow" d="M276.6 203.5s-32.9 91.6-43.2 148.6-6.9 139.7-6.9 139.7l23.5-5.1 43.5-257.1-16.9-26.1z"/><path class="st5" d="M248.5 169.3s19.8 8.4 28.1 34.2c0 0-.4-40.4-19.8-51.6l-8.3 17.4z"/></g><path class="st17" d="M226.1 310s29.1-85.5 42.3-110.3l-10.7-12.1 9.3-2.1-10.3-25.5-30.6 150z"/><defs><path id="SVGID_11_" d="M299.1 28.2s-5.9 14.3-19.4 22.2-53.6 19.9-59 19.9c0 0-7.5 42.8-27 50.8 0 0 6.4 30.6-14.5 51.5L168.7 183s-10.5-27.5 0-62 23.5-32 23.5-32 7.3-42.2 20.5-55.5 26-19.5 39-19.5 35.4 2.2 47.4 14.2z"/></defs><clipPath id="SVGID_12_"><use xlink:href="#SVGID_11_" overflow="visible"/></clipPath><g class="st18"><path class="st7" d="M130.5-5.6h179.1v204.1H130.5z"/><path class="st19" d="M295.7 22.9s-47.7-7.3-66 20.6S219 79.8 219 79.8s-16.3 35.7-38.8 46.7c7.3 20.8 1.7 56.5 1.7 56.5l-30.3 22.1L144 75.6l64.8-77.8 82.6 14.3 4.3 10.8z"/></g><defs><path id="SVGID_13_" d="M222.7 141.5s-6.1 1-12 8.7c-19.2 3.7-47.2 22-63 64.5-21.3 57.3-97 288.7-97 288.7l98-14s65.7-234.7 80.4-264-2.5-50.9-5.2-63.1-1.2-20.8-1.2-20.8z"/></defs><clipPath id="SVGID_14_"><use xlink:href="#SVGID_13_" overflow="visible"/></clipPath><g class="st20"><path class="st16" d="M39.4 115.1H249v395.4H39.4z"/><path class="st5" d="M210.3 145.3s-11 28.9-12.3 39.3c-.1 1 .6 1.9 1.6 2h.3c3.8-.2 11.6-.5 13.7 0L199 198.3s19.6 29 7.1 88.7 9.5-10.7 9.5-10.7l22.1-72.9-20.1-63.7-7.3 5.6z"/><path class="st17" d="M212.2 141s-10.3 35.8-10.3 43.1c0 0 15.9-1.1 17.7.7l-15 12.5s15.9 26 3.4 85.7 11.6-9.5 11.6-9.5l22.1-72.9-20.1-63.6-9.4 4z"/><path class="st5" d="M234.9 130.8c-1.2 1.2-4.8 9.7-12.7 17.6-7.9.6-11.9 5.5-14.7 9.8-9.3 5.6-21.3 18.8-26.2 29.1-55.7 117.2-89.2 324.9-77.6 322.7l-90.5-1.6 120.4-334.8 101.3-42.8z"/><path class="st5" d="M96.7 398.4c4.1 5.1 16.8 16.6 46.8 13.7.2 0 .3.1.3.2 0 .2-.1.3-.2.3-9.1 2.8-37.3 9.2-47.4-14 0-.2 0-.3.2-.4.1.1.2.1.3.2z"/></g><path class="st9" d="M231.6 70s-4.7-10.4-10.8-6.9-4.6 12.3-4.6 14 1.5 8.2 4.1 11.2c.5.6 1.4.7 2 .3.3-.2.5-.6.5-1 1.5-8 4.1-14.3 8.8-17.6z"/><ellipse transform="rotate(-75.599 185.293 327.591)" class="st5" cx="185.3" cy="327.6" rx="6.1" ry="4.2"/><path class="st21" d="M253.5 107.4l.4.7.9 1.7 1.4 2.3.9 1.2.9 1.2 1 1.2 1 1.1 1 1 1 .8.8.7.7.5.6.5h.1c.3.3.3.7 0 1-.2.2-.4.3-.6.2l-.8-.2c-.7-.2-1.4-.5-2-.8l-1.3-.7-1.3-.9-1.3-1.2-1.2-1.3-1.1-1.4-.9-1.5-.6-1.5c-.2-.5-.3-.9-.4-1.4-.2-.7-.3-1.4-.4-2.1v-.8c-.2-.3-.1-.8.2-1 .3-.2.8-.1 1 .2.1.1.1.3.1.4l-.1.1z"/><path d="M275.5 58.3c.5-.5 1.2-.9 1.8-1.2 1.4-.7 3-1.1 4.6-1.2h2.6l1.2.2 1 .3 1.4.7.5.3c.2.1.2.2.2.4 0 0 0 .1-.1.1l-.4.2h-.6l-.6-.2-.8-.2h-5.5l-1.1.2-2 .5-1.9.6c-.2.1-.3 0-.4-.2-.1-.1-.1-.3 0-.4 0-.1.1-.1.1-.1z"/><ellipse transform="rotate(-75.599 170.181 393.006)" class="st5" cx="170.2" cy="393" rx="6.1" ry="4.2"/><path class="js-onboarding-ed-anim-scientist-eye" d="M276.2 79.8c.2-.6.4-1.1.6-1.7 1-3.3.7-6.4-.7-6.8s-3.5 1.9-4.5 5.2c-.3.8-.5 1.7-.6 2.6 1.8 0 3.5.2 5.2.7zM298.6 63l1.3.2c1 .3 1.9.7 2.7 1.3l1.2 1 .9 1.1.5.9v.3c.1.2 0 .3-.2.4h-.3l-.3-.2-.7-.6-2.1-1.7-2.3-1.5-1.1-.6c-.1-.1-.2-.3-.1-.4l.5-.2zM299.4 88.2c.3-.6.6-1.2.8-1.9.9-2.9.8-5.5-.1-5.8s-2.5 1.8-3.4 4.7l-.3 1c1.1.5 2.1 1.2 3 2z"/><path class="st22" d="M299.4 28.2c0-.1 2.9 26.9 8.6 34.3 0-.1 5-20.7-8.6-34.3z"/><ellipse class="st10" cx="226.7" cy="76.3" rx="4" ry="5.1"/><g><defs><path id="SVGID_15_" d="M165.3 203.7c11.3-12.7 24.3-10.5 35.2-4.1s53.5 46.2 187 46.3l-5 36.5s-57.3-4-107.2-10.2S181 242.4 170 232.7s-12.7-20.1-4.7-29z"/></defs><clipPath id="SVGID_16_"><use xlink:href="#SVGID_15_" overflow="visible"/></clipPath><g class="st23"><path class="st16" d="M349.6 364.1L130.9 237l71.4-121.9 218.7 127z"/><path class="st4 js-onboarding-ed-anim-glow" d="M384.2 270.8c2.9-5.3-65.3 18-180.5-19.1l115.4 33.2 67.5-3.3-2.4-10.8z"/><path class="st5" d="M163.5 229.6s5.8-15.2 12.1-19.8c6.1-4.5 12.6-6 22.2-1.7s42.3 33.7 131.7 41.2 25.8-13.6 25.8-13.6l-186.7-61.6s-35 49.7-33.8 50.7 28.7 4.8 28.7 4.8z"/></g></g><path class="st5" d="M202.9 157.2s-19.2 27.1-6.8 40.2c0 0-25.7-2.5-30.9 6.6.1 0 16.2-36.8 37.7-46.8z"/></g><g id="Table"><path class="st24" d="M-42.3 481.7l941.7-145.3 392.7 145.3z"/><path class="st25" d="M870.1 402.8s26.1 8.8 63.4-.3 0-17.7 0-17.7l-56.3 2.7-7.1 15.3z"/><path class="st25 js-onboarding-ed-anim-shadow" d="M903.3 399.1c-.1 2.9-1.3 5.7-3.4 7.8-10.4 11.5-43 19.9-81.6 19.9-47 0-85.1-12.4-85.1-27.8s38.1-27.8 85.1-27.8 85 12.6 85 27.9zM342.6 459.3c3.3-3.7 5.1-7.6 5.1-11.7 0-8.4-7.6-16.1-20.7-22.7L99.7 460c8.6 8.9 26.1 16.5 49.1 21.7h144c23.7-5.3 41.5-13.2 49.8-22.4z"/></g><g id="Creature"><path class="st26 js-onboarding-ed-anim-flame js-onboarding-ed-anim-flame1" d="M604.5 181.4s6.5 7.7 1.5 19-14.5 21.9-8.2 31.3-16.7-7.6-1.7-32.1c7.3-12.1 7.5-12.8 8.4-18.2z"/><path class="st27" d="M876.9 400.3s-14.1.5-19.4 10.4 3.9 6.2 5.8 4.1c0 0-6.3 12.6 0 10.7s13.7-10.7 13.5-11.2-4.4 11.2.7 8.6 9.3-13.5 9.3-13.5-1.8 8.1 2.1 6.9 7.6-11.3 2.9-15.3-11-2.7-14.9-.7z"/><defs><path id="SVGID_17_" d="M715.4 242.7s40.6 26.3 34.6 63-15 45.5-24.9 55.4c0 0 51.3 61.6 106.2 30s36.7-98.8 36.7-98.8-28.7-44-47.3-49.7-78-20.9-105.3.1z"/></defs><clipPath id="SVGID_18_"><use xlink:href="#SVGID_17_" overflow="visible"/></clipPath><g class="st28"><path class="st29 js-onboarding-ed-anim-monster-mouth" d="M688.7 191.5h202.2v233.2H688.7z"/><path class="st30" d="M731.6 285.1s1.4-22 49.6-19.1 90.7 55.6 90.7 55.6l14.9-145.9s-196.1 13.8-193.5 16.4 38.3 93 38.3 93zM733.1 331s18.6 29.6 58 26.5 70.1-26 70.1-26-17.1 126.2-17.1 122.2-147.6-38.5-144.4-41.7 33.4-81 33.4-81z"/></g><path class="st27" d="M896 369.7s26.9 12.4 42.9 3.2 10.5-31.9-4.9-47.2c0 0 23.4 12.4 23.4 34.4s-20 42.2-65.4 30.9l4-21.3z"/><circle class="st17 js-onboarding-ed-anim-monster-eye onboarding-ed-anim-monster-eye--left" cx="729.5" cy="218.6" r="15.6"/><circle class="st31 js-onboarding-ed-anim-monster-eye onboarding-ed-anim-monster-eye--left" cx="735.5" cy="220.3" r="12.5"/><path class="st26 js-onboarding-ed-anim-monster-eye onboarding-ed-anim-monster-eye--left" d="M719.3 218.6c0-7.6 5.4-14.1 12.9-15.4l-2.7-.2c-8.6 0-15.6 7-15.6 15.6s7 15.6 15.6 15.6l2.7-.2c-7.5-1.3-12.9-7.8-12.9-15.4z"/><path class="st17" d="M705 254.3s2.4 18.3 10.3 25.4c0 0-.6-24.1 7.1-31.7 0 0 .5 16.8 3.9 23.6 0 0 2.9-22.3 8.3-27.8 0 0 2.3 21.8 5.8 25.8 0 0 .6-24.3 8-28.6 0 0-.9 15.3 1.6 22.4 0 0 5.3-19.4 12.6-23.6 0 0 0 15 1.4 20 0 0 1.3-14 11.2-19.7 0 0-1.4 14.7 0 19.7 0 0 4.6-13 13.3-18-.8 6-1.3 12-1.4 18 0 0 6.2-11.6 12.7-15.4 0 0-3.5 10.8-3.5 19 0 0 5.2-10.4 16.4-13.9 0 0-5.8 12.5-4.5 18.6 0 0 6.7-10.6 13.7-12.9.4-.1 1.5 1.6 2 1.5 7.4-1.5 0-8.8 0-8.8l-60.6-16-57.4 15.3-.9 7.1z"/><ellipse class="js-onboarding-ed-anim-monster-eye onboarding-ed-anim-monster-eye--left" cx="719.8" cy="212.2" rx="4.2" ry="3.4"/><path class="st17" d="M731.6 356.6s4.3-7.9 18.3-12.3c0 0-9.9 14.6-6.6 23.7 2.3-4.8 5.4-9.2 9.2-13 0 0-2 13.8 0 19.9 0 0 3.1-10.8 8.8-16.5 0 0-2.3 15.1 2.4 21.2 0 0 .5-7.1 6.4-16-1 6.5 1.2 12.9 3.9 19.4 0 0-1.5-9.6 4.2-15.3 0 0 .9 11.6 4.6 15.3 0 0 .7-12.2 4.8-16.3-1.3 6 3.3 16.6 5.6 16.3-.3-6.4-.6-10.5 1.3-17.6 0 0 3.6 13.7 8.7 16.7 0 0-4.5-9.7-1.5-17.1 3.5 7.3 6.9 12.1 11.4 14.9l-34.7 16.9-45.7-31-1.1-9.2z"/><defs><path id="SVGID_19_" d="M694.6 264.3s-4.8-32.2 37.3-44.7c0 0 8.7-11.8 17.3-11.8 5-.1 9.8 2.3 12.7 6.4 0 0 5.3-6.4 16-6.4s13.3 10.5 13.3 10.5 61.3.7 95.3 52.7 30 70.7 24 92.7-23.1 56.8-82.3 51.7c-46.3-4-87.8-19-109.7-62.3-2.7-5.3-.7-11.7 3.3-9.3s24.9 44.2 70 41.4c32.4-2 46.7-30.7 51.4-58.1 2.2-13.1 10.2-79-66.2-86.5-50.6-5.1-78.1 19.4-82.4 23.7z"/></defs><clipPath id="SVGID_20_"><use xlink:href="#SVGID_19_" overflow="visible"/></clipPath><g class="st32"><path class="st33" d="M664.2 180.7H940v254.7H664.2z"/><path class="st34" d="M791.2 218.3s95.6 22.1 95.6 96c0 68.3-37.3 91.8-70.1 90.5-59.5-2.3-102.8-49.7-102.8-49.7l55.3 60.6 104.1 19.5 55.2-70.1-3.8-169.9-133.5 23.1z"/><path class="st35" d="M729.5 217.3s-30.4 16.6-23.4 44.2l-19 9.4s-5.1-40.7 42.4-53.6z"/><path class="st36" d="M714.6 346.3s73.1 87.3 117.1 13.6c0 0-105-23.3-107-23.3s-10.1 9.7-10.1 9.7zM733 221.8s10-22.9 29-8.6l-.9 4.5c4.3-5 10-8.4 16.4-9.9l24.9-5.9-33.9-12.6-16.3 5.3s-27.5 20.9-26.1 21.7 6.9 5.5 6.9 5.5z"/><ellipse transform="rotate(-69.102 854.938 235.653)" class="st34" cx="855" cy="235.6" rx="20.7" ry="19.3"/><path class="st35" d="M709.5 236.7c.6-.6 9.9-13 23.4-14.9 0 0-3.8-4.2-4.4-4.2s-20.6 7.8-20.6 9.6 1.6 9.5 1.6 9.5z"/><path class="st34" d="M773.2 206.6c.3 0 13.5 1.8 12.4 10.7l5.6 1.1 2.3-11.3-20.3-.5zM743.5 206.4c.3 0 14 2.5 14.6 11l3 .4 2.4-11-20-.4z"/><path class="st36" d="M688 263.3s28.5-23.9 59.6-26.8 59.7 1.7 78 24.3c0 0-137.3 18.2-137.3 16.5s-.3-14-.3-14z"/></g><ellipse class="st31 js-onboarding-ed-monster-eye onboarding-ed-anim-monster-eye--right" cx="845" cy="231.6" rx="20.7" ry="19.3"/><ellipse class="st17 js-onboarding-ed-anim-monster-eye onboarding-ed-anim-monster-eye--right" cx="840.5" cy="231" rx="16.1" ry="15"/><ellipse cx="850.3" cy="229.1" rx="4.2" ry="4.2" class="js-onboarding-ed-anim-monster-eye onboarding-ed-anim-monster-eye--right"/><path class="st37" d="M871.9 270.4s22.6-12.4 28.4 4.5-6.6 20.2-19.7 18.2c0 0 1.9-6.8-8.7-22.7z"/><path class="st34" d="M900.3 274.9c-3.7-10.8-14.2-9.6-21.3-7.4 6.8-1.6 15.8-1.6 19 7.9s-.1 15.7-6 17.8c7.6-1.5 12.3-6.7 8.3-18.3z"/><path class="st34" d="M876.1 275.5s12.1-6.6 15.2 2.4-2.2 9.7-9.6 9.7c-1.5-4.2-3.3-8.3-5.6-12.1z"/><defs><path id="SVGID_21_" d="M843.6 324.4s-96.8-2.7-137.6 24c-57.4 37.6-119.6 7.1-114.8-43.4s26.6-67.9 18.6-88.7c-10.9-28.3 15-51.9 30.2-61.2 0 0-11.4 29.9-5.5 47.7 13.3 39.9 5.6 22.7 5.6 41.8s5.3 43.4 10.7 2.8 12-49.3 16.7-55.3c7.9-10.1 17.7-23.4 5.1-41.1 0 0 33.5 11.7 8.6 58.8-18.1 34.2 3.2 56.1 15.4 63.1s39.1-8.6 51.8-1.3 36.6 29.5 49.6 31.9c15.1 2.8 38.8 5.6 46.3 1.3.8 6.5.6 13.1-.7 19.6z"/></defs><clipPath id="SVGID_22_"><use xlink:href="#SVGID_21_" overflow="visible"/></clipPath><g class="st38"><path class="st26" d="M530.7 110.3H851v288.8H530.7z"/><path class="st39" d="M790.8 306.2c-15.2-2.2-20.8-9.3-41.9-17.6s-39 1.6-48.3.7c-22.1-2.2-31.3-24.8-36.7-37.4 0 0-13.4 33.2 12.4 57.1-12.9-22.2-23.9-45.4-32.8-69.5 0 0-51.3 92.5 14.7 98.3 31.5 2.8 58.3-8.3 81.7-13.5 51.8-11.5 111.7-.5 112.6-1.4 11.3-11.3.3-14.3-1.6-14.3s-44.8-.1-60.1-2.4z"/><path class="st40" d="M851.3 308s-115.9 3.7-157.1-6.2c5.1 5 179.9 32.1 157.3 16 .1 0 7.8 11.6-.2-9.8z"/><path class="st40" d="M822.1 309.9c-1-2.8-47.6.7-146.7 8.2 1.8-1.6 57.1 2.1 155.5 1 0 0-7-6.3-8.8-9.2z"/><path class="st41 js-onboarding-ed-anim-flame" d="M701.6 140.3s-12.6 86.2-22.7 113.9c0 0-18.7-12.1 3.5-74.5 0 0-28.5 27.3-27.5 81.4 0 0-29.4-2.3-33.5-41.8 0 0-15.8 41-15.8 61.1s8.1 84.7 88.8 74.6c-15.4 23.8-140.8 18.5-140.8 18.5l18.3-247 129.7 13.8z"/></g><defs><path id="SVGID_23_" d="M743.6 399.8c1.1-10.6 6.6-16.3 10-18.9-2.4-2.4-6.2-2.9-8.3-5.6-4.9 3.9-10.4 10.1-11.7 22.6-4.2-.5-10-.2-15.1 3.3-10.4 7.1 2.7 6.2 5.4 5.3 0 0-11.4 8.3-4.9 9.5s13.9-3.9 14-4.4-5.6 10.5.1 10.5 11-10.4 11-10.4.3 5.1 3.2 5.6 6.1-4.8 4.5-10.1-4.8-6.4-8.2-7.4z"/></defs><clipPath id="SVGID_24_"><use xlink:href="#SVGID_23_" overflow="visible"/></clipPath><g class="st42"><path class="st33" d="M706 362.1h55.1v67.4H706z"/><path class="st34" d="M754.7 380.3s-12.7 5.9-14 14.9 3 6.2 5.7 8.8 4.5 7 2.7 10.2-3.4 2.2-3.4 2.2-1.1 4.3 4.4 3.5 11.7-18.4 11.7-18.4l-7.1-21.2z"/><path class="st34" d="M742.7 408.3s-2.8 10.5-9.4 12.7c-1.5.5-3.3-1.9-3.3-1.9s-.2 3.8 1 4.3c3.4 1.3 9.4-.4 9.4-.4s6.6-7.5 2.3-14.7zM734.8 408.7s-7.3 5.5-13.3 5.7c-4.5.1-3.7-2.4-3.7-2.4s-4.5 4.8 1.2 5.2 12.7-1.8 15.8-8.5zM717.2 401.7s-2.5 3.2 1.3 3.9c2.1.4 4.2.5 6.3.4-2.2 1.3-4.5 2.2-7 2.8-4.5 1.2-4.9-5.5-4.9-5.5l4.3-1.6z"/></g><g><defs><path id="SVGID_25_" d="M842.5 428.6c-2.4-3.7-6.4-5-10.1-5.1 1-15.9 6.4-22.7 6.6-23 1.7-2.2 1.4-5.3-.8-7-2-1.6-4.9-1.4-6.7.4-.9 1-8 9.5-9.1 29.2-4.7-.1-11.1.7-15.6 5.3-8.8 9 5.3 7 7.7 5.6 0 0-9.6 10.3-3 10.2s12.9-6.5 12.9-7-3.4 11.4 2.1 10.3 8.8-12.3 8.8-12.3.1 4.9 4.2 4.9 6.4-6.3 3-11.5z"/></defs><clipPath id="SVGID_26_"><use xlink:href="#SVGID_25_" overflow="visible"/></clipPath><g class="st43"><path class="st33" d="M797.5 379.6h63.3v75.8h-63.3z"/><path class="st34" d="M841.7 395s-11 6.9-12.7 27.1c-.2 2.4.7 2.9 2.6 3.6 4.6 1.5 9.1 4.2 9.1 9.6s-3.1 7.2-3.1 7.2 6.5 4.2 8.4-1.5.8-17.6-8.2-18.9c0-1.1 6.5-23 5.7-23s-1.8-4.1-1.8-4.1z"/><path class="st34" d="M832.5 430.5s1.3 5.5-6.8 16.8c-3.2 4.5 8.2-2.1 8.2-2.1s4.5-8.8-1.4-14.7zM825.5 433.7s-5.6 6.8-11.3 8.6c-2.4.9-5 .7-7.3-.3 0 0 .3 5.5 5.9 4.3s11.6-5.3 12.7-12.6zM805.5 428.5s-1.7 5.7 3.9 4.5 7.9-2.5 7.9-2.5-1.6 3.1-7.1 7.3-9.7-4.8-9.7-4.8l5-4.5z"/></g></g><path class="st41 js-onboarding-ed-anim-flame js-onboarding-ed-anim-flame2" d="M653.1 162.7s-24.5 10.6-20.5 44.8c3.8 32.1-10.7 30-10.7 30s19.6 8 31.7-8c16-21.3-15.1-44.5-.5-66.8z"/><path class="st26 js-onboarding-ed-anim-monster-eye onboarding-ed-anim-monster-eye--right" d="M842.8 250.5c-10-3.8-14.7-15.5-10.7-26.2 2.6-7.1 8.8-12.2 16.3-13.4-8.9-1.4-18.1 4.1-21.7 13.4s.7 22.4 10.7 26.2c2.9 1.1 6 1.4 9.1 1-1.3-.2-2.5-.5-3.7-1z"/><ellipse class="st34" cx="747.3" cy="217" rx="4.3" ry="2.3"/><ellipse transform="rotate(-79.199 775.38 216.221)" class="st34" cx="775.4" cy="216.2" rx="2.3" ry="4.3"/><path d="M768.2 216.9c.5-.8 1.2-1.5 2-2l1.2-.7 1.4-.6 1.6-.3h1.8c1.2.1 2.4.6 3.4 1.3.8.6 1.5 1.4 2 2.3.3.6.6 1.2.7 1.9.1.3.1.5.1.8 0 .2-.2.4-.4.4h-.3l-.5-.5-1.3-1.2c-1.1-1-2.5-1.8-4-2.1h-2.6l-2.3.5-1.7.6-.6.3c-.2.1-.4 0-.5-.2-.1-.1-.1-.4 0-.5zM739.7 218l.3-.7c.3-.6.7-1.1 1.1-1.6l.9-.9 1.2-.9c1-.6 2.1-.9 3.2-1h1.7l1.6.4c.9.3 1.8.8 2.5 1.4.5.5 1 1 1.3 1.6l.2.5v.2c.1.2 0 .4-.2.5h-.5l-.5-.2-1.6-.6-1.9-.7-1.1-.2h-1.2c-.8 0-1.6.1-2.3.4l-2 1-1.4 1-.5.4c-.2.1-.4 0-.5-.1 0-.1-.1-.2-.1-.3l-.2-.2z"/></g><g id="Documents"><path class="st41 js-onboarding-ed-anim-flame js-onboarding-ed-anim-flame3" d="M634.2 222.6s-19.4-5.5-17.3-32.1c1.7-21.6-8.4-21.8-8.4-21.8s12.8-3.5 21.5 8.8c11.6 16.4-9.6 39.8 4.2 45.1z"/><path class="st44" d="M453.7 247.8c-.5-3.7 99.8-26.8 169.5-37.7v13s-134.7 26.1-170.1 33.6l.6-8.9z"/><defs><path id="SVGID_27_" d="M578 214.3l-10.2 113.2s13.6 1.6 19.2-15.6c3.2-9.9 12.3-7 17.5-7.7s8-7.4 10.7-6.8c5.7 1.4 7.7 13.8 10.7 15.5s7.5 1.8 10.4-1.1 3.1-8.8 6.8-9.6 8 .9 8.4 3.7 1.2 6.8 4.3 7.2c10.4 1.1 20.3-3.8 20.3-3.8l5.7-95H578z"/></defs><clipPath id="SVGID_28_"><use xlink:href="#SVGID_27_" overflow="visible"/></clipPath><g class="st45"><path class="st17" d="M532.3 183.3H713v161H532.3z"/><path class="st46" d="M572.4 309c10-3.1 5.5-18.5 12.7-18.5s6.5 5.4 15.8 0 16.9-11.5 21.9-6.4 2.5 19.5 6.9 16.9 7.8-14 13.7-14 9.4 11.9 15.9 11.9 19.5-19.1 19.5-19.1L682 322l-133.6 11 3.5-36.5s16.7 13.6 20.5 12.5z"/><path class="st47" d="M572.4 315.6c10-3.1 5.5-18.5 12.7-18.5s6.5 5.4 15.8 0 16.9-11.5 21.9-6.4 2.5 19.5 6.9 16.9 7.8-14 13.7-14 9.4 11.9 15.9 11.9 19.5-19.1 19.5-19.1l3.2 42.2-133.7 11 3.5-36.5s16.8 13.6 20.6 12.5z"/></g><path class="st48" d="M635.7 235.2l37 .5M634.5 247.2l37 .5M633.3 259.3l37 .5M632.1 271.1l37 .5"/><defs><path id="SVGID_29_" d="M586.9 231.2l-3.6 40.5 41.6 1 3-41.5z"/></defs><clipPath id="SVGID_30_"><use xlink:href="#SVGID_29_" overflow="visible"/></clipPath><g class="st49"><path class="st24" d="M574.9 219.8h66v77.7h-66z"/><g class="st50"><ellipse cx="603.6" cy="271.8" rx="16.7" ry="14.6"/><ellipse transform="matrix(.07846 -.9969 .9969 .07846 311.32 830.923)" cx="605.1" cy="247.1" rx="12.5" ry="8.7"/></g></g><path class="st51" d="M450.7 247.6l4.2 9.3s90.7-12 171.3-32.9l-1-11.6c-48.6 11.7-109 23.5-174.5 35.2z"/><path class="st26 js-onboarding-ed-anim-flame js-onboarding-ed-anim-flame4" d="M638.5 176.5s-6.5 7.7-1.5 19 14.5 21.9 8.2 31.3 16.7-7.6 1.7-32.1c-7.3-12-7.5-12.7-8.4-18.2z"/><g><defs><path id="SVGID_31_" d="M377.7 242.7s-8.9 11-7.8 28.2 16.4 36.3 16.4 36.3l40.2-20.8c6.6-3.4 14.1-4.4 21.3-3l9.4 1.6c7.8 1.3 16.6.5 19.9-1.2s7.7-3.2 11.4-6c4.2-3.2 7.3-7.7 8.7-12.8l5.2-18.3c.5-1.6-.4-3.3-2-3.8-.6-.2-1.3-.2-1.9.1l-10 3.3c-5.1 2.4-16.3 1.6-18.8.8l-7.7-2.8 14.4-4-16.6-2.6c-3.6-.6-7.3-2.1-12.6 0s-13.4 4.2-13.4 4.2l-56.1.8z"/></defs><clipPath id="SVGID_32_"><use xlink:href="#SVGID_31_" overflow="visible"/></clipPath><g class="st52"><path transform="rotate(-4.8 431.239 263.43)" class="st53" d="M337.6 198.4h187.3v130H337.6z"/><path class="st54" d="M480.8 240.9s-32.4 5.3-43.4 2.5-61.3 6.8-86.2 28.3l52.2-72 77.4 41.2z"/><path class="st4 js-onboarding-ed-anim-glow" d="M496 240c4.2 20.7-7.8 41.2-8.3 40.4s29.2-.1 29-2.6 7-42 7-42L496 240zM364.6 304.6s59-25.4 75.7-21.9.3 8.6.3 8.6l-58.4 30-17.6-16.7z"/><path class="st55" d="M476.7 246.7l-7.4 50.4s-29-9.5-29-10.2 1.8-20.4 2.8-31.2c.4-4.3 2.8-8.1 6.5-10.3h.1c2.6-1.2 5.5-1.8 8.4-1.8l18.6 3.1z"/><path d="M466.9 256.9h6c2 0 4.1-.1 6.1-.3l1.7-.2 1.7-.3 1.7-.4 1.7-.5 3.4-1.2 3.2-1.4 2.9-1.4 2.5-1.5c1.5-.9 2.7-1.8 3.6-2.5l.9-.7.3-.3c.5-.3 1.1-.2 1.4.3.3.4.2.9-.1 1.2l-.4.3-1 .8c-1.2 1-2.4 1.9-3.7 2.7l-2.6 1.6-3 1.5-3.3 1.4-3.5 1.2-1.8.5-1.8.4-1.8.3-1.8.2-3.4.2h-3c-1.5-.1-3-.4-4.5-.8l-1.6-.6c-.2 0-.3-.2-.3-.3 0-.1 0-.1.1-.2s.3-.1.4 0zM460.9 265.8l1.9.2 2.1.2 2.7.2h6.9l3.8-.3 3.9-.7 3.8-1.1 3.6-1.4c2.1-.9 4.1-1.9 6.1-3.1 1.4-.8 2.7-1.7 4-2.7l1-.8.3-.3c.5-.3 1.1-.2 1.4.3.3.4.2.9-.1 1.2l-.4.4-1.1.9c-1.3 1-2.7 2-4.1 2.9-2 1.3-4.1 2.4-6.3 3.3l-3.7 1.5-4 1.2c-1.4.3-2.7.5-4.1.6l-4 .2h-3.7l-3.3-.4-2.8-.5-2.1-.5-1.8-.6c-.2-.1-.3-.3-.2-.5s.3-.3.5-.2h-.3zM465.1 275.5h6.7c2.3-.1 4.6-.3 6.8-.7l3.7-.9 1.9-.6 1.8-.7 1.8-.8 1.8-.9 3.4-1.9 3-2 2.6-2c1.3-1 2.5-2.1 3.6-3.2l.9-1 .3-.3c.4-.4 1-.3 1.4.1.3.3.3.8.1 1.2l-.3.4-1 1.1c-1.2 1.2-2.4 2.3-3.7 3.4l-2.7 2.1-3.1 2.1-3.5 2-3.8 1.8-2 .8-2 .6-4 .9c-2.4.4-4.8.5-7.2.4l-2.8-.3-2.2-.4-1.8-.6c-.2 0-.3-.2-.2-.4 0-.2.2-.3.3-.3.1 0 .2.1.2.1z" class="st56"/></g></g></g></svg>'
});
this["DDG"]["templates"]["hp_onboarding_ed_slide2"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="460" viewBox="0 0 1200 460" preserveAspectRatio="xMidYMax" class="onboarding-ed__image--animated"><style>.st0,.st1{fill: #ec9b33;enable-background:new}.st1{fill:#f7b561;}.st2{fill:#f2e6ce}.st3{fill:#f2e4ce}.st4{fill:#e3dac0}.st5{clip-path:url(#SVGID_2_)}.st6{fill:#f7efe4}.st7{fill:#fff}.st8{fill:#c2aa8e;enable-background:new}.st9{clip-path:url(#SVGID_4_)}.st10{fill:#ffdeb7}.st11{fill:#efc593}.st12{fill:#051a2b}.st13{fill:#3a4da1}.st14{clip-path:url(#SVGID_6_)}.st15{fill:#871299}.st16{fill:#192659}.st17{clip-path:url(#SVGID_8_)}.st18{fill:#2a3879}.st19{fill:#192559}.st20{clip-path:url(#SVGID_10_)}.st21{clip-path:url(#SVGID_12_)}.st22{fill:#e5bd8d}.st23{opacity:.7}.st24{fill:#381d0f}.st25{fill:#422212}.st26{fill:#f7d1a4}.st27{clip-path:url(#SVGID_14_)}.st28{fill:#e4bc8c}.st29{clip-path:url(#SVGID_16_)}.st30{clip-path:url(#SVGID_18_)}.st31{fill:#041624}.st32{clip-path:url(#SVGID_20_)}.st33{fill:#ffe956}.st34{fill:#f7dc21}.st35{fill:#e2c810}.st36{fill:#85aac8}.st37{fill:#ffdeb7}.st38{fill:#f7d2a5}.st39{opacity:.1}</style><g class="js-onboarding-ed-anim-ghost-left-hand-shaking"><path class="st0" d="M51.7 236.8L1228 171v107.4z"/><path class="st1" d="M102.6 257.2l1117 39V391zM111 223L1231.2 53.9v94.7z"/></g><path class="st2 js-onboarding-ed-anim-ghost-left-hand" d="M483.1 116.8l21.8 3c4.9.7 6.2-5.1 14.2-12.4 1.7-1.6 6.1-6 9.7-2.9s-5 15.9-5 15.9 16.8-3.9 17.4 3.9-13.9 6.8-13.9 6.8 16.1 2.2 13.7 9.8c-1.4 4.6-12 2-16.9-.8 0 0 9.5 7.2 5.1 11.9s-13.6-5-21.8-13.2c-2.2-2.2-16.3-3.6-29.5-4.2"/><g class="js-onboarding-ed-anim-ghost-float"><path class="st3" d="M332.3 223.1s-62.4 28.2-48 38c15 10.2 68 3.6 79.7-8.7 19.9-20.9 11-47.3-31.7-29.3z"/><path class="st4" d="M406 219.2s-28.5 60.1-11.6 60.1c9.4.1 53-37.4 58.5-49.3 12.1-26.1-26.3-52.2-46.9-10.8z"/><defs><path id="SVGID_1_" d="M240.7 214c11.2-7 48.1-29.4 65.7-47 45-45 19.4-79.7 43-116.7C367 15.8 409.9-4.6 447.1 5c49.1 12.6 63 88.7 51.3 142.3-19.8 91-43.7 107.3-50.7 114.3s-48.3 34.2-25.3-3.6-20.8 6.3-39 15.2c-15.2 7.5-76.7 29.3-37.3-13.3s-10-23.3-10-23.3-48.8 22.4-87.4 14.4-19.2-30-8-37z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st5"><path class="st6" d="M199-33h332v336H199z"/><path class="st7" d="M326.6 96.7s.1-1 .4-2.7c-.3.9-.4 1.8-.4 2.7zM497.6 48.6C513 27.9 527.1-8.4 451-21 351.2-37.5 332.7 66 337.6 86.8c7.6-48 54.6-65.8 98.5-62 27.8 4.3 42.5 19.1 50.2 40.3 20 55.4.2 136.9-33.3 188.9-6.5 10.1-12.1 13.5-12.1 13.5l55.6-15.7 19.1-179.2-18-24zM327.6 137.3c-32.1 63.4-80.3 75.4-80.3 99.5 0 10.2 13.2 16.9 29.4 15.7 14-1-3.7 7.1-3.7 7.1s-62.6 9.2-62.6-13.5S325.5 126 327.6 137.3zM358 245s-21.8 29.2-8.2 33.4c12.4 3.8 36.1-6.2 36.1-6.2l-41.6 34.3L310 273l48-28z"/></g><path class="st8 js-onboarding-ed-anim-ghost-mouth" d="M415.7 131.6c1.9-13.4 9.6-26.9 25.2-26.4 10 .3 10.7 9 9.9 14.4-1 6.4-4.3 8.6-5 15.1s2.4 11.2 1.8 17.6c-.6 5.9-4.9 9.4-14.7 8.4-12.6-1.1-18.9-17.4-17.2-29.1z"/><ellipse class="st8 js-onboarding-ed-anim-ghost-eye onboarding-ed-anim-ghost-eye--left" cx="474.5" cy="87.3" rx="6" ry="11"/><ellipse class="st8 js-onboarding-ed-anim-ghost-eye onboarding-ed-anim-ghost-eye--right" cx="409.8" cy="80.6" rx="6.8" ry="12.3"/><path class="st7 js-onboarding-ed-anim-ghost-right-hand" d="M353.7 123.2c-16.9-5.8-24.8-3.2-30.3-1.6-11.7 3.5-16.1 5.6-18.7 1.7s10-11.6 10-11.6c-5.7 0-15.5-1.6-15.5-6.5S312 100 312 100s-13.9-7.9-9.2-12.5 18.9 4.8 18.9 4.8-2.5-15.9 2.7-17 6.3 5.1 7 7.3c3.4 10.3 3.4 16.6 8 18.5s18.6 4.1 18.6 4.1c3.8 5.6 2.2 15-4.3 18z"/></g><g id="Runner"><g><defs><path id="SVGID_3_" d="M775.3 562.4s47.4-162.5 50.8-183.4c2.9-18-6.8-14.4-11.7-10.7-7.1 5.5-36.6 23.2-36.6 23.2l-15.9-62.4s42.3-17.4 59.5-22.8 39.8-9.6 51.4 0c15.9 13.2 2.2 81.5-57.8 251.3l-39.7 4.8z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><g class="st9"><path class="st10" d="M740.4 279.4h152.1v298.1H740.4z"/><path class="st11" d="M744.1 371.3s60.1-25.5 68.8-27.4c16.7-3.8 20.8 17.7 12.9 36.8s-81.7 55.5-81.7 55.5v-64.9zM849.7 298s25.6-4.7 17.2 42.9c-9.2 51.8-66.8 224.1-66.8 224.1h31.3l61.1-238s-10.2-29-42.8-29z"/></g></g><path d="M672.7 137.3s23-18.1 23-34.8 23.5-31.1 23.5-31.1-8.2 11.1-8.2 34.9c0 17-22.9 31-38.3 31z"/><path class="st12" d="M714.4 68.5s-8.5-8-17-6.6c-14.7 2.3-18.9 22.1-30 46.5-9.3 20.5-36.3 17.5-36.3 17.5s24.7 8.3 41.7 5 26-17.3 28-30.3 10.7-20.3 14.7-20.3l-1.1-11.8z"/><path class="st13" d="M722 56.7s-16.7.3-13.7 15.8 14.5 17 16 15.5L722 56.7z"/><defs><path id="SVGID_5_" d="M722 56.7s-16.7.3-13.7 15.8 14.5 17 16 15.5L722 56.7z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st14"><path class="st15" d="M702.2 49.9h29.5v44.9h-29.5z"/><path class="st16" d="M705.5 66.3s3.1 7.5 7.1 5.2S721 60 721 60l6.3 28.5-21.8 8.2V66.3z"/></g><defs><path id="SVGID_7_" d="M670.1 372.4s-39.1 97.7-89.8 160.8L617 567s114-154 131.3-194.7l-78.2.1z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><g class="st17"><path class="st18" d="M562 333h204.1v252H562z"/><path class="st19" d="M693.5 392.8l-54 99.9 38.6 7.2 64.4-97.3z"/></g><defs><path id="SVGID_9_" d="M655.3 465c-7.9-4.6-15.5-12.2-20.3-17.8-16.3 29.1-34.8 61.3-54.7 86L617 567s33.7-45.6 67.3-93.7c-8.8-1-20.4-3.3-29-8.3z"/></defs><clipPath id="SVGID_10_"><use xlink:href="#SVGID_9_" overflow="visible"/></clipPath><g class="st20"><path class="st10" d="M566 408.3h142v184H566z"/><path class="st11" d="M667.1 444.3s-54.5 92.5-86.8 122.7l27.4 28 104.6-128.7-45.2-22z"/></g><defs><path id="SVGID_11_" d="M794.3 215s52.4 12.2 69.3 15.8 41-1 57.5-33.4c14.7-28.9 39.9-90.8 44.2-100.8s10.7-14.8 12.6-17c2.6-2.9 4.4-6.3 5.3-10.1 1.2-4.7.6-17.3-5.4-20.4-2.9-1.5-16.9-6-16.9-6-1.6-.5-10.2-.3-13.9 5.4-2.5 3.9-2.6 11.5-2.6 11.5-.8-2-2.4-3.5-4.4-4.1-3.4-1-7.4-1.5-5.9 1.7 3 6.2 10.8 25 6.7 35.4-2 5.1-30.8 67.9-37.1 81.3s-16.2 27.4-42.5 23.1-88.7-21.3-88.7-21.3l21.8 38.9z"/></defs><clipPath id="SVGID_12_"><use xlink:href="#SVGID_11_" overflow="visible"/></clipPath><g class="st21"><path class="st10" d="M729.5-4.3h262.9v250.5H729.5z"/><path class="st22" d="M979.2 57.4l-3.6 4.9c-6.7 2.2-8.5-.7-18.7-4.2-4.9-1.8-9.1-4.9-12.4-9l-.2 11c1.5 2.4 2.8 5 3.9 7.6 0 0 11.9.4 14.4 11.5 0 0 6.2-6.3 13-6.8 2.8-4.3 3.5-8.7 3.6-15z"/><path class="st11" d="M772.5 184.3s65.5 27.1 88.4 32.5c9.6 2.3 25.6 2.6 37.7-7 19.4-15.5 50.3-94.2 53.3-103.5 5.8-17.8 22.7-30.2 29.5-30.2s-68.1 167.1-68.1 167.1l-133.7-23.4-7.1-35.5z"/><g class="st23"><path class="st24" d="M967.9 42.9c-1.7.1-3.4.4-5.1.9-1.7.5-3.3 1.1-4.9 1.9-.9.5-1.7 1-2.5 1.6l-1.1 1-1 1.1-.5.6-.4.6c-.3.4-.5.8-.7 1.3-.3.9-.6 1.8-.8 2.7-.2.9-.3 1.8-.4 2.7-.1.9-.1 1.7-.1 2.4s.1 2.8.1 3.7v1.4c.1.6-.3 1-.9 1.1-.6.1-1-.3-1.1-.9v-1.5c0-.9 0-2.2.1-3.8s.1-1.6.3-2.5c.1-.9.3-1.9.6-2.8.3-1 .6-2 1.1-2.9.2-.5.5-1 .8-1.4l.5-.7.6-.6 1.2-1.1 1.3-.9c.9-.6 1.8-1.1 2.7-1.5 1.6-.7 3.3-1.3 5.1-1.6 1.7-.4 3.4-.7 5.1-.8z"/></g><g class="st23"><path class="st24" d="M972.7 44.8l-1.3.3-1.5.4-1.9.7-2.1 1.1-2.2 1.4c-.7.5-1.4 1.1-2.1 1.8-.7.7-1.3 1.4-1.8 2.2l-.4.6-.3.6c-.2.4-.4.9-.5 1.3-.3.9-.6 1.8-.8 2.7-.2.9-.3 1.8-.4 2.6s-.2 1.6-.2 2.4-.1 2.7-.1 3.5v1.3c0 .6-.4 1-1 1s-1-.4-1-.9c0 0 0-.5.1-1.4s.1-2.2.3-3.7.2-1.6.4-2.4.4-1.8.6-2.7c.3-1 .6-1.9 1-2.8.2-.5.4-.9.7-1.4l.4-.7.4-.6c.6-.8 1.3-1.6 2.1-2.3.7-.7 1.5-1.3 2.3-1.8l2.4-1.3 2.2-1c1.6-.6 3.2-1 4.9-1.2l-.2.3z"/></g><g class="st23"><path class="st24" d="M978.8 46.9l-1.2.4c-1.1.4-2.1.9-3.1 1.4l-2 1.2-2 1.5-1 .9-1 1-.9 1.1-.4.5-.4.6c-.3.4-.5.8-.7 1.2-.2.4-.4.8-.5 1.2-.3.9-.5 1.7-.7 2.6-.2.9-.3 1.7-.4 2.5s-.2 1.5-.2 2.2-.1 2.6-.1 3.4v1.3c0 .6-.4 1-1 1s-1-.4-1-.9v-1.4c0-.9.1-2.1.3-3.5s.2-1.5.4-2.3.4-1.7.6-2.6c.2-.9.5-1.8.9-2.7.2-.4.4-.9.6-1.3l.8-1.3.5-.6.5-.5 1-1 1-1 1.1-.9 2.2-1.4 2.1-1.1c1.4-.7 2.9-1.2 4.5-1.5h.1z"/></g><path class="st25" d="M945.1 58.7c.5 1.2 1.1 2.3 1.9 3.4.7 1 1.8 2 2.8 2 .3 0 .5.1.6.4.2.5.5 1 .8 1.5.3.4.8.8 1.3 1 1.1.4 2.3.5 3.4.3.2 0 .5.1.6.3l.6.8.3.4.3.3.4.3.4.2.8.3c.6.1 1.2.1 1.8-.1l2-.6c.3-.1.7 0 .8.3v.1c.2.6.6 1.2 1.1 1.6.5.4 1.2.5 1.8.4 1.4-.3 2.7-.9 3.8-1.8h-.1l4.9-6.4h.3c.1 0 .2.2.1.3l-4.2 6.8h-.1c-.7.5-1.4.9-2.1 1.3-.7.4-1.6.7-2.4.8-.9.1-1.8-.1-2.6-.6-.7-.5-1.2-1.3-1.5-2.1l.8.4-2.1.6c-.7.2-1.5.3-2.3.2l-1.2-.4-.5-.3-.5-.4-.4-.4-.4-.4-.6-.9.6.3h-2c-.7 0-1.4-.2-2.1-.5l-.9-.6-.8-.8c-.4-.5-.8-1.2-1-1.8l.6.4c-.8-.1-1.6-.4-2.2-.9-.6-.5-1.1-1-1.5-1.6-.8-1.1-1.6-2.4-2.1-3.7-.1-.3 0-.7.3-.8s.7 0 .8.3l-.3.1z"/><path class="st26" d="M930.9 55.7s10.6 6.2 13.2 16.8-8.3 26.6-8.3 26.6l-4.9-43.4z"/></g><defs><path id="SVGID_13_" d="M766.1 174.2l-91.7-26.5s-56.3-14.5-85.7 14.9C565 186.3 524.4 257 524.4 257l-6.5 9.9c-3.2 4.8-6.1 10.5-4.6 17.3 3.1 14.5 7.7 17.2 7.7 17.2 3.7 4 9.4 6.4 14.9 7 12.5 1.3 17.1-4.8 17.1-8.5v-1.5l1-.6c1.5-.9 3.6-3.2 4.7-6.5s1.7-7.8.2-12.8c-1-3.5-2.3-4-1.9-12.8.5-12.3 48.7-75.7 48.7-75.7s21.8-27.5 62.7-11.7c37.8 14.7 39.6 59.5 39.6 59.5l58.1-63.6z"/></defs><clipPath id="SVGID_14_"><use xlink:href="#SVGID_13_" overflow="visible"/></clipPath><g class="st27"><path class="st10" d="M482.1 101.4h303.3v232.8H482.1z"/><path class="st28" d="M501 290.6s36.8 16.4 46.4 2.9c0 0 0 6.5 5.7 4.8 2.3-.7 3.7 10.1 4.7 10.1 3.3 0-42.1 12.6-42.1 12.6L501 290.6z"/><g class="st23"><path class="st24" d="M527.5 289v1.3c.1 1.1.3 2.2.6 3.3.3 1.5.8 3 1.5 4.4.4.8.8 1.5 1.3 2.2l.8 1 .9 1 2 1.7 2.2 1.3c1.3.7 2.7 1.3 4.2 1.6l1.8.3h2.6c.6 0 1 .4 1 1s-.4 1-1 1H544l-1.5-.2-2-.4c-1.6-.4-3.1-1.1-4.5-1.9l-2-1.6c-.7-.6-1.4-1.2-2.1-1.9l-.9-1.1-.9-1.2c-.5-.8-.9-1.6-1.3-2.4-.6-1.5-1.1-3-1.4-4.6-.2-1.1-.3-2.3-.4-3.4v-1.3c0-.2.1-.3.2-.3s.4 0 .3.2z"/></g><g class="st23"><path class="st24" d="M536.1 289.7v1.2c-.1 1 0 1.9.2 2.9.1.6.3 1.2.5 1.8.3.7.6 1.3.9 1.9l.6 1 .7.9c.5.6 1 1.2 1.6 1.8 1.1 1.1 2.4 2 3.8 2.6l2 .7 1.9.3h4c.6-.1 1 .3 1.1.9.1.6-.3 1-.9 1.1h-2.6l-1.8-.2-2.1-.5-2.2-.9c-1.5-.8-2.9-1.8-4.1-3-.6-.6-1.1-1.3-1.6-2s-.9-1.4-1.3-2.1c-.4-.7-.7-1.4-.9-2.1-.2-.7-.4-1.3-.5-2-.1-1-.1-2.1 0-3.1v-1.1c.1-.2.4-.3.5-.2.1 0 .1.1.2.2v-.1z"/></g><g class="st23"><path class="st24" d="M519.5 288.9v1.4c.1 1.2.3 2.4.6 3.5.5 1.6 1.2 3.1 2.1 4.5l.8 1.1.9 1.1 2.1 1.9c1.5 1.2 3.2 2.2 4.9 3 1.5.7 3.1 1.3 4.7 1.8l1.9.5 1.5.2h1.3c.6 0 1 .4 1 1s-.4 1-1 1h-1.5l-1.6-.3-2.1-.6c-1.7-.6-3.3-1.3-4.9-2.1-1.8-.9-3.5-2.1-5-3.4-.8-.7-1.5-1.4-2.2-2.2l-.9-1.2-.8-1.2c-.9-1.5-1.6-3.2-2.1-4.9-.3-1.2-.5-2.5-.5-3.7v-1.4c0-.2.1-.3.2-.3s.3.1.3.2l.3.1z"/></g><g class="st23"><path class="st24" d="M554.5 298.5h-.3l-.8.3c-.9.3-1.9.3-2.9.1l-.9-.2-.9-.4c-.6-.4-1.2-.9-1.6-1.5-.4-.7-.6-1.5-.6-2.3 0-.5.2-.9.4-1.3l.5-1c.7-1.3 1.2-2.6 1.5-4 .1-.6.2-1.3.3-1.9v-1.7c-.1-.9-.3-1.7-.6-2.5l-.4-.9c-.1-.1 0-.2.1-.3h.3l.5.9c.4.9.7 1.8.8 2.7.1.6.1 1.3.1 1.9 0 .7-.1 1.4-.2 2.1-.3 1.5-.8 2.9-1.5 4.2l-.5 1c-.1.3-.2.5-.2.8 0 .6.2 1.2.5 1.7s.8.9 1.3 1.2l.7.4.8.2c.8.2 1.7.2 2.5 0l.7-.2h.2c.2 0 .4.2.4.4 0 .1 0 .1-.1.2l-.1.1z"/></g><path class="st11" d="M730.5 207s-31.7-38.2-73.1-44.4c-25.1-3.7-38.1 0-57.4 16.4-13.5 11.5-45.1 65.1-43 86.7S730.5 207 730.5 207z"/></g><defs><path id="SVGID_15_" d="M728.8 166.8s5.5 21.2-.8 33.8-21.2 19.2-21.2 19.2 8.5 32.7 2.5 51-25.2 73-25.2 73-37.6 54.4-1.1 67.8c34.1 12.5 50.2 4.3 60 0s60.3-35.6 60.3-35.6-19.6-5.1-19.6-31.8 15.4-29.9 15.4-29.9l-25.4 9s13.7-50.8 20-57.1 20.6-20.7 24.6-32.5-22.8-40.4-22.8-49.8l-5-1.5s6.5 26.7-12.8 22.5-34.9-29.2-34.9-34l-14-4.1z"/></defs><clipPath id="SVGID_16_"><use xlink:href="#SVGID_15_" overflow="visible"/></clipPath><g class="st29"><path class="st18" d="M661.7 121.2h184.7V463H661.7z"/><path class="st19" d="M792.6 351.3s-48.3 23.9-80.9 25c-27.5.9-36-2.4-36-21.4L647 393l49 49.3 92.1-24 27.1-41.3-22.6-25.7z"/></g><defs><path id="SVGID_17_" d="M819.1 106h3.6c3.6 0 6.5-2.9 6.5-6.5v-.4c-2-27.4-6.7-66.7-18.1-80.1-15.4-18-45-13.6-53.8-11s-44.2 12-39.7 57 24.2 59.4 26.7 69.5 2.3 25 2.3 40.3c0 0 3.1 32.2 26.8 32.2s13.6-28.2 13.6-28.2l3.6-28.3c7.3-2.6 13.9-6.7 19.4-12.1 8.4-8.5 11.9-20.8 9.1-32.4z"/></defs><clipPath id="SVGID_18_"><use xlink:href="#SVGID_17_" overflow="visible"/></clipPath><g class="st30"><path class="st10" d="M842.2 226.9l-142.5-8.5V-12.7l142.5 8.5z"/><path class="st26" d="M798.1 148.4s-12.4 5.6-28.2 2.5c2.6 25.2 20.5 43.3 20.5 43.3l7.7-45.8zM780.8 17.1s-52.8 66.3-36.5 94.3-10.3 51.2-10.3 51.2L693 60l87.8-42.9z"/><path class="st31" d="M737.5 87.8s22.4-20.5 28.6-41.3c0 0 35.9-14 46.1-29.5 0 0-14.9-19.8-52.7-11.1-30 6.9-52.4 32-48.6 56 5 31.8 19.9 59.3 19.9 59.3s-10.8-34.9-4.6-48.8c2.5-5.6 18.1-8.5 18.1-16.8-1.5 10.9-3.8 21.6-6.8 32.2z"/><path class="st11" d="M832 106.3h-21.9s10.3 3.7 6.2 24.8l15.7-24.8z"/></g><ellipse class="js-onboarding-ed-anim-ghost-girl-eye onboarding-ed-anim-ghost-girl-eye--left" cx="811.1" cy="71.4" rx="3.4" ry="5.6"/><ellipse class="js-onboarding-ed-anim-ghost-girl-eye onboarding-ed-anim-ghost-girl-eye--right" cx="775.9" cy="68.7" rx="3.7" ry="6.6"/><path class="js-onboarding-ed-anim-ghost-girl-face" d="M806.7 119.6s-17.3-11.1-26.7-7.5c-5.2 2-6.8 5.5-6.8 10.4s4.2 8.6 9.8 8.6 17.2-5 23.7-11.5zM773.4 52.6l2.2-1.5 1.1-.7 1.2-.7 2.7-1.5 2.7-1.5 1.2-.7 1.1-.6.9-.5.7-.4.7-.3c.2 0 .3.1.3.3v.1l-.4.6-.5.7-.8.9c-1.4 1.4-3 2.6-4.8 3.6l-2.9 1.3-1.4.5-1.3.4c-.9.2-1.8.4-2.7.5-.1 0-.3-.1-.3-.2 0-.2.1-.3.3-.3zM807.3 45l1.2 2.1 1.2 2.1.7 1.2.7 1.2.8 1.1.8 1.1.8 1 .7.9.6.7.5.5.5.5c.1.1.1.2 0 .3h-.2l-.6-.2-.7-.3-.9-.5-1-.7-1-.9-1-1.1-.9-1.2-.8-1.3-.6-1.3c-.4-.8-.7-1.6-.9-2.4-.2-.8-.4-1.7-.4-2.5 0-.2.1-.3.3-.3h.2z"/><g><defs><path id="SVGID_19_" d="M683.4 344.8c13.4-12.3 36.7-27.4 67.6-25.8 7.8.3 15.5 1.7 22.9 4.3 1.8-6.4 13.9-50.5 19.8-56.3s23.3-20 27.3-31.8-22.9-43.3-22.9-52.7l-10.7-2.5s8.1 25.2-11.2 21-32.3-28.6-32.3-33.4l-17.9-5.1s6.3 23.9 0 36.5-21.7 19.5-21.7 19.5 8.7 33.1 2.7 51.4c-5.1 15.7-19.5 61.5-23.6 74.9z"/></defs><clipPath id="SVGID_20_"><use xlink:href="#SVGID_19_" overflow="visible"/></clipPath><g class="st32"><path class="st33" d="M665.9 125.2h173.4v237.2H665.9z"/><path class="st34" d="M712.4 187.7s31.9 38.3 59.5 44.3 48.5-4.8 48.5-4.8l9 4.8-50 140.5-127.9-3.7 60.9-181.1z"/><path class="st35" d="M818.7 240.6s-13.2 23.9-66.1 23.1c0 0 40.4 14.9 62.6 2.1 22.2-12.8 3.5-25.2 3.5-25.2z"/></g></g><path class="st36" d="M796.8 314.9l1.5-.6-1.5.6z"/><path class="st37" d="M731.7 94.8c0 5-13-2.2-12.5-19 .2-7.8 6.8-8.8 10.8-8.2 2.2.4 3.7 2.4 3.5 4.6-.6 5.7-1.8 16.6-1.8 22.6z"/><ellipse transform="rotate(-85.2 731.828 78.892)" class="st38" cx="731.8" cy="78.9" rx="4.9" ry="4.5"/><g class="st39"><path class="st7" d="M699.9 66.6l-.7.3c-.6.3-1.2.7-1.7 1.1-.8.6-1.5 1.4-2.1 2.2-.8 1.1-1.5 2.2-2 3.4-.6 1.5-1.1 3-1.5 4.5-.4 1.7-.8 3.4-1.1 5.4s-.4 2-.6 3.1-.5 2.1-.8 3.2-1.3 4.2-2 6.3c-1.5 4.1-3.5 8-5.9 11.7-1.1 1.7-2.3 3.4-3.6 4.9-1.2 1.4-2.4 2.7-3.8 3.9-1.2 1-2.4 1.9-3.7 2.7-1 .6-2.1 1.1-3.2 1.6l-1.2.4-.9.3-.8.2c-.2 0-.3-.2-.3-.3 0-.1 0-.1.1-.2l.7-.4 1.8-1.2c.9-.6 1.7-1.3 2.5-2.1 1-1 2-2 2.9-3.1 1.1-1.3 2-2.7 2.9-4.1.9-1.5 1.9-3.1 2.8-4.9 1.8-3.6 3.4-7.4 4.7-11.3.7-2 1.2-4 1.8-6l.7-3c.2-1 .4-1.9.6-2.9.4-2 1-4.1 1.7-6 .7-1.8 1.6-3.5 2.7-5 1-1.4 2.1-2.5 3.5-3.5 1-.8 2.2-1.3 3.4-1.7.8-.2 1.6-.3 2.4-.3h.9c.2 0 .3.2.2.4l-.2.2-.2.2z"/></g><g class="st39"><path class="st7" d="M728.7 38.4l.3-.7 1.1-1.9c3.2-5.3 7.2-10 11.9-14.1 1.6-1.3 3.3-2.6 5-3.7l2.7-1.7 2.9-1.5 3-1.2.4-.2h.4l.7-.2 1.5-.5c2-.6 4-1.1 6-1.5 1.9-.4 3.8-.6 5.7-.8l5.2-.2h2.3l2.1.2 3.3.5 2.1.5.6.2h.2c.6.4.8 1.2.4 1.8-.2.4-.6.6-1 .6h-.8l-2-.3-3.1-.2h-4.1l-4.8.4-5.3.9-5.6 1.4-1.5.5-.7.2h-.7l-2.7 1.1-2.6 1.3-2.5 1.5c-1.6 1-3.2 2.1-4.7 3.3-2.7 2.1-5.2 4.5-7.5 7.1l-2.7 3.1-2 2.5-1.2 1.6-.4.6c-.3.5-1 .6-1.5.3s-.6-.9-.4-1.4v.5z"/></g><g class="st39"><path class="st7" d="M763.1 36.6v1.6c-.1 1.3-.2 2.7-.5 4-.3 1.9-.8 3.7-1.4 5.5-.3 1-.7 2-1.1 3l-1.2 3.1-1.4 3c-.5 1-1 1.9-1.5 2.8l-1.5 2.6-1.4 2.3-1.3 1.9-1.1 1.4-.9 1.2c-.2.2-.5.1-.7-.1-.1-.1-.1-.3-.1-.4l.6-1.4.8-1.5.9-2 1.1-2.4 1.2-2.7 1.2-2.9 1.2-3c.4-1 1.5-4 2.1-5.9l1-2.7.9-2.5.8-2.1.6-1.6.6-1.4c.2-.3.5-.4.8-.2.2.1.3.2.3.4z"/></g></g></svg>'
});
this["DDG"]["templates"]["hp_onboarding_ed_slide3"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="410" viewBox="0 0 1200 410" preserveAspectRatio="xMidYMax" class="onboarding-ed__image--animated"><style>.st0{fill:#fff}.st1{clip-path:url(#SVGID_2_)}.st2{fill:#f0c090}.st3{fill:#d9b17d}.st4{fill:#d1ab78}.st5{clip-path:url(#SVGID_4_)}.st6{fill:#f7d09e}.st7{fill:#f7dbb4}.st8{fill:#f0b890}.st9{fill:#e6be8a}.st10{fill:#cfaa7c}.st11{fill:#876c44}.st12{clip-path:url(#SVGID_6_)}.st13{fill:#e1eff5}.st14{fill:#c9e6f5}.st15{fill:#db9f7e}.st16{fill:#64cf00}.st17{fill:#50a600}.st18{clip-path:url(#SVGID_8_)}.st19{fill:#f5be94}.st20{fill:#c47e59}.st21{opacity:.8;fill:#c77e57;enable-background:new}.st22{fill:#f5cd9d}.st23{clip-path:url(#SVGID_10_)}.st24{fill:#71787d}.st25{fill:#565a5e}.st26{fill:#868d94}.st27{fill:#dec19b}.st28{fill:#868e96}.st29{fill:#cad6e3}.st30{fill:#ced4db}.st31{opacity:.45;fill:none;stroke:#949da6;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;enable-background:new}.st32{fill:#bad7eb}.st33{fill:none;stroke:#fff;stroke-width:2;stroke-miterlimit:10}.st34{fill:#a1c9db}.st35{fill:#7ba1b5}.st36{fill:#e8f2f7}.st37{fill:none;stroke:#fff;stroke-miterlimit:10}.st38{fill:#e3f2fa}.st39{opacity:.45}.st40{fill:#949da6}.st41,.st42{fill:none;stroke:#fff;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10}.st42{opacity:.15;stroke:#000;stroke-width:2;enable-background:new}.st43{stroke-width:1.5}.st43,.st44{opacity:.15;fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;enable-background:new}</style><g><circle class="st0" cx="319.7" cy="258" r="16.7"/><g class="js-onboarding-ed-anim-bathtub-arm"><defs><path id="SVGID_1_" d="M461.4 90.4c-1.3-11.5-6.5-22.2-14.8-30.3-15.9-14.8-39.8-16.5-60.4-13.9-25 3.2-49 10.2-72.6 18.7l-1.1.4-19 6.8c-2.8.6-12.9 1.6-22.1 5.5-5.5 2.5-10.3 6.2-14 11-.8 1.1-.9 2.5-.3 3.7l8.7 17.2s12.3.5 21.9-5c5.5-3.1 10.8-6.7 15.8-10.7 0 0 9.9-6.3 16.1-8.4 23.1-8 47.1-15.3 71.6-17.2 10.7-.8 22.1-.6 32.2 3.7 8.4 3.7 14.1 11.7 15 20.8.5 5.8-1.2 12.3-4.1 18.4-3.1 6.2-6.9 12-11.4 17.3-4.2 5-8.7 9.8-13.5 14.3-9.1 8.4-18.8 16.1-29.1 23.1-.7.5-3.2 1.7-3.3 2.5s.5.8.6 1.1c.6 1.1 1.3 2.1 2 3.1l10.4 16.4c1-.6 2-1.2 2.9-1.9 11.8-8 22.9-17 33.1-26.9 5.5-5.2 10.6-10.8 15.4-16.7 5.6-6.9 10.4-14.4 14.2-22.4 4.3-9.4 6.9-20.2 5.8-30.6z"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"/></clipPath><g class="st1"><path class="st2" d="M209.8 15.9h265.7v191H209.8z"/><path class="st3" d="M388 166.9s37.9-9.4 62.6-49.8c4.9-8.1 11.6-25.7 9.9-35.7 0 0 12.6 13.3-3.8 53.3-4.1 10-53.5 55.2-53.5 55.2l-15.2-23zM302.5 96.1s4.9-8 2.4-14.7 7.6-10.5 7.6-10.5 8.3-3.7 9.6-10.2 10.6-5.5 10.6-5.5l1 31.3-31.2 9.6zM429.5 45.3s-7.5 17.3.3 30.8c0 0-25.7-.2-26.5-1s7.1-37.1 7.1-37.1l19.1 7.3z"/></g><path class="st4" d="M267.8 85.9s1.9-3.8 8.1-5.9 13.2-.6 13.2-.6l4.5 20.9-22.8 3.4-3-17.8z"/></g><defs><path id="SVGID_3_" d="M410.7 35.7s13.1 44.2 6.9 68.6c-.1.4-.4.6-.8.6l-6.3-.3c-1.5 6.5-3.3 12.9-5.5 19.2-2.3 6.5-13.2 8.4-13.2 8.4s-4.7 5-4.2 16.9 1.6 12.4 6.9 18.5 23.3 36.7 25.5 65.4 3 39.6 3 39.6H319.3s-5.5-48.8 6.3-77.1 13.4-32.4 18.9-42.2 7.5-25.7 3.5-31.5-11.5-16.8-14.4-34.1C331 72.4 331 54.1 331 54.1s45.6-35.3 79.7-18.4z"/></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"/></clipPath><g class="st5"><path class="st6" d="M291.3 3.6h155.1v292.2H291.3z"/><path class="st7" d="M377.9 142.2s28.6 34.8 28.6 135.3h27.7l-22.3-107.7-34-27.6z"/><path class="st8" d="M397.3 130.2c-7.1 3.2-14.6 5.4-22.3 6.5 0 0 13 25.2 21.6 32.9l.5.4c8.5 7.2.2-39.8.2-39.8z"/><path class="st9" d="M380.8 47.5s-31.6 21.1-29.9 59c.1 2.2.5 4.3 1.3 6.4l6 16.4c.6 1.5.8 3.2.6 4.8 0 0 2.1 30-8.1 42.9-2.4 3.1-4.1 17.8-4.2 19.2-2.1 18.5-2 44.1-3.9 78.6h-40.5l12.4-232.9 66.3-7.6v13.2z"/><path class="st10" d="M325.1 69.5s13.2-.2 41.2-10.2c19.9-7.1 51.2-4.5 51.2-4.5l-1.2-13-50.5-.5-40.7 16.8v11.4z"/><path class="st11" d="M326.3 54.9l4.7 52.7s9.5-15.1 9.5-27.2-3.4-11.8 5-14.2c5.2-1.5 1 8.5 4.3 7.7s7.3-8 10.2-10.9c18.3-18.3 23-15.4 22-26.2s-49.4-7.6-55.7 18.1z"/><path class="st7" d="M415.2 54.4s2.8 26.5-2 50.7l7.3 4.2s3.8-37.9-5.3-54.9zM391.7 132.2s7.4-3.2 10.2-9.8c1.9-4.8 3.4-9.8 4.5-14.8l4.1-3v22.7l-13 7.2-7.2-3.2"/></g><ellipse id="open_eye" transform="rotate(-82.6 393.837 74.14)" cx="393.8" cy="74.1" rx="4.8" ry="2.5"/><ellipse id="blinked_eye" transform="rotate(-82.6 393.837 74.14)" cx="393.8" cy="74.1" rx=".5" ry="2.5"/><defs><path id="SVGID_5_" d="M322.5 57.5c.4-5 12-7.8 2.3-11-7.5-2.5-7.1-10.5-5.3-13.9s9.1-14.1 17.2-19.1 19.3-10.4 31.2-5c0 0 15.7-6.3 27.8-4.7s23.6 4.1 25.7 21.7c.9 7.3-.1 13.4-3.6 14.4s-3.7 4.1-3.7 4.1 8.7-1.9 10 2.5c.8 2.9-1.1 3.9-6.6 3.9-2.1 0-6.7.1-9-2.3-4 2.2-8.8 2.3-12.9.2 0 0-5.3 7-14.1 2.1 0 0-4.8 6.7-12.9.7 0 0-7 6-13.4 1.7 0 0-7.7 7.2-15.5 1.5-1.7 2.6-4.2 4.7-7.1 6-3.6 1.6-10.5 2.1-10.1-2.8z"/></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"/></clipPath><g class="st12"><path class="st0" d="M302.9-1.2H441v66H302.9z"/><path class="st13" d="M325.1 12.1s-7.5 29.7 26.1 31h2.3c36.2 0-42.5 7.7-42.5 7.7s-13.7-22.7 14.1-38.7zM425.5 7.6s2.5 34.3-45.7 35.6l34.1.8s39.4-20.4 11.6-36.4z"/><path class="st14" d="M320 54.9c3.4.4 6.9.1 10.2-.8 5.2-1.6 9.6-2.8 15.3-2.8s10.9-2.8 12.6-2.8 2.6 2.5 5.9 1.3 8.3-2.3 10.5-1 4-2 5.2-2 3.4 2.4 7.2 2.4 5.5-3.5 7.7-3.5 6 1.8 7.3 1.8 4.2-1.6 6.8-1.6 4.2 1.6 4.8 1.6 8.7.9 11-2.7l2 7.2-111.3 13.5 4.8-10.6z"/></g><path class="st15" d="M383.7 189.8s5.2 37 2 85h6s3.8-48-8-85z"/><path class="st7" d="M383.7 189.8c-1.4 28.8-4.3 57.5-8.9 85.9h11.1s6.6-47.2-2.2-85.9z"/><circle class="st0" cx="337.8" cy="202.3" r="5.2"/><g class="js-onboarding-ed-anim-bathtub-brush"><path class="st16" d="M333.7 190l-4.6 2.3c-.5.3-1.2.1-1.5-.5l-62.1-126c-.2-.4-.1-.9.2-1.2.7-.8 1.6-1.4 2.5-1.8.9-.4 1.8-.6 2.8-.8.5-.1 1 .2 1.2.6l62.1 126c.2.6-.1 1.2-.6 1.4z"/><path class="st0" d="M350 185.3l-4.9-10.6c-.2-.6-.9-.8-1.4-.6-.2.1-.3.2-.5.4h-.1c-.3.5-1 .6-1.5.3s-.6-.9-.4-1.4c.6-1.7.8-3.4.7-5.2 0-.1 0-.3-.1-.4l-2.6-5.5c-.3-.6-.9-.8-1.5-.5-.1.1-.2.1-.3.2-.8.8-1.7 1.5-2.7 2.1 1.7-1.6 2.6-3.8 2.5-6.1 0-.1 0-.3-.1-.4l-1.4-3c-1.2-2.3-3.9-3.3-6.3-2.4-.3.1-.5.3-.6.5-1.9 3.6-3.6 2.9-8.8 5.8-2.9 1.7-4 5.3-2.6 8.3l15 30.4c1.2 2.5 4.2 3.5 6.7 2.3 12.7-3.7 12.2-11.7 10.9-14.2z"/><path class="st16" d="M340.3 199.1l-9.1 4.5c-2.5 1.2-4.9-.4-6.1-2.9l-15.5-31.3c-1.1-2.2-.4-4.9 1.6-6.3 4.6-2.9 4.1-12.7 5.5-9.9s2.6 5.3 4.6 4.4 5.5.3 6.7 2.7l15 30.5c1.6 3 .4 6.7-2.6 8.2 0 .1-.1.1-.1.1z"/><path class="st17" d="M329.9 191.9l-.8.4c-.5.2-1.1.1-1.4-.4-2.9-4.8-17.1-28.4-16.5-28.7s.5-3.9.4-4.2L266 66.5c-.2-.6 0-1.2.6-1.5h.1l.6-.2c.5-.2 1.1 0 1.4.5l45.6 92.6c.7 1.5 2.3 2.7 3.9 1.8s10.3 25.6 12.3 30.8c.2.6-.1 1.2-.6 1.4z"/><path class="st17" d="M312.2 162.8l5.7-2.8c3-1.5 6.7-.2 8.2 2.8l14.5 29.6c1.5 3 .2 6.7-2.8 8.2l-5.7 2.8c-3 1.5-6.7.2-8.2-2.8L309.4 171c-1.5-3.1-.2-6.7 2.8-8.2z"/><defs><path id="SVGID_7_" d="M264.7 84.7c2.9-1 9.2-2.3 11.5 0s7.9 12.9 8.1 14.7c.4 4.8-2.7 9.3-7.4 10.6-3.6 1.2-7.5 1.2-11.1 0-3.3-1.2-7.4-12.9-9-17.7-.4-1.2 0-2.5 1-3.3 2-1.8 4.4-3.3 6.9-4.3z"/></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"/></clipPath><g class="st18"><path class="st19" d="M245.5 76.1H294v43.8h-48.5z"/><path class="st4" d="M264.8 81.9c-1 13.5 4.7 25.2 18.7 34.9l-27.4-2.8-6.3-21.9 15-10.2z"/><path class="st20" d="M261 93.9h.8l2.2-.2c2.2-.4 4.4-1 6.4-1.9l1.6-.8 1.5-.9 1.3-1 1.1-1 1.5-1.6.5-.6c.1-.2.5-.3.7-.2.2.1.3.5.2.7v.2l-.4.5c-.5.6-1 1.2-1.5 1.7-.8.7-1.6 1.4-2.5 2l-1.6.9-1.7.8-1.8.6-1.7.5c-1.1.3-2.1.4-3.2.5h-3.1c-.1 0-.1-.1-.1-.2h-.2zM263.6 99.1c1.1.2 2.1.2 3.2.1l1.5-.2 1.7-.3 1.7-.5 1.7-.7 1.7-.9 1.5-1c.9-.6 1.7-1.3 2.5-2.1l1.5-1.7.4-.5v-.2c.2-.2.5-.1.7.1.1.1.1.3.1.4v.2l-.4.6c-.5.6-1 1.2-1.6 1.8-.8.8-1.7 1.5-2.6 2.2l-1.6 1-1.8.9-1.9.7-1.8.5c-1.1.2-2.3.3-3.4.3s-2.2-.2-3.2-.5c-.1 0-.1 0-.1-.1v-.1h.2zM266.4 105.3c1.1 0 2.1 0 3.2-.1l3.2-.4c1.2-.2 2.4-.6 3.5-1.1l1.6-.9 1.4-1.1c.8-.7 1.5-1.5 2.2-2.3l1.3-1.8.4-.7c.2-.2.5-.3.7-.1.2.1.3.3.2.5l-.4.8c-.4.7-.8 1.4-1.3 2-.7.9-1.5 1.7-2.4 2.4l-1.6 1.1-1.8.9c-1.2.5-2.4.8-3.7 1l-3.3.3h-3.2c-.1 0-.2-.1-.2-.2v-.1c0-.1.1-.2.2-.2z"/></g><path class="st2" d="M286.6 76.8c-.4-.4-1.1-.4-1.6 0v.1c-1 1.3-2.4 4.6-.5 11.7.7 2.6 2.1 7.8 4.8 10.1.4.4.5.9.2 1.4-2.5 4.1-1 13 1.8 15.7.5.4 1.1.4 1.6-.1.1-.1.1-.1.1-.2 1.1-2.2 3.6-7.5 5.4-11.4s3.8-7.8 4.7-9.7c.2-.4.1-1-.2-1.3l-16.3-16.3z"/></g><path class="st14" d="M334.8 47.5s6.3-10.5 1.8-15-6.3 2.3-2.6 3.6c1.8.6 2.3 7.9.8 11.4zM347.8 45.3s6.3-17.5 1.8-21.9-6.5 2.1-3 3.8 2.6 14.7 1.2 18.1zM406.6 41.8s1.4-7.4 5.3-7.6 2 3.6-.3 2.7-4.3 2.8-5 4.9zM400.5 41.3s-6.3-10.5-1.8-15 6.3 2.3 2.6 3.6c-1.8.7-2.3 8-.8 11.4zM370.4 11.6s-5.2 9.5-4.6 15.9 4.5 14.4 12.4 14.4c0 0-7.2-4.6-8.4-10.8s-.3-19 .6-19.5z"/><ellipse transform="rotate(-5.101 410.786 218.777) scale(.99996)" class="st21" cx="410.8" cy="218.8" rx="1.7" ry="2.8"/><path class="st22" d="M346.6 67.1s-10.1-3.3-10 8.5c.1 9.3 5.9 16.5 7.1 16.5 1.5-.1 2.7-1.5 2.6-3 0-.4-.2-.8-.4-1.2-.9-2.1-1.4-4.3-1.4-6.5-1.1.7-2.6.4-3.3-.7-.7-1.1-.4-2.6.7-3.3.9-.6 2-.5 2.8.1.4-2.8 1-5.5 1.9-8.2.2-.7.2-1.5 0-2.2z"/><circle id="mouth" cx="395.5" cy="113.9" r="1.8"/></g><g class="js-onboarding-ed-anim-bathtub-periscope"><defs><path id="SVGID_9_" d="M754.5 311.3L725 296.6c.2-.4 17.5-36.9 28.2-58.8 4.2-8.6 5.1-15.3 3.5-19-2.9-6.6-14.8-8.7-18.9-9.1l7-39.9c3.6.4 33.5 3.7 47.6 29 6.2 11 3.2 27-10 54.1-10.5 21.7-27.7 58.1-27.9 58.4z"/></defs><clipPath id="SVGID_10_"><use xlink:href="#SVGID_9_" overflow="visible"/></clipPath><g class="st23"><path class="st24" d="M698.2 155.5h115.9v177.7H698.2z"/><path class="st25" d="M729.9 199.9s34.7-.2 38.8 16.4-8.3 36.6-15.9 47.3c-4.8 6.8-9.9-6.6-9.9-6.6s9.5-28.5 3.9-22.9l-15.2-17.6-1.7-16.6z"/><path class="st26" d="M737.1 171.1s-2.8 13.7 19.2 16.5c14.4 1.8 26 9.8 29.6 20.8 7.1 21.7-17.2 62.2-16.3 71.4l43.7-76.4-30.5-41-46.8-7.2 1.1 15.9z"/></g><ellipse transform="rotate(-76.301 741.723 189.573)" class="st24" cx="741.7" cy="189.6" rx="20.4" ry="12"/><ellipse transform="rotate(-76.301 741.723 189.573)" class="st27" cx="741.7" cy="189.6" rx="17" ry="9.9"/><g class="js-onboarding-ed-anim-bathtub-periscope-eye"><path class="st0" d="M738.9 197.9c5.5 1.3 11.6-4.3 11.6-4.3s-2.5-8.5-8-10.2-9 3.2-9 3.2-2.3 9.5 5.4 11.3z"/><ellipse transform="rotate(-76.301 739.107 189.599)" cx="739.1" cy="189.6" rx="4.7" ry="2.9"/></g><ellipse transform="matrix(.04442 -.999 .999 .04442 555.246 918.702)" class="st0" cx="757.9" cy="169.1" rx="6.3" ry="6.3"/><ellipse transform="matrix(.04442 -.999 .999 .04442 575.53 940.91)" class="st0" cx="779.6" cy="169.6" rx="4.4" ry="4.4"/><ellipse transform="matrix(.04442 -.999 .999 .04442 546.065 914.557)" class="st0" cx="751.1" cy="171.8" rx="4.4" ry="6.6"/><path class="onboarding-ed-anim-bathtub--drip1 js-onboarding-ed-anim-bathtub-drip st0" d="M781.1 188.8c-.1 2.5-2.2 4.4-4.7 4.3-2.5-.1-4.4-2.2-4.3-4.7.1-2.4 3-22.2 5.4-22.1s3.7 20 3.6 22.5z"/><ellipse transform="matrix(.04442 -.999 .999 .04442 563.897 937.627)" class="st0" cx="772.1" cy="174" rx="8.3" ry="8.3"/><ellipse transform="matrix(.04442 -.999 .999 .04442 557.146 936.055)" class="st0" cx="767.9" cy="176.8" rx="8.2" ry="17"/><ellipse transform="matrix(.04442 -.999 .999 .04442 566.772 928.702)" class="st0" cx="768.8" cy="168.1" rx="8.6" ry="8.6"/></g><g id="Bath"><path class="st0" d="M871 238.4s-8 25.8-26.6 31.1h37.7s-4.8-8.7 0-28.1l-11.1-3z"/><path class="st28" d="M914.8 201.2h10.1v16.5h-10.1z"/><path class="st29" d="M926.9 279.8l-10.5-.8c-1.3-.1-2.3-1.2-2.3-2.5l-.7-41.3c.3-6-2.7-10-8.6-8.7s-17.3 3.5-21.1 19c-.2.9-.9 1.5-1.7 1.8-4.2 1.4-8.8 1.6-13.1.6-1.4-.4-2.2-1.8-1.8-3.2v-.1c1.5-4.3 5-13.2 9.9-19.6 14.5-19 44.8-14.1 47.8-13.8s5 4.4 4.9 7.9v58.2c0 1.4-1.1 2.5-2.5 2.5h-.3z"/><path class="st30" d="M929.1 207.1h-18.9l-2.5-20.5h23.9z"/><path class="st0" d="M874.4 239.8v-.6c.1-.4.2-1 .4-1.7s.5-1.6.9-2.6l.6-1.6.8-1.7c.6-1.2 1.3-2.4 2.1-3.6l.6-1 .7-.9c.5-.7 1-1.3 1.5-1.9 1.1-1.3 2.4-2.4 3.7-3.5l2.3-1.6 2.3-1.4c.8-.5 1.6-.9 2.4-1.2.8-.4 1.6-.7 2.4-1l2.5-.8 2.4-.6 4.6-.8 4.2-.4c2.1-.1 4.2 0 6.3.3l1.7.4.6.2c.3.2.4.6.2 1-.1.2-.3.3-.5.3h-4.8l-3.3.3-3.9.7-4.3 1-2.3.6-2.2.8c-.8.3-1.5.6-2.2.9l-2.1 1.1-2.1 1.2-1.9 1.4-1.8 1.5c-.6.5-1.1 1.1-1.7 1.6l-1.5 1.6-.7.8-.7.8c-.9 1.1-1.6 2.2-2.3 3.2l-.9 1.5-.8 1.4-1.2 2.3-.7 1.5-.2.6c-.1.3-.4.4-.6.3-.3-.1-.4-.4-.4-.6l-.1.2z"/><path class="st31" d="M925.5 218.7v52.1"/><path class="st32" d="M883.8 410c26.8-35 65.4-95.4 53.3-139.4H253.4c-3.8 54.8 16.7 98.8 45 139.4h585.4z"/><path class="st0 js-onboarding-ed-anim-bathtub-water onboarding-ed-anim-bathtub-water--3" d="M674.2 277.8s4-16.7 23.5-16.7 23.5 13 23.5 13 0-18.8 24-20.8 26.5 22.4 26.5 22.4 3.5-9.6 21-11.6 22.5 13.7 22.5 13.7 9.9-16.8 30-16.8c33.9 0 33.9 16.8 33.9 16.8H674.2z"/><circle class="st0 js-onboarding-ed-anim-bathtub-water onboarding-ed-anim-bathtub-water--2" cx="286.4" cy="267.2" r="20.1"/><circle class="st0" cx="317.5" cy="267.2" r="14.1"/><ellipse class="st0" cx="451.8" cy="265.9" rx="30.4" ry="21.8"/><ellipse class="st0 js-onboarding-ed-anim-bathtub-water onboarding-ed-anim-bathtub-water--1" cx="490.3" cy="274" rx="31.8" ry="22.9"/><circle class="st33 js-onboarding-ed-anim-bathtub-bubble onboarding-ed-anim-bathtub-bubble--3" cx="331.6" cy="224" r="8.3"/><path class="st0" d="M336.6 271.1s11.4-20 31.4-20 25.6 17.7 25.6 17.7 8.4-9.3 15-9.3 16.4 10 16.4 11.6h-88.4zM513 272.9s11.4-20 31.4-20 25.6 17.6 25.6 17.6 8.4-9.3 15-9.3 16.3 10.1 16.3 11.7H513z"/><path class="st34" d="M253.4 271.8c-.7 10.6-.5 21.2.6 31.8h684.3c1.7-11.1 1.6-21.9-1.1-31.8H253.4z"/><path class="st35" d="M253.4 272.7c-.4 6.3-.5 12.4-.3 18.4h686.3c.1-6.2-.7-12.4-2.3-18.4H253.4z"/><path class="st36" d="M244.2 285h724.3s2.3-20.6-16.6-20.6H261.2s-17-1-17 20.6z"/><circle class="st33 js-onboarding-ed-anim-bathtub-bubble onboarding-ed-anim-bathtub-bubble--2" cx="311.8" cy="207.5" r="5.4"/><circle class="st37 js-onboarding-ed-anim-bathtub-bubble onboarding-ed-anim-bathtub-bubble--1" cx="265.1" cy="242.6" r="2.7"/><circle class="st33 js-onboarding-ed-anim-bathtub-bubble onboarding-ed-anim-bathtub-bubble--4" cx="856.3" cy="246.7" r="5.4"/><g class="onboarding-ed-anim-bathtub--drip2 js-onboarding-ed-anim-bathtub-drip"><path class="st38" d="M341.9 370.3c0 9-2.4 11.7-5.4 11.7s-5.4-2.6-5.4-11.7 2.4-21 5.4-21 5.4 11.9 5.4 21z"/><path class="st0" d="M338.9 360.3c0 4.1-1.1 5.3-2.4 5.3s-2.4-1.2-2.4-5.3 1.1-9.5 2.4-9.5 2.4 5.4 2.4 9.5z"/></g><g class="st39"><path class="st40" d="M901 224.8c.9-.7 1.9-1.3 3-1.6l1.6-.4h2.9l1 .2 2 .8h.5l.4.3.8.6.8.7.7.8c.4.5.7 1 1 1.6.2.5.4 1.1.5 1.6.2.8.3 1.7.2 2.5 0 .3-.1.5-.1.7v.3c0 .2-.2.3-.3.3-.2 0-.4-.2-.4-.3v-.8l-.3-.9-.5-1.1c-.4-.9-.9-1.7-1.6-2.4l-.6-.5-.6-.5-.3-.2-.4-.2-.4-.2h-.3l-1.6-.6-1.6-.4c-1-.1-1.9-.2-2.9-.1l-2.2.3h-.8c-.2.1-.4 0-.5-.2-.1-.2 0-.4.1-.5l-.1.2z"/></g><path class="st41" d="M251 274.7h690.3"/><path class="st42" d="M919.4 188.5v16.6"/><path class="st43" d="M924.8 188.5l-.7 16.6M914.5 188.5l.4 16.6"/><path class="st44" d="M910.5 188.5l1.1 16.6M929.1 188.5l-1.5 16.6"/><circle class="st0" cx="333.1" cy="219.9" r="1.9"/><circle class="st0" cx="313.2" cy="205.9" r="1.4"/><circle class="st0" cx="857.2" cy="244.3" r="1.1"/><path class="st38" d="M358.9 267.9c-12.4 8.2-11 70.5-22.4 70.5s-3.3-61.7-18.9-70.5c-7.1-4 9.2-14.8 20.6-14.8s27.5 10.3 20.7 14.8z"/><path class="st0" d="M352.9 263.6c-8.8 5.8-7.8 49.9-15.9 49.9s-2.4-43.7-13.4-49.9c-5-2.9 6.5-10.5 14.6-10.5s19.5 7.3 14.7 10.5z"/></g></svg>'
});
this["DDG"]["templates"]["hp_onboarding_ed_slide4"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="420" viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax" class="onboarding-ed__image--animated"><style>.st0{fill:url(#SVGID_1_)}.st1,.st2{fill:#8ab2db}.st2{opacity:.5;enable-background:new}.st3{clip-path:url(#SVGID_3_)}.st4{fill:#fff}.st5{fill:#c4e0ff}.st6{opacity:.3;fill:#07397a;enable-background:new}.st7{fill:#303c3d}.st8{clip-path:url(#SVGID_5_)}.st9{fill:#5d6063}.st10{fill:#4b4e52}.st11{fill:#6f7478}.st12{fill:#3e474d}.st13{clip-path:url(#SVGID_7_)}.st14{fill:#79a3c9}.st15{opacity:.1}.st15,.st16,.st17{enable-background:new}.st16{fill:#fff;opacity:.1}.st17{opacity:.2}.st18{clip-path:url(#SVGID_9_)}.st19,.st20{enable-background:new}.st19{fill:#fff;opacity:.2}.st20{opacity:.15}.st21{fill:#3e4e4f}.st22{fill:#eb5c00}.st23{clip-path:url(#SVGID_11_)}.st24{fill:#c74e00}.st25{fill:#ffb663}.st26{opacity:.3;fill:#0c3d5e;enable-background:new}.st27{clip-path:url(#SVGID_13_)}.st28{fill:#5e7578}.st29{fill:#7d5b47}.st30{fill:#473429}.st31{clip-path:url(#SVGID_15_)}.st32{fill:#7a9a9c}.st33{opacity:.6}.st34{fill:#222a2b}.st35{clip-path:url(#SVGID_17_)}.st36{fill:#db5600}.st37{fill:#c44d00}.st38{fill:#b53c00}.st39{clip-path:url(#SVGID_19_)}.st40{fill:#5a7073}.st41{fill:#48595c}.st42{clip-path:url(#SVGID_21_)}.st43{fill:#4c5f61}.st44{clip-path:url(#SVGID_23_)}.st45{fill:#506566}.st46{clip-path:url(#SVGID_25_)}.st47{fill:#3a70a3}.st48{fill:#22507d}.st49{fill:#72a0cc}.st50{clip-path:url(#SVGID_27_)}.st51{clip-path:url(#SVGID_29_)}.st52{fill:#ffae57}.st53{clip-path:url(#SVGID_31_)}.st54{fill:#e67a00}.st55{clip-path:url(#SVGID_33_)}.st56{fill:#263030}.st57{clip-path:url(#SVGID_35_)}.st58{clip-path:url(#SVGID_37_)}.st59{clip-path:url(#SVGID_39_)}.st60{fill:#9e552f}.st61{fill:#854521}.st62{fill:#cf8b68}.st63{fill:#2a3636}.st64{clip-path:url(#SVGID_41_)}.st65{fill:#405152}.st66{clip-path:url(#SVGID_43_)}.st67{clip-path:url(#SVGID_45_)}.st68{fill:#465859}.st69{clip-path:url(#SVGID_47_)}.st70{fill:#60787a}.st71{fill:#9e4212}.st72{fill:#717f87}.st73{fill:#e3eeff}.st74{fill:#c7deff}.st75{fill:#d47200}.st76{clip-path:url(#SVGID_49_)}.st77{opacity:.46;fill:#ffb663;enable-background:new}.st78{fill:#85380d}.st79{clip-path:url(#SVGID_51_)}.st80{clip-path:url(#SVGID_53_)}.st81,.st82{opacity:.8;fill:#def4ff;enable-background:new}.st82{opacity:.3;fill:none;stroke:#000;stroke-width:1.42;stroke-linecap:round;stroke-miterlimit:10}.st83{fill:#668082}</style><g id="Summit"><defs><path id="SVGID_2_" d="M891 466.7c.9.5 1.3 1.6.9 2.5-.3.7-1.1 1.1-1.9 1.1l-573.6.7 72.8-52.6c3-2.2 5.6-5 7.4-8.3 1.9-3.5 5-8.1 8.9-10.8 6.9-4.8 17.2-4.8 17.2-4.8s-10.4 2.8.3-.1 29-13.7 29-13.7 1.6-5.7 7.1-11.2 16.8-9.9 16.8-9.9l.7-.2 17.8-10.3c.1-.1-9.7 6.1.3-.2s18.5-23.9 26.7-25.2 35.1 5.5 35.1 5.5 5.6-4.5 11.6-5.1 5.6 3.2 5.6 3.2l3.9 2.3s-24.6-3.3.1.1 32.4 16 41.5 20.6 15.9-1.7 22.2.8c3.8 1.5 6.8 4.5 8.3 8.3.2.2 2.2 5.7 2.2 5.7 13.4 15.3 46.4 17 44.7 15.2h.4l22.8 1.9c.1 0-10.3 3.3.2 0s25.6.4 29.8 2.1 6.1 7.2 6.1 7.2-4-4.9.6.5 40 22.4 40 22.4c8.7 4.1 11.4 16.2 11.4 16.2l83.1 36.1z"/></defs><clipPath id="SVGID_3_"><use xlink:href="#SVGID_2_" overflow="visible"/></clipPath><g class="st3"><path class="st4" d="M285.8 294.1H910v193H285.8z"/><path class="st5" d="M862.6 387.9l-194.2-58.5-23.9 9.2c-4.4-5.5-11.8-10.5-22.9-13.4-9-2.4-54-.1-62.4 5.2-20.4 13-14.2 11.9-20.2 16.5-13.5 10.4-24.2-4.2-33.9 9.6-6.8 9.8 5.1 10.2 15.6 13.5 10.5 3.3 8.5 15.5 18.1 14.8 12.3-.8 27.3 11.1 40.9 7 8.4-2.5 32 1.1 33.2 11.5 2.7 24.1 86.5 34.8 86.5 34.8l73.2 39.6 128.1-3.8-38.1-86zM514.5 382.5c-6 2.4-3.5 9.3-11.4 9.3s-13.9 10.9-1.5 10.9 30.6 1 26.6-6.5-5.6-5.7-6.9-9c-2.3-5.7-4.9-5.5-6.8-4.7zM400.6 403.5c-6 10.4 4.2 2.9 12.1 2.9s12 4.6 3.2 13.4c-13.7 13.7-38.7 9.6-33.8-8 2.3-8.2 10.2-11 11.5-14.2 2.4-5.8 5.1 5.2 7 5.9z"/></g><path class="st6" d="M546 342c-11.5 16.2 23.6 14.8 36.8 26.5 3.3 3 7.3 8.3 14.5 10.7s20-1.8 24.3 2c16.9 14.7-3.5 23 18.2 29.3 15.2 4.4 25.3 13.1 39.9 20.3 8.1 4 14.7 8 24.3 8.5s35.6 6.2 51 13.1c29.9 13.4 87.9 5.1 119.7 7-31.4-14.7-65.6-38-98.1-47.8-11.1-3.3-20.3-.9-33-3.3-15.9-3.1-28.6-17.1-41.2-19.8-18.1-3.9-29.9 6.6-49.3-6.4-11.8-7.9-21.7-22.9-33.7-31.8-22.1-16.4-48.6-36.4-73.4-8.3z"/></g><g id="Rucksack"><path class="st7" d="M749.5 102.3s1.9 13.1 8.8 20l-5.8 5.8s-9.3-10.9-9.3-19.3l6.3-6.5z"/><defs><path id="SVGID_4_" d="M670.2 49s-.3-16.6 25.9-16.6 46.6 11.5 50.9 14.4c8.3 5.7 10.5 16.9 10.5 16.9s-1.7 13.2-3.5 36.9c-3.3 43.4-14.8 101.4-26.9 125.8-5.3 10.7-9.5 16.1-19.2 18.5-1.8.5-19.1 3-19.1 3L632.3 207l37.9-158z"/></defs><clipPath id="SVGID_5_"><use xlink:href="#SVGID_4_" overflow="visible"/></clipPath><g class="st8"><path class="st9" d="M634.1 17.3h132.2v243H634.1z"/><path class="st10" d="M733.6 48.6s-7.6 90.8-16.2 128c-6.7 28.5-15.8 69.2-26.7 71s-83.9-36.2-83.9-36.2l29.3-184.7s66.3 0 97.5 21.9z"/><path class="st11" d="M758.3 102.3c0-1.1-2.9-53.2-26-39.8 0 0-4.9-18-67.4-13.2-.4 0 20.9-24.6 20.9-24.6l71.3 5.3 1.2 72.3z"/><path class="st12" d="M700.5 68.1c-4.6 30.7-12.9 41.3-12.9 41.3s13.3 1.6 21.6 19.2-25.3 96.9-25.3 96.9l-25.6-97.6 2.3-75.5s44.1-12.4 39.9 15.7z"/></g></g><g id="Alpinist"><defs><path id="SVGID_6_" d="M660.1 103.6s-29.3 1-64.8-17.1-40.3-5.2-49.1-3.8-29.8-4.7-29.8-4.7l-.9 24.2s15 4.1 29-.2 75.5 7.9 75.5 7.9l44 .3-3.9-6.6z"/></defs><clipPath id="SVGID_7_"><use xlink:href="#SVGID_6_" overflow="visible"/></clipPath><g class="st13 js-onboarding-ed-anim-scarf-back"><path transform="rotate(-8.899 590.072 93.15)" class="st14" d="M509.9 61.7h160.2v62.9H509.9z"/><path class="st15 js-onboarding-ed-anim-fold" d="M590.1 76.3c1.3 1-9 31.3-9 31.3l91.7 10.6-6.1-19.6-76.6-22.3zM561.4 71.8l-6.5 34.9-19.6.7 4.9-31z"/><path class="st16" d="M564.4 70.5l-5.8 37 11.3-1.8 5.7-33.5z"/><path class="st17" d="M632.1 93.7c-2.2 8.2 1.7 16.1 9.4 24 0 0 32.8 1.5 33.8.3s-7.6-20.4-7.6-20.4l-35.6-3.9z"/><path class="st16" d="M512.8 73.4l11.6 3.3-1.1 31.7-12.6-4z"/></g><defs><path id="SVGID_8_" d="M652.2 104.2s-20.8 1.8-36.6-2.1c-11.7-2.9-35.7-9.1-56-8.5s-21.8 12.6-37.7 18.7c-10.6 3.9-21.6 6.8-32.8 8.5l8.9 15.4c10-1.6 19.7-4.7 28.7-9.3 13.7-7.3 22.5-19 35.3-17 41.6 6.7 89.5 10.7 90.8 8.8l-.6-14.5z"/></defs><clipPath id="SVGID_9_"><use xlink:href="#SVGID_8_" overflow="visible"/></clipPath><g class="st18 js-onboarding-ed-anim-scarf-front"><path transform="rotate(-8.048 573.36 111.054)" class="st14" d="M480.9 79.3h184.7v63.4H480.9z"/><path class="st15 js-onboarding-ed-anim-fold" d="M544.2 92.9l7.3 28.9s-25.6 14.8-25.8 13.6-8.1-27.9-8.1-27.9l26.6-14.6zM604.3 96.4l.3 26.7s53.9 4.3 54.7 3.2-2.2-26.3-2.2-26.3l-52.8-3.6z"/><path class="st19" d="M553 90.1l4.6 27.6 10.7-1.4-3.6-26.2z"/><path class="st20" d="M629.9 101.3c-2.5 8-1.3 15.8 3.2 23.3l26.4 2.7-1.7-28.3-27.9 2.3z"/></g><path class="st21" d="M559.6 143.1s-5 13.9-10.3 18.5-10.9-17-10.9-19.6-4.7-16.7 3.5-23c6.1-4.7 11.1 11.9 14.2 20.2.7 1.7 1.9 3.1 3.5 3.9z"/><path class="st22" d="M556.4 139.5s23.5 20 45.7 16.6c26.8-4 31.8-24.3 34.9-29.4.2-.3 20.1-.4 20 0L637 155s-5.1 17.5-35 20.1-54.9-12.7-54.9-12.7c9.3-6.9 11.6-14.7 9.3-22.9z"/><defs><path id="SVGID_10_" d="M556.4 139.5s23.5 20 45.7 16.6c26.8-4 31.8-24.3 34.9-29.4.2-.3 20.1-.4 20 0L637 155s-5.1 17.5-35 20.1-54.9-12.7-54.9-12.7c9.3-6.9 11.6-14.7 9.3-22.9z"/></defs><clipPath id="SVGID_11_"><use xlink:href="#SVGID_10_" overflow="visible"/></clipPath><g class="st23"><path class="st22" d="M537.3 108.2h129.6v73.5H537.3z"/><path class="st24" d="M549.8 149.1s25.1 19.6 56.3 17.1 45.8-21.7 50.9-24.6l-4.3 32.4-112.6 10.9 9.7-35.8z"/><path class="st25" d="M657 120.5s-31 38.2-61.3 35.9l58.9-38.4 2.4 2.5z"/></g><path class="st26" d="M550.5 124.2l-5.6 1.7 1.8 21.5c1.8-.9 3.9-.9 5.7.1l-1.9-23.3z"/><defs><path id="SVGID_12_" d="M553.6 113s4.8-4.4 4-7.6-4.2-5.3-7.4-2.6-3 5.3-3 5.3 1 5.3 6.4 4.9z"/></defs><clipPath id="SVGID_13_"><use xlink:href="#SVGID_12_" overflow="visible"/></clipPath><g class="st27"><path transform="rotate(-14.798 553.616 109.139)" class="st21" d="M544.2 101h18.7v16.2h-18.7z"/><path class="st28" d="M553.3 113.9c1.2-1.8 1.8-3.9 1.8-6.1-.2-3.3-4.1-6-4.1-6l7.7-3.3 5.3 10.3-9.1 7.4-1.6-2.3z"/></g><path class="st29" d="M565.2 341.7c-1.5 0-2.7-1.1-2.8-2.6L535.6 11.2c-.1-1.6 1-3 2.6-3.1 1.6-.1 3 1 3.1 2.6l26.8 327.9c.2 1.5-.9 2.9-2.5 3.1h-.4z"/><path class="st30" d="M551.3 133.5l-5.6.7.8 9.7c1.1-.7 3.8-2.3 5.5-1.9l-.7-8.5z"/><path class="st30" d="M541.2 10.7c-.1-1.5-1.4-2.7-3-2.6-.5 0-.9.2-1.3.4.8.5 1.3 1.3 1.4 2.2l26.8 328c.1 1.1-.4 2.2-1.4 2.7.5.3 1 .4 1.5.4h.2c1.5-.1 2.7-1.4 2.6-3v-.1l-26.8-328z"/><defs><path id="SVGID_14_" d="M546.5 109c7.8 0 10.9 4.9 11.6 7.6s2.7 11.2.3 17c-.6 1.3-2 2.1-3.4 2l-2.1-.3c-1.4-.2-3.6-1.1-4.7-.2s-4.3 3.1-5.1 6.4.7 13.7 1.9 16.6c.5 1.4 1.3 2.7 2.3 3.7-2.2 4.3-14.1-25.5-9.9-41.4 2.2-8.8 7.2-11.4 9.1-11.4z"/></defs><clipPath id="SVGID_15_"><use xlink:href="#SVGID_14_" overflow="visible"/></clipPath><g class="st31"><path class="st28" d="M527 100.7h40.4v64.8H527z"/><path class="st32" d="M546.6 108.5s-9.3 6-8.2 20.6c.7 10.1-1.9 22.5-1.9 22.5l-5.7 6.8-6.2-42.4 22-7.5z"/><path class="st21" d="M546.8 106.9c5 9.5 3.8 22.2 1.5 28.5 0 0 12.1 5.7 12.1 4.7s.6-27.2.6-27.2l-14.2-6z"/><g class="st33"><path class="st34" d="M543.8 130l.5-.7c.5-.6 1.1-1 1.7-1.4l1.4-.6.8-.2h2.7l1.8.5c1.2.4 2.2 1.1 3.1 1.9.8.7 1.4 1.6 1.9 2.5.4.6.7 1.3.9 2l.2.8c0 .2-.2.4-.5.3-.1 0-.2-.1-.2-.1l-.2-.7c-.2-.7-.5-1.3-.9-1.9-.5-.8-1.1-1.6-1.8-2.3-.8-.8-1.8-1.4-2.8-1.8l-1.7-.5h-1.6l-1.5.2-1.3.5c-.6.3-1.2.7-1.7 1.1l-.6.6h-.2c-.1 0-.1 0-.1-.1s.1-.1.1-.1z"/></g><g class="st33"><path class="st34" d="M544.7 123.2l.6-.6c.6-.5 1.2-.9 1.9-1.2l1.4-.5.8-.2h2.7l1.8.5c1.2.4 2.3 1 3.2 1.9.8.7 1.5 1.6 2 2.5.4.7.7 1.4.9 2.1l.2.8c0 .2-.2.4-.5.3-.1 0-.2-.1-.2-.1l-.2-.8c-.2-.7-.5-1.3-.9-1.9-.5-.8-1.1-1.6-1.8-2.3-.8-.8-1.8-1.4-2.9-1.8l-1.7-.4h-3.2l-1.4.4c-.7.3-1.3.6-1.9 1l-.6.5h-.2c-.1 0-.1 0-.1-.1s.1-.1.1-.1z"/></g><g class="st33"><path class="st34" d="M545.2 116.5l.7-.5c.6-.4 1.3-.7 2-.9 1-.3 2.1-.4 3.1-.3l1.8.2 1.8.5c1.2.4 2.2 1.1 3.1 1.9.8.7 1.4 1.6 1.9 2.5.4.6.7 1.3.9 2l.2.8c0 .2-.2.4-.5.3-.1 0-.2-.1-.2-.1l-.2-.7c-.2-.7-.5-1.3-.9-1.9-.5-.8-1.1-1.6-1.8-2.3-.8-.8-1.8-1.4-2.8-1.8l-1.7-.5-1.7-.2h-1.6l-1.4.2c-.7.2-1.4.4-2 .7l-.7.4h-.2c-.1-.1-.1-.2 0-.3s.2-.1.2 0z"/></g></g><defs><path id="SVGID_16_" d="M541.8 19.4s-37.8-10.8-62.2-.7S442.4 39 419 41.3l6 74.3s43.5-4.3 64.1-18.2c23.4-15.7 58.6-8.1 58.6-8.1l-5.9-69.9z"/></defs><clipPath id="SVGID_17_"><use xlink:href="#SVGID_16_" overflow="visible"/></clipPath><g class="st35 js-onboarding-ed-anim-flag"><path class="st22 js-onboarding-ed-anim-fold" d="M400.4-9.6h157.9v138.7H400.4z"/><path class="st36" d="M507.4 11.3l7.9 82.5 42.3-2.8-6.2-73-20.8-5.5zM389 38.2l7.9 82.6 42.3-2.8-7.3-84.9-19.7 6.4z"/><path class="st37" d="M538.8 15.8l6.1 76.4h7.4l-7.4-76.4z"/></g><path class="st38" d="M626.8 212.1s15.3 26.3 34.3 33.6 28.3 6.3 28.3 6.3-18.6-42.9-62.6-39.9z"/><defs><path id="SVGID_18_" d="M669 410.8c.8 12.3 5.4 21.7 16 21.1s14-9.7 14.4-22-6.4-26-8.1-27.8l-20.6 5c-1.5 7.8-2.1 15.8-1.7 23.7z"/></defs><clipPath id="SVGID_19_"><use xlink:href="#SVGID_18_" overflow="visible"/></clipPath><g class="st39"><path class="st40" d="M664.7 379.4h38.6v55.5h-38.6z"/><path class="st41" d="M680.3 380.9s-6.2 49.3 7.8 51.9c0 0 23.4 1.5 10-51.7l-17.8-.2z"/></g><defs><path id="SVGID_20_" d="M672.2 386.6c-.2-.2-1.3 22.5 1.7 32.7s8.5 9.6 11.9 9.2 10.2-5.2 10.2-16-2.9-26-4.6-28.4l-19.2 2.5z"/></defs><clipPath id="SVGID_21_"><use xlink:href="#SVGID_20_" overflow="visible"/></clipPath><g class="st42"><path class="st7" d="M667.7 374h31.7v58.6h-31.7z"/><path class="st43" d="M674.2 383.6s-2.6 21.4.2 32.4 6.2 11 9.4 11 12.9-12.2-4.2-12.2c-2.9-.1-3.1-23.5-5.4-31.2z"/></g><defs><path id="SVGID_22_" d="M664.6 364.4l4 27s4.1 3.9 13 3.1 12.3-4.2 13.1-6-3-28.7-3-28.7l-27.1 4.6z"/></defs><clipPath id="SVGID_23_"><use xlink:href="#SVGID_22_" overflow="visible"/></clipPath><g class="st44"><path class="st28" d="M658 356h45.9v45.9H658z"/><path class="st45" d="M673.8 358.3l6 47s25.3-9.6 25.3-10.6-5.3-38.3-5.3-38.3l-26 1.9z"/></g><defs><path id="SVGID_24_" d="M656.1 217c-1.9 0-53.9-12.7-69 6.3-16.5 20.9-14.7 64.2-11.5 69.9s2 7.2 2 7.2 13 4 24.5 0c4-1.5 4.4-9.6 4.1-18.3-.4-12.6-4.5-29.2 1.5-37.6 13.9-19.3 50.9 3.4 67.6 3.4L656.1 217z"/></defs><clipPath id="SVGID_25_"><use xlink:href="#SVGID_24_" overflow="visible"/></clipPath><g class="st46"><path class="st47" d="M568 202.6h111.7v117.9H568z"/><path class="st48" d="M667.2 223.7S614.3 216 601 233s-7.1 42.7-7.1 47.3 3.7 14.7-10.2 17.7c-5.7 1.2-6.9-2.2-6.9-2.2l-3.3 18.8 39.9-8.8 26.3-55 44.9-16.7-17.4-10.4z"/><path class="st49" d="M624.4 212.4c0-.2-17.2-1-29.2 8.5s-18 35-17.4 67.1c0 3.5-2.4 6.9-3.4 3.3-3.2-11-21.9-92.7 50-78.9z"/><path class="st48" d="M626.6 212.4s21.8 4.6 27.3 22.2c0 0 .7-18-.1-21.4s-19.7-2.8-27.2-.8z"/></g><defs><path id="SVGID_26_" d="M653.3 216.3s.8 29.3 3.6 63.5c2.6 32.5 4.5 66 4.5 66-.9 3.7-1.4 7.5-1.4 11.3 0 6 5.7 17 18.1 14.9s14.2-6 14.2-6 2.2-4.3 2.2-12.1-4.3-19.9-4.3-24.8-2.5-89.7-4.3-95l-32.6-17.8z"/></defs><clipPath id="SVGID_27_"><use xlink:href="#SVGID_26_" overflow="visible"/></clipPath><g class="st50"><path class="st47" d="M646.3 201.7H706v182.8h-59.7z"/><path class="st48" d="M673.8 218.5l1.4 29.3 4.5 93.9s8.5 9.4 8.5 16.2-9.3 11.3-18.8 11.3-19-5.6-19-5.6l21 18.7 27.2-12.3-5.6-145.2-19.2-6.3z"/></g><defs><path id="SVGID_28_" d="M699.1 127.2c-8.7 38.5-11.6 79.9-9.7 124.8-21.1-29.4-54.5-39.9-62.7-39.9-8.9-29.9 2.7-68.2 5.1-79 1.3-6.3 6-11.3 12.2-13l55.1 7.1z"/></defs><clipPath id="SVGID_29_"><use xlink:href="#SVGID_28_" overflow="visible"/></clipPath><g class="st51"><path class="st22" d="M619.4 99.7h76v150.9h-76z"/><path class="st24" d="M667.7 117.8s-25.6 55-12.8 106.4 42.5 43.4 42.5 43.4l6.1-148.4-35.8-1.4z"/><path class="st52" d="M653.7 120.1s-21.3 32-23.9 49.9-3.2 39.7-.6 49.4l-18.5-6 14.1-98.4 28.9 5.1z"/></g><defs><path id="SVGID_30_" d="M694.5 126.6s65.7 12 59.1 48.7-62.2 49.5-62.2 49.5l-2.4-19.1s40.2-10.6 43.1-27.7c4.2-24.9-41-31.3-41-31.3l3.4-20.1z"/></defs><clipPath id="SVGID_31_"><use xlink:href="#SVGID_30_" overflow="visible"/></clipPath><g class="st53"><path class="st22" d="M673 112.5h90.7V233H673z"/><path class="st24" d="M689.8 137.8c11.2 2 21.9 5.8 31.8 11.4 15.5 9 13.9 26 8.9 31s-47-21.3-47-21.3l6.3-21.1z"/><path class="st54" d="M684.2 214.3c1.5-1.5 48.5-6.9 63.1-31.8 7.6-13 4.8-22.1 4.8-29.6 0 0 10.4 33.6-1.3 45.4s-69.3 35.8-69.3 35.8l2.7-19.8z"/></g><defs><path id="SVGID_32_" d="M710.3 120.6s-.3 1.6-.6 1.7c-3.4 1.5-16.2 3.3-17.8 16.7-1.9 15.3 8.1 33.8 12 38.6.1.5.2 1 .2 1.5l-10 7.4s-18.4-18.8-18.4-41.8 18.5-26.5 18.5-26.5l16.1 2.4z"/></defs><clipPath id="SVGID_33_"><use xlink:href="#SVGID_32_" overflow="visible"/></clipPath><g class="st55"><path class="st7" d="M670.2 114.7h46.6v75.4h-46.6z"/><path class="st56" d="M695.1 144.2s-11.7-4.3-21.4 8.7c0 0 15.2 34.7 20 39.4l16.6-14.4-15.2-33.7z"/></g><path class="st7" d="M650.3 119.8s-22.7 31-26.7 60c.6-8.6 1.7-17.1 3.2-25.6 0 0 11.8-32.7 14.2-33.5s9.3-.9 9.3-.9z"/><defs><path id="SVGID_34_" d="M644.8 119.1l-10.3 2.8s-4.4.9-.5 4.8 19.8 15.4 21.1 18.4 2.3 5.5 1.8 7.3 13.2-23.4 13.2-23.4l-25.3-9.9z"/></defs><clipPath id="SVGID_35_"><use xlink:href="#SVGID_34_" overflow="visible"/></clipPath><g class="st57"><path class="st22" d="M627.4 112.5H673v44.3h-45.6z"/><path class="st25" d="M640.1 120.1s-6.1 1.8-5.2 4.7 15.7 14.2 18 16.5c2.6 2.7 4.1 6.3 4.1 10 0 4.2-29.8-24.4-29.8-24.4s4.5-7.5 12.9-6.8z"/></g><path class="st54" d="M651.9 115.5H638s-6.7-.5-2.6 3.5 18.3 19 19.9 21.9 3.9 6.3 1.7 11.3 12.9-23.4 13.2-23.4l-18.3-13.3z"/><g><defs><path id="SVGID_36_" d="M651.9 115.5H638s-6.7-.5-2.6 3.5 18.3 19 19.9 21.9 3.9 6.3 1.7 11.3 12.9-23.4 13.2-23.4l-18.3-13.3z"/></defs><clipPath id="SVGID_37_"><use xlink:href="#SVGID_36_" overflow="visible"/></clipPath><g class="st58"><path class="st22" d="M630.4 110h40.4v42.3h-40.4z"/><path class="st25" d="M645.1 116.2s-9-1.3-8 1.5 24.8 25.3 20.7 32.7c0 0-27.8-33.7-28.5-34.1s11.6-4.2 11.6-3.7 4.2 3.6 4.2 3.6z"/></g></g><g><defs><path id="SVGID_38_" d="M648.4 78.8l-6.3-.8c-.8-.1-1.3-.8-1.2-1.6v-.1c.8-4.9 3.7-20.6 7.6-28.5 4.7-9.5 13.4-18.2 28.3-14.9s18.9 21.3 18.9 26-8 22.9-12.3 33.1-4.3 15.9-4.3 15.9-16.5 3.1-16.5 1.9 1.2-7.1 1.2-7.1-21 0-15.4-23.9z"/></defs><clipPath id="SVGID_39_"><use xlink:href="#SVGID_38_" overflow="visible"/></clipPath><g class="st59"><path class="st60" d="M637.4 19.3h66.7v104.9h-66.7z"/><path class="st61" d="M682.3 29.7s6.7 20.1-5.2 54.7c-4.6 13.3-13.4 18.3-13.4 18.3l-.5 12.5 18.3.4 25.1-53.1-6-34.5-18.3 1.7z"/><path class="st62" d="M658.5 34.1s-12.2 20.4-14.6 42.7c-.3 3.2 7.3 1.4 7.3 2.3s-5.1 11.8 2.2 22.1c0 0-22.9-5.3-23.3-5.7S641.9 38 641.9 38l16.6-3.9z"/><path class="st26" d="M646 83.4s2.1-4.3 10.7-6.2 15.4 6.1 21.2 6.1 6-10.9 6.3-15.6 1.5-9.3 6-11.9 9.5 11.3 9.5 11.3-7.5-8.3-10.4-4.3 1.6 19.5-7.4 30.2c-4.7 5.2-11.1 8.6-18 9.7-6.1 1-14.1-.4-14.1-.4s-5.1-12.6-5.6-13.2 1.8-5.7 1.8-5.7z"/></g></g><path class="st63" d="M689.8 199.2c-.7-.7-8.1-10.5-9.4-14.3s-5.1 2.3-5.1 4.6 1.6 12.4 3.6 13.5 10.9-3.8 10.9-3.8z"/><g><defs><path id="SVGID_40_" d="M692.4 229.6s-9.1-14.4-11.8-15.9-8.8.5-11.9 2.3-8.6 3.9-10.8 2.3-5-8.8-1.3-12.5 6.7-6.7 10.7-9c6.7-3.9 11.1-3.3 14.6-2s12.9 5.6 12.9 5.6 12.5 15.2-2.4 29.2z"/></defs><clipPath id="SVGID_41_"><use xlink:href="#SVGID_40_" overflow="visible"/></clipPath><g class="st64"><path class="st7" d="M645.3 183.7h59.2V237h-59.2z"/><path class="st65" d="M666.7 192.6c-3.2 4.8-4.3 10.7-3.1 16.4 2.1 9.3 14.1 10.9 14.1 10.9l-23.1 8.1-8-27.8 20.1-7.6z"/><path class="st63" d="M674.6 179.8s17.6 22.5 7 34.7c-14.8 17 18.2 20.9 18.2 20.9l7.5-30.4-32.7-25.2z"/><path d="M654.1 212.3c.8-1.2 1.7-2.3 2.7-3.4 2.1-2.3 4.5-4.4 7-6.3l1.1-.7 1.1-.7 1.1-.6 1.1-.5c1.4-.5 2.8-.9 4.3-1.1l3.1-.3h1.2c.1 0 .2.1.2.2l-.2.2h-1.2l-3 .4-2 .5-2.2.7-2.2 1-1.1.7-1 .7c-2.5 1.9-4.8 4-6.9 6.3l-2 2.3-.7.9c-.1.1-.3.2-.5.1 0-.1 0-.3.1-.4z" class="st33"/><path d="M654.8 216.1c.8-1.2 1.7-2.3 2.6-3.4 2.1-2.4 4.4-4.4 7-6.2l2.2-1.3 2.2-1.1c1.3-.5 2.7-1 4.1-1.3 1.4-.4 2.8-.6 4.2-.7l.2.2-.2.2c-1.4.2-2.8.5-4.1.9-1.4.4-2.7.8-4 1.4l-2.1 1.1-2.1 1.3c-2.5 1.7-4.8 3.8-6.8 6.1-.9 1-1.8 2.1-2.6 3.3-.1.1-.3.2-.5.1s-.2-.4-.1-.6zM656.7 219.7c.6-1.2 1.3-2.4 2.2-3.5.8-1.1 1.8-2.1 2.8-3.1l1.8-1.5 2.1-1.3 2.2-1.1 2.2-.8 4-1.1c1.3-.3 2.7-.5 4-.6l.2.2c0 .1 0 .2-.1.2l-4 .8c-2.9.7-5.6 1.7-8.2 3.1l-2 1.3-1.8 1.5c-1.7 1.6-3.2 3.4-4.4 5.4l-.5 1c-.2.1-.4 0-.5-.1 0 0 0-.1-.1-.2l.1-.2z" class="st33"/></g></g><g><defs><path id="SVGID_42_" d="M646.1 117.8c-1.1-.4 13.3 13.8 12.7 28.9 0 0 6.8-13.5 11.1-17.8 4.2-3.9 8.7-7.6 13.3-11.1 0 0-30.8 2.2-37.1 0z"/></defs><clipPath id="SVGID_43_"><use xlink:href="#SVGID_42_" overflow="visible"/></clipPath><g class="st66"><path class="st14" d="M640.8 112.2h44.1v38.4h-44.1z"/><path class="st15" d="M681.7 121.2l-24.7 5.5s4.1 3.4 2 22.2c0 0-21.3-7.4-21.1-7.5s5.6-25.3 5.6-25.3l43-1.2-4.8 6.3z"/></g></g><ellipse class="js-onboarding-ed-anim-mountaineer-eye onboarding-ed-anim-mountaineer-eye--right" cx="648.2" cy="57.6" rx="1.1" ry="2.6"/><g><defs><path id="SVGID_44_" d="M649.1 46.6s14.9-5.6 31 4.6c10.5 6.7 13 18.7 13 18.7s12.1-28.7-7.3-38.7c-9.7-5-29.2-3.5-36.7 15.4z"/></defs><clipPath id="SVGID_45_"><use xlink:href="#SVGID_44_" overflow="visible"/></clipPath><g class="st67"><path class="st28" d="M646.6 23H701v50.1h-54.4z"/><path class="st68" d="M681.6 29.4c2 4.5 3.2 25.7-.1 36.7-.1.4 12.8 9.1 12.8 8.8s8-36.7 8-36.7l-20.7-8.8z"/></g></g><ellipse class="js-onboarding-ed-anim-mountaineer-eye onboarding-ed-anim-mountaineer-eye--left" cx="664.9" cy="58.8" rx="1.6" ry="3.1"/><path d="M660.1 88.2h1.8l1.8-.2 1.9-.5 1-.3.9-.4.8-.4.7-.4.6-.4.5-.3.4-.2c.1-.1.3 0 .4.1v.3l-.3.4-.4.5-.5.6-.7.6-.9.6-1 .5-1.1.4c-.7.2-1.5.4-2.2.4h-2c-.6-.1-1.2-.2-1.8-.5-.1 0-.2-.2-.1-.3l.2-.5z"/><path class="st7" d="M546.4 346.7l59.5-10-.2 4.9s-1.7 5.4-6.3 7-13.6 1.1-17 1.7-10.8 3.3-15.5 4.4c-13.5 3-19.5-1.9-20.2-3.6l-.3-4.4z"/><path class="st41" d="M548.5 343.3s-2.9 1.5-1.8 4.1 6.7 5.5 15.4 4.3 17.3-4.7 21.1-5.1 10 .3 15-1.6 7-5 7.6-7.7-3.4-4.4-3.4-4.4l-53.9 10.4z"/><path class="st40" d="M551.2 348.1c-1.1-2.7 1.8-4.1 1.8-4.1l51.3-9.9c-.6-.5-1.2-.9-1.9-1.2l-53.9 10.4s-2.9 1.5-1.8 4.1 4.5 4.3 10.2 4.6c-3.1-.9-5-2.4-5.7-3.9z"/><g><defs><path id="SVGID_46_" d="M580 320.2s1.9 8.6-16.2 12.7c-16.2 3.7-16.9 11.8-14.6 14.1s8.3 5.5 22.1 1.2c9.9-3.1 11.8-3.3 11.8-3.3s9.6.7 14.7-1.8c6.8-3.3 6.9-9.4 5.3-13.3s-4-6.5-4-10.2"/></defs><clipPath id="SVGID_47_"><use xlink:href="#SVGID_46_" overflow="visible"/></clipPath><g class="st69"><path class="st7" d="M546 315.3h65.2v42.2H546z"/><path class="st70" d="M578.4 322.8s.8 5.8-5.4 9.4-18.7 5.7-14 8.6 3.8 5.1-.5 5.1c-7 0-10.1-1.6-9.8-3.7.2-2 14.3-18.2 14.3-18.2l14.9-.9"/></g></g><path d="M648.8 49.4c.1-.3.3-.5.5-.7l.7-.5.9-.3c.6-.2 1.1-.2 1.7-.2h.8c.1 0 .2.1.2.2v.1l-.2.2-.7.2-1.6.3-1.5.5-.6.3-.2-.1c0 .1 0 0 0 0zM673.7 52.6c-.3-.5-.6-1-1-1.4l-1.2-1.3c-.5-.5-1-.9-1.6-1.2l-.9-.5-.9-.4-.9-.3-.8-.2h-1.7c-.1 0-.2-.1-.2-.2l.2-.2h2.7l1 .3 1 .4 1 .5c1.1.7 2.1 1.7 2.8 2.8l.6 1.2.2.5c0 .1 0 .2-.1.2l-.2-.2z"/><path class="st7" d="M649.8 44.8c10.1-4.2 32.5-2.9 45.5 16.2l.8-4.3c-6-12.6-26.1-22.5-44.7-16.6l-1.6 4.7z"/><path class="st71" d="M689.3 75.6c3.7.2 5.9-5.6 5.9-9.9s-4.6-4.4-5.4-3 .8 3.4-.1 6-1.4 6.8-.4 6.9z"/><path class="st72" d="M646.8 40.8l1 2.4v.3c.9 1.5 4.4 1.5 8-.1s5.8-3.8 5.7-5.4l-1.4-3.4-13.3 6.2zM665.6 36.3l-1 3.8c.1 1.8 3 3.8 6.9 4.8s7.7.4 8.4-1.3v-.3l.7-2.8-15-4.2z"/><ellipse transform="rotate(-22.701 653.293 38.865)" class="st73" cx="653.3" cy="38.9" rx="7.4" ry="3.3"/><ellipse transform="rotate(-76.301 672.558 38.205)" class="st74" cx="672.5" cy="38.2" rx="3.5" ry="7.9"/><path class="st75" d="M689.7 117.5c-13.3 1.4-29 23.6-32.6 34.8 9.1-11.1 31.6-23.6 33.2-24.2s2.7-1.6 1.3-3.9-1.9-6.7-1.9-6.7z"/><g><defs><path id="SVGID_48_" d="M686.3 115.5c-12.4 1-27.2 26.8-28.4 34.3 8-12.9 26.6-22.4 29-23.7s2.7-1.6 1.3-3.9-1.9-6.7-1.9-6.7z"/></defs><clipPath id="SVGID_49_"><use xlink:href="#SVGID_48_" overflow="visible"/></clipPath><g class="st76"><path class="st22" d="M657 111.6h35.1v38.2H657z"/><path class="st77" d="M686.9 118.4c1 1.4-1.3 5.8-11.6 13.4-4.4 3.2-9.9 5.7-15.7 15.6l31.9-20.8-4.6-8.2z"/></g></g><ellipse class="st78" cx="690" cy="68.2" rx="1.8" ry="2.1"/><g><defs><path id="SVGID_50_" d="M577.6 299.4v24.5s1.1 1.8 12.8 1.8 11.7-3.2 11.7-3.2v-22.2s-14.7 4.8-24.5-.9z"/></defs><clipPath id="SVGID_51_"><use xlink:href="#SVGID_50_" overflow="visible"/></clipPath><g class="st79"><path class="st28" d="M569.6 290.3h45.2v45.2h-45.2z"/><path class="st45" d="M591 298.2l.2 33.3s18.3-2.1 17.6-2.8-.7-33.5-.7-33.5l-17.1 3z"/></g></g><g><defs><path id="SVGID_52_" d="M652.7 103.8s11.1 1.7 20 .9c4.2-.3 8.4-.9 12.5-1.9 2.8.8 4.4 4.9 4.3 8.2.2 3.3-1.6 6.4-4.5 7.9 0 0-23 6.9-37.4.8-7.8-3.2-3.8-16.5 5.1-15.9z"/></defs><clipPath id="SVGID_53_"><use xlink:href="#SVGID_52_" overflow="visible"/></clipPath><g class="st80"><path class="st14" d="M639.5 98H701v31.4h-61.5z"/><path class="st81" d="M659.6 104.3s-11 .8-11.4 8.8 5.8 10 4.3 8.8c0 0-15.8-1.7-14.5-8.4s9.9-14.1 21.6-9.2z"/><path class="st15" d="M669.4 102.3s13.3 5.2.1 22.6l30.1-2.6-3.5-23.9-26.7 3.9z"/></g></g><path class="st82" d="M650.1 151.1s-4.7 9.4-4.7 16.7"/><path class="st83" d="M644.9 168.7l-1.4 6.2h2.9l-.7-6.2z"/></g></svg>'
});
this["DDG"]["templates"]["hp_onboarding_education"] = Handlebars.template(function(f, m, e, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    i = i || {};
    var h = "",
        b, g, r, q = this,
        k = e.helperMissing;

    function c(t, s) {
        return ' <a class="onboarding-ed__arrow-teaser js-onboarding-ed-teaser"><img class="onboarding-ed__arrow-teaser__alpinist" src="/assets/onboarding/bathroomguy/teaser-2@2x.png" /><div class="onboarding-ed__arrow-teaser__arrow-wrapper"><img class="onboarding-ed__arrow-teaser__arrow" src="/assets/onboarding/arrow.svg" /></div></a>'
    }

    function a(t, s) {
        return '<img src="/assets/onboarding/bathroomguy/1-monster-v2--pre-animation.svg" class="onboarding-ed__image--placeholder" width="1200" height="460" />'
    }

    function p(t, s) {
        return '<img src="/assets/onboarding/bathroomguy/1-monster-v2--no-animation.svg" class="onboarding-ed__image--placeholder" width="1200" height="460" />'
    }

    function o(t, s) {
        return '<img src="/assets/onboarding/bathroomguy/3-bathtub-v2--pre-animation.svg" class="onboarding-ed__image--placeholder" width="1200" height="460" /> '
    }

    function n(t, s) {
        return '<img src="/assets/onboarding/bathroomguy/3-bathtub-v2--no-animation.svg" class="onboarding-ed__image--placeholder" width="1200" height="460" /> '
    }
    h += '<div class="onboarding-ed js-onboarding-ed">';
    b = e["if"].call(m, (m && m.doRenderTeaserArrow), {
        hash: {},
        inverse: q.noop,
        fn: q.program(1, c, i),
        data: i
    });
    if (b || b === 0) {
        h += b
    }
    h += '<a class="onboarding-ed__arrow js-onboarding-ed-arrow"><img src="/assets/onboarding/arrow.svg" /></a><div class="onboarding-ed__slide onboarding-ed__slide-1 js-onboarding-ed-slide js-onboarding-ed-slide-1"><div class="onboarding-ed__content"><h1 class="onboarding-ed__title js-onboarding-ed-balance-text">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "We don’t store your personal information. Ever.", r) : k.call(m, "lp", "homepage onboarding", "We don’t store your personal information. Ever.", r));
    if (b || b === 0) {
        h += b
    }
    h += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "Our privacy policy is simple: we don’t collect or share any of your personal information.", r) : k.call(m, "lp", "homepage onboarding", "Our privacy policy is simple: we don’t collect or share any of your personal information.", r));
    if (b || b === 0) {
        h += b
    }
    h += '</p><div class="js-onboarding-ed-button-small-1"></div></div><div class="onboarding-ed__image-container js-onboarding-ed-image-container-1">';
    b = e["if"].call(m, ((b = (m && m.model)), b == null || b === false ? b : b.isSVGAnimated), {
        hash: {},
        inverse: q.program(5, p, i),
        fn: q.program(3, a, i),
        data: i
    });
    if (b || b === 0) {
        h += b
    }
    h += '</div></div><div class="onboarding-ed__slide onboarding-ed__slide-2 js-onboarding-ed-slide js-onboarding-ed-slide-2"><div class="onboarding-ed__content onboarding-ed__content--more-shadow"><h1 class="onboarding-ed__title js-onboarding-ed-balance-text">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "We don’t follow you around with ads.", r) : k.call(m, "lp", "homepage onboarding", "We don’t follow you around with ads.", r));
    if (b || b === 0) {
        h += b
    }
    h += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "We don’t store your search history. We therefore have nothing to sell to advertisers that track you across the internet.", r) : k.call(m, "lp", "homepage onboarding", "We don’t store your search history. We therefore have nothing to sell to advertisers that track you across the internet.", r));
    if (b || b === 0) {
        h += b
    }
    h += '</p><div class="js-onboarding-ed-button-small-2"></div></div><div class="onboarding-ed__image-container js-onboarding-ed-image-container-2"><img src="/assets/onboarding/bathroomguy/2-ghost-v2.svg" class="onboarding-ed__image--placeholder" width="1200" height="460" /></div></div><div class="onboarding-ed__slide onboarding-ed__slide-3 js-onboarding-ed-slide js-onboarding-ed-slide-3"><div class="onboarding-ed__content"><h1 class="onboarding-ed__title js-onboarding-ed-balance-text">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "We don’t track you in or out of private browsing mode.", r) : k.call(m, "lp", "homepage onboarding", "We don’t track you in or out of private browsing mode.", r));
    if (b || b === 0) {
        h += b
    }
    h += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "Other search engines track your searches even when you’re in private browsing mode. We don’t track you &mdash; period.", r) : k.call(m, "lp", "homepage onboarding", "Other search engines track your searches even when you’re in private browsing mode. We don’t track you &mdash; period.", r));
    if (b || b === 0) {
        h += b
    }
    h += '</p><div class="js-onboarding-ed-button-small-3"></div></div><div class="onboarding-ed__image-container js-onboarding-ed-image-container-3">';
    b = e["if"].call(m, ((b = (m && m.model)), b == null || b === false ? b : b.isSVGAnimated), {
        hash: {},
        inverse: q.program(9, n, i),
        fn: q.program(7, o, i),
        data: i
    });
    if (b || b === 0) {
        h += b
    }
    h += '</div></div><div class="onboarding-ed__slide onboarding-ed__slide-4 js-onboarding-ed-slide js-onboarding-ed-slide-4"><div class="onboarding-ed__close"><span class="js-onboarding-ed-dismiss onboarding-ed__close-dismiss">';
    b = (g = e.l || (m && m.l), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "Dismiss forever", r) : k.call(m, "l", "Dismiss forever", r));
    if (b || b === 0) {
        h += b
    }
    h += '</span><span class="ddgsi onboarding-ed__close-divider">|</span> <span class="onboarding-ed__close-back js-onboarding-ed-back-to-search">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "Back to search", r) : k.call(m, "lp", "homepage onboarding", "Back to search", r));
    if (b || b === 0) {
        h += b
    }
    h += '</span> </div><div class="onboarding-ed__content js-onboarding-ed-install"><h1 class="onboarding-ed__title js-onboarding-ed-balance-text">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "Switch to DuckDuckGo and take back your privacy!", r) : k.call(m, "lp", "homepage onboarding", "Switch to DuckDuckGo and take back your privacy!", r));
    if (b || b === 0) {
        h += b
    }
    h += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "No tracking, no ad targeting, just searching.", r) : k.call(m, "lp", "homepage onboarding", "No tracking, no ad targeting, just searching.", r));
    if (b || b === 0) {
        h += b
    }
    h += '</p><div class="js-onboarding-ed-button"></div></div><div class="onboarding-ed__content js-onboarding-ed-spread" style="display:none"><h1 class="onboarding-ed__title js-onboarding-ed-balance-text">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "Already a fan?", r) : k.call(m, "lp", "homepage onboarding", "Already a fan?", r));
    if (b || b === 0) {
        h += b
    }
    h += "<br>";
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "Invite friends to the Duck Side!", r) : k.call(m, "lp", "homepage onboarding", "Invite friends to the Duck Side!", r));
    if (b || b === 0) {
        h += b
    }
    h += '</h1><p class="onboarding-ed__subtitle js-onboarding-ed-balance-text">';
    b = (g = e.lp || (m && m.lp), r = {
        hash: {},
        data: i
    }, g ? g.call(m, "homepage onboarding", "Share DuckDuckGo and help friends take their privacy back!", r) : k.call(m, "lp", "homepage onboarding", "Share DuckDuckGo and help friends take their privacy back!", r));
    if (b || b === 0) {
        h += b
    }
    h += '</p><div><a class="btn onboarding-ed__button onboarding-ed__tweet-button js-onboarding-ed-tweet-button" target="_blank" href="https://twitter.com/?status=DuckDuckGo%20is%20my%20search%20engine%20of%20choice.%20%23ComeToTheDuckSide%20-%20we%20have%20privacy.%20https%3A%2F%2Fduckduckgo.com%2F%231">Tweet #ComeToTheDuckSide</a></div></div><div class="onboarding-ed__image-container js-onboarding-ed-image-container-4"><img src="/assets/onboarding/bathroomguy/4-alpinist-v2.svg" class="onboarding-ed__image--placeholder" width="1200" height="460" /></div></div></div>';
    return h
});
this["DDG"]["templates"]["iframe"] = Handlebars.template(function(f, n, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var i = "",
        b, g, h = "function",
        j = this.escapeExpression,
        o = this;

    function c(t, s) {
        var p = "",
            q, r;
        p += '<input type="hidden" name="source" value="';
        if (r = e.source) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.source);
            q = typeof r === h ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += j(q) + '">';
        return p
    }

    function a(t, s) {
        var p = "",
            q, r;
        p += '<input type="hidden" name="p" value="';
        if (r = e.variant) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.variant);
            q = typeof r === h ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += j(q) + '">';
        return p
    }
    i += '<div class="search--iframe"><form id="search_form_homepage" class="js-search-form search--adv search--home search--focus" name="x" method="GET" action="/" target="_top"><input id="search_form_input_homepage" class="js-search-input search__input--adv" autocomplete="off" name="q" tabindex="1" value="" autocapitalize="off" autocorrect="off" type="text" placeholder="';
    if (g = e.placeholder) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.placeholder);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + '"><input id="search_button_homepage" class="search__button  js-search-button" tabindex="2" value="S" type="submit"><input id="search_form_input_clear" class="search__clear  empty  js-search-clear" tabindex="3" value="X" type="button"><input type="hidden" name="t" value="h';
    if (g = e.atbVariant) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.atbVariant);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + '">';
    b = e["if"].call(n, (n && n.source), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    b = e["if"].call(n, (n && n.canInstall), {
        hash: {},
        inverse: o.noop,
        fn: o.program(3, a, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += "</div>";
    return i
});
this["DDG"]["templates"]["new_user_poll"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<div class="js-poll"><div class="atb-extension-overlay__div-thank-you js-poll-thank-you"><h1 class="atb-extension-overlay__headline">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "homepage onboarding", "Thank you.", k) : i.call(j, "lp", "homepage onboarding", "Thank you.", k));
    if (a || a === 0) {
        f += a
    }
    f += '</h1><span class="tx--21">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "homepage onboarding", "Welcome to the Duck Side!", k) : i.call(j, "lp", "homepage onboarding", "Welcome to the Duck Side!", k));
    if (a || a === 0) {
        f += a
    }
    f += '</span><a class="atb-extension-overlay__search-btn btn btn--primary tx--15 js-extension-overlay-search atb-extension-overlay__search-btn-large" data-search-link="start-button" href="https://duckduckgo.com">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Start searching!", k) : i.call(j, "l", "Start searching!", k));
    if (a || a === 0) {
        f += a
    }
    f += '</a></div><div class="atb-extension-overlay__div-welcome-back js-poll-welcome-back"><h1 class="atb-extension-overlay__headline">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "homepage onboarding", "Thank you.", k) : i.call(j, "lp", "homepage onboarding", "Thank you.", k));
    if (a || a === 0) {
        f += a
    }
    f += '</h1><span class="tx--21">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "We're honored to have you on the Duck Side", k) : i.call(j, "lp", "new user poll", "We're honored to have you on the Duck Side", k));
    if (a || a === 0) {
        f += a
    }
    f += '</span><a class="atb-extension-overlay__search-btn btn btn--primary tx--15 js-extension-overlay-search atb-extension-overlay__search-btn-large" data-search-link="start-button" href="https://duckduckgo.com">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Start searching!", k) : i.call(j, "l", "Start searching!", k));
    if (a || a === 0) {
        f += a
    }
    f += '</a></div><div class="atb-extension-overlay__div-question-new-user js-poll-question-new-user"><h1 class="atb-extension-overlay__headline">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Congratulations!", k) : i.call(j, "l", "Congratulations!", k));
    if (a || a === 0) {
        f += a
    }
    f += '<span class="atb-extension-overlay__headline__secondary">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "New to DuckDuckGo?", k) : i.call(j, "lp", "new user poll", "New to DuckDuckGo?", k));
    if (a || a === 0) {
        f += a
    }
    f += '</span></h1><div class="atb-extension-overlay__div atb-extension-overlay__div-left"><a class="atb-extension-overlay__search-btn-large atb-extension-overlay__search-btn btn btn--primary tx--17 js-poll-button-new">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Yes, new user!", k) : i.call(j, "lp", "new user poll", "Yes, new user!", k));
    if (a || a === 0) {
        f += a
    }
    f += '</a></div><div class="atb-extension-overlay__div atb-extension-overlay__div-right"><a class="atb-extension-overlay__search-btn-large atb-extension-overlay__search-btn btn btn--primary tx--17 js-poll-button-old">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "No, old user!", k) : i.call(j, "lp", "new user poll", "No, old user!", k));
    if (a || a === 0) {
        f += a
    }
    f += '</a></div><div class="clearfix"></div></div><div class="atb-extension-overlay__div-question-referral js-poll-question-referral"><h1 class="atb-extension-overlay__headline">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "What led you to DuckDuckGo?", k) : i.call(j, "lp", "new user poll", "What led you to DuckDuckGo?", k));
    if (a || a === 0) {
        f += a
    }
    f += '</h1><p class="tx--19 atb-extension-overlay__div-question-referral__prompt js-poll-balance-text">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "We don't track you, so we could use your help telling us what convinced you to try us out today:", k) : i.call(j, "lp", "new user poll", "We don't track you, so we could use your help telling us what convinced you to try us out today:", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p><p class="tx--19 atb-extension-overlay__div-question-referral__error js-poll-error">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Please select one option.", k) : i.call(j, "lp", "new user poll", "Please select one option.", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p><form class="atb-extension-overlay__div-question-referral__form js-poll-form" method="post"><label class="atb-extension-overlay__div-question-referral__label js-poll-radio"><input type="radio" name="ref" value="twitter" class="atb-extension-overlay__div-question-referral__radio"/>';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Following us on Twitter", k) : i.call(j, "lp", "new user poll", "Following us on Twitter", k));
    if (a || a === 0) {
        f += a
    }
    f += '</label><label class="atb-extension-overlay__div-question-referral__label js-poll-radio"><input type="radio" name="ref" value="friend" class="atb-extension-overlay__div-question-referral__radio"/>';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Friend or family", k) : i.call(j, "lp", "new user poll", "Friend or family", k));
    if (a || a === 0) {
        f += a
    }
    f += '</label><label class="atb-extension-overlay__div-question-referral__label js-poll-radio"><input type="radio" name="ref" value="article" class="atb-extension-overlay__div-question-referral__radio"/>';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Online article", k) : i.call(j, "lp", "new user poll", "Online article", k));
    if (a || a === 0) {
        f += a
    }
    f += '</label><label class="atb-extension-overlay__div-question-referral__label js-poll-radio"><input type="radio" name="ref" value="radio" class="atb-extension-overlay__div-question-referral__radio"/>';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Radio or podcast", k) : i.call(j, "lp", "new user poll", "Radio or podcast", k));
    if (a || a === 0) {
        f += a
    }
    f += '</label><label class="atb-extension-overlay__div-question-referral__label"><input type="radio" name="ref" value="other" class="atb-extension-overlay__div-question-referral__radio js-poll-other-radio"/>';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "feedback form", "Other", k) : i.call(j, "lp", "feedback form", "Other", k));
    if (a || a === 0) {
        f += a
    }
    f += '<input type="text" name="other_text" class="atb-extension-overlay__div-question-referral__text js-poll-other-text"/></label><button class="atb-extension-overlay__search-btn btn btn--primary tx--15 atb-extension-overlay__search-btn-large" type="submit">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Submit", k) : i.call(j, "l", "Submit", k));
    if (a || a === 0) {
        f += a
    }
    f += '</button><p class="atb-extension-overlay__disclaimer tx--15">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Your response is 100% anonymous.", k) : i.call(j, "lp", "new user poll", "Your response is 100% anonymous.", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p></form><p class="atb-extension-overlay__nope js-poll-close tx--15">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "No thanks.", k) : i.call(j, "lp", "new user poll", "No thanks.", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p></div><div class="atb-extension-overlay__div-question-referral js-poll-question-returning"><h1 class="atb-extension-overlay__headline">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "What brought you back today?", k) : i.call(j, "lp", "new user poll", "What brought you back today?", k));
    if (a || a === 0) {
        f += a
    }
    f += '</h1><p class="tx--19 atb-extension-overlay__div-question-referral__prompt js-poll-balance-text">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "We don't track you, so we could use your help telling us what brought you back today:", k) : i.call(j, "lp", "new user poll", "We don't track you, so we could use your help telling us what brought you back today:", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p><p class="tx--19 atb-extension-overlay__div-question-referral__error js-poll-error-returning">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Please select one option.", k) : i.call(j, "lp", "new user poll", "Please select one option.", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p><form class="atb-extension-overlay__div-question-referral__form js-poll-form-returning" method="post"><label class="atb-extension-overlay__div-question-referral__label js-poll-radio-returning"><input type="radio" name="ref" value="new_browser" class="atb-extension-overlay__div-question-referral__radio"/>';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "New browser or computer", k) : i.call(j, "lp", "new user poll", "New browser or computer", k));
    if (a || a === 0) {
        f += a
    }
    f += '</label><label class="atb-extension-overlay__div-question-referral__label js-poll-radio-returning"><input type="radio" name="ref" value="trying_again" class="atb-extension-overlay__div-question-referral__radio"/>';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Trying DuckDuckGo again", k) : i.call(j, "lp", "new user poll", "Trying DuckDuckGo again", k));
    if (a || a === 0) {
        f += a
    }
    f += '</label><label class="atb-extension-overlay__div-question-referral__label js-poll-radio-returning"><input type="radio" name="ref" value="upgrading" class="atb-extension-overlay__div-question-referral__radio"/>';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Upgrading to full-time user", k) : i.call(j, "lp", "new user poll", "Upgrading to full-time user", k));
    if (a || a === 0) {
        f += a
    }
    f += '</label><label class="atb-extension-overlay__div-question-referral__label"><input type="radio" name="ref" value="other" class="atb-extension-overlay__div-question-referral__radio js-poll-other-radio-returning"/>';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "feedback form", "Other", k) : i.call(j, "lp", "feedback form", "Other", k));
    if (a || a === 0) {
        f += a
    }
    f += '<input type="text" name="other_text" class="atb-extension-overlay__div-question-referral__text js-poll-other-text-returning"/></label><button class="atb-extension-overlay__search-btn btn btn--primary tx--15 atb-extension-overlay__search-btn-large" type="submit">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Submit", k) : i.call(j, "l", "Submit", k));
    if (a || a === 0) {
        f += a
    }
    f += '</button><p class="atb-extension-overlay__disclaimer tx--15">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "Your response is 100% anonymous.", k) : i.call(j, "lp", "new user poll", "Your response is 100% anonymous.", k));
    if (a || a === 0) {
        f += a
    }
    f += '</p></form><p class="atb-extension-overlay__nope js-poll-close tx--15">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "new user poll", "No thanks.", k) : i.call(j, "lp", "new user poll", "No thanks.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</p></div></div>";
    return f
});
this["DDG"]["templates"]["newsletter_form_expand"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<div><div class="badge-link-illustration__text-wrapper"><p class="badge-link-illustration__text js-badge-title">Get useful privacy tips to help <br> reduce your online footprint!</p></div><form class="js-badge-form badge-link__form transparent"><div class="frm frm--vrt badge-link__email"><input type="email" placeholder="Your email address" class="frm__input js-badge-email" name="email" required><span class="ddgsi badge-link__lock-icon transparent js-badge-lock">l</span></div><div class="badge-link__btn-group"><input type="submit" class="badge-link__submit btn btn--primary js-badge-link-button" value="Get Privacy Tips from DuckDuckGo!"></div><p class="tx-clr--lt badge-link__disclaimer t-xs">Your email address will not be shared or associated with anonymous searches. [<a href="https://spreadprivacy.com/google-search-history-4bae7619407d">Example message</a>]</p></form></div>'
});
this["DDG"]["templates"]["newsletter_form_success"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<div>   <div class="js-badge-success badge-link--success"><p class="badge-link__success-title">Thanks for joining!</p><p class="text-center badge-link--newsletter__text tx-clr--dk2">Your first privacy tip from our mascot, <br> Dax the Duck, is on its way!</p></div></div>'
});
this["DDG"]["templates"]["notification"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<div class="notification"><div class="notification__wrap"><div class="notification__text  js-notification-text"></div></div></div>'
});
this["DDG"]["templates"]["onoffswitch"] = Handlebars.template(function(c, m, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, n, f = "function",
        h = this.escapeExpression,
        k = b.helperMissing;
    g += '<div class="frm__switch  frm-input"><input id="';
    if (e = b.id) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.id);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '" class="frm__switch__inp  ';
    if (e = b.className) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.className);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '" type="checkbox" /><label class="frm__switch__label  btn" for="';
    if (e = b.id) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.id);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '"><span class="frm__switch-on">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "setting", "On", n) : k.call(m, "lp", "setting", "On", n));
    if (a || a === 0) {
        g += a
    }
    g += '</span><span class="frm__switch-off">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "setting", "Off", n) : k.call(m, "lp", "setting", "Off", n));
    if (a || a === 0) {
        g += a
    }
    g += "</span></label></div>";
    return g
});
this["DDG"]["templates"]["set_as_homepage_chrome"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Click %ssettings/hamburger icon %s on the Chrome toolbar (top right).", "<b>", "(&#x2261;)</b>", k) : i.call(j, "l", "Click %ssettings/hamburger icon %s on the Chrome toolbar (top right).", "<b>", "(&#x2261;)</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Select %sSettings%s from the drop-down menu.", "<b>", "</b>", k) : i.call(j, "l", "Select %sSettings%s from the drop-down menu.", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Under %sOn startup%s, click %sOpen a specific page%s then click %sSet Pages%s.", "<b>", "</b>", "<b>", "</b>", "<b>", "</b>", k) : i.call(j, "l", "Under %sOn startup%s, click %sOpen a specific page%s then click %sSet Pages%s.", "<b>", "</b>", "<b>", "</b>", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Click %sUse current pages%s then %sClick OK%s.", "<b>", "</b>", "<b>", "</b>", k) : i.call(j, "l", "Click %sUse current pages%s then %sClick OK%s.", "<b>", "</b>", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_edge"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click the %s...%s icon at the top right:", "<b>", "</b>", m) : j.call(k, "l", "Click the %s...%s icon at the top right:", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:47px;" src="' + g((e = b.imageProxy || (k && k.imageProxy), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/edge.jpg", m) : j.call(k, "imageProxy", "/assets/add-to-browser/edge.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sSettings%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sSettings%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Under %sOpen with%s select %sA specific page or pages%s", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Under %sOpen with%s select %sA specific page or pages%s", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Select %sCustom%s and enter %shttps://duckduckgo.com%s in the input field", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Select %sCustom%s and enter %shttps://duckduckgo.com%s in the input field", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %s+%s!", "<b>", "</b>", m) : j.call(k, "l", "Click %s+%s!", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_firefox"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Drag %sThis Button%s on top of the home icon:", '<a class="btn btn--primary btn--inline" style="cursor:move;" href="https://duckduckgo.com">', "</a>", m) : j.call(k, "l", "Drag %sThis Button%s on top of the home icon:", '<a class="btn btn--primary btn--inline" style="cursor:move;" href="https://duckduckgo.com">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:80px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/firefox_homepage.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/firefox_homepage.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sYes%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sYes%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_ie"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click the arrow to the right of the %shome icon%s", "<b>", "</b>", m) : j.call(k, "l", "Click the arrow to the right of the %shome icon%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:121px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/ie_homepage.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/ie_homepage.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sAdd or change home page...%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sAdd or change home page...%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Select %sUse this webpage as your only home page%s (or one of the other options if you prefer)", "<b>", "</b>", m) : j.call(k, "l", "Select %sUse this webpage as your only home page%s (or one of the other options if you prefer)", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sYes%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sYes%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_maxthon"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "On Mac, %sClick Maxthon > Preferences%s, On Windows, %sClick the %s icon > Settings%s", "<b>", "</b>", "<b>", "<b>&#x2261;</b>", "</b>", m) : j.call(k, "l", "On Mac, %sClick Maxthon > Preferences%s, On Windows, %sClick the %s icon > Settings%s", "<b>", "</b>", "<b>", "<b>&#x2261;</b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Under %sOn startup%s, select %sHomepage%s and enter: https://duckduckgo.com", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Under %sOn startup%s, select %sHomepage%s and enter: https://duckduckgo.com", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/maxthon_homepage.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/maxthon_homepage.jpg", m))) + '" />';
    return f
});
this["DDG"]["templates"]["set_as_homepage_opera"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)", "<b>", "</b>", "<b>", "</b>", k) : i.call(j, "l", "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)", "<b>", "</b>", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Under On startup select %sOpen a specific page or set of pages%s", "<b>", "</b>", k) : i.call(j, "l", "Under On startup select %sOpen a specific page or set of pages%s", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Enter %shttps://duckduckgo.com%s", "<b>", "</b>", k) : i.call(j, "l", "Enter %shttps://duckduckgo.com%s", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_safari"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Click %sSafari%s in the top menu (On Windows, click the %sgears icon%s in the top right)", "<b>", "</b>", "<b>", "</b>", k) : i.call(j, "l", "Click %sSafari%s in the top menu (On Windows, click the %sgears icon%s in the top right)", "<b>", "</b>", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Select %sPreferences%s.", "<b>", "</b>", k) : i.call(j, "l", "Select %sPreferences%s.", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Click the %sGeneral%s tab.", "<b>", "</b>", k) : i.call(j, "l", "Click the %sGeneral%s tab.", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Where it says Homepage click %sSet to Current Page%s.", "<b>", "</b>", k) : i.call(j, "l", "Where it says Homepage click %sSet to Current Page%s.", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "If you want, select Home Page next to New windows and New tabs (open with).", k) : i.call(j, "l", "If you want, select Home Page next to New windows and New tabs (open with).", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Close window.", k) : i.call(j, "l", "Close window.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_vivaldi"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "In the menu at the top select %sTools%s > %sSettings%s", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "In the menu at the top select %sTools%s > %sSettings%s", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Under %sSTARTUP > Homepage%s enter: https://duckduckgo.com", "<b>", "</b>", m) : j.call(k, "l", "Under %sSTARTUP > Homepage%s enter: https://duckduckgo.com", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/vivaldi_homepage.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/vivaldi_homepage.jpg", m))) + '" />';
    return f
});
this["DDG"]["templates"]["showcase_dropdown"] = Handlebars.template(function(e, j, c, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    g = g || {};
    var f = "",
        a, i = c.helperMissing,
        k = this;

    function b(r, q) {
        var m = "",
            o, p, n;
        m += '<div class="showcase"><span class="js-showcase-button" aria-haspopup="true" aria-label="';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_aria_label", "Check out the list of things that we've also made.", n) : i.call(r, "lp", "showcase_aria_label", "Check out the list of things that we've also made.", n));
        if (o || o === 0) {
            m += o
        }
        m += '" role="button" aria-pressed="false"><span class="header--aside__msg showcase__label" id="wedonttrack">';
        o = (p = c.l || (r && r.l), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "Privacy, simplified.", n) : i.call(r, "l", "Privacy, simplified.", n));
        if (o || o === 0) {
            m += o
        }
        m += '</span></span><div class="header--aside__msg sep--after"><span class="popout-trig  js-popout"><span class="js-popout-link js-showcase-button ddgsi ddgsi-down showcase__dropdown" aria-hidden="true"></span><div class="modal modal--popout modal--popout--bottom-left modal--popout--sm  js-popout-main showcase__dropdown__modal"><div class="modal__box"><div class="modal__body pd--none"><nav aria-labelledby="wedonttrack"><section class="showcase__dropdown-top"><ul aria-label="';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_aria_dropdown", "Here are some things that we made that you might like.", n) : i.call(r, "lp", "showcase_aria_dropdown", "Here are some things that we made that you might like.", n));
        if (o || o === 0) {
            m += o
        }
        m += '"><li class="fix showcase__dropdown__list"><a href="/app" class="eighteen js-showcase-item" aria-hidden="true" data-id="app"><div class="app-icon"></div></a><a href="/app" class="text-left showcase__link eighty js-showcase-item" data-id="app"><h1 class="showcase__heading tx-clr--dk">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_app", "Get Our App & Extension", n) : i.call(r, "lp", "showcase_app", "Get Our App & Extension", n));
        if (o || o === 0) {
            m += o
        }
        m += '</h1><p class="showcase__subheading">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_app", "Protect your data on every device.", n) : i.call(r, "lp", "showcase_app", "Protect your data on every device.", n));
        if (o || o === 0) {
            m += o
        }
        m += '</p></a></li><li class="fix showcase__dropdown__list"><a href="https://spreadprivacy.com/" class="eighteen js-showcase-item" aria-hidden="true" data-id="blog"><div class="privacy-icon"></div></a><a href="https://spreadprivacy.com/" class="text-left showcase__link eighty js-showcase-item" data-id="blog"><h1 class="showcase__heading tx-clr--dk">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_privacy", "Get Privacy Tips", n) : i.call(r, "lp", "showcase_privacy", "Get Privacy Tips", n));
        if (o || o === 0) {
            m += o
        }
        m += '</h1><p class="showcase__subheading">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_privacy", "Find useful privacy advice on our blog.", n) : i.call(r, "lp", "showcase_privacy", "Find useful privacy advice on our blog.", n));
        if (o || o === 0) {
            m += o
        }
        m += '</p></a></li><li class="fix showcase__dropdown__list"><a href="https://duckduckgo.com/spread" class="eighteen js-showcase-item" aria-hidden="true" data-id="spread"><div class="spread-icon"></div></a><a href="https://duckduckgo.com/spread" class="text-left showcase__link eighty js-showcase-item" data-id="spread"><h1 class="showcase__heading tx-clr--dk">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_spread", "Spread DuckDuckGo", n) : i.call(r, "lp", "showcase_spread", "Spread DuckDuckGo", n));
        if (o || o === 0) {
            m += o
        }
        m += '</h1><p class="showcase__subheading">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_spread", "Help your friends and family join the Duck Side!", n) : i.call(r, "lp", "showcase_spread", "Help your friends and family join the Duck Side!", n));
        if (o || o === 0) {
            m += o
        }
        m += '</p></a></li><li class="fix showcase__dropdown__list"><a href="https://duckduckgo.com/bang" class="eighteen js-showcase-item" aria-hidden="true" data-id="bangs"><div class="bangs-icon"></div></a><a href="https://duckduckgo.com/bang" class="text-left showcase__link eighty js-showcase-item" data-id="bangs"><h1 class="showcase__heading tx-clr--dk">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_bangs", "Learn about Bangs", n) : i.call(r, "lp", "showcase_bangs", "Learn about Bangs", n));
        if (o || o === 0) {
            m += o
        }
        m += '</h1><p class="showcase__subheading">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_bangs", "Search thousands of sites directly on DuckDuckGo.", n) : i.call(r, "lp", "showcase_bangs", "Search thousands of sites directly on DuckDuckGo.", n));
        if (o || o === 0) {
            m += o
        }
        m += '</p></a></li></ul></section><section class="showcase__dropdown-bottom"><ul class="text-left" aria-label="We\'ve got even more things for you."><li class="fix showcase__dropdown__list"><a href="https://duckduckgo.com/donations" class="eighteen showcase__icon js-showcase-item" aria-hidden="true" data-id="donations"><div class="donations-icon"></div></a><a href="https://duckduckgo.com/donations" class="text-left showcase__link eighty showcase__text tx-clr--dk2 js-showcase-item" data-id="donations">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_donations", "$800,000 in privacy donations!", n) : i.call(r, "lp", "showcase_donations", "$800,000 in privacy donations!", n));
        if (o || o === 0) {
            m += o
        }
        m += '</a></li><li class="fix showcase__dropdown__list"><a href="https://duckduckgo.com/traffic" class="eighteen showcase__icon js-showcase-item" aria-hidden="true" data-id="traffic"><div class="traffic-icon"></div></a><a href="https://duckduckgo.com/traffic" class="text-left showcase__link eighty showcase__text tx-clr--dk2 js-showcase-item" data-id="traffic">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_traffic", "Over 15 Billion anonymous searches.", n) : i.call(r, "lp", "showcase_traffic", "Over 15 Billion anonymous searches.", n));
        if (o || o === 0) {
            m += o
        }
        m += '</a></li><li class="fix showcase__dropdown__list"><a href="https://donttrack.us/" class="eighteen showcase__icon js-showcase-item" aria-hidden="true" data-id="dnt"><div class="donttrack-icon"></div></a><a href="https://donttrack.us/" class="text-left showcase__link eighty showcase__text tx-clr--dk2 js-showcase-item" data-id="dnt">';
        o = (p = c.lp || (r && r.lp), n = {
            hash: {},
            data: q
        }, p ? p.call(r, "showcase_tracking", "Learn why reducing tracking is important.", n) : i.call(r, "lp", "showcase_tracking", "Learn why reducing tracking is important.", n));
        if (o || o === 0) {
            m += o
        }
        m += "</a></li></ul></section></nav></div></div></div></span></div></div>";
        return m
    }
    f += '<div class="header--aside">';
    a = c["if"].call(j, (j && j.showDropdown), {
        hash: {},
        inverse: k.noop,
        fn: k.program(1, b, g),
        data: g
    });
    if (a || a === 0) {
        f += a
    }
    f += '<a aria-label="Twitter" class="header--aside__twitter js-showcase-twitter" href="https://twitter.com/duckduckgo"></a></div>';
    return f
});
this["DDG"]["templates"]["side_menu"] = Handlebars.template(function(f, s, q, j, y) {
    this.compilerInfo = [4, ">= 1.0.0"];
    q = this.merge(q, f.helpers);
    y = y || {};
    var r = "",
        h, a, e, c = "function",
        b = this.escapeExpression,
        p = q.helperMissing,
        o = this;

    function n(E, D) {
        var z = "",
            B, C, A;
        z += '<ul class="nav-menu--theme"><li class="nav-menu__heading"><span>';
        B = (C = q.lp || (E && E.lp), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "feedback form", "Settings", A) : p.call(E, "lp", "feedback form", "Settings", A));
        if (B || B === 0) {
            z += B
        }
        z += '</span></li><li class="nav-menu__item"><ul class="nav-menu__themes">';
        B = q.each.call(E, (E && E.themes), {
            hash: {},
            inverse: o.noop,
            fn: o.program(2, m, D),
            data: D
        });
        if (B || B === 0) {
            z += B
        }
        z += '</ul></li><li class="nav-menu__item clear"><a href="/settings#theme" data-settings="1">';
        B = (C = q.l || (E && E.l), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "More Themes", A) : p.call(E, "l", "More Themes", A));
        if (B || B === 0) {
            z += B
        }
        z += '</a></li><li class="nav-menu__item"><a href="/settings" tabindex="-1" data-settings="1">';
        B = (C = q.l || (E && E.l), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "Other Settings", A) : p.call(E, "l", "Other Settings", A));
        if (B || B === 0) {
            z += B
        }
        z += "</a></li></ul>";
        return z
    }

    function m(D, C) {
        var z = "",
            A, B;
        z += '<li class="nav-menu__theme  js-side-menu-theme"><span class="nav-menu__theme-color"><span class="nav-menu__theme-color-top" style="background-color:#';
        if (B = q.color1) {
            A = B.call(D, {
                hash: {},
                data: C
            })
        } else {
            B = (D && D.color1);
            A = typeof B === c ? B.call(D, {
                hash: {},
                data: C
            }) : B
        }
        z += b(A) + ';"></span><span class="nav-menu__theme-color-bot" style="background-color:#';
        if (B = q.color2) {
            A = B.call(D, {
                hash: {},
                data: C
            })
        } else {
            B = (D && D.color2);
            A = typeof B === c ? B.call(D, {
                hash: {},
                data: C
            }) : B
        }
        z += b(A) + ';"></span></span></li>';
        return z
    }

    function k(E, D) {
        var z = "",
            B, C, A;
        z += '<ul class="nav-menu--feedback"><li class="nav-menu__heading"><span>';
        B = (C = q.lp || (E && E.lp), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "feedback form", "Send feedback", A) : p.call(E, "lp", "feedback form", "Send feedback", A));
        if (B || B === 0) {
            z += B
        }
        z += '</span></li><li class="nav-menu__feedback"><a href="#" class="nav-menu__feedback__icon nav-menu__feedback__icon--love js-side-menu-love"></a><a href="#" class="nav-menu__feedback__icon nav-menu__feedback__icon--nolove js-side-menu-nolove"></a></li></ul>';
        return z
    }

    function i(E, D) {
        var z = "",
            B, C, A;
        z += '<li class="nav-menu__item"><a href="/about">';
        B = (C = q.lp || (E && E.lp), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "static_page", "About", A) : p.call(E, "lp", "static_page", "About", A));
        if (B || B === 0) {
            z += B
        }
        z += "</a></li>";
        return z
    }

    function g(E, D) {
        var z = "",
            B, C, A;
        z += '<li class="nav-menu__item"><a href="/app">';
        B = (C = q.l || (E && E.l), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "App", A) : p.call(E, "l", "App", A));
        if (B || B === 0) {
            z += B
        }
        z += "</a></li>";
        return z
    }

    function x(E, D) {
        var z = "",
            B, C, A;
        z += '<li class="nav-menu__item"><a href="/settings" data-settings="1">';
        B = (C = q.lp || (E && E.lp), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "feedback form", "Settings", A) : p.call(E, "lp", "feedback form", "Settings", A));
        if (B || B === 0) {
            z += B
        }
        z += "</a></li>";
        return z
    }

    function v(E, D) {
        var z = "",
            B, C, A;
        z += '<li class="nav-menu__item"><a href="/bang">';
        B = (C = q.l || (E && E.l), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "Bangs", A) : p.call(E, "l", "Bangs", A));
        if (B || B === 0) {
            z += B
        }
        z += "</a></li>";
        return z
    }

    function u(E, D) {
        var z = "",
            B, C, A;
        z += '<li class="nav-menu__item"><a href="/press">';
        B = (C = q.l || (E && E.l), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "Press", A) : p.call(E, "l", "Press", A));
        if (B || B === 0) {
            z += B
        }
        z += "</a></li>";
        return z
    }

    function t(E, D) {
        var z = "",
            B, C, A;
        z += '<li class="nav-menu__item"><a href="/privacy">';
        B = (C = q.l || (E && E.l), A = {
            hash: {},
            data: D
        }, C ? C.call(E, "Policy", A) : p.call(E, "l", "Policy", A));
        if (B || B === 0) {
            z += B
        }
        z += "</a></li>";
        return z
    }
    r += '<div class="nav-menu--slideout"><ul class="nav-menu__list"><i class="nav-menu__close  js-side-menu-close">X</i>';
    h = q["if"].call(s, (s && s.hideThemes), {
        hash: {},
        inverse: o.program(1, n, y),
        fn: o.noop,
        data: y
    });
    if (h || h === 0) {
        r += h
    }
    h = q["if"].call(s, (s && s.showFeedbackIcons), {
        hash: {},
        inverse: o.noop,
        fn: o.program(4, k, y),
        data: y
    });
    if (h || h === 0) {
        r += h
    }
    r += '<ul class="nav-menu--main"><li class="nav-menu__heading"><span>';
    h = (a = q.lp || (s && s.lp), e = {
        hash: {},
        data: y
    }, a ? a.call(s, "maps_places", "Menu", e) : p.call(s, "lp", "maps_places", "Menu", e));
    if (h || h === 0) {
        r += h
    }
    r += "</span></li>";
    h = q["if"].call(s, (s && s.hideAbout), {
        hash: {},
        inverse: o.program(6, i, y),
        fn: o.noop,
        data: y
    });
    if (h || h === 0) {
        r += h
    }
    h = q["if"].call(s, (s && s.hideApp), {
        hash: {},
        inverse: o.program(8, g, y),
        fn: o.noop,
        data: y
    });
    if (h || h === 0) {
        r += h
    }
    h = q["if"].call(s, (s && s.hideSettings), {
        hash: {},
        inverse: o.program(10, x, y),
        fn: o.noop,
        data: y
    });
    if (h || h === 0) {
        r += h
    }
    h = q["if"].call(s, (s && s.hideBang), {
        hash: {},
        inverse: o.program(12, v, y),
        fn: o.noop,
        data: y
    });
    if (h || h === 0) {
        r += h
    }
    r += '<li class="nav-menu__item"><a href="/spread">';
    h = (a = q.l || (s && s.l), e = {
        hash: {},
        data: y
    }, a ? a.call(s, "Spread", e) : p.call(s, "l", "Spread", e));
    if (h || h === 0) {
        r += h
    }
    r += '</a></li><li class="nav-menu__item"><a href="/hiring">';
    h = (a = q.l || (s && s.l), e = {
        hash: {},
        data: y
    }, a ? a.call(s, "Careers", e) : p.call(s, "l", "Careers", e));
    if (h || h === 0) {
        r += h
    }
    r += "</a></li>";
    h = q["if"].call(s, (s && s.hidePress), {
        hash: {},
        inverse: o.program(14, u, y),
        fn: o.noop,
        data: y
    });
    if (h || h === 0) {
        r += h
    }
    r += '<li class="nav-menu__item  hide--mob"><a href="https://duck.co/help">';
    h = (a = q.l || (s && s.l), e = {
        hash: {},
        data: y
    }, a ? a.call(s, "Help", e) : p.call(s, "l", "Help", e));
    if (h || h === 0) {
        r += h
    }
    r += '</a></li></ul><ul class="nav-menu--privacy">       <li class="nav-menu__heading"><span>';
    h = (a = q.l || (s && s.l), e = {
        hash: {},
        data: y
    }, a ? a.call(s, "Privacy", e) : p.call(s, "l", "Privacy", e));
    if (h || h === 0) {
        r += h
    }
    r += '</span></li><li class="nav-menu__item"><a href="https://spreadprivacy.com/">';
    h = (a = q.l || (s && s.l), e = {
        hash: {},
        data: y
    }, a ? a.call(s, "Blog", e) : p.call(s, "l", "Blog", e));
    if (h || h === 0) {
        r += h
    }
    r += '</a></li><li class="nav-menu__item"><a href="https://donttrack.us/">DontTrack.us</a></li>';
    h = q["if"].call(s, (s && s.hidePrivacy), {
        hash: {},
        inverse: o.program(16, t, y),
        fn: o.noop,
        data: y
    });
    if (h || h === 0) {
        r += h
    }
    r += '</ul><ul class="nav-menu--social-media">       <li class="nav-menu__heading"><span>';
    h = (a = q.l || (s && s.l), e = {
        hash: {},
        data: y
    }, a ? a.call(s, "Keep in Touch", e) : p.call(s, "l", "Keep in Touch", e));
    if (h || h === 0) {
        r += h
    }
    r += '</span></li><li class="nav-menu__item"><a href="https://twitter.com/duckduckgo">';
    h = (a = q.l || (s && s.l), e = {
        hash: {},
        data: y
    }, a ? a.call(s, "Twitter", e) : p.call(s, "l", "Twitter", e));
    if (h || h === 0) {
        r += h
    }
    r += '</a></li><li class="nav-menu__item"><a href="https://reddit.com/r/duckduckgo">';
    h = (a = q.l || (s && s.l), e = {
        hash: {},
        data: y
    }, a ? a.call(s, "Reddit", e) : p.call(s, "l", "Reddit", e));
    if (h || h === 0) {
        r += h
    }
    r += "</a></li></ul></ul></div>";
    return r
});
this["DDG"]["templates"]["side_menu_link"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<div class="header--aside"><a class="header__button--menu  js-side-menu-open" href="#">&#8694;</a></div>'
});
this["DDG"]["templates"]["spread_badge"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<div class="badge-link  badge-link--spread"><img class="badge-link__icon  js-lazysvg" data-src="/assets/spread/share" /><span class="badge-link__title">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "spread_badge", "Love DuckDuckGo?", k) : i.call(j, "lp", "spread_badge", "Love DuckDuckGo?", k));
    if (a || a === 0) {
        f += a
    }
    f += '</span><span class="badge-link__text">';
    a = (e = b.lp || (j && j.lp), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "spread_badge", "Get your friends to switch and help us grow!", k) : i.call(j, "lp", "spread_badge", "Get your friends to switch and help us grow!", k));
    if (a || a === 0) {
        f += a
    }
    f += '</span><span class="ddgsi badge-link__close js-badge-link-close">&times;</span></div>';
    return f
});
this["DDG"]["templates"]["subscribe_to_newsletter_badge"] = Handlebars.template(function(e, q, o, i, t) {
    this.compilerInfo = [4, ">= 1.0.0"];
    o = this.merge(o, e.helpers);
    t = t || {};
    var p = "",
        f, a, b, m = this,
        n = o.helperMissing;

    function k(v, u) {
        return "serp"
    }

    function j(v, u) {
        return "top"
    }

    function h(v, u) {
        return "badge-link--fadein"
    }

    function g(v, u) {
        return '<a class="badge-link__wrap js-badge-main-msg">'
    }

    function c(v, u) {
        return '<div class="badge-link__wrap js-badge-main-msg">'
    }

    function s(v, u) {
        return "</a>"
    }

    function r(v, u) {
        return "</div>"
    }
    p += '<div class="badge-link badge-link--';
    f = o["if"].call(q, (q && q.serp), {
        hash: {},
        inverse: m.program(3, j, t),
        fn: m.program(1, k, t),
        data: t
    });
    if (f || f === 0) {
        p += f
    }
    p += " ";
    f = o["if"].call(q, (q && q.fadeIn), {
        hash: {},
        inverse: m.noop,
        fn: m.program(5, h, t),
        data: t
    });
    if (f || f === 0) {
        p += f
    }
    p += ' js-badge-link badge-link--thumbnail badge-link--newsletter">';
    f = o["if"].call(q, (q && q.url), {
        hash: {},
        inverse: m.program(9, c, t),
        fn: m.program(7, g, t),
        data: t
    });
    if (f || f === 0) {
        p += f
    }
    p += '<div class="badge-link--thumbnail__thumbnail-wrapper"><img class="badge-link--thumbnail__thumbnail-newsletter" src="/assets/bathroom.png"></div>            <div class="js-badge-form-container badge-link-container"><div class="badge-link-illustration__text-wrapper"><p class="badge-link-illustration__text js-badge-title anim-fadeOut">Worried about who is tracking you online?</p></div><div class="badge-link__btn-group js-badge-expand"><span class="badge-link__btn btn btn--primary">Get Privacy Tips from DuckDuckGo!</span></div></div><span class="ddgsi badge-link__close js-badge-link-dismiss">&times;</span>';
    f = o["if"].call(q, (q && q.url), {
        hash: {},
        inverse: m.program(13, r, t),
        fn: m.program(11, s, t),
        data: t
    });
    if (f || f === 0) {
        p += f
    }
    p += '<div class="badge-link__wrap badge-link__wrap--hidden js-badge-cookie-msg"><div class="badge-link__cookie-msg"><p>';
    f = (a = o.l || (q && q.l), b = {
        hash: {},
        data: t
    }, a ? a.call(q, "Clear your cookies often?", b) : n.call(q, "l", "Clear your cookies often?", b));
    if (f || f === 0) {
        p += f
    }
    p += "</p><p>";
    f = (a = o.l || (q && q.l), b = {
        hash: {},
        data: t
    }, a ? a.call(q, "Try our homepage that never shows these messages:", b) : n.call(q, "l", "Try our homepage that never shows these messages:", b));
    if (f || f === 0) {
        p += f
    }
    p += '</p><p><b><a href="https://start.duckduckgo.com">start.duckduckgo.com</a></b></p></div><span class="ddgsi badge-link__close badge-link__close--dark js-badge-link-close">&times;</span></div></div>';
    return p
});
this["DDG"]["templates"]["use_for_search_brave_ios"] = Handlebars.template(function(c, m, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, n, f = "function",
        h = this.escapeExpression,
        k = b.helperMissing;
    g += '<div style="height:';
    if (e = b.height) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.height);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + 'px;"><div class="ddgsi badge-link__close atb-overlay__close">×</div><div class="atb-overlay"><div class="atb-overlay__panel"><img class="atb-overlay__image" src="assets/onboarding/illustration3@2x.png" height="120"><div class="atb-overlay__title">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "Take Back Your Privacy!", n) : k.call(m, "l", "Take Back Your Privacy!", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="atb-overlay__copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "homepage onboarding", "We don't store your personal info or track you. Ever.", n) : k.call(m, "lp", "homepage onboarding", "We don't store your personal info or track you. Ever.", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="atb-overlay__steps"><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">1</div></div><div class="atb-overlay__step-cell"><img src="/assets/brave_ios_menu.png" width="50" height="50" class="atb-overlay__step-cell--bg-gray" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "mobile homepage banner", "Open %sMenu%s", "<b>", "</b>", n) : k.call(m, "lp", "mobile homepage banner", "Open %sMenu%s", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div></div><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">2</div></div><div class="atb-overlay__step-cell"><img src="/assets/brave_ios_settings.png" width="50" height="50" class="atb-overlay__step-cell--bg-gray" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "mobile homepage banner", "Select %sSettings%s, then %sSearch Engine%s", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "lp", "mobile homepage banner", "Select %sSettings%s, then %sSearch Engine%s", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div></div><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">3</div></div><div class="atb-overlay__step-cell"><img src="/assets/dax.png" width="50" height="50" class="atb-overlay__step-cell--bg-dax" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "Select %sDuckDuckGo%s!", "<b>", "</b>", n) : k.call(m, "l", "Select %sDuckDuckGo%s!", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += "</div></div></div></div></div></div>";
    return g
});
this["DDG"]["templates"]["use_for_search_chrome"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m) : j.call(k, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click the %s icon in the top toolbar", "<b>&#x2261;</b>", m) : j.call(k, "l", "Click the %s icon in the top toolbar", "<b>&#x2261;</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:42px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/chrome.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/chrome.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Select %sSettings%s", "<b>", "</b>", m) : j.call(k, "l", "Select %sSettings%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Under %sSearch%s section, click %sManage search engines...%s", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Under %sSearch%s section, click %sManage search engines...%s", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Find DuckDuckGo in the displayed list and click %sMake Default%s", "<b>", "</b>", m) : j.call(k, "l", "Find DuckDuckGo in the displayed list and click %sMake Default%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_chrome_android"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += "<img style='width:90px;height:90px;display:block;margin:0 auto 40px;box-shadow: 0 0 15px -3px rgba(0,0,0,0.35);' class='circle' src='/assets/android-chrome-menu.svg' />";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Press %sMenu > Add to homescreen > Add%s!", "<b>", "</b>", k) : i.call(j, "l", "Press %sMenu > Add to homescreen > Add%s!", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    return f
});
this["DDG"]["templates"]["use_for_search_chrome_android_default"] = Handlebars.template(function(c, m, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, n, f = "function",
        h = this.escapeExpression,
        k = b.helperMissing;
    g += '<div style="height:';
    if (e = b.height) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.height);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + 'px;"><div class="ddgsi badge-link__close atb-overlay__close">×</div><div class="atb-overlay"><div class="atb-overlay__panel"><img class="atb-overlay__image" src="assets/onboarding/illustration3@2x.png" height="120"><div class="atb-overlay__title">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "Take Back Your Privacy!", n) : k.call(m, "l", "Take Back Your Privacy!", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="atb-overlay__copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "homepage onboarding", "We don't store your personal info or track you. Ever.", n) : k.call(m, "lp", "homepage onboarding", "We don't store your personal info or track you. Ever.", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="atb-overlay__steps"><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">1</div></div><div class="atb-overlay__step-cell"><img src="/assets/chrome-android-menu.png" width="50" height="50" class="atb-overlay__step-cell--bg" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "mobile homepage banner", "Open %sMenu%s", "<b>", "</b>", n) : k.call(m, "lp", "mobile homepage banner", "Open %sMenu%s", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div></div><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">2</div></div><div class="atb-overlay__step-cell"><img src="/assets/chrome-android-settings.png" width="50" height="50" class="atb-overlay__step-cell--bg" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "mobile homepage banner", "Select %sSettings%s, then %sSearch Engine%s", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "lp", "mobile homepage banner", "Select %sSettings%s, then %sSearch Engine%s", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div></div><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">3</div></div><div class="atb-overlay__step-cell"><img src="/assets/chrome-android-select.png" width="50" height="50" class="atb-overlay__step-cell--bg" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "Select %sDuckDuckGo%s!", "<b>", "</b>", n) : k.call(m, "l", "Select %sDuckDuckGo%s!", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += "</div></div></div></div></div></div>";
    return g
});
this["DDG"]["templates"]["use_for_search_edge"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click the %s...%s icon at the top right:", "<b>", "</b>", m) : j.call(k, "l", "Click the %s...%s icon at the top right:", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:47px;" src="' + g((e = b.imageProxy || (k && k.imageProxy), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/edge.jpg", m) : j.call(k, "imageProxy", "/assets/add-to-browser/edge.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sSettings%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sSettings%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Scroll down and click %sView advanced settings%s", "<b>", "</b>", m) : j.call(k, "l", "Scroll down and click %sView advanced settings%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Under %sSearch in the address bar with%s select %sAdd New%s", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Under %sSearch in the address bar with%s select %sAdd New%s", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Select %sDuckDuckGo%s and click %sAdd as default%s!", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Select %sDuckDuckGo%s and click %sAdd as default%s!", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_firefox"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click the magnifying glass in the search box (at the top of the browser)", m) : j.call(k, "l", "Click the magnifying glass in the search box (at the top of the browser)", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sChange Search Settings%s in the drop down", "<b>", "</b>", m) : j.call(k, "l", "Click %sChange Search Settings%s in the drop down", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:202px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/firefox.jpg?v=2", m) : j.call(k, "retinaImage", "/assets/add-to-browser/firefox.jpg?v=2", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Select %sDuckDuckGo%s in the Default Search Engine drop down", "<b>", "</b>", m) : j.call(k, "l", "Select %sDuckDuckGo%s in the Default Search Engine drop down", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_firefox_android"] = Handlebars.template(function(c, m, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, n, f = "function",
        h = this.escapeExpression,
        k = b.helperMissing;
    g += '<div style="height:';
    if (e = b.height) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.height);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + 'px;"><div class="ddgsi badge-link__close atb-overlay__close">×</div><div class="atb-overlay"><div class="atb-overlay__panel"><img class="atb-overlay__image" src="assets/onboarding/illustration3@2x.png" height="120"><div class="atb-overlay__title">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "Take Back Your Privacy!", n) : k.call(m, "l", "Take Back Your Privacy!", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="atb-overlay__copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "homepage onboarding", "We don't store your personal info or track you. Ever.", n) : k.call(m, "lp", "homepage onboarding", "We don't store your personal info or track you. Ever.", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="atb-overlay__steps"><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">1</div></div><div class="atb-overlay__step-cell"><img src="/assets/chrome-android-menu.png" width="50" height="50" class="atb-overlay__step-cell--bg-dark" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "mobile homepage banner", "Open %sMenu%s", "<b>", "</b>", n) : k.call(m, "lp", "mobile homepage banner", "Open %sMenu%s", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div></div><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">2</div></div><div class="atb-overlay__step-cell"><img src="/assets/chrome-android-settings.png" width="50" height="50" class="atb-overlay__step-cell--bg-gray" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "mobile homepage banner", "Select %sSettings%s, then %sSearch Engine%s", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "lp", "mobile homepage banner", "Select %sSettings%s, then %sSearch Engine%s", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div></div><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">3</div></div><div class="atb-overlay__step-cell"><img src="/assets/dax.png" width="50" height="50" class="atb-overlay__step-cell--bg-dax" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "Select %sDuckDuckGo%s!", "<b>", "</b>", n) : k.call(m, "l", "Select %sDuckDuckGo%s!", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += "</div></div></div></div></div></div>";
    return g
});
this["DDG"]["templates"]["use_for_search_firefox_ios"] = Handlebars.template(function(c, m, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, n, f = "function",
        h = this.escapeExpression,
        k = b.helperMissing;
    g += '<div style="height:';
    if (e = b.height) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.height);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + 'px;"><div class="ddgsi badge-link__close atb-overlay__close">×</div><div class="atb-overlay"><div class="atb-overlay__panel"><img class="atb-overlay__image" src="assets/onboarding/illustration3@2x.png" height="120"><div class="atb-overlay__title">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "Take Back Your Privacy!", n) : k.call(m, "l", "Take Back Your Privacy!", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="atb-overlay__copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "homepage onboarding", "We don't store your personal info or track you. Ever.", n) : k.call(m, "lp", "homepage onboarding", "We don't store your personal info or track you. Ever.", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="atb-overlay__steps"><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">1</div></div><div class="atb-overlay__step-cell"><img src="/assets/ff_menu.png" width="50" height="50" class="atb-overlay__step-cell--bg-gray" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "mobile homepage banner", "Open %sMenu%s", "<b>", "</b>", n) : k.call(m, "lp", "mobile homepage banner", "Open %sMenu%s", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div></div><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">2</div></div><div class="atb-overlay__step-cell"><img src="/assets/ff_settings.png" width="50" height="50" class="atb-overlay__step-cell--bg-gray" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "mobile homepage banner", "Select %sSettings%s, then %sSearch Engine%s", "<b>", "</b>", "<b>", "</b>", n) : k.call(m, "lp", "mobile homepage banner", "Select %sSettings%s, then %sSearch Engine%s", "<b>", "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div></div><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">3</div></div><div class="atb-overlay__step-cell"><img src="/assets/dax.png" width="50" height="50" class="atb-overlay__step-cell--bg-dax" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "Select %sDuckDuckGo%s!", "<b>", "</b>", n) : k.call(m, "l", "Select %sDuckDuckGo%s!", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += "</div></div></div></div></div></div>";
    return g
});
this["DDG"]["templates"]["use_for_search_firefox_old"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m) : j.call(k, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Check %sMake this the current search engine%s", "<b>", "</b>", m) : j.call(k, "l", "Check %sMake this the current search engine%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:219px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/firefox_old.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/firefox_old.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sAdd%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sAdd%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_ie"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m) : j.call(k, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, 'Make sure to check %s"Make this my default search provider"%s', "<b>", "</b>", m) : j.call(k, "l", 'Make sure to check %s"Make this my default search provider"%s', "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:200.5px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/ie.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/ie.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sAdd%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sAdd%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_ios8"] = Handlebars.template(function(c, m, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, n, f = "function",
        h = this.escapeExpression,
        k = b.helperMissing;
    g += '<div style="height:';
    if (e = b.height) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.height);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + 'px;"><div class="ddgsi badge-link__close atb-overlay__close">×</div><div class="atb-overlay"><div class="atb-overlay__panel"><img class="atb-overlay__image" src="assets/onboarding/illustration3@2x.png" height="120"><div class="atb-overlay__title">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "Take Back Your Privacy!", n) : k.call(m, "l", "Take Back Your Privacy!", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="atb-overlay__copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "homepage onboarding", "We don't store your personal info or track you. Ever.", n) : k.call(m, "lp", "homepage onboarding", "We don't store your personal info or track you. Ever.", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div><div class="atb-overlay__steps"><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">1</div></div><div class="atb-overlay__step-cell"><img src="/assets/ios-settings-icon-small.png" width="50" height="50" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "mobile homepage banner", "Open %sSettings%s", "<b>", "</b>", n) : k.call(m, "lp", "mobile homepage banner", "Open %sSettings%s", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div></div><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">2</div></div><div class="atb-overlay__step-cell"><img src="/assets/ios-safari-icon.png" width="50" height="50" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.lp || (m && m.lp), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "mobile homepage banner", "Select %s%s%s, then %sSearch Engine%s", "<b>", (m && m.displayBrowserName), "</b>", "<b>", "</b>", n) : k.call(m, "lp", "mobile homepage banner", "Select %s%s%s, then %sSearch Engine%s", "<b>", (m && m.displayBrowserName), "</b>", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</div></div><div class="atb-overlay__step"><div class="atb-overlay__step-cell"><div class="atb-overlay__step-number">3</div></div><div class="atb-overlay__step-cell"><img src="/assets/ios-safari-checked.png" width="50" height="50" /></div><div class="atb-overlay__step-copy">';
    a = (e = b.l || (m && m.l), n = {
        hash: {},
        data: i
    }, e ? e.call(m, "Select %sDuckDuckGo%s!", "<b>", "</b>", n) : k.call(m, "l", "Select %sDuckDuckGo%s!", "<b>", "</b>", n));
    if (a || a === 0) {
        g += a
    }
    g += "</div></div></div></div></div></div>";
    return g
});
this["DDG"]["templates"]["use_for_search_maxthon"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Go to Options.", k) : i.call(j, "l", "Go to Options.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Go to Search Engine.", k) : i.call(j, "l", "Go to Search Engine.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Click add.", k) : i.call(j, "l", "Click add.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Enter the following details: %sName%s: DuckDuckGo%s URL%s: %s Alias%s: d%s", "<ol><li><b>", "</b>", "</li><li><b>", "</b>", "https://duckduckgo.com/?q=%s</li><li><b>", "</b>", "</li></ol>", k) : i.call(j, "l", "Enter the following details: %sName%s: DuckDuckGo%s URL%s: %s Alias%s: d%s", "<ol><li><b>", "</b>", "</li><li><b>", "</b>", "https://duckduckgo.com/?q=%s</li><li><b>", "</b>", "</li></ol>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Click OK.", k) : i.call(j, "l", "Click OK.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_opera"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Select %sOpera > Preferences%s (on Mac) or %sMenu > Settings%s (on Windows)", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Select %sOpera > Preferences%s (on Mac) or %sMenu > Settings%s (on Windows)", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click on %sBrowser%s in the sidebar", "<b>", "</b>", m) : j.call(k, "l", "Click on %sBrowser%s in the sidebar", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Under Search click the drop down and select %sDuckDuckGo%s", "<b>", "</b>", m) : j.call(k, "l", "Under Search click the drop down and select %sDuckDuckGo%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/opera.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/opera.jpg", m))) + '" />';
    return f
});
this["DDG"]["templates"]["use_for_search_palemoon"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click the drop down in the search box", m) : j.call(k, "l", "Click the drop down in the search box", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:137px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/palemoon.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/palemoon.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Selected %sDuckDuckGo%s", "<b>", "</b>", m) : j.call(k, "l", "Selected %sDuckDuckGo%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_safari"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Open a new tab or window", m) : j.call(k, "l", "Open a new tab or window", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click the magnifying glass in the search bar", m) : j.call(k, "l", "Click the magnifying glass in the search bar", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Select DuckDuckGo!", m) : j.call(k, "l", "Select DuckDuckGo!", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/safari.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/safari.jpg", m))) + '" />';
    return f
});
this["DDG"]["templates"]["use_for_search_safari_old"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Click %sHere%s to download the DuckDuckGo extension", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz">', "</a>", k) : i.call(j, "l", "Click %sHere%s to download the DuckDuckGo extension", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz">', "</a>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "After it downloads, locate the extension file and double-click it to install", k) : i.call(j, "l", "After it downloads, locate the extension file and double-click it to install", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_safari_windows"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz" target="com.duckduckgo.safari-HKE973VLUW">', "</a>", k) : i.call(j, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz" target="com.duckduckgo.safari-HKE973VLUW">', "</a>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Click %sOpen%s to download and open the DuckDuckGo Safari extension", "<b>", "</b>", k) : i.call(j, "l", "Click %sOpen%s to download and open the DuckDuckGo Safari extension", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "After it downloads and opens, click %sInstall%s", "<b>", "</b>", k) : i.call(j, "l", "After it downloads and opens, click %sInstall%s", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, e ? e.call(j, "Click the Duck icon at the top of your browser to search!", k) : i.call(j, "l", "Click the Duck icon at the top of your browser to search!", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_seamonkey"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, e, m, j = b.helperMissing,
        g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "Click %sEdit > Preferences%s (on Windows) %sSeaMonkey > Preferences%s (on Mac)", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Click %sEdit > Preferences%s (on Windows) %sSeaMonkey > Preferences%s (on Mac)", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "In the side menu select %sInternet Search%s", "<b>", "</b>", m) : j.call(k, "l", "In the side menu select %sInternet Search%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "In the drop down select %sDuckDuckGo%s!", "<b>", "</b>", m) : j.call(k, "l", "In the drop down select %sDuckDuckGo%s!", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (k && k.retinaImage), m = {
        hash: {},
        data: h
    }, e ? e.call(k, "/assets/add-to-browser/seamonkey.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/seamonkey.jpg", m))) + '" />';
    return f
});
this["DDG"]["templates"]["use_for_search_vivaldi"] = Handlebars.template(function(e, m, c, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    i = i || {};
    var g = "",
        a, f, o, k = c.helperMissing,
        n = this,
        h = this.escapeExpression;

    function b(q, p) {
        return '<li><a href="https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg" target="_blank">Install DuckDuckGo Privacy Essentials</a></li>'
    }
    g += '<ol class="add-to-browser__directions"><li>';
    a = (f = c.l || (m && m.l), o = {
        hash: {},
        data: i
    }, f ? f.call(m, "Click on the magnifying glass in the search box at the top right", o) : k.call(m, "l", "Click on the magnifying glass in the search box at the top right", o));
    if (a || a === 0) {
        g += a
    }
    g += "</li><li>";
    a = (f = c.l || (m && m.l), o = {
        hash: {},
        data: i
    }, f ? f.call(m, "Select %sDuckDuckGo%s!", "<b>", "</b>", o) : k.call(m, "l", "Select %sDuckDuckGo%s!", "<b>", "</b>", o));
    if (a || a === 0) {
        g += a
    }
    g += "</li>";
    a = c["if"].call(m, (m && m.showExtensionLink), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    g += '</ol><img class="add-to-browser__image" style="height:145px;" src="' + h((f = c.retinaImage || (m && m.retinaImage), o = {
        hash: {},
        data: i
    }, f ? f.call(m, "/assets/add-to-browser/vivaldi.jpg", o) : k.call(m, "retinaImage", "/assets/add-to-browser/vivaldi.jpg", o))) + '" />';
    return g
});
this["DDG"] = this["DDG"] || {};
this["DDG"]["templates"] = this["DDG"]["templates"] || {};
this["DDG"]["templates"]["theme_autocomplete"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += ".search__autocomplete,.acp-wrap__column.acp-wrap__column--left {border-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.acp-wrap,.acp-footer {background-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.acp, .acp--bang {color: ";
    if (e = b.darkText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.darkText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.acp strong,.acp--bang .acp--bang__phrase,.acp--highlight.acp--bang .acp--bang__phrase,.acp--highlight.acp--bang .acp--bang__snippet {color: ";
    if (e = b.lightText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lightText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.acp--highlight {background-color: ";
    if (e = b.selectedBg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.selectedBg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_background"] = Handlebars.template(function(f, n, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var i = "",
        b, g, h = "function",
        j = this.escapeExpression,
        o = this;

    function c(q, p) {
        return ".modal--popover.is-showing,.modal--popover--dk.is-showing {background: rgba(0,0,0,0.6); }"
    }

    function a(t, s) {
        var p = "",
            q, r;
        p += ".modal--popover.is-showing,.modal--popover--dk.is-showing {background: rgba(0,0,0,0.6); }.results--powered,.mapboxgl-ctrl.mapboxgl-ctrl-scale,.mapboxgl-ctrl.mapboxgl-ctrl-attrib,.mapbox-static__attribution {background-color: rgba(";
        if (r = e.rgbBg) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.rgbBg);
            q = typeof r === h ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += j(q) + ",0.85);}";
        return p
    }
    i += "body,.body--home,.site-wrapper,.region__body,.badge-link,.modal__box,.module--news__left,.module--news__right,.module--news__image-wrapper,.result__image,.map-detail {background-color: ";
    if (g = e.bg) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bg);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.tag-home__link,.tag-home__link:hover,.tag-home__link:visited,.tag-home__link:active,.tag-home__nav__close:hover,.results,.results--powered,.msg,.search-filters .dropdown--region.has-inactive-region .dropdown__button:after,.search-filters .dropdown:hover .dropdown__button,.search-filters .dropdown.is-open .dropdown__button,.search-filters .dropdown.is-active:hover .dropdown__button,.feedback-btn__icon:hover,.feedback-btn__send:hover,.feedback-btn__icon:focus,.feedback-btn__send:focus,.map-detail__name,.map-detail__name:hover,.map-detail__name:active,.map-detail__name:focus,.map-detail__name:visited,.map-detail .btn.btn--primary:hover {color: ";
    if (g = e.textTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.textTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.tag-home__link--newline .add-to-browser-badge--lite,.tag-home__link--newline .add-to-browser-badge--lite:hover,.tag-home__link--newline .add-to-browser-badge--lite:visited,.tag-home__link--newline .add-to-browser-badge--lite:active {color: ";
    if (g = e.textTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.textTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";border-width: 0px;background: none;}.result__check {color: ";
    if (g = e.bg) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bg);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.result__check:visited,.feedback-btn,.feedback-btn:hover {color: ";
    if (g = e.bgTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.result__a,.result__a:hover,.result__a:active,.highlight .result__a,.highlight .result__a:hover,.result__a:visited,.tag-home,.page-settings,.frm__label,.badge-link__text,.badge-link__cookie-msg,.no-results__related-search a,.no-results__related-search a:visited,.no-results__related-search a:active,.no-results__related-search a:hover,.modal__box,.modal__header__title,.modal__header__clear:hover,.modal__list__link,.modal__list__link:hover,.modal__list__link:visited,.modal__list__link:focus,.modal__list__link.is-highlighted,.modal--dropdown .modal__list__link.is-selected,.modal--dropdown .modal__list__link.is-selected:hover,.module--news__body__title,.module--news__body__title:hover,.module--news__body__title:active,.module--news__body__title:visited,.module--news__left,.module--news__right,.feedback-btn__icon,.feedback-btn__send,.feedback-modal__heading__prompt,.feedback-modal .frm__label,.module__title__link,.module__title__link:hover,.module__title__link:visited,.module__title__link:active,.about-info-box__heading,.about-info-box__info-label,.about-info-box__info-value,.about-info-box__link-row__link,.about-info-box__link-row__link:hover,.search-filters .dropdown .dropdown__button,.search-filters .dropdown.is-active .dropdown__button,.module__more-at,.module__more-at:hover,.module__more-at-bottom,.module__more-at-bottom:hover,.module__official-url,.module__official-url:hover,.module__link,.module__link:hover,.module__link:focus,.module__link:active,.module__link a,.module__link a:hover,.module__link a:focus,.module__link a:active,.map-detail__address,.map-detail__name,.map-detail .btn.btn--primary,.mapboxgl-ctrl,.mapboxgl-ctrl a,.mapbox-static__attribution,.mapbox-static__cta,.module__header.module__header--link,.module__footer,.module__footer:visited,.module__footer:active,.module__footer:hover,.place-list-item__title {color: ";
    if (g = e.text) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.text);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.settings-page-wrapper .set-side a,.settings-page-wrapper .set-side a:hover,.settings-page-wrapper .set-side a:active {color: ";
    if (g = e.text) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.text);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";text-decoration: underline;}.result--sep--hr:before,.result--more.is-loading,.feedback--button.btn--wire,.place-list-item:hover {color: ";
    if (g = e.textTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.textTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";border-color: ";
    if (g = e.bgTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";background-color: ";
    if (g = e.bgTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.feedback--button.btn--wire:hover {color: ";
    if (g = e.text) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.text);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";background-color: ";
    if (g = e.bgTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.mapboxgl-ctrl-scale {border-color: ";
    if (g = e.text) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.text);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.set-bookmarklet,.set-reset,.set-head,.set-thumbnail__img,.set-main-footer,.region__header__section--current,.badge-link,.frm__color__swatch {border-color: ";
    if (g = e.bgTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.modal__list__link:hover,.modal__list__link.is-active,.modal__list__link.is-highlighted,.modal--dropdown--region .modal__list__link.is-highlighted,.highlight .result__image,.switch,.cloudsave {background-color: ";
    if (g = e.bgTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.set-bookmarklet__input,.set-bookmarklet__data,.btn,.btn:visited,.btn:hover,.btn.is-active,.btn:active,.btn.btn--primary,.btn--primary:hover,.frm__input {background-color: ";
    if (g = e.bgTint2) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint2);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";border-color: ";
    if (g = e.bgTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";color: ";
    if (g = e.textTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.textTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.modal--dropdown--region .modal__header .frm__input {background-color: ";
    if (g = e.bgTint2) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint2);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.module--news__placeholder,.result__image__plc {color: ";
    if (g = e.textTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.textTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";background-color: ";
    if (g = e.bgTint2) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint2);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.frm__hr {border-color: ";
    if (g = e.bgTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.is-checked .btn.frm__switch__label {color: ";
    if (g = e.bg) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bg);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";border-color: ";
    if (g = e.bgTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";background-color: ";
    if (g = e.textTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.textTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.header-atb,.mapbox-static__cta {background-color: ";
    if (g = e.bgDark) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgDark);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.header-atb,.header-atb:active,.header-atb:hover,.header-atb:visited {color: ";
    if (g = e.textTint) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.textTint);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}";
    b = e["if"].call(n, (n && n.isDark), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += ".modal__box {border: 1px solid ";
    if (g = e.bgDark) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgDark);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.modal__header {background-color: ";
    if (g = e.bgDark) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgDark);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";border-bottom-color: ";
    if (g = e.bgDark) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgDark);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.modal--popout--bottom.has-header .modal__box:before,.modal--popout--bottom-right.has-header .modal__box:before,.modal--popout--bottom-left.has-header .modal__box:before,.modal--popout--bottom.has-header .modal__box:after,.modal--popout--bottom-right.has-header .modal__box:after,.modal--popout--bottom-left.has-header .modal__box:after,.modal--popout .modal__box:before {color: ";
    if (g = e.bgDark) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgDark);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.modal--popout .modal__box:after {color: ";
    if (g = e.bg) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bg);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}";
    b = e["if"].call(n, (n && n.isDark), {
        hash: {},
        inverse: o.noop,
        fn: o.program(3, a, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += ".modal__box {border: 1px solid ";
    if (g = e.bgDark) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgDark);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.modal__header {background-color: ";
    if (g = e.bgDark) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgDark);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";border-bottom-color: ";
    if (g = e.bgDark) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgDark);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.modal--popout--bottom.has-header .modal__box:before,.modal--popout--bottom-right.has-header .modal__box:before,.modal--popout--bottom-left.has-header .modal__box:before,.modal--popout--bottom.has-header .modal__box:after,.modal--popout--bottom-right.has-header .modal__box:after,.modal--popout--bottom-left.has-header .modal__box:after,.modal--popout .modal__box:before {color: ";
    if (g = e.bgDark) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bgDark);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.modal--popout .modal__box:after {color: ";
    if (g = e.bg) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bg);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ";}.search-filters-wrap:before {background-image: linear-gradient(90deg, ";
    if (g = e.bg) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bg);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ", rgba(";
    if (g = e.rgbBg) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.rgbBg);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ", 0));}.search-filters-wrap:after {background-image: linear-gradient(90deg, rgba(";
    if (g = e.rgbBg) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.rgbBg);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ", 0), ";
    if (g = e.bg) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.bg);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + ");}";
    return i
});
this["DDG"]["templates"]["theme_custom_font"] = Handlebars.template(function(e, m, c, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    j = j || {};
    var h = "",
        a, f, g = "function",
        i = this.escapeExpression,
        n = this;

    function b(p, o) {
        return ".zci b,.zcm b,.zcm__link,.tile--s h1,.tile--s h2,.tile--s h3,.tile--s h4,.tile--s h5,.tile--s h6,.badge--ad {font-weight: 500;}"
    }
    h += "body,input,textarea,.search__input--adv {font-family: ";
    if (f = c.fontStack) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.fontStack);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}";
    a = c["if"].call(m, (m && m.lightenWeight), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    return h
});
this["DDG"]["templates"]["theme_font"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += "@font-face {font-family: 'DDG_ProximaNova";
    if (e = b.name) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.name);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "';src: url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.eot');src: url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.eot?#iefix') format('embedded-opentype'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.woff') format('woff'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.ttf') format('truetype'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.svg#proxima_nova_ltsemibold') format('svg');font-weight: 600;font-style: normal;}@font-face {font-family: 'DDG_ProximaNova";
    if (e = b.name) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.name);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "';src: url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.eot');src: url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.eot?#iefix') format('embedded-opentype'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.woff') format('woff'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.ttf') format('truetype'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.svg#proxima_nova_rgregular') format('svg');font-weight: normal;font-style: normal;}";
    return g
});
this["DDG"]["templates"]["theme_header"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += ".header-wrap {background-color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.no-touch .header-wrap .zcm__link.is-active {background-color: transparent;}.header-wrap.header-wrap--home {background: none;}.no-touch .site-wrapper .zcm__link, .zcm__link, .zcm__link:visited {color: ";
    if (e = b.link) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.link);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.no-touch .zcm__link:hover:active, .no-touch .zcm__link:focus:active {color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "; }.no-touch .zcm__link.is-active:hover, .no-touch .zcm__link.is-active:hover:active, .no-touch .zcm__link.is-active:focus:active {color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "; }.zcm__link:hover,.zcm__link:active,.zcm__link.is-active {background-color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-bottom-color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.no-touch .header-wrap .zcm__link.is-active {color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.zcm__sep--h:before {border-left-color: ";
    if (e = b.bottomBorder) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bottomBorder);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.lt-ie9 .header-wrap {border-bottom-color: ";
    if (e = b.bottomBorder) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bottomBorder);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.set-header--menu.has-zcm.is-mobile .header--aside {background: -moz-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 100%);background: -webkit-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "),1) 100%);background: -o-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",0) 0%,rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 40%,rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 100%);background: -ms-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 100%);background: linear-gradient(to right, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 100%);}";
    return g
});
this["DDG"]["templates"]["theme_header_menu_button"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += ".btn--icon,.header__button--menu,.no-touch .btn--icon,.no-touch .header__button,.no-touch .header__button--menu {color: ";
    if (e = b.icon) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.icon);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.header--aside__msg,.header--aside__msg:hover,.header--aside__twitter:hover {color: ";
    if (e = b.hoverText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.hoverText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.no-touch .btn--icon:hover,.no-touch .header__button:hover,.no-touch .header__button--menu:hover, .no-touch .header__button:focus, .no-touch .header__button--menu:focus {color: ";
    if (e = b.hoverColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.hoverColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.hoverBg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.hoverBg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.metabar__grid-btn {color: ";
    if (e = b.icon) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.icon);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.hoverColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.hoverColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.metabar__grid-btn:hover {color: ";
    if (e = b.hoverColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.hoverColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.hoverBg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.hoverBg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_result_highlight"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += ".result.highlight,.sitelinks_td.highlight,.msg--result.highlight,.msg--box,.about-info-box__toggle--hover .about-info-box__toggle__chevron,.about-info-box__toggle--hover .about-info-box__toggle__chevron--collapse {background: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.result.result--ad.highlight {background: none;}";
    return g
});
this["DDG"]["templates"]["theme_result_message"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += ".msg--bang__bang-name {color: ";
    if (e = b.textColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.textColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.bgColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bgColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.borderColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.borderColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.msg--bang__bangs-link,.msg--bang__bangs-link:hover,.msg--bang__bangs-link:visited,.msg--bang__bangs-link:active,.msg--spelling a,.msg--spelling a:visited,.msg--spelling a:hover,.msg--spelling a:active,.msg--site a,.msg--site a:visited,.msg--site a:hover,.msg--site a:active {color: ";
    if (e = b.linkColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.linkColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.msg__site,.msg__clear-filter,.msg__clear-filter:hover {color: ";
    if (e = b.textColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.textColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_result_snippet"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += ".result__snippet,.result__snippet b,.result__snippet a,.result__snippet a:hover,.result__snippet a:active,.result__snippet a:visited,.result__snippet .sponsored__sitelink__comma,.result__snippet .sponsored__sitelink__comma:hover,.result__snippet .sponsored__sitelink__comma:active,.module__text,.module__link:visited,.module__link a:visited,.review__rating-date,.place-detail__item,.place-list-item__info__item,.maps-disambiguation__link-row__link,.dropdown--directions .dropdown__button {color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + " !important;}.result__date {color: ";
    if (e = b.dateColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.dateColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + " !important;}";
    return g
});
this["DDG"]["templates"]["theme_result_title"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += ".result a.result__a,.result a.result__a:hover,.result a.result__a:active,.result a.badge--ad,.result a.badge--ad:hover,.result a.badge--ad:focus,.sitelinks__title a.result__a,.sitelinks__title a.result__a:hover,.sitelinks__title a.result__a:active,.result--url-above-snippet a.result__menu,.result--url-above-snippet a.result__menu:hover,.result--url-above-snippet a.result__menu:active,.result--url-above-snippet a.result__menu:visited,.msg__all,.msg__all:visited,.msg__all:hover,.msg__clear,.msg__clear:active,.msg__clear:hover,.msg__clear:visited,.msg--spelling :link,.msg--spelling a:visited,.msg--spelling a:hover,.module__link,.module__link:hover,.module__link:focus,.module__link:active,.module__link a,.module__link a:hover,.module__link a:focus,.module__link a:active,.module--news__body__title,.module--news__body__title:active,.module--news__body__title:hover,.module--news__more,.module--news__more:active,.module--news__more:hover,.no-results__related-search a,.no-results__related-search a:visited,.no-results__related-search a:active,.no-results__related-search a:hover,.about-info-box__link-row__link:hover,.about-info-box__link-row__link:active {color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.result a.badge--ad,.result a.badge--ad:hover,.result a.badge--ad:focus {border-color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_result_web_links"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += ".result__url,.result__url:visited,.result__url:active,.result__url:hover,.badge--ad,.badge--ad:hover,.badge--ad:focus,a.result__menu,a.result__menu:hover,a.result__menu:active,a.result__menu:visited,.result--ad .result__url,.result--ad .result__url:hover,.result--ad .result__url:active,.result--ad .result__url:visited,.sponsored__sitelink__comma,.sponsored__sitelink__comma:hover,.sponsored__sitelink__comma:active,.sponsored__sitelink, .sponsored__sitelink:visited,.sponsored__sitelink:hover,.report-ad,.report-ad__link,.report-ad__link:hover,.report-ad__link:visited,.report-ad__link:visited:hover {color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.sitelinks_td {border-left: solid 1px ";
    if (e = b.bgTint) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bgTint);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.badge--ad,.badge--ad:hover,.badge--ad:focus {border-color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_search_bar"] = Handlebars.template(function(e, m, c, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    j = j || {};
    var h = "",
        a, f, g = "function",
        i = this.escapeExpression,
        n = this;

    function b(s, r) {
        var o = "",
            p, q;
        o += ".search__input--adv {color: ";
        if (q = c.inputText) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.inputText);
            p = typeof q === g ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        o += i(p) + ";}";
        return o
    }
    h += ".search--home,.search--header {background-color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.search__clear,.search__button,.search--home.has-text .search__clear {color: ";
    if (f = c.iconText) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.iconText);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.search__button:hover,.search__button--active,.search:hover .search__button,.search__input:focus ~ .search__button,.search--header.has-text.search--hover .search__button,.search--header.has-text.search--focus .search__button,.search--home.has-text .search__button,.search__button:focus,.search:hover .search__button:focus,.search--header.has-text.search--hover .search__button:hover,.search--header.has-text.search--focus .search__button:hover,.search--home.has-text .search__button:focus,.search--home.has-text .search__button:hover {background-color: ";
    if (f = c.buttonBg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.buttonBg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}";
    a = c["if"].call(m, (m && m.inputText), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    return h
});
this["DDG"]["templates"]["theme_sidemenu"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression;
    g += ".nav-menu,.nav-menu--slideout {background-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.nav-menu--slideout {border-left-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;}.nav-menu__icon,.nav-menu__close,.nav-menu__item,.nav-menu__item--secondary,.nav-menu__item > a,.nav-menu__item--secondary > a,.nav-menu__item > a:visited,.nav-menu__item--secondary > a:visited {color: ";
    if (e = b.link) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.link);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.nav-menu__item > a:hover {color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.nav-menu__heading,.nav-menu__heading--primary {color: ";
    if (e = b.text) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.text);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.nav-menu__theme.theme-is-selected {border-color: ";
    if (e = b.text) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.text);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_zci"] = Handlebars.template(function(e, m, c, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    j = j || {};
    var h = "",
        a, f, g = "function",
        i = this.escapeExpression,
        n = this;

    function b(s, r) {
        var o = "",
            p, q;
        o += ".tile__rating a:hover,.module__link, .module__link:visited, .module__link:hover, .module__link:focus, .module__link:active,.module__link a, .module__link a:visited, .module__link a:hover, .module__link a:focus, .module__link a:active {color: ";
        if (q = c.link) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.link);
            p = typeof q === g ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        o += i(p) + ";}.module__map .mapbox-controls .btn--mapbox,.mapbox-control--mode {color: #fff;background-color: ";
        if (q = c.modeBg) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.modeBg);
            p = typeof q === g ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        o += i(p) + ";}";
        return o
    }
    h += ".zci, .zci:before,.tileview .metabar--fixed,.tileview--grid .metabar--fixed,.tileview--grid .metabar--fixed.is-stuck {background-color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-bottom-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.zci-wrap {background-color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.set-header--fixed .tileview--grid .metabar--fixed,.tileview--grid .metabar--fixed.is-stuck {background-color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-top-color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.zci.is-active {border-bottom-color: ";
    if (f = c.bottomBorder) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bottomBorder);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.zci__body,.zci__detail,.zci__caption,.zci__header,.zci__body h1, .zci__detail h1,.zci__body h2, .zci__detail h2,.zci__body h3, .zci__detail h3,.zci__body h4, .zci__detail h4,.zci__body h5, .zci__detail h5,.zci__body h6, .zci__detail h6,.metabar,.metabar__dropdowns .dropdown  .dropdown__button,.c-detail__title,.c-detail__title__sub,.c-detail__desc,.c-detail__filemeta,.c-detail__more,.c-detail__user,.c-detail__count,.c-detail__date,.c-info,.c-info__title,.c-icon,.c-icon__title,.c-icon__content,.c-score,dropdown__selected,dropdown__selected:hover,dropdown__selected:focus,.metabar__primary-text--linked,.module {color: ";
    if (f = c.text) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.text);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.detail--l .detail__media, .detail--products .detail__media, .detail--qa .detail__media, .detail--about .detail__media,.detail--l .detail__media:after, .detail--products .detail__media:after, .detail--qa .detail__media:after, .detail--about .detail__media:after {background: none;}a,a.no-visited,.zci__body a,.zci__detail a,.zcm__link--sub,.zcm__link--sub:visited,.zci__body .chomp--link,.metabar .zci__more-at,.zci__body .zci__more-at,.zci__body .c-detail__rating :link,.zci__more-at,.c-info__link,.c-icon__link,.chomp--link__mr,.chomp--link__ls {color: ";
    if (f = c.link) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.link);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.zci__body a:hover,.detail__body a:hover,.zci__body a:active,.zci__body a:active,.zcm__link--sub.is-here,.zcm__item.is-here .zcm__link--sub,.zci__body .chomp--link:hover,.zci__more-at:hover,.c-info__link:hover,.c-icon__link:hover,.zcm__link--sub:hover,.zcm__link--sub.is-highlighted,.chomp--link:hover .chomp--link__mr,.chomp--link:hover .chomp--link__ls,.metabar__dropdowns .dropdown .dropdown__button:hover {color: ";
    if (f = c.activeLink) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.activeLink);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.module__text pre,.zci pre,.zci code {color: ";
    if (f = c.modeText) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.modeText);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";background-color: ";
    if (f = c.modeBg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.modeBg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.zci pre,.zci code,.c-list__items,.record__cell {border-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.metabar__mode {background-color: ";
    if (f = c.modeBg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.modeBg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.metabar__mode.is-disabled,.metabar__mode.is-disabled:hover,.metabar__mode.is-disabled:active {color: ";
    if (f = c.modeBg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.modeBg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";background-color: transparent;}.metabar__dropdowns-wrap:before {background-image: linear-gradient(90deg, ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ",rgba(242,242,242,0));}.metabar__dropdowns-wrap:after {background-image: linear-gradient(90deg, rgba(242,242,242,0),";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ");}.detail {background-color: ";
    if (f = c.detail) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.detail);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.detail__close {color: ";
    if (f = c.accent1) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accent1);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.detail__close:hover,.detail__close:active{color: ";
    if (f = c.accent2) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accent2);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.detail__media--pr {border-right-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile--img:after {border-bottom-color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.sep,.sep--small,.sep--before:before,.sep--after:after {border-color: ";
    if (f = c.accent1) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accent1);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tileview--grid .metabar--fixed:before {background-color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile-nav.can-scroll,.tile-nav.can-scroll:after,.tile-nav.can-scroll:hover {background-color: ";
    if (f = c.tileNav) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.tileNav);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + " !important;}.chomp--link__icn,.count__i:after {color: ";
    if (f = c.accent3) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accent3);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile-nav--sm {color: ";
    if (f = c.accentText) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accentText);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";background-color: ";
    if (f = c.accent1) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accent1);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile-nav--sm:hover,.tile-nav--sm:active {background-color: ";
    if (f = c.accent2) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accent2);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.c-detail__links__btn,.zci .btn--primary,.zci .btn.btn--primary,.c-detail__links__btn:hover,.zci .btn--primary:hover,.zci__body a.btn--primary:hover {color: ";
    if (f = c.accentText) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accentText);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";background-color: ";
    if (f = c.accent1) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accent1);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.star,.count__i,.tileview__message,.tileview__message:before {color: ";
    if (f = c.accent1) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accent1);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile, .tile--s, .tile--info {border-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.highlight.tile, .highlight.tile--s, .highlight.tile--info,.is-selected.tile, .is-selected.tile--s, .is-selected.tile--info,.highlight.tile--f .tile--f__main, .highlight.tile--f .tile--f__alt, .is-selected.tile--f .tile--f__alt {border-color: ";
    if (f = c.outline) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.outline);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";outline-color: ";
    if (f = c.outline) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.outline);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.highlight.tile--no-highlight, .highlight.tile--no-highlight:active, .tile--no-highlight.is-selected {border-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";outline: none;}.tile--m {background-color: ";
    if (f = c.color) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.color);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";color: ";
    if (f = c.link) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.link);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile--m:hover {background-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";color: ";
    if (f = c.activeLink) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.activeLink);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile--m:active,.tile--m.is-loading,.tile--m.is-loading:hover {background-color: ";
    if (f = c.color) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.color);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";color: ";
    if (f = c.color) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.color);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.has-tiles--grid .tile--m--images,.has-tiles--grid .tile--m--images:hover,.has-tiles--grid .tile--m--images.is-loading,.is-mobile .has-tiles--grid .tile--m,.is-mobile .has-tiles--grid .tile--m:hover {background-color: ";
    if (f = c.color) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.color);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-color: ";
    if (f = c.detail) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.detail);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.bg-clr--dk,.bg-clr--dk2,.bg-clr--slate,.bg-clr--slate-light {background-color: ";
    if (f = c.text) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.text);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.bg-clr--lt,.bg-clr--lt2,.bg-clr--lt3,.bg-clr--grey-dark,.bg-clr--grey-light,.bg-clr--grey {background-color: ";
    if (f = c.accentText) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accentText);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.text--primary,.tx-clr--dk,.tx-clr--dk2,.tx-clr--slate,.tx-clr--slate-light {color: ";
    if (f = c.text) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.text);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.zci__subheader,.zci__header__sub,.c-info__sub,.c-info__title__sub,.c-icon__sub,.c-score__head,.c-score__foot,.text--secondary,.tx-clr--grey-dark,.tx-clr--grey-light,.tx-clr--grey,.tx-clr--lt,.tx-clr--lt2,.tx-clr--lt3,.place-detail__subtitle {color: ";
    if (f = c.accentText) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accentText);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile, .tile__title, .tile h4, .tile--m--mob, .at-topic .tile__title, .at-topic .tile.active-topic .tile__title, .at-topic .tile.highlight .tile__title, .is-mobile .c-info__link, .is-mobile .c-info__link:hover, .tile .tile__price b {color: ";
    if (f = c.text) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.text);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile, .tile--s, .bg-tile, .tile--m--mob, .tile__media--pr, .at-topic .tile.active-topic, .at-topic .tile.highlight, .tile__foot--news, .tile--f__main, .tile--f__alt, .tile__num:before, .is-mobile .c-info__link, .is-mobile .c-info__link:hover, .tile__media .tile__media__img {background-color: ";
    if (f = c.color) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.color);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile__expand, .tile__expand:hover,.bg-clr--platinum-darker,.bg-clr--platinum-dark,.bg-clr--platinum-light,.bg-clr--platinum,.bg-clr--silver-dark,.bg-clr--silver-light,.bg-clr--silver{background: ";
    if (f = c.accent1) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accent1);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.at-topic .tile {background: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile__sub, .tile__sub--2, .tile__title__sub, .tile__foot, .tile__footer, .tile__link, .tile--audio .tile__footer, .tile__count, .tile--b--i .tile__source, .tile__neighborhood, .tile__rating, .tile__more-at, .tile__title a:visited,.tx-clr--platinum-darker, .tx-clr--platinum-dark, .tx-clr--platinum-light, .tx-clr--platinum,.tx-clr--silver-dark, .tx-clr--silver-light, .tx-clr--silver {color: ";
    if (f = c.accentText2) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accentText2);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile--b--i .tile__description, .tile__content, .tile__content--qa, .tile__content--news, .tile__tx, .tile__expand, .tile__expand:hover, .tile__num, .tile__phone, .info__label, .info__value, .tile__foot, .tile__foot--news, .attribution--link__icon {color: ";
    if (f = c.accentText) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.accentText);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile--info .info, .tile__expand, .tile__expand:hover, .attribution__hr, .c-score__line, .c-score__foot, .has-score .c-score__line__name, .is-mobile .no-score .c-score__line--home, .c-score__line--vs1:before, .c-score__line--vs1:after {border-color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile--f__main, .tile--f__alt, .csstransforms3d .tile--f__main, .csstransforms3d .tile--f__alt, .is-mobile .c-info__link {border-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tile .tile__price {color: ";
    if (f = c.detail) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.detail);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.mapbox-static,.mapbox-gl {background: ";
    if (f = c.color) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.color);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}";
    a = c["if"].call(m, (m && m.isDark), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    return h
});