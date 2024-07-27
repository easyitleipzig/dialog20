//javascript
let test = 10;
const init = function( name ) {
    window[ name ] = new DialogDR({
    	dVar: "dDia", 
    	width: 280,
    	addClassFiles: "DialogNew.css dialog_easyit.css"
    });
	window[ 'dChin' ] = new DialogDR({
    	dVar: "dChin", 
    	width: 280,
    	title: '对话标题',
    	innerHTML: '这是一段对话。',
    	buttons: [
    			{
    				title: '好的',
    				action: function() {
    					nj( this ).Dia().hide();
    				}
    			},
    			{
    				title: 'نعم',
    				action: function() {
    					nj( this ).Dia().show({
    						title: 'عنوان الحوار',
    						innerHTML:'<p style="text-align: right; margin: unset">هذا حوار</p>'})
    				}
    			}
    		]
    }); 

    
    console.log( name, window[ "test" ] );
}
