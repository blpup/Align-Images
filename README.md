# Align-Images
Vertically and Horizontally align images to your parent div element. <br/><br/>

-Uses Jquery, so place the script after your Jquery script.<br/>
-To use you must target the parent container of the images. Anything inside it will align the images to it's parent div.<br/>

Example:
  `<div class="parentContainer">`<br/>
`<div class="box"><img src=""/></div>`<br/>
`<div class="box"><img src=""/></div>`<br/>
`<div class="box"><img src=""/></div>`<br/>
`</div>`<br/>
`$('.parentContainer').AutoCenter();`<br/>

-This will horizontally/vertically align the images to the '.box' div. Not the '.parentContainer' div.
