 $j(function(){ //DOM Ready
                
                    console.log('loaded2');
                    $j(".gridster ul").gridster({
                        widget_margins: [10, 10],
                        widget_base_dimensions: [214, 100],
                        min_cols: 4,
                        max_cols: 4,
                        draggable: { 
                            stop: function (event, ui ) {
                               
                               
                               if (ui.position.left > 685) {
	                               console.debug(this.element);
	                               
	                               
	                               	                               
                               }
                            }
                        }, 
                        serialize_params: function($w, wgd) {
			                return {
			                    id: wgd.el[0].id
			                    ,col: wgd.col
			                    ,row: wgd.row
			                };
			            }
                    });
                    
                    
                    $j('.addButton').click ( function () {
	                    
	                  	  $j('#addAction').modal('show');
	                  	  $j('#addAction input#title').focus();
	                  	  
	                  	  //$j('#addAction input#title').val('test this out');
	                  	  
                    });
                    
                    
                    $j('#action').change (function () {
                        if ($j(this).val() == "") {
                            $j('#title-block').show();
                            
                        } else {
                            
                            $j('#title-block').hide();
                        }
                        
                    });
                    
                    
                    $j(document).on('click', '.item a', function() {
                          console.log('this is clicked');
                        $j('#addAction').modal('show');
                        
                    });
                    
                    
                    
                   $j('#addAction form').submit( function() {
	                   addAction();
	                   
                   })
                    
                    $j('.add').click (function () {
                           
                        addAction();
                        
                    });
                    
                    function addAction() {
	                    
	                    var gridster = $j(".gridster ul").gridster().data('gridster');
                           var notes = $j('#notes').val();
                            var title = $j('#title').val();

                           var section = $j('#section').val();
                           var action = $j('#action').val();
                           
                           
                           $j('#body, #section, #action, #notes, #title').val('');
                           
                           $j('#addAction').modal('hide');
                           
                          
                           
                           
                           
                            var widgetText = "<li><div class='item thumbnail'><h3>";
                            
                            
                            if (action != "" && action != 'Custom Action') {
                            
             
                                widgetText += action;
                            
                            } else {
                                
                                widgetText+=title;
                            }
                            
                            widgetText += "</h3><h6>"+section+"</h6><a href='#' class='edit'>Edit</a></div></li>";
                                                       
                              

                         
                           
                        var widget = gridster.add_widget(widgetText, 1, 1, 1, 1);
                        return false;
                    }

                                   
                });