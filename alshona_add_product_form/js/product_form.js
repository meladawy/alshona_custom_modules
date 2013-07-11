Drupal.behaviors.alshonaProductForm = {
	attach : function(context) {
		jQuery("select[name='field_products_applicable_cars[und][0][field_applicable_cars_year][und]']").live("change", function(){
			jQuery("select[name='field_products_applicable_cars[und][0][field_applicable_cars_make][und]'] .toggleOption option").unwrap();
		
			jQuery(this).parent().addClass("fieldloading") ;
			var currentYearTid = jQuery(this).val() ; 
			if(currentYearTid){
			jQuery.get(Drupal.settings.basePath + "services/get/makes/" + currentYearTid,function(data) {
			  jQuery("div.form-type-select.fieldloading").removeClass("fieldloading") ;
			  if(data.nodes.length > 0) {
			//  	alert(data.nodes.length) ;
				jQuery("select[name='field_products_applicable_cars[und][0][field_applicable_cars_make][und]'] option").wrap( '<span class="toggleOption" style="display: none;" />' );
			  	jQuery.each(data.nodes, function(key, val){
			  		jQuery("select[name='field_products_applicable_cars[und][0][field_applicable_cars_make][und]']  option[value='" + val.node.tid + "']").unwrap();
 			  	});
			  }
			}) ; 
			}
		});
	}
}