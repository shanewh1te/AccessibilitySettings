var AnalystOnly = true;

/* Dark Mode Settings */
var MainBackgroundColorDark = "black";
var MainTextColorDark = "white";
var BrandedColorDark = "#00a9ff";
var ShadeLighterDark = "#888888";
var ShadeDarkerDark = "#444";
var WIBannerIRDark = "#F7861F";
var WIBannerSRDark = "mediumseagreen";
var WIBannerPRDark = "darkred";
var WIBannerCRDark = "dodgerblue";

/* High Contrast Settings */
var MainBackgroundColorHighContrast = "black";
var MainTextColorHighContrast = "white";
var LinkColorHighContrast = "#ff0";
var HoverColorHighContrast = "#0ff";
var OutlineColorHighContrast = "2px solid #0ff";
var ShadeLighterHighContrast = "#111";
var ShadeDarkerHighContrast = "#111";
var WIBannerIRHighContrast = "#F7861F";
var WIBannerSRHighContrast = "mediumseagreen";
var WIBannerPRHighContrast = "darkred";
var WIBannerCRHighContrast = "dodgerblue";

$(document).ready(function() {
//app.events.subscribe('sessionStorageReady', function(){
    // Here we check for the Add-In setting to see whether it is enabled for all users or just Analysts
    if (session.user.Analyst || !AnalystOnly) {

        // If all checks pass, execute the code
        enableAccessibilitySettings();

    }


    // This function enables the Accessibility Settings feature in the Portal to change modes
    function enableAccessibilitySettings() {

        // Here we check to see if the current Portal Accessibility Setting is set to Default in the local browser storage
        var PortalAccessibilitySetting = localStorage.getItem('PortalAccessibilitySetting') === 'Default' ? true : false;

        // If the result is true we want to make sure no other css classes are set
        if (PortalAccessibilitySetting == true) {

            // So remove the DarkMode Css class from the body
            $('#body').removeClass('DarkMode');

            // And remove the High Contrast Mode Css class from the body
            $('#body').removeClass('HighContrastMode');
        }

        // Here we check to see if the current Portal Accessibility Setting is set to Dark in the local browser storage
        var PortalAccessibilitySetting = localStorage.getItem('PortalAccessibilitySetting') === 'Dark' ? true : false;

        // If the result is true we want to add the DarkMode css class, but ensure HighContrastMode css class is removed
        if (PortalAccessibilitySetting == true) {

            // So add the DarkMode Css class to the body
            $('#body').addClass('DarkMode');

            // And remove the High Contrast Mode Css class from the body
            $('#body').removeClass('HighContrastMode');
        }

        // Here we check to see if the current Portal Accessibility Setting is set to HighContrast in the local browser storage
        var PortalAccessibilitySetting = localStorage.getItem('PortalAccessibilitySetting') === 'HighContrast' ? true : false;

        // If the result is true we want to add the HighContrastMode css class, but ensure DarkMode css class is removed
        if (PortalAccessibilitySetting == true) {

            // So add the HighContrast Css class to the body
            $('#body').addClass('HighContrastMode');

            // And remove the DarkMode Css class from the body
            $('#body').removeClass('DarkMode');
        }

        // Make sure the page document is ready before executing the code
        $(document).ready(function () {

            var MenuStyle = '.userSettingsButton.fa.fa-cog {\
							    font-size: 1.8em;\
                                padding-top: 1px;\
                                padding-bottom: 1px;\
                                color: white;\
							}\
                            .userSettingsButton .k-link.k-state-active.k-state-border-down{\
                                background-color: #00a9ff;\
                            }';

            
            // We then append the styles containing the root variables to the head for the css to use
            $('head').append("<style>" + MenuStyle + "</style");


            $.get('/CustomSpace/AccessibilitySettings/DarkMode.css', function (css) {

                var DarkModeStyles = css.split("var(--main-bg-color-d)").join(MainBackgroundColorDark).split("var(--main-text-color-d)").join(MainTextColorDark).split("var(--branded-color-d)").join(BrandedColorDark).split("var(--shade-lighter-d)").join(ShadeLighterDark).split("var(--shade-darker-d)").join(ShadeDarkerDark).split("var(--WI-BannerIR-d)").join(WIBannerIRDark).split("var(--WI-BannerSR-d)").join(WIBannerSRDark).split("var(--WI-BannerCR-d)").join(WIBannerCRDark).split("var(--WI-BannerPR-d)").join(WIBannerPRDark);

                $('head').append("<style>" + DarkModeStyles + "</style");

            });
                
            $.get('/CustomSpace/AccessibilitySettings/HighContrastMode.css', function (css) {

                var HighContrastModeStyles = css.split("var(--main-bg-color-hc)").join(MainBackgroundColorHighContrast).split("var(--main-text-color-hc)").join(MainTextColorHighContrast).split("var(--link-color-hc)").join(LinkColorHighContrast).split("var(--hover-color-hc)").join(HoverColorHighContrast).split("var(--hover-outline-color-hc)").join(OutlineColorHighContrast).split("var(--shade-lighter-hc)").join(ShadeLighterHighContrast).split("var(--shade-darker-hc)").join(ShadeDarkerHighContrast).split("var(--WI-BannerIR-hc)").join(WIBannerIRHighContrast).split("var(--WI-BannerSR-hc)").join(WIBannerSRHighContrast).split("var(--WI-BannerCR-hc)").join(WIBannerCRHighContrast).split("var(--WI-BannerPR-hc)").join(WIBannerPRHighContrast);

                $('head').append("<style>" + HighContrastModeStyles + "</style");

            });

            // This builds out what the menu to change the Mode looks like, then we insert it before the User Menu
            $('\
                <il class="userSettingsButton" id="userSettingsButton" style="float: left;">\
                    <li><i class="userSettingsButton fa fa-cog"></i>\
                        <ul>\
                            <li class="defaultMode">Default</li>\
                            <li class="darkMode">Dark Mode</li>\
                            <li class="highContrastMode">High Contrast</li>\
                        </ul>\
                    </li>\
                </il>').insertBefore('.user_menu');

            // This turns out created menu into a Kendo Menu
            $('.userSettingsButton').kendoMenu({

                // This stops the menu disappearing when an option is selected
                closeOnClick: false
            });

            // Here we set the click function is the selected mode is Default
            $('.defaultMode').click(function () {

                // Then we check to see what the current mode is set to
                PortalAccessibilitySetting = localStorage.getItem('PortalAccessibilitySetting') === 'Default' ? true : false;

                // If the current setting is not set then we want to execute code to change mode
                // If the mode selected is the current mode we do not want to change
                if (PortalAccessibilitySetting == false) {

                    // We then set the localStorage setting to the newly set mode
                    localStorage.setItem('PortalAccessibilitySetting', 'Default');

                    // Then we remove the HighContrastMode class
                    $('#body').removeClass('HighContrastMode');

                    // And we remove the DarkMode class
                    $('#body').removeClass('DarkMode');
                }
            });

            // Here we set the click function is the selected mode is Dark Mode
            $('.darkMode').click(function () {

                // Then we check to see what the current mode is set to
                PortalAccessibilitySetting = localStorage.getItem('PortalAccessibilitySetting') === 'Dark' ? true : false;

                // If the current setting is not set then we want to execute code to change mode
                // If the mode selected is the current mode we do not want to change
                if (PortalAccessibilitySetting == false) {

                    // We then set the localStorage setting to the newly set mode
                    localStorage.setItem('PortalAccessibilitySetting', 'Dark');

                    // Then we add the DarkMode class
                    $('#body').addClass('DarkMode');

                    // And we remove the HighContrastMode class
                    $('#body').removeClass('HighContrastMode');
                }
            });

            // Here we set the click function is the selected mode is High Contrast Mode
            $('.highContrastMode').click(function () {

                // Then we check to see what the current mode is set to
                PortalAccessibilitySetting = localStorage.getItem('PortalAccessibilitySetting') === 'HighContrast' ? true : false;

                // If the current setting is not set then we want to execute code to change mode
                // If the mode selected is the current mode we do not want to change
                if (PortalAccessibilitySetting == false) {

                    // We then set the localStorage setting to the newly set mode
                    localStorage.setItem('PortalAccessibilitySetting', 'HighContrast');

                    // Then we add the HighContrastMode class
                    $('#body').addClass('HighContrastMode');

                    // And we remove the DarkMode class
                    $('#body').removeClass('DarkMode');
                }
            });

            // This function gets the url of our css file and appends it as a stylesheet to the head of the page
            function getCSS(url) {
                return $("<link>", {
                    type: "text/css",
                    rel: "stylesheet",
                    href: url
                }).appendTo("head");
            }
        });
    };
});