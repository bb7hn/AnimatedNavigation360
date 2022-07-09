# Animated Navigation 360
## How To Use (Installation and usage)
### Quick Start
- [Download](https://github.com/bb7hn/AnimatedNavigation360/archive/refs/heads/main.zip) or clone this repo :
```bash
git clone https://github.com/bb7hn/AnimatedNavigation360.git
```
- Then go to example.html
- #### For now don't have cdn need to host files yourself 😞
### Requirements
- First you have to copy the "an-360.min.css" from styles folder and "an-360.min.js" from scripts folder to your project path then import.
```HTML
    <script src="path/to/an-360.min.js"></script>
    <link rel="stylesheet" href="path/to/an-360.min.css">
```
- After you need to create a div with ***an360*** class name
```HTML
    <div class="an360">
    </div>
```
- Now you have the main container. 
- After this step you need to add another div with ***link-container*** class name in main container as a sub container.
```HTML
    <div class="an360">
        <div class="link-container">
        </div>
    </div>
```
- Sub container have to contain an ***ul*** with toggle button and links Also Sub container must have an id. 
```HTML
    <div class="an360">
        <div class="link-container">
            <ul id='myMenu'>
            <ul>
        </div>
    </div>
```
- Now we're almost ready. ***ul*** must contain toggle button and links in it.
- Now, need to add toggle button. While you're adding remember that: 
**There is something important about toggle button. it needs and ID**
There is another important point. I include feather icon to my page so I use that icons for toggle button and links. Icon is in a span in toggle button because icon will rotate when it's active as default .
```HTML
    <div class="an360">
        <div class="link-container">
            <ul id='myMenu'>
                <div id="toggle_menu_example" class="toggle">
                    <span>
                        <i data-feather="plus"></i>
                    </span>
                </div>
            <ul>
        </div>
    </div>
```
- Last part is creating links. An example link should look like this:
```HTML
    <li class="noSelect al360__item">
        <a class="linkedin" target="_blank" href="https://linkedin.com/in/bb4hn">
            <i data-feather="linkedin"></i>
        </a>
    </li>
```
- Also you can add a tooltip for a link:
```HTML
    <li class="noSelect al360__item">
        <a class="linkedin" target="_blank" href="https://linkedin.com/in/bb4hn">
            <i data-feather="linkedin"></i>
            <span class="tooltip">
                LınkedIn 
                <i class="arrow"></i>
            </span>
        </a>
    </li>
```
-Lastly you need to add a JavaScript under the page before the **body close** tag and call the *toggler()* function.
- Function needs 2 basic paramter :
    - Id of menu which is *menu_example* in this example
    - Id of toggle button which is *toggle_menu_example* in this example
```HTML
    <script>
        //feather.replace(); //this is for my icons you don't need that if you don't prefer to use feather icon
        let params = {
            menuId      : 'menu_example',
            toggleId    : 'toggle_menu_example'
        }
        toggler(params);
    </script>
```
- So that's all. Now you have AN360 in your project.
<details>
   <summary><b>Full Code</b></summary>

   ```HTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>A.N. - 360 Example</title>
        <link rel="stylesheet" href="styles/icons.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.29.0/feather.min.js"></script>
        <script src="scripts/an-360.min.js"></script>
        <link rel="stylesheet" href="styles/an-360.min.css">
    </head>
    <body>
        <div class="an360">
            <div class="link-container">
                <ul id="menu_example" class="menu">
                    <div id="toggle_menu_example" class="toggle">
                        <span>
                            <i data-feather="plus"></i>
                        </span>
                    </div>
                    <li class="noSelect al360__item">
                        <a class="linkedin" href="#">
                            <i data-feather="linkedin"></i>
                            <span class="tooltip">
                                LınkedIn 
                                <i class="arrow"></i>
                            </span>
                        </a>
                    </li>
                    <li class="noSelect al360__item">
                        <a class="instagram" href="#">
                            <i data-feather="instagram"></i>
                            <span class="tooltip">
                                Instagram 
                                <i class="arrow"></i>
                            </span>
                        </a>
                    </li>
                    <li class="noSelect al360__item">
                        <a class="twitter" href="#">
                            <i data-feather="twitter"></i>
                            <span class="tooltip">
                                Twitter
                                <i class="arrow"></i>
                            </span>
                        </a>
                    </li>
                    <li class="noSelect al360__item">
                        <a class="github" href="#">
                            <i data-feather="github"></i>
                            <span class="tooltip">
                                GitHub
                                <i class="arrow"></i>
                            </span>
                        </a>
                    </li>
                    <li class="noSelect al360__item">
                        <a class="resume" href="#">
                            <i data-feather="file"></i>
                            <span class="tooltip">
                                Rèsume
                                <i class="arrow"></i>
                            </span>
                        </a>
                    </li>
                    <li class="noSelect al360__item">
                        <a class="contact" href="#">
                            <i data-feather="message-circle"></i>
                            <span class="tooltip">
                                Contact
                                <i class="arrow"></i>
                            </span>
                        </a>
                    </li>
                    <li class="noSelect al360__item">
                        <a class="settings" href="#">
                            <i data-feather="settings"></i>
                            <span class="tooltip">
                                Settings
                                <i class="arrow"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    
        <script>
            feather.replace();
            let params = {
                menuId      : 'menu_example',
                toggleId    : 'toggle_menu_example'
            }
            toggler(params);
        </script>
    </body>
    </html>
   ```
</details>

# Parameters
| Parameter          | Value         |
| -------------      | ------------- |
|menuSize            | Used for setting Menu width and height accepts number (number converts to px while processing) <br> Default value is : <br> ***200*** |
|LinkBG              | It could be a hex value or color name or rgb/rgba value. Default value is : <br> ***'#fff'*** |
|LinkShadow          | It's basically css shadow value. It applies to links. Default value is : <br>***'0 3px 4px rgba(0,0,0,.15);'***|
|LinkBorder          | It's basically css border value. It applies to links. Default value is : <br> ***'1px solid #00000030'***|
|toggleBg            | It is a css color value so same with LinkBG. Default value is : <br> ***'#fff'***|
|toggleButtonColor   | It is a css color value so same with LinkBG. Default value is : <br> ***'#00000090'***|
|toggleButtonBorder  | It is a css border value so same with LinkBorder. Default value is : <br> ***'1px solid #00000030'***|
|toggleButtonShadow  | It is a css border value so same with LinkBorder. Default value is : <br> ***'0 3px 4px rgba(0,0,0,.15)'***|
|toggleAnimation     | This is a bool value. If you don't use + icon for toggle button set is false. Default value is : <br> ***true***|
|toolTipColor        | It is a css color value so same with LinkBG. Default value is : <br> ***'#1DA1F2'***|
|toolTipArrowColor   | It is a css color value so same with LinkBG. Default value is : <br> ***'#8f8f8f'*** |
|toolTipArrowShadow  | It is a css shadow value so same with LinkShadow. Default value is : <br> ***'0 1px 8px rgba(255,255,255,0.5)'***|
|toolTipGap          | It is mesure value. it gets calculated while getting applied. This is for gap between link item and tooltip Default value is : <br> ***'15px'***|
|tooltipPosition     | This value can setted antyhing but if you dont type top it'll get described as bottom. Default value is : <br> ***'bottom'***|

- ### If you want to contribute or need source code (I mean not minified js and css) you can contact me at iletisim@batuhanozen.com <br> With my king regards. Hope results are satisfying for u my friend.
