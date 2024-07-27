//javascript
var nj = function ( p ) {
    if( p == "" || typeof( p ) == "undefined" ) {
        this.e = null;
        return this;
    } else if ( Node.prototype.isPrototypeOf( p ) || NodeList.prototype.isPrototypeOf( p ) || typeof( p ) == "object" ) {
        this.e = p;
    } else if( p.substr( 0, 1 ) === "#" && p.indexOf( " " ) === - 1 && p.indexOf( "," ) === - 1 && p.indexOf( "[" ) === - 1 && p.indexOf( ":" ) === - 1) {
        this.e = document.getElementById( p.substr( 1, p.length - 1 ) );    
    } else if( p.substr( 0, 1 ) === "." && p.indexOf( " " ) === - 1 && p.indexOf( "," ) === - 1 && p.indexOf( "[" ) === - 1 && p.indexOf( ":" ) === - 1) {
        this.e = document.getElementsByClassName( p.substr( 1, p.length - 1 ) );    
    } else {
        this.e = document.querySelectorAll( p );
    }
    _els = function( p ) {
        if( p === "" || typeof( p ) === "undefined" ) {
            return null;
        } else if ( Node.prototype.isPrototypeOf( p ) || NodeList.prototype.isPrototypeOf( p ) ) {
            return p;
        } else if( p.substr( 0, 1 ) === "#" && p.indexOf( " " ) === - 1 && p.indexOf( "," ) === - 1 && p.indexOf( "[" ) === - 1 && p.indexOf( ":" ) === - 1) {
            return document.getElementById( p.substr( 1, p.length - 1 ) );    
        } else if( p.substr( 0, 1 ) === "." && p.indexOf( " " ) === - 1 && p.indexOf( "," ) === - 1 && p.indexOf( "[" ) === - 1 && p.indexOf( ":" ) === - 1) {
            return document.getElementsByClassName( p.substr( 1, p.length - 1 ) );    
        } else {
            return document.querySelectorAll( p );
        }
    }
    _lEl = function( e ) {
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            return this.e;
        } else {
            return this.e[ this.e.length - 1 ];
        }
    }
    _fEl = function( e ) {
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            return this.e;
        } else {
            return this.e[ 0 ];
        }
    }
    _nEl = function( e, n ) {
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            return this.e;
        } else {
            return this.e[ n - 1 ];
        }
    }
    _bEl = function( e ) {
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            return this.e.previousElementSibling;
        } else {
            return false;
        }
    }
    _cEl = function( t ) {
        return document.createElement( t );
    }
    _htm = function( v ) {
        if( this.e === null ) return false;
        if( NodeList.prototype.isPrototypeOf( this.e ) || HTMLCollection.prototype.isPrototypeOf( this.e ) ) {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[i].innerHTML = v;
                i += 1;    
            }
            return;
        }
        if( typeof( v ) == "undefined" ) {
            return this.e.innerHTML;
        } else {
            this.e.innerHTML = v;
        }
    }
    _txt = function( v ) {
        if( this.e === null ) return false;
        if( NodeList.prototype.isPrototypeOf( this.e ) || HTMLCollection.prototype.isPrototypeOf( this.e ) ) {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[i].textContent = v;
                i += 1;    
            }
            return;
        }
        if( typeof( v ) == "undefined" ) {
            return this.e.textContent;
        } else {
            this.e.textContent = v;
        }
    }
    _oHt = function( v ) {
        if( NodeList.prototype.isPrototypeOf( this.e ) || HTMLCollection.prototype.isPrototypeOf( this.e ) ) {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[i].outerHTML = v;
                i += 1;    
            }
            return;
        } else {
            this.e.outerHTML = v;
        }
    }
    _oTx = function( v ) {
        if( NodeList.prototype.isPrototypeOf( this.e ) || HTMLCollection.prototype.isPrototypeOf( this.e ) ) {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[i].outerText = v;
                i += 1;    
            }
            return;
        } else {
            this.e.outerText = v;
        }
    }
    _v = function( v ) {
        if( this.e == null ) return false;
        if( typeof( v ) == "undefined" ) {
            return this.e.value;
        } else {
            this.e.value = v;
        }
    }
    _b = function( v ) {
        if( this.e == null ) return false;
        this.e.before( v );
    }
    _a = function( v ) {
        if( this.e == null ) return false;
        this.e.after( v );
    }
    _p = function( v ) {
        if( this.e == null ) return false;
        return this.e.parentElement;
    }
    _m = function( target ) {
        if( this.e == null || typeof target === "undefined" ) return false;
        let fragment = document.createDocumentFragment();
        fragment.appendChild( this.e );
        nj().els( target ).appendChild(fragment);
    }
    _clN = function() {
        return this.e.cloneNode();
    }
    _rpN = function( v ) {
        this.e.replaceWith( v );
    }
    _id = function() {
        if( this.e == null ) return false;
        return this.e.getAttribute( "id" );
    }
    _tag = function( v ) {

        if( NodeList.prototype.isPrototypeOf( this.e ) ) {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                if( typeof v === "undefined" ) {

                } else {
                    this.e[i].tagName = v;
                    i += 1;    

                }
            }
            return;
        } else {
                if( typeof v === "undefined" ) {
                    return this.e.tagName;        

                } else {
                    this.e.tagName = v;
                }
        }
    }
    _ds = function( v ) {
        if( NodeList.prototype.isPrototypeOf( this.e ) ) {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                    return this.e[i].dataset[v];
                    i += 1;
                }
        } else {
            return this.e.dataset[v];
        }
    }
    _sDs = function( ds, v ) {
        if( NodeList.prototype.isPrototypeOf( this.e ) ) {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                    this.e[i].dataset[ds] = v;
                    i += 1;
                }
            return;
        } else {
            return this.e.dataset[ds] = v;
        }
    }
    //set selected values
    _sSV = function( v, clearField ) {
        if( this.e == null ) return false;
        if( clearField || clearField == undefined ) {
            this.e.value = null;
        }
        console.log( v );
        let tmpId = "#" + this.e.id +  " option";
        let els = nj().els( tmpId );
        let l = els.length, j;
        for (var i = 0; i < v.length; i++) {
            j = 0;
            while( j < l ) {
                if( els[j].value == v[i] ) {
                    els[j].selected = true;        
                }
                j += 1;    
            }    
        }
    return;
    }
    _aCN = function ( v ) {
        if( this.e == null ) return false;
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            this.e.classList = this.e.classList + " " + v;
        } else {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[ i ].classList = this.e[ i ].classList + " " + v;
                i += 1;    
            }
        }
        return this.e.classList;            
    }
    _rCN = function ( v ) {
        if( this.e == null ) return false;
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            this.e.classList = this.e.classList.replace( v, "");
        } else {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[ i ].classList = this.e[ i ].classList.replace( v, "");
                i += 1;    
            }
        }
        return this.e.classList;            
    }
    _gSV = function() {
        if( this.e == null ) return false;
        let tmpId = "#" + this.e.id;
        let select = nj().els( tmpId );

        let result = [];
        let options = select && select.options;
        let opt;

        for (var i=0, iLen=options.length; i<iLen; i++) {
            opt = options[i];
            if (opt.selected) {
              result.push(opt.value || opt.text);
            }
        }
        return result;    
    }
    _f = function( v ) {
        if( this.e == null ) return false;
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            this.e.focus();
        } else {
            this.e[0].focus()
        }
    }
    _s = function( v ) {
        if( this.e == null ) return false;
        this.e.select();
    }
    _chk = function( v ) {
        if( this.e == null ) return false;
        if( typeof( v ) !== "undefined" ) {
            this.e.checked = v;
        } else {
            return this.e.checked;
        }
    }
    _sPr = function( n, v ) {
        if( this.e == null ) return false;
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            this.e[n] = v; 
        } else {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[i][n] = v;
                i += 1;    
            }
        }
    }
    _rPr = function( v ) {
        if( this.e == null ) return false;
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            this.e.removeAttribute( v ); 
        } else {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[i].removeAttribute( v );
                i += 1;    
            }
        }
    }
    // classes, styles
    _aCl = function( c ) {
        if( this.e == null ) return false;
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            let tmpCl = c.split( " " );
            if( tmpCl.length > 0 ) {
                let l = tmpCl.length;
                let i = 0;
                while( i < l ) {
                    this.e.classList.add( tmpCl[i] );
                    i += 1;    
                }
            } else {
                this.e.classList.add( c );    
            }            
        } else {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[ i ].classList.add( c );
                i += 1;    
            }
        }
    }
    _hCl = function( c ) {
        if( this.e == null ) return false;
        if( this.e.length > 0 ) {
            return this.e[0].classList.contains( c );    
        }
        return this.e.classList.contains( c );
    }
    _rCl = function( c ) {
        if( this.e == null ) return false;
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            let tmpCl = c.split( " " );
            if( tmpCl.length > 0 ) {
                let l = tmpCl.length;
                let i = 0;
                while( i < l ) {
                    this.e.classList.remove( tmpCl[i] );
                    i += 1;    
                }
            } else {
                this.e.classList.remove( c );    
            }            
        } else {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[ i ].classList.remove( c );
                i += 1;    
            }
        }
    }
    _tCl = function( c ) {
        if( this.e == null ) return false;
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            this.e.classList.toggle( c );            
        } else {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[ i ].classList.toggle( c );
                i += 1;    
            }
        }
        return this.e.classList;            
    }
    _clL = function() {
        if( this.e == null ) return false;
        return this.e.classList;            
    }
    _iCl = function( args ) {
        
    }
    _sty = function( s, v ) {
        if( this.e == null ) return false;
        if( NodeList.prototype.isPrototypeOf( this.e ) || HTMLCollection.prototype.isPrototypeOf( this.e ) ) {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                if( typeof( s ) == "object" ) {
                    for( let p in s ) {
                        this.e[i].style[p] = s[p];
                    }
                } else {
                    this.e[i].style[s] = v;
                }
                i += 1;    
            }
            return;
        }
        if( !this.e ) return;
        if( typeof( v ) == "undefined" && typeof( s ) != "object" ) {
            return this.e.style[s];
        } else {
            if( typeof( s ) == "object" ) {
                for( let p in s ) {
                    this.e.style[p] = s[p];
                }
            } else {
                this.e.style[s] = v;
            }   
        }
    }
    _sRP = function( p ) {
        // style remove property
        if( this.e == null ) return false;
        this.e.style.removeProperty( p );
    }
    _gCS = function( e, v ) {
        if( e == null ) return false;
        return window.getComputedStyle( this.e ).getPropertyValue( v );
    }
    // dom
    _rEl = function() {
        if( this.e == null ) return false;
        //this.parentElement.removeChild(this);
        this.e.outerHTML="";
        //this.e.remove();
    }
    _nEl = function() {
        return this.e.nextElementSibling;
    }
    _prE = function() {
        return this.e.previousElementSibling;
    }
    _aCh = function( el ){
        return this.e.appendChild( el );
    }
    _pCh = function( e ){
        return this.e.prepend( e );
    }
    _app = function( v ){
        return this.e.append( v );
    }
    _atr = function( a, v ) {
        if( typeof( v ) != "undefined" ) {
            if( Node.prototype.isPrototypeOf( this.e ) ) {
                return this.e.setAttribute( a, v )
            } else {
                let l = this.e.length;
                let i = 0;
                while( i < l ) {
                    this.e[i].setAttribute( a, v );
                    i += 1;    
                }
            }
        } else {
            if( NodeList.prototype.isPrototypeOf( this.e ) ) {
                return this.e[0].getAttribute( a );    
            } else {
                return this.e.getAttribute( a );
            }
        }
    }
    _hAt = function( a ){
        if( this.e.hasAttribute( a ) ) {
            return true;
        } else {
            return false;
        }
    }
    _rAt = function( a ){
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            this.e.removeAttribute( a )
        } else {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[ i ].removeAttribute( a )
                i += 1;    
            }
        }
    }
    _isE = function(){
        return !!this.e;
    }
    _gRe = function() {
        try {
            if( this.e.length == 1 ) {
                return this.e[0].getBoundingClientRect();    
            } else {
                return this.e.getBoundingClientRect();
            }
            
        } catch (e) {
            return e;
        }
    }  
    // events
    _on = function( ev, fun) {
        if( this.e == null ) return false;
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            this.e.addEventListener( ev, fun );
        } else {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[ i ].addEventListener( ev, fun );
                i += 1;    
            }
        }
    }
    _off = function( ev, fun) {
        if( this.e == null ) return false;
        if( Node.prototype.isPrototypeOf( this.e ) ) {
            this.e.removeEventListener( ev, fun );
        } else {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[ i ].removeEventListener( ev, fun );
                i += 1;    
            }
        }
    }
    _tri = function( ev ) {
        if( NodeList.prototype.isPrototypeOf( this.e ) && this.e.length > 0 ) {
            let l = this.e.length;
            let i = 0;
            while( i < l ) {
                this.e[i].dispatchEvent( new Event( ev ) );
                i += 1;    
            }
        } else {
            this.e.dispatchEvent( new Event( ev ) );    
        }
    }
    // cookies
    _gCV = function( a ) {  // get cookie value
        const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
        return b ? b.pop() : '';
    }
    _sCV = function( name, value, days) {
        let expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    // AJAX
    _post = function( url, d, cb ) {
        let hr = new XMLHttpRequest();
        hr.onreadystatechange = function(){
                if (hr.readyState === XMLHttpRequest.DONE) {
                    if (hr.status === 200) {
                        cb( hr.responseText );
                    } else {
                        console.log('Auf den Server kann (derzeit) nicht zugegriffen werden.');
                    }
                }
        }
        hr.open('POST', url, true);
        let f = new FormData();
        for (let p in d) {
            f.append( p, d[p] )
        }
        hr.send(f);
    }
    /* beispiel


const url = 'https://randomuser.me/api';

let data = {
  name: 'Sara'
}

var request = new Request(url, {
    method: 'POST',
    body: data,
    headers: new Headers()
});

fetch(request)
.then(function() {
    // Handle response we get from the API
})




    */
    _fetchPost = function( url, d, cb ) {
        console.log( JSON.stringify( d ) );
        fetch( url, {
            method: 'POST',
            headers: {
            //'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( d )
        })
        .then(res =>{ console.log( res );res.json()} )
        .then(res => {
                cb(res);
            })
        .catch(error => {
            console.log( error )
        });
    }
    _fetchPostNew = function( url, fetchData, callback ) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( fetchData )
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => callback( data ) );
    }
    // others
    _ddS = function( k, v ) {
        document.documentElement.style.setProperty( k, v );
    }
    _ddG = function( k ) {
        return document.documentElement.style.getPropertyValue( k );
    }
    _gBr = function() {
        if( window.navigator.userAgent.indexOf("Edg/") > -1 && window.navigator.userAgent.indexOf("Edge/") === -1 ) return "ChromiumEdge"; // for new edge chromium
        if( window.navigator.userAgent.indexOf("Chrome") > -1 ) return "Chrome";
        if( window.navigator.userAgent.indexOf("MSIE ") > -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./) ) return "MSIE";
        if( window.navigator.userAgent.indexOf("Edge/") > -1 ) return "Edge";
        if( window.navigator.userAgent.indexOf("Safari") > -1 && window.navigator.userAgent.indexOf('Chrome') == -1 ) return "Safari";
        if( window.navigator.userAgent.indexOf("Firefox") > -1 ) return "Firefox";
        //if( window.navigator.userAgent.indexOf("Edg/") > -1 && window.navigator.userAgent.indexOf("Edge/") === -1 ) return "ChromiumEdge"; // for new edge chromium
    }
    _lCS = function( f, p = "library/css/" ) {
        let els = nj().els( 'head link[href="' + url + '"]');
        if( els.length > 0 ) return;
        let link = nj().cEl( "link" );
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);        
    }
    // check equal
    _cEq = function(a, b) {
           var aProps = Object.getOwnPropertyNames(a);
           var bProps = Object.getOwnPropertyNames(b);
           if (aProps.length != bProps.length) {
              return false;
           }
           for (var i = 0; i < aProps.length; i++) {
              var propName = aProps[i];
              if (a[propName] !== b[propName]) {
                 return false;
              }
           }
           return true;
        }

    _exC = function( code ) {
        const myFunction = new Function(code);
        myFunction();
    }    

    // objects
    _oEx = function(a, b) {
        for( let p in b ) {
            //console.log( p, object[p] );
            a[p] = b[p]
        }
        return a;
    }
    // JSON
    _isJ = function (item) {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;

        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }

        if (typeof item === "object" && item !== null) {
            return true;
        }

        return false;
    }
    // arrays
    _rAE = function( a, v ) { // remove array element
        let l = a.length;
        let i = 0;
        while( i < l ) {
            if( typeof( v ) == "object" ) {
                if( nj().cEq( a[i], v ) ) break;
            } else {
                if( a[i] == v ) break;
            }
            i += 1;    
        }        
        a.splice ( i, 1);        
        return a;
    }
    //iterating over an array
    _fEa = function( arr, cb ) {
        arr.forEach(
        function (elem, index) {  // (1)
            cb(index, elem);
        });    
    }
    // filter object arra
    _fOA = function ( arr, field, value ) {
        // content
        return arr.filter(fieldValue => {
                        return fieldValue[field] === value;
                    });
    }
    // elements
    // dialog
    _gDV = function( ds = "dvar" ) {
        let x = 1;
        while (x == 1 ) {
            if( this.e.dataset[ ds ] ) {
                x = 0;
                return this.e.dataset[ ds ];
            } else {
                this.e = this.e.parentNode;
            }
        }
        return false;
    }
    _Dia = function( ds = "dvar", deep ) {
        let dia = false, x = 1;
        while (x == 1 ) {
            if( this.e.dataset[ ds ] ) {
                x = 0;
                dia = this.e.dataset[ ds ];
            } else {
                this.e = this.e.parentNode;
            }
        }
        if( !dia ) {
            return false;    
        } else {
            let tmp = dia.split( "." );
            let m = tmp.length;
            if( typeof deep !== "undefined" ) m = deep;
            let j = 1;
            let tmpVar = window[ tmp[0] ];
            while( j < m ) {
                tmpVar = tmpVar[tmp[j]];
                j += 1;
            }
            return tmpVar;
        }        
    }
    _gRO = function( ds = "dvar" ) {
        let dia = false, x = 1;
        while (x == 1 ) {
            if( this.e.dataset[ ds ] ) {
                x = 0;
                dia = this.e.dataset[ ds ];
            } else {
                this.e = this.e.parentNode;
            }
        }
        return window[ dia.split(".")[0] ];
    }
    _bDV = function( dvar ) {
        let tmp = dvar.split( "." );
        let m = tmp.length;
        let j = 1;
        let tmpVar = window[ tmp[0] ];
        while( j < m ) {
            tmpVar = tmpVar[tmp[j]];
            j += 1;
        }
        return tmpVar;    
    }
    this.els = _els;
    this.lEl = _lEl;
    this.fEl = _fEl;
    this.nEl = _nEl;
    this.bEl = _bEl;
    this.cEl = _cEl;
    this.htm = _htm;
    this.oHt = _oHt;
    this.oTx = _oTx;
    this.txt = _txt;
    this.sSV = _sSV;
    this.aCN = _aCN;
    this.rCN = _rCN;
    this.gSV = _gSV;
    this.v = _v;
    this.s = _s;
    this.f = _f;
    this.p = _p;
    this.b = _b;
    this.a = _a;
    this.m = _m;
    this.clN = _clN;
    this.rpN = _rpN;
    this.id = _id;
    this.chk = _chk;
    this.sPr = _sPr;
    this.rPr = _rPr;
    this.tag = _tag;
    this.ds = _ds;
    this.sDs = _sDs;

    // classes
    this.aCl = _aCl;
    this.hCl = _hCl;
    this.rCl = _rCl;
    this.tCl = _tCl;
    this.clL = _clL;
    this.sty = _sty;
    this.sRP = _sRP;
    this.gCS = _gCS;
    this.gRe = _gRe;
    // dom
    this.rEl = _rEl;
    this.nEl = _nEl;
    this.prE = _prE;
