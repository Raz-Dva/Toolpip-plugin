;
(function ($) {

    $.fn.toolpip = function () {
        /*=====================================================================*/
        var that = this;
        var toolMethod = (function () {

            // console.log(that);
            var addToolpip, positionTool, creatClick, textToolpip = true,
                i = 0;
            //function to create a tooltip in DOM
            addToolpip = function () {
                var toolItem = $(this).closest('.toolpip-ever'),
                    title = toolItem.attr('title'),
                    tooltipClass = toolItem.attr('data-class');
                i += 1;

                $("body").append(
                    "<div class='toolpip " + tooltipClass + "' id='tool" + i + "'>" +
                    "<p>" + toolItem.attr('title') + "</p></div>");

                if (title == '' || title == undefined) {
                    textToolpip = false;
                }
                return $("#tool" + i);
            };
            // determine the position of tooltip
            positionTool = function (parent, toolpip) {

                var offsetLeft, offsetRight, offsetTop,
                    localLeft, localRight, localTop, localBottom,
                    posLeft = Math.round($(parent).offset().left),
                    posTop = Math.round($(parent).offset().top),
                    posRight = Math.round(posLeft + $(parent).outerWidth()),
                    posBottom = Math.round(posTop + $(parent).outerHeight()),
                    location = $(parent).attr('data-location');
                localLeft = function (aim) {
                    aim.css({
                        'left': (posLeft - toolpip.outerWidth()) + 'px',
                        'top': (posBottom - ($(parent).outerHeight() / 2) - (toolpip.outerHeight() / 2)) + 'px',
                        'margin-left': '-9px'
                    });
                    aim.attr('data-show', 'left')
                };


                localRight = function (aim) {
                    aim.css({
                        'left': posRight,
                        'top': (posBottom - ($(parent).outerHeight() / 2) - (toolpip.outerHeight() / 2)) + 'px',
                        'margin-left': '9px'
                    });
                    aim.attr('data-show', 'right')
                };
                localBottom = function (aim) {
                    aim.css({
                        'left': (posLeft + ($(parent).outerWidth() / 2) - (toolpip.outerWidth() / 2)) + 'px',
                        'top': posBottom,
                        'margin-top': '9px'
                    });
                    aim.attr('data-show', 'bottom')
                };
                localTop = function (aim) {
                    aim.css({
                        'left': (posLeft + ($(parent).outerWidth() / 2) - (toolpip.outerWidth() / 2)) + 'px',
                        'top': posTop - toolpip.outerHeight(),
                        'margin-top': '-9px'
                    });
                    aim.attr('data-show', 'top')
                };
                if (location == 'left') {
                    localLeft(toolpip);
                }
                if (location == 'right') {
                    localRight(toolpip);
                }
                if (location == 'bottom') {
                    localBottom(toolpip);
                }

                if (location == 'top' || location == undefined || location == '') {
                    localTop(toolpip);
                }
                if (textToolpip) {
                    toolpip.fadeIn(200)
                } else {
                    toolpip.fadeOut();
                }
                //if the tooltips go beyond the bounds of the body
                offsetLeft = Math.round(toolpip.offset().left);
                offsetRight = Math.round(offsetLeft + toolpip.outerWidth());
                offsetTop = Math.round(toolpip.offset().top);
                //offsetBottom = Math.round(offsetTop + toolpip.outerHeight());

                if (offsetLeft < 0) {
                    toolpip.removeAttr('data-show');
                    localBottom(toolpip);
                    toolpip.offset({left: 0});
                }
                if (offsetRight > $('body').width()) {
                    toolpip.removeAttr('data-show');
                    localBottom(toolpip);
                    toolpip.offset({left: ($('body').width()) - ( toolpip.outerWidth())});
                }
                if (offsetTop < 0) {
                    toolpip.removeAttr('data-show');
                    localBottom(toolpip);
                }                textToolpip = true;
                return toolpip;
            };

            /*============ Methods ============*/
            return {
                hover: function () {
                    $(this).on("mouseenter.tool", function (e) {
                        $('.toolpip').remove();
                        creatClick = addToolpip.call(e.target);
                        positionTool(e.target, creatClick);

                    }).on("mouseleave.tool", function (e) {
                        $('.toolpip').remove();
                    });
                },

                click: function () {

                    $(window).on("click.tool", function (e) {

                        if (!$(e.target).is(that) && that.has(e.target).length === 0) {
                            $('.toolpip').remove();
                        }
                    });
                    $(this).on("click.tool", function (e) {
                        if ($(e.target).is(that) || that.has(e.target).length > 0) {
                            $('.toolpip').remove();
                            creatClick = addToolpip.call(e.target);
                            positionTool(e.target, creatClick);
                        }
                    });
                },
                destroy: function () {
                    $(window).off('.tool');
                    return this.each(function () {
                        $(this).off('.tool');
                    })
                }
            }
        }());
        $(this).addClass('toolpip-ever');
        var args = Array.prototype.slice.apply(arguments);
      if (!args.length == 0) {
            for (var i = 0; i < args.length; i++) {
                var methodVal = args[i];
                if (toolMethod[methodVal]) {
                    toolMethod[methodVal].call(this);
                }
                else if (!toolMethod[methodVal]) {
                    console.warn('Incorrect method')
                }
            }
        }
        else {
            console.warn('The method does not exist')
        }
        return that;
    };
})(jQuery);
