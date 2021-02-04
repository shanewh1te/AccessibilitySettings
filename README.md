# AccessibilitySettings
Dark Mode and High Contrast Mode for the Cireson Portal!

I noticed a few threads where there were a mention of Dark Mode in the portal, and or compliance with WACG so I have built a customisation for a couple of Modes in the portal:

Default (What you know and love 😉)
Dark Mode
High Contrast Mode
I will say this is not Cireson code and will not be supported by Cireson, but I am looking to gather feedback around this customisation so that I can gauge interest and adoption. This feature may become a future add-in to provide a more robust and manageable solution

The installation is simple, copy the folder inside the attached .zip folder into your customspace and add this line into your custom.js file:

loadScript("/CustomSpace/AccessibilitySettings/AccessibilitySettings.js",['']);

NOTE: This requires you to have the Cireson Script loader found here:

https://cireson.com/blog/how-to-organize-your-customspace-with-a-script-loader/

The colours are configurable if you would like to get into that, simply open up AccessibilitySettings.js and edit the colours at the top of the file.