//    this.pEl = _pEl;
    this.aCh = _aCh;
    this.pCh = _pCh;
    this.app = _app;
    this.atr = _atr;
    this.hAt = _hAt;
    this.rAt = _rAt;
    this.isE = _isE;
    // events
    this.on = _on;
    this.off = _off;
    this.tri = _tri;
    // cookies
    this.sCV = _sCV;
    this.gCV = _gCV;
    // AJAX
    this.post = _post;
    this.fetchPost = _fetchPost;
    this.fetchPostNew = _fetchPostNew;
    // others
    this.ddS = _ddS;
    this.ddG = _ddG;
    this.cEq = _cEq;
    this.gBr = _gBr;
    this.lCS = _lCS;
    this.exC = _exC; 
    // objects
    this.oEx = _oEx;
    this.isJ = _isJ;
    // arrays
    this.rAE = _rAE;
    this.fEa = _fEa;
    this.fOA = _fOA;
    //
    // dialog
    this.gDV = _gDV;
    this.Dia = _Dia;
    this.gRO = _gRO;
    this.bDV = _bDV;
    return this
}
nj( document );
const init = function( name ) {
    window[ name ] = new Dialog();
    console.log( name, window[ name ] );
}
//var oldY = 0, oldX = 0;
let cDia;
var TEST_INNER_HTML ="<p><input value='abcd'></p>"; 
var setDialogPosOnScroll = function() {
    let els = nj().els( ".dialogBox:not(.boxHide)" );
    let l = els.length;
    let i = 0;
    let dias = [];
    while( i < l ) {
        dias.push( nj( els[i] ).Dia() );
        i += 1;    
    }
    //console.log( dias );  
    i = 0;  
    while( i < l ) {
        console.log( nj( nj().els( dias[i].opt.id + "_box" ) ).gRe() );
        console.log( window.scrollX, window.scrollY );
        i += 1;    
    }    
}
//registerOnResize( setDialogPosOnScroll );
const getRootObject = function( el ) {
    return window[ getDVar( el ).split(".")[0] ];
}
const getDialogVar = function( dVar ) {
    let tmp = dVar.split( "." );
    let m = tmp.length;
    let j = 1;
    let tmpVar = window[ tmp[0] ];
    while( j < m ) {
        tmpVar = tmpVar[tmp[j]];
        j += 1;
    }
    return tmpVar;
}
const getDVar = function( el ) {
    let x = 1;
    while (x == 1 ) {
        if( nj( el ).hAt( "data-dVar" ) ) {
            x = 0;
            return nj( el ).atr( "data-dVar" )
        } else {
            el = nj( el ).p();
        }
    }
}
/* end dialog helper */
/* TODO: extract all not nessacary setup vars to intern vars */ 
class Dialog {                    // dialog drag and resize
      constructor( param ) {
        this.opt = {
            id:                 "", // necessary - id of dialog; if the element does not exists a new element will be created with this id
            innerHTML:          undefined, // optional - the start inner html; if the element of id not exists, this value is the content else it is the content of existing element with id
            target:             document.body, // optional - the target element
            menu:               undefined, // the html of the menu object
            classPraefix:       "d_", // optional - praefix for all classes
            dVar:               "", // necessary - must by the name of the object
            height:             undefined, // optional - can be a value for standard height or "dynamic" for dynamic according to the content size
            maxHeight:          undefined, // optional - can be a value for maximum height
            width:              undefined, // optional - can be a value for standard width
            maxWidth:           undefined, // optional - can be a value for maximum width
            minHeight:          150, // min height for resizing
            minWidth:           300, // min width for resizing
            headlineHeight:     undefined, // do not use - is set by class
            menuHeigh:          undefined, // do not use - is set by class
            dialogHeight:       undefined, // do not use - is set by class
            footerHeight:       undefined, // do not use - is set by class
            modal:              true, // optional - true/false
            cascade:            true,
            cascadeDiff:        40,
            autoOpen:           false, // optional - true/false
            center:             true, // optional - true/false
            remindCenter:       undefined, // a temporary value for saving start center
            title:              "Titel",  // necessary - string
            addClasses:         undefined, // optional - additional classes divide by " "
            addClassFiles:      "dialog.css main.css", // optional - additional class files divide by " "
            hasIcon:            false, // optional - true/false
            hasInfo:            false, // optional - true/false
            hasHelp:            false, // optional - true/false
            helpCanResize:      false, // optional - true/false
            divHelp:            undefined, // do not set
            divInfo:            undefined, // do not set
            hasMin:             false,
            hasMax:             false,
            hasSticky:          false,
            hasClose:           true,
            canMove:            true,
            dragIsSet:          false,
            canResize:          false,
            resizeIsSet:        false,
            buttons:            [],// [ {title: "Okay", action: function(){ nj( this ).Dia().hide() }, {title: "", action: function(){} }, ... ],
            isOpen:             false,
            selectFirstButton:  true,
            selectFirstInput:   true,
            onInit:             undefined,
            onShow:             undefined,
            afterShow:          undefined,
            onHide:             undefined,
            onSticky:           undefined,
            onClose:            undefined,
            onRefreshHTML:      undefined,
            variables:          undefined,
        }
        let showOnInit = true,
            boxId = "",
            tmpClasses = "";
        Object.assign( this.opt, param );
        if( this.opt.id === "" ) {
            let el = nj().cEl( "div" );
            el.id = this.opt.dVar;
            nj( this.opt.target ).aCh( el );
            this.opt.id = "#" + this.opt.dVar;
        }
        if( nj( this.opt.id + "_box" ).isE() ) return;
        this.opt.remindCenter = this.opt.center;
        loadCSS( PATH_TO_CSS + DEFAULT_CSS_FILE );
        let el = null;
        if( typeof this.opt.addClassFiles !== "undefined" ) {
            el = this.opt.addClassFiles.split( " " );
            let l = el.length;
            let i = 0;
            while( i < l ) {
                loadCSS( PATH_TO_CSS + el[i] );
                i += 1;    
            }
        }
        this.boxId = this.opt.id.substr( 1, this.opt.id.length - 1 );
        el = nj().cEl( "div" );
        if( nj().els( "#dialogMinimizeArea" )  === null ) {
            el.id = "dialogMinimizeArea";
            document.body.appendChild( el );            
        }
        el = null;
        if( typeof this.opt.buttons !== "undefined" ) {
            if( this.opt.buttons.length == 0 ) {
                b = {};
                b.title = "Okay";
                b.action = function( el ){
                    console.log( getDVar(  this ) );
                    nj( this ).Dia().hide();
                };
                this.opt.buttons.push( b ); 
            }   
        }
        el = nj().cEl( "div" );
        nj( el ).aCl( this.opt.classPraefix + "HL" );
        el.id = this.boxId + "_headline";
        nj( el ).on( "click", function( el ) {
            nj( el.target ).Dia().setMaxZIndex();
        });
        let el_add  = nj().cEl( "div" );
        nj( el_add ).aCl( this.opt.classPraefix + "HLIcon" );
        nj( el ).aCh( el_add );
        el_add = null;
        el_add = nj().cEl( "div" );
        el_add.id = this.opt.dVar + "HLTitle";
        nj( el_add ).aCl( this.opt.classPraefix + "HLTitle" );
        nj( el_add ).txt( this.opt.title );
        nj( el ).aCh( el_add );
        el_add = null;
        let el_ctrl = nj().cEl( "div" );
        el_add = nj().cEl( "div" );
        el_add = null;
        el_add = nj().cEl( "div" );
        if( this.opt.hasHelp ) {
            nj( el_add ).aCl( "cbHelp iconButtMin " + this.opt.classPraefix + "HLHelp");
            nj( el_add ).on( "click", function( e ) {
                e.stopPropagation();
                nj( e.target ).Dia().opt.divHelp.show();
            });
            nj( el_ctrl ).aCh( el_add );
        }
        el_add = null;
        el_add = nj().cEl( "div" );
        if( this.opt.hasInfo ) {
            nj( el_add ).aCl( "cbInfo iconButtMin " + this.opt.classPraefix + "HLInfo");
            nj( el_add ).on( "click", function( e ) {
                e.stopPropagation();
                nj( e.target ).Dia().opt.divInfo.show();    
            });
            nj( el_ctrl ).aCh( el_add );
        }
        el_add = null;
        el_add = nj().cEl( "div" );
        if( this.opt.hasMin ) {
            nj( el_add ).aCl( "cbMinimize iconButtMin " + this.opt.classPraefix + "HLMin" );
            nj( el_add ).on( "click", function( el ) {
                let df = nj( el.target ).Dia();
                if( nj( df.opt.id + "_box" ).hCl( "minimized" ) ) {
                    df.restoreMin()
                } else {
                    df.minimize();        
                }                
            });
            nj( el_ctrl ).aCh( el_add );
        }
        el_add = null;
        el_add = nj().cEl( "div" );
        if( this.opt.hasMax ) {
            nj( el_add ).aCl( "cbMax iconButtMin " + this.opt.classPraefix + "HLMax" );
            nj( el_add ).on( "click", function( el ) {
                let df = nj( el.target ).Dia();
                if( nj( df.opt.id + "_box" ).hCl( "maximized" ) ) {
                    df.restoreMax( el_add )
                } else {
                    df.maximize();        
                }
            });
            nj( el_ctrl ).aCh( el_add );
        }
        el_add = null;
        el_add = nj().cEl( "div" );
        if( this.opt.hasClose ) {
            nj( el_add ).aCl( "cbClose iconButtMin " + this.opt.classPraefix + "HLClose" );
            if( typeof this.opt.onClose === "undefined") {
                nj( el_add ).on( "click", function( el ) {
                    nj( el.target ).Dia().hide();    
                });                
            } else {
                nj( el_add ).on( "click", this.opt.onClose )
            }
            nj( el_ctrl ).aCh( el_add );
        }
        nj( el ).aCh( el_ctrl );
        
        let box = nj().cEl( "div" );
        box.id = this.boxId + "_box";
        nj( box ).atr( "data-dVar", this.opt.dVar );
        nj( box ).aCh( el );
        el_add = nj().cEl( "div" );
        el_add.id = this.boxId + "_menu";
        nj( el_add ).aCl( this.opt.classPraefix + "Menu " + CLASS_DIALOG_MENU );
        if( typeof this.opt.menu !== "undefined" ) nj( el_add ).htm( this.opt.menu );
        nj( box ).aCh( el_add );
        let el_dia;
        if( nj( this.opt.id ).isE() ) {
            el_dia = nj().els( this.opt.id );
            if( nj( el_dia ).htm() === "" && this.opt.innerHTML !== "" && typeof this.opt.innerHTML !== undefined ) {                
                nj( el_dia ).htm( this.opt.innerHTML );
            }
        } else {
            el_dia = nj().cEl( "div");
            el_dia.id = this.opt.id.substr( 1, this.opt.id.length );
            if( typeof this.opt.innerHTML !== "undefined" ) {
                nj( el_dia ).htm( this.opt.innerHTML );
            }
        }
        nj( el_dia ).aCl( CLASS_DIALOG_CONTENT );
        if( typeof this.opt.addClasses !== "undefined" ) {
            nj( el_dia ).aCl( this.opt.addClasses );
        }    
        if( typeof this.opt.height !== "undefined" ) {
            if( parseInt( this.opt.height ) == this.opt.height ) {
                nj( el_dia ).sty( "height", this.opt.height + "px" );
            } else {
                nj( el_dia ).sty( "height", this.opt.height );
            }
        }
        if( typeof this.opt.maxHeight !== "undefined" ) {
            if( parseInt( this.opt.maxHeight ) == this.opt.maxHeight ) {
                nj( el_dia ).sty( "max-height", this.opt.maxHeight + "px" );
            } else {
                nj( el_dia ).sty( "height", this.opt.maxHeight );
            }
        }
        if( typeof this.opt.maxWidth !== "undefined" ) {
            if( parseInt( this.opt.maxWidth ) == this.opt.maxWidth ) {
                nj( el_dia ).sty( "max-width", this.opt.maxWidth + "px" );
            } else {
                nj( el_dia ).sty( "max-width", this.opt.maxWidth );
            }
        }
        nj( box ).aCh( el_dia );
        el_add = null;
        el_add = nj().cEl( "div" );
        el_add.id = this.boxId + "_footer"
        nj( el_add ).aCl( this.opt.classPraefix + "Footer " + CLASS_DIALOG_FOOTER);
        if( this.opt.buttons ) {
            let l = this.opt.buttons.length;
            let i = 0;
            while( i < l ) {
                let b = nj().cEl( "button" );
                if( typeof this.opt.buttons[i] !== "undefined" ) {
                    nj( b ).htm( this.opt.buttons[i].title );
                    nj( b ).on( "click", this.opt.buttons[i].action );
                    nj( el_add ).aCh( b );
                }
                i += 1;    
            }            
        }
        if( typeof this.opt.width !== "undefined" ) {
            if( parseInt( this.opt.width ) == this.opt.width ) {
                nj( box ).sty( "width", this.opt.width + "px" );    
            } else {
                nj( box ).sty( "width", this.opt.width );
            }         
        }
        nj( box ).aCh( el_add );
        nj( box ).atr( "tabindex", "0" );
        nj( box ).on( "keydown", function(e){
            if( e.keyCode == 27 ) {
                nj( e.target ).Dia().hide();
            }
        });
        nj( box ).aCl( "boxHide " + this.opt.classPraefix + "Box " + CLASS_DIALOG_BOX );
        if( this.opt.modal ) {
            let el_wr = nj().cEl( "div" );
            el_wr.id = this.boxId + "_wrapper";
            nj( el_wr ).aCl( CLASS_DIALOG_WRAPPER + " dialogWrapper" );
            document.body.appendChild( el_wr );
        }
        if( this.opt.hasHelp ) {
            let el_he = nj().cEl( "div" );
            nj( el_he ).htm('<iframe src="' + PATH_TO_HELP + "help_" + this.boxId + '.html"></iframe>')
            el_he.id = this.boxId + "_help";
            nj( el_he ).aCl( CLASS_DIALOG_HELP );
            document.body.appendChild( el_he );
            this.opt.divHelp = new DialogDR( { 
                dVar: this.opt.dVar + ".opt.divHelp", 
                id: "#" + el_he.id, 
                title: "Hilfe", 
                modal: true, 
                autoOpen: false, 
                center: false, 
                cascade: false, 
                canResize: this.opt.helpCanResize 
            } );
        }
        if( this.opt.hasInfo ) {
            let el_i = nj().cEl( "div" );
            nj( el_i ).htm('<iframe src="' + PATH_TO_INFO + "info_" + this.boxId + '.html"></iframe>')
            el_i.id = this.boxId + "_info";
            nj( el_i ).aCl( CLASS_DIALOG_INFO );
            document.body.appendChild( el_i );
            this.opt.divInfo = new DialogDR( { dVar: this.opt.dVar + ".opt.divInfo", id: "#" + el_i.id, title: "Information", modal: true, autoOpen: false, center: false, cascade: false })
        }
        nj( this.opt.target ).aCh( box );
        if( this.opt.canResize ) {
            let dummyRes = nj().cEl("div");
            dummyRes.id = this.boxId +  "_dummyRes";
            nj( dummyRes ).aCl( "dummyRes" );
            const boxEl = nj().els( box );
            nj( boxEl ).aCh( dummyRes );
        }
        if( this.opt.cascade ) {
            nj( "#" + this.boxId + "_box" ).aCl( "cascade" );
        }
        if( this.opt.canMove ) {
            draggable( ( this.opt.id + "_box" ).replace("#", "") );
            dialogTouchMove( this.opt.id + "_headline" );            
        }
        if( this.opt.canResize ) {
            resizeable( ( this.opt.id + "_dummyRes" ).replace("#", "") );            
        }
        if( typeof this.opt.onInit === "function" ) this.opt.onInit( this );
        if( this.opt.autoOpen ) {
            this.showOnInit = true;
            this.show();
        }
    }


