/* WP External Links - Admin */
/*global jQuery, window*/
jQuery(function ($) {
    'use strict';

    var $wrapper = $('.wpel-admin-settings');

    /**
     * Support
     */
    $wrapper.on('click', '.js-wpel-copy', function (e) {
        e.preventDefault();

        var node = $wrapper.find('.js-wpel-copy-target').get(0);
        node.select();

        var range = document.createRange();
        range.selectNode(node);
        window.getSelection().addRange(range);

        try {
            document.execCommand('copy');
        } catch(err) {
            console.log('Unable to copy');
        }
    });

    /**
     * Apply Sections Settings
     */
    $wrapper.on('change', '.js-wpel-apply input', function () {
        var apply_all = $(this).is(':checked');
        var $items = $wrapper.find('.js-wpel-apply-child');

        if (apply_all) {
            $items.hide();
        } else {
            $items.show();
        }
    });

    // trigger immediatly
    $wrapper.find('.js-wpel-apply input').change();


    /**
     * Link Settings
     */
    $wrapper.on('change', '.js-apply-settings input', function () {
        var $items = $wrapper.find('.form-table tr').not('.js-apply-settings');

        if ($(this).prop('checked')) {
            $items.show();
            $wrapper.find('.js-icon-type select').change();
        } else {
            $items.hide();
        }
    });

    // trigger immediatly
    $wrapper.find('.js-apply-settings input').change();

    $wrapper.on('change', '.js-icon-type select', function () {
        var iconType = $(this).val();
        var $items = $wrapper.find('.js-icon-type-child');

        if (iconType === 'dashicon') {
            $items.hide();
            $items.not('.js-icon-type-fontawesome').show();
        } else if (iconType === 'fontawesome') {
            $items.hide();
            $items.not('.js-icon-type-dashicon').show();
        } else {
            $items.hide();
        }
    });

    // trigger immediatly
    $wrapper.find('.js-icon-type select').change();

    /**
     * Other
     */
    $wrapper.on('click', '[data-wpel-help]', function () {
        var helpKey = $(this).data('wpel-help');

        if (helpKey) {
            $('#tab-link-'+ helpKey +' a').click();
        }

        $('#contextual-help-link[aria-expanded="false"]').click();
    });


});
