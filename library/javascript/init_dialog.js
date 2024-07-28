//javascript
let test = 10;
const init = function( name ) {
    window[ name ] = new DialogDR({
    	dVar: "dDia", 
    	width: 280,
    	addClassFiles: "DialogNew.css dialog_easyit.css",
        hasClose: true,
        hasMin: true,
        rootPropertyPraefix: 'dialog-',
        canResize: true,
        hasInfo: true,
        infoFile: 'test.php',
        innerHTML: '<p><input value="abcd"></p>',
    });
    window[ 'dChin' ] = new DialogDR({
        dVar: "dChin", 
        width: 280,
        title: '对话标题',
        innerHTML: '这是一段对话。',
        classPraefix: 'dChin_',
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
    window[ 'dMac' ] = new DialogDR({
        dVar: "dMac", 
        width: 280,
        title: 'macOS-Dialog',
        innerHTML: 'Dieser Dialog wird im Style der Fenster von macOS dargestellt.',
        classPraefix: 'dMac',
        addClassFiles: 'dialog_mac.css',
        hasMin: true,
        hasMax: true,
    }); 
}
