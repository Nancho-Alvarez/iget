function sprintf() {
    var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
    var a = arguments,
        i = 0,
        format = a[i++];
    var pad = function(str, len, chr, leftJustify) {
        if (!chr) {
            chr = ' ';
        }
        var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);
        return leftJustify ? str + padding : padding + str;
    };
    var justify = function(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
        var diff = minWidth - value.length;
        if (diff > 0) {
            if (leftJustify || !zeroPad) {
                value = pad(value, minWidth, customPadChar, leftJustify);
            } else {
                value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
            }
        }
        return value;
    };
    var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
        var number = value >>> 0;
        prefix = prefix && number && {
            '2': '0b',
            '8': '0',
            '16': '0x'
        }[base] || '';
        value = prefix + pad(number.toString(base), precision || 0, '0', false);
        return justify(value, prefix, leftJustify, minWidth, zeroPad);
    };
    var formatString = function(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
        if (precision != null) {
            value = value.slice(0, precision);
        }
        return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
    };
    var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {
        var number;
        var prefix;
        var method;
        var textTransform;
        var value;
        if (substring == '%%') {
            return '%';
        }
        var leftJustify = false,
            positivePrefix = '',
            zeroPad = false,
            prefixBaseX = false,
            customPadChar = ' ';
        var flagsl = flags.length;
        for (var j = 0; flags && j < flagsl; j++) {
            switch (flags.charAt(j)) {
                case ' ':
                    positivePrefix = ' ';
                    break;
                case '+':
                    positivePrefix = '+';
                    break;
                case '-':
                    leftJustify = true;
                    break;
                case "'":
                    customPadChar = flags.charAt(j + 1);
                    break;
                case '0':
                    zeroPad = true;
                    break;
                case '#':
                    prefixBaseX = true;
                    break;
            }
        }
        if (!minWidth) {
            minWidth = 0;
        } else if (minWidth == '*') {
            minWidth = +a[i++];
        } else if (minWidth.charAt(0) == '*') {
            minWidth = +a[minWidth.slice(1, -1)];
        } else {
            minWidth = +minWidth;
        }
        if (minWidth < 0) {
            minWidth = -minWidth;
            leftJustify = true;
        }
        if (!isFinite(minWidth)) {
            throw new Error('sprintf: (minimum-)width must be finite');
        }
        if (!precision) {
            precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : undefined;
        } else if (precision == '*') {
            precision = +a[i++];
        } else if (precision.charAt(0) == '*') {
            precision = +a[precision.slice(1, -1)];
        } else {
            precision = +precision;
        }
        value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];
        switch (type) {
            case 's':
                return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
            case 'c':
                return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
            case 'b':
                return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'o':
                return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'x':
                return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'X':
                return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
            case 'u':
                return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
            case 'i':
            case 'd':
                number = (+value) | 0;
                prefix = number < 0 ? '-' : positivePrefix;
                value = prefix + pad(String(Math.abs(number)), precision, '0', false);
                return justify(value, prefix, leftJustify, minWidth, zeroPad);
            case 'e':
            case 'E':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
                number = +value;
                prefix = number < 0 ? '-' : positivePrefix;
                method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                value = prefix + Math.abs(number)[method](precision);
                return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
            default:
                return substring;
        }
    };
    return format.replace(regex, doFormat);
};
/* Pure Javascript implementation of Uniforum message translation.
Copyright (C) 2008 Joshua I. Miller <unrtst@cpan.org>, all rights reserved
Licensed under GPLv2 : https://www.gnu.org/licenses/gpl-2.0.html
Source at : https://metacpan.org/pod/Locale::Simple */
Gettext = function(args) {
    this.domain = 'messages';
    this.locale_data = undefined;
    var options = ["domain", "locale_data"];
    if (this.isValidObject(args)) {
        for (var i in args) {
            for (var j = 0; j < options.length; j++) {
                if (i == options[j]) {
                    if (this.isValidObject(args[i]))
                        this[i] = args[i];
                }
            }
        }
    }
    this.try_load_lang();
    return this;
}
Gettext.context_glue = "\004";
Gettext._locale_data = {};
Gettext.prototype.try_load_lang = function() {
    if (typeof(this.locale_data) != 'undefined') {
        var locale_copy = this.locale_data;
        this.locale_data = undefined;
        this.parse_locale_data(locale_copy);
        if (typeof(Gettext._locale_data[this.domain]) == 'undefined') {
            throw new Error("Error: Gettext 'locale_data' does not contain the domain '" + this.domain + "'");
        }
    }
    var lang_link = this.get_lang_refs();
    if (typeof(lang_link) == 'object' && lang_link.length > 0) {
        for (var i = 0; i < lang_link.length; i++) {
            var link = lang_link[i];
            if (link.type == 'application/json') {
                if (!this.try_load_lang_json(link.href)) {
                    throw new Error("Error: Gettext 'try_load_lang_json' failed. Unable to exec xmlhttprequest for link [" + link.href + "]");
                }
            } else if (link.type == 'application/x-po') {
                if (!this.try_load_lang_po(link.href)) {
                    throw new Error("Error: Gettext 'try_load_lang_po' failed. Unable to exec xmlhttprequest for link [" + link.href + "]");
                }
            } else {
                throw new Error("TODO: link type [" + link.type + "] found, and support is planned, but not implemented at this time.");
            }
        }
    }
};
Gettext.prototype.parse_locale_data = function(locale_data) {
    if (typeof(Gettext._locale_data) == 'undefined') {
        Gettext._locale_data = {};
    }
    for (var domain in locale_data) {
        if ((!locale_data.hasOwnProperty(domain)) || (!this.isValidObject(locale_data[domain])))
            continue;
        var has_msgids = false;
        for (var msgid in locale_data[domain]) {
            has_msgids = true;
            break;
        }
        if (!has_msgids) continue;
        var data = locale_data[domain];
        if (domain == "") domain = "messages";
        if (!this.isValidObject(Gettext._locale_data[domain]))
            Gettext._locale_data[domain] = {};
        if (!this.isValidObject(Gettext._locale_data[domain].head))
            Gettext._locale_data[domain].head = {};
        if (!this.isValidObject(Gettext._locale_data[domain].msgs))
            Gettext._locale_data[domain].msgs = {};
        for (var key in data) {
            if (key == "") {
                var header = data[key];
                for (var head in header) {
                    var h = head.toLowerCase();
                    Gettext._locale_data[domain].head[h] = header[head];
                }
            } else {
                Gettext._locale_data[domain].msgs[key] = data[key];
            }
        }
    }
    for (var domain in Gettext._locale_data) {
        if (this.isValidObject(Gettext._locale_data[domain].head['plural-forms']) && typeof(Gettext._locale_data[domain].head.plural_func) == 'undefined') {
            var plural_forms = Gettext._locale_data[domain].head['plural-forms'];
            var pf_re = new RegExp('^(\\s*nplurals\\s*=\\s*[0-9]+\\s*;\\s*plural\\s*=\\s*(?:\\s|[-\\?\\|&=!<>+*/%:;a-zA-Z0-9_\(\)])+)', 'm');
            if (pf_re.test(plural_forms)) {
                var pf = Gettext._locale_data[domain].head['plural-forms'];
                if (!/;\s*$/.test(pf)) pf = pf.concat(';');
                var code = 'var plural; var nplurals; ' + pf + ' return { "nplural" : nplurals, "plural" : (plural === true ? 1 : plural ? plural : 0) };';
                Gettext._locale_data[domain].head.plural_func = new Function("n", code);
            } else {
                throw new Error("Syntax error in language file. Plural-Forms header is invalid [" + plural_forms + "]");
            }
        } else if (typeof(Gettext._locale_data[domain].head.plural_func) == 'undefined') {
            Gettext._locale_data[domain].head.plural_func = function(n) {
                var p = (n != 1) ? 1 : 0;
                return {
                    'nplural': 2,
                    'plural': p
                };
            };
        }
    }
    return;
};
Gettext.prototype.try_load_lang_po = function(uri) {
    var data = this.sjax(uri);
    if (!data) return;
    var domain = this.uri_basename(uri);
    var parsed = this.parse_po(data);
    var rv = {};
    if (parsed) {
        if (!parsed[""]) parsed[""] = {};
        if (!parsed[""]["domain"]) parsed[""]["domain"] = domain;
        domain = parsed[""]["domain"];
        rv[domain] = parsed;
        this.parse_locale_data(rv);
    }
    return 1;
};
Gettext.prototype.uri_basename = function(uri) {
    var rv;
    if (rv = uri.match(/^(.*\/)?(.*)/)) {
        var ext_strip;
        if (ext_strip = rv[2].match(/^(.*)\..+$/))
            return ext_strip[1];
        else
            return rv[2];
    } else {
        return "";
    }
};
Gettext.prototype.parse_po = function(data) {
    var rv = {};
    var buffer = {};
    var lastbuffer = "";
    var errors = [];
    var lines = data.split("\n");
    for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace(/(\n|\r)+$/, '');
        var match;
        if (/^$/.test(lines[i])) {
            if (typeof(buffer['msgid']) != 'undefined') {
                var msg_ctxt_id = (typeof(buffer['msgctxt']) != 'undefined' && buffer['msgctxt'].length) ? buffer['msgctxt'] + Gettext.context_glue + buffer['msgid'] : buffer['msgid'];
                var msgid_plural = (typeof(buffer['msgid_plural']) != 'undefined' && buffer['msgid_plural'].length) ? buffer['msgid_plural'] : null;
                var trans = [];
                for (var str in buffer) {
                    var match;
                    if (match = str.match(/^msgstr_(\d+)/))
                        trans[parseInt(match[1])] = buffer[str];
                }
                trans.unshift(msgid_plural);
                if (trans.length > 1) rv[msg_ctxt_id] = trans;
                buffer = {};
                lastbuffer = "";
            }
        } else if (/^#/.test(lines[i])) {
            continue;
        } else if (match = lines[i].match(/^msgctxt\s+(.*)/)) {
            lastbuffer = 'msgctxt';
            buffer[lastbuffer] = this.parse_po_dequote(match[1]);
        } else if (match = lines[i].match(/^msgid\s+(.*)/)) {
            lastbuffer = 'msgid';
            buffer[lastbuffer] = this.parse_po_dequote(match[1]);
        } else if (match = lines[i].match(/^msgid_plural\s+(.*)/)) {
            lastbuffer = 'msgid_plural';
            buffer[lastbuffer] = this.parse_po_dequote(match[1]);
        } else if (match = lines[i].match(/^msgstr\s+(.*)/)) {
            lastbuffer = 'msgstr_0';
            buffer[lastbuffer] = this.parse_po_dequote(match[1]);
        } else if (match = lines[i].match(/^msgstr\[0\]\s+(.*)/)) {
            lastbuffer = 'msgstr_0';
            buffer[lastbuffer] = this.parse_po_dequote(match[1]);
        } else if (match = lines[i].match(/^msgstr\[(\d+)\]\s+(.*)/)) {
            lastbuffer = 'msgstr_' + match[1];
            buffer[lastbuffer] = this.parse_po_dequote(match[2]);
        } else if (/^"/.test(lines[i])) {
            buffer[lastbuffer] += this.parse_po_dequote(lines[i]);
        } else {
            errors.push("Strange line [" + i + "] : " + lines[i]);
        }
    }
    if (typeof(buffer['msgid']) != 'undefined') {
        var msg_ctxt_id = (typeof(buffer['msgctxt']) != 'undefined' && buffer['msgctxt'].length) ? buffer['msgctxt'] + Gettext.context_glue + buffer['msgid'] : buffer['msgid'];
        var msgid_plural = (typeof(buffer['msgid_plural']) != 'undefined' && buffer['msgid_plural'].length) ? buffer['msgid_plural'] : null;
        var trans = [];
        for (var str in buffer) {
            var match;
            if (match = str.match(/^msgstr_(\d+)/))
                trans[parseInt(match[1])] = buffer[str];
        }
        trans.unshift(msgid_plural);
        if (trans.length > 1) rv[msg_ctxt_id] = trans;
        buffer = {};
        lastbuffer = "";
    }
    if (rv[""] && rv[""][1]) {
        var cur = {};
        var hlines = rv[""][1].split(/\\n/);
        for (var i = 0; i < hlines.length; i++) {
            if (!hlines.length) continue;
            var pos = hlines[i].indexOf(':', 0);
            if (pos != -1) {
                var key = hlines[i].substring(0, pos);
                var val = hlines[i].substring(pos + 1);
                var keylow = key.toLowerCase();
                if (cur[keylow] && cur[keylow].length) {
                    errors.push("SKIPPING DUPLICATE HEADER LINE: " + hlines[i]);
                } else if (/#-#-#-#-#/.test(keylow)) {
                    errors.push("SKIPPING ERROR MARKER IN HEADER: " + hlines[i]);
                } else {
                    val = val.replace(/^\s+/, '');
                    cur[keylow] = val;
                }
            } else {
                errors.push("PROBLEM LINE IN HEADER: " + hlines[i]);
                cur[hlines[i]] = '';
            }
        }
        rv[""] = cur;
    } else {
        rv[""] = {};
    }
    return rv;
};
Gettext.prototype.parse_po_dequote = function(str) {
    var match;
    if (match = str.match(/^"(.*)"/)) {
        str = match[1];
    }
    str = str.replace(/\\"/g, "\"");
    return str;
};
Gettext.prototype.try_load_lang_json = function(uri) {
    var data = this.sjax(uri);
    if (!data) return;
    var rv = this.JSON(data);
    this.parse_locale_data(rv);
    return 1;
};
Gettext.prototype.get_lang_refs = function() {
    var langs = new Array();
    var links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
        if (links[i].rel == 'gettext' && links[i].href) {
            if (typeof(links[i].type) == 'undefined' || links[i].type == '') {
                if (/\.json$/i.test(links[i].href)) {
                    links[i].type = 'application/json';
                } else if (/\.js$/i.test(links[i].href)) {
                    links[i].type = 'application/json';
                } else if (/\.po$/i.test(links[i].href)) {
                    links[i].type = 'application/x-po';
                } else if (/\.mo$/i.test(links[i].href)) {
                    links[i].type = 'application/x-mo';
                } else {
                    throw new Error("LINK tag with rel=gettext found, but the type and extension are unrecognized.");
                }
            }
            links[i].type = links[i].type.toLowerCase();
            if (links[i].type == 'application/json') {
                links[i].type = 'application/json';
            } else if (links[i].type == 'text/javascript') {
                links[i].type = 'application/json';
            } else if (links[i].type == 'application/x-po') {
                links[i].type = 'application/x-po';
            } else if (links[i].type == 'application/x-mo') {
                links[i].type = 'application/x-mo';
            } else {
                throw new Error("LINK tag with rel=gettext found, but the type attribute [" + links[i].type + "] is unrecognized.");
            }
            langs.push(links[i]);
        }
    }
    return langs;
};
Gettext.prototype.textdomain = function(domain) {
    if (domain && domain.length) this.domain = domain;
    return this.domain;
}
Gettext.prototype.gettext = function(msgid) {
    var msgctxt;
    var msgid_plural;
    var n;
    var category;
    return this.dcnpgettext(null, msgctxt, msgid, msgid_plural, n, category);
};
Gettext.prototype.dgettext = function(domain, msgid) {
    var msgctxt;
    var msgid_plural;
    var n;
    var category;
    return this.dcnpgettext(domain, msgctxt, msgid, msgid_plural, n, category);
};
Gettext.prototype.dcgettext = function(domain, msgid, category) {
    var msgctxt;
    var msgid_plural;
    var n;
    return this.dcnpgettext(domain, msgctxt, msgid, msgid_plural, n, category);
};
Gettext.prototype.ngettext = function(msgid, msgid_plural, n) {
    var msgctxt;
    var category;
    return this.dcnpgettext(null, msgctxt, msgid, msgid_plural, n, category);
};
Gettext.prototype.dngettext = function(domain, msgid, msgid_plural, n) {
    var msgctxt;
    var category;
    return this.dcnpgettext(domain, msgctxt, msgid, msgid_plural, n, category);
};
Gettext.prototype.dcngettext = function(domain, msgid, msgid_plural, n, category) {
    var msgctxt;
    return this.dcnpgettext(domain, msgctxt, msgid, msgid_plural, n, category, category);
};
Gettext.prototype.pgettext = function(msgctxt, msgid) {
    var msgid_plural;
    var n;
    var category;
    return this.dcnpgettext(null, msgctxt, msgid, msgid_plural, n, category);
};
Gettext.prototype.dpgettext = function(domain, msgctxt, msgid) {
    var msgid_plural;
    var n;
    var category;
    return this.dcnpgettext(domain, msgctxt, msgid, msgid_plural, n, category);
};
Gettext.prototype.dcpgettext = function(domain, msgctxt, msgid, category) {
    var msgid_plural;
    var n;
    return this.dcnpgettext(domain, msgctxt, msgid, msgid_plural, n, category);
};
Gettext.prototype.npgettext = function(msgctxt, msgid, msgid_plural, n) {
    var category;
    return this.dcnpgettext(null, msgctxt, msgid, msgid_plural, n, category);
};
Gettext.prototype.dnpgettext = function(domain, msgctxt, msgid, msgid_plural, n) {
    var category;
    return this.dcnpgettext(domain, msgctxt, msgid, msgid_plural, n, category);
};
Gettext.prototype.dcnpgettext = function(domain, msgctxt, msgid, msgid_plural, n, category) {
    if (!this.isValidObject(msgid)) return '';
    var plural = this.isValidObject(msgid_plural);
    var msg_ctxt_id = this.isValidObject(msgctxt) ? msgctxt + Gettext.context_glue + msgid : msgid;
    var domainname = this.isValidObject(domain) ? domain : this.isValidObject(this.domain) ? this.domain : 'messages';
    var category_name = 'LC_MESSAGES';
    var category = 5;
    var locale_data = new Array();
    if (typeof(Gettext._locale_data) != 'undefined' && this.isValidObject(Gettext._locale_data[domainname])) {
        locale_data.push(Gettext._locale_data[domainname]);
    } else if (typeof(Gettext._locale_data) != 'undefined') {
        for (var dom in Gettext._locale_data) {
            locale_data.push(Gettext._locale_data[dom]);
        }
    }
    var trans = [];
    var found = false;
    var domain_used;
    if (locale_data.length) {
        for (var i = 0; i < locale_data.length; i++) {
            var locale = locale_data[i];
            if (this.isValidObject(locale.msgs[msg_ctxt_id])) {
                for (var j = 0; j < locale.msgs[msg_ctxt_id].length; j++) {
                    trans[j] = locale.msgs[msg_ctxt_id][j];
                }
                trans.shift();
                domain_used = locale;
                found = true;
                if (trans.length > 0 && trans[0].length != 0)
                    break;
            }
        }
    }
    if (trans.length == 0 || trans[0].length == 0) {
        trans = [msgid, msgid_plural];
    }
    var translation = trans[0];
    if (plural) {
        var p;
        if (found && this.isValidObject(domain_used.head.plural_func)) {
            var rv = domain_used.head.plural_func(n);
            if (!rv.plural) rv.plural = 0;
            if (!rv.nplural) rv.nplural = 0;
            if (rv.nplural <= rv.plural) rv.plural = 0;
            p = rv.plural;
        } else {
            p = (n != 1) ? 1 : 0;
        }
        if (this.isValidObject(trans[p]))
            translation = trans[p];
    }
    return translation;
};
Gettext.strargs = function(str, args) {
    if (null == args || 'undefined' == typeof(args)) {
        args = [];
    } else if (args.constructor != Array) {
        args = [args];
    }
    var newstr = "";
    while (true) {
        var i = str.indexOf('%');
        var match_n;
        if (i == -1) {
            newstr += str;
            break;
        }
        newstr += str.substr(0, i);
        if (str.substr(i, 2) == '%%') {
            newstr += '%';
            str = str.substr((i + 2));
        } else if (match_n = str.substr(i).match(/^%(\d+)/)) {
            var arg_n = parseInt(match_n[1]);
            var length_n = match_n[1].length;
            if (arg_n > 0 && args[arg_n - 1] != null && typeof(args[arg_n - 1]) != 'undefined')
                newstr += args[arg_n - 1];
            str = str.substr((i + 1 + length_n));
        } else {
            newstr += '%';
            str = str.substr((i + 1));
        }
    }
    return newstr;
}
Gettext.prototype.strargs = function(str, args) {
    return Gettext.strargs(str, args);
}
Gettext.prototype.isArray = function(thisObject) {
    return this.isValidObject(thisObject) && thisObject.constructor == Array;
};
Gettext.prototype.isValidObject = function(thisObject) {
    if (null == thisObject) {
        return false;
    } else if ('undefined' == typeof(thisObject)) {
        return false;
    } else {
        return true;
    }
};
Gettext.prototype.sjax = function(uri) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else if (navigator.userAgent.toLowerCase().indexOf('msie 5') != -1) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } else {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    if (!xmlhttp)
        throw new Error("Your browser doesn't do Ajax. Unable to support external language files.");
    xmlhttp.open('GET', uri, false);
    try {
        xmlhttp.send(null);
    } catch (e) {
        return;
    }
    var sjax_status = xmlhttp.status;
    if (sjax_status == 200 || sjax_status == 0) {
        return xmlhttp.responseText;
    } else {
        var error = xmlhttp.statusText + " (Error " + xmlhttp.status + ")";
        if (xmlhttp.responseText.length) {
            error += "\n" + xmlhttp.responseText;
        }
        alert(error);
        return;
    }
}
Gettext.prototype.JSON = function(data) {
    return eval('(' + data + ')');
};
if (typeof sprintf != 'function') {
    throw "locale_simple.js: require a javascript sprintf implementation";
}
if (typeof Gettext != 'function' || typeof Gettext.strargs != 'function') {
    throw "locale_simple.js: require Gettext.js of http://jsgettext.berlios.de/ to be loaded, included in this distribution.";
}
if (typeof locale_simple != 'undefined') {
    throw "locale_simple.js: locale_simple.js already loaded";
}
var locale_data = {};
var locale_simple = {
    curr: null,
    lang: null,
    dir: null,
    dry: 0,
    nowrite: 0,
    tds: {},
    l_dir: function(dir) {
        if (this.dir != null) {
            throw "locale_simple.js: can't switch dir";
        }
        this.dir = dir;
    },
    l_dry: function(dry, nowrite) {
        this.dry = dry;
        this.nowrite = nowrite;
    },
    l_lang: function(lang) {
        if (this.lang != null) {
            throw "locale_simple.js: can't switch language";
        }
        this.lang = lang;
    },
    ltd: function(textdomain) {
        if (!(textdomain in this.tds)) {
            this.tds[textdomain] = new Gettext({
                'domain': textdomain,
                'locale_data': locale_data
            });
        }
        this.curr = this.tds[textdomain];
        return textdomain;
    },
    wd: function(td, msgctxt, msgid, msgid_plural) {
        if (typeof console != 'object') {
            return;
        }
        if (typeof console.debug != 'function') {
            return;
        }
        if (td) {
            console.debug('# domain: ' + td)
        }
        if (msgctxt) {
            console.debug('msgctxt "' + msgctxt + '"')
        }
        if (msgid) {
            console.debug('msgid "' + msgid + '"')
        }
        if (msgid_plural) {
            console.debug('msgid_plural "' + msgid_plural + '"')
        }
        console.debug('');
    },
    l: function() {
        var A = this.argarr(arguments);
        var id = A.shift();
        var gt;
        if (this.dry) {
            gt = id;
            if (!this.nowrite) {
                this.wd(null, null, id, null);
            }
        } else {
            gt = this.curr.gettext(id);
        }
        A.unshift(gt);
        return sprintf.apply(null, A);
    },
    ln: function() {
        var A = this.argarr(arguments);
        var id = A.shift();
        var idp = A.shift();
        var n = A.shift();
        var gt;
        if (this.dry) {
            if (n != 1) {
                gt = idp;
            } else {
                gt = id;
            }
            if (!this.nowrite) {
                this.wd(null, null, id, idp);
            }
        } else {
            gt = this.curr.ngettext(id, idp, n);
        }
        A.unshift(n);
        A.unshift(gt);
        return sprintf.apply(null, A);
    },
    lp: function() {
        var A = this.argarr(arguments);
        var ctxt = A.shift();
        var id = A.shift();
        var gt;
        if (this.dry) {
            gt = id;
            if (!this.nowrite) {
                this.wd(null, ctxt, id, null);
            }
        } else {
            gt = this.curr.pgettext(ctxt, id);
        }
        A.unshift(gt);
        return sprintf.apply(null, A);
    },
    lnp: function() {
        var A = this.argarr(arguments);
        var ctxt = A.shift();
        var id = A.shift();
        var idp = A.shift();
        var n = A.shift();
        var gt;
        if (this.dry) {
            if (n != 1) {
                gt = idp;
            } else {
                gt = id;
            }
            if (!this.nowrite) {
                this.wd(null, ctxt, id, idp);
            }
        } else {
            gt = this.curr.npgettext(ctxt, id, idp, n);
        }
        A.unshift(n);
        A.unshift(gt);
        return sprintf.apply(null, A);
    },
    ld: function() {
        var A = this.argarr(arguments);
        var td = A.shift();
        var id = A.shift();
        var gt;
        if (this.dry) {
            gt = id;
            if (!this.nowrite) {
                this.wd(td, null, id, null);
            }
        } else {
            gt = this.curr.dgettext(td, id);
        }
        A.unshift(gt);
        return sprintf.apply(null, A);
    },
    ldn: function() {
        var A = this.argarr(arguments);
        var td = A.shift();
        var id = A.shift();
        var idp = A.shift();
        var n = A.shift();
        var gt;
        if (this.dry) {
            if (n != 1) {
                gt = idp;
            } else {
                gt = id;
            }
            if (!this.nowrite) {
                this.wd(td, null, id, idp);
            }
        } else {
            gt = this.curr.dngettext(td, id, idp, n);
        }
        A.unshift(n);
        A.unshift(gt);
        return sprintf.apply(null, A);
    },
    ldp: function() {
        var A = this.argarr(arguments);
        var td = A.shift();
        var ctxt = A.shift();
        var id = A.shift();
        var gt;
        if (this.dry) {
            gt = id;
            if (!this.nowrite) {
                this.wd(td, ctxt, id, null);
            }
        } else {
            gt = this.curr.dpgettext(td, ctxt, id);
        }
        A.unshift(gt);
        return sprintf.apply(null, A);
    },
    ldnp: function() {
        var A = this.argarr(arguments);
        var td = A.shift();
        var ctxt = A.shift();
        var id = A.shift();
        var idp = A.shift();
        var n = A.shift();
        var gt;
        if (this.dry) {
            if (n != 1) {
                gt = idp;
            } else {
                gt = id;
            }
            if (!this.nowrite) {
                this.wd(td, ctxt, id, idp);
            }
        } else {
            gt = this.curr.dnpgettext(td, ctxt, id, idp, n);
        }
        A.unshift(n);
        A.unshift(gt);
        return sprintf.apply(null, A);
    },
    argarr: function(args) {
        var arr = new Array();
        for (var i = 0, len = args.length; i < len; i++) {
            arr.push(args[i]);
        }
        return arr;
    }
};

