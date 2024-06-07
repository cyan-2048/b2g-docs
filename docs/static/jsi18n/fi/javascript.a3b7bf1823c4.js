

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Attachments": "Liitteet", 
    "Autosave enabled.": "Automaattinen tallennus k\u00e4yt\u00f6ss\u00e4.", 
    "CSS": "CSS", 
    "Changes saved.": "Muutokset tallennettu.", 
    "Close": "Sulje", 
    "Close notification": "Sulje ilmoitus", 
    "Close submenu": "Sulje alivalikko", 
    "Create a Redirect": "Luo uudelleenohjaus", 
    "Default": "Oletus", 
    "Discard draft.": "Hylk\u00e4\u00e4 luonnos.", 
    "Draft autosaved:": "Luonnos tallennettu automaattisesti:", 
    "Draft discarded.": "Luonnos hyl\u00e4tty.", 
    "Draft discarded:": "Luonnos hyl\u00e4tty:", 
    "Draft published:": "Luonnos julkaistu:", 
    "Draft restored.": "Luonnos palautettu.", 
    "Edit Page": "Muokkaa sivua", 
    "Embed YouTube Video": "Upota YouTube-video", 
    "Error loading content, please refresh the page": "Virhe sis\u00e4lt\u00f6\u00e4 ladatessa, p\u00e4ivit\u00e4 sivu", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Odota, p\u00e4ivitet\u00e4\u00e4n suodattimia\u2026", 
    "History": "Historia", 
    "JavaScript": "JavaScript", 
    "Locate a YouTube Video": "Paikanna YouTube-video", 
    "MDN Redirect": "MDN-uudelleenohjaus", 
    "Never": "Ei koskaan", 
    "No": "Ei", 
    "No Highlight": "Ei korostusta", 
    "No attachments available": "Liitteit\u00e4 ei ole saatavilla", 
    "No selection": "Ei valintaa", 
    "Paste YouTube Video URL": "Liit\u00e4 YouTube-videon osoite", 
    "Published version": "Julkaistu versio", 
    "Publishing changes\u2026": "Julkaistaan muutoksia\u2026", 
    "Restore draft.": "Palauta luonnos.", 
    "Result": "Tulos", 
    "Revert": "Palauta", 
    "Sample CSS Content": "CSS-esimerkkisis\u00e4lt\u00f6", 
    "Sample HTML Content": "HTML-esimerkkisis\u00e4lt\u00f6", 
    "Sample JavaScript Content": "JavaScript-esimerkkisis\u00e4lt\u00f6", 
    "Section": "Osio", 
    "Select an attachment": "Valitse liite", 
    "Selected: ": "Valittu: ", 
    "Syntax Highlighter": "Syntaksin korostus", 
    "Updated filters.": "Suodattimet p\u00e4ivitetty.", 
    "View Page": "N\u00e4yt\u00e4 sivu", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "Voisitko vastata nelj\u00e4\u00e4n kysymykseen? <a %(url)s>Avaa kysely uuteen v\u00e4lilehteen</a> ja vastaa siihen, kun olet valmis. Kiitos!", 
    "Yes": "Kyll\u00e4", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "T\u00e4m\u00e4 sivusto n\u00e4ytet\u00e4\u00e4n sinulle nyt kielell\u00e4 %(localeName)s. Haluatko aina n\u00e4hd\u00e4 t\u00e4m\u00e4n sivuston kielell\u00e4 %(localeName)s?", 
    "You have a draft from: %(time)s.": "Sinulla on luonnos, jonka ajankohta on: %(time)s."
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j. E Y \\k\\e\\l\\l\\o G.i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H.%M.%S", 
      "%d.%m.%Y %H.%M.%S.%f", 
      "%d.%m.%Y %H.%M", 
      "%d.%m.%Y", 
      "%d.%m.%y %H.%M.%S", 
      "%d.%m.%y %H.%M.%S.%f", 
      "%d.%m.%y %H.%M", 
      "%d.%m.%y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j. E Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "j.n.Y G.i", 
    "SHORT_DATE_FORMAT": "j.n.Y", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "G.i", 
    "TIME_INPUT_FORMATS": [
      "%H.%M.%S", 
      "%H.%M.%S.%f", 
      "%H.%M", 
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

