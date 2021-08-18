’’Archive’ 	
ImportPath Name Imports’ 
ExportData
 Declarations’ 	IncJSCode
 FileSet
 Minified GoLinknames’   ’[]string’   ’[]*compiler.Decl’ ’  ’“’’ FullName LinkingName’ Vars’ DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps’ Blocking   *’SymName’ PkgPath Name   $’[]compiler.GoLinkname’ ’  ;’
GoLinkname’ Implementation’ 	Reference’   žō’vendor/golang.org/x/crypto/hkdfhkdfcrypto/hmacerrorshashiož^i ¹hash HashpseudorandomKeyinfoReaderiosecretsaltWriter	BlockSizeResetSizeSumbReadpnerrWritehkdfExpandExtractNew       'F   # * * ,    F   @ *G 1G I    F   \ *c 1c c ,  6'  y =   G   M   R V| ~ T '  X ]§ _ a T ©'  e ]Ą _ a T Āk pw+E   ''  6µ AA=$packages["crypto/hmac"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  BB=$packages["errors"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  CC=$packages["hash"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  DD=$packages["io"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  FžF=$pkg.hkdf=$newType(0,$kindStruct,"hkdf.hkdf",true,"vendor/golang.org/x/crypto/hkdf",false,function(expander_,size_,info_,counter_,prev_,buf_){this.$val=this;if(arguments.length===0){this.expander=$ifaceNil;this.size=0;this.info=I.nil;this.counter=0;this.prev=I.nil;this.buf=I.nil;return;}this.expander=expander_;this.size=size_;this.info=info_;this.counter=counter_;this.prev=prev_;this.buf=buf_;});TJ.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([I],[$Int,$error],false)}];žćF.init("vendor/golang.org/x/crypto/hkdf",[{prop:"expander",name:"expander",embedded:false,exported:false,typ:C.Hash,tag:""},{prop:"size",name:"size",embedded:false,exported:false,typ:$Int,tag:""},{prop:"info",name:"info",embedded:false,exported:false,typ:I,tag:""},{prop:"counter",name:"counter",embedded:false,exported:false,typ:$Uint8,tag:""},{prop:"prev",name:"prev",embedded:false,exported:false,typ:I,tag:""},{prop:"buf",name:"buf",embedded:false,exported:false,typ:I,tag:""}]);hkdf	hash.Hash!vendor/golang.org/x/crypto/hkdf.I!vendor/golang.org/x/crypto/hkdf.J$vendor/golang.org/x/crypto/hkdf.hkdf  II=$sliceType($Uint8);I  JJ=$ptrType(F);J$vendor/golang.org/x/crypto/hkdf.hkdf 'vendor/golang.org/x/crypto/hkdf.Extractvendor/golang.org/x/crypto/hkdfExtract EžæE=function(a,b,c){var a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  Ģif(c===I.nil){$s=1;continue;}$s=2;continue;    case 1:  ßd=a();$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d.Size();$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}c=$makeSlice(I,e);    case 2:  f=A.New(a,c);$s=5;case 5:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}g=f;  )h=g.Write(b);$s=6;case 6:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}h;  Bi=g.Sum(I.nil);$s=7;case 7:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}$s=-1;return i;    }return;}if($f===undefined){$f={$blk:E};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Extract=E;Extractcrypto/hmac.New'vendor/golang.org/x/crypto/hkdf.Extract!vendor/golang.org/x/crypto/hkdf.I ,(*vendor/golang.org/x/crypto/hkdf.hkdf).Read žķF.ptr.prototype.Read=function(a){var a,b,c,d,e,f,g,h,i,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=this;  .c=a.$length;  >d=b.buf.$length+($imul(((((255-b.counter<<24>>>24)+1<<24>>>24)>>0)),b.size))>>0;    if(d<c){  $s=-1;return[0,B.New("hkdf: entropy limit reached")];    }  ēe=$copySlice(a,b.buf);  üa=$subslice(a,e);  (case 1:if(!(a.$length>0)){$s=2;continue;}  ;$r=b.expander.Reset();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  Pf=b.expander.Write(b.prev);$s=4;case 4:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}f;  kg=b.expander.Write(b.info);$s=5;case 5:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}g;  h=b.expander.Write(new I([b.counter]));$s=6;case 6:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}h;  ¬i=b.expander.Sum($subslice(b.prev,0,0));$s=7;case 7:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}b.prev=i;  Ņb.counter=b.counter+(1)<<24>>>24;   b.buf=b.prev;  e=$copySlice(a,b.buf);  &a=$subslice(a,e);    $s=1;continue;case 2:  Tb.buf=$subslice(b.buf,e);  h$s=-1;return[c,$ifaceNil];    }return;}if($f===undefined){$f={$blk:F.ptr.prototype.Read};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.$s=$s;$f.$r=$r;return $f;};F.prototype.Read=function(a){return this.$val.Read(a);};hkdf
errors.New!vendor/golang.org/x/crypto/hkdf.I$vendor/golang.org/x/crypto/hkdf.hkdf &vendor/golang.org/x/crypto/hkdf.Expandvendor/golang.org/x/crypto/hkdfExpand GžBG=function(a,b,c){var a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  	=d=A.New(a,b);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}e=d;  	jf=e.Size();$s=2;case 2:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}$s=-1;return new F.ptr(e,f,c,1,I.nil,I.nil);    }return;}if($f===undefined){$f={$blk:G};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Expand=G;Expandcrypto/hmac.New&vendor/golang.org/x/crypto/hkdf.Expand!vendor/golang.org/x/crypto/hkdf.I$vendor/golang.org/x/crypto/hkdf.hkdf #vendor/golang.org/x/crypto/hkdf.Newvendor/golang.org/x/crypto/hkdfNew Hž2H=function(a,b,c,d){var a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  
xe=E(a,b,c);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}f=e;  
g=G(a,f,d);$s=2;case 2:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}$s=-1;return g;    }return;}if($f===undefined){$f={$blk:H};}$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};$pkg.New=H;New&vendor/golang.org/x/crypto/hkdf.Expand'vendor/golang.org/x/crypto/hkdf.Extract#vendor/golang.org/x/crypto/hkdf.New žX{"Base":2750,"Files":[{"Name":"/tmp/gopherjs_playground.Kwun8HgUFp/goroot/src/vendor/golang.org/x/crypto/hkdf/hkdf.go","Base":1,"Size":2748,"Lines":[0,55,109,159,160,236,279,282,356,434,457,507,508,517,532,542,550,556,558,559,640,677,680,759,834,904,970,988,1025,1028,1063,1088,1115,1117,1118,1137,1157,1171,1172,1188,1202,1203,1216,1229,1231,1232,1277,1324,1340,1393,1414,1468,1471,1509,1530,1541,1542,1574,1592,1613,1640,1667,1705,1743,1757,1758,1789,1806,1827,1839,1842,1874,1893,1894,1912,1914,1915,1988,2065,2068,2148,2226,2286,2363,2408,2468,2470,2471,2547,2607,2678,2714,2746],"Infos":null}]}
 