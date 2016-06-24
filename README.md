# Align-Images
Vertically and Horizontally align images to your parent div element. 

-Uses Jquery, so place the script after your Jquery script.
-To use you must target the parent container of the images. Anything inside it will align the images to it's parent div.

Example:
<div class="parentContainer">
<div class="box"><img src=""/></div>
<div class="box"><img src=""/></div>
<div class="box"><img src=""/></div>
</div>
$('.parentContainer').AutoCenter();

-This will horizontally/vertically align the images to the '.box' div. Not the '.parentContainer' div.
