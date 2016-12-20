/**
* Author: Mahmoud Eid.
* Description: JQuery dependency fields.
*/

(function(){
    'use strict';

    /**
    * The main function.
    */
    function dependencyFields() {
        var dependencyChilds = $('select[depend-on]');

        dependencyChilds.each(function() {
            var parentId = $(this).attr('depend-on');
            var childId = this.id;

            // Hide all options
            hideChildOptions(childId);

            $('#'+parentId).change(function (event) {
                eventHandler(childId, this.value);
            });

            $('#'+parentId).show(function (event) {
                eventHandler(childId, this.value);
            });

        });
    }
    
    /**
    * The main function.
    */
    function eventHandler(childId, dependencyValue) {
        toggleDependencyValueOptions(childId, dependencyValue);
    }

    /**
    * Hide all options of chield
    */
    function hideChildOptions(childId) {
        $('#'+ childId +' option').hide();
    }

    /**
    * show dependency value options
    */
    function toggleDependencyValueOptions(childId, dependencyValue) {
        //Empty chield value if it is different parent 
        var chieldValue = $('#'+ childId).val();
        if(chieldValue !== ''){
            var targetDependencyValue = $('#'+ childId +' option[value='+chieldValue+']').attr('dependency-value');
            if(dependencyValue !== targetDependencyValue){
                $('#'+ childId).val('');
            }
        }

        // Toggle options
        if(dependencyValue !== ''){
            $('#'+ childId +' option[dependency-value!='+dependencyValue+']').hide();
            $('#'+ childId +' option[dependency-value='+dependencyValue+']').show();
        }else{
            hideChildOptions(childId);
        }
    }

    // Run the main function.
    dependencyFields();
})();