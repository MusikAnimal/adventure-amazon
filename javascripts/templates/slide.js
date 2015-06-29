(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['slide'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<input id=\"img-"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" type=\"radio\" name=\"radio-btn\" "
    + escapeExpression(((helper = (helper = helpers.checkedText || (depth0 != null ? depth0.checkedText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"checkedText","hash":{},"data":data}) : helper)))
    + " />\n<span class=\"slide-container\">\n  <div class=\"slide\">\n    <img src=\"images/"
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + ".jpg\" />\n  </div>\n  <div class=\"nav\">\n    <label class=\"prev\" for=\"img-"
    + escapeExpression(((helper = (helper = helpers.prevId || (depth0 != null ? depth0.prevId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prevId","hash":{},"data":data}) : helper)))
    + "\">&#x2039;</label>\n    <label class=\"next\" for=\"img-"
    + escapeExpression(((helper = (helper = helpers.nextId || (depth0 != null ? depth0.nextId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"nextId","hash":{},"data":data}) : helper)))
    + "\">&#x203a;</label>\n  </div>\n</span>";
},"useData":true});
})();