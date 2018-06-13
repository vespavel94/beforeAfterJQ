Before-after plugin for JQuery.

Plugin transforms div element into a BeforeAfter object. Now only 2 pictures are supported. 

Extends JQuery class with initBeforeAfter() method.
Based on rangeSlider.js plugin.
Include it after JQuery.js and rangeSlider.js is included.

How to use: 

1. Create <div class=«container_name»> element to be transformed into BeforeAfter container;
2. Call $(«.container_name»).initBeforeAfter();

Creating BeforeAfter object is going to be like that:

	$(«.beforeAfterwrapper»).initBeforeAfter();	

3. Method generates div.BA_before, div.BA_after, div.BA_slider. BA_slider calls JQuery.initSlider(args) method and generates slider element (Read rangeSliderJQ README). By click and drag sliderGap, slider is changing it’s value and displays BA_after block in equal to sliderValue proportions.

4. Add necessary styles: 

.container_name{
	position: relative;
}

.container_name .BA_before{
	background: url(), repeat etc.
	background-size: ;
}

.container_name .BA_after{
	position: absolute;
	top: 0;
	width: 0;
	background-color: white;
	z-index: 2;
	background: url(), repeat, etc.
}

.sliderGap{
	position: absolute;
	top: -this.width/2;
}

Those are necessary styles. You can style you’r beforeAfter element and it’s slider however you wish;
Depends on sliderValue, .BA_after’s width is set with JS.

5. Enjoy;
