

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sentDate)s by %(user)s": "%(sentDate)s \u0432\u0456\u0434 %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "\u041d\u043e\u0432\u0456\u0448\u0443 \u0432\u0435\u0440\u0441\u0456\u044e \u0446\u0456\u0454\u0457 \u0441\u0442\u0430\u0442\u0442\u0456 \u0431\u0443\u043b\u043e \u043e\u043f\u0440\u0438\u043b\u044e\u0434\u043d\u0435\u043d\u043e \u043f\u0456\u0441\u043b\u044f \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0446\u0456\u0454\u0457 \u0447\u0435\u0440\u043d\u0435\u0442\u043a\u0438. \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 \u0447\u0435\u0440\u043d\u0435\u0442\u043a\u0443 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434\u0443 \u0457\u0457 \u0432\u043c\u0456\u0441\u0442\u0443, \u0430\u043b\u0435 \u0457\u0457 \u043e\u043f\u0440\u0438\u043b\u044e\u0434\u043d\u0435\u043d\u043d\u044f \u0432\u0436\u0435 \u043d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u0435.", 
    "Article Title Lookup / Link Text": "\u041f\u043e\u0448\u0443\u043a \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0443 \u0441\u0442\u0430\u0442\u0442\u0456 / \u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f", 
    "Aspect ratio": "\u0421\u043f\u0456\u0432\u0432\u0456\u0434\u043d\u043e\u0448\u0435\u043d\u043d\u044f \u0440\u043e\u0437\u043c\u0456\u0440\u0456\u0432", 
    "Attachments": "\u041f\u0440\u0438\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043d\u044f", 
    "Autosave enabled.": "\u0410\u0432\u0442\u043e\u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0443\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u043e.", 
    "CSS": "CSS", 
    "Changes saved.": "\u0417\u043c\u0456\u043d\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e.", 
    "Close": "\u0417\u0430\u043a\u0440\u0438\u0442\u0438", 
    "Close notification": "\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u0441\u043f\u043e\u0432\u0456\u0449\u0435\u043d\u043d\u044f", 
    "Close submenu": "\u0417\u0430\u043a\u0440\u0438\u0442\u0438 \u043f\u0456\u0434\u043c\u0435\u043d\u044e", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "\u041f\u043e\u0440\u0456\u0432\u043d\u044f\u0439\u0442\u0435 \u0446\u044e \u0434\u0430\u0442\u0443 \u0437 \u0434\u0430\u0442\u043e\u044e \u043e\u0441\u0442\u0430\u043d\u043d\u044c\u043e\u0457 \u0440\u0435\u0434\u0430\u043a\u0446\u0456\u0457, \u0430\u0431\u0438 \u0432\u043f\u0435\u0432\u043d\u0438\u0442\u0438\u0441\u044c, \u0449\u043e \u0432\u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0448\u0435\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0456 \u0437\u043c\u0456\u043d\u0438.", 
    "Create a Redirect": "\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f", 
    "Default": "\u0422\u0438\u043f\u043e\u0432\u043e", 
    "Details": "\u0414\u043e\u043a\u043b\u0430\u0434\u043d\u043e", 
    "Discard draft.": "\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0447\u0435\u0440\u043d\u0435\u0442\u043a\u0443.", 
    "Document": "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442", 
    "Draft autosaved:": "\u0427\u0435\u0440\u043d\u0435\u0442\u043a\u0443 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e:", 
    "Draft discarded.": "\u0427\u0435\u0440\u043d\u0435\u0442\u043a\u0443 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e.", 
    "Draft discarded:": "\u0427\u0435\u0440\u043d\u0435\u0442\u043a\u0443 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043e:", 
    "Draft published:": "\u0427\u0435\u0440\u043d\u0435\u0442\u043a\u0443 \u043e\u043f\u0440\u0438\u043b\u044e\u0434\u043d\u0435\u043d\u043e:", 
    "Draft restored.": "\u0427\u0435\u0440\u043d\u0435\u0442\u043a\u0443 \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043e.", 
    "Edit Page": "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443", 
    "Embed YouTube Video": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 YouTube \u0432\u0456\u0434\u0435\u043e", 
    "Error loading content, please refresh the page": "\u0422\u0440\u0430\u043f\u0438\u043b\u0430\u0441\u044c \u043f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u043d\u043e\u0432\u0456\u0442\u044c \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443", 
    "Error submitting as %(type)s": "\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0432\u0456\u0434 %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "\u0421\u0442\u0440\u0438\u0432\u0430\u0439\u0442\u0435! \u041e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0444\u0456\u043b\u044c\u0442\u0440\u0456\u0432\u2026", 
    "History": "\u0406\u0441\u0442\u043e\u0440\u0456\u044f", 
    "Insert Code Sample Template": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u0440\u0430\u0437\u043e\u043a \u043a\u043e\u0434\u0443 \u0448\u0430\u0431\u043b\u043e\u043d\u0443", 
    "Insert Code Sample iFrame": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u0440\u0430\u0437\u043e\u043a \u043a\u043e\u0434\u0443 iFrame", 
    "JavaScript": "JavaScript", 
    "Launch": "\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438", 
    "Locate a YouTube Video": "\u0417\u043d\u0430\u0439\u0434\u0456\u0442\u044c YouTube \u0432\u0456\u0434\u0435\u043e", 
    "MDN Redirect": "MDN \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044f", 
    "Never": "\u041d\u0456\u043a\u043e\u043b\u0438", 
    "New interest...": "\u041d\u043e\u0432\u0435 \u0437\u0430\u0446\u0456\u043a\u0430\u0432\u043b\u0435\u043d\u043d\u044f...", 
    "New tag...": "\u041d\u043e\u0432\u0430 \u043c\u0456\u0442\u043a\u0430...", 
    "No": "\u041d\u0456", 
    "No Highlight": "\u0411\u0435\u0437 \u043f\u0456\u0434\u0441\u0432\u0456\u0447\u0443\u0432\u0430\u043d\u043d\u044f", 
    "No attachments available": "\u041d\u0435\u043c\u0430\u0454 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u043f\u0440\u0438\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u044c", 
    "No selection": "\u041d\u0435 \u0432\u0438\u0431\u0440\u0430\u043d\u043e", 
    "Open": "\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438", 
    "Open implementation notes": "\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u043f\u0440\u0438\u043c\u0456\u0442\u043a\u0438 \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457", 
    "Open in %(site)s": "\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u043d\u0430 %(site)s", 
    "Paste YouTube Video URL": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 URL \u0432\u0456\u0434\u0435\u043e \u0437 YouTube", 
    "Published version": "\u041e\u043f\u0440\u0438\u043b\u044e\u0434\u043d\u0435\u043d\u0430 \u0432\u0435\u0440\u0441\u0456\u044f", 
    "Publishing changes\u2026": "\u041e\u043f\u0440\u0438\u043b\u044e\u0434\u043d\u0435\u043d\u043d\u044f \u0437\u043c\u0456\u043d\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u043e\u043f\u0440\u0438\u043b\u044e\u0434\u043d\u0438\u0442\u0438. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043a\u043e\u043f\u0456\u044e\u0439\u0442\u0435 \u0441\u0432\u043e\u0457 \u0437\u043c\u0456\u043d\u0438 \u0432 \u0431\u0435\u0437\u043f\u0435\u0447\u043d\u0435 \u043c\u0456\u0441\u0446\u0435 \u0442\u0430 \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438 \u0444\u043e\u0440\u043c\u0443 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0432\u0448\u0438\u0441\u044c \u043a\u043d\u043e\u043f\u043a\u043e\u044e \"\u041e\u043f\u0440\u0438\u043b\u044e\u0434\u043d\u0438\u0442\u0438\".", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "\u041e\u043f\u0440\u0438\u043b\u044e\u0434\u043d\u0435\u043d\u043d\u044f \u043d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f, \u0431\u043e \u0442\u0435\u0440\u043c\u0456\u043d \u0434\u0456\u0457 \u0441\u0435\u0430\u043d\u0441\u0443 \u0441\u043f\u043b\u0438\u0432. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u043e\u0432\u043e\u044e \u0432\u043a\u043b\u0430\u0434\u043a\u043e\u044e, \u0449\u043e\u0431 \u0437\u0434\u0456\u0439\u0441\u043d\u0438\u0442\u0438 \u0432\u0445\u0456\u0434, \u0442\u0430 \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043e\u043f\u0440\u0438\u043b\u044e\u0434\u043d\u0438\u0442\u0438 \u0437\u043d\u043e\u0432\u0443.", 
    "Restore draft.": "\u0412\u0456\u0434\u043d\u043e\u0432\u0438\u0442\u0438 \u0447\u0435\u0440\u043d\u0435\u0442\u043a\u0443.", 
    "Result": "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442", 
    "Return to compatibility table.": "\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u0434\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0456 \u0441\u0443\u043c\u0456\u0441\u043d\u043e\u0441\u0442\u0456.", 
    "Revert": "\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438", 
    "Revision history.": "\u0406\u0441\u0442\u043e\u0440\u0456\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0456\u0439.", 
    "Sample CSS Content": "\u0417\u0440\u0430\u0437\u043e\u043a CSS-\u0432\u043c\u0456\u0441\u0442\u0443", 
    "Sample Finder": "\u041f\u043e\u0448\u0443\u043a \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456\u0432", 
    "Sample HTML Content": "\u0417\u0440\u0430\u0437\u043e\u043a HTML-\u0432\u043c\u0456\u0441\u0442\u0443", 
    "Sample JavaScript Content": "\u0417\u0440\u0430\u0437\u043e\u043a JavaScript-\u0432\u043c\u0456\u0441\u0442\u0443", 
    "Search Stack Overflow": "\u041f\u043e\u0448\u0443\u043a \u043d\u0430 Stack Overflow", 
    "Section": "\u0420\u043e\u0437\u0434\u0456\u043b", 
    "Sections in Document": "\u0420\u043e\u0437\u0434\u0456\u043b\u0438 \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456", 
    "Select a section": "\u0412\u0438\u0431\u0456\u0440 \u0440\u043e\u0437\u0434\u0456\u043b\u0443", 
    "Select an attachment": "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043f\u0440\u0438\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043d\u044f", 
    "Selected: ": "\u0412\u0438\u0431\u0440\u0430\u043d\u043e: ", 
    "Submitted as %(submissionType)s": "\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e \u044f\u043a %(submissionType)s", 
    "Submitting...": "\u041d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f...", 
    "Syntax Highlighter": "\u041f\u0456\u0434\u0441\u0432\u0456\u0447\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0443", 
    "The URL you've entered doesn't appear to be valid": "\u0421\u0445\u043e\u0436\u0435, \u0432\u0438 \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u0434\u0456\u0439\u0441\u043d\u0438\u0439 URL", 
    "URL": "URL", 
    "Updated filters.": "\u0424\u0456\u043b\u044c\u0442\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e.", 
    "View Page": "\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443", 
    "View draft.": "\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u043d\u0443\u0442\u0438 \u0447\u0435\u0440\u043d\u0435\u0442\u043a\u0443.", 
    "Viewing old draft. This draft cannot be published.": "\u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434 \u0441\u0442\u0430\u0440\u043e\u0457 \u0447\u0435\u0440\u043d\u0435\u0442\u043a\u0438. \u0426\u044e \u0447\u0435\u0440\u043d\u0435\u0442\u043a\u0443 \u043d\u0435 \u043c\u043e\u0436\u043d\u0430 \u043e\u043f\u0440\u0438\u043b\u044e\u0434\u043d\u0438\u0442\u0438.", 
    "What should the sample title be?": "\u042f\u043a\u0438\u043c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0437\u0440\u0430\u0437\u043a\u0430?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "\u041d\u0435 \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0441\u0442\u0438 \u043d\u0430 4 \u043d\u0430\u0448\u0456 \u043f\u0438\u0442\u0430\u043d\u043d\u044f? <a %(url)s>\u0412\u0456\u0434\u043a\u0440\u0438\u0439\u0442\u0435 \u043e\u043f\u0438\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0432 \u043d\u043e\u0432\u0456\u0439 \u0432\u043a\u043b\u0430\u0434\u0446\u0456</a> \u0456 \u043f\u0440\u043e\u0439\u0434\u0456\u0442\u044c \u0439\u043e\u0433\u043e, \u043f\u0456\u0441\u043b\u044f \u0440\u043e\u0431\u043e\u0442\u0438 \u0437 \u0441\u0430\u0439\u0442\u043e\u043c. \u0414\u044f\u043a\u0443\u0454\u043c\u043e!", 
    "Yes": "\u0422\u0430\u043a", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "\u0417\u0430\u0440\u0430\u0437 \u043e\u0431\u0440\u0430\u043d\u043e \u043c\u043e\u0432\u0443: %(localeName)s. \u0425\u043e\u0447\u0435\u0442\u0435 \u0437\u0430\u0432\u0436\u0434\u0438 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434\u0430\u0442\u0438 \u0441\u0430\u0439\u0442 \u0446\u0456\u0454\u044e \u043c\u043e\u0432\u043e\u044e?", 
    "You have a draft from: %(time)s.": "\u0423 \u0432\u0430\u0441 \u0454 \u0447\u0435\u0440\u043d\u0435\u0442\u043a\u0430 \u0432\u0456\u0434: %(time)s.", 
    "You must input a valid YouTube video URL.": "\u0412\u0438 \u043c\u0430\u0454\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u0456\u0439\u0441\u043d\u0438\u0439 URL \u0432\u0456\u0434\u0435\u043e \u0437 YouTube.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454 MathML. \u041d\u0430\u0442\u043e\u043c\u0456\u0441\u0442\u044c \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0437\u0430\u043f\u0430\u0441\u043d\u0435 \u0432\u0438\u0440\u0456\u0448\u0435\u043d\u043d\u044f \u043d\u0430 CSS.", 
    "an unknown date": "\u043d\u0435\u0432\u0456\u0434\u043e\u043c\u0430 \u0434\u0430\u0442\u0430"
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
    "DATETIME_FORMAT": "d E Y \u0440. H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%d %B %Y %H:%M:%S", 
      "%d %B %Y %H:%M:%S.%f", 
      "%d %B %Y %H:%M", 
      "%d %B %Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "d E Y \u0440.", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d %B %Y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "d F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i", 
    "SHORT_DATE_FORMAT": "d.m.Y", 
    "THOUSAND_SEPARATOR": "\u00a0", 
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
