����Archive�� 

ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified GoLinknames�� 	BuildTime��   ��[]string��   ��[]*compiler.Decl�� ��  ������ FullName LinkingName�� Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   *��SymName�� PkgPath Name   $��[]compiler.GoLinkname�� ��  ;��
GoLinkname�� Implementation�� 	Reference��   ��Time��   �/:��image/internal/imageutil	imageutilimage�ri��	dstRGBAimager	RectanglesrcYCbCrspPointokPix StrideRect
ColorModelpModelimage/colorBoundsAtxyColorRGBA64AtRGBA64RGBAAt	PixOffsetSetc	SetRGBA64SetRGBASubImageImageOpaqueMinMaxStringDxDySizeAddSubInsetn	IntersectsUnionEmptyEqOverlapsInCanonYCbCrYStrideCStrideSubsampleRatioYCbCrSubsampleRatioYCbCrAtYOffsetCOffsetXqMulkDivModConvertgbaRGBA	imageutil	DrawYCbCrcolor 	  	 	( (	F   # % + %- .  	 1D 5 6 5 =% 5  OU   oU  ~U  U      �	 T F B MX  5Z a M]  5% h M_ k m 5a  u Md k m 5f  � Mi k m 5k  � Mn k m 5  � Mp k m �a   � Mr k m �f   � Mt k m �k   � Mv % 5x  � M|  5 	 �- 5 �- 5T � � %  5 � %  5 � %  5 � %  5- � % M- 5%  � % M- 5%  � % � 5%  � % �% 5%  � % �% 5%  � %  5  � % �% 5   � % �% 5   � % �% 5   � %  5% h % k m 5a  u % k m 5f  a %  5% B %  5Z �		 �� 5 �� 5 �� 5 � 5 � 5 �� 5 =% 5((((( U((((T �	 B M�  5Z a M�  5% h M� k m 5a  u M� k m 5f  � M� k m 5�  � M� k m 5  � M� k m 5  � M� % 5x  � M�  5 	 � 5 � 5T � � M-  5 � M- �- 5-  � M- �- 5-  � M- � 5-  � M- � 5-  � M- % 5   � M- % 5-  � M- �- 5  U  � �a 5a T �U    	 �	 �	 �	T �U � 5 � 5 � 5 � 5T �  �f  	 �	 �	 �	U � 5 � 5 � 5 � 5T �  �k  	 �	 �	 �		  h k m 5a  a  5% B  5ZT �T  � ��  5U � 5 � 5 � 5T �  ��  5	 5	 5	 5	5� �		 ��(�^����U� o�O��~�� AA=$packages["image"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} "image/internal/imageutil.DrawYCbCrimage/internal/imageutil	DrawYCbCr B�!LB=function(a,b,c,d){var a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,c,ca,cb,cc,cd,ce,cf,cg,ch,ci,cj,ck,cl,cm,cn,co,cp,cq,cr,cs,ct,cu,cv,cw,cx,cy,cz,d,da,db,dc,dd,de,df,dg,dh,di,dj,dk,dl,dm,dn,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;e=false;  Pf=$imul(((b.Min.X-a.Rect.Min.X>>0)),4);  vg=$imul(((b.Max.X-a.Rect.Min.X>>0)),4);  �h=b.Min.Y-a.Rect.Min.Y>>0;  �i=b.Max.Y-a.Rect.Min.Y>>0;    j=c.SubsampleRatio;    if(j===(0)){  #k=h;l=d.Y;m=k;n=l;while(true){if(!(!((m===i)))){break;}  Vo=$subslice(a.Pix,($imul(m,a.Stride)));  xp=($imul(((n-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  �q=($imul(((n-c.Rect.Min.Y>>0)),c.CStride))+((d.X-c.Rect.Min.X>>0))>>0;  r=f;while(true){if(!(!((r===g)))){break;}  �t=$imul((((s=c.Y,((p<0||p>=s.$length)?($throwRuntimeError("index out of range"),undefined):s.$array[s.$offset+p]))>>0)),65793);  �v=(((u=c.Cb,((q<0||q>=u.$length)?($throwRuntimeError("index out of range"),undefined):u.$array[u.$offset+q]))>>0))-128>>0;  �x=(((w=c.Cr,((q<0||q>=w.$length)?($throwRuntimeError("index out of range"),undefined):w.$array[w.$offset+q]))>>0))-128>>0;  
�y=t+($imul(91881,x))>>0;    if(((((y>>>0))&4278190080)>>>0)===0){  
�y=(y>>$min((16),31))>>0;    }else{  
�y=~((y>>31>>0))>>0;    }  
�z=(t-($imul(22554,v))>>0)-($imul(46802,x))>>0;    if(((((z>>>0))&4278190080)>>>0)===0){  Hz=(z>>$min((16),31))>>0;    }else{  cz=~((z>>31>>0))>>0;    }  }aa=t+($imul(116130,v))>>0;    if(((((aa>>>0))&4278190080)>>>0)===0){  �aa=(aa>>$min((16),31))>>0;    }else{  �aa=~((aa>>31>>0))>>0;    }  Dab=$subslice(o,r,(r+4>>0),o.$length);  j(0>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+0]=((y<<24>>>24)));  �(1>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+1]=((z<<24>>>24)));  �(2>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+2]=((aa<<24>>>24)));  �(3>=ab.$length?($throwRuntimeError("index out of range"),undefined):ab.$array[ab.$offset+3]=255);  ac=r+4>>0;ad=p+1>>0;ae=q+1>>0;r=ac;p=ad;q=ae;}  ?af=m+1>>0;ag=n+1>>0;m=af;n=ag;}    }else if(j===(1)){  �ah=h;ai=d.Y;aj=ah;ak=ai;while(true){if(!(!((aj===i)))){break;}  $al=$subslice(a.Pix,($imul(aj,a.Stride)));  Fam=($imul(((ak-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  �ao=($imul(((ak-c.Rect.Min.Y>>0)),c.CStride))-(an=c.Rect.Min.X/2,(an===an&&an!==1/0&&an!==-1/0)?an>>0:$throwRuntimeError("integer divide by zero"))>>0;  �ap=f;aq=d.X;ar=ap;as=aq;while(true){if(!(!((ar===g)))){break;}  au=ao+(at=as/2,(at===at&&at!==1/0&&at!==-1/0)?at>>0:$throwRuntimeError("integer divide by zero"))>>0;  qaw=$imul((((av=c.Y,((am<0||am>=av.$length)?($throwRuntimeError("index out of range"),undefined):av.$array[av.$offset+am]))>>0)),65793);  �ay=(((ax=c.Cb,((au<0||au>=ax.$length)?($throwRuntimeError("index out of range"),undefined):ax.$array[ax.$offset+au]))>>0))-128>>0;  �ba=(((az=c.Cr,((au<0||au>=az.$length)?($throwRuntimeError("index out of range"),undefined):az.$array[az.$offset+au]))>>0))-128>>0;  zbb=aw+($imul(91881,ba))>>0;    if(((((bb>>>0))&4278190080)>>>0)===0){  �bb=(bb>>$min((16),31))>>0;    }else{  �bb=~((bb>>31>>0))>>0;    }  �bc=(aw-($imul(22554,ay))>>0)-($imul(46802,ba))>>0;    if(((((bc>>>0))&4278190080)>>>0)===0){  5bc=(bc>>$min((16),31))>>0;    }else{  Pbc=~((bc>>31>>0))>>0;    }  jbd=aw+($imul(116130,ay))>>0;    if(((((bd>>>0))&4278190080)>>>0)===0){  �bd=(bd>>$min((16),31))>>0;    }else{  �bd=~((bd>>31>>0))>>0;    }  1be=$subslice(al,ar,(ar+4>>0),al.$length);  W(0>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+0]=((bb<<24>>>24)));  n(1>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+1]=((bc<<24>>>24)));  �(2>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+2]=((bd<<24>>>24)));  �(3>=be.$length?($throwRuntimeError("index out of range"),undefined):be.$array[be.$offset+3]=255);  �bf=ar+4>>0;bg=as+1>>0;bh=am+1>>0;ar=bf;as=bg;am=bh;}  bi=aj+1>>0;bj=ak+1>>0;aj=bi;ak=bj;}    }else if(j===(2)){  �bk=h;bl=d.Y;bm=bk;bn=bl;while(true){if(!(!((bm===i)))){break;}  bo=$subslice(a.Pix,($imul(bm,a.Stride)));  3bp=($imul(((bn-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  wbt=($imul((((bq=bn/2,(bq===bq&&bq!==1/0&&bq!==-1/0)?bq>>0:$throwRuntimeError("integer divide by zero"))-(br=c.Rect.Min.Y/2,(br===br&&br!==1/0&&br!==-1/0)?br>>0:$throwRuntimeError("integer divide by zero"))>>0)),c.CStride))-(bs=c.Rect.Min.X/2,(bs===bs&&bs!==1/0&&bs!==-1/0)?bs>>0:$throwRuntimeError("integer divide by zero"))>>0;  �bu=f;bv=d.X;bw=bu;bx=bv;while(true){if(!(!((bw===g)))){break;}  �bz=bt+(by=bx/2,(by===by&&by!==1/0&&by!==-1/0)?by>>0:$throwRuntimeError("integer divide by zero"))>>0;  bcb=$imul((((ca=c.Y,((bp<0||bp>=ca.$length)?($throwRuntimeError("index out of range"),undefined):ca.$array[ca.$offset+bp]))>>0)),65793);  �cd=(((cc=c.Cb,((bz<0||bz>=cc.$length)?($throwRuntimeError("index out of range"),undefined):cc.$array[cc.$offset+bz]))>>0))-128>>0;  �cf=(((ce=c.Cr,((bz<0||bz>=ce.$length)?($throwRuntimeError("index out of range"),undefined):ce.$array[ce.$offset+bz]))>>0))-128>>0;  kcg=cb+($imul(91881,cf))>>0;    if(((((cg>>>0))&4278190080)>>>0)===0){  �cg=(cg>>$min((16),31))>>0;    }else{  �cg=~((cg>>31>>0))>>0;    }  �ch=(cb-($imul(22554,cd))>>0)-($imul(46802,cf))>>0;    if(((((ch>>>0))&4278190080)>>>0)===0){  &ch=(ch>>$min((16),31))>>0;    }else{  Ach=~((ch>>31>>0))>>0;    }  [ci=cb+($imul(116130,cd))>>0;    if(((((ci>>>0))&4278190080)>>>0)===0){  �ci=(ci>>$min((16),31))>>0;    }else{  �ci=~((ci>>31>>0))>>0;    }  "cj=$subslice(bo,bw,(bw+4>>0),bo.$length);  H(0>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+0]=((cg<<24>>>24)));  _(1>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+1]=((ch<<24>>>24)));  v(2>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+2]=((ci<<24>>>24)));  �(3>=cj.$length?($throwRuntimeError("index out of range"),undefined):cj.$array[cj.$offset+3]=255);  �ck=bw+4>>0;cl=bx+1>>0;cm=bp+1>>0;bw=ck;bx=cl;bp=cm;}  �cn=bm+1>>0;co=bn+1>>0;bm=cn;bn=co;}    }else if(j===(3)){  �cp=h;cq=d.Y;cr=cp;cs=cq;while(true){if(!(!((cr===i)))){break;}  ct=$subslice(a.Pix,($imul(cr,a.Stride)));  $cu=($imul(((cs-c.Rect.Min.Y>>0)),c.YStride))+((d.X-c.Rect.Min.X>>0))>>0;  hcx=($imul((((cv=cs/2,(cv===cv&&cv!==1/0&&cv!==-1/0)?cv>>0:$throwRuntimeError("integer divide by zero"))-(cw=c.Rect.Min.Y/2,(cw===cw&&cw!==1/0&&cw!==-1/0)?cw>>0:$throwRuntimeError("integer divide by zero"))>>0)),c.CStride))+((d.X-c.Rect.Min.X>>0))>>0;  �cy=f;while(true){if(!(!((cy===g)))){break;}  4da=$imul((((cz=c.Y,((cu<0||cu>=cz.$length)?($throwRuntimeError("index out of range"),undefined):cz.$array[cz.$offset+cu]))>>0)),65793);  Zdc=(((db=c.Cb,((cx<0||cx>=db.$length)?($throwRuntimeError("index out of range"),undefined):db.$array[db.$offset+cx]))>>0))-128>>0;  }de=(((dd=c.Cr,((cx<0||cx>=dd.$length)?($throwRuntimeError("index out of range"),undefined):dd.$array[dd.$offset+cx]))>>0))-128>>0;  =df=da+($imul(91881,de))>>0;    if(((((df>>>0))&4278190080)>>>0)===0){  zdf=(df>>$min((16),31))>>0;    }else{  �df=~((df>>31>>0))>>0;    }  �dg=(da-($imul(22554,dc))>>0)-($imul(46802,de))>>0;    if(((((dg>>>0))&4278190080)>>>0)===0){  �dg=(dg>>$min((16),31))>>0;    }else{  dg=~((dg>>31>>0))>>0;    }  -dh=da+($imul(116130,dc))>>0;    if(((((dh>>>0))&4278190080)>>>0)===0){  kdh=(dh>>$min((16),31))>>0;    }else{  �dh=~((dh>>31>>0))>>0;    }  �di=$subslice(ct,cy,(cy+4>>0),ct.$length);  (0>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+0]=((df<<24>>>24)));  1(1>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+1]=((dg<<24>>>24)));  H(2>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+2]=((dh<<24>>>24)));  _(3>=di.$length?($throwRuntimeError("index out of range"),undefined):di.$array[di.$offset+3]=255);  �dj=cy+4>>0;dk=cu+1>>0;dl=cx+1>>0;cy=dj;cu=dk;cx=dl;}  �dm=cr+1>>0;dn=cs+1>>0;cr=dm;cs=dn;}    }else{    e=false;return e;    }    e=true;return e;    };$pkg.DrawYCbCr=B;	DrawYCbCr"image/internal/imageutil.DrawYCbCr �*{"Base":7843,"Files":[{"Name":"/usr/local/go/src/image/internal/imageutil/imageutil.go","Base":1,"Size":276,"Lines":[0,55,109,159,160,188,189,258],"Infos":null},{"Name":"/usr/local/go/src/image/internal/imageutil/impl.go","Base":278,"Size":7564,"Lines":[0,49,50,68,69,78,87,89,90,167,239,303,306,378,451,484,581,657,734,794,798,872,945,1015,1092,1100,1104,1203,1207,1281,1336,1337,1375,1413,1445,1477,1506,1507,1543,1597,1631,1698,1699,1766,1821,1822,1898,1936,1971,2006,2007,2055,2062,2098,2116,2133,2161,2186,2195,2202,2248,2305,2354,2419,2444,2479,2493,2506,2526,2532,2533,2570,2605,2619,2632,2652,2658,2659,2685,2720,2734,2747,2767,2773,2774,2858,2896,2919,2942,2965,2983,2988,2992,2993,3029,3083,3117,3184,3185,3249,3314,3338,3339,3415,3453,3488,3523,3524,3572,3579,3615,3633,3650,3678,3703,3712,3719,3765,3822,3871,3936,3961,3996,4010,4023,4043,4049,4050,4087,4122,4136,4149,4169,4175,4176,4202,4237,4251,4264,4284,4290,4291,4375,4413,4436,4459,4482,4500,4505,4509,4510,4546,4600,4634,4701,4702,4770,4835,4859,4860,4936,4974,5009,5044,5045,5093,5100,5136,5154,5171,5199,5224,5233,5240,5286,5343,5392,5457,5482,5517,5531,5544,5564,5570,5571,5608,5643,5657,5670,5690,5696,5697,5723,5758,5772,5785,5805,5811,5812,5896,5934,5957,5980,6003,6021,6026,6030,6031,6067,6121,6155,6222,6223,6294,6349,6350,6426,6464,6499,6534,6535,6583,6590,6626,6644,6661,6689,6714,6723,6730,6776,6833,6882,6947,6972,7007,7021,7034,7054,7060,7061,7098,7133,7147,7160,7180,7186,7187,7213,7248,7262,7275,7295,7301,7302,7386,7424,7447,7470,7493,7511,7516,7520,7521,7531,7546,7549,7562],"Infos":null}]}
   گ��)rD� < 