/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2003 - 2016, EllisLab, Inc.
 * @license		https://expressionengine.com/license
 * @link		https://ellislab.com
 * @since		Version 4.0.0
 * @filesource
 */
"use strict";!function(e){e(document).ready(function(){e(".fluid-field-templates :input").attr("disabled","disabled"),e(".form-standard > form").on("submit",function(t){e(".fluid-field-templates :input").attr("disabled","disabled")});var t=function(t){var i=e(this).closest(".fluid-wrap"),d=e(this).data("field-name"),n=i.data("field-count"),a=i.find('.fluid-field-templates .fluid-item[data-field-name="'+d+'"]'),r=a.clone();n++,r.html(r.html().replace(RegExp("new_field_[0-9]{1,}","g"),"new_field_"+n)),i.data("field-count",n),r.find(":input").removeAttr("disabled"),e(this).parents(".fluid-item").length?e(this).closest(".fluid-item").after(r):i.find(".js-sorting-container").append(r),e.fuzzyFilter(),EE.cp&&void 0!==EE.cp.formValidation&&EE.cp.formValidation.bindInputs(r),t.preventDefault(),i.find(".open").trigger("click"),FluidField.fireEvent(e(r).data("field-type"),"add",[r]),e(document).trigger("entry:preview")};e(".fluid-wrap").on("click","a[data-field-name]",t),e(".fluid-wrap").on("click","a.fluid-remove",function(t){var i=e(this).closest(".fluid-item");FluidField.fireEvent(e(i).data("field-type"),"remove",i),e(document).trigger("entry:preview"),i.remove(),t.preventDefault()}),e(".js-sorting-container").sortable({axis:"y",containment:"parent",handle:"span.reorder",items:".fluid-item",sort:EE.sortable_sort_helper,start:function(t,i){FluidField.fireEvent(e(i.item).data("field-type"),"beforeSort",e(i.item))},stop:function(t,i){FluidField.fireEvent(e(i.item).data("field-type"),"afterSort",e(i.item)),e(document).trigger("entry:preview")}})})}(jQuery);