
var multi_line_header_string = String.raw`
  <!-- Side Bar -->
	<div class="row row-offcanvas row-offcanvas-left">
	  <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
    	<div class="list-group">
    		<a href="#" class="list-group-item active">Link</a>
    		<a href="#" class="list-group-item">Link</a>
    		<a href="#" class="list-group-item">Link</a>
    		<a href="#" class="list-group-item">Link</a>
    		<a href="#" class="list-group-item">Link</a>
    		<a href="#" class="list-group-item">Link</a>
    		<a href="#" class="list-group-item">Link</a>
    		<a href="#" class="list-group-item">Link</a>
    		<a href="#" class="list-group-item">Link</a>
    		<a href="#" class="list-group-item">Link</a>
    	</div>
    </div>
    <p class="pull-right visible-xs">

      <button 
        type="button" 
        class="btn btn-primary btn-xs" 
        data-toggle="offcanvas">
          Toggle side-bar
      </button>

    </p>
`;

document.write(multi_line_header_string);
