Drupal.behaviors.selectByVehiclevalication = {
	attach : function(context){
		jQuery("#-alshona-shop-by-vehicle-form .find-my-parts-button[value='Find My Parts']", context).live("click", function(){
		var selectfieldYearValue = jQuery("select[name='vehicle_year']").val() ; 
		var selectfieldMakeValue = jQuery("select[name='vehicle_make']").val() ; 
		var selectfieldModelValue = jQuery("select[name='vehicle_model']").val() ; 
		
		if(selectfieldYearValue == ""){
		alert("Please select a year");
		return false;
		}
		
		if(selectfieldMakeValue == ""){
		alert("Please select a make");
		return false;
		}
		
		if(selectfieldModelValue == ""){
		alert("Please select a model");
		return false;
		}					
		
		}) ;
	}
}

