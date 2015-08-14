$(function()
{
    var sendModal,
        rules = {
            email: {
                optionalemail2: true,
                optionalphone2: true,
                required: true
            },
            amount: {
                vcurrency2: true,
                required: true
            }
        },
        showErrors = function(errorMap, errorList)
        {
            // Remove existing errors
            $('#hero-send-money-form .error-overlay').remove();
            $('#hero-send-money-form .input-wrapper').removeClass('error');
            
            // Loop through each error
            for(var i = 0; i < errorList.length; i++)
            {
                var element = $(errorList[i].element),
                    wrapper = element.closest('.input-wrapper'),
                    message = '',
                    messageId = 'err-mesg-' + Math.round(Math.random() * 1000);
                
                wrapper.addClass('error');
                
                // Add message below
                var errorDiv = $("<div class='error-overlay' id='" + messageId + "'></div>");
                errorDiv.text(errorList[i].message);
                wrapper.append(errorDiv);
                
                // Set described by
                element.attr('aria-describedby', messageId);
            }
        };
    
    // Custom phone/email validator
    jQuery.validator.addMethod("optionalemail2", function(value, element)
    {
        // If numeric, then return true and let the phone validation run
        if ($.isNumeric(value.replace(/[(). +,-]+/g, ''))) return true;
        
        // Check for email
        // Taken from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:(?!-))+((([a-zA-Z\-0-9]+(?:(?!-))+\.)+[a-zA-Z]{2,}))$/.test(value))
        {
            return true;
        }
        
        return false;
        
    }, PP_GLOBAL_JS_STRINGS["MESSAGE_EMAIL_OR_PHONE"]);
    
    jQuery.validator.addMethod("optionalphone2", function(value, element)
    {
        var normalizedValue = value.replace(/[(). +,-]+/g, ''),
            validCC = {
                '1':  [11],
                '04': [10],
                '60': [11, 12],
                '52': [12],
                '65': [10],
                '55': [12, 13],
                '34': [11],
                '33': [11],
                '39': [12],
                '44': [12]
            },
            hasValidCC = false;
        
        // If email, return true to let email validation run
        if (!$.isNumeric(normalizedValue)) return true;
        
        // Remove leading 0s if longer than 10 characters
        if (normalizedValue.length > 10 && normalizedValue.substr(0, 1) === '0')
        {
            while (normalizedValue.length > 0 && normalizedValue.substr(0, 1) === '0')
            {
                normalizedValue = normalizedValue.substr(1);
            }
        }
        
        // Make sure not longer than 13 chars
        if (normalizedValue.length > 13) return false;
        
        // Check for singapore
        if (normalizedValue.length === 8 &&
            (normalizedValue.substr(0, 1) === '8' || normalizedValue.substr(0, 1) === '9'))
        {
            hasValidCC = true;
        }
        // Check that number starts with one of the valid country codes and the length is correct for that country
        else
        {
            for (var i in validCC)
            {
                /* Advanced check 
                for(var x = 0; x < validCC[i].length; x++)
                {
                    if (normalizedValue.substr(0, i.length) === i && 
                        normalizedValue.length === validCC[i][x])
                    {
                        hasValidCC = true;
                        break;
                    }
                }*/
                
                // Simple check
                if (normalizedValue.substr(0, i.length) === i && normalizedValue.length >= 10)
                {
                    hasValidCC = true;
                    break;
                }
                
                if (hasValidCC) break;
            }
        }
        
        // Check for 10-digit that starts with 1
        if (normalizedValue.length === 10 && normalizedValue.substr(0, 1) === '1') return false;
        
        // Check for phone
        return hasValidCC || normalizedValue.length === 10;
        
    }, PP_GLOBAL_JS_STRINGS["MESSAGE_BADPHONE"]);
    
    jQuery.validator.addMethod("vcurrency2", function(value, element)
    {
        // Check for numeric value
        return /^([0-9.,]+)$/.test(value);
        
    }, PP_GLOBAL_JS_STRINGS["MESSAGE_NUMBER"]);
    
    // Check if modal exists
    if ($('#send-money-modal').length > 0) 
    {
        $('#hero-send-money-form').validate({
            rules: rules,
            submitHandler: function(form)
            {
                var fields = $(form).find('input'),
                    currency = $(form).find('select'),
                    modalForm = $('#send-money-modal').children('form');
                
                // Remove existing fields
                modalForm.find('input[type="hidden"]').remove();
                
                // Copy fields to modal form
                for (var i = 0; i < fields.length; i++)
                {
                    var tempField = $('<input type="hidden"/>'),
                        f = $(fields[i]);
                    
                    // Exclude submit buttons
                    if (tempField.attr('type') === 'submit') continue;
                    
                    tempField.attr('name', f.attr('name'));
                    tempField.attr('value', f.val());
                    modalForm.append(tempField);
                }
                
                // Copy over currency
                var tempSelect = $('<input type="hidden"/>');
                tempSelect.attr('name', currency.attr('name'));
                tempSelect.val(currency.val());
                modalForm.append(tempSelect);
                
                // Show the form
                sendModal.show();
                
                return false;
            },
            showErrors: showErrors
        });
        
        sendModal = new PAYPAL.Marketing.Modal('#send-money-modal', { minHeight: 450, minWidth: 500 });
    }
    else
    {
        $('#hero-send-money-form').validate({
            rules: rules,
            showErrors: showErrors
        });
    }
    
    if ($(document.documentElement).data('device-type') === 'mobile')
    {
        $('#inpage_amount_send').attr('type', 'number');
        $('#inpage_amount_send').on('keydown', function(e) { if($(e.target).attr('type') !== 'text') $(e.target).attr('type', 'text') });
        $('#inpage_amount_send').on('blur', function(e) { if($(e.target).attr('type') !== 'number') $(e.target).attr('type', 'number') });
    }
    
    // Placeholder for send money form
    if (typeof($('#inpage_to_email').placeholder) !== 'undefined')
    {
        $('#inpage_to_email').placeholder();
        $('#inpage_to_email').css('top', '0').css('left', '0');
        $('#inpage_amount_send').placeholder();
        $('#inpage_amount_send').css('top', '0').css('left', '0');
    }
});

