

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sentDate)s by %(user)s": "%(sentDate)s / %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "\u3053\u306e\u4e0b\u66f8\u304d\u304c\u4fdd\u5b58\u3055\u308c\u305f\u5f8c\u3001\u3053\u306e\u8a18\u4e8b\u306e\u3088\u308a\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u4e0b\u66f8\u304d\u3092\u5fa9\u5143\u3057\u3066\u305d\u306e\u5185\u5bb9\u3092\u898b\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001\u305d\u308c\u3092\u9001\u4fe1\u3057\u3066\u516c\u958b\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002", 
    "Article Title Lookup / Link Text": "\u8a18\u4e8b\u30bf\u30a4\u30c8\u30eb\u691c\u7d22 / \u30ea\u30f3\u30af\u30c6\u30ad\u30b9\u30c8", 
    "Aspect ratio": "\u7e26\u6a2a\u6bd4", 
    "Attachments": "\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb", 
    "Autosave enabled.": "\u81ea\u52d5\u4fdd\u5b58\u304c\u6709\u52b9\u5316\u3055\u308c\u307e\u3057\u305f\u3002", 
    "CSS": "CSS", 
    "Changes saved.": "\u5909\u66f4\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f\u3002", 
    "Close": "\u9589\u3058\u308b", 
    "Close notification": "\u901a\u77e5\u3092\u9589\u3058\u308b", 
    "Close submenu": "\u30b5\u30d6\u30e1\u30cb\u30e5\u30fc\u3092\u9589\u3058\u308b", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "\u3053\u306e\u65e5\u4ed8\u3068\u6700\u65b0\u306e\u30ea\u30d3\u30b8\u30e7\u30f3\u65e5\u6642\u3092\u6bd4\u8f03\u3057\u3066\u3001\u3088\u308a\u65b0\u3057\u3044\u5909\u66f4\u3092\u4e0a\u66f8\u304d\u3057\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u78ba\u304b\u3081\u3066\u304f\u3060\u3055\u3044\u3002", 
    "Create a Redirect": "\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3092\u4f5c\u6210", 
    "Default": "\u65e2\u5b9a\u5024", 
    "Details": "\u8a73\u7d30", 
    "Discard draft.": "\u4e0b\u66f8\u304d\u3092\u7834\u68c4", 
    "Document": "\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8", 
    "Draft autosaved:": "\u4e0b\u66f8\u304d\u304c\u81ea\u52d5\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f:", 
    "Draft discarded.": "\u4e0b\u66f8\u304d\u304c\u7834\u68c4\u3055\u308c\u307e\u3057\u305f\u3002", 
    "Draft discarded:": "\u4e0b\u66f8\u304d\u304c\u7834\u68c4\u3055\u308c\u307e\u3057\u305f:", 
    "Draft published:": "\u4e0b\u66f8\u304d\u304c\u516c\u958b\u3055\u308c\u307e\u3057\u305f:", 
    "Draft restored.": "\u4e0b\u66f8\u304d\u304c\u5fa9\u5143\u3055\u308c\u307e\u3057\u305f\u3002", 
    "Edit Page": "\u30da\u30fc\u30b8\u3092\u7de8\u96c6", 
    "Embed YouTube Video": "YouTube \u52d5\u753b\u3092\u57cb\u3081\u8fbc\u307f", 
    "Error loading content, please refresh the page": "\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u30da\u30fc\u30b8\u3092\u518d\u8aad\u307f\u8fbc\u307f\u3057\u3066\u304f\u3060\u3055\u3044", 
    "Error submitting as %(type)s": "%(type)s \u3067\u9001\u4fe1\u4e2d\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u66f4\u65b0\u3057\u3066\u3044\u307e\u3059...", 
    "History": "\u5c65\u6b74", 
    "Insert Code Sample Template": "\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u633f\u5165", 
    "Insert Code Sample iFrame": "\u30b3\u30fc\u30c9\u30b5\u30f3\u30d7\u30eb\u306e iFrame \u3092\u633f\u5165", 
    "JavaScript": "JavaScript", 
    "Launch": "\u958b\u304f", 
    "Link": "\u30ea\u30f3\u30af", 
    "Locate a YouTube Video": "YouTube \u52d5\u753b\u3092\u7279\u5b9a", 
    "MDN Redirect": "MDN \u30ea\u30c0\u30a4\u30ec\u30af\u30c8", 
    "Never": "\u78ba\u8a8d\u3057\u306a\u3044", 
    "New interest...": "\u65b0\u305f\u306a\u8208\u5473...", 
    "New tag...": "\u65b0\u3057\u3044\u30bf\u30b0...", 
    "No": "\u3044\u3044\u3048", 
    "No Highlight": "\u30cf\u30a4\u30e9\u30a4\u30c8\u306a\u3057", 
    "No attachments available": "\u8868\u793a\u53ef\u80fd\u306a\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306f\u3042\u308a\u307e\u305b\u3093", 
    "No selection": "\u9078\u629e\u306a\u3057", 
    "Open": "\u958b\u304f", 
    "Open implementation notes": "\u5b9f\u88c5\u30e1\u30e2\u3092\u958b\u304f", 
    "Open in %(site)s": "%(site)s \u3067\u958b\u304f", 
    "Paste YouTube Video URL": "YouTube \u52d5\u753b\u306e URL \u3092\u8cbc\u308a\u4ed8\u3051", 
    "Published version": "\u516c\u958b\u6e08\u307f\u30d0\u30fc\u30b8\u30e7\u30f3", 
    "Publishing changes\u2026": "\u5909\u66f4\u70b9\u3092\u516c\u958b\u3057\u3066\u3044\u307e\u3059...", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "\u516c\u958b\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u5909\u66f4\u70b9\u3092\u5b89\u5168\u306a\u6240\u3078\u30b3\u30d4\u30fc\uff06\u30da\u30fc\u30b9\u30c8\u3057\u3066\u304b\u3089\u300c\u516c\u958b\u300d\u30dc\u30bf\u30f3\u3092\u4f7f\u3063\u3066\u30d5\u30a9\u30fc\u30e0\u306e\u9001\u4fe1\u3092\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "\u516c\u958b\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3042\u306a\u305f\u306f\u73fe\u5728\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u65b0\u3057\u3044\u30bf\u30d6\u3092\u4f7f\u3063\u3066\u30ed\u30b0\u30a4\u30f3\u3057\u3001\u518d\u5ea6\u516c\u958b\u3092\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 
    "Restore draft.": "\u4e0b\u66f8\u304d\u3092\u5fa9\u5143", 
    "Result": "\u7d50\u679c", 
    "Return to compatibility table.": "\u4e92\u63db\u6027\u306e\u8868\u3078\u623b\u308b", 
    "Revert": "\u5143\u306b\u623b\u3059", 
    "Revision history.": "\u30ea\u30d3\u30b8\u30e7\u30f3\u5c65\u6b74", 
    "Sample CSS Content": "\u30b5\u30f3\u30d7\u30eb CSS \u30b3\u30f3\u30c6\u30f3\u30c4", 
    "Sample Finder": "\u30b5\u30f3\u30d7\u30eb\u691c\u7d22", 
    "Sample HTML Content": "\u30b5\u30f3\u30d7\u30eb HTML \u30b3\u30f3\u30c6\u30f3\u30c4", 
    "Sample JavaScript Content": "\u30b5\u30f3\u30d7\u30eb JavaScript \u30b3\u30f3\u30c6\u30f3\u30c4", 
    "Search Stack Overflow": "Stack Overflow \u3092\u691c\u7d22", 
    "Section": "\u30bb\u30af\u30b7\u30e7\u30f3", 
    "Sections in Document": "\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u5185\u306e\u30bb\u30af\u30b7\u30e7\u30f3", 
    "Select a section": "\u30bb\u30af\u30b7\u30e7\u30f3\u3092\u9078\u629e", 
    "Select an attachment": "\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e", 
    "Selected: ": "\u9078\u629e\u6e08\u307f: ", 
    "Submitted as %(submissionType)s": "%(submissionType)s \u3067\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f", 
    "Submitting...": "\u9001\u4fe1\u4e2d...", 
    "Syntax Highlighter": "\u69cb\u6587\u30cf\u30a4\u30e9\u30a4\u30bf\u30fc", 
    "The URL you've entered doesn't appear to be valid": "\u5165\u529b\u3055\u308c\u305f URL \u304c\u6b63\u3057\u304f\u306a\u3044\u3088\u3046\u3067\u3059", 
    "Try it live!": "\u5b9f\u969b\u306b\u8a66\u3057\u307e\u3057\u3087\u3046\uff01", 
    "URL": "URL", 
    "Updated filters.": "\u30d5\u30a3\u30eb\u30bf\u30fc\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f\u3002", 
    "View Page": "\u30da\u30fc\u30b8\u3092\u8868\u793a", 
    "View draft.": "\u4e0b\u66f8\u304d\u3092\u8868\u793a", 
    "Viewing old draft. This draft cannot be published.": "\u53e4\u3044\u4e0b\u66f8\u304d\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u4e0b\u66f8\u304d\u306f\u516c\u958b\u3067\u304d\u307e\u305b\u3093\u3002", 
    "What should the sample title be?": "\u30b5\u30f3\u30d7\u30eb\u306e\u30bf\u30a4\u30c8\u30eb\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "\u7c21\u5358\u306a 4 \u3064\u306e\u8cea\u554f\u306b\u7b54\u3048\u3066\u3082\u3089\u3048\u307e\u305b\u3093\u304b\uff1f <a %(url)s>\u3053\u306e\u30a2\u30f3\u30b1\u30fc\u30c8\u3092\u65b0\u3057\u3044\u30bf\u30d6\u3067\u958b\u3044\u3066</a> MDN \u306e\u95b2\u89a7\u5f8c\u306b\u56de\u7b54\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3088\u308d\u3057\u304f\u304a\u9858\u3044\u3057\u307e\u3059\uff01", 
    "Yes": "\u306f\u3044", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "\u73fe\u5728 %(localeName)s \u3067\u3053\u306e\u30b5\u30a4\u30c8\u3092\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002\u5e38\u306b %(localeName)s \u3067\u3053\u306e\u30b5\u30a4\u30c8\u3092\u8868\u793a\u3057\u307e\u3059\u304b\uff1f", 
    "You have a draft from: %(time)s.": "%(time)s \u306b\u4fdd\u5b58\u3055\u308c\u305f\u4e0b\u66f8\u304d\u304c\u3042\u308a\u307e\u3059\u3002", 
    "You must input a valid YouTube video URL.": "\u6b63\u3057\u3044 YouTube \u52d5\u753b\u306e URL \u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "\u304a\u4f7f\u3044\u306e\u30d6\u30e9\u30a6\u30b6\u30fc\u306f MathML \u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u4ee3\u308f\u308a\u306b CSS \u30d5\u30a9\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u8868\u793a\u3057\u307e\u3059\u3002", 
    "an unknown date": "\u4e0d\u660e\u306a\u65e5\u6642"
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
    "DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5G:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y"
    ], 
    "DATE_FORMAT": "Y\u5e74n\u6708j\u65e5", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "n\u6708j\u65e5", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "Y/m/d G:i", 
    "SHORT_DATE_FORMAT": "Y/m/d", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "G:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "Y\u5e74n\u6708"
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