    setMaxZIndex = function() {
        let mI = maxZIndex();
        if( this.opt.modal ) {
            nj( this.opt.id + "_wrapper" ).sty( "z-index", ++mI )
        }
        nj( this.opt.id + "_box" ).sty( "z-index", ++mI )       
    }
    /**
     * show
     * 
     * shows the dialog
     * 
     * args     arguments as object { center: [true/false], onShow: function ...}
     *  center      centers the dilaog
     *  onShow      function onShow
     *  innerHTML   inner html
     *  buttons     buttons as button array
     *  width       dialog width as integer
     *  heigth      dialog heigth as integer
     *  x           left position as integer
     *  y           top position as integer
     *  tmpClasses  additional classes divided by " "
     *  variables   additional arguments 
     */ 
    show = function( args ) {
        nj( this.opt.id + "_box" ).rCl( "boxHide");
        nj( this.opt.id + "_box" ).aCl( "boxHidden");

        let x, y;
        if( this.opt.center ) {
            x = this.center().x; 
            y = this.center().y;
            if( parseInt( x ) < 0 ) {
                x = window.innerWidth / 2 - this.opt.width / 2 - 3 + "px";
            }
            if( parseInt( y ) < 0 ) {
                y = window.innerHeight / 2 - this.opt.height / 2 - 48 + "px";
            }
        } else { 
                x = "0px";
                y = "0px";
        }
        if( typeof this.opt.onShow === "function" ) this.opt.onShow( this );
        if( typeof args !== "undefined") {
            if( typeof args.title !== "undefined" ) {
                this.options( "title", args.title );
            }
            if( typeof args.innerHTML !== "undefined" ) {
                nj( this.opt.id ).htm( args.innerHTML );
                if( typeof this.opt.onRefreshHTML === "function" ) this.opt.onRefreshHTML();
            }
            if( typeof args.buttons === "undefined" ) {
                this.options( "buttons", this.opt.buttons );
            } else {
                this.options( "buttons", args.buttons );
            }
            if( typeof args.width === "undefined" ) {
                if( parseInt( args.width ) === args.width ) {
                    nj( this.opt.id + "_box" ).sty( "width", args.width + "px" );    
                } else {
                    nj( this.opt.id + "_box" ).sty( "width", args.width );   
                }
            }
            if( typeof args.height === "undefined" ) {
                if( parseInt( args.height ) === args.height ) {
                    nj( this.opt.id ).sty( "height", args.height + "px" );    
                } else {
                    nj( this.opt.id ).sty( "height", args.height );   
                }
            }

            if( typeof args.x !== "undefined" ) {
                x = args.x + "px";
            }
            if( typeof args.y !== "undefined" ) {
                y = args.y + "px";
            }
            if( typeof args.tmpClasses !== "undefined" ) {
                this.tmpClasses = args.tmpClasses;
                nj().els( this.opt.id + "_box" ).classes += this.tmpClasses;
            } 
            if( typeof args.variables !== "undefined" ) {
                this.opt.variables = args.variables;
            } 
            if( typeof args.onShow === "function" ) args.onShow( this, args.variables );
        }
        let boxDim = nj( this.opt.id + "_box" ).gRe();
        this.opt.headlineHeight = nj( this.opt.id + "_headline" ).gRe().height;
        this.opt.menuHeight = nj( this.opt.id + "_menu" ).gRe().height;
        this.opt.dialogHeight = nj( this.opt.id ).gRe().height;
        this.opt.footerHeight = nj( this.opt.id + "_footer" ).gRe().height;
        this.opt.remindCenter = this.opt.center;
        nj( this.opt.id + "_box" ).rCl( "boxHidden");
        if( this.opt.cascade ) {
            let els = nj().els( "div.cascade.boxShow[id*='_box']");
            let l = els.length;
            let i = 0;
            while ( i < l ) {
                if( nj( els[i] ).sty( "left" ) == x && nj( els[i] ).sty( "top" ) == y ) {
                    x = parseInt( x ) + this.opt.cascadeDiff + "px";
                    y = parseInt( y ) + this.opt.cascadeDiff + "px";
                }
                i += 1;
            }
        }
        if( parseInt( x ) < 0 ) x=parseInt( x ) *-1 + "px";
        if( parseInt( y ) < 0 ) y=parseInt( y ) *-1 + "px";
        let mZI = maxZIndex();
        if( this.opt.modal ) {
            nj( this.opt.id + "_wrapper" ).rCl( "wrapperHide");
            nj( this.opt.id + "_wrapper" ).aCl( "wrapperShow dialogWrapper");
            nj( this.opt.id + "_wrapper" ).sty( { "z-index": ++mZI } );
        }
        nj( this.opt.id + "_box" ).sty( { "left": x, "top": y, "z-index": ++mZI } );
        nj( this.opt.id + "_box" ).aCl( "boxShow");
        nj( this.opt.id ).sty( "display", "block" );
        if( typeof this.opt.afterShow === "function" ) {
            this.opt.afterShow( this );
        }
    }
    hide = function() {
        if( this.opt.modal ) {
            nj( this.opt.id + "_wrapper" ).rCl( "wrapperShow");
            nj( this.opt.id + "_wrapper" ).aCl( "wrapperHide");
        }
        this.opt.center = this.opt.remindCenter;
        nj( this.opt.id + "_box" ).rCl( "boxShow");
        nj( this.opt.id + "_box" ).aCl( "boxHide");
        // remove tmpClasses
        if( typeof this.tmpClasses !== "undefined") {        
            let cCl = this.tmpClasses.split(" ");
            let l = cCl.length;
            let i = 0;
            while ( i < l ) {
                nj( this.opt.id + "_box" ).rCl( cCl[i] );
                i += 1;
            }
        }
        //
        if( typeof this.opt.onHide === "function" ) this.opt.onHide( this );
    }
    savePosDim = function() {
        let vPosDimDia = nj( this.opt.id ).gRe();
        let oPosDim = {};
        oPosDim.wD = vPosDimDia.width;
        oPosDim.hD = vPosDimDia.height;
        let vPosDimBox = nj( this.opt.id + "_box" ).gRe();
        oPosDim.x = vPosDimBox.x;
        oPosDim.y = vPosDimBox.y;
        oPosDim.w = vPosDimBox.width;
        oPosDim.h = vPosDimBox.height;
        nj( this.opt.id + "_box" ).atr( "data-PosDim", JSON.stringify( oPosDim ) );
    }
    restorePosDim = function() {
        if( !nj( this.opt.id + "_box" ).hAt( "data-PosDim") ) return false;
        let vPosDim = JSON.parse( nj( this.opt.id + "_box" ).atr( "data-PosDim" ) );
        nj( this.opt.id ).sty( { "width": vPosDim.wD + "px", "height": vPosDim.hD + "px" } );
        nj( this.opt.id + "_box" ).sty( { "width": vPosDim.w + "px", "height": vPosDim.h + "px", "top": vPosDim.y + "px", "left": vPosDim.x + "px" } );
        nj( this.opt.id + "_box" ).rAt( "data-PosDim" );
    }
    center = function() {
        let scrLeft = +( document.documentElement.style.getPropertyValue('--scrollbar-width') );
        let wW = +( document.documentElement.style.getPropertyValue('--window-width') );
        wW = wW - scrLeft;
        let dW = nj( this.opt.id + "_box" ).gRe().width;
        let scrTop = +( document.documentElement.style.getPropertyValue('--scrollbar-height') );
        let wH = +( document.documentElement.style.getPropertyValue('--window-height') );
        wH = wH - scrTop;
        let dH = nj( this.opt.id + "_box" ).gRe().height;
        let ret = {};
        ret.x = wW / 2 - dW / 2 + "px";
        ret.y = wH / 2 - dH / 2 + "px"
        return ret; 
    }
    reorganizeMinimized = function() {
        let els = nj().els( ".minimized" );
        let l = els.length;
        let i = 0;
        while( i < l ) {
//          nj( els[i] ).sty( { "top": "-20px", "left": 150 * i -38 + "px", "width": "150px" } );
          nj( els[i] ).sty( { "top": "-20px", "left": 150 * i + 3 * i + "px", "width": "150px" } );
            i += 1;    
        }        
    }
    restoreMin() {
        if( this.opt.modal ) {
            nj( this.opt.id + "_wrapper" ).rCl( "wrapperHide" ); 
            nj( this.opt.id + "_wrapper" ).aCl( "wrapperShow" ); 
        }
        nj( this.opt.id + "_box" ).m( this.opt.target );
        nj( this.opt.id + "_box" ).rCl( "minimized" );
        nj( this.opt.id + "_box" ).sty( {"position": ""} );
        this.restorePosDim();
    }
    minimize = function(){
        if( !nj( this.opt.id + "_box" ).hCl( "maximized" ) ) {
            this.savePosDim();
        }
        if( this.opt.modal ) {
            nj( this.opt.id + "_wrapper" ).rCl( "wrapperShow" ); 
            nj( this.opt.id + "_wrapper" ).rPr( "style" );
        }
        nj( this.opt.id + "_box" ).aCl( "minimized" );
        nj( this.opt.id + "_box" ).m( "#dialogMinimizeArea" );
        nj( this.opt.id + "_box" ).sty( {"position": "absolute"} );
        this.reorganizeMinimized()
    }
    restoreMax = function( id ) {
        nj( this.opt.id + "_box > div ." + this.opt.classPraefix + "HLMax" ).aCl( "cbMax" );
        nj( this.opt.id + "_box > div ." + this.opt.classPraefix + "HLMax" ).rCl( "cbMaximized" );
        nj( this.opt.id + "_box" ).rCl( "maximized" );
        this.restorePosDim();
    }
    maximize = function() {
        this.savePosDim();
        let hlSize = nj( this.opt.id + "_headline").gRe();
        let menSize = nj( this.opt.id + "_menu").gRe();
        let fooSize = nj( this.opt.id + "_footer").gRe();
        let minArea = nj("#dialogMinimizeArea").gCS( "bottom");
        nj( this.opt.id + "_box" ).sty( { "left": "3px", "top": "3px", "width": window.innerWidth - getScrollbarWidth() - 7 + "px"/*, "height": window.innerHeight - getScrollbarHeight() - parseInt( minArea ) - 15 + "px"*/ } )
        let v = parseInt( hlSize.height + menSize.height + fooSize.height );
        let diaH = parseInt( nj( this.opt.id + "_box" ).gCS( "height") ) - v- 10;
        nj( this.opt.id + "_box" ).sty( { "height": window.innerHeight - 8 + "px"});
        let boxSize = nj( this.opt.id + "_box").gRe();
        nj( this.opt.id ).sty( "height", boxSize.height - v - 11 + "px" );
        nj( this.opt.id + "_box > div ." + this.opt.classPraefix + "HLMax" ).rCl( "cbMax" );
        nj( this.opt.id + "_box > div ." + this.opt.classPraefix + "HLMax" ).aCl( "cbMaximized" );
        nj( this.opt.id + "_box" ).aCl( "maximized" );
    }
    options = function( p, v ) {
        switch( p ) {
            case "correctCenterMaxZI":
                let mi = maxZIndex();
                if( this.opt.modal ) {
                    nj( this.opt.id + "_wrapper" ).sty( { "z-index" : mi + 1 } );
                    nj( this.opt.id + "_box" ).sty( { "z-index" : mi + 2 } );
                } else {
                    nj( this.opt.id + "_box" ).sty( { "z-index" : mi + 1 } );
                }
                if( this.opt.center ) {
                    let res = this.center();
                    nj( this.opt.id + "_box" ).sty( { "left" : res.x, "top": res.y } );                    
                }
            break;
            case "center":
                if( this.opt.center ) {
                    let res = this.center();
                    nj( this.opt.id + "_box" ).sty( { "left" : res.x, "top": res.y } );
                }
            break;
            case "scroll":
                x = window.scrollX + "px";
                y = nj().els( this.opt.id + "_box>div:first-child" )[0].getBoundingClientRect().height + window.scrollY + "px";
                nj( this.opt.id + "_box" ).sty( { "left": x, "top": y, "z-index": ++mZI } );
            break;
            case "title":
                if( typeof v === "undefined" ) {
                    return nj( "#" + this.opt.classPraefix + "HLTitle" ).htm();
                } else {
                    nj( "#" + this.opt.classPraefix + "HLTitle" ).htm( v );
                }
            case "html":
                if( typeof v === "undefined" ) {
                    return nj( this.opt.id ).htm();
                } else {
                    nj( this.opt.id ).htm( v );
                    if( typeof this.opt.onRefreshHTML === "function" ) this.opt.onRefreshHTML();
                }
            break;
            case "buttons":
                if( typeof v === "undefined" ) {
                    v = [];
                    v[0] = {};
                    v[0].title = "Okay";
                    v[0].action = function(){
                        /*
                        let df = getDVar( nj().els( this ) );
                        e.log( df.split( "." )[0] );
                        window[ df.split( "." )[0] ].opt.divVar.hide();
                        */
                        nj( this ).Dia().hide();
                    }
                }
                nj( this.opt.id + "_footer" ).htm( "" );
                let l = v.length;
                let i = 0;
                while( i < l ) {
                    let b = nj().cEl( "button" );
                    nj( b ).htm( v[i].title );
                    nj( b ).on( "click", v[i].action );
                    nj( this.opt.id + "_footer" ).aCh( b );
                    i += 1;    
                }
                if( this.opt.canResize ) {
                    let el_res = nj().cEl( "div" );
                    el_res.id = this.boxId + "_resizer";
                    nj( el_res ).aCl( this.opt.classPraefix + "Resizer " + CLASS_DIALOG_RESIZER );
                    nj( this.opt.id + "_footer" ).aCh( el_res );
                    //resizeClass.init( el_res, this.opt.id + "_box_resizer_img" );
                }

            break;
            case "position":
                nj( this.opt.id + "_box" ).sty( { "left": v.x, "top": v.y } );
            break;
            case "isOpen":
                if( nj( this.opt.id + "_box").hCl( "boxShow" ) ) {
                    return true;
                } else {
                    return false;
                }
            break;
        }
    }
}
/*
registerOnScroll( setDialogPosOnScroll);
*/
// registerDraggable