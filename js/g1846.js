! function(a) {
    var c = function(s, j, g, p) {
        var m = 0,
            q = 0,
            h = g.length,
            n, e, d = false,
            f = false,
            o;
        for (; m < h; m++) {
            n = g[m], e = null;
            o = false;
            if (n.required) {
                e = DDG.getProperty(s, n.required);
                if (e) {
                    if (e.length && e.length > 0) {
                        d = true;
                        continue
                    }
                    if (e === 0 || !!e) {
                        d = true;
                        continue
                    }
                }
                return false
            }
            if (!n.key) {
                return false
            }
            e = DDG.getProperty(s, n.key);
            f = true;
            if (e) {
                if (n.match) {
                    var k = e.match(n.match);
                    o = !!k;
                    if (o && n.strict) {
                        var r = DDG.get_query().match(n.match);
                        o = (k[0].toLowerCase() == r[0].toLowerCase())
                    }
                    if (!o) {
                        return false
                    }
                } else {
                    if ($.isArray(e)) {
                        e = e.join(" ")
                    }
                    o = DDG.isRelevant(e, n.skip_words || j.skip_words, n.min_length, !!n.strict)
                }
            } else {
                o = false
            }
            if (o) {
                q++
            } else {
                if (!p) {
                    return false
                }
            }
        }
        if (q === 0) {
            if (d && !f) {
                return true
            }
            return false
        }
        return true
    };
    var b = function(e, d) {
        var f, g = d[d.type || "primary"];
        if (!g) {
            return true
        }
        f = c(e, d, g, true);
        return f
    };
    a.DDH = {
        spice_tabs: {},
        spice_objects: {},
        add: function(e) {
            if (!e.id) {
                return
            }
            if (!e.data) {
                return
            }
            if (e.require) {
                var f = e.require;
                delete e.require;
                DDG.require(f, a.DDH.add.bind(a.DDH, e));
                return
            }
            if (!e.allowMultipleCalls && this.spice_objects[e.id]) {
                return null
            }
            if (a.DDH[e.id] && a.DDH[e.id].build && $.isFunction(a.DDH[e.id].build)) {
                var d = a.DDH[e.id].build(e);
                if (d === false || ($.type(d) === "object" && $.isEmptyObject(d))) {
                    return
                } else {
                    $.extend(e, d)
                }
            }
            if (a.DDH[e.id] && a.DDH[e.id].build_async && $.isFunction(a.DDH[e.id].build_async)) {
                a.DDH[e.id].build_async(e, function(i) {
                    var h = a.DDH._build_ops(i);
                    if (h) {
                        a.DDH.spice_tabs[h.id] = DDG.duckbar.add(h)
                    }
                })
            } else {
                var g = a.DDH._build_ops(e);
                if (g) {
                    a.DDH.spice_tabs[g.id] = DDG.duckbar.add(g)
                }
            }
        },
        _build_ops: function(e) {
            e.templates = e.templates || {};
            e.meta = e.meta || {};
            if (a.DDH[e.id] && a.DDH[e.id].meta) {
                e.meta = $.extend(a.DDH[e.id].meta, e.meta)
            }
            if (e.meta.tab) {
                e.name = e.meta.tab
            }
            var f = e.normalize || null,
                h = $.isArray(e.data),
                g, s = [],
                t, r = e.relevancy,
                d = DDG.get_query(),
                p = [],
                m = [];
            if (h) {
                if (r) {
                    e.meta.idField = r.dup
                }
                for (var k = 0, j = e.data.length; k < j; k++) {
                    var u = e.data[k];
                    if (r && !b(u, r)) {
                        continue
                    }
                    if (f) {
                        t = f(u);
                        if (t) {
                            g = $.extend({}, u, t)
                        } else {
                            continue
                        }
                    } else {
                        g = u
                    }
                    if (g.exactMatch) {
                        m.push(g)
                    } else {
                        if (g.boost) {
                            p.push(g)
                        } else {
                            s.push(g)
                        }
                    }
                }
                if (p.length > 0) {
                    for (k = 0; k < p.length; k++) {
                        s.unshift(p[k])
                    }
                }
                if (m.length > 0) {
                    for (k = 0; k < m.length; k++) {
                        s.unshift(m[k])
                    }
                }
                if (s.length < 1) {
                    DDG.duckbar.failed(e.id);
                    return
                }
                e.data = s;
                if (s.length > 1 && e.sort_fields && e.sort_default) {
                    var o = null;
                    if (typeof e.sort_default === "string") {
                        o = e.sort_default
                    } else {
                        if (r && r.type) {
                            o = e.sort_default[r.type]
                        }
                    }
                    if (o && o.length > 0) {
                        e.data.sort(DDG.getProperty(e.sort_fields, o))
                    } else {}
                }
            } else {
                if (r) {
                    if (!b(e.data, r)) {
                        DDG.duckbar.failed(e.id);
                        return
                    }
                }
                if (f) {
                    t = f(e.data);
                    if (t) {
                        e.data = $.extend({}, e.data, t)
                    } else {
                        DDG.duckbar.failed(e.id);
                        return
                    }
                }
            }
            if (e.id === "cheat_sheets") {
                e.meta.id = e.from
            } else {
                e.meta.id = e.id
            }
            a.DDH.spice_objects[e.id] = a.DDH.spice_objects[e.id] || {};
            return e
        },
        failed: function(d) {
            return DDG.duckbar.failed(d)
        },
        getDOM: function(f) {
            var e = this.spice_tabs[f],
                d = e && e.view && e.view.$el;
            return d || $()
        },
        selectNextItem: function(e) {
            var d = this.spice_tabs[e];
            return d && d.view && d.view.selectNextItem && d.view.selectNextItem()
        },
        registerHelper: function(e, d) {
            Handlebars.registerHelper(e, d)
        }
    };
    a.Spice = a.DDH;
    a.DDH.sharedir_map = this.spice_paths ? $.parseJSON(spice_paths) : {}
}(window);
Spice.names = ["airlines", "alternative_to", "amazon", "arxiv", "astrobin_apod", "aur", "bible", "brainy_quote", "caniuse_lists", "code_search", "congress", "coupons", "cryptocurrency", "currency", "cve_summary", "detect_lang", "dictionary_definition", "dns", "dogo_books", "dogo_movies", "dogo_news", "duck_say", "economic_indicators", "emojipedia", "etsy", "expand_url", "expatistan", "first_robotics_team_info", "flash_version", "flights_route", "forecast", "forvo", "git_book_status", "github", "github_status", "glassdoor", "goodreads", "google_plus", "gravatar", "grunt", "gulp", "hackage", "hacker_news", "haxelib", "hayoo", "hex", "holiday", "images", "indeed_jobs", "is_it_up", "islamic_prayer_times", "keybase", "launchbug", "launchpad_project", "libraries", "magic_the_gathering", "maps_maps", "maps_places", "maven", "meta_cpan", "metar", "minecraft_status", "missing_kids", "movies_filmography", "near_earth_objects", "newint", "news", "npm", "nutrition", "nxt_account", "octopart", "open_nic", "package_tracking", "packagist", "people_in_space", "playing_cards", "plos", "product_hunt", "public_holidays", "pubmed_search", "pwned", "quandl_fundamentals", "quote_of_the_day", "rain", "rand_pos", "rand_word", "recipes", "renego_job_search", "rfc", "rhymes", "riffsy", "ruby_gems", "rust_cargo", "rx_info", "shorten", "skyscanner_flight_search", "sound_cloud", "sports", "sports_mlb_games", "sports_nfl_games", "statista", "stocks", "sun_rise_set", "symbolab", "syntax", "tfl_status", "thesaurus", "tides", "time", "tor_node", "transit_septa", "travis_status", "tvmaze_previousepisode", "twitch_featured", "twitter", "urban_dictionary", "videos", "wgha", "whois", "wikinews", "word_of_the_day", "xkcd_display", "yacht_specs", "yoga_asanas"];
(function(a) {
    var d = function(h) {
        var g = null,
            f = 0;
        var e = function(i) {
            if (i) {
                g = i
            }
            var j = window["ddg_spice_" + h];
            if (j === e) {
                if (++f < 50) {
                    window.setTimeout(j, 19)
                } else {}
            } else {
                if (g) {
                    j(g)
                } else {}
            }
        };
        return e
    };
    var c;
    for (var b = 0; b < Spice.names.length; b++) {
        c = Spice.names[b];
        if (c) {
            a["ddg_spice_" + c] = d(c)
        }
    }
})(window);
! function(b) {
    var a = b.Models.Base;
    b.Models.Feedback = function(c) {
        a.call(this, c);
        if (b.device.isMobile) {
            this.showInSideMenu = true
        }
    };
    b.Models.Feedback.prototype = $.extend({}, a.prototype, {
        ready: function() {
            if (this.showInSideMenu) {
                return
            }
            this.set("showInVertical", true)
        }
    });
    b.feedback = new b.Models.Feedback()
}(DDG);
! function(b) {
    var a = b.Pages.Base;
    b.Pages.SERP = function(c) {
        this._checkForForceReload();
        this.unsafeSearch = c.showSafeSearch;
        this.sideMenuOps.showFeedbackIcons = b.feedback.showInSideMenu;
        a.call(this, c);
        this.ads = new b.Models.Ads();
        b.device.on("scroll", this._onScroll.bind(this));
        window.onpageshow = this._onPageShow.bind(this);
        b.history.enablePushState(function(d, f) {
            if (!b.duckbar.isDone) {
                return false
            }
            var e = window.history && window.history.state;
            return d === "ia" || (d === "iax" && b.history.get("ia") !== "cheatsheet") || (d === "iaxm") || (d === "iai" && b.device.isMobile && (!e || !e.iai) || (d === "iai" && b.device.isMobile && !f && e && e.iai))
        });
        b.history.on("popstate", this._onHistoryPopState.bind(this));
        b.feedback.on("change:showInVertical", this._showFeedbackBtn.bind(this));
        b.deep.on("change:started", this._onDeepStarted.bind(this));
        b.deep.on("change:finished", this._onDeepFinished.bind(this));
        b.deep.on("add-separator", this._addDeepSeparator.bind(this))
    };
    b.Pages.SERP.prototype = $.extend({}, a.prototype, {
        pageType: "serp",
        liveUpdater: true,
        sideMenuOps: {
            twitterLink: true,
            hideSettings: true
        },
        showingSafeSearch: 0,
        ready: function() {
            a.prototype.ready.call(this);
            this.keyboard.enableSERPShortcuts = 1;
            if (w.is_twitter) {
                this.views.twitter = new b.Views.TwitterEasterEgg({
                    username: w.is_twitter,
                    "$el": $(".js-header-logo")
                })
            }
            this.initHeader();
            this.initSearchFilters();
            this.initSERPMessages();
            this.views.ads = new b.Views.Ads({
                model: this.ads,
                "$el": $(".js-results-ads")
            });
            var c = $(".js-lazyload-favicon");
            for (var d = 0, e; e = c[d]; d++) {
                b.ImageLoader.register(e, b.services.getURL("icons") + e.getAttribute("data-src"), "scrollY")
            }
            b.duckbar.onReady();
            if (b.device.isDesktop) {
                this._appendSerpBadgeDesktop()
            } else {
                this._appendSerpBannerMobile()
            }
        },
        showMessage: function(d, c) {
            if (d === "spelling" && !b.search.spelling) {
                b.search.spelling = new b.Models.Search.Spelling(c)
            }
            this.views.messages && this.views.messages.showMessage(d, c)
        },
        fallbackToDefaultAds: function() {
            this.views.ads && this.views.ads.fallbackToDefault()
        },
        initHeader: function() {
            if (b.settings.isDefault("ko") && b.device.hasFixedHeaderSupport) {
                this.views.header = new b.Views.Header({
                    "$el": $(".js-header-wrap"),
                    model: new b.Models.Header()
                })
            }
            if (b.history.get("atb")) {
                this._updateLogoParams({
                    atb: b.history.get("atb")
                })
            }
        },
        initSearchFilters: function() {
            this.views.searchFilters = new b.Views.Dropdowns.FilterContainer({
                $el: $(".js-search-filters")
            })
        },
        initSERPMessages: function() {
            this.views.messages = new b.Views.SERPMessages({
                ads: this.ads,
                search: this.search,
                searchbar: this.searchbar,
                messages: {
                    safeSearch: !!this.unsafeSearch,
                    siteSearch: b.search.isSiteQuery
                },
                "$el": $("#message")
            });
            this.views.messages.on("clear-filters", function() {
                b.settings.region.reset();
                b.search.requery()
            })
        },
        setMobileUIExperiment: function() {
            var d = Math.random(),
                c = b.history.get("uiexp") || b.hidden.get("uiexp");
            this.mobileUIExperiment = /^read_[\w]$/.test(c) ? c : "";
            if (!this.mobileUIExperiment && d < 0.5) {
                this.mobileUIExperiment = d < 0.25 ? "read_a" : "read_b"
            }
            if (this.mobileUIExperiment) {
                b.hidden.set("uiexp", this.mobileUIExperiment);
                b.history.set("uiexp", this.mobileUIExperiment);
                DDG.addClass("html", b.$html, "mobile-ui-experiment-" + this.mobileUIExperiment)
            }
            return this.mobileUIExperiment
        },
        _onDeepStarted: function() {
            b.duckbar.show("deep_start");
            if (b.settings.updater) {
                b.settings.updater.loadFonts()
            }
        },
        _onDeepFinished: function() {
            b.duckbar.showSideModules();
            b.duckbar.showOrganicModules();
            b.duckbar.show("deep_end");
            b.duckbar.menu.showNewTabs();
            this.views.messages && this.views.messages.ready();
            $(".js-results,.js-results-ads,.js-sidebar-ads").removeClass("is-hidden");
            this.fallbackToDefaultAds();
            b.ImageLoader.registerAll($(".js-lazyload-icons"), "scrollY");
            b.duckbar.renderPendingModules();
            b.feedback.ready();
            var s = {
                br: b.device.pixelBrowserName,
                bv: b.device.pixelBrowserVersion
            };
            if (w.sourceTag) {
                s.st = w.sourceTag
            }
            if (w.df) {
                s.df = w.df
            }
            if (b.duckbar.activeTabId !== "web") {
                s.iao = 1
            }
            s.kp = b.settings.get("kp");
            s.u = b.search.src;
            var p = b.settings.region,
                k = !p.getPrevId() && p.getId() === p.getDefaultId();
            if (k) {
                s.nr = k ? 1 : 0
            }
            if (this.ads.hasAds()) {
                s.adx = this.ads.adx
            }
            if (this.ads.adxExperiment) {
                s.adx_name = this.ads.adxExperiment
            }
            var d = ".js-sitelink-comma";
            if (this.ads.hasGoodAds() && $(d).length) {
                this._hideOverflownAdSitelinks()
            }
            if (!b.device.isMobile) {
                $(".result--ad").each(function(u) {
                    var t = $(this).attr("id");
                    new b.Views.Feedback.ReportAdsButton({
                        appendTo: "#" + t + " .result__extras",
                        whichAd: u
                    })
                })
            }
            if (!b.settings.isDefault("kz")) {
                s.nia = 1
            }
            if (!b.settings.isDefault("kae")) {
                s.kae = b.settings.get("kae")
            }
            s.rl = rl;
            s.dl = dl;
            s.kl = b.settings.get("kl");
            var n = b.Data.languages.resultLanguages,
                m = b.Data.languages.adLanguages,
                q = [],
                f = [];
            for (var e in n) {
                q.push(e + ":" + n[e].length)
            }
            for (var h in m) {
                f.push(h + ":" + m[h])
            }
            b.Data.languages.resultLanguagesPixelData = s.oll = q.join(",");
            if (f.length) {
                b.Data.languages.adLanguagesPixelData = s.adll = f.join(",")
            }
            var c = b.backData.getId(),
                o = b.backData.getData();
            if (c) {
                s.bkl = c;
                for (var g in o) {
                    s["bkd_" + g] = o[g]
                }
            }
            b.pixel.fire("l", b.device.pixelId, b.settings.region.hasRegion() ? "re" : "wt", s);
            var i = "/daily/";
            var j = "/weekly/";
            if (b.extension.isInstalled()) {
                var r = (DDG.opensearch.installed.version || "_") + (DDG.opensearch.installed.variant || "_") + (DDG.opensearch.installed.atbVariant || "_");
                i += "?" + r;
                j += "?" + r
            }
            $('<img src="' + i + '"/>');
            $('<img src="' + j + '"/>');
            setTimeout(function() {
                var u = b.duckbar.activeTabId ? b.duckbar.getActiveTab().pixelId : b.duckbar.placeholder ? "pl" + b.duckbar.placeholder.from : null;
                if (b.search.deepAnswerIAs && Object.keys(b.search.deepAnswerIAs).length) {
                    var t = {};
                    if (u && u !== "web") {
                        t.oi = u
                    }
                    if (b.search.spelling) {
                        t.sp = 1
                    }
                    if (b.settings.region.hasRegion()) {
                        t.kl = b.settings.region.getId()
                    }
                    if (/swift_queries|css_queries|python_queries|perl_queries|javascript_queries/.test(JSON.stringify(DDG.search.deepAnswerIAs))) {
                        t.q = DDG.get_query_encoded()
                    }
                    b.pixel.fire("iaui", $.extend(t, b.search.deepAnswerIAs))
                }
            }, 500);
            setTimeout(function() {
                b.backData.reset()
            }, 250)
        },
        _showFeedbackBtn: function() {
            if (this.views.feedback) {
                return
            }
            this.views.feedback = new b.Views.Feedback.Button({
                appendTo: ".js-feedback-btn-wrap"
            })
        },
        _onScroll: function(d) {
            if (b.settings.isDefault("kc") && !b.device.isOpera) {
                nrb(d)
            }
            if (this.onboardingTest.animateModalIllustration && b.tParam.fromHomepage() && this.canShowAddToBrowser() && !b.device.isMobileDevice && !this.views.atb.dismissed) {
                var c = (b.device.height / 2);
                if (this.views.atb.animated && b.device.scrollTop() > c) {
                    this.views.atb.unAnimate()
                } else {
                    if (this.views.atb.animated === false && b.device.scrollTop() < c) {
                        this.views.atb.animate()
                    }
                }
            }
        },
        _onPageShow: function(c) {
            if (c && c.persisted) {
                this._checkForForceReload()
            }
        },
        _onHistoryPopState: function(d) {
            var c = d && d.state;
            if (!c) {
                return
            }
            this._setIAFromHistory(c);
            this._updateIAModelFromHistory(c)
        },
        _setIAFromHistory: function(e) {
            if (e.ia !== b.history.curState.ia) {
                var c = e.ia;
                if (!b.duckbar.tabs[c]) {
                    var d = b.duckbar.tabsByNameId[c];
                    if (d) {
                        c = d.id
                    }
                }
                b.duckbar.open(c, {
                    backButtonOpened: true
                })
            } else {
                if (!e.ia && b.history.curState.ia) {
                    b.duckbar.open("web", {
                        backButtonOpened: true
                    })
                }
            }
        },
        _updateIAModelFromHistory: function(g) {
            if (g.ia !== b.history.curState.ia) {
                return
            }
            var e = g.iax || g.iaxm || b.history.curState.iax || b.history.curState.iaxm,
                d = (e == 1 || e == 0) ? b.duckbar.getActiveTab() : b.duckbar.tabsByNameId[e],
                c = d && d.model;
            if (!c) {
                return
            }
            if (g.iax && g.iaxm) {
                c.set("expanded", true);
                c.set("isMapExpanded", true)
            } else {
                if (g.iax) {
                    c.set("expanded", true);
                    c.set("isMapExpanded", false)
                } else {
                    if (g.iaxm) {
                        c.set("expanded", false);
                        c.set("isMapExpanded", true)
                    } else {
                        c.set("expanded", false);
                        c.set("isMapExpanded", false)
                    }
                }
            }
            if (b.device.isMobile) {
                if (c.selectedItem && !g.iai && b.history.curState.iai) {
                    c.selectedItem.unselect()
                } else {
                    if (g.iai && !b.history.curState.iai) {
                        var f = c.itemsById[g.iai];
                        f && f.select()
                    }
                }
            }
        },
        _hideOverflownAdSitelinks: function() {
            var c = $(".result__sitelinks");
            c.each(function(n) {
                var f = $(this),
                    d = ".js-sitelink-comma",
                    j = ".sponsored__sitelink",
                    s = f.find(d),
                    m = f.find(j),
                    e = m.last(),
                    k = f.position().top + f.height(),
                    g = (e.position().top > k);
                if (!(g && s.length)) {
                    return
                }
                var r = f.find(d + "," + j);
                r = r.get().reverse();
                for (var h = 0; h < r.length; h++) {
                    var p = $(r[h]),
                        t = p.hasClass("js-sitelink-comma"),
                        u = p.position().top,
                        o = (t && (u <= k)),
                        q = (u > k);
                    if (!(o || q)) {
                        return
                    }
                    p.addClass("is-hidden");
                    if (o) {
                        break
                    }
                }
            })
        },
        _appendSerpBadgeDesktop: function() {
            if (b.addToBrowser.canShowOnDesktopSerp()) {
                this.views.atb = new b.Views.AddToBrowserBadge({
                    impressionPixel: "atbsi",
                    clickPixel: "atbsc",
                    xPixel: "atbsx",
                    topRight: true,
                    serp: true,
                    entryPoint: "sr",
                    appendTo: ".js-site-wrapper",
                    hideOnClick: true
                });
                $("body").on("click.atb", function() {
                    this.views.atb.hide();
                    $("body").off("click.atb")
                }.bind(this))
            } else {
                if (b.newsletter.shouldShowBadge()) {
                    this.views.newsletter = new b.Views.SubscribeToNewsletterBadge({
                        appendTo: ".js-site-wrapper",
                        serp: true
                    });
                    this.views.newsletter.show();
                    $("body").on("click.atb", function() {
                        this.views.newsletter && this.views.newsletter.hide();
                        $("body").off("click.atb")
                    }.bind(this));
                    b.pixel.fire("nli", b.newsletter.group, "serp")
                }
            }
        },
        _updateLogoParams: function(e) {
            var d = $(".js-header-logo"),
                c = d && d.length && d.attr("href");
            if (c) {
                c += c.match(/\?/) ? "&" : "?";
                c += $.param(e);
                d.attr("href", c)
            }
        },
        _appendSerpBannerMobile: function() {
            if (b.addToBrowser.canShowOnMobileSerp()) {
                this.views.atb = new b.Views.AddToBrowserBanner({
                    impressionPixel: "atbsi",
                    clickPixel: "atbsc",
                    xPixel: "atbsx",
                    template: "add_to_browser_button_serp",
                    serp: true,
                    entryPoint: "sr",
                    appendTo: ".js-site-wrapper",
                    hideOnClick: true
                });
                $("body").on("click.atb", function() {
                    this.views.atb.hide();
                    $("body").off("click.atb")
                }.bind(this))
            }
        },
        _addDeepSeparator: function() {
            new b.Views.Verticals.VerticalSeparator({
                appendTo: $(".js-results"),
                pageNumber: b.deep.pageNumber
            })
        }
    })
}(DDG);
! function(d) {
    var c = d.Models.Base,
        b, g = 412,
        e = 312,
        a = 12;
    d.Models.Answer = b = function(j) {
        c.call(this, j);
        this.templates = new d.Models.AnswerTemplates(j.templates);
        this.meta = new d.Models.AnswerMeta($.extend(j.meta || {}, {
            options: this.templates.options,
            elClass: this.templates.elClass
        }));
        this.name = this.name || this.duckbar_topic || this.topic || "Answer";
        if (this.name === "qa") {
            this.name = "Q/A"
        }
        this.nameId = d.strip_non_alpha(this.name.toLowerCase());
        this.id = this.id || this.nameId;
        this.pixelId = this.pixel_id || this.pixelId || this.meta.id || this.from || this.id;
        this.pixelId = this.pixelId.toLowerCase();
        this.type = this.type || "new";
        var i = d.stem(this.name),
            n = new RegExp("\\b(" + this.name + "|" + i + ")\\b", "i"),
            m = decodeURIComponentSafe(this.queryEncoded),
            k = m.match(n);
        this.query = m.replace(n, "");
        this.queryMatch = k && k.length;
        this.signal = this.signal || "low";
        if (this.rt !== "A" && this.rt !== "C" && this.rt !== "D" && this.queryMatch) {
            this.signal = "high"
        }
        if (this.signal !== "high" && this.signal !== "medium") {
            this.signal = "low"
        }
        if (this.type === "static") {
            this.signal = "low"
        }
        if (d.duckpan) {
            this.signal = "high"
        }
        this.items = [];
        this.itemsById = {};
        this.topics = [];
        this.topicsById = {};
        this.canExpand = true;
        this.expanded = false;
        this.isMapExpanded = false;
        if (j.parameters) {
            this.parameters = j.parameters.map(function(o) {
                return new d.Models.AnswerSelectLists.Parameter(o)
            })
        }
        if (j.sources) {
            this.sources = new d.Models.AnswerSelectLists.Source({
                values: j.sources,
                parameters: this.parameters
            })
        }
        this.pageNo = 0
    };
    b.prototype = $.extend({}, c.prototype, {
        addItems: function(t) {
            this.pageNo++;
            this.set("deferredURL");
            this.set("isLoading");
            if (!t) {
                t = []
            } else {
                if (!$.isArray(t)) {
                    t = [t]
                }
            }
            var q = this.answerItemModel || this.model || "Base",
                j = this.meta.idField,
                n = this.meta.topicField || "answerItemTopic",
                k = 0,
                o = 0;
            if (!d.Models.AnswerItems[q]) {
                q = "Base"
            }
            if (q === "FatheadListItem") {
                t = h(t, this)
            }
            for (var m = 0; m < t.length; m++) {
                var s = new d.Models.AnswerItems[q]($.extend({
                    templates: this.templates,
                    parentId: this.id,
                    answerMeta: this.meta,
                    idField: j,
                    pageNo: this.pageNo
                }, t[m]));
                if (!this.itemsById[s.id]) {
                    this.items.push(s);
                    this.itemsById[s.id] = s;
                    s.on("change:selected", this._onItemSelectedChanged.bind(this, s));
                    s.on("change:highlighted", this._onItemHighlightedChanged.bind(this, s));
                    ++k;
                    if (n && s[n]) {
                        var r = s[n],
                            p = this.topicsById[r];
                        if (!p) {
                            p = new d.Models.AnswerItemTopic({
                                id: r,
                                name: r,
                                hideCount: this.meta.hideTopicCount
                            });
                            this.topics.push(p);
                            this.topicsById[p.id] = p;
                            ++o;
                            this.bindEvents([
                                [p, "change:selected", this._onTopicSelectedChanged.bind(this, p)],
                                [p, "change:highlighted", this._onTopicHighlightedChanged.bind(this, p)],
                                [p, "change:engaged", this.engaged.bind(this)]
                            ])
                        }
                        s.set("topic", p);
                        p.addItem(s)
                    }
                }
            }
            if (o) {
                this._emitChange("topics")
            }
            if (k) {
                this._emitChange("items")
            } else {
                if (!this.items.length) {
                    this.set("failed", true)
                } else {
                    if (!t.length) {
                        this.emit("no-results")
                    } else {}
                }
            }
            if (this.id !== "images" && this.id !== "videos") {
                this._updateCanExpand()
            }
        },
        canLoadMore: function() {
            return !this.isLoading && this.meta.next
        },
        canLoadOnScroll: function() {
            return this.expanded && this.canLoadMore() && !is_mobile_device && d.settings.isDefault("kc")
        },
        loadMore: function() {
            if (!this.canLoadMore()) {
                return
            }
            this.set("isLoading", true);
            var i = this.meta.next;
            if (i.match(/vqd=/)) {
                i = i.replace(/(&vqd\=)[^\&]+/, "$1" + window.vqd)
            } else {
                i += "&vqd=" + window.vqd
            }
            this.meta.loadedNext();
            if (i.match(/(?:&|\?)cb=([^&?]+)/i)) {
                return nrj(i)
            }
            $.ajax({
                url: i,
                dataType: "json",
                success: this._onLoadedMore.bind(this),
                error: this._onLoadError.bind(this)
            })
        },
        _hasDeferredResults: function() {
            return this.deferredContent && this.deferredContent.results && this.deferredContent.results.length
        },
        _hasDeferredQueries: function() {
            return this.deferredContent && this.deferredContent.queryEncoded && this.deferredContent.queryEncoded.length
        },
        usePageQuery: function(i) {
            return i + this.queryEncoded + "&vqd=" + window.vqd
        },
        loadDeferred: function() {
            if (this.isLoading || (!this.deferredURL && !this._hasDeferredResults())) {
                return
            }
            if (this._shouldBlockAdultResults()) {
                return this._onDeferredLoaded({
                    results: []
                })
            }
            this.set("isLoading", 1);
            if (this._hasDeferredResults()) {
                this._addItemsFromResponse(this.deferredContent)
            } else {
                var i;
                if (typeof this.deferredURL === "function") {
                    i = this.deferredURL()
                } else {
                    i = this.deferredURL
                }
                if (this._hasDeferredQueries()) {
                    var j = this.deferredContent.queryEncoded.shift();
                    if (j in this.deferredContent.vqd) {
                        i += j + "&vqd=" + this.deferredContent.vqd[j]
                    } else {
                        i = this.usePageQuery(i)
                    }
                } else {
                    i = this.usePageQuery(i)
                }
                if (this.sources) {
                    i += "&" + this.sources.getParameterQueryString()
                }
                if (this.safeSearch) {
                    i += this._getSafeSearchURLParam()
                }
                if (this.date) {
                    i += "&df=" + d.search.dateFilterId
                }
                $.ajax({
                    type: "GET",
                    url: i,
                    dataType: "json",
                    async: true,
                    success: this._onDeferredLoaded.bind(this),
                    error: this._onLoadError.bind(this)
                })
            }
        },
        indexOfSelectedItem: function() {
            if (!this.selectedItem) {
                return
            }
            if ($.isNumeric(this._selectedItemIdx)) {
                return this._selectedItemIdx
            }
            return this._selectedItemIdx = this.items.indexOf(this.selectedItem)
        },
        indexOfHighlightedItem: function() {
            if (!this.highlightedItem) {
                return
            }
            if ($.isNumeric(this._highlightedItemIdx)) {
                return this._highlightedItemIdx
            }
            return this._highlightedItemIdx = this.items.indexOf(this.highlightedItem)
        },
        getNextItem: function() {
            var i = this.indexOfSelectedItem();
            return $.isNumeric(i) && this.items[i + 1]
        },
        getPrevItem: function() {
            var i = this.indexOfSelectedItem();
            return $.isNumeric(i) && this.items[i - 1]
        },
        selectNextItem: function() {
            var i = this.getNextItem();
            if (i && i.hidden && d.device.isMobile) {
                return i.select()
            }
            return i && !i.hidden && i.select()
        },
        selectPrevItem: function() {
            var i = this.getPrevItem();
            return i && i.select()
        },
        getNextHighlightedItem: function() {
            var i = this.indexOfHighlightedItem();
            return $.isNumeric(i) && this.items[i + 1]
        },
        getPrevHighlightedItem: function() {
            var i = this.indexOfHighlightedItem();
            return $.isNumeric(i) && this.items[i - 1]
        },
        highlightNextItem: function() {
            var i = this.getNextHighlightedItem();
            return i && i.highlight()
        },
        highlightPrevItem: function() {
            var i = this.getPrevHighlightedItem();
            return i && i.highlight()
        },
        getQuerystringItemId: function(i) {
            return i.idField ? i.id : this.items.indexOf(i)
        },
        getDetailHeight: function() {
            var i = this.meta.options || {},
                k = i.detailHeight || g,
                j = i.detailHeightShort || e,
                m = d.device.height - 300;
            if (this.id === "images" || this.id === "videos") {
                return Math.max(m, g)
            }
            return d.device.isTeapot() ? j : k
        },
        getPixelData: function() {
            var i = {
                ss: d.page ? d.page.showingSafeSearch : 0,
                sp: d.search.spelling ? 1 : 0,
                im: this.isModule ? 1 : 0,
                ism: this.isSideModule ? 1 : 0,
                iom: this.isOrganicModule ? 1 : 0
            };
            if (this.headerType) {
                i.ht = this.headerType
            }
            if (this.profileLinks) {
                i.pl = this.profileLinks
            }
            if (this.deferredQuery) {
                i.dq = this.deferredQuery
            }
            if (d.page && d.page.ads) {
                if (d.page.ads.adxExperiment) {
                    i.adx_name = d.page.ads.adxExperiment
                }
                if (d.page.ads.hasAds()) {
                    i.adc = d.page.ads.getNumberOfTopAds()
                }
            }
            if (this.id === "products") {
                i.prod_mult = this.items && this.items.length > 1 ? 1 : 0;
                i.u = this.meta.sourceName
            }
            if (this.id === "news") {
                i.q = d.get_query();
                if (this.usingOrganicBackfill) {
                    i.bf = 1
                }
            }
            return i
        },
        fire: function(i, j) {
            j = $.extend(j || {}, this.getPixelData());
            d.pixel.fire(i, this.pixelId, this.openType, j)
        },
        engaged: function(i) {
            this.fire("iae", i)
        },
        clickedExternalLink: function(i) {
            d.backData.set(this.pixelId, {
                adx_name: DDG.page.ads.adxExperiment,
                ot: this.openType
            });
            this.fire("iag", i)
        },
        _addItemsFromResponse: function(i) {
            if (!i) {
                return
            }
            this.meta.update({
                next: i.next,
                searchTerm: i.searchTerm
            });
            this.addItems(i.results || i, i.ads)
        },
        _updateCanExpand: function() {
            var i;
            if (d.device.isMobile) {
                i = !this.meta.disableMobileGrid
            } else {
                if (this.meta.disableModeSwitch || this.meta.itemsExpand || this.meta.itemsWidthVaries) {
                    i = false
                } else {
                    if (this.items.length >= (this.meta.minItemsForModeSwitch || a) || this.canLoadMore()) {
                        i = true
                    } else {
                        i = false
                    }
                }
            }
            this.set("canExpand", i)
        },
        _shouldBlockAdultResults: function() {
            return (this.id === "images" || this.id === "videos") && d.search.isAdultQuery && d.settings.safeSearch.isStrict()
        },
        _getSafeSearchURLParam: function() {
            var i;
            if (this.id === "news") {
                i = d.settings.get("kp")
            } else {
                i = d.settings.safeSearch.isOff() ? -1 : 1
            }
            if (this.openType === "f") {
                i = 1
            }
            return "&p=" + i
        },
        requery: function() {
            this.set("isRequerying", 1);
            this.meta.reset();
            if (this.selectedItem) {
                this.selectedItem.unselect()
            }
            if (this._shouldBlockAdultResults()) {
                return this._onRequery({
                    results: []
                })
            }
            if (this.failed) {
                this.set("failed")
            }
            var i = this.sources.getRequeryURL();
            if (this.safeSearch) {
                i += this._getSafeSearchURLParam()
            }
            if (this.date) {
                i += "&df=" + d.search.dateFilterId
            }
            $.ajax({
                type: "GET",
                url: i,
                dataType: "json",
                async: true,
                success: this._onRequery.bind(this),
                error: this._onLoadError.bind(this)
            })
        },
        _onDeferredLoaded: function(i) {
            this.set("isLoading");
            if ((!i || !i.results || !i.results.length) && this._hasDeferredQueries()) {
                this.set("isLoading", 0);
                this.set("deferredQuery", this.deferredContent.queryEncoded[0]);
                return this.loadDeferred()
            }
            if (!this.deferredURL) {
                return
            }
            this.set("deferredURL");
            this._addItemsFromResponse(i)
        },
        _onRequery: function(i) {
            this.set("isRequerying");
            this.set("selectedItem");
            this.items.forEach(function(j) {
                j.removeAllListeners()
            });
            this.items = [];
            this.itemsById = {};
            this._addItemsFromResponse(i);
            this.set("expanded", 1)
        },
        _onLoadedMore: function(i) {
            this.set("isLoading");
            this._addItemsFromResponse(i)
        },
        _onLoadError: function() {
            this.set("isLoading");
            this.set("isRequerying");
            if (!this.items.length) {
                this.set("failed", 1)
            }
        },
        _onItemSelectedChanged: function(i) {
            delete this._selectedItemIdx;
            if (i && i.selected) {
                if (this.highlightedItem) {
                    this.highlightedItem.unhighlight()
                }
                if (this.selectedItem && i !== this.selectedItem) {
                    this._pendingSelectedItem = i;
                    this.selectedItem.unselect()
                }
                this.set("selectedItem", i)
            } else {
                if (this._pendingSelectedItem) {
                    delete this._pendingSelectedItem
                } else {
                    this.set("selectedItem")
                }
            }
        },
        _onItemHighlightedChanged: function(i) {
            delete this._highlightedItemIdx;
            if (i && i.highlighted) {
                if (this.highlightedItem && i !== this.highlightedItem) {
                    this._pendingHighlightedItem = i;
                    this.highlightedItem.unhighlight()
                }
                this.set("highlightedItem", i)
            } else {
                if (this._pendingHighlightedItem) {
                    delete this._pendingHighlightedItem
                } else {
                    this.set("highlightedItem")
                }
            }
        },
        _onTopicSelectedChanged: function(i) {
            if (i && i.selected) {
                if (this.selectedTopic && i !== this.selectedTopic) {
                    this.selectedTopic.unselect()
                }
                this.set("selectedTopic", i)
            } else {
                if (i === this.selectedTopic && !i.selected) {
                    this.set("selectedTopic")
                }
            }
        },
        _onTopicHighlightedChanged: function(i) {
            if (i && i.highlighted) {
                if (this.highlightedTopic && i !== this.highlightedTopic) {
                    this.highlightedTopic.unhighlight()
                }
                this.set("highlightedTopic", i)
            } else {
                if (i === this.highlightedTopic && !i.highlighted) {
                    this.set("highlightedTopic")
                }
            }
        }
    });

    function h(r, u) {
        if (!r || !r.length || !r[0].RelatedTopics) {
            return r
        }
        var t = [],
            q = u.name.toLowerCase(),
            k = r[0].RelatedTopics,
            s, m, n;
        for (var p = 0; p < k.length; p++) {
            s = k[p];
            if (!s.Name) {
                if (q === "list") {
                    if (!n || n !== s.Text.charAt(0)) {
                        n = s.Text.charAt(0)
                    }
                    s.answerItemTopic = n;
                    u.meta.hideTopicCount = 1
                } else {
                    s.answerItemTopic = "Top"
                }
                if (!f(s)) {
                    t.push(s)
                }
            } else {
                for (var o = 0; o < s.Topics.length; o++) {
                    m = s.Topics[o];
                    m.answerItemTopic = s.Name;
                    if (!f(m)) {
                        t.push(m)
                    }
                }
            }
        }
        return t
    }

    function f(j) {
        if (!j.Result || !j.Text) {
            return true
        }
        var i = d.parse_link(j.Result, "text");
        if (i && i === j.Text) {
            return true
        }
        return false
    }
}(DDG);
! function(c) {
    var b = c.Models.Base,
        a;
    c.Models.AnswerMeta = a = function(d) {
        b.call(this, d)
    };
    a.prototype = $.extend({}, b.prototype, {
        options: {},
        loadedURLs: {},
        loadedNext: function() {
            if (this.next) {
                this.loadedURLs[this.next] = true;
                this.next = null
            }
        },
        reset: function() {
            this.loadedURLs = {}
        },
        update: function(d) {
            if (!d || typeof d != "object") {
                return
            }
            for (var e in d) {
                if (e === "next" && this.loadedURLs[d[e]]) {
                    continue
                }
                if (e === "searchTerm" && this.searchTerm) {
                    continue
                }
                this.set(e, d[e])
            }
        },
        useExpandTextButton: function() {
            return this.signal_from === "images" || this.signal_from === "videos" || this.signal_from === "news"
        },
        hasAttribution: function() {
            return !this.useExpandTextButton() && this.developer && $.isArray(this.developer) && this.developer.length
        }
    })
}(DDG);
! function(c) {
    var a = c.Models.Base,
        b;
    c.Models.AnswerTemplates = b = function(e) {
        e = e || {};
        var f = c.Data.templates,
            g, d = {};
        if (e.group) {
            g = f.groups[e.group];
            if (g) {
                e = $.extend(true, {}, g, e);
                d = g.options
            } else {}
        }
        a.call(this, e);
        this.options = $.extend(true, {}, f.defaultOptions, d, this.options || {});
        this.elClass = this.elClass || {};
        if (this.variants) {
            this._applyVariants(this.variants)
        }
    };
    b.prototype = $.extend({}, a.prototype, {
        _applyVariants: function(e) {
            if (!e || typeof e !== "object") {
                return
            }
            var d = c.Data.templates.viewVariants;
            for (var h in e) {
                var i = e[h],
                    g = d[h],
                    j = g && g[i];
                if (!j) {
                    continue
                }
                if ($.isArray(j)) {
                    j.forEach(this._applyVariants.bind(this))
                } else {
                    if (typeof j === "object") {
                        for (var f in j) {
                            this._applyVariant(f, j[f])
                        }
                    } else {
                        this._applyVariant(h, j)
                    }
                }
            }
        },
        _applyVariant: function(d, e) {
            if (this.elClass[d]) {
                this.elClass[d] += " " + e
            } else {
                this.elClass[d] = e
            }
        }
    })
}(DDG);
! function(b) {
    var a = b.Models.Base;
    b.Models.AnswerItemTopic = function(c) {
        a.call(this, c);
        this.items = []
    };
    b.Models.AnswerItemTopic.prototype = $.extend({}, a.prototype, {
        addItem: function(c) {
            this.items.push(c);
            this._emitChange("items")
        },
        removeItem: function(d) {
            var c = this.items.indexOf(d);
            if (c > -1) {
                this.items.splice(c, 1);
                this._emitChange("items")
            }
        },
        select: function() {
            this.unhighlight();
            this.set("selected", 1)
        },
        unselect: function() {
            this.set("selected")
        },
        highlight: function() {
            if (this.selected) {
                return
            }
            this.set("highlighted", 1)
        },
        unhighlight: function() {
            this.set("highlighted")
        },
        engaged: function() {
            this.set("engaged", 1)
        }
    })
}(DDG);
! function(c) {
    var a = c.Models.Base,
        b = {
            images: 1,
            videos: 1,
            web: 1
        };
    c.Models.AnswerBarMenuItem = function(d) {
        a.call(this, d);
        if (!b[this.pixelId]) {
            this.on("change:visible", this._onVisibleChanged.bind(this))
        }
    };
    c.Models.AnswerBarMenuItem.prototype = $.extend({}, a.prototype, {
        toggle: function() {
            this.set("active", !this.active)
        },
        _onVisibleChanged: function() {
            if (this.visible) {
                c.pixel.fire("ias", this.pixelId)
            }
        }
    })
}(DDG);
! function(b) {
    var a = b.Models.Base;
    b.Models.AnswerBarMenu = function(c) {
        this.items = [];
        this.itemsById = {};
        this._numStaticItems = 0;
        a.call(this, c)
    };
    b.Models.AnswerBarMenu.prototype = $.extend({}, a.prototype, {
        addAnswer: function(d) {
            if (this.itemsById[d.id] || d.isSideModule) {
                return
            }
            var c = new b.Models.AnswerBarMenuItem({
                id: d.id,
                name: d.name,
                type: d.type,
                pixelId: d.pixelId
            });
            if (c.type === "static") {
                this.items.splice(this._numStaticItems, 0, c);
                this._numStaticItems += 1
            } else {
                this.items.push(c)
            }
            this.itemsById[c.id] = c;
            this._emitChange("items");
            if (c.type === "static" || this._showingNewTabs) {
                c.set("visible", true)
            }
            c.on("change:active", this._onItemActiveChange.bind(this, c.id))
        },
        showNewTabs: function() {
            this._showingNewTabs = true;
            this.items.forEach(function(c) {
                c.set("visible", true)
            })
        },
        setActive: function(c) {
            if (this._lastActiveId === c) {
                return
            }
            this._lastActiveId = c;
            this.itemsById[c].set({
                active: true,
                visible: true
            })
        },
        openNext: function(d) {
            var f, c;
            for (var e = 0; e < this.items.length; e++) {
                if (this.items[e].active) {
                    f = e;
                    break
                }
            }
            if (typeof f === "undefined") {
                return
            }
            if (d === "l") {
                c = this.items[f - 1]
            } else {
                c = this.items[f + 1]
            }
            if (c) {
                c.set("active", true)
            }
        },
        _onItemActiveChange: function(d) {
            if (this._blockActiveHandler) {
                return
            }
            var c = {};
            if (!this.itemsById[d].active) {
                d = "web";
                c.defaultOpened = true
            }
            this._blockActiveHandler = true;
            this.items.forEach(function(e) {
                e.set("active", e.id === d)
            });
            delete this._blockActiveHandler;
            if (this._lastActiveId === d) {
                return
            }
            this.emit("item-active", d, c);
            this._lastActiveId = d
        }
    })
}(DDG);
! function(g) {
    var c = {
            mlb_games: 300,
            nfl_games: 299,
            answer: 200,
            maps_places: 80,
            about: 50,
            videos: -10,
            images: -20
        },
        d = {
            maps_maps: 150
        },
        k = {
            maps_maps: 1,
            news: 1
        },
        j = {
            maps_places: 1
        },
        m = 250,
        f = 5000,
        h = 4000,
        e = {
            high: 3,
            medium: 2,
            low: 1
        },
        b = {
            "item-selected": "onItemSelected",
            "item-unselected": "onItemUnselected",
            "item-shown": "onItemShown",
            show: "onShow",
            hide: "onHide"
        },
        a = DDG.get_now(),
        i;
    i = function() {
        this.menu = new g.Models.AnswerBarMenu()
    };
    i.prototype = {
        id: "duckbar",
        tabs: {},
        tabsByNameId: {},
        froms: {},
        sideModules: {},
        activeTabId: null,
        futureSignals: [],
        futureSignalsById: {},
        failedIA: {},
        isReady: false,
        onReady: function() {
            this.isReady = true;
            this.$zeroClickWrapper = $("#zero_click_wrapper");
            this.$webContentWrapper = $("#web_content_wrapper");
            this.$verticalWrapper = $("#vertical_wrapper");
            this.$topModuleWrapper = $(".js-ia-modules");
            this.$sideModuleWrapper = $(".js-sidebar-modules");
            this.$el = $("#duckbar");
            g.keyboard.on("left", this._openNext.bind(this, "l"));
            g.keyboard.on("right", this._openNext.bind(this, "r"));
            this.menuView = new g.Views.AnswerBarMenu({
                appendTo: this.$el,
                model: this.menu
            });
            this.menu.on("item-active", this.open.bind(this));
            this.add({
                id: "web",
                name: "Web",
                type: "static"
            });
            if (g.history.get("iar") === "news") {
                g.Data.StaticIAs.push(g.Data.DeferredIAs.news)
            }
            DDG.Data.StaticIAs.forEach(this.add.bind(this));
            if (this.addOnReady) {
                for (var n = 0, o; o = this.addOnReady[n]; n++) {
                    this.add(o)
                }
            }
            this.show("static");
            setTimeout("DDG.duckbar.show('placeholder')", f);
            setTimeout("DDG.duckbar.show('placeholder_images')", h);
            this.showSideModules()
        },
        getActiveTab: function() {
            return this.tabs[this.activeTabId]
        },
        getTimingData: function() {
            var n = new Date().getTime();
            return {
                timeSincePageLoad: n - a,
                timeSinceDeepStarted: DDG.deep.timeSinceStarted(),
                timeSinceDeepFinished: DDG.deep.timeSinceFinished()
            }
        },
        hasSideModules: function() {
            if (this._hasSideModules) {
                return this._hasSideModules
            }
            return this._hasSideModules = !!Object.keys(this.sideModules).length
        },
        getSideModuleInfo: function() {
            if (this._sideModuleInfo) {
                return this._sideModuleInfo
            }
            return this._sideModuleInfo = Object.keys(this.sideModules).map(function(o) {
                var n = this.sideModules[o];
                return n.pixelId + ":" + n.model.openType + ":" + n.signal
            }.bind(this))
        },
        hasOrganicModules: function() {
            return this.tabs.news && this.tabs.news.isOrganicModule
        },
        getOrganicModuleInfo: function() {
            if (this._organicModuleInfo) {
                return this._organicModuleInfo
            }
            this._organicModuleInfo = [];
            if (this.hasOrganicModules()) {
                this._organicModuleInfo.push("news:" + this.tabs.news.model.openType + ":1")
            }
            return this._organicModuleInfo
        },
        canShowIAModules: function() {
            return true
        },
        renderPendingModules: function() {},
        areOrganicsShowing: function() {
            var n = this.getActiveTab();
            return !(n && n.isVertical)
        },
        addPlaceholder: function(o) {
            if (this.openedTab || this.placeholder || g.history.get("iac") || !g.settings.isDefault("kz")) {
                return
            }
            var n = new g.Models.Answer({
                id: "placeholder"
            });
            if (k[o] || (j[o] && !this._canShowRRModules())) {
                this.placeholder = new g.Views.Modules.Placeholder({
                    model: n,
                    signalWait: o,
                    appendTo: this.$topModuleWrapper
                })
            } else {
                this.placeholder = new g.Views.AnswerBar.Answers.Placeholder({
                    model: n,
                    signalWait: o,
                    appendTo: this.$zeroClickWrapper
                })
            }
            g.pixel.fire("iaop", o, this.getTimingData())
        },
        removePlaceholder: function(n) {
            this.placeholder.destroy();
            delete this.placeholder
        },
        open: function(q, p) {
            var r = this.tabs[q],
                s;
            if (!r) {
                return
            }
            p = p || {};
            s = this._getOpenType(r, p);
            if (s === "e" || s === "d") {
                g.device.scrollTop(0)
            }
            if (p.autoOpened && this.openedTab) {
                return
            }
            if (p.autoOpened && !g.settings.isDefault("kz") && q !== "web") {
                return
            }
            this.openedTab = 1;
            if (this.placeholder && this.placeholder.isModule && p.is_last_resort_tab && q === "images") {
                r.model.openType = this._getOpenType(r, p);
                this._fireOpenPixel(r);
                this.menu.setActive("web");
                this.placeholder.showImages(this.tabs.images.model);
                return
            }
            if (this.placeholder) {
                this.removePlaceholder("open")
            }
            if (this.getActiveTab()) {
                var o = this.getActiveTab();
                if (o.id === q) {
                    if (s === "e" && o.model.isModule && o.model.allowVertical) {
                        this._upgradeToVertical(o)
                    }
                    return
                }
                if (this._showedOrganicModules && q === "web" && this.tabs.news && this.tabs.news.model && this.tabs.news.model.placeholder) {
                    $("#organic-module").remove()
                }
                DDG.ImageLoader.loadMore();
                o.hide()
            }
            this.activeTabId = q;
            var v = r.model.meta;
            if (r.pixelId !== "web" && s !== "e" && s !== "b") {
                this.initialTabOpenType = s;
                this.initialTab = r
            }
            this.activeTabOpenType = s;
            if (typeof v.autoExpand === "undefined") {
                v.autoExpand = is_mobile ? 1 : 0
            } else {
                if (v.autoExpand && !is_mobile && s !== "e") {
                    v.autoExpand = 0
                }
            }
            if (v.autoExpand && typeof v.autoExpandRows === "undefined") {
                var n = DDG.history.get("iai");
                v.autoExpandRows = (is_mobile && (p.autoOpened || (p.qsOpened && !n))) ? 1 : 0
            }
            if (r.model.allowVertical) {
                if (s === "e" && r.view && r.isModule && !r.isVertical) {
                    this._upgradeToVertical(r)
                }
                if (s === "r" || s === "e") {
                    r.isVertical = r.model.isVertical = true;
                    r.isModule = r.model.isModule = r.isOrganicModule = r.model.isOrganicModule = false;
                    g.history.set("iar", r.nameId)
                }
            }
            r.show({
                openType: s,
                minimizeHeight: r.isModule,
                loadDeferred: !p.autoOpened || s === "f",
                appendTo: r.isVertical ? this.$verticalWrapper : r.isModule ? this.$topModuleWrapper : this.$zeroClickWrapper
            });
            var t = r.id;
            if (r.isModule && s !== "e") {
                t = "web"
            }
            this.menu.setActive(t);
            var u = r.id === "web" && s !== "e";
            if (!u) {
                this._fireOpenPixel(r)
            }
            if (r.isVertical) {
                this._updateModulesForVerticals();
                this.$webContentWrapper.addClass("is-hidden")
            } else {
                this.$webContentWrapper.removeClass("is-hidden")
            }
            this.isDone = true
        },
        add: function(r) {
            if (!this.isReady) {
                if (!this.addOnReady) {
                    this.addOnReady = []
                }
                this.addOnReady.push(r);
                return
            }
            if (r && r.from && r.from === "nfl_games" && r.data && r.data.length && DDG.get_query().match(/super\s?bowl/i)) {
                r.data = [r.data[r.data.length - 1]];
                if (r.meta && r.meta.primaryText) {
                    r.meta.primaryText = "Super Bowl 52:"
                }
            }
            r.rt = rt;
            r.query = g.get_query();
            r.queryEncoded = g.get_query_encoded();
            this._configureForModules(r);
            var o = this._getAnswerName(r),
                n = g.strip_non_alpha(o.toLowerCase()),
                p = r.id || n,
                s = r.signal || "low",
                q = this.tabs[p] || this.sideModules[p];
            if (q) {
                if (e[s] > e[q.signal]) {
                    q.signal = s
                }
            } else {
                q = new DDG.DuckbarTab(r);
                if (q.isSideModule) {
                    this.sideModules[q.id] = q
                } else {
                    this.tabs[q.id] = q
                }
                this.tabsByNameId[q.nameId] = q;
                q.on("close", this.open.bind(this, "web", {
                    defaultOpened: true
                }))
            }
            if (r.from) {
                this.froms[r.from] = q
            }
            this.menu.addAnswer(q.model);
            if (r.deferredContent || !r.deferredURL) {
                q.append(r)
            }
            for (var v in b) {
                var t = r[b[v]];
                if (t && typeof t === "function") {
                    q.on(v, t)
                }
            }
            var u = g.history.get("ia");
            if (q.id === g.hidden.get("iar")) {
                this.open(q.id, {
                    qsOpened: 1
                })
            } else {
                if (u && (u === q.id || u === q.nameId) && !(this.activeTabId && this.getActiveTab().nameId === u)) {
                    setTimeout(this.open.bind(this, q.id, {
                        qsOpened: 1
                    }), 1)
                }
                setTimeout(this.show.bind(this, "add"), 1)
            }
            if (q.isSideModule) {
                this.showSideModules();
                if (q.model.headerType > 0) {
                    this.failed("maps_maps")
                }
            }
            return q
        },
        add_array: function(n) {
            for (var o = 0; o < n.length; o++) {
                this.add(n[o])
            }
        },
        addDeferred: function(s, q) {
            var p = DDG.Data.DeferredIAs[s];
            if (!p) {
                return
            }
            p.deferredContent = q;
            this.add(p);
            var r = q.results && q.results.length,
                n = q.query && q.query.length;
            if (r || n) {
                for (var o in this.futureSignals) {
                    o = this.futureSignals[o];
                    if (o.from === s && o.signal !== "low") {
                        this.tabs[s] && this.tabs[s].model.loadDeferred()
                    }
                }
            }
        },
        add_local: function(q) {
            var o = DDG.localAPI.getPlacesResponse(q);
            if (!o.results || !o.results.length) {
                return this.failed("maps_places")
            }
            var n = (o.results.length > 1) ? "maps_places_multiple" : "maps_places_single";
            var p = {
                name: "Places",
                id: "maps_places",
                pixelId: n,
                model: "Place",
                answerType: "Places",
                allowMultipleCalls: true,
                data: o.results,
                signal: o.signal,
                meta: {
                    sourceName: o.source,
                    sourceUrl: o.url,
                    developer: [{
                        name: "DDG Team"
                    }],
                    signal_from: "maps_places"
                }
            };
            this.add(p)
        },
        failed: function(p) {
            var o = new Date().getTime();
            this.failedIA[p] = o;
            if (this.tabs[p]) {
                this.tabs[p].failed()
            }
            var n = m;
            if (d[p]) {
                n += d[p]
            }
            if (DDG.deep.finished && (o - DDG.deep.finished < n)) {
                DDG.pixel.fire("iafp", p)
            }
            return false
        },
        future_signal_tab: function(n) {
            if (!n || !n.from) {
                return
            }
            if (n.from === "deep_answer" || n.from === "nlp_fathead") {
                return
            }
            if (j[n.from] && this._canShowRRModules()) {
                return
            }
            if (!n.signal) {
                n.signal = "high"
            }
            if (!n.timeout) {
                n.timeout = (n.signal === "high") ? 3000 : 1500
            }
            n.now = DDG.get_now();
            if (this.failedIA[n.from]) {
                return
            }
            this.futureSignals.push(n);
            this.futureSignalsById[n.from] = n.signal;
            this.futureSignals = this.futureSignals.sort(function(p, o) {
                return (e[p.signal] > e[o.signal]) ? -1 : 1
            })
        },
        showSideModules: function() {
            if (!g.settings.isDefault("kz") || !this._canShowRRModules()) {
                return
            }
            for (var n in this.sideModules) {
                var o = this.sideModules[n];
                if (o.view) {
                    continue
                }
                g.addClass("html", g.$html, "has-right-rail-module");
                delete this._hasSideModules;
                delete this._sideModuleInfo;
                o.show({
                    openType: this._getSideModuleOpenType(),
                    appendTo: this.$sideModuleWrapper
                });
                this._fireOpenPixel(o)
            }
            this._updateModulesForVerticals()
        },
        showOrganicModules: function() {
            if (this._showedOrganicModules || !g.settings.isDefault("kz") || !this.tabs.news) {
                return
            }
            if (g.page.ads.adxExperiment === "ne5" && g.search.newsNavigational === "A") {
                delete this.futureSignalsById.news;
                for (var n = 0; n < this.futureSignals.length; n++) {
                    if (this.futureSignals[n].from === "news") {
                        this.futureSignals.splice(n, 1);
                        break
                    }
                }
                this.tabs.news.isOrganicModule = this.tabs.news.model.isOrganicModule = true;
                this.tabs.news.show({
                    openType: this._getSideModuleOpenType(),
                    appendTo: $("#organic-module")
                });
                this._fireOpenPixel(this.tabs.news, true);
                if (!this.openedTab) {
                    this.open("web", {
                        autoOpened: true
                    })
                }
            }
            this._showedOrganicModules = true
        },
        show: function(G) {
            var D = "",
                r = DDG.get_now(),
                u = [],
                A = [],
                z = 0,
                p = [],
                F = [],
                t = [],
                E = r - a;
            for (var H in this.futureSignals) {
                H = this.futureSignals[H];
                if (this.failedIA[H.from] || H.signal === "low" || g.history.get("ia")) {
                    continue
                }
                if (H.signal == "high") {
                    u[H.from] = 1
                } else {
                    if (H.signal == "medium") {
                        A[H.from] = 1
                    }
                }
                if (this.froms[H.from]) {
                    continue
                }
                if (this.tabs[H.from]) {
                    var q = this.tabs[H.from];
                    if (q.type !== "static") {
                        continue
                    } else {
                        if (q.numItems() !== 0) {
                            continue
                        }
                    }
                }
                if ((r - H.now) < H.timeout) {
                    z = H.from;
                    break
                }
            }
            for (var J in this.tabs) {
                q = this.tabs[J];
                if (this.openedTab || g.history.get("ia")) {
                    continue
                }
                var o = 0;
                if (u[q.id] || u[q.from]) {
                    o = 1
                }
                if (o) {}
                if (!o && (!q.signal || q.signal !== "high")) {
                    if (q.type !== "static") {
                        if (q.signal === "medium" || A[q.id] || A[q.from]) {
                            F.push(q)
                        } else {
                            t.push(q)
                        }
                    } else {
                        if (this.placeholder && this.placeholder.signalWait === q.id && A[q.id]) {
                            F.push(q)
                        }
                    }
                    continue
                }
                if (q.type === "static" && (q.numItems() === 0)) {
                    continue
                }
                if (!this.placeholder && q.model.usingOrganicBackfill) {
                    continue
                }
                if (!D) {
                    p.push(q)
                } else {
                    if (o) {
                        p.push(q)
                    }
                }
            }
            var x = 0,
                y = 0;
            if (!DDG.deep.started && !p.length) {
                x = 1
            }
            if (z && !p.length) {
                x = 1;
                y = 1
            }
            var I = z in d ? d[z] : 0;
            if (!this.openedTab && x) {
                if (!this.placeholder && DDG.deep.timeSinceFinished() > (m + I) && y) {
                    this.addPlaceholder(z)
                }
                if (this._showTimer) {
                    clearTimeout(this._showTimer)
                }
                this._showTimer = setTimeout(this.show.bind(this, "self"), 50);
                return
            }
            var C, v = 0;
            if (!this.openedTab && (this.placeholder || p.length || F.length)) {
                C = this._getBestTabToOpen({
                    signalTabsHigh: p,
                    signalTabsMedium: F,
                    signalWatchHigh: u,
                    modulesOnly: this.placeholder && this.placeholder.isModule,
                    iasOnly: this.placeholder && !this.placeholder.isModule
                });
                if (!C && this.placeholder && (E > h || !x)) {
                    C = this._getLastResortTab({
                        tabs: t,
                        modulesOnly: this.placeholder && this.placeholder.isModule,
                        iasOnly: this.placeholder && !this.placeholder.isModule
                    });
                    v = 1;
                    if (C) {
                        this._fireFallbackPixel(this.placeholder.signalWait)
                    }
                }
            }
            if (!this.openedTab && C) {
                if (!this.placeholder) {
                    var B = C.from || C.id,
                        n = C.timeAdded - (g.deep.finished || r),
                        s = m + (d[B] || 0);
                    if (n > s) {
                        return
                    }
                }
                this.open(C.id, {
                    autoOpened: true,
                    is_last_resort_tab: v
                })
            } else {
                if (this.placeholder && E > f) {
                    this.placeholder.showNoResults()
                }
            }
            if (!this.activeTabId && !this.placeholder && !g.history.get("iar") && !g.history.get("ia") && g.deep.finished) {
                g.duckbar.open("web", {
                    autoOpened: true
                })
            }
        },
        _updateModulesForVerticals: function() {
            for (var n in this.tabs) {
                var p = this.tabs[n];
                if (!p.isVertical || !p.view) {
                    continue
                }
                for (var q in this.sideModules) {
                    var o = this.sideModules[q];
                    p.view.addModule(o.model, o.view.viewModel)
                }
            }
        },
        _getBestTabToOpen: function(r) {
            var n = r.signalTabsHigh || [],
                t = r.signalTabsMedium || [],
                o = r.signalWatchHigh || {},
                s;
            for (var p = 0; p < n.length; p++) {
                var q = n[p];
                if (o[q.id] || o[q.from]) {
                    if (this._isCompatibleTab(q, r)) {
                        return q
                    }
                }
            }
            s = this._getHighestRankingTab(n, r) || this._getHighestRankingTab(t, r);
            if (s) {
                return s
            } else {
                if (this.tabs.answer && this._isCompatibleTab(this.tabs.answer, r)) {
                    return this.tabs.answer
                } else {
                    if (this.tabs.about && this._isCompatibleTab(this.tabs.about, r)) {
                        return this.tabs.about
                    } else {
                        if (this.tabs.meanings && this._isCompatibleTab(this.tabs.meanings, r)) {
                            return this.tabs.meanings
                        }
                    }
                }
            }
        },
        _isCompatibleTab: function(o, n) {
            n = n || {};
            if (n.modulesOnly && !o.isModule) {
                return false
            } else {
                if (n.iasOnly && o.isModule) {
                    return false
                }
            }
            return true
        },
        _getLastResortTab: function(n) {
            var o = n.tabs || [];
            return this._getHighestRankingTab(o, n) || this.tabs.images
        },
        _getHighestRankingTab: function(o, q) {
            var t = -1000,
                r = "";
            for (var n = 0; n < o.length; n++) {
                var p = o[n],
                    s = c[p.id] || c[p.from] || 0;
                if (!this._isCompatibleTab(p, q)) {
                    continue
                }
                if (p.model && p.model.meta && p.model.meta.blockgroup === "goodie") {
                    s += 1000
                }
                if (p.model && p.model.queryMatch) {
                    s += 1000
                }
                if (s > t) {
                    t = s;
                    r = p
                }
            }
            return r
        },
        _fireFallbackPixel: function(q) {
            var s = this.futureSignals.map(function(A) {
                    return A.from + ":" + A.signal
                }).join(","),
                n = "",
                x = "",
                p = new Date().getTime(),
                r, v, y;
            try {
                for (var t in this.failedIA) {
                    v = this.failedIA[t];
                    y = v - DDG.deep.finished;
                    if (n) {
                        n += ","
                    }
                    n += (t + ":" + y)
                }
                for (var o in this.tabs) {
                    r = this.tabs[o];
                    y = r.timeAdded - DDG.deep.finished;
                    if (r.type !== "static") {
                        if (x) {
                            x += ","
                        }
                        x += (o + ":" + r.signal + ":" + y)
                    }
                }
            } catch (u) {}
            var z = {
                timeSincePageLoad: p - a,
                timeSinceDeepStarted: DDG.deep.timeSinceStarted(),
                timeSinceDeepFinished: p - DDG.deep.timeSinceFinished(),
                numSignals: this.futureSignals.length,
                numTabs: Object.keys(this.tabs).length,
                numFails: Object.keys(this.failedIA).length,
                signals: s,
                fails: n,
                tabs: x
            };
            g.pixel.fire("iaff", q, z)
        },
        _fireOpenPixel: function(p, o) {
            var q = p.model.getPixelData();
            if (p.isModule && p.view && p.view.viewModel) {
                q.hd = encodeURIComponent(p.view.viewModel.Heading);
                q.ib = p.view.viewModel.infobox ? 1 : 0;
                q.q = g.get_query_encoded()
            }
            if (p.model.openType === "i") {
                $.extend(q, this.getTimingData())
            }
            if (p.model.usingOrganicBackfill) {
                q.bf = 1
            }
            if (o) {
                q.iom = 1
            }
            if (g.page.ads.hasAds()) {
                var n = g.page.ads.getAds();
                q.adn = n.length;
                q.adx = g.page.ads.adx;
                q.adx_name = g.page.ads.adxExperiment;
                q.is_good_v8_0 = (n[0] && n[0].relevancy && n[0].relevancy.is_good_v8) || 0;
                q.is_good_v8_1 = (n[1] && n[1].relevancy && n[1].relevancy.is_good_v8) || 0
            }
            g.pixel.fire("iao" + p.model.openType, p.pixelId, q)
        },
        _canShowRRModules: function() {
            return g.device.hasMinDesktopWidth && g.settings.isDefault("km") && g.settings.isDefault("kw") && g.settings.isDefault("kz")
        },
        _getOpenType: function(p, o) {
            var n = "e";
            if (o.backButtonOpened) {
                n = "b"
            } else {
                if (o.is_last_resort_tab) {
                    n = "f"
                } else {
                    if (p.model.isRequery) {
                        n = "r"
                    } else {
                        if (o.qsOpened) {
                            n = "q"
                        } else {
                            if (o.autoOpened) {
                                n = "i"
                            } else {
                                if (o.defaultOpened) {
                                    n = "d"
                                }
                            }
                        }
                    }
                }
            }
            return n
        },
        _getSideModuleOpenType: function() {
            if (this.activeTabId) {
                return this.activeTabOpenType
            }
            return g.history.get("ia") ? "q" : "i"
        },
        _getAnswerName: function(o) {
            var n = o.name || o.duckbar_topic || o.topic || "Answer";
            if (n === "qa") {
                n = "Q/A"
            }
            return n
        },
        _configureForModules: function(n) {
            if (j[n.id] || n.model === "FatheadArticle") {
                n.isModule = true;
                if (this._canShowRRModules()) {
                    n.isSideModule = true
                }
            } else {
                if (k[n.id]) {
                    n.isModule = true
                }
            }
        },
        _upgradeToVertical: function(n) {
            n.destroyView();
            n.isModule = n.model.isModule = false;
            n.isVertical = n.model.isVertical = true;
            g.history.set("iar", n.nameId);
            delete this.activeTabId;
            this.open(n.id)
        },
        _openNext: function(n) {
            if (g.keyboard.namespaced(/^autocomplete$/) || g.keyboard.focusedOnInput()) {
                return
            }
            var o = this.getActiveTab();
            if (o && o.model.selectedItem) {
                return
            }
            this.menu.openNext(n)
        }
    };
    g.duckbar = new i()
}(DDG);
! function(a) {
    a.DuckbarTab = function(b) {
        if (b.answerType && a.Models.Answers[b.answerType]) {
            this.model = new a.Models.Answers[b.answerType](b)
        } else {
            this.model = new a.Models.Answer(b)
        }
        this.id = this.model.id;
        this.name = this.model.name;
        this.nameId = this.model.nameId;
        this.type = this.model.type;
        this.signal = this.model.signal;
        this.pixelId = this.model.pixelId;
        this.from = this.model.from;
        this.isModule = this.model.isModule;
        this.isSideModule = this.model.isSideModule;
        this.timeAdded = new Date().getTime();
        this.items = this.model.items;
        if (this.id === "images" || this.id === "videos" || this.id === "news") {
            this.model.isRequery = a.hidden.get("iar") === this.id && !a.history.get("iax");
            this.model.expanded = a.hidden.get("iar") === this.id
        }
    };
    a.DuckbarTab.prototype = $.extend({}, EventEmitter2.prototype, {
        append: function(b) {
            if (!b) {
                return
            }
            if (this.model.active && this.model.items.length && a.history.get("iaf")) {
                return
            }
            this.model.meta.update(b.meta);
            if (b.deferredContent) {
                this.model.deferredContent = b.deferredContent;
                return
            }
            b.data = $.isArray(b.data) ? b.data : [b.data || b];
            this.model.addItems(b.data, b.ads)
        },
        numItems: function() {
            return this.model.items.length
        },
        show: function(b) {
            if (this.model.active) {
                return
            }
            this.$parent = b.appendTo;
            if (this.id !== "web" && !this.view && !this._createView()) {
                return
            }
            this.model.set("openType", b && b.openType);
            if (b.loadDeferred) {
                this.model.loadDeferred()
            }
            this.emit("show");
            if (this.isSideModule || this.isOrganicModule) {
                this.view.show();
                return
            }
            this.model.set("active", 1);
            a.history.clear("iac");
            if (this._stashedHistory) {
                a.history.set(this._stashedHistory);
                delete this._stashedHistory
            }
            if (this._stashedHidden) {
                a.hidden.set("iaf", this._stashedHidden);
                delete this._stashedHidden
            }
            a.history.set({
                ia: this.nameId
            })
        },
        hide: function() {
            if (!this.model.active) {
                return
            }
            if (!this.isSideModule) {
                this._stashedHistory = a.history.getNamespace("ia");
                a.history.clearNamespace("ia");
                if (a.hidden.get("iaf")) {
                    this._stashedHidden = a.hidden.get("iaf");
                    a.hidden.clear("iaf")
                }
            }
            this.model.set("active");
            this.emit("hide")
        },
        getHeight: function(b) {
            return this.view && this.view.getHeight && this.view.getHeight(b)
        },
        destroyView: function() {
            this.view && this.view.destroy();
            delete this.view;
            this.model.set("active")
        },
        failed: function() {
            this.model.set("failed", true)
        },
        _createView: function() {
            var b = new a.Utils.TabViewBuilder();
            this.view = b.build({
                model: this.model,
                appendTo: this.$parent,
                events: {
                    close: this.emit.bind(this, "close"),
                    "item-selected": this.emit.bind(this, "item-selected"),
                    "item-unselected": this.emit.bind(this, "item-unselected"),
                    "item-shown": this.emit.bind(this, "item-shown")
                }
            });
            return !!this.view
        }
    })
}(DDG);
! function(c) {
    var b = c.Models.AnswerSelectLists,
        a = c.Models.SelectList;
    b.Parameter = function(d) {
        a.call(this, d)
    };
    b.Parameter.prototype = $.extend({}, a.prototype, {
        serialize: function() {
            if (!this.selected || !this.selected.id || this.disabled) {
                return ""
            }
            return this.key + ":" + this.selected.id
        }
    })
}(DDG);
! function(c) {
    var b = c.Models.AnswerSelectLists,
        a = c.Models.SelectList;
    b.Source = function(d) {
        d.key = "src";
        a.call(this, d)
    };
    b.Source.prototype = $.extend({}, a.prototype, {
        getParameterQueryString: function() {
            var d = "f=";
            d += this.parameters.map(function(e) {
                return e.serialize()
            }).join(",");
            return d
        },
        hasActiveFilters: function() {
            return this.parameters && this.parameters.some(function(d) {
                return d.selected && d.selected.id
            })
        },
        getRequeryURL: function() {
            var d = this.selected.requeryURL;
            if (typeof d === "function") {
                d = d()
            }
            d += c.get_query_encoded() + "&vqd=" + window.vqd;
            if (d.indexOf("?") === -1) {
                d += "?"
            } else {
                d += "&"
            }
            d += this.getParameterQueryString();
            return d
        }
    })
}(DDG);
! function(c) {
    var b = c.Models.AnswerSelectLists,
        a = c.Models.SelectList;
    b.DirectionSource = function(d) {
        d = d || {};
        d.values = this._getSources();
        d.selectedId = c.settings.get("kam");
        a.call(this, d);
        c.settings.on("change:kam", this.select.bind(this))
    };
    b.DirectionSource.prototype = $.extend({}, a.prototype, {
        _getSources: function() {
            var d = DDG.Data.Settings.directionSources;
            return Object.keys(d).map(function(e) {
                return $.extend({}, d[e], {
                    id: e
                })
            })
        },
        _createURLForLocation: function(e, f) {
            var d;
            if (e && f && f.address && f.lat && f.lon) {
                d = e;
                d = d.replace(/\{\{addr\}\}/g, f.address);
                d = d.replace(/\{\{lat\}\}/g, f.lat);
                d = d.replace(/\{\{lng\}\}/g, f.lon)
            }
            return d
        },
        getDirectionsURL: function(d) {
            if (!this.selected) {
                return ""
            }
            return this._createURLForLocation(this.selected.directionsURL, d)
        },
        getMapURL: function(d) {
            if (!this.selected) {
                return ""
            }
            return this._createURLForLocation(this.selected.mapURL, d)
        },
        getMapTitleText: function() {
            var d = this.selected.name;
            return lp("open_in_third_party_app", "Open in %s", d)
        },
        getSourcesForLocation: function(d) {
            return this._getSources().map(function(f) {
                var e = this._createURLForLocation(f.mapURL, d);
                return {
                    id: f.id,
                    name: f.name,
                    mapURL: this._createURLForLocation(f.mapURL, d),
                    directionsURL: this._createURLForLocation(f.directionsURL, d),
                    faviconURL: f.faviconURL || e
                }
            }.bind(this))
        },
        getNonDefaultSourcesForLocation: function(d) {
            return this.getSourcesForLocation(d).filter(function(e) {
                return !this.selected || e.id !== this.selected.id
            }.bind(this))
        }
    });
    c.directionSource = new b.DirectionSource()
}(DDG);
! function(b) {
    var a = b.Models.Answer;
    b.Models.Answers.Maps = function(c) {
        a.call(this, c)
    };
    b.Models.Answers.Maps.prototype = $.extend({}, a.prototype, {
        answerItemModel: "MapLocation",
        addItems: function(c) {
            a.prototype.addItems.call(this, c);
            if (this.items.length && !this.selectedItem) {
                this.items[0].select()
            }
        }
    })
}(DDG);
! function(b) {
    var a = b.Models.Answer;
    b.Models.Answers.News = function(c) {
        a.call(this, c)
    };
    b.Models.Answers.News.prototype = $.extend({}, a.prototype, {
        answerItemModel: "News",
        _setFailed: function() {
            this.set("failed", true);
            Spice.failed(this.pixelId);
            if (this.isOrganicModule) {
                var c = $("#organic-module");
                c.children().remove();
                this.placeholder = new b.Views.Modules.Placeholder({
                    model: new b.Models.Answer({
                        id: "organic-placeholder"
                    }),
                    signalWait: "news",
                    appendTo: c
                });
                this.placeholder.showImages(b.duckbar.tabs.images.model)
            }
        },
        _checkForNewsBackfill: function() {
            var c = b.deep.getNewsItems(this.isModule);
            if (c && c.length) {
                this.usingOrganicBackfill = true;
                this.addItems(c)
            } else {
                this._setFailed()
            }
        },
        _checkForSpellingBackfill: function() {
            var d = b.search.spelling,
                c = this.experimentalDeferredURL + d.query + "&vqd=" + d.suggestionVqd;
            $.ajax({
                type: "GET",
                url: c,
                dataType: "json",
                success: this._onDeferredLoaded.bind(this),
                error: this._setFailed.bind(this)
            })
        },
        _canUseOrganicBackfill: function(c) {
            var d = c && c.results && c.results.length;
            return !d && !this._hasDeferredQueries() && !b.search.isQuotedQuery()
        },
        _canUseSpellingBackfill: function() {
            var d = b.search.isQuotedQuery(),
                c = b.search.spelling,
                e = (c && c.suggestion && c.suggestion.length);
            return (!d && e && c.isValidType())
        },
        _onDeferredLoaded: function(c) {
            if (!b.deep.finished) {
                return b.deep.on("change:finished", this._onDeferredLoaded.bind(this, c))
            }
            if (this._canUseSpellingBackfill() && !this.usingSpellingBackfill) {
                this.usingSpellingBackfill = true;
                this._checkForSpellingBackfill();
                return
            } else {
                if (this._canUseOrganicBackfill(c)) {
                    this._checkForNewsBackfill()
                }
            }
            a.prototype._onDeferredLoaded.call(this, c);
            if (this.id === "news" && (this.openType === "e" || this.openType === "r")) {
                b.pixel.fire("nv", {
                    o: this.openType,
                    b: (this.usingOrganicBackfill ? 1 : 0),
                    p: (b.page && b.page.showingSpelling ? 1 : 0),
                    t: (b.get_query().match(/\"/) ? 1 : 0),
                    l: this.items.length,
                    r0: (this.items.length === 0 ? 1 : 0),
                    r1: (this.items.length < 3 ? 1 : 0),
                    r2: (this.items.length < 5 ? 1 : 0),
                    r3: (this.items.length < 10 ? 1 : 0)
                })
            }
        }
    })
}(DDG);
! function(c) {
    var a = c.Models.Answer,
        b = 8;
    c.Models.Answers.Images = function(d) {
        a.call(this, d)
    };
    c.Models.Answers.Images.prototype = $.extend({}, a.prototype, {
        getModuleRow: function(o, k, d) {
            var g = [];
            var q = {};
            var h = 0;
            o = o || 0;
            for (var m = o; m < this.items.length; m++) {
                if (!this.items[m]) {
                    break
                }
                q = this.items[m];
                q.rq = rq;
                q.kurl = kurl ? kurl : "";
                var j = q.width <= q.height,
                    n = q.width / q.height;
                q.height = d - b;
                q.divHeight = q.height;
                q.width = Math.floor(q.height * n);
                q.divWidth = j ? q.width : q.width * 2 / 3;
                h += q.divWidth;
                g.push(q);
                if (h > k) {
                    break
                }
            }
            var e = b * (g.length - 1),
                p = k - (h + e),
                f = Math.ceil(p / g.length);
            h = 0;
            for (m = 0; m < g.length; m++) {
                q = g[m];
                q.divWidth += f;
                if (q.divWidth > q.width) {
                    q.width += q.divWidth - q.width
                }
                h += q.divWidth;
                q.lastOfRow = m === g.length - 1
            }
            p = k - (h + e);
            q.divWidth += p;
            return g
        }
    })
}(DDG);
! function(b) {
    var a = b.Models.Answer,
        c = 3;
    b.Models.Answers.Places = function(d) {
        a.call(this, d);
        this.moreAtExternalServiceText = this._getMoreAtExternalServiceText()
    };
    b.Models.Answers.Places.prototype = $.extend({}, a.prototype, {
        addItems: function(d) {
            a.prototype.addItems.call(this, d);
            if (this.items && this.items.length > 0) {
                this.primaryPlace = this.items[0];
                this.topPlaces = this.items.slice(0, c);
                this.topPlaces = this.topPlaces.map(function(e) {
                    e.set("isSideModule", this.isSideModule);
                    return e
                }.bind(this));
                this.canExpand = !this.isSideModule && this.items.length === 1 && this.primaryPlace && this.primaryPlace.isExpandable()
            }
        },
        isExpandable: function() {
            return this.canExpand
        },
        toggleExpand: function() {
            this.set("expanded", !this.expanded);
            if (this.primaryPlace) {
                this.primaryPlace.toggleExpand()
            }
        },
        _getMoreAtExternalServiceText: function() {
            var d = this.meta.sourceName;
            return l("More at %s ", d)
        }
    })
}(DDG);
! function(b) {
    var a = b.Models.Answer;
    b.Models.Answers.Products = function(c) {
        a.call(this, c)
    };
    b.Models.Answers.Products.prototype = $.extend({}, a.prototype, {
        answerType: "Products",
        clickedExternalLink: function(d, g) {
            var c = $(g.target),
                f = $(g.target.parentElement);
            if (c.hasClass("tile__media")) {
                d.clk = "i"
            } else {
                if (f.hasClass("tile__title--brand")) {
                    d.clk = "b"
                } else {
                    if (f.hasClass("tile__title")) {
                        d.clk = "d"
                    } else {
                        d.clk = "o"
                    }
                }
            }
            a.prototype.clickedExternalLink.call(this, d)
        }
    })
}(DDG);
! function(c) {
    var b = c.Models.Base,
        a;
    c.Models.AnswerItems.Base = a = function(d) {
        if (this.transform) {
            d = this.transform(d)
        }
        b.call(this, d);
        this._updateId()
    };
    a.extend = function(e) {
        var d = function(f) {
            a.call(this, f)
        };
        d.prototype = $.extend({}, a.prototype, e || {});
        return d
    };
    a.prototype = $.extend({}, b.prototype, {
        select: function() {
            this.unhighlight();
            this.set("selected", 1);
            if (this.topic && this.topic.select) {
                this.topic.select()
            }
        },
        unselect: function() {
            this.set("selected");
            if (this.topic && this.topic.unselect) {
                this.topic.unselect()
            }
        },
        highlight: function() {
            if (this.selected) {
                return
            }
            this.set("highlighted", 1);
            if (this.topic && this.topic.highlight) {
                this.topic.highlight()
            }
        },
        unhighlight: function() {
            this.set("highlighted");
            if (this.topic && this.topic.unhighlight) {
                this.topic.unhighlight()
            }
        },
        toTemplateObject: function() {
            return $.extend({}, this, {
                meta: this.meta ? $.extend({}, this.answerMeta, this.meta) : this.answerMeta
            })
        },
        _updateId: function() {
            if (typeof this.idField === "string" && this[this.idField]) {
                return this.id = this[this.idField]
            }
            if ($.isArray(this.idField)) {
                this.id = this.idField.map(function(d) {
                    return this[d]
                }, this).join("");
                if (this.id) {
                    return this.id
                }
            }
            return this.id = this.UUID()
        },
        getItemTemplate: function() {
            var d = this.templates,
                e = d.item;
            if (c.device.isMobile) {
                e = d.item_mobile || e
            }
            return e
        },
        getDetailTemplate: function() {
            var d = this.templates,
                e = d.detail;
            if (c.device.isMobile) {
                e = d.detail_mobile || e
            }
            return e
        },
        getItemDetailTemplate: function() {
            var d = this.templates,
                e = d.item_detail || d.detail;
            if (c.device.isMobile) {
                e = d.item_detail_mobile || d.detail_mobile || e
            }
            return e
        },
        canShowItemDetail: function() {
            return !!this.getItemDetailTemplate()
        }
    })
}(DDG);
! function(a) {
    a.Models.AnswerItems.Audio = a.Models.AnswerItems.Base.extend({
        idField: "url"
    })
}(DDG);
! function(a) {
    a.Models.AnswerItems.FatheadListItem = a.Models.AnswerItems.Base.extend({
        idField: "FirstURL"
    })
}(DDG);
! function(b) {
    var a = b.Models.AnswerItems.Base;
    b.Models.AnswerItems.Place = function(c) {
        a.call(this, c);
        this.subtitle = this.getSubtitle();
        this.directions = this.getDirectionsURL();
        this.directionsTitle = this.getDirectionsTitle();
        this.mapURL = b.directionSource.getMapURL(this);
        this.shortAddress = this.getShortAddress();
        this.hours = this.getHours();
        this.ratingClass = this.rating ? this.rating.toString().replace(".", "-") : false;
        this.morePhotosText = this.getMorePhotosText();
        this.moreAtExternalServiceText = this.getMoreAtExternalServiceText();
        this.viewOnExternalServiceText = this.getViewOnExternalServiceText();
        if (b.device.is2x || b.device.is3x) {
            this.ratingImage = this.ratingImageRetina ? this.ratingImageRetina : this.ratingImage
        }
        if (this.reviews && this.reviews.length) {
            this.reviews.forEach(function(d) {
                var e = {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                };
                d.formattedDate = new Date(d.timeCreated * 1000).toLocaleDateString(false, e);
                d.user.userOnServiceText = this.getUserOnServiceText(d.user);
                if (b.device.is2x || b.device.is3x) {
                    d.ratingImage = d.ratingImageRetina ? d.ratingImageRetina : d.ratingImage
                }
                d.ratingClass = d.rating ? d.rating.toString().replace(".", "-") : ""
            }.bind(this))
        }
    };
    b.Models.AnswerItems.Place.prototype = $.extend({}, a.prototype, {
        getSubtitle: function() {
            var d = this.getPriceSymbols(),
                c = this.getCategories();
            if (!d) {
                return c
            }
            if (!c) {
                return d
            }
            return d + " · " + c
        },
        getPriceSymbols: function() {
            if (!this.price) {
                return
            }
            var c = "";
            for (var d = 0; d < this.price; d++) {
                c += "$"
            }
            return c
        },
        getCategories: function() {
            if (!this.categories || !this.categories.length) {
                return
            }
            return this.categories.map(function(d) {
                return d.name
            }).join(", ")
        },
        getDirectionsTitle: function() {
            return b.directionSource.getMapTitleText()
        },
        getDirectionsURL: function() {
            return b.directionSource.getDirectionsURL(this)
        },
        getShortAddress: function() {
            return this.addressLines[0]
        },
        getHours: function() {
            if ($.isEmptyObject(this.hours)) {
                return false
            }
            var d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var c = (new Date()).getDay();
            return d.map(function(f, e) {
                if (e === c) {
                    this.hoursToday = this.hours[f]
                }
                return {
                    weekDay: f,
                    hours: this.hours[f],
                    isToday: e === c
                }
            }.bind(this))
        },
        toggleHoursExpand: function() {
            if (this.hours) {
                this.set("hoursExpanded", !this.hoursExpanded)
            }
        },
        getMorePhotosText: function() {
            var c = this.name;
            return l("See more photos of %s", c)
        },
        getViewOnExternalServiceText: function() {
            var c = this.source;
            return l("View on %s", c)
        },
        getMoreAtExternalServiceText: function() {
            var c = this.source;
            return l("More at %s ", c)
        },
        getUserOnServiceText: function(c) {
            var d = c.name;
            var e = this.source;
            return lp("maps_places", "%s on %s", d, e)
        },
        isExpandable: function() {
            if (typeof this.canExpand === "undefined") {
                return this.canExpand = !this.isSideModule && (!!this.moreAtExternalServiceText || (this.review_detail && this.review_detail.length > 0))
            }
            return this.canExpand
        },
        toggleExpand: function() {
            this.set("expanded", !this.expanded)
        }
    })
}(DDG);
! function(a) {
    a.Models.AnswerItems.Product = a.Models.AnswerItems.Base.extend({
        idField: ["ASIN", "img_m", "img"]
    })
}(DDG);
! function(f) {
    var e = f.Models.AnswerItems.Base,
        d = {
            YouTube: {
                embedURL: "https://www.youtube-nocookie.com/embed/",
                searchURL: "https://www.youtube.com/results?search_query=",
                userURL: "https://www.youtube.com/channel/",
                url: "https://www.youtube.com/watch?v=",
                params: {
                    wmode: "transparent",
                    iv_load_policy: 3,
                    autoplay: 1,
                    html5: 1,
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    theme: "light"
                }
            },
            Vimeo: {
                embedURL: "https://player.vimeo.com/video/",
                searchURL: "https://www.vimeo.com/search?q=",
                userURL: "https://vimeo.com/",
                url: "https://vimeo.com/",
                params: {
                    api: 0,
                    autoplay: 1
                }
            }
        };
    f.Models.AnswerItems.Video = e.extend({
        idField: "id",
        transform: function(g) {
            var h = d[g.provider];
            g.embedURL = h.embedURL + g.id + "?" + $.param(h.params);
            g.faviconURL = f.get_favicon_url(g.provider.toLowerCase());
            g.musicVideoData = a(g);
            g.url = h.url + g.id;
            g.searchURL = h.searchURL + rq;
            g.userURL = h.userURL + g.channel_id;
            g.username = g.display_name;
            g.viewCount = b(g);
            g.publishedDate = c(g.published);
            return g
        },
        getITunesData: function(i) {
            var j = this.musicVideo();
            if (!j) {
                return i()
            }
            if (this._iTunesData) {
                return i(null, this._iTunesData)
            }
            var g = this,
                h = "/iit/" + encodeURIComponent(j.title);
            $.ajax({
                url: h,
                dataType: "json",
                success: function(k) {
                    g._iTunesData = k;
                    i(null, k)
                },
                error: function() {
                    i()
                }
            })
        },
        canShowItemDetail: function() {
            var g = e.prototype.canShowItemDetail.call(this);
            return g && f.settings.get("k5") !== "2"
        }
    });
    var b = function(h) {
            var i = 0;
            if (h.statistics && h.statistics.viewCount) {
                i = parseInt(h.statistics.viewCount, 10);
                if (!$.isNumeric(i)) {
                    i = 0
                }
            }
            if (!i && h.duration.match(/\d+:\d+:\d+/)) {
                return lp("video", "Preview")
            }
            var g = lnp("video", "%d view", "%.0f views", i);
            return g.replace(/(\d)(?=(\d{3})+(\.\d+|)\b)/g, "$1,")
        },
        a = function(o) {
            if (!o.category || o.category !== "Music") {
                return
            }
            var n = o.title.replace(/\(.*\)|\[.*\]/g, "");
            n = n.replace(/\s+f(?:ea|)t\..*$/g, "");
            n = n.replace(/^\s+|\s+$/g, "");
            var h = n.split(" - "),
                k = h[0],
                i = h[1] || k,
                p = i !== k ? i + " " + k : i,
                j = "/iit/" + encodeURIComponent(n),
                m = encodeURIComponent("!a " + p),
                g = encodeURIComponent("!spotify " + p);
            return {
                title: n,
                artist: k,
                song: i,
                iTunesURL: j,
                amazonURL: m,
                spotifyURL: g
            }
        },
        c = function(h) {
            var g = DDG.getDateFromString(h);
            return g ? g.toDateString().substr(4) : ""
        }
}(DDG);
! function(c) {
    var b = c.Models.AnswerItems,
        a = b.Base;
    b.News = a.extend({
        idField: "url",
        transform: function(d) {
            d.showImage = d.image || d.fetch_image;
            if (d.relative_time) {
                d.relativeTimeShort = d.relative_time.replace(/(\d+) ([a-z]).*/, "$1$2")
            }
            if (!d.favicon_url) {
                d.favicon_url = d.url
            }
            this.on("change:visible", this._onVisibleChanged.bind(this));
            return d
        },
        _fetchImage: function(d) {
            if (this._fetchedImage) {
                return
            }
            this._fetchedImage = true;
            $.getJSON("/f.js?vqd=" + window.vqd + "&o=json&i=1&u=" + d, this._onImageFetched.bind(this))
        },
        _onVisibleChanged: function() {
            if (!this.visible) {
                return
            }
            if (this.fetch_image && !this.image) {
                this._fetchImage(this.url)
            }
        },
        _onImageFetched: function(d) {
            if (d && d.image) {
                this.set("image", d.image)
            }
        }
    })
}(DDG);
! function(b) {
    var a = b.Models.AnswerItems.Base;
    b.Models.AnswerItems.MapLocation = function(c) {
        a.call(this, c);
        if (this.hasValidLatLon() && b.search.isLatLonQuery()) {
            this.displayLatLon = this._getDisplayLatLon()
        }
        this.latLng = [this.lat, this.lon]
    };
    b.Models.AnswerItems.MapLocation.prototype = $.extend({}, a.prototype, {
        hasValidLatLon: function() {
            return this.lat && !isNaN(this.lat) && this.lon && !isNaN(this.lon)
        },
        _getDisplayLatLon: function() {
            var c, d, e = '"';
            if (this.lat > 0) {
                c = this.lat + e + " N, "
            } else {
                c = (this.lat * -1) + e + " S, "
            }
            if (this.lon > 0) {
                d = this.lon + e + " E"
            } else {
                d = (this.lon * -1) + e + " W"
            }
            return c + d
        }
    })
}(DDG);
! function(a) {
    var b = 300;
    a.Models.Header = function() {
        this._headerHeight = a.get_header_height() + 1
    };
    a.Models.Header.prototype = $.extend({}, {
        updateScrollPosition: function(f) {
            var c = (f < this._previousScroll) ? 1 : 0,
                e, d;
            this.scrolledToTop = f === 0;
            this.scrolledPastHeaderThreshold = (f > this._headerHeight + b);
            this.scrolledPastHeader = f > this._headerHeight;
            this.canUpdateHeaderPosition = false;
            this.newHeaderPosition = -this._headerHeight;
            if (this.scrolledToTop) {
                this._scrollBuffer = 0;
                this._showingFloatedHeader = false;
                this.newHeaderPosition = 0
            }
            e = c && !this._showingFloatedHeader;
            d = !c && this._showingFloatedHeader;
            if (this.scrolledPastHeaderThreshold && (e || d) && this._pastScrollBuffer(f, c)) {
                this.newHeaderPosition = (c) ? 0 : -this._headerHeight;
                this.canUpdateHeaderPosition = true;
                this._scrollBuffer = 0;
                this._showingFloatedHeader = !this._showingFloatedHeader
            }
            this._previousScroll = f;
            this._previousScrollDirection = c
        },
        _pastScrollBuffer: function(d, c) {
            if (this._previousScrollDirection !== c) {
                this._scrollBuffer = 0
            }
            if (!this._scrollBuffer) {
                this._scrollBuffer = d + ((c) ? -50 : 100)
            }
            if (c) {
                return d < this._scrollBuffer
            }
            return d > this._scrollBuffer
        }
    })
}(DDG);
! function(d) {
    var c = d.Views.Base,
        a = "has-ad",
        b = "has-ad--sitelinks";
    d.Views.Ads = function(e) {
        c.call(this, e);
        this.bindEvents([
            [this.model, "change:ads", this._updateHeight],
            [this.model, "change:defaultAds", this._updateHeight],
            [this.model, "change:pendingAds", this._updateHeight]
        ])
    };
    d.Views.Ads.prototype = $.extend({}, c.prototype, {
        renderAds: function(e) {
            this.$el.html(d.$exec_template(this.template, {
                model: e
            }));
            this._wrapLinks();
            this.bindClickEvents();
            this.$el.toggleClass(a, true)
        },
        bindClickEvents: function() {
            this._cacheElems(".js-ad-links", ["link", "snippet", "body", "badge"]);
            this.$siteLinks = $(".sponsored__sitelink");
            this.bindEvents([
                [this.$link, "click", this._onLinkClick],
                [this.$snippet, "click", this._onLinkClick],
                [this.$body, "click", this._onLinkClick],
                [this.$siteLinks, "click", this._onLinkClick]
            ])
        },
        show: function() {
            this.$el.toggleClass(a, this.model.hasAds())
        },
        fallbackToDefault: function() {
            if (this.model.isBlocked() || this.model.ads.length) {
                return
            }
            var e = this.model.getAds();
            if (e && e.length) {
                this.$el.addClass(this.HAS_AD);
                nrn("a", e)
            } else {
                if (this.$el.hasClass(this.HAS_AD)) {
                    this.$el.removeClass(this.HAS_AD)
                }
            }
        },
        _updateHeight: function() {
            if (this.model.isBlocked() || this.model.rightRailBoth) {
                return
            }
            this.show();
            this.$el.toggleClass(b, this.model.hasSiteLinks())
        },
        _onLinkClick: function(f) {
            adClick(this.source)
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.SERPMessages = function(c) {
        this.ads = c.ads;
        this.searchbar = c.searchbar;
        this._pendingMessages = [];
        a.call(this, c);
        if (c.messages.spelling) {
            this.showMessage("spelling", c.messages.spelling)
        }
        if (c.messages.safeSearch) {
            this.showMessage("safeSearch")
        }
        if (c.messages.siteSearch) {
            this.showMessage("siteSearch")
        }
    };
    b.Views.SERPMessages.prototype = $.extend({}, a.prototype, {
        isReady: false,
        ready: function() {
            this.isReady = true;
            this._pendingMessages.forEach(function(c) {
                this.showMessage(c[0], c[1])
            }.bind(this));
            this._pendingMessages = []
        },
        showMessage: function(d, c) {
            if (!this.isReady) {
                return this._pendingMessages.push([d, c])
            }
            if (d === "spelling") {
                this._showSpellingMessage(c)
            } else {
                if (d === "safeSearch") {
                    this._showSafeSearchMessage()
                } else {
                    if (d === "siteSearch" && !this._showingMessage) {
                        this._showSiteSearchMessage()
                    }
                }
            }
        },
        _showSafeSearchMessage: function() {
            if (!b.settings.safeSearch.isStrict()) {
                return
            }
            if (this.$safeSearch) {
                return
            }
            var c = b.deep.getResultCount() ? 1 : 0;
            this.$safeSearch = b.exec_template("safe_search", {
                noResults: !c,
                searchTerm: "<b>" + rqd + "</b>"
            });
            this.$el.prepend(this.$safeSearch);
            this.$(".js-safe-search-temp").on("click", function(d) {
                d.preventDefault();
                b.pixel.fire("sss", "m", {
                    v: -1,
                    p: 0,
                    r: c
                });
                b.settings.safeSearch.setTemporaryId("-1", function() {
                    b.search.requery()
                })
            });
            this.$(".js-safe-search-perm").on("click", function(d) {
                d.preventDefault();
                b.pixel.fire("sss", "m", {
                    v: -1,
                    p: 1,
                    r: c
                });
                b.settings.safeSearch.setId("-1", function() {
                    b.search.requery()
                })
            });
            this._showingMessage = true;
            b.page.showingSafeSearch = 1;
            b.pixel.fire("ssi", {
                r: c
            });
            if (!c) {
                DDG.deep.hideNoResults = true
            }
        },
        _showSiteSearchMessage: function() {
            if (this.$siteSearch || !b.deep.getResultCount()) {
                return
            }
            var d = sfq,
                c = b.search.getSiteQuery(d);
            if (c.sites.length) {
                this.$siteSearch = DDG.$exec_template("site_query", {
                    queryEncoded: encodeURIComponent(c.query),
                    isExcluding: c.isExcluding,
                    hasMultipleSites: c.sites.length > 1,
                    sites: c.sites,
                    forceBreak: b.device.isMobile && c.sites.length > 1
                });
                this.$el.append(this.$siteSearch);
                this._showingMessage = true
            }
        },
        _showSpellingMessage: function(c) {
            if (this.$safeSearch || this.$spelling || !b.search.spelling.isValidType()) {
                return
            }
            this.$spelling = new b.Views.SpellingMessage({
                appendTo: this.$el.selector,
                model: b.search.spelling
            })
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.SpellingMessage = function(c) {
        this.model = c.model;
        this.ia = c.ia;
        a.call(this, c)
    };
    b.Views.SpellingMessage.prototype = $.extend({}, a.prototype, {
        template: "spelling_",
        _render: function(c) {
            this.template += this.model.type;
            a.prototype._render.call(this);
            this._showSpellingMessage()
        },
        _showSpellingMessage: function() {
            b.pixel.fire("spd", this.model.type);
            if (this.model.type === "nmrc") {
                this.$el.find(".js-spelling-suggestion-link").html(this.model.suggestion)
            } else {
                this.$el.find(".js-spelling-suggestion-link").attr({
                    href: this.model.makeSpellingURL(this.model.link, false, this.ia),
                    "data-query": this.model.query
                }).html(this.model.suggestion).click(this._onSpellingLinkClick.bind(this, this.model.query))
            }
            this.$el.find(".js-spelling-recourse-link").attr({
                href: this.model.makeSpellingURL(this.model.recourseLink, true, this.ia),
                "data-query": this.model.recourseQuery
            }).html(this.model.recourseText).click(this._onSpellingLinkClick.bind(this, this.model.recourseQuery))
        },
        _onSpellingLinkClick: function(c, d) {
            DDG.pixel.fire("sp", this.model.type);
            if (!b.settings.isDefault("kg")) {
                d.preventDefault();
                b.page.searchbar.updateQuery(c)
            }
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.TwitterEasterEgg = function(c) {
        this.username = c.username;
        a.call(this, c);
        this._fetchImage()
    };
    b.Views.TwitterEasterEgg.prototype = $.extend({}, a.prototype, {
        _fetchImage: function() {
            $.ajax({
                url: "/tw.js?o=json&user=" + this.username,
                dataType: "json",
                success: function(c) {
                    this.image = c && c.profile_image;
                    this._renderEasterEgg()
                }.bind(this)
            })
        },
        _renderEasterEgg: function() {
            if (!this.image) {
                return
            }
            this.$el.append(b.exec_template("twitter_easter_egg", {
                image: this.image
            }));
            this._cacheElems(".js-logo", ["ddg", "praise", "avatar"]);
            this.$el.attr("href", "/spread");
            setTimeout(this._animate.bind(this), 1000)
        },
        _animate: function() {
            this.$ddg.hide();
            this.$praise.show();
            setTimeout(function() {
                this.$praise.hide();
                this.$avatar.show()
            }.bind(this), 1000);
            setTimeout(function() {
                this.$avatar.hide();
                this.$ddg.show()
            }.bind(this), 3000)
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Base,
        d = "set-header--floating",
        a = 20;
    c.Views.Header = function(e) {
        b.call(this, e);
        this.views.headerLinks = new c.Views.HeaderLinks({
            appendTo: ".js-header-wrap"
        });
        this.bindEvents([
            [c.device, "scroll", this._onScroll]
        ])
    };
    c.Views.Header.prototype = $.extend({}, b.prototype, {
        _onScroll: function(f) {
            this.model.updateScrollPosition(c.device.scrollTop());
            if (this.model.scrolledToTop) {
                this._reset();
                return
            }
            if (this.model.scrolledPastHeader) {
                this.views.headerLinks.hide()
            }
            if (this.model.scrolledPastHeaderThreshold && !c.hasClass(this.$el[0].id, d)) {
                this._updateHeaderPosition();
                setTimeout(function() {
                    c.addClass(this.$el[0].id, c.$html, d)
                }.bind(this), a)
            }
            if (this.model.canUpdateHeaderPosition) {
                this._updateHeaderPosition()
            }
        },
        _updateHeaderPosition: function() {
            this.$el.css("top", this.model.newHeaderPosition)
        },
        _reset: function() {
            this.$el.css("top", 0);
            c.removeClass(this.$el[0].id, c.$html, d)
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.ClickableItem = function(c) {
        a.call(this, c)
    };
    b.Views.ClickableItem.prototype = $.extend({}, a.prototype, {
        _render: function(c) {
            a.prototype._render.call(this, c);
            this.bindEvents([
                [this.$el, "click", this._onClick],
                [this.$el, "mousedown", this._onMouseDown]
            ])
        },
        _onMouseDown: function(d) {
            if ($(d.target).is("a")) {
                return
            }
            d.stopPropagation();
            var f = 0;
            if (b.device.isIE && (nkdc(d) || nkdm(d))) {
                f = 1
            }
            var g = d.which && d.which == 2;
            var c = d.which && d.which == 3;
            if (f || g || c) {
                fm = 1;
                if (!c) {
                    this._onClick(d, 1)
                }
            } else {
                fm = 0
            }
        },
        _onClick: function(f, d) {
            f.stopPropagation();
            this.answer.engaged();
            var c;
            if (f.target && f.target.nodeName === "A") {
                c = f.target
            } else {
                c = this.$el[0];
                c.href = this.$el.attr("data-link")
            }
            if (c.href) {
                b.history.set({
                    iai: this.answer.getQuerystringItemId(this.model)
                }, function() {
                    if (!DDG.isInternalURL(c.href)) {
                        this.answer.clickedExternalLink({}, f)
                    }
                    nrg(null, null, f, d, c)
                }.bind(this));
                return f.preventDefault()
            }
            this.model.select()
        },
        _onExternalLinkClick: function(c) {
            c.stopPropagation();
            this.answer.engaged();
            this.answer.clickedExternalLink({}, c);
            if (c.ctrlKey) {
                b.history.set({
                    iai: this.answer.getQuerystringItemId(this.model)
                });
                return a.prototype._onExternalLinkClick.call(this, c)
            }
            b.history.set({
                iai: this.answer.getQuerystringItemId(this.model)
            }, function() {
                a.prototype._onExternalLinkClick.call(this, c)
            }.bind(this))
        }
    })
}(DDG);
! function(e) {
    var b = e.Views.Base,
        d = e.Views.AnswerBar.Meta,
        c = 44,
        a = {
            expandModeIcon: "G",
            exitModeIcon: "×",
            minTopicsForMenu: 3
        };
    d.MetaBar = function(g) {
        if (g.heading) {
            g.primaryText = g.heading
        }
        if (g.altMeta) {
            g.secondaryText = g.altMeta
        }
        $.extend(this, a, g);
        this.parent = g.parent;
        this.notFixed = g.notFixed;
        this.showParams = this.model.parameters && this.model.parameters.length;
        this.showSources = this.model.sources && this.model.sources.values.length > 1;
        b.call(this, g);
        var f = this.model;
        this.bindEvents([
            [f, "change:items", this._onItemsChanged],
            [f, "change:expanded", this._onExpandedChanged],
            [f, "change:canExpand", this._onExpandedChanged],
            [f, "change:topics", this._createTopicMenu],
            [e.device, "scroll", this._onScroll]
        ])
    };
    d.MetaBar.prototype = $.extend({}, b.prototype, {
        template: "metabar",
        show: function() {
            this.$el.removeClass("is-hidden");
            this._height = this.$el.outerHeight(true)
        },
        hide: function() {
            this.$el.addClass("is-hidden")
        },
        getHeight: function() {
            return c
        },
        isStuck: function() {
            return DDG.hasClass(this.id, "is-stuck")
        },
        _render: function() {
            b.prototype._render.call(this, $.extend({}, {
                showMoreAt: this.sourceName,
                showDropdowns: this.showParams || this.showSources,
                searchTerm: this.model.query,
                itemType: l("Results")
            }, this));
            if (Modernizr.touch || is_mobile) {
                this.$el.removeClass("metabar--fixed").addClass("metabar--unsticky")
            }
            this._cacheElems(".js-metabar", ["primary", "loading", "mode", "dropdowns"]);
            DDG.touchOrClick(this.$mode, this._onModeClick.bind(this));
            this._updateMode();
            this._updateLoadingState();
            this._createTopicMenu();
            this._createAttribution();
            this._createSourceDropdown();
            this._createParameterDropdowns();
            if (this.linkPrimaryText) {
                this.$primary.addClass("metabar__primary-text--linked");
                this.$primary.on("click", this._onModeClick.bind(this))
            }
        },
        _createTopicMenu: function() {
            var f = this.views,
                g = this.model,
                h = this.model.topics;
            if (!f.topicMenu && h.length && h.length >= this.minTopicsForMenu) {
                f.topicMenu = new e.Views.AnswerBar.Meta.TopicMenu({
                    model: g,
                    appendTo: this.$(".js-metabar")
                });
                this.$primary.hide()
            }
        },
        _createAttribution: function() {
            if (!this.model.meta.hasAttribution()) {
                return false
            }
            var f = this.$(".js-attribution");
            this.views.attribution = new e.Views.Attribution({
                answer: this.model,
                direction: this.sourceName ? "bottom" : "bottom-left",
                appendTo: f
            });
            f.removeClass("is-hidden")
        },
        _createParameterDropdowns: function() {
            if (!this.showParams) {
                return
            }
            this.views.parameters = new e.Views.Dropdowns.FilterContainer({
                $el: this.$dropdowns,
                answer: this.model
            })
        },
        _createSourceDropdown: function() {
            if (!this.showSources) {
                return
            }
            this.views.source = new d.FilterDropdown({
                model: this.model.sources,
                answer: this.model,
                appendTo: this.$dropdowns
            })
        },
        _updateLoadingState: function() {
            if (!this._isLoaded && this.model.items.length) {
                this.$loading.hide();
                this.$primary.removeClass("is-loading");
                this.$dropdowns.removeClass("is-loading");
                this._isLoaded = true
            }
        },
        _updateMode: function() {
            var q = this,
                h = q.model,
                i = h.expanded,
                g = q.$mode,
                j = e.device.isMobile,
                p = h.meta,
                f = q.exitModeIcon,
                k = function() {
                    if (p.useExpandTextButton()) {
                        g.removeClass("btn--icon");
                        g.addClass("metabar__grid-btn");
                        g.text(l("More " + q.model.name))
                    } else {
                        g.addClass("btn--icon");
                        g.removeClass("metabar__grid-btn");
                        g.text(q.expandModeIcon)
                    }
                },
                o = function() {
                    q._modeSwitchEnabled = true;
                    g.removeClass("is-disabled");
                    g.removeClass("btn--icon");
                    g.addClass("metabar__grid-btn");
                    g.text(f);
                    g.attr("title", l("Click to collapse"))
                },
                n = function() {
                    q._modeSwitchEnabled = true;
                    g.removeClass("is-disabled");
                    k();
                    g.attr("title", l("Click to expand"))
                },
                m = function() {
                    q._modeSwitchEnabled = false;
                    g.addClass("is-disabled");
                    k();
                    g.attr("title", l("Grid mode disabled for this answer"))
                };
            if (j || i) {
                o()
            } else {
                if (p.hideModeSwitch) {
                    g.addClass("is-hidden")
                } else {
                    if (h.canExpand) {
                        n()
                    } else {
                        m()
                    }
                }
            }
        },
        _onScroll: function() {
            if (Modernizr.touch || e.device.isMobile || !this.parent || !this.model.active || this.notFixed) {
                return
            }
            var m = DDG.hasClass(this.id, "is-stuck"),
                f = DDG.hasClass(this.id, "at-bottom");
            if (!this.model.expanded) {
                if (m) {
                    DDG.removeClass(this.id, this.$el, "is-stuck");
                    this.emit("stuck", false)
                }
                if (f) {
                    DDG.removeClass(this.id, this.$el, "at-bottom")
                }
                return
            }
            var j = e.device.scrollTop(),
                k = this.parent.getHeight(),
                i = 0,
                h = k - c,
                g = DDG.get_header_height();
            i += !DDG.isHeaderFixed ? g : 0;
            h += i;
            if (j > i && !m) {
                DDG.addClass(this.id, this.$el, "is-stuck");
                this.emit("stuck", true)
            } else {
                if (j <= i && m) {
                    DDG.removeClass(this.id, this.$el, "is-stuck");
                    this.emit("stuck", false)
                }
            }
            if (!f && j > h) {
                DDG.addClass(this.id, this.$el, "at-bottom")
            } else {
                if (f && j < h) {
                    DDG.removeClass(this.id, this.$el, "at-bottom")
                }
            }
        },
        _onModeClick: function(f) {
            f.preventDefault();
            f.stopPropagation();
            if (!this._modeSwitchEnabled) {
                return
            }
            if (e.device.isMobile) {
                return this.emit("close")
            }
            this.model.set("expanded", !this.model.expanded);
            this.model.engaged();
            this.model.fire("iacg", {
                ex: this.model.expanded ? 1 : 0
            })
        },
        _onItemsChanged: function() {
            this._updateLoadingState();
            this._updateMode()
        },
        _onExpandedChanged: function() {
            this._updateMode()
        },
        _onExternalLinkClick: function(f) {
            this.model.clickedExternalLink();
            b.prototype._onExternalLinkClick.call(this, f)
        }
    })
}(DDG);
! function(c) {
    var a = c.Views.Base,
        b = c.Views.AnswerBar.Meta;
    b.TopicMenu = function(d) {
        this.views = {
            topics: {}
        };
        a.call(this, d);
        this.bindEvents([
            [this.model, "change:topics", this._updateTopics],
            [this.model, "change:selectedTopic", this._onSelectedTopicChanged]
        ])
    };
    b.TopicMenu.prototype = $.extend({}, a.prototype, {
        template: "topic_menu",
        destroy: function() {
            a.prototype.destroy.call(this);
            this._removeDocHandler()
        },
        _render: function() {
            a.prototype._render.call(this);
            this.$menu = this.$(".js-topic-menu");
            this._updateTopics()
        },
        _updateTopics: function() {
            var g, d = this.model.topics,
                e = this.views.topics;
            for (var h in e) {
                if (!d[h]) {
                    e[h].destroy();
                    delete e[h]
                }
            }
            for (var f = 0; f < d.length; f++) {
                g = d[f];
                if (!e[g.id]) {
                    this.views.topics[g.id] = new b.TopicMenuItem({
                        model: g,
                        appendTo: this.$menu
                    })
                }
            }
        },
        _addDocHandler: function() {
            DDG.$doc.on("click.topicmenu", this._onDocClick.bind(this));
            this._boundToDoc = 1
        },
        _removeDocHandler: function() {
            DDG.$doc.off("click.topicmenu");
            this._boundToDoc = 0
        },
        _onSelectedTopicChanged: function() {
            if (this.model.selectedTopic && !this._boundToDoc) {
                this._addDocHandler()
            } else {
                this._removeDocHandler()
            }
        },
        _onDocClick: function() {
            if (this.model.selectedTopic) {
                this.model.selectedTopic.unselect()
            }
        }
    })
}(DDG);
! function(e) {
    var c = e.Views.Base,
        d = e.Views.AnswerBar.Meta,
        a = "is-selected",
        b = "is-highlighted";
    d.TopicMenuItem = function(f) {
        c.call(this, f);
        this.bindEvents([
            [this.$link, "click", this._onClick],
            [this.model, "change:highlighted", this._onHighlightedChanged],
            [this.model, "change:selected", this._onSelectedChanged],
            [this.model, "change:count", this._onCountChanged]
        ])
    };
    d.TopicMenuItem.prototype = $.extend({}, c.prototype, {
        template: "topic_menu_item",
        _render: function() {
            c.prototype._render.call(this, this.model);
            this._cacheElems(".js-topic-menu", ["link", "count"])
        },
        _onHighlightedChanged: function() {
            this.$link.toggleClass(b, !!this.model.highlighted)
        },
        _onSelectedChanged: function() {
            this.$link.toggleClass(a, !!this.model.selected)
        },
        _onCountChanged: function() {
            if (this.model.hideCount) {
                return
            }
            this.$count.text(this.model.items.length)
        },
        _onClick: function(f) {
            f.preventDefault();
            f.stopPropagation();
            this.model.select();
            if ($.isFunction(this.model.engaged)) {
                this.model.engaged()
            }
        }
    })
}(DDG);
! function(c) {
    var a = c.Views.Dropdowns.SelectListDropdown,
        b = c.Views.AnswerBar.Meta;
    b.FilterDropdown = function(d) {
        d = d || {};
        d.showSelected = true;
        this.answer = d.answer;
        a.call(this, d)
    };
    b.FilterDropdown.prototype = $.extend({}, a.prototype, {
        _render: function(e) {
            a.prototype._render.call(this, e);
            var d = c.history.getComposite("iaf", this.model.key);
            if (d) {
                this.model.select(d)
            }
        },
        _updateHidden: function() {
            var d = c.history.get("iaf");
            if (d) {
                c.hidden.set("iaf", d)
            } else {
                c.hidden.clear("iaf")
            }
        },
        _onSelectedChange: function() {
            var d = this.model.selected.id;
            a.prototype._onSelectedChange.call(this);
            if (d) {
                c.history.setComposite("iaf", this.model.key, d);
                this.$el.addClass("is-active")
            } else {
                c.history.clearComposite("iaf", this.model.key);
                this.$el.removeClass("is-active")
            }
            this._updateHidden()
        },
        _onItemClick: function(d) {
            a.prototype._onItemClick.call(this, d);
            c.pixel.fire("iafi", this.model.key);
            this.answer.engaged();
            this.answer.requery()
        }
    })
}(DDG);
! function(c) {
    var a = c.Views.Base,
        b = c.Views.AnswerBar;
    b.InfoBox = function(d) {
        a.call(this, d);
        this.$tile = this.$(".js-infobox-tile");
        this.$expand = this.$(".js-tile-expand");
        this.$lastInfo = this.$(".info:last");
        if (this.model.expanded) {
            this._expand()
        }
        this.bindEvents([
            [this.model, "change:expanded", this._onAnswerExpandedChanged],
            [this.model, "change:active", this._onAnswerActiveChanged],
            [this.$expand, "click", this._onExpandClick],
            ["a", "click", function() {
                c.pixel.fire("ibc")
            }],
            [c.device, "resize", this._onResize]
        ])
    };
    b.InfoBox.prototype = $.extend({}, a.prototype, {
        template: "infobox",
        _expand: function() {
            if (!this._canExpand()) {
                return
            }
            this.$tile.addClass("is-open")
        },
        _collapse: function() {
            if (!this._canExpand()) {
                return
            }
            this.$tile.removeClass("is-open")
        },
        _canExpand: function() {
            if (!this.$lastInfo || typeof this._isExpandable === "boolean") {
                return this._isExpandable
            }
            if (this.model.expanded) {
                return this._isExpandable = true
            }
            var d = this.$lastInfo.position().top + this.$lastInfo.outerHeight(true),
                e = this.$tile.outerHeight();
            return (this._isExpandable = d > e)
        },
        _showHideExpandLink: function() {
            if (this._canExpand()) {
                this.$expand.removeClass("is-hidden")
            } else {
                this.$expand.addClass("is-hidden")
            }
        },
        _onExpandClick: function() {
            this.model.set("expanded", !this.model.expanded);
            this.model.engaged();
            this.model.fire("iasm")
        },
        _onResize: function() {
            delete this._isExpandable;
            this._showHideExpandLink()
        },
        _onAnswerActiveChanged: function() {
            if (this.model.active) {
                delete this._isExpandable;
                this._showHideExpandLink()
            }
        },
        _onAnswerExpandedChanged: function() {
            if (this.model.expanded) {
                this._expand()
            } else {
                this._collapse()
            }
        }
    })
}(DDG);
! function(d) {
    var c = d.Views.ClickableItem,
        e = "is-hidden",
        a = "is-selected",
        b = "highlight",
        f = 8;
    d.Views.AnswerBar.Tile = function(h) {
        this.answer = h.answer;
        this.noDetail = h.noDetail;
        c.call(this, h);
        this.bindEvents([
            [this.model, "change:visible", this._updateVisible],
            [this.model, "change:partiallyVisible", this._updateVisible],
            [this.model, "change:selected", this._onSelectedChanged],
            [this.model, "change:highlighted", this._onHighlightedChanged],
            [this.answer, "change:active", this._onAnswerActiveChanged],
            [this.answer, "change:expanded", this._onAnswerExpandedChanged],
            [d.device, "resize", this._onResize]
        ]);
        var g = this.answer.meta.rerender;
        if (g) {
            this.bindEvents(g.map(function(i) {
                return [this.model, "change:" + i, this._rerender]
            }.bind(this)))
        }
    };
    d.Views.AnswerBar.Tile.prototype = $.extend({}, c.prototype, {
        show: function() {
            this.$el.removeClass(e)
        },
        hide: function() {
            this.$el.addClass(e)
        },
        getMargins: function() {
            return {
                x: parseFloat(this.$el.css("margin-left"), 10),
                top: parseFloat(this.$el.css("margin-top"), 10),
                bottom: f
            }
        },
        _render: function() {
            this.template = this.model.getItemTemplate();
            c.prototype._render.call(this, this.model.toTemplateObject());
            d.ImageLoader.registerAll(this.$(".js-lazyload"), this.model.id);
            d.ImageLoader.registerAll(this.$(".js-lazysvg"), this.model.id, {
                svg: true
            });
            this.$ellipsis = this.$(".js-ellipsis");
            var g = this.$("a");
            if (g.length) {
                g.on("touchstart touchend", function(h) {
                    h.stopPropagation()
                })
            }
            if (this.answer.meta.itemsHighlight !== false && !d.device.isIDevice) {
                this.$el.on("mouseenter", this._onMouseEnter.bind(this));
                this.$el.on("mouseleave", this._onMouseLeave.bind(this))
            }
            this._updateEllipsis({
                force: true
            })
        },
        _updateEllipsis: function(g) {
            g = g || {};
            if (g.force) {
                this._hasBeenEllipsized = false
            }
            if (this._hasBeenEllipsized || !this.answer.active || !this.model.visible || !this.$ellipsis.length || d.device.isMobile) {
                return
            }
            this.$ellipsis.ellipsis({
                id: this.model.id
            });
            this._hasBeenEllipsized = true
        },
        _updateVisible: function() {
            if (this.model.visible || this.model.partiallyVisible) {
                d.ImageLoader.trigger(this.model.id);
                this._updateEllipsis()
            }
        },
        _updateMargin: function() {
            if (d.device.isMobile) {
                return
            }
            var h = f;
            if (!this.noDetail && this.model.canShowItemDetail() && this.answer.expanded && this.model.selected) {
                var g = this.answer.items[this.answer.items.length - 1].gridRow;
                if (!g || g !== this.model.gridRow) {
                    h *= 2
                } else {
                    h -= 1
                }
                h += this.answer.getDetailHeight()
            }
            h += "px";
            if (this._marginBottom === h) {
                return
            }
            this._marginBottom = h;
            this.$el.css({
                marginBottom: h
            })
        },
        _rerender: function() {
            c.prototype._rerender.call(this);
            this._onHighlightedChanged();
            this._onSelectedChanged()
        },
        _onHighlightedChanged: function() {
            this.$el.toggleClass(b, !!this.model.highlighted)
        },
        _onSelectedChanged: function() {
            if (this.model.selected) {
                d.history.set({
                    iai: this.answer.getQuerystringItemId(this.model)
                })
            }
            this.$el.toggleClass(a, !!this.model.selected);
            this._updateMargin()
        },
        _onAnswerActiveChanged: function() {
            this._updateEllipsis()
        },
        _onAnswerExpandedChanged: function() {
            this._updateMargin();
            this._updateEllipsis({
                force: true
            })
        },
        _onClick: function(h, g) {
            if (this.answer.id === "images" || this.answer.id === "videos") {
                this.answer.set("expanded", 1)
            }
            this.answer.fire("iatc");
            if (this.model.selected) {
                this.answer.engaged();
                return this.model.unselect()
            }
            if (!this.noDetail && this.model.canShowItemDetail()) {
                h.preventDefault();
                this.answer.engaged();
                return this.model.select()
            }
            return c.prototype._onClick.call(this, h, g)
        },
        _onMouseEnter: function(g) {
            if (d.keyboard.active) {
                return
            }
            this.model.highlight()
        },
        _onMouseLeave: function(g) {
            this.model.unhighlight()
        },
        _onResize: function(g) {
            this._updateEllipsis({
                force: true
            });
            this._updateMargin()
        },
        _onExternalLinkClick: function(g) {
            this.answer.fire("iatc");
            return c.prototype._onExternalLinkClick.call(this, g)
        }
    })
}(DDG);
! function(f) {
    var e = f.Views.AnswerBar.Tile,
        b = "is-loading",
        c = "is-paused",
        d = "is-unavailable",
        a, h = 0;
    f.Views.AnswerBar.AudioTile = function(i) {
        e.call(this, i);
        this.bindEvents([
            [f.keyboard, "space." + this.answer.id, this._onSpace]
        ])
    };
    f.Views.AnswerBar.AudioTile.prototype = $.extend({}, e.prototype, {
        play: function() {
            if (h) {
                this.showError("Playback Unavailable");
                return
            }
            this.$el.addClass(b);
            if (!this.$action) {
                this.$action = this.$(".audio-controls__action");
                this.$time = this.$(".audio-controls__time");
                this.$progress = this.$(".audio-controls__progress");
                this.$loadProgress = this.$(".audio-controls__progress-loading");
                this.$loadProgressFill = this.$(".audio-controls__progress-loading .rotated-fill");
                this.$playProgress = this.$(".audio-controls__progress-playback");
                this.$playProgressFill = this.$(".audio-controls__progress-playback .rotated-fill")
            }
            if (!a) {
                f.require("audio", function(i) {
                    a = i;
                    if (a && a.ready) {
                        if (f.device.isIDevice || f.device.isAndroid) {
                            this.$el.removeClass(b);
                            return
                        }
                    } else {
                        h = 1
                    }
                    this.play()
                }.bind(this));
                return
            }
            this.$el.removeClass(c);
            this.$action.text("║");
            this.isPlaying = 1;
            this.hasStartedPlaying = 0;
            if (this.sound) {
                a.play(this.model.id);
                this._onLoadProgress()
            } else {
                this.sound = a.play(this.model.id, this.model.streamURL, {
                    autoPlay: true,
                    whileloading: this._onLoadProgress.bind(this),
                    whileplaying: this._onPlayProgress.bind(this),
                    onload: this._onLoadFinished.bind(this),
                    onfinish: this._onPlayFinished.bind(this)
                })
            }
        },
        pause: function() {
            if (!a || !a.ready) {
                return
            }
            a.pause(this.model.id);
            this.$el.removeClass(b);
            this.$el.addClass(c);
            this.$action.text("►");
            this.isPlaying = 0
        },
        stop: function() {
            if (!a || !a.ready) {
                return
            }
            a.stop(this.model.id);
            this.$el.removeClass(b);
            this.$el.removeClass(c);
            this.$action.text("►");
            if (!this.$el.hasClass(d)) {
                this.$time.text("")
            }
            this.$loadProgress.removeClass("gt50");
            this.$playProgress.removeClass("gt50");
            g(this.$loadProgressFill, 0);
            g(this.$playProgressFill, 0);
            this.isPlaying = 0
        },
        showError: function(i) {
            this.$time.text(i);
            this.$el.addClass(d)
        },
        _onSelectedChanged: function() {
            if (this.answer.meta.autoplay === false && !this._userSelected) {
                if (this.model.selected) {
                    this.model.unselect()
                }
                return
            }
            e.prototype._onSelectedChanged.call(this);
            if (this.model.selected) {
                this.play()
            } else {
                this.stop()
            }
        },
        _onClick: function(i) {
            this._userSelected = true;
            i.preventDefault();
            this.answer.fire("iatc");
            if (this.model.selected) {
                this.isPlaying ? this.pause() : this.play()
            } else {
                this.model.select()
            }
        },
        _onSpace: function(i) {
            this._userSelected = true;
            if (this.model.selected) {
                if (this.isPlaying) {
                    i.preventDefault();
                    this.pause()
                } else {
                    if (this.answer.active) {
                        i.preventDefault();
                        this.play()
                    }
                }
            }
        },
        _onLoadProgress: function() {
            var i = (this.sound.bytesLoaded / this.sound.bytesTotal) * 100;
            if (i > 50) {
                this.$loadProgress.addClass("gt50");
                return g(this.$loadProgressFill, 100)
            }
            g(this.$loadProgressFill, i)
        },
        _onLoadFinished: function(i) {
            if (i) {
                return
            }
            this.showError("Stream Unavailable");
            a.stop();
            if (this.answer.autoplaying) {
                this.answer.selectNextItem()
            }
        },
        _onPlayProgress: function() {
            if (!this.sound || !this.model.duration) {
                return
            }
            if (!this.hasStartedPlaying) {
                this.$el.removeClass(b);
                this.hasStartedPlaying = 1
            }
            var j = this.model.duration - this.sound.position,
                i = (this.sound.position / this.model.duration) * 100;
            this.$time.text("-" + DDG.formatDuration(j));
            if (i > 50) {
                this.$playProgress.addClass("gt50")
            }
            g(this.$playProgressFill, i)
        },
        _onPlayFinished: function() {
            this.stop();
            if (this.answer.meta.autoplay !== false) {
                this.answer.autoplaying = 1;
                this.answer.selectNextItem()
            }
        }
    });
    var g = function(j, k) {
        var i = (360 / 100 * k) + "deg";
        j.css({
            "-moz-transform": "rotate(" + i + ")",
            "-webkit-transform": "rotate(" + i + ")",
            "-o-transform": "rotate(" + i + ")",
            transform: "rotate(" + i + ")"
        })
    }
}(DDG);
! function(d) {
    var c = d.Views.Base,
        f = "can-expand",
        a = "has-chomp-expanded",
        e = 200,
        b = 150;
    d.Views.AnswerBar.Detail = function(h) {
        this.answer = h.answer;
        this.template = h.template;
        this.canExpand = h.canExpand;
        this.canWrap = h.canWrap;
        this.hasInfobox = h.hasInfobox;
        c.call(this, h);
        if (this.canExpand) {
            this.bindEvents([
                [this.answer, "change:expanded", this._updateExpandableContent],
                [this.answer, "change:active", this._updateExpandableContent],
                [d.device, "resize", this._updateExpandableContent]
            ])
        }
        var g = this.answer.meta.rerender;
        if (g) {
            this.bindEvents(g.map(function(i) {
                return [this.model, "change:" + i, this._rerender]
            }.bind(this)))
        }
    };
    d.Views.AnswerBar.Detail.prototype = $.extend({}, c.prototype, {
        _render: function(k) {
            var h = this.model.toTemplateObject(),
                g = $.extend({}, h, k),
                o = this.model.templates.wrap_detail,
                j = this.template;
            if (this.canWrap && o) {
                g = {
                    content: d.exec_template(j, h)
                };
                this.template = o
            }
            c.prototype._render.call(this, g);
            this.template = j;
            var m = this.$(".js-sized-img");
            if (m.length) {
                m.on("load error", function() {
                    $(this).css({
                        height: "auto",
                        width: "auto"
                    })
                })
            }
            var i = this.$("img");
            if (i.length) {
                i.error(function() {
                    $(this).hide()
                })
            }
            if (this.canExpand) {
                this.$expandContent = this.$(".js-ellipsis,.js-chomp");
                if (this.$expandContent.length) {
                    this.expandContent = this.$expandContent.html();
                    this.expandUseEllipsis = this.$(".js-ellipsis").length;
                    this.$expandLink = this.$(".js-chomp-link");
                    this._updateExpandableContent();
                    if (this.$expandLink.length) {
                        this.$expandLink.on("click", function() {
                            this.answer.set("expanded", !this.answer.expanded);
                            this.answer.fire("iasm")
                        }.bind(this))
                    }
                    var n = this.$(".js-detail-img");
                    if (n.length && !n.width()) {
                        n.load(function() {
                            this._updateExpandableContent()
                        }.bind(this))
                    }
                }
            }
        },
        _updateExpandableContent: function() {
            if (!this.answer.active || !this.expandContent) {
                return
            }
            this.$expandContent.html(this.expandContent);
            this._hasCode();
            if (this.answer.expanded) {
                if (is_mobile || this.$expandContent.outerHeight() < this.$expandContent.prop("scrollHeight") - 1) {
                    this.$expandLink.addClass(f)
                }
                this.$el.addClass(a)
            } else {
                this.$el.removeClass(a);
                var g;
                if (this.expandUseEllipsis) {
                    g = this.$expandContent.ellipsis(this._getEllipsisOptions())
                } else {
                    if (this.$expandContent.outerHeight() < this.$expandContent.prop("scrollHeight") - 1) {
                        g = true
                    }
                }
                if (d.device.isMobile && this.hasInfobox) {
                    g = true
                }
                this.$expandLink.toggleClass(f, g)
            }
            this._highlightSyntaxCheck()
        },
        _hasCode: function() {
            if (this.model.meta && this.model.meta.topic) {
                this.isReference = this.model.meta.topic.indexOf("reference") > -1;
                this.isProgramming = this.model.meta.topic.indexOf("programming") > -1;
                this.isStackExchange = this.model.id.indexOf("stackexchange") > -1;
                if (this.isReference || this.isProgramming || this.isStackExchange) {
                    this.$el.addClass("has-code")
                }
            }
        },
        _highlightSyntaxCheck: function() {
            if (this.isReference || this.isProgramming) {
                var g = this.$el.find("pre");
                if (g.length) {
                    DDG.require("prettify", function() {
                        g.addClass("prettyprint");
                        window.prettyPrint()
                    })
                }
            }
        },
        _getEllipsisOptions: function() {
            var g = {
                firstParagraph: true
            };
            if (this.$el.find("code").length) {
                g.maxHeight = e
            }
            if (this.model.parentId === "lyrics") {
                g.maxHeight = b
            }
            return g
        },
        _onExternalLinkClick: function(g) {
            this.answer.clickedExternalLink();
            c.prototype._onExternalLinkClick.call(this, g)
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.AnswerBar.Detail,
        d = 0.55,
        a = 500;
    c.Views.AnswerBar.ImageDetail = function(e) {
        this.parentPadding = e.parentPadding;
        b.call(this, e);
        this.bindEvents([
            [this.model, "change:selected", this._onSelectedChanged],
            [c.device, "resize", this._onResize]
        ])
    };
    c.Views.AnswerBar.ImageDetail.prototype = $.extend({}, b.prototype, {
        _zoom: 1,
        _panX: 0,
        _panY: 0,
        setZoom: function(f, e) {
            this._zoom = f;
            this._updateTransform(e)
        },
        setPan: function(e, g, f) {
            this._panX = e / this._zoom;
            this._panY = g / this._zoom;
            this._updateTransform(f)
        },
        getPanDimensions: function() {
            return {
                width: this._width * this._zoom,
                height: this._height * this._zoom
            }
        },
        _render: function() {
            b.prototype._render.call(this, {
                detail: this._getDimensions(),
                isMobile: c.device.isMobile,
                linkImage: !c.device.isMobile
            });
            if (c.device.isDDGApp && c.device.isIDevice) {
                this.$el.addClass("is-ddg-ios-app")
            }
            this.$imgWrapper = this.$(".js-image-detail-wrapper");
            this.$transBg = this.$(".js-detail-image-bg");
            if (this.model.selected) {
                this._onSelectedChanged()
            }
        },
        _getDimensions: function() {
            var k = c.device,
                f = k.isMobile;
            var j = f ? k.width : k.width * d,
                i = f ? k.height : this.answer.getDetailHeight() - (this.parentPadding * 2),
                g = this.model,
                h = Math.min(g.width, j),
                e = h / g.width * g.height;
            if (e > i) {
                e = i;
                h = e / g.height * g.width
            }
            this._width = h;
            this._height = e;
            return {
                width: h + "px",
                height: e + "px",
                transBgWidth: Math.floor(h - 1) + "px",
                transBgHeight: Math.floor(e - 1) + "px"
            }
        },
        _loadHighRes: function() {
            if (this.$highRes) {
                return
            }
            this.$highRes = this.$(".js-detail-img-high");
            this.$highRes.attr("src", c.getImageProxyURL(this.model.image_mobile || this.model.image)).css({
                display: "block"
            }).on("load", this._onHighResLoaded.bind(this))
        },
        _animateTransform: function() {
            if (!$.Velocity) {
                return this._updateTransform()
            }
            this.$imgWrapper.velocity("stop").velocity({
                scale: this._zoom,
                translateX: this._panX,
                translateY: this._panY
            }, {
                easing: "ease-out",
                duration: c.animation_speed
            })
        },
        _updateTransform: function(e) {
            if (e) {
                return this._animateTransform()
            }
            if ($.Velocity) {
                this.$imgWrapper.velocity("stop");
                if (this._zoom) {
                    $.Velocity.hook(this.$imgWrapper, "scale", this._zoom)
                }
                if (this._panX) {
                    $.Velocity.hook(this.$imgWrapper, "translateX", this._panX + "px")
                }
                if (this._panY) {
                    $.Velocity.hook(this.$imgWrapper, "translateY", this._panY + "px")
                }
            } else {
                var f = "";
                if (this._zoom) {
                    f += "scale(" + this._zoom + ") "
                }
                if (this._panX || this._panY) {
                    f += "translate(" + (this._panX || 0) + "px," + (this._panY || 0) + "px) "
                }
                this.$imgWrapper.css({
                    transform: f,
                    "-webkit-transform": f,
                    "-moz-transform": f,
                    "-ms-transform": f,
                    "-o-transform": f
                })
            }
        },
        _onSelectedChanged: function() {
            if (this.model.selected) {
                this._loadHighResTimeout = setTimeout(this._loadHighRes.bind(this), c.device.isMobileDevice ? a : 0)
            } else {
                clearTimeout(this._loadHighResTimeout)
            }
        },
        _onResize: function() {
            if (!this.$imgs) {
                this.$imgs = this.$(".js-detail-img")
            }
            var e = this._getDimensions();
            this.$imgs.css({
                height: e.height,
                width: e.width
            });
            this.$transBg.css({
                width: e.transBgWidth,
                height: e.transBgHeight
            })
        },
        _onHighResLoaded: function() {
            this.$(".js-detail-img-thumb").fadeOut()
        }
    })
}(DDG);
! function(d) {
    var c = d.Views.AnswerBar.Detail,
        e = 0.75,
        a = 110,
        b = 76;
    d.Views.AnswerBar.VideoDetail = function(f) {
        this.parentPadding = f.parentPadding;
        c.call(this, f);
        this.bindEvents([
            [this.model, "change:selected", this._updateContent],
            [d.settings, "change:k5", this._updateContent],
            [d.device, "resize", this._onResize]
        ])
    };
    d.Views.AnswerBar.VideoDetail.prototype = $.extend({}, c.prototype, {
        template: "videos_detail",
        destroy: function() {
            clearTimeout(this._embedTimeout);
            c.prototype.destroy.call(this)
        },
        _render: function() {
            c.prototype._render.call(this);
            this.$videoWrap = this.$(".js-video");
            this.$video = this.$(".js-video-media");
            this._updateSize();
            this._updateContent()
        },
        _renderEmbed: function() {
            if (!this.model.selected) {
                return
            }
            var f = DDG.exec_template(DDG.templates.videos_detail_embed, this.model);
            this.$video.empty().append(f)
        },
        _renderPrivacy: function() {
            this.views.privacy = new d.Views.AnswerBar.VideoDetailOverlay({
                model: this.model,
                appendTo: this.$video
            })
        },
        _shouldShowPrivacy: function() {
            return !d.device.isMobile && this.model.selected && d.settings.isDefault("k5")
        },
        _shouldShowEmbed: function() {
            return this.model.selected && d.settings.get("k5") == 1
        },
        _updateSize: function() {
            var g = d.device,
                j = g.widthBreakpoint(),
                h = g.gutterSize(),
                m = h ? h + a : this.parentPadding * 2,
                i = h ? this.parentPadding * 2 : this.parentPadding * 2 + b,
                k = g.width - m,
                n = !g.isMobileLandscape() && (j === "m" || j === "s" || j === "xs") ? k : k * e,
                o = this.answer.getDetailHeight() - i,
                q = 16 / 9,
                f = n,
                p = n / q;
            if (p > o) {
                p = o;
                f = p * q
            }
            this.$videoWrap.css({
                width: f + "px"
            });
            this.$video.css({
                height: p + "px",
                width: f + "px"
            })
        },
        _updateContent: function() {
            if (this._shouldShowPrivacy()) {
                this._renderPrivacy()
            } else {
                if (this._shouldShowEmbed()) {
                    if (d.device.isMobile) {
                        this._embedTimeout = setTimeout(this._renderEmbed.bind(this), d.animation_speed + 100)
                    } else {
                        this._renderEmbed()
                    }
                } else {
                    this.$video.empty()
                }
            }
        },
        _onResize: function() {
            this._updateSize()
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.AnswerBar.VideoDetailOverlay = function(c) {
        a.call(this, c)
    };
    b.Views.AnswerBar.VideoDetailOverlay.prototype = $.extend({}, a.prototype, {
        template: "videos_detail_privacy",
        shouldShow: function() {
            return DDG.settings.isDefault("k5")
        },
        _render: function() {
            a.prototype._render.call(this);
            this._cacheElems(".js-video-privacy", ["watch", "leave", "remember", "remember-label"]);
            DDG.tap(this.$watch, this._onWatchClick.bind(this), {
                fallbackToClick: true
            });
            DDG.tap(this.$leave, this._onLeaveClick.bind(this), {
                fallbackToClick: true
            });
            DDG.tap(this.$remember, this._onRememberClick.bind(this));
            DDG.tap(this.$rememberlabel, this._onRememberClick.bind(this))
        },
        _shouldRemember: function() {
            return this.$remember[0].checked
        },
        _updateSetting: function(c) {
            var d = this._shouldRemember();
            DDG.settings.set("k5", c, {
                saveToCloud: d,
                saveToCookie: d
            })
        },
        _onWatchClick: function(c) {
            c.preventDefault();
            this._updateSetting("1");
            this.destroy()
        },
        _onLeaveClick: function(c) {
            c.preventDefault();
            this._updateSetting("2");
            nug(this.model.url);
            this.destroy()
        },
        _onRememberClick: function() {
            this.$remember.prop("checked", !this.$remember.prop("checked"))
        }
    })
}(DDG);
! function(d) {
    var b = d.Views.Base,
        f = "is-hidden",
        e = "has-open-detail",
        c = "can-scroll",
        a = {
            images_detail: "ImageDetail",
            videos_detail: "VideoDetail"
        },
        g = {
            images_detail: 1,
            videos_detail: 1
        };
    d.Views.AnswerBar.DetailSlider = function(h) {
        b.call(this, h);
        this.bindEvents([
            [this.model, "change:active", this._onActiveChanged],
            [this.model, "change:selectedItem", this._onSelectedItemChanged],
            [d.device, "resize", this._onResize]
        ])
    };
    d.Views.AnswerBar.DetailSlider.prototype = $.extend({}, b.prototype, {
        template: "detail_slider",
        _zoom: 1,
        _panX: 0,
        _panY: 0,
        _focused: false,
        destroy: function() {
            this._hide();
            b.prototype.destroy.call(this)
        },
        position: function(h) {
            if (d.device.isMobile) {
                return
            }
            if (this._top === h) {
                return
            }
            this._top = h;
            this.$el.css({
                top: h
            })
        },
        _show: function() {
            if (this._isShowing) {
                return
            }
            this.$el.removeClass(f);
            this._updateSelectedItem();
            if (d.device.isMobile) {
                d.$html.addClass(e);
                this._focus()
            }
            this._isShowing = 1
        },
        _hide: function() {
            if (!this._isShowing) {
                return
            }
            this.$el.addClass(f);
            if (d.device.isMobile) {
                d.$html.removeClass(e)
            }
            this.gestures.reset();
            this.destroyChildViews();
            this.views = {};
            this._isShowing = 0
        },
        _focus: function() {
            this.$el.addClass("has-focus");
            this._focused = 1
        },
        _unfocus: function() {
            this.$el.removeClass("has-focus");
            this._focused = 0
        },
        _render: function() {
            var k = $.extend({}, this.model),
                h = d.device.isMobile;
            if (!h) {
                k.detailHeight = this.model.getDetailHeight() + "px"
            }
            if (h && !Modernizr.touch) {
                k.mobileAndNoTouch = 1
            }
            b.prototype._render.call(this, k);
            var i = this.model.meta.detailOverlay;
            if (h && i) {
                this.overlayClass = d.Views.AnswerBar[i]
            }
            if (this.model.items.length) {
                var m = this.model.items[0],
                    j = m.getItemDetailTemplate();
                if (g[j]) {
                    this.$el.addClass("detail--xd")
                }
            }
            this._cacheElems(".js-detail", ["panes", "close", "next", "prev"]);
            d.tap(this.$close, this._onCloseClick.bind(this), {
                fallbackToClick: true
            });
            d.tap(this.$next, this._onNextClick.bind(this), {
                fallbackToClick: true
            });
            d.tap(this.$prev, this._onPrevClick.bind(this), {
                fallbackToClick: true
            });
            this.gestures = new d.Utils.GestureRecognizer({
                el: this.$el
            });
            this.gestures.on("tap", this._onTap.bind(this));
            this.gestures.on("double-tap", this._onDoubleTap.bind(this));
            this.gestures.on("swipe", this._onSwipe.bind(this));
            this.gestures.on("panmove", this._onPanMove.bind(this));
            this.gestures.on("panend", this._onPanEnd.bind(this));
            this.gestures.on("pinchmove", this._onPinchMove.bind(this));
            this.gestures.on("pinchend", this._onPinchEnd.bind(this));
            if (this.model.selectedItem) {
                this._show()
            }
        },
        _createPane: function(j, k) {
            if (!j) {
                return
            }
            var i = j.getItemDetailTemplate(),
                h = a[i] || "Detail";
            return new d.Views.AnswerBar.DetailSliderPane({
                answer: this.model,
                model: j,
                pos: k,
                detailView: h,
                appendTo: this.$panes
            })
        },
        _swipeToItem: function(h, i) {
            this._swipeVelocity = i;
            if (h === "prev") {
                this.model.selectPrevItem()
            } else {
                this.model.selectNextItem()
            }
        },
        _setZoom: function(i, h) {
            this._zoom = i;
            if (this._zoom <= 1) {
                this._setPan(0, 0)
            }
            this.views.cur && this.views.cur.setZoom(i, h)
        },
        _setPan: function(h, n, j) {
            if (this._zoom < 1) {
                this._panX = 0;
                this._panY = 0
            } else {
                this._panX = h;
                this._panY = n
            }
            if (this.views.cur && this._zoom > 1 && j) {
                var m = this.views.cur.getPanDimensions();
                if (m) {
                    var i = Math.abs(m.width - d.device.width) / 2,
                        k = Math.abs(m.height - d.device.height) / 2;
                    if (this._panX - i > 0) {
                        this._panX = i
                    } else {
                        if (this._panX + i < 0) {
                            this._panX = i * -1
                        }
                    }
                    if (this._panY - k > 0) {
                        this._panY = k
                    } else {
                        if (this._panY + k < 0) {
                            this._panY = k * -1
                        }
                    }
                }
            }
            this.views.cur && this.views.cur.setPan(this._panX, this._panY, j)
        },
        _updateDOM: function() {
            var h = this.views,
                i = this._swipeVelocity;
            if (h.prev) {
                h.prev.resetPosition(-1, i)
            }
            if (h.cur) {
                h.cur.resetPosition(0, i)
            }
            if (h.next) {
                h.next.resetPosition(1, i)
            }
            delete this._swipeVelocity;
            this.$prev.toggleClass(c, !!h.prev);
            this.$next.toggleClass(c, !!h.next && !h.next.model.hidden)
        },
        _updateSelectedItem: function() {
            if (this.views.prev && this.views.prev.model === this.model.selectedItem) {
                this.views.next && this.views.next.destroy();
                this.views.next = this.views.cur;
                this.views.cur = this.views.prev;
                this.views.prev = this._createPane(this.model.getPrevItem(), -1)
            } else {
                if (this.views.next && this.views.next.model === this.model.selectedItem) {
                    this.views.prev && this.views.prev.destroy();
                    this.views.prev = this.views.cur;
                    this.views.cur = this.views.next;
                    this.views.next = this._createPane(this.model.getNextItem(), 1)
                } else {
                    this.destroyChildViews();
                    this.views = {
                        prev: this._createPane(this.model.getPrevItem(), -1),
                        cur: this._createPane(this.model.selectedItem),
                        next: this._createPane(this.model.getNextItem(), 1)
                    }
                }
            }
            this._updateDOM();
            if (this.overlayClass && this.overlayClass.prototype.shouldShow()) {
                this.views.overlay && this.views.overlay.destroy();
                this.views.overlay = new this.overlayClass({
                    model: this.model.selectedItem,
                    appendTo: this.$el
                })
            }
            if (d.device.isMobile && this.model.indexOfSelectedItem() >= (this.model.items.length - 1)) {
                this.model.loadMore()
            }
            this._setZoom(1, true);
            this._setPan(0, 0)
        },
        _clearVerticalPan: function() {
            this.$el.removeClass("is-closing");
            this._setPan(0, 0, true);
            this._focus()
        },
        _onPanMove: function(i) {
            if (this._zoom > 1) {
                var h = this._panX + i.deltaX,
                    j = this._panY + i.deltaY;
                this._setPan(h, j)
            } else {
                if (i.axis === "x") {
                    if (this._panAxis !== "x") {
                        if (this._panAxis === "y") {
                            this._clearVerticalPan()
                        }
                        this._panAxis = "x"
                    }
                    if (this._prevDirection && this._prevDirection !== i.direction) {
                        this._updateDOM()
                    } else {
                        if (this.views.prev) {
                            this.views.prev.translateX(i.distX)
                        }
                        if (this.views.next) {
                            this.views.next.translateX(i.distX)
                        }
                        if (this.views.cur) {
                            this.views.cur.translateX(i.distX)
                        }
                    }
                    this._prevDirection = i.direction
                } else {
                    if (i.axis === "y") {
                        if (this._panAxis !== "y") {
                            this.$el.addClass("is-closing");
                            this._panAxis = "y";
                            this._unfocus();
                            this._updateDOM()
                        }
                        this._setPan(0, this._panY + i.deltaY)
                    }
                }
            }
        },
        _onPanEnd: function(i) {
            if (this._panAxis === "y") {
                this._clearVerticalPan()
            }
            delete this._panAxis;
            delete this._prevDirection;
            if (this._zoom <= 1 && !i.multitouch && !i.swiped) {
                this._updateDOM()
            }
            if (this._zoom > 1 && (Math.abs(i.velocityX) > 0.1 || Math.abs(i.velocityY) > 0.1)) {
                var h = this._panX + i.velocityX * d.animation_speed,
                    j = this._panY + i.velocityY * d.animation_speed;
                this._setPan(h, j, true)
            }
        },
        _onPinchMove: function(h) {
            this._setZoom(h.pinchDelta * this._zoom)
        },
        _onPinchEnd: function() {
            if (this._zoom < 1) {
                this._setZoom(1, true)
            }
        },
        _onTap: function(h) {
            var i = h.e;
            this._updateDOM();
            if (this._zoom > 1) {
                return
            }
            if (!this._focused) {
                i.preventDefault();
                i.stopPropagation();
                this._focus()
            } else {
                if (!i.target || i.target.nodeName !== "A") {
                    this._unfocus()
                }
            }
        },
        _onDoubleTap: function(h) {
            if (this._zoom > 1) {
                this._setZoom(1, true);
                this._focus()
            } else {
                this._setZoom(2, true);
                this._unfocus()
            }
        },
        _onSwipe: function(h) {
            if (this._zoom > 1) {
                return
            }
            if (this._panAxis === "x" && h.axis === "x") {
                if (h.direction === "right" && this.model.getPrevItem()) {
                    this._swipeToItem("prev", h.velocityX)
                } else {
                    if (h.direction === "left" && this.model.getNextItem()) {
                        this._swipeToItem("next", h.velocityX)
                    } else {
                        this._updateDOM()
                    }
                }
            } else {
                if (this._panAxis === "y" && h.axis === "y") {
                    if (this.model.selectedItem) {
                        this.model.selectedItem.unselect()
                    }
                }
            }
        },
        _onCloseClick: function(h) {
            h.stopPropagation();
            h.preventDefault();
            if (this.model.selectedItem) {
                this.model.selectedItem.unselect()
            }
        },
        _onNextClick: function() {
            this.model.selectNextItem()
        },
        _onPrevClick: function() {
            this.model.selectPrevItem()
        },
        _onActiveChanged: function() {
            if (!this.model.active) {
                this._hide()
            } else {
                if (this.model.selectedItem) {
                    this._show()
                }
            }
        },
        _onSelectedItemChanged: function() {
            if (this.model.selectedItem) {
                this._updateSelectedItem();
                this._show()
            } else {
                this._hide()
            }
        },
        _onResize: function() {
            if (d.device.isMobile) {
                return
            }
            this.$el.css({
                height: this.model.getDetailHeight() + "px"
            })
        }
    })
}(DDG);
! function(d) {
    var c = d.Views.Base,
        a = 16,
        e = 200,
        b = 500;
    d.Views.AnswerBar.DetailSliderPane = function(f) {
        this.answer = f.answer;
        this._pos = f.pos;
        this.detailView = f.detailView;
        c.call(this, f);
        this.bindEvents([
            [this.answer, "change:expanded", this._onExpandedChanged],
            [d.device, "resize", this._onResize]
        ])
    };
    d.Views.AnswerBar.DetailSliderPane.prototype = $.extend({}, c.prototype, {
        template: "detail_slider_pane",
        resetPosition: function(g, f) {
            if (this._pos === g && !this._translateX) {
                return
            }
            this._prevX = this._getLeft();
            this._translateX = 0;
            this._pos = g;
            if (d.device.isMobile && $.Velocity) {
                this._transitionPosition(f)
            } else {
                this._updatePosition()
            }
        },
        translateX: function(f) {
            if (this._translateX === f) {
                return
            }
            this._prevX = this._getLeft();
            this._translateX = f;
            this._updatePosition()
        },
        setZoom: function(g, f) {
            this.views.detail && this.views.detail.setZoom && this.views.detail.setZoom(g, f)
        },
        setPan: function(f, h, g) {
            this.views.detail && this.views.detail.setPan && this.views.detail.setPan(f, h, g)
        },
        getPanDimensions: function() {
            if (this.views.detail && this.views.detail.getPanDimensions) {
                return this.views.detail.getPanDimensions()
            }
        },
        _render: function() {
            c.prototype._render.call(this, this._getMeasurements());
            var f = this.model.getItemDetailTemplate();
            this.views.detail = new d.Views.AnswerBar[this.detailView]({
                model: this.model,
                answer: this.answer,
                template: f,
                parentPadding: a,
                appendTo: this.$el
            });
            this._prevX = this._getLeft();
            this._updatePosition();
            this.$el.css({
                display: "block"
            });
            if (!$.Velocity) {
                d.require("velocity", function() {
                    this._updatePosition()
                }.bind(this))
            }
        },
        _updateDOM: function() {
            this.$el.css(this._getMeasurements())
        },
        _updatePosition: function() {
            var f = this._getLeft();
            if ($.Velocity) {
                this.$el.velocity("stop");
                $.Velocity.hook(this.$el, "translateX", f + "px")
            } else {
                var g = "translateX(" + f + "px)";
                this.$el.css({
                    transform: g,
                    "-webkit-transform": g,
                    "-moz-transform": g,
                    "-ms-transform": g,
                    "-o-transform": g
                })
            }
        },
        _transitionPosition: function(g) {
            g = g || 1;
            var j = this._getLeft(),
                i = this._prevX,
                h = j - i,
                f = g ? (Math.abs(h) / (g * 100) * 100) : d.animation_speed;
            f = Math.max(Math.min(f, b), e);
            this.$el.velocity("stop").velocity({
                translateX: [j, i]
            }, {
                easing: "ease-out",
                duration: Math.round(f)
            })
        },
        _getLeft: function() {
            var f = (this._pos || 0) * d.device.width;
            if (this._translateX) {
                f += this._translateX
            }
            return f
        },
        _getMeasurements: function() {
            var h = d.device,
                k = h.isMobile,
                j = h.isMobilePortrait(),
                n = k ? d.device.height : this.answer.getDetailHeight(),
                m = a,
                p = m * 2,
                i = h.isMobile ? m : this.answer.expanded ? m : m + h.gutterSize(),
                o = j ? p : m,
                f = n - o - m,
                g = d.device.width;
            g -= (m + i);
            return {
                lineHeight: f + "px",
                height: f + "px",
                width: g + "px",
                padding: [o, m, m, i].join("px ") + "px"
            }
        },
        _onExpandedChanged: function() {
            this._updateDOM()
        },
        _onResize: function() {
            this._updateDOM();
            this._updatePosition()
        }
    })
}(DDG);
! function(e) {
    var c = e.Views.Base,
        d = e.Views.AnswerBar.Answers,
        b = "is-expanded",
        g = 0.8,
        f = 800,
        a = 1;
    d.Base = function(i) {
        this.views = {
            items: [],
            itemsById: {}
        };
        i.id = i.model.id;
        c.call(this, i);
        this._deferShow = i.deferShow;
        var h = this.model;
        this.bindEvents([
            [e.device, "resize", this._onResize],
            [e.keyboard, "escape." + this.model.id, this._onEscape],
            [h, "change:active", this._onActiveChanged],
            [h, "change:expanded", this._onExpandedChanged],
            [h, "change:items", this._onItemsChanged],
            [h, "change:isRequerying", this._onRequeryingChanged]
        ]);
        if (this.isValid()) {
            if (h.active) {
                this.show()
            }
            if (h.expanded) {
                this._expand()
            }
            if (h.items.length) {
                this._updateItems()
            }
        }
    };
    d.Base.prototype = $.extend({}, c.prototype, {
        template: "base",
        isValid: function() {
            if (this.requiredTemplates) {
                for (var n = 0; n < this.requiredTemplates.length; n++) {
                    var m = this.requiredTemplates[n],
                        h = m + "_mobile";
                    for (var k = 0; k < this.model.items.length; k++) {
                        var o = this.model.items[k];
                        if (!o.templates || (!o.templates[m] && !o.templates[h])) {
                            return false
                        }
                    }
                }
            }
            if (this.maxItems && (this.model.items.length > this.maxItems)) {
                return false
            }
            return true
        },
        show: function() {
            this.$el.addClass("is-active");
            e.keyboard.set("namespace", this.model.id);
            if (this.shouldExpandOnShow()) {
                this.model.set("expanded", 1)
            }
            if (this.model.expanded) {
                e.history.set({
                    iax: this.model.nameId
                })
            }
            if (this._showingNoResults) {
                this._fireNoResultsPixel()
            }
        },
        hide: function() {
            this.$el.removeClass("is-active");
            e.keyboard.set("namespace")
        },
        getHeight: function() {
            if (this._height) {
                return this._height
            }
            return this.$el && (this._height = this.$el.outerHeight())
        },
        getWidth: function() {
            if (this._width) {
                return this._width
            }
            return this.$el && (this._width = this.$el.width())
        },
        showNoResults: function(h) {
            if (!this.$noResults) {
                this.$noResults = e.$exec_template("no_results", h);
                this.$el.append(this.$noResults)
            }
            this._fireNoResultsPixel();
            this.$noResults.show();
            this._showingNoResults = 1
        },
        hideNoResults: function() {
            this.$noResults.hide();
            this._showingNoResults = 0
        },
        shouldExpandOnShow: function() {
            var h = this.model.meta.autoExpand && this.model.meta.autoExpandRows;
            return this._isQuerystringIAX() && !h
        },
        calculateIAHeight: function() {
            var i = viewport_height - e.get_header_height(),
                h = viewport_height < f ? a : g;
            return Math.round(i * h)
        },
        _render: function(h) {
            c.prototype._render.call(this, h);
            this.$el.click(function() {
                this.model.engaged()
            }.bind(this))
        },
        _updateItems: function() {},
        _expand: function() {
            this.$el.addClass(b);
            e.history.set({
                iax: this.model.nameId
            })
        },
        _collapse: function() {
            this.$el.removeClass(b);
            e.history.clear("iax")
        },
        _fireNoResultsPixel: function() {
            if (this.model.active) {
                e.pixel.fire("iafd", this.model.pixelId, e.duckbar.activeTabOpenType)
            }
        },
        _isQuerystringIAX: function() {
            var i = e.history.get("iax"),
                h = (i == 1 || i == 0) ? e.history.get("ia") : i;
            return (this.model.id === h || this.model.nameId === h)
        },
        _onActiveChanged: function() {
            if (this.model.active && !this._deferShow) {
                this.show()
            } else {
                this.hide()
            }
        },
        _onExpandedChanged: function() {
            if (this.model.expanded) {
                this._expand()
            } else {
                this._collapse()
            }
        },
        _onRequeryingChanged: function(j) {
            this.$el.toggleClass("is-requerying", j);
            if (!j) {
                for (var h = 0; h < this.views.items.length; h++) {
                    this.views.items[h].destroy()
                }
                this.views.items = [];
                this.views.itemsById = {}
            }
        },
        _onItemsChanged: function() {
            if (this.isValid()) {
                this._updateItems()
            }
        },
        _onResize: function() {
            this._height = null;
            this._width = null
        },
        _onEscape: function() {
            this.model.set("expanded")
        },
        _onExternalLinkClick: function(h) {
            this.model.clickedExternalLink();
            c.prototype._onExternalLinkClick.call(this, h)
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.AnswerBar.Answers,
        a = b.Base;
    b.Detail = function(d) {
        a.call(this, d)
    };
    b.Detail.prototype = $.extend({}, a.prototype, {
        template: "base",
        maxItems: 1,
        requiredTemplates: ["detail"],
        show: function() {
            a.prototype.show.call(this);
            if (this.model.items.length) {
                this.emit("item-shown", this.model.items[0])
            }
        },
        _updateItems: function() {
            if (this.views.items.length || !this.model.items.length) {
                return
            }
            var d = this.model.items[0];
            this.views.items.push(new c.Views.AnswerBar.Detail({
                model: d,
                answer: this.model,
                template: d.getDetailTemplate(),
                canExpand: true,
                canWrap: true,
                hasInfobox: !!d.infoboxData,
                appendTo: this.$el
            }));
            if (d.infoboxData) {
                this.views.infobox = new c.Views.AnswerBar.InfoBox({
                    model: this.model,
                    data: d.infoboxData,
                    appendTo: this.$el
                })
            }
            if (this.model.meta.hasAttribution()) {
                this.views.attribution = new c.Views.Attribution({
                    answer: this.model,
                    className: d.infoboxData ? "attribution-wrap--infobox" : "attribution-wrap--top",
                    direction: "bottom-left",
                    appendTo: this.$el
                })
            }
        }
    })
}(DDG);
! function(f) {
    var e = f.Views.AnswerBar.Answers,
        b = e.Base,
        g = 100,
        d = 2000,
        c = 4,
        a = 5,
        h = {
            audio_item: "AudioTile",
            places_item: "PlaceTile"
        };
    e.Tiles = function(j) {
        var i = j.model,
            k = i.id;
        this._scrollLeft = 0;
        this.noDetail = j.noDetail;
        this.bindEvents([
            [i, "change:isLoading", this._onIsLoadingChanged],
            [i, "change:failed", this._onLoadFailed],
            [i, "change:selectedItem", this._onSelectedItemChanged],
            [i, "change:isRequerying", this._onIsRequeryingChanged],
            [i, "no-results", this.removeLoadMore],
            [f.keyboard, "left." + k, this.selectPrevItem],
            [f.keyboard, "right." + k, this.selectNextItem]
        ]);
        b.call(this, j);
        this._updateLoadingMore();
        if (this.model.failed) {
            this._onLoadFailed()
        }
    };
    e.Tiles.prototype = $.extend({}, b.prototype, {
        template: "tiles",
        requiredTemplates: ["item"],
        destroy: function() {
            clearTimeout(this._expandTimeout);
            clearTimeout(this._flickTimeout);
            b.prototype.destroy.call(this)
        },
        _updateItems: function() {
            if (!this.model.items.length) {
                return this.showNoResults()
            } else {
                if (this._showingNoResults) {
                    this.hideNoResults()
                }
            }
            this.removeLoadMore();
            for (var j = 0; j < this.model.items.length; j++) {
                var k = this.model.items[j];
                k.num = k.num || j + 1;
                if (!this.views.itemsById[k.id]) {
                    this._appendItem(k)
                }
            }
            if (this.model.meta.next) {
                this.addLoadMore()
            }
            delete this._height;
            this._updateScrollNav();
            this._selectItemFromQuerystring()
        },
        _appendItem: function(k) {
            var i = k.getItemTemplate(),
                m = h[i] || "Tile",
                j = new f.Views.AnswerBar[m]({
                    model: k,
                    answer: this.model,
                    noDetail: this.noDetail,
                    appendTo: this.$jsTiles
                });
            this.views.items.push(j);
            this.views.itemsById[k.id] = j;
            j.width = this.getTileWidth(j)
        },
        show: function() {
            b.prototype.show.call(this);
            var i = this.model;
            this._updateWidths();
            if (i.selectedItem) {
                f.history.set({
                    iai: i.getQuerystringItemId(i.selectedItem)
                })
            }
            this._onResize();
            if (this.views.items.length) {
                this._selectItemFromQuerystring();
                this._selectItemFromMeta()
            }
            this.model.items.map(function(j) {
                if (j.visible) {
                    this.emit("item-shown", j)
                }
            }.bind(this))
        },
        hide: function() {
            clearTimeout(this._flickTimeout);
            clearTimeout(this._expandTimeout);
            b.prototype.hide.call(this)
        },
        shouldExpandOnShow: function() {
            return false
        },
        selectNextItem: function() {
            this.model.selectNextItem();
            if (this.model.indexOfSelectedItem() >= (this.model.items.length - 1)) {
                this.model.loadMore()
            }
        },
        selectPrevItem: function() {
            this.model.selectPrevItem()
        },
        getTileWidth: function(i) {
            if (i.$el) {
                var j = this.model.meta;
                if (j.variableTileWidth || j.itemsWidthVaries || j.itemsExpand) {
                    return i.$el.outerWidth() + (this.getTileMargins().x * 2)
                }
                if (!this.tileWidth) {
                    this.tileWidth = i.$el.outerWidth() + (this.getTileMargins().x * 2)
                }
            }
            return this.tileWidth
        },
        getSelectedTileWidth: function() {
            return this.model.selectedItem && this.getTileWidth(this.views.itemsById[this.model.selectedItem.id])
        },
        getTileMargins: function() {
            if (this._tileMargins) {
                return this._tileMargins
            }
            if (!this.views.items.length) {
                return {
                    x: 0,
                    top: 0,
                    bottom: 0
                }
            }
            return this._tileMargins = this.views.items[0].getMargins()
        },
        getLoadMoreWidth: function() {
            if (!this._showingLoadMore) {
                return 0
            }
            return this.views.items.length && this.getTileWidth(this.views.items[0])
        },
        _render: function() {
            b.prototype._render.call(this, {
                id: this.model.id,
                meta: this.model.meta
            });
            this.$tileview = this.$(".tileview");
            this.$tileWrap = this.$(".tile-wrap");
            this.$jsTiles = this.$(".js-tiles");
            this.$jsTiles.on("mousewheel", this._onMouseWheel.bind(this));
            if (window.addEventListener) {
                this.$jsTiles[0].addEventListener("wheel", this._onMouseWheel.bind(this))
            }
            this.$jsTiles.addClass("tileview__" + this.model.id);
            this.$jsTiles.bind("touchend", this._onJsTilesTouchEnd.bind(this));
            this.$loadMore = f.$exec_template("tiles_load_more", {
                id: this.model.id,
                name: this.model.name
            });
            this._onResize()
        },
        _createDetailSlider: function() {
            if (this.views.detail || this.noDetail) {
                return
            }
            this.views.detail = new f.Views.AnswerBar.DetailSlider({
                model: this.model,
                appendTo: this.$el
            })
        },
        _updateVisibleItems: function() {
            var s = this._scrollLeft - f.device.gutterSize(),
                q = s + viewport_width,
                x = 0,
                u = {
                    offscreenRight: [],
                    offscreenLeft: [],
                    visible: []
                },
                p, r, j;
            for (p = 0; r = this.views.items[p]; p++) {
                var n = x + r.width,
                    m = x,
                    k = n,
                    o = 0,
                    t = 0;
                if (m < s) {
                    u.offscreenLeft.push(r);
                    if (k > s) {
                        t = 1
                    }
                } else {
                    if (k > q) {
                        u.offscreenRight.push(r);
                        if (m < q) {
                            t = 1
                        }
                    } else {
                        o = 1;
                        u.visible.push(r)
                    }
                }
                j = (o || t) && this.model.active && !r.model.visible;
                r.model.set({
                    visible: o,
                    partiallyVisible: t
                });
                x += r.width;
                if (j) {
                    this.emit("item-shown", r.model)
                }
            }
            if (this._showingLoadMore) {
                var v = {
                    width: this.getLoadMoreWidth()
                };
                if (x + v.width > q) {
                    v.visible = 0;
                    u.offscreenRight.push(v)
                } else {
                    v.visible = 1;
                    u.visible.push(v)
                }
            }
            return u
        },
        _selectItemFromQuerystring: function() {
            var i = this.model,
                m = f.history.get("iai"),
                k = f.history.get("ia"),
                j;
            if (!i.active || i.selectedItem) {
                return
            }
            if (k === i.nameId && typeof m !== "undefined") {
                j = i.itemsById[m];
                if (!j && $.isNumeric(m)) {
                    j = i.items[m]
                }
                if (j) {
                    if (this._rowsToShow && !j.visible) {
                        this._loadMore()
                    }
                    j.select();
                    this._scrollToTile(this.views.itemsById[j.id], {
                        animated: false
                    })
                } else {
                    if (i.meta.next) {
                        this._loadMore()
                    }
                }
            }
        },
        _selectItemFromMeta: function() {
            var i = this.model,
                k = i.meta;
            if (!i.active || i.selectedItem) {
                return
            }
            if (!i.selectedItem && k.selectedItem) {
                var j = i.itemsById[k.selectedItem];
                if (!j) {
                    j = i.items[k.selectedItem]
                }
                j && j.select();
                this._scrollToTile(this.views.itemsById[j.id], {
                    animated: false
                })
            }
        },
        _updateScrollNav: function() {
            if (!this.views.items.length || !this.model.active) {
                return
            }
            if (!this.$leftScrollNav) {
                this.$leftScrollNav = f.$exec_template("tiles_scroll_nav", {
                    dir: "prev"
                });
                this.$rightScrollNav = f.$exec_template("tiles_scroll_nav", {
                    dir: "next"
                });
                this.$jsTiles.prepend(this.$leftScrollNav);
                this.$jsTiles.prepend(this.$rightScrollNav);
                this.$leftScrollNav.bind("click", this._onLeftScrollClick.bind(this));
                this.$rightScrollNav.bind("click", this._onRightScrollClick.bind(this))
            }
            var k = this._updateVisibleItems(),
                j = k.offscreenLeft.length,
                i = k.offscreenRight.length;
            this.$leftScrollNav.attr("data-items", j);
            this.$rightScrollNav.attr("data-items", i);
            this.$leftScrollNav.removeClass("can-scroll");
            this.$rightScrollNav.removeClass("can-scroll");
            if (j > 0) {
                this.$leftScrollNav.addClass("can-scroll")
            }
            if (i > 0) {
                this.$rightScrollNav.addClass("can-scroll")
            }
            if (this.model.active && this.model.meta.next && !this.model.expanded && i < 3) {
                this._loadMore()
            }
            this.emit("scrolled", k)
        },
        _scrollHorizontal: function(j) {
            var k = this._scrollLeft,
                q = f.device.gutterSize(),
                m = this._getTotalTileWidth(),
                o = viewport_width - q,
                r;
            if (j === "right") {
                r = Math.min(k + o, m + q)
            } else {
                r = Math.max(k - o, 0)
            }
            var p, s = 0;
            for (var n = 0, u; u = this.views.items[n]; n++) {
                if (r >= s && r <= (s + u.width)) {
                    p = u
                }
                s += u.width
            }
            if (!p && this._showingLoadMore && this.$loadMore) {
                p = {
                    "$el": this.$loadMore
                }
            }
            this._scrollToTile(p)
        },
        _scrollToTile: function(o, j) {
            if (!o || !o.$el) {
                return
            }
            var k = j && typeof j.animated !== "undefined" ? j.animated : true,
                n = this.model,
                r = n.meta,
                q = 0,
                m = 0,
                s, p = this._getTotalTileWidth() + f.device.gutterSize() + g - f.device.width;
            for (; s = this.views.items[m]; m++) {
                if (s === o) {
                    break
                }
                q += s.width
            }
            if (r.itemsExpand && m > this._lastExpandedTileIndex) {
                q -= this._lastExpandedTileDiff
            }
            q = Math.min(q, p);
            if (this._scrollLeft === q) {
                return
            }
            this._scrollLeft = q;
            if (k) {
                this._autoScrolling = true;
                this.$jsTiles.stop().animate({
                    scrollLeft: this._scrollLeft
                }, f.animation_speed, function() {
                    this._autoScrolling = false
                }.bind(this))
            } else {
                this.$jsTiles.scrollLeft(this._scrollLeft)
            }
            this._updateScrollNav()
        },
        _updateDetailViewPosition: function() {
            var k = this.model.selectedItem;
            if (!k || f.device.isMobile || !this.views.detail) {
                return
            }
            if (!this.model.expanded) {
                this.views.detail.position("auto");
                return
            }
            var j = this.views.itemsById[k.id],
                i = parseInt(j.$el.position().top, 10),
                n = this.getTileMargins(),
                m = i + parseInt(j.$el.outerHeight(), 10) + n.bottom;
            if (this.views.metabar && !this.views.metabar.isStuck() && f.settings.get("ko").match(/^(d|s|-1)$/)) {
                m += this.views.metabar.getHeight()
            }
            this.views.detail.position(m + "px")
        },
        _updateWidths: function() {
            delete this.tileWidth;
            for (var k = 0, j; j = this.views.items[k]; k++) {
                j.width = this.getTileWidth(j)
            }
        },
        _getTotalTileWidth: function() {
            var k = 0;
            for (var j = 0; j < this.views.items.length; j++) {
                k += this.views.items[j].width
            }
            k += this.getLoadMoreWidth();
            return k
        },
        showNoResults: function(i) {
            b.prototype.showNoResults.call(this, i);
            this.$leftScrollNav && this.$leftScrollNav.hide();
            this.$rightScrollNav && this.$rightScrollNav.hide();
            this.$el.addClass("has-no-results")
        },
        hideNoResults: function() {
            b.prototype.hideNoResults.call(this);
            this.$leftScrollNav && this.$leftScrollNav.show();
            this.$rightScrollNav && this.$rightScrollNav.show();
            this.$el.removeClass("has-no-results")
        },
        addLoadMore: function() {
            if (this._showingLoadMore) {
                return
            }
            if (this.model.canLoadOnScroll() && !f.device.isMobile) {
                this.$loadMore.hide()
            }
            this.$jsTiles.append(this.$loadMore);
            this.$loadMore.click(this._onLoadMoreClick.bind(this));
            this._showingLoadMore = true
        },
        removeLoadMore: function() {
            this.$loadMore.remove();
            this._showingLoadMore = false
        },
        _loadMore: function() {
            if (this.model.isLoading) {
                return
            }
            if (this._rowsToShow) {
                this.views.metabar && this.views.metabar.show();
                if (is_mobile && !this.model.canLoadOnScroll()) {
                    this._loadMoreMobile()
                } else {
                    this.$(".tile.is-hidden").removeClass("is-hidden");
                    delete this._rowsToShow;
                    if (!this.model.meta.next) {
                        this.removeLoadMore()
                    }
                }
                return
            }
            this.model.loadMore()
        },
        _loadMoreMobile: function() {
            var m, p, o = c,
                n = f.device.width,
                j = this.views.items.length,
                k = function(i) {
                    return j - i < a - 1
                };
            for (m = 0; m < j && o; m++) {
                p = this.views.items[m].$el;
                if (p.is(":visible")) {
                    continue
                }
                if (n - p.outerWidth() < 0 && !k(m)) {
                    n = f.device.width;
                    o--
                }
                if (o) {
                    p.removeClass("is-hidden");
                    n -= p.outerWidth()
                }
            }
            this._rowsToShow += c - o;
            if (this.views.items[j - 1].$el.is(":visible")) {
                delete this._rowsToShow;
                this.views.metabar && this.views.metabar.show();
                if (!this.model.meta.next) {
                    this.removeLoadMore()
                }
            }
        },
        _updateLoadingMore: function() {
            if (this.$loadMore) {
                if (this.model.isLoading) {
                    this.$loadMore.addClass("is-loading")
                } else {
                    this.$loadMore.removeClass("is-loading")
                }
            }
        },
        _updateAfterItemExpand: function() {
            clearTimeout(this._expandTimeout);
            var i = this.getSelectedTileWidth();
            this._expandTimeout = setTimeout(function() {
                this._updateWidths();
                this._updateScrollNav();
                if (this.model.selectedItem) {
                    var j = this.getSelectedTileWidth();
                    this._lastExpandedTileDiff = j - i;
                    this._lastExpandedTileIndex = this.model.indexOfSelectedItem()
                } else {
                    delete this._lastExpandedTileIndex;
                    delete this._lastExpandedTileDiff
                }
            }.bind(this), f.animation_speed + 150)
        },
        _onLeftScrollClick: function(i) {
            i.preventDefault();
            this._scrollHorizontal("left")
        },
        _onRightScrollClick: function(i) {
            i.preventDefault();
            this._scrollHorizontal("right")
        },
        _onJsTilesTouchEnd: function() {
            this._scrollLeft = this.$jsTiles.scrollLeft();
            this._updateVisibleItems();
            if (this._flickTimeout) {
                clearTimeout(this._flickTimeout)
            }
            this._flickTimeout = setTimeout(function() {
                if (this._scrollLeft !== this.$jsTiles.scrollLeft()) {
                    this._scrollLeft = this.$jsTiles.scrollLeft();
                    this._updateVisibleItems()
                }
            }.bind(this), d)
        },
        _onMouseWheel: function(k) {
            if (this._autoScrolling) {
                return
            }
            if (this.model.selectedItem) {
                var j = this.views.itemsById[this.model.selectedItem.id];
                if (j && j.hideViews) {
                    j.hideViews()
                }
            }
            var i = k.originalEvent ? (k.originalEvent.wheelDeltaX * -1) : k.deltaX;
            if (!i) {
                return
            }
            k.preventDefault();
            this.$jsTiles.scrollLeft(this._scrollLeft + i);
            this._scrollLeft = this.$jsTiles.scrollLeft();
            this._updateScrollNav();
            return false
        },
        _onEscape: function() {
            if (this.model.selectedItem) {
                this.model.selectedItem.unselect()
            } else {
                b.prototype._onEscape.call(this)
            }
        },
        _onLoadMoreClick: function(i) {
            i.preventDefault();
            this._loadMore();
            this.model.fire("iasm")
        },
        _onResize: function() {
            b.prototype._onResize.call(this);
            this._updateWidths();
            this._updateScrollNav();
            delete this._height;
            delete this._tileMargins
        },
        _onIsLoadingChanged: function() {
            this._updateLoadingMore()
        },
        _onLoadFailed: function() {
            if (!this.model.failed) {
                return
            }
            this.removeLoadMore();
            this._updateItems()
        },
        _shouldScrollToTileOnItemSelect: function() {
            if (f.device.isMobile) {
                return false
            }
            var i = this.model.selectedItem;
            return i && !i.visible
        },
        _onSelectedItemChanged: function() {
            delete this._height;
            var i = this.model,
                m = i.meta;
            if (!i.selectedItem) {
                f.history.clear("iai");
                if (m.itemsExpand) {
                    this._updateAfterItemExpand()
                }
                return
            }
            var k = i.selectedItem,
                j = this.views.itemsById[k.id];
            if (this._shouldScrollToTileOnItemSelect()) {
                this._scrollToTile(j)
            }
            if (m.itemsExpand) {
                this._updateAfterItemExpand()
            }
            if (k.canShowItemDetail() && !this.views.detail) {
                this._createDetailSlider()
            }
            this._updateDetailViewPosition()
        },
        _onIsRequeryingChanged: function(i) {
            if (i) {
                if (f.device.scrollTop() > this.$el.scrollTop()) {
                    this._scrollToTile(this.views.items[0])
                }
                delete this._rowsToShow
            }
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.AnswerBar.Answers,
        a = b.Tiles;
    b.GridTiles = function(e) {
        var d = e.model;
        a.call(this, e);
        this.bindEvents([
            [d, "change:canExpand", this._onCanExpandChanged],
            [d, "change:selectedTopic", this._onSelectedTopicChanged]
        ]);
        this._createMetaBar()
    };
    b.GridTiles.prototype = $.extend({}, a.prototype, {
        _updateItems: function() {
            a.prototype._updateItems.call(this);
            if (this._rowsToShow) {
                this._updateHiddenRows()
            }
        },
        _appendItem: function(e) {
            a.prototype._appendItem.call(this, e);
            if (c.device.isMobile) {
                var d = this.views.items[this.views.items.length - 1];
                this.bindEvents([
                    [d, "rerender", this._updateHiddenRows]
                ])
            }
        },
        shouldExpandOnShow: function() {
            var d = this.model.meta.autoExpand && this.model.meta.autoExpandRows;
            return this.model.canExpand && this._isQuerystringIAX() && !d
        },
        _shouldScrollToTileOnItemSelect: function() {
            var e = this.model,
                f = e.selectedItem,
                d = c.device.isMobile,
                g = e.expanded && !d;
            return g || !f.visible
        },
        show: function() {
            a.prototype.show.call(this);
            var d = this.model,
                e = d.meta;
            if (!d.expanded && d.canExpand) {
                if (e.autoExpand) {
                    this.model.set("expanded", 1);
                    if (e.autoExpandRows) {
                        this._rowsToShow = e.autoExpandRows;
                        this._updateHiddenRows();
                        this.views.metabar && this.views.metabar.hide()
                    }
                    e.autoExpand = 0
                }
            }
        },
        _updateVisibleItems: function() {
            var e = {
                    offscreenRight: [],
                    offscreenLeft: [],
                    visible: []
                },
                d, f, g;
            if (this.model.expanded) {
                for (d = 0; f = this.views.items[d]; d++) {
                    g = this.model.active && !f.model.visible;
                    f.model.set({
                        visible: 1,
                        partiallyVisible: 0
                    });
                    e.visible.push(f);
                    if (g) {
                        this.emit("item-shown", f.model)
                    }
                }
            } else {
                e = a.prototype._updateVisibleItems.call(this)
            }
            return e
        },
        _collapse: function() {
            a.prototype._collapse.call(this);
            if (this.model.selectedItem) {
                this.model.selectedItem.unselect()
            }
            c.device.scrollTop(0);
            if (is_mobile) {
                this.emit("close");
                return
            }
            this.$jsTiles.removeClass("has-tiles--grid").addClass("has-tiles");
            this.$tileview.removeClass("tileview--grid").addClass("tileview");
            delete this._height;
            delete this._tileMargins;
            this._updateScrollNav()
        },
        _expand: function() {
            a.prototype._expand.call(this);
            this.$tileview.removeClass("tileview").addClass("tileview--grid");
            this.$jsTiles.removeClass("has-tiles").addClass("has-tiles--grid");
            this._updateVisibleItems();
            delete this._height;
            delete this._tileMargins;
            if (this.views.detail && this.model.selectedItem) {
                this._updateDetailViewPosition();
                this._scrollToTile(this.views.itemsById[this.model.selectedItem.id])
            }
        },
        getHeight: function(e) {
            var d = a.prototype.getHeight.call(this, e);
            return (e && e.subtractMenu && this.views.metabar) ? d - this.views.metabar.getHeight() : d
        },
        setIARequery: function() {
            c.hidden.set("iar", this.model.id)
        },
        clearIARequery: function() {
            c.hidden.clear("iar")
        },
        _createMetaBar: function() {
            if (this.views.metabar) {
                return
            }
            this.views.metabar = new c.Views.AnswerBar.Meta.MetaBar($.extend({
                model: this.model,
                parent: this,
                before: this.$tileWrap
            }, this.model.meta));
            this.views.metabar.on("stuck", this._onMetabarStuckChanged.bind(this));
            this.views.metabar.on("close", this.emit.bind(this, "close"))
        },
        _scrollToTile: function(g, e) {
            if (!g || !g.$el) {
                return
            }
            var f = e && typeof e.animated !== "undefined" ? e.animated : true,
                d = this.model;
            if (!d.expanded) {
                a.prototype._scrollToTile.call(this, g, e)
            } else {
                var i = g.$el.offset().top,
                    h = this.getTileMargins(),
                    j = Math.max(i - h.top - h.bottom, 0);
                if (this.views.metabar) {
                    j -= this.views.metabar.getHeight()
                }
                if (c.isHeaderFixed) {
                    j -= c.get_header_height()
                }
                j = Math.round(j);
                if (is_mobile_device || !f) {
                    c.device.scrollTop(j)
                } else {
                    c.device.scrollTop(j, true)
                }
            }
        },
        _updateHiddenRows: function() {
            if (!this.model.expanded || !this._rowsToShow) {
                return
            }
            var j = 0,
                e = null,
                f = 0,
                h, d, g = 0;
            for (; h = this.views.items[g]; g++) {
                if (f) {
                    h.hide();
                    continue
                }
                if (h.model.gridRow) {
                    j = h.model.gridRow
                } else {
                    d = h.$el.position().top;
                    if (e === null || d !== e) {
                        j++;
                        e = d
                    }
                }
                if (j > this._rowsToShow) {
                    f = 1;
                    h.hide();
                    continue
                }
                h.show()
            }
            f && this.addLoadMore()
        },
        _getGridTileAt: function(d, h) {
            d = d || 0;
            h = h || 0;
            for (var f = 0, e; e = this.views.items[f]; f++) {
                var g = e.$el.offset();
                if (g.left >= d && g.top >= h) {
                    return e
                }
            }
            return null
        },
        _scrollToSelectedTopic: function() {
            if (!this.model.selectedTopic) {
                return
            }
            this._scrollToTile(this.views.itemsById[this.model.selectedTopic.items[0].id])
        },
        _onCanExpandChanged: function() {
            if (this.model.expanded && !this.model.canExpand) {
                this.model.set("expanded")
            }
        },
        _onMetabarStuckChanged: function() {
            if (this.model.expanded && !c.device.isMobile) {
                this._updateDetailViewPosition()
            }
        },
        _onResize: function() {
            a.prototype._onResize.call(this);
            this._updateHiddenRows();
            this._updateDetailViewPosition()
        },
        _onSelectedTopicChanged: function() {
            var d = this.model.selectedTopic;
            this.$(".active-topic").removeClass("active-topic");
            if (d) {
                var g = this.views.itemsById;
                this._scrollToSelectedTopic();
                DDG.addClass(this.model.id, this.$el, "at-topic");
                for (var e = 0; e < d.items.length; e++) {
                    var f = g[d.items[e].id];
                    f.$el.addClass("active-topic")
                }
            } else {
                DDG.removeClass(this.model.id, this.$el, "at-topic")
            }
        },
        _onJsTilesTouchEnd: function() {
            if (!this.model.expanded) {
                a.prototype._onJsTilesTouchEnd.call(this)
            }
        },
        _onMouseWheel: function(d) {
            if (!this.model.expanded) {
                a.prototype._onMouseWheel.call(this, d)
            }
        }
    })
}(DDG);
! function(f) {
    var e = f.Views.AnswerBar.Answers,
        c = e.GridTiles,
        j = 163,
        k = 60,
        a = 120,
        g = 48,
        i = 240,
        h = 2,
        d = 300;
    e.Images = function(m) {
        this.scrollHandler = this._onScroll.bind(this);
        c.call(this, m)
    };
    e.Images.prototype = $.extend({}, c.prototype, {
        requiredTemplates: null,
        show: function() {
            if (!is_mobile_device) {
                f.device.on("scroll", this.scrollHandler)
            }
            if (this.model.expanded) {
                this.setIARequery()
            }
            c.prototype.show.call(this)
        },
        hide: function() {
            f.device.removeListener("scroll", this.scrollHandler);
            this.clearIARequery();
            f.keyboard.clear("nativeUpDown");
            c.prototype.hide.call(this)
        },
        showNoResults: function() {
            var n = {},
                m = this.model.name;
            if (window.iqbi && !f.settings.safeSearch.isOff() && !f.history.get("iaf")) {
                n.message = l("%s blocked by safe search.", m)
            }
            c.prototype.showNoResults.call(this, n)
        },
        _updateItems: function() {
            c.prototype._updateItems.call(this);
            if (this.model.expanded) {
                this._recalcTileGridDimensions();
                this._updateTileWidths();
                this._checkLoadMore()
            }
            this._updateHiddenRows();
            delete this._height;
            this._updateDetailViewPosition()
        },
        _appendItem: function(o) {
            var m = is_mobile ? g : k,
                n = is_mobile ? a : j;
            o.loadHighRes = !is_mobile;
            if ((o.width > m) && (o.height > n)) {
                o.tileWidth = Math.ceil((n / o.height) * o.width)
            } else {
                if (o.width > m) {
                    o.tileWidth = o.width
                } else {
                    o.tileWidth = m
                }
            }
            c.prototype._appendItem.call(this, o)
        },
        getTileWidth: function(m) {
            return m.model.tileWidth + (this.getTileMargins().x * 2)
        },
        getLoadMoreWidth: function() {
            return this._loadMoreTileWidth || i
        },
        _expand: function() {
            this.$jsTiles.css("width", this.getWidth());
            if (this.model.id === "images") {
                if (!f.device.isMobile || !this.model.meta.autoExpandRows) {
                    this.$el.css("min-height", f.device.height - f.get_header_height())
                }
            }
            c.prototype._expand.call(this);
            this._recalcTileGridDimensions();
            this._updateTileWidths();
            f.history.set({
                ia: this.model.id
            });
            this._checkLoadMore();
            if (!this.model.meta.autoExpandRows) {
                this.setIARequery()
            }
            f.keyboard.set("nativeUpDown", true)
        },
        _collapse: function() {
            c.prototype._collapse.call(this);
            this._clearMinHeight();
            this._toggleTrailingTileVisibility();
            this.$jsTiles.css("width", "auto");
            this._updateTileWidths();
            this.clearIARequery();
            f.keyboard.clear("nativeUpDown")
        },
        _clearMinHeight: function() {
            if (!f.device.isMobile && f.settings.isDefault("kc")) {
                this.$el.css("min-height", "")
            }
        },
        _recalcTileGridDimensions: function() {
            if (!this.views.items.length) {
                return
            }
            var r = [],
                o = 0,
                m = this.getWidth(),
                t = this.getTileMargins().x * 2,
                n = 1,
                s, u, q = 0;
            for (var p = 0; s = this.views.items[p]; p++) {
                u = s.model;
                u.gridWidth = u.tileWidth;
                delete u.killMinWidth;
                o += u.gridWidth + t;
                r.push(u);
                u.gridRow = n;
                if (o > m) {
                    b(r, o - m);
                    o = 0;
                    r = [];
                    n++
                }
                if (u.selected) {
                    q = n
                }
            }
            if (n > 1) {
                this._toggleTrailingTileVisibility(n, m - o, q)
            }
        },
        _toggleTrailingTileVisibility: function(m, q, o) {
            var p;
            for (var n = 0; p = this.views.items[n]; n++) {
                if (p.model.gridRow === m && q > k && o !== m) {
                    p.model.set({
                        hidden: 1
                    });
                    p.$el.addClass("is-hidden")
                } else {
                    if (p.model.hidden) {
                        delete p.model.hidden;
                        p.$el.removeClass("is-hidden")
                    }
                }
            }
        },
        _updateTileWidths: function() {
            var p = this.getTileMargins(),
                o;
            for (var m = 0, n; n = this.views.items[m]; m++) {
                if (n.$el) {
                    o = n.model;
                    n.$el.css({
                        width: this.model.expanded ? o.gridWidth : o.tileWidth,
                        marginLeft: p.x + "px",
                        marginRight: p.x + "px"
                    });
                    if (o.killMinWidth) {
                        n.$el.css({
                            minWidth: 0
                        })
                    }
                }
            }
            if (!is_mobile) {
                this.$loadMore.css({
                    width: ((this.model.expanded) ? d : this.getLoadMoreWidth()) + "px",
                    marginLeft: (this.model.expanded) ? "auto" : p.x + "px",
                    marginRight: (this.model.expanded) ? "auto" : p.x + "px"
                })
            }
        },
        _onResize: function() {
            this._width = null;
            this.$jsTiles.css("width", this.getWidth());
            c.prototype._onResize.call(this);
            if (this.views.items.length && this.model.expanded) {
                this._recalcTileGridDimensions();
                this._updateTileWidths();
                this._updateDetailViewPosition();
                this._checkLoadMore()
            }
        },
        _onScroll: function() {
            this._checkLoadMore()
        },
        _checkLoadMore: function() {
            if (!this.model.canLoadOnScroll()) {
                return
            }
            var o = f.device,
                p = this.views.items.length - 1,
                n = this.views.items[p],
                q = (o.height - (f.get_header_height() + this.views.metabar.getHeight())),
                m = ((q + o.scrollTop()) / j) + h;
            if (n && n.model.gridRow < m) {
                this.model.loadMore()
            }
        },
        _onLoadMoreClick: function(m) {
            if (f.device.isMobile) {
                this.setIARequery()
            }
            c.prototype._onLoadMoreClick.call(this, m)
        }
    });
    var b = function(n, t) {
        var q = Math.floor(t / n.length),
            r = is_mobile ? g : k;
        for (var m = 0, p; p = n[m]; m++) {
            var o = q;
            if (p.gridWidth - q < r) {
                o = p.gridWidth - r
            }
            p.gridWidth -= o;
            t -= o
        }
        var s = Math.ceil(t);
        for (m = 0; p = n[m]; m++) {
            if (p.gridWidth - s > r) {
                p.gridWidth -= s;
                break
            } else {
                if (m === n.length - 1) {
                    p.gridWidth -= s;
                    p.killMinWidth = 1
                }
            }
        }
    }
}(DDG);
! function(c) {
    var b = c.Views.AnswerBar.Answers,
        a = b.GridTiles;
    b.Videos = function(d) {
        a.call(this, d)
    };
    b.Videos.prototype = $.extend({}, a.prototype, {
        show: function() {
            if (this.model.expanded) {
                this.setIARequery()
            }
            a.prototype.show.call(this)
        },
        hide: function() {
            this.clearIARequery();
            a.prototype.hide.call(this)
        },
        showNoResults: function() {
            var e = {},
                d = this.model.name;
            if (window.iqbi && !c.settings.safeSearch.isOff() && !c.history.get("iaf")) {
                e.message = l("%s blocked by safe search.", d)
            }
            a.prototype.showNoResults.call(this, e)
        },
        _expand: function() {
            if (!this.model.meta.autoExpandRows) {
                this.setIARequery()
            }
            if (!c.device.isMobile || !this.model.meta.autoExpandRows) {
                this.$el.css("min-height", c.device.height - c.get_header_height())
            }
            a.prototype._expand.call(this)
        },
        _collapse: function() {
            this.clearIARequery();
            this._clearMinHeight();
            a.prototype._collapse.call(this)
        },
        _clearMinHeight: function() {
            if (!c.device.isMobile && c.settings.isDefault("kc")) {
                this.$el.css("min-height", "")
            }
        },
        _onLoadMoreClick: function(d) {
            if (c.device.isMobile) {
                this.setIARequery()
            }
            a.prototype._onLoadMoreClick.call(this, d)
        }
    })
}(DDG);
! function(e) {
    var d = e.Views.AnswerBar.Answers,
        b = d.Base,
        c = {
            images: {
                mobile: 185,
                desktop: 216
            },
            forecast: {
                mobile: 395,
                desktop: 281
            },
            nlp_qa: {
                mobile: 133,
                desktop: 253
            },
            products: {
                mobile: 279,
                desktop: 269
            },
            recipes: {
                mobile: 251,
                desktop: 205,
                desktopTall: 268
            },
            sound_cloud: {
                mobile: 330,
                desktop: 311
            },
            time: {
                mobile: 154,
                desktop: 154
            },
            videos: {
                mobile: 250.5,
                desktop: 238,
                desktopTall: 272
            }
        },
        a = 190;
    d.Placeholder = function(f) {
        this.signalWait = f.signalWait;
        this.timeAdded = new Date().getTime();
        b.call(this, f);
        this.show();
        this.updateHeight()
    };
    d.Placeholder.prototype = $.extend({}, b.prototype, {
        updateHeight: function() {
            var h = c[this.signalWait],
                g = e.device,
                f;
            if (h) {
                if (g.isMobile) {
                    f = h.mobile || a
                } else {
                    if (g.isTeapot()) {
                        f = h.desktop || a
                    } else {
                        f = h.desktopTall || h.desktop || a
                    }
                }
            }
            this.$el.height(f)
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.AnswerBarMenuItem = function(c) {
        a.call(this, c);
        this.$link = this.$(".js-zci-link");
        this.bindEvents([
            [this.model, "change:active", this._onActiveChanged],
            [this.model, "change:visible", this._onVisibleChanged],
            [this.$link, "click", this._onClick]
        ])
    };
    b.Views.AnswerBarMenuItem.prototype = $.extend({}, a.prototype, {
        template: "duckbar_tab",
        _render: function() {
            a.prototype._render.call(this, this.model)
        },
        _onClick: function(c) {
            c.preventDefault();
            this.model.toggle()
        },
        _onActiveChanged: function(c) {
            this.$link.toggleClass("is-active", c)
        },
        _onVisibleChanged: function(c) {
            this.$el.toggleClass("is-hidden", !c)
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.AnswerBarMenu = function(c) {
        a.call(this, c);
        this.views.items = [];
        this.views.itemsById = {};
        this.bindEvents([
            [this.model, "change:items", this._onItemsChanged]
        ])
    };
    b.Views.AnswerBarMenu.prototype = $.extend({}, a.prototype, {
        template: "answerbar_tabs",
        _render: function(c) {
            a.prototype._render.call(this, c);
            this.$staticWrap = this.$("#duckbar_static");
            this.$newItem = this.$("#duckbar_new");
            this.$sep = this.$("#duckbar_dynamic_sep")
        },
        _onItemsChanged: function() {
            this.model.items.forEach(function(c) {
                if (this.views.itemsById[c.id]) {
                    return
                }
                this._addItem(c)
            }.bind(this))
        },
        _addItem: function(d) {
            var e;
            if (d.type === "static") {
                e = this.$staticWrap
            } else {
                e = this.$newItem;
                this.$sep.removeClass("is-hidden")
            }
            var c = new b.Views.AnswerBarMenuItem({
                appendTo: e,
                model: d
            });
            this.views.items.push(c);
            this.views.itemsById[d.id] = c;
            e.addClass("has-zci")
        }
    })
}(DDG);
! function(b) {
    var a = b.Models.Base;
    b.Models.MapboxGLMap = function(c) {
        this.locations = c.locations || [c.selectedLocation];
        this.selectedLocation = c.selectedLocation || c.locations[0];
        this.pixelId = c.pixelId;
        this.isSatellite = false;
        a.call(this, c)
    };
    b.Models.MapboxGLMap.prototype = $.extend({}, a.prototype, {
        getBounds: function() {
            var e = [];
            for (var c = 0; c < this.locations.length; c++) {
                if (this.locations[c].bbox) {
                    e.push([this.locations[c].bbox[0], this.locations[c].bbox[1]]);
                    e.push([this.locations[c].bbox[2], this.locations[c].bbox[3]])
                } else {
                    e.push([this.locations[c].lon, this.locations[c].lat])
                }
            }
            var d = e.reduce(function(f, g) {
                return f.extend(g)
            }, new w.mapboxgl.LngLatBounds(e[0], e[0]));
            return d
        },
        getUOM: function() {
            var c = "metric";
            if (!b.settings.isDefault("kaj")) {
                c = b.settings.get("kaj") === "m" ? "metric" : "imperial"
            } else {
                if (b.settings.region.hasRegion()) {
                    c = b.settings.region.hasUSRegion() ? "imperial" : "metric"
                } else {
                    if (w.ct === "US") {
                        c = "imperial"
                    }
                }
            }
            return c
        },
        zoomIn: function() {
            this.emit("zoom-in")
        },
        zoomOut: function() {
            this.emit("zoom-out")
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.Mapbox.CloseControl = function(c) {
        a.call(this, c)
    };
    b.Views.Mapbox.CloseControl.prototype = $.extend({}, a.prototype, {
        template: "mapbox_close_control",
        show: function() {
            this.$el.show()
        },
        hide: function() {
            this.$el.hide()
        },
        _render: function(c) {
            a.prototype._render.call(this, c);
            this.bindEvents([
                [this.$el, "click", this._onClick]
            ])
        },
        _onClick: function(c) {
            c.preventDefault();
            c.stopPropagation();
            this.model.set("isMapExpanded", false);
            this.model.engaged()
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.Mapbox.ZoomControl = function(c) {
        this.model = c.model;
        a.call(this, c);
        this.bindEvents([
            [".js-mapbox-zoom-in", "click", this._onZoomIn],
            [".js-mapbox-zoom-out", "click", this._onZoomOut]
        ])
    };
    b.Views.Mapbox.ZoomControl.prototype = $.extend({}, a.prototype, {
        template: "mapbox_zoom_control",
        hide: function() {
            this.$el.hide()
        },
        show: function() {
            this.$el.show()
        },
        _onZoomIn: function() {
            this.model.zoomIn()
        },
        _onZoomOut: function() {
            this.model.zoomOut()
        }
    })
}(DDG);
! function(c) {
    var a = c.Views.Base,
        b = c.Views.Mapbox;
    b.ModeControl = function(d) {
        this.model = d.model;
        a.call(this, d);
        this.bindEvents([
            [this.model, "change:isSatellite", this._rerender]
        ])
    };
    b.ModeControl.prototype = $.extend({}, a.prototype, {
        template: "mapbox_mode_control",
        hide: function() {
            this.$el.addClass("is-hidden")
        },
        show: function() {
            this.$el.removeClass("is-hidden")
        },
        _render: function(d) {
            a.prototype._render.call(this, this.model);
            this.bindEvents([
                [this.$el, "click", this._onClick]
            ])
        },
        _onClick: function() {
            this.model.set("isSatellite", !this.model.isSatellite)
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.MapDetail = function(c) {
        this.answer = c.answer;
        a.call(this, c);
        this.bindEvents([
            [this.$address, "click", this._onLinkClick],
            [this.$title, "click", this._onLinkClick],
            [this.$el, "click", this._onClick]
        ])
    };
    b.Views.MapDetail.prototype = $.extend({}, a.prototype, {
        template: "map_detail",
        _render: function(c) {
            a.prototype._render.call(this, this.model);
            this._cacheElems(".js-map-detail", ["title", "dir", "dir-link", "address"]);
            this.views.directions = new b.Views.Dropdowns.DirectionDropdown({
                appendTo: this.$dir,
                $link: this.$dirlink,
                loc: this.model,
                answer: this.answer,
                horizontalPos: "center",
                verticalPos: "bottom",
                showOnMap: this.model.showOnMap,
                showSelected: true,
                pixelId: this.answer.pixelId
            });
            if (!b.mapbox.canUseGL()) {
                this.views.directions.on("change", this._updateMapLinks.bind(this));
                this._updateMapLinks()
            }
        },
        _updateMapLinks: function() {
            var e = b.directionSource.getMapURL(this.model),
                c = b.get_favicon_url(b.directionSource.selected.faviconURL || e),
                d = b.directionSource.selected.name;
            this.$address.attr("href", e).attr("title", "Open in " + d);
            this.$(".js-dropdown-button").text(d);
            this.$(".js-maps-module-favicon img").attr("src", c)
        },
        updateDropdownPosition: function(c) {
            this.views.directions && this.views.directions.changeVerticalPos(c)
        },
        _onClick: function() {
            this.answer.engaged()
        },
        _onLinkClick: function(c) {
            this.answer.engaged();
            if (b.mapbox.canUseGL()) {
                c.preventDefault();
                c.stopPropagation();
                this.answer.set("isMapExpanded", true);
                this.answer.fire("iacg");
                return false
            }
            this.answer.clickedExternalLink();
            return a.prototype._onExternalLinkClick.call(this, c)
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.Mapbox.GLMap = function(c) {
        this.model = c.model;
        a.call(this, c);
        this.bindEvents([
            [this.model, "change:isSatellite", this._onIsSatelliteChange],
            [this.model, "zoom-in", this._onZoomIn],
            [this.model, "zoom-out", this._onZoomOut],
            [b.device, "resize", this._onResize]
        ])
    };
    b.Views.Mapbox.GLMap.prototype = $.extend({}, a.prototype, {
        template: "mapbox_gl_map",
        hide: function() {
            this.$el.addClass("is-hidden")
        },
        show: function() {
            this.$el.removeClass("is-hidden");
            if (this._mapLoaded) {
                this.fitBounds()
            }
            if (this._needsResize) {
                this.views.map.resize();
                delete this._needsResize
            }
        },
        fitBounds: function() {
            this.views.map.setCenter([this.model.selectedLocation.lon, this.model.selectedLocation.lat]);
            this.views.map.fitBounds(this.model.getBounds(), {
                padding: 60,
                maxZoom: b.mapbox.DEFAULT_ZOOM,
                duration: 0
            });
            this._lastAutoZoom = +new Date()
        },
        _onZoomIn: function() {
            this.views.map.zoomIn()
        },
        _onZoomOut: function() {
            this.views.map.zoomOut()
        },
        _render: function(c) {
            a.prototype._render.call(this, c);
            this.$map = this.$(".js-mapbox-gl-map");
            DDG.require("mapsgl", this._createMap.bind(this))
        },
        _createMarkerLayer: function() {
            if (!this._markerImage) {
                return
            }
            this.views.map.addImage("ddgMarker", this._markerImage);
            this.views.map.addSource("markers", b.mapbox.getMarkerSource(this.model.locations));
            this.views.map.addLayer(b.mapbox.getMarkerLayer())
        },
        _createMap: function() {
            b.mapbox.setGLCredentials();
            this.views.map = new w.mapboxgl.Map({
                container: this.$map[0],
                style: b.mapbox.getStyleUrl(this.model.isSatellite),
                center: [this.model.selectedLocation.lon, this.model.selectedLocation.lat],
                zoom: b.mapbox.DEFAULT_ZOOM
            });
            this.fitBounds();
            this.views.scale = new w.mapboxgl.ScaleControl({
                unit: this.model.getUOM()
            });
            this.views.map.addControl(this.views.scale, "bottom-right");
            this.bindEvents([
                [this.views.map, "load", this._onMapLoaded],
                [this.views.map, "zoomstart", this._onMapZoomStart],
                [this.views.map, "dragstart", this._onDragStart],
                [this.views.map, "style.load", this._onStyleLoad]
            ])
        },
        _onMapLoaded: function() {
            this._mapLoaded = true;
            this.$map.removeClass("is-loading");
            this.views.map.loadImage(b.mapbox.getMarkerIcon(), this._onIconLoaded.bind(this))
        },
        _onIconLoaded: function(d, c) {
            this._markerImage = c;
            this._createMarkerLayer()
        },
        _onMapZoomStart: function() {
            var c = +new Date();
            if (c - this._lastAutoZoom > 500) {
                this.emit("map-engaged");
                this._lastAutoZoom = c
            }
        },
        _onDragStart: function() {
            this.emit("map-engaged")
        },
        _onIsSatelliteChange: function(c) {
            this.$el.toggleClass("is-satellite", c);
            this.$map.addClass("is-loading");
            this.views.map.setStyle(b.mapbox.getStyleUrl(c))
        },
        _onStyleLoad: function() {
            if (!this._mapLoaded) {
                return
            }
            this.$map.removeClass("is-loading");
            this._createMarkerLayer()
        },
        _onResize: function() {
            this._needsResize = true
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.Mapbox.StaticMap = function(c) {
        a.call(this, c);
        this.bindEvents([
            [this.$el, "click", this._onClick]
        ])
    };
    b.Views.Mapbox.StaticMap.prototype = $.extend({}, a.prototype, {
        template: "mapbox_static_map",
        hide: function() {
            this.$el.hide()
        },
        show: function() {
            this.$el.show()
        },
        _render: function(c) {
            c.url = b.mapbox.getStaticImageURL(c);
            a.prototype._render.call(this, c)
        },
        _onClick: function() {
            this.emit("click")
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.Attribution = function(c) {
        this.answer = c.answer;
        this.direction = c.direction;
        a.call(this, c);
        this.$(".js-attribution-link").click(this._onLinkClick.bind(this))
    };
    b.Views.Attribution.prototype = $.extend({}, a.prototype, {
        template: "attribution",
        _onLinkClick: function(d) {
            d.preventDefault();
            d.stopPropagation();
            if (!this.views.modal) {
                this.views.modal = new b.Views.AttributionModal({
                    answer: this.answer,
                    direction: this.direction,
                    appendTo: this.$el
                })
            }
            var c = this.views.modal;
            if (c.isShowing) {
                c.hide()
            } else {
                b.pixel.fire("iaa", this.answer.pixelId);
                c.show()
            }
            this.answer.engaged()
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Modal;
    b.Views.AttributionModal = function(c) {
        a.call(this, c)
    };
    b.Views.AttributionModal.prototype = $.extend({}, a.prototype, {
        template: "attribution_modal",
        _render: function(d) {
            var e = d.answer.meta,
                f = e.developer,
                c = false;
            f.forEach(function(g) {
                if (g && g.name && g.name !== "DDG Team" && g.name !== "DuckDuckGo" && g.name !== "duckduckgo") {
                    g.show = c = true
                }
            });
            a.prototype._render.call(this, {
                direction: d.direction,
                devs: c && f,
                meta: e
            })
        }
    })
}(DDG);
! function(d) {
    var c = d.Views.Feedback,
        b = d.Views.Base,
        e = "is-hidden",
        a = "feedback-btn--clicked";
    c.Button = function(f) {
        this.category = f.category;
        this.extraData = f.extraData || {};
        b.call(this, f)
    };
    c.Button.prototype = $.extend({}, b.prototype, {
        template: "feedback_button",
        _render: function(f) {
            b.prototype._render.call(this, f);
            this._cacheElems(".js-feedback", ["start", "love", "nolove", "icon-wrap"]);
            this.bindEvents([
                [this.$start, "click", this._onStartClick],
                [this.$love, "click", this._onLoveClick],
                [this.$nolove, "click", this._onNoLoveClick]
            ])
        },
        _addModal: function(f) {
            if (!this.views.modal) {
                this.views.modal = new c.Modal({
                    category: this.category,
                    extraInfo: $.param(this.extraData),
                    appendTo: $("body")
                });
                this.views.modal.on("hidden", this._hideFaces.bind(this))
            }
            this.views.modal.show(f)
        },
        _showFaces: function() {
            this.$iconwrap.removeClass(e);
            setTimeout(function() {
                this.$el.addClass(a)
            }.bind(this), 100)
        },
        _hideFaces: function() {
            this.$el.removeClass(a);
            setTimeout(function() {
                this.$iconwrap.addClass(e)
            }.bind(this), 200)
        },
        _onStartClick: function(f) {
            f.preventDefault();
            this._showFaces();
            d.$doc.one("click", this._onDocumentClick.bind(this));
            return false
        },
        _onDocumentClick: function(f) {
            if (!this.$love.is(f.target) && !this.$nolove.is(f.target)) {
                this._hideFaces()
            }
        },
        _onLoveClick: function(f) {
            f.preventDefault();
            this._addModal(true)
        },
        _onNoLoveClick: function(f) {
            f.preventDefault();
            this._addModal(false)
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Feedback,
        a = c.Views.Base,
        d = "is-hidden";
    b.ReportAdsButton = function(e) {
        this.category = e.category;
        this.extraData = e.extraData || {};
        this.whichAd = e.whichAd;
        a.call(this, e)
    };
    b.ReportAdsButton.prototype = $.extend({}, a.prototype, {
        template: "report_ads_button",
        _render: function(e) {
            a.prototype._render.call(this, e);
            this._cacheElems(".js-report-ad", ["start"]);
            this.bindEvents([
                [this.$start, "click", this._onAdReportClick]
            ])
        },
        _showModal: function(e) {
            if (!this.views.modal) {
                this.views.modal = new b.Modal({
                    category: "ads",
                    adInfo: JSON.stringify(e),
                    appendTo: $("body")
                })
            }
            this.views.modal.show(false);
            this.views.modal.on("submitted", this._hideReportAdButton.bind(this))
        },
        _hideReportAdButton: function() {
            this.$start.addClass(d)
        },
        _onAdReportClick: function(g) {
            g.preventDefault();
            var f = this._getAdData();
            this._showModal(f);
            f.adt = encodeURIComponent(f.adt);
            f.adsnippet = encodeURIComponent(f.adsnippet);
            c.pixel.fire("readsb", f)
        },
        _getAdData: function() {
            var e = c.page.ads.getAds();
            e = e[this.whichAd];
            return {
                whichad: this.whichAd,
                adt: e.t,
                adsrc: e.d,
                adgood: e.relevancy ? e.relevancy.is_good_v8 : 0,
                adsnippet: e.a
            }
        }
    })
}(DDG);
! function(e) {
    var d = e.Views.Feedback,
        b = e.Views.Modal,
        g = "other",
        f = "is-hidden",
        c = "is-invisible",
        a = "is-disabled";
    d.Modal = function(h) {
        this.category = h.category;
        this.extraInfo = h.extraInfo;
        this.adInfo = h.adInfo;
        b.call(this, h);
        this._endpoint = e.services.getURL("reports");
        if (e.device.isIE9) {
            nrj("/js/jquery.xdomainrequest.min.js")
        }
    };
    d.Modal.prototype = $.extend({}, b.prototype, {
        template: "feedback_modal",
        show: function(h) {
            this.$suggestionlabel.html(h ? lp("feedback form", "What did you like?") : lp("feedback form", "What could be better?"));
            this._isPositive = h;
            this.$form.removeClass(f);
            this.$success.addClass(f);
            if (!this._isPositive && this.category === "ads") {
                this.$dropdownads.removeClass(c);
                this.$dropdown.val("ads")
            }
            b.prototype.show.call(this)
        },
        _render: function(m) {
            var j = [{
                text: lp("feedback form", "Pick a category"),
                val: ""
            }];
            var h = [{
                text: lp("feedback form", "Wikipedia Info"),
                val: "about module"
            }, {
                text: lp("feedback form", "Web Links"),
                val: "organics"
            }, {
                text: lp("feedback form", "Advertisements"),
                val: "ads"
            }, {
                text: l("Images"),
                val: "images"
            }, {
                text: l("Videos"),
                val: "videos"
            }, {
                text: l("News"),
                val: "news"
            }, {
                text: lp("feedback form", "Maps / Location Info"),
                val: "maps"
            }, {
                text: l("Products"),
                val: "products"
            }, {
                text: lp("feedback form", "Search Box"),
                val: "search box"
            }, {
                text: lp("feedback form", "Settings"),
                val: "settings"
            }, {
                text: lp("feedback form", "Other"),
                val: g
            }];
            if (m.categoryName) {
                for (var k = 0; k < h.length; k++) {
                    if (h[k].val === m.category) {
                        h[k].text = m.categoryName;
                        break
                    }
                }
            }
            b.prototype._render.call(this, $.extend({}, m, {
                options: j.concat(h),
                query: e.get_query(),
                options_ads: [{
                    text: lp("feedback form", "Pick a specific problem"),
                    val: ""
                }, {
                    text: lp("feedback form", "Ad is malware"),
                    val: "malware"
                }, {
                    text: lp("feedback form", "Ad is inappropriate"),
                    val: "inappropriate"
                }, {
                    text: lp("feedback form", "Ad is suspicious"),
                    val: "suspicious"
                }, {
                    text: lp("feedback form", "Ad is irrelevant"),
                    val: "irrelevant"
                }, {
                    text: lp("feedback form", "Ad is annoying"),
                    val: "annoying"
                }, {
                    text: lp("feedback form", "Other"),
                    val: g
                }]
            }));
            this._cacheElems(".js-feedback", ["form", "success", "dropdown", "dropdownads", "dropdownads__options", "other", "otherads", "suggestion", "suggestion-label", "submit"]);
            if (this.category) {
                this.$dropdown.val(this.category)
            }
            this.bindEvents([
                [this.$dropdown, "change", this._onDropdownChange],
                [this.$dropdownads__options, "change", this._onDropdownChange],
                [this.$other, "input", this._toggleSubmitButton],
                [this.$otherads, "input", this._toggleSubmitButton],
                [this.$submit, "click", this._onSubmitClick],
                [this.$suggestion, "input", this._toggleSubmitButton]
            ])
        },
        hide: function() {
            this._reset();
            b.prototype.hide.call(this)
        },
        _showSuccessMessage: function() {
            this.$success.removeClass(f);
            this.$form.addClass(f)
        },
        _onSubmitClick: function(v) {
            v.preventDefault();
            if (this.$submit.hasClass(a)) {
                return
            }
            this.$submit.addClass(a);
            var h = e.duckbar.getActiveTab(),
                j = h ? h.pixelId : "",
                p = window.rt || "",
                t = window.dns || "",
                x = navigator.platform + " " + e.device.browserName,
                n = e.duckbar.sideModules || {};
            var A = Object.keys(n).map(function(i) {
                return i.toLowerCase() + "_module"
            }).concat([j]).join(", ");
            var o = "";
            if (DDG.first_source) {
                o = DDG.first_source
            }
            var y = "";
            if (window.r1c) {
                y = window.r1c
            }
            var u = this.$suggestion.val();
            if (this.extraInfo) {
                u += " | " + this.extraInfo
            }
            var r = {
                rating: this._isPositive ? 1 : -1,
                looking_for: this.$dropdown.val(),
                looking_for_other: this.$other.val(),
                ads_issue: this.$dropdownads__options.val(),
                ads_issue_other: this.$otherads.val(),
                comment: u,
                q: e.get_query(),
                browser: x,
                lang: e.settings.get("kad"),
                result_type: p,
                safe: e.settings.get("kp"),
                region: e.settings.get("kl"),
                spell: t,
                atb: JSON.stringify(e.opensearch.installed),
                t: e.history.get("t"),
                upstream: e.search.src,
                mobile: e.device.isMobile ? 1 : 0,
                ia: A,
                first_src: o,
                result_count: y,
                adx: e.page.ads.adx,
                df: e.search.dateFilterId,
                ct: window.ct,
                adx_name: e.page.ads.adxExperiment
            };
            var m = e.page.ads.getAds();
            var k = (r.rating === -1 && r.looking_for === "ads" && m);
            if (this.adInfo) {
                this.adInfo = JSON.parse(this.adInfo);
                r = $.extend(r, this.adInfo)
            } else {
                if (!this.adInfo && k) {
                    r.whichad = "all";
                    r.adt = "";
                    r.adsrc = "";
                    r.adsnippet = "";
                    r.adgood = "";
                    for (var q = 0; q < m.length; q++) {
                        var z = m[q],
                            s;
                        s = (q < m.length - 1) ? s = ", " : s = "";
                        r.adt += z.t + s;
                        r.adsrc += z.d + s;
                        r.adsnippet += z.a + s;
                        if (z.relevancy) {
                            r.adgood += z.relevancy.is_good_v8 + s
                        } else {
                            r.adgood += 0 + s
                        }
                    }
                }
            }
            this._sendRequest(r);
            this.emit("submitted")
        },
        _reset: function() {
            this.$submit.addClass(a);
            this.$dropdown.val("");
            this.$dropdownads.val("");
            this.$dropdownads__options.val("");
            this.$suggestion.val("");
            this.$other.val("");
            this.$otherads.val("");
            this.$dropdownads.addClass(c);
            this.$other.addClass(c);
            this.$otherads.addClass(c);
            this.adInfo = null
        },
        _sendRequest: function(i) {
            var h = {
                url: this._endpoint,
                type: "POST",
                success: function() {
                    this._reset();
                    this._showSuccessMessage()
                }.bind(this),
                error: function(j, k) {
                    this.hide();
                    this._reset();
                    throw new Error("Error sending feedback: " + k)
                }.bind(this)
            };
            if (e.device.isIE9) {
                h.url += "&" + $.param(i)
            } else {
                h.data = i
            }
            $.ajax(h)
        },
        _toggleSubmitButton: function() {
            var o = this.$suggestion.val().trim(),
                p = this.$dropdown.val(),
                j = p === g,
                i = this.$other.val().trim(),
                h = j ? i.length : p.length;
            h = h && o.length;
            if (!this._isPositive && this.$dropdown.val() === "ads" && o.length) {
                var m = this.$dropdownads__options.val(),
                    n = (m === g),
                    k = this.$otherads.val().trim();
                if (n) {
                    h = h && k.length
                } else {
                    h = h && m.length
                }
            }
            this.$submit.toggleClass(a, !h)
        },
        _onDropdownChange: function(k) {
            var j = $(k.target),
                m = j.val(),
                h = (j.hasClass("js-feedback-dropdownads__options")),
                i = (h) ? this.$otherads : this.$other;
            if (!h && !this._isPositive) {
                this.$dropdownads.toggleClass(c, !(this.$dropdown.val() === "ads"))
            }
            if (m === g) {
                i.removeClass(c)
            } else {
                i.addClass(c);
                i.val("");
                if (!h && m !== "ads") {
                    this.$otherads.addClass(c);
                    this.$otherads.val("")
                }
            }
            this._toggleSubmitButton()
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Feedback,
        a = c.Views.Base;
    b.FeedbackPrompt = function(d) {
        this.category = d.category;
        this.extraData = d.extraData || {};
        d.showYesNo = d.showYesNo !== false;
        this.categoryName = d.categoryName || false;
        a.call(this, d);
        this.bindEvents([
            [".js-feedback-prompt-yes", "click", this._onYesClicked],
            [".js-feedback-prompt-no", "click", this._onNoClicked]
        ])
    };
    b.FeedbackPrompt.prototype = $.extend({}, a.prototype, {
        template: "feedback_prompt",
        _showModal: function(d) {
            if (!this.views.modal) {
                this.views.modal = new b.Modal({
                    category: this.category,
                    categoryName: this.categoryName,
                    extraInfo: $.param(this.extraData),
                    appendTo: $("body")
                })
            }
            this.views.modal.show(d)
        },
        _onYesClicked: function(d) {
            d.preventDefault();
            c.pixel.fire("fbp", this.category, "yes", this.extraData);
            this._showModal(true)
        },
        _onNoClicked: function(d) {
            d.preventDefault();
            c.pixel.fire("fbp", this.category, "no", this.extraData);
            this._showModal(false)
        }
    })
}(DDG);
! function(d) {
    var b = d.Views.Dropdowns.SelectListDropdown,
        c = d.Views.Dropdowns,
        a = "kam";
    c.DirectionDropdown = function(e) {
        this.model = e.model = d.directionSource;
        e.key = "directions";
        e.header = lp("maps_places", "Choose service");
        this.$link = e.$link;
        this._loc = e.loc;
        this._pixelId = e.pixelId;
        this._answer = e.answer;
        this._module = e.module;
        this._showOnMap = e.showOnMap;
        b.call(this, e);
        this.bindEvents([
            [this.$link, "click", this._onLinkClicked]
        ]);
        this._loadSourceFromSettings()
    };
    c.DirectionDropdown.prototype = $.extend({}, b.prototype, {
        changeVerticalPos: function(e) {
            if (this.views.modal) {
                this.views.modal.$el.removeClass("modal--popout--" + this._verticalPos);
                this.views.modal.$el.addClass("modal--popout--" + e)
            }
            this._verticalPos = this.modalOps.position = e;
            this._repositionModal()
        },
        open: function() {
            b.prototype.open.call(this);
            if (!this._module) {
                this._answer.engaged()
            } else {
                this.emit("engaged")
            }
        },
        _loadSourceFromSettings: function() {
            var e = d.settings.get(a);
            if (e) {
                this.model.select(e)
            }
            this._updateLinkURL()
        },
        _updateLinkURL: function() {
            this.$link.attr("href", this._getURL());
            this.$link.data("wrapped", "");
            this.$link.off("click.wrap");
            this._wrapLinks(this.$el.parent())
        },
        _getURL: function() {
            if (this._showOnMap) {
                return this.model.getMapURL(this._loc)
            }
            return this.model.getDirectionsURL(this._loc)
        },
        _onSelectedChange: function() {
            b.prototype._onSelectedChange.call(this);
            this._updateLinkURL();
            this.emit("change")
        },
        _onLinkClicked: function() {
            d.pixel.fire("iadrc", this._pixelId, this.model.selected.id, d.device.pixelId);
            if (!this._module) {
                this._answer.clickedExternalLink();
                this._answer.engaged()
            } else {
                this.emit("engaged", {
                    external: true
                })
            }
        },
        _onItemClick: function(e) {
            b.prototype._onItemClick.call(this, e);
            d.settings.set(a, e, {
                saveToCloud: true
            })
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Dropdowns,
        a = c.Views.Base;
    b.FilterContainer = function(d) {
        this._answer = d.answer;
        if (this._answer) {
            this._safeSearch = this._answer.safeSearch;
            this._region = this._answer.region;
            this._date = this._answer.date
        } else {
            this._safeSearch = this._region = this._date = true
        }
        a.call(this, d);
        this._initFilters()
    };
    b.FilterContainer.prototype = $.extend({}, a.prototype, {
        _initFilters: function() {
            this.views.filters = [];
            if (this._region) {
                this.views.filters.push(new b.RegionFilter({
                    appendTo: this.$el
                }))
            }
            if (this._safeSearch && !c.page.isSafeDDG) {
                this.views.filters.push(new b.SafeSearchFilter({
                    appendTo: this.$el
                }))
            }
            if (this._date) {
                this.views.filters.push(new b.DateFilter({
                    appendTo: this.$el
                }))
            }
            if (this._answer && this._answer.parameters) {
                this._answer.parameters.forEach(function(e) {
                    var d = new c.Views.AnswerBar.Meta.FilterDropdown({
                        model: e,
                        answer: this._answer,
                        appendTo: this.$el
                    });
                    this.views.filters.push(d)
                }.bind(this))
            }
            this.views.filters.forEach(function(d) {
                d.on("opened", this._onFilterOpen.bind(this, d))
            }.bind(this))
        },
        _onFilterOpen: function(d) {
            if (this._currentFilter && this._currentFilter !== d) {
                this._currentFilter.close()
            }
            this._currentFilter = d
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Dropdowns,
        a = b.Base;
    b.DateFilter = function(d) {
        a.call(this, d);
        c.search.on("change:dateFilterId", this._rerender.bind(this))
    };
    b.DateFilter.prototype = $.extend({}, a.prototype, {
        modalClass: "DateFilterModal",
        _render: function(d) {
            d = d || {};
            d.isActive = c.search.dateFilterId;
            d.key = "date";
            d.buttonContent = c.search.getDateFilterName();
            a.prototype._render.call(this, d)
        },
        open: function() {
            c.pixel.fire("dfc", "f", {
                iao: c.duckbar.activeTabId !== "web" ? 1 : 0
            });
            a.prototype.open.call(this)
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Dropdowns,
        a = c.Views.Modal;
    b.DateFilterModal = function(d) {
        a.call(this, d)
    };
    b.DateFilterModal.prototype = $.extend({}, a.prototype, {
        template: "dropdown_modal",
        _render: function(d) {
            a.prototype._render.call(this, {
                isPopover: d.isPopover,
                header: d.isPopover && l("Filter by date"),
                values: c.search.getDateFilters(),
                key: "date"
            });
            this.$(".js-dropdown-items").click(this._onFilterClick.bind(this))
        },
        _onFilterClick: function(i) {
            i.preventDefault();
            var d = $(i.currentTarget),
                j = d.attr("data-value"),
                g = c.search,
                h = c.Data.HiddenFields.DATE_FILTER;
            if (j && j !== "") {
                c.hidden.set(h, j)
            } else {
                c.hidden.clear(h)
            }
            var f = !g.dateFilterId && j;
            c.pixel.fire("dfc", "ci", {
                fd: f ? 1 : 0
            });
            g.set("dateFilterId", j);
            g.requery()
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Dropdowns,
        a = b.Base;
    b.RegionFilter = function(d) {
        a.call(this, d);
        var e = c.settings.region;
        this.bindEvents([
            [e, "change:id", this._rerender],
            [e, "change:suggestedRegion", this._rerender]
        ]);
        if (!e.disabledSuggested()) {
            e.fetchSuggested()
        }
    };
    b.RegionFilter.prototype = $.extend({}, a.prototype, {
        template: "region_filter",
        modalClass: "RegionFilterModal",
        _render: function() {
            var e = c.settings.region,
                d = e.hasRegion(),
                f;
            if (d) {
                f = e.getId()
            } else {
                if (e.hasPrevRegion()) {
                    f = e.prevId
                } else {
                    f = e.suggestedRegion
                }
            }
            a.prototype._render.call(this, {
                hasActiveRegion: d,
                hasRegion: f,
                iconURL: f && e.getSmallIconURL(f),
                regionName: e.getName(f)
            });
            this._cacheElems(".js-region-filter", ["switch"]);
            this.$switch.on("click", this._onSwitchClick.bind(this))
        },
        open: function() {
            c.pixel.fire("rgc", "f", {
                iao: c.duckbar.activeTabId !== "web" ? 1 : 0
            });
            a.prototype.open.call(this)
        },
        _onSwitchClick: function(j) {
            j.preventDefault();
            j.stopPropagation();
            var g, f, i = c.settings.region,
                h = new Date().getTime();
            if (i.hasRegion()) {
                this.$switch.removeClass("is-on");
                g = i.getDefaultId();
                f = "off"
            } else {
                this.$switch.addClass("is-on");
                g = i.getPrevId() || i.suggestedRegion;
                f = "on"
            }
            var d = !i.getPrevId() && i.getId() === i.getDefaultId();
            c.pixel.fire("rgc", "s", f, {
                fr: d ? 1 : 0
            });
            i.setId(g, {
                saveToSettings: true,
                fallbackToURLParam: true
            }, function() {
                var e = new Date().getTime() - h;
                setTimeout(function() {
                    c.search.requery()
                }, Math.min(DDG.animation_speed - e, 0))
            })
        }
    })
}(DDG);
! function(d) {
    var c = d.Views.Dropdowns,
        b = d.Views.Modal,
        a = "is-highlighted",
        e = 300;
    c.RegionFilterModal = function(f) {
        f.model = d.settings.region;
        b.call(this, f);
        this.bindEvents([
            [d.keyboard, "up.modal", this._onUpArrow],
            [d.keyboard, "down.modal", this._onDownArrow],
            [d.keyboard, "enter.modal", this._onEnter]
        ])
    };
    c.RegionFilterModal.prototype = $.extend({}, b.prototype, {
        template: "region_filter_modal",
        cursorIndex: -1,
        hide: function() {
            b.prototype.hide.call(this);
            this._unfocusKeyboard()
        },
        show: function() {
            b.prototype.show.call(this);
            if (!d.device.isMobileDevice) {
                this.$input.focus()
            }
        },
        pointAt: function(f) {
            b.prototype.pointAt.call(this, f);
            this._top = parseInt(this.$list.offset().top, 10)
        },
        _render: function(f) {
            this._allRegions = this.model.getAll();
            b.prototype._render.call(this, $.extend({
                hasRegionOrSuggested: this.model.hasRegionOrSuggested()
            }, f));
            this._cacheElems(".js-region-filter", ["list", "input", "clear"]);
            this._renderRegions();
            this.$input.keyup(this._onInputKeyUp.bind(this));
            this.$input.click(this._onInputClick.bind(this));
            this.$clear.click(this._onClearClick.bind(this))
        },
        _renderRegions: function() {
            var f = this._filteredRegions || this._allRegions;
            this._highlightIdx = -1;
            if (!f || !f.length) {
                this.$list.empty()
            } else {
                this.$list.html(d.exec_template("region_filter_modal_items", {
                    regions: f,
                    showListHeader: d.device.isMobile && this.model.hasRegionOrSuggested() && !this._filteredRegions
                }));
                this.$links = this.$(".js-region-filter-link");
                this.$list.find(".js-region-filter-clear").on("click", this._onClearClick.bind(this));
                this.$links.on("mouseenter touchstart", this._onItemMouseEnter.bind(this)).on("mouseleave", this._onItemMouseLeave.bind(this)).click(this._onRegionClick.bind(this))
            }
        },
        _clearFilter: function() {
            if (this._filteredRegions) {
                delete this._filteredRegions;
                this._renderRegions()
            }
            this.$input.val("")
        },
        _updateHighlightedItem: function() {
            this.$("." + a).removeClass(a);
            if (this._highlightIdx === -1) {
                this.$input.focus()
            } else {
                var i = this.$links[this._highlightIdx];
                if (i) {
                    var h = $(i),
                        f = h.outerHeight(),
                        j = parseInt(h.offset().top, 10),
                        g = j + f;
                    h.addClass(a);
                    if (g >= this._top + e) {
                        this.$list.scrollTop(this.$list.scrollTop() + f)
                    } else {
                        if (j < this._top) {
                            this.$list.scrollTop(this.$list.scrollTop() - f)
                        }
                    }
                }
            }
        },
        _focusKeyboard: function() {
            if (!this._keyboardFocus) {
                this._keyboardFocus = true;
                d.$doc.on("mousemove.region", this._onMouseMove.bind(this))
            }
        },
        _unfocusKeyboard: function() {
            if (!this._keyboardFocus) {
                return
            }
            this._keyboardFocus = false;
            d.$doc.off("mousemove.region")
        },
        _sendRegionSelectedPixel: function(n, j) {
            var i = this.model,
                h = i.getDefaultId(),
                m = h === n,
                k = i.getPrevRegions().indexOf(n) > -1,
                g = m ? "d" : k ? "p" : "n",
                f;
            f = !i.getPrevId() && i.getId() === h;
            d.pixel.fire("rgc", j, g, {
                fr: f ? 1 : 0
            })
        },
        _onInputKeyUp: function(g) {
            if (d.keyboard.keyCodeIsOneOf(g.keyCode, ["up", "down", "enter", "escape"])) {
                return false
            }
            var f = this.$input.val().toLowerCase();
            if (f) {
                this._filteredRegions = this._allRegions.filter(function(h) {
                    return h.name.toLowerCase().indexOf(f.toLowerCase()) > -1
                })
            } else {
                delete this._filteredRegions
            }
            d.pixel.fire("rgc", "ku");
            this._renderRegions()
        },
        _onItemMouseEnter: function(h) {
            if (this._keyboardFocus) {
                return
            }
            var g = $(h.target),
                f = parseInt(g.data("index"), 10);
            if ($.isNumeric(f) && this.highlightIdx !== f) {
                this._highlightIdx = f;
                this._updateHighlightedItem()
            }
        },
        _onItemMouseLeave: function(h) {
            if (this._keyboardFocus) {
                return
            }
            var g = $(h.target),
                f = parseInt(g.data("index"), 10);
            if ($.isNumeric(f) && this.highlightIdx === f) {
                this._highlightIdx = -1;
                this._updateHighlightedItem()
            }
        },
        _onMouseMove: function() {
            this._unfocusKeyboard()
        },
        _onUpArrow: function() {
            this._highlightIdx--;
            this._focusKeyboard();
            this._highlightIdx = Math.max(this._highlightIdx, -1);
            this._updateHighlightedItem()
        },
        _onDownArrow: function() {
            this._highlightIdx++;
            this._focusKeyboard();
            this._highlightIdx = Math.min(this._highlightIdx, this.$links.length - 1);
            this._updateHighlightedItem()
        },
        _onEnter: function() {
            var h;
            if (this._highlightIdx > -1) {
                h = this._highlightIdx
            } else {
                if (this._filteredRegions && this._filteredRegions.length === 1) {
                    h = 0
                }
            }
            if ($.isNumeric(h)) {
                var f = this.$links[h],
                    g = $(f).data("id");
                this._sendRegionSelectedPixel(g, "ei");
                this.model.setId(g, {
                    saveToSettings: true,
                    fallbackToURLParam: true
                }, function() {
                    d.search.requery()
                })
            }
        },
        _onInputClick: function(f) {
            f.stopPropagation()
        },
        _onClearClick: function(f) {
            f.preventDefault();
            d.pixel.fire("rgc", "cl");
            this.model.reset(function() {
                this.model.disableSuggested(function() {
                    d.search.requery()
                })
            }.bind(this))
        },
        _onRegionClick: function(g) {
            var f = $(g.target),
                h = f.data("id") || f.parent().data("id");
            this._sendRegionSelectedPixel(h, "ci");
            this.model.setId(h, {
                saveToSettings: true,
                fallbackToURLParam: true
            }, function() {
                this.hide();
                d.search.requery()
            }.bind(this))
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Dropdowns,
        a = c.Views.Dropdowns.Base;
    b.SafeSearchFilter = function(d) {
        d.model = c.settings.safeSearch;
        a.call(this, d);
        this.bindEvents([
            [this.model, "change:id", this._rerender]
        ]);
        this.modalOps = {
            entryPoint: d.entryPoint || "of"
        }
    };
    b.SafeSearchFilter.prototype = $.extend({}, a.prototype, {
        modalClass: "SafeSearchFilterModal",
        _render: function(d) {
            d = d || {};
            d.isActive = this.model.isActive();
            d.key = "safe-search";
            d.buttonContent = l("Safe Search:") + " " + this.model.getName();
            a.prototype._render.call(this, d)
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Dropdowns,
        a = c.Views.Modal;
    b.SafeSearchFilterModal = function(d) {
        this.entryPoint = d.entryPoint;
        d.model = c.settings.safeSearch;
        a.call(this, d)
    };
    b.SafeSearchFilterModal.prototype = $.extend({}, a.prototype, {
        template: "dropdown_modal",
        _render: function(d) {
            a.prototype._render.call(this, {
                isPopover: d.isPopover,
                header: d.isPopover && l("Safe Search"),
                showDescriptions: true,
                values: this.model.getAll(),
                key: "safe-search"
            });
            this.$(".js-dropdown-items").click(this._onFilterClick.bind(this))
        },
        _onFilterClick: function(f) {
            var d = $(f.currentTarget),
                g = d.attr("data-value");
            this.model.setId(g, function() {
                c.search.requery()
            });
            c.pixel.fire("sss", "f", {
                v: c.settings.safeSearch.getId(),
                ep: this.entryPoint
            })
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.PlacesSingle = function(c) {
        a.call(this, c);
        b.settings.on("change:kam", this._onDirectionSourceUpdated.bind(this))
    };
    b.Views.PlacesSingle.prototype = $.extend({}, a.prototype, {
        template: "places_single",
        _onDirectionSourceUpdated: function() {
            var c = this.model.primaryPlace;
            var d = b.directionSource.getMapURL(c);
            c.set("mapURL", d);
            c.set("directionsTitle", c.getDirectionsTitle());
            a.prototype._rerender.call(this, this.model.primaryPlace)
        },
        _render: function(d) {
            a.prototype._render.call(this, this.model.primaryPlace);
            this._cacheElems(".js-places-single", ["map"]);
            this.bindEvents([
                [this.$map, "click", this._onMapClick.bind(this)],
                [this.model, "change:isMapExpanded", this._onMapExpandedChanged]
            ]);
            var c = this.model.primaryPlace;
            this.views.detail = new b.Views.PlaceDetail({
                model: c,
                answerModel: this.model,
                appendTo: this.$el
            });
            this.views.map = new b.Views.Mapbox.StaticMap({
                markers: [c],
                width: this.$map.outerWidth(),
                height: this.$map.outerHeight(),
                url: c.directions,
                appendTo: this.$map
            })
        },
        _onMapExpandedChanged: function() {
            if (this.model.isMapExpanded && !this.views.verticalMap) {
                this.views.verticalMap = new b.Views.Verticals.VerticalMap({
                    model: this.model,
                    locations: [this.model.primaryPlace],
                    appendTo: "body"
                })
            }
        },
        _onMapClick: function(c) {
            if (b.mapbox.canUseGL()) {
                c.preventDefault();
                this.model.set("isMapExpanded", true)
            }
        },
        _onExternalLinkClick: function(c) {
            this.model.engaged();
            if (!b.mapbox.canUseGL()) {
                this.model.clickedExternalLink();
                a.prototype._onExternalLinkClick.call(this, c)
            }
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Base,
        d = 455,
        a = 170,
        e = 110;
    c.Views.PlacesMultiple = function(f) {
        b.call(this, f)
    };
    c.Views.PlacesMultiple.prototype = $.extend({}, b.prototype, {
        template: "places_multiple",
        _render: function(f) {
            b.prototype._render.call(this, f);
            this._cacheElems(".js-places-multiple", ["map", "list"]);
            this.views.map = new c.Views.Mapbox.StaticMap({
                markers: this.model.topPlaces,
                width: this.model.isSideModule ? d : this.$map.outerWidth(),
                height: this.model.isSideModule ? a : e,
                appendTo: this.$map
            });
            this.views.placeListItems = this.model.topPlaces.map(function(g, h) {
                g.number = h + 1;
                return new c.Views.PlaceListItem({
                    appendTo: this.$list,
                    model: g,
                    answerModel: this.model
                })
            }.bind(this))
        },
        _onExternalLinkClick: function(f) {
            this.model.clickedExternalLink();
            this.model.engaged();
            b.prototype._onExternalLinkClick.call(this, f)
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.PlaceDetail = function(c) {
        this.answerModel = c.answerModel;
        a.call(this, c)
    };
    b.Views.PlaceDetail.prototype = $.extend({}, a.prototype, {
        template: "place_detail",
        _render: function() {
            a.prototype._render.call(this, this.model);
            this._cacheElems(".js-place-detail", ["hours", "hours-toggle", "phone", "directions-container", "directions-link"]);
            this.bindEvents([
                [this.$hourstoggle, "click", this._onHoursToggleClick.bind(this)],
                [this.$phone, "click", this._onPhoneClick.bind(this)],
                [this.model, "change:expanded", this._rerender]
            ]);
            this._addDirectionsDropdown();
            this.views.placeHours = new b.Views.PlaceHours({
                model: this.model,
                appendTo: this.$hours
            })
        },
        _rerender: function() {
            if (this.views.directions) {
                this.views.directions.destroy();
                delete this.views.directions
            }
            a.prototype._rerender.call(this)
        },
        _onHoursToggleClick: function(c) {
            c.preventDefault();
            this.model.toggleHoursExpand();
            this.answerModel.engaged()
        },
        _onPhoneClick: function(c, d) {
            this.answerModel.engaged()
        },
        _onExternalLinkClick: function(c) {
            this.answerModel.clickedExternalLink();
            this.answerModel.engaged();
            a.prototype._onExternalLinkClick.call(this, c)
        },
        _addDirectionsDropdown: function() {
            if (this.views.directions || !this.$directionscontainer.length) {
                return
            }
            this.views.directions = new b.Views.Dropdowns.DirectionDropdown({
                appendTo: this.$directionscontainer,
                $link: this.$directionslink,
                loc: this.model,
                module: true,
                showSelected: true,
                showOnMap: false,
                horizontalPos: "center",
                verticalPos: "bottom",
                pixelId: this.answerModel.pixelId
            });
            this.views.directions.on("change", this._updateMapLinks.bind(this));
            this.views.directions.on("engaged", this._onDirectionsEngaged.bind(this));
            this._updateMapLinks()
        },
        _updateMapLinks: function() {
            var c = b.directionSource.selected.name;
            this.$(".js-dropdown-button").text(c)
        },
        _onDirectionsEngaged: function(c) {
            if (c) {
                b.pixel.fire("iag", this.answerModel.pixelId, this.answerModel.openType)
            }
            this.answerModel.engaged()
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.PlaceListItem = function(c) {
        a.call(this, c);
        this.answerModel = c.answerModel;
        this.bindEvents([
            [this.$el, "click", this._onClick]
        ])
    };
    b.Views.PlaceListItem.prototype = $.extend({}, a.prototype, {
        template: "place_list_item",
        _render: function(c) {
            a.prototype._render.call(this, $.extend(c || {}, this.model));
            this._cacheElems(".js-place-list-item", ["title"])
        },
        _onClick: function(c) {
            c.stopPropagation();
            this.$title.click()
        },
        _onExternalLinkClick: function(c) {
            c.stopPropagation();
            this.answerModel.clickedExternalLink();
            this.answerModel.engaged();
            a.prototype._onExternalLinkClick.call(this, c)
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.PlaceHours = function(c) {
        a.call(this, c);
        this._cacheElems(".js-place-hours", ["close"]);
        this.bindEvents([
            [this.$close, "click", this._onCloseClick],
            [this.model, "change:hoursExpanded", this._toggle]
        ])
    };
    b.Views.PlaceHours.prototype = $.extend({}, a.prototype, {
        template: "place_hours",
        _render: function() {
            a.prototype._render.call(this, this.model)
        },
        _toggle: function() {
            this.$el.toggleClass("is-hidden")
        },
        _onCloseClick: function() {
            this.model.toggleHoursExpand()
        }
    })
}(DDG);
! function(e) {
    var a = e.Models.Base,
        g = 120,
        i = 160,
        j = 160,
        b = 1.8,
        d = 0.7,
        f = 1100,
        c = 80,
        k = 1.4,
        h = 150;
    e.Models.Modules.About = function(m) {
        a.call(this, this.transform(m));
        if (this.hasInfobox) {
            this.infobox = new e.Models.Modules.AboutInfoBox({
                Infobox: this.Infobox,
                RelatedTopics: this.RelatedTopics,
                minimizeHeight: m.minimizeHeight
            })
        }
        if (this.infobox && this.infobox.maps.length) {
            this.headerImage = this.Image && !this.ImageIsLogo;
            this.headerType = this.headerImage ? 2 : 1;
            this.header = new e.Models.Modules.AboutHeader({
                imageURL: this.headerImage ? this.Image : null,
                imageWidth: this.ImageWidth,
                imageHeight: this.ImageHeight,
                mapURL: this.infobox.maps[0].value
            })
        }
        if (this.infobox && this.infobox.profiles.length) {
            this.profiles = new e.Models.Modules.AboutProfiles({
                title: this.Heading,
                entity: this.Entity,
                data: this.infobox.profiles
            })
        }
    };
    e.Models.Modules.About.prototype = $.extend({}, a.prototype, {
        headerType: 0,
        toggleExpand: function() {
            this.infobox && this.infobox.toggleExpand();
            this.set("expanded", !this.expanded)
        },
        canExpand: function() {
            return (this.infobox && this.infobox.canExpand()) || (this.shortAbstract !== this.fullAbstract)
        },
        getAbstract: function() {
            return this.expanded ? this.fullAbstract : this.shortAbstract
        },
        showMoreAtBottom: function() {
            if (this.infobox) {
                return false
            }
            if (!this.canExpand()) {
                return true
            }
            if (this.hasMarkup) {
                return true
            }
            return false
        },
        transform: function(m) {
            if (m.Results && m.Results.length) {
                m.OfficialUrl = m.Results[0].FirstURL
            }
            m.minEllipsisHeight = m.minimizeHeight ? c : j;
            if (m.Image && m.ImageWidth && m.ImageHeight) {
                var p = (e.device.width <= f) ? d : 1;
                var n = e.scaleToFit(m.ImageWidth, m.ImageHeight, g, i);
                m.ImageWidth = parseInt(n.width, 10);
                m.ImageHeight = parseInt(n.height, 10);
                m.defaultTextHeight = Math.max(m.minEllipsisHeight, (m.ImageHeight * p) / 2)
            } else {
                if (m.Image) {
                    delete m.Image
                }
            }
            if (m.Image && window.iqbi && !e.settings.safeSearch.isOff()) {
                delete m.Image
            }
            m.moreAtText = m.meta ? m.meta.src_name : m.AbstractSource;
            m.Abstract = m.Abstract || "";
            m.hasCode = m.Abstract.match(/\<code/i);
            m.hasMarkup = m.Abstract.match(/\<\//);
            m.fullAbstract = m.Abstract;
            m.shortAbstract = this.trimParagraphs(m);
            m.hasInfobox = m.Infobox;
            var o = DDG.parseAbstract(m.Heading);
            m.title = o.main.trim();
            m.subTitle = o.subTitle;
            return m
        },
        trimParagraphs: function(v) {
            if (!v.Abstract) {
                return ""
            }
            var y = v.Abstract.length,
                r, o = /\.\s|\>/gi,
                n = y,
                u = v.minimizeHeight ? k : b,
                s = Math.max(v.minEllipsisHeight, v.ImageHeight) * u,
                p = v.Abstract;
            if (v.meta && v.meta.id === "wikihow") {
                p = "";
                var x = 7,
                    m = jQuery(v.Abstract),
                    q = 0;
                $.each(m, function(A, z) {
                    var C = x - q;
                    if (!C) {
                        return false
                    }
                    var B = $(z);
                    switch (z.nodeName) {
                        case "P":
                            p += z.outerHTML;
                            break;
                        case "OL":
                            B.children().slice(C).remove();
                            p += B[0].outerHTML;
                            q += B.children().length;
                            break
                    }
                });
                return p
            }
            if (v.hasCode && !v.minimizeHeight) {
                s = e.device.height * u
            }
            if (v.Abstract.length <= s) {
                return v.Abstract
            }
            while (r = o.exec(v.Abstract)) {
                var t = r.index;
                if (Math.abs(s - t) < y) {
                    y = Math.abs(s - t);
                    n = t
                }
            }
            p = v.Abstract.substring(0, n + 1);
            if ((v.Abstract.length - p.length) < h) {
                p = v.Abstract
            }
            return p
        }
    })
}(DDG);
! function(b) {
    var a = b.Models.Base,
        c = {
            wiki_maps_trigger: [{
                addTo: "maps"
            }],
            imdb_id: [{
                dataTypeOverride: "imdb_title_id",
                matching: /^tt/,
                addTo: "profiles"
            }, {
                dataTypeOverride: "imdb_name_id",
                matching: /^nm/,
                addTo: "profiles"
            }],
            rotten_tomatoes: [{
                matching: /^(tv|m)/,
                addTo: "profiles"
            }],
            twitter_profile: [{
                addTo: "profiles"
            }],
            instagram_profile: [{
                addTo: "profiles"
            }],
            youtube_channel: [{
                addTo: "profiles"
            }],
            facebook_profile: [{
                addTo: "profiles"
            }],
            spotify_artist_id: [{
                addTo: "profiles"
            }],
            soundcloud_id: [{
                addTo: "profiles"
            }]
        };
    b.Models.Modules.AboutInfoBox = function(d) {
        this._defaultVisibleRows = d.minimizeHeight ? 0 : 3;
        this.maps = [];
        this.profiles = [];
        a.call(this, this.transform(d))
    };
    b.Models.Modules.AboutInfoBox.prototype = $.extend({}, a.prototype, {
        toggleExpand: function() {
            if (this.canExpand()) {
                for (var d = 0; d < this.items.length; d++) {
                    this.items[d].visible = !this.expanded ? true : d < this._defaultVisibleRows
                }
                this.set("expanded", !this.expanded)
            }
        },
        canExpand: function() {
            return this.items.length > this._defaultVisibleRows
        },
        transform: function(f) {
            var d;
            if (f.Infobox) {
                d = f.Infobox.content;
                d.forEach(function(h) {
                    if (!h || !h.value) {
                        return
                    }
                    var g = c[h.data_type];
                    if (!g) {
                        return
                    }
                    g.forEach(function(i) {
                        if (!i.matching || h.value.match(i.matching)) {
                            if (i.dataTypeOverride) {
                                h.data_type = i.dataTypeOverride
                            }
                            this[i.addTo].push(h)
                        }
                    }.bind(this))
                }.bind(this));
                d = d.filter(function(g) {
                    return g && g.value && typeof g.value === "string" && g.value.charAt(0) !== "[" && g.label !== "Website" && g.data_type && g.data_type === "string"
                })
            }
            if (d) {
                f.hasItems = true;
                for (var e = 0; e < d.length && e < this._defaultVisibleRows; e++) {
                    d[e].visible = true
                }
                f.items = d
            }
            return f
        }
    })
}(DDG);
! function(b) {
    var a = b.Models.Base;
    b.Models.Modules.AboutHeader = function(c) {
        a.call(this, c);
        this.loadMap()
    };
    b.Models.Modules.AboutHeader.prototype = $.extend({}, a.prototype, {
        loadMap: function() {
            if (!this.mapURL) {
                return
            }
            this.mapURL = this.mapURL.replace("&cb=ddg_spice_maps_maps", "");
            $.ajax({
                url: this.mapURL,
                dataType: "json",
                success: this._onMapLoaded.bind(this),
                error: this._onMapError.bind(this)
            })
        },
        _onMapLoaded: function(c) {
            this.mapResponse = DDG.localAPI.getMapsResponse(c);
            if (this.mapResponse.results && this.mapResponse.results.length) {
                var d = new b.Models.AnswerItems.MapLocation(this.mapResponse.results[0]);
                this.set("mapLocation", d)
            } else {
                this.set("mapFailed", true)
            }
        },
        _onMapError: function() {
            this.set("mapFailed", true)
        }
    })
}(DDG);
! function(d) {
    var c = d.Models.Base,
        b = "/assets/icons/thirdparty/{{icon}}.svg",
        a = ["film", "television"],
        e = {
            twitter_profile: {
                url: "https://twitter.com/{{val}}",
                icon: "twitter",
                name: "Twitter",
                sort: 1
            },
            instagram_profile: {
                url: "https://instagram.com/{{val}}",
                icon: "instagram",
                name: "Instagram",
                sort: 2
            },
            youtube_channel: {
                url: "https://youtube.com/channel/{{val}}",
                icon: "youtube",
                name: "YouTube",
                sort: 3
            },
            facebook_profile: {
                url: "https://facebook.com/{{val}}",
                icon: "facebook",
                name: "Facebook",
                sort: 4
            },
            spotify_artist_id: {
                url: "https://open.spotify.com/artist/{{val}}",
                icon: "spotify",
                name: "Spotify",
                sort: 5
            },
            soundcloud_id: {
                url: "https://soundcloud.com/{{val}}",
                icon: "soundcloud",
                name: "SoundCloud",
                sort: 6
            },
            imdb_title_id: {
                url: "https://www.imdb.com/title/{{val}}",
                icon: "imdb",
                name: "IMDb",
                sort: 7
            },
            imdb_name_id: {
                url: "https://www.imdb.com/name/{{val}}",
                icon: "imdb",
                name: "IMDb",
                sort: 8
            },
            rotten_tomatoes: {
                url: "https://rottentomatoes.com/{{val}}",
                icon: "rt",
                name: "Rotten Tomatoes",
                sort: 9
            },
            itunes: {
                url: "{{val}}",
                icon: "apple",
                name: "iTunes",
                sort: 10
            },
            amazon: {
                url: "{{val}}",
                icon: "amazon",
                name: "Amazon",
                sort: 11
            }
        };
    d.Models.Modules.AboutProfiles = function(f) {
        c.call(this, f);
        this.links = this._createLinks(this.data);
        if (this._isStreamable()) {
            this._tryAddingITunes();
            this._tryAddingAmazon()
        }
    };
    d.Models.Modules.AboutProfiles.prototype = $.extend({}, c.prototype, {
        _createLinks: function(g) {
            if (!g || !g.length) {
                return
            }
            var f = g.map(this._createLinkFromInfoboxData.bind(this));
            f = f.sort(function(i, h) {
                return i.sort > h.sort ? 1 : -1
            });
            return f
        },
        _createLinkFromInfoboxData: function(f) {
            return this._createLink(f.data_type, f.value)
        },
        _createLink: function(f, j) {
            var h = e[f],
                g = h.url.replace("{{val}}", j),
                i = b.replace("{{icon}}", h.icon);
            return {
                url: g,
                name: h.name,
                icon: h.icon,
                iconURL: i,
                sort: h.sort
            }
        },
        _addLink: function(f, g) {
            this.links.push(this._createLink(f, g));
            this._emitChange("links", this.links)
        },
        _isStreamable: function() {
            if (a.indexOf(this.entity) > -1) {
                return true
            }
        },
        _tryAddingITunes: function() {
            $.ajax({
                url: "/iit/" + encodeURIComponent(this.title),
                dataType: "json",
                success: function(f) {
                    if (!f || !f.results || !f.results.length || !f.results[0].trackViewUrl) {
                        return
                    }
                    this._addLink("itunes", f.results[0].trackViewUrl)
                }.bind(this)
            })
        },
        _tryAddingAmazon: function() {
            $.ajax({
                url: "/m.js?q=" + encodeURIComponent(this.title) + "&c=v&o=json&l=" + d.settings.get("kl") + "&country=" + window.ct,
                dataType: "json",
                success: function(f) {
                    if (!f || !f.results || !f.results.length) {
                        return
                    }
                    this._addLink("amazon", f.results[0].url)
                }.bind(this)
            })
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.Base,
        a = "is-expanded";
    c.Views.Modules.Base = function(d) {
        this.viewModel = d.viewModel;
        if (this.viewModel && !this.viewModel.meta && d && d.model) {
            this.viewModel.meta = d.model.meta
        }
        b.call(this, d);
        this.bindEvents([
            [this.model, "change:expanded", this._onExpandedChanged],
            [this.model, "change:isMapExpanded", this._onMapExpandedChanged],
            [this.model, "change:active", this._onActiveChanged]
        ])
    };
    c.Views.Modules.Base.prototype = $.extend({}, b.prototype, {
        show: function() {
            this.$el.show();
            var d = [{
                qsParam: "iax",
                modelState: "expanded"
            }, {
                qsParam: "iaxm",
                modelState: "isMapExpanded"
            }];
            d.map(function(f) {
                if (this._isModelInQuerystring(f.qsParam)) {
                    var e = {};
                    e[f.modelState] = true;
                    this.model.set(e)
                }
            }.bind(this))
        },
        hide: function() {
            this.$el.hide();
            this.model.set("isMapExpanded", false)
        },
        isValid: function() {
            return true
        },
        showNoResults: function() {},
        _render: function() {
            b.prototype._render.call(this, this.viewModel || this.model)
        },
        _prettifyCode: function() {
            var d = this.$("pre");
            if (d.length) {
                DDG.require("prettify", function() {
                    d.addClass("prettyprint");
                    window.prettyPrint()
                })
            }
        },
        _wrapLinks: function() {},
        _expand: function() {
            c.keyboard.set("namespace", this.model.pixelId);
            DDG.addClass(this.model.id, this.$parent, a);
            if (this.model.nameId === "maps") {
                c.history.set({
                    iaxm: this.model.nameId
                })
            } else {
                c.history.set({
                    iax: this.model.nameId
                })
            }
            DDG.page.views.atb && DDG.page.views.atb.hide()
        },
        _collapse: function() {
            c.keyboard.set("namespace");
            DDG.removeClass(this.model.id, this.$parent, a);
            if (this.model.nameId === "maps") {
                c.history.clear("iaxm")
            } else {
                c.history.clear("iax")
            }
        },
        _isModelInQuerystring: function(e) {
            var f = c.history.get(e),
                d = (f === 1 || f === 0) ? c.history.get("ia") : f;
            return (this.model.id === d || this.model.nameId === d)
        },
        _onActiveChanged: function() {
            return this.model.active ? this.show() : this.hide()
        },
        _onExpandedChanged: function() {
            return this.model.expanded ? this._expand() : this._collapse()
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Modules.Base;
    b.Views.Modules.About = function(c) {
        a.call(this, c);
        this._cacheElems(".js-about-module", ["link", "content", "more-at", "abstr", "toggle", "more-at-inline", "more-at-bottom", "more", "less"]);
        this.bindEvents([
            [this.$link, "click", this._onExternalLinkClick],
            [this.$moreatinline, "click", this._onExternalLinkClick],
            [this.$moreatbottom, "click", this._onExternalLinkClick],
            [this.$el, "click", this._onClick],
            [this.$toggle, "click", this._onToggleClick],
            [this.viewModel, "change:expanded", this._onExpandedChange]
        ]);
        if (this.viewModel.hasInfobox) {
            this.views.infobox = new b.Views.Modules.AboutInfoBox({
                appendTo: this.$content,
                viewModel: this.viewModel.infobox
            })
        }
        if (this.viewModel.header) {
            this.model.set("headerType", this.viewModel.headerType);
            this.views.header = new b.Views.Modules.AboutHeader({
                before: this.$content,
                model: this.model,
                viewModel: this.viewModel.header
            })
        }
        if (this.viewModel.profiles) {
            this.model.set("profileLinks", this.viewModel.profiles.links.length);
            this.views.profiles = new b.Views.Modules.AboutProfiles({
                appendTo: this.$content,
                model: this.model,
                viewModel: this.viewModel.profiles
            })
        }
        this._updateExpandedState()
    };
    b.Views.Modules.About.prototype = $.extend({}, a.prototype, {
        template: "about_module",
        _render: function(c) {
            a.prototype._render.call(this, c);
            var d = this.model.meta && this.model.meta.name;
            if (b.device.isEnglish) {
                this.views.feedback = new b.Views.Feedback.FeedbackPrompt({
                    category: "about module",
                    categoryName: d,
                    promptText: "Feedback",
                    appendTo: this.$el,
                    showYesNo: false
                })
            }
        },
        _onExternalLinkClick: function(c) {
            c.stopPropagation();
            this.model.clickedExternalLink();
            this.model.engaged();
            return a.prototype._onExternalLinkClick.call(this, c)
        },
        _updateExpandedState: function() {
            if (this.viewModel.canExpand() && !this.viewModel.expanded) {
                this.$toggle.show();
                this.$more.show();
                this.$less.hide()
            } else {
                if (this.viewModel.canExpand() && this.viewModel.expanded) {
                    this.$toggle.show();
                    this.$more.hide();
                    this.$less.show()
                } else {
                    this.$more.hide();
                    this.$less.hide()
                }
            }
            this.$abstr.html(this.viewModel.getAbstract());
            if (this.viewModel.showMoreAtBottom()) {
                this.$moreatbottom.removeClass("is-hidden");
                this.$moreatinline.addClass("is-hidden")
            } else {
                this.$moreatbottom.addClass("is-hidden");
                this.$moreatinline.removeClass("is-hidden")
            }
            if (this.viewModel.hasCode) {
                this._prettifyCode()
            }
        },
        _onExpandedChange: function() {
            this._updateExpandedState()
        },
        _onClick: function() {
            this.model.engaged();
            if (b.device.isMobileDevice) {
                b.pixel.fire("iasm", this.model.pixelId, this.model.openType);
                this.viewModel.toggleExpand()
            }
        },
        _onToggleClick: function(c) {
            c.stopPropagation();
            this.model.engaged();
            b.pixel.fire("iasm", this.model.pixelId, this.model.openType);
            this.viewModel.toggleExpand()
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Modules.Base;
    b.Views.Modules.AboutInfoBox = function(c) {
        a.call(this, c);
        this.bindEvents([
            [this.viewModel, "change:expanded", this._rerender]
        ])
    };
    b.Views.Modules.AboutInfoBox.prototype = $.extend({}, a.prototype, {
        template: "about_infobox"
    })
}(DDG);
! function(b) {
    var a = b.Views.Modules.Base;
    b.Views.Modules.AboutHeader = function(c) {
        a.call(this, c);
        this._cacheElems(".js-about-header", ["image", "map"]);
        this.bindEvents([
            [this.viewModel, "change:mapLocation", this._onMapLocationChanged],
            [this.viewModel, "change:mapLocation", this._createMapVertical],
            [this.viewModel, "change:mapFailed", this._onMapFailed],
            [this.model, "change:isMapExpanded", this._createMapVertical],
            [this.$image, "click", this._onImageClicked],
            [this.$map, "click", this._onMapClicked]
        ]);
        if (this.viewModel.mapLocation) {
            this._renderMap()
        }
    };
    b.Views.Modules.AboutHeader.prototype = $.extend({}, a.prototype, {
        template: "about_header",
        _render: function(c) {
            a.prototype._render.call(this, {
                title: b.directionSource.getMapTitleText()
            })
        },
        _renderMap: function() {
            if (this.views.map) {
                return
            }
            this.views.map = new b.Views.Mapbox.StaticMap({
                markers: [this.viewModel.mapLocation],
                width: this.$map.outerWidth(),
                height: this.$map.outerHeight(),
                appendTo: this.$map
            });
            this.$map.attr("href", b.directionSource.getMapURL(this.viewModel.mapLocation))
        },
        _createMapVertical: function() {
            if (!this.viewModel.mapLocation || !this.model.isMapExpanded || this.views.verticalMap) {
                return
            }
            this.views.verticalMap = new b.Views.Verticals.VerticalMap({
                model: this.model,
                locations: [this.viewModel.mapLocation],
                appendTo: "body"
            })
        },
        _onMapLocationChanged: function() {
            this._renderMap()
        },
        _onMapFailed: function() {
            b.pixel.fire("iahmf", this.model.pixelId, this.model.getPixelData())
        },
        _onImageClicked: function() {
            b.pixel.fire("iahic", this.model.pixelId, this.model.openType, this.model.getPixelData());
            b.duckbar.open("images")
        },
        _onMapClicked: function(c) {
            if (b.mapbox.canUseGL()) {
                c.preventDefault();
                this.model.set("isMapExpanded", true)
            }
            b.pixel.fire("iahmc", this.model.pixelId, this.model.openType, this.model.getPixelData())
        },
        _onExternalLinkClick: function(c) {
            this.model.engaged();
            if (!b.mapbox.canUseGL()) {
                this.model.clickedExternalLink();
                a.prototype._onExternalLinkClick.call(this, c)
            }
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Modules.Base;
    b.Views.Modules.AboutProfiles = function(c) {
        a.call(this, c);
        this.bindEvents([
            [this.viewModel, "change:links", this._rerender]
        ])
    };
    b.Views.Modules.AboutProfiles.prototype = $.extend({}, a.prototype, {
        template: "about_profiles",
        _render: function() {
            a.prototype._render.call(this, this.viewModel);
            this.bindEvents([
                [".js-about-profile-link", "click", this._onExternalLinkClick]
            ])
        },
        _onExternalLinkClick: function(d) {
            var c = $(d.currentTarget),
                f = c && c.attr("title");
            d.stopPropagation();
            this.model.clickedExternalLink({
                plc: f
            });
            this.model.engaged();
            return a.prototype._onExternalLinkClick.call(this, d)
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Modules.Base;
    b.Views.Modules.Maps = function(c) {
        a.call(this, c);
        this._glMapModel = new b.Models.MapboxGLMap({
            selectedLocation: this.model.selectedItem,
            pixelId: this.model.pixelId
        });
        this.bindEvents([
            [this.model, "change:isMapExpanded", this._onMapExpandedChanged],
            [b.keyboard, "escape." + this.model.pixelId, this._onEscape]
        ])
    };
    b.Views.Modules.Maps.prototype = $.extend({}, a.prototype, {
        template: "maps_module",
        _render: function(c) {
            a.prototype._render.call(this, c);
            this._cacheElems(".js-maps-module", ["map", "detailview", "control-topright", "control-bottomleft"]);
            this._renderMapDetails();
            this._updateMapControls();
            if (b.mapbox.canUseGL()) {
                this.model.isMapExpanded ? this._renderGLMap() : this._renderStaticMap()
            } else {
                this._renderStaticMap();
                if (this.model.isMapExpanded) {
                    this.model.set("isMapExpanded", false);
                    this._collapse()
                }
            }
            if (b.device.isEnglish) {
                this.views.feedback = new b.Views.Feedback.FeedbackPrompt({
                    category: "maps",
                    promptText: "Is this map helpful?",
                    appendTo: this.$el
                })
            }
        },
        _renderStaticMap: function() {
            if (this.views.staticMap) {
                return
            }
            this.views.staticMap = new b.Views.Mapbox.StaticMap({
                markers: [this.model.selectedItem],
                width: this.$el.width(),
                height: 200,
                appendTo: this.$map,
                showCTA: b.mapbox.canUseGL()
            });
            this.bindEvents([
                [this.views.staticMap, "click", this._onStaticMapClicked]
            ])
        },
        _renderGLMap: function() {
            if (this.views.glMap) {
                return
            }
            this.views.glMap = new b.Views.Mapbox.GLMap({
                appendTo: this.$map,
                model: this._glMapModel
            });
            this.bindEvents([
                [this.views.glMap, "map-engaged", this._fireEngagement]
            ])
        },
        _renderMapDetails: function() {
            if (this.views.detail) {
                return
            }
            this.views.detail = new b.Views.MapDetail({
                model: this.model.selectedItem,
                appendTo: this.$detailview,
                answer: this.model
            })
        },
        _renderCloseControl: function() {
            if (this.views.closeControl) {
                return
            }
            this.views.closeControl = new b.Views.Mapbox.CloseControl({
                model: this.model,
                appendTo: this.$controltopright
            })
        },
        _renderZoomControl: function() {
            if (this.views.zoomControl) {
                return
            }
            this.views.zoomControl = new b.Views.Mapbox.ZoomControl({
                model: this._glMapModel,
                appendTo: this.$controltopright
            })
        },
        _renderModeControl: function() {
            if (this.views.modeControl) {
                return
            }
            this.views.modeControl = new b.Views.Mapbox.ModeControl({
                appendTo: this.$controlbottomleft,
                model: this._glMapModel
            })
        },
        _updateMapControls: function() {
            if (!b.mapbox.canUseGL()) {
                return
            }
            if (this.model.isMapExpanded) {
                this.views.closeControl ? this.views.closeControl.show() : this._renderCloseControl();
                this.views.zoomControl ? this.views.zoomControl.show() : this._renderZoomControl();
                this.views.modeControl ? this.views.modeControl.show() : this._renderModeControl()
            } else {
                this.views.closeControl && this.views.closeControl.hide();
                this.views.zoomControl && this.views.zoomControl.hide();
                this.views.modeControl && this.views.modeControl.hide()
            }
        },
        _expand: function() {
            a.prototype._expand.call(this);
            b.$html.css({
                "overflow-y": "hidden"
            });
            this.views.detail.updateDropdownPosition("top")
        },
        _collapse: function() {
            a.prototype._collapse.call(this);
            b.$html.css({
                "overflow-y": "auto"
            });
            this.views.detail.updateDropdownPosition("bottom")
        },
        _fireEngagement: function() {
            this.model.engaged()
        },
        _onMapExpandedChanged: function() {
            this.model.isMapExpanded ? this._expand() : this._collapse();
            this._updateMapControls();
            if (this.model.isMapExpanded) {
                if (this.views.glMap) {
                    this.views.glMap.show()
                } else {
                    this._renderGLMap()
                }
                this.views.staticMap.hide()
            } else {
                this.views.glMap.hide();
                this.views.staticMap.show()
            }
        },
        _onEscape: function() {
            if (this.model.isMapExpanded) {
                this.model.set("isMapExpanded", false)
            }
        },
        _onStaticMapClicked: function() {
            if (b.mapbox.canUseGL()) {
                this.model.set("isMapExpanded", true);
                this.model.fire("iacg");
                this.model.engaged()
            } else {
                this.views.detail.$address.click()
            }
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.ClickableItem,
        a = "is-highlighted";
    c.Views.Modules.NewsItem = function(d) {
        this.model = d.model;
        this.answer = d.answer;
        b.call(this, d);
        this._cacheElems(".js-news", ["image-wrapper", "img-placeholder", "title", "content"]);
        this.bindEvents([
            [this.$el, "mouseenter", this._onMouseEnter],
            [this.$el, "mouseleave", this._onMouseLeave],
            [this.$el, "touchstart", this._onTouchStart],
            [this.model, "change:image", this._onImageFetched],
            [this.model, "change:highlighted", this._onHighlightedChanged],
            [c.device, "resize", this._onResize]
        ]);
        this._updateEllipsis()
    };
    c.Views.Modules.NewsItem.prototype = $.extend({}, b.prototype, {
        template: "news_module_item",
        getWidth: function() {
            if (this._width) {
                return this._width
            }
            this._width = this.$el.outerWidth(true);
            return this._width
        },
        _render: function(d) {
            b.prototype._render.call(this, this.model)
        },
        _updateEllipsis: function() {
            this.$title.ellipsis({
                id: this.model.id + "-title"
            });
            this.$content.ellipsis({
                id: this.model.id + "-content"
            })
        },
        _onImageFetched: function() {
            var d = DDG.getImageProxyURL(this.model.image);
            this.$img = $('<div class="module--news__image" style="background-image:url(' + d + ')"></div>');
            this.$imagewrapper.append(this.$img);
            this.$imgplaceholder.hide()
        },
        _onMouseEnter: function() {
            this.model.highlight()
        },
        _onMouseLeave: function() {
            this.model.unhighlight()
        },
        _onClick: function(f, d) {
            this.model.highlight();
            b.prototype._onClick.call(this, f, d)
        },
        _onHighlightedChanged: function() {
            this.$el.toggleClass(a, !!this.model.highlighted)
        },
        _onResize: function() {
            this._updateEllipsis();
            delete this._width
        },
        _onTouchStart: function() {
            this.answer.engaged()
        }
    })
}(DDG);
! function(d) {
    var c = d.Views.Modules.Base,
        b = 3,
        a = 12;
    d.Views.Modules.News = function(e) {
        e.viewModel = e.model;
        c.call(this, e);
        this.views = {
            items: [],
            itemsById: {}
        };
        this._cacheElems(".js-news-module", ["items", "more", "title", "left", "right"]);
        this.bindEvents([
            [this.model, "change:items", this._updateItems]
        ]);
        if (d.device.isMobileDevice) {
            this.$items.on("touchstart touchend", this._updateVisibleItems.bind(this, true))
        }
        if (this.model.items.length) {
            this._updateItems()
        } else {
            this.model.loadDeferred()
        }
    };
    d.Views.Modules.News.prototype = $.extend({}, c.prototype, {
        template: "news_module",
        _updateItems: function() {
            if (this._rendered) {
                return
            }
            this._rendered = true;
            this.$title.removeClass("is-hidden");
            var f = this.model.items;
            this._showingSlider = !d.device.isMobileDevice && f.length > b;
            var g = this._showingSlider || f.length > a;
            if (g) {
                this.$more.removeClass("is-hidden");
                this.bindEvents([
                    [this.$more, "click", this._onMoreClick],
                    [this.$title, "click", this._onMoreClick]
                ])
            } else {
                if (f.length === 2) {
                    this.$el.addClass("has-two-items")
                } else {
                    if (f.length === 1) {
                        this.$el.addClass("has-one-item")
                    }
                }
            }
            for (var h = 0; h < a; h++) {
                var j = f[h];
                if (!j) {
                    break
                }
                var e = new d.Views.Modules.NewsItem({
                    appendTo: this.$items,
                    model: j,
                    answer: this.model
                });
                this.views.items.push(e);
                this.views.itemsById[j.id] = e
            }
            this._width = this.$el.width();
            if (d.device.isEnglish && !d.device.isMobile) {
                this.views.feedback = new d.Views.Feedback.FeedbackPrompt({
                    category: "news",
                    promptText: "Are these links helpful?",
                    appendTo: this.$el
                })
            }
            if (this._showingSlider) {
                this._updateVisibleItems(true);
                this._initSlider()
            } else {
                this._updateVisibleItems()
            }
            this._selectItemFromQueryString()
        },
        _initSlider: function() {
            this._currentPage = 0;
            var e = this.views.items.length;
            this._lastPage = Math.ceil(e / b) - 1;
            this.$right.removeClass("is-hidden");
            this.bindEvents([
                [this.$left, "click", this._onLeftClick],
                [this.$right, "click", this._onRightClick],
                [d.device, "resize", this._onResize]
            ])
        },
        _selectItemFromQueryString: function() {
            var j = d.history.get("iai"),
                f = d.history.get("ia");
            if (this.model.nameId !== f || typeof j === "undefined") {
                return
            }
            var h = this.model.itemsById[j];
            h && h.highlight();
            if (!this._showingSlider) {
                return
            }
            for (var g = 0; g < this.views.items.length; g++) {
                if (this.views.itemsById[j] === this.views.items[g]) {
                    var e = Math.floor(g / b);
                    this._scrollToPage(e, false);
                    break
                }
            }
        },
        _updateVisibleItems: function(m) {
            var e = this.$items.scrollLeft(),
                f = e + this._width,
                j = 0;
            if (m) {
                e = Math.min(e - this._width, 0);
                f += this._width
            }
            for (var h = 0; h < this.views.items.length; h++) {
                var k = this.views.items[h],
                    n = k.getWidth(),
                    g = j + n;
                if (j >= f) {
                    break
                }
                if (g > e) {
                    k.model.set("visible", true)
                }
                j += n
            }
        },
        _scrollToPage: function(f, g) {
            g = g || (typeof g === "undefined");
            var h = this.views.items[0].getWidth(),
                e = h * f * b;
            e -= 2;
            if (g) {
                this.$items.animate({
                    scrollLeft: e
                }, this._updateVisibleItems.bind(this, true))
            } else {
                this.$items.scrollLeft(e);
                this._updateVisibleItems(true)
            }
            if (f === 0) {
                this.$left.addClass("is-hidden")
            } else {
                this.$left.removeClass("is-hidden")
            }
            if (f === this._lastPage) {
                this.$right.addClass("is-hidden")
            } else {
                this.$right.removeClass("is-hidden")
            }
            this._currentPage = f
        },
        _onMoreClick: function(f) {
            f.preventDefault();
            this.model.engaged();
            this.model.fire("iacg");
            d.duckbar.open("news")
        },
        _onLeftClick: function() {
            var e = Math.max(0, this._currentPage - 1);
            this._scrollToPage(e);
            this.model.engaged()
        },
        _onRightClick: function() {
            var e = Math.min(this._lastPage, this._currentPage + 1);
            this._scrollToPage(e);
            this.model.engaged()
        },
        _onResize: function() {
            var e = this.$el.width();
            if (this._width === e) {
                return
            }
            this._scrollToPage(this._currentPage, false);
            this._width = e
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Modules.Base,
        c = 57,
        e = 20,
        d = 110;
    b.Views.Modules.Images = function(f) {
        f.viewModel = f.model;
        a.call(this, f);
        this._updateContainerDimensions();
        this._numRows = Math.floor(this._containerHeight / d);
        this._cacheElems(".js-images", ["show-more", "thumbnails"]);
        this.bindEvents([
            [this.model, "change:items", this._onItemsChanged],
            [this.model, "change:failed", this._onItemsChanged],
            [b.device, "resize", this._onResize],
            [this.$showmore, "click", this._onMoreClick]
        ]);
        this.model.loadDeferred()
    };
    b.Views.Modules.Images.prototype = $.extend({}, a.prototype, {
        template: "images_module",
        _render: function() {
            a.prototype._render.call(this, this.model)
        },
        _openImagesIA: function() {
            this.model.engaged();
            b.duckbar.open("images", {})
        },
        _updateContainerDimensions: function() {
            this._containerHeight = this.$parent.height() - c;
            this._containerWidth = this.$parent.width() - e
        },
        _onItemsChanged: function() {
            if (!this.model.items.length) {
                this.$parent.css({
                    height: "0px",
                    overflow: "hidden"
                });
                return
            }
            var h = [];
            for (var f = 0; f < this._numRows; f++) {
                var g = this.model.getModuleRow(h.length, this._containerWidth, this._containerHeight / this._numRows);
                h = h.concat(g)
            }
            if (h.length) {
                this.$el.css({
                    visibility: "visible"
                })
            } else {
                this.$parent.css({
                    height: "0px",
                    overflow: "hidden"
                });
                return
            }
            this.$thumbnails.append(b.$exec_template("images_module_thumbnails", h));
            this.$(".js-images-link").on("click", this._onItemClick.bind(this))
        },
        _onItemClick: function(g) {
            g.preventDefault();
            g.stopPropagation();
            var h = $(g.currentTarget).data("id");
            this._openImagesIA();
            var f = this.model.itemsById[h];
            f && f.select()
        },
        _onMoreClick: function(f) {
            f.preventDefault();
            this.model.fire("iacg");
            this._openImagesIA()
        },
        _onResize: function() {
            this.$thumbnails.empty();
            this._updateContainerDimensions();
            this._onItemsChanged()
        }
    })
}(DDG);
! function(d) {
    var c = d.Views.Modules,
        a = c.Base,
        b = {
            maps_maps: {
                desktop: 285
            },
            news: {
                desktop: 292,
                mobile: 248
            }
        };
    c.Placeholder = function(e) {
        this.signalWait = e.signalWait;
        this.timeAdded = new Date().getTime();
        a.call(this, e);
        this.show();
        this.updateHeight()
    };
    c.Placeholder.prototype = $.extend({}, a.prototype, {
        template: "module_placeholder",
        isModule: true,
        updateHeight: function() {
            if (!b[this.signalWait]) {
                return
            }
            var e;
            if (d.device.isMobile && b[this.signalWait].mobile) {
                e = b[this.signalWait].mobile
            } else {
                e = b[this.signalWait].desktop
            }
            this.$el.height(e)
        },
        showImages: function(e) {
            this.views.images = new d.Views.Modules.Images({
                model: e,
                appendTo: this.$el
            })
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Modules.Base;
    b.Views.Modules.Places = function(c) {
        a.call(this, c);
        this.bindEvents([
            [this.$el, "click", this._onClick],
            [this.$toggle, "click", this._onToggleClick],
            [this.model, "change:expanded", this._onExpandedChange]
        ]);
        this._updateExpandedState()
    };
    b.Views.Modules.Places.prototype = $.extend({}, a.prototype, {
        template: "places_module",
        _render: function(c) {
            a.prototype._render.call(this, c);
            this._cacheElems(".js-places-module", ["content", "toggle", "more", "less"]);
            this._viewClass = (this.model.items.length > 1) ? "PlacesMultiple" : "PlacesSingle";
            this.views.module = new b.Views[this._viewClass]({
                appendTo: this.$content,
                model: this.model
            });
            if (b.device.isEnglish) {
                this.$el.addClass("has-feedback-prompt");
                this.views.feedback = new b.Views.Feedback.FeedbackPrompt({
                    category: "maps",
                    promptText: "Is this helpful?",
                    appendTo: this.$el
                })
            }
        },
        _updateExpandedState: function() {
            if (this.model.isExpandable()) {
                this.$toggle.show();
                this.$more.toggleClass("is-hidden");
                this.$less.toggleClass("is-hidden")
            }
        },
        _onExpandedChange: function() {
            this._updateExpandedState()
        },
        _onClick: function(d) {
            d.stopPropagation();
            this.model.engaged();
            var c = $(d.target).hasClass("js-place-detail-hours-toggle") || $(d.target).hasClass("js-place-hours-close");
            if (b.device.isMobileDevice && !c) {
                this.model.toggleExpand()
            }
        },
        _onToggleClick: function(c) {
            c.stopPropagation();
            this.model.engaged();
            this.model.toggleExpand()
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.Verticals.Base = function(c) {
        this.views = {
            items: [],
            itemsById: {}
        };
        a.call(this, c);
        this.$results = this.$(".js-vertical-results");
        this.$moduleWrapper = this.$(".js-vertical-sidebar-modules");
        this._createFilterDropdowns();
        this.bindEvents([
            [b.device, "resize", this._onResize],
            [this.model, "change:active", this._onActiveChanged],
            [this.model, "change:items", this._onItemsChanged],
            [this.model, "no-results", this._onNoMoreResults],
            [this.model, "change:failed", this._onFailed],
            [this.model, "change:isRequerying", this._onRequeryingChanged],
            [this.model, "change:isLoading", this._onLoadingChanged]
        ]);
        if (this.model.active) {
            this.show()
        }
        if (this.model.items.length) {
            this._updateItems()
        } else {
            if (this.model.failed) {
                this.showNoResults()
            }
        }
        if (b.feedback.showInVertical) {
            this._showFeedbackBtn()
        } else {
            b.feedback.on("change:showInVertical", this._showFeedbackBtn.bind(this))
        }
    };
    b.Views.Verticals.Base.prototype = $.extend({}, a.prototype, {
        isValid: function() {
            return true
        },
        show: function() {
            this.$el.removeClass("is-hidden");
            b.keyboard.set("namespace", this.model.id);
            b.hidden.set("iar", this.model.id)
        },
        hide: function() {
            this.$el.addClass("is-hidden");
            b.keyboard.clear("namespace");
            b.hidden.clear("iar", this.model.id)
        },
        showNoResults: function() {
            var c = (this.model.meta.itemType || l("Results"));
            if (!this.$noResults) {
                this.$noResults = b.$exec_template("no_results_vertical", {
                    query: b.get_query(),
                    resultType: c.toLowerCase()
                });
                this.$results.append(this.$noResults)
            }
            this.$noResults.show();
            this._showingNoResults = true
        },
        hideNoResults: function() {
            this.$noResults.hide();
            this._showingNoResults = false
        },
        addModule: function(e, d) {
            if (!this.views.modules) {
                this.views.modules = {}
            }
            if (this.views.modules[e.id]) {
                return
            }
            var c = new b.Utils.TabViewBuilder();
            this.views.modules[e.id] = c.build({
                appendTo: this.$moduleWrapper,
                model: e,
                viewModel: d
            })
        },
        _render: function(c) {
            c.id = this.model.id;
            a.prototype._render.call(this, c)
        },
        _updateItems: function() {
            if (this._showingNoResults) {
                this.hideNoResults()
            }
            for (var c = 0; c < this.model.items.length; c++) {
                var d = this.model.items[c];
                if (this.views.itemsById[d.id]) {
                    continue
                }
                this._appendItem(d)
            }
        },
        _appendItem: function(d) {
            if (!this.itemClass) {
                throw new Error("Can't append item to vertical, no item class was defined")
            }
            var c = new b.Views.Verticals[this.itemClass]({
                model: d,
                answer: this.model,
                appendTo: this.$results
            });
            this.views.items.push(c);
            this.views.itemsById[d.id] = c
        },
        _createFilterDropdowns: function() {
            this.views.filters = new b.Views.Dropdowns.FilterContainer({
                $el: $(".js-vertical-filters"),
                answer: this.model
            })
        },
        _showFeedbackBtn: function() {
            if (this.views.feedback) {
                return
            }
            this.views.feedback = new b.Views.Feedback.Button({
                appendTo: this.$(".js-vertical-bottom-right"),
                category: this.model.id,
                extraData: {
                    vertical: this.model.nameId
                }
            })
        },
        _onFailed: function() {
            if (!this.model.failed) {
                return
            }
            if (!this.model.items.length) {
                this.showNoResults()
            } else {
                this._updateItems()
            }
        },
        _onActiveChanged: function() {
            if (this.model.active) {
                this.show()
            } else {
                this.hide()
            }
        },
        _onItemsChanged: function() {
            this._updateItems()
        },
        _onRequeryingChanged: function(d) {
            this.$el.toggleClass("is-requerying", d);
            if (!d) {
                for (var c = 0; c < this.views.items.length; c++) {
                    this.views.items[c].destroy()
                }
                this.views.items = [];
                this.views.itemsById = {}
            }
        },
        _onLoadingChanged: $.noop,
        _onResize: $.noop,
        _onNoMoreResults: $.noop
    })
}(DDG);
! function(c) {
    var a = c.Views.Verticals.Base,
        b = 70;
    c.Views.Verticals.VerticalLinks = function(d) {
        a.call(this, d);
        this.bindEvents([
            [c.device, "scroll", this._onScroll]
        ]);
        if (c.settings.isDefault("kk")) {
            this.bindEvents([
                [c.keyboard, "up." + this.model.id, this._onUp],
                [c.keyboard, "j." + this.model.id, this._onUp],
                [c.keyboard, "down." + this.model.id, this._onDown],
                [c.keyboard, "k." + this.model.id, this._onDown],
                [c.keyboard, "enter." + this.model.id, this._onEnter]
            ])
        }
        this.$results.on("click", ".js-result-more", this._onLoadMoreClick.bind(this));
        this._pageNumber = 1;
        this._selectItemFromQuerystring()
    };
    c.Views.Verticals.VerticalLinks.prototype = $.extend({}, a.prototype, {
        template: "vertical_links",
        itemClass: "VerticalLinkItem",
        _addSpellingMessage: function() {
            if (this.$spelling) {
                return
            }
            this.$spelling = new c.Views.SpellingMessage({
                before: this.$results.selector,
                model: c.search.spelling,
                ia: this.model.id
            })
        },
        _updateItems: function() {
            this._removeLoadMore();
            if (this.model.usingSpellingBackfill) {
                this._addSpellingMessage()
            }
            if (this.views.items.length) {
                this._addSeparator()
            }
            a.prototype._updateItems.call(this);
            delete this._height;
            this._selectItemFromQuerystring();
            if (!this._showingNoResults) {
                if (this.model.canLoadMore()) {
                    this.$loadMore = c.$exec_template("vertical_load_more");
                    this.$results.append(this.$loadMore)
                } else {
                    this._showNoMoreResults()
                }
            }
            this._onScroll()
        },
        _appendItem: function(d) {
            a.prototype._appendItem.call(this, d);
            d.set("visible", true)
        },
        _showNoMoreResults: function() {
            this._removeLoadMore();
            if (!this.$noMoreResults) {
                this.$noMoreResults = c.$exec_template("no_more_results_vertical");
                this.$results.append(this.$noMoreResults)
            }
        },
        _removeLoadMore: function() {
            if (this.$loadMore) {
                this.$loadMore.remove();
                delete this.$loadMore
            }
        },
        _addSeparator: function() {
            this._pageNumber++;
            new c.Views.Verticals.VerticalSeparator({
                appendTo: this.$results,
                pageNumber: this._pageNumber
            })
        },
        _selectItemFromQuerystring: function() {
            if (this._selectedItemFromQS) {
                return
            }
            var f = c.history.get("iai"),
                d = c.history.get("ia");
            if (this.model.nameId === d && typeof f !== "undefined") {
                var e = this.model.itemsById[f];
                if (e) {
                    e.highlight();
                    this._updateScrollPosition();
                    this._selectedItemFromQS = true
                }
            }
        },
        _highlightFirstVisibleItem: function() {
            var e = this.views.items,
                g = c.device.scrollTop(),
                d;
            if (!e.length) {
                return
            }
            if (g === 0) {
                d = e[0]
            } else {
                g += b + c.get_header_height();
                for (var f = 0; f < e.length; f++) {
                    if (e[f].getBounds().top > g) {
                        d = e[f];
                        break
                    }
                }
            }
            if (d) {
                d.model.highlight();
                this._updateScrollPosition()
            }
        },
        _isHighlightedItemVisible: function() {
            var e = this.model.highlightedItem && this.views.itemsById[this.model.highlightedItem.id];
            if (!e) {
                return
            }
            var d = e.getBounds(),
                g = c.device.scrollTop(),
                f = c.device.height;
            return d.top > g && d.bottom < g + f
        },
        _updateScrollPosition: function() {
            var g = this.model.highlightedItem && this.views.itemsById[this.model.highlightedItem.id];
            if (!g) {
                return
            }
            var f = g.getBounds(),
                e = f.top - b - c.get_header_height(),
                d = f.bottom + b,
                i = c.device.scrollTop(),
                h = c.device.height;
            e = Math.max(0, e);
            if (e < i) {
                c.device.scrollTop(e)
            } else {
                if (d > i + h) {
                    c.device.scrollTop(d - h)
                }
            }
        },
        _getHeight: function() {
            if (this._height) {
                return this._height
            }
            this._height = this.$results.height();
            return this._height
        },
        _onLoadingChanged: function(d) {
            if (this.$loadMore) {
                this.$loadMore.toggleClass("is-loading", d)
            }
        },
        _onNoMoreResults: function() {
            this._showNoMoreResults()
        },
        _onRequeryingChanged: function(d) {
            a.prototype._onRequeryingChanged.call(this, d);
            if (!d) {
                delete this._height;
                this._pageNumber = 1;
                this.$(".js-result-sep").remove();
                this.$loadMore && this.$loadMore.remove();
                delete this.$loadMore;
                this.$noMoreResults && this.$noMoreResults.remove();
                delete this.$noMoreResults
            }
        },
        _onLoadMoreClick: function() {
            this.model.loadMore()
        },
        _onResize: function() {
            a.prototype._onResize.call(this)
        },
        _onScroll: function() {
            if (!this.model.active) {
                return
            }
            var d = this._getHeight();
            if (c.settings.isDefault("kc") && d && c.device.scrollTop() > d - (c.device.height * 2)) {
                this.model.loadMore()
            }
        },
        _onUp: function(d) {
            d.preventDefault();
            if (this.model.highlightedItem === this.model.items[0]) {
                return this.model.highlightedItem.unhighlight()
            }
            if (this._isHighlightedItemVisible()) {
                this.model.highlightPrevItem();
                this._updateScrollPosition()
            } else {
                if (c.device.scrollTop() > 0) {
                    this._highlightFirstVisibleItem()
                }
            }
        },
        _onDown: function(d) {
            d.preventDefault();
            if (this._isHighlightedItemVisible()) {
                this.model.highlightNextItem();
                this._updateScrollPosition()
            } else {
                this._highlightFirstVisibleItem()
            }
        },
        _onEnter: function(f) {
            f.preventDefault();
            var d = this.model.highlightedItem;
            if (d) {
                this.views.itemsById[d.id].open()
            }
        }
    })
}(DDG);
! function(c) {
    var b = c.Views.ClickableItem,
        a = "highlight";
    c.Views.Verticals.VerticalLinkItem = function(d) {
        this.model = d.model;
        this.answer = d.answer;
        b.call(this, d);
        this._cacheElems(".js-result", ["image-wrapper", "img-placeholder"]);
        this.bindEvents([
            [this.$el, "mouseenter", this._onMouseEnter],
            [this.$el, "mouseleave", this._onMouseLeave],
            [this.model, "change:image", this._onImageFetched],
            [this.model, "change:highlighted", this._onHighlightedChanged],
            [c.device, "resize", this._onResize]
        ])
    };
    c.Views.Verticals.VerticalLinkItem.prototype = $.extend({}, b.prototype, {
        template: "vertical_link_item",
        open: function() {
            this.$el.click()
        },
        getBounds: function() {
            if (!this._bounds) {
                var e = this.$el.offset().top,
                    d = e + this.$el.height();
                this._bounds = {
                    top: e,
                    bottom: d
                }
            }
            return this._bounds
        },
        _render: function(d) {
            b.prototype._render.call(this, $.extend(d, {
                urlAboveSnippet: !c.settings.isDefault("kai"),
                favicons: c.settings.isDefault("kf")
            }))
        },
        _onImageFetched: function() {
            var d = DDG.getImageProxyURL(this.model.image);
            this.$img = $('<div class="result__image__img" style="background-image:url(' + d + ')"></div>');
            this.$imagewrapper.append(this.$img);
            this.$imgplaceholder.hide()
        },
        _onHighlightedChanged: function() {
            this.$el.toggleClass(a, !!this.model.highlighted)
        },
        _onClick: function(f, d) {
            this.model.highlight();
            b.prototype._onClick.call(this, f, d)
        },
        _onMouseEnter: function(d) {
            if (c.keyboard.active) {
                return
            }
            this.model.highlight()
        },
        _onMouseLeave: function(d) {
            this.model.unhighlight()
        },
        _onResize: function(d) {
            delete this._bounds
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Base;
    b.Views.Verticals.VerticalSeparator = function(c) {
        a.call(this, c)
    };
    b.Views.Verticals.VerticalSeparator.prototype = $.extend({}, a.prototype, {
        template: "vertical_separator",
        _render: function(e) {
            var f = b.settings.get("kv"),
                d, c;
            if (f === "-1") {
                return
            }
            if (f === "m") {
                c = true
            } else {
                if (f === "l") {
                    d = e.pageNumber
                } else {
                    if (f === "1") {
                        c = true;
                        d = e.pageNumber
                    }
                }
            }
            a.prototype._render.call(this, {
                line: c,
                pageNumber: d
            })
        }
    })
}(DDG);
! function(b) {
    var a = b.Views.Verticals.Base;
    b.Views.Verticals.VerticalMap = function(c) {
        this._glMapModel = new b.Models.MapboxGLMap({
            locations: c.locations,
            pixelId: c.model.pixelId
        });
        a.call(this, c);
        this.bindEvents([
            [this.model, "change:isMapExpanded", this._onMapExpandedChanged]
        ])
    };
    b.Views.Verticals.VerticalMap.prototype = $.extend({}, a.prototype, {
        template: "vertical_map",
        show: function() {
            this.views.closeControl ? this.views.closeControl.show() : this._renderCloseControl();
            this.views.zoomControl ? this.views.zoomControl.show() : this._renderZoomControl();
            this.views.modeControl ? this.views.modeControl.show() : this._renderModeControl();
            if (b.mapbox.canUseGL()) {
                this._renderGLMap()
            } else {
                this._renderStaticMap()
            }
            b.history.set({
                iaxm: this.model.nameId
            });
            a.prototype.show.call(this)
        },
        hide: function() {
            this.views.closeControl.hide();
            this.views.zoomControl.hide();
            this.views.modeControl.hide();
            b.history.clear("iaxm");
            a.prototype.hide.call(this)
        },
        _render: function(c) {
            c = c || {};
            a.prototype._render.call(this, c);
            this._cacheElems(".js-vertical-map", ["map", "control-topright", "control-bottomleft"]);
            this.show()
        },
        _updateItems: function() {
            this.itemClass = "VerticalLinkItem";
            a.prototype._updateItems.call(this)
        },
        _renderCloseControl: function() {
            if (this.views.closeControl) {
                return
            }
            this.views.closeControl = new b.Views.Mapbox.CloseControl({
                model: this.model,
                appendTo: this.$controltopright
            })
        },
        _renderZoomControl: function() {
            if (this.views.zoomControl) {
                return
            }
            this.views.zoomControl = new b.Views.Mapbox.ZoomControl({
                model: this._glMapModel,
                appendTo: this.$controltopright
            })
        },
        _renderModeControl: function() {
            if (this.views.modeControl) {
                return
            }
            this.views.modeControl = new b.Views.Mapbox.ModeControl({
                model: this._glMapModel,
                appendTo: this.$controlbottomleft
            })
        },
        _renderGLMap: function() {
            if (this.views.glMap) {
                return
            }
            this.views.glMap = new b.Views.Mapbox.GLMap({
                appendTo: this.$map,
                model: this._glMapModel
            })
        },
        _renderStaticMap: function() {
            if (this.views.staticMap) {
                return
            }
            this.views.staticMap = new b.Views.Mapbox.StaticMap({
                markers: this.model.items,
                width: b.$win.width(),
                height: b.$win.height(),
                appendTo: this.$map
            });
            this.bindEvents([
                [this.views.staticMap, "click", this._onStaticMapClicked]
            ])
        },
        _onMapExpandedChanged: function() {
            if (this.model.isMapExpanded) {
                this.show()
            } else {
                this.hide()
            }
        }
    })
}(DDG);
this["DDG"] = this["DDG"] || {};
this["DDG"]["templates"] = this["DDG"]["templates"] || {};
this["DDG"]["templates"]["base"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<div class="zci  zci--';
    if (d = b.id) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.id);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '" id="zci-';
    if (d = b.id) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.id);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '">';
    if (d = b.content) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.content);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    if (a || a === 0) {
        f += a
    }
    f += "</div>";
    return f
});
this["DDG"]["templates"]["detail_slider"] = Handlebars.template(function(e, m, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, g = "function",
        i = this.escapeExpression,
        n = this;

    function c(s, r) {
        var o = "",
            p, q;
        o += 'style="height:';
        if (q = d.detailHeight) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.detailHeight);
            p = typeof q === g ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        o += i(p) + ';"';
        return o
    }

    function a(p, o) {
        return '<i class="tile-nav tile-nav--d tile-nav--prev js-detail-prev"></i><i class="tile-nav tile-nav--d tile-nav--next js-detail-next"></i>'
    }
    h += '<div class="detail  detail--slider  detail--';
    if (f = d.id) {
        b = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.id);
        b = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '  is-hidden" ';
    b = d["if"].call(m, (m && m.detailHeight), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '><div class="detail__wrap"><i class="detail__close  js-detail-close"></i>';
    b = d["if"].call(m, (m && m.mobileAndNoTouch), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, a, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '<div class="detail__panes  js-detail-panes"></div><div class="detail__controls"><i class="tile-nav--sm  tile-nav--sm--prev  js-detail-prev"></i><i class="tile-nav--sm  tile-nav--sm--next  js-detail-next"></i></div></div></div>';
    return h
});
this["DDG"]["templates"]["detail_slider_pane"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<div class="detail__pane" style="line-height:';
    if (d = b.lineHeight) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.lineHeight);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + ";width:";
    if (d = b.width) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.width);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + ";height:";
    if (d = b.height) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.height);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + ";padding:";
    if (d = b.padding) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.padding);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + ";padding-left:";
    if (d = b.paddingLeft) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.paddingLeft);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + ';"></div>';
    return f
});
this["DDG"]["templates"]["duckbar_tab"] = Handlebars.template(function(e, m, d, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    i = i || {};
    var h = "",
        b, f, o, n = this,
        g = "function",
        k = d.helperMissing;

    function c(q, p) {
        return "is-hidden"
    }

    function a(q, p) {
        return "is-active"
    }
    h += '<li class="zcm__item  ';
    b = d["if"].call(m, (m && m.visible), {
        hash: {},
        inverse: n.program(1, c, i),
        fn: n.noop,
        data: i
    });
    if (b || b === 0) {
        h += b
    }
    h += '"><a data-zci-link="';
    if (f = d.id) {
        b = f.call(m, {
            hash: {},
            data: i
        })
    } else {
        f = (m && m.id);
        b = typeof f === g ? f.call(m, {
            hash: {},
            data: i
        }) : f
    }
    if (b || b === 0) {
        h += b
    }
    h += '" class="zcm__link  js-zci-link  js-zci-link--';
    if (f = d.id) {
        b = f.call(m, {
            hash: {},
            data: i
        })
    } else {
        f = (m && m.id);
        b = typeof f === g ? f.call(m, {
            hash: {},
            data: i
        }) : f
    }
    if (b || b === 0) {
        h += b
    }
    h += " ";
    b = d["if"].call(m, (m && m.active), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, a, i),
        data: i
    });
    if (b || b === 0) {
        h += b
    }
    h += '" href="#">';
    b = (f = d.l || (m && m.l), o = {
        hash: {},
        data: i
    }, f ? f.call(m, (m && m.name), o) : k.call(m, "l", (m && m.name), o));
    if (b || b === 0) {
        h += b
    }
    h += "</a></li>";
    return h
});
this["DDG"]["templates"]["maps"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<div class="zci zci--';
    if (d = b.id) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.id);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '  mapview" id="zci-';
    if (d = b.id) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.id);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '"></div>';
    return f
});
this["DDG"]["templates"]["maps_marker_popup"] = Handlebars.template(function(c, o, m, h, r) {
    this.compilerInfo = [4, ">= 1.0.0"];
    m = this.merge(m, c.helpers);
    r = r || {};
    var n = "",
        e, b = "function",
        a = this.escapeExpression,
        k = this;

    function j(u, t) {
        return "mapview-marker__popup--single-line"
    }

    function i(u, t) {
        return "has-directions js-popup-directions-container"
    }

    function g(x, v) {
        var t = "",
            u;
        u = m["if"].call(x, (x && x.name), {
            hash: {},
            inverse: k.noop,
            fn: k.program(6, f, v),
            data: v
        });
        if (u || u === 0) {
            t += u
        }
        u = m["if"].call(x, (x && x.address), {
            hash: {},
            inverse: k.noop,
            fn: k.program(8, d, v),
            data: v
        });
        if (u || u === 0) {
            t += u
        }
        u = m["if"].call(x, (x && x.displayLatLon), {
            hash: {},
            inverse: k.noop,
            fn: k.program(10, s, v),
            data: v
        });
        if (u || u === 0) {
            t += u
        }
        return t
    }

    function f(y, x) {
        var t = "",
            u, v;
        t += '<span class="mapview-marker__popup__name">';
        if (v = m.name) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.name);
            u = typeof v === b ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        t += a(u) + "</span>";
        return t
    }

    function d(y, x) {
        var t = "",
            u, v;
        t += '<span class="mapview-marker__popup__address">';
        if (v = m.address) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.address);
            u = typeof v === b ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        t += a(u) + "</span>";
        return t
    }

    function s(y, x) {
        var t = "",
            u, v;
        t += '<span class="mapview-marker__popup__latlon">';
        if (v = m.displayLatLon) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.displayLatLon);
            u = typeof v === b ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        if (u || u === 0) {
            t += u
        }
        t += "</span>";
        return t
    }

    function q(x, v) {
        var t = "",
            u;
        t += '<a class="js-directions-link" href="#">';
        u = m["if"].call(x, (x && x.name), {
            hash: {},
            inverse: k.noop,
            fn: k.program(13, p, v),
            data: v
        });
        if (u || u === 0) {
            t += u
        }
        u = m["if"].call(x, (x && x.address), {
            hash: {},
            inverse: k.noop,
            fn: k.program(8, d, v),
            data: v
        });
        if (u || u === 0) {
            t += u
        }
        u = m["if"].call(x, (x && x.displayLatLon), {
            hash: {},
            inverse: k.noop,
            fn: k.program(10, s, v),
            data: v
        });
        if (u || u === 0) {
            t += u
        }
        t += "</a>";
        return t
    }

    function p(y, x) {
        var t = "",
            u, v;
        t += '<div class="mapview-marker__popup__directions-name"><span class="ddgsi mapview-marker__popup__directions-icon">d</span><span class="mapview-marker__popup__name">';
        if (v = m.name) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.name);
            u = typeof v === b ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        t += a(u) + "</span></div>";
        return t
    }
    n += '<span class="mapview-marker__popup ';
    e = m["if"].call(o, (o && o.singleLinePopup), {
        hash: {},
        inverse: k.noop,
        fn: k.program(1, j, r),
        data: r
    });
    if (e || e === 0) {
        n += e
    }
    n += " ";
    e = m["if"].call(o, (o && o.showDirections), {
        hash: {},
        inverse: k.noop,
        fn: k.program(3, i, r),
        data: r
    });
    if (e || e === 0) {
        n += e
    }
    n += '">';
    e = m.unless.call(o, (o && o.showDirections), {
        hash: {},
        inverse: k.program(12, q, r),
        fn: k.program(5, g, r),
        data: r
    });
    if (e || e === 0) {
        n += e
    }
    n += "</span>";
    return n
});
this["DDG"]["templates"]["metabar"] = Handlebars.template(function(d, r, p, j, z) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, d.helpers);
    z = z || {};
    var q = "",
        g, a, o = p.helperMissing,
        c = "function",
        n = this,
        b = this.escapeExpression;

    function m(B, A) {
        return "has-dropdowns"
    }

    function k(B, A) {
        return "is-hidden"
    }

    function i(F, E) {
        var A = "",
            C, D, B;
        A += '<div class="metabar__more-at">';
        C = (D = p.moreAt || (F && F.moreAt), B = {
            hash: {},
            data: E
        }, D ? D.call(F, F, "none", B) : o.call(F, "moreAt", F, "none", B));
        if (C || C === 0) {
            A += C
        }
        A += "</div> ";
        return A
    }

    function h(E, D) {
        var A = "",
            B, C;
        A += '<div class="metabar__secondary-text  hide--screen-s">';
        if (C = p.secondaryText) {
            B = C.call(E, {
                hash: {},
                data: D
            })
        } else {
            C = (E && E.secondaryText);
            B = typeof C === c ? C.call(E, {
                hash: {},
                data: D
            }) : C
        }
        if (B || B === 0) {
            A += B
        }
        B = p["if"].call(E, (E && E.showMoreAt), {
            hash: {},
            inverse: n.noop,
            fn: n.program(8, f, D),
            data: D
        });
        if (B || B === 0) {
            A += B
        }
        A += "</div>";
        return A
    }

    function f(B, A) {
        return '<span class="sep"></span>'
    }

    function y(B, A) {
        return '<span class="metabar__attribution__sep sep"></span>'
    }

    function x(C, B) {
        var A;
        A = p["if"].call(C, (C && C.secondaryText), {
            hash: {},
            inverse: n.noop,
            fn: n.program(10, y, B),
            data: B
        });
        if (A || A === 0) {
            return A
        } else {
            return ""
        }
    }

    function v(D, C) {
        var A, B;
        if (B = p.primaryText) {
            A = B.call(D, {
                hash: {},
                data: C
            })
        } else {
            B = (D && D.primaryText);
            A = typeof B === c ? B.call(D, {
                hash: {},
                data: C
            }) : B
        }
        if (A || A === 0) {
            return A
        } else {
            return ""
        }
    }

    function u(C, B) {
        var A;
        A = p["if"].call(C, (C && C.sourceNoTransform), {
            hash: {},
            inverse: n.program(19, s, B),
            fn: n.program(17, t, B),
            data: B
        });
        if (A || A === 0) {
            return A
        } else {
            return ""
        }
    }

    function t(F, E) {
        var A = "",
            C, D, B;
        A += '<span class="metabar__item-type--no-transform">' + b((D = p.l || (F && F.l), B = {
            hash: {},
            data: E
        }, D ? D.call(F, (F && F.itemType), B) : o.call(F, "l", (F && F.itemType), B))) + "</span> ";
        C = (D = p.l || (F && F.l), B = {
            hash: {},
            data: E
        }, D ? D.call(F, "for", B) : o.call(F, "l", "for", B));
        if (C || C === 0) {
            A += C
        }
        A += ' <span class="metabar__term">';
        if (D = p.searchTerm) {
            C = D.call(F, {
                hash: {},
                data: E
            })
        } else {
            D = (F && F.searchTerm);
            C = typeof D === c ? D.call(F, {
                hash: {},
                data: E
            }) : D
        }
        A += b(C) + "</span>";
        return A
    }

    function s(F, E) {
        var A = "",
            C, D, B;
        A += '<span class="metabar__item-type">' + b((D = p.l || (F && F.l), B = {
            hash: {},
            data: E
        }, D ? D.call(F, (F && F.itemType), B) : o.call(F, "l", (F && F.itemType), B))) + "</span> ";
        C = (D = p.l || (F && F.l), B = {
            hash: {},
            data: E
        }, D ? D.call(F, "for", B) : o.call(F, "l", "for", B));
        if (C || C === 0) {
            A += C
        }
        A += ' <span class="metabar__term">';
        if (D = p.searchTerm) {
            C = D.call(F, {
                hash: {},
                data: E
            })
        } else {
            D = (F && F.searchTerm);
            C = typeof D === c ? D.call(F, {
                hash: {},
                data: E
            }) : D
        }
        A += b(C) + "</span>";
        return A
    }

    function e(B, A) {
        return '<div class="metabar__dropdowns-wrap"><div class="metabar__dropdowns js-metabar-dropdowns is-loading"></div></div>'
    }
    q += '<div class="metabar  metabar--fixed  js-zcm-sticky ';
    g = p["if"].call(r, (r && r.showDropdowns), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, z),
        data: z
    });
    if (g || g === 0) {
        q += g
    }
    q += " ";
    g = p["if"].call(r, (r && r.hidden), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, k, z),
        data: z
    });
    if (g || g === 0) {
        q += g
    }
    q += '"><div class="metabar__in  js-metabar"><span class="metabar__mode-wrap"><a class="btn--icon  metabar__mode  js-metabar-mode  is-disabled">';
    if (a = p.initialModeIcon) {
        g = a.call(r, {
            hash: {},
            data: z
        })
    } else {
        a = (r && r.initialModeIcon);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: z
        }) : a
    }
    q += b(g) + "</a></span>";
    g = p["if"].call(r, (r && r.showMoreAt), {
        hash: {},
        inverse: n.noop,
        fn: n.program(5, i, z),
        data: z
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, (r && r.secondaryText), {
        hash: {},
        inverse: n.noop,
        fn: n.program(7, h, z),
        data: z
    });
    if (g || g === 0) {
        q += g
    }
    q += '<div class="metabar__attribution  js-attribution  hide--screen-s  is-hidden">';
    g = p["if"].call(r, (r && r.showMoreAt), {
        hash: {},
        inverse: n.program(12, x, z),
        fn: n.program(10, y, z),
        data: z
    });
    if (g || g === 0) {
        q += g
    }
    q += '</div><div class="metabar__primary-text js-metabar-primary is-loading">';
    g = p["if"].call(r, (r && r.primaryText), {
        hash: {},
        inverse: n.program(16, u, z),
        fn: n.program(14, v, z),
        data: z
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div>";
    g = p["if"].call(r, (r && r.showDropdowns), {
        hash: {},
        inverse: n.noop,
        fn: n.program(21, e, z),
        data: z
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div>";
    return q
});
this["DDG"]["templates"]["tiles"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<div class="zci  zci--';
    if (d = b.id) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.id);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '  zci--type--tiles" id="zci-';
    if (d = b.id) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.id);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '"><div class="tileview  js-tileview"><div class="tile-wrap"><div class="zci__main  zci__main--tiles  js-tiles  has-tiles  has-nav">';
    if (d = b.content) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.content);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    if (a || a === 0) {
        f += a
    }
    f += "</div></div></div></div>";
    return f
});
this["DDG"]["templates"]["tiles_scroll_nav"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<i class="tile-nav  tile-nav--';
    if (d = b.dir) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.dir);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '  js-tile-nav"></i>';
    return f
});
this["DDG"]["templates"]["topic_menu"] = Handlebars.template(function(d, e, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, d.helpers);
    c = c || {};
    return '<div class="zcm  zcm--sub  zcm--topics"><ul class="zcm__menu  zcm__menu--topics js-topic-menu"></ul></div>'
});
this["DDG"]["templates"]["topic_menu_item"] = Handlebars.template(function(d, k, c, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    i = i || {};
    var g = "",
        a, e, o, f = "function",
        h = this.escapeExpression,
        n = this,
        m = c.blockHelperMissing;

    function b(s, r) {
        var p = "",
            q;
        p += '<sup class="zcm__link__count  js-topic-menu-count">' + h(((q = ((q = (s && s.items)), q == null || q === false ? q : q.length)), typeof q === f ? q.apply(s) : q)) + "</sup>";
        return p
    }
    g += '<li class="zcm__item"><a class="zcm__link--sub  js-topic-menu-link" href="#">';
    if (e = c.name) {
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
    g += h(a);
    o = {
        hash: {},
        inverse: n.program(1, b, i),
        fn: n.noop,
        data: i
    };
    if (e = c.hideCount) {
        a = e.call(k, o)
    } else {
        e = (k && k.hideCount);
        a = typeof e === f ? e.call(k, o) : e
    }
    if (!c.hideCount) {
        a = m.call(k, a, {
            hash: {},
            inverse: n.program(1, b, i),
            fn: n.noop,
            data: i
        })
    }
    if (a || a === 0) {
        g += a
    }
    g += "</a></li>";
    return g
});
this["DDG"]["templates"]["answer_detail"] = Handlebars.template(function(c, i, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, d, e = "function";
    f += '<div class="cw"><div class="zci__main  zci__main--detail"><div class="zci__body">';
    if (d = b.Answer) {
        a = d.call(i, {
            hash: {},
            data: g
        })
    } else {
        d = (i && i.Answer);
        a = typeof d === e ? d.call(i, {
            hash: {},
            data: g
        }) : d
    }
    if (a || a === 0) {
        f += a
    }
    f += "</div></div></div>";
    return f
});
this["DDG"]["templates"]["base_detail"] = Handlebars.template(function(e, k, d, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    h = h || {};
    var g = "",
        b, f = "function",
        j = d.helperMissing,
        o = this;

    function c(s, r) {
        var p, q;
        if (q = d.content) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.content);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        if (p || p === 0) {
            return p
        } else {
            return ""
        }
    }

    function a(t, s) {
        var q, r, p;
        q = (r = d.include || (t && t.include), p = {
            hash: {},
            data: s
        }, r ? r.call(t, ((q = ((q = (t && t.meta)), q == null || q === false ? q : q.options)), q == null || q === false ? q : q.content), p) : j.call(t, "include", ((q = ((q = (t && t.meta)), q == null || q === false ? q : q.options)), q == null || q === false ? q : q.content), p));
        if (q || q === 0) {
            return q
        } else {
            return ""
        }
    }

    function n(u, t) {
        var p = "",
            r, s, q;
        p += '<div class="c-base__links">';
        r = (s = d.moreAt || (u && u.moreAt), q = {
            hash: {
                className: ("c-base__link")
            },
            data: t
        }, s ? s.call(u, (u && u.meta), "none", q) : j.call(u, "moreAt", (u && u.meta), "none", q));
        if (r || r === 0) {
            p += r
        }
        r = d["if"].call(u, ((r = ((r = (u && u.meta)), r == null || r === false ? r : r.options)), r == null || r === false ? r : r.moreText), {
            hash: {},
            inverse: o.noop,
            fn: o.program(6, m, t),
            data: t
        });
        if (r || r === 0) {
            p += r
        }
        p += "</div>";
        return p
    }

    function m(u, t) {
        var p = "",
            r, s, q;
        p += '<span class="c-base__link--more  sep--before">';
        r = (s = d.formatSubtitle || (u && u.formatSubtitle), q = {
            hash: {},
            data: t
        }, s ? s.call(u, ((r = ((r = (u && u.meta)), r == null || r === false ? r : r.options)), r == null || r === false ? r : r.moreText), q) : j.call(u, "formatSubtitle", ((r = ((r = (u && u.meta)), r == null || r === false ? r : r.options)), r == null || r === false ? r : r.moreText), q));
        if (r || r === 0) {
            p += r
        }
        p += "</span>";
        return p
    }
    g += '<div class="cw"><div class="zci__main  zci__main--detail  c-base"><div class="zci__body">';
    b = d["if"].call(k, (k && k.content), {
        hash: {},
        inverse: o.program(3, a, h),
        fn: o.program(1, c, h),
        data: h
    });
    if (b || b === 0) {
        g += b
    }
    b = d["if"].call(k, ((b = ((b = (k && k.meta)), b == null || b === false ? b : b.options)), b == null || b === false ? b : b.moreAt), {
        hash: {},
        inverse: o.noop,
        fn: o.program(5, n, h),
        data: h
    });
    if (b || b === 0) {
        g += b
    }
    g += "</div></div></div>";
    return g
});
this["DDG"]["templates"]["base_spice_detail"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, d, k, e = "function",
        i = b.helperMissing;
    f += '<div class="cw"><div class="zci__main  zci__main--detail"><div class="zci__body">';
    if (d = b.content) {
        a = d.call(j, {
            hash: {},
            data: g
        })
    } else {
        d = (j && j.content);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: g
        }) : d
    }
    if (a || a === 0) {
        f += a
    }
    f += '<div class="zci__links">';
    a = (d = b.moreAt || (j && j.moreAt), k = {
        hash: {},
        data: g
    }, d ? d.call(j, ((a = (j && j.item)), a == null || a === false ? a : a.meta), k) : i.call(j, "moreAt", ((a = (j && j.item)), a == null || a === false ? a : a.meta), k));
    if (a || a === 0) {
        f += a
    }
    f += "</div></div></div></div>";
    return f
});
this["DDG"]["templates"]["basic_icon_detail"] = Handlebars.template(function(d, p, n, h, x) {
    this.compilerInfo = [4, ">= 1.0.0"];
    n = this.merge(n, d.helpers);
    x = x || {};
    var o = "",
        e, b = "function",
        a = this.escapeExpression,
        m = n.helperMissing,
        k = this;

    function j(z, y) {
        return "has-aux"
    }

    function i(D, C) {
        var y = "",
            A, B, z;
        y += '<div class="c-icon__img-wrap ' + a(((A = ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.elClass)), A == null || A === false ? A : A.iconImage)), typeof A === b ? A.apply(D) : A)) + '"><img class="c-icon__img" src="';
        A = (B = n.imageProxy || (D && D.imageProxy), z = {
            hash: {},
            data: C
        }, B ? B.call(D, (D && D.image), z) : m.call(D, "imageProxy", (D && D.image), z));
        if (A || A === 0) {
            y += A
        }
        y += '" /></div>';
        return y
    }

    function g(C, B) {
        var y = "",
            z, A;
        y += '<span class="c-icon__badge ' + a(((z = ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.elClass)), z == null || z === false ? z : z.iconBadge)), typeof z === b ? z.apply(C) : z)) + " " + a(((z = ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.elClass)), z == null || z === false ? z : z.bgColor)), typeof z === b ? z.apply(C) : z)) + '">';
        if (A = n.badge) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.badge);
            z = typeof A === b ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        y += a(z) + "</span>";
        return y
    }

    function f(C, B) {
        var y = "",
            z, A;
        y += '<h1 class="c-icon__title ' + a(((z = ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.elClass)), z == null || z === false ? z : z.iconTitle)), typeof z === b ? z.apply(C) : z)) + '"><a href="';
        if (A = n.url) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.url);
            z = typeof A === b ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        if (z || z === 0) {
            y += z
        }
        y += '">';
        if (A = n.title) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.title);
            z = typeof A === b ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        y += a(z) + "</a></h1>";
        return y
    }

    function c(D, C) {
        var y = "",
            A, B, z;
        y += '<span class="c-icon__sub ' + a(((A = ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.elClass)), A == null || A === false ? A : A.iconSubtitle)), typeof A === b ? A.apply(D) : A)) + '">';
        A = (B = n.formatSubtitle || (D && D.formatSubtitle), z = {
            hash: {},
            data: C
        }, B ? B.call(D, (D && D.subtitle), z) : m.call(D, "formatSubtitle", (D && D.subtitle), z));
        if (A || A === 0) {
            y += A
        }
        y += "</span>";
        return y
    }

    function v(D, C) {
        var y = "",
            A, B, z;
        y += '<span class="c-icon__sub ' + a(((A = ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.elClass)), A == null || A === false ? A : A.iconAltSubtitle)), typeof A === b ? A.apply(D) : A)) + '">';
        A = (B = n.formatSubtitle || (D && D.formatSubtitle), z = {
            hash: {},
            data: C
        }, B ? B.call(D, (D && D.altSubtitle), z) : m.call(D, "formatSubtitle", (D && D.altSubtitle), z));
        if (A || A === 0) {
            y += A
        }
        y += "</span>";
        return y
    }

    function u(D, C) {
        var y = "",
            A, B, z;
        y += '<div class="c-icon__content ' + a(((A = ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.elClass)), A == null || A === false ? A : A.iconContent)), typeof A === b ? A.apply(D) : A)) + '">';
        A = (B = n.include || (D && D.include), z = {
            hash: {},
            data: C
        }, B ? B.call(D, ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.options)), A == null || A === false ? A : A.content), z) : m.call(D, "include", ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.options)), A == null || A === false ? A : A.content), z));
        if (A || A === 0) {
            y += A
        }
        y += "</div>";
        return y
    }

    function t(A, z) {
        var y;
        y = n["if"].call(A, (A && A.description), {
            hash: {},
            inverse: k.noop,
            fn: k.program(16, s, z),
            data: z
        });
        if (y || y === 0) {
            return y
        } else {
            return ""
        }
    }

    function s(C, B) {
        var y = "",
            z, A;
        y += '<div class="c-icon__content ' + a(((z = ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.elClass)), z == null || z === false ? z : z.iconContent)), typeof z === b ? z.apply(C) : z)) + '">';
        if (A = n.description) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.description);
            z = typeof A === b ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        y += a(z) + "</div>";
        return y
    }

    function r(D, C) {
        var y = "",
            A, B, z;
        y += '<div class="c-icon__links ' + a(((A = ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.elClass)), A == null || A === false ? A : A.iconLinks)), typeof A === b ? A.apply(D) : A)) + '">';
        A = (B = n.moreAt || (D && D.moreAt), z = {
            hash: {
                className: ("c-icon__link")
            },
            data: C
        }, B ? B.call(D, (D && D.meta), "none", z) : m.call(D, "moreAt", (D && D.meta), "none", z));
        if (A || A === 0) {
            y += A
        }
        A = n["if"].call(D, ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.options)), A == null || A === false ? A : A.moreText), {
            hash: {},
            inverse: k.noop,
            fn: k.program(19, q, C),
            data: C
        });
        if (A || A === 0) {
            y += A
        }
        y += "</div>";
        return y
    }

    function q(D, C) {
        var y = "",
            A, B, z;
        y += '<span class="c-icon__link--more  sep--before">';
        A = (B = n.formatSubtitle || (D && D.formatSubtitle), z = {
            hash: {},
            data: C
        }, B ? B.call(D, ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.options)), A == null || A === false ? A : A.moreText), z) : m.call(D, "formatSubtitle", ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.options)), A == null || A === false ? A : A.moreText), z));
        if (A || A === 0) {
            y += A
        }
        y += "</span>";
        return y
    }
    o += '<div class="cw ';
    e = n["if"].call(p, (p && p.infoboxData), {
        hash: {},
        inverse: k.noop,
        fn: k.program(1, j, x),
        data: x
    });
    if (e || e === 0) {
        o += e
    }
    o += '"><div class="zci__main  c-icon"><div class="zci__body"><div class="c-icon__head">';
    e = n["if"].call(p, (p && p.image), {
        hash: {},
        inverse: k.noop,
        fn: k.program(3, i, x),
        data: x
    });
    if (e || e === 0) {
        o += e
    }
    e = n["if"].call(p, (p && p.badge), {
        hash: {},
        inverse: k.noop,
        fn: k.program(5, g, x),
        data: x
    });
    if (e || e === 0) {
        o += e
    }
    o += '<div class="c-icon__body">';
    e = n["if"].call(p, (p && p.title), {
        hash: {},
        inverse: k.noop,
        fn: k.program(7, f, x),
        data: x
    });
    if (e || e === 0) {
        o += e
    }
    e = n["if"].call(p, (p && p.subtitle), {
        hash: {},
        inverse: k.noop,
        fn: k.program(9, c, x),
        data: x
    });
    if (e || e === 0) {
        o += e
    }
    e = n["if"].call(p, (p && p.altSubtitle), {
        hash: {},
        inverse: k.noop,
        fn: k.program(11, v, x),
        data: x
    });
    if (e || e === 0) {
        o += e
    }
    o += "</div></div>";
    e = n["if"].call(p, ((e = ((e = (p && p.meta)), e == null || e === false ? e : e.options)), e == null || e === false ? e : e.content), {
        hash: {},
        inverse: k.program(15, t, x),
        fn: k.program(13, u, x),
        data: x
    });
    if (e || e === 0) {
        o += e
    }
    e = n["if"].call(p, ((e = ((e = (p && p.meta)), e == null || e === false ? e : e.options)), e == null || e === false ? e : e.moreAt), {
        hash: {},
        inverse: k.noop,
        fn: k.program(18, r, x),
        data: x
    });
    if (e || e === 0) {
        o += e
    }
    o += "</div></div></div>";
    return o
});
this["DDG"]["templates"]["basic_info_detail"] = Handlebars.template(function(f, t, r, k, B) {
    this.compilerInfo = [4, ">= 1.0.0"];
    r = this.merge(r, f.helpers);
    B = B || {};
    var s = "",
        i, a, d, p = this,
        c = "function",
        q = r.helperMissing,
        b = this.escapeExpression;

    function o(D, C) {
        return "has-aux"
    }

    function n(H, G) {
        var C = "",
            E, F, D;
        C += '<div class="c-info__img-wrap  c-info__img-wrap--';
        E = r["if"].call(H, (H && H.imageTile), {
            hash: {},
            inverse: p.program(6, j, G),
            fn: p.program(4, m, G),
            data: G
        });
        if (E || E === 0) {
            C += E
        }
        C += '"><a href="';
        if (F = r.url) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.url);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        if (E || E === 0) {
            C += E
        }
        C += '" class="c-info__img-wrap__in"><img class="c-info__img  js-detail-img" src="';
        E = (F = r.imageProxy || (H && H.imageProxy), D = {
            hash: {},
            data: G
        }, F ? F.call(H, (H && H.image), D) : q.call(H, "imageProxy", (H && H.image), D));
        if (E || E === 0) {
            C += E
        }
        C += '" /></a></div>';
        return C
    }

    function m(D, C) {
        return "tile"
    }

    function j(D, C) {
        return "clip"
    }

    function h(G, F) {
        var C = "",
            D, E;
        C += '<h1 class="c-info__title  ';
        D = r["if"].call(G, (G && G.subtitle), {
            hash: {},
            inverse: p.noop,
            fn: p.program(9, e, F),
            data: F
        });
        if (D || D === 0) {
            C += D
        }
        C += '"><a href="';
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
        if (D || D === 0) {
            C += D
        }
        C += '">';
        if (E = r.title) {
            D = E.call(G, {
                hash: {},
                data: F
            })
        } else {
            E = (G && G.title);
            D = typeof E === c ? E.call(G, {
                hash: {},
                data: F
            }) : E
        }
        C += b(D) + "</a>";
        D = r["if"].call(G, (G && G.subtitle), {
            hash: {},
            inverse: p.noop,
            fn: p.program(11, A, F),
            data: F
        });
        if (D || D === 0) {
            C += D
        }
        C += "</h1>";
        return C
    }

    function e(D, C) {
        return "has-sub"
    }

    function A(H, G) {
        var C = "",
            E, F, D;
        C += '<span class="c-info__title__sub">';
        E = (F = r.formatSubtitle || (H && H.formatSubtitle), D = {
            hash: {},
            data: G
        }, F ? F.call(H, (H && H.subtitle), D) : q.call(H, "formatSubtitle", (H && H.subtitle), D));
        if (E || E === 0) {
            C += E
        }
        C += "</span>";
        return C
    }

    function z(H, G) {
        var C = "",
            E, F, D;
        C += '<div class="c-info__content ';
        E = r["if"].call(H, ((E = ((E = (H && H.meta)), E == null || E === false ? E : E.options)), E == null || E === false ? E : E.chompContent), {
            hash: {},
            inverse: p.noop,
            fn: p.program(14, y, G),
            data: G
        });
        if (E || E === 0) {
            C += E
        }
        C += '">';
        E = (F = r.include || (H && H.include), D = {
            hash: {},
            data: G
        }, F ? F.call(H, ((E = ((E = (H && H.meta)), E == null || E === false ? E : E.options)), E == null || E === false ? E : E.content), D) : q.call(H, "include", ((E = ((E = (H && H.meta)), E == null || E === false ? E : E.options)), E == null || E === false ? E : E.content), D));
        if (E || E === 0) {
            C += E
        }
        C += "</div>";
        return C
    }

    function y(D, C) {
        return "chomp js-ellipsis"
    }

    function x(E, D) {
        var C;
        C = r["if"].call(E, (E && E.description), {
            hash: {},
            inverse: p.noop,
            fn: p.program(17, v, D),
            data: D
        });
        if (C || C === 0) {
            return C
        } else {
            return ""
        }
    }

    function v(G, F) {
        var C = "",
            D, E;
        C += '<div class="c-info__content chomp js-ellipsis">';
        if (E = r.description) {
            D = E.call(G, {
                hash: {},
                data: F
            })
        } else {
            E = (G && G.description);
            D = typeof E === c ? E.call(G, {
                hash: {},
                data: F
            }) : E
        }
        C += b(D) + "</div>";
        return C
    }

    function u(G, F) {
        var D, E, C;
        D = (E = r.moreAt || (G && G.moreAt), C = {
            hash: {
                className: ("c-info__link"),
                sourceOnlyMobile: ("true")
            },
            data: F
        }, E ? E.call(G, (G && G.meta), "none", C) : q.call(G, "moreAt", (G && G.meta), "none", C));
        if (D || D === 0) {
            return D
        } else {
            return ""
        }
    }

    function g(H, G) {
        var C = "",
            E, F, D;
        C += '<span class="c-info__link--more  sep--before">';
        E = (F = r.formatSubtitle || (H && H.formatSubtitle), D = {
            hash: {},
            data: G
        }, F ? F.call(H, ((E = ((E = (H && H.meta)), E == null || E === false ? E : E.options)), E == null || E === false ? E : E.moreText), D) : q.call(H, "formatSubtitle", ((E = ((E = (H && H.meta)), E == null || E === false ? E : E.options)), E == null || E === false ? E : E.moreText), D));
        if (E || E === 0) {
            C += E
        }
        C += "</span>";
        return C
    }
    s += '<div class="c-info--cw  cw ';
    i = r["if"].call(t, (t && t.infoboxData), {
        hash: {},
        inverse: p.noop,
        fn: p.program(1, o, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    s += '"><div class="zci__main  c-info"><div class="zci__body">';
    i = r["if"].call(t, (t && t.image), {
        hash: {},
        inverse: p.noop,
        fn: p.program(3, n, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    s += '<div class="c-info__body">';
    i = r["if"].call(t, (t && t.title), {
        hash: {},
        inverse: p.noop,
        fn: p.program(8, h, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    i = r["if"].call(t, ((i = ((i = (t && t.meta)), i == null || i === false ? i : i.options)), i == null || i === false ? i : i.content), {
        hash: {},
        inverse: p.program(16, x, B),
        fn: p.program(13, z, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    s += '<div class="c-info__links">';
    i = (a = r.include || (t && t.include), d = {
        hash: {
            className: ("c-info__link  c-info__link--chomp"),
            sep: (((i = ((i = (t && t.meta)), i == null || i === false ? i : i.options)), i == null || i === false ? i : i.moreAt))
        },
        data: B
    }, a ? a.call(t, "chomp_link", d) : q.call(t, "include", "chomp_link", d));
    if (i || i === 0) {
        s += i
    }
    i = r["if"].call(t, ((i = ((i = (t && t.meta)), i == null || i === false ? i : i.options)), i == null || i === false ? i : i.moreAt), {
        hash: {},
        inverse: p.noop,
        fn: p.program(19, u, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    i = r["if"].call(t, ((i = ((i = (t && t.meta)), i == null || i === false ? i : i.options)), i == null || i === false ? i : i.moreText), {
        hash: {},
        inverse: p.noop,
        fn: p.program(21, g, B),
        data: B
    });
    if (i || i === 0) {
        s += i
    }
    s += "</div></div></div></div></div>";
    return s
});
this["DDG"]["templates"]["goodie_0_inputs"] = Handlebars.template(function(d, i, c, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    g = g || {};
    var f = "",
        a, e = "function",
        j = this;

    function b(o, n) {
        var k = "",
            m;
        k += '<h4 class="zci__subheader"><span class="zci__operation">';
        m = ((m = ((m = (o && o.Answer)), m == null || m === false ? m : m.operation)), typeof m === e ? m.apply(o) : m);
        if (m || m === 0) {
            k += m
        }
        k += "</span></h4>";
        return k
    }
    f += '<div class="cw"><div class="zci__main  zci__main--detail"><div class="zci__body"><h3 class="zci__caption  zci__result">';
    a = ((a = ((a = (i && i.Answer)), a == null || a === false ? a : a.result)), typeof a === e ? a.apply(i) : a);
    if (a || a === 0) {
        f += a
    }
    f += "</h3>";
    a = c["if"].call(i, ((a = (i && i.Answer)), a == null || a === false ? a : a.operation), {
        hash: {},
        inverse: j.noop,
        fn: j.program(1, b, g),
        data: g
    });
    if (a || a === 0) {
        f += a
    }
    f += "</div></div></div>";
    return f
});
this["DDG"]["templates"]["goodie_1_inputs"] = Handlebars.template(function(c, i, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var e = "",
        a, d = "function",
        f = this.escapeExpression;
    e += '<div class="cw"><div class="zci__main  zci__main--detail"><div class="zci__body"><h3 class="zci__caption  zci__result">';
    a = ((a = ((a = (i && i.Answer)), a == null || a === false ? a : a.result)), typeof a === d ? a.apply(i) : a);
    if (a || a === 0) {
        e += a
    }
    e += '</h3><h4 class="zci__subheader"><span class="zci__operation  tx-clr--lt2">';
    a = ((a = ((a = (i && i.Answer)), a == null || a === false ? a : a.operation)), typeof a === d ? a.apply(i) : a);
    if (a || a === 0) {
        e += a
    }
    e += ':</span> <span class="zci__input">' + f(((a = ((a = ((a = (i && i.Answer)), a == null || a === false ? a : a.input)), a == null || a === false ? a : a[0])), typeof a === d ? a.apply(i) : a)) + "</span></h4></div></div></div>";
    return e
});
this["DDG"]["templates"]["goodie_2_inputs"] = Handlebars.template(function(c, i, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var e = "",
        a, d = "function",
        f = this.escapeExpression;
    e += '<div class="cw"><div class="zci__main  zci__main--detail"><div class="zci__body"><h3 class="zci__caption  zci__result">';
    a = ((a = ((a = (i && i.Answer)), a == null || a === false ? a : a.result)), typeof a === d ? a.apply(i) : a);
    if (a || a === 0) {
        e += a
    }
    e += '</h3><h4 class="zci__subheader"><span class="zci__operation  tx-clr--lt2">';
    a = ((a = ((a = (i && i.Answer)), a == null || a === false ? a : a.operation)), typeof a === d ? a.apply(i) : a);
    if (a || a === 0) {
        e += a
    }
    e += '</span> <span class="zci__input">' + f(((a = ((a = ((a = (i && i.Answer)), a == null || a === false ? a : a.input)), a == null || a === false ? a : a[0])), typeof a === d ? a.apply(i) : a)) + '</span> <span class="tx-clr--lt2">&dash;</span> <span class="zci__input">' + f(((a = ((a = ((a = (i && i.Answer)), a == null || a === false ? a : a.input)), a == null || a === false ? a : a[1])), typeof a === d ? a.apply(i) : a)) + "</span></h4></div></div></div>";
    return e
});
this["DDG"]["templates"]["info_detail"] = Handlebars.template(function(e, r, p, i, v) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    v = v || {};
    var q = "",
        g, a, d, c = "function",
        b = this.escapeExpression,
        n = this,
        o = p.helperMissing;

    function m(y, x) {
        return "has-aux"
    }

    function k(B, A) {
        var x = "",
            y, z;
        x += '<div class="c-info__img-wrap  c-info__img-wrap--';
        y = p["if"].call(B, (B && B.imageTile), {
            hash: {},
            inverse: n.program(6, h, A),
            fn: n.program(4, j, A),
            data: A
        });
        if (y || y === 0) {
            x += y
        }
        x += '"><a href="';
        if (z = p.AbstractURL) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.AbstractURL);
            y = typeof z === c ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        if (y || y === 0) {
            x += y
        }
        x += '" class="c-info__img-wrap__in"><img class="c-info__img  js-sized-img" src="';
        if (z = p.Image) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.Image);
            y = typeof z === c ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        if (y || y === 0) {
            x += y
        }
        x += '" ';
        y = p["if"].call(B, (B && B.imageLoadingSize), {
            hash: {},
            inverse: n.noop,
            fn: n.program(8, f, A),
            data: A
        });
        if (y || y === 0) {
            x += y
        }
        x += " /></a></div>";
        return x
    }

    function j(y, x) {
        return "tile"
    }

    function h(y, x) {
        return "clip"
    }

    function f(A, z) {
        var x = "",
            y;
        x += 'style="width:' + b(((y = ((y = (A && A.imageLoadingSize)), y == null || y === false ? y : y.width)), typeof y === c ? y.apply(A) : y)) + "px;height:" + b(((y = ((y = (A && A.imageLoadingSize)), y == null || y === false ? y : y.height)), typeof y === c ? y.apply(A) : y)) + 'px;" ';
        return x
    }

    function u(B, A) {
        var y, z, x;
        y = (z = p.formatTitle || (B && B.formatTitle), x = {
            hash: {
                el: ("h1"),
                className: ("c-info__title"),
                href: ((B && B.AbstractURL)),
                ellipsis: (100)
            },
            data: A
        }, z ? z.call(B, (B && B.Heading), x) : o.call(B, "formatTitle", (B && B.Heading), x));
        if (y || y === 0) {
            return y
        } else {
            return ""
        }
    }

    function t(B, A) {
        var y, z, x;
        y = (z = p.moreAt || (B && B.moreAt), x = {
            hash: {
                className: ("c-info__link"),
                sourceOnlyMobile: (true)
            },
            data: A
        }, z ? z.call(B, (B && B.meta), (B && B.AbstractURL), x) : o.call(B, "moreAt", (B && B.meta), (B && B.AbstractURL), x));
        if (y || y === 0) {
            return y
        } else {
            return ""
        }
    }

    function s(C, B) {
        var x = "",
            z, A, y;
        x += '<a class="c-info__link  c-info__link--url" href="';
        if (A = p.FirstURL) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.FirstURL);
            z = typeof A === c ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        x += b(z) + '"><span class="sep  c-info__links__sep"></span>' + b((A = p.domain || (C && C.domain), y = {
            hash: {},
            data: B
        }, A ? A.call(C, (C && C.FirstURL), y) : o.call(C, "domain", (C && C.FirstURL), y))) + "</a>";
        return x
    }
    q += '<div class="c-info--cw  cw ';
    g = p["if"].call(r, (r && r.infoboxData), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += '"><div class="zci__main  c-info"><div class="zci__body">';
    g = p["if"].call(r, (r && r.Image), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, k, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += '<div class="c-info__body">';
    g = p["if"].call(r, (r && r.Heading), {
        hash: {},
        inverse: n.noop,
        fn: n.program(10, u, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += '<div class="c-info__content chomp js-ellipsis">';
    if (a = p.Abstract) {
        g = a.call(r, {
            hash: {},
            data: v
        })
    } else {
        a = (r && r.Abstract);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: v
        }) : a
    }
    if (g || g === 0) {
        q += g
    }
    q += '</div><div class="c-info__links">';
    g = (a = p.include || (r && r.include), d = {
        hash: {
            className: ("c-info__link  c-info__link--chomp"),
            sep: ((r && r.meta))
        },
        data: v
    }, a ? a.call(r, "chomp_link", d) : o.call(r, "include", "chomp_link", d));
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, (r && r.meta), {
        hash: {},
        inverse: n.noop,
        fn: n.program(12, t, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    g = p.each.call(r, (r && r.Results), {
        hash: {
            to: ("0")
        },
        inverse: n.noop,
        fn: n.program(14, s, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div></div></div></div>";
    return q
});
this["DDG"]["templates"]["list_detail"] = Handlebars.template(function(f, r, p, j, v) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, f.helpers);
    v = v || {};
    var q = "",
        g, a, d, c = "function",
        b = this.escapeExpression,
        o = p.helperMissing,
        n = this;

    function m(B, A) {
        var x = "",
            y, z;
        x += '<h3 class="c-list__title">';
        if (z = p.title) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.title);
            y = typeof z === c ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += b(y) + "</h3>";
        return x
    }

    function k(C, B) {
        var x = "",
            z, A, y;
        x += '<p class="c-list__sub">';
        z = (A = p.formatSubtitle || (C && C.formatSubtitle), y = {
            hash: {},
            data: B
        }, A ? A.call(C, (C && C.subtitle), y) : o.call(C, "formatSubtitle", (C && C.subtitle), y));
        if (z || z === 0) {
            x += z
        }
        x += "</p>";
        return x
    }

    function i(B, A) {
        var y, z, x;
        y = (z = p.include || (B && B.include), x = {
            hash: {},
            data: A
        }, z ? z.call(B, ((y = ((y = (B && B.meta)), y == null || y === false ? y : y.options)), y == null || y === false ? y : y.subtitle_content), x) : o.call(B, "include", ((y = ((y = (B && B.meta)), y == null || y === false ? y : y.options)), y == null || y === false ? y : y.subtitle_content), x));
        if (y || y === 0) {
            return y
        } else {
            return ""
        }
    }

    function h(C, B) {
        var x = "",
            z, A, y;
        x += '<div class="c-list__content  chomp  js-chomp">';
        z = (A = p.include || (C && C.include), y = {
            hash: {},
            data: B
        }, A ? A.call(C, ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.options)), z == null || z === false ? z : z.content), y) : o.call(C, "include", ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.options)), z == null || z === false ? z : z.content), y));
        if (z || z === 0) {
            x += z
        }
        x += "</div>";
        return x
    }

    function e(A, z) {
        var x = "",
            y;
        x += '<div class="c-list__content  chomp  js-chomp"><ul class="c-list__items">';
        y = p.each.call(A, (A && A.list), {
            hash: {},
            inverse: n.noop,
            fn: n.programWithDepth(10, u, z, A),
            data: z
        });
        if (y || y === 0) {
            x += y
        }
        x += "</ul></div>";
        return x
    }

    function u(D, B, C) {
        var x = "",
            z, A, y;
        x += '<li class="c-list__item">';
        z = (A = p.include || (C && C.include), y = {
            hash: {},
            data: B
        }, A ? A.call(D, ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.options)), z == null || z === false ? z : z.list_content), y) : o.call(D, "include", ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.options)), z == null || z === false ? z : z.list_content), y));
        if (z || z === 0) {
            x += z
        }
        x += "</li>";
        return x
    }

    function t(B, A) {
        var y, z, x;
        y = (z = p.moreAt || (B && B.moreAt), x = {
            hash: {
                className: ("c-list__link")
            },
            data: A
        }, z ? z.call(B, (B && B.meta), "none", x) : o.call(B, "moreAt", (B && B.meta), "none", x));
        if (y || y === 0) {
            return y
        } else {
            return ""
        }
    }

    function s(C, B) {
        var x = "",
            z, A, y;
        x += '<span class="c-list__link--more  sep--before">';
        z = (A = p.formatSubtitle || (C && C.formatSubtitle), y = {
            hash: {},
            data: B
        }, A ? A.call(C, ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.options)), z == null || z === false ? z : z.moreText), y) : o.call(C, "formatSubtitle", ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.options)), z == null || z === false ? z : z.moreText), y));
        if (z || z === 0) {
            x += z
        }
        x += "</span>";
        return x
    }
    q += '<div class="cw"><div class="zci__main  c-list"><div class="zci__body">';
    g = p["if"].call(r, (r && r.title), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, (r && r.subtitle), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, k, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.subtitle_content), {
        hash: {},
        inverse: n.noop,
        fn: n.program(5, i, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.content), {
        hash: {},
        inverse: n.noop,
        fn: n.program(7, h, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.list_content), {
        hash: {},
        inverse: n.noop,
        fn: n.program(9, e, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += '<div class="c-list__links">';
    g = (a = p.include || (r && r.include), d = {
        hash: {
            className: ("c-list__link"),
            sep: (((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.moreAt))
        },
        data: v
    }, a ? a.call(r, "chomp_link", d) : o.call(r, "include", "chomp_link", d));
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.moreAt), {
        hash: {},
        inverse: n.noop,
        fn: n.program(12, t, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.moreText), {
        hash: {},
        inverse: n.noop,
        fn: n.program(14, s, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div></div></div>";
    return q
});
this["DDG"]["templates"]["lyrics_detail"] = Handlebars.template(function(e, k, d, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    h = h || {};
    var g = "",
        b, f, n, j = d.helperMissing,
        m = this;

    function c(p, o) {
        return "has-aux"
    }

    function a(s, r) {
        var p, q, o;
        p = (q = d.include || (s && s.include), o = {
            hash: {},
            data: r
        }, q ? q.call(s, "infobox", o) : j.call(s, "include", "infobox", o));
        if (p || p === 0) {
            return p
        } else {
            return ""
        }
    }
    g += '<div class="c-info--cw  cw ';
    b = d["if"].call(k, ((b = (k && k.data)), b == null || b === false ? b : b[1]), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, c, h),
        data: h
    });
    if (b || b === 0) {
        g += b
    }
    g += '"><div class="zci__main  c-info"><div class="zci__body  c-info__body">';
    b = (f = d.lyricsTitle || (k && k.lyricsTitle), n = {
        hash: {},
        data: h
    }, f ? f.call(k, (k && k.title), (k && k.url), n) : j.call(k, "lyricsTitle", (k && k.title), (k && k.url), n));
    if (b || b === 0) {
        g += b
    }
    g += '<div class="c-info__content  chomp js-ellipsis">';
    b = (f = d.lyricsAbstract || (k && k.lyricsAbstract), n = {
        hash: {},
        data: h
    }, f ? f.call(k, (k && k["abstract"]), n) : j.call(k, "lyricsAbstract", (k && k["abstract"]), n));
    if (b || b === 0) {
        g += b
    }
    g += '</div><div class="c-info__links">';
    b = (f = d.include || (k && k.include), n = {
        hash: {
            className: ("c-info__link  c-info__link--chomp  sep--after")
        },
        data: h
    }, f ? f.call(k, "chomp_link", n) : j.call(k, "include", "chomp_link", n));
    if (b || b === 0) {
        g += b
    }
    b = (f = d.moreAt || (k && k.moreAt), n = {
        hash: {
            className: ("c-info__link")
        },
        data: h
    }, f ? f.call(k, (k && k.url), (k && k.source), n) : j.call(k, "moreAt", (k && k.url), (k && k.source), n));
    if (b || b === 0) {
        g += b
    }
    g += "</div></div></div></div>";
    b = d["if"].call(k, ((b = ((b = (k && k.data)), b == null || b === false ? b : b[1])), b == null || b === false ? b : b.urlTitle), {
        hash: {},
        inverse: m.noop,
        fn: m.program(3, a, h),
        data: h
    });
    if (b || b === 0) {
        g += b
    }
    return g
});
this["DDG"]["templates"]["nlp_detail"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, d, k, i = b.helperMissing,
        e = "function";
    f += '<div class="c-info  c-info--body">';
    a = (d = b.formatTitle || (j && j.formatTitle), k = {
        hash: {
            el: ("h1"),
            className: ("c-info__title"),
            classNameSec: ("c-info__title--long"),
            href: ((j && j.url))
        },
        data: g
    }, d ? d.call(j, (j && j.heading), k) : i.call(j, "formatTitle", (j && j.heading), k));
    if (a || a === 0) {
        f += a
    }
    f += '<div class="c-info__content chomp js-ellipsis">';
    if (d = b["abstract"]) {
        a = d.call(j, {
            hash: {},
            data: g
        })
    } else {
        d = (j && j["abstract"]);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: g
        }) : d
    }
    if (a || a === 0) {
        f += a
    }
    f += '</div><div class="c-info__links">';
    a = (d = b.include || (j && j.include), k = {
        hash: {
            className: ("c-info__link  c-info__link--chomp  sep--after")
        },
        data: g
    }, d ? d.call(j, "chomp_link", k) : i.call(j, "include", "chomp_link", k));
    if (a || a === 0) {
        f += a
    }
    a = (d = b.moreAt || (j && j.moreAt), k = {
        hash: {
            className: ("c-info__link"),
            sourceOnlyMobile: ("true"),
            attributionAfter: ("true")
        },
        data: g
    }, d ? d.call(j, (j && j.meta), (j && j.url), k) : i.call(j, "moreAt", (j && j.meta), (j && j.url), k));
    if (a || a === 0) {
        f += a
    }
    f += "</div></div>";
    return f
});
this["DDG"]["templates"]["places_detail"] = Handlebars.template(function(H, a, G, q, O) {
    this.compilerInfo = [4, ">= 1.0.0"];
    G = this.merge(G, H.helpers);
    O = O || {};
    var m = "",
        r, i, n, F = G.helperMissing,
        L = this.escapeExpression,
        k = "function",
        e = this,
        u = G.blockHelperMissing;

    function E(U, T) {
        var P = "",
            R, S, Q;
        P += '<div class="tile__media__wrapper"><img src="' + L((S = G.imageProxy || (U && U.imageProxy), Q = {
            hash: {},
            data: T
        }, S ? S.call(U, (U && U.image), Q) : F.call(U, "imageProxy", (U && U.image), Q))) + '" alt="';
        if (S = G.title) {
            R = S.call(U, {
                hash: {},
                data: T
            })
        } else {
            S = (U && U.title);
            R = typeof S === k ? S.call(U, {
                hash: {},
                data: T
            }) : S
        }
        P += L(R) + '" class="tile__media__img" /></div>';
        return P
    }

    function D(Q, P) {
        return '<span class="ddgsi tile__media__no-img">@</span>'
    }

    function C(U, T) {
        var P = "",
            R, S, Q;
        P += '<div class="tile__more-wrap">';
        R = (S = G.moreAt || (U && U.moreAt), Q = {
            hash: {
                className: ("tile__more-link"),
                iconClassName: ("tile__favicon"),
                dynamicMoreAtText: (5)
            },
            data: T
        }, S ? S.call(U, (U && U.url), ((R = (U && U.meta)), R == null || R === false ? R : R.sourceName), Q) : F.call(U, "moreAt", (U && U.url), ((R = (U && U.meta)), R == null || R === false ? R : R.sourceName), Q));
        if (R || R === 0) {
            P += R
        }
        P += "</div>";
        return P
    }

    function z(Q, P) {
        return "has-hours js-tile-map-with-hours"
    }

    function t(T, S) {
        var Q, R, P;
        Q = (R = G.include || (T && T.include), P = {
            hash: {},
            data: S
        }, R ? R.call(T, ((Q = ((Q = (T && T.meta)), Q == null || Q === false ? Q : Q.options)), Q == null || Q === false ? Q : Q.detail_rating), P) : F.call(T, "include", ((Q = ((Q = (T && T.meta)), Q == null || Q === false ? Q : Q.options)), Q == null || Q === false ? Q : Q.detail_rating), P));
        if (Q || Q === 0) {
            return Q
        } else {
            return ""
        }
    }

    function y(S, R) {
        var P = "",
            Q;
        Q = G["if"].call(S, (S && S.rating), {
            hash: {},
            inverse: e.noop,
            fn: e.program(12, v, R),
            data: R
        });
        if (Q || Q === 0) {
            P += Q
        }
        Q = G["if"].call(S, (S && S.reviews), {
            hash: {},
            inverse: e.noop,
            fn: e.program(14, s, R),
            data: R
        });
        if (Q || Q === 0) {
            P += Q
        }
        return P
    }

    function v(T, S) {
        var Q, R, P;
        Q = (R = G.starRating || (T && T.starRating), P = {
            hash: {},
            data: S
        }, R ? R.call(T, (T && T.rating), P) : F.call(T, "starRating", (T && T.rating), P));
        if (Q || Q === 0) {
            return Q
        } else {
            return ""
        }
    }

    function s(T, S) {
        var Q, R, P;
        Q = (R = G.reviewCount || (T && T.reviewCount), P = {
            hash: {},
            data: S
        }, R ? R.call(T, (T && T.reviews), (T && T.url), P) : F.call(T, "reviewCount", (T && T.reviews), (T && T.url), P));
        if (Q || Q === 0) {
            return Q
        } else {
            return ""
        }
    }

    function p(Q, P) {
        return '<span class="sep"></span>'
    }

    function o(U, T) {
        var P = "",
            R, S, Q;
        P += '<span class="tile__price">';
        R = (S = G.priceSymbols || (U && U.priceSymbols), Q = {
            hash: {},
            data: T
        }, S ? S.call(U, (U && U.price), 4, Q) : F.call(U, "priceSymbols", (U && U.price), 4, Q));
        if (R || R === 0) {
            P += R
        }
        P += "</span>";
        return P
    }

    function j(S, R) {
        var P = "",
            Q;
        P += '<p class="tile__sub">';
        Q = G.each.call(S, (S && S.address_lines), {
            hash: {},
            inverse: e.noop,
            fn: e.program(21, h, R),
            data: R
        });
        if (Q || Q === 0) {
            P += Q
        }
        P += "</p>";
        return P
    }

    function h(R, Q) {
        var P = "";
        P += L((typeof R === k ? R.apply(R) : R)) + "<br />";
        return P
    }

    function g(R, Q) {
        var P;
        P = G["if"].call(R, (R && R.address), {
            hash: {},
            inverse: e.noop,
            fn: e.program(24, f, Q),
            data: Q
        });
        if (P || P === 0) {
            return P
        } else {
            return ""
        }
    }

    function f(T, S) {
        var P = "",
            Q, R;
        P += '<p class="tile__sub">';
        if (R = G.address) {
            Q = R.call(T, {
                hash: {},
                data: S
            })
        } else {
            R = (T && T.address);
            Q = typeof R === k ? R.call(T, {
                hash: {},
                data: S
            }) : R
        }
        P += L(Q) + "</p>";
        return P
    }

    function d(T, S) {
        var P = "",
            Q, R;
        P += '<a class="tile__phone" href="tel:';
        if (R = G.phone) {
            Q = R.call(T, {
                hash: {},
                data: S
            })
        } else {
            R = (T && T.phone);
            Q = typeof R === k ? R.call(T, {
                hash: {},
                data: S
            }) : R
        }
        P += L(Q) + '">';
        if (R = G.phone) {
            Q = R.call(T, {
                hash: {},
                data: S
            })
        } else {
            R = (T && T.phone);
            Q = typeof R === k ? R.call(T, {
                hash: {},
                data: S
            }) : R
        }
        P += L(Q) + "</a>";
        return P
    }

    function c(U, T) {
        var P = "",
            R, S, Q;
        P += '<div class="tile__hours-today"><span class="tile__hours-today__label">';
        R = (S = G.l || (U && U.l), Q = {
            hash: {},
            data: T
        }, S ? S.call(U, "Today", Q) : F.call(U, "l", "Today", Q));
        if (R || R === 0) {
            P += R
        }
        P += ':</span><a href="#" class="tile__hours-today__hours js-map-hours-expand ';
        R = G["if"].call(U, (U && U.hoursToday), {
            hash: {},
            inverse: e.program(29, b, T),
            fn: e.noop,
            data: T
        });
        if (R || R === 0) {
            P += R
        }
        P += '">';
        R = G["if"].call(U, (U && U.hoursToday), {
            hash: {},
            inverse: e.program(33, M, T),
            fn: e.program(31, N, T),
            data: T
        });
        if (R || R === 0) {
            P += R
        }
        P += "</a></div>";
        return P
    }

    function b(Q, P) {
        return "hours-closed"
    }

    function N(S, R) {
        var P, Q;
        if (Q = G.hoursToday) {
            P = Q.call(S, {
                hash: {},
                data: R
            })
        } else {
            Q = (S && S.hoursToday);
            P = typeof Q === k ? Q.call(S, {
                hash: {},
                data: R
            }) : Q
        }
        return L(P)
    }

    function M(T, S) {
        var Q, R, P;
        Q = (R = G.l || (T && T.l), P = {
            hash: {},
            data: S
        }, R ? R.call(T, "Closed", P) : F.call(T, "l", "Closed", P));
        if (Q || Q === 0) {
            return Q
        } else {
            return ""
        }
    }

    function K(Q, P) {
        return "tile__actions--small"
    }

    function J(U, T) {
        var P = "",
            R, S, Q;
        P += '<a class="tile__actions__btn tile__call btn js-tel-link" href="tel:';
        if (S = G.phone) {
            R = S.call(U, {
                hash: {},
                data: T
            })
        } else {
            S = (U && U.phone);
            R = typeof S === k ? S.call(U, {
                hash: {},
                data: T
            }) : S
        }
        P += L(R) + '">';
        R = (S = G.lp || (U && U.lp), Q = {
            hash: {},
            data: T
        }, S ? S.call(U, "maps_places", "Call", Q) : F.call(U, "lp", "maps_places", "Call", Q));
        if (R || R === 0) {
            P += R
        }
        P += "</a>";
        return P
    }

    function I(U, T) {
        var P = "",
            R, S, Q;
        P += '<div class="tile__directions js-directions-container"><a class="tile__actions__btn btn js-directions-link" href="';
        if (S = G.directions) {
            R = S.call(U, {
                hash: {},
                data: T
            })
        } else {
            S = (U && U.directions);
            R = typeof S === k ? S.call(U, {
                hash: {},
                data: T
            }) : S
        }
        P += L(R) + '">';
        R = (S = G.lp || (U && U.lp), Q = {
            hash: {},
            data: T
        }, S ? S.call(U, "maps_places", "Directions", Q) : F.call(U, "lp", "maps_places", "Directions", Q));
        if (R || R === 0) {
            P += R
        }
        P += "</a></div>";
        return P
    }

    function B(U, T) {
        var P = "",
            R, S, Q;
        P += '<div class="tile__hours-full"><span class="tile__hours__close  ddgsi  js-map-hours-close">X</span><table class="tile__hours-full__table">';
        Q = {
            hash: {},
            inverse: e.noop,
            fn: e.program(42, A, T),
            data: T
        };
        if (S = G.hours) {
            R = S.call(U, Q)
        } else {
            S = (U && U.hours);
            R = typeof S === k ? S.call(U, Q) : S
        }
        if (!G.hours) {
            R = u.call(U, R, {
                hash: {},
                inverse: e.noop,
                fn: e.program(42, A, T),
                data: T
            })
        }
        if (R || R === 0) {
            P += R
        }
        P += "</table></div>";
        return P
    }

    function A(T, S) {
        var P = "",
            Q, R;
        P += "<tr ";
        Q = G["if"].call(T, (T && T.isToday), {
            hash: {},
            inverse: e.noop,
            fn: e.program(43, x, S),
            data: S
        });
        if (Q || Q === 0) {
            P += Q
        }
        P += '><td class="tile__hours-full__day">';
        if (R = G.day) {
            Q = R.call(T, {
                hash: {},
                data: S
            })
        } else {
            R = (T && T.day);
            Q = typeof R === k ? R.call(T, {
                hash: {},
                data: S
            }) : R
        }
        P += L(Q) + ':</td><td class="tile__hours-full__hours">';
        if (R = G.hours) {
            Q = R.call(T, {
                hash: {},
                data: S
            })
        } else {
            R = (T && T.hours);
            Q = typeof R === k ? R.call(T, {
                hash: {},
                data: S
            }) : R
        }
        P += L(Q) + "</td></tr>";
        return P
    }

    function x(Q, P) {
        return 'class="tile__hours-full__current"'
    }
    m += '<div class="zci__main  zci__main--single-loc"><div class="tile--map  js-tile-map"><div class="tile__body"><div class="tile--map__side"><a class="tile__media" href="';
    if (i = G.url) {
        r = i.call(a, {
            hash: {},
            data: O
        })
    } else {
        i = (a && a.url);
        r = typeof i === k ? i.call(a, {
            hash: {},
            data: O
        }) : i
    }
    if (r || r === 0) {
        m += r
    }
    m += '">';
    r = G["if"].call(a, (a && a.image), {
        hash: {},
        inverse: e.program(3, D, O),
        fn: e.program(1, E, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    m += "</a>";
    r = (i = G.and || (a && a.and), n = {
        hash: {},
        inverse: e.noop,
        fn: e.program(5, C, O),
        data: O
    }, i ? i.call(a, ((r = (a && a.meta)), r == null || r === false ? r : r.sourceName), (a && a.url), n) : F.call(a, "and", ((r = (a && a.meta)), r == null || r === false ? r : r.sourceName), (a && a.url), n));
    if (r || r === 0) {
        m += r
    }
    m += '</div><h4 class="tile__title"><a href="';
    if (i = G.url) {
        r = i.call(a, {
            hash: {},
            data: O
        })
    } else {
        i = (a && a.url);
        r = typeof i === k ? i.call(a, {
            hash: {},
            data: O
        }) : i
    }
    if (r || r === 0) {
        m += r
    }
    m += '">';
    if (i = G.name) {
        r = i.call(a, {
            hash: {},
            data: O
        })
    } else {
        i = (a && a.name);
        r = typeof i === k ? i.call(a, {
            hash: {},
            data: O
        }) : i
    }
    m += L(r) + '</a></h4><div class="tile--map__main ';
    r = G["if"].call(a, (a && a.hours), {
        hash: {},
        inverse: e.noop,
        fn: e.program(7, z, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    m += '"><div class="tile--map__main__not-hours"><div class="tile__rating-and-price"><div class="tile__rating">';
    r = G["if"].call(a, ((r = ((r = (a && a.meta)), r == null || r === false ? r : r.options)), r == null || r === false ? r : r.detail_rating), {
        hash: {},
        inverse: e.program(11, y, O),
        fn: e.program(9, t, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    m += "</div>";
    r = (i = G.and || (a && a.and), n = {
        hash: {},
        inverse: e.noop,
        fn: e.program(16, p, O),
        data: O
    }, i ? i.call(a, (a && a.rating), (a && a.price), n) : F.call(a, "and", (a && a.rating), (a && a.price), n));
    if (r || r === 0) {
        m += r
    }
    r = G["if"].call(a, (a && a.price), {
        hash: {},
        inverse: e.noop,
        fn: e.program(18, o, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    m += "</div>";
    r = G["if"].call(a, (a && a.address_lines), {
        hash: {},
        inverse: e.program(23, g, O),
        fn: e.program(20, j, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    r = G["if"].call(a, (a && a.phone), {
        hash: {},
        inverse: e.noop,
        fn: e.program(26, d, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    r = G["if"].call(a, (a && a.hours), {
        hash: {},
        inverse: e.noop,
        fn: e.program(28, c, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    m += '<div class="tile__actions ';
    r = G["if"].call(a, (a && a.compressActions), {
        hash: {},
        inverse: e.noop,
        fn: e.program(35, K, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    m += '">';
    r = G["if"].call(a, (a && a.canMakePhoneCalls), {
        hash: {},
        inverse: e.noop,
        fn: e.program(37, J, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    r = G["if"].call(a, (a && a.showDirections), {
        hash: {},
        inverse: e.noop,
        fn: e.program(39, I, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    m += "</div></div>";
    r = G["if"].call(a, (a && a.hours), {
        hash: {},
        inverse: e.noop,
        fn: e.program(41, B, O),
        data: O
    });
    if (r || r === 0) {
        m += r
    }
    m += "</div></div></div>";
    return m
});
this["DDG"]["templates"]["products_detail"] = Handlebars.template(function(f, s, q, k, z) {
    this.compilerInfo = [4, ">= 1.0.0"];
    q = this.merge(q, f.helpers);
    z = z || {};
    var r = "",
        g, a, d, c = "function",
        b = this.escapeExpression,
        p = q.helperMissing,
        o = this;

    function n(F, E) {
        var A = "",
            C, D, B;
        A += '<div class="c-product__media ' + b(((C = ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.elClass)), C == null || C === false ? C : C.productMedia)), typeof C === c ? C.apply(F) : C)) + '"><img class="c-product__media__img ' + b(((C = ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.elClass)), C == null || C === false ? C : C.productMediaImg)), typeof C === c ? C.apply(F) : C)) + '" src="' + b((D = q.imageProxy || (F && F.imageProxy), B = {
            hash: {},
            data: E
        }, D ? D.call(F, (F && F.img), B) : p.call(F, "imageProxy", (F && F.img), B))) + '" /></div>';
        return A
    }

    function m(E, D) {
        var B, C, A;
        B = (C = q.include || (E && E.include), A = {
            hash: {},
            data: D
        }, C ? C.call(E, ((B = ((B = (E && E.meta)), B == null || B === false ? B : B.options)), B == null || B === false ? B : B.subtitle_content), A) : p.call(E, "include", ((B = ((B = (E && E.meta)), B == null || B === false ? B : B.options)), B == null || B === false ? B : B.subtitle_content), A));
        if (B || B === 0) {
            return B
        } else {
            return ""
        }
    }

    function j(F, E) {
        var A = "",
            C, D, B;
        if (D = q.subtitle) {
            C = D.call(F, {
                hash: {},
                data: E
            })
        } else {
            D = (F && F.subtitle);
            C = typeof D === c ? D.call(F, {
                hash: {},
                data: E
            }) : D
        }
        A += b(C);
        C = q["if"].call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.rating), {
            hash: {},
            inverse: o.noop,
            fn: o.program(6, i, E),
            data: E
        });
        if (C || C === 0) {
            A += C
        }
        C = (D = q.and || (F && F.and), B = {
            hash: {},
            inverse: o.noop,
            fn: o.program(9, e, E),
            data: E
        }, D ? D.call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.price), ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.rating), (F && F.price), B) : p.call(F, "and", ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.price), ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.rating), (F && F.price), B));
        if (C || C === 0) {
            A += C
        }
        C = (D = q.and || (F && F.and), B = {
            hash: {},
            inverse: o.noop,
            fn: o.program(11, y, E),
            data: E
        }, D ? D.call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.price), (F && F.price), B) : p.call(F, "and", ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.price), (F && F.price), B));
        if (C || C === 0) {
            A += C
        }
        C = (D = q.and || (F && F.and), B = {
            hash: {},
            inverse: o.noop,
            fn: o.program(9, e, E),
            data: E
        }, D ? D.call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.price), ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.brand), (F && F.price), (F && F.brand), B) : p.call(F, "and", ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.price), ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.brand), (F && F.price), (F && F.brand), B));
        if (C || C === 0) {
            A += C
        }
        C = (D = q.and || (F && F.and), B = {
            hash: {},
            inverse: o.noop,
            fn: o.program(9, e, E),
            data: E
        }, D ? D.call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.rating), ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.brand), (F && F.brand), B) : p.call(F, "and", ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.rating), ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.brand), (F && F.brand), B));
        if (C || C === 0) {
            A += C
        }
        C = (D = q.and || (F && F.and), B = {
            hash: {},
            inverse: o.noop,
            fn: o.program(13, x, E),
            data: E
        }, D ? D.call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.brand), (F && F.brand), B) : p.call(F, "and", ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.brand), (F && F.brand), B));
        if (C || C === 0) {
            A += C
        }
        return A
    }

    function i(F, E) {
        var A = "",
            C, D, B;
        A += '<span class="c-product__rating ';
        C = q["if"].call(F, (F && F.subtitle), {
            hash: {},
            inverse: o.noop,
            fn: o.program(7, h, E),
            data: E
        });
        if (C || C === 0) {
            A += C
        }
        A += '">';
        C = (D = q.starsAndReviews || (F && F.starsAndReviews), B = {
            hash: {},
            data: E
        }, D ? D.call(F, (F && F.rating), (F && F.reviewCount), (F && F.url), ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.hideReviewText), B) : p.call(F, "starsAndReviews", (F && F.rating), (F && F.reviewCount), (F && F.url), ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.hideReviewText), B));
        if (C || C === 0) {
            A += C
        }
        A += "</span>";
        return A
    }

    function h(B, A) {
        return "sep--before"
    }

    function e(B, A) {
        return '<span class="sep  c-product__sep"></span>'
    }

    function y(E, D) {
        var A = "",
            B, C;
        A += '<span class="c-product__price  price  tx-clr--dk2">';
        if (C = q.price) {
            B = C.call(E, {
                hash: {},
                data: D
            })
        } else {
            C = (E && E.price);
            B = typeof C === c ? C.call(E, {
                hash: {},
                data: D
            }) : C
        }
        A += b(B) + "</span>";
        return A
    }

    function x(F, E) {
        var A = "",
            C, D, B;
        A += '<span class="c-product__brand">';
        C = (D = q.lp || (F && F.lp), B = {
            hash: {},
            data: E
        }, D ? D.call(F, "made_by", "by %s", (F && F.brand), B) : p.call(F, "lp", "made_by", "by %s", (F && F.brand), B));
        if (C || C === 0) {
            A += C
        }
        A += "</span>";
        return A
    }

    function v(E, D) {
        var B, C, A;
        B = (C = q.include || (E && E.include), A = {
            hash: {},
            data: D
        }, C ? C.call(E, ((B = ((B = (E && E.meta)), B == null || B === false ? B : B.options)), B == null || B === false ? B : B.description_content), A) : p.call(E, "include", ((B = ((B = (E && E.meta)), B == null || B === false ? B : B.options)), B == null || B === false ? B : B.description_content), A));
        if (B || B === 0) {
            return B
        } else {
            return ""
        }
    }

    function u(E, D) {
        var B, C, A;
        B = (C = q.ellipsis || (E && E.ellipsis), A = {
            hash: {},
            data: D
        }, C ? C.call(E, (E && E["abstract"]), 400, A) : p.call(E, "ellipsis", (E && E["abstract"]), 400, A));
        if (B || B === 0) {
            return B
        } else {
            return ""
        }
    }

    function t(F, E) {
        var A = "",
            C, D, B;
        A += '<div class="c-product__callout ' + b(((C = ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.elClass)), C == null || C === false ? C : C.productCallout)), typeof C === c ? C.apply(F) : C)) + '">';
        C = (D = q.include || (F && F.include), B = {
            hash: {},
            data: E
        }, D ? D.call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.buy), B) : p.call(F, "include", ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.buy), B));
        if (C || C === 0) {
            A += C
        }
        A += "</div>";
        return A
    }
    r += '<div class="c-product"><div class="c-product__pane">';
    g = q["if"].call(s, (s && s.img), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, n, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    r += '<div class="c-product__body-wrap"><div class="c-product__body-content"><div class="c-product__body  c-product__body--pri  r-border-box">';
    g = (a = q.formatTitle || (s && s.formatTitle), d = {
        hash: {
            el: ("h5"),
            className: ("c-product__title"),
            classNameSec: (((g = ((g = (s && s.meta)), g == null || g === false ? g : g.elClass)), g == null || g === false ? g : g.productTitle)),
            noSub: ("true"),
            ellipsis: (120),
            href: ((s && s.url))
        },
        data: z
    }, a ? a.call(s, (s && s.heading), d) : p.call(s, "formatTitle", (s && s.heading), d));
    if (g || g === 0) {
        r += g
    }
    r += '<p class="c-product__subtitle  ' + b(((g = ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.elClass)), g == null || g === false ? g : g.productSub)), typeof g === c ? g.apply(s) : g)) + '">';
    g = q["if"].call(s, ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.subtitle_content), {
        hash: {},
        inverse: o.program(5, j, z),
        fn: o.program(3, m, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    r += '</p></div><div class="c-product__body  c-product__body--sec"><div class="c-product__desc ' + b(((g = ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.elClass)), g == null || g === false ? g : g.productDesc)), typeof g === c ? g.apply(s) : g)) + '">';
    g = q["if"].call(s, ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.description_content), {
        hash: {},
        inverse: o.program(17, u, z),
        fn: o.program(15, v, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    r += "</div>";
    g = q["if"].call(s, ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.buy), {
        hash: {},
        inverse: o.noop,
        fn: o.program(19, t, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    r += "</div></div></div></div></div>";
    return r
});
this["DDG"]["templates"]["spice_detail"] = Handlebars.template(function(c, i, b, g, f) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    f = f || {};
    var e = "",
        a, d, j, h = b.helperMissing;
    e += '<div class="cw"><div class="zci__main  zci__main--detail"> <div class="zci__body">';
    a = (d = b.include || (i && i.include), j = {
        hash: {},
        data: f
    }, d ? d.call(i, (i && i.content), j) : h.call(i, "include", (i && i.content), j));
    if (a || a === 0) {
        e += a
    }
    a = (d = b.moreAt || (i && i.moreAt), j = {
        hash: {
            className: ("zci__more-at")
        },
        data: f
    }, d ? d.call(i, (i && i.source_url), (i && i.source_name), j) : h.call(i, "moreAt", (i && i.source_url), (i && i.source_name), j));
    if (a || a === 0) {
        e += a
    }
    e += "</div></div></div>";
    return e
});
this["DDG"]["templates"]["text_detail"] = Handlebars.template(function(e, s, q, k, z) {
    this.compilerInfo = [4, ">= 1.0.0"];
    q = this.merge(q, e.helpers);
    z = z || {};
    var r = "",
        g, p = q.helperMissing,
        a = this.escapeExpression,
        b = "function",
        o = this;

    function n(C, B) {
        return "has-aux"
    }

    function m(F, E) {
        var B = "",
            D, C;
        B += '<div class="c-base__img-wrap"><img class="c-base__img" src="' + a((D = q.imageProxy || (F && F.imageProxy), C = {
            hash: {},
            data: E
        }, D ? D.call(F, (F && F.image), C) : p.call(F, "imageProxy", (F && F.image), C))) + '"></div>';
        return B
    }

    function j(F, E) {
        var C, D, B;
        C = (D = q.include || (F && F.include), B = {
            hash: {},
            data: E
        }, D ? D.call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.title_content), B) : p.call(F, "include", ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.title_content), B));
        if (C || C === 0) {
            return C
        } else {
            return ""
        }
    }

    function i(D, C) {
        var B;
        B = q["if"].call(D, (D && D.title), {
            hash: {},
            inverse: o.noop,
            fn: o.program(8, f, C),
            data: C
        });
        if (B || B === 0) {
            return B
        } else {
            return ""
        }
    }

    function f(F, E) {
        var B = "",
            C, D;
        B += '<h3 class="c-base__title">';
        if (D = q.title) {
            C = D.call(F, {
                hash: {},
                data: E
            })
        } else {
            D = (F && F.title);
            C = typeof D === b ? D.call(F, {
                hash: {},
                data: E
            }) : D
        }
        B += a(C) + "</h3>";
        return B
    }

    function A(F, E) {
        var C, D, B;
        C = (D = q.include || (F && F.include), B = {
            hash: {},
            data: E
        }, D ? D.call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.subtitle_content), B) : p.call(F, "include", ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.subtitle_content), B));
        if (C || C === 0) {
            return C
        } else {
            return ""
        }
    }

    function y(G, F) {
        var B = "",
            D, E, C;
        B += '<h4 class="c-base__sub">';
        D = (E = q.formatSubtitle || (G && G.formatSubtitle), C = {
            hash: {},
            data: F
        }, E ? E.call(G, (G && G.subtitle), C) : p.call(G, "formatSubtitle", (G && G.subtitle), C));
        if (D || D === 0) {
            B += D
        }
        B += "</h4>";
        return B
    }

    function x(G, F) {
        var B = "",
            D, E, C;
        B += '<div class="c-base__content ';
        D = q["if"].call(G, ((D = ((D = (G && G.meta)), D == null || D === false ? D : D.options)), D == null || D === false ? D : D.chompContent), {
            hash: {},
            inverse: o.noop,
            fn: o.program(15, v, F),
            data: F
        });
        if (D || D === 0) {
            B += D
        }
        B += '">';
        D = (E = q.include || (G && G.include), C = {
            hash: {},
            data: F
        }, E ? E.call(G, ((D = ((D = (G && G.meta)), D == null || D === false ? D : D.options)), D == null || D === false ? D : D.content), C) : p.call(G, "include", ((D = ((D = (G && G.meta)), D == null || D === false ? D : D.options)), D == null || D === false ? D : D.content), C));
        if (D || D === 0) {
            B += D
        }
        B += "</div>";
        return B
    }

    function v(C, B) {
        return "chomp js-ellipsis"
    }

    function u(D, C) {
        var B;
        B = q["if"].call(D, (D && D.description), {
            hash: {},
            inverse: o.noop,
            fn: o.program(18, t, C),
            data: C
        });
        if (B || B === 0) {
            return B
        } else {
            return ""
        }
    }

    function t(F, E) {
        var B = "",
            C, D;
        B += '<div class="c-base__content ';
        C = q["if"].call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.chompContent), {
            hash: {},
            inverse: o.noop,
            fn: o.program(15, v, E),
            data: E
        });
        if (C || C === 0) {
            B += C
        }
        B += '">';
        if (D = q.description) {
            C = D.call(F, {
                hash: {},
                data: E
            })
        } else {
            D = (F && F.description);
            C = typeof D === b ? D.call(F, {
                hash: {},
                data: E
            }) : D
        }
        B += a(C) + "</div>";
        return B
    }

    function h(F, E) {
        var C, D, B;
        C = (D = q.include || (F && F.include), B = {
            hash: {
                className: ("c-base__link"),
                sep: (((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.moreAt))
            },
            data: E
        }, D ? D.call(F, "chomp_link", B) : p.call(F, "include", "chomp_link", B));
        if (C || C === 0) {
            return C
        } else {
            return ""
        }
    }

    function d(F, E) {
        var C, D, B;
        C = (D = q.moreAt || (F && F.moreAt), B = {
            hash: {
                className: ("c-base__link")
            },
            data: E
        }, D ? D.call(F, (F && F.meta), "none", B) : p.call(F, "moreAt", (F && F.meta), "none", B));
        if (C || C === 0) {
            return C
        } else {
            return ""
        }
    }

    function c(G, F) {
        var B = "",
            D, E, C;
        B += '<span class="c-base__link--more  sep--before">';
        D = (E = q.formatSubtitle || (G && G.formatSubtitle), C = {
            hash: {},
            data: F
        }, E ? E.call(G, ((D = ((D = (G && G.meta)), D == null || D === false ? D : D.options)), D == null || D === false ? D : D.moreText), C) : p.call(G, "formatSubtitle", ((D = ((D = (G && G.meta)), D == null || D === false ? D : D.options)), D == null || D === false ? D : D.moreText), C));
        if (D || D === 0) {
            B += D
        }
        B += "</span>";
        return B
    }
    r += '<div class="cw ';
    g = q["if"].call(s, (s && s.infoboxData), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, n, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    r += '"><div class="zci__main  c-base"><div class="zci__body">';
    g = q["if"].call(s, (s && s.image), {
        hash: {},
        inverse: o.noop,
        fn: o.program(3, m, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    g = q["if"].call(s, ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.title_content), {
        hash: {},
        inverse: o.program(7, i, z),
        fn: o.program(5, j, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    g = q["if"].call(s, ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.subtitle_content), {
        hash: {},
        inverse: o.noop,
        fn: o.program(10, A, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    g = q["if"].call(s, (s && s.subtitle), {
        hash: {},
        inverse: o.noop,
        fn: o.program(12, y, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    g = q["if"].call(s, ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.content), {
        hash: {},
        inverse: o.program(17, u, z),
        fn: o.program(14, x, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    r += '<div class="c-base__links">';
    g = q["if"].call(s, ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.chompContent), {
        hash: {},
        inverse: o.noop,
        fn: o.program(20, h, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    g = q["if"].call(s, ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.moreAt), {
        hash: {},
        inverse: o.noop,
        fn: o.program(22, d, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    g = q["if"].call(s, ((g = ((g = (s && s.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.moreText), {
        hash: {},
        inverse: o.noop,
        fn: o.program(24, c, z),
        data: z
    });
    if (g || g === 0) {
        r += g
    }
    r += "</div></div></div>";
    return r
});
this["DDG"]["templates"]["audio_item"] = Handlebars.template(function(f, r, p, j, s) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, f.helpers);
    s = s || {};
    var q = "",
        g, a, d, c = "function",
        b = this.escapeExpression,
        o = p.helperMissing,
        n = this;

    function m(x, v) {
        var t, u;
        if (u = p.elClass) {
            t = u.call(x, {
                hash: {},
                data: v
            })
        } else {
            u = (x && x.elClass);
            t = typeof u === c ? u.call(x, {
                hash: {},
                data: v
            }) : u
        }
        return b(t)
    }

    function k(v, u) {
        var t;
        return b(((t = ((t = ((t = (v && v.meta)), t == null || t === false ? t : t.elClass)), t == null || t === false ? t : t.tile)), typeof t === c ? t.apply(v) : t))
    }

    function i(z, y) {
        var t = "",
            v, x, u;
        t += '<img class="tile__media__img js-lazyload" src="" data-src="';
        v = (x = p.imageProxy || (z && z.imageProxy), u = {
            hash: {},
            data: y
        }, x ? x.call(z, (z && z.image), u) : o.call(z, "imageProxy", (z && z.image), u));
        if (v || v === 0) {
            t += v
        }
        t += '" />';
        return t
    }

    function h(u, t) {
        return '<div class="tile__media__no-artwork ddgsi">♫</div>'
    }

    function e(z, y) {
        var t = "",
            v, x, u;
        t += '<div class="tile__footer">';
        v = (x = p.include || (z && z.include), u = {
            hash: {},
            data: y
        }, x ? x.call(z, ((v = ((v = (z && z.meta)), v == null || v === false ? v : v.options)), v == null || v === false ? v : v.footer), u) : o.call(z, "include", ((v = ((v = (z && z.meta)), v == null || v === false ? v : v.options)), v == null || v === false ? v : v.footer), u));
        if (v || v === 0) {
            t += v
        }
        t += "</div>";
        return t
    }
    q += '<div class="tile  tile--c--n  tile--audio  tile--no-highlight ';
    g = p["if"].call(r, (r && r.elClass), {
        hash: {},
        inverse: n.program(3, k, s),
        fn: n.program(1, m, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += '"><div class="tile__media">';
    g = p["if"].call(r, (r && r.image), {
        hash: {},
        inverse: n.program(7, h, s),
        fn: n.program(5, i, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += '<div class="audio-controls"><div class="audio-controls__progress"><div class="audio-controls__progress-bg  full100"><span class="rotated-fill"></span><span class="full-fill"></span></div><div class="audio-controls__progress-loading"><span class="rotated-fill"></span><span class="full-fill"></span></div><div class="audio-controls__progress-playback"><span class="rotated-fill"></span><span class="full-fill"></span></div></div><span class="audio-controls__action  ddgsi">►</span><span class="audio-controls__time"></span></div></div><div class="tile__body"><h4 class="tile__title"><a href="';
    if (a = p.url) {
        g = a.call(r, {
            hash: {},
            data: s
        })
    } else {
        a = (r && r.url);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: s
        }) : a
    }
    q += b(g) + '" title="';
    if (a = p.title) {
        g = a.call(r, {
            hash: {},
            data: s
        })
    } else {
        a = (r && r.title);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: s
        }) : a
    }
    q += b(g) + '">' + b((a = p.ellipsis || (r && r.ellipsis), d = {
        hash: {},
        data: s
    }, a ? a.call(r, (r && r.title), 45, d) : o.call(r, "ellipsis", (r && r.title), 45, d))) + "</a></h4>";
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.footer), {
        hash: {},
        inverse: n.noop,
        fn: n.program(9, e, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div>";
    return q
});
this["DDG"]["templates"]["base_expanding_item"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, q, g = "function",
        i = this.escapeExpression,
        p = this,
        m = d.helperMissing;

    function c(u, t) {
        var r, s;
        if (s = d.elClass) {
            r = s.call(u, {
                hash: {},
                data: t
            })
        } else {
            s = (u && u.elClass);
            r = typeof s === g ? s.call(u, {
                hash: {},
                data: t
            }) : s
        }
        return i(r)
    }

    function a(t, s) {
        var r;
        return i(((r = ((r = ((r = (t && t.meta)), r == null || r === false ? r : r.elClass)), r == null || r === false ? r : r.tile)), typeof r === g ? r.apply(t) : r))
    }

    function o(u, t) {
        var r = "",
            s;
        r += '<span class="tile__expand-icon  ddgsi  ' + i(((s = ((s = ((s = (u && u.meta)), s == null || s === false ? s : s.elClass)), s == null || s === false ? s : s.tileExpand)), typeof s === g ? s.apply(u) : s)) + '"></span>';
        return r
    }
    h += '<div class="tile  tile--e  tile--' + i(((b = ((b = (n && n.meta)), b == null || b === false ? b : b.id)), typeof b === g ? b.apply(n) : b)) + "  tile--no-highlight  tile--c--whole  ";
    b = d["if"].call(n, (n && n.elClass), {
        hash: {},
        inverse: p.program(3, a, j),
        fn: p.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '">';
    b = (f = d.include || (n && n.include), q = {
        hash: {},
        data: j
    }, f ? f.call(n, ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.options)), b == null || b === false ? b : b.content), q) : m.call(n, "include", ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.options)), b == null || b === false ? b : b.content), q));
    if (b || b === 0) {
        h += b
    }
    b = d["if"].call(n, (n && n.canExpand), {
        hash: {},
        inverse: p.noop,
        fn: p.program(5, o, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += "</div>";
    return h
});
this["DDG"]["templates"]["base_flipping_item"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, p, g = "function",
        i = this.escapeExpression,
        o = this,
        m = d.helperMissing;

    function c(t, s) {
        var q, r;
        if (r = d.elClass) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.elClass);
            q = typeof r === g ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        return i(q)
    }

    function a(s, r) {
        var q;
        return i(((q = ((q = ((q = (s && s.meta)), q == null || q === false ? q : q.elClass)), q == null || q === false ? q : q.tile)), typeof q === g ? q.apply(s) : q))
    }
    h += '<div class="tile  tile--f  tile--' + i(((b = ((b = (n && n.meta)), b == null || b === false ? b : b.id)), typeof b === g ? b.apply(n) : b)) + "  ";
    b = d["if"].call(n, (n && n.elClass), {
        hash: {},
        inverse: o.program(3, a, j),
        fn: o.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '"><div class="tile--f__main ' + i(((b = ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.elClass)), b == null || b === false ? b : b.tileFront)), typeof b === g ? b.apply(n) : b)) + '">';
    b = (f = d.include || (n && n.include), p = {
        hash: {},
        data: j
    }, f ? f.call(n, ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.options)), b == null || b === false ? b : b.front_content), p) : m.call(n, "include", ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.options)), b == null || b === false ? b : b.front_content), p));
    if (b || b === 0) {
        h += b
    }
    h += '</div><div class="tile--f__alt ' + i(((b = ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.elClass)), b == null || b === false ? b : b.tileBack)), typeof b === g ? b.apply(n) : b)) + '">';
    b = (f = d.include || (n && n.include), p = {
        hash: {},
        data: j
    }, f ? f.call(n, ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.options)), b == null || b === false ? b : b.back_content), p) : m.call(n, "include", ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.options)), b == null || b === false ? b : b.back_content), p));
    if (b || b === 0) {
        h += b
    }
    h += "</div></div>";
    return h
});
this["DDG"]["templates"]["base_item"] = Handlebars.template(function(c, p, n, g, r) {
    this.compilerInfo = [4, ">= 1.0.0"];
    n = this.merge(n, c.helpers);
    r = r || {};
    var o = "",
        e, b = "function",
        a = this.escapeExpression,
        k = this,
        m = n.helperMissing;

    function j(x, v) {
        var t, u;
        if (u = n.elClass) {
            t = u.call(x, {
                hash: {},
                data: v
            })
        } else {
            u = (x && x.elClass);
            t = typeof u === b ? u.call(x, {
                hash: {},
                data: v
            }) : u
        }
        return a(t)
    }

    function i(v, u) {
        var t;
        t = n["if"].call(v, ((t = ((t = (v && v.meta)), t == null || t === false ? t : t.elClass)), t == null || t === false ? t : t.tile), {
            hash: {},
            inverse: k.program(6, f, u),
            fn: k.program(4, h, u),
            data: u
        });
        if (t || t === 0) {
            return t
        } else {
            return ""
        }
    }

    function h(v, u) {
        var t;
        return a(((t = ((t = ((t = (v && v.meta)), t == null || t === false ? t : t.elClass)), t == null || t === false ? t : t.tile)), typeof t === b ? t.apply(v) : t))
    }

    function f(u, t) {
        return "tile--c"
    }

    function d(y, x) {
        var t = "",
            u, v;
        t += 'data-link="';
        if (v = n.url) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.url);
            u = typeof v === b ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        t += a(u) + '"';
        return t
    }

    function s(y, x) {
        var u, v, t;
        u = (v = n.include || (y && y.include), t = {
            hash: {},
            data: x
        }, v ? v.call(y, ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.options)), u == null || u === false ? u : u.tile_content), t) : m.call(y, "include", ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.options)), u == null || u === false ? u : u.tile_content), t));
        if (u || u === 0) {
            return u
        } else {
            return ""
        }
    }

    function q(y, x) {
        var u, v, t;
        u = (v = n.include || (y && y.include), t = {
            hash: {},
            data: x
        }, v ? v.call(y, ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.options)), u == null || u === false ? u : u.content), t) : m.call(y, "include", ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.options)), u == null || u === false ? u : u.content), t));
        if (u || u === 0) {
            return u
        } else {
            return ""
        }
    }
    o += '<div class="tile  tile--b ';
    e = n["if"].call(p, (p && p.elClass), {
        hash: {},
        inverse: k.program(3, i, r),
        fn: k.program(1, j, r),
        data: r
    });
    if (e || e === 0) {
        o += e
    }
    o += " tile--" + a(((e = ((e = (p && p.meta)), e == null || e === false ? e : e.id)), typeof e === b ? e.apply(p) : e)) + '" ';
    e = n["if"].call(p, (p && p.url), {
        hash: {},
        inverse: k.noop,
        fn: k.program(8, d, r),
        data: r
    });
    if (e || e === 0) {
        o += e
    }
    o += '>  <div class="tile__body">';
    e = n["if"].call(p, ((e = ((e = (p && p.meta)), e == null || e === false ? e : e.options)), e == null || e === false ? e : e.tile_content), {
        hash: {},
        inverse: k.program(12, q, r),
        fn: k.program(10, s, r),
        data: r
    });
    if (e || e === 0) {
        o += e
    }
    o += "</div></div>";
    return o
});
this["DDG"]["templates"]["basic_flipping_item"] = Handlebars.template(function(e, m, d, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    i = i || {};
    var g = "",
        b, f = "function",
        h = this.escapeExpression,
        k = d.helperMissing,
        o = this;

    function c(s, r) {
        var p, q;
        if (q = d.elClass) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.elClass);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        return h(p)
    }

    function a(r, q) {
        var p;
        return h(((p = ((p = ((p = (r && r.meta)), p == null || p === false ? p : p.elClass)), p == null || p === false ? p : p.tile)), typeof p === f ? p.apply(r) : p))
    }

    function n(u, s, t) {
        var q, r, p;
        q = (r = d.include || (t && t.include), p = {
            hash: {
                meta: ((t && t.meta)),
                num: ((t && t.num))
            },
            data: s
        }, r ? r.call(u, "tile_body", p) : k.call(u, "include", "tile_body", p));
        if (q || q === 0) {
            return q
        } else {
            return ""
        }
    }
    g += '<div class="tile  tile--f  tile--' + h(((b = ((b = (m && m.meta)), b == null || b === false ? b : b.id)), typeof b === f ? b.apply(m) : b)) + "  ";
    b = d["if"].call(m, (m && m.elClass), {
        hash: {},
        inverse: o.program(3, a, i),
        fn: o.program(1, c, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += '"><div class="tile--f__main ' + h(((b = ((b = ((b = (m && m.meta)), b == null || b === false ? b : b.elClass)), b == null || b === false ? b : b.tileFront)), typeof b === f ? b.apply(m) : b)) + '">';
    b = d["with"].call(m, (m && m.data_front), {
        hash: {},
        inverse: o.noop,
        fn: o.programWithDepth(5, n, i, m),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += '</div><div class="tile--f__alt ' + h(((b = ((b = ((b = (m && m.meta)), b == null || b === false ? b : b.elClass)), b == null || b === false ? b : b.tileBack)), typeof b === f ? b.apply(m) : b)) + '">';
    b = d["with"].call(m, (m && m.data_back), {
        hash: {},
        inverse: o.noop,
        fn: o.programWithDepth(5, n, i, m),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += "</div></div>";
    return g
});
this["DDG"]["templates"]["basic_image_item"] = Handlebars.template(function(h, v, t, n, C) {
    this.compilerInfo = [4, ">= 1.0.0"];
    t = this.merge(t, h.helpers);
    C = C || {};
    var u = "",
        j, a, e, c = "function",
        b = this.escapeExpression,
        r = this,
        s = t.helperMissing;

    function q(G, F) {
        var D, E;
        if (E = t.elClass) {
            D = E.call(G, {
                hash: {},
                data: F
            })
        } else {
            E = (G && G.elClass);
            D = typeof E === c ? E.call(G, {
                hash: {},
                data: F
            }) : E
        }
        return b(D)
    }

    function p(F, E) {
        var D;
        D = t["if"].call(F, ((D = ((D = (F && F.meta)), D == null || D === false ? D : D.elClass)), D == null || D === false ? D : D.tile), {
            hash: {},
            inverse: r.program(6, m, E),
            fn: r.program(4, o, E),
            data: E
        });
        if (D || D === 0) {
            return D
        } else {
            return ""
        }
    }

    function o(F, E) {
        var D;
        return b(((D = ((D = ((D = (F && F.meta)), D == null || D === false ? D : D.elClass)), D == null || D === false ? D : D.tile)), typeof D === c ? D.apply(F) : D))
    }

    function m(E, D) {
        return "tile--c"
    }

    function i(H, G) {
        var D = "",
            E, F;
        D += ' data-link="';
        if (F = t.url) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.url);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + '"';
        return D
    }

    function B(E, D) {
        return "tile__title--1 with-sub"
    }

    function A(E, D) {
        return "tile__sub--2"
    }

    function z(H, G) {
        var D = "",
            E, F;
        D += '<a href="';
        if (F = t.url) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.url);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + '">';
        return D
    }

    function y(E, D) {
        return "</a>"
    }

    function x(H, G) {
        var D = "",
            F, E;
        D += '<p class="tile__sub--2  opt">' + b((F = t.ellipsis || (H && H.ellipsis), E = {
            hash: {},
            data: G
        }, F ? F.call(H, (H && H.description), 56, E) : s.call(H, "ellipsis", (H && H.description), 56, E))) + "</p>";
        return D
    }

    function k(F, E) {
        var D;
        return b(((D = ((D = ((D = (F && F.meta)), D == null || D === false ? D : D.elClass)), D == null || D === false ? D : D.tileRating)), typeof D === c ? D.apply(F) : D))
    }

    function g(E, D) {
        return "tile__rating--right"
    }

    function f(H, G) {
        var E, F, D;
        E = (F = t.starRating || (H && H.starRating), D = {
            hash: {},
            data: G
        }, F ? F.call(H, (H && H.rating), D) : s.call(H, "starRating", (H && H.rating), D));
        if (E || E === 0) {
            return E
        } else {
            return ""
        }
    }

    function d(H, G) {
        var D = "",
            F, E;
        D += '<span class="tile__source  one-line">' + b((F = t.ellipsis || (H && H.ellipsis), E = {
            hash: {},
            data: G
        }, F ? F.call(H, (H && H.ratingText), 19, E) : s.call(H, "ellipsis", (H && H.ratingText), 19, E))) + "</span>";
        return D
    }
    u += '<div class="tile  tile--b--i ';
    j = t["if"].call(v, (v && v.elClass), {
        hash: {},
        inverse: r.program(3, p, C),
        fn: r.program(1, q, C),
        data: C
    });
    if (j || j === 0) {
        u += j
    }
    u += " has-detail  tile--" + b(((j = ((j = (v && v.meta)), j == null || j === false ? j : j.id)), typeof j === c ? j.apply(v) : j)) + '  opt--t-xxs" ';
    j = t["if"].call(v, (v && v.url), {
        hash: {},
        inverse: r.noop,
        fn: r.program(8, i, C),
        data: C
    });
    if (j || j === 0) {
        u += j
    }
    u += '><div class="tile__media ' + b(((j = ((j = ((j = (v && v.meta)), j == null || j === false ? j : j.elClass)), j == null || j === false ? j : j.tileMedia)), typeof j === c ? j.apply(v) : j)) + '"><img src="' + b((a = t.imageProxy || (v && v.imageProxy), e = {
        hash: {},
        data: C
    }, a ? a.call(v, (v && v.image), e) : s.call(v, "imageProxy", (v && v.image), e))) + '" alt="';
    if (a = t.title) {
        j = a.call(v, {
            hash: {},
            data: C
        })
    } else {
        a = (v && v.title);
        j = typeof a === c ? a.call(v, {
            hash: {},
            data: C
        }) : a
    }
    u += b(j) + '" class="tile__media__img ' + b(((j = ((j = ((j = (v && v.meta)), j == null || j === false ? j : j.elClass)), j == null || j === false ? j : j.tileMediaImg)), typeof j === c ? j.apply(v) : j)) + '" /></div><div class="tile__body  tile__body--b-i ' + b(((j = ((j = ((j = (v && v.meta)), j == null || j === false ? j : j.elClass)), j == null || j === false ? j : j.tileBody)), typeof j === c ? j.apply(v) : j)) + '"><h6 class="tile__title ';
    j = t["if"].call(v, (v && v.description), {
        hash: {},
        inverse: r.program(12, A, C),
        fn: r.program(10, B, C),
        data: C
    });
    if (j || j === 0) {
        u += j
    }
    u += '">';
    j = t["if"].call(v, (v && v.url), {
        hash: {},
        inverse: r.noop,
        fn: r.program(14, z, C),
        data: C
    });
    if (j || j === 0) {
        u += j
    }
    u += b((a = t.ellipsis || (v && v.ellipsis), e = {
        hash: {},
        data: C
    }, a ? a.call(v, (v && v.title), 55, e) : s.call(v, "ellipsis", (v && v.title), 55, e)));
    j = t["if"].call(v, (v && v.url), {
        hash: {},
        inverse: r.noop,
        fn: r.program(16, y, C),
        data: C
    });
    if (j || j === 0) {
        u += j
    }
    u += "</h6>";
    j = t["if"].call(v, (v && v.description), {
        hash: {},
        inverse: r.noop,
        fn: r.program(18, x, C),
        data: C
    });
    if (j || j === 0) {
        u += j
    }
    u += '<div class="tile__tx  tile__rating  one-line ';
    j = t["if"].call(v, ((j = ((j = (v && v.meta)), j == null || j === false ? j : j.elClass)), j == null || j === false ? j : j.tileRating), {
        hash: {},
        inverse: r.program(22, g, C),
        fn: r.program(20, k, C),
        data: C
    });
    if (j || j === 0) {
        u += j
    }
    u += '">';
    j = t["if"].call(v, ((j = ((j = (v && v.meta)), j == null || j === false ? j : j.options)), j == null || j === false ? j : j.rating), {
        hash: {},
        inverse: r.noop,
        fn: r.program(24, f, C),
        data: C
    });
    if (j || j === 0) {
        u += j
    }
    j = t["if"].call(v, ((j = ((j = (v && v.meta)), j == null || j === false ? j : j.options)), j == null || j === false ? j : j.ratingText), {
        hash: {},
        inverse: r.noop,
        fn: r.program(26, d, C),
        data: C
    });
    if (j || j === 0) {
        u += j
    }
    u += "</div></div></div>";
    return u
});
this["DDG"]["templates"]["categories_item"] = Handlebars.template(function(d, m, c, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    i = i || {};
    var g = "",
        a, e, o, f = "function",
        h = this.escapeExpression,
        k = c.helperMissing,
        n = this;

    function b(s, r) {
        var p = "",
            q;
        p += '<img class="tile__icon" src="' + h(((q = ((q = (s && s.Icon)), q == null || q === false ? q : q.URL)), typeof q === f ? q.apply(s) : q)) + '" />';
        return p
    }
    g += '<div class="tile  tile--c  js-tile--' + h((e = c.firstLetter || (m && m.firstLetter), o = {
        hash: {},
        data: i
    }, e ? e.call(m, (m && m.Text), o) : k.call(m, "firstLetter", (m && m.Text), o))) + '" data-link="';
    if (e = c.FirstURL) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.FirstURL);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '"><div class="tile__body">';
    a = c["if"].call(m, ((a = (m && m.Icon)), a == null || a === false ? a : a.URL), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    a = (e = c.formatTitle || (m && m.formatTitle), o = {
        hash: {
            el: ("h4"),
            className: ("tile__title"),
            href: ("FirstURL"),
            parseFirst: ("true"),
            ellipsis: (100)
        },
        data: i
    }, e ? e.call(m, (m && m.Result), o) : k.call(m, "formatTitle", (m && m.Result), o));
    if (a || a === 0) {
        g += a
    }
    g += '<div class="tile__content  tile__content--sm">';
    a = (e = c.ellipsis || (m && m.ellipsis), o = {
        hash: {
            parseFirst: ("true")
        },
        data: i
    }, e ? e.call(m, (m && m.Result), 95, o) : k.call(m, "ellipsis", (m && m.Result), 95, o));
    if (a || a === 0) {
        g += a
    }
    g += "</div> </div></div>";
    return g
});
this["DDG"]["templates"]["images_item"] = Handlebars.template(function(d, j, c, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    g = g || {};
    var a, e = "function",
        f = this.escapeExpression,
        i = c.helperMissing,
        k = this;

    function b(r, q) {
        var m = "",
            o, p, n;
        m += '<div class="tile  tile--img  has-detail" style="width:';
        if (p = c.tileWidth) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.tileWidth);
            o = typeof p === e ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        m += f(o) + 'px;"><div class="tile--img__media"><span class="tile--img__media__i"><img class="tile--img__img  js-lazyload" src="" data-src="' + f((p = c.imageProxy || (r && r.imageProxy), n = {
            hash: {},
            data: q
        }, p ? p.call(r, (r && r.thumbnail), n) : i.call(r, "imageProxy", (r && r.thumbnail), n))) + '" alt="';
        if (p = c.title) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.title);
            o = typeof p === e ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        m += f(o) + '" /></span></div><div class="tile--img__details"><div class="tile--img__dimensions"><i class="tile--img__icon">+</i><em>';
        if (p = c.width) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.width);
            o = typeof p === e ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        m += f(o) + " &times; ";
        if (p = c.height) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.height);
            o = typeof p === e ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        m += f(o) + "</em></div></div></div>";
        return m
    }
    a = c.unless.call(j, (j && j.n), {
        hash: {},
        inverse: k.noop,
        fn: k.program(1, b, g),
        data: g
    });
    if (a || a === 0) {
        return a
    } else {
        return ""
    }
});
this["DDG"]["templates"]["meanings_item"] = Handlebars.template(function(e, r, p, j, s) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    s = s || {};
    var q = "",
        g, a, d, o = p.helperMissing,
        b = this.escapeExpression,
        c = "function",
        n = this;

    function m(z, y) {
        var t = "",
            v, x, u;
        t += "js-tile--" + b((x = p.trim || (z && z.trim), u = {
            hash: {},
            data: y
        }, x ? x.call(z, ((v = (z && z.topic)), v == null || v === false ? v : v.id), u) : o.call(z, "trim", ((v = (z && z.topic)), v == null || v === false ? v : v.id), u)));
        return t
    }

    function k(z, y) {
        var t = "",
            v, x, u;
        t += 'data-anchor="' + b((x = p.stripNonAlpha || (z && z.stripNonAlpha), u = {
            hash: {},
            data: y
        }, x ? x.call(z, ((v = (z && z.topic)), v == null || v === false ? v : v.id), u) : o.call(z, "stripNonAlpha", ((v = (z && z.topic)), v == null || v === false ? v : v.id), u))) + '"';
        return t
    }

    function i(x, v) {
        var t = "",
            u;
        t += '<img class="tile__icon  js-lazyload" src="" data-src="' + b(((u = ((u = (x && x.Icon)), u == null || u === false ? u : u.URL)), typeof u === c ? u.apply(x) : u)) + '" />';
        return t
    }

    function h(x, v) {
        var t = "",
            u;
        t += '<span class="media__img--rev" ';
        u = p["if"].call(x, (x && x.topic), {
            hash: {},
            inverse: n.noop,
            fn: n.program(8, f, v),
            data: v
        });
        if (u || u === 0) {
            t += u
        }
        t += "></span>";
        return t
    }

    function f(z, y) {
        var t = "",
            v, x, u;
        t += 'data-type="' + b((x = p.stripNonAlpha || (z && z.stripNonAlpha), u = {
            hash: {},
            data: y
        }, x ? x.call(z, ((v = (z && z.topic)), v == null || v === false ? v : v.id), u) : o.call(z, "stripNonAlpha", ((v = (z && z.topic)), v == null || v === false ? v : v.id), u))) + '"';
        return t
    }
    q += '<div class="tile  tile--c  ';
    g = p["if"].call(r, (r && r.topic), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += '" ';
    g = p["if"].call(r, (r && r.topic), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, k, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += ' data-link="';
    if (a = p.FirstURL) {
        g = a.call(r, {
            hash: {},
            data: s
        })
    } else {
        a = (r && r.FirstURL);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: s
        }) : a
    }
    q += b(g) + '"><div class="tile__body">';
    g = p["if"].call(r, ((g = (r && r.Icon)), g == null || g === false ? g : g.URL), {
        hash: {},
        inverse: n.program(7, h, s),
        fn: n.program(5, i, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    g = (a = p.formatTitle || (r && r.formatTitle), d = {
        hash: {
            el: ("h4"),
            className: ("tile__title"),
            href: ("FirstURL"),
            parseFirst: ("true"),
            ellipsis: (100)
        },
        data: s
    }, a ? a.call(r, (r && r.Result), d) : o.call(r, "formatTitle", (r && r.Result), d));
    if (g || g === 0) {
        q += g
    }
    q += '<div class="tile__content  tile__content--sm">';
    g = (a = p.ellipsis || (r && r.ellipsis), d = {
        hash: {
            parseFirst: ("true")
        },
        data: s
    }, a ? a.call(r, (r && r.Result), 95, d) : o.call(r, "ellipsis", (r && r.Result), 95, d));
    if (g || g === 0) {
        q += g
    }
    q += "</div> </div></div>";
    return q
});
this["DDG"]["templates"]["media_item"] = Handlebars.template(function(e, r, p, i, x) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    x = x || {};
    var q = "",
        g, a, d, c = "function",
        b = this.escapeExpression,
        n = this,
        o = p.helperMissing;

    function m(B, A) {
        var y, z;
        if (z = p.elClass) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.elClass);
            y = typeof z === c ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        return b(y)
    }

    function k(A, z) {
        var y;
        y = p["if"].call(A, ((y = ((y = (A && A.meta)), y == null || y === false ? y : y.elClass)), y == null || y === false ? y : y.tile), {
            hash: {},
            inverse: n.program(6, h, z),
            fn: n.program(4, j, z),
            data: z
        });
        if (y || y === 0) {
            return y
        } else {
            return ""
        }
    }

    function j(A, z) {
        var y;
        return b(((y = ((y = ((y = (A && A.meta)), y == null || y === false ? y : y.elClass)), y == null || y === false ? y : y.tile)), typeof y === c ? y.apply(A) : y))
    }

    function h(z, y) {
        return "tile--c"
    }

    function f(C, B) {
        var y = "",
            z, A;
        y += 'data-link="';
        if (A = p.url) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.url);
            z = typeof A === c ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        y += b(z) + '"';
        return y
    }

    function v(z, y) {
        return "has-foot"
    }

    function u(C, B) {
        var z, A, y;
        z = (A = p.include || (C && C.include), y = {
            hash: {},
            data: B
        }, A ? A.call(C, "tile_snippet", y) : o.call(C, "include", "tile_snippet", y));
        if (z || z === 0) {
            return z
        } else {
            return ""
        }
    }

    function t(D, C) {
        var y = "",
            A, B, z;
        y += '<div class="tile__foot ' + b(((A = ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.elClass)), A == null || A === false ? A : A.tileFoot)), typeof A === c ? A.apply(D) : A)) + '">';
        A = (B = p.include || (D && D.include), z = {
            hash: {},
            data: C
        }, B ? B.call(D, ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.options)), A == null || A === false ? A : A.footer), z) : o.call(D, "include", ((A = ((A = (D && D.meta)), A == null || A === false ? A : A.options)), A == null || A === false ? A : A.footer), z));
        if (A || A === 0) {
            y += A
        }
        y += "</div>";
        return y
    }

    function s(C, B) {
        var z, A, y;
        z = (A = p.include || (C && C.include), y = {
            hash: {},
            data: B
        }, A ? A.call(C, "date_badge", y) : o.call(C, "include", "date_badge", y));
        if (z || z === 0) {
            return z
        } else {
            return ""
        }
    }
    q += '<div class="tile ';
    g = p["if"].call(r, (r && r.elClass), {
        hash: {},
        inverse: n.program(3, k, x),
        fn: n.program(1, m, x),
        data: x
    });
    if (g || g === 0) {
        q += g
    }
    q += " tile--" + b(((g = ((g = (r && r.meta)), g == null || g === false ? g : g.id)), typeof g === c ? g.apply(r) : g)) + '" ';
    g = p["if"].call(r, (r && r.url), {
        hash: {},
        inverse: n.noop,
        fn: n.program(8, f, x),
        data: x
    });
    if (g || g === 0) {
        q += g
    }
    q += '><div class="tile__media ' + b(((g = ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.elClass)), g == null || g === false ? g : g.tileMedia)), typeof g === c ? g.apply(r) : g)) + '"><img src="' + b((a = p.imageProxy || (r && r.imageProxy), d = {
        hash: {},
        data: x
    }, a ? a.call(r, (r && r.image), d) : o.call(r, "imageProxy", (r && r.image), d))) + '" alt="';
    if (a = p.title) {
        g = a.call(r, {
            hash: {},
            data: x
        })
    } else {
        a = (r && r.title);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: x
        }) : a
    }
    q += b(g) + '" class="tile__media__img" /></div><div class="tile__body ';
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.footer), {
        hash: {},
        inverse: n.noop,
        fn: n.program(10, v, x),
        data: x
    });
    if (g || g === 0) {
        q += g
    }
    q += " " + b(((g = ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.elClass)), g == null || g === false ? g : g.tileBody)), typeof g === c ? g.apply(r) : g)) + '">';
    g = (a = p.include || (r && r.include), d = {
        hash: {},
        data: x
    }, a ? a.call(r, "tile_titles", d) : o.call(r, "include", "tile_titles", d));
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, (r && r.description), {
        hash: {},
        inverse: n.noop,
        fn: n.program(12, u, x),
        data: x
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.footer), {
        hash: {},
        inverse: n.noop,
        fn: n.program(14, t, x),
        data: x
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, (r && r.dateBadge), {
        hash: {},
        inverse: n.noop,
        fn: n.program(16, s, x),
        data: x
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div>";
    return q
});
this["DDG"]["templates"]["nlp_item"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, m, e = "function",
        g = this.escapeExpression,
        j = b.helperMissing;
    f += '<div class="tile  tile--c  tile--qa  has-detail" data-link="';
    if (d = b.url) {
        a = d.call(k, {
            hash: {},
            data: h
        })
    } else {
        d = (k && k.url);
        a = typeof d === e ? d.call(k, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '"><div class="tile__body  has-foot"><h6 class="tile__title  tile__title--3sm  tile__title--min">';
    if (d = b.heading) {
        a = d.call(k, {
            hash: {},
            data: h
        })
    } else {
        d = (k && k.heading);
        a = typeof d === e ? d.call(k, {
            hash: {},
            data: h
        }) : d
    }
    if (a || a === 0) {
        f += a
    }
    f += '</h6><div class="tile__content  tile__content--qa  js-ellipsis  hide--mob">';
    if (d = b["abstract"]) {
        a = d.call(k, {
            hash: {},
            data: h
        })
    } else {
        d = (k && k["abstract"]);
        a = typeof d === e ? d.call(k, {
            hash: {},
            data: h
        }) : d
    }
    if (a || a === 0) {
        f += a
    }
    f += '</div><div class="tile__foot">';
    a = (d = b.moreAt || (k && k.moreAt), m = {
        hash: {
            className: ("tile__more-link")
        },
        data: h
    }, d ? d.call(k, (k && k.url), (k && k.source), m) : j.call(k, "moreAt", (k && k.url), (k && k.source), m));
    if (a || a === 0) {
        f += a
    }
    f += "</div></div></div>";
    return f
});
this["DDG"]["templates"]["places_item"] = Handlebars.template(function(k, y, v, q, E) {
    this.compilerInfo = [4, ">= 1.0.0"];
    v = this.merge(v, k.helpers);
    E = E || {};
    var x = "",
        m, a, f, d = "function",
        c = this.escapeExpression,
        u = v.helperMissing,
        t = this;

    function s(I, H) {
        var F, G;
        if (G = v.elClass) {
            F = G.call(I, {
                hash: {},
                data: H
            })
        } else {
            G = (I && I.elClass);
            F = typeof G === d ? G.call(I, {
                hash: {},
                data: H
            }) : G
        }
        return c(F)
    }

    function r(H, G) {
        var F;
        return c(((F = ((F = ((F = (H && H.meta)), F == null || F === false ? F : F.elClass)), F == null || F === false ? F : F.tile)), typeof F === d ? F.apply(H) : F))
    }

    function p(K, J) {
        var F = "",
            H, I, G;
        F += '<div class="tile__media__wrapper"><img src="" data-src="' + c((I = v.imageProxy || (K && K.imageProxy), G = {
            hash: {},
            data: J
        }, I ? I.call(K, (K && K.image), G) : u.call(K, "imageProxy", (K && K.image), G))) + '" alt="';
        if (I = v.title) {
            H = I.call(K, {
                hash: {},
                data: J
            })
        } else {
            I = (K && K.title);
            H = typeof I === d ? I.call(K, {
                hash: {},
                data: J
            }) : I
        }
        F += c(H) + '" class="tile__media__img  js-lazyload" /></div>';
        return F
    }

    function o(G, F) {
        return '<span class="ddgsi tile__media__no-img">@</span>'
    }

    function j(J, I) {
        var F = "",
            G, H;
        F += '<span class="tile__neighborhood">';
        if (H = v.neighborhoodOrCity) {
            G = H.call(J, {
                hash: {},
                data: I
            })
        } else {
            H = (J && J.neighborhoodOrCity);
            G = typeof H === d ? H.call(J, {
                hash: {},
                data: I
            }) : H
        }
        F += c(G) + "</span>";
        return F
    }

    function D(J, I) {
        var G, H, F;
        G = (H = v.include || (J && J.include), F = {
            hash: {},
            data: I
        }, H ? H.call(J, ((G = ((G = (J && J.meta)), G == null || G === false ? G : G.options)), G == null || G === false ? G : G.item_footer), F) : u.call(J, "include", ((G = ((G = (J && J.meta)), G == null || G === false ? G : G.options)), G == null || G === false ? G : G.item_footer), F));
        if (G || G === 0) {
            return G
        } else {
            return ""
        }
    }

    function C(I, H) {
        var F = "",
            G;
        G = v["if"].call(I, (I && I.rating), {
            hash: {},
            inverse: t.noop,
            fn: t.program(14, B, H),
            data: H
        });
        if (G || G === 0) {
            F += G
        }
        G = v["if"].call(I, (I && I.reviews), {
            hash: {},
            inverse: t.noop,
            fn: t.program(16, A, H),
            data: H
        });
        if (G || G === 0) {
            F += G
        }
        return F
    }

    function B(J, I) {
        var G, H, F;
        G = (H = v.starRating || (J && J.starRating), F = {
            hash: {},
            data: I
        }, H ? H.call(J, (J && J.rating), F) : u.call(J, "starRating", (J && J.rating), F));
        if (G || G === 0) {
            return G
        } else {
            return ""
        }
    }

    function A(J, I) {
        var G, H, F;
        G = (H = v.reviewCount || (J && J.reviewCount), F = {
            hash: {},
            data: I
        }, H ? H.call(J, (J && J.reviews), "", true, F) : u.call(J, "reviewCount", (J && J.reviews), "", true, F));
        if (G || G === 0) {
            return G
        } else {
            return ""
        }
    }

    function z(G, F) {
        return "has-foot"
    }

    function n(K, J) {
        var F = "",
            H, I, G;
        F += '<span class="tile__price">';
        H = (I = v.priceSymbols || (K && K.priceSymbols), G = {
            hash: {},
            data: J
        }, I ? I.call(K, (K && K.price), 4, G) : u.call(K, "priceSymbols", (K && K.price), 4, G));
        if (H || H === 0) {
            F += H
        }
        F += "</span>";
        return F
    }

    function i(H, G) {
        var F;
        F = v["if"].call(H, (H && H.canMakePhoneCalls), {
            hash: {},
            inverse: t.program(25, g, G),
            fn: t.program(23, h, G),
            data: G
        });
        if (F || F === 0) {
            return F
        } else {
            return ""
        }
    }

    function h(K, J) {
        var F = "",
            H, I, G;
        F += '<a href="tel:';
        if (I = v.phone) {
            H = I.call(K, {
                hash: {},
                data: J
            })
        } else {
            I = (K && K.phone);
            H = typeof I === d ? I.call(K, {
                hash: {},
                data: J
            }) : I
        }
        F += c(H) + '" class="tile__segment tile__call js-tel-link"><div class="tile__segment__title">';
        H = (I = v.lp || (K && K.lp), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "maps_places", "Call", G) : u.call(K, "lp", "maps_places", "Call", G));
        if (H || H === 0) {
            F += H
        }
        F += '</div><div class="tile__phone">';
        if (I = v.phone) {
            H = I.call(K, {
                hash: {},
                data: J
            })
        } else {
            I = (K && K.phone);
            H = typeof I === d ? I.call(K, {
                hash: {},
                data: J
            }) : I
        }
        F += c(H) + "</div></a>";
        return F
    }

    function g(K, J) {
        var F = "",
            H, I, G;
        F += '<div class="tile__segment"><div class="tile__segment__title">';
        H = (I = v.lp || (K && K.lp), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "maps_places", "Phone Number", G) : u.call(K, "lp", "maps_places", "Phone Number", G));
        if (H || H === 0) {
            F += H
        }
        F += '</div><a href="tel:';
        if (I = v.phone) {
            H = I.call(K, {
                hash: {},
                data: J
            })
        } else {
            I = (K && K.phone);
            H = typeof I === d ? I.call(K, {
                hash: {},
                data: J
            }) : I
        }
        F += c(H) + '" class="tile__phone js-tel-link">';
        if (I = v.phone) {
            H = I.call(K, {
                hash: {},
                data: J
            })
        } else {
            I = (K && K.phone);
            H = typeof I === d ? I.call(K, {
                hash: {},
                data: J
            }) : I
        }
        F += c(H) + "</a></div>";
        return F
    }

    function e(K, J) {
        var F = "",
            H, I, G;
        F += '<div class="tile__segment tile__directions js-directions-container"><a class="tile__directions__link tile__segment__title js-directions-link" href="';
        if (I = v.directions) {
            H = I.call(K, {
                hash: {},
                data: J
            })
        } else {
            I = (K && K.directions);
            H = typeof I === d ? I.call(K, {
                hash: {},
                data: J
            }) : I
        }
        F += c(H) + '">';
        H = (I = v.lp || (K && K.lp), G = {
            hash: {},
            data: J
        }, I ? I.call(K, "maps_places", "Directions", G) : u.call(K, "lp", "maps_places", "Directions", G));
        if (H || H === 0) {
            F += H
        }
        F += "</a></div>";
        return F
    }

    function b(K, J) {
        var F = "",
            H, I, G;
        F += '<div class="tile__foot">';
        H = (I = v.moreAt || (K && K.moreAt), G = {
            hash: {
                dynamicMoreAtText: (5),
                className: ("tile--loc__more"),
                iconClassName: ("tile--loc__more__icon"),
                iconPlaceholder: ("true")
            },
            data: J
        }, I ? I.call(K, (K && K.url), ((H = (K && K.meta)), H == null || H === false ? H : H.sourceName), G) : u.call(K, "moreAt", (K && K.url), ((H = (K && K.meta)), H == null || H === false ? H : H.sourceName), G));
        if (H || H === 0) {
            F += H
        }
        F += "</div>";
        return F
    }
    x += '<div class="tile  tile--f  tile--loc ';
    m = v["if"].call(y, (y && y.elClass), {
        hash: {},
        inverse: t.program(3, r, E),
        fn: t.program(1, s, E),
        data: E
    });
    if (m || m === 0) {
        x += m
    }
    x += '"><div class="tile--f__main  tile--loc__main"><div class="tile__media">';
    m = v["if"].call(y, (y && y.image), {
        hash: {},
        inverse: t.program(7, o, E),
        fn: t.program(5, p, E),
        data: E
    });
    if (m || m === 0) {
        x += m
    }
    x += '</div><div class="tile__num">';
    if (a = v.num) {
        m = a.call(y, {
            hash: {},
            data: E
        })
    } else {
        a = (y && y.num);
        m = typeof a === d ? a.call(y, {
            hash: {},
            data: E
        }) : a
    }
    x += c(m) + '</div><div class="tile__body"><h6 class="tile__title">' + c((a = v.ellipsis || (y && y.ellipsis), f = {
        hash: {},
        data: E
    }, a ? a.call(y, (y && y.name), 33, f) : u.call(y, "ellipsis", (y && y.name), 33, f))) + "</h6>";
    m = v["if"].call(y, (y && y.neighborhoodOrCity), {
        hash: {},
        inverse: t.noop,
        fn: t.program(9, j, E),
        data: E
    });
    if (m || m === 0) {
        x += m
    }
    x += '<div class="tile__foot  tile__rating  one-line">';
    m = v["if"].call(y, ((m = ((m = (y && y.meta)), m == null || m === false ? m : m.options)), m == null || m === false ? m : m.item_footer), {
        hash: {},
        inverse: t.program(13, C, E),
        fn: t.program(11, D, E),
        data: E
    });
    if (m || m === 0) {
        x += m
    }
    x += '</div></div></div><div class="tile--f__alt  tile--loc__alt"><div class="tile__body  ';
    m = (a = v.and || (y && y.and), f = {
        hash: {},
        inverse: t.noop,
        fn: t.program(18, z, E),
        data: E
    }, a ? a.call(y, (y && y.url), ((m = (y && y.meta)), m == null || m === false ? m : m.sourceName), f) : u.call(y, "and", (y && y.url), ((m = (y && y.meta)), m == null || m === false ? m : m.sourceName), f));
    if (m || m === 0) {
        x += m
    }
    x += ' has-segments"><div class="tile__segment"><h6 class="tile__title"><a href="';
    if (a = v.url) {
        m = a.call(y, {
            hash: {},
            data: E
        })
    } else {
        a = (y && y.url);
        m = typeof a === d ? a.call(y, {
            hash: {},
            data: E
        }) : a
    }
    x += c(m) + '" title="';
    if (a = v.name) {
        m = a.call(y, {
            hash: {},
            data: E
        })
    } else {
        a = (y && y.name);
        m = typeof a === d ? a.call(y, {
            hash: {},
            data: E
        }) : a
    }
    x += c(m) + '">' + c((a = v.ellipsis || (y && y.ellipsis), f = {
        hash: {},
        data: E
    }, a ? a.call(y, (y && y.name), 33, f) : u.call(y, "ellipsis", (y && y.name), 33, f))) + "</a></h6>";
    m = v["if"].call(y, (y && y.price), {
        hash: {},
        inverse: t.noop,
        fn: t.program(20, n, E),
        data: E
    });
    if (m || m === 0) {
        x += m
    }
    x += "</div>";
    m = v["if"].call(y, (y && y.phone), {
        hash: {},
        inverse: t.noop,
        fn: t.program(22, i, E),
        data: E
    });
    if (m || m === 0) {
        x += m
    }
    m = v["if"].call(y, (y && y.address), {
        hash: {},
        inverse: t.noop,
        fn: t.program(27, e, E),
        data: E
    });
    if (m || m === 0) {
        x += m
    }
    m = (a = v.and || (y && y.and), f = {
        hash: {},
        inverse: t.noop,
        fn: t.program(29, b, E),
        data: E
    }, a ? a.call(y, (y && y.url), ((m = (y && y.meta)), m == null || m === false ? m : m.sourceName), f) : u.call(y, "and", (y && y.url), ((m = (y && y.meta)), m == null || m === false ? m : m.sourceName), f));
    if (m || m === 0) {
        x += m
    }
    x += "</div></div></div>";
    return x
});
this["DDG"]["templates"]["products_item"] = Handlebars.template(function(f, t, r, k, A) {
    this.compilerInfo = [4, ">= 1.0.0"];
    r = this.merge(r, f.helpers);
    A = A || {};
    var s = "",
        h, a, d, c = "function",
        b = this.escapeExpression,
        p = this,
        q = r.helperMissing;

    function o(E, D) {
        var B, C;
        if (C = r.elClass) {
            B = C.call(E, {
                hash: {},
                data: D
            })
        } else {
            C = (E && E.elClass);
            B = typeof C === c ? C.call(E, {
                hash: {},
                data: D
            }) : C
        }
        return b(B)
    }

    function n(D, C) {
        var B;
        B = r["if"].call(D, ((B = ((B = (D && D.meta)), B == null || B === false ? B : B.elClass)), B == null || B === false ? B : B.tile), {
            hash: {},
            inverse: p.program(6, j, C),
            fn: p.program(4, m, C),
            data: C
        });
        if (B || B === 0) {
            return B
        } else {
            return ""
        }
    }

    function m(D, C) {
        var B;
        return b(((B = ((B = ((B = (D && D.meta)), B == null || B === false ? B : B.elClass)), B == null || B === false ? B : B.tile)), typeof B === c ? B.apply(D) : B))
    }

    function j(C, B) {
        return "tile--c"
    }

    function g(C, B) {
        return " has-rating"
    }

    function z(F, E) {
        var C, D, B;
        C = (D = r.include || (F && F.include), B = {
            hash: {},
            data: E
        }, D ? D.call(F, ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.badge), B) : q.call(F, "include", ((C = ((C = (F && F.meta)), C == null || C === false ? C : C.options)), C == null || C === false ? C : C.badge), B));
        if (C || C === 0) {
            return C
        } else {
            return ""
        }
    }

    function y(F, E) {
        var C, D, B;
        C = (D = r.formatTitle || (F && F.formatTitle), B = {
            hash: {
                el: ("h6"),
                className: ("tile__title"),
                classNameSec: ("tile__title--pr"),
                href: ("url"),
                optSub: (true),
                ellipsis: (100)
            },
            data: E
        }, D ? D.call(F, (F && F.heading), B) : q.call(F, "formatTitle", (F && F.heading), B));
        if (C || C === 0) {
            return C
        } else {
            return ""
        }
    }

    function x(F, E) {
        var C, D, B;
        C = (D = r.formatTitle || (F && F.formatTitle), B = {
            hash: {
                el: ("h6"),
                className: ("tile__title"),
                classNameSec: ("tile__title--pr"),
                optSub: (true),
                ellipsis: (100)
            },
            data: E
        }, D ? D.call(F, (F && F.heading), B) : q.call(F, "formatTitle", (F && F.heading), B));
        if (C || C === 0) {
            return C
        } else {
            return ""
        }
    }

    function v(F, E) {
        var B = "",
            C, D;
        B += '<span class="tile--pr__price  price">';
        if (D = r.price) {
            C = D.call(F, {
                hash: {},
                data: E
            })
        } else {
            D = (F && F.price);
            C = typeof D === c ? D.call(F, {
                hash: {},
                data: E
            }) : D
        }
        B += b(C) + "</span>";
        return B
    }

    function u(C, B) {
        return '<span class="sep  tile__sep"></span>'
    }

    function i(G, F) {
        var B = "",
            D, E, C;
        B += '<span class="tile--pr__brand">';
        D = (E = r.lp || (G && G.lp), C = {
            hash: {},
            data: F
        }, E ? E.call(G, "made_by", "by %s", (G && G.brand), C) : q.call(G, "lp", "made_by", "by %s", (G && G.brand), C));
        if (D || D === 0) {
            B += D
        }
        B += "</span>";
        return B
    }

    function e(G, F) {
        var B = "",
            D, E, C;
        B += '<div class="tile__tx  tile__rating  one-line">';
        D = (E = r.starsAndReviews || (G && G.starsAndReviews), C = {
            hash: {},
            data: F
        }, E ? E.call(G, (G && G.rating), (G && G.reviewCount), (G && G.url_review), true, C) : q.call(G, "starsAndReviews", (G && G.rating), (G && G.reviewCount), (G && G.url_review), true, C));
        if (D || D === 0) {
            B += D
        }
        B += "</div>";
        return B
    }
    s += '<div class="tile  tile--pr ';
    h = r["if"].call(t, (t && t.elClass), {
        hash: {},
        inverse: p.program(3, n, A),
        fn: p.program(1, o, A),
        data: A
    });
    if (h || h === 0) {
        s += h
    }
    s += " has-detail  tile--";
    if (a = r.parentId) {
        h = a.call(t, {
            hash: {},
            data: A
        })
    } else {
        a = (t && t.parentId);
        h = typeof a === c ? a.call(t, {
            hash: {},
            data: A
        }) : a
    }
    s += b(h) + " ";
    h = r["if"].call(t, ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.rating), {
        hash: {},
        inverse: p.noop,
        fn: p.program(8, g, A),
        data: A
    });
    if (h || h === 0) {
        s += h
    }
    s += ' opt--t-xxs" data-link="';
    if (a = r.url) {
        h = a.call(t, {
            hash: {},
            data: A
        })
    } else {
        a = (t && t.url);
        h = typeof a === c ? a.call(t, {
            hash: {},
            data: A
        }) : a
    }
    s += b(h) + '"><div class="tile__media  tile__media--pr"><img src="" data-src="';
    h = (a = r.imageProxy || (t && t.imageProxy), d = {
        hash: {},
        data: A
    }, a ? a.call(t, (t && t.img), d) : q.call(t, "imageProxy", (t && t.img), d));
    if (h || h === 0) {
        s += h
    }
    s += '" alt="';
    if (a = r.title) {
        h = a.call(t, {
            hash: {},
            data: A
        })
    } else {
        a = (t && t.title);
        h = typeof a === c ? a.call(t, {
            hash: {},
            data: A
        }) : a
    }
    s += b(h) + '" class="tile__media__img  js-lazyload" />';
    h = (a = r.and || (t && t.and), d = {
        hash: {},
        inverse: p.noop,
        fn: p.program(10, z, A),
        data: A
    }, a ? a.call(t, (t && t.showBadge), ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.badge), d) : q.call(t, "and", (t && t.showBadge), ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.badge), d));
    if (h || h === 0) {
        s += h
    }
    s += '</div><div class="tile__body  tile__body--pr">';
    h = r["if"].call(t, (t && t.url), {
        hash: {},
        inverse: p.program(14, x, A),
        fn: p.program(12, y, A),
        data: A
    });
    if (h || h === 0) {
        s += h
    }
    s += '<div class="tile__tx  tile--pr__sub  one-line">';
    h = (a = r.and || (t && t.and), d = {
        hash: {},
        inverse: p.noop,
        fn: p.program(16, v, A),
        data: A
    }, a ? a.call(t, ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.price), (t && t.price), d) : q.call(t, "and", ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.price), (t && t.price), d));
    if (h || h === 0) {
        s += h
    }
    h = (a = r.and || (t && t.and), d = {
        hash: {},
        inverse: p.noop,
        fn: p.program(18, u, A),
        data: A
    }, a ? a.call(t, ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.price), ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.brand), (t && t.price), (t && t.brand), d) : q.call(t, "and", ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.price), ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.brand), (t && t.price), (t && t.brand), d));
    if (h || h === 0) {
        s += h
    }
    h = (a = r.and || (t && t.and), d = {
        hash: {},
        inverse: p.noop,
        fn: p.program(20, i, A),
        data: A
    }, a ? a.call(t, ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.brand), (t && t.brand), d) : q.call(t, "and", ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.brand), (t && t.brand), d));
    if (h || h === 0) {
        s += h
    }
    s += "</div>";
    h = r["if"].call(t, ((h = ((h = (t && t.meta)), h == null || h === false ? h : h.options)), h == null || h === false ? h : h.rating), {
        hash: {},
        inverse: p.noop,
        fn: p.program(22, e, A),
        data: A
    });
    if (h || h === 0) {
        s += h
    }
    s += "</div></div>";
    return s
});
this["DDG"]["templates"]["text_item"] = Handlebars.template(function(e, r, p, i, v) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    v = v || {};
    var q = "",
        g, a, d, c = "function",
        b = this.escapeExpression,
        n = this,
        o = p.helperMissing;

    function m(A, z) {
        var x, y;
        if (y = p.elClass) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.elClass);
            x = typeof y === c ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        return b(x)
    }

    function k(z, y) {
        var x;
        x = p["if"].call(z, ((x = ((x = (z && z.meta)), x == null || x === false ? x : x.elClass)), x == null || x === false ? x : x.tile), {
            hash: {},
            inverse: n.program(6, h, y),
            fn: n.program(4, j, y),
            data: y
        });
        if (x || x === 0) {
            return x
        } else {
            return ""
        }
    }

    function j(z, y) {
        var x;
        return b(((x = ((x = ((x = (z && z.meta)), x == null || x === false ? x : x.elClass)), x == null || x === false ? x : x.tile)), typeof x === c ? x.apply(z) : x))
    }

    function h(y, x) {
        return "tile--c"
    }

    function f(B, A) {
        var x = "",
            y, z;
        x += 'data-link="';
        if (z = p.url) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.url);
            y = typeof z === c ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += b(y) + '"';
        return x
    }

    function u(y, x) {
        return "has-foot"
    }

    function t(C, B) {
        var x = "",
            z, A, y;
        x += '<div class="tile__foot ' + b(((z = ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.elClass)), z == null || z === false ? z : z.tileFoot)), typeof z === c ? z.apply(C) : z)) + '">';
        z = (A = p.include || (C && C.include), y = {
            hash: {},
            data: B
        }, A ? A.call(C, ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.options)), z == null || z === false ? z : z.footer), y) : o.call(C, "include", ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.options)), z == null || z === false ? z : z.footer), y));
        if (z || z === 0) {
            x += z
        }
        x += "</div>";
        return x
    }

    function s(B, A) {
        var y, z, x;
        y = (z = p.include || (B && B.include), x = {
            hash: {},
            data: A
        }, z ? z.call(B, "date_badge", x) : o.call(B, "include", "date_badge", x));
        if (y || y === 0) {
            return y
        } else {
            return ""
        }
    }
    q += '<div class="tile ';
    g = p["if"].call(r, (r && r.elClass), {
        hash: {},
        inverse: n.program(3, k, v),
        fn: n.program(1, m, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += " tile--" + b(((g = ((g = (r && r.meta)), g == null || g === false ? g : g.id)), typeof g === c ? g.apply(r) : g)) + '" ';
    g = p["if"].call(r, (r && r.url), {
        hash: {},
        inverse: n.noop,
        fn: n.program(8, f, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += '><div class="tile__body ';
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.footer), {
        hash: {},
        inverse: n.noop,
        fn: n.program(10, u, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += " " + b(((g = ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.elClass)), g == null || g === false ? g : g.tileBody)), typeof g === c ? g.apply(r) : g)) + '">';
    g = (a = p.include || (r && r.include), d = {
        hash: {},
        data: v
    }, a ? a.call(r, "tile_titles", d) : o.call(r, "include", "tile_titles", d));
    if (g || g === 0) {
        q += g
    }
    q += '<div class="tile__content ' + b(((g = ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.elClass)), g == null || g === false ? g : g.tileSnippet)), typeof g === c ? g.apply(r) : g)) + '">' + b((a = p.ellipsis || (r && r.ellipsis), d = {
        hash: {
            fallback: (100)
        },
        data: v
    }, a ? a.call(r, (r && r.description), ((g = (r && r.meta)), g == null || g === false ? g : g.snippetChars), d) : o.call(r, "ellipsis", (r && r.description), ((g = (r && r.meta)), g == null || g === false ? g : g.snippetChars), d))) + "</div>";
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.footer), {
        hash: {},
        inverse: n.noop,
        fn: n.program(12, t, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, (r && r.dateBadge), {
        hash: {},
        inverse: n.noop,
        fn: n.program(14, s, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div>";
    return q
});
this["DDG"]["templates"]["tiles_item"] = Handlebars.template(function(e, k, d, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    i = i || {};
    var g = "",
        b, f = "function",
        h = this.escapeExpression,
        m = this;

    function c(r, q) {
        var n = "",
            o, p;
        n += "spice_";
        if (p = d.spice_name) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.spice_name);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        n += h(o);
        return n
    }

    function a(q, p) {
        var n, o;
        if (o = d.subcontent) {
            n = o.call(q, {
                hash: {},
                data: p
            })
        } else {
            o = (q && q.subcontent);
            n = typeof o === f ? o.call(q, {
                hash: {},
                data: p
            }) : o
        }
        if (n || n === 0) {
            return n
        } else {
            return ""
        }
    }
    g += '<div class="tile  tile--s ';
    b = d["if"].call(k, (k && k.spice_name), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, c, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += '">';
    b = d["if"].call(k, (k && k.subcontent), {
        hash: {},
        inverse: m.noop,
        fn: m.program(3, a, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += "</div>";
    return g
});
this["DDG"]["templates"]["tiles_load_more"] = Handlebars.template(function(d, m, c, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    i = i || {};
    var g = "",
        a, e, o, f = "function",
        h = this.escapeExpression,
        n = this,
        k = c.helperMissing;

    function b(r, q) {
        var p;
        return h(((p = ((p = ((p = (r && r.meta)), p == null || p === false ? p : p.elClass)), p == null || p === false ? p : p.tile)), typeof p === f ? p.apply(r) : p))
    }
    g += '<div class="tile  tile--m  tile--m--';
    if (e = c.id) {
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
    g += h(a) + "  ";
    a = c["if"].call(m, ((a = ((a = (m && m.meta)), a == null || a === false ? a : a.elClass)), a == null || a === false ? a : a.tile), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    g += '"><div class="tile__body  hide--mob"><i class="tile--m__icon  tile--m__icon--l">+</i><span class="tile--m__subtitle">';
    a = (e = c.lp || (m && m.lp), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "additional", "More", o) : k.call(m, "lp", "additional", "More", o));
    if (a || a === 0) {
        g += a
    }
    g += '</span></div><span class="tile--m--mob">';
    a = (e = c.lp || (m && m.lp), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "expand_text", "Show More", o) : k.call(m, "lp", "expand_text", "Show More", o));
    if (a || a === 0) {
        g += a
    }
    g += "</span>";
    if (e = c.loader) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.loader);
        a = typeof e === f ? e.call(m, {
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
this["DDG"]["templates"]["videos_item"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, q, g = "function",
        i = this.escapeExpression,
        p = this,
        m = d.helperMissing;

    function c(v, u) {
        var r = "",
            s, t;
        r += 'data-link="';
        if (t = d.url) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.url);
            s = typeof t === g ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        r += i(s) + '"';
        return r
    }

    function a(v, u) {
        var r = "",
            s, t;
        r += '<a href="';
        if (t = d.url) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.url);
            s = typeof t === g ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        r += i(s) + '">';
        return r
    }

    function o(s, r) {
        return "</a>"
    }
    h += '<div class="tile  tile--c--w  tile--vid  has-detail  opt--t-xxs" ';
    b = d["if"].call(n, (n && n.url), {
        hash: {},
        inverse: p.noop,
        fn: p.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '><div class="tile__media"><img src="" data-src="' + i((f = d.imageProxy || (n && n.imageProxy), q = {
        hash: {},
        data: j
    }, f ? f.call(n, ((b = (n && n.images)), b == null || b === false ? b : b.medium), q) : m.call(n, "imageProxy", ((b = (n && n.images)), b == null || b === false ? b : b.medium), q))) + '" alt="';
    if (f = d.title) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.title);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '" class="tile__media__img  js-lazyload" /><span class="tile--vid__dur">';
    if (f = d.duration) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.duration);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '</span></div><div class="tile__body"><h6 class="tile__title  tile__title--2">';
    b = d["if"].call(n, (n && n.url), {
        hash: {},
        inverse: p.noop,
        fn: p.program(3, a, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += i((f = d.ellipsis || (n && n.ellipsis), q = {
        hash: {},
        data: j
    }, f ? f.call(n, (n && n.title), 55, q) : m.call(n, "ellipsis", (n && n.title), 55, q)));
    b = d["if"].call(n, (n && n.url), {
        hash: {},
        inverse: p.noop,
        fn: p.program(5, o, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += "</h6><span>";
    b = (f = d.favicon || (n && n.favicon), q = {
        hash: {
            lazy: ("1"),
            className: ("tile__favicon")
        },
        data: j
    }, f ? f.call(n, (n && n.url), q) : m.call(n, "favicon", (n && n.url), q));
    if (b || b === 0) {
        h += b
    }
    h += '<span class="video-source">';
    if (f = d.provider) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.provider);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '</span></span><span class="tile__count">';
    if (f = d.viewCount) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.viewCount);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    if (b || b === 0) {
        h += b
    }
    h += "</span></div></div>";
    return h
});
this["DDG"]["templates"]["base_item_detail"] = Handlebars.template(function(e, m, d, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    i = i || {};
    var g = "",
        b, f = "function",
        h = this.escapeExpression,
        k = d.helperMissing,
        o = this;

    function c(u, t) {
        var p = "",
            r, s, q;
        p += '<div class="detail__media detail__media--' + h(((r = ((r = (u && u.meta)), r == null || r === false ? r : r.id)), typeof r === f ? r.apply(u) : r)) + " " + h(((r = ((r = ((r = (u && u.meta)), r == null || r === false ? r : r.elClass)), r == null || r === false ? r : r.detailMedia)), typeof r === f ? r.apply(u) : r)) + '"><img class="detail__media__img ' + h(((r = ((r = ((r = (u && u.meta)), r == null || r === false ? r : r.elClass)), r == null || r === false ? r : r.detailImg)), typeof r === f ? r.apply(u) : r)) + '" src="' + h((s = d.imageProxy || (u && u.imageProxy), q = {
            hash: {},
            data: t
        }, s ? s.call(u, (u && u.image), q) : k.call(u, "imageProxy", (u && u.image), q))) + '" alt="';
        if (s = d.imageAlt) {
            r = s.call(u, {
                hash: {},
                data: t
            })
        } else {
            s = (u && u.imageAlt);
            r = typeof s === f ? s.call(u, {
                hash: {},
                data: t
            }) : s
        }
        p += h(r) + '" /></div>';
        return p
    }

    function a(s, r) {
        var p, q;
        if (q = d.content) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.content);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        if (p || p === 0) {
            return p
        } else {
            return ""
        }
    }

    function n(t, s) {
        var q, r, p;
        q = (r = d.include || (t && t.include), p = {
            hash: {},
            data: s
        }, r ? r.call(t, ((q = ((q = (t && t.meta)), q == null || q === false ? q : q.options)), q == null || q === false ? q : q.content), p) : k.call(t, "include", ((q = ((q = (t && t.meta)), q == null || q === false ? q : q.options)), q == null || q === false ? q : q.content), p));
        if (q || q === 0) {
            return q
        } else {
            return ""
        }
    }
    g += '<div class="detail__inner">';
    b = d["if"].call(m, (m && m.image), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += '<div class="detail__body detail__body--' + h(((b = ((b = (m && m.meta)), b == null || b === false ? b : b.id)), typeof b === f ? b.apply(m) : b)) + " " + h(((b = ((b = ((b = (m && m.meta)), b == null || b === false ? b : b.elClass)), b == null || b === false ? b : b.detailBody)), typeof b === f ? b.apply(m) : b)) + '"><div class="detail__body__content">';
    b = d["if"].call(m, (m && m.content), {
        hash: {},
        inverse: o.program(5, n, i),
        fn: o.program(3, a, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += "</div></div></div>";
    return g
});
this["DDG"]["templates"]["images_detail"] = Handlebars.template(function(e, r, p, i, s) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    s = s || {};
    var q = "",
        g, a, d, c = "function",
        b = this.escapeExpression,
        n = this,
        o = p.helperMissing;

    function m(y, x) {
        var t = "",
            u, v;
        t += "<a ";
        u = p["if"].call(y, ((u = (y && y.detail)), u == null || u === false ? u : u.width), {
            hash: {},
            inverse: n.noop,
            fn: n.program(2, k, x),
            data: x
        });
        if (u || u === 0) {
            t += u
        }
        t += ' href="';
        if (v = p.image) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.image);
            u = typeof v === c ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        t += b(u) + '" class="detail__media__img-link  js-detail-img  js-image-detail-link" target="_blank">';
        return t
    }

    function k(x, v) {
        var t = "",
            u;
        t += 'style="width:' + b(((u = ((u = (x && x.detail)), u == null || u === false ? u : u.width)), typeof u === c ? u.apply(x) : u)) + ";height:" + b(((u = ((u = (x && x.detail)), u == null || u === false ? u : u.height)), typeof u === c ? u.apply(x) : u)) + ";top:" + b(((u = ((u = (x && x.detail)), u == null || u === false ? u : u.top)), typeof u === c ? u.apply(x) : u)) + ';"';
        return t
    }

    function j(u, t) {
        return "</a>"
    }

    function h(z, y) {
        var t = "",
            v, x, u;
        t += '<a href="';
        if (x = p.image) {
            v = x.call(z, {
                hash: {},
                data: y
            })
        } else {
            x = (z && z.image);
            v = typeof x === c ? x.call(z, {
                hash: {},
                data: y
            }) : x
        }
        t += b(v) + '" target="_blank" class="c-detail__btn c-detail__btn--right btn js-image-detail-link">';
        v = (x = p.l || (z && z.l), u = {
            hash: {},
            data: y
        }, x ? x.call(z, "View file", u) : o.call(z, "l", "View file", u));
        if (v || v === 0) {
            t += v
        }
        t += "</a>";
        return t
    }

    function f(z, y) {
        var t = "",
            v, x, u;
        t += '<a href="';
        if (x = p.image) {
            v = x.call(z, {
                hash: {},
                data: y
            })
        } else {
            x = (z && z.image);
            v = typeof x === c ? x.call(z, {
                hash: {},
                data: y
            }) : x
        }
        t += b(v) + '" target="_blank" class="c-detail__btn c-detail__btn--bottom btn js-image-detail-link">';
        v = (x = p.l || (z && z.l), u = {
            hash: {},
            data: y
        }, x ? x.call(z, "View file", u) : o.call(z, "l", "View file", u));
        if (v || v === 0) {
            t += v
        }
        t += "</a>";
        return t
    }
    q += '<div class="detail__inner"><div class="detail__media  detail__media--images"><div class="detail__media__img-wrapper  js-image-detail-wrapper">';
    g = p["if"].call(r, (r && r.linkImage), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += '<div style="width:' + b(((g = ((g = (r && r.detail)), g == null || g === false ? g : g.transBgWidth)), typeof g === c ? g.apply(r) : g)) + ";height:" + b(((g = ((g = (r && r.detail)), g == null || g === false ? g : g.transBgHeight)), typeof g === c ? g.apply(r) : g)) + ';" class="detail__media__img-bg  js-detail-img  js-detail-img-bg"></div><img src="' + b((a = p.imageProxy || (r && r.imageProxy), d = {
        hash: {},
        data: s
    }, a ? a.call(r, (r && r.thumbnail), d) : o.call(r, "imageProxy", (r && r.thumbnail), d))) + '" ';
    g = p["if"].call(r, ((g = (r && r.detail)), g == null || g === false ? g : g.width), {
        hash: {},
        inverse: n.noop,
        fn: n.program(2, k, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += ' class="detail__media__img-thumbnail  js-detail-img  js-detail-img-thumb" /><img ';
    g = p["if"].call(r, ((g = (r && r.detail)), g == null || g === false ? g : g.width), {
        hash: {},
        inverse: n.noop,
        fn: n.program(2, k, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += ' alt="';
    if (a = p.title) {
        g = a.call(r, {
            hash: {},
            data: s
        })
    } else {
        a = (r && r.title);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: s
        }) : a
    }
    q += b(g) + '" class="detail__media__img-highres  js-detail-img  js-detail-img-high" />';
    g = p["if"].call(r, (r && r.linkImage), {
        hash: {},
        inverse: n.noop,
        fn: n.program(4, j, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += '</div></div><div class="detail__body  detail__body--images"><div class="c-detail  detail__body__content"><h5 class="c-detail__title"><a href="';
    if (a = p.url) {
        g = a.call(r, {
            hash: {},
            data: s
        })
    } else {
        a = (r && r.url);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: s
        }) : a
    }
    q += b(g) + '">';
    if (a = p.title) {
        g = a.call(r, {
            hash: {},
            data: s
        })
    } else {
        a = (r && r.title);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: s
        }) : a
    }
    q += b(g) + '</a></h5><div class="c-detail__desc">';
    g = p["if"].call(r, (r && r.isMobile), {
        hash: {},
        inverse: n.noop,
        fn: n.program(6, h, s),
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += '<p><a href="';
    if (a = p.url) {
        g = a.call(r, {
            hash: {},
            data: s
        })
    } else {
        a = (r && r.url);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: s
        }) : a
    }
    q += b(g) + '">' + b((a = p.domain || (r && r.domain), d = {
        hash: {},
        data: s
    }, a ? a.call(r, (r && r.url), d) : o.call(r, "domain", (r && r.url), d))) + '</a></p><div class="c-detail__filemeta">';
    if (a = p.width) {
        g = a.call(r, {
            hash: {},
            data: s
        })
    } else {
        a = (r && r.width);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: s
        }) : a
    }
    q += b(g) + " &times; ";
    if (a = p.height) {
        g = a.call(r, {
            hash: {},
            data: s
        })
    } else {
        a = (r && r.height);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: s
        }) : a
    }
    q += b(g) + "</div>";
    g = p["if"].call(r, (r && r.isMobile), {
        hash: {},
        inverse: n.program(8, f, s),
        fn: n.noop,
        data: s
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div></div></div>";
    return q
});
this["DDG"]["templates"]["media_item_detail"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, g = "function",
        i = this.escapeExpression,
        m = d.helperMissing,
        r = this;

    function c(y, x) {
        var s = "",
            u, v, t;
        s += '<div class="detail__media ' + i(((u = ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.elClass)), u == null || u === false ? u : u.detailMedia)), typeof u === g ? u.apply(y) : u)) + '"><img class="detail__media__img ' + i(((u = ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.elClass)), u == null || u === false ? u : u.detailImg)), typeof u === g ? u.apply(y) : u)) + '" src="' + i((v = d.imageProxy || (y && y.imageProxy), t = {
            hash: {},
            data: x
        }, v ? v.call(y, (y && y.image), t) : m.call(y, "imageProxy", (y && y.image), t))) + '" alt="imageAlt" /></div>';
        return s
    }

    function a(y, x) {
        var s = "",
            u, v, t;
        s += '<span class="c-detail__title__sub ' + i(((u = ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.elClass)), u == null || u === false ? u : u.detailAltSubtitle)), typeof u === g ? u.apply(y) : u)) + '">';
        u = (v = d.formatSubtitle || (y && y.formatSubtitle), t = {
            hash: {},
            data: x
        }, v ? v.call(y, (y && y.altSubtitle), t) : m.call(y, "formatSubtitle", (y && y.altSubtitle), t));
        if (u || u === 0) {
            s += u
        }
        s += "</span>";
        return s
    }

    function q(y, x) {
        var s = "",
            u, v, t;
        s += '<span class="c-detail__subtitle ' + i(((u = ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.elClass)), u == null || u === false ? u : u.detailSubtitle)), typeof u === g ? u.apply(y) : u)) + '">';
        u = (v = d.formatSubtitle || (y && y.formatSubtitle), t = {
            hash: {},
            data: x
        }, v ? v.call(y, (y && y.subtitle), t) : m.call(y, "formatSubtitle", (y && y.subtitle), t));
        if (u || u === 0) {
            s += u
        }
        s += "</span>";
        return s
    }

    function p(y, x) {
        var s = "",
            u, v, t;
        s += '<div class="c-detail__desc ' + i(((u = ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.elClass)), u == null || u === false ? u : u.detailSnippet)), typeof u === g ? u.apply(y) : u)) + '">' + i((v = d.ellipsis || (y && y.ellipsis), t = {
            hash: {
                fallback: (155)
            },
            data: x
        }, v ? v.call(y, (y && y.description), ((u = (y && y.meta)), u == null || u === false ? u : u.snippetChars), t) : m.call(y, "ellipsis", (y && y.description), ((u = (y && y.meta)), u == null || u === false ? u : u.snippetChars), t))) + "</div>";
        return s
    }

    function o(y, x) {
        var s = "",
            u, v, t;
        s += '<div class="c-detail__callout ' + i(((u = ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.elClass)), u == null || u === false ? u : u.detailFoot)), typeof u === g ? u.apply(y) : u)) + '">';
        u = (v = d.include || (y && y.include), t = {
            hash: {},
            data: x
        }, v ? v.call(y, ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.options)), u == null || u === false ? u : u.callout), t) : m.call(y, "include", ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.options)), u == null || u === false ? u : u.callout), t));
        if (u || u === 0) {
            s += u
        }
        s += "</div>";
        return s
    }
    h += '<div class="detail__inner">';
    b = d["if"].call(n, (n && n.image), {
        hash: {},
        inverse: r.noop,
        fn: r.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '<div class="detail__body ' + i(((b = ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.elClass)), b == null || b === false ? b : b.detailBody)), typeof b === g ? b.apply(n) : b)) + '"><div class="c-detail detail__body__content"><h5 class="c-detail__title ' + i(((b = ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.elClass)), b == null || b === false ? b : b.detailTitle)), typeof b === g ? b.apply(n) : b)) + '">';
    if (f = d.title) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.title);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b);
    b = d["if"].call(n, (n && n.altSubtitle), {
        hash: {},
        inverse: r.noop,
        fn: r.program(3, a, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += "</h5>";
    b = d["if"].call(n, (n && n.subtitle), {
        hash: {},
        inverse: r.noop,
        fn: r.program(5, q, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    b = d["if"].call(n, (n && n.description), {
        hash: {},
        inverse: r.noop,
        fn: r.program(7, p, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    b = d["if"].call(n, ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.options)), b == null || b === false ? b : b.callout), {
        hash: {},
        inverse: r.noop,
        fn: r.program(9, o, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += "</div></div></div>";
    return h
});
this["DDG"]["templates"]["products_item_detail"] = Handlebars.template(function(f, r, p, j, u) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, f.helpers);
    u = u || {};
    var q = "",
        g, a, d, o = p.helperMissing,
        b = this.escapeExpression,
        c = "function",
        n = this;

    function m(A, z) {
        var v = "",
            y, x;
        v += '<div class="detail__media  detail__media--pr"><img class="detail__media__img" src="' + b((y = p.imageProxy || (A && A.imageProxy), x = {
            hash: {},
            data: z
        }, y ? y.call(A, (A && A.img_m), x) : o.call(A, "imageProxy", (A && A.img_m), x))) + '" /></div>';
        return v
    }

    function k(A, z) {
        var v = "",
            x, y;
        v += '<span class="c-detail__price  price  tx-clr--dk2">';
        if (y = p.price) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.price);
            x = typeof y === c ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        v += b(x) + "</span>";
        return v
    }

    function i(x, v) {
        return '<span class="sep  c-detail__sep"></span>'
    }

    function h(B, A) {
        var v = "",
            y, z, x;
        v += '<span class="c-detail__brand">';
        y = (z = p.lp || (B && B.lp), x = {
            hash: {},
            data: A
        }, z ? z.call(B, "made_by", "by %s", (B && B.brand), x) : o.call(B, "lp", "made_by", "by %s", (B && B.brand), x));
        if (y || y === 0) {
            v += y
        }
        v += "</span>";
        return v
    }

    function e(A, z) {
        var x, y, v;
        x = (y = p.include || (A && A.include), v = {
            hash: {},
            data: z
        }, y ? y.call(A, ((x = ((x = (A && A.meta)), x == null || x === false ? x : x.options)), x == null || x === false ? x : x.subtitle_content), v) : o.call(A, "include", ((x = ((x = (A && A.meta)), x == null || x === false ? x : x.options)), x == null || x === false ? x : x.subtitle_content), v));
        if (x || x === 0) {
            return x
        } else {
            return ""
        }
    }

    function t(B, A) {
        var v = "",
            y, z, x;
        v += '<p class="c-detail__rating">';
        y = (z = p.starsAndReviews || (B && B.starsAndReviews), x = {
            hash: {},
            data: A
        }, z ? z.call(B, (B && B.rating), (B && B.reviewCount), (B && B.url_review), ((y = ((y = (B && B.meta)), y == null || y === false ? y : y.options)), y == null || y === false ? y : y.hideReviewText), x) : o.call(B, "starsAndReviews", (B && B.rating), (B && B.reviewCount), (B && B.url_review), ((y = ((y = (B && B.meta)), y == null || y === false ? y : y.options)), y == null || y === false ? y : y.hideReviewText), x));
        if (y || y === 0) {
            v += y
        }
        v += "</p>";
        return v
    }

    function s(A, z) {
        var x, y, v;
        x = (y = p.include || (A && A.include), v = {
            hash: {},
            data: z
        }, y ? y.call(A, ((x = ((x = (A && A.meta)), x == null || x === false ? x : x.options)), x == null || x === false ? x : x.buy), v) : o.call(A, "include", ((x = ((x = (A && A.meta)), x == null || x === false ? x : x.options)), x == null || x === false ? x : x.buy), v));
        if (x || x === 0) {
            return x
        } else {
            return ""
        }
    }
    q += '<div class="detail__inner">';
    g = p["if"].call(r, (r && r.img_m), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += '<div class="detail__body  detail__body--pr"><div class="c-detail  detail__body__content">';
    g = (a = p.formatTitle || (r && r.formatTitle), d = {
        hash: {
            href: ((r && r.url)),
            el: ("h5"),
            className: ("c-detail__title"),
            ellipsis: (120)
        },
        data: u
    }, a ? a.call(r, (r && r.heading), d) : o.call(r, "formatTitle", (r && r.heading), d));
    if (g || g === 0) {
        q += g
    }
    q += '<p class="c-detail__subtitle">';
    g = (a = p.and || (r && r.and), d = {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, k, u),
        data: u
    }, a ? a.call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.price), (r && r.price), d) : o.call(r, "and", ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.price), (r && r.price), d));
    if (g || g === 0) {
        q += g
    }
    g = (a = p.and || (r && r.and), d = {
        hash: {},
        inverse: n.noop,
        fn: n.program(5, i, u),
        data: u
    }, a ? a.call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.price), ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.brand), (r && r.price), (r && r.brand), d) : o.call(r, "and", ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.price), ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.brand), (r && r.price), (r && r.brand), d));
    if (g || g === 0) {
        q += g
    }
    g = (a = p.and || (r && r.and), d = {
        hash: {},
        inverse: n.noop,
        fn: n.program(7, h, u),
        data: u
    }, a ? a.call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.brand), (r && r.brand), d) : o.call(r, "and", ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.brand), (r && r.brand), d));
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.subtitle_content), {
        hash: {},
        inverse: n.noop,
        fn: n.program(9, e, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += "</p>";
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.rating), {
        hash: {},
        inverse: n.noop,
        fn: n.program(11, t, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += '<p class="c-detail__desc  hide--screen-xs">';
    if (a = p["abstract"]) {
        g = a.call(r, {
            hash: {},
            data: u
        })
    } else {
        a = (r && r["abstract"]);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: u
        }) : a
    }
    if (g || g === 0) {
        q += g
    }
    q += "</p>";
    g = p["if"].call(r, ((g = ((g = (r && r.meta)), g == null || g === false ? g : g.options)), g == null || g === false ? g : g.buy), {
        hash: {},
        inverse: n.noop,
        fn: n.program(13, s, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div></div>";
    return q
});
this["DDG"]["templates"]["qa_detail"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, m, e = "function",
        g = this.escapeExpression,
        j = b.helperMissing;
    f += '<div class="detail__inner"><div class="detail__body  detail__body--qa"><div class="c-detail detail__body__content  detail__body__content--qa"><h4 class="c-detail__title  detail__title--qa"><a href="';
    if (d = b.url) {
        a = d.call(k, {
            hash: {},
            data: h
        })
    } else {
        d = (k && k.url);
        a = typeof d === e ? d.call(k, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '">';
    if (d = b.heading) {
        a = d.call(k, {
            hash: {},
            data: h
        })
    } else {
        d = (k && k.heading);
        a = typeof d === e ? d.call(k, {
            hash: {},
            data: h
        }) : d
    }
    if (a || a === 0) {
        f += a
    }
    f += '</a></h4><div class="chomp--scroll">';
    if (d = b["abstract"]) {
        a = d.call(k, {
            hash: {},
            data: h
        })
    } else {
        d = (k && k["abstract"]);
        a = typeof d === e ? d.call(k, {
            hash: {},
            data: h
        }) : d
    }
    if (a || a === 0) {
        f += a
    }
    f += '</div><p class="c-detail__more">';
    a = (d = b.moreAt || (k && k.moreAt), m = {
        hash: {},
        data: h
    }, d ? d.call(k, (k && k.url), (k && k.source), m) : j.call(k, "moreAt", (k && k.url), (k && k.source), m));
    if (a || a === 0) {
        f += a
    }
    f += "</p></div></div></div>";
    return f
});
this["DDG"]["templates"]["videos_detail"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, q, g = "function",
        i = this.escapeExpression,
        m = d.helperMissing,
        p = this;

    function c(v, u) {
        var r = "",
            s, t;
        r += '<p class="c-detail__user"><i class="c-detail__icon  c-detail__user__icon">u</i> <a href=\'';
        if (t = d.userURL) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.userURL);
            s = typeof t === g ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        r += i(s) + "'>";
        if (t = d.username) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.username);
            s = typeof t === g ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        if (s || s === 0) {
            r += s
        }
        r += "</a></p>";
        return r
    }

    function a(v, u) {
        var r = "",
            s, t;
        r += '<p class="c-detail__date"><i class="c-detail__icon  c-detail__date__icon">&uArr;</i> ';
        if (t = d.publishedDate) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.publishedDate);
            s = typeof t === g ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        if (s || s === 0) {
            r += s
        }
        r += "</p>";
        return r
    }

    function o(x, v) {
        var r = "",
            t, u, s;
        r += '<h6 class="c-detail__links--title">';
        t = (u = d.lp || (x && x.lp), s = {
            hash: {},
            data: v
        }, u ? u.call(x, "access_song", "Get this song on:", s) : m.call(x, "lp", "access_song", "Get this song on:", s));
        if (t || t === 0) {
            r += t
        }
        r += '</h6><p class="c-detail__links"><a href=\'/?q=' + i(((t = ((t = (x && x.musicVideo)), t == null || t === false ? t : t.spotifyURL)), typeof t === g ? t.apply(x) : t)) + "' class='btn c-detail__links__btn'>";
        t = (u = d.favicon || (x && x.favicon), s = {
            hash: {
                className: ("btn__icon"),
                w: ("auto"),
                h: ("auto")
            },
            data: v
        }, u ? u.call(x, "spotify", s) : m.call(x, "favicon", "spotify", s));
        if (t || t === 0) {
            r += t
        }
        r += "Spotify</a><a href='/?q=" + i(((t = ((t = (x && x.musicVideo)), t == null || t === false ? t : t.amazonURL)), typeof t === g ? t.apply(x) : t)) + "' class='btn c-detail__links__btn'>";
        t = (u = d.favicon || (x && x.favicon), s = {
            hash: {
                className: ("btn__icon"),
                w: ("auto"),
                h: ("auto")
            },
            data: v
        }, u ? u.call(x, "amazon", s) : m.call(x, "favicon", "amazon", s));
        if (t || t === 0) {
            r += t
        }
        r += "Amazon  </a><a style=\"display: none;\" href='' id=\"video-detail-itunes\" class='btn c-detail__links__btn' data-title='" + i(((t = ((t = (x && x.musicVideo)), t == null || t === false ? t : t.title)), typeof t === g ? t.apply(x) : t)) + "' data-artist='" + i(((t = ((t = (x && x.musicVideo)), t == null || t === false ? t : t.artist)), typeof t === g ? t.apply(x) : t)) + "' data-song='" + i(((t = ((t = (x && x.musicVideo)), t == null || t === false ? t : t.song)), typeof t === g ? t.apply(x) : t)) + "'>";
        t = (u = d.favicon || (x && x.favicon), s = {
            hash: {
                className: ("btn__icon"),
                w: ("auto"),
                h: ("auto")
            },
            data: v
        }, u ? u.call(x, "apple", s) : m.call(x, "favicon", "apple", s));
        if (t || t === 0) {
            r += t
        }
        r += "iTunes  </a></p>";
        return r
    }
    h += '<div class="detail__inner"><div class="detail__media  detail__media--vid  js-video"><div class="detail__media__vid-wrap  js-video-media" style="background-image:url(\'' + i((f = d.imageProxy || (n && n.imageProxy), q = {
        hash: {},
        data: j
    }, f ? f.call(n, ((b = (n && n.images)), b == null || b === false ? b : b.medium), q) : m.call(n, "imageProxy", ((b = (n && n.images)), b == null || b === false ? b : b.medium), q))) + '\');"></div></div><div class="detail__body"><div class="c-detail  detail__body__content"><h5 class="c-detail__title"><a href=\'';
    if (f = d.url) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.url);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + "' title=\"";
    if (f = d.title) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.title);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '">';
    if (f = d.title) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.title);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '</a></h5><div class="c-detail__desc">';
    b = d["if"].call(n, (n && n.username), {
        hash: {},
        inverse: p.noop,
        fn: p.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '<p class="c-detail__count"><i class="c-detail__icon  c-detail__count__icon">i</i> ';
    if (f = d.viewCount) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.viewCount);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    if (b || b === 0) {
        h += b
    }
    h += "</p>";
    b = d["if"].call(n, (n && n.publishedDate), {
        hash: {},
        inverse: p.noop,
        fn: p.program(3, a, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += "</div>    ";
    b = d["if"].call(n, (n && n.musicVideo), {
        hash: {},
        inverse: p.noop,
        fn: p.program(5, o, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '<p class="c-detail__more">';
    b = (f = d.moreAt || (n && n.moreAt), q = {
        hash: {
            className: (" "),
            iconClassName: ("c-detail__icon"),
            iconUrl: ((n && n.faviconURL))
        },
        data: j
    }, f ? f.call(n, (n && n.searchURL), (n && n.provider), q) : m.call(n, "moreAt", (n && n.searchURL), (n && n.provider), q));
    if (b || b === 0) {
        h += b
    }
    h += "</p></div></div></div>";
    return h
});
this["DDG"]["templates"]["videos_detail_embed"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<iframe class="detail__media__vid" src="';
    if (d = b.embedURL) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.embedURL);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '" frameborder="0" scrolling="no" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>';
    return f
});
this["DDG"]["templates"]["videos_detail_privacy"] = Handlebars.template(function(c, i, b, g, f) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    f = f || {};
    var e = "",
        a, d, j, h = b.helperMissing;
    e += '<div class="overlay  overlay--video-privacy"><div class="overlay__wrap"><div class="overlay__content"><div class="overlay--video-privacy__icon"></div><h3 class="overlay__title  detail__media__privacy__header">';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "YouTube Privacy Warning", j) : h.call(i, "l", "YouTube Privacy Warning", j));
    if (a || a === 0) {
        e += a
    }
    e += '</h3><p class="overlay__text  overlay--video-privacy__text">';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "YouTube (owned by Google) does not let you watch videos anonymously. As such, watching YouTube videos here will be tracked by YouTube/Google.", j) : h.call(i, "l", "YouTube (owned by Google) does not let you watch videos anonymously. As such, watching YouTube videos here will be tracked by YouTube/Google.", j));
    if (a || a === 0) {
        e += a
    }
    e += '</p><ul class="overlay__btn-list"><li class="overlay__btn-list__li"><a class="btn  btn--wire  overlay__btn  js-video-privacy-watch" href="#" title="';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Watch Here", j) : h.call(i, "l", "Watch Here", j));
    if (a || a === 0) {
        e += a
    }
    e += '">';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Watch Here", j) : h.call(i, "l", "Watch Here", j));
    if (a || a === 0) {
        e += a
    }
    e += '</a></li><li class="overlay__btn-list__li"><a class="btn  btn--wire  overlay__btn  js-video-privacy-leave" href="#" title="';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Watch on YouTube", j) : h.call(i, "l", "Watch on YouTube", j));
    if (a || a === 0) {
        e += a
    }
    e += '">';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Watch on YouTube", j) : h.call(i, "l", "Watch on YouTube", j));
    if (a || a === 0) {
        e += a
    }
    e += '</a></li></ul><label class="overlay--video-privacy__remember  js-video-privacy-remember-label"><input type="checkbox" class="js-video-privacy-remember" type="checkbox" checked="checked" />';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Remember my choice (this can be changed in %sSettings%s)", '<a href="/settings#privacy" title="{{{l "Open Settings"}}}">', "</a>", j) : h.call(i, "l", "Remember my choice (this can be changed in %sSettings%s)", '<a href="/settings#privacy" title="{{{l "Open Settings"}}}">', "</a>", j));
    if (a || a === 0) {
        e += a
    }
    e += "</label></div></div></div>";
    return e
});
this["DDG"]["templates"]["attribution"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<span class="modal-trig  ';
    if (d = b.className) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.className);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '  hide--screen-s  hide--mob"><a class="attribution--link  js-attribution-link"><span class="attribution--link__icon  ddgsi">I</span></a></span>';
    return f
});
this["DDG"]["templates"]["attribution_modal"] = Handlebars.template(function(f, o, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var i = "",
        b, g, q, n = e.helperMissing,
        h = "function",
        j = this.escapeExpression,
        p = this;

    function d(u, t) {
        var r = "",
            s;
        s = e.each.call(u, (u && u.devs), {
            hash: {},
            inverse: p.noop,
            fn: p.program(2, c, t),
            data: t
        });
        if (s || s === 0) {
            r += s
        }
        r += '<hr class="attribution__hr"/>';
        return r
    }

    function c(t, s) {
        var r;
        r = e["if"].call(t, (t && t.show), {
            hash: {},
            inverse: p.noop,
            fn: p.program(3, a, s),
            data: s
        });
        if (r || r === 0) {
            return r
        } else {
            return ""
        }
    }

    function a(x, v) {
        var r = "",
            t, u, s;
        r += '<div class="tx-clr--slate-light">';
        t = (u = e.lp || (x && x.lp), s = {
            hash: {},
            data: v
        }, u ? u.call(x, "attribution", "Developer", s) : n.call(x, "lp", "attribution", "Developer", s));
        if (t || t === 0) {
            r += t
        }
        r += ': <a href="' + j(((t = (x && x.url)), typeof t === h ? t.apply(x) : t)) + '" class="tx-clr--slate">' + j(((t = (x && x.name)), typeof t === h ? t.apply(x) : t)) + "</a></div>";
        return r
    }
    i += '<div class="modal  modal--popout  modal--popout--';
    if (g = e.direction) {
        b = g.call(o, {
            hash: {},
            data: k
        })
    } else {
        g = (o && o.direction);
        b = typeof g === h ? g.call(o, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + '  modal--popout--lg"><div class="modal__overlay js-modal-close"></div><div class="modal__wrap"><div class="modal__box"><div class="modal__body"><div class="attribution"><p class="tx-clr--slate">';
    b = (g = e.lp || (o && o.lp), q = {
        hash: {},
        data: k
    }, g ? g.call(o, "attribution", "This instant answer was made by the %sDuckDuckHack%s Community.", "", "", q) : n.call(o, "lp", "attribution", "This instant answer was made by the %sDuckDuckHack%s Community.", "", "", q));
    if (b || b === 0) {
        i += b
    }
    i += '</p><hr class="attribution__hr"/>';
    b = e["if"].call(o, (o && o.devs), {
        hash: {},
        inverse: p.noop,
        fn: p.program(1, d, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += '<div class="gw"><div class="g whole"><a href="https://duck.co/ia/view/' + j(((b = ((b = (o && o.meta)), b == null || b === false ? b : b.signal_from)), typeof b === h ? b.apply(o) : b)) + '" class="btn btn--full attribution__btn">';
    b = (g = e.l || (o && o.l), q = {
        hash: {},
        data: k
    }, g ? g.call(o, "More Info", q) : n.call(o, "l", "More Info", q));
    if (b || b === 0) {
        i += b
    }
    i += "</a></div></div></div></div></div></div></div>";
    return i
});
this["DDG"]["templates"]["chomp_link"] = Handlebars.template(function(d, m, c, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    i = i || {};
    var g = "",
        a, e, o, f = "function",
        h = this.escapeExpression,
        n = this,
        k = c.helperMissing;

    function b(q, p) {
        return "sep--after"
    }
    g += '<a class="';
    if (e = c.className) {
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
    g += h(a) + "  chomp--link  js-chomp-link  ";
    a = c["if"].call(m, (m && m.sep), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    g += '"><i class="chomp--link__icn"></i><span class="chomp--link__mr">';
    a = (e = c.lp || (m && m.lp), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "expand_text", "Show More", o) : k.call(m, "lp", "expand_text", "Show More", o));
    if (a || a === 0) {
        g += a
    }
    g += '</span><span class="chomp--link__ls">';
    a = (e = c.lp || (m && m.lp), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "expand_text", "Show Less", o) : k.call(m, "lp", "expand_text", "Show Less", o));
    if (a || a === 0) {
        g += a
    }
    g += "</span></a>";
    return g
});
this["DDG"]["templates"]["date_badge"] = Handlebars.template(function(e, j, d, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    h = h || {};
    var a, f = "function",
        g = this.escapeExpression,
        k = this;

    function c(q, p) {
        var n = "",
            o;
        n += '<div class="date-badge">';
        o = d["if"].call(q, (q && q.text), {
            hash: {},
            inverse: k.program(4, m, p),
            fn: k.program(2, b, p),
            data: p
        });
        if (o || o === 0) {
            n += o
        }
        n += "</div>";
        return n
    }

    function b(r, q) {
        var n = "",
            o, p;
        n += '<span class="date-badge__text">';
        if (p = d.text) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.text);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        n += g(o) + "</span>";
        return n
    }

    function m(r, q) {
        var n = "",
            o, p;
        n += '<span class="date-badge__month">';
        if (p = d.month) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.month);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        n += g(o) + '</span><span class="date-badge__day">';
        if (p = d.day) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.day);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        n += g(o) + "</span>";
        return n
    }
    a = d["with"].call(j, (j && j.dateBadge), {
        hash: {},
        inverse: k.noop,
        fn: k.program(1, c, h),
        data: h
    });
    if (a || a === 0) {
        return a
    } else {
        return ""
    }
});
this["DDG"]["templates"]["infobox"] = Handlebars.template(function(d, r, p, i, v) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, d.helpers);
    v = v || {};
    var q = "",
        e, b = "function",
        a = this.escapeExpression,
        n = this,
        o = p.helperMissing;

    function m(A, z) {
        var x = "",
            y;
        y = p["if"].call(A, (A && A.heading), {
            hash: {},
            inverse: n.noop,
            fn: n.program(2, k, z),
            data: z
        });
        if (y || y === 0) {
            x += y
        }
        y = p["if"].call(A, (A && A.url), {
            hash: {},
            inverse: n.program(13, t, z),
            fn: n.program(4, j, z),
            data: z
        });
        if (y || y === 0) {
            x += y
        }
        return x
    }

    function k(B, A) {
        var x = "",
            y, z;
        x += '<h6 class="info  info--head">';
        if (z = p.heading) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.heading);
            y = typeof z === b ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += a(y) + "</h6>";
        return x
    }

    function j(A, z) {
        var x = "",
            y;
        x += '<div class="info  one-line">';
        y = p["if"].call(A, (A && A.label), {
            hash: {},
            inverse: n.program(11, u, z),
            fn: n.program(5, h, z),
            data: z
        });
        if (y || y === 0) {
            x += y
        }
        x += " </div>";
        return x
    }

    function h(C, B) {
        var x = "",
            z, A, y;
        x += '<a class="tile--info__link" href="' + a((A = p.makeRelative || (C && C.makeRelative), y = {
            hash: {},
            data: B
        }, A ? A.call(C, (C && C.url), y) : o.call(C, "makeRelative", (C && C.url), y))) + '"><span class="info__label">';
        if (A = p.label) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.label);
            z = typeof A === b ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        x += a(z) + '</span><span class="info__value">';
        z = p["if"].call(C, ((z = (C && C.value)), z == null || z === false ? z : z.content), {
            hash: {},
            inverse: n.program(9, c, B),
            fn: n.program(6, g, B),
            data: B
        });
        if (z || z === 0) {
            x += z
        }
        x += "</span></a>";
        return x
    }

    function g(z, y) {
        var x;
        x = p.each.call(z, ((x = (z && z.value)), x == null || x === false ? x : x.content), {
            hash: {},
            inverse: n.noop,
            fn: n.program(7, f, y),
            data: y
        });
        if (x || x === 0) {
            return x
        } else {
            return ""
        }
    }

    function f(B, A) {
        var x = "",
            y, z;
        x += '<span class="info__value__nested"><span class="info__value__nested__label">';
        if (z = p.label) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.label);
            y = typeof z === b ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += a(y) + ":</span> ";
        if (z = p.value) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.value);
            y = typeof z === b ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += a(y) + "</span>";
        return x
    }

    function c(A, z) {
        var x, y;
        if (y = p.value) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.value);
            x = typeof y === b ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        return a(x)
    }

    function u(C, B) {
        var x = "",
            z, A, y;
        x += '<a class="tile--info__link" href="' + a((A = p.makeRelative || (C && C.makeRelative), y = {
            hash: {},
            data: B
        }, A ? A.call(C, (C && C.url), y) : o.call(C, "makeRelative", (C && C.url), y))) + '">';
        if (A = p.urlTitle) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.urlTitle);
            z = typeof A === b ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        if (z || z === 0) {
            x += z
        }
        x += "</a>";
        return x
    }

    function t(z, y) {
        var x;
        x = p["if"].call(z, (z && z.label), {
            hash: {},
            inverse: n.noop,
            fn: n.program(14, s, y),
            data: y
        });
        if (x || x === 0) {
            return x
        } else {
            return ""
        }
    }

    function s(B, A) {
        var x = "",
            y, z;
        x += '<div class="info"><span class="info__label">';
        if (z = p.label) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.label);
            y = typeof z === b ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += a(y) + '</span><span class="info__value">';
        y = p["if"].call(B, ((y = (B && B.value)), y == null || y === false ? y : y.content), {
            hash: {},
            inverse: n.program(9, c, A),
            fn: n.program(6, g, A),
            data: A
        });
        if (y || y === 0) {
            x += y
        }
        x += "</span></div>";
        return x
    }
    q += '<div class="zci__aux"><div class="tile  tile--info  js-infobox-tile">';
    e = p.each.call(r, (r && r.data), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, v),
        data: v
    });
    if (e || e === 0) {
        q += e
    }
    q += '<div class="tile__expand  tile--info__expand  is-hidden  js-tile-expand"></div></div></div>';
    return q
});
this["DDG"]["templates"]["more_at"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, m = d.helperMissing,
        g = "function",
        i = this.escapeExpression,
        o = this;

    function c(t, s) {
        var q, r, p;
        q = (r = d.favicon || (t && t.favicon), p = {
            hash: {
                className: ((t && t.iconClassName))
            },
            data: s
        }, r ? r.call(t, (t && t.sourceUrl), p) : m.call(t, "favicon", (t && t.sourceUrl), p));
        if (q || q === 0) {
            return q
        } else {
            return ""
        }
    }

    function a(u, t) {
        var p = "",
            r, s, q;
        p += '<img class="';
        if (s = d.iconClassName) {
            r = s.call(u, {
                hash: {},
                data: t
            })
        } else {
            s = (u && u.iconClassName);
            r = typeof s === g ? s.call(u, {
                hash: {},
                data: t
            }) : s
        }
        p += i(r) + '" src="' + i((s = d.imageProxy || (u && u.imageProxy), q = {
            hash: {},
            data: t
        }, s ? s.call(u, (u && u.sourceIconUrl), q) : m.call(u, "imageProxy", (u && u.sourceIconUrl), q))) + '" />';
        return p
    }
    h += '<a href="';
    if (f = d.sourceUrl) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.sourceUrl);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '" class="';
    if (f = d.className) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.className);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '">';
    b = d["if"].call(n, (n && n.sourceIcon), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    b = d["if"].call(n, (n && n.sourceIconUrl), {
        hash: {},
        inverse: o.noop,
        fn: o.program(3, a, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    if (f = d.moreAtText) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.moreAtText);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    if (b || b === 0) {
        h += b
    }
    h += "</a>";
    return h
});
this["DDG"]["templates"]["more_at_text"] = Handlebars.template(function(e, j, d, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    h = h || {};
    var b, f = "function",
        g = this.escapeExpression,
        k = this;

    function c(q, p) {
        var n, o;
        if (o = d.sourceName) {
            n = o.call(q, {
                hash: {},
                data: p
            })
        } else {
            o = (q && q.sourceName);
            n = typeof o === f ? o.call(q, {
                hash: {},
                data: p
            }) : o
        }
        return g(n)
    }

    function a(p, o) {
        var n;
        n = d["with"].call(p, (p && p.sourceLogo), {
            hash: {},
            inverse: k.noop,
            fn: k.program(4, m, o),
            data: o
        });
        if (n || n === 0) {
            return n
        } else {
            return ""
        }
    }

    function m(r, q) {
        var n = "",
            o, p;
        n += '<img class="zci__more-at__logo" src="';
        if (p = d.url) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.url);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        n += g(o) + '" width="';
        if (p = d.width) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.width);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        n += g(o) + '" height="';
        if (p = d.height) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.height);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        n += g(o) + '" />';
        return n
    }
    b = d.unless.call(j, (j && j.sourceLogo), {
        hash: {},
        inverse: k.program(3, a, h),
        fn: k.program(1, c, h),
        data: h
    });
    if (b || b === 0) {
        return b
    } else {
        return ""
    }
});
this["DDG"]["templates"]["no_results"] = Handlebars.template(function(e, m, d, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    i = i || {};
    var g = "",
        b, f = "function",
        h = this.escapeExpression,
        k = d.helperMissing,
        n = this;

    function c(r, q) {
        var o, p;
        if (p = d.message) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.message);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        return h(o)
    }

    function a(s, r) {
        var p, q, o;
        p = (q = d.l || (s && s.l), o = {
            hash: {},
            data: r
        }, q ? q.call(s, "Sorry, no results here.", o) : k.call(s, "l", "Sorry, no results here.", o));
        if (p || p === 0) {
            return p
        } else {
            return ""
        }
    }
    g += '<div class="zci__no-results  t-s--screen-xs"><span class="zci__no-results__txt">';
    b = d["if"].call(m, (m && m.message), {
        hash: {},
        inverse: n.program(3, a, i),
        fn: n.program(1, c, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += "</span></div>";
    return g
});
this["DDG"]["templates"]["places_detail_rating_foursquare"] = Handlebars.template(function(d, k, c, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression,
        m = this;

    function b(r, q) {
        var n = "",
            o, p;
        n += '<a class="review-count review-count--foursquare" href="';
        if (p = c.url) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.url);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        n += h(o) + '"><span class="review-count__icon  ddgsi">O</span>';
        if (p = c.reviews) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.reviews);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        n += h(o) + "</a>";
        return n
    }
    g += '<span class="tile__rating__foursquare  ';
    if (e = c.ratingClass) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.ratingClass);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '  badge--txt">';
    if (e = c.rating) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rating);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "</span>";
    a = c["if"].call(k, (k && k.reviews), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, b, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    return g
});
this["DDG"]["templates"]["places_detail_rating_yelp"] = Handlebars.template(function(d, k, c, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    h = h || {};
    var f = "",
        a, e, n, j = c.helperMissing,
        g = this.escapeExpression,
        m = this;

    function b(s, r) {
        var p, q, o;
        p = (q = c.reviewCount || (s && s.reviewCount), o = {
            hash: {},
            data: r
        }, q ? q.call(s, (s && s.reviews), (s && s.url), o) : j.call(s, "reviewCount", (s && s.reviews), (s && s.url), o));
        if (p || p === 0) {
            return p
        } else {
            return ""
        }
    }
    f += '<img src="' + g((e = c.imageProxy || (k && k.imageProxy), n = {
        hash: {},
        data: h
    }, e ? e.call(k, (k && k.ratingImageURL), n) : j.call(k, "imageProxy", (k && k.ratingImageURL), n))) + '" class="tile__rating__yelp-stars" />';
    a = c["if"].call(k, (k && k.reviews), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, b, h),
        data: h
    });
    if (a || a === 0) {
        f += a
    }
    return f
});
this["DDG"]["templates"]["places_item_footer_foursquare"] = Handlebars.template(function(d, k, c, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    i = i || {};
    var g = "",
        a, e, f = "function",
        h = this.escapeExpression,
        m = this;

    function b(r, q) {
        var n = "",
            o, p;
        n += '<span class="review-count review-count--foursquare"><span class="review-count__icon  ddgsi">O</span>';
        if (p = c.reviews) {
            o = p.call(r, {
                hash: {},
                data: q
            })
        } else {
            p = (r && r.reviews);
            o = typeof p === f ? p.call(r, {
                hash: {},
                data: q
            }) : p
        }
        n += h(o) + "</span>";
        return n
    }
    g += '<span class="tile__rating__foursquare  ';
    if (e = c.ratingClass) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.ratingClass);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '  badge--txt">';
    if (e = c.rating) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rating);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "</span>";
    a = c["if"].call(k, (k && k.reviews), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, b, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    return g
});
this["DDG"]["templates"]["places_item_footer_yelp"] = Handlebars.template(function(d, k, c, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    h = h || {};
    var f = "",
        a, e, n, j = c.helperMissing,
        g = this.escapeExpression,
        m = this;

    function b(s, r) {
        var p, q, o;
        p = (q = c.reviewCount || (s && s.reviewCount), o = {
            hash: {},
            data: r
        }, q ? q.call(s, (s && s.reviews), "", true, o) : j.call(s, "reviewCount", (s && s.reviews), "", true, o));
        if (p || p === 0) {
            return p
        } else {
            return ""
        }
    }
    f += '<img src="' + g((e = c.imageProxy || (k && k.imageProxy), n = {
        hash: {},
        data: h
    }, e ? e.call(k, (k && k.ratingImageURL), n) : j.call(k, "imageProxy", (k && k.ratingImageURL), n))) + '" class="tile__rating__yelp-stars" />';
    a = c["if"].call(k, (k && k.reviews), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, b, h),
        data: h
    });
    if (a || a === 0) {
        f += a
    }
    return f
});
this["DDG"]["templates"]["play_button"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<div class="play-btn js-play-btn" data-url="';
    if (d = b.url) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.url);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '"><span class="play-btn__icn  ddgsi  js-play-btn-icn">►</span><span class="play-btn__err  is-hidden  js-play-btn-err"></span></div>';
    return f
});
this["DDG"]["templates"]["products_amazon_badge"] = Handlebars.template(function(d, e, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, d.helpers);
    c = c || {};
    return '<span class="tile--pr__badge  badge  badge--prime"></span>'
});
this["DDG"]["templates"]["products_amazon_buy"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, m, e = "function",
        g = this.escapeExpression,
        j = b.helperMissing;
    f += '    <span class="detail__callout--pr"><a href="';
    if (d = b.url) {
        a = d.call(k, {
            hash: {},
            data: h
        })
    } else {
        d = (k && k.url);
        a = typeof d === e ? d.call(k, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '" class="btn btn--primary">';
    a = (d = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, d ? d.call(k, "More at", m) : j.call(k, "l", "More at", m));
    if (a || a === 0) {
        f += a
    }
    f += " " + g(((a = ((a = (k && k.meta)), a == null || a === false ? a : a.sourceName)), typeof a === e ? a.apply(k) : a)) + "</a></span>";
    return f
});
this["DDG"]["templates"]["record"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, r, q = this,
        g = "function",
        i = this.escapeExpression,
        m = d.helperMissing;

    function c(t, s) {
        return "record--keyspacing"
    }

    function a(t, s) {
        return "record--highlight"
    }

    function p(z, x, y) {
        var s = "",
            u, v, t;
        s += '<tr class="record__row  ';
        u = d["if"].call(z, ((u = ((u = (y && y.meta)), u == null || u === false ? u : u.options)), u == null || u === false ? u : u.rowHighlight), {
            hash: {},
            inverse: q.noop,
            fn: q.program(6, o, x),
            data: x
        });
        if (u || u === 0) {
            s += u
        }
        s += '"><td class="record__cell  record__cell--key">';
        if (v = d.key) {
            u = v.call(z, {
                hash: {},
                data: x
            })
        } else {
            v = (z && z.key);
            u = typeof v === g ? v.call(z, {
                hash: {},
                data: x
            }) : v
        }
        s += i(u) + '</td><td class="record__cell  record__cell--value">' + i((v = d.ellipsis || (z && z.ellipsis), t = {
            hash: {},
            data: x
        }, v ? v.call(z, (z && z.value), 350, t) : m.call(z, "ellipsis", (z && z.value), 350, t))) + "</td></tr>";
        return s
    }

    function o(t, s) {
        return "record__row--highlight"
    }
    h += '<div class="record  ';
    b = d["if"].call(n, ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.options)), b == null || b === false ? b : b.keySpacing), {
        hash: {},
        inverse: q.noop,
        fn: q.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += "  ";
    b = d["if"].call(n, ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.options)), b == null || b === false ? b : b.rowHighlight), {
        hash: {},
        inverse: q.noop,
        fn: q.program(3, a, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '"><table class="record__body">';
    b = (f = d["table-each"] || (n && n["table-each"]), r = {
        hash: {},
        inverse: q.noop,
        fn: q.programWithDepth(5, p, j, n),
        data: j
    }, f ? f.call(n, n, r) : m.call(n, "table-each", n, r));
    if (b || b === 0) {
        h += b
    }
    h += "</table></div>";
    return h
});
this["DDG"]["templates"]["sports_score"] = Handlebars.template(function(f, u, s, n, C) {
    this.compilerInfo = [4, ">= 1.0.0"];
    s = this.merge(s, f.helpers);
    C = C || {};
    var t = "",
        i, a, d, c = "function",
        b = this.escapeExpression,
        r = s.helperMissing,
        q = this;

    function p(H, G) {
        var D = "",
            E, F;
        D += '<span class="c-score__clock"><span class="c-score__clock__icon ddgsi-clock"></span>';
        if (F = s.clock) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.clock);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + "</span>";
        return D
    }

    function o(G, F) {
        var E, D;
        return b((E = s.momentDate || (G && G.momentDate), D = {
            hash: {},
            data: F
        }, E ? E.call(G, (G && G.start_time), D) : r.call(G, "momentDate", (G && G.start_time), D)))
    }

    function m(G, F) {
        var D = "",
            E;
        E = s.each.call(G, ((E = ((E = (G && G.score)), E == null || E === false ? E : E.away)), E == null || E === false ? E : E.sequence), {
            hash: {},
            inverse: q.noop,
            fn: q.program(6, k, F),
            data: F
        });
        if (E || E === 0) {
            D += E
        }
        E = s["if"].call(G, (G && G.current_count), {
            hash: {},
            inverse: q.noop,
            fn: q.program(8, h, F),
            data: F
        });
        if (E || E === 0) {
            D += E
        }
        return D
    }

    function k(H, G) {
        var D = "",
            E, F;
        D += '<div class="c-score__item  c-score__item--';
        if (F = s.type) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.type);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + '">';
        if (F = s.number) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.number);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + "</div>";
        return D
    }

    function h(E, D) {
        return '<div class="c-score__head__total">Total</div>'
    }

    function B(H, G) {
        var D = "",
            E, F;
        D += '<div class="c-score__team"><div class="c-score__team__logo">';
        E = s["if"].call(H, (H && H.image), {
            hash: {},
            inverse: q.program(13, z, G),
            fn: q.program(11, A, G),
            data: G
        });
        if (E || E === 0) {
            D += E
        }
        D += '</div><div class="c-score__team__name"><span class="c-score__team__market">';
        if (F = s.location) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.location);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + '</span><span class="c-score__team__nick">';
        if (F = s.name) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.name);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + "</span></div></div>";
        return D
    }

    function A(H, G) {
        var D = "",
            E, F;
        D += '<img class="c-score__team__img" src="';
        if (F = s.image) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.image);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + '">';
        return D
    }

    function z(E, D) {
        return '<span class="c-score__team__logo__ph">u</span>'
    }

    function y(G, F) {
        var D = "",
            E;
        E = s.each.call(G, ((E = ((E = (G && G.score)), E == null || E === false ? E : E.away)), E == null || E === false ? E : E.sequence), {
            hash: {},
            inverse: q.noop,
            fn: q.program(16, x, F),
            data: F
        });
        if (E || E === 0) {
            D += E
        }
        E = s["if"].call(G, (G && G.current_count), {
            hash: {},
            inverse: q.noop,
            fn: q.program(18, v, F),
            data: F
        });
        if (E || E === 0) {
            D += E
        }
        return D
    }

    function x(H, G) {
        var D = "",
            E, F;
        D += '<div class="c-score__item  c-score__item--';
        if (F = s.type) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.type);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + '">';
        if (F = s.points) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.points);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + "</div>";
        return D
    }

    function v(H, G) {
        var D = "",
            E, F;
        D += '<div class="c-score__line__total">';
        if (F = s.away_total) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.away_total);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + "</div>";
        return D
    }

    function j(G, F) {
        var D = "",
            E;
        E = s.each.call(G, ((E = ((E = (G && G.score)), E == null || E === false ? E : E.home)), E == null || E === false ? E : E.sequence), {
            hash: {},
            inverse: q.noop,
            fn: q.program(16, x, F),
            data: F
        });
        if (E || E === 0) {
            D += E
        }
        E = s["if"].call(G, (G && G.current_count), {
            hash: {},
            inverse: q.noop,
            fn: q.program(21, g, F),
            data: F
        });
        if (E || E === 0) {
            D += E
        }
        return D
    }

    function g(H, G) {
        var D = "",
            E, F;
        D += '<div class="c-score__line__total">';
        if (F = s.home_total) {
            E = F.call(H, {
                hash: {},
                data: G
            })
        } else {
            F = (H && H.home_total);
            E = typeof F === c ? F.call(H, {
                hash: {},
                data: G
            }) : F
        }
        D += b(E) + "</div>";
        return D
    }

    function e(H, G) {
        var D = "",
            F, E;
        D += '<span class="c-score__foot__info">Last updated ' + b((F = s.momentTime || (H && H.momentTime), E = {
            hash: {},
            data: G
        }, F ? F.call(H, (H && H.updated), E) : r.call(H, "momentTime", (H && H.updated), E))) + "</span>";
        return D
    }
    t += '<div class="c-score"><div class="c-score__head"><div class="c-score__head__date">';
    i = s["if"].call(u, (u && u.clock), {
        hash: {},
        inverse: q.program(3, o, C),
        fn: q.program(1, p, C),
        data: C
    });
    if (i || i === 0) {
        t += i
    }
    t += "</div>";
    i = s["if"].call(u, (u && u.score), {
        hash: {},
        inverse: q.noop,
        fn: q.program(5, m, C),
        data: C
    });
    if (i || i === 0) {
        t += i
    }
    t += '</div><div class="c-score__line  c-score__line--vs1"><div class="c-score__line__name">';
    i = s["with"].call(u, (u && u.away_team), {
        hash: {},
        inverse: q.noop,
        fn: q.program(10, B, C),
        data: C
    });
    if (i || i === 0) {
        t += i
    }
    t += "</div>";
    i = s["if"].call(u, (u && u.score), {
        hash: {},
        inverse: q.noop,
        fn: q.program(15, y, C),
        data: C
    });
    if (i || i === 0) {
        t += i
    }
    t += '</div><div class="c-score__line  c-score__line--vs2" data-vs="@"><div class="c-score__line__name">';
    i = s["with"].call(u, (u && u.home_team), {
        hash: {},
        inverse: q.noop,
        fn: q.program(10, B, C),
        data: C
    });
    if (i || i === 0) {
        t += i
    }
    t += "</div>";
    i = s["if"].call(u, (u && u.score), {
        hash: {},
        inverse: q.noop,
        fn: q.program(20, j, C),
        data: C
    });
    if (i || i === 0) {
        t += i
    }
    t += '</div><div class="c-score__foot"><div class="c-score__foot__main"><div class="c-score__venue">@ ' + b(((i = ((i = (u && u.venue)), i == null || i === false ? i : i.market)), typeof i === c ? i.apply(u) : i)) + '<span class="c-score__venue__name"> - ' + b(((i = ((i = (u && u.venue)), i == null || i === false ? i : i.name)), typeof i === c ? i.apply(u) : i)) + '</span></div><div class="c-score__foot__more  c-score__opt">';
    i = (a = s.and || (u && u.and), d = {
        hash: {},
        inverse: q.noop,
        fn: q.program(23, e, C),
        data: C
    }, a ? a.call(u, (u && u.updated), ((i = ((i = (u && u.score)), i == null || i === false ? i : i.away)), i == null || i === false ? i : i.sequence), d) : r.call(u, "and", (u && u.updated), ((i = ((i = (u && u.score)), i == null || i === false ? i : i.away)), i == null || i === false ? i : i.sequence), d));
    if (i || i === 0) {
        t += i
    }
    t += "</div></div></div></div>";
    return t
});
this["DDG"]["templates"]["stars"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<span class="stars  stars--';
    if (d = b.rating) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.rating);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '"><i class="star  stars__1"></i><i class="star  stars__2"></i><i class="star  stars__3"></i><i class="star  stars__4"></i><i class="star  stars__5"></i></span>';
    return f
});
this["DDG"]["templates"]["subtitle"] = Handlebars.template(function(e, j, d, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    h = h || {};
    var a, f = "function",
        g = this.escapeExpression,
        n = this;

    function c(s, r) {
        var p = "",
            q;
        q = d["if"].call(s, (r == null || r === false ? r : r.index), {
            hash: {},
            inverse: n.noop,
            fn: n.program(2, b, r),
            data: r
        });
        if (q || q === 0) {
            p += q
        }
        q = d["if"].call(s, (s && s.href), {
            hash: {},
            inverse: n.program(7, k, r),
            fn: n.program(4, o, r),
            data: r
        });
        if (q || q === 0) {
            p += q
        }
        return p
    }

    function b(q, p) {
        return '<span class="sep"></span>'
    }

    function o(t, s) {
        var p = "",
            q, r;
        p += '<a href="';
        if (r = d.href) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.href);
            q = typeof r === f ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += g(q) + '"';
        q = d["if"].call(t, (t && t.className), {
            hash: {},
            inverse: n.noop,
            fn: n.program(5, m, s),
            data: s
        });
        if (q || q === 0) {
            p += q
        }
        p += ">";
        if (r = d.text) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.text);
            q = typeof r === f ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += g(q) + "</a>";
        return p
    }

    function m(t, s) {
        var p = "",
            q, r;
        p += ' class="';
        if (r = d.className) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.className);
            q = typeof r === f ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += g(q) + '"';
        return p
    }

    function k(q, p) {
        return g((typeof q === f ? q.apply(q) : q))
    }
    a = d.each.call(j, (j && j.components), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, c, h),
        data: h
    });
    if (a || a === 0) {
        return a
    } else {
        return ""
    }
});
this["DDG"]["templates"]["tile_body"] = Handlebars.template(function(e, r, p, i, s) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    s = s || {};
    var q = "",
        f, a, d, c = "function",
        b = this.escapeExpression,
        n = this,
        o = p.helperMissing;

    function m(x, v) {
        var t = "",
            u;
        t += "has-foot ";
        u = p["if"].call(x, (x && x.footLines), {
            hash: {},
            inverse: n.noop,
            fn: n.program(2, k, v),
            data: v
        });
        if (u || u === 0) {
            t += u
        }
        return t
    }

    function k(y, x) {
        var t = "",
            u, v;
        t += "has-foot--";
        if (v = p.footLines) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.footLines);
            u = typeof v === c ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        t += b(u);
        return t
    }

    function j(y, x) {
        var u, v, t;
        u = (v = p.include || (y && y.include), t = {
            hash: {},
            data: x
        }, v ? v.call(y, "tile_snippet", t) : o.call(y, "include", "tile_snippet", t));
        if (u || u === 0) {
            return u
        } else {
            return ""
        }
    }

    function h(z, y) {
        var t = "",
            v, x, u;
        t += '<div class="tile__foot ';
        v = p["if"].call(z, (z && z.footLines), {
            hash: {},
            inverse: n.noop,
            fn: n.program(7, g, y),
            data: y
        });
        if (v || v === 0) {
            t += v
        }
        t += '">';
        v = (x = p.include || (z && z.include), u = {
            hash: {},
            data: y
        }, x ? x.call(z, (z && z.footer_content), u) : o.call(z, "include", (z && z.footer_content), u));
        if (v || v === 0) {
            t += v
        }
        t += "</div>";
        return t
    }

    function g(y, x) {
        var t = "",
            u, v;
        t += "tile__foot--";
        if (v = p.footLines) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.footLines);
            u = typeof v === c ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        t += b(u);
        return t
    }
    q += '<div class="tile__body ';
    f = p["if"].call(r, (r && r.footer_content), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, s),
        data: s
    });
    if (f || f === 0) {
        q += f
    }
    q += '">';
    f = (a = p.include || (r && r.include), d = {
        hash: {},
        data: s
    }, a ? a.call(r, "tile_titles", d) : o.call(r, "include", "tile_titles", d));
    if (f || f === 0) {
        q += f
    }
    f = p["if"].call(r, (r && r.description), {
        hash: {},
        inverse: n.noop,
        fn: n.program(4, j, s),
        data: s
    });
    if (f || f === 0) {
        q += f
    }
    f = p["if"].call(r, (r && r.footer_content), {
        hash: {},
        inverse: n.noop,
        fn: n.program(6, h, s),
        data: s
    });
    if (f || f === 0) {
        q += f
    }
    q += "</div>";
    return q
});
this["DDG"]["templates"]["tile_snippet"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, p, g = "function",
        i = this.escapeExpression,
        o = this,
        m = d.helperMissing;

    function c(r, q) {
        return " tile__content--sm "
    }

    function a(s, r) {
        var q;
        return i(((q = ((q = ((q = (s && s.meta)), q == null || q === false ? q : q.elClass)), q == null || q === false ? q : q.tileSnippet)), typeof q === g ? q.apply(s) : q))
    }
    h += '<div class="tile__content ';
    b = d.unless.call(n, ((b = ((b = (n && n.meta)), b == null || b === false ? b : b.elClass)), b == null || b === false ? b : b.tileSnippet), {
        hash: {},
        inverse: o.program(3, a, j),
        fn: o.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '">' + i((f = d.ellipsis || (n && n.ellipsis), p = {
        hash: {
            fallback: (55)
        },
        data: j
    }, f ? f.call(n, (n && n.description), ((b = (n && n.meta)), b == null || b === false ? b : b.snippetChars), p) : m.call(n, "ellipsis", (n && n.description), ((b = (n && n.meta)), b == null || b === false ? b : b.snippetChars), p))) + "</div>";
    return h
});
this["DDG"]["templates"]["tile_titles"] = Handlebars.template(function(e, q, o, i, v) {
    this.compilerInfo = [4, ">= 1.0.0"];
    o = this.merge(o, e.helpers);
    v = v || {};
    var p = "",
        f, a, n = o.helperMissing,
        b = this.escapeExpression,
        c = "function",
        m = this;

    function k(C, B) {
        var x = "",
            z, A, y;
        x += '<img src="' + b((A = o.imageProxy || (C && C.imageProxy), y = {
            hash: {},
            data: B
        }, A ? A.call(C, (C && C.icon), y) : n.call(C, "imageProxy", (C && C.icon), y))) + '" alt="';
        if (A = o.title) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.title);
            z = typeof A === c ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        x += b(z) + '" class="tile__icon" />';
        return x
    }

    function j(B, A) {
        var x = "",
            y, z;
        x += '<span class="tile__icon  tile__icon--pin">';
        if (z = o.num) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.num);
            y = typeof z === c ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += b(y) + "</span>";
        return x
    }

    function h(y, x) {
        return "with-sub"
    }

    function g(y, x) {
        return "has-sub--a"
    }

    function d(B, A) {
        var x = "",
            y, z;
        x += 'a href="';
        if (z = o.url) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.url);
            y = typeof z === c ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += b(y) + '"';
        return x
    }

    function u(y, x) {
        return "span"
    }

    function t(y, x) {
        return "a"
    }

    function s(C, B) {
        var x = "",
            z, A, y;
        x += '<span class="tile__title__sub ' + b(((z = ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.elClass)), z == null || z === false ? z : z.tileAltSubtitle)), typeof z === c ? z.apply(C) : z)) + " ";
        if (A = o.altSubClass) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.altSubClass);
            z = typeof A === c ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        x += b(z) + '">';
        z = (A = o.formatSubtitle || (C && C.formatSubtitle), y = {
            hash: {},
            data: B
        }, A ? A.call(C, (C && C.altSubtitle), y) : n.call(C, "formatSubtitle", (C && C.altSubtitle), y));
        if (z || z === 0) {
            x += z
        }
        x += "</span>";
        return x
    }

    function r(C, B) {
        var x = "",
            z, A, y;
        x += '<span class="tile__sub ' + b(((z = ((z = ((z = (C && C.meta)), z == null || z === false ? z : z.elClass)), z == null || z === false ? z : z.tileSubtitle)), typeof z === c ? z.apply(C) : z)) + " ";
        if (A = o.subClass) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.subClass);
            z = typeof A === c ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        x += b(z) + '">';
        z = (A = o.formatSubtitle || (C && C.formatSubtitle), y = {
            hash: {},
            data: B
        }, A ? A.call(C, (C && C.subtitle), y) : n.call(C, "formatSubtitle", (C && C.subtitle), y));
        if (z || z === 0) {
            x += z
        }
        x += "</span>";
        return x
    }
    f = o["if"].call(q, (q && q.icon), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, k, v),
        data: v
    });
    if (f || f === 0) {
        p += f
    }
    f = o["if"].call(q, (q && q.showPin), {
        hash: {},
        inverse: m.noop,
        fn: m.program(3, j, v),
        data: v
    });
    if (f || f === 0) {
        p += f
    }
    p += '<h5 class="tile__title ';
    f = o["if"].call(q, (q && q.subtitle), {
        hash: {},
        inverse: m.noop,
        fn: m.program(5, h, v),
        data: v
    });
    if (f || f === 0) {
        p += f
    }
    p += " ";
    f = o["if"].call(q, (q && q.altSubtitle), {
        hash: {},
        inverse: m.noop,
        fn: m.program(7, g, v),
        data: v
    });
    if (f || f === 0) {
        p += f
    }
    p += " " + b(((f = ((f = ((f = (q && q.meta)), f == null || f === false ? f : f.elClass)), f == null || f === false ? f : f.tileTitle)), typeof f === c ? f.apply(q) : f)) + " ";
    if (a = o.titleClass) {
        f = a.call(q, {
            hash: {},
            data: v
        })
    } else {
        a = (q && q.titleClass);
        f = typeof a === c ? a.call(q, {
            hash: {},
            data: v
        }) : a
    }
    p += b(f) + '"><';
    f = o["if"].call(q, (q && q.url), {
        hash: {},
        inverse: m.program(11, u, v),
        fn: m.program(9, d, v),
        data: v
    });
    if (f || f === 0) {
        p += f
    }
    p += ' class="tile__title__main">';
    if (a = o.title) {
        f = a.call(q, {
            hash: {},
            data: v
        })
    } else {
        a = (q && q.title);
        f = typeof a === c ? a.call(q, {
            hash: {},
            data: v
        }) : a
    }
    p += b(f) + "</";
    f = o["if"].call(q, (q && q.url), {
        hash: {},
        inverse: m.program(11, u, v),
        fn: m.program(13, t, v),
        data: v
    });
    if (f || f === 0) {
        p += f
    }
    p += ">";
    f = o["if"].call(q, (q && q.altSubtitle), {
        hash: {},
        inverse: m.noop,
        fn: m.program(15, s, v),
        data: v
    });
    if (f || f === 0) {
        p += f
    }
    p += "</h5>";
    f = o["if"].call(q, (q && q.subtitle), {
        hash: {},
        inverse: m.noop,
        fn: m.program(17, r, v),
        data: v
    });
    if (f || f === 0) {
        p += f
    }
    return p
});
this["DDG"]["templates"]["title"] = Handlebars.template(function(e, m, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, g = "function",
        i = this.escapeExpression,
        q = this;

    function c(t, s) {
        return "has-sub"
    }

    function a(x, v) {
        var s = "",
            t, u;
        s += '<a href="';
        if (u = d.href) {
            t = u.call(x, {
                hash: {},
                data: v
            })
        } else {
            u = (x && x.href);
            t = typeof u === g ? u.call(x, {
                hash: {},
                data: v
            }) : u
        }
        s += i(t) + '" ';
        t = d["if"].call(x, (x && x.hrefTitle), {
            hash: {},
            inverse: q.noop,
            fn: q.program(4, r, v),
            data: v
        });
        if (t || t === 0) {
            s += t
        }
        s += ">";
        return s
    }

    function r(x, v) {
        var s = "",
            t, u;
        s += 'title="';
        if (u = d.hrefTitle) {
            t = u.call(x, {
                hash: {},
                data: v
            })
        } else {
            u = (x && x.hrefTitle);
            t = typeof u === g ? u.call(x, {
                hash: {},
                data: v
            }) : u
        }
        s += i(t) + '"';
        return s
    }

    function p(t, s) {
        return "</a>"
    }

    function o(x, v) {
        var s = "",
            t, u;
        s += '<span class="';
        if (u = d.className) {
            t = u.call(x, {
                hash: {},
                data: v
            })
        } else {
            u = (x && x.className);
            t = typeof u === g ? u.call(x, {
                hash: {},
                data: v
            }) : u
        }
        s += i(t) + "__sub ";
        t = d["if"].call(x, (x && x.optSub), {
            hash: {},
            inverse: q.noop,
            fn: q.program(9, n, v),
            data: v
        });
        if (t || t === 0) {
            s += t
        }
        s += '">';
        if (u = d.subTitle) {
            t = u.call(x, {
                hash: {},
                data: v
            })
        } else {
            u = (x && x.subTitle);
            t = typeof u === g ? u.call(x, {
                hash: {},
                data: v
            }) : u
        }
        if (t || t === 0) {
            s += t
        }
        s += "</span>";
        return s
    }

    function n(t, s) {
        return "opt"
    }
    h += "<";
    if (f = d.tagName) {
        b = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.tagName);
        b = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + ' class="';
    if (f = d.className) {
        b = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.className);
        b = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + " ";
    if (f = d.classNameSec) {
        b = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.classNameSec);
        b = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + " ";
    b = d["if"].call(m, (m && m.subTitle), {
        hash: {},
        inverse: q.noop,
        fn: q.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '">';
    b = d["if"].call(m, (m && m.href), {
        hash: {},
        inverse: q.noop,
        fn: q.program(3, a, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    if (f = d.title) {
        b = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.title);
        b = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    if (b || b === 0) {
        h += b
    }
    b = d["if"].call(m, (m && m.href), {
        hash: {},
        inverse: q.noop,
        fn: q.program(6, p, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    b = d["if"].call(m, (m && m.subTitle), {
        hash: {},
        inverse: q.noop,
        fn: q.program(8, o, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += "</";
    if (f = d.tagName) {
        b = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.tagName);
        b = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + ">";
    return h
});
this["DDG"] = this["DDG"] || {};
this["DDG"]["templates"] = this["DDG"]["templates"] || {};
this["DDG"]["templates"]["about_header"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, m = d.helperMissing,
        i = this.escapeExpression,
        o = this,
        g = "function";

    function c(q, p) {
        return "module__header--with-image"
    }

    function a(u, t) {
        var p = "",
            r, s, q;
        p += '<div class="module__header__image js-about-header-image" style="background-image:url(\'' + i((s = d.imageProxy || (u && u.imageProxy), q = {
            hash: {},
            data: t
        }, s ? s.call(u, (u && u.imageURL), q) : m.call(u, "imageProxy", (u && u.imageURL), q))) + '\');"><img class="module__header__image__img" src="' + i((s = d.imageProxy || (u && u.imageProxy), q = {
            hash: {},
            data: t
        }, s ? s.call(u, (u && u.imageURL), q) : m.call(u, "imageProxy", (u && u.imageURL), q))) + '" /><span class="module__header__image__more">';
        r = (s = d.l || (u && u.l), q = {
            hash: {},
            data: t
        }, s ? s.call(u, "More Images", q) : m.call(u, "l", "More Images", q));
        if (r || r === 0) {
            p += r
        }
        p += "</span></div>";
        return p
    }
    h += '<div class="module__header ';
    b = d["if"].call(n, (n && n.imageURL), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '">';
    b = d["if"].call(n, (n && n.imageURL), {
        hash: {},
        inverse: o.noop,
        fn: o.program(3, a, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '<a class="module__header__map js-about-header-map" href="#" title="';
    if (f = d.mapTitle) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.mapTitle);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '"></a><div class="module__header__shadow"></div></div>';
    return h
});
this["DDG"]["templates"]["about_infobox"] = Handlebars.template(function(f, m, e, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    j = j || {};
    var h = "",
        b, n = this,
        g = "function",
        i = this.escapeExpression;

    function d(q, p) {
        var o;
        o = e["if"].call(q, (q && q.label), {
            hash: {},
            inverse: n.noop,
            fn: n.program(2, c, p),
            data: p
        });
        if (o || o === 0) {
            return o
        } else {
            return ""
        }
    }

    function c(s, r) {
        var o = "",
            p, q;
        o += '<div class="about-info-box__info-row';
        p = e.unless.call(s, (s && s.visible), {
            hash: {},
            inverse: n.noop,
            fn: n.program(3, a, r),
            data: r
        });
        if (p || p === 0) {
            o += p
        }
        o += '"><span class="about-info-box__info-label">';
        if (q = e.label) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.label);
            p = typeof q === g ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        o += i(p) + ':</span><span class="about-info-box__info-value">';
        if (q = e.value) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.value);
            p = typeof q === g ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        o += i(p) + "</span></div>";
        return o
    }

    function a(p, o) {
        return " is-hidden"
    }
    h += '<div class="about-info-box">';
    b = e.each.call(m, (m && m.items), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, d, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += "</div>";
    return h
});
this["DDG"]["templates"]["about_module"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        a, f, r, g = "function",
        i = this.escapeExpression,
        m = d.helperMissing,
        p = this;

    function c(u, t) {
        var s;
        s = d["if"].call(u, (u && u.Image), {
            hash: {},
            inverse: p.noop,
            fn: p.program(2, b, t),
            data: t
        });
        if (s || s === 0) {
            return s
        } else {
            return ""
        }
    }

    function b(y, x) {
        var s = "",
            u, v, t;
        s += '<a href="';
        if (v = d.AbstractURL) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.AbstractURL);
            u = typeof v === g ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        s += i(u) + '" class="js-about-module-link" title="';
        u = (v = d.l || (y && y.l), t = {
            hash: {},
            data: x
        }, v ? v.call(y, "More at %s ", (y && y.moreAtText), t) : m.call(y, "l", "More at %s ", (y && y.moreAtText), t));
        if (u || u === 0) {
            s += u
        }
        s += '"><img src="';
        if (v = d.Image) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.Image);
            u = typeof v === g ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        if (u || u === 0) {
            s += u
        }
        s += '" align="right" class="module--about__img"></a>';
        return s
    }

    function q(x, v) {
        var s = "",
            t, u;
        s += '<span class="module__title__sub">';
        if (u = d.subTitle) {
            t = u.call(x, {
                hash: {},
                data: v
            })
        } else {
            u = (x && x.subTitle);
            t = typeof u === g ? u.call(x, {
                hash: {},
                data: v
            }) : u
        }
        s += i(t) + "</span>";
        return s
    }

    function o(y, x) {
        var s = "",
            u, v, t;
        s += '<a href="';
        if (v = d.OfficialUrl) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.OfficialUrl);
            u = typeof v === g ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        s += i(u) + '" class="module__official-url js-about-module-link">' + i((v = d.domainWithPath || (y && y.domainWithPath), t = {
            hash: {},
            data: x
        }, v ? v.call(y, (y && y.OfficialUrl), t) : m.call(y, "domainWithPath", (y && y.OfficialUrl), t))) + "</a>";
        return s
    }
    h += '<div class="module module--about module--zci-' + i(((a = ((a = (n && n.meta)), a == null || a === false ? a : a.id)), typeof a === g ? a.apply(n) : a)) + " js-module--" + i(((a = ((a = (n && n.meta)), a == null || a === false ? a : a.id)), typeof a === g ? a.apply(n) : a)) + '"><div class="module__content js-about-module-content"><div class="module__body js-about-module-body">';
    a = d.unless.call(n, (n && n.headerImage), {
        hash: {},
        inverse: p.noop,
        fn: p.program(1, c, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    h += '<div class="module__title"><a href="';
    if (f = d.AbstractURL) {
        a = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.AbstractURL);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + '" class="js-about-module-link module__title__link" title="';
    a = (f = d.l || (n && n.l), r = {
        hash: {},
        data: j
    }, f ? f.call(n, "More at %s ", (n && n.moreAtText), r) : m.call(n, "l", "More at %s ", (n && n.moreAtText), r));
    if (a || a === 0) {
        h += a
    }
    h += '">';
    if (f = d.title) {
        a = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.title);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + "</a></div>";
    a = d["if"].call(n, (n && n.subTitle), {
        hash: {},
        inverse: p.noop,
        fn: p.program(4, q, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    a = d["if"].call(n, (n && n.OfficialUrl), {
        hash: {},
        inverse: p.noop,
        fn: p.program(6, o, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    h += '<div class="module__text"><span class="js-about-module-abstr"></span><a href="';
    if (f = d.AbstractURL) {
        a = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.AbstractURL);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + '" class="module__more-at is-hidden js-about-module-more-at-inline">';
    a = (f = d.l || (n && n.l), r = {
        hash: {},
        data: j
    }, f ? f.call(n, "More at %s ", (n && n.moreAtText), r) : m.call(n, "l", "More at %s ", (n && n.moreAtText), r));
    if (a || a === 0) {
        h += a
    }
    h += '</a><a href="';
    if (f = d.AbstractURL) {
        a = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.AbstractURL);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + '" class="module__more-at-bottom is-hidden js-about-module-more-at-bottom">';
    a = (f = d.favicon || (n && n.favicon), r = {
        hash: {},
        data: j
    }, f ? f.call(n, (n && n.AbstractURL), r) : m.call(n, "favicon", (n && n.AbstractURL), r));
    if (a || a === 0) {
        h += a
    }
    a = (f = d.l || (n && n.l), r = {
        hash: {},
        data: j
    }, f ? f.call(n, "More at %s ", (n && n.moreAtText), r) : m.call(n, "l", "More at %s ", (n && n.moreAtText), r));
    if (a || a === 0) {
        h += a
    }
    h += '</a></div></div></div><div class="module__toggle js-about-module-toggle"><div class="js-about-module-more"><span class="module__toggle__chevron">v</span></div><div class="module__toggle--less js-about-module-less"><span class="module__toggle__chevron module__toggle__chevron--collapse">v</span></div></div></div>';
    return h
});
this["DDG"]["templates"]["about_profiles"] = Handlebars.template(function(d, k, c, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    h = h || {};
    var f = "",
        a, e = "function",
        g = this.escapeExpression,
        j = c.helperMissing,
        m = this;

    function b(s, r) {
        var n = "",
            p, q, o;
        n += '<li class="about-profiles__item"><a class="about-profiles__link module__link js-about-profile-link" href="';
        if (q = c.url) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.url);
            p = typeof q === e ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + '" title="';
        if (q = c.name) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.name);
            p = typeof q === e ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + '"><img class="about-profiles__img" src="';
        p = (q = c.imageProxy || (s && s.imageProxy), o = {
            hash: {},
            data: r
        }, q ? q.call(s, (s && s.iconURL), o) : j.call(s, "imageProxy", (s && s.iconURL), o));
        if (p || p === 0) {
            n += p
        }
        n += '" />';
        if (q = c.name) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.name);
            p = typeof q === e ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + "</a></li>";
        return n
    }
    f += '<ul class="about-profiles">';
    a = c.each.call(k, (k && k.links), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, b, h),
        data: h
    });
    if (a || a === 0) {
        f += a
    }
    f += "</ul>";
    return f
});
this["DDG"]["templates"]["answerbar_tabs"] = Handlebars.template(function(d, e, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, d.helpers);
    c = c || {};
    return '<div class="zcm"><ul class="zcm__menu zcm__constant" id="duckbar_static"></ul><ul class="zcm__menu zcm__dynamic" id="duckbar_new"><span id="duckbar_dynamic_sep" class="zcm__sep--h sep--before is-hidden"></span></ul></div>'
});
this["DDG"]["templates"]["feedback_button"] = Handlebars.template(function(c, i, b, g, f) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    f = f || {};
    var e = "",
        a, d, j, h = b.helperMissing;
    e += '<div class="btn feedback-btn"><a href="#" class="feedback-btn__send js-feedback-start">';
    a = (d = b.lp || (i && i.lp), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "feedback form", "Send feedback", j) : h.call(i, "lp", "feedback form", "Send feedback", j));
    if (a || a === 0) {
        e += a
    }
    e += '</a><div class="feedback-btn__icon-wrap is-hidden js-feedback-icon-wrap"><a href="#" class="feedback-btn__icon ddgsi feedback-btn__icon--love js-feedback-love"></a><a href="#" class="feedback-btn__icon ddgsi feedback-btn__icon--nolove js-feedback-nolove"></a></div></div>';
    return e
});
this["DDG"]["templates"]["feedback_modal"] = Handlebars.template(function(d, m, c, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    i = i || {};
    var g = "",
        a, e, o, f = "function",
        h = this.escapeExpression,
        k = c.helperMissing,
        n = this;

    function b(t, s) {
        var p = "",
            q, r;
        p += '<option value="';
        if (r = c.val) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.val);
            q = typeof r === f ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += h(q) + '">';
        if (r = c.text) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.text);
            q = typeof r === f ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        p += h(q) + "</option>";
        return p
    }
    g += '<div class="modal modal--popover  modal--popover--dk  feedback-modal"><a href="#" class="modal__overlay  js-modal-close"></a><div class="modal__wrap modal__wrap--feedback"><div class="modal__box modal__box--feedback"><div class="modal__box__content js-feedback-form"><h5 class="feedback-modal__heading"><span class="feedback-modal__heading__prompt">';
    a = (e = c.lp || (m && m.lp), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "feedback form", "Send feedback for:", o) : k.call(m, "lp", "feedback form", "Send feedback for:", o));
    if (a || a === 0) {
        g += a
    }
    g += '</span><span class="feedback-modal__heading__query">';
    if (e = c.query) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.query);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '</span></h5><div class="frm frm--feedback"><div class="frm__label feedback-modal__label js-feedback-suggestion-label"></div><div class="frm__select feedback-modal__input feedback-modal__input--dropdown"><select class="js-feedback-dropdown">';
    a = c.each.call(m, (m && m.options), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    g += '</select></div><input type="text" placeholder="';
    a = (e = c.lp || (m && m.lp), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "feedback form", "Please specify...", o) : k.call(m, "lp", "feedback form", "Please specify...", o));
    if (a || a === 0) {
        g += a
    }
    g += '" class="frm__input feedback-modal__input feedback-modal__input--other is-invisible js-feedback-other"><div class="js-feedback-dropdownads is-invisible frm__select feedback-modal__input feedback-modal__input--ads feedback-modal__input--dropdown"><select class="js-feedback-dropdownads__options">';
    a = c.each.call(m, (m && m.options_ads), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    g += '</select></div><input type="text" placeholder="';
    a = (e = c.lp || (m && m.lp), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "feedback form", "Please specify...", o) : k.call(m, "lp", "feedback form", "Please specify...", o));
    if (a || a === 0) {
        g += a
    }
    g += '" class="frm__input feedback-modal__input feedback-modal__input--other is-invisible js-feedback-otherads"><textarea class="frm__text feedback-modal__input feedback-modal__input--text js-feedback-suggestion"></textarea><a href="#" class="feedback-modal__submit is-disabled btn btn--primary--alt js-feedback-submit">';
    a = (e = c.l || (m && m.l), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "Submit", o) : k.call(m, "l", "Submit", o));
    if (a || a === 0) {
        g += a
    }
    g += '</a><a href="#" class="modal__close  js-modal-close">X</a></div></div><div class="modal__box__content js-feedback-success"><h5 class="feedback-modal__heading feedback-modal__heading--success">';
    a = (e = c.lp || (m && m.lp), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "feedback form", "Feedback Sent", o) : k.call(m, "lp", "feedback form", "Feedback Sent", o));
    if (a || a === 0) {
        g += a
    }
    g += '</h5><p class="feedback-modal__message">';
    a = (e = c.l || (m && m.l), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "Thank you!", o) : k.call(m, "l", "Thank you!", o));
    if (a || a === 0) {
        g += a
    }
    g += " ";
    a = (e = c.lp || (m && m.lp), o = {
        hash: {},
        data: i
    }, e ? e.call(m, "feedback form", "Your feedback really helps. Please use this box anytime to share your thoughts.", o) : k.call(m, "lp", "feedback form", "Your feedback really helps. Please use this box anytime to share your thoughts.", o));
    if (a || a === 0) {
        g += a
    }
    g += '</p><a href="#"  class="modal__close  js-modal-close">X</a></div></div></div></div>';
    return g
});
this["DDG"]["templates"]["feedback_prompt"] = Handlebars.template(function(e, k, d, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    h = h || {};
    var b, f = "function",
        g = this.escapeExpression,
        j = d.helperMissing,
        m = this;

    function c(s, r) {
        var n = "",
            p, q, o;
        n += '<p class="feedback-prompt">';
        if (q = d.promptText) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.promptText);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + ' <a href="#" class="feedback-prompt__link js-feedback-prompt-yes">';
        p = (q = d.l || (s && s.l), o = {
            hash: {},
            data: r
        }, q ? q.call(s, "Yes", o) : j.call(s, "l", "Yes", o));
        if (p || p === 0) {
            n += p
        }
        n += '</a><a href="#" class="feedback-prompt__link js-feedback-prompt-no">';
        p = (q = d.l || (s && s.l), o = {
            hash: {},
            data: r
        }, q ? q.call(s, "No", o) : j.call(s, "l", "No", o));
        if (p || p === 0) {
            n += p
        }
        n += "</a></p>";
        return n
    }

    function a(s, r) {
        var n = "",
            p, q, o;
        n += '<p class="feedback-prompt"><a href="#" class="feedback-prompt__link js-feedback-prompt-no">';
        p = (q = d.l || (s && s.l), o = {
            hash: {},
            data: r
        }, q ? q.call(s, "Feedback", o) : j.call(s, "l", "Feedback", o));
        if (p || p === 0) {
            n += p
        }
        n += "</a></p>";
        return n
    }
    b = d["if"].call(k, (k && k.showYesNo), {
        hash: {},
        inverse: m.program(3, a, h),
        fn: m.program(1, c, h),
        data: h
    });
    if (b || b === 0) {
        return b
    } else {
        return ""
    }
});
this["DDG"]["templates"]["images_module"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, m, j = b.helperMissing,
        e = "function",
        g = this.escapeExpression;
    f += '<div class="module module--images"><div class="module__header module__header--link js-images-show-more">';
    a = (d = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, d ? d.call(k, "Images", m) : j.call(k, "l", "Images", m));
    if (a || a === 0) {
        f += a
    }
    f += " ";
    a = (d = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, d ? d.call(k, "for", m) : j.call(k, "l", "for", m));
    if (a || a === 0) {
        f += a
    }
    f += " <b>";
    if (d = b.query) {
        a = d.call(k, {
            hash: {},
            data: h
        })
    } else {
        d = (k && k.query);
        a = typeof d === e ? d.call(k, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '</b></div><div class="module--images__thumbnails js-images-thumbnails"></div><a class="js-images-show-more module__footer" href="#">';
    a = (d = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, d ? d.call(k, "More Images", m) : j.call(k, "l", "More Images", m));
    if (a || a === 0) {
        f += a
    }
    f += " ";
    a = (d = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, d ? d.call(k, "for", m) : j.call(k, "l", "for", m));
    if (a || a === 0) {
        f += a
    }
    f += " <b>";
    if (d = b.query) {
        a = d.call(k, {
            hash: {},
            data: h
        })
    } else {
        d = (k && k.query);
        a = typeof d === e ? d.call(k, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + "</b></a></div>";
    return f
});
this["DDG"]["templates"]["images_module_thumbnails"] = Handlebars.template(function(e, k, d, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    h = h || {};
    var a, m = this,
        f = "function",
        g = this.escapeExpression,
        j = d.helperMissing;

    function c(s, r) {
        var n = "",
            p, q, o;
        n += '<div class="module--images__thumbnails__tile ';
        p = d["if"].call(s, (s && s.lastOfRow), {
            hash: {},
            inverse: m.noop,
            fn: m.program(2, b, r),
            data: r
        });
        if (p || p === 0) {
            n += p
        }
        n += ' js-images-link" style="height:';
        if (q = d.divHeight) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.divHeight);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + "px;width:";
        if (q = d.divWidth) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.divWidth);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + 'px;" data-id="';
        if (q = d.id) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.id);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + '"><a href="/?q=';
        if (q = d.rq) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.rq);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        if (p || p === 0) {
            n += p
        }
        n += "&iax=images&ia=images&iai=";
        if (q = d.id) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.id);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p);
        if (q = d.kurl) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.kurl);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + '" class="module--images__thumbnails__link"><img src="' + g((q = d.imageProxy || (s && s.imageProxy), o = {
            hash: {},
            data: r
        }, q ? q.call(s, (s && s.thumbnail), o) : j.call(s, "imageProxy", (s && s.thumbnail), o))) + '" alt="';
        if (q = d.title) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.title);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + '" width="';
        if (q = d.width) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.width);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + '" height="';
        if (q = d.height) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.height);
            p = typeof q === f ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        n += g(p) + '" class="module--images__thumbnails__image"></a></div>';
        return n
    }

    function b(o, n) {
        return "is-last"
    }
    a = d.each.call(k, k, {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, c, h),
        data: h
    });
    if (a || a === 0) {
        return a
    } else {
        return ""
    }
});
this["DDG"]["templates"]["map_detail"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        a, f, q, g = "function",
        i = this.escapeExpression,
        o = this,
        m = d.helperMissing;

    function c(t, s) {
        var r;
        r = d.each.call(t, (t && t.addressLines), {
            hash: {},
            inverse: o.noop,
            fn: o.program(2, b, s),
            data: s
        });
        if (r || r === 0) {
            return r
        } else {
            return ""
        }
    }

    function b(t, s) {
        var r = "";
        r += '<a href="#" class="map-detail__address js-map-detail-address">' + i((typeof t === g ? t.apply(t) : t)) + "</a>";
        return r
    }

    function p(v, u) {
        var r = "",
            s, t;
        r += '<a class="map-detail__latlon js-map-detail-address">';
        if (t = d.displayLatLon) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.displayLatLon);
            s = typeof t === g ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        r += i(s) + "</a>";
        return r
    }
    h += '<div class="map-detail"><div class="module__title map-detail__title js-map-detail-title"><span class="map-detail__align"></span><div class="map-detail__links"><a href="#" class="map-detail__name js-map-detail-address">';
    if (f = d.name) {
        a = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.name);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + "</a>";
    a = d["if"].call(n, (n && n.addressLines), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    a = d["if"].call(n, (n && n.displayLatLon), {
        hash: {},
        inverse: o.noop,
        fn: o.program(4, p, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    h += '</div></div><div class="map-detail__directions js-map-detail-dir"><a class="btn btn--secondary js-map-detail-dir-link" href="';
    if (f = d.directions) {
        a = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.directions);
        a = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + '">';
    a = (f = d.lp || (n && n.lp), q = {
        hash: {},
        data: j
    }, f ? f.call(n, "maps_places", "Directions", q) : m.call(n, "lp", "maps_places", "Directions", q));
    if (a || a === 0) {
        h += a
    }
    h += "</a></div></div>";
    return h
});
this["DDG"]["templates"]["mapbox_close_control"] = Handlebars.template(function(c, i, b, g, f) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    f = f || {};
    var e = "",
        a, d, j, h = b.helperMissing;
    e += '<div class="mapbox-control"><button class="btn btn--mapbox ddgsi" type="button" aria-label="';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Click to collapse", j) : h.call(i, "l", "Click to collapse", j));
    if (a || a === 0) {
        e += a
    }
    e += '" title="';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Click to collapse", j) : h.call(i, "l", "Click to collapse", j));
    if (a || a === 0) {
        e += a
    }
    e += '">&#215;</button></div>';
    return e
});
this["DDG"]["templates"]["mapbox_gl_map"] = Handlebars.template(function(d, e, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, d.helpers);
    c = c || {};
    return '<div class="mapbox-gl"><div class="mapbox-gl__map is-loading js-mapbox-gl-map"></div></div>'
});
this["DDG"]["templates"]["mapbox_mode_control"] = Handlebars.template(function(e, j, d, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    g = g || {};
    var f = "",
        b, i = d.helperMissing,
        n = this;

    function c(p, o) {
        return "map"
    }

    function a(p, o) {
        return "satellite"
    }

    function m(s, r) {
        var p, q, o;
        p = (q = d.l || (s && s.l), o = {
            hash: {},
            data: r
        }, q ? q.call(s, "Map", o) : i.call(s, "l", "Map", o));
        if (p || p === 0) {
            return p
        } else {
            return ""
        }
    }

    function k(s, r) {
        var p, q, o;
        p = (q = d.lp || (s && s.lp), o = {
            hash: {},
            data: r
        }, q ? q.call(s, "map-mode", "Satellite", o) : i.call(s, "lp", "map-mode", "Satellite", o));
        if (p || p === 0) {
            return p
        } else {
            return ""
        }
    }
    f += '<div class="mapbox-control mapbox-control--mode js-mapbox-control-mode"><img class="mapbox-control--mode__image" src="/js/mapbox/ddgimages/';
    b = d["if"].call(j, (j && j.isSatellite), {
        hash: {},
        inverse: n.program(3, a, g),
        fn: n.program(1, c, g),
        data: g
    });
    if (b || b === 0) {
        f += b
    }
    f += '@2x.png"/><div class="mapbox-control--mode__desc">';
    b = d["if"].call(j, (j && j.isSatellite), {
        hash: {},
        inverse: n.program(7, k, g),
        fn: n.program(5, m, g),
        data: g
    });
    if (b || b === 0) {
        f += b
    }
    f += "</div></div>";
    return f
});
this["DDG"]["templates"]["mapbox_static_map"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, m = d.helperMissing,
        o = this,
        g = "function",
        i = this.escapeExpression;

    function c(q, p) {
        return "has-cta"
    }

    function a(u, t) {
        var p = "",
            r, s, q;
        p += '<span class="mapbox-static__cta">';
        r = (s = d.l || (u && u.l), q = {
            hash: {},
            data: t
        }, s ? s.call(u, "Open Map", q) : m.call(u, "l", "Open Map", q));
        if (r || r === 0) {
            p += r
        }
        p += "</span>";
        return p
    }
    h += '<div class="mapbox-static ';
    b = d["if"].call(n, (n && n.showCTA), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '"><div class="mapbox-static__map" style="background-image:url(\'';
    if (f = d.url) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.url);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '\');"><img class="mapbox-static__img" width="';
    if (f = d.width) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.width);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '" height="';
    if (f = d.height) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.height);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '" src="';
    if (f = d.url) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.url);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '" /></div>';
    b = d["if"].call(n, (n && n.showCTA), {
        hash: {},
        inverse: o.noop,
        fn: o.program(3, a, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '<div class="mapbox-static__attribution">© OpenStreetMap</div></div>';
    return h
});
this["DDG"]["templates"]["mapbox_zoom_control"] = Handlebars.template(function(d, e, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, d.helpers);
    c = c || {};
    return '<div class="mapbox-zoom mapbox-control mapbox-btn-grp"><button type="button"  class="btn btn--mapbox btn--mapbox-top js-mapbox-zoom-in"><span class="ddgsi ddgsi-plus"></span> </button><button type="button" class="btn btn--mapbox btn--mapbox-bottom js-mapbox-zoom-out"><span class="ddgsi ddgsi-minus"></span></button></div>'
});
this["DDG"]["templates"]["maps_module"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<div class="module module--map js-module--';
    if (d = b.id) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.id);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '"><div class="module__map js-maps-module-map"><div class="mapbox-controls mapbox-controls--topright js-maps-module-control-topright"></div><div class="mapbox-controls mapbox-controls--bottomleft js-maps-module-control-bottomleft"></div></div><div class="module__map-detail js-maps-module-detailview"></div></div>';
    return f
});
this["DDG"]["templates"]["module_placeholder"] = Handlebars.template(function(d, e, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, d.helpers);
    c = c || {};
    return '<div class="module  module--placeholder"></div>'
});
this["DDG"]["templates"]["news_module"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, m, e = "function",
        g = this.escapeExpression,
        j = b.helperMissing;
    f += '<div class="module module--news js-module--';
    if (d = b.id) {
        a = d.call(k, {
            hash: {},
            data: h
        })
    } else {
        d = (k && k.id);
        a = typeof d === e ? d.call(k, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '"><div class="module--news__left js-news-module-left ddgsi ddgsi-left is-hidden"></div><div class="module--news__right js-news-module-right ddgsi ddgsi-right is-hidden"></div><div class="js-news-module-title module__header module__header--link is-hidden">' + g(((a = ((a = (k && k.meta)), a == null || a === false ? a : a.primaryText)), typeof a === e ? a.apply(k) : a)) + '</div><div class="module--news__items js-news-module-items"></div><a href="#" class="js-news-module-more module__footer is-hidden">';
    a = (d = b.l || (k && k.l), m = {
        hash: {},
        data: h
    }, d ? d.call(k, "More News", m) : j.call(k, "l", "More News", m));
    if (a || a === 0) {
        f += a
    }
    f += "</a></div>";
    return f
});
this["DDG"]["templates"]["news_module_item"] = Handlebars.template(function(e, r, p, i, u) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    u = u || {};
    var q = "",
        g, a, d, o = p.helperMissing,
        b = this.escapeExpression,
        n = this,
        c = "function";

    function m(x, v) {
        return "has-image"
    }

    function k(z, y) {
        var v = "",
            x;
        v += '<div class="module--news__image-wrapper js-news-image-wrapper">';
        x = p["if"].call(z, (z && z.image), {
            hash: {},
            inverse: n.program(6, h, y),
            fn: n.program(4, j, y),
            data: y
        });
        if (x || x === 0) {
            v += x
        }
        v += "</div>";
        return v
    }

    function j(A, z) {
        var v = "",
            y, x;
        v += '<div class="module--news__image" style="background-image:url(' + b((y = p.imageProxy || (A && A.imageProxy), x = {
            hash: {},
            data: z
        }, y ? y.call(A, (A && A.image), x) : o.call(A, "imageProxy", (A && A.image), x))) + ')"></div>';
        return v
    }

    function h(x, v) {
        return '<div class="module--news__placeholder js-news-img-placeholder ddgsi ddgsi-news"></div>'
    }

    function f(A, z) {
        var v = "",
            x, y;
        v += '<div class="module--news__body__content js-news-content">';
        if (y = p.excerpt) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.excerpt);
            x = typeof y === c ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        if (x || x === 0) {
            v += x
        }
        v += "</div>";
        return v
    }

    function t(x, v) {
        return "has-relative-time"
    }

    function s(A, z) {
        var v = "",
            x, y;
        v += '<span class="sep  tile__sep"></span><span class="tile__time">';
        if (y = p.relativeTimeShort) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.relativeTimeShort);
            x = typeof y === c ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        if (x || x === 0) {
            v += x
        }
        v += "</span>";
        return v
    }
    q += '<div class="module--news__item ';
    g = p["if"].call(r, (r && r.showImage), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += '" data-link="';
    if (a = p.id) {
        g = a.call(r, {
            hash: {},
            data: u
        })
    } else {
        a = (r && r.id);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: u
        }) : a
    }
    q += b(g) + '">';
    g = p["if"].call(r, (r && r.showImage), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, k, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += '<div class="module--news__body"><a href="';
    if (a = p.id) {
        g = a.call(r, {
            hash: {},
            data: u
        })
    } else {
        a = (r && r.id);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: u
        }) : a
    }
    q += b(g) + '" class="module--news__body__title js-news-title">';
    if (a = p.title) {
        g = a.call(r, {
            hash: {},
            data: u
        })
    } else {
        a = (r && r.title);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: u
        }) : a
    }
    if (g || g === 0) {
        q += g
    }
    q += "</a>";
    g = p["if"].call(r, (r && r.showImage), {
        hash: {},
        inverse: n.program(8, f, u),
        fn: n.noop,
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += '</div><div class="module--news__footer ';
    g = p["if"].call(r, (r && r.relativeTimeShort), {
        hash: {},
        inverse: n.noop,
        fn: n.program(10, t, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += '"><span class="module--news__more-at">';
    g = (a = p.favicon || (r && r.favicon), d = {
        hash: {},
        data: u
    }, a ? a.call(r, (r && r.url), d) : o.call(r, "favicon", (r && r.url), d));
    if (g || g === 0) {
        q += g
    }
    q += '<span class="module--news__source">' + b((a = p.ellipsis || (r && r.ellipsis), d = {
        hash: {},
        data: u
    }, a ? a.call(r, (r && r.source), 20, d) : o.call(r, "ellipsis", (r && r.source), 20, d))) + "</span></span>";
    g = p["if"].call(r, (r && r.relativeTimeShort), {
        hash: {},
        inverse: n.noop,
        fn: n.program(12, s, u),
        data: u
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div>";
    return q
});
this["DDG"]["templates"]["no_more_results_vertical"] = Handlebars.template(function(d, e, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, d.helpers);
    c = c || {};
    return '<div class="no-results no-results--vertical">No more results.</div>'
});
this["DDG"]["templates"]["no_results_vertical"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<div class="no-results no-results--vertical">Your search <b>';
    if (d = b.query) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.query);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + "</b> did not match any ";
    if (d = b.resultType) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.resultType);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + ".</div>";
    return f
});
this["DDG"]["templates"]["place_detail"] = Handlebars.template(function(j, C, A, r, I) {
    this.compilerInfo = [4, ">= 1.0.0"];
    A = this.merge(A, j.helpers);
    I = I || {};
    var B = "",
        n, a, f, z = A.helperMissing,
        c = this.escapeExpression,
        x = this,
        d = "function";

    function t(K, J) {
        return " module__section--minimized"
    }

    function s(N, M) {
        var J = "",
            L, K;
        J += '<img class="review__rating-stars--yelp" src="' + c((L = A.imageProxy || (N && N.imageProxy), K = {
            hash: {},
            data: M
        }, L ? L.call(N, (N && N.ratingImage), K) : z.call(N, "imageProxy", (N && N.ratingImage), K))) + '" />';
        return J
    }

    function q(L, K) {
        var J;
        J = A["if"].call(L, (L && L.ratingClass), {
            hash: {},
            inverse: x.noop,
            fn: x.program(6, p, K),
            data: K
        });
        if (J || J === 0) {
            return J
        } else {
            return ""
        }
    }

    function p(N, M) {
        var K, L, J;
        K = (L = A.renderStars || (N && N.renderStars), J = {
            hash: {},
            data: M
        }, L ? L.call(N, (N && N.ratingClass), J) : z.call(N, "renderStars", (N && N.ratingClass), J));
        if (K || K === 0) {
            return K
        } else {
            return ""
        }
    }

    function m(O, N) {
        var J = "",
            L, M, K;
        J += '<span class="review__count module__link">';
        L = (M = A.reviewCount || (O && O.reviewCount), K = {
            hash: {},
            data: N
        }, M ? M.call(O, (O && O.reviewCount), (O && O.reviewURL), K) : z.call(O, "reviewCount", (O && O.reviewCount), (O && O.reviewURL), K));
        if (L || L === 0) {
            J += L
        }
        J += "</span>";
        return J
    }

    function H(N, M) {
        var J = "",
            K, L;
        J += '<p class="place-detail__item place-detail__subtitle">';
        if (L = A.subtitle) {
            K = L.call(N, {
                hash: {},
                data: M
            })
        } else {
            L = (N && N.subtitle);
            K = typeof L === d ? L.call(N, {
                hash: {},
                data: M
            }) : L
        }
        J += c(K) + "</p>";
        return J
    }

    function G(O, N) {
        var J = "",
            L, M, K;
        J += '<p class="place-detail__item place-detail__data"><strong class="place-detail__data__label">';
        L = (M = A.lp || (O && O.lp), K = {
            hash: {},
            data: N
        }, M ? M.call(O, "maps_places", "Address", K) : z.call(O, "lp", "maps_places", "Address", K));
        if (L || L === 0) {
            J += L
        }
        J += ": </strong>";
        if (M = A.address) {
            L = M.call(O, {
                hash: {},
                data: N
            })
        } else {
            M = (O && O.address);
            L = typeof M === d ? M.call(O, {
                hash: {},
                data: N
            }) : M
        }
        J += c(L) + "</p>";
        return J
    }

    function F(O, N) {
        var J = "",
            L, M, K;
        J += '<p class="place-detail__item place-detail__data"><strong class="place-detail__data__label">';
        L = (M = A.lp || (O && O.lp), K = {
            hash: {},
            data: N
        }, M ? M.call(O, "maps_places", "Phone", K) : z.call(O, "lp", "maps_places", "Phone", K));
        if (L || L === 0) {
            J += L
        }
        J += ': </strong><a class="module__link js-place-detail-phone" href="tel:';
        if (M = A.phone) {
            L = M.call(O, {
                hash: {},
                data: N
            })
        } else {
            M = (O && O.phone);
            L = typeof M === d ? M.call(O, {
                hash: {},
                data: N
            }) : M
        }
        J += c(L) + '">';
        if (M = A.phone) {
            L = M.call(O, {
                hash: {},
                data: N
            })
        } else {
            M = (O && O.phone);
            L = typeof M === d ? M.call(O, {
                hash: {},
                data: N
            }) : M
        }
        J += c(L) + "</a></p>";
        return J
    }

    function E(O, N) {
        var J = "",
            L, M, K;
        J += '<p class="place-detail__item place-detail__data"><span class="place-detail__data__label">';
        L = (M = A.lp || (O && O.lp), K = {
            hash: {},
            data: N
        }, M ? M.call(O, "maps_places", "Hours", K) : z.call(O, "lp", "maps_places", "Hours", K));
        if (L || L === 0) {
            J += L
        }
        J += ': </span><a class="module__link js-place-detail-hours-toggle" href="#">';
        if (M = A.hoursToday) {
            L = M.call(O, {
                hash: {},
                data: N
            })
        } else {
            M = (O && O.hoursToday);
            L = typeof M === d ? M.call(O, {
                hash: {},
                data: N
            }) : M
        }
        J += c(L) + '</a></p><div class="js-place-detail-hours"></div>';
        return J
    }

    function D(O, N) {
        var J = "",
            L, M, K;
        J += '<p class="place-detail__item place-detail__data"><strong class="place-detail__data__label">';
        L = (M = A.lp || (O && O.lp), K = {
            hash: {},
            data: N
        }, M ? M.call(O, "maps_places", "Menu", K) : z.call(O, "lp", "maps_places", "Menu", K));
        if (L || L === 0) {
            J += L
        }
        J += ': </strong><a class="module__link" href="';
        if (M = A.menuURL) {
            L = M.call(O, {
                hash: {},
                data: N
            })
        } else {
            M = (O && O.menuURL);
            L = typeof M === d ? M.call(O, {
                hash: {},
                data: N
            }) : M
        }
        J += c(L) + '">';
        if (M = A.viewOnExternalServiceText) {
            L = M.call(O, {
                hash: {},
                data: N
            })
        } else {
            M = (O && O.viewOnExternalServiceText);
            L = typeof M === d ? M.call(O, {
                hash: {},
                data: N
            }) : M
        }
        J += c(L) + "</a></p>";
        return J
    }

    function o(M, L) {
        var J = "",
            K;
        J += ' <div class="place-detail__reviews';
        K = A["if"].call(M, (M && M.canExpand), {
            hash: {},
            inverse: x.noop,
            fn: x.program(21, k, L),
            data: L
        });
        if (K || K === 0) {
            J += K
        }
        J += '"> ';
        K = A.each.call(M, (M && M.reviews), {
            hash: {},
            inverse: x.noop,
            fn: x.program(24, h, L),
            data: L
        });
        if (K || K === 0) {
            J += K
        }
        J += "</div>";
        return J
    }

    function k(L, K) {
        var J;
        J = A.unless.call(L, (L && L.expanded), {
            hash: {},
            inverse: x.noop,
            fn: x.program(22, i, K),
            data: K
        });
        if (J || J === 0) {
            return J
        } else {
            return ""
        }
    }

    function i(K, J) {
        return " is-hidden"
    }

    function h(O, N) {
        var J = "",
            L, M, K;
        J += '<div class="review"><div class="review__user"><a ';
        L = A.unless.call(O, ((L = (O && O.user)), L == null || L === false ? L : L.image), {
            hash: {},
            inverse: x.noop,
            fn: x.program(25, g, N),
            data: N
        });
        if (L || L === 0) {
            J += L
        }
        J += 'href="';
        L = A["if"].call(O, ((L = (O && O.user)), L == null || L === false ? L : L.url), {
            hash: {},
            inverse: x.program(29, b, N),
            fn: x.program(27, e, N),
            data: N
        });
        if (L || L === 0) {
            J += L
        }
        J += '" title="' + c(((L = ((L = (O && O.user)), L == null || L === false ? L : L.userOnServiceText)), typeof L === d ? L.apply(O) : L)) + '">';
        L = A["if"].call(O, ((L = (O && O.user)), L == null || L === false ? L : L.image), {
            hash: {},
            inverse: x.noop,
            fn: x.program(31, y, N),
            data: N
        });
        if (L || L === 0) {
            J += L
        }
        J += '</a></div><div class="review__content"><p>';
        L = A["if"].call(O, (O && O.ratingImage), {
            hash: {},
            inverse: x.program(35, u, N),
            fn: x.program(33, v, N),
            data: N
        });
        if (L || L === 0) {
            J += L
        }
        J += '<span class="review__rating-date">';
        if (M = A.formattedDate) {
            L = M.call(O, {
                hash: {},
                data: N
            })
        } else {
            M = (O && O.formattedDate);
            L = typeof M === d ? M.call(O, {
                hash: {},
                data: N
            }) : M
        }
        J += c(L) + '</span></p><p class="place-detail__item">';
        if (M = A.excerpt) {
            L = M.call(O, {
                hash: {},
                data: N
            })
        } else {
            M = (O && O.excerpt);
            L = typeof M === d ? M.call(O, {
                hash: {},
                data: N
            }) : M
        }
        J += c(L) + ' <a class="module__link" href="';
        if (M = A.url) {
            L = M.call(O, {
                hash: {},
                data: N
            })
        } else {
            M = (O && O.url);
            L = typeof M === d ? M.call(O, {
                hash: {},
                data: N
            }) : M
        }
        J += c(L) + '">';
        L = (M = A.l || (O && O.l), K = {
            hash: {},
            data: N
        }, M ? M.call(O, "Read More", K) : z.call(O, "l", "Read More", K));
        if (L || L === 0) {
            J += L
        }
        J += "</a></p></div></div>";
        return J
    }

    function g(K, J) {
        return 'class="review__user__url--fallback"'
    }

    function e(L, K) {
        var J;
        return c(((J = ((J = (L && L.user)), J == null || J === false ? J : J.url)), typeof J === d ? J.apply(L) : J))
    }

    function b(M, L) {
        var J, K;
        if (K = A.url) {
            J = K.call(M, {
                hash: {},
                data: L
            })
        } else {
            K = (M && M.url);
            J = typeof K === d ? K.call(M, {
                hash: {},
                data: L
            }) : K
        }
        return c(J)
    }

    function y(O, N) {
        var J = "",
            L, M, K;
        J += '<img class="review__user__image" src="' + c((M = A.imageProxy || (O && O.imageProxy), K = {
            hash: {},
            data: N
        }, M ? M.call(O, ((L = (O && O.user)), L == null || L === false ? L : L.image), K) : z.call(O, "imageProxy", ((L = (O && O.user)), L == null || L === false ? L : L.image), K))) + '" width="42" height="42" />';
        return J
    }

    function v(N, M) {
        var J = "",
            L, K;
        J += '<img class="review__rating-stars--yelp place-detail__rating__yelp-stars" src="' + c((L = A.imageProxy || (N && N.imageProxy), K = {
            hash: {},
            data: M
        }, L ? L.call(N, (N && N.ratingImage), K) : z.call(N, "imageProxy", (N && N.ratingImage), K))) + '" />';
        return J
    }

    function u(M, L) {
        var J = "",
            K;
        J += " ";
        K = A["if"].call(M, (M && M.ratingClass), {
            hash: {},
            inverse: x.noop,
            fn: x.program(6, p, L),
            data: L
        });
        if (K || K === 0) {
            J += K
        }
        return J
    }
    B += '<div class="place-detail"><div class="module__section place-detail__section';
    n = A["if"].call(C, (C && C.canExpand), {
        hash: {},
        inverse: x.noop,
        fn: x.program(1, t, I),
        data: I
    });
    if (n || n === 0) {
        B += n
    }
    B += '"><div class="place-detail__directions js-place-detail-directions-container"><a class="place-detail__directions__link btn btn--secondary js-place-detail-directions-link" href="';
    if (a = A.directions) {
        n = a.call(C, {
            hash: {},
            data: I
        })
    } else {
        a = (C && C.directions);
        n = typeof a === d ? a.call(C, {
            hash: {},
            data: I
        }) : a
    }
    B += c(n) + '"title="';
    if (a = A.directionsTitle) {
        n = a.call(C, {
            hash: {},
            data: I
        })
    } else {
        a = (C && C.directionsTitle);
        n = typeof a === d ? a.call(C, {
            hash: {},
            data: I
        }) : a
    }
    B += c(n) + '">';
    n = (a = A.lp || (C && C.lp), f = {
        hash: {},
        data: I
    }, a ? a.call(C, "maps_places", "Directions", f) : z.call(C, "lp", "maps_places", "Directions", f));
    if (n || n === 0) {
        B += n
    }
    B += '</a></div><h2 class="module__title place-detail__name"><a class="module__title__link" href="';
    if (a = A.url) {
        n = a.call(C, {
            hash: {},
            data: I
        })
    } else {
        a = (C && C.url);
        n = typeof a === d ? a.call(C, {
            hash: {},
            data: I
        }) : a
    }
    B += c(n) + '">';
    if (a = A.name) {
        n = a.call(C, {
            hash: {},
            data: I
        })
    } else {
        a = (C && C.name);
        n = typeof a === d ? a.call(C, {
            hash: {},
            data: I
        }) : a
    }
    B += c(n) + '</a></h2><p class="place-detail__item place-detail__rating">';
    n = A["if"].call(C, (C && C.ratingImage), {
        hash: {},
        inverse: x.program(5, q, I),
        fn: x.program(3, s, I),
        data: I
    });
    if (n || n === 0) {
        B += n
    }
    n = A["if"].call(C, (C && C.reviewCount), {
        hash: {},
        inverse: x.noop,
        fn: x.program(8, m, I),
        data: I
    });
    if (n || n === 0) {
        B += n
    }
    B += "</p>";
    n = A["if"].call(C, (C && C.subtitle), {
        hash: {},
        inverse: x.noop,
        fn: x.program(10, H, I),
        data: I
    });
    if (n || n === 0) {
        B += n
    }
    B += '</div><div class="module__section place-detail__section place-detail__section--bordered">';
    n = A["if"].call(C, (C && C.address), {
        hash: {},
        inverse: x.noop,
        fn: x.program(12, G, I),
        data: I
    });
    if (n || n === 0) {
        B += n
    }
    n = A["if"].call(C, (C && C.phone), {
        hash: {},
        inverse: x.noop,
        fn: x.program(14, F, I),
        data: I
    });
    if (n || n === 0) {
        B += n
    }
    n = A["if"].call(C, (C && C.hoursToday), {
        hash: {},
        inverse: x.noop,
        fn: x.program(16, E, I),
        data: I
    });
    if (n || n === 0) {
        B += n
    }
    n = A["if"].call(C, (C && C.menuURL), {
        hash: {},
        inverse: x.noop,
        fn: x.program(18, D, I),
        data: I
    });
    if (n || n === 0) {
        B += n
    }
    n = A["if"].call(C, (C && C.reviews), {
        hash: {},
        inverse: x.noop,
        fn: x.program(20, o, I),
        data: I
    });
    if (n || n === 0) {
        B += n
    }
    B += '<p class="place-detail__item place-detail__more-at';
    n = A["if"].call(C, (C && C.canExpand), {
        hash: {},
        inverse: x.noop,
        fn: x.program(21, k, I),
        data: I
    });
    if (n || n === 0) {
        B += n
    }
    B += '"> <a class="module__link" href="';
    if (a = A.url) {
        n = a.call(C, {
            hash: {},
            data: I
        })
    } else {
        a = (C && C.url);
        n = typeof a === d ? a.call(C, {
            hash: {},
            data: I
        }) : a
    }
    B += c(n) + '">';
    n = (a = A.favicon || (C && C.favicon), f = {
        hash: {},
        data: I
    }, a ? a.call(C, (C && C.url), f) : z.call(C, "favicon", (C && C.url), f));
    if (n || n === 0) {
        B += n
    }
    B += " ";
    if (a = A.moreAtExternalServiceText) {
        n = a.call(C, {
            hash: {},
            data: I
        })
    } else {
        a = (C && C.moreAtExternalServiceText);
        n = typeof a === d ? a.call(C, {
            hash: {},
            data: I
        }) : a
    }
    B += c(n) + "</a></p></div></div>";
    return B
});
this["DDG"]["templates"]["place_hours"] = Handlebars.template(function(e, m, d, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    i = i || {};
    var g = "",
        a, f = "function",
        h = this.escapeExpression,
        k = d.helperMissing,
        o = this;

    function c(t, s) {
        var q = "",
            r;
        q += '<tr class="place-hours__item ';
        r = d["if"].call(t, (t && t.isToday), {
            hash: {},
            inverse: o.noop,
            fn: o.program(2, b, s),
            data: s
        });
        if (r || r === 0) {
            q += r
        }
        q += '"><td class="place-hours__item__day">' + h(((r = (t && t.weekDay)), typeof r === f ? r.apply(t) : r)) + '</td><td class="place-hours__item__hours">';
        r = d["if"].call(t, (t && t.hours), {
            hash: {},
            inverse: o.program(6, n, s),
            fn: o.program(4, p, s),
            data: s
        });
        if (r || r === 0) {
            q += r
        }
        q += "</td></tr>";
        return q
    }

    function b(r, q) {
        return "place-hours__item--current"
    }

    function p(s, r) {
        var q;
        return h(((q = (s && s.hours)), typeof q === f ? q.apply(s) : q))
    }

    function n(u, t) {
        var r, s, q;
        r = (s = d.l || (u && u.l), q = {
            hash: {},
            data: t
        }, s ? s.call(u, "Closed", q) : k.call(u, "l", "Closed", q));
        if (r || r === 0) {
            return r
        } else {
            return ""
        }
    }
    g += '<div class="place-hours is-hidden"><span class="place-hours__close ddgsi js-place-hours-close">X</span><table><tbody>';
    a = d.each.call(m, (m && m.hours), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    g += "</tbody></table></div>";
    return g
});
this["DDG"]["templates"]["place_list_item"] = Handlebars.template(function(e, r, p, j, v) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    v = v || {};
    var q = "",
        g, a, o = p.helperMissing,
        b = this.escapeExpression,
        c = "function",
        n = this;

    function m(B, A) {
        var x = "",
            z, y;
        x += '<div class="place-list-item__image"style="background-image: url(' + b((z = p.imageProxy || (B && B.imageProxy), y = {
            hash: {},
            data: A
        }, z ? z.call(B, (B && B.image), y) : o.call(B, "imageProxy", (B && B.image), y))) + ')"><img class="place-list-item__image__img" src="' + b((z = p.imageProxy || (B && B.imageProxy), y = {
            hash: {},
            data: A
        }, z ? z.call(B, (B && B.image), y) : o.call(B, "imageProxy", (B && B.image), y))) + '" /></div>';
        return x
    }

    function k(B, A) {
        var x = "",
            y, z;
        if (z = p.number) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.number);
            y = typeof z === c ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += b(y) + ". ";
        return x
    }

    function i(A, z) {
        var x = "",
            y;
        x += '<p class="place-list-item__rating">';
        y = p["if"].call(A, (A && A.ratingImage), {
            hash: {},
            inverse: n.program(8, f, z),
            fn: n.program(6, h, z),
            data: z
        });
        if (y || y === 0) {
            x += y
        }
        y = p["if"].call(A, (A && A.reviewCount), {
            hash: {},
            inverse: n.noop,
            fn: n.program(11, u, z),
            data: z
        });
        if (y || y === 0) {
            x += y
        }
        x += "</p>";
        return x
    }

    function h(B, A) {
        var x = "",
            z, y;
        x += '<img class="review__rating-stars--yelp place-list-item__rating__image" src="' + b((z = p.imageProxy || (B && B.imageProxy), y = {
            hash: {},
            data: A
        }, z ? z.call(B, (B && B.ratingImage), y) : o.call(B, "imageProxy", (B && B.ratingImage), y))) + '" />';
        return x
    }

    function f(z, y) {
        var x;
        x = p["if"].call(z, (z && z.ratingClass), {
            hash: {},
            inverse: n.noop,
            fn: n.program(9, d, y),
            data: y
        });
        if (x || x === 0) {
            return x
        } else {
            return ""
        }
    }

    function d(B, A) {
        var y, z, x;
        y = (z = p.renderStars || (B && B.renderStars), x = {
            hash: {},
            data: A
        }, z ? z.call(B, (B && B.ratingClass), x) : o.call(B, "renderStars", (B && B.ratingClass), x));
        if (y || y === 0) {
            return y
        } else {
            return ""
        }
    }

    function u(C, B) {
        var x = "",
            z, A, y;
        x += '<span class="review__count module__link place-list-item__rating__count place-list-item__rating__count--';
        if (A = p.source) {
            z = A.call(C, {
                hash: {},
                data: B
            })
        } else {
            A = (C && C.source);
            z = typeof A === c ? A.call(C, {
                hash: {},
                data: B
            }) : A
        }
        x += b(z) + '">';
        z = (A = p.reviewCount || (C && C.reviewCount), y = {
            hash: {},
            data: B
        }, A ? A.call(C, (C && C.reviewCount), (C && C.url), y) : o.call(C, "reviewCount", (C && C.reviewCount), (C && C.url), y));
        if (z || z === 0) {
            x += z
        }
        x += "</span>";
        return x
    }

    function t(B, A) {
        var x = "",
            y, z;
        x += '<li class="place-list-item__info__item">';
        if (z = p.subtitle) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.subtitle);
            y = typeof z === c ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += b(y) + "</li>";
        return x
    }

    function s(B, A) {
        var x = "",
            y, z;
        x += '<li class="place-list-item__info__item">';
        if (z = p.shortAddress) {
            y = z.call(B, {
                hash: {},
                data: A
            })
        } else {
            z = (B && B.shortAddress);
            y = typeof z === c ? z.call(B, {
                hash: {},
                data: A
            }) : z
        }
        x += b(y) + "</li>";
        return x
    }
    q += '<div class="module__section place-list-item js-place-list-item"> ';
    g = p["if"].call(r, (r && r.image), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += '<h2 class="place-list-item__title">';
    g = p["if"].call(r, (r && r.number), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, k, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += '<a class="module__title__link js-place-list-item-title" href="';
    if (a = p.url) {
        g = a.call(r, {
            hash: {},
            data: v
        })
    } else {
        a = (r && r.url);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: v
        }) : a
    }
    q += b(g) + '">';
    if (a = p.name) {
        g = a.call(r, {
            hash: {},
            data: v
        })
    } else {
        a = (r && r.name);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: v
        }) : a
    }
    q += b(g) + "</a></h2>";
    g = p["if"].call(r, (r && r.rating), {
        hash: {},
        inverse: n.noop,
        fn: n.program(5, i, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += '<ul class="place-list-item__info">';
    g = p["if"].call(r, (r && r.subtitle), {
        hash: {},
        inverse: n.noop,
        fn: n.program(13, t, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, (r && r.shortAddress), {
        hash: {},
        inverse: n.noop,
        fn: n.program(15, s, v),
        data: v
    });
    if (g || g === 0) {
        q += g
    }
    q += "</ul></div>";
    return q
});
this["DDG"]["templates"]["places_module"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<div class="module module--places js-module--';
    if (d = b.id) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.id);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + '"><div class="js-places-module-content"></div><div class="module__toggle js-places-module-toggle"><div class="js-places-module-more is-hidden"><span class="module__toggle__chevron">v</span></div><div class="module__toggle--less js-places-module-less"><span class="module__toggle__chevron module__toggle__chevron--collapse">v</span></div></div></div>';
    return f
});
this["DDG"]["templates"]["places_multiple"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, m, e = "function",
        g = this.escapeExpression,
        j = b.helperMissing;
    f += '<div class="module--places-multiple js-places-multiple"><div class="module__header"><a class="module__header__map js-places-multiple-map" href="' + g(((a = ((a = ((a = (k && k.model)), a == null || a === false ? a : a.meta)), a == null || a === false ? a : a.sourceUrl)), typeof a === e ? a.apply(k) : a)) + '"title="' + g(((a = ((a = (k && k.model)), a == null || a === false ? a : a.moreAtExternalProviderText)), typeof a === e ? a.apply(k) : a)) + '"/><div class="module__header__shadow"></div></div><div class="module__place-list js-places-multiple-list"></div><div class="module__places-more module__section"><a class="module__link module__places-more__link js-places-multiple-more"href="' + g(((a = ((a = ((a = (k && k.model)), a == null || a === false ? a : a.meta)), a == null || a === false ? a : a.sourceUrl)), typeof a === e ? a.apply(k) : a)) + '">';
    a = (d = b.favicon || (k && k.favicon), m = {
        hash: {},
        data: h
    }, d ? d.call(k, ((a = ((a = (k && k.model)), a == null || a === false ? a : a.meta)), a == null || a === false ? a : a.sourceUrl), m) : j.call(k, "favicon", ((a = ((a = (k && k.model)), a == null || a === false ? a : a.meta)), a == null || a === false ? a : a.sourceUrl), m));
    if (a || a === 0) {
        f += a
    }
    f += " " + g(((a = ((a = (k && k.model)), a == null || a === false ? a : a.moreAtExternalServiceText)), typeof a === e ? a.apply(k) : a)) + "</a></div></div>";
    return f
});
this["DDG"]["templates"]["places_single"] = Handlebars.template(function(e, n, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        b, f, g = "function",
        i = this.escapeExpression,
        m = d.helperMissing,
        o = this;

    function c(q, p) {
        return "module__header--with-image"
    }

    function a(u, t) {
        var p = "",
            r, s, q;
        p += '<a class="module__header__image" href="';
        if (s = d.imageURL) {
            r = s.call(u, {
                hash: {},
                data: t
            })
        } else {
            s = (u && u.imageURL);
            r = typeof s === g ? s.call(u, {
                hash: {},
                data: t
            }) : s
        }
        p += i(r) + '" title="';
        if (s = d.morePhotosText) {
            r = s.call(u, {
                hash: {},
                data: t
            })
        } else {
            s = (u && u.morePhotosText);
            r = typeof s === g ? s.call(u, {
                hash: {},
                data: t
            }) : s
        }
        p += i(r) + '"style="background-image: url(' + i((s = d.imageProxy || (u && u.imageProxy), q = {
            hash: {},
            data: t
        }, s ? s.call(u, (u && u.image), q) : m.call(u, "imageProxy", (u && u.image), q))) + ')"><img class="module__header__image__img" src="' + i((s = d.imageProxy || (u && u.imageProxy), q = {
            hash: {},
            data: t
        }, s ? s.call(u, (u && u.image), q) : m.call(u, "imageProxy", (u && u.image), q))) + '" /><span class="module__header__image__more">';
        r = (s = d.l || (u && u.l), q = {
            hash: {},
            data: t
        }, s ? s.call(u, "See Photos", q) : m.call(u, "l", "See Photos", q));
        if (r || r === 0) {
            p += r
        }
        p += "</span></a>";
        return p
    }
    h += '<div class="js-places-module-content js-places-single"><div class="module__header ';
    b = d["if"].call(n, (n && n.image), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '">';
    b = d["if"].call(n, (n && n.image), {
        hash: {},
        inverse: o.noop,
        fn: o.program(3, a, j),
        data: j
    });
    if (b || b === 0) {
        h += b
    }
    h += '<a class="module__header__map js-places-single-map" href="';
    if (f = d.mapURL) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.mapURL);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '" title="';
    if (f = d.directionsTitle) {
        b = f.call(n, {
            hash: {},
            data: j
        })
    } else {
        f = (n && n.directionsTitle);
        b = typeof f === g ? f.call(n, {
            hash: {},
            data: j
        }) : f
    }
    h += i(b) + '" /><div class="module__header__shadow"></div></div></div>';
    return h
});
this["DDG"]["templates"]["region_filter"] = Handlebars.template(function(e, m, d, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    j = j || {};
    var h = "",
        a, f, o = this,
        g = "function",
        i = this.escapeExpression;

    function c(t, s) {
        var q = "",
            r;
        q += "is-active ";
        r = d["if"].call(t, (t && t.hasActiveRegion), {
            hash: {},
            inverse: o.program(2, b, s),
            fn: o.noop,
            data: s
        });
        if (r || r === 0) {
            q += r
        }
        return q
    }

    function b(r, q) {
        return "has-inactive-region"
    }

    function p(t, s) {
        var q = "",
            r;
        q += '<div class="dropdown__switch switch js-region-filter-switch ';
        r = d["if"].call(t, (t && t.hasActiveRegion), {
            hash: {},
            inverse: o.noop,
            fn: o.program(5, n, s),
            data: s
        });
        if (r || r === 0) {
            q += r
        }
        q += '"><span class="switch__knob"></span></div>';
        return q
    }

    function n(r, q) {
        return "is-on"
    }
    h += '<div class="dropdown dropdown--region ';
    a = d["if"].call(m, (m && m.hasRegion), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    h += '">';
    a = d["if"].call(m, (m && m.hasRegion), {
        hash: {},
        inverse: o.noop,
        fn: o.program(4, p, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    h += '<a class="dropdown__button dropdown__button js-dropdown-button">';
    if (f = d.regionName) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.regionName);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + "</a></div>";
    return h
});
this["DDG"]["templates"]["region_filter_modal"] = Handlebars.template(function(f, k, e, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    h = h || {};
    var g = "",
        b, j = e.helperMissing,
        p = this;

    function d(r, q) {
        return "modal--popover modal--popover--dk"
    }

    function a(r, q) {
        return "modal--popout"
    }

    function o(v, u) {
        var q = "",
            s, t, r;
        q += '<div class="modal__header"><span class="modal__header__title">';
        s = (t = e.l || (v && v.l), r = {
            hash: {},
            data: u
        }, t ? t.call(v, "Filter by region", r) : j.call(v, "l", "Filter by region", r));
        if (s || s === 0) {
            q += s
        }
        q += '</span><a href="#"  class="modal__close  js-modal-close">X</a></div>';
        return q
    }

    function n(v, u) {
        var q = "",
            s, t, r;
        q += '<div class="modal__header"><input class="frm__input  js-region-filter-input" placeholder="';
        s = (t = e.l || (v && v.l), r = {
            hash: {},
            data: u
        }, t ? t.call(v, "Search", r) : j.call(v, "l", "Search", r));
        if (s || s === 0) {
            q += s
        }
        q += '" />';
        s = e["if"].call(v, (v && v.hasRegionOrSuggested), {
            hash: {},
            inverse: p.noop,
            fn: p.program(8, m, u),
            data: u
        });
        if (s || s === 0) {
            q += s
        }
        q += "</div>";
        return q
    }

    function m(v, u) {
        var q = "",
            s, t, r;
        q += '<a class="modal__header__clear sep--before js-region-filter-clear">';
        s = (t = e.l || (v && v.l), r = {
            hash: {},
            data: u
        }, t ? t.call(v, "Clear All", r) : j.call(v, "l", "Clear All", r));
        if (s || s === 0) {
            q += s
        }
        q += "</a>";
        return q
    }

    function c(v, u) {
        var q = "",
            s, t, r;
        q += '<div class="modal__body__input"><input class="frm__input  js-region-filter-input" placeholder="';
        s = (t = e.l || (v && v.l), r = {
            hash: {},
            data: u
        }, t ? t.call(v, "Search", r) : j.call(v, "l", "Search", r));
        if (s || s === 0) {
            q += s
        }
        q += '" /></div>';
        return q
    }
    g += '<div class="modal modal--dropdown ';
    b = e["if"].call(k, (k && k.isPopover), {
        hash: {},
        inverse: p.program(3, a, h),
        fn: p.program(1, d, h),
        data: h
    });
    if (b || b === 0) {
        g += b
    }
    g += ' modal--dropdown--region has-header js-dropdown-popout"><div class="modal__overlay  js-modal-close"></div><div class="modal__wrap"><div class="modal__box">';
    b = e["if"].call(k, (k && k.isPopover), {
        hash: {},
        inverse: p.program(7, n, h),
        fn: p.program(5, o, h),
        data: h
    });
    if (b || b === 0) {
        g += b
    }
    g += '<div class="modal__body">';
    b = e["if"].call(k, (k && k.isPopover), {
        hash: {},
        inverse: p.noop,
        fn: p.program(10, c, h),
        data: h
    });
    if (b || b === 0) {
        g += b
    }
    g += '<ol class="modal__list  js-region-filter-list"></ol></div></div></div></div>';
    return g
});
this["DDG"]["templates"]["region_filter_modal_items"] = Handlebars.template(function(e, m, d, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    i = i || {};
    var g = "",
        b, k = d.helperMissing,
        o = this,
        f = "function",
        h = this.escapeExpression;

    function c(v, u) {
        var q = "",
            s, t, r;
        q += '<div class="modal__list__header">';
        s = (t = d.lp || (v && v.lp), r = {
            hash: {},
            data: u
        }, t ? t.call(v, "region filter", "Recent:", r) : k.call(v, "lp", "region filter", "Recent:", r));
        if (s || s === 0) {
            q += s
        }
        q += '<a class="modal__list__clear js-region-filter-clear no-visited" href="#">';
        s = (t = d.l || (v && v.l), r = {
            hash: {},
            data: u
        }, t ? t.call(v, "Clear", r) : k.call(v, "l", "Clear", r));
        if (s || s === 0) {
            q += s
        }
        q += "</a></div>";
        return q
    }

    function a(u, t) {
        var q = "",
            r, s;
        r = d["if"].call(u, (u && u.showDivider), {
            hash: {},
            inverse: o.noop,
            fn: o.program(4, p, t),
            data: t
        });
        if (r || r === 0) {
            q += r
        }
        q += '<li class="modal__list__item"><a class="modal__list__link  ';
        r = d["if"].call(u, (u && u.selected), {
            hash: {},
            inverse: o.noop,
            fn: o.program(6, n, t),
            data: t
        });
        if (r || r === 0) {
            q += r
        }
        q += ' js-region-filter-link" data-id="';
        if (s = d.id) {
            r = s.call(u, {
                hash: {},
                data: t
            })
        } else {
            s = (u && u.id);
            r = typeof s === f ? s.call(u, {
                hash: {},
                data: t
            }) : s
        }
        q += h(r) + '" data-index="' + h(((r = (t == null || t === false ? t : t.index)), typeof r === f ? r.apply(u) : r)) + '"><span class="region-flag__wrap region-flag__wrap--small has-region"><span class="flag-xs  flag-xs-';
        if (s = d.countryCode) {
            r = s.call(u, {
                hash: {},
                data: t
            })
        } else {
            s = (u && u.countryCode);
            r = typeof s === f ? s.call(u, {
                hash: {},
                data: t
            }) : s
        }
        q += h(r) + '"></span></span>';
        if (s = d.name) {
            r = s.call(u, {
                hash: {},
                data: t
            })
        } else {
            s = (u && u.name);
            r = typeof s === f ? s.call(u, {
                hash: {},
                data: t
            }) : s
        }
        q += h(r) + "</a></li>";
        return q
    }

    function p(r, q) {
        return '<li class="modal__list__divider"></li>'
    }

    function n(r, q) {
        return "is-selected"
    }
    b = d["if"].call(m, (m && m.showListHeader), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    b = d.each.call(m, (m && m.regions), {
        hash: {},
        inverse: o.noop,
        fn: o.program(3, a, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    return g
});
this["DDG"]["templates"]["report_ads_button"] = Handlebars.template(function(c, i, b, g, f) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    f = f || {};
    var e = "",
        a, d, j, h = b.helperMissing;
    e += '<div class="report-ad"><span class="report-ad__start js-report-ad-start"><i class="ddgsi-comment ddgsi"></i><a href="#" class="report-ad__link">';
    a = (d = b.lp || (i && i.lp), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "ads", "Report Ad", j) : h.call(i, "lp", "ads", "Report Ad", j));
    if (a || a === 0) {
        e += a
    }
    e += "</a></span></div>";
    return e
});
this["DDG"]["templates"]["safe_search"] = Handlebars.template(function(e, k, d, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    h = h || {};
    var g = "",
        b, f, n, j = d.helperMissing,
        m = this;

    function c(s, r) {
        var p, q, o;
        p = (q = d.l || (s && s.l), o = {
            hash: {},
            data: r
        }, q ? q.call(s, "Safe search blocked results for %s.", (s && s.searchTerm), o) : j.call(s, "l", "Safe search blocked results for %s.", (s && s.searchTerm), o));
        if (p || p === 0) {
            return p
        } else {
            return ""
        }
    }

    function a(s, r) {
        var p, q, o;
        p = (q = d.l || (s && s.l), o = {
            hash: {},
            data: r
        }, q ? q.call(s, "Safe search blocked some results for %s.", (s && s.searchTerm), o) : j.call(s, "l", "Safe search blocked some results for %s.", (s && s.searchTerm), o));
        if (p || p === 0) {
            return p
        } else {
            return ""
        }
    }
    g += '<div class="msg msg--serp"><span class="msg__label js-safe-search">';
    b = d["if"].call(k, (k && k.noResults), {
        hash: {},
        inverse: m.program(3, a, h),
        fn: m.program(1, c, h),
        data: h
    });
    if (b || b === 0) {
        g += b
    }
    g += '</span><span class="msg__btn-wrap"><span class="msg__label">';
    b = (f = d.l || (k && k.l), n = {
        hash: {},
        data: h
    }, f ? f.call(k, "Turn off:", n) : j.call(k, "l", "Turn off:", n));
    if (b || b === 0) {
        g += b
    }
    g += '</span><a href="#" class="btn  msg__btn  js-safe-search-temp">';
    b = (f = d.l || (k && k.l), n = {
        hash: {},
        data: h
    }, f ? f.call(k, "temporarily", n) : j.call(k, "l", "temporarily", n));
    if (b || b === 0) {
        g += b
    }
    g += '</a><a href="/settings" class="btn  msg__btn  js-safe-search-perm">';
    b = (f = d.l || (k && k.l), n = {
        hash: {},
        data: h
    }, f ? f.call(k, "permanently", n) : j.call(k, "l", "permanently", n));
    if (b || b === 0) {
        g += b
    }
    g += "</a></span></div>";
    return g
});
this["DDG"]["templates"]["site_query"] = Handlebars.template(function(e, r, p, j, t) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    t = t || {};
    var q = "",
        g, a, d, o = p.helperMissing,
        c = "function",
        b = this.escapeExpression,
        n = this;

    function m(z, y) {
        var v, x, u;
        v = (x = p.l || (z && z.l), u = {
            hash: {},
            data: y
        }, x ? x.call(z, "Showing results excluding", u) : o.call(z, "l", "Showing results excluding", u));
        if (v || v === 0) {
            return v
        } else {
            return ""
        }
    }

    function k(z, y) {
        var v, x, u;
        v = (x = p.l || (z && z.l), u = {
            hash: {},
            data: y
        }, x ? x.call(z, "Showing results from", u) : o.call(z, "l", "Showing results from", u));
        if (v || v === 0) {
            return v
        } else {
            return ""
        }
    }

    function i(v, u) {
        return " msg__sites--mobile"
    }

    function h(z, x, y) {
        var u = "",
            v;
        u += '<span class="msg__site">';
        v = p["if"].call(z, (y && y.hasMultipleSites), {
            hash: {},
            inverse: n.program(10, s, x),
            fn: n.program(8, f, x),
            data: x
        });
        if (v || v === 0) {
            u += v
        }
        u += "</span>";
        return u
    }

    function f(z, y) {
        var u = "",
            v, x;
        u += '<a href="/?q=';
        if (x = p.clearQuery) {
            v = x.call(z, {
                hash: {},
                data: y
            })
        } else {
            x = (z && z.clearQuery);
            v = typeof x === c ? x.call(z, {
                hash: {},
                data: y
            }) : x
        }
        if (v || v === 0) {
            u += v
        }
        u += '" class="msg__clear-filter  js-site-query-clear">';
        if (x = p.site) {
            v = x.call(z, {
                hash: {},
                data: y
            })
        } else {
            x = (z && z.site);
            v = typeof x === c ? x.call(z, {
                hash: {},
                data: y
            }) : x
        }
        u += b(v) + ' <span class="msg__clear-filter-x">X</span></a>';
        return u
    }

    function s(y, x) {
        var u, v;
        if (v = p.site) {
            u = v.call(y, {
                hash: {},
                data: x
            })
        } else {
            v = (y && y.site);
            u = typeof v === c ? v.call(y, {
                hash: {},
                data: x
            }) : v
        }
        return b(u)
    }
    q += '<div class="msg  msg--serp  msg--site"><div class="msg__wrap"><span class="msg__text">';
    g = p["if"].call(r, (r && r.isExcluding), {
        hash: {},
        inverse: n.program(3, k, t),
        fn: n.program(1, m, t),
        data: t
    });
    if (g || g === 0) {
        q += g
    }
    q += ':</span><span class="msg__sites ';
    g = p["if"].call(r, (r && r.forceBreak), {
        hash: {},
        inverse: n.noop,
        fn: n.program(5, i, t),
        data: t
    });
    if (g || g === 0) {
        q += g
    }
    q += '">';
    g = p.each.call(r, (r && r.sites), {
        hash: {},
        inverse: n.noop,
        fn: n.programWithDepth(7, h, t, r),
        data: t
    });
    if (g || g === 0) {
        q += g
    }
    q += '<a href="/?q=';
    if (a = p.queryEncoded) {
        g = a.call(r, {
            hash: {},
            data: t
        })
    } else {
        a = (r && r.queryEncoded);
        g = typeof a === c ? a.call(r, {
            hash: {},
            data: t
        }) : a
    }
    if (g || g === 0) {
        q += g
    }
    q += '" class="msg__all  js-site-query-clear"><span class="hide--screen-s">';
    g = (a = p.l || (r && r.l), d = {
        hash: {},
        data: t
    }, a ? a.call(r, "All Results", d) : o.call(r, "l", "All Results", d));
    if (g || g === 0) {
        q += g
    }
    q += '</span><span class="hide  show--screen-s">';
    g = (a = p.l || (r && r.l), d = {
        hash: {},
        data: t
    }, a ? a.call(r, "All", d) : o.call(r, "l", "All", d));
    if (g || g === 0) {
        q += g
    }
    q += "</span></a></span></div></div>";
    return q
});
this["DDG"]["templates"]["sitelinks"] = Handlebars.template(function(e, m, d, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    i = i || {};
    var g = "",
        a, o = this,
        f = "function",
        h = this.escapeExpression,
        k = d.helperMissing;

    function c(v, u) {
        var q = "",
            s, t, r;
        s = d["if"].call(v, (u == null || u === false ? u : u.first), {
            hash: {},
            inverse: o.noop,
            fn: o.program(2, b, u),
            data: u
        });
        if (s || s === 0) {
            q += s
        }
        s = d["if"].call(v, (v && v.nextRow), {
            hash: {},
            inverse: o.noop,
            fn: o.program(4, p, u),
            data: u
        });
        if (s || s === 0) {
            q += s
        }
        q += '<td class="js-sitelink sitelinks_td highlight_d" id="';
        if (t = d.id) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.id);
            s = typeof t === f ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        q += h(s) + '" data-domain="';
        if (t = d.domainName) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.domainName);
            s = typeof t === f ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        q += h(s) + '"><div> <h3 class="sitelinks__title"><a class="result__a" href="';
        if (t = d.targetUrl) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.targetUrl);
            s = typeof t === f ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        q += h(s) + '">';
        if (t = d.text) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.text);
            s = typeof t === f ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        if (s || s === 0) {
            q += s
        }
        q += '</a></h3><div class="result__snippet sitelinks__snippet--unbold sitelinks__snippet--trim hide--screen-s">';
        s = (t = d.ellipsis || (v && v.ellipsis), r = {
            hash: {},
            data: u
        }, t ? t.call(v, (v && v.snippet), 56, r) : k.call(v, "ellipsis", (v && v.snippet), 56, r));
        if (s || s === 0) {
            q += s
        }
        q += "</div></div></td>";
        s = d["if"].call(v, (u == null || u === false ? u : u.last), {
            hash: {},
            inverse: o.noop,
            fn: o.program(6, n, u),
            data: u
        });
        if (s || s === 0) {
            q += s
        }
        return q
    }

    function b(r, q) {
        return '<tr class="sitelinks__tr">'
    }

    function p(r, q) {
        return '</tr><tr class="sitelinks__tr">'
    }

    function n(r, q) {
        return "</tr>"
    }
    g += '<div class="sitelinks"><table class="sitelinks__table">';
    a = d.each.call(m, (m && m.links), {
        hash: {},
        inverse: o.noop,
        fn: o.program(1, c, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    g += "</table></div>";
    return g
});
this["DDG"]["templates"]["spelling_dym"] = Handlebars.template(function(c, i, b, g, f) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    f = f || {};
    var e = "",
        a, d, j, h = b.helperMissing;
    e += '<div id="did_you_mean" class="msg  msg--result  msg--spelling">';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Did you mean %s?", '<a class="js-spelling-suggestion-link"></a>', j) : h.call(i, "l", "Did you mean %s?", '<a class="js-spelling-suggestion-link"></a>', j));
    if (a || a === 0) {
        e += a
    }
    e += "</div>";
    return e
});
this["DDG"]["templates"]["spelling_irf"] = Handlebars.template(function(c, i, b, g, f) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    f = f || {};
    var e = "",
        a, d, j, h = b.helperMissing;
    e += '<div id="did_you_mean" class="msg  msg--result  msg--spelling"><div class="msg__wrap"><span class="msg__line">';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Including results for %s.", '<a class="js-spelling-suggestion-link"></a>', j) : h.call(i, "l", "Including results for %s.", '<a class="js-spelling-suggestion-link"></a>', j));
    if (a || a === 0) {
        e += a
    }
    e += '</span><span class="msg__line  msg__line--small">';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Search only for %s?", '<a class="js-spelling-recourse-link"></a>', j) : h.call(i, "l", "Search only for %s?", '<a class="js-spelling-recourse-link"></a>', j));
    if (a || a === 0) {
        e += a
    }
    e += "</span></div></div>";
    return e
});
this["DDG"]["templates"]["spelling_nmrc"] = Handlebars.template(function(c, i, b, g, f) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    f = f || {};
    var e = "",
        a, d, j, h = b.helperMissing;
    e += '<div id="did_you_mean" class="msg  msg--result  msg--spelling"><div class="msg__wrap"><span class="msg__line">';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Not many results contain %s.", '<span class="js-spelling-suggestion-link"></span>', j) : h.call(i, "l", "Not many results contain %s.", '<span class="js-spelling-suggestion-link"></span>', j));
    if (a || a === 0) {
        e += a
    }
    e += '</span><span class="msg__line  msg__line--small">';
    a = (d = b.l || (i && i.l), j = {
        hash: {},
        data: f
    }, d ? d.call(i, "Search only for %s?", '<a class="js-spelling-recourse-link"></a>', j) : h.call(i, "l", "Search only for %s?", '<a class="js-spelling-recourse-link"></a>', j));
    if (a || a === 0) {
        e += a
    }
    e += "</span></div></div>";
    return e
});
this["DDG"]["templates"]["twitter_easter_egg"] = Handlebars.template(function(b, i, a, g, f) {
    this.compilerInfo = [4, ">= 1.0.0"];
    a = this.merge(a, b.helpers);
    f = f || {};
    var d = "",
        c, j, h = a.helperMissing,
        e = this.escapeExpression;
    d += '<img class="header__praise js-logo-praise" src="' + e((c = a.imageProxy || (i && i.imageProxy), j = {
        hash: {},
        data: f
    }, c ? c.call(i, "/assets/spread/praise.png", j) : h.call(i, "imageProxy", "/assets/spread/praise.png", j))) + '" /><img class="header__avatar js-logo-avatar" src="' + e((c = a.imageProxy || (i && i.imageProxy), j = {
        hash: {},
        data: f
    }, c ? c.call(i, (i && i.image), j) : h.call(i, "imageProxy", (i && i.image), j))) + '" />';
    return d
});
this["DDG"]["templates"]["vertical_link_item"] = Handlebars.template(function(e, r, p, j, y) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    y = y || {};
    var q = "",
        g, a, d, o = p.helperMissing,
        b = this.escapeExpression,
        n = this,
        c = "function";

    function m(A, z) {
        return " highlight"
    }

    function k(A, z) {
        return " result--img"
    }

    function i(A, z) {
        return " result--url-above-snippet"
    }

    function h(C, B) {
        var z = "",
            A;
        z += '<div class="result__image js-result-image-wrapper">';
        A = p["if"].call(C, ((A = (C && C.model)), A == null || A === false ? A : A.image), {
            hash: {},
            inverse: n.program(10, x, B),
            fn: n.program(8, f, B),
            data: B
        });
        if (A || A === 0) {
            z += A
        }
        z += "</div>";
        return z
    }

    function f(E, D) {
        var z = "",
            B, C, A;
        z += '<div class="result__image__img" style="background-image:url(' + b((C = p.imageProxy || (E && E.imageProxy), A = {
            hash: {},
            data: D
        }, C ? C.call(E, ((B = (E && E.model)), B == null || B === false ? B : B.image), A) : o.call(E, "imageProxy", ((B = (E && E.model)), B == null || B === false ? B : B.image), A))) + ')"></div>';
        return z
    }

    function x(B, A) {
        var z;
        z = p["if"].call(B, ((z = (B && B.model)), z == null || z === false ? z : z.fetch_image), {
            hash: {},
            inverse: n.noop,
            fn: n.program(11, v, A),
            data: A
        });
        if (z || z === 0) {
            return z
        } else {
            return ""
        }
    }

    function v(A, z) {
        return '<div class="result__image__plc ddgsi ddgsi-news js-result-img-placeholder"></div>'
    }

    function u(C, B) {
        var z = "",
            A;
        z += '<div class="result__snippet">';
        A = ((A = ((A = (C && C.model)), A == null || A === false ? A : A.excerpt)), typeof A === c ? A.apply(C) : A);
        if (A || A === 0) {
            z += A
        }
        z += "</div>";
        return z
    }

    function t(A, z) {
        return "is-hidden"
    }

    function s(C, B) {
        var z = "",
            A;
        z += '<span class="result__extras__sep">|</span><span class="result__timestamp">' + b(((A = ((A = (C && C.model)), A == null || A === false ? A : A.relative_time)), typeof A === c ? A.apply(C) : A)) + "</span>";
        return z
    }
    q += '<div class="result result--' + b(((g = ((g = (r && r.answer)), g == null || g === false ? g : g.id)), typeof g === c ? g.apply(r) : g)) + " ";
    g = p["if"].call(r, ((g = (r && r.model)), g == null || g === false ? g : g.highlighted), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, y),
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, ((g = (r && r.model)), g == null || g === false ? g : g.showImage), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, k, y),
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    g = p["if"].call(r, (r && r.urlAboveSnippet), {
        hash: {},
        inverse: n.noop,
        fn: n.program(5, i, y),
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    q += '" data-link="' + b(((g = ((g = (r && r.model)), g == null || g === false ? g : g.url)), typeof g === c ? g.apply(r) : g)) + '"><div class="result__body">';
    g = p["if"].call(r, ((g = (r && r.model)), g == null || g === false ? g : g.showImage), {
        hash: {},
        inverse: n.noop,
        fn: n.program(7, h, y),
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    q += '<h2 class="result__title"><a class="result__a" rel="noopener" href="' + b(((g = ((g = (r && r.model)), g == null || g === false ? g : g.url)), typeof g === c ? g.apply(r) : g)) + '">';
    g = ((g = ((g = (r && r.model)), g == null || g === false ? g : g.title)), typeof g === c ? g.apply(r) : g);
    if (g || g === 0) {
        q += g
    }
    q += '</a><a class="result__check" rel="noopener" href="' + b(((g = ((g = (r && r.model)), g == null || g === false ? g : g.url)), typeof g === c ? g.apply(r) : g)) + '"><span class="result__check__tt">';
    g = (a = p.l || (r && r.l), d = {
        hash: {},
        data: y
    }, a ? a.call(r, "Your browser indicates if you've visited this link", d) : o.call(r, "l", "Your browser indicates if you've visited this link", d));
    if (g || g === 0) {
        q += g
    }
    q += "</span></a></h2>";
    g = p["if"].call(r, (r && r.urlAboveSnippet), {
        hash: {},
        inverse: n.program(13, u, y),
        fn: n.noop,
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    q += '<div class="result__extras"><div class="result__extras__url"><span class="result__icon ';
    g = p["if"].call(r, (r && r.favicons), {
        hash: {},
        inverse: n.program(15, t, y),
        fn: n.noop,
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    q += '">';
    g = (a = p.favicon || (r && r.favicon), d = {
        hash: {},
        data: y
    }, a ? a.call(r, ((g = (r && r.model)), g == null || g === false ? g : g.favicon_url), d) : o.call(r, "favicon", ((g = (r && r.model)), g == null || g === false ? g : g.favicon_url), d));
    if (g || g === 0) {
        q += g
    }
    q += '</span><a class="result__url" href="' + b(((g = ((g = (r && r.model)), g == null || g === false ? g : g.url)), typeof g === c ? g.apply(r) : g)) + '" rel="noopener">' + b(((g = ((g = (r && r.model)), g == null || g === false ? g : g.source)), typeof g === c ? g.apply(r) : g)) + "</a>";
    g = p["if"].call(r, ((g = (r && r.model)), g == null || g === false ? g : g.relative_time), {
        hash: {},
        inverse: n.noop,
        fn: n.program(17, s, y),
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div>";
    g = p["if"].call(r, (r && r.urlAboveSnippet), {
        hash: {},
        inverse: n.noop,
        fn: n.program(13, u, y),
        data: y
    });
    if (g || g === 0) {
        q += g
    }
    q += "</div></div>";
    return q
});
this["DDG"]["templates"]["vertical_links"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "",
        a, d, e = "function",
        g = this.escapeExpression;
    f += '<div class="vertical vertical--';
    if (d = b.id) {
        a = d.call(j, {
            hash: {},
            data: h
        })
    } else {
        d = (j && j.id);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: h
        }) : d
    }
    f += g(a) + ' is-hidden"><div class="serp__top-right js-vertical-top-right"></div><div class="serp__bottom-right js-vertical-bottom-right"></div><div class="cw"><div class="serp__results"><div class="results--main"><div class="search-filters-wrap"><div class="search-filters js-vertical-filters"></div></div><div class="results--message"></div><div class="results js-vertical-results"></div></div><div class="results--sidebar js-vertical-sidebar"><div class="sidebar-modules js-vertical-sidebar-modules"></div></div></div></div></div>';
    return f
});
this["DDG"]["templates"]["vertical_load_more"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "",
        a, d, k, i = b.helperMissing,
        e = "function";
    f += '<div class="result result--more js-result-more"><a class="result--more__btn btn btn--alt btn--full">';
    a = (d = b.l || (j && j.l), k = {
        hash: {},
        data: g
    }, d ? d.call(j, "Load More", k) : i.call(j, "l", "Load More", k));
    if (a || a === 0) {
        f += a
    }
    f += "</a>";
    if (d = b.loader) {
        a = d.call(j, {
            hash: {},
            data: g
        })
    } else {
        d = (j && j.loader);
        a = typeof d === e ? d.call(j, {
            hash: {},
            data: g
        }) : d
    }
    if (a || a === 0) {
        f += a
    }
    f += "</div>";
    return f
});
this["DDG"]["templates"]["vertical_map"] = Handlebars.template(function(d, h, c, g, f) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, d.helpers);
    f = f || {};
    var e = "",
        a, i = this;

    function b(k, j) {
        return "is-hidden"
    }
    e += '<div class="vertical vertical--map ';
    a = c.unless.call(h, ((a = (h && h.model)), a == null || a === false ? a : a.isMapExpanded), {
        hash: {},
        inverse: i.noop,
        fn: i.program(1, b, f),
        data: f
    });
    if (a || a === 0) {
        e += a
    }
    e += ' js-vertical-map"><div class="vertical--map__map js-vertical-map-map"><div class="mapbox-controls mapbox-controls--topright js-vertical-map-control-topright"></div><div class="mapbox-controls mapbox-controls--bottomleft js-vertical-map-control-bottomleft"></div></div></div>';
    return e
});
this["DDG"]["templates"]["vertical_separator"] = Handlebars.template(function(e, m, d, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    d = this.merge(d, e.helpers);
    i = i || {};
    var g = "",
        b, f = "function",
        h = this.escapeExpression,
        k = d.helperMissing,
        q = this;

    function c(s, r) {
        return "result--sep--hr"
    }

    function a(s, r) {
        return "has-pagenum"
    }

    function p(u, t) {
        var r = "",
            s;
        s = d["if"].call(u, (u && u.line), {
            hash: {},
            inverse: q.program(8, n, t),
            fn: q.program(6, o, t),
            data: t
        });
        if (s || s === 0) {
            r += s
        }
        r += "</div>";
        return r
    }

    function o(v, u) {
        var r = "",
            s, t;
        r += '<div class="result__pagenum  result__pagenum--side">';
        if (t = d.pageNumber) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.pageNumber);
            s = typeof t === f ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        r += h(s) + "</div>";
        return r
    }

    function n(x, v) {
        var r = "",
            t, u, s;
        r += '<div class="result__pagenum">';
        t = (u = d.l || (x && x.l), s = {
            hash: {},
            data: v
        }, u ? u.call(x, "Page %s", (x && x.pageNumber), s) : k.call(x, "l", "Page %s", (x && x.pageNumber), s));
        if (t || t === 0) {
            r += t
        }
        r += "</div>";
        return r
    }
    g += '<div class="result result--sep ';
    b = d["if"].call(m, (m && m.line), {
        hash: {},
        inverse: q.noop,
        fn: q.program(1, c, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += " ";
    b = d["if"].call(m, (m && m.pageNumber), {
        hash: {},
        inverse: q.noop,
        fn: q.program(3, a, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += ' js-result-sep">';
    b = d["if"].call(m, (m && m.pageNumber), {
        hash: {},
        inverse: q.noop,
        fn: q.program(5, p, i),
        data: i
    });
    if (b || b === 0) {
        g += b
    }
    g += "</div>";
    return g
});