

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
    "%(sentDate)s by %(user)s": "%(sentDate)s b\u1edfi %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "M\u1ed9t b\u1ea3n m\u1edbi c\u1ee7a b\u00e0i vi\u1ebft n\u00e0y \u0111\u00e3 \u0111\u01b0\u1ee3c xu\u1ea5t b\u1ea3n k\u1ec3 t\u1eeb khi b\u1ea3n th\u1ea3o n\u00e0y \u0111\u01b0\u1ee3c l\u01b0u. B\u1ea1n c\u00f3 th\u1ec3 kh\u00f4i ph\u1ee5c b\u1ea3n th\u1ea3o n\u00e0y \u0111\u1ec3 xem n\u1ed9i dung, nh\u01b0ng kh\u00f4ng th\u1ec3 g\u1eedi b\u1ea3n th\u1ea3o n\u00e0y \u0111\u1ec3 xu\u1ea5t b\u1ea3n.", 
    "Article Title Lookup / Link Text": "Ti\u00eau \u0111\u1ec1 b\u00e0i vi\u1ebft / Li\u00ean k\u1ebft v\u0103n b\u1ea3n", 
    "Aspect ratio": "T\u1ec9 l\u1ec7 khung h\u00ecnh", 
    "Attachments": "N\u1ed9i dung \u0111\u00ednh k\u00e8m", 
    "Autosave enabled.": "T\u00ednh n\u0103ng t\u1ef1 \u0111\u1ed9ng l\u01b0u \u0111ang b\u1eadt.", 
    "CSS": "CSS", 
    "Changes saved.": "C\u00e1c thay \u0111\u1ed5i \u0111\u00e3 \u0111\u01b0\u1ee3c l\u01b0u.", 
    "Close": "\u0110\u00f3ng", 
    "Close notification": "\u0110\u00f3ng th\u00f4ng b\u00e1o", 
    "Close submenu": "\u0110\u00f3ng menu con", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "So s\u00e1nh ng\u00e0y n\u00e0y v\u1edbi ng\u00e0y s\u1eeda \u0111\u1ed5i m\u1edbi nh\u1ea5t \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o b\u1ea1n kh\u00f4ng ghi \u0111\u00e8 c\u00e1c thay \u0111\u1ed5i sau n\u00e0y.", 
    "Create a Redirect": "T\u1ea1o m\u1ed9t \u0111i\u1ec1u h\u01b0\u1edbng", 
    "Default": "M\u1eb7c \u0111\u1ecbnh", 
    "Details": "Chi ti\u1ebft", 
    "Discard draft.": "H\u1ee7y b\u1ea3n th\u1ea3o.", 
    "Document": "T\u00e0i li\u1ec7u", 
    "Draft autosaved:": "B\u1ea3n th\u1ea3o \u0111\u01b0\u1ee3c l\u01b0u t\u1ef1 \u0111\u1ed9ng:", 
    "Draft discarded.": "\u0110\u00e3 h\u1ee7y b\u1ea3n th\u1ea3o.", 
    "Draft discarded:": "B\u1ea3n th\u1ea3o \u0111\u00e3 b\u1ecb h\u1ee7y:", 
    "Draft published:": "B\u1ea3n th\u1ea3o \u0111\u00e3 \u0111\u01b0\u1ee3c xu\u1ea5t b\u1ea3n:", 
    "Draft restored.": "\u0110\u00e3 kh\u00f4i ph\u1ee5c b\u1ea3n th\u1ea3o.", 
    "Edit Page": "Ch\u1ec9nh s\u1eeda trang", 
    "Embed YouTube Video": "Nh\u00fang video YouTube", 
    "Error loading content, please refresh the page": "L\u1ed7i khi t\u1ea3i n\u1ed9i dung, vui l\u00f2ng l\u00e0m m\u1edbi trang", 
    "Error submitting as %(type)s": "L\u1ed7i khi g\u1eedi d\u01b0\u1edbi d\u1ea1ng %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "Vui l\u00f2ng \u0111\u1ee3i! \u0110ang c\u1eadp nh\u1eadt b\u1ed9 l\u1ecdc...", 
    "History": "L\u1ecbch s\u1eed", 
    "Insert Code Sample Template": "Ch\u00e8n \u0111o\u1ea1n m\u00e3 m\u1eabu", 
    "Insert Code Sample iFrame": "Ch\u00e8n m\u00e3 m\u1eabu iFrame", 
    "JavaScript": "JavaScript", 
    "Launch": "Kh\u1edfi ch\u1ea1y", 
    "Link": "Li\u00ean k\u1ebft", 
    "Locate a YouTube Video": "Ch\u00e8n video YouTube", 
    "MDN Redirect": "\u0110i\u1ec1u h\u01b0\u1edbng MDN", 
    "Never": "Kh\u00f4ng bao gi\u1edd", 
    "New interest...": "Quan t\u00e2m m\u1edbi...", 
    "New tag...": "Tag m\u1edbi...", 
    "No": "Kh\u00f4ng", 
    "No Highlight": "Kh\u00f4ng t\u00f4 s\u00e1ng", 
    "No attachments available": "Kh\u00f4ng c\u00f3 n\u1ed9i dung \u0111\u00ednh k\u00e8m", 
    "No selection": "Ch\u01b0a ch\u1ecdn m\u1ee5c n\u00e0o", 
    "Open": "M\u1edf", 
    "Open implementation notes": "M\u1edf ghi ch\u00fa th\u1ef1c hi\u1ec7n", 
    "Open in %(site)s": "M\u1edf trong %(site)s", 
    "Paste YouTube Video URL": "D\u00e1n URL Video t\u1eeb YouTube", 
    "Published version": "Phi\u00ean b\u1ea3n \u0111\u00e3 \u0111\u01b0\u1ee3c xu\u1ea5t b\u1ea3n", 
    "Publishing changes\u2026": "Xu\u1ea5t b\u1ea3n nh\u1eefng thay \u0111\u1ed5i\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "Xu\u1ea5t b\u1ea3n th\u1ea5t b\u1ea1i. Vui l\u00f2ng sao ch\u00e9p v\u00e0 d\u00e1n c\u00e1c thay \u0111\u1ed5i c\u1ee7a b\u1ea1n v\u00e0o n\u01a1i an to\u00e0n v\u00e0 th\u1eed g\u1eedi bi\u1ec3u m\u1eabu b\u1eb1ng n\u00fat \"Xu\u1ea5t b\u1ea3n\".", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "Xu\u1ea5t b\u1ea3n th\u1ea5t b\u1ea1i. B\u1ea1n hi\u1ec7n ch\u01b0a \u0111\u0103ng nh\u1eadp. Vui l\u00f2ng s\u1eed d\u1ee5ng th\u1ebb m\u1edbi \u0111\u1ec3 \u0111\u0103ng nh\u1eadp v\u00e0 th\u1eed xu\u1ea5t b\u1ea3n l\u1ea1i.", 
    "Restore draft.": "Kh\u00f4i ph\u1ee5c b\u1ea3n th\u1ea3o.", 
    "Result": "K\u1ebft qu\u1ea3", 
    "Return to compatibility table.": "Quay tr\u1edf l\u1ea1i b\u1ea3ng t\u01b0\u01a1ng th\u00edch.", 
    "Revert": "Ph\u1ee5c h\u1ed3i", 
    "Revision history.": "L\u1ecbch s\u1eed s\u1eeda \u0111\u1ed5i.", 
    "Sample CSS Content": "N\u1ed9i dung CSS m\u1eabu", 
    "Sample Finder": "T\u00ecm ki\u1ebfm m\u1eabu", 
    "Sample HTML Content": "N\u1ed9i dung HTML m\u1eabu", 
    "Sample JavaScript Content": "N\u1ed9i dung JavaScript m\u1eabu", 
    "Search Stack Overflow": "T\u00ecm tr\u00ean Stack Overflow", 
    "Section": "Ph\u1ea7n", 
    "Sections in Document": "C\u00e1c ph\u1ea7n trong t\u00e0i li\u1ec7u", 
    "Select a section": "Ch\u1ecdn m\u1ed9t ph\u1ea7n", 
    "Select an attachment": "Ch\u1ecdn m\u1ed9t n\u1ed9i dung \u0111\u00ednh k\u00e8m", 
    "Selected: ": "\u0110\u00e3 ch\u1ecdn:", 
    "Submitted as %(submissionType)s": "\u0110\u00e3 g\u1eedi d\u01b0\u1edbi d\u1ea1ng %(submissionType)s", 
    "Submitting...": "\u0110ang g\u1eedi...", 
    "Syntax Highlighter": "T\u00f4 s\u00e1ng c\u00fa ph\u00e1p", 
    "The URL you've entered doesn't appear to be valid": "URL b\u1ea1n \u0111\u00e3 nh\u1eadp c\u00f3 v\u1ebb kh\u00f4ng h\u1ee3p l\u1ec7", 
    "Try it live!": "H\u00e3y th\u1eed tr\u1ef1c ti\u1ebfp!", 
    "URL": "URL", 
    "Updated filters.": "\u0110\u00e3 c\u1eadp nh\u1eadt b\u1ed9 l\u1ecdc.", 
    "View Page": "Xem trang", 
    "View draft.": "Xem b\u1ea3n th\u1ea3o.", 
    "Viewing old draft. This draft cannot be published.": "\u0110ang xem b\u1ea3n th\u1ea3o c\u0169. B\u1ea3n th\u1ea3o n\u00e0y kh\u00f4ng th\u1ec3 \u0111\u01b0\u1ee3c xu\u1ea5t b\u1ea3n.", 
    "What should the sample title be?": "Ti\u00eau \u0111\u1ec1 m\u1eabu n\u00ean l\u00e0 g\u00ec?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "B\u1ea1n c\u00f3 mu\u1ed1n tr\u1ea3 l\u1eddi 4 c\u00e2u h\u1ecfi cho ch\u00fang t\u00f4i? <a %(url)s>M\u1edf kh\u1ea3o s\u00e1t trong th\u1ebb m\u1edbi</a> v\u00e0 \u0111i\u1ec1n v\u00e0o khi b\u1ea1n ho\u00e0n th\u00e0nh xong c\u00f4ng vi\u1ec7c tr\u00ean trang web. C\u1ea3m \u01a1n!", 
    "Yes": "C\u00f3", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "B\u1ea1n \u0111ang xem website n\u00e0y b\u1eb1ng %(localeName)s. B\u1ea1n c\u00f3 mu\u1ed1n xem trang web n\u00e0y v\u1edbi %(localeName)s th\u01b0\u1eddng xuy\u00ean?", 
    "You have a draft from: %(time)s.": "B\u1ea1n c\u00f3 m\u1ed9t b\u1ea3n th\u1ea3o t\u1eeb l\u00fac: %(time)s.", 
    "You must input a valid YouTube video URL.": "B\u1ea1n ph\u1ea3i nh\u1eadp v\u00e0o m\u1ed9t URL h\u1ee3p l\u1ec7 cho video t\u1eeb YouTube.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Tr\u00ecnh duy\u1ec7t c\u1ee7a b\u1ea1n kh\u00f4ng h\u1ed7 tr\u1ee3 MathML. CSS \u0111\u00e3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 thay th\u1ebf.", 
    "an unknown date": "m\u1ed9t ng\u00e0y kh\u00f4ng r\u00f5"
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
    "DATETIME_FORMAT": "H:i \\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y", 
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
    "DATE_FORMAT": "\\N\\g\u00e0\\y d \\t\\h\u00e1\\n\\g n \\n\u0103\\m Y", 
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
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "H:i d-m-Y", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
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

