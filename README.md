# Toolpip-plugin
This is my first plugin written for my portfolio.
When writing this code, I learned how to work with encapsulation, OPP, and understood the principle of creating plug-ins.

Tooltips can be attached to any HTML element. When you hover the element with your mouse, the title attribute is displayed in a little box next to the element, just like a native tooltip.
 Not recommended for commercial projects.

# How it is work?
First, download .js and .css files from the dist folder of this repository. Include this files in your project.

```sh
<link rel="stylesheet" href="toolpip.css">
<script src="jquery.js"</script>
<script src="toolpip.js"</script>
```
The second run the plugin TOOLPIP on the element that needs a hint.

```sh    $(document).ready(function () {
        $('.tool').toolpip('click');
     });
```
Example for HTML

```sh
<button class="tool" title="This is regular info"
    data-location="left">Info left</button>
```

-"tool" - this is the class that you set.
-"title" - this attribute. The text in this attribute will be displayed in the tooltip. If this attribute is empty tooltip is not displayed.
-"data-location" - is responsible for the location of the tooltip. If this attribute is empty tooltip is displayed by default from the top.

Methods
```sh
    $('.tool').toolpip('hover')

     $('.tool').toolpip("destroy");
```

-"click" - a tool tip appears when you click on an item.
-"hover" - a tooltip appears when you hover over an item.
-"destroy" - destroys the tooltip.
