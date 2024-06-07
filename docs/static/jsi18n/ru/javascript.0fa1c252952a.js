

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
    "%(sentDate)s by %(user)s": "%(sentDate)s \u043e\u0442 %(user)s", 
    "A newer version of this article has been published since this draft was saved. You can restore the draft to view the content, but you will not be able to submit it for publishing.": "\u0421 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0430 \u0431\u044b\u043b\u0430 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430 \u0431\u043e\u043b\u0435\u0435 \u043d\u043e\u0432\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u044d\u0442\u043e\u0439 \u0441\u0442\u0430\u0442\u044c\u0438. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442, \u043d\u043e \u0432\u044b \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e.", 
    "Article Title Lookup / Link Text": "\u041f\u043e\u0438\u0441\u043a \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430 \u0441\u0442\u0430\u0442\u044c\u0438 / \u0422\u0435\u043a\u0441\u0442 \u0441\u0441\u044b\u043b\u043a\u0438", 
    "Aspect ratio": "\u0421\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u043e\u043d", 
    "Attachments": "\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u0451\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b", 
    "Autosave enabled.": "\u0410\u0432\u0442\u043e\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e.", 
    "CSS": "CSS", 
    "Changes saved.": "\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b.", 
    "Close": "\u0417\u0430\u043a\u0440\u044b\u0442\u044c", 
    "Close notification": "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u0435", 
    "Close submenu": "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u0434\u043c\u0435\u043d\u044e", 
    "Compare this date to the latest revision date to ensure you're not overwriting later changes.": "\u0421\u0440\u0430\u0432\u043d\u0438\u0442\u0435 \u044d\u0442\u0443 \u0434\u0430\u0442\u0443 \u0441 \u0434\u0430\u0442\u043e\u0439 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438, \u0447\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442\u0435 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f.", 
    "Create a Redirect": "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435", 
    "Default": "\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e", 
    "Details": "\u0414\u0435\u0442\u0430\u043b\u0438", 
    "Discard draft.": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a.", 
    "Document": "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442", 
    "Draft autosaved:": "\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u0430\u0432\u0442\u043e\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d:", 
    "Draft discarded.": "\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u0443\u0434\u0430\u043b\u0451\u043d.", 
    "Draft discarded:": "\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u0443\u0434\u0430\u043b\u0451\u043d:", 
    "Draft published:": "\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d:", 
    "Draft restored.": "\u0427\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d.", 
    "Edit Page": "\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443", 
    "Embed YouTube Video": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c YouTube \u0432\u0438\u0434\u0435\u043e", 
    "Error loading content, please refresh the page": "\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443", 
    "Error submitting as %(type)s": "\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043a\u0430\u043a %(type)s", 
    "HTML": "HTML", 
    "Hang on! Updating filters\u2026": "\u041f\u043e\u0433\u043e\u0434\u0438\u0442\u0435! \u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u2026", 
    "History": "\u0418\u0441\u0442\u043e\u0440\u0438\u044f", 
    "Insert Code Sample Template": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0434\u0430 \u0448\u0430\u0431\u043b\u043e\u043d\u0430", 
    "Insert Code Sample iFrame": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u0434\u0430 \u0432 iframe.", 
    "JavaScript": "JavaScript", 
    "Launch": "\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c", 
    "Link": "\u0421\u0441\u044b\u043b\u043a\u0430", 
    "Locate a YouTube Video": "\u041d\u0430\u0439\u0442\u0438 YouTube \u0432\u0438\u0434\u0435\u043e", 
    "MDN Redirect": "MDN \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435", 
    "Never": "\u041d\u0438\u043a\u043e\u0433\u0434\u0430", 
    "New interest...": "\u041d\u043e\u0432\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0435\u0441...", 
    "New tag...": "\u041d\u043e\u0432\u0430\u044f \u043c\u0435\u0442\u043a\u0430...", 
    "No": "\u041d\u0435\u0442", 
    "No Highlight": "\u0411\u0435\u0437 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0438", 
    "No attachments available": "\u041d\u0435\u0442 \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0439", 
    "No selection": "\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e", 
    "Open": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c", 
    "Open implementation notes": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u043a\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438", 
    "Open in %(site)s": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043d\u0430 %(site)s", 
    "Paste YouTube Video URL": "\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 URL \u0432\u0438\u0434\u0435\u043e YouTube", 
    "Published version": "\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f", 
    "Publishing changes\u2026": "\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439\u2026", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the \"Publish\" button.": "\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u0438 \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0432\u0430\u0448\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0438 \u043f\u043e\u043f\u044b\u0442\u0430\u0439\u0442\u0435\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043d\u043e\u0432\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043d\u043e\u043f\u043a\u0443 \"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c\".", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "\u041f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c. \u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b \u043d\u0435 \u0432\u043e\u0448\u043b\u0438. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0432\u043a\u043b\u0430\u0434\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u0439\u0442\u0438 \u0438 \u043f\u043e\u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0441\u043d\u043e\u0432\u0430.", 
    "Restore draft.": "\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a.", 
    "Result": "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442", 
    "Return to compatibility table.": "\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438.", 
    "Revert": "\u0412\u0435\u0440\u043d\u0443\u0442\u044c", 
    "Revision history.": "\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0440\u0435\u0432\u0438\u0437\u0438\u0439.", 
    "Sample CSS Content": "CSS \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u0430", 
    "Sample Finder": "\u041f\u043e\u0438\u0441\u043a \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432", 
    "Sample HTML Content": "HTML \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u0430", 
    "Sample JavaScript Content": "JavaScript \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043f\u0440\u0438\u043c\u0435\u0440\u0430", 
    "Search Stack Overflow": "\u041f\u043e\u0438\u0441\u043a \u043f\u043e Stack Overflow", 
    "Section": "\u0420\u0430\u0437\u0434\u0435\u043b", 
    "Sections in Document": "\u0420\u0430\u0437\u0434\u0435\u043b\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430", 
    "Select a section": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0440\u0430\u0437\u0434\u0435\u043b", 
    "Select an attachment": "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435", 
    "Selected: ": "\u0412\u044b\u0431\u0440\u0430\u043d\u043e: ", 
    "Submitted as %(submissionType)s": "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043a\u0430\u043a %(submissionType)s", 
    "Submitting...": "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e...", 
    "Syntax Highlighter": "\u041f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u0430 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430", 
    "The URL you've entered doesn't appear to be valid": "URL, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u0432\u0432\u0435\u043b\u0438, \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u043c", 
    "Try it live!": "\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0432\u0436\u0438\u0432\u0443\u044e!", 
    "URL": "URL", 
    "Updated filters.": "\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b.", 
    "View Page": "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443", 
    "View draft.": "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a.", 
    "Viewing old draft. This draft cannot be published.": "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0441\u0442\u0430\u0440\u043e\u0433\u043e \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a\u0430. \u042d\u0442\u043e\u0442 \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u043d\u0435\u043b\u044c\u0437\u044f \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c.", 
    "What should the sample title be?": "\u041a\u0430\u043a\u0438\u043c \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u0440\u0438\u043c\u0435\u0440\u0430?", 
    "Would you answer 4 questions for us? <a %(url)s>Open the survey in a new tab</a> and fill it out when you are done on the site. Thanks!": "\u041d\u0435 \u0445\u043e\u0442\u0438\u0442\u0435 \u043b\u0438 \u0432\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 4 \u043d\u0430\u0448\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u0430? <a %(url)s>\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043e\u043f\u0440\u043e\u0441 \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435</a> \u0438 \u043f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u0435\u0433\u043e, \u043a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u0441\u0430\u0439\u0442\u043e\u043c. \u0421\u043f\u0430\u0441\u0438\u0431\u043e!", 
    "Yes": "\u0414\u0430", 
    "You are now viewing this site in %(localeName)s. Do you always want to view this site in %(localeName)s?": "\u0421\u0435\u0439\u0447\u0430\u0441 \u0432\u044b\u0431\u0440\u0430\u043d \u044f\u0437\u044b\u043a - %(localeName)s. \u0412\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u0441\u0430\u0439\u0442 \u043d\u0430 \u044d\u0442\u043e\u043c \u044f\u0437\u044b\u043a\u0435?", 
    "You have a draft from: %(time)s.": "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0447\u0435\u0440\u043d\u043e\u0432\u0438\u043a \u043e\u0442: %(time)s.", 
    "You must input a valid YouTube video URL.": "\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u0432\u0435\u0441\u0442\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 URL \u043d\u0430 YouTube \u0432\u0438\u0434\u0435\u043e.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 MathML. \u0412\u043c\u0435\u0441\u0442\u043e \u043d\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0430\u0432\u0430\u0440\u0438\u0439\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 CSS.", 
    "an unknown date": "\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u0434\u0430\u0442\u0430"
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
    "DATETIME_FORMAT": "j E Y \u0433. G:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%d.%m.%y %H:%M:%S", 
      "%d.%m.%y %H:%M:%S.%f", 
      "%d.%m.%y %H:%M", 
      "%d.%m.%y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j E Y \u0433.", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i", 
    "SHORT_DATE_FORMAT": "d.m.Y", 
    "THOUSAND_SEPARATOR": "\u00a0", 
    "TIME_FORMAT": "G:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y \u0433."
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