function l_dry() {
    return locale_simple.l_dry.apply(locale_simple, arguments)
}

function l_dir() {
    return locale_simple.l_dir.apply(locale_simple, arguments)
}

function l_lang() {
    return locale_simple.l_lang.apply(locale_simple, arguments)
}

function ltd() {
    return locale_simple.ltd.apply(locale_simple, arguments)
}

function l() {
    return locale_simple.l.apply(locale_simple, arguments)
}

function ln() {
    return locale_simple.ln.apply(locale_simple, arguments)
}

function lp() {
    return locale_simple.lp.apply(locale_simple, arguments)
}

function lnp() {
    return locale_simple.lnp.apply(locale_simple, arguments)
}

function ld() {
    return locale_simple.ld.apply(locale_simple, arguments)
}

function ldn() {
    return locale_simple.ldn.apply(locale_simple, arguments)
}

function ldp() {
    return locale_simple.ldp.apply(locale_simple, arguments)
}

function ldnp() {
    return locale_simple.ldnp.apply(locale_simple, arguments)
};
locale_data['duckduckgo-duckduckgo'] = {
    "": {
        "Plural-Forms": " nplurals=2; plural=n != 1;",
        "MIME-Version": " 1.0",
        "POT-Creation-Date": " 2018-02-21 09:43-0500",
        "Language": " English of United States (English of United States)",
        "Last-Translator": " Community",
        "Content-Type": " text/plain; charset=UTF-8",
        "Language-Team": " DuckDuckGo Community <community@duckduckgo.com>",
        "PO-Revision-Date": " 2018-02-21 09:43-0500",
        "Project-Id-Version": " DuckDuckGo-Translation-0.000",
        "Content-Transfer-Encoding": " 8bit"
    },
    "Similar": [null, "Similar"],
    "cloudsave\u0004Push 'Delete My Data'. This removes the data from the cloud, but it remains in your browser until you click on 'Reset all settings'": [null, "Push 'Delete My Data'. This removes the data from the cloud, but it remains in your browser until you click on 'Reset all settings'"],
    "email": [null, "email"],
    "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)": [null, "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)"],
    "new user poll\u0004Welcome back!": [null, "Welcome back!"],
    "Where it says Homepage click %sSet to Current Page%s.": [null, "Where it says Homepage click %sSet to Current Page%s."],
    "image-type\u0004Animated GIF": [null, "Animated GIF"],
    "our feedback center": [null, "our feedback center"],
    "Meanings of %s": [null, "Meanings of %s"],
    "Items": [null, "Items"],
    "settingsvalue\u0004Largest": [null, "Largest"],
    "size\u0004Small": [null, "Small"],
    "Products": [null, "Products"],
    "Peru": [null, "Peru"],
    "install-duckduckgo\u0004Click %sAdd Extension%s.": [null, "Click %sAdd Extension%s."],
    "Give Feedback": [null, "Give Feedback"],
    "Send": [null, "Send"],
    "In the side menu select %sInternet Search%s": [null, "In the side menu select %sInternet Search%s"],
    "cloudsave\u0004Choose a unique pass phrase for your settings:": [null, "Choose a unique pass phrase for your settings:"],
    "Entry in %s": [null, "Entry in %s"],
    "Page %s": [null, "Page %s"],
    "Look": [null, "Look"],
    "Portugal": [null, "Portugal"],
    "Click %sHere%s to download the DuckDuckGo extension": [null, "Click %sHere%s to download the DuckDuckGo extension"],
    "Turkey": [null, "Turkey"],
    "Would you like to help develop the platform?": [null, "Would you like to help develop the platform?"],
    "newbang\u0004Site name": [null, "Site name"],
    "settings\u0004Which third party source to use for directions": [null, "Which third party source to use for directions"],
    "Hit %sReturn%s on your keyboard to %ssave DuckDuckGo to the list. %sThen click %sMake Default%s": [null, "Hit %sReturn%s on your keyboard to %ssave DuckDuckGo to the list. %sThen click %sMake Default%s"],
    "Results by %s": [null, "Results by %s"],
    "Japan": [null, "Japan"],
    "ads\u0004Report Ad": [null, "Report Ad"],
    "image-color\u0004Black and White": [null, "Black and White"],
    "Shows": [null, "Shows"],
    "settings\u0004Changes the title link font for each result": [null, "Changes the title link font for each result"],
    "access_song\u0004Get this song on:": [null, "Get this song on:"],
    "frontpage\u0004The search engine that doesn't track you.": [null, "The search engine that doesn't track you."],
    "Drag this to home toolbar button": [null, "Drag this to home toolbar button"],
    "showcase_app\u0004Get Our App & Extension": [null, "Get Our App & Extension"],
    "Viewing results from the %s for %s": [null, "Viewing results from the %s for %s"],
    "Search DuckDuckGo": [null, "Search DuckDuckGo"],
    "feedback form\u0004Your feedback really helps. Please use this box anytime to share your thoughts.": [null, "Your feedback really helps. Please use this box anytime to share your thoughts."],
    "frontpage\u0004Already a fan? %sHelp Spread DuckDuckGo!%s": [null, "Already a fan? %sHelp Spread DuckDuckGo!%s"],
    "image-type\u0004All Types": [null, "All Types"],
    "settings\u0004Show educational information on the homepage": [null, "Show educational information on the homepage"],
    "More at": [null, "More at"],
    "Thank you!": [null, "Thank you!"],
    "Search directly on %1$s%2$s%3$s by adding %4$s%5$s%6$s to your query. %7$sMore info&hellip;%8$s": [null, "Search directly on %1$s%2$s%3$s by adding %4$s%5$s%6$s to your query. %7$sMore info&hellip;%8$s"],
    "color\u0004Brown": [null, "Brown"],
    "Load Cloud Settings": [null, "Load Cloud Settings"],
    "image-layout\u0004Wide": [null, "Wide"],
    "Email": [null, "Email"],
    "homepage\u0004Already a fan? %sHelp Spread DuckDuckGo!%s": [null, "Already a fan? %sHelp Spread DuckDuckGo!%s"],
    "showcase_app\u0004Protect your data on every device.": [null, "Protect your data on every device."],
    "Hide this legend?": [null, "Hide this legend?"],
    "Zero-click Info API": [null, "Zero-click Info API"],
    "Under Search click the drop down and select %sDuckDuckGo%s": [null, "Under Search click the drop down and select %sDuckDuckGo%s"],
    "Stock": [null, "Stock"],
    "Remember my choice": [null, "Remember my choice"],
    "settings\u0004Hide pass phrase": [null, "Hide pass phrase"],
    "Clear your cookies often?": [null, "Clear your cookies often?"],
    "Click %sYes%s": [null, "Click %sYes%s"],
    "zci-product\u0004track": [null, "track"],
    "video-license\u0004YouTube Standard": [null, "YouTube Standard"],
    "new user poll\u0004New browser or computer": [null, "New browser or computer"],
    "reasons-to-use-duckduckgo\u0004We don't follow you around with ads.": [null, "We don't follow you around with ads."],
    "new user poll\u0004What led you to DuckDuckGo?": [null, "What led you to DuckDuckGo?"],
    "France": [null, "France"],
    "settings\u0004Font": [null, "Font"],
    "settings\u0004Show pass phrase": [null, "Show pass phrase"],
    "cloudsavepassphrase\u0004suggest": [null, "suggest"],
    "Looking for recent announcements?": [null, "Looking for recent announcements?"],
    "The following required fields were not filled:": [null, "The following required fields were not filled:"],
    "reasons-to-use-duckduckgo\u0004We don't store your personal information.": [null, "We don't store your personal information."],
    "theme\u0004Default": [null, "Default"],
    "cloudsave\u0004Enter a new passphrase and click \"%s\". This will save your data under your new passphrase.": [null, "Enter a new passphrase and click \"%s\". This will save your data under your new passphrase."],
    "Under %sOn startup%s, click %sOpen a specific page%s then click %sSet Pages%s.": [null, "Under %sOn startup%s, click %sOpen a specific page%s then click %sSet Pages%s."],
    "More News": [null, "More News"],
    "You're now searching with privacy!": [null, "You're now searching with privacy!"],
    "settings\u0004Page #'s": [null, "Page #'s"],
    "new user poll\u0004Upgrading to full-time user": [null, "Upgrading to full-time user"],
    "Is It Snowing?": [null, "Is It Snowing?"],
    "settings\u0004Result Highlight Color": [null, "Result Highlight Color"],
    "Want to develop an instant answer?": [null, "Want to develop an instant answer?"],
    "After it downloads, locate the extension file and double-click it to install": [null, "After it downloads, locate the extension file and double-click it to install"],
    "settings\u0004Automatically open relevant Instant Answers": [null, "Automatically open relevant Instant Answers"],
    "More explanation": [null, "More explanation"],
    "next result": [null, "next result"],
    "Links:": [null, "Links:"],
    "Click the drop down in the search box": [null, "Click the drop down in the search box"],
    "video-duration\u0004Less than 4 minutes": [null, "Less than 4 minutes"],
    "cloudsave\u0004Cloud Save FAQ": [null, "Cloud Save FAQ"],
    "Saudi Arabia": [null, "Saudi Arabia"],
    "feedback form\u0004Place(s)": [null, "Place(s)"],
    "United States (es)": [null, "United States (es)"],
    "settings\u0004Privacy Newsletter": [null, "Privacy Newsletter"],
    "new user poll\u0004We don't track you, so we could use your help telling us what convinced you to try us out today:": [null, "We don't track you, so we could use your help telling us what convinced you to try us out today:"],
    "Try: %s": [null, "Try: %s"],
    "Click add.": [null, "Click add."],
    "Detected Language": [null, "Detected Language"],
    "homepage onboarding\u0004We don’t track you in or out of private browsing mode.": [null, "We don’t track you in or out of private browsing mode."],
    "Click %sEdit > Preferences%s (on Windows) %sSeaMonkey > Preferences%s (on Mac)": [null, "Click %sEdit > Preferences%s (on Windows) %sSeaMonkey > Preferences%s (on Mac)"],
    "Light blue": [null, "Light blue"],
    "relevancy": [null, "relevancy"],
    "settings\u0004General": [null, "General"],
    "settings\u0004Show page numbers at result page breaks": [null, "Show page numbers at result page breaks"],
    "Click on the magnifying glass in the search box at the top right": [null, "Click on the magnifying glass in the search box at the top right"],
    "Word Map": [null, "Word Map"],
    "Spain (ca)": [null, "Spain (ca)"],
    "Click %sSave%s!": [null, "Click %sSave%s!"],
    "DuckDuckGo Feedback": [null, "DuckDuckGo Feedback"],
    "feedback form\u0004\"Other useful information\" means your browser and OS (e.g. \"Firefox on 64-bit Linux\"), some settings (language, region, safe search), and what kind of results we provided (including spelling suggestions and which Instant Answer we showed). We don't collect any personally identifiable information as per our %sPrivacy Policy%s.": [null, "\"Other useful information\" means your browser and OS (e.g. \"Firefox on 64-bit Linux\"), some settings (language, region, safe search), and what kind of results we provided (including spelling suggestions and which Instant Answer we showed). We don't collect any personally identifiable information as per our %sPrivacy Policy%s."],
    "reasons-to-use-duckduckgo\u0004We don't store your personal info.": [null, "We don't store your personal info."],
    "placement\u0004Left": [null, "Left"],
    "More at %s ": [null, "More at %s "],
    "Auto-load:": [null, "Auto-load:"],
    "frontpage\u0004Install %s Search Provider?": [null, "Install %s Search Provider?"],
    "%s grouped into sections": [null, "%s grouped into sections"],
    "Watch Here": [null, "Watch Here"],
    "Search domain %s": [null, "Search domain %s"],
    "safe search\u0004No explicit images": [null, "No explicit images"],
    "Spain": [null, "Spain"],
    "Quotes": [null, "Quotes"],
    "settings\u0004Preferred units of measure": [null, "Preferred units of measure"],
    "DuckDuckGo Bot": [null, "DuckDuckGo Bot"],
    "useus\u0004Use": [null, "Use"],
    "More Images": [null, "More Images"],
    "Click %sgears%s on the top right.": [null, "Click %sgears%s on the top right."],
    "settings\u0004Result Title Color": [null, "Result Title Color"],
    "Shortcuts": [null, "Shortcuts"],
    "size\u0004Larger": [null, "Larger"],
    "cloudsave\u0004Enable cloud save by entering your existing passphrase.": [null, "Enable cloud save by entering your existing passphrase."],
    "Underline:": [null, "Underline:"],
    "Barcode": [null, "Barcode"],
    "expand_text\u0004Show Less": [null, "Show Less"],
    "settings\u0004Show links to instructions for how to add DDG to your browser": [null, "Show links to instructions for how to add DDG to your browser"],
    "Try search on": [null, "Try search on"],
    "or write out the font you want": [null, "or write out the font you want"],
    "Italy": [null, "Italy"],
    "install-duckduckgo\u0004Click %sAllow%s, then %sAdd%s": [null, "Click %sAllow%s, then %sAdd%s"],
    "Scroll down and click %sView advanced settings%s": [null, "Scroll down and click %sView advanced settings%s"],
    "Remember my choice (this can be changed in %sSettings%s)": [null, "Remember my choice (this can be changed in %sSettings%s)"],
    "settings\u0004Show suggestions under the search box as you type": [null, "Show suggestions under the search box as you type"],
    "Use in %sSeaMonkey%s": [null, "Use in %sSeaMonkey%s"],
    "Get the non-JS version": [null, "Get the non-JS version"],
    "nonjsversion\u0004here": [null, "here"],
    "color\u0004Pink": [null, "Pink"],
    "Use": [null, "Use"],
    "setting\u0004Show full legend": [null, "Show full legend"],
    "This page requires %s": [null, "This page requires %s"],
    "twitter\u0004Follow %s": [null, "Follow %s"],
    "settings\u0004By default settings are stored in non-personal browser cookies (in your browser). You can use Anonymous Cloud Save to store your settings in a more permanent way (on a remote server in the cloud). No personally identifiable information will be stored in the cloud, and your pass phrase will never leave your browser.": [null, "By default settings are stored in non-personal browser cookies (in your browser). You can use Anonymous Cloud Save to store your settings in a more permanent way (on a remote server in the cloud). No personally identifiable information will be stored in the cloud, and your pass phrase will never leave your browser."],
    "What does this mean?": [null, "What does this mean?"],
    "Remember my choice (this can be changed in %s)": [null, "Remember my choice (this can be changed in %s)"],
    "Type %sDuckDuckGo%s in the first %sform field": [null, "Type %sDuckDuckGo%s in the first %sform field"],
    "questions\u0004let us know": [null, "let us know"],
    "Denmark": [null, "Denmark"],
    "Press %sMenu > Add to homescreen > Add%s!": [null, "Press %sMenu > Add to homescreen > Add%s!"],
    "cloudsave\u0004DuckDuckGo does not ever know your passphrase.": [null, "DuckDuckGo does not ever know your passphrase."],
    "reasons-to-use-duckduckgo\u0004Keep your search history private.": [null, "Keep your search history private."],
    "mobile homepage banner\u0004Select %sSettings%s, then %sSearch Engine%s": [null, "Select %sSettings%s, then %sSearch Engine%s"],
    "In the menu at the top select %sTools%s > %sSettings%s": [null, "In the menu at the top select %sTools%s > %sSettings%s"],
    "Feel free to adjust the settings below. Then, just copy and paste the code into your website.": [null, "Feel free to adjust the settings below. Then, just copy and paste the code into your website."],
    "settingsvalue\u0004Off except Instant Answer menu": [null, "Off except Instant Answer menu"],
    "I'd like to submit a new !bang or report a broken !bang.": [null, "I'd like to submit a new !bang or report a broken !bang."],
    "homepage onboarding\u0004Switch to DuckDuckGo and take back your privacy!": [null, "Switch to DuckDuckGo and take back your privacy!"],
    "settings\u0004Show Web of Trust icons for each result": [null, "Show Web of Trust icons for each result"],
    "Top %d Best Websites of %d.": [null, "Top %d Best Websites of %d."],
    "Cancel": [null, "Cancel"],
    "Or try %s": [null, "Or try %s"],
    "Add DuckDuckGo to %s": [null, "Add DuckDuckGo to %s"],
    "settings\u0004Result URL Color": [null, "Result URL Color"],
    "Look & Feel Settings": [null, "Look & Feel Settings"],
    "color\u0004Red": [null, "Red"],
    "settings\u0004Result URLs above snippet": [null, "Result URLs above snippet"],
    "Distinguishes itself with a %s policy": [null, "Distinguishes itself with a %s policy"],
    "Argentina": [null, "Argentina"],
    "Yes": [null, "Yes"],
    "Help Spread DuckDuckGo!": [null, "Help Spread DuckDuckGo!"],
    "(see the %s page for detailed descriptions)": [null, "(see the %s page for detailed descriptions)"],
    "Privacy, simplified.": [null, "Privacy, simplified."],
    "new user poll\u0004Online article": [null, "Online article"],
    "%s is a phone number in %s": [null, "%s is a phone number in %s"],
    "setting\u0004On but no numbers": [null, "On but no numbers"],
    "cloudsave\u0004We save the settings file on Amazon S3 using the generated key as the name.": [null, "We save the settings file on Amazon S3 using the generated key as the name."],
    "Preview": [null, "Preview"],
    "HTTPS:": [null, "HTTPS:"],
    "Places": [null, "Places"],
    "No": [null, "No"],
    "Fill in the last form field with %s": [null, "Fill in the last form field with %s"],
    "settingsvalue\u0004Strict": [null, "Strict"],
    "Games": [null, "Games"],
    "settings\u0004This will erase all settings. Continue?": [null, "This will erase all settings. Continue?"],
    "No results.": [null, "No results."],
    "Disable": [null, "Disable"],
    "settings\u0004ATB Banner and Badge dismiss date": [null, "ATB Banner and Badge dismiss date"],
    "Recent Articles": [null, "Recent Articles"],
    "image-type\u0004Clipart": [null, "Clipart"],
    "This page requires Javascript to function.": [null, "This page requires Javascript to function."],
    "homepage ATB modal\u0004At DuckDuckGo, we agree.": [null, "At DuckDuckGo, we agree."],
    "video-duration\u0004More than 20 minutes": [null, "More than 20 minutes"],
    "album": [null, "album"],
    "Press? %s.": [null, "Press? %s."],
    "Other Settings": [null, "Other Settings"],
    "Click the arrow to the right of the %shome icon%s": [null, "Click the arrow to the right of the %shome icon%s"],
    "settings\u0004Results Appearance": [null, "Results Appearance"],
    "Get Web links": [null, "Get Web links"],
    "find files": [null, "find files"],
    "Safe Search:": [null, "Safe Search:"],
    "Bulgaria": [null, "Bulgaria"],
    "theme\u0004Basic": [null, "Basic"],
    "Black": [null, "Black"],
    "Thailand": [null, "Thailand"],
    "Open %sMenu > Settings > Search %s and select DuckDuckGo!": [null, "Open %sMenu > Settings > Search %s and select DuckDuckGo!"],
    "Beta": [null, "Beta"],
    "Singapore": [null, "Singapore"],
    "settings\u0004Keyboard Shortcuts": [null, "Keyboard Shortcuts"],
    "Intense red": [null, "Intense red"],
    "Don't see DuckDuckGo in the list?": [null, "Don't see DuckDuckGo in the list?"],
    "Ads via %s": [null, "Ads via %s"],
    "cloudsave\u0004The benefit of this over using the URL parameters bookmarklet is that when you change settings, they will automatically be saved in the cloud.": [null, "The benefit of this over using the URL parameters bookmarklet is that when you change settings, they will automatically be saved in the cloud."],
    "shortbelieve\u0004no tracking": [null, "no tracking"],
    "Enter your pass phrase to load your settings from the cloud.": [null, "Enter your pass phrase to load your settings from the cloud."],
    "Install DDG Search Extension?": [null, "Install DDG Search Extension?"],
    "For region-centric results": [null, "For region-centric results"],
    "frontpage\u0004Set DuckDuckGo as your Homepage?": [null, "Set DuckDuckGo as your Homepage?"],
    "cloudsave\u0004In the interest of transparency, this data is not encrypted: you can see exactly what information we store.": [null, "In the interest of transparency, this data is not encrypted: you can see exactly what information we store."],
    "hackus\u0004%s us.": [null, "%s us."],
    "no search": [null, "no search"],
    "showcase_privacy\u0004Get Privacy Tips": [null, "Get Privacy Tips"],
    "schwag": [null, "schwag"],
    "Search Options": [null, "Search Options"],
    "install-extension\u0004Don't see it? %s%s%sClick here to re-download%s": [null, "Don't see it? %s%s%sClick here to re-download%s"],
    "Add DuckDuckGo": [null, "Add DuckDuckGo"],
    "shortbelieve\u0004Goodies": [null, "Goodies"],
    "Safe search filtered your search to %s": [null, "Safe search filtered your search to %s"],
    "size\u0004Extra Large": [null, "Extra Large"],
    "settings\u0004Safe Search": [null, "Safe Search"],
    "All": [null, "All"],
    "All Settings": [null, "All Settings"],
    "If you do too, the best help is to set up your friends and family with DuckDuckGo for a week:": [null, "If you do too, the best help is to set up your friends and family with DuckDuckGo for a week:"],
    "setting\u0004Just hide \"%s\"": [null, "Just hide \"%s\""],
    "temporarily": [null, "temporarily"],
    "Take back your privacy!": [null, "Take back your privacy!"],
    "Supporter? %s.": [null, "Supporter? %s."],
    "Make sure to check %s\"Make this my default search provider\"%s": [null, "Make sure to check %s\"Make this my default search provider\"%s"],
    "DuckDuckGo Instant Answer API": [null, "DuckDuckGo Instant Answer API"],
    "webelieve\u0004real privacy": [null, "real privacy"],
    "settingsvalue\u0004Open on third-party site": [null, "Open on third-party site"],
    "Help Pages": [null, "Help Pages"],
    "webelieve\u0004no tracking": [null, "no tracking"],
    "Add a %s search box to your site!": [null, "Add a %s search box to your site!"],
    "Click the magnifying glass again.": [null, "Click the magnifying glass again."],
    "maps_places\u0004Phone": [null, "Phone"],
    "Purple": [null, "Purple"],
    "feedback form\u0004Settings": [null, "Settings"],
    "Ignore this box please": [null, "Ignore this box please"],
    "Use in %sOpera%s": [null, "Use in %sOpera%s"],
    "bangcat\u0004Online Services": [null, "Online Services"],
    "settings\u0004Image safe search": [null, "Image safe search"],
    "Ireland": [null, "Ireland"],
    "Dictionary": [null, "Dictionary"],
    "uk region": [null, "uk region"],
    "settings\u0004Custom": [null, "Custom"],
    "Images": [null, "Images"],
    "You now have the tools you need to control your online footprint and take back your privacy!": [null, "You now have the tools you need to control your online footprint and take back your privacy!"],
    "settings\u0004Enter your pass phrase to load your settings:": [null, "Enter your pass phrase to load your settings:"],
    "feedback form\u0004Other": [null, "Other"],
    "settings\u0004Save Cloud Settings": [null, "Save Cloud Settings"],
    "Blue": [null, "Blue"],
    "Yesterday": [null, "Yesterday"],
    "Click %sOpen%s to download and open the DuckDuckGo Safari extension": [null, "Click %sOpen%s to download and open the DuckDuckGo Safari extension"],
    "showcase_privacy\u0004Find useful privacy advice on our blog.": [null, "Find useful privacy advice on our blog."],
    "Web links": [null, "Web links"],
    "homepage onboarding\u0004We don’t follow you around with ads.": [null, "We don’t follow you around with ads."],
    "Maps": [null, "Maps"],
    "disambiguation": [null, "disambiguation"],
    "settings\u0004Homepage Illustrations": [null, "Homepage Illustrations"],
    "cloudsave\u0004How does it work?": [null, "How does it work?"],
    "Any Time": [null, "Any Time"],
    "Switzerland (fr)": [null, "Switzerland (fr)"],
    "Your settings as a cloud save bookmarklet:": [null, "Your settings as a cloud save bookmarklet:"],
    "dropdown": [null, "dropdown"],
    "open_in_third_party_app\u0004Open in %s": [null, "Open in %s"],
    "settings\u0004Change the background color across the entire site": [null, "Change the background color across the entire site"],
    "Use DuckDuckGo for Firefox search?": [null, "Use DuckDuckGo for Firefox search?"],
    "Region Setting": [null, "Region Setting"],
    "Regular search box": [null, "Regular search box"],
    "Shortcuts:": [null, "Shortcuts:"],
    "Poland": [null, "Poland"],
    "size\u0004Medium": [null, "Medium"],
    "Searching for info on our XMPP chat service?": [null, "Searching for info on our XMPP chat service?"],
    "Off-white": [null, "Off-white"],
    "See Photos": [null, "See Photos"],
    "Answer": [null, "Answer"],
    "cloudsave\u0004This has a few benefits:": [null, "This has a few benefits:"],
    "Use in %sIE%s": [null, "Use in %sIE%s"],
    "Enter the following details: %sName%s: DuckDuckGo%s URL%s: %s Alias%s: d%s": [null, "Enter the following details: %sName%s: DuckDuckGo%s URL%s: %s Alias%s: d%s"],
    "Click %sHere%s to add us as a search engine": [null, "Click %sHere%s to add us as a search engine"],
    "settings\u0004If you still want to support us, %shelp spread DuckDuckGo%s": [null, "If you still want to support us, %shelp spread DuckDuckGo%s"],
    "OK": [null, "OK"],
    "United Kingdom": [null, "United Kingdom"],
    "Lithuania": [null, "Lithuania"],
    "settings\u0004Changes the font across the entire site": [null, "Changes the font across the entire site"],
    "Install DuckDuckGo Homepage?": [null, "Install DuckDuckGo Homepage?"],
    "cloudsave\u0004We cannot reverse the passphrase key generation.": [null, "We cannot reverse the passphrase key generation."],
    "feedback form\u0004Web Links": [null, "Web Links"],
    "settings\u0004Background Color": [null, "Background Color"],
    "new user poll\u0004Your response is 100% anonymous.": [null, "Your response is 100% anonymous."],
    "Spread": [null, "Spread"],
    "settings\u0004Enables keyboard shortcuts on the site": [null, "Enables keyboard shortcuts on the site"],
    "Selected %sDuckDuckGo%s": [null, "Selected %sDuckDuckGo%s"],
    "Keep your search history private and minimize ad targeting.": [null, "Keep your search history private and minimize ad targeting."],
    "safe search\u0004Moderate": [null, "Moderate"],
    "Click the %sGeneral%s tab.": [null, "Click the %sGeneral%s tab."],
    "video-resolution\u0004Any Resolution": [null, "Any Resolution"],
    "Click the drop down arrow in the search box (at the top of the browser)": [null, "Click the drop down arrow in the search box (at the top of the browser)"],
    "If you want, select Home Page next to New windows and New tabs (open with).": [null, "If you want, select Home Page next to New windows and New tabs (open with)."],
    "settings\u0004Browser Instructions": [null, "Browser Instructions"],
    "Viewing results from the %s.": [null, "Viewing results from the %s."],
    "link to the site": [null, "link to the site"],
    "Sponsored link": [null, "Sponsored link"],
    "Comments": [null, "Comments"],
    "feedback form\u0004What could be better about these results?": [null, "What could be better about these results?"],
    "frontpage\u0004Take a tour.": [null, "Take a tour."],
    "mobile promotion on desktop\u0004OK, got it!": [null, "OK, got it!"],
    "News Articles": [null, "News Articles"],
    "Showing results excluding": [null, "Showing results excluding"],
    "Help? Check out %s.": [null, "Help? Check out %s."],
    "All Results": [null, "All Results"],
    "feedback form\u0004It's okay to send my search term and other useful information.": [null, "It's okay to send my search term and other useful information."],
    "cloudsave\u0004Please enter a pass phrase": [null, "Please enter a pass phrase"],
    "Packages": [null, "Packages"],
    "Click the %ssettings/hamburger icon %s on the Chrome toolbar (top right)": [null, "Click the %ssettings/hamburger icon %s on the Chrome toolbar (top right)"],
    "image-type\u0004Transparent": [null, "Transparent"],
    "URL Params": [null, "URL Params"],
    "Add-ons": [null, "Add-ons"],
    "DuckDuckGo Zero-click Info API": [null, "DuckDuckGo Zero-click Info API"],
    "Could DuckDuckGo Be The Biggest Long-Term Threat To Google?": [null, "Could DuckDuckGo Be The Biggest Long-Term Threat To Google?"],
    "video-duration\u0004Between 4 and 20 minutes": [null, "Between 4 and 20 minutes"],
    "Click %sSafari%s in the top menu (On Windows, click the %sgears icon%s in the top right)": [null, "Click %sSafari%s in the top menu (On Windows, click the %sgears icon%s in the top right)"],
    "Start searching!": [null, "Start searching!"],
    "Software": [null, "Software"],
    "Extensions & More": [null, "Extensions & More"],
    "homepage\u0004New to DuckDuckGo? %sTake a Tour.%s": [null, "New to DuckDuckGo? %sTake a Tour.%s"],
    "book": [null, "book"],
    "Ad": [null, "Ad"],
    "theme\u0004Contrast": [null, "Contrast"],
    "Select DuckDuckGo from the drop down.": [null, "Select DuckDuckGo from the drop down."],
    "Sweden": [null, "Sweden"],
    "We believe in better search and real privacy at the same time. That's why:": [null, "We believe in better search and real privacy at the same time. That's why:"],
    "feedback form\u0004Maps / Location Info": [null, "Maps / Location Info"],
    "Parts": [null, "Parts"],
    "cloudsave\u0004You can share your settings among computers and browsers.": [null, "You can share your settings among computers and browsers."],
    "image-type\u0004Photograph": [null, "Photograph"],
    "settings\u0004Language": [null, "Language"],
    "%s blocked by safe search.": [null, "%s blocked by safe search."],
    "settings\u0004ATB badge dismiss date": [null, "ATB badge dismiss date"],
    "South Africa": [null, "South Africa"],
    "image-layout\u0004Square": [null, "Square"],
    "cloudsave\u0004Reset All Settings": [null, "Reset All Settings"],
    "Special": [null, "Special"],
    "settings\u0004Enter a pass phrase": [null, "Enter a pass phrase"],
    "Computed by %s": [null, "Computed by %s"],
    "Loading...": [null, "Loading..."],
    "Version": [null, "Version"],
    "within title": [null, "within title"],
    "safe search\u0004Don't filter adult content": [null, "Don't filter adult content"],
    "Game ended": [null, "Game ended"],
    "See also": [null, "See also"],
    "Click %sAdd%s": [null, "Click %sAdd%s"],
    "cloudsave\u0004We don't associate your IP address or browser fingerprint or any other information with the file.": [null, "We don't associate your IP address or browser fingerprint or any other information with the file."],
    "mobile homepage banner\u0004Open %sSettings%s": [null, "Open %sSettings%s"],
    "Duck it": [null, "Duck it"],
    "cloudsave\u0004Enable cloud save by enter your existing passphrase.": [null, "Enable cloud save by enter your existing passphrase."],
    "Switch to the search engine that doesn't track you. Ever.": [null, "Switch to the search engine that doesn't track you. Ever."],
    "related topics": [null, "related topics"],
    "settings\u0004Directions Source": [null, "Directions Source"],
    "Click %sSettings%s": [null, "Click %sSettings%s"],
    "Drag %sThis Button%s on top of the home icon:": [null, "Drag %sThis Button%s on top of the home icon:"],
    "More DuckDuckGo?": [null, "More DuckDuckGo?"],
    "frontpage\u0004%sLearn More%s.": [null, "%sLearn More%s."],
    "Netherlands": [null, "Netherlands"],
    "Brazil": [null, "Brazil"],
    "video-duration\u0004Short": [null, "Short"],
    "Reset all settings to defaults": [null, "Reset all settings to defaults"],
    "Showing results from %s": [null, "Showing results from %s"],
    "homepage onboarding\u0004Install DuckDuckGo": [null, "Install DuckDuckGo"],
    "new user poll\u0004Yes, new user!": [null, "Yes, new user!"],
    "new user poll\u0004What brought you back today?": [null, "What brought you back today?"],
    "settings\u0004Center Alignment": [null, "Center Alignment"],
    "Use in Safari": [null, "Use in Safari"],
    "settings\u0004Omits objectionable (mostly adult) material": [null, "Omits objectionable (mostly adult) material"],
    "new user poll\u0004New to DuckDuckGo?": [null, "New to DuckDuckGo?"],
    "Did you mean %s?": [null, "Did you mean %s?"],
    "%s shipment tracking": [null, "%s shipment tracking"],
    "newbang\u0004If you'd like to add or edit a %s, please %s!": [null, "If you'd like to add or edit a %s, please %s!"],
    "settingsvalue\u0004US based (Pounds, Feet, Fahrenheit)": [null, "US based (Pounds, Feet, Fahrenheit)"],
    "frontpage\u0004Take a Tour": [null, "Take a Tour"],
    "maps_places\u0004Phone Number": [null, "Phone Number"],
    "settings\u0004Show horizontal lines at result page breaks": [null, "Show horizontal lines at result page breaks"],
    "setting\u0004Just hide legend": [null, "Just hide legend"],
    "Holiday": [null, "Holiday"],
    "settings\u0004ATB Dismiss": [null, "ATB Dismiss"],
    "Please choose a color:": [null, "Please choose a color:"],
    "Menu": [null, "Menu"],
    "newbang\u0004Bang url": [null, "Bang url"],
    "Indonesia (en)": [null, "Indonesia (en)"],
    "Click on the %sellipsis icon%s in the toolbar": [null, "Click on the %sellipsis icon%s in the toolbar"],
    "General": [null, "General"],
    "of course": [null, "of course"],
    "Vietnam": [null, "Vietnam"],
    "Interface Settings": [null, "Interface Settings"],
    "wedontbubbleyou\u0004We don't %s you.": [null, "We don't %s you."],
    "Showing results without %s.": [null, "Showing results without %s."],
    "More meanings": [null, "More meanings"],
    "video-duration\u0004Medium": [null, "Medium"],
    "More ways to add DuckDuckGo to Safari": [null, "More ways to add DuckDuckGo to Safari"],
    "setting\u0004default": [null, "default"],
    "Romania": [null, "Romania"],
    "Search only for %s?": [null, "Search only for %s?"],
    "Share on %s": [null, "Share on %s"],
    "Greece": [null, "Greece"],
    "In the popup, check %sMake this my default search provider%s": [null, "In the popup, check %sMake this my default search provider%s"],
    "Select %sDuckDuckGo%s in the Default Search Engine drop down": [null, "Select %sDuckDuckGo%s in the Default Search Engine drop down"],
    "Select %sUse this webpage as your only home page%s (or one of the other options if you prefer)": [null, "Select %sUse this webpage as your only home page%s (or one of the other options if you prefer)"],
    "searchbox\u0004DuckDuckGo is a search engine that protects privacy and has lots of features.": [null, "DuckDuckGo is a search engine that protects privacy and has lots of features."],
    "settings\u0004Homepage Privacy Tips": [null, "Homepage Privacy Tips"],
    "Chile": [null, "Chile"],
    "Intense green": [null, "Intense green"],
    "showcase_bangs\u0004Learn about Bangs": [null, "Learn about Bangs"],
    "homepage onboarding\u0004Switch to DuckDuckGo": [null, "Switch to DuckDuckGo"],
    "settings\u0004GET requests": [null, "GET requests"],
    "A string to identify the source.": [null, "A string to identify the source."],
    "Canada (fr)": [null, "Canada (fr)"],
    "Movies": [null, "Movies"],
    "Use in %sPaleMoon%s": [null, "Use in %sPaleMoon%s"],
    "Visited links:": [null, "Visited links:"],
    "Find DuckDuckGo in the displayed list and click %sMake Default%s.": [null, "Find DuckDuckGo in the displayed list and click %sMake Default%s."],
    "Appearance": [null, "Appearance"],
    "maps_places\u0004Get directions": [null, "Get directions"],
    "cloudsave\u0004Cloud Save": [null, "Cloud Save"],
    "Malaysia": [null, "Malaysia"],
    "TV": [null, "TV"],
    "go": [null, "go"],
    "feedback form\u0004Ad is suspicious": [null, "Ad is suspicious"],
    "Grid mode disabled for this answer": [null, "Grid mode disabled for this answer"],
    "new user poll\u0004Radio or podcast": [null, "Radio or podcast"],
    "Select %sDuckDuckGo%s under the%sDefault Search Engine%s section": [null, "Select %sDuckDuckGo%s under the%sDefault Search Engine%s section"],
    "vehicle info": [null, "vehicle info"],
    "We'd also love to know how you heard about us.": [null, "We'd also love to know how you heard about us."],
    "homepage onboarding\u0004Already a fan?": [null, "Already a fan?"],
    "video-license\u0004Any License": [null, "Any License"],
    "cloudsave\u0004Push \"%s\". This removes the data from the cloud, but it remains in your browser until you click on \"%s\".": [null, "Push \"%s\". This removes the data from the cloud, but it remains in your browser until you click on \"%s\"."],
    "settings\u0004Privacy": [null, "Privacy"],
    "showcase_aria_label\u0004Check out the list of things that we've also made.": [null, "Check out the list of things that we've also made."],
    "Hong Kong": [null, "Hong Kong"],
    "%sDrag this to %s (home) toolbar button%s": [null, "%sDrag this to %s (home) toolbar button%s"],
    "DuckDuckGo URL Parameters": [null, "DuckDuckGo URL Parameters"],
    "Sorry, we can't offer any translation for this page. It is shown here in '%s'.": [null, "Sorry, we can't offer any translation for this page. It is shown here in '%s'."],
    "showcase_traffic\u0004Over 15 Billion anonymous searches.": [null, "Over 15 Billion anonymous searches."],
    "App": [null, "App"],
    "settings\u0004Changes the language across the entire site": [null, "Changes the language across the entire site"],
    "theme\u0004Terminal": [null, "Terminal"],
    "click here": [null, "click here"],
    "Offers": [null, "Offers"],
    "Border:": [null, "Border:"],
    "settings\u0004Homepage Education": [null, "Homepage Education"],
    "settings\u0004Theme": [null, "Theme"],
    "settingsvalue\u0004Large": [null, "Large"],
    "settings\u0004Result Title Underline": [null, "Result Title Underline"],
    "Don't see the checkbox? %sFollow these steps%s.": [null, "Don't see the checkbox? %sFollow these steps%s."],
    "Unicode": [null, "Unicode"],
    "cloudsave\u0004The cloud save bookmarklet is a URL that automatically enables cloud save.": [null, "The cloud save bookmarklet is a URL that automatically enables cloud save."],
    "settings\u0004Page Break Lines": [null, "Page Break Lines"],
    "Click %sAdd%s button above to add DuckDuckGo.": [null, "Click %sAdd%s button above to add DuckDuckGo."],
    "0-click box:": [null, "0-click box:"],
    "settings\u0004Changes what happens when you click on a video thumbnail": [null, "Changes what happens when you click on a video thumbnail"],
    "settings\u0004ATB related (not displayed on settings page)": [null, "ATB related (not displayed on settings page)"],
    "design": [null, "design"],
    "feedback form\u0004Advertisements": [null, "Advertisements"],
    "Related Topics": [null, "Related Topics"],
    "Go": [null, "Go"],
    "video-duration\u0004Show videos of any length": [null, "Show videos of any length"],
    "cloudsave\u0004Your passphrase is used to generate a key using the Secure Hash Algorithm known as %s, using a %s bit key.": [null, "Your passphrase is used to generate a key using the Secure Hash Algorithm known as %s, using a %s bit key."],
    "Clear All": [null, "Clear All"],
    "Check the Help pages and the Forum, then use this guide.:": [null, "Check the Help pages and the Forum, then use this guide.:"],
    "Slovakia": [null, "Slovakia"],
    "Under On startup select %sOpen a specific page or set of pages%s": [null, "Under On startup select %sOpen a specific page or set of pages%s"],
    "Try %s": [null, "Try %s"],
    "Use DuckDuckGo for PaleMoon search?": [null, "Use DuckDuckGo for PaleMoon search?"],
    "attribution\u0004This instant answer was made by the %sDuckDuckHack%s Community.": [null, "This instant answer was made by the %sDuckDuckHack%s Community."],
    "donttrackus\u0004track": [null, "track"],
    "color\u0004Yellow": [null, "Yellow"],
    "moreinfo\u0004this help page": [null, "this help page"],
    "Meanings (disambig):": [null, "Meanings (disambig):"],
    "settings\u0004HTTPS": [null, "HTTPS"],
    "Find DuckDuckGo in the displayed list and click %sMake Default%s": [null, "Find DuckDuckGo in the displayed list and click %sMake Default%s"],
    "homepage onboarding\u0004Back to search": [null, "Back to search"],
    "Under %sOn startup%s, select %sHomepage%s and enter: https://duckduckgo.com": [null, "Under %sOn startup%s, select %sHomepage%s and enter: https://duckduckgo.com"],
    "settings\u0004Reset All Settings": [null, "Reset All Settings"],
    "Select %sDuckDuckGo%s in the list of search providers": [null, "Select %sDuckDuckGo%s in the list of search providers"],
    "settings\u0004Changes the background color when hovering over a result": [null, "Changes the background color when hovering over a result"],
    "Most big sites work, e.g. %s (see full list below)": [null, "Most big sites work, e.g. %s (see full list below)"],
    "Placement:": [null, "Placement:"],
    "Redirect:": [null, "Redirect:"],
    "Encrypt Connections": [null, "Encrypt Connections"],
    "Show all results": [null, "Show all results"],
    "More ways to add DuckDuckGo to %s": [null, "More ways to add DuckDuckGo to %s"],
    "newsletter email collection\u0004Your email address will not be shared, %sor associated with anonymous searches. [%sExample%s]": [null, "Your email address will not be shared, %sor associated with anonymous searches. [%sExample%s]"],
    "Query Details:": [null, "Query Details:"],
    "Did you mean": [null, "Did you mean"],
    "Warning! Site could be harmful.": [null, "Warning! Site could be harmful."],
    "feedback form\u0004Wikipedia Info": [null, "Wikipedia Info"],
    "by %s": [null, "by %s"],
    "frontpage\u0004Search %s.": [null, "Search %s."],
    "feedback form\u0004Select": [null, "Select"],
    "Bang command, e.g. %s (usually is domain name, e.g. %s)": [null, "Bang command, e.g. %s (usually is domain name, e.g. %s)"],
    "Search ideas": [null, "Search ideas"],
    "Today": [null, "Today"],
    "settings\u0004Settings in JSON:": [null, "Settings in JSON:"],
    "Enter %shttps://duckduckgo.com%s": [null, "Enter %shttps://duckduckgo.com%s"],
    "Today:": [null, "Today:"],
    "%s for %s": [null, "%s for %s"],
    "Belgium (nl)": [null, "Belgium (nl)"],
    "Flights": [null, "Flights"],
    "attribution\u0004Developer": [null, "Developer"],
    "settingsvalue\u0004Wide": [null, "Wide"],
    "settings\u0004Show occasional reminders to add DuckDuckGo to your browser": [null, "Show occasional reminders to add DuckDuckGo to your browser"],
    "New Zealand": [null, "New Zealand"],
    "snippet text": [null, "snippet text"],
    "Contact Us": [null, "Contact Us"],
    "showcase_donations\u0004Over $700,000 in privacy donations!": [null, "Over $700,000 in privacy donations!"],
    "Closed": [null, "Closed"],
    "Your settings as a URL parameter bookmarklet:": [null, "Your settings as a URL parameter bookmarklet:"],
    "Monthly newsletter:": [null, "Monthly newsletter:"],
    "Catalonia": [null, "Catalonia"],
    "Search": [null, "Search"],
    "Address bar:": [null, "Address bar:"],
    "Select %sCustom%s and enter %shttps://duckduckgo.com%s in the input field": [null, "Select %sCustom%s and enter %shttps://duckduckgo.com%s in the input field"],
    "Use DuckDuckGo for search in your browser?": [null, "Use DuckDuckGo for search in your browser?"],
    "Run a bang search on %1$s%2$s%3$s by adding %4$s%5$s%6$s to your query. %7$sMore info&hellip;%8$s": [null, "Run a bang search on %1$s%2$s%3$s by adding %4$s%5$s%6$s to your query. %7$sMore info&hellip;%8$s"],
    "Try DuckDuckGo for a week!": [null, "Try DuckDuckGo for a week!"],
    "To introduce people to DuckDuckGo, you can use:": [null, "To introduce people to DuckDuckGo, you can use:"],
    "Technical": [null, "Technical"],
    "frontpage\u0004Learn": [null, "Learn"],
    "New %s suggestions?": [null, "New %s suggestions?"],
    "YouTube (owned by Google) does not let you watch videos anonymously. As such, watching YouTube videos here will be tracked by YouTube/Google.": [null, "YouTube (owned by Google) does not let you watch videos anonymously. As such, watching YouTube videos here will be tracked by YouTube/Google."],
    "width\u0004Normal": [null, "Normal"],
    "Result Settings": [null, "Result Settings"],
    "permanently": [null, "permanently"],
    "setting\u0004Show Bookmarklet and Settings Data": [null, "Show Bookmarklet and Settings Data"],
    "reasons-to-use-duckduckgo\u0004We don't track you, including private browsing mode.": [null, "We don't track you, including private browsing mode."],
    "size\u0004Largest": [null, "Largest"],
    "Select %sSettings%s from the drop-down menu.": [null, "Select %sSettings%s from the drop-down menu."],
    "settings\u0004Show occasional reminders to sign up for the DuckDuckGo privacy newsletter": [null, "Show occasional reminders to sign up for the DuckDuckGo privacy newsletter"],
    "frontpage\u0004anonymously": [null, "anonymously"],
    "Just use this dropdown next to the search box. As you use it, your most frequented sites will automatically be displayed at the top.": [null, "Just use this dropdown next to the search box. As you use it, your most frequented sites will automatically be displayed at the top."],
    "Color Settings": [null, "Color Settings"],
    "Click %s+%s!": [null, "Click %s+%s!"],
    "Choose Subcategory": [null, "Choose Subcategory"],
    "Email:": [null, "Email:"],
    "Take Back Your Privacy!": [null, "Take Back Your Privacy!"],
    "visible\u0004Showing %s": [null, "Showing %s"],
    "maps_places\u0004Hours": [null, "Hours"],
    "News": [null, "News"],
    "settingsvalue\u0004No Preference (Default)": [null, "No Preference (Default)"],
    "settings\u0004Search queries are included in URL (if off, searches will use POST requests)": [null, "Search queries are included in URL (if off, searches will use POST requests)"],
    "settings\u0004Advertisements": [null, "Advertisements"],
    "Show pass phrase": [null, "Show pass phrase"],
    "No Tracking. Ever.": [null, "No Tracking. Ever."],
    "bangsyntax\u0004Try: %s": [null, "Try: %s"],
    "settings\u0004Cookie Data:": [null, "Cookie Data:"],
    "We have included %s.": [null, "We have included %s."],
    "Click the %s...%s icon at the top right:": [null, "Click the %s...%s icon at the top right:"],
    "View on %s": [null, "View on %s"],
    "Definition": [null, "Definition"],
    "See more photos of %s": [null, "See more photos of %s"],
    "Use in %sArora%s": [null, "Use in %sArora%s"],
    "translateus\u0004%s us.": [null, "%s us."],
    "settingsvalue\u0004Off": [null, "Off"],
    "search amazon": [null, "search amazon"],
    "mobile promotion on desktop\u0004Also search privately on your iPad, iPhone, or Android!": [null, "Also search privately on your iPad, iPhone, or Android!"],
    "random password": [null, "random password"],
    "homepage onboarding\u0004No tracking, no ad targeting, just searching.": [null, "No tracking, no ad targeting, just searching."],
    "settings\u0004This will reset your saved settings to default values. Continue?": [null, "This will reset your saved settings to default values. Continue?"],
    "Economy and Finance": [null, "Economy and Finance"],
    "Click the magnifying glass in the search box (at the top of the browser)": [null, "Click the magnifying glass in the search box (at the top of the browser)"],
    "settings\u0004Suggest different phrase": [null, "Suggest different phrase"],
    "cloudsave\u0004Is deleted data really deleted?": [null, "Is deleted data really deleted?"],
    "Set DuckDuckGo as your start page?": [null, "Set DuckDuckGo as your start page?"],
    "cloudsave\u0004Pass phrase not found": [null, "Pass phrase not found"],
    "settings\u0004Save": [null, "Save"],
    "More results": [null, "More results"],
    "%sOK%s": [null, "%sOK%s"],
    "Load/Reset": [null, "Load/Reset"],
    "maps_places\u0004Choose service": [null, "Choose service"],
    "Follow %s on Twitter": [null, "Follow %s on Twitter"],
    "Try": [null, "Try"],
    "Click on %sSettings%s in the dropdown": [null, "Click on %sSettings%s in the dropdown"],
    "More from": [null, "More from"],
    "Default": [null, "Default"],
    "settings\u0004Save your settings anonymously to the cloud": [null, "Save your settings anonymously to the cloud"],
    "Site has good reputation.": [null, "Site has good reputation."],
    "advertising": [null, "advertising"],
    "first result": [null, "first result"],
    "Slovenia": [null, "Slovenia"],
    "Related Topics:": [null, "Related Topics:"],
    "India": [null, "India"],
    "oneofmanyspread\u0004support DuckDuckGo": [null, "support DuckDuckGo"],
    "search too long": [null, "search too long"],
    "Get App": [null, "Get App"],
    "video-license\u0004Creative Commons": [null, "Creative Commons"],
    "Taiwan": [null, "Taiwan"],
    "Library": [null, "Library"],
    "Favicons:": [null, "Favicons:"],
    "wedontbubbleyou\u0004filter bubble": [null, "filter bubble"],
    "More ways to add DuckDuckGo to IE": [null, "More ways to add DuckDuckGo to IE"],
    "width\u0004Wide": [null, "Wide"],
    "safe search\u0004No adult content": [null, "No adult content"],
    "Download file": [null, "Download file"],
    "More ways to add DuckDuckGo to Maxthon": [null, "More ways to add DuckDuckGo to Maxthon"],
    "In partnership with": [null, "In partnership with"],
    "oneofmanyspread\u0004spread DuckDuckGo": [null, "spread DuckDuckGo"],
    "Your browser cookies:": [null, "Your browser cookies:"],
    "settings\u0004Auto-Suggest": [null, "Auto-Suggest"],
    "new user poll\u0004We're honored to have you on the Duck Side": [null, "We're honored to have you on the Duck Side"],
    "Click the %s icon in the top toolbar": [null, "Click the %s icon in the top toolbar"],
    "Perhaps you've heard about us in %s": [null, "Perhaps you've heard about us in %s"],
    "%s is in %s": [null, "%s is in %s"],
    "homepage onboarding\u0004Thank you.": [null, "Thank you."],
    "settingsvalue\u0004Prompt me": [null, "Prompt me"],
    "Community Platform": [null, "Community Platform"],
    "By category": [null, "By category"],
    "URL Parameters": [null, "URL Parameters"],
    "Save": [null, "Save"],
    "feedback form\u0004Maps": [null, "Maps"],
    "settings\u0004Changes whether the visited check mark is visible": [null, "Changes whether the visited check mark is visible"],
    "duckco\u0004%s Forum": [null, "%s Forum"],
    "settings\u0004Instant Answers": [null, "Instant Answers"],
    "feedback form\u0004Ad is inappropriate": [null, "Ad is inappropriate"],
    "newbang\u0004Submit them %s.": [null, "Submit them %s."],
    "Germany": [null, "Germany"],
    "Tour": [null, "Tour"],
    "Tomorrow": [null, "Tomorrow"],
    "put search terms here": [null, "put search terms here"],
    "we have those, too": [null, "we have those, too"],
    "Find %sDuckDuckGo%s and click%sMake default%s": [null, "Find %sDuckDuckGo%s and click%sMake default%s"],
    "settings\u0004Center align the results page (instead of left aligned)": [null, "Center align the results page (instead of left aligned)"],
    "Or you can type in a command like '%s bags', which will take you to %s and auto-search it for 'bags'.": [null, "Or you can type in a command like '%s bags', which will take you to %s and auto-search it for 'bags'."],
    "newbang\u0004submit it here": [null, "submit it here"],
    "settings\u0004Result Visited Title Color": [null, "Result Visited Title Color"],
    "YouTube Privacy Warning": [null, "YouTube Privacy Warning"],
    "Goodies": [null, "Goodies"],
    "showcase_spread\u0004Spread DuckDuckGo": [null, "Spread DuckDuckGo"],
    "Check %sMake this the current search engine%s": [null, "Check %sMake this the current search engine%s"],
    "Press": [null, "Press"],
    "We do not track or bubble you!": [null, "We do not track or bubble you!"],
    "You're now searching with privacy. Get tips to reduce your footprint even more.": [null, "You're now searching with privacy. Get tips to reduce your footprint even more."],
    "feedback form\u0004Local Businesses": [null, "Local Businesses"],
    "feedback form\u0004Non-English Results": [null, "Non-English Results"],
    "See Also": [null, "See Also"],
    "Other uses": [null, "Other uses"],
    "More Themes": [null, "More Themes"],
    "Pass phrase strength": [null, "Pass phrase strength"],
    "Finally, click %sAdd%s": [null, "Finally, click %sAdd%s"],
    "Alternatives": [null, "Alternatives"],
    "Support": [null, "Support"],
    "You're now searching with privacy. %sGet tips to reduce your footprint even more.": [null, "You're now searching with privacy. %sGet tips to reduce your footprint even more."],
    "Czech Republic": [null, "Czech Republic"],
    "shipment tracking": [null, "shipment tracking"],
    "I'm feeling ducky": [null, "I'm feeling ducky"],
    "Set as Default Search Engine": [null, "Set as Default Search Engine"],
    "Green": [null, "Green"],
    "We don't track you.": [null, "We don't track you."],
    "DuckDuckGo enables you to search 100s of other sites directly.": [null, "DuckDuckGo enables you to search 100s of other sites directly."],
    "newbang\u0004New %s": [null, "New %s"],
    "new user poll\u0004No, old user!": [null, "No, old user!"],
    "settings\u0004Changes the color of the result URL": [null, "Changes the color of the result URL"],
    "Sort by date": [null, "Sort by date"],
    "More links": [null, "More links"],
    "prev result": [null, "prev result"],
    "More Links": [null, "More Links"],
    "Policy": [null, "Policy"],
    "reasons-to-use-duckduckgo\u0004We don't track you. Ever.": [null, "We don't track you. Ever."],
    "I want to tell you about something I don't love.": [null, "I want to tell you about something I don't love."],
    "Reverse search": [null, "Reverse search"],
    "Australia": [null, "Australia"],
    "Choose subcategory": [null, "Choose subcategory"],
    "More at %s": [null, "More at %s"],
    "settings\u0004Underline the title link for each result": [null, "Underline the title link for each result"],
    "Canada": [null, "Canada"],
    "attribution\u0004Producer": [null, "Producer"],
    "More ways to add DuckDuckGo to Arora": [null, "More ways to add DuckDuckGo to Arora"],
    "In the popup, click %sAdd%s": [null, "In the popup, click %sAdd%s"],
    "Select DuckDuckGo": [null, "Select DuckDuckGo"],
    "Show details of your settings including bookmarklet": [null, "Show details of your settings including bookmarklet"],
    "for": [null, "for"],
    "%sAfter downloading, locate the extension file and double-click it to install in Safari.%sOK%s": [null, "%sAfter downloading, locate the extension file and double-click it to install in Safari.%sOK%s"],
    "showcase_spread\u0004Help your friends and family join the Duck Side!": [null, "Help your friends and family join the Duck Side!"],
    "mobile promotion on desktop\u0004Use DuckDuckGo private search on your iPad, iPhone or Android!": [null, "Use DuckDuckGo private search on your iPad, iPhone or Android!"],
    "uses results from %s": [null, "uses results from %s"],
    "homepage onboarding\u0004We don't store your personal info or track you. Ever.": [null, "We don't store your personal info or track you. Ever."],
    "setting\u0004username": [null, "username"],
    "We believe you can get better search AND real privacy at the same time. That's why:": [null, "We believe you can get better search AND real privacy at the same time. That's why:"],
    "Red": [null, "Red"],
    "Theme Changed": [null, "Theme Changed"],
    "Social": [null, "Social"],
    "email address": [null, "email address"],
    "Finally, friends don't let friends get tracked!": [null, "Finally, friends don't let friends get tracked!"],
    "from %s": [null, "from %s"],
    "More ways to add DuckDuckGo to PaleMoon": [null, "More ways to add DuckDuckGo to PaleMoon"],
    "static_page\u0004About": [null, "About"],
    "Use in %sFirefox%s": [null, "Use in %sFirefox%s"],
    "Use DuckDuckGo for IE search?": [null, "Use DuckDuckGo for IE search?"],
    "settings\u0004Shows the search button background": [null, "Shows the search button background"],
    "Please try again": [null, "Please try again"],
    "video-resolution\u0004High Definition": [null, "High Definition"],
    "Safe search blocked some results for %s.": [null, "Safe search blocked some results for %s."],
    "Under %sStartup With%s select %sA web page%s": [null, "Under %sStartup With%s select %sA web page%s"],
    "frontpage\u0004doesn't track you": [null, "doesn't track you"],
    "Text font:": [null, "Text font:"],
    "More ways to add DuckDuckGo to Chrome": [null, "More ways to add DuckDuckGo to Chrome"],
    "cloudsave\u0004Cloud Save discussion on duck.co": [null, "Cloud Save discussion on duck.co"],
    "DuckDuckGo Settings": [null, "DuckDuckGo Settings"],
    "moreinfo\u0004See %s for more info.": [null, "See %s for more info."],
    "Install Glims for Safari?": [null, "Install Glims for Safari?"],
    "spread_badge\u0004Get your friends to switch and help us grow!": [null, "Get your friends to switch and help us grow!"],
    "Audio": [null, "Audio"],
    "Swag? %s.": [null, "Swag? %s."],
    "settings\u0004Changes the header color across the entire site": [null, "Changes the header color across the entire site"],
    "Nearby": [null, "Nearby"],
    "Your IP address is %s in %s": [null, "Your IP address is %s in %s"],
    "random number": [null, "random number"],
    "Theme": [null, "Theme"],
    "settings\u0004Show the Result URL line above the snippet text": [null, "Show the Result URL line above the snippet text"],
    "frontpage\u0004Tour": [null, "Tour"],
    "settings\u0004Header Color": [null, "Header Color"],
    "Under Home page, click %sUse current %s.": [null, "Under Home page, click %sUse current %s."],
    "size\u0004All Sizes": [null, "All Sizes"],
    "%d pg": ["%d pgs", "%d pg", "%d pgs"],
    "Classic": [null, "Classic"],
    "Cloud Save": [null, "Cloud Save"],
    "Indonesia": [null, "Indonesia"],
    "Switzerland (de)": [null, "Switzerland (de)"],
    "More about !bangs": [null, "More about !bangs"],
    "About DuckDuckGo": [null, "About DuckDuckGo"],
    "settingsvalue\u0004Larger": [null, "Larger"],
    "supportus\u0004Support": [null, "Support"],
    "showcase_donations\u0004$800,000 in privacy donations!": [null, "$800,000 in privacy donations!"],
    "If you want to use DuckDuckGo without JavaScript, please use our %s or %s versions.": [null, "If you want to use DuckDuckGo without JavaScript, please use our %s or %s versions."],
    "Bookmarklet and settings data": [null, "Bookmarklet and settings data"],
    "Get updates on net privacy (rarely):": [null, "Get updates on net privacy (rarely):"],
    "Concerts": [null, "Concerts"],
    "newslink\u0004Full Story": [null, "Full Story"],
    "safe search\u0004Strict": [null, "Strict"],
    "%sAdd to Chrome%s": [null, "%sAdd to Chrome%s"],
    "Avoid eavesdropping and enhance wi-fi security.": [null, "Avoid eavesdropping and enhance wi-fi security."],
    "image-color\u0004All Colors": [null, "All Colors"],
    "More about us...": [null, "More about us..."],
    "Source:": [null, "Source:"],
    "Click %ssettings/hamburger icon %s on the Chrome toolbar (top right).": [null, "Click %ssettings/hamburger icon %s on the Chrome toolbar (top right)."],
    "Israel": [null, "Israel"],
    "Score": [null, "Score"],
    "settingsvalue\u0004No Region Selected": [null, "No Region Selected"],
    "Install DuckDuckGo Safari Extension?": [null, "Install DuckDuckGo Safari Extension?"],
    "cloudsave\u0004You can store several sets of settings for different purposes.": [null, "You can store several sets of settings for different purposes."],
    "optional": [null, "optional"],
    "feedback form\u0004Web Results": [null, "Web Results"],
    "settings\u0004See the %sURL Parameter Reference Page%s for more details": [null, "See the %sURL Parameter Reference Page%s for more details"],
    "Math": [null, "Math"],
    "theme\u0004Gray": [null, "Gray"],
    "Turn Off Region": [null, "Turn Off Region"],
    "Muted red": [null, "Muted red"],
    "zeroclick\u0004More at %s": [null, "More at %s"],
    "Select %sPreferences%s.": [null, "Select %sPreferences%s."],
    "Like %s on Facebook": [null, "Like %s on Facebook"],
    "Do your part by helping five friends with %s.": [null, "Do your part by helping five friends with %s."],
    "Currency": [null, "Currency"],
    "Select %sManage add-ons%s from the dropdown menu": [null, "Select %sManage add-ons%s from the dropdown menu"],
    "Region:": [null, "Region:"],
    "not %s encoding": [null, "not %s encoding"],
    "domain search": [null, "domain search"],
    "Dropdown:": [null, "Dropdown:"],
    "settings\u0004WOT Icons": [null, "WOT Icons"],
    "Safe search blocked results for %s.": [null, "Safe search blocked results for %s."],
    "Install": [null, "Install"],
    "Text link:": [null, "Text link:"],
    "Feedback / Question / Suggestion / Problem:": [null, "Feedback / Question / Suggestion / Problem:"],
    "cloudsave\u0004How do I change my passphrase?": [null, "How do I change my passphrase?"],
    "Safe search filtered 0-click info for %s": [null, "Safe search filtered 0-click info for %s"],
    "Random Word": [null, "Random Word"],
    "Reviews": [null, "Reviews"],
    "additional_info_at\u0004More from": [null, "More from"],
    "map-mode\u0004Satellite": [null, "Satellite"],
    "feedback form\u0004What did you like about these results?": [null, "What did you like about these results?"],
    "Filter Options": [null, "Filter Options"],
    "I've got a feature request.": [null, "I've got a feature request."],
    "Load Settings": [null, "Load Settings"],
    "video-duration\u0004Any Duration": [null, "Any Duration"],
    "Embeds:": [null, "Embeds:"],
    "wedonttrackyou\u0004track": [null, "track"],
    "More": [null, "More"],
    "Alphabetically": [null, "Alphabetically"],
    "feedback form\u0004Ad is annoying": [null, "Ad is annoying"],
    "Header:": [null, "Header:"],
    "there was an error.": [null, "there was an error."],
    "Privacy": [null, "Privacy"],
    "settings\u0004Changes the font size across the entire site": [null, "Changes the font size across the entire site"],
    "homepage onboarding\u0004Share DuckDuckGo and help friends take their privacy back!": [null, "Share DuckDuckGo and help friends take their privacy back!"],
    "Chat": [null, "Chat"],
    "settings\u0004Stores the previous region that was set": [null, "Stores the previous region that was set"],
    "map": [null, "map"],
    "new user poll\u0004Trying DuckDuckGo again": [null, "Trying DuckDuckGo again"],
    "Final": [null, "Final"],
    "%s is a zip code in %s": [null, "%s is a zip code in %s"],
    "No video playback capabilities": [null, "No video playback capabilities"],
    "Under %sSTARTUP > Homepage%s enter: https://duckduckgo.com": [null, "Under %sSTARTUP > Homepage%s enter: https://duckduckgo.com"],
    "%sOpen %sSettings > Safari > Search Engine%s and select DuckDuckGo!": [null, "%sOpen %sSettings > Safari > Search Engine%s and select DuckDuckGo!"],
    "frontpage\u0004More ways to add DuckDuckGo to %s": [null, "More ways to add DuckDuckGo to %s"],
    "maps_maps_module\u0004Or did you mean:": [null, "Or did you mean:"],
    "settings\u0004Show the privacy benefits of using DuckDuckGo on the homepage": [null, "Show the privacy benefits of using DuckDuckGo on the homepage"],
    "DuckDuckGo Support Center": [null, "DuckDuckGo Support Center"],
    "cloudsave\u0004It is easier to remember four or five words than 10 random letters and numbers, and far more secure.": [null, "It is easier to remember four or five words than 10 random letters and numbers, and far more secure."],
    "install-extension\u00041. Open %sDownloads%s": [null, "1. Open %sDownloads%s"],
    "I want to tell you about something I love.": [null, "I want to tell you about something I love."],
    "Some meanings": [null, "Some meanings"],
    "cloudsave\u0004Enter a new passphrase and click 'Save Settings' This will save your data under your new passphrase.": [null, "Enter a new passphrase and click 'Save Settings' This will save your data under your new passphrase."],
    "cloudsave\u0004Pass phrase is already taken.": [null, "Pass phrase is already taken."],
    "install-duckduckgo\u0004Almost there!": [null, "Almost there!"],
    "Select %sInternet Options%s.": [null, "Select %sInternet Options%s."],
    "Click on %sSet as Default%s towards the bottom": [null, "Click on %sSet as Default%s towards the bottom"],
    "About DDG": [null, "About DDG"],
    "feedback form\u0004What could be better?": [null, "What could be better?"],
    "Save Settings": [null, "Save Settings"],
    "nonjsversion\u0004Get the non-JS version %s": [null, "Get the non-JS version %s"],
    "Click to collapse": [null, "Click to collapse"],
    "settingsvalue\u0004Custom": [null, "Custom"],
    "Scroll down and find %sSearch in the adress bar%s. Click on %sChange%s (or %sAdd new%s)": [null, "Scroll down and find %sSearch in the adress bar%s. Click on %sChange%s (or %sAdd new%s)"],
    "bubble": [null, "bubble"],
    "settings\u0004Search Button Background": [null, "Search Button Background"],
    "View all !bangs": [null, "View all !bangs"],
    "new user poll\u0004No thanks.": [null, "No thanks."],
    "new user poll\u0004Please select one option.": [null, "Please select one option."],
    "Orange": [null, "Orange"],
    "Width:": [null, "Width:"],
    "Most generic keywords work too, e.g. %s": [null, "Most generic keywords work too, e.g. %s"],
    "settings\u0004Header Behavior": [null, "Header Behavior"],
    "DuckDuckGo New !Bang": [null, "DuckDuckGo New !Bang"],
    "Official Site": [null, "Official Site"],
    "More Related Topics": [null, "More Related Topics"],
    "cloudsave\u0004Enter your pass phrase to load your settings:": [null, "Enter your pass phrase to load your settings:"],
    "settings\u0004Result Full URLs": [null, "Result Full URLs"],
    "share this": [null, "share this"],
    "additional\u0004More": [null, "More"],
    "DDG Community": [null, "DDG Community"],
    "frontpage\u0004Need ideas? Try %s.": [null, "Need ideas? Try %s."],
    "Add to Home Screen": [null, "Add to Home Screen"],
    "Whoops! The feedback form is empty!": [null, "Whoops! The feedback form is empty!"],
    "feedback form\u0004Please specify...": [null, "Please specify..."],
    "cloudsave\u0004Save your settings anonymously in the cloud!": [null, "Save your settings anonymously in the cloud!"],
    "cloudsave\u0004Cloud Save Enabled": [null, "Cloud Save Enabled"],
    "maps_maps_module\u0004Get Directions": [null, "Get Directions"],
    "Privacy Settings": [null, "Privacy Settings"],
    "Click on the %smagnifying glass%s in the search bar": [null, "Click on the %smagnifying glass%s in the search bar"],
    "More ways to add DuckDuckGo to Firefox": [null, "More ways to add DuckDuckGo to Firefox"],
    "Alternative Software": [null, "Alternative Software"],
    "We call these commands %s, and this syntax works for 100s of sites:": [null, "We call these commands %s, and this syntax works for 100s of sites:"],
    "load_more\u0004Show More": [null, "Show More"],
    "Install DuckDuckGo Opera Add-on?": [null, "Install DuckDuckGo Opera Add-on?"],
    "reasons-to-use-duckduckgo\u0004Block advertising trackers.": [null, "Block advertising trackers."],
    "cloudsave\u0004We do not have usernames and we don't store any personally identifiable information.": [null, "We do not have usernames and we don't store any personally identifiable information."],
    "settings\u0004Install DuckDuckGo": [null, "Install DuckDuckGo"],
    "All Regions": [null, "All Regions"],
    "settings\u0004Saves the date at which the ATB badge dismissed, or when the user signed up": [null, "Saves the date at which the ATB badge dismissed, or when the user signed up"],
    "settings\u0004Filter out explicit images or videos": [null, "Filter out explicit images or videos"],
    "settings\u0004Cloud Save Bookmarklet URL:": [null, "Cloud Save Bookmarklet URL:"],
    "Including results for %s.": [null, "Including results for %s."],
    "frontpage\u0004Take a Tour.": [null, "Take a Tour."],
    "Click the %smagnifying glass%s in the search bar (upper right).": [null, "Click the %smagnifying glass%s in the search bar (upper right)."],
    "In the drop down select %sDuckDuckGo%s!": [null, "In the drop down select %sDuckDuckGo%s!"],
    "Set as Homepage": [null, "Set as Homepage"],
    "settings\u0004Result Title Font": [null, "Result Title Font"],
    "feedback form\u0004Ad is malware": [null, "Ad is malware"],
    "settings\u0004Custom %s": [null, "Custom %s"],
    "cloudsave\u0004Only the settings that you have changed. They are detailed on the %s page.": [null, "Only the settings that you have changed. They are detailed on the %s page."],
    "tonsgoodies\u0004tons of goodies": [null, "tons of goodies"],
    "built with %s": [null, "built with %s"],
    "URLs:": [null, "URLs:"],
    "Twitter:": [null, "Twitter:"],
    "homepage onboarding\u0004We don’t store your search history. We therefore have nothing to sell to advertisers that track you across the internet.": [null, "We don’t store your search history. We therefore have nothing to sell to advertisers that track you across the internet."],
    "color\u0004Blue": [null, "Blue"],
    "settingsvalue\u0004Medium": [null, "Medium"],
    "bangcat\u0004Shopping": [null, "Shopping"],
    "Close window.": [null, "Close window."],
    "Dismiss": [null, "Dismiss"],
    "Philippines (tl)": [null, "Philippines (tl)"],
    "showcase_aria_dropdown\u0004Here are some things that we made that you might like.": [null, "Here are some things that we made that you might like."],
    "Switch to %s": [null, "Switch to %s"],
    "maps_places\u0004Call": [null, "Call"],
    "Click %sOK%s in the popup. %sNOTE%s: If OK button is disabled, it was already added. Click %sCancel%s and proceed to the next step.": [null, "Click %sOK%s in the popup. %sNOTE%s: If OK button is disabled, it was already added. Click %sCancel%s and proceed to the next step."],
    "made_by\u0004by %s": [null, "by %s"],
    "Click %sChange Search Settings%s in the drop down": [null, "Click %sChange Search Settings%s in the drop down"],
    "Get %sApp%s": [null, "Get %sApp%s"],
    "Get Involved": [null, "Get Involved"],
    "More Info": [null, "More Info"],
    "Grey": [null, "Grey"],
    "mobile homepage banner\u0004Open %sMenu%s": [null, "Open %sMenu%s"],
    "Clear": [null, "Clear"],
    "Use in Firefox": [null, "Use in Firefox"],
    "settingsvalue\u0004Normal": [null, "Normal"],
    "You can change %s via URL parameters by adding them after the search query, for example:": [null, "You can change %s via URL parameters by adding them after the search query, for example:"],
    "Add to Browser": [null, "Add to Browser"],
    "color\u0004Purple": [null, "Purple"],
    "Doodles? Yes, %s!": [null, "Doodles? Yes, %s!"],
    "additional_info_at\u0004More results": [null, "More results"],
    "Partner? %s.": [null, "Partner? %s."],
    "Pink": [null, "Pink"],
    "NPM": [null, "NPM"],
    "settings\u0004Opens results in new windows/tabs": [null, "Opens results in new windows/tabs"],
    "Use in %sSafari%s": [null, "Use in %sSafari%s"],
    "%s will run a search with safe search off.": [null, "%s will run a search with safe search off."],
    "cloudsave\u0004Cloud Save lets you save your settings more permanently by entering a passphrase. It is entirely optional.": [null, "Cloud Save lets you save your settings more permanently by entering a passphrase. It is entirely optional."],
    "showcase_bangs\u0004Search thousands of sites directly on DuckDuckGo.": [null, "Search thousands of sites directly on DuckDuckGo."],
    "too many search terms": [null, "too many search terms"],
    "Feedback": [null, "Feedback"],
    "Under %sSearch%s section, click %sManage search engines...%s": [null, "Under %sSearch%s section, click %sManage search engines...%s"],
    "reasons-to-use-duckduckgo\u0004Take control of your personal data.": [null, "Take control of your personal data."],
    "Select %sSettings%s": [null, "Select %sSettings%s"],
    "What is this?": [null, "What is this?"],
    "Click on the %sTools icon%s in the top-right of the browser": [null, "Click on the %sTools icon%s in the top-right of the browser"],
    "sort by date": [null, "sort by date"],
    "pay": [null, "pay"],
    "Discuss": [null, "Discuss"],
    "Care to help translate DuckDuckGo into your language?": [null, "Care to help translate DuckDuckGo into your language?"],
    "feedback form\u0004Pick a category": [null, "Pick a category"],
    "Nutrition": [null, "Nutrition"],
    "email newsletter\u0004Subscribe": [null, "Subscribe"],
    "GET INVOLVED": [null, "GET INVOLVED"],
    "Under %sOpen with%s select %sA specific page or pages%s": [null, "Under %sOpen with%s select %sA specific page or pages%s"],
    "settings\u0004Font Size": [null, "Font Size"],
    "Domain Status": [null, "Domain Status"],
    "Conversion": [null, "Conversion"],
    "settings\u0004Loads more results when scrolling": [null, "Loads more results when scrolling"],
    "feedback form\u0004Search Box": [null, "Search Box"],
    "What's new!": [null, "What's new!"],
    "Showing results from": [null, "Showing results from"],
    "Please select a region": [null, "Please select a region"],
    "Past Day": [null, "Past Day"],
    "No Reviews": [null, "No Reviews"],
    "Set as %s": [null, "Set as %s"],
    "Plugin suggestions?": [null, "Plugin suggestions?"],
    "Drinks": [null, "Drinks"],
    "turn off region": [null, "turn off region"],
    "random": [null, "random"],
    "Click to expand": [null, "Click to expand"],
    "settings\u0004No Region Selected": [null, "No Region Selected"],
    "frontpage\u0004The search engine that %s.": [null, "The search engine that %s."],
    "new user poll\u0004We don't track you, so we could use your help telling us what brought you back today:": [null, "We don't track you, so we could use your help telling us what brought you back today:"],
    "settings\u0004Show links to instructions for how to add DuckDuckGo to your browser": [null, "Show links to instructions for how to add DuckDuckGo to your browser"],
    "Site name, e.g. %s or %s": [null, "Site name, e.g. %s or %s"],
    "Want to integrate DuckDuckGo with your browser?": [null, "Want to integrate DuckDuckGo with your browser?"],
    "tonsgoodies\u0004We have %s.": [null, "We have %s."],
    "Past Month": [null, "Past Month"],
    "color\u0004Green": [null, "Green"],
    "Enter your feedback": [null, "Enter your feedback"],
    "new tab": [null, "new tab"],
    "Add %1$s%2$s%3$s for a direct search. %4$sMore&hellip;%5$s": [null, "Add %1$s%2$s%3$s for a direct search. %4$sMore&hellip;%5$s"],
    "Developer? Check out %s.": [null, "Developer? Check out %s."],
    "Subcategory": [null, "Subcategory"],
    "Type to search...": [null, "Type to search..."],
    "Report Bad Results": [null, "Report Bad Results"],
    "Your browser indicates if you've visited this link": [null, "Your browser indicates if you've visited this link"],
    "Congratulations!": [null, "Congratulations!"],
    "DuckDuckGo Help": [null, "DuckDuckGo Help"],
    "settings\u0004Show favicons for each result": [null, "Show favicons for each result"],
    "settings\u0004Appearance": [null, "Appearance"],
    "showcase_tracking\u0004Learn why reducing tracking is important.": [null, "Learn why reducing tracking is important."],
    "new user poll\u0004Friend or family": [null, "Friend or family"],
    "settings\u0004Changes how much space the header takes up and what happens to it when you scroll": [null, "Changes how much space the header takes up and what happens to it when you scroll"],
    "Region": [null, "Region"],
    "If you don't see %sDuckDuckGo,%s you will need to add it to the list of %sOther Search Engines%s": [null, "If you don't see %sDuckDuckGo,%s you will need to add it to the list of %sOther Search Engines%s"],
    "cloudsave\u0004Your passphrase never leaves the browser, only the key and the settings file associated with it.": [null, "Your passphrase never leaves the browser, only the key and the settings file associated with it."],
    "Filter by region": [null, "Filter by region"],
    "Top links:": [null, "Top links:"],
    "Meanings": [null, "Meanings"],
    "frontpage\u0004More About DuckDuckGo?": [null, "More About DuckDuckGo?"],
    "Clear Region": [null, "Clear Region"],
    "new user poll\u0004Following us on Twitter": [null, "Following us on Twitter"],
    "Open a new tab or window": [null, "Open a new tab or window"],
    "More related topics": [null, "More related topics"],
    "Add to %s": [null, "Add to %s"],
    "We don't %s or %s you!": [null, "We don't %s or %s you!"],
    "homepage onboarding\u0004Welcome to the Duck Side!": [null, "Welcome to the Duck Side!"],
    "frontpage\u0004The search engine that doesn't track you. %sLearn More%s": [null, "The search engine that doesn't track you. %sLearn More%s"],
    "mobile promotion on desktop\u0004Visit %sDuckDuckGo.com%s on your tablet or phone and follow the provided instructions.": [null, "Visit %sDuckDuckGo.com%s on your tablet or phone and follow the provided instructions."],
    "%s at %s": [null, "%s at %s"],
    "homepage ATB modal\u0004Your data shouldn’t be for sale.": [null, "Your data shouldn’t be for sale."],
    "cloudsave\u0004How does passphrase generation work?": [null, "How does passphrase generation work?"],
    "Comics": [null, "Comics"],
    "Settings": [null, "Settings"],
    "placement\u0004Middle": [null, "Middle"],
    "image-color\u0004Color Only": [null, "Color Only"],
    "video\u0004Preview": [null, "Preview"],
    "Click %sHere%s to us as a search engine": [null, "Click %sHere%s to us as a search engine"],
    "oneofmanyspread\u0004One of many ways to help %s": [null, "One of many ways to help %s"],
    "Set as %sHomepage%s": [null, "Set as %sHomepage%s"],
    "theme\u0004Dark": [null, "Dark"],
    "Platform": [null, "Platform"],
    "I need to report a bug!": [null, "I need to report a bug!"],
    "feedback form\u0004Local Results": [null, "Local Results"],
    "or write out the color code you want, e.g. %s (%s is an encoded %s char).": [null, "or write out the color code you want, e.g. %s (%s is an encoded %s char)."],
    "Some topics grouped into %s": [null, "Some topics grouped into %s"],
    "Malaysia (en)": [null, "Malaysia (en)"],
    "Delete my data": [null, "Delete my data"],
    "bangcat\u0004News": [null, "News"],
    "Advertisements:": [null, "Advertisements:"],
    "Safe Search": [null, "Safe Search"],
    "Our favorite alternative search engine, DuckDuckGo": [null, "Our favorite alternative search engine, DuckDuckGo"],
    "Calendar": [null, "Calendar"],
    "Click %sAdd or change home page...%s": [null, "Click %sAdd or change home page...%s"],
    "Expand disabled, not enough items": [null, "Expand disabled, not enough items"],
    "Add %1$s%2$s%3$s for a bang search. %4$sMore&hellip;%5$s": [null, "Add %1$s%2$s%3$s for a bang search. %4$sMore&hellip;%5$s"],
    "and %s": [null, "and %s"],
    "Russia": [null, "Russia"],
    "Korea": [null, "Korea"],
    "Support Us": [null, "Support Us"],
    "mobile homepage\u0004Use DuckDuckGo Private Search": [null, "Use DuckDuckGo Private Search"],
    "Click this button to get started:": [null, "Click this button to get started:"],
    "settings\u0004Page Width": [null, "Page Width"],
    "Austria": [null, "Austria"],
    "Colors": [null, "Colors"],
    "Click the %s...%s icon in the upper right": [null, "Click the %s...%s icon in the upper right"],
    "%s is a %s": [null, "%s is a %s"],
    "Not many results contain %s.": [null, "Not many results contain %s."],
    "Give feedback": [null, "Give feedback"],
    "Less spam and clutter.": [null, "Less spam and clutter."],
    "On Mac, %sClick Maxthon > Preferences%s, On Windows, %sClick the %s icon > Settings%s": [null, "On Mac, %sClick Maxthon > Preferences%s, On Windows, %sClick the %s icon > Settings%s"],
    "color\u0004White": [null, "White"],
    "Past Year": [null, "Past Year"],
    "Hide feedback icon?": [null, "Hide feedback icon?"],
    "settings\u0004Video Playback": [null, "Video Playback"],
    "Size:": [null, "Size:"],
    "Colombia": [null, "Colombia"],
    "Data Privacy Day 2018": [null, "Data Privacy Day 2018"],
    "Top": [null, "Top"],
    "bangcat\u0004Multimedia": [null, "Multimedia"],
    "Develop": [null, "Develop"],
    "webelieve\u0004%s believe in %s and %s.": [null, "%s believe in %s and %s."],
    "Now Showing": [null, "Now Showing"],
    "Select %sEdit Search Engines...%sin the dropdown": [null, "Select %sEdit Search Engines...%sin the dropdown"],
    "DuckDuckGo Search Box": [null, "DuckDuckGo Search Box"],
    "Search syntax": [null, "Search syntax"],
    "Discussions about DuckDuckGo, including:": [null, "Discussions about DuckDuckGo, including:"],
    "mobile promotion on desktop\u0004OK, got it.": [null, "OK, got it."],
    "a pure search engine %s and its use is soaring": [null, "a pure search engine %s and its use is soaring"],
    "Click on %sChange Search Settings%s in the dropdown menu": [null, "Click on %sChange Search Settings%s in the dropdown menu"],
    "Help test new features (rare emails, <1/mo).": [null, "Help test new features (rare emails, <1/mo)."],
    "setting\u0004On but don't save": [null, "On but don't save"],
    "Start Searching": [null, "Start Searching"],
    "Try to go there": [null, "Try to go there"],
    "settingsvalue\u0004Off completely": [null, "Off completely"],
    "Answers to most DuckDuckGo questions, like:": [null, "Answers to most DuckDuckGo questions, like:"],
    "settings\u0004Auto-Load": [null, "Auto-Load"],
    "Description:": [null, "Description:"],
    "Embed Elsewhere:": [null, "Embed Elsewhere:"],
    "settings\u0004Previous Region": [null, "Previous Region"],
    "cloudsave\u0004You can use Anonymous Cloud Save to store your settings in a more permanent way (on a remote server in the cloud).": [null, "You can use Anonymous Cloud Save to store your settings in a more permanent way (on a remote server in the cloud)."],
    "color\u0004Orange": [null, "Orange"],
    "homepage\u0004Did you know you can %scustomize%s DuckDuckGo?": [null, "Did you know you can %scustomize%s DuckDuckGo?"],
    "webelieve\u0004We": [null, "We"],
    "image-layout\u0004All Layouts": [null, "All Layouts"],
    "Get results for different meanings of %s": [null, "Get results for different meanings of %s"],
    "No right topic? Try web links...": [null, "No right topic? Try web links..."],
    "betterinstantanswers\u0004Better %s.": [null, "Better %s."],
    "Translate": [null, "Translate"],
    "settings\u0004Homepage Animations": [null, "Homepage Animations"],
    "We respect your use of adblock (some of us use it too). Will you please %smake an exception%s to support us (our ads don't violate our %sstrict privacy policy%s)? Alternatively, %sspread DuckDuckGo%s!": [null, "We respect your use of adblock (some of us use it too). Will you please %smake an exception%s to support us (our ads don't violate our %sstrict privacy policy%s)? Alternatively, %sspread DuckDuckGo%s!"],
    "Topics": [null, "Topics"],
    "Use %s command to turn off temporarily.": [null, "Use %s command to turn off temporarily."],
    "Turn off": [null, "Turn off"],
    "Set DuckDuckGo as your %sdefault search engine": [null, "Set DuckDuckGo as your %sdefault search engine"],
    "Use in %sChrome%s": [null, "Use in %sChrome%s"],
    "settings\u0004Show the full URL for each result": [null, "Show the full URL for each result"],
    "cloudsave\u0004No personally identifiable information will be stored in the cloud, and your pass phrase will never leave your browser.": [null, "No personally identifiable information will be stored in the cloud, and your pass phrase will never leave your browser."],
    "cloudsave\u0004I forgot my passphrase. Can you recover it?": [null, "I forgot my passphrase. Can you recover it?"],
    "More ways to add DuckDuckGo to Opera": [null, "More ways to add DuckDuckGo to Opera"],
    "settings\u0004Controls the width of the search box and results": [null, "Controls the width of the search box and results"],
    "We drop the clutter.": [null, "We drop the clutter."],
    "Latvia": [null, "Latvia"],
    "video-duration\u0004Long": [null, "Long"],
    "Jobs": [null, "Jobs"],
    "settingsvalue\u0004On & Floating": [null, "On & Floating"],
    "Homepage": [null, "Homepage"],
    "settingsvalue\u0004Always play on DuckDuckGo": [null, "Always play on DuckDuckGo"],
    "Dark": [null, "Dark"],
    "settings\u0004New Window": [null, "New Window"],
    "feedback form\u0004Pick a specific problem": [null, "Pick a specific problem"],
    "Choose category": [null, "Choose category"],
    "Show all": [null, "Show all"],
    "feedback form\u0004What did you like?": [null, "What did you like?"],
    "hackus\u0004Hack": [null, "Hack"],
    "Light green": [null, "Light green"],
    "cloudsave\u0004You can do this by saving your settings under a different passphrase, optionally deleting the first set.": [null, "You can do this by saving your settings under a different passphrase, optionally deleting the first set."],
    "settings\u0004In some older browsers it's necessary to redirect your clicks through our server to prevent Search Leakage. %sMore Info%s.": [null, "In some older browsers it's necessary to redirect your clicks through our server to prevent Search Leakage. %sMore Info%s."],
    "feedback form\u0004Ad is irrelevant": [null, "Ad is irrelevant"],
    "Turn off:": [null, "Turn off:"],
    "New Window:": [null, "New Window:"],
    "syntax": [null, "syntax"],
    "Anywhere": [null, "Anywhere"],
    "setting\u0004Off": [null, "Off"],
    "frontpage\u0004New to DuckDuckGo? %sTake a Tour.%s": [null, "New to DuckDuckGo? %sTake a Tour.%s"],
    "See our %s": [null, "See our %s"],
    "shortbelieve\u0004%s and %s.": [null, "%s and %s."],
    "Search result title": [null, "Search result title"],
    "Coupons": [null, "Coupons"],
    "More ways to add DuckDuckGo to SeaMonkey": [null, "More ways to add DuckDuckGo to SeaMonkey"],
    "Click %sUse current pages%s then %sClick OK%s.": [null, "Click %sUse current pages%s then %sClick OK%s."],
    "Load More": [null, "Load More"],
    "homepage onboarding\u0004Other search engines track your searches even when you’re in private browsing mode. We don’t track you &mdash; period.": [null, "Other search engines track your searches even when you’re in private browsing mode. We don’t track you &mdash; period."],
    "homepage onboarding\u0004Our privacy policy is simple: we don’t collect or share any of your personal information.": [null, "Our privacy policy is simple: we don’t collect or share any of your personal information."],
    "%s is a parked domain (last time we checked).": [null, "%s is a parked domain (last time we checked)."],
    "Block Trackers": [null, "Block Trackers"],
    "Sidebar:": [null, "Sidebar:"],
    "Search suggestions": [null, "Search suggestions"],
    "Avatar": [null, "Avatar"],
    "bangcat\u0004Entertainment": [null, "Entertainment"],
    "settings\u0004Basic": [null, "Basic"],
    "Have a question about DuckDuckGo?": [null, "Have a question about DuckDuckGo?"],
    "feedback form\u0004Optional": [null, "Optional"],
    "Select DuckDuckGo!": [null, "Select DuckDuckGo!"],
    "Switzerland (it)": [null, "Switzerland (it)"],
    "install-duckduckgo\u0004Click %sAllow%s, then %sInstall%s": [null, "Click %sAllow%s, then %sInstall%s"],
    "cloudsave\u0004Load Cloud Settings": [null, "Load Cloud Settings"],
    "Color": [null, "Color"],
    "United States": [null, "United States"],
    "newbang\u0004Bang command": [null, "Bang command"],
    "Click OK.": [null, "Click OK."],
    "Apps": [null, "Apps"],
    "Page #s:": [null, "Page #s:"],
    "betterinstantanswers\u0004instant answers.": [null, "instant answers."],
    "Bang category": [null, "Bang category"],
    "frontpage\u0004Find %s.": [null, "Find %s."],
    "Searches %s using our %s": [null, "Searches %s using our %s"],
    "Friends don't let friends get tracked.": [null, "Friends don't let friends get tracked."],
    "settingsvalue\u0004Custom %s": [null, "Custom %s"],
    "You're now searching with privacy %s": [null, "You're now searching with privacy %s"],
    "Get the DuckDuckGo newsletter (monthly).": [null, "Get the DuckDuckGo newsletter (monthly)."],
    "Recent News": [null, "Recent News"],
    "cloudsave\u0004In the browser, we then select four or five random words from that list, ensuring that it is at least 18-20 characters long.": [null, "In the browser, we then select four or five random words from that list, ensuring that it is at least 18-20 characters long."],
    "Mark where the search goes with {{{s}}}": [null, "Mark where the search goes with {{{s}}}"],
    "Select %sDuckDuckGo%s and click %sSet as default%s": [null, "Select %sDuckDuckGo%s and click %sSet as default%s"],
    "supportus\u0004%s us.": [null, "%s us."],
    "Hungary": [null, "Hungary"],
    "Save and Exit": [null, "Save and Exit"],
    "Open Map": [null, "Open Map"],
    "Highlight:": [null, "Highlight:"],
    "settings\u0004Use encrypted version of the site": [null, "Use encrypted version of the site"],
    "Is someone working on your zero-click plugin?": [null, "Is someone working on your zero-click plugin?"],
    "Dismiss forever": [null, "Dismiss forever"],
    "Get the non-JS version %s": [null, "Get the non-JS version %s"],
    "settings\u0004Load": [null, "Load"],
    "These browser permissions are used to add privacy protection on websites you visit by blocking hidden trackers, encrypting connections where possible, and by making DuckDuckGo your default search engine.": [null, "These browser permissions are used to add privacy protection on websites you visit by blocking hidden trackers, encrypting connections where possible, and by making DuckDuckGo your default search engine."],
    "Date": [null, "Date"],
    "settings\u0004Region": [null, "Region"],
    "questions\u0004If you have any questions or concerns, please %s.": [null, "If you have any questions or concerns, please %s."],
    "View file": [null, "View file"],
    "Select %sDuckDuckGo%s!": [null, "Select %sDuckDuckGo%s!"],
    "Click the Duck icon at the top of your browser to search!": [null, "Click the Duck icon at the top of your browser to search!"],
    "Official site": [null, "Official site"],
    "settingsvalue\u0004Moderate": [null, "Moderate"],
    "Install DuckDuckGo Speed Dial?": [null, "Install DuckDuckGo Speed Dial?"],
    "Feedback:": [null, "Feedback:"],
    "pages": [null, "pages"],
    "settings\u0004Page Appearance": [null, "Page Appearance"],
    "visible\u0004Showing": [null, "Showing"],
    "Off": [null, "Off"],
    "All Rights Reserved.": [null, "All Rights Reserved."],
    "Help spread DuckDuckGo (rare emails, <1/mo).": [null, "Help spread DuckDuckGo (rare emails, <1/mo)."],
    "frontpage\u0004Drag this to toolbar home icon": [null, "Drag this to toolbar home icon"],
    "cloudsave\u0004Pass phrase must be at least 9 characters long": [null, "Pass phrase must be at least 9 characters long"],
    "color\u0004Gray": [null, "Gray"],
    "settings\u0004Show newsletter signup badge": [null, "Show newsletter signup badge"],
    "Would you rather search for %s?": [null, "Would you rather search for %s?"],
    "settings\u0004Result Description Color": [null, "Result Description Color"],
    "Open %sSettings > Safari > Search Engine%s and select DuckDuckGo!": [null, "Open %sSettings > Safari > Search Engine%s and select DuckDuckGo!"],
    "Interface": [null, "Interface"],
    "wedonttrackyou\u0004We don't %s you.": [null, "We don't %s you."],
    "Feel free to adjust the settings below. Then, just copy and paste the code into your website!": [null, "Feel free to adjust the settings below. Then, just copy and paste the code into your website!"],
    "Expand URL": [null, "Expand URL"],
    "cloudsave\u0004You can restore your settings after deleting cookies": [null, "You can restore your settings after deleting cookies"],
    "frontpage\u0004More": [null, "More"],
    "settings\u0004Homepage Onboarding Education": [null, "Homepage Onboarding Education"],
    "Music": [null, "Music"],
    "Bang url, e.g. %s": [null, "Bang url, e.g. %s"],
    "Listen": [null, "Listen"],
    "cloudsave\u0004Something went wrong saving to the server, please try again.": [null, "Something went wrong saving to the server, please try again."],
    "Link font:": [null, "Link font:"],
    "Are you looking for our advanced syntax?": [null, "Are you looking for our advanced syntax?"],
    "Want to share a suggestion with other users?": [null, "Want to share a suggestion with other users?"],
    "cloudsave\u0004No. Unless you deleted your settings, the settings file will still be there but we have no way of associating it with you.": [null, "No. Unless you deleted your settings, the settings file will still be there but we have no way of associating it with you."],
    "settings\u0004Show sign up form for the DuckDuckGo privacy newsletter": [null, "Show sign up form for the DuckDuckGo privacy newsletter"],
    "homepage\u0004Need ideas? Try %s.": [null, "Need ideas? Try %s."],
    "bangsyntax\u0004Searches %s using our %s": [null, "Searches %s using our %s"],
    "Read More": [null, "Read More"],
    "settingsvalue\u0004On & Scrolling": [null, "On & Scrolling"],
    "email newsletter\u0004Enter your email address.": [null, "Enter your email address."],
    "settings\u0004Prevent sharing of your search with sites you click on": [null, "Prevent sharing of your search with sites you click on"],
    "settingsvalue\u0004Metric (Kilograms, Meters, Celsius)": [null, "Metric (Kilograms, Meters, Celsius)"],
    "Add DuckDuckGo as a search engine": [null, "Add DuckDuckGo as a search engine"],
    "Showing results for %s at %s": [null, "Showing results for %s at %s"],
    "image-layout\u0004Tall": [null, "Tall"],
    "Try our homepage that never shows these messages:": [null, "Try our homepage that never shows these messages:"],
    "settings\u0004Units of Measure": [null, "Units of Measure"],
    "Zip Code": [null, "Zip Code"],
    "Click on %sBrowser%s in the sidebar": [null, "Click on %sBrowser%s in the sidebar"],
    "theme\u0004Retro": [null, "Retro"],
    "Movie Actors": [null, "Movie Actors"],
    "Current Region:": [null, "Current Region:"],
    "Select %sDuckDuckGo%s and click %sAdd as default%s!": [null, "Select %sDuckDuckGo%s and click %sAdd as default%s!"],
    "Submit": [null, "Submit"],
    "settings\u0004Redirect (when necessary)": [null, "Redirect (when necessary)"],
    "settings\u0004Changes the title link color for each result": [null, "Changes the title link color for each result"],
    "Click on the %sSearch Providers%s under Add-on Types": [null, "Click on the %sSearch Providers%s under Add-on Types"],
    "settings\u0004Changes the color of the result description text": [null, "Changes the color of the result description text"],
    "Curious about the company?": [null, "Curious about the company?"],
    "Open Settings": [null, "Open Settings"],
    "Bangs": [null, "Bangs"],
    "feedback form\u0004What were you looking for?": [null, "What were you looking for?"],
    "feedback form\u0004Feedback Sent": [null, "Feedback Sent"],
    "Text:": [null, "Text:"],
    "White": [null, "White"],
    "frontpage\u0004Tour.": [null, "Tour."],
    "%d disc": ["%d discs", "%d disc", "%d discs"],
    "%s is an area code in %s": [null, "%s is an area code in %s"],
    "frontpage\u0004Anonymously": [null, "Anonymously"],
    "newbang\u0004here": [null, "here"],
    "privacy policy": [null, "privacy policy"],
    "Help": [null, "Help"],
    "Use in %sMaxthon%s": [null, "Use in %sMaxthon%s"],
    "webelieve\u0004We believe in %s and %s at the same time.": [null, "We believe in %s and %s at the same time."],
    "bangcat\u0004Tech": [null, "Tech"],
    "settings\u0004Changes results to be region specific": [null, "Changes results to be region specific"],
    "I'd like to report bad relevancy.": [null, "I'd like to report bad relevancy."],
    "Prevent advertisers and corporations from tracking you across the internet.": [null, "Prevent advertisers and corporations from tracking you across the internet."],
    "maps_places\u0004%s on %s": [null, "%s on %s"],
    "DuckDuckGo Goodies": [null, "DuckDuckGo Goodies"],
    "Chemical Formula": [null, "Chemical Formula"],
    "attribution\u0004Credits": [null, "Credits"],
    "Past Week": [null, "Past Week"],
    "Direct link to your settings in the cloud": [null, "Direct link to your settings in the cloud"],
    "Use DuckDuckGo for Chrome search?": [null, "Use DuckDuckGo for Chrome search?"],
    "Team Duck": [null, "Team Duck"],
    "feedback form\u0004Send feedback for:": [null, "Send feedback for:"],
    "Explore Map": [null, "Explore Map"],
    "Newbang\u0004Bang url": [null, "Bang url"],
    "setting\u0004On & floating": [null, "On & floating"],
    "cloudsave\u0004Only the settings that you have changed. They are detailed on the %sURL Parameters%s page.": [null, "Only the settings that you have changed. They are detailed on the %sURL Parameters%s page."],
    "Careers": [null, "Careers"],
    "video-resolution\u0004Standard Definition": [null, "Standard Definition"],
    "Twitter": [null, "Twitter"],
    "Related topics": [null, "Related topics"],
    "frontpage\u0004Spread!": [null, "Spread!"],
    "Community": [null, "Community"],
    "Congress": [null, "Congress"],
    "Filter by date": [null, "Filter by date"],
    "setting\u0004On & scrolling": [null, "On & scrolling"],
    "settings\u0004Redirect": [null, "Redirect"],
    "Blog": [null, "Blog"],
    "DuckDuckGo has better instant answers, less spam and clutter, and real privacy.": [null, "DuckDuckGo has better instant answers, less spam and clutter, and real privacy."],
    "ads\u0004Report": [null, "Report"],
    "size\u0004Large": [null, "Large"],
    "region filter\u0004Recent:": [null, "Recent:"],
    "Croatia": [null, "Croatia"],
    "Your IP address is %s": [null, "Your IP address is %s"],
    "nonjsversion\u0004This page requires %s": [null, "This page requires %s"],
    "settings\u0004Show educational content on the homepage below the fold": [null, "Show educational content on the homepage below the fold"],
    "newsletter email collection\u0004Your email address will not be shared, %sor associated with anonymous searches. [%sExample message%s]": [null, "Your email address will not be shared, %sor associated with anonymous searches. [%sExample message%s]"],
    "settings\u0004Show animations on the homepage": [null, "Show animations on the homepage"],
    "Advanced Settings": [null, "Advanced Settings"],
    "instant answers": [null, "instant answers"],
    "main results": [null, "main results"],
    "PRIVACY": [null, "PRIVACY"],
    "maps_maps_module\u0004View on Map": [null, "View on Map"],
    "within body": [null, "within body"],
    "cloudsave\u0004Even if you could do that, there is no point since all the information is there in the open, unencrypted, provided you know the key.": [null, "Even if you could do that, there is no point since all the information is there in the open, unencrypted, provided you know the key."],
    "Click the magnifying glass in the search bar": [null, "Click the magnifying glass in the search bar"],
    "Select a !bang for a direct site search": [null, "Select a !bang for a direct site search"],
    "showcase_traffic\u000415 billion anonymous searches served.": [null, "15 billion anonymous searches served."],
    "homepage onboarding\u0004Invite friends to the Duck Side!": [null, "Invite friends to the Duck Side!"],
    "Under %sSearch in the address bar with%s select %sAdd New%s": [null, "Under %sSearch in the address bar with%s select %sAdd New%s"],
    "Results": [null, "Results"],
    "frontpage\u0004Instantly": [null, "Instantly"],
    "DuckDuckGo settings": [null, "DuckDuckGo settings"],
    "List": [null, "List"],
    "Reddit": [null, "Reddit"],
    "Input: %sName: DuckDuckGo%s URL: %s Alias: d%s": [null, "Input: %sName: DuckDuckGo%s URL: %s Alias: d%s"],
    "frontpage\u0004instantly": [null, "instantly"],
    "cloudsave\u0004How is it anonymous?": [null, "How is it anonymous?"],
    "COMMUNITY": [null, "COMMUNITY"],
    "settings\u0004Newsletter Signup": [null, "Newsletter Signup"],
    "setting\u0004a particular username, e.g. %s": [null, "a particular username, e.g. %s"],
    "Click the %sgears icon%s in the browser toolbar (top right).": [null, "Click the %sgears icon%s in the browser toolbar (top right)."],
    "%sInstall%s": [null, "%sInstall%s"],
    "Safe search is on. No safe search results.": [null, "Safe search is on. No safe search results."],
    "Type %sduckduckgo.com%s in the %ssecond form field": [null, "Type %sduckduckgo.com%s in the %ssecond form field"],
    "Sorry, no results here.": [null, "Sorry, no results here."],
    "duckduckbot\u0004DuckDuckBot is the Web crawler for %s. It respects %s and originates from these IP addresses:": [null, "DuckDuckBot is the Web crawler for %s. It respects %s and originates from these IP addresses:"],
    "useus\u0004%s us.": [null, "%s us."],
    "spread_badge\u0004Love DuckDuckGo?": [null, "Love DuckDuckGo?"],
    "cloudsave\u0004Cloud Save discussion on %s": [null, "Cloud Save discussion on %s"],
    "maps_places\u0004Directions": [null, "Directions"],
    "setting\u0004Off & centered": [null, "Off & centered"],
    "cloudsave\u0004What is the cloud save bookmarklet and how does it differ from the URL parameter bookmarklet?": [null, "What is the cloud save bookmarklet and how does it differ from the URL parameter bookmarklet?"],
    "frontpage\u0004Help spread DuckDuckGo!": [null, "Help spread DuckDuckGo!"],
    "About": [null, "About"],
    "settings\u0004Image safe search (deprecated)": [null, "Image safe search (deprecated)"],
    "Select %sOpera > Preferences%s (on Mac) or %sMenu > Settings%s (on Windows)": [null, "Select %sOpera > Preferences%s (on Mac) or %sMenu > Settings%s (on Windows)"],
    "As per our privacy policy, we do not collect or share any personal information ourselves. All of this privacy protection happens on your device.": [null, "As per our privacy policy, we do not collect or share any personal information ourselves. All of this privacy protection happens on your device."],
    "width\u0004Super wide": [null, "Super wide"],
    "Search Box": [null, "Search Box"],
    "Go to Options.": [null, "Go to Options."],
    "On": [null, "On"],
    "Other Help / Feedback": [null, "Other Help / Feedback"],
    "safe search\u0004No explicit images or videos": [null, "No explicit images or videos"],
    "homepage onboarding\u0004We don’t store your personal info. Ever.": [null, "We don’t store your personal info. Ever."],
    "Subject:": [null, "Subject:"],
    "No correct topic? Try web links...": [null, "No correct topic? Try web links..."],
    "China": [null, "China"],
    "Estonia": [null, "Estonia"],
    "Your settings in %s format:": [null, "Your settings in %s format:"],
    "homepage onboarding\u0004We don’t store your personal information. Ever.": [null, "We don’t store your personal information. Ever."],
    "bangcat\u0004Research": [null, "Research"],
    "Yellow": [null, "Yellow"],
    "Themes": [null, "Themes"],
    "install-duckduckgo\u0004Click %sAllow%s, then %sAdd%s.": [null, "Click %sAllow%s, then %sAdd%s."],
    "setting\u0004On": [null, "On"],
    "browsers": [null, "browsers"],
    "DuckDuckGo Privacy": [null, "DuckDuckGo Privacy"],
    "By default, your settings are stored in non-personal browser cookies (in your browser).": [null, "By default, your settings are stored in non-personal browser cookies (in your browser)."],
    "Drag this to %s (home) toolbar button": [null, "Drag this to %s (home) toolbar button"],
    "Videos": [null, "Videos"],
    "settingsvalue\u0004Small": [null, "Small"],
    "Privacy Policy": [null, "Privacy Policy"],
    "settingsvalue\u0004Super Wide": [null, "Super Wide"],
    "Forum": [null, "Forum"],
    "Weather": [null, "Weather"],
    "Mexico": [null, "Mexico"],
    "Scroll down and find %sSearch in the address bar%s. Click on %sChange%s (or %sAdd new%s)": [null, "Scroll down and find %sSearch in the address bar%s. Click on %sChange%s (or %sAdd new%s)"],
    "cloudsave\u0004Each time you ask for a passphrase suggestion, we get a reasonably large list of random words from the DuckDuckGo servers.": [null, "Each time you ask for a passphrase suggestion, we get a reasonably large list of random words from the DuckDuckGo servers."],
    "Background:": [null, "Background:"],
    "hide this FAQ": [null, "hide this FAQ"],
    "Instant Answer API": [null, "Instant Answer API"],
    "Map": [null, "Map"],
    "Viewing results for %s.": [null, "Viewing results for %s."],
    "install-extension\u00042. Double-click %sduckduckgo.safariextz%s": [null, "2. Double-click %sduckduckgo.safariextz%s"],
    "settingsvalue\u0004Browser Preferred Language": [null, "Browser Preferred Language"],
    "Watch on YouTube": [null, "Watch on YouTube"],
    "Open %sMenu > Settings > Search engine%s and select DuckDuckGo!": [null, "Open %sMenu > Settings > Search engine%s and select DuckDuckGo!"],
    "cloudsave\u0004What information gets saved?": [null, "What information gets saved?"],
    "settings\u0004Bookmarklet URL:": [null, "Bookmarklet URL:"],
    "'%s' or '%s' or '%s' will take you to the first result.": [null, "'%s' or '%s' or '%s' will take you to the first result."],
    "frontpage\u0004Did you know you can %scustomize%s DuckDuckGo?": [null, "Did you know you can %scustomize%s DuckDuckGo?"],
    "Use in %s": [null, "Use in %s"],
    "cloudsave\u0004Your passphrase is used to generate a key using the Secure Hash Algorithm known as %sSHA-2%s, using a 512 bit key.": [null, "Your passphrase is used to generate a key using the Secure Hash Algorithm known as %sSHA-2%s, using a 512 bit key."],
    "Category": [null, "Category"],
    "more": [null, "more"],
    "mobile promotion on desktop\u0004Use DuckDuckGo private search on your iPad, iPhone, or Android!": [null, "Use DuckDuckGo private search on your iPad, iPhone, or Android!"],
    "%sRight click%s in the search bar": [null, "%sRight click%s in the search bar"],
    "frontpage\u0004Learn %sMore%s": [null, "Learn %sMore%s"],
    "Recipes": [null, "Recipes"],
    "Choose Category": [null, "Choose Category"],
    "feedback form\u0004Send feedback": [null, "Send feedback"],
    "settings\u0004Page Break #'s": [null, "Page Break #'s"],
    "Change Region": [null, "Change Region"],
    "Try a search!": [null, "Try a search!"],
    "Norway": [null, "Norway"],
    "Quotations": [null, "Quotations"],
    "More topics": [null, "More topics"],
    "Tan": [null, "Tan"],
    "Keep in Touch": [null, "Keep in Touch"],
    "maps_places\u0004Menu": [null, "Menu"],
    "Protect Your Privacy!": [null, "Protect Your Privacy!"],
    "Go to Search Engine.": [null, "Go to Search Engine."],
    "There are also shorter versions, e.g. %s": [null, "There are also shorter versions, e.g. %s"],
    "DDG Topics List": [null, "DDG Topics List"],
    "Finland": [null, "Finland"],
    "webelieve\u0004better search": [null, "better search"],
    "homepage onboarding\u0004No tracking, no ad targeting, just searching!": [null, "No tracking, no ad targeting, just searching!"],
    "Internet privacy updates (not just about us).": [null, "Internet privacy updates (not just about us)."],
    "expand_text\u0004Show More": [null, "Show More"],
    "Safe search searched for %s": [null, "Safe search searched for %s"],
    "Philippines": [null, "Philippines"],
    "Time": [null, "Time"],
    "settings\u0004Header Appearance": [null, "Header Appearance"],
    "After it downloads and opens, click %sInstall%s": [null, "After it downloads and opens, click %sInstall%s"],
    "translateus\u0004Translate": [null, "Translate"],
    "color\u0004Black": [null, "Black"],
    "Belgium (fr)": [null, "Belgium (fr)"],
    "cloudsave\u0004Passphrases cannot feasibly be reverse engineered from a key": [null, "Passphrases cannot feasibly be reverse engineered from a key"],
    "Learn %sMore%s": [null, "Learn %sMore%s"],
    "Click %sAdd DuckDuckGo%s (bottom).": [null, "Click %sAdd DuckDuckGo%s (bottom)."],
    "Thesaurus": [null, "Thesaurus"],
    "More Videos": [null, "More Videos"],
    "mobile homepage banner\u0004Select %s%s%s, then %sSearch Engine%s": [null, "Select %s%s%s, then %sSearch Engine%s"],
    "settings\u0004Result Visited Check Mark": [null, "Result Visited Check Mark"],
    "settings\u0004Suggest a pass phrase": [null, "Suggest a pass phrase"],
    "settings\u0004Site Icons": [null, "Site Icons"],
    "Click %sYes%s.": [null, "Click %sYes%s."],
    "maps_places\u0004Address": [null, "Address"],
    "Limit results to %s?": [null, "Limit results to %s?"],
    "Search Anonymously": [null, "Search Anonymously"]
};
ltd('duckduckgo-duckduckgo');