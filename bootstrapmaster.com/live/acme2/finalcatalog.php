<?php
	
	if(isset($_POST['submitbutton'])){
		$sample=array();
		$sample['productName']=$_POST['productName'];
		$sample['productType']=$_POST['productType'];
		$sample['productSubType']=$_POST['productSubType'];
		$sample['merchantId']=124;
		$sample['productDescription']=$_POST['productDescription'];
		$sample['productMrp']=1240;
		$sample['productPrice']=$_POST['productPrice'];
		$sample['productQuantity']=$_POST['productQuantity'];
		$url='http://10.239.36.189:8080/tutorial/product';
		$ch=curl_init($url);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                                            'Content-Type: application/json',
                                            'Connection: Keep-Alive'
                                            ));
		curl_setopt($ch, CURLOPT_HEADER, 1);
		curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch,CURLOPT_POST, true);
		curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($sample));
		$result = curl_exec($ch);
		
		if($result === false){
			$info=curl_getinfo($ch);
			curl_close($ch);
			die('error occured during curl exec. Additioanl info: ' . print_r($info));
		}
		curl_close($ch);
		$obj1=json_decode($result,true);
	
		if (isset($obj1->response->status) && $obj1->response->status == 'ERROR') {
			die('error occured: ' . $obj1->response->errormessage);
		}
		echo 'response ok!';
		
	}
?>

<!DOCTYPE html>
<html lang="en">
   <!-- Mirrored from bootstrapmaster.com/live/acme2/page-inbox.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 13 Aug 2015 07:41:24 GMT -->
   <head>
      <!-- start: Meta -->
      <meta charset="utf-8">
      <title>ACME Dashboard - Perfect Bootstrap Admin Template</title>
      <meta name="description" content="ACME Dashboard Bootstrap Admin Template.">
      <meta name="author" content="Łukasz Holeczek">
      <meta name="keyword" content="ACME, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
      <!-- end: Meta -->
      <!-- start: Mobile Specific -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- end: Mobile Specific -->
      <!-- start: CSS -->
      <link href="assets/css/bootstrap.min.css" rel="stylesheet">
      <link href="assets/css/style.min.css" rel="stylesheet">
      <link href="assets/css/retina.min.css" rel="stylesheet">
      <!-- end: CSS -->
      <!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
      <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
      <script src="assets/js/respond.min.js"></script>
      <link href="assets/css/ie.css" rel="stylesheet">
      <![endif]-->
      <!--[if IE 9]>
      <link id="ie9style" href="assets/css/ie9.css" rel="stylesheet">
      <![endif]-->
      <!-- start: Favicon and Touch Icons -->
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
      <link rel="apple-touch-icon-precomposed" sizes="57x57" href="assets/ico/apple-touch-icon-57-precomposed.png">
      <link rel="shortcut icon" href="assets/ico/favicon.png">
      <!-- end: Favicon and Touch Icons -->
	  <style>
		.inputclass{
			padding: 4px 4px 4px 2px;
			margin: 0px;
			border: medium none;
			background: transparent none repeat scroll 0% 0%;
			box-shadow: none;
		}
		.whiteclass{
			padding: 4px 4px 4px 2px;
			margin: 0px;
			border: medium none;
			background: #FFF none repeat scroll 0% 0%;
			box-shadow: none;
		}
	  </style>
   </head>
   <body>
      <!-- start: Header -->
      <?php include("topnavbar.php"); ?>
	  <div class="container" style="margin-bottom: -1.8%;">
		<div class="row">
		<img src="assets/img/paypal4.png" style="height:50px;margin-top: -7%;margin-left: -12px;"></img>
		</div>
	  </div>

      <!-- start: Header -->
      <div class="container">
         <div class="row">
            <!-- start: Main Menu -->
           <?php include("sidebar.php"); ?>
            <!-- end: Main Menu -->
            <!-- start: Content -->
            <div id="content" class="col-sm-11">
               <div class="row" id="catalog" style="margin-left:0px;margin-right:0px;">
                  <div class="col-xs-12">
                     <div class="row" style="background:#FAF8FB; padding:41px; border-bottom: 2px solid #EEE">
                        <div class="col-sm-12">
                           <div>
                              <p class="line">Showing SKU of <span style="display:none;">Product Id<input class="textinput" type="text" value=""/></span><span>Product Name <input class="textinput" type="text" value=""></span>
                                 <span> SKU ID <input class="textinput" type="text"/></span><span> Category Id <input class="textinput" type="text"/></span>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-xs-12">
                     <div class="row" style="background:#FAF8FB; padding:0px; ">
                        <div class="col-sm-12">
                           <div>Search By</div>
                           <div class="col-md-4 col-md-offset-2">
                              <div class="form-group">
                                 <input type="email" class="form-control" id="Product Name" placeholder="Product Name">
                              </div>
                              <div class="form-group">
                                 <input type="password" class="form-control" id="Product Id" placeholder="Product Id">
                              </div>
                              <div class="form-group">
                                 <div class="text-center">
                                    <input type="password" class="form-control" id="category" placeholder="Category">
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-4">
                              <div class="form-group">
                                 <select class="form-control" id="sel1" >
                                    <option>Select Status</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                 </select>
                              </div>
                              <div class="form-group">
                                 <input type="password" class="form-control" id="paypal SKU" placeholder="PayPal SKU">
                              </div>
                              <div class="form-group">
                                 <div class="text-center">
                                    <input type="password" class="form-control" id="merchant sku" placeholder="Merchant SKU">
                                 </div>
                              </div>
                           </div>
                        </div>
                        <!--/col-->
                        <!--<div class="col-md-6 pull-right" >
                           <div class="box">
                           <div class=" pull-right">
                           	<ul class="nav tab-menu nav-tabs" id="myTab">
                           		<li class="active"><a href="ui-elements.html#info">Add New Product</a></li>
                           		<li><a href="ui-elements.html#custom">Check Status</a></li>
                           		
                           	</ul>
                           </div>
                           	
                           </div>
                           
                           </div>-->
                     </div>
                  </div>
                  <div class="col-xs-12">
                     <div class="row" style="background:#FAF8FB; padding:0px; border-bottom: 2px solid #EEE;">
                        <div class="col-md-6" >
                           <div class="box">
                              <div class=" pull-left">
                                 <ul class="nav tab-menu nav-tabs" id="myTab">
                                    <li class="active" id="Stockout"><a href="ui-elements.html#info">Out of Stock</a></li>
                                    <li class="common" id="Stockin"><a href="ui-elements.html#custom">Stock In</a></li>
                                    <li class="common" id="All"><a href="ui-elements.html#messages">All</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6 pull-right" >
                           <div class="box">
                              <div class=" pull-right">
                                 <ul class="nav tab-menu nav-tabs" id="myTab">
                                    <li class="active" id="Newproduct"><a href="ui-elements.html#info">Add New Product</a></li>
                                    <li class="common" id="check"><a href="ui-elements.html#custom">Check Status</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <!--<div class="row">
                        <div id="myTabContent" class="tab-content">
                           <div class="tab-pane active" id="Stockout">
                              <p>
                                 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   
                              </p>
                           </div>
                           <div class="tab-pane" id="Stockin">
                              <p>
                                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
                              </p>
                           </div>
                           <div class="tab-pane" id="All">
                              <p>
                                 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   
                              </p>
                              <p>
                                 Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
                              </p>
                           </div>
                        </div>
                     </div>-->
					 <div class="box-content">
							<table class="table table-striped table-bordered bootstrap-datatable datatable">
							  <thead>
								  <tr>
									  <th>Product Id</th>
									  <th>Product Name</th>
									  <th>Type</th>
									  <th>Subtype</th>
									  <th>Qunatity</th>
									  <th>Price</th>
								  </tr>
							  </thead>   
							  <tbody>
									<?php 
											$url='http://10.239.36.189:8080/tutorial/products?merchantId=124';
											$ch=curl_init($url);
											curl_setopt($ch,CURLOPT_CUSTOMREQUEST, "GET");
											curl_setopt($ch,CURLOPT_URL,$url);
											curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
											$result = curl_exec($ch);
											curl_close($ch);
											$obj1=json_decode($result,true);
											
											foreach($obj1 as $val){
												echo "<tr><td>$val[productId]</td><td>$val[productName]</td><td>$val[productType]</td><td>$val[productSubType]</td><td>$val[productQuantity]</td><td>$val[productPrice]</td></tr>";
												
											}
									?>
								
								
							  </tbody>
						</table>
						</div>
                  </div>
               </div>
               <!--/row-->
			    <div class="row" id="addnewproduct" style="margin-left:0px;margin-right:0px;display:none">
					<div class="row" style="background:#FAF8FB; margin:0px;padding:10px; border-bottom:2px solid #EEE">
					   <div class="col-sm-12">
							<div>
							   <p>The Product that you want to add may already exist on paytm. Search by its name or code, and add it to your catalog.</p>
							</div>
						</div>
					</div>
					<div class="row" style="background:#FAF8FB; margin:0px;padding:10px; border-bottom:2px solid #EEE">
					   <div class="col-sm-12">
							<div>
							  <span class="searchinput"><input type="text" id="searchbox" class="inputclass col-md-8" placeholder="Search by product name or product code"></input></span> 
								
							</div>
							<span class="pull-right">
									<button class="btn btn-success" type="submit">Search</button>
									<button class="btn btn-success" type="submit">Clear</button>
							</span>
						</div>
					</div>
			<div class="row" style="background:#FAF8FB; margin:0px;padding:10px; border-bottom:2px solid #EEE">
				   <div class="col-sm-12">
						<div class="form-group">
							<div class="controls">
								<div class="col-md-10"><p>Or, do you want to search your own catalog and add a new variant to an existing group of products?</p></div>
									<div class="col-md-1 col-sm-2 col-xs-3">
										<label class="switch">
										  <input type="checkbox" class="switch-input">
										  <span class="switch-label" data-on="Yes" data-off="No"></span>
										  <span class="switch-handle"></span>
										</label>
									</div>
								</div>
						</div>
					</div>
				<div class="col-sm-12" id="clickYes" style="display:none;">
					<div class="col-xs-12">
						<div class="row" style="background:#FAF8FB; padding:0px; ">
								<div class="col-sm-12">
								   <div>Search By</div>
								   <div class="col-md-4 col-md-offset-2">
									  <div class="form-group">
										 <input type="email" class="form-control" id="Product Name" placeholder="Product Name">
									  </div>
									  <div class="form-group">
										 <input type="password" class="form-control" id="Product Id" placeholder="Product Id">
									  </div>
									  <div class="form-group">
										 <div class="text-center">
											<input type="password" class="form-control" id="category" placeholder="Category">
										 </div>
									  </div>
								   </div>
								   <div class="col-md-4">
									  <div class="form-group">
										 <select class="form-control" id="sel1" >
											<option>Select Status</option>
											<option>Active</option>
											<option>Inactive</option>
										 </select>
									  </div>
									  <div class="form-group">
										 <input type="password" class="form-control" id="paypal SKU" placeholder="PayPal SKU">
									  </div>
									  <div class="form-group">
										 <div class="text-center">
											<input type="password" class="form-control" id="merchant sku" placeholder="Merchant SKU">
										 </div>
									  </div>
									  
								   </div>
								   <span class="pull-right">
										<button class="btn btn-success" type="submit">Search</button>
										<button class="btn btn-success" type="submit">Clear</button>
									</span>
							</div>
						</div>
					</div>
				</div>
					<br/><br/>
					<div class="col-sm-12">
						<div class="form-group">
							<div class="controls">
								<div class="col-md-3"><p>Can't find your product? Create afresh.</p></div>
								<div class="col-md-2"><button class="btn btn-primary" id = "create" type="submit">Create Now</button></div>	
							</div>
						</div>
					</div>
					<br/><br/><br/><br/>
					<div class="col-sm-12" style="display:none" id="addprod">
						<div class="col-md-4 col-md-offset-2">
						<form method="POST" action="" name="form1" class="form-group">
						  <div class="form-group">
							 <input type="text" class="form-control" name="productName" id="Product Name" placeholder="productName">
						  </div>
						  						  <div class="form-group">
							 <input type="text" class="form-control" name="productType" id="productType" placeholder="productType">
						  </div>
						  						  <div class="form-group">
							 <input type="text" class="form-control" name="productSubType" id="productSubType" placeholder="productSubType">
						  </div>
						<div class="form-group">
							 <input type="text" class="form-control" name="productQuantity" id="productQuantity" placeholder="productQuantity">
						  </div>
						  	<div class="form-group">
							 <input type="text" class="form-control" name="productDescription" id="productDescription" placeholder="productDescription">
						  </div>
						  	<div class="form-group">
							 <input type="text" class="form-control" name="productPrice" id="productPrice" placeholder="productPrice">
						  </div>
						  <span class="pull-right">
							<button class="btn btn-success" name="submitbutton" type="submit">Ok</button>
							<button class="btn btn-success" type="submit">Cancel</button>
							
						</span>
						  </form>
					   </div>
					    
					</div>
			</div>
				 <div class="col-xs-12">
				 <div class="row" style="background:#FAF8FB; padding:0px; border-bottom: 2px solid #EEE;">
					<div class="col-md-6" >
					   <div class="box">
						  <div class=" pull-left">
							 <ul class="nav tab-menu nav-tabs" id="myTab">
								<li class="active common" id="Stockout"><a href="ui-elements.html#info">Out of Stock</a></li>
								<li class="common" id="Stockin"><a href="ui-elements.html#custom">Stock In</a></li>
								<li class="common" id="All"><a href="ui-elements.html#messages">All</a></li>
							 </ul>
						  </div>
					   </div>
					</div>
					<div class="col-md-6 pull-right" >
					   <div class="box">
						  <div class=" pull-right">
							 <ul class="nav tab-menu nav-tabs" id="myTab">
								<li class="active" id="Newproduct"><a href="ui-elements.html#info">Add New Product</a></li>
								<li class="common" id="check"><a href="ui-elements.html#custom">Check Status</a></li>
							 </ul>
						  </div>
					   </div>
					</div>
				 </div>
                     <!--<div class="row">
                        <div id="myTabContent" class="tab-content">
                           <div class="tab-pane active" id="Stockout">
                              <p>
                                 Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   
                              </p>
                           </div>
                           <div class="tab-pane" id="Stockin">
                              <p>
                                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
                              </p>
                           </div>
                           <div class="tab-pane" id="All">
                              <p>
                                 Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   
                              </p>
                              <p>
                                 Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer
                              </p>
                           </div>
                        </div>
                     </div>-->
                  </div>
            </div>
            <!-- end: Content -->
            <!-- start: Widgets Area -->
            <div id="widgets-area" class="col-sm-2">
               <ul class="nav tab-menu nav-tabs" id="myTab">
                  <li class="active"><a href="index-2.html#charts"><i class="fa fa-bar-chart-o"></i></a></li>
                  <li><a href="index-2.html#users"><i class="fa fa-group"></i></a></li>
                  <li><a href="index-2.html#messages"><i class="fa fa-envelope"></i></a></li>
                  <li><a id="close-widgets-area" href="index-2.html#"><i class="fa fa-sign-in"></i></a></li>
               </ul>
            </div>
            <!-- end: Widgets Area -->
        
         <!--/row-->
     
      </div>
	  </div>
	  <!--/container-->
      <div class="clearfix"></div>
      <!-- start: JavaScript-->
      <!--[if !IE]>-->
      <script src="assets/js/jquery-2.1.0.min.js"></script>
      <!--<![endif]-->
      <!--[if IE]>
      <script src="assets/js/jquery-1.11.0.min.js"></script>
      <![endif]-->
      <!--[if !IE]>-->
      <script type="text/javascript">
         window.jQuery || document.write("<script src='assets/js/jquery-2.1.0.min.js'>"+"<"+"/script>");
      </script>
      <!--<![endif]-->
      <!--[if IE]>
      <script type="text/javascript">
         window.jQuery || document.write("<script src='assets/js/jquery-1.11.0.min.js'>"+"<"+"/script>");
      </script>
      <![endif]-->
      <script src="assets/js/jquery-migrate-1.2.1.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <!-- page scripts -->
      <script src="assets/js/jquery-ui-1.10.3.custom.min.js"></script>
      <script src="assets/js/jquery.sparkline.min.js"></script>
      <script src="assets/js/jquery.autosize.min.js"></script>
      <script src="assets/js/jquery.placeholder.min.js"></script>
      <script src="assets/js/raphael.min.js"></script>
      <script src="assets/js/justgage.1.0.1.min.js"></script>
      <!-- theme scripts -->
      <script src="assets/js/custom.min.js"></script>
      <script src="assets/js/core.min.js"></script>
      <!-- inline scripts related to this page -->
      <script src="assets/js/pages/page-inbox.js"></script>
      <!-- end: JavaScript-->
	  <script>
		$(document).ready(function(){
			$('#Newproduct').click(function(){
				$('#addnewproduct').show();
				$('#catalog').hide();
			});
			$('#searchbox').click(function(){
				$('#searchbox').removeClass('inputclass');
				$('#searchbox').addClass('whiteclass');
			});
			$('#searchbox').blur(function(){
				$('#searchbox').removeClass('whiteclass');
				$('#searchbox').addClass('inputclass');
			});
			$('.common').click(function(){
				$('#addnewproduct').hide();
				$('#catalog').show();
			});
			$('.switch-input').click(function(){
				$('#clickYes').slideToggle();
			});
			$('#create').click(function(){
				$('#addprod').slideToggle();
			});
		});
	  </script>
   </body>
   <!-- Mirrored from bootstrapmaster.com/live/acme2/page-inbox.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 13 Aug 2015 07:41:24 GMT -->
</html>

