var RobionViz=(()=>{var Dd=Object.defineProperty;var Iy=Object.getOwnPropertyDescriptor;var Py=Object.getOwnPropertyNames;var Dy=Object.prototype.hasOwnProperty;var Ld=(r,t)=>{for(var e in t)Dd(r,e,{get:t[e],enumerable:!0})},Ly=(r,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Py(t))!Dy.call(r,i)&&i!==e&&Dd(r,i,{get:()=>t[i],enumerable:!(n=Iy(t,i))||n.enumerable});return r};var Fy=r=>Ly(Dd({},"__esModule",{value:!0}),r);var LE={};Ld(LE,{internals:()=>DE,run:()=>PE});var Nm={};Ld(Nm,{ACESFilmicToneMapping:()=>Lo,AddEquation:()=>_r,AddOperation:()=>$p,AdditiveAnimationBlendMode:()=>pf,AdditiveBlending:()=>Po,AgXToneMapping:()=>of,AlphaFormat:()=>ff,AlwaysCompare:()=>hm,AlwaysDepth:()=>Fa,AlwaysStencilFunc:()=>sm,AmbientLight:()=>Bl,AnimationAction:()=>Yl,AnimationClip:()=>xr,AnimationLoader:()=>dh,AnimationMixer:()=>wh,AnimationObjectGroup:()=>Th,AnimationUtils:()=>fh,ArcCurve:()=>sl,ArrayCamera:()=>Gl,ArrowHelper:()=>Xh,AttachedBindMode:()=>Zu,Audio:()=>Xl,AudioAnalyser:()=>Mh,AudioContext:()=>Ao,AudioListener:()=>bh,AudioLoader:()=>_h,AxesHelper:()=>qh,BackSide:()=>je,BasicDepthPacking:()=>im,BasicShadowMap:()=>X0,BatchedMesh:()=>Ja,BezierInterpolant:()=>Dl,Bone:()=>eo,BooleanKeyframeTrack:()=>Si,Box2:()=>Zl,Box3:()=>le,Box3Helper:()=>Gh,BoxGeometry:()=>dr,BoxHelper:()=>Hh,BufferAttribute:()=>zt,BufferGeometry:()=>It,BufferGeometryLoader:()=>Vl,ByteType:()=>ss,Cache:()=>si,Camera:()=>Qr,CameraHelper:()=>Vh,CanvasTexture:()=>ch,CapsuleGeometry:()=>el,CatmullRomCurve3:()=>ol,CineonToneMapping:()=>rf,CircleGeometry:()=>nl,ClampToEdgeWrapping:()=>Re,Clock:()=>Eo,Color:()=>ct,ColorKeyframeTrack:()=>yo,ColorManagement:()=>re,Compatibility:()=>Cx,CompressedArrayTexture:()=>ah,CompressedCubeTexture:()=>lh,CompressedTexture:()=>Yr,CompressedTextureLoader:()=>ph,ConeGeometry:()=>so,ConstantAlphaFactor:()=>qp,ConstantColorFactor:()=>Wp,Controls:()=>Zh,CubeCamera:()=>Hl,CubeDepthTexture:()=>tl,CubeReflectionMapping:()=>hi,CubeRefractionMapping:()=>Wi,CubeTexture:()=>fr,CubeTextureLoader:()=>mh,CubeUVReflectionMapping:()=>is,CubicBezierCurve:()=>oo,CubicBezierCurve3:()=>al,CubicInterpolant:()=>Il,CullFaceBack:()=>Jh,CullFaceFront:()=>Cp,CullFaceFrontBack:()=>W0,CullFaceNone:()=>Rp,Curve:()=>Dn,CurvePath:()=>cl,CustomBlending:()=>$l,CustomToneMapping:()=>sf,CylinderGeometry:()=>ro,Cylindrical:()=>Dh,Data3DTexture:()=>Wr,DataArrayTexture:()=>Bi,DataTexture:()=>ue,DataTextureLoader:()=>gh,DataUtils:()=>_n,DecrementStencilOp:()=>ox,DecrementWrapStencilOp:()=>lx,DefaultLoadingManager:()=>xm,DepthFormat:()=>oi,DepthStencilFormat:()=>Yi,DepthTexture:()=>ki,DetachedBindMode:()=>Jp,DirectionalLight:()=>ts,DirectionalLightHelper:()=>kh,DiscreteInterpolant:()=>Pl,DodecahedronGeometry:()=>il,DoubleSide:()=>fn,DstAlphaFactor:()=>zp,DstColorFactor:()=>Vp,DynamicCopyUsage:()=>Mx,DynamicDrawUsage:()=>xx,DynamicReadUsage:()=>yx,EdgesGeometry:()=>rl,EllipseCurve:()=>Zr,EqualCompare:()=>lm,EqualDepth:()=>Ua,EqualStencilFunc:()=>fx,EquirectangularReflectionMapping:()=>wi,EquirectangularRefractionMapping:()=>Fo,Euler:()=>Zn,EventDispatcher:()=>Pn,ExternalTexture:()=>io,ExtrudeGeometry:()=>dl,FileLoader:()=>Ln,Float16BufferAttribute:()=>nh,Float32BufferAttribute:()=>ht,FloatType:()=>Jt,Fog:()=>Ga,FogExp2:()=>Ha,FramebufferTexture:()=>oh,FrontSide:()=>Fn,Frustum:()=>bi,FrustumArray:()=>$a,GLBufferAttribute:()=>Ih,GLSL1:()=>wx,GLSL3:()=>mf,GreaterCompare:()=>cm,GreaterDepth:()=>Oa,GreaterEqualCompare:()=>Pc,GreaterEqualDepth:()=>Ba,GreaterEqualStencilFunc:()=>gx,GreaterStencilFunc:()=>px,GridHelper:()=>Oh,Group:()=>ri,HTMLTexture:()=>uh,HalfFloatType:()=>Be,HemisphereLight:()=>Fl,HemisphereLightHelper:()=>Bh,IcosahedronGeometry:()=>pl,ImageBitmapLoader:()=>vh,ImageLoader:()=>vr,ImageUtils:()=>Va,IncrementStencilOp:()=>sx,IncrementWrapStencilOp:()=>ax,InstancedBufferAttribute:()=>yi,InstancedBufferGeometry:()=>kl,InstancedInterleavedBuffer:()=>Ch,InstancedMesh:()=>Za,Int16BufferAttribute:()=>th,Int32BufferAttribute:()=>eh,Int8BufferAttribute:()=>Ku,IntType:()=>qi,InterleavedBuffer:()=>hr,InterleavedBufferAttribute:()=>zi,Interpolant:()=>Gi,InterpolateBezier:()=>$u,InterpolateDiscrete:()=>Gs,InterpolateLinear:()=>ka,InterpolateSmooth:()=>Ea,InterpolationSamplingMode:()=>Rx,InterpolationSamplingType:()=>Ex,InvertStencilOp:()=>cx,KeepStencilOp:()=>Ra,KeyframeTrack:()=>wn,LOD:()=>Xa,LatheGeometry:()=>ml,Layers:()=>Xr,LessCompare:()=>am,LessDepth:()=>Na,LessEqualCompare:()=>Ic,LessEqualDepth:()=>Hr,LessEqualStencilFunc:()=>dx,LessStencilFunc:()=>hx,Light:()=>ci,LightProbe:()=>Ol,LightShadow:()=>jr,Line:()=>li,Line3:()=>yn,LineBasicMaterial:()=>un,LineCurve:()=>ao,LineCurve3:()=>ll,LineDashedMaterial:()=>Cl,LineLoop:()=>Ka,LineSegments:()=>Vn,LinearFilter:()=>ee,LinearInterpolant:()=>_o,LinearMipMapLinearFilter:()=>cf,LinearMipMapNearestFilter:()=>$0,LinearMipmapLinearFilter:()=>fi,LinearMipmapNearestFilter:()=>No,LinearSRGBColorSpace:()=>Xs,LinearToneMapping:()=>ef,LinearTransfer:()=>qs,Loader:()=>on,LoaderUtils:()=>wo,LoadingManager:()=>So,LoopOnce:()=>Kp,LoopPingPong:()=>Qp,LoopRepeat:()=>jp,MOUSE:()=>H0,Material:()=>Ke,MaterialBlending:()=>q0,MaterialLoader:()=>zl,MathUtils:()=>Bx,Matrix2:()=>Lh,Matrix3:()=>Zt,Matrix4:()=>bt,MaxEquation:()=>Fp,Mesh:()=>ge,MeshBasicMaterial:()=>kn,MeshDepthMaterial:()=>xo,MeshDistanceMaterial:()=>vo,MeshLambertMaterial:()=>El,MeshMatcapMaterial:()=>Rl,MeshNormalMaterial:()=>Al,MeshPhongMaterial:()=>Tl,MeshPhysicalMaterial:()=>gr,MeshStandardMaterial:()=>go,MeshToonMaterial:()=>wl,MinEquation:()=>Lp,MirroredRepeatWrapping:()=>Hs,MixOperation:()=>Zp,MultiplyBlending:()=>jh,MultiplyOperation:()=>Do,NearestFilter:()=>Ht,NearestMipMapLinearFilter:()=>Z0,NearestMipMapNearestFilter:()=>Y0,NearestMipmapLinearFilter:()=>rs,NearestMipmapNearestFilter:()=>lf,NeutralToneMapping:()=>af,NeverCompare:()=>om,NeverDepth:()=>La,NeverStencilFunc:()=>ux,NoBlending:()=>He,NoColorSpace:()=>Jn,NoNormalPacking:()=>tx,NoToneMapping:()=>Nn,NormalAnimationBlendMode:()=>Cc,NormalBlending:()=>ui,NormalGAPacking:()=>nx,NormalRGPacking:()=>ex,NotEqualCompare:()=>um,NotEqualDepth:()=>za,NotEqualStencilFunc:()=>mx,NumberKeyframeTrack:()=>Jr,Object3D:()=>de,ObjectLoader:()=>xh,ObjectSpaceNormalMap:()=>rm,OctahedronGeometry:()=>fo,OneFactor:()=>Up,OneMinusConstantAlphaFactor:()=>Yp,OneMinusConstantColorFactor:()=>Xp,OneMinusDstAlphaFactor:()=>kp,OneMinusDstColorFactor:()=>Hp,OneMinusSrcAlphaFactor:()=>tf,OneMinusSrcColorFactor:()=>Op,OrthographicCamera:()=>Ti,PCFShadowMap:()=>Io,PCFSoftShadowMap:()=>Ip,PMREMGenerator:()=>Uc,Path:()=>pr,PerspectiveCamera:()=>Fe,Plane:()=>vn,PlaneGeometry:()=>Hi,PlaneHelper:()=>Wh,PointLight:()=>Ul,PointLightHelper:()=>Uh,Points:()=>ja,PointsMaterial:()=>no,PolarGridHelper:()=>zh,PolyhedronGeometry:()=>Vi,PositionalAudio:()=>Sh,PropertyBinding:()=>Te,PropertyMixer:()=>ql,QuadraticBezierCurve:()=>lo,QuadraticBezierCurve3:()=>co,Quaternion:()=>Ze,QuaternionKeyframeTrack:()=>Kr,QuaternionLinearInterpolant:()=>Ll,R11_EAC_Format:()=>oc,RED_GREEN_RGTC2_Format:()=>Ho,RED_RGTC1_Format:()=>Ac,REVISION:()=>Co,RG11_EAC_Format:()=>Vo,RGBADepthPacking:()=>K0,RGBAFormat:()=>$t,RGBAIntegerFormat:()=>$i,RGBA_ASTC_10x10_Format:()=>yc,RGBA_ASTC_10x5_Format:()=>xc,RGBA_ASTC_10x6_Format:()=>vc,RGBA_ASTC_10x8_Format:()=>_c,RGBA_ASTC_12x10_Format:()=>bc,RGBA_ASTC_12x12_Format:()=>Sc,RGBA_ASTC_4x4_Format:()=>cc,RGBA_ASTC_5x4_Format:()=>uc,RGBA_ASTC_5x5_Format:()=>hc,RGBA_ASTC_6x5_Format:()=>fc,RGBA_ASTC_6x6_Format:()=>dc,RGBA_ASTC_8x5_Format:()=>pc,RGBA_ASTC_8x6_Format:()=>mc,RGBA_ASTC_8x8_Format:()=>gc,RGBA_BPTC_Format:()=>Mc,RGBA_ETC2_EAC_Format:()=>sc,RGBA_PVRTC_2BPPV1_Format:()=>nc,RGBA_PVRTC_4BPPV1_Format:()=>ec,RGBA_S3TC_DXT1_Format:()=>Oo,RGBA_S3TC_DXT3_Format:()=>zo,RGBA_S3TC_DXT5_Format:()=>ko,RGBDepthPacking:()=>j0,RGBFormat:()=>df,RGBIntegerFormat:()=>J0,RGB_BPTC_SIGNED_Format:()=>Tc,RGB_BPTC_UNSIGNED_Format:()=>wc,RGB_ETC1_Format:()=>ic,RGB_ETC2_Format:()=>rc,RGB_PVRTC_2BPPV1_Format:()=>tc,RGB_PVRTC_4BPPV1_Format:()=>Ql,RGB_S3TC_DXT1_Format:()=>Bo,RGDepthPacking:()=>Q0,RGFormat:()=>Hn,RGIntegerFormat:()=>Zi,RawShaderMaterial:()=>mo,Ray:()=>ai,Raycaster:()=>Ph,RectAreaLight:()=>es,RedFormat:()=>$n,RedIntegerFormat:()=>yr,ReinhardToneMapping:()=>nf,RenderObjectRefreshType:()=>Ix,RenderTarget:()=>Js,RenderTarget3D:()=>Ah,RepeatWrapping:()=>Je,ReplaceStencilOp:()=>rx,ReverseSubtractEquation:()=>Dp,RingGeometry:()=>gl,SIGNED_R11_EAC_Format:()=>ac,SIGNED_RED_GREEN_RGTC2_Format:()=>Rc,SIGNED_RED_RGTC1_Format:()=>Ec,SIGNED_RG11_EAC_Format:()=>lc,SRGBColorSpace:()=>rn,SRGBTransfer:()=>ve,Scene:()=>Oi,ShaderChunk:()=>ne,ShaderLib:()=>di,ShaderMaterial:()=>ze,ShadowMaterial:()=>Ml,Shape:()=>mr,ShapeGeometry:()=>xl,ShapePath:()=>Yh,ShapeUtils:()=>Yn,ShortType:()=>Uo,Skeleton:()=>Ya,SkeletonHelper:()=>Nh,SkinnedMesh:()=>qa,Source:()=>$s,Sphere:()=>$e,SphereGeometry:()=>po,Spherical:()=>Ro,SphericalHarmonics3:()=>To,SplineCurve:()=>uo,SpotLight:()=>Nl,SpotLightHelper:()=>Fh,Sprite:()=>Wa,SpriteMaterial:()=>to,SrcAlphaFactor:()=>Qh,SrcAlphaSaturateFactor:()=>Gp,SrcColorFactor:()=>Bp,StaticCopyUsage:()=>Sx,StaticDrawUsage:()=>Dc,StaticReadUsage:()=>_x,StereoCamera:()=>yh,StreamCopyUsage:()=>Tx,StreamDrawUsage:()=>vx,StreamReadUsage:()=>bx,StringKeyframeTrack:()=>Mi,SubtractEquation:()=>Pp,SubtractiveBlending:()=>Kh,TOUCH:()=>G0,TangentSpaceNormalMap:()=>Ai,TetrahedronGeometry:()=>vl,Texture:()=>Ve,TextureLoader:()=>Mo,TextureSource:()=>qn,TextureUtils:()=>$h,Timer:()=>Wl,TimestampQuery:()=>Ax,TorusGeometry:()=>_l,TorusKnotGeometry:()=>yl,Triangle:()=>sn,TriangleFanDrawMode:()=>nm,TriangleStripDrawMode:()=>em,TrianglesDrawMode:()=>tm,TubeGeometry:()=>bl,UVMapping:()=>Jl,Uint16BufferAttribute:()=>js,Uint32BufferAttribute:()=>Qs,Uint8BufferAttribute:()=>ju,Uint8ClampedBufferAttribute:()=>Qu,Uniform:()=>Eh,UniformsGroup:()=>Rh,UniformsLib:()=>_t,UniformsUtils:()=>gm,UnsignedByteType:()=>Qe,UnsignedInt101111Type:()=>hf,UnsignedInt248Type:()=>os,UnsignedInt5999Type:()=>uf,UnsignedIntType:()=>tn,UnsignedShort4444Type:()=>Kl,UnsignedShort5551Type:()=>jl,UnsignedShortType:()=>Xi,VSMShadowMap:()=>ns,Vector2:()=>Y,Vector3:()=>C,Vector4:()=>se,VectorKeyframeTrack:()=>bo,VideoFrameTexture:()=>sh,VideoTexture:()=>Qa,WebGL3DRenderTarget:()=>Ju,WebGLArrayRenderTarget:()=>Ks,WebGLCoordinateSystem:()=>In,WebGLCubeRenderTarget:()=>Bc,WebGLRenderTarget:()=>Ue,WebGLRenderer:()=>Oc,WebGLUtils:()=>bv,WebGPUCoordinateSystem:()=>cr,WebXRController:()=>qr,WireframeGeometry:()=>Sl,WrapAroundEnding:()=>Ws,ZeroCurvatureEnding:()=>ar,ZeroFactor:()=>Np,ZeroSlopeEnding:()=>lr,ZeroStencilOp:()=>ix,createCanvasElement:()=>fm,error:()=>Ft,getConsoleFunction:()=>Lx,log:()=>Zs,setConsoleFunction:()=>Dx,warn:()=>dt,warnOnce:()=>_i});var Co="186",H0={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},G0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rp=0,Jh=1,Cp=2,W0=3,X0=0,Io=1,Ip=2,ns=3,Fn=0,je=1,fn=2,He=0,ui=1,Po=2,Kh=3,jh=4,$l=5,q0=6,_r=100,Pp=101,Dp=102,Lp=103,Fp=104,Np=200,Up=201,Bp=202,Op=203,Qh=204,tf=205,zp=206,kp=207,Vp=208,Hp=209,Gp=210,Wp=211,Xp=212,qp=213,Yp=214,La=0,Fa=1,Na=2,Hr=3,Ua=4,Ba=5,Oa=6,za=7,Do=0,Zp=1,$p=2,Nn=0,ef=1,nf=2,rf=3,Lo=4,sf=5,of=6,af=7,Zu="attached",Jp="detached",Jl=300,hi=301,Wi=302,wi=303,Fo=304,is=306,Je=1e3,Re=1001,Hs=1002,Ht=1003,lf=1004,Y0=1004,rs=1005,Z0=1005,ee=1006,No=1007,$0=1007,fi=1008,cf=1008,Qe=1009,ss=1010,Uo=1011,Xi=1012,qi=1013,tn=1014,Jt=1015,Be=1016,Kl=1017,jl=1018,os=1020,uf=35902,hf=35899,ff=1021,df=1022,$t=1023,oi=1026,Yi=1027,$n=1028,yr=1029,Hn=1030,Zi=1031,J0=1032,$i=1033,Bo=33776,Oo=33777,zo=33778,ko=33779,Ql=35840,tc=35841,ec=35842,nc=35843,ic=36196,rc=37492,sc=37496,oc=37488,ac=37489,Vo=37490,lc=37491,cc=37808,uc=37809,hc=37810,fc=37811,dc=37812,pc=37813,mc=37814,gc=37815,xc=37816,vc=37817,_c=37818,yc=37819,bc=37820,Sc=37821,Mc=36492,Tc=36494,wc=36495,Ac=36283,Ec=36284,Ho=36285,Rc=36286,Kp=2200,jp=2201,Qp=2202,Gs=2300,ka=2301,Ea=2302,$u=2303,ar=2400,lr=2401,Ws=2402,Cc=2500,pf=2501,tm=0,em=1,nm=2,im=3200,K0=3201,j0=3202,Q0=3203,Ai=0,rm=1,Jn="",rn="srgb",Xs="srgb-linear",qs="linear",ve="srgb",tx="",ex="rg",nx="ga",ix=0,Ra=7680,rx=7681,sx=7682,ox=7683,ax=34055,lx=34056,cx=5386,ux=512,hx=513,fx=514,dx=515,px=516,mx=517,gx=518,sm=519,om=512,am=513,lm=514,Ic=515,cm=516,um=517,Pc=518,hm=519,Dc=35044,xx=35048,vx=35040,_x=35045,yx=35049,bx=35041,Sx=35046,Mx=35050,Tx=35042,wx="100",mf="300 es",In=2e3,cr=2001,Ax={COMPUTE:"compute",RENDER:"render"},Ex={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Rx={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Cx={TEXTURE_COMPARE:"depthTextureCompare"},Ix={NONE:0,SHARED:1,FULL:2};function Ny(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}var Uy={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ks(r,t){return new Uy[r](t)}function Px(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ys(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fm(){let r=Ys("canvas");return r.style.display="block",r}var Pg={},ur=null;function Dx(r){ur=r}function Lx(){return ur}function Zs(...r){let t="THREE."+r.shift();ur?ur("log",t,...r):console.log(t,...r)}function Fx(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function dt(...r){r=Fx(r);let t="THREE."+r.shift();if(ur)ur("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Ft(...r){r=Fx(r);let t="THREE."+r.shift();if(ur)ur("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function _i(...r){let t=r.join(" ");t in Pg||(Pg[t]=!0,dt(...r))}function Nx(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Ux={[La]:Fa,[Na]:Oa,[Ua]:za,[Hr]:Ba,[Fa]:La,[Oa]:Na,[za]:Ua,[Ba]:Hr},Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dg=1234567,Vr=Math.PI/180,Gr=180/Math.PI;function zn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function qt(r,t,e){return Math.max(t,Math.min(e,r))}function dm(r,t){return(r%t+t)%t}function By(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Oy(r,t,e){return r!==t?(e-r)/(t-r):0}function Ca(r,t,e){return(1-e)*r+e*t}function zy(r,t,e,n){return Ca(r,t,1-Math.exp(-e*n))}function ky(r,t=1){return t-Math.abs(dm(r,t*2)-t)}function Vy(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Hy(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Gy(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Wy(r,t){return r+Math.random()*(t-r)}function Xy(r){return r*(.5-Math.random())}function qy(r){r!==void 0&&(Dg=r);let t=Dg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yy(r){return r*Vr}function Zy(r){return r*Gr}function $y(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Jy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ky(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jy(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),u=o((t-n)/2),d=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*h,a*c);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function te(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Bx={DEG2RAD:Vr,RAD2DEG:Gr,generateUUID:zn,clamp:qt,euclideanModulo:dm,mapLinear:By,inverseLerp:Oy,lerp:Ca,damp:zy,pingpong:ky,smoothstep:Vy,smootherstep:Hy,randInt:Gy,randFloat:Wy,randFloatSpread:Xy,seededRandom:qy,degToRad:Yy,radToDeg:Zy,isPowerOfTwo:$y,ceilPowerOfTwo:Jy,floorPowerOfTwo:Ky,setQuaternionFromProperEuler:jy,normalize:te,denormalize:Tn},Y=class r{static{r.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],m=s[o+2],x=s[o+3];if(f!==x||l!==u||c!==d||h!==m){let p=l*u+c*d+h*m+f*x;p<0&&(u=-u,d=-d,m=-m,x=-x,p=-p);let g=1-a;if(p<.9995){let _=Math.acos(p),y=Math.sin(_);g=Math.sin(g*_)/y,a=Math.sin(a*_)/y,l=l*g+u*a,c=c*g+d*a,h=h*g+m*a,f=f*g+x*a}else{l=l*g+u*a,c=c*g+d*a,h=h*g+m*a,f=f*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=_,c*=_,h*=_,f*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+h*f+l*d-c*u,t[e+1]=l*m+h*u+c*f-a*d,t[e+2]=c*m+h*d+a*u-l*f,t[e+3]=h*m-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{static{r.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fd.copy(this).projectOnVector(t),this.sub(Fd)}reflect(t){return this.sub(Fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fd=new C,Lg=new Ze,Zt=class r{static{r.prototype.isMatrix3=!0}constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],x=i[0],p=i[3],g=i[6],_=i[1],y=i[4],v=i[7],S=i[2],M=i[5],T=i[8];return s[0]=o*x+a*_+l*S,s[3]=o*p+a*y+l*M,s[6]=o*g+a*v+l*T,s[1]=c*x+h*_+f*S,s[4]=c*p+h*y+f*M,s[7]=c*g+h*v+f*T,s[2]=u*x+d*_+m*S,s[5]=u*p+d*y+m*M,s[8]=u*g+d*v+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,m=e*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=f*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nd.makeScale(t,e)),this}rotate(t){return _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nd.makeRotation(-t)),this}translate(t,e){return _i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nd=new Zt,Fg=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ng=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qy(){let r={enabled:!0,workingColorSpace:Xs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ve&&(i.r=Ui(i.r),i.g=Ui(i.g),i.b=Ui(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?qs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return _i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return _i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Xs]:{primaries:t,whitePoint:n,transfer:qs,toXYZ:Fg,fromXYZ:Ng,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Fg,fromXYZ:Ng,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),r}var re=Qy();function Ui(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ys,Va=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ys===void 0&&(ys=Ys("canvas")),ys.width=t.width,ys.height=t.height;let i=ys.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ys("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ui(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tb=0,qn=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ud(i[o].image)):s.push(Ud(i[o]))}else s=Ud(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ud(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Va.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}var $s=class extends qn{constructor(t=null){_i('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}},eb=0,Bd=new C,Ve=class r extends Pn{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Re,i=Re,s=ee,o=fi,a=$t,l=Qe,c=r.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=zn(),this.name="",this.source=new qn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){dt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Je:t.x=t.x-Math.floor(t.x);break;case Re:t.x=t.x<0?0:1;break;case Hs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Je:t.y=t.y-Math.floor(t.y);break;case Re:t.y=t.y<0?0:1;break;case Hs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Jl;Ve.DEFAULT_ANISOTROPY=1;var se=class r{static{r.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,S=(g+1)/2,M=(h+u)/4,T=(f+x)/4,b=(m+p)/4;return y>v&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=M/n,s=T/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=M/i,s=b/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=T/s,i=b/s),this.set(n,i,s,e),this}let _=Math.sqrt((p-m)*(p-m)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(f-x)/_,this.z=(u-h)/_,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Js=class extends Pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ee,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Ve(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ee,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new qn(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends Js{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Bi=class extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Ks=class extends Ue{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Bi(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},Wr=class extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Re,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Ju=class extends Ue{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Wr(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}},bt=class r{static{r.prototype.isMatrix4=!0}constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,m,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,m,x,p)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,m,x,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/bs.setFromMatrixColumn(t,0).length(),s=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=o*h,d=o*f,m=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,m=c*h,x=c*f;e[0]=u-x*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,m=a*h,x=a*f;e[0]=l*h,e[4]=m*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*f,e[8]=m*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+m,e[10]=u-x*f}else if(t.order==="XZY"){let u=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=o*h,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nb,t,ib)}lookAt(t,e,n){let i=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),er.crossVectors(n,Bn),er.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),er.crossVectors(n,Bn)),er.normalize(),su.crossVectors(Bn,er),i[0]=er.x,i[4]=su.x,i[8]=Bn.x,i[1]=er.y,i[5]=su.y,i[9]=Bn.y,i[2]=er.z,i[6]=su.z,i[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],_=n[3],y=n[7],v=n[11],S=n[15],M=i[0],T=i[4],b=i[8],w=i[12],E=i[1],P=i[5],I=i[9],F=i[13],L=i[2],N=i[6],z=i[10],W=i[14],Q=i[3],X=i[7],K=i[11],j=i[15];return s[0]=o*M+a*E+l*L+c*Q,s[4]=o*T+a*P+l*N+c*X,s[8]=o*b+a*I+l*z+c*K,s[12]=o*w+a*F+l*W+c*j,s[1]=h*M+f*E+u*L+d*Q,s[5]=h*T+f*P+u*N+d*X,s[9]=h*b+f*I+u*z+d*K,s[13]=h*w+f*F+u*W+d*j,s[2]=m*M+x*E+p*L+g*Q,s[6]=m*T+x*P+p*N+g*X,s[10]=m*b+x*I+p*z+g*K,s[14]=m*w+x*F+p*W+g*j,s[3]=_*M+y*E+v*L+S*Q,s[7]=_*T+y*P+v*N+S*X,s[11]=_*b+y*I+v*z+S*K,s[15]=_*w+y*F+v*W+S*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15],_=l*d-c*u,y=a*d-c*f,v=a*u-l*f,S=o*d-c*h,M=o*u-l*h,T=o*f-a*h;return e*(x*_-p*y+g*v)-n*(m*_-p*S+g*M)+i*(m*y-x*S+g*T)-s*(m*v-x*M+p*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],_=e*a-n*o,y=e*l-i*o,v=e*c-s*o,S=n*l-i*a,M=n*c-s*a,T=i*c-s*l,b=h*x-f*m,w=h*p-u*m,E=h*g-d*m,P=f*p-u*x,I=f*g-d*x,F=u*g-d*p,L=_*F-y*I+v*P+S*E-M*w+T*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/L;return t[0]=(a*F-l*I+c*P)*N,t[1]=(i*I-n*F-s*P)*N,t[2]=(x*T-p*M+g*S)*N,t[3]=(u*M-f*T-d*S)*N,t[4]=(l*E-o*F-c*w)*N,t[5]=(e*F-i*E+s*w)*N,t[6]=(p*v-m*T-g*y)*N,t[7]=(h*T-u*v+d*y)*N,t[8]=(o*I-a*E+c*b)*N,t[9]=(n*E-e*I-s*b)*N,t[10]=(m*M-x*v+g*_)*N,t[11]=(f*v-h*M-d*_)*N,t[12]=(a*w-o*P-l*b)*N,t[13]=(e*P-n*w+i*b)*N,t[14]=(x*y-m*S-p*_)*N,t[15]=(h*S-f*y+u*_)*N,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,m=s*f,x=o*h,p=o*f,g=a*f,_=l*c,y=l*h,v=l*f,S=n.x,M=n.y,T=n.z;return i[0]=(1-(x+g))*S,i[1]=(d+v)*S,i[2]=(m-y)*S,i[3]=0,i[4]=(d-v)*M,i[5]=(1-(u+g))*M,i[6]=(p+_)*M,i[7]=0,i[8]=(m+y)*T,i[9]=(p-_)*T,i[10]=(1-(u+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=bs.set(i[0],i[1],i[2]).length(),a=bs.set(i[4],i[5],i[6]).length(),l=bs.set(i[8],i[9],i[10]).length();s<0&&(o=-o),ti.copy(this);let c=1/o,h=1/a,f=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,e.setFromRotationMatrix(ti),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=In,l=!1){let c=this.elements,h=2*s/(e-t),f=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),m,x;if(l)m=s/(o-s),x=o*s/(o-s);else if(a===In)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===cr)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=In,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),m,x;if(l)m=1/(o-s),x=o/(o-s);else if(a===In)m=-2/(o-s),x=-(o+s)/(o-s);else if(a===cr)m=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},bs=new C,ti=new bt,nb=new C(0,0,0),ib=new C(1,1,1),er=new C,su=new C,Bn=new C,Ug=new bt,Bg=new Ze,Zn=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ug.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ug,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bg.setFromEuler(this),this.setFromQuaternion(Bg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rb=0,Og=new C,Ss=new Ze,Ci=new bt,ou=new C,da=new C,sb=new C,ob=new Ze,zg=new C(1,0,0),kg=new C(0,1,0),Vg=new C(0,0,1),Hg={type:"added"},ab={type:"removed"},Ms={type:"childadded",child:null},Od={type:"childremoved",child:null},de=class r extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new C,e=new Zn,n=new Ze,i=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bt},normalMatrix:{value:new Zt}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(zg,t)}rotateY(t){return this.rotateOnAxis(kg,t)}rotateZ(t){return this.rotateOnAxis(Vg,t)}translateOnAxis(t,e){return Og.copy(t).applyQuaternion(this.quaternion),this.position.add(Og.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zg,t)}translateY(t){return this.translateOnAxis(kg,t)}translateZ(t){return this.translateOnAxis(Vg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ou.copy(t):ou.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(da,ou,this.up):Ci.lookAt(ou,da,this.up),this.quaternion.setFromRotationMatrix(Ci),i&&(Ci.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ft("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hg),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ab),Od.child=t,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hg),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,t,sb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,ob,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};de.DEFAULT_UP=new C(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=class extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}},lb={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},au={h:0,s:0,l:0};function zd(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=re.workingColorSpace){if(t=dm(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=zd(o,s,t+1/3),this.g=zd(o,s,t),this.b=zd(o,s,t-1/3)}return re.colorSpaceToWorking(this,i),this}setStyle(t,e=rn){function n(s){s!==void 0&&parseFloat(s)<1&&dt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:dt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=rn){let n=Ox[t.toLowerCase()];return n!==void 0?this.setHex(n,e):dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=rn){return re.workingToColorSpace(gn.copy(this),t),Math.round(qt(gn.r*255,0,255))*65536+Math.round(qt(gn.g*255,0,255))*256+Math.round(qt(gn.b*255,0,255))}getHexString(t=rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(gn.copy(this),e);let n=gn.r,i=gn.g,s=gn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=rn){re.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,i=gn.b;return t!==rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(nr),this.setHSL(nr.h+t,nr.s+e,nr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nr),t.getHSL(au);let n=Ca(nr.h,au.h,e),i=Ca(nr.s,au.s,e),s=Ca(nr.l,au.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new ct;ct.NAMES=Ox;var Ha=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ga=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Oi=class extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ei=new C,Ii=new C,kd=new C,Pi=new C,Ts=new C,ws=new C,Gg=new C,Vd=new C,Hd=new C,Gd=new C,Wd=new se,Xd=new se,qd=new se,sn=class r{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ei.subVectors(t,e),i.cross(ei);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ei.subVectors(i,e),Ii.subVectors(n,e),kd.subVectors(t,e);let o=ei.dot(ei),a=ei.dot(Ii),l=ei.dot(kd),c=Ii.dot(Ii),h=Ii.dot(kd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Wd.setScalar(0),Xd.setScalar(0),qd.setScalar(0),Wd.fromBufferAttribute(t,e),Xd.fromBufferAttribute(t,n),qd.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Wd,s.x),o.addScaledVector(Xd,s.y),o.addScaledVector(qd,s.z),o}static isFrontFacing(t,e,n,i){return ei.subVectors(n,e),Ii.subVectors(t,e),ei.cross(Ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ei.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Ts.subVectors(i,n),ws.subVectors(s,n),Vd.subVectors(t,n);let l=Ts.dot(Vd),c=ws.dot(Vd);if(l<=0&&c<=0)return e.copy(n);Hd.subVectors(t,i);let h=Ts.dot(Hd),f=ws.dot(Hd);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ts,o);Gd.subVectors(t,s);let d=Ts.dot(Gd),m=ws.dot(Gd);if(m>=0&&d<=m)return e.copy(s);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ws,a);let p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return Gg.subVectors(s,i),a=(f-h)/(f-h+(d-m)),e.copy(i).addScaledVector(Gg,a);let g=1/(p+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(Ts,o).addScaledVector(ws,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},le=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lu.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lu.copy(n.boundingBox)),lu.applyMatrix4(t.matrixWorld),this.union(lu)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pa),cu.subVectors(this.max,pa),As.subVectors(t.a,pa),Es.subVectors(t.b,pa),Rs.subVectors(t.c,pa),ir.subVectors(Es,As),rr.subVectors(Rs,Es),Cr.subVectors(As,Rs);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Cr.z,Cr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Cr.z,0,-Cr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Cr.y,Cr.x,0];return!Yd(e,As,Es,Rs,cu)||(e=[1,0,0,0,1,0,0,0,1],!Yd(e,As,Es,Rs,cu))?!1:(uu.crossVectors(ir,rr),e=[uu.x,uu.y,uu.z],Yd(e,As,Es,Rs,cu))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Di=[new C,new C,new C,new C,new C,new C,new C,new C],ni=new C,lu=new le,As=new C,Es=new C,Rs=new C,ir=new C,rr=new C,Cr=new C,pa=new C,cu=new C,uu=new C,Ir=new C;function Yd(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ir.fromArray(r,s);let a=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),l=t.dot(Ir),c=e.dot(Ir),h=n.dot(Ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ni=cb();function cb(){let r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Cn(r){Math.abs(r)>65504&&dt("DataUtils.toHalfFloat(): Value out of range."),r=qt(r,-65504,65504),Ni.floatView[0]=r;let t=Ni.uint32View[0],e=t>>23&511;return Ni.baseTable[e]+((t&8388607)>>Ni.shiftTable[e])}function wa(r){let t=r>>10;return Ni.uint32View[0]=Ni.mantissaTable[Ni.offsetTable[t]+(r&1023)]+Ni.exponentTable[t],Ni.floatView[0]}var _n=class{static toHalfFloat(t){return Cn(t)}static fromHalfFloat(t){return wa(t)}},Ye=new C,hu=new Y,ub=0,zt=class extends Pn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ub++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hu.fromBufferAttribute(this,e),hu.applyMatrix3(t),this.setXY(e,hu.x,hu.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},Ku=class extends zt{constructor(t,e,n){super(new Int8Array(t),e,n)}},ju=class extends zt{constructor(t,e,n){super(new Uint8Array(t),e,n)}},Qu=class extends zt{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}},th=class extends zt{constructor(t,e,n){super(new Int16Array(t),e,n)}},js=class extends zt{constructor(t,e,n){super(new Uint16Array(t),e,n)}},eh=class extends zt{constructor(t,e,n){super(new Int32Array(t),e,n)}},Qs=class extends zt{constructor(t,e,n){super(new Uint32Array(t),e,n)}},nh=class extends zt{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=wa(this.array[t*this.itemSize]);return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=Cn(e),this}getY(t){let e=wa(this.array[t*this.itemSize+1]);return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=Cn(e),this}getZ(t){let e=wa(this.array[t*this.itemSize+2]);return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=Cn(e),this}getW(t){let e=wa(this.array[t*this.itemSize+3]);return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=Cn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.array[t+0]=Cn(e),this.array[t+1]=Cn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.array[t+0]=Cn(e),this.array[t+1]=Cn(n),this.array[t+2]=Cn(i),this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),s=te(s,this.array)),this.array[t+0]=Cn(e),this.array[t+1]=Cn(n),this.array[t+2]=Cn(i),this.array[t+3]=Cn(s),this}},ht=class extends zt{constructor(t,e,n){super(new Float32Array(t),e,n)}},hb=new le,ma=new C,Zd=new C,$e=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hb.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ma.subVectors(t,this.center);let e=ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ma.copy(t.center).add(Zd)),this.expandByPoint(ma.copy(t.center).sub(Zd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fb=0,Xn=new bt,$d=new de,Cs=new C,On=new le,ga=new le,cn=new C,It=class r extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ny(t)?Qs:js)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return $d.lookAt(t),$d.updateMatrix(),this.applyMatrix4($d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new le);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $e);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ga.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(On.min,ga.min),On.expandByPoint(cn),cn.addVectors(On.max,ga.max),On.expandByPoint(cn)):(On.expandByPoint(ga.min),On.expandByPoint(ga.max))}On.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)cn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(cn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(t,c),cn.add(Cs)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new C,l[b]=new C;let c=new C,h=new C,f=new C,u=new Y,d=new Y,m=new Y,x=new C,p=new C;function g(b,w,E){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,E),u.fromBufferAttribute(s,b),d.fromBufferAttribute(s,w),m.fromBufferAttribute(s,E),h.sub(c),f.sub(c),d.sub(u),m.sub(u);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(P),a[b].add(x),a[w].add(x),a[E].add(x),l[b].add(p),l[w].add(p),l[E].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let b=0,w=_.length;b<w;++b){let E=_[b],P=E.start,I=E.count;for(let F=P,L=P+I;F<L;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new C,v=new C,S=new C,M=new C;function T(b){S.fromBufferAttribute(i,b),M.copy(S);let w=a[b];y.copy(w),y.sub(S.multiplyScalar(S.dot(w))).normalize(),v.crossVectors(M,w);let P=v.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,P)}for(let b=0,w=_.length;b<w;++b){let E=_[b],P=E.start,I=E.count;for(let F=P,L=P+I;F<L;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new zt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,h=new C,f=new C;if(t)for(let u=0,d=t.count;u<d;u+=3){let m=t.getX(u+0),x=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)u[m++]=c[d++]}return new zt(u,h,f)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Mn=new C,zi=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),n=te(n,this.array),i=te(i,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Zs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new zt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jd=new C,db=new C,pb=new Zt,vn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Jd.subVectors(n,e).cross(db.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Jd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pb.getNormalMatrix(t),i=this.coplanarPoint(Jd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},mb=0,Ke=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=ui,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=tf,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){dt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Y().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Y().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},to=class extends Ke{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Is,xa=new C,Ps=new C,Ds=new C,Ls=new Y,va=new Y,zx=new bt,fu=new C,_a=new C,du=new C,Wg=new Y,Kd=new Y,Xg=new Y,Wa=class extends de{constructor(t=new to){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new It;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hr(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new zi(n,3,0,!1)),Is.setAttribute("uv",new zi(n,2,3,!1))}this.geometry=Is,this.material=t,this.center=new Y(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),zx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ds.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;pu(fu.set(-.5,-.5,0),Ds,o,Ps,i,s),pu(_a.set(.5,-.5,0),Ds,o,Ps,i,s),pu(du.set(.5,.5,0),Ds,o,Ps,i,s),Wg.set(0,0),Kd.set(1,0),Xg.set(1,1);let a=t.ray.intersectTriangle(fu,_a,du,!1,xa);if(a===null&&(pu(_a.set(-.5,.5,0),Ds,o,Ps,i,s),Kd.set(0,1),a=t.ray.intersectTriangle(fu,du,_a,!1,xa),a===null))return;let l=t.ray.origin.distanceTo(xa);l<t.near||l>t.far||e.push({distance:l,point:xa.clone(),uv:sn.getInterpolation(xa,fu,_a,du,Wg,Kd,Xg,new Y),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pu(r,t,e,n,i,s){Ls.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(va.x=s*Ls.x-i*Ls.y,va.y=i*Ls.x+s*Ls.y):va.copy(Ls),r.copy(t),r.x+=va.x,r.y+=va.y,r.applyMatrix4(zx)}var mu=new C,qg=new C,Xa=class extends de{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,i=e.length;n<i;n++){let s=e[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let i=this.levels,s;for(s=0;s<i.length&&!(e<i[s].distance);s++);return i.splice(s,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let s=e[n].distance;if(e[n].object.visible&&(s-=s*e[n].hysteresis),t<s)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){mu.setFromMatrixPosition(this.matrixWorld);let i=t.ray.origin.distanceTo(mu);this.getObjectForDistance(i).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){mu.setFromMatrixPosition(t.matrixWorld),qg.setFromMatrixPosition(this.matrixWorld);let n=mu.distanceTo(qg)/t.zoom;e[0].object.visible=!0;let i,s;for(i=1,s=e.length;i<s;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<s;i++)e[i].object.visible=!1}}toJSON(t){let e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];let n=this.levels;for(let i=0,s=n.length;i<s;i++){let o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}},Li=new C,jd=new C,gu=new C,xu=new C,ai=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){jd.copy(t).add(e).multiplyScalar(.5),gu.copy(e).sub(t).normalize(),xu.copy(this.origin).sub(jd);let s=t.distanceTo(e)*.5,o=-this.direction.dot(gu),a=xu.dot(this.direction),l=-xu.dot(gu),c=xu.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*l-a,u=o*a-l,m=s*h,f>=0)if(u>=-m)if(u<=m){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(jd).addScaledVector(gu,u),d}intersectSphere(t,e){if(t.radius<0)return null;Li.subVectors(t.center,this.origin);let n=Li.dot(this.direction),i=Li.dot(Li)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,m=e.x-o.x,x=e.y-o.y,p=e.z-o.z,g=n.x-o.x,_=n.y-o.y,y=n.z-o.z,v=Math.abs(l),S=Math.abs(c),M=Math.abs(h),T,b,w,E,P,I,F,L,N,z,W,Q;if(v>=S&&v>=M?(w=l,I=f,N=m,Q=g,l>=0?(T=c,b=h,E=u,P=d,F=x,L=p,z=_,W=y):(T=h,b=c,E=d,P=u,F=p,L=x,z=y,W=_)):S>=M?(w=c,I=u,N=x,Q=_,c>=0?(T=h,b=l,E=d,P=f,F=p,L=m,z=y,W=g):(T=l,b=h,E=f,P=d,F=m,L=p,z=g,W=y)):(w=h,I=d,N=p,Q=y,h>=0?(T=l,b=c,E=f,P=u,F=m,L=x,z=g,W=_):(T=c,b=l,E=u,P=f,F=x,L=m,z=_,W=g)),w===0)return null;let X=T/w,K=b/w,j=1/w,Rt=E-X*I,Tt=P-K*I,ce=F-X*N,Kt=L-K*N,fe=z-X*Q,$=W-K*Q,et=fe*Kt-$*ce,vt=Rt*$-Tt*fe,Gt=ce*Tt-Kt*Rt;if(i){if(et<0||vt<0||Gt<0)return null}else if((et<0||vt<0||Gt<0)&&(et>0||vt>0||Gt>0))return null;let At=et+vt+Gt;if(At===0)return null;let Vt=j*(et*I+vt*N+Gt*Q);return(At>0?Vt<0:Vt>0)?null:this.at(Vt/At,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kn=class extends Ke{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yg=new bt,Pr=new ai,vu=new $e,Zg=new C,_u=new C,yu=new C,bu=new C,Qd=new C,Su=new C,$g=new C,Mu=new C,ge=class extends de{constructor(t=new It,e=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Su.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Qd.fromBufferAttribute(f,t),o?Su.addScaledVector(Qd,h):Su.addScaledVector(Qd.sub(e),h))}e.add(Su)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vu.copy(n.boundingSphere),vu.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(vu.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(vu,Zg)===null||Pr.origin.distanceToSquared(Zg)>(t.far-t.near)**2))&&(Yg.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Yg),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,S=y;v<S;v+=3){let M=a.getX(v),T=a.getX(v+1),b=a.getX(v+2);i=Tu(this,g,t,n,c,h,f,M,T,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let _=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);i=Tu(this,o,t,n,c,h,f,_,y,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){let p=u[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,S=y;v<S;v+=3){let M=v,T=v+1,b=v+2;i=Tu(this,g,t,n,c,h,f,M,T,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){let _=p,y=p+1,v=p+2;i=Tu(this,o,t,n,c,h,f,_,y,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function gb(r,t,e,n,i,s,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Fn,a),l===null)return null;Mu.copy(a),Mu.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Mu);return c<e.near||c>e.far?null:{distance:c,point:Mu.clone(),object:r}}function Tu(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,_u),r.getVertexPosition(l,yu),r.getVertexPosition(c,bu);let h=gb(r,t,e,n,_u,yu,bu,$g);if(h){let f=new C;sn.getBarycoord($g,_u,yu,bu,f),i&&(h.uv=sn.getInterpolatedAttribute(i,a,l,c,f,new Y)),s&&(h.uv1=sn.getInterpolatedAttribute(s,a,l,c,f,new Y)),o&&(h.normal=sn.getInterpolatedAttribute(o,a,l,c,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};sn.getNormal(_u,yu,bu,u.normal),h.face=u,h.barycoord=f}return h}var ya=new se,Jg=new se,Kg=new se,xb=new se,jg=new bt,wu=new C,tp=new $e,Qg=new bt,ep=new ai,qa=class extends ge{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zu,this.bindMatrix=new bt,this.bindMatrixInverse=new bt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new le),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,wu),this.boundingBox.expandByPoint(wu)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $e),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,wu),this.boundingSphere.expandByPoint(wu)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tp.copy(this.boundingSphere),tp.applyMatrix4(i),t.ray.intersectsSphere(tp)!==!1&&(Qg.copy(i).invert(),ep.copy(t.ray).applyMatrix4(Qg),!(this.boundingBox!==null&&ep.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ep)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new se,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);let s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Zu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():dt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,i=this.geometry;Jg.fromBufferAttribute(i.attributes.skinIndex,t),Kg.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(ya.copy(e),e.set(0,0,0,0)):(ya.set(...e,1),e.set(0,0,0)),ya.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Kg.getComponent(s);if(o!==0){let a=Jg.getComponent(s);jg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(xb.copy(ya).applyMatrix4(jg),o)}}return e.isVector4&&(e.w=ya.w),e.applyMatrix4(this.bindMatrixInverse)}},eo=class extends de{constructor(){super(),this.isBone=!0,this.type="Bone"}},ue=class extends Ve{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Ht,h=Ht,f,u){super(null,o,a,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},t0=new bt,vb=new bt,Ya=class r{constructor(t=[],e=[]){this.uuid=zn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){dt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new bt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new bt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=t.length;s<o;s++){let a=t[s]?t[s].matrixWorld:vb;t0.multiplyMatrices(a,e[s]),t0.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new ue(e,t,t,$t,Jt);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){let s=t.bones[n],o=e[s];o===void 0&&(dt("Skeleton: No bone found with UUID:",s),o=new eo),this.bones.push(o),this.boneInverses.push(new bt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let o=e[i];t.bones.push(o.uuid);let a=n[i];t.boneInverses.push(a.toArray())}return t}},yi=class extends zt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fs=new bt,e0=new bt,Au=[],n0=new le,_b=new bt,ba=new ge,Sa=new $e,Za=class extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_b)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new le),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),n0.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(n0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $e),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),Sa.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Sa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sa.copy(this.boundingSphere),Sa.applyMatrix4(n),t.ray.intersectsSphere(Sa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Fs),e0.multiplyMatrices(n,Fs),ba.matrixWorld=e0,ba.raycast(t,Au);for(let o=0,a=Au.length;o<a;o++){let l=Au[o];l.instanceId=s,l.object=this,e.push(l)}Au.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ue(new Float32Array(i*this.count),i,this.count,$n,Jt));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Dr=new $e,yb=new Y(.5,.5),Eu=new C,bi=class{constructor(t=new vn,e=new vn,n=new vn,i=new vn,s=new vn,o=new vn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],m=s[8],x=s[9],p=s[10],g=s[11],_=s[12],y=s[13],v=s[14],S=s[15];if(i[0].setComponents(c-o,d-h,g-m,S-_).normalize(),i[1].setComponents(c+o,d+h,g+m,S+_).normalize(),i[2].setComponents(c+a,d+f,g+x,S+y).normalize(),i[3].setComponents(c-a,d-f,g-x,S-y).normalize(),n)i[4].setComponents(l,u,p,v).normalize(),i[5].setComponents(c-l,d-u,g-p,S-v).normalize();else if(i[4].setComponents(c-l,d-u,g-p,S-v).normalize(),e===In)i[5].setComponents(c+l,d+u,g+p,S+v).normalize();else if(e===cr)i[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);let e=yb.distanceTo(t.center);return Dr.radius=.7071067811865476+e,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Eu.x=i.normal.x>0?t.max.x:t.min.x,Eu.y=i.normal.y>0?t.max.y:t.min.y,Eu.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},i0=new bt,$a=class r{constructor(){this.coordinateSystem=In,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let s=e[i];i0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new bi),n[i].setFromProjectionMatrix(i0,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new bi),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new r().copy(this)}};function np(r,t){return r-t}function bb(r,t){return r.z-t.z}function Sb(r,t){return t.z-r.z}var gp=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){let s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let a=s[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}},Rn=new bt,Mb=new ct(1,1,1),Tb=new bi,wb=new $a,Ru=new le,Lr=new $e,Ma=new C,r0=new C,Ab=new C,ip=new gp,xn=new ge,Cu=[];function Eb(r,t,e=0){let n=t.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==t.array.constructor){let i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)t.setComponent(s+e,o,r.getComponent(s,o))}else t.array.set(r.array,e*n);t.needsUpdate=!0}function Fr(r,t){if(r.constructor!==t.constructor){let e=Math.min(r.length,t.length);for(let n=0;n<e;n++)t[n]=r[n]}else{let e=Math.min(r.length,t.length);t.set(new r.constructor(r.buffer,0,e))}}var Ja=class extends ge{constructor(t,e,n=e*2,i){super(new It,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new ue(e,t,t,$t,Jt);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new ue(e,t,t,yr,tn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new ue(e,t,t,$t,Jt);n.colorSpace=re.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in t.attributes){let o=t.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),f=new zt(h,l,c);e.setAttribute(s,f)}if(t.getIndex()!==null){let s=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new zt(s,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=t.getAttribute(n),s=e.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new le);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let s=e[n].geometryIndex;this.getMatrixAt(n,Rn),this.getBoundingBoxAt(s,Ru).applyMatrix4(Rn),t.union(Ru)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $e);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;let s=e[n].geometryIndex;this.getMatrixAt(n,Rn),this.getBoundingSphereAt(s,Lr).applyMatrix4(Rn),t.union(Lr)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(np),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));let s=this._matricesTexture;Rn.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;let o=this._colorsTexture;return o&&(Mb.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(np),l=this._availableGeometryIds.shift(),s[l]=i):(l=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let h in n.attributes){let f=e.getAttribute(h),u=n.getAttribute(h);Eb(f,u,l);let d=f.itemSize;for(let m=f.count,x=c;m<x;m++){let p=l+m;for(let g=0;g<d;g++)u.setComponent(p,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*d,c*d)}if(i){let h=a.indexStart,f=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let u=0;u<o.count;u++)s.setX(h+u,l+o.getX(u));for(let u=o.count,d=f;u<d;u++)s.setX(h+u,l);s.needsUpdate=!0,s.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=i[o],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==e){let{indexStart:h,vertexStart:f,reservedIndexCount:u}=c,d=s.index,m=d.array,x=t-f;for(let p=h;p<h+u;p++)m[p]=m[p]+x;d.array.copyWithin(e,h,h+u),d.addUpdateRange(e,u),d.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:h,reservedVertexCount:f}=c,u=s.attributes;for(let d in u){let m=u[d],{array:x,itemSize:p}=m;x.copyWithin(t*p,h*p,(h+f)*p),m.addUpdateRange(t*p,f*p),m.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){let s=new le,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),s.expandByPoint(Ma.fromBufferAttribute(a,h))}i.boundingBox=s}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){let s=new $e;this.getBoundingBoxAt(t,Ru),Ru.getCenter(s.center);let o=n.index,a=n.attributes.position,l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let f=c;o&&(f=o.getX(f)),Ma.fromBufferAttribute(a,f),l=Math.max(l,s.center.distanceToSquared(Ma))}s.radius=Math.sqrt(l),i.boundingSphere=s}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(np);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let i=new Int32Array(t),s=new Int32Array(t);Fr(this._multiDrawCounts,i),Fr(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=t;let o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Fr(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Fr(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Fr(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let s=this.geometry;s.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new It,this._initializeGeometry(s));let o=this.geometry;s.index&&Fr(s.index.array,o.index.array);for(let a in s.attributes)Fr(s.attributes[a].array,o.attributes[a].array)}raycast(t,e){let n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;xn.material=this.material,xn.geometry.index=o.index,xn.geometry.attributes=o.attributes,xn.geometry.boundingBox===null&&(xn.geometry.boundingBox=new le),xn.geometry.boundingSphere===null&&(xn.geometry.boundingSphere=new $e);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,h=i[c];xn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,xn.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,xn.geometry.boundingBox),this.getBoundingSphereAt(c,xn.geometry.boundingSphere),xn.raycast(t,Cu);for(let f=0,u=Cu.length;f<u;f++){let d=Cu[f];d.object=this,d.batchId=a,e.push(d)}Cu.length=0}xn.material=null,xn.geometry.index=null,xn.geometry.attributes={},xn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=1;s.wireframe&&(l=2,a=i.attributes.position.count>65535?4:2);let c=this._instanceInfo,h=this._multiDrawStarts,f=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,m=this._indirectTexture,x=m.image.data,p=n.isArrayCamera?wb:Tb;d&&(n.isArrayCamera?p.setFromArrayCamera(n):(Rn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),p.setFromProjectionMatrix(Rn,n.coordinateSystem,n.reversedDepth)));let g=0;if(this.sortObjects){Rn.copy(this.matrixWorld).invert(),Ma.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Rn),r0.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Rn);for(let v=0,S=c.length;v<S;v++)if(c[v].visible&&c[v].active){let M=c[v].geometryIndex;this.getMatrixAt(v,Rn),this.getBoundingSphereAt(M,Lr).applyMatrix4(Rn);let T=!1;if(d&&(T=!p.intersectsSphere(Lr)),!T){let b=u[M],w=Ab.subVectors(Lr.center,Ma).dot(r0);ip.push(b.start,b.count,w,v)}}let _=ip.list,y=this.customSort;y===null?_.sort(s.transparent?Sb:bb):y.call(this,_,n);for(let v=0,S=_.length;v<S;v++){let M=_[v];h[g]=M.start*a*l,f[g]=M.count*l,x[g]=M.index,g++}ip.reset()}else for(let _=0,y=c.length;_<y;_++)if(c[_].visible&&c[_].active){let v=c[_].geometryIndex,S=!1;if(d&&(this.getMatrixAt(_,Rn),this.getBoundingSphereAt(v,Lr).applyMatrix4(Rn),S=!p.intersectsSphere(Lr)),!S){let M=u[v];h[g]=M.start*a*l,f[g]=M.count*l,x[g]=_,g++}}m.needsUpdate=!0,this._multiDrawCount=g,this._multiDrawBytesPerElement=a,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,s,o){this.onBeforeRender(t,null,i,s,o)}},un=class extends Ke{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ih=new C,rh=new C,s0=new bt,Ta=new ai,Iu=new $e,rp=new C,o0=new C,li=class extends de{constructor(t=new It,e=new un){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)ih.fromBufferAttribute(e,i-1),rh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ih.distanceTo(rh);t.setAttribute("lineDistance",new ht(n,1))}else dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Iu.copy(n.boundingSphere),Iu.applyMatrix4(i),Iu.radius+=s,t.ray.intersectsSphere(Iu)===!1)return;s0.copy(i).invert(),Ta.copy(t.ray).applyMatrix4(s0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,p=m-1;x<p;x+=c){let g=h.getX(x),_=h.getX(x+1),y=Pu(this,t,Ta,l,g,_,x);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(m-1),p=h.getX(d),g=Pu(this,t,Ta,l,x,p,m-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,p=m-1;x<p;x+=c){let g=Pu(this,t,Ta,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=Pu(this,t,Ta,l,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Pu(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(ih.fromBufferAttribute(a,i),rh.fromBufferAttribute(a,s),e.distanceSqToSegment(ih,rh,rp,o0)>n)return;rp.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(rp);if(!(c<t.near||c>t.far))return{distance:c,point:o0.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var a0=new C,l0=new C,Vn=class extends li{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)a0.fromBufferAttribute(e,i),l0.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+a0.distanceTo(l0);t.setAttribute("lineDistance",new ht(n,1))}else dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ka=class extends li{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},no=class extends Ke{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},c0=new bt,xp=new ai,Du=new $e,Lu=new C,ja=class extends de{constructor(t=new It,e=new no){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Du.copy(n.boundingSphere),Du.applyMatrix4(i),Du.radius+=s,t.ray.intersectsSphere(Du)===!1)return;c0.copy(i).invert(),xp.copy(t.ray).applyMatrix4(c0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=u,x=d;m<x;m++){let p=c.getX(m);Lu.fromBufferAttribute(f,p),u0(Lu,p,l,i,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,x=d;m<x;m++)Lu.fromBufferAttribute(f,m),u0(Lu,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function u0(r,t,e,n,i,s,o){let a=xp.distanceSqToPoint(r);if(a<e){let l=new C;xp.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qa=class extends Ve{constructor(t,e,n,i,s=ee,o=ee,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function f(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},sh=class extends Qa{constructor(t,e,n,i,s,o,a,l){super({},t,e,n,i,s,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}},oh=class extends Ve{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Ht,this.minFilter=Ht,this.generateMipmaps=!1,this.needsUpdate=!0}},Yr=class extends Ve{constructor(t,e,n,i,s,o,a,l,c,h,f,u){super(null,o,a,l,c,h,i,s,f,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},ah=class extends Yr{constructor(t,e,n,i,s,o){super(t,e,n,s,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Re,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},lh=class extends Yr{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,hi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},fr=class extends Ve{constructor(t=[],e=hi,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ch=class extends Ve{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},uh=class extends Ve{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;let h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){let t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}},ki=class extends Ve{constructor(t,e,n=tn,i,s,o,a=Ht,l=Ht,c,h=oi,f=1){if(h!==oi&&h!==Yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},tl=class extends ki{constructor(t,e=tn,n=hi,i,s,o=Ht,a=Ht,l,c=oi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},io=class extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},dr=class r extends It{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2));function m(x,p,g,_,y,v,S,M,T,b,w){let E=v/T,P=S/b,I=v/2,F=S/2,L=M/2,N=T+1,z=b+1,W=0,Q=0,X=new C;for(let K=0;K<z;K++){let j=K*P-F;for(let Rt=0;Rt<N;Rt++){let Tt=Rt*E-I;X[x]=Tt*_,X[p]=j*y,X[g]=L,c.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[g]=M>0?1:-1,h.push(X.x,X.y,X.z),f.push(Rt/T),f.push(1-K/b),W+=1}}for(let K=0;K<b;K++)for(let j=0;j<T;j++){let Rt=u+j+N*K,Tt=u+j+N*(K+1),ce=u+(j+1)+N*(K+1),Kt=u+(j+1)+N*K;l.push(Rt,Tt,Kt),l.push(Tt,ce,Kt),Q+=6}a.addGroup(d,Q,w),d+=Q,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},el=class r extends It{constructor(t=1,e=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:s},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,m=n*2+s,x=i+1,p=new C,g=new C;for(let _=0;_<=m;_++){let y=0,v=0,S=0,M=0;if(_<=n){let w=_/n,E=w*Math.PI/2;v=-h-t*Math.cos(E),S=t*Math.sin(E),M=-t*Math.cos(E),y=w*f}else if(_<=n+s){let w=(_-n)/s;v=-h+w*e,S=t,M=0,y=f+w*u}else{let w=(_-n-s)/n,E=w*Math.PI/2;v=h+t*Math.sin(E),S=t*Math.cos(E),M=t*Math.sin(E),y=f+u+w*f}let T=Math.max(0,Math.min(1,y/d)),b=0;_===0?b=.5/i:_===m&&(b=-.5/i);for(let w=0;w<=i;w++){let E=w/i,P=E*Math.PI*2,I=Math.sin(P),F=Math.cos(P);g.x=-S*F,g.y=v,g.z=S*I,a.push(g.x,g.y,g.z),p.set(-S*F,M,S*I),p.normalize(),l.push(p.x,p.y,p.z),c.push(E+b,T)}if(_>0){let w=(_-1)*x;for(let E=0;E<i;E++){let P=w+E,I=w+E+1,F=_*x+E,L=_*x+E+1;o.push(P,I,F),o.push(I,L,F)}}}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},nl=class r extends It{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new C,h=new Y;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ro=class r extends It{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],u=[],d=[],m=0,x=[],p=n/2,g=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function _(){let v=new C,S=new C,M=0,T=(e-t)/n;for(let b=0;b<=s;b++){let w=[],E=b/s,P=E*(e-t)+t;for(let I=0;I<=i;I++){let F=I/i,L=F*l+a,N=Math.sin(L),z=Math.cos(L);S.x=P*N,S.y=-E*n+p,S.z=P*z,f.push(S.x,S.y,S.z),v.set(N,T,z).normalize(),u.push(v.x,v.y,v.z),d.push(F,1-E),w.push(m++)}x.push(w)}for(let b=0;b<i;b++)for(let w=0;w<s;w++){let E=x[w][b],P=x[w+1][b],I=x[w+1][b+1],F=x[w][b+1];(t>0||w!==0)&&(h.push(E,P,F),M+=3),(e>0||w!==s-1)&&(h.push(P,I,F),M+=3)}c.addGroup(g,M,0),g+=M}function y(v){let S=m,M=new Y,T=new C,b=0,w=v===!0?t:e,E=v===!0?1:-1;for(let I=1;I<=i;I++)f.push(0,p*E,0),u.push(0,E,0),d.push(.5,.5),m++;let P=m;for(let I=0;I<=i;I++){let L=I/i*l+a,N=Math.cos(L),z=Math.sin(L);T.x=w*z,T.y=p*E,T.z=w*N,f.push(T.x,T.y,T.z),u.push(0,E,0),M.x=N*.5+.5,M.y=z*.5*E+.5,d.push(M.x,M.y),m++}for(let I=0;I<i;I++){let F=S+I,L=P+I;v===!0?h.push(L,L+1,F):h.push(L+1,L,F),b+=3}c.addGroup(g,b,v===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},so=class r extends ro{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vi=class r extends It{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new C,v=new C,S=new C;for(let M=0;M<e.length;M+=3)d(e[M+0],y),d(e[M+1],v),d(e[M+2],S),l(y,v,S,_)}function l(_,y,v,S){let M=S+1,T=[];for(let b=0;b<=M;b++){T[b]=[];let w=_.clone().lerp(v,b/M),E=y.clone().lerp(v,b/M),P=M-b;for(let I=0;I<=P;I++)I===0&&b===M?T[b][I]=w:T[b][I]=w.clone().lerp(E,I/P)}for(let b=0;b<M;b++)for(let w=0;w<2*(M-b)-1;w++){let E=Math.floor(w/2);w%2===0?(u(T[b][E+1]),u(T[b+1][E]),u(T[b][E])):(u(T[b][E+1]),u(T[b+1][E+1]),u(T[b+1][E]))}}function c(_){let y=new C;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(_),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){let _=new C;for(let y=0;y<s.length;y+=3){_.x=s[y+0],_.y=s[y+1],_.z=s[y+2];let v=p(_)/2/Math.PI+.5,S=g(_)/Math.PI+.5;o.push(v,1-S)}m(),f()}function f(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],S=o[_+4],M=Math.max(y,v,S),T=Math.min(y,v,S);M>.9&&T<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function d(_,y){let v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function m(){let _=new C,y=new C,v=new C,S=new C,M=new Y,T=new Y,b=new Y;for(let w=0,E=0;w<s.length;w+=9,E+=6){_.set(s[w+0],s[w+1],s[w+2]),y.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),M.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),b.set(o[E+4],o[E+5]),S.copy(_).add(y).add(v).divideScalar(3);let P=p(S);x(M,E+0,_,P),x(T,E+2,y,P),x(b,E+4,v,P)}}function x(_,y,v,S){S<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=S/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}},il=class r extends Vi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Fu=new C,Nu=new C,sp=new C,Uu=new sn,rl=class extends It{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),s=Math.cos(Vr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),u={},d=[];for(let m=0;m<l;m+=3){o?(c[0]=o.getX(m),c[1]=o.getX(m+1),c[2]=o.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:x,b:p,c:g}=Uu;if(x.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Uu.getNormal(sp),f[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,f[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,f[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let _=0;_<3;_++){let y=(_+1)%3,v=f[_],S=f[y],M=Uu[h[_]],T=Uu[h[y]],b=`${v}_${S}`,w=`${S}_${v}`;w in u&&u[w]?(sp.dot(u[w].normal)<=s&&(d.push(M.x,M.y,M.z),d.push(T.x,T.y,T.z)),u[w]=null):b in u||(u[b]={index0:c[_],index1:c[y],normal:sp.clone()})}}for(let m in u)if(u[m]){let{index0:x,index1:p}=u[m];Fu.fromBufferAttribute(a,x),Nu.fromBufferAttribute(a,p),d.push(Fu.x,Fu.y,Fu.z),d.push(Nu.x,Nu.y,Nu.z)}this.setAttribute("position",new ht(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){dt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Y:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,i=[],s=[],o=[],a=new C,l=new bt;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(qt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(qt(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Zr=class extends Dn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Y){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sl=class extends Zr{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pm(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var h0=new C,f0=new C,op=new pm,ap=new pm,lp=new pm,ol=class extends Dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(f0.subVectors(i[0],i[1]).add(i[0]),c=f0);let f=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(h0.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=h0),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),op.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,m,x,p),ap.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,m,x,p),lp.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(op.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ap.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),lp.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(op.calc(l),ap.calc(l),lp.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function d0(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Rb(r,t){let e=1-r;return e*e*t}function Cb(r,t){return 2*(1-r)*r*t}function Ib(r,t){return r*r*t}function Ia(r,t,e,n){return Rb(r,t)+Cb(r,e)+Ib(r,n)}function Pb(r,t){let e=1-r;return e*e*e*t}function Db(r,t){let e=1-r;return 3*e*e*r*t}function Lb(r,t){return 3*(1-r)*r*r*t}function Fb(r,t){return r*r*r*t}function Pa(r,t,e,n,i){return Pb(r,t)+Db(r,e)+Lb(r,n)+Fb(r,i)}var oo=class extends Dn{constructor(t=new Y,e=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Y){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Pa(t,i.x,s.x,o.x,a.x),Pa(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},al=class extends Dn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Pa(t,i.x,s.x,o.x,a.x),Pa(t,i.y,s.y,o.y,a.y),Pa(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ao=class extends Dn{constructor(t=new Y,e=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Y){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends Dn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends Dn{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ia(t,i.x,s.x,o.x),Ia(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends Dn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ia(t,i.x,s.x,o.x),Ia(t,i.y,s.y,o.y),Ia(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Y){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(d0(a,l.x,c.x,h.x,f.x),d0(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Y().fromArray(i))}return this}},hh=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:ol,CubicBezierCurve:oo,CubicBezierCurve3:al,EllipseCurve:Zr,LineCurve:ao,LineCurve3:ll,QuadraticBezierCurve:lo,QuadraticBezierCurve3:co,SplineCurve:uo}),cl=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new hh[i.type]().fromJSON(i))}return this}},pr=class extends cl{constructor(t){super(),this.type="Path",this.currentPoint=new Y,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ao(this.currentPoint.clone(),new Y(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new lo(this.currentPoint.clone(),new Y(t,e),new Y(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new oo(this.currentPoint.clone(),new Y(t,e),new Y(n,i),new Y(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Zr(t,e,n,i,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mr=class extends pr{constructor(t){super(t),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new pr().fromJSON(i))}return this}};function Nb(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=kx(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=kb(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let h=a,f=l;for(let u=e;u<i;u+=e){let d=r[u],m=r[u+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>f&&(f=m)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return ul(s,o,e,a,l,c,0),o}function kx(r,t,e,n,i){let s;if(i===Kb(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=p0(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=p0(o/n|0,r[o],r[o+1],s);return s&&ho(s,s.next)&&(fl(s),s=s.next),s}function $r(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ho(e,e.next)||Oe(e.prev,e,e.next)===0)){if(fl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ul(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Xb(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Bb(r,n,i,s):Ub(r)){t.push(l.i,r.i,c.i),fl(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Ob($r(r),t),ul(r,t,e,n,i,s,2)):o===2&&zb(r,t,e,n,i,s):ul($r(r),t,e,n,i,s,1);break}}}function Ub(r){let t=r.prev,e=r,n=r.next;if(Oe(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),f=Math.min(a,l,c),u=Math.max(i,s,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Aa(i,a,s,l,o,c,m.x,m.y)&&Oe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Bb(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Oe(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,u=o.y,d=Math.min(a,l,c),m=Math.min(h,f,u),x=Math.max(a,l,c),p=Math.max(h,f,u),g=vp(d,m,t,e,n),_=vp(x,p,t,e,n),y=r.prevZ,v=r.nextZ;for(;y&&y.z>=g&&v&&v.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&Aa(a,h,l,f,c,u,y.x,y.y)&&Oe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&Aa(a,h,l,f,c,u,v.x,v.y)&&Oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&Aa(a,h,l,f,c,u,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==i&&v!==o&&Aa(a,h,l,f,c,u,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ob(r,t){let e=r;do{let n=e.prev,i=e.next.next;!ho(n,i)&&Hx(n,e,e.next,i)&&hl(n,i)&&hl(i,n)&&(t.push(n.i,e.i,i.i),fl(e),fl(e.next),e=r=i),e=e.next}while(e!==r);return $r(e)}function zb(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Zb(o,a)){let l=Gx(o,a);o=$r(o,o.next),l=$r(l,l.next),ul(o,t,e,n,i,s,0),ul(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function kb(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=kx(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Yb(c))}i.sort(Vb);for(let s=0;s<i.length;s++)e=Hb(i[s],e);return e}function Vb(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Hb(r,t){let e=Gb(r,t);if(!e)return t;let n=Gx(e,r);return $r(n,n.next),$r(e,e.next)}function Gb(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(ho(r,e))return e;do{if(ho(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vx(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);hl(e,r)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&Wb(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function Wb(r,t){return Oe(r.prev,r,t.prev)<0&&Oe(t.next,r,r.next)<0}function Xb(r,t,e,n){let i=r;do i.z===0&&(i.z=vp(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,qb(i)}function qb(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function vp(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Yb(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Vx(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Aa(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&Vx(r,t,e,n,i,s,o,a)}function Zb(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!$b(r,t)&&(hl(r,t)&&hl(t,r)&&Jb(r,t)&&(Oe(r.prev,r,t.prev)||Oe(r,t.prev,t))||ho(r,t)&&Oe(r.prev,r,r.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ho(r,t){return r.x===t.x&&r.y===t.y}function Hx(r,t,e,n){let i=Ou(Oe(r,t,e)),s=Ou(Oe(r,t,n)),o=Ou(Oe(e,n,r)),a=Ou(Oe(e,n,t));return!!(i!==s&&o!==a||i===0&&Bu(r,e,t)||s===0&&Bu(r,n,t)||o===0&&Bu(e,r,n)||a===0&&Bu(e,t,n))}function Bu(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Ou(r){return r>0?1:r<0?-1:0}function $b(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Hx(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function hl(r,t){return Oe(r.prev,r,r.next)<0?Oe(r,t,r.next)>=0&&Oe(r,r.prev,t)>=0:Oe(r,t,r.prev)<0||Oe(r,r.next,t)<0}function Jb(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Gx(r,t){let e=_p(r.i,r.x,r.y),n=_p(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function p0(r,t,e,n){let i=_p(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function fl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function _p(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kb(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var yp=class{static triangulate(t,e,n=2){return Nb(t,e,n)}},Yn=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];m0(t),g0(n,t);let o=t.length;e.forEach(m0);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,g0(n,e[l]);let a=yp.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function m0(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function g0(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var dl=class r extends It{constructor(t=new mr([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ht(i,3)),this.setAttribute("uv",new ht(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:jb,y,v=!1,S,M,T,b;if(g){y=g.getSpacedPoints(h),v=!0,u=!1;let it=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,it),M=new C,T=new C,b=new C}u||(p=0,d=0,m=0,x=0);let w=a.extractPoints(c),E=w.shape,P=w.holes;if(!Yn.isClockWise(E)){E=E.reverse();for(let it=0,st=P.length;it<st;it++){let ot=P[it];Yn.isClockWise(ot)&&(P[it]=ot.reverse())}}function F(it){let ot=10000000000000001e-36,at=it[0];for(let ft=1;ft<=it.length;ft++){let Wt=ft%it.length,kt=it[Wt],Yt=kt.x-at.x,jt=kt.y-at.y,U=Yt*Yt+jt*jt,be=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(at.x),Math.abs(at.y)),oe=ot*be*be;if(U<=oe){it.splice(Wt,1),ft--;continue}at=kt}}F(E),P.forEach(F);let L=P.length,N=E;for(let it=0;it<L;it++){let st=P[it];E=E.concat(st)}function z(it,st,ot){return st||Ft("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(st,ot)}let W=E.length;function Q(it,st,ot){let at,ft,Wt,kt=it.x-st.x,Yt=it.y-st.y,jt=ot.x-it.x,U=ot.y-it.y,be=kt*kt+Yt*Yt,oe=kt*U-Yt*jt;if(Math.abs(oe)>Number.EPSILON){let D=Math.sqrt(be),A=Math.sqrt(jt*jt+U*U),k=st.x-Yt/D,G=st.y+kt/D,Z=ot.x-U/A,lt=ot.y+jt/A,ut=((Z-k)*U-(lt-G)*jt)/(kt*U-Yt*jt);at=k+kt*ut-it.x,ft=G+Yt*ut-it.y;let J=at*at+ft*ft;if(J<=2)return new Y(at,ft);Wt=Math.sqrt(J/2)}else{let D=!1;kt>Number.EPSILON?jt>Number.EPSILON&&(D=!0):kt<-Number.EPSILON?jt<-Number.EPSILON&&(D=!0):Math.sign(Yt)===Math.sign(U)&&(D=!0),D?(at=-Yt,ft=kt,Wt=Math.sqrt(be)):(at=kt,ft=Yt,Wt=Math.sqrt(be/2))}return new Y(at/Wt,ft/Wt)}let X=[];for(let it=0,st=N.length,ot=st-1,at=it+1;it<st;it++,ot++,at++)ot===st&&(ot=0),at===st&&(at=0),X[it]=Q(N[it],N[ot],N[at]);let K=[],j,Rt=X.concat();for(let it=0,st=L;it<st;it++){let ot=P[it];j=[];for(let at=0,ft=ot.length,Wt=ft-1,kt=at+1;at<ft;at++,Wt++,kt++)Wt===ft&&(Wt=0),kt===ft&&(kt=0),j[at]=Q(ot[at],ot[Wt],ot[kt]);K.push(j),Rt=Rt.concat(j)}let Tt;if(p===0)Tt=Yn.triangulateShape(N,P);else{let it=[],st=[];for(let ot=0;ot<p;ot++){let at=ot/p,ft=d*Math.cos(at*Math.PI/2),Wt=m*Math.sin(at*Math.PI/2)+x;for(let kt=0,Yt=N.length;kt<Yt;kt++){let jt=z(N[kt],X[kt],Wt);vt(jt.x,jt.y,-ft),at===0&&it.push(jt)}for(let kt=0,Yt=L;kt<Yt;kt++){let jt=P[kt];j=K[kt];let U=[];for(let be=0,oe=jt.length;be<oe;be++){let D=z(jt[be],j[be],Wt);vt(D.x,D.y,-ft),at===0&&U.push(D)}at===0&&st.push(U)}}Tt=Yn.triangulateShape(it,st)}let ce=Tt.length,Kt=m+x;for(let it=0;it<W;it++){let st=u?z(E[it],Rt[it],Kt):E[it];v?(T.copy(S.normals[0]).multiplyScalar(st.x),M.copy(S.binormals[0]).multiplyScalar(st.y),b.copy(y[0]).add(T).add(M),vt(b.x,b.y,b.z)):vt(st.x,st.y,0)}for(let it=1;it<=h;it++)for(let st=0;st<W;st++){let ot=u?z(E[st],Rt[st],Kt):E[st];v?(T.copy(S.normals[it]).multiplyScalar(ot.x),M.copy(S.binormals[it]).multiplyScalar(ot.y),b.copy(y[it]).add(T).add(M),vt(b.x,b.y,b.z)):vt(ot.x,ot.y,f/h*it)}for(let it=p-1;it>=0;it--){let st=it/p,ot=d*Math.cos(st*Math.PI/2),at=m*Math.sin(st*Math.PI/2)+x;for(let ft=0,Wt=N.length;ft<Wt;ft++){let kt=z(N[ft],X[ft],at);vt(kt.x,kt.y,f+ot)}for(let ft=0,Wt=P.length;ft<Wt;ft++){let kt=P[ft];j=K[ft];for(let Yt=0,jt=kt.length;Yt<jt;Yt++){let U=z(kt[Yt],j[Yt],at);v?vt(U.x,U.y+y[h-1].y,y[h-1].x+ot):vt(U.x,U.y,f+ot)}}}fe(),$();function fe(){let it=i.length/3;if(u){let st=0,ot=W*st;for(let at=0;at<ce;at++){let ft=Tt[at];Gt(ft[2]+ot,ft[1]+ot,ft[0]+ot)}st=h+p*2,ot=W*st;for(let at=0;at<ce;at++){let ft=Tt[at];Gt(ft[0]+ot,ft[1]+ot,ft[2]+ot)}}else{for(let st=0;st<ce;st++){let ot=Tt[st];Gt(ot[2],ot[1],ot[0])}for(let st=0;st<ce;st++){let ot=Tt[st];Gt(ot[0]+W*h,ot[1]+W*h,ot[2]+W*h)}}n.addGroup(it,i.length/3-it,0)}function $(){let it=i.length/3,st=0;et(N,st),st+=N.length;for(let ot=0,at=P.length;ot<at;ot++){let ft=P[ot];et(ft,st),st+=ft.length}n.addGroup(it,i.length/3-it,1)}function et(it,st){let ot=it.length;for(;--ot>=0;){let at=ot,ft=ot-1;ft<0&&(ft=it.length-1);for(let Wt=0,kt=h+p*2;Wt<kt;Wt++){let Yt=W*Wt,jt=W*(Wt+1),U=st+at+Yt,be=st+ft+Yt,oe=st+ft+jt,D=st+at+jt;At(U,be,oe,D)}}}function vt(it,st,ot){l.push(it),l.push(st),l.push(ot)}function Gt(it,st,ot){Vt(it),Vt(st),Vt(ot);let at=i.length/3,ft=_.generateTopUV(n,i,at-3,at-2,at-1);Ae(ft[0]),Ae(ft[1]),Ae(ft[2])}function At(it,st,ot,at){Vt(it),Vt(st),Vt(at),Vt(st),Vt(ot),Vt(at);let ft=i.length/3,Wt=_.generateSideWallUV(n,i,ft-6,ft-3,ft-2,ft-1);Ae(Wt[0]),Ae(Wt[1]),Ae(Wt[3]),Ae(Wt[1]),Ae(Wt[2]),Ae(Wt[3])}function Vt(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function Ae(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Qb(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new hh[i.type]().fromJSON(i)),new r(n,t.options)}},jb={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Y(s,o),new Y(a,l),new Y(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],m=t[i*3+2],x=t[s*3],p=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Y(o,1-l),new Y(c,1-f),new Y(u,1-m),new Y(x,1-g)]:[new Y(a,1-l),new Y(h,1-f),new Y(d,1-m),new Y(p,1-g)]}};function Qb(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var pl=class r extends Vi{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},ml=class r extends It{constructor(t=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=qt(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,f=new C,u=new Y,d=new C,m=new C,x=new C,p=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:p=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,d.x=g*1,d.y=-p,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let _=0;_<=e;_++){let y=n+_*h*i,v=Math.sin(y),S=Math.cos(y);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*v,f.y=t[M].y,f.z=t[M].x*S,o.push(f.x,f.y,f.z),u.x=_/e,u.y=M/(t.length-1),a.push(u.x,u.y);let T=l[3*M+0]*v,b=l[3*M+1],w=l[3*M+0]*S;c.push(T,b,w)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let v=y+_*t.length,S=v,M=v+t.length,T=v+t.length+1,b=v+1;s.push(S,M,b),s.push(T,b,M)}this.setIndex(s),this.setAttribute("position",new ht(o,3)),this.setAttribute("uv",new ht(a,2)),this.setAttribute("normal",new ht(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},fo=class r extends Vi{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Hi=class r extends It{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){let _=g*u-o;for(let y=0;y<c;y++){let v=y*f-s;m.push(v,-_,0),x.push(0,0,1),p.push(y/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let y=_+c*g,v=_+c*(g+1),S=_+1+c*(g+1),M=_+1+c*g;d.push(y,v,M),d.push(v,S,M)}this.setIndex(d),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},gl=class r extends It{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],f=t,u=(e-t)/i,d=new C,m=new Y;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){let g=s+p/n*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}f+=u}for(let x=0;x<i;x++){let p=x*(n+1);for(let g=0;g<n;g++){let _=g+p,y=_,v=_+n+1,S=_+n+2,M=_+1;a.push(y,v,M),a.push(v,S,M)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},xl=class r extends It{constructor(t=new mr([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ht(i,3)),this.setAttribute("normal",new ht(s,3)),this.setAttribute("uv",new ht(o,2));function c(h){let f=i.length/3,u=h.extractPoints(e),d=u.shape,m=u.holes;Yn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){let _=m[p];Yn.isClockWise(_)===!0&&(m[p]=_.reverse())}let x=Yn.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){let _=m[p];d=d.concat(_)}for(let p=0,g=d.length;p<g;p++){let _=d[p];i.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let p=0,g=x.length;p<g;p++){let _=x[p],y=_[0]+f,v=_[1]+f,S=_[2]+f;n.push(y,v,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return tS(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let o=e[t.shapes[i]];n.push(o)}return new r(n,t.curveSegments)}};function tS(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){let i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}var po=class r extends It{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new C,u=new C,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){let _=[],y=g/n,v=o+y*a,S=t*Math.cos(v),M=Math.sqrt(t*t-S*S),T=0;g===0&&o===0?T=.5/e:g===n&&l===Math.PI&&(T=-.5/e);for(let b=0;b<=e;b++){let w=b/e,E=i+w*s;f.x=-M*Math.cos(E),f.y=S,f.z=M*Math.sin(E),m.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),p.push(w+T,1-y),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let y=h[g][_+1],v=h[g][_],S=h[g+1][_],M=h[g+1][_+1];(g!==0||o>0)&&d.push(y,v,M),(g!==n-1||l<Math.PI)&&d.push(v,S,M)}this.setIndex(d),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},vl=class r extends Vi{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},_l=class r extends It{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],u=new C,d=new C,m=new C;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let g=0;g<=i;g++){let _=g/i*s;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(g/i),f.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=i;p++){let g=(i+1)*x+p-1,_=(i+1)*(x-1)+p-1,y=(i+1)*(x-1)+p,v=(i+1)*x+p;l.push(g,_,v),l.push(_,y,v)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},yl=class r extends It{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],f=new C,u=new C,d=new C,m=new C,x=new C,p=new C,g=new C;for(let y=0;y<=n;++y){let v=y/n*s*Math.PI*2;_(v,s,o,t,d),_(v+.01,s,o,t,m),p.subVectors(m,d),g.addVectors(m,d),x.crossVectors(p,g),g.crossVectors(x,p),x.normalize(),g.normalize();for(let S=0;S<=i;++S){let M=S/i*Math.PI*2,T=-e*Math.cos(M),b=e*Math.sin(M);f.x=d.x+(T*g.x+b*x.x),f.y=d.y+(T*g.y+b*x.y),f.z=d.z+(T*g.z+b*x.z),l.push(f.x,f.y,f.z),u.subVectors(f,d).normalize(),c.push(u.x,u.y,u.z),h.push(y/n),h.push(S/i)}}for(let y=1;y<=n;y++)for(let v=1;v<=i;v++){let S=(i+1)*(y-1)+(v-1),M=(i+1)*y+(v-1),T=(i+1)*y+v,b=(i+1)*(y-1)+v;a.push(S,M,b),a.push(M,T,b)}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2));function _(y,v,S,M,T){let b=Math.cos(y),w=Math.sin(y),E=S/v*y,P=Math.cos(E);T.x=M*(2+P)*.5*b,T.y=M*(2+P)*w*.5,T.z=M*Math.sin(E)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},bl=class r extends It{constructor(t=new co(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new Y,h=new C,f=[],u=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(d,2));function x(){for(let y=0;y<e;y++)p(y);p(s===!1?e:0),_(),g()}function p(y){h=t.getPointAt(y/e,h);let v=o.normals[y],S=o.binormals[y];for(let M=0;M<=i;M++){let T=M/i*Math.PI*2,b=Math.sin(T),w=-Math.cos(T);l.x=w*v.x+b*S.x,l.y=w*v.y+b*S.y,l.z=w*v.z+b*S.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function g(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){let S=(i+1)*(y-1)+(v-1),M=(i+1)*y+(v-1),T=(i+1)*y+v,b=(i+1)*(y-1)+v;m.push(S,M,b),m.push(M,T,b)}}function _(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)c.x=y/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new hh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Sl=class extends It{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new C,s=new C;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let f=l[c],u=f.start,d=f.count;for(let m=u,x=u+d;m<x;m+=3)for(let p=0;p<3;p++){let g=a.getX(m+p),_=a.getX(m+(p+1)%3);i.fromBufferAttribute(o,g),s.fromBufferAttribute(o,_),x0(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,f=3*a+(c+1)%3;i.fromBufferAttribute(o,h),s.fromBufferAttribute(o,f),x0(i,s,n)===!0&&(e.push(i.x,i.y,i.z),e.push(s.x,s.y,s.z))}}this.setAttribute("position",new ht(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function x0(r,t,e){let n=`${r.x},${r.y},${r.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${r.x},${r.y},${r.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var v0=Object.freeze({__proto__:null,BoxGeometry:dr,CapsuleGeometry:el,CircleGeometry:nl,ConeGeometry:so,CylinderGeometry:ro,DodecahedronGeometry:il,EdgesGeometry:rl,ExtrudeGeometry:dl,IcosahedronGeometry:pl,LatheGeometry:ml,OctahedronGeometry:fo,PlaneGeometry:Hi,PolyhedronGeometry:Vi,RingGeometry:gl,ShapeGeometry:xl,SphereGeometry:po,TetrahedronGeometry:vl,TorusGeometry:_l,TorusKnotGeometry:yl,TubeGeometry:bl,WireframeGeometry:Sl}),Ml=class extends Ke{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ct(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function as(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(_0(i))i.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(_0(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function bn(r){let t={};for(let e=0;e<r.length;e++){let n=as(r[e]);for(let i in n)t[i]=n[i]}return t}function _0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function eS(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function mm(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var gm={clone:as,merge:bn},nS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ze=class extends Ke{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nS,this.fragmentShader=iS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=eS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(i.value);break;case"v2":this.uniforms[n].value=new Y().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new se().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},mo=class extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},go=class extends Ke{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},gr=class extends go{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Tl=class extends Ke{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ct(16777215),this.specular=new ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Do,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wl=class extends Ke{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Al=class extends Ke{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},El=class extends Ke{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Do,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xo=class extends Ke{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vo=class extends Ke{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Rl=class extends Ke{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ct(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ai,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}},Cl=class extends un{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function ii(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Da(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Wx(r){function t(i,s){return r[i]-r[s]}let e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function bp(r,t,e){let n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){let a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i}function Xx(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)}function rS(r,t,e,n,i=30){let s=r.clone();s.name=t;let o=[];for(let l=0;l<s.tracks.length;++l){let c=s.tracks[l],h=c.getValueSize(),f=[],u=[];for(let d=0;d<c.times.length;++d){let m=c.times[d]*i;if(!(m<e||m>=n)){f.push(c.times[d]);for(let x=0;x<h;++x)u.push(c.values[d*h+x])}}f.length!==0&&(c.times=ii(f,c.times.constructor),c.values=ii(u,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s}function sS(r,t=0,e=r,n=30){n<=0&&(n=30);let i=e.tracks.length,s=t/n;for(let o=0;o<i;++o){let a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;let c=r.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,f=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);let u=0,d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let m=a.times.length-1,x;if(s<=a.times[0]){let g=h,_=f-h;x=a.values.slice(g,_)}else if(s>=a.times[m]){let g=m*f+h,_=g+f-h;x=a.values.slice(g,_)}else{let g=a.createInterpolant(),_=h,y=f-h;g.evaluate(s),x=g.resultBuffer.slice(_,y)}l==="quaternion"&&new Ze().fromArray(x).normalize().conjugate().toArray(x);let p=c.times.length;for(let g=0;g<p;++g){let _=g*d+u;if(l==="quaternion")Ze.multiplyQuaternionsFlat(c.values,_,x,0,c.values,_);else{let y=d-u*2;for(let v=0;v<y;++v)c.values[_+v]-=x[v]}}}return r.blendMode=pf,r}var fh=class{static convertArray(t,e){return ii(t,e)}static isTypedArray(t){return Px(t)}static hasTangents(t){return Da(t)}static getKeyframeOrder(t){return Wx(t)}static sortedArray(t,e,n){return bp(t,e,n)}static flattenJSON(t,e,n,i){Xx(t,e,n,i)}static subclip(t,e,n,i,s=30){return rS(t,e,n,i,s)}static makeClipAdditive(t,e=0,n=t,i=30){return sS(t,e,n,i)}},Gi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Il=class extends Gi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ar,endingEnd:ar}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lr:s=t,a=2*e-n;break;case Ws:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lr:o=t,l=2*n-e;break;case Ws:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),x=m*m,p=x*m,g=-u*p+2*u*x-u*m,_=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*m+1,y=(-1-d)*p+(1.5+d)*x+.5*m,v=d*p-d*x;for(let S=0;S!==a;++S)s[S]=g*o[h+S]+_*o[c+S]+y*o[l+S]+v*o[f+S];return s}},_o=class extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},Pl=class extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Dl=class extends Gi{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-e)/(i-e),x=1-m;for(let p=0;p!==a;++p)s[p]=o[c+p]*x+o[l+p]*m;return s}let u=a*2,d=t-1;for(let m=0;m!==a;++m){let x=o[c+m],p=o[l+m],g=d*u+m*2,_=f[g],y=f[g+1],v=t*u+m*2,S=h[v],M=h[v+1],T=aS(n,e,_,S,i);s[m]=qx(T,x,y,M,p)}return s}};function qx(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function oS(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function aS(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=qx(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=oS(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var wn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ii(e,this.TimeBufferType),this.values=ii(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ii(t.times,Array),values:ii(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Da(t.settings)&&(n.settings={inTangents:ii(t.settings.inTangents,Array),outTangents:ii(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Il(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Dl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Gs:e=this.InterpolantFactoryMethodDiscrete;break;case ka:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case $u:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return $u}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Da(this.settings)&&(y0(this.settings.inTangents,t),y0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ft("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ft("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ft("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ft("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Px(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ft("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let x=e[f+m];if(x!==e[u+m]||x!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Da(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function y0(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=ka;var Si=class extends wn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Gs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends wn{constructor(t,e,n,i){super(t,e,n,i)}};yo.prototype.ValueTypeName="color";var Jr=class extends wn{constructor(t,e,n,i){super(t,e,n,i)}};Jr.prototype.ValueTypeName="number";var Ll=class extends Gi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ze.slerpFlat(s,0,o,c-a,o,c,l);return s}},Kr=class extends wn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends wn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Gs;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends wn{constructor(t,e,n,i){super(t,e,n,i)}};bo.prototype.ValueTypeName="vector";var xr=class{constructor(t="",e=-1,n=[],i=Cc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(cS(n[o]).scale(i));let s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s.userData=JSON.parse(t.userData||"{}"),s}static toJSON(t){let e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let s=0,o=n.length;s!==o;++s)e.push(wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){let s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let h=Wx(l);l=bp(l,1,h),c=bp(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Jr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(s);if(h&&h.length>1){let f=h[1],u=i[f];u||(i[f]=u=[]),u.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,i=t.length;n!==i;++n){let s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function lS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Jr;case"vector":case"vector2":case"vector3":case"vector4":return bo;case"color":return yo;case"quaternion":return Kr;case"bool":case"boolean":return Si;case"string":return Mi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function cS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=lS(r.type);if(r.times===void 0){let n=[],i=[];Xx(r.keys,n,i,"value"),r.times=n,r.values=i}let e;return t.parse!==void 0?e=t.parse(r):e=new t(r.name,r.times,r.values,r.interpolation),Da(r.settings)&&(e.settings={inTangents:ii(r.settings.inTangents,Float32Array),outTangents:ii(r.settings.outTangents,Float32Array)}),e}var si={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(b0(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!b0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function b0(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var So=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xm=new So,on=class{constructor(t){this.manager=t!==void 0?t:xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};on.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi={},Sp=class extends Error{constructor(t,e){super(t),this.response=e}},Ln=class extends on{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=si.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(Fi[t]!==void 0){Fi[t].push({onLoad:e,onProgress:n,onError:i});return}Fi[t]=[],Fi[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&dt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Fi[t],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,m=d!==0,x=0,p=new ReadableStream({start(g){_();function _(){f.read().then(({done:y,value:v})=>{if(y)g.close();else{x+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let M=0,T=h.length;M<T;M++){let b=h[M];b.onProgress&&b.onProgress(S)}g.enqueue(v),_()}},y=>{g.error(y)})}}});return new Response(p)}else throw new Sp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{si.add(`file:${t}`,c);let h=Fi[t];delete Fi[t];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Fi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Fi[t];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},dh=class extends on{constructor(t){super(t)}load(t,e,n,i){let s=this,o=new Ln(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(l){i?i(l):Ft(l),s.manager.itemError(t)}},n,i)}parse(t){let e=[];for(let n=0;n<t.length;n++){let i=xr.parse(t[n]);e.push(i)}return e}},ph=class extends on{constructor(t){super(t)}load(t,e,n,i){let s=this,o=[],a=new Yr,l=new Ln(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function h(f){l.load(t[f],function(u){let d=s.parse(u,!0);o[f]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(a.minFilter=ee),a.image=o,a.format=d.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let f=0,u=t.length;f<u;++f)h(f);else l.load(t,function(f){let u=s.parse(f,!0);if(u.isCubemap){let d=u.mipmaps.length/u.mipmapCount;for(let m=0;m<d;m++){o[m]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)o[m].mipmaps.push(u.mipmaps[m*u.mipmapCount+x]),o[m].format=u.format,o[m].width=u.width,o[m].height=u.height}a.image=o}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=ee),a.format=u.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}},Ns=new WeakMap,vr=class extends on{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=si.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let f=Ns.get(o);f===void 0&&(f=[],Ns.set(o,f)),f.push({onLoad:e,onError:i})}return o}let a=Ys("img");function l(){h(),e&&e(this);let f=Ns.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}Ns.delete(this),s.manager.itemEnd(t)}function c(f){h(),i&&i(f),si.remove(`image:${t}`);let u=Ns.get(this)||[];for(let d=0;d<u.length;d++){let m=u[d];m.onError&&m.onError(f)}Ns.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),si.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}},mh=class extends on{constructor(t){super(t)}load(t,e,n,i){let s=new fr;s.colorSpace=rn;let o=new vr(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}},gh=class extends on{constructor(t){super(t)}load(t,e,n,i){let s=this,o=new ue,a=new Ln(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(l){let c;try{c=s.parse(l)}catch(h){i!==void 0?i(h):Ft(h);return}s._applyTexData(o,c),e&&e(o,c)},n,i),o}createDataTexture(t){let e=new ue;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:Re,t.wrapT=e.wrapT!==void 0?e.wrapT:Re,t.magFilter=e.magFilter!==void 0?e.magFilter:ee,t.minFilter=e.minFilter!==void 0?e.minFilter:ee,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=fi),e.mipmapCount===1&&(t.minFilter=ee),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},Mo=class extends on{constructor(t){super(t)}load(t,e,n,i){let s=new Ve,o=new vr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},ci=class extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Fl=class extends ci{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},cp=new bt,S0=new C,M0=new C,jr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bi,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;S0.setFromMatrixPosition(t.matrixWorld),e.position.copy(S0),M0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(M0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){cp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(cp,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===cr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(cp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},zu=new C,ku=new Ze,vi=new C,Qr=class extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zu,ku,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,ku,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(zu,ku,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zu,ku,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},sr=new C,T0=new Y,w0=new Y,Fe=class extends Qr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(sr.x,sr.y).multiplyScalar(-t/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-t/sr.z)}getViewSize(t,e){return this.getViewBounds(t,T0,w0),e.subVectors(w0,T0)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Mp=class extends jr{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Gr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Nl=class extends ci{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Mp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Tp=class extends jr{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0}},Ul=class extends ci{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Tp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ti=class extends Qr{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wp=class extends jr{constructor(){super(new Ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ts=class extends ci{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new wp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Bl=class extends ci{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},es=class extends ci{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){let e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}},To=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new C)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){let n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*s),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*s)),e.addScaledVector(o[6],.315392*(3*s*s-1)),e.addScaledVector(o[7],1.092548*(n*s)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){let n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*s),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*s),e.addScaledVector(o[6],.743125*s*s-.247708),e.addScaledVector(o[7],2*.429043*n*s),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){let n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}},Ol=class extends ci{constructor(t=new To,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){let e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}},A0={},zl=class r extends on{constructor(t){super(t),this.textures={}}load(t,e,n,i){let s=this,o=new Ln(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(l){i?i(l):Ft(l),s.manager.itemError(t)}},n,i)}parse(t){let e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return r.createMaterialFromType(t)}static createMaterialFromType(t){let n={ShadowMaterial:Ml,SpriteMaterial:to,RawShaderMaterial:mo,ShaderMaterial:ze,PointsMaterial:no,MeshPhysicalMaterial:gr,MeshStandardMaterial:go,MeshPhongMaterial:Tl,MeshToonMaterial:wl,MeshNormalMaterial:Al,MeshLambertMaterial:El,MeshDepthMaterial:xo,MeshDistanceMaterial:vo,MeshBasicMaterial:kn,MeshMatcapMaterial:Rl,LineDashedMaterial:Cl,LineBasicMaterial:un,Material:Ke,...A0}[t],i;return n===void 0?(_i(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new Ke):i=new n,i}static registerMaterial(t,e){A0[t]=e}},wo=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}},kl=class extends It{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}},Vl=class extends on{constructor(t){super(t)}load(t,e,n,i){let s=this,o=new Ln(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(JSON.parse(a)))}catch(l){i?i(l):Ft(l),s.manager.itemError(t)}},n,i)}parse(t){let e={},n={};function i(d,m){if(e[m]!==void 0)return e[m];let p=d.interleavedBuffers[m],g=s(d,p.buffer),_=ks(p.type,g),y=new hr(_,p.stride);return y.uuid=p.uuid,p.usage!==void 0&&y.setUsage(p.usage),e[m]=y,y}function s(d,m){if(n[m]!==void 0)return n[m];let p=d.arrayBuffers[m],g=new Uint32Array(p).buffer;return n[m]=g,g}let o=t.isInstancedBufferGeometry?new kl:new It,a=t.data.index;if(a!==void 0){let d=ks(a.type,a.array);o.setIndex(new zt(d,1))}let l=t.data.attributes;for(let d in l){let m=l[d],x;if(m.isInterleavedBufferAttribute){let p=i(t.data,m.data);x=new zi(p,m.itemSize,m.offset,m.normalized)}else{let p=ks(m.type,m.array),g=m.isInstancedBufferAttribute?yi:zt;x=new g(p,m.itemSize,m.normalized)}m.name!==void 0&&(x.name=m.name),m.usage!==void 0&&x.setUsage(m.usage),m.gpuType!==void 0&&(x.gpuType=m.gpuType),o.setAttribute(d,x)}let c=t.data.morphAttributes;if(c)for(let d in c){let m=c[d],x=[];for(let p=0,g=m.length;p<g;p++){let _=m[p],y;if(_.isInterleavedBufferAttribute){let v=i(t.data,_.data);y=new zi(v,_.itemSize,_.offset,_.normalized)}else{let v=ks(_.type,_.array);y=new zt(v,_.itemSize,_.normalized)}_.name!==void 0&&(y.name=_.name),_.usage!==void 0&&y.setUsage(_.usage),_.gpuType!==void 0&&(y.gpuType=_.gpuType),x.push(y)}o.morphAttributes[d]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);let f=t.data.groups||t.data.drawcalls||t.data.offsets;if(f!==void 0)for(let d=0,m=f.length;d!==m;++d){let x=f[d];o.addGroup(x.start,x.count,x.materialIndex)}let u=t.data.boundingSphere;return u!==void 0&&(o.boundingSphere=new $e().fromJSON(u)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}},up={},xh=class extends on{constructor(t){super(t)}load(t,e,n,i){let s=this,o=this.path===""?wo.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;let a=new Ln(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(f){i!==void 0&&i(f),Ft("ObjectLoader: Can't parse "+t+".",f.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Ft("ObjectLoader: Can't load "+t);return}s.parse(c,e)},n,i)}async loadAsync(t,e){let n=this,i=this.path===""?wo.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;let s=new Ln(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);let o=await s.loadAsync(t,e),a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}let l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){let n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),s=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,s,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let f=!1;for(let u in o)if(o[u].data instanceof HTMLImageElement){f=!0;break}f===!1&&e(c)}return c}async parseAsync(t){let e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),s=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,s),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){up[t]=e}parseShapes(t){let e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){let s=new mr().fromJSON(t[n]);e[s.uuid]=s}return e}parseSkeletons(t,e){let n={},i={};if(e.traverse(function(s){s.isBone&&(i[s.uuid]=s)}),t!==void 0)for(let s=0,o=t.length;s<o;s++){let a=new Ya().fromJSON(t[s],i);n[a.uuid]=a}return n}parseGeometries(t,e){let n={};if(t!==void 0){let i=new Vl;for(let s=0,o=t.length;s<o;s++){let a,l=t[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in v0?a=v0[l.type].fromJSON(l,e):l.type in up?a=up[l.type].fromJSON(l,e):dt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){let n={},i={};if(t!==void 0){let s=new zl;s.setTextures(e);for(let o=0,a=t.length;o<a;o++){let l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){let e={};if(t!==void 0)for(let n=0;n<t.length;n++){let i=t[n],s=xr.parse(i);e[s.uuid]=s}return e}parseImages(t,e){let n=this,i={},s;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:ks(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){let l=new So(e);s=new vr(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){let f=t[c],u=f.url;if(Array.isArray(u)){let d=[];for(let m=0,x=u.length;m<x;m++){let p=u[m],g=a(p);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new ue(g.data,g.width,g.height)))}i[f.uuid]=new qn(d)}else{let d=a(f.url);i[f.uuid]=new qn(d)}}}return i}async parseImagesAsync(t){let e=this,n={},i;async function s(o){if(typeof o=="string"){let a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:ks(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new vr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){let l=t[o],c=l.url;if(Array.isArray(c)){let h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f],m=await s(d);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new ue(m.data,m.width,m.height)))}n[l.uuid]=new qn(h)}else{let h=await s(l.url);n[l.uuid]=new qn(h)}}}return n}parseTextures(t,e){function n(s,o){return typeof s=="number"?s:(dt("ObjectLoader.parseTexture: Constant should be in numeric form.",s),o[s])}let i={};if(t!==void 0)for(let s=0,o=t.length;s<o;s++){let a=t[s];a.image===void 0&&dt('ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&dt("ObjectLoader: Undefined image",a.image);let l=e[a.image],c=l.data,h;Array.isArray(c)?(h=new fr,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ue:h=new Ve,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,uS)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],E0),h.wrapT=n(a.wrap[1],E0)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,R0)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,R0)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.normalized!==void 0&&(h.normalized=a.normalized),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,s){let o;function a(u){return e[u]===void 0&&dt("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){let d=[];for(let m=0,x=u.length;m<x;m++){let p=u[m];n[p]===void 0&&dt("ObjectLoader: Undefined material",p),d.push(n[p])}return d}return n[u]===void 0&&dt("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&dt("ObjectLoader: Undefined texture",u),i[u]}let h,f;switch(t.type){case"Scene":o=new Oi,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new ct(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new Ga(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Ha(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Fe(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new Ti(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new Bl(t.color,t.intensity);break;case"DirectionalLight":o=new ts(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new Ul(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new es(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new Nl(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new Fl(t.color,t.groundColor,t.intensity);break;case"LightProbe":let u=new To().fromArray(t.sh);o=new Ol(u,t.intensity);break;case"SkinnedMesh":h=a(t.geometry),f=l(t.material),o=new qa(h,f),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),f=l(t.material),o=new ge(h,f);break;case"InstancedMesh":h=a(t.geometry),f=l(t.material);let d=t.count,m=t.instanceMatrix,x=t.instanceColor;o=new Za(h,f,d),o.instanceMatrix=new yi(new Float32Array(m.array),16),x!==void 0&&(o.instanceColor=new yi(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=a(t.geometry),f=l(t.material),o=new Ja(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,f),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._geometryInfo=t.geometryInfo.map(p=>{let g=null,_=null;return p.boundingBox!==void 0&&(g=new le().fromJSON(p.boundingBox)),p.boundingSphere!==void 0&&(_=new $e().fromJSON(p.boundingSphere)),{...p,boundingBox:g,boundingSphere:_}}),o._instanceInfo=t.instanceInfo,o._availableInstanceIds=t._availableInstanceIds,o._availableGeometryIds=t._availableGeometryIds,o._nextIndexStart=t.nextIndexStart,o._nextVertexStart=t.nextVertexStart,o._geometryCount=t.geometryCount,o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._matricesTexture=c(t.matricesTexture.uuid),o._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(o.boundingSphere=new $e().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(o.boundingBox=new le().fromJSON(t.boundingBox));break;case"LOD":o=new Xa;break;case"Line":o=new li(a(t.geometry),l(t.material));break;case"LineLoop":o=new Ka(a(t.geometry),l(t.material));break;case"LineSegments":o=new Vn(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new ja(a(t.geometry),l(t.material));break;case"Sprite":o=new Wa(l(t.material));break;case"Group":o=new ri;break;case"Bone":o=new eo;break;default:o=new de}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.pivot!==void 0&&(o.pivot=new C().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(o.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(o.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.static!==void 0&&(o.static=t.static),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){let u=t.children;for(let d=0;d<u.length;d++)o.add(this.parseObject(u[d],e,n,i,s))}if(t.animations!==void 0){let u=t.animations;for(let d=0;d<u.length;d++){let m=u[d];o.animations.push(s[m])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);let u=t.levels;for(let d=0;d<u.length;d++){let m=u[d],x=o.getObjectByProperty("uuid",m.object);x!==void 0&&o.addLevel(x,m.distance,m.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=e[n.skeleton];i===void 0?dt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){let n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new de}})}},uS={UVMapping:Jl,CubeReflectionMapping:hi,CubeRefractionMapping:Wi,EquirectangularReflectionMapping:wi,EquirectangularRefractionMapping:Fo,CubeUVReflectionMapping:is},E0={RepeatWrapping:Je,ClampToEdgeWrapping:Re,MirroredRepeatWrapping:Hs},R0={NearestFilter:Ht,NearestMipmapNearestFilter:lf,NearestMipmapLinearFilter:rs,LinearFilter:ee,LinearMipmapNearestFilter:No,LinearMipmapLinearFilter:fi},hp=new WeakMap,vh=class extends on{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&dt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&dt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=si.get(`image-bitmap:${t}`);if(o!==void 0){if(s.manager.itemStart(t),o.then){o.then(c=>{hp.has(o)===!0?(i&&i(hp.get(o)),s.manager.itemError(t),s.manager.itemEnd(t)):(e&&e(c),s.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return si.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),hp.set(l,c),si.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});si.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Vu,Ao=class{static getContext(){return Vu===void 0&&(Vu=new(window.AudioContext||window.webkitAudioContext)),Vu}static setContext(t){Vu=t}},_h=class extends on{constructor(t){super(t)}load(t,e,n,i){let s=this,o=new Ln(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{let c=l.slice(0),h=Ao.getContext(),f=t+"#decode";s.manager.itemStart(f),h.decodeAudioData(c,function(u){e(u),s.manager.itemEnd(f)}).catch(function(u){a(u),s.manager.itemEnd(f)})}catch(c){a(c)}},n,i);function a(l){i?i(l):Ft(l),s.manager.itemError(t)}}},C0=new bt,I0=new bt,Nr=new bt,yh=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Fe,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Fe,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){let e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Nr.copy(t.projectionMatrix);let i=e.eyeSep/2,s=i*e.near/e.focus,o=e.near*Math.tan(Vr*e.fov*.5)/e.zoom,a,l;I0.elements[12]=-i,C0.elements[12]=i,a=-o*e.aspect+s,l=o*e.aspect+s,Nr.elements[0]=2*e.near/(l-a),Nr.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Nr),a=-o*e.aspect-s,l=o*e.aspect-s,Nr.elements[0]=2*e.near/(l-a),Nr.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Nr)}this.cameraL.matrix.copy(t.matrixWorld).multiply(I0),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(C0),this.cameraR.matrixWorldNeedsUpdate=!0}},Us=-90,Bs=1,Hl=class extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fe(Us,Bs,t,e);i.layers=this.layers,this.add(i);let s=new Fe(Us,Bs,t,e);s.layers=this.layers,this.add(s);let o=new Fe(Us,Bs,t,e);o.layers=this.layers,this.add(o);let a=new Fe(Us,Bs,t,e);a.layers=this.layers,this.add(a);let l=new Fe(Us,Bs,t,e);l.layers=this.layers,this.add(l);let c=new Fe(Us,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Gl=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Wl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=hS.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function hS(){this._document.hidden===!1&&this.reset()}var Ur=new C,fp=new Ze,fS=new C,Br=new C,Or=new C,bh=class extends de{constructor(){super(),this.type="AudioListener",this.context=Ao.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Wl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();let e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ur,fp,fS),Br.set(0,0,-1).applyQuaternion(fp),Or.set(0,1,0).applyQuaternion(fp),e.positionX){let n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ur.x,n),e.positionY.linearRampToValueAtTime(Ur.y,n),e.positionZ.linearRampToValueAtTime(Ur.z,n),e.forwardX.linearRampToValueAtTime(Br.x,n),e.forwardY.linearRampToValueAtTime(Br.y,n),e.forwardZ.linearRampToValueAtTime(Br.z,n),e.upX.linearRampToValueAtTime(Or.x,n),e.upY.linearRampToValueAtTime(Or.y,n),e.upZ.linearRampToValueAtTime(Or.z,n)}else e.setPosition(Ur.x,Ur.y,Ur.z),e.setOrientation(Br.x,Br.y,Br.z,Or.x,Or.y,Or.z)}},Xl=class extends de{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){dt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){dt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;let e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){dt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){dt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){dt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(dt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){dt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(dt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}},zr=new C,P0=new Ze,dS=new C,kr=new C,Sh=class extends Xl{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(zr,P0,dS),kr.set(0,0,1).applyQuaternion(P0);let e=this.panner;if(e.positionX){let n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(zr.x,n),e.positionY.linearRampToValueAtTime(zr.y,n),e.positionZ.linearRampToValueAtTime(zr.z,n),e.orientationX.linearRampToValueAtTime(kr.x,n),e.orientationY.linearRampToValueAtTime(kr.y,n),e.orientationZ.linearRampToValueAtTime(kr.z,n)}else e.setPosition(zr.x,zr.y,zr.z),e.setOrientation(kr.x,kr.y,kr.z)}},Mh=class{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0,e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}},ql=class{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){let n=this.buffer,i=this.valueSize,s=t*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;let a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){let e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){let e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){let t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){let t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Ze.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){let o=this._workIndex*s;Ze.multiplyQuaternionsFlat(t,o,t,e,t,n),Ze.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){let o=1-i;for(let a=0;a!==s;++a){let l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){let a=e+o;t[a]=t[a]+t[n+o]*i}}},vm="\\[\\]\\.:\\/",pS=new RegExp("["+vm+"]","g"),_m="[^"+vm+"]",mS="[^"+vm.replace("\\.","")+"]",gS=/((?:WC+[\/:])*)/.source.replace("WC",_m),xS=/(WCOD+)?/.source.replace("WCOD",mS),vS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_m),_S=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_m),yS=new RegExp("^"+gS+xS+vS+_S+"$"),bS=["material","materials","bones","map"],Ap=class{constructor(t,e,n){let i=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pS,"")}static parseTrackName(t){let e=yS.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);bS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Ft("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Ap;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Th=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=zn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){let t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,s=this._bindings,o=s.length,a,l=t.length,c=this.nCachedObjects_;for(let h=0,f=arguments.length;h!==f;++h){let u=arguments[h],d=u.uuid,m=e[d];if(m===void 0){m=l++,e[d]=m,t.push(u);for(let x=0,p=o;x!==p;++x)s[x].push(new Te(u,n[x],i[x]))}else if(m<c){a=t[m];let x=--c,p=t[x];e[p.uuid]=m,t[m]=p,e[d]=x,t[x]=u;for(let g=0,_=o;g!==_;++g){let y=s[g],v=y[x],S=y[m];y[m]=v,S===void 0&&(S=new Te(u,n[g],i[g])),y[x]=S}}else t[m]!==a&&Ft("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){let l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=s){let f=s++,u=t[f];e[u.uuid]=h,t[h]=u,e[c]=f,t[f]=l;for(let d=0,m=i;d!==m;++d){let x=n[d],p=x[f],g=x[h];x[h]=p,x[f]=g}}}this.nCachedObjects_=s}uncache(){let t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length,s=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){let c=arguments[a],h=c.uuid,f=e[h];if(f!==void 0)if(delete e[h],f<s){let u=--s,d=t[u],m=--o,x=t[m];f!==u&&(e[d.uuid]=f),t[f]=d,u!==m&&(e[x.uuid]=u),t[u]=x,t.pop();for(let p=0,g=i;p!==g;++p){let _=n[p],y=_[u],v=_[m];_[f]=y,_[u]=v,_.pop()}}else{let u=--o,d=t[u];f!==u&&(e[d.uuid]=f),t[f]=d,t.pop();for(let m=0,x=i;m!==x;++m){let p=n[m];p[f]=p[u],p.pop()}}}this.nCachedObjects_=s}subscribe_(t,e){let n=this._bindingsIndicesByPath,i=n[t],s=this._bindings;if(i!==void 0)return s[i];let o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,f=new Array(c);i=s.length,n[t]=i,o.push(t),a.push(e),s.push(f);for(let u=h,d=l.length;u!==d;++u){let m=l[u];f[u]=new Te(m,t,e)}return f}unsubscribe_(t){let e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){let i=this._paths,s=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=i[a];e[c]=n,o[n]=l,o.pop(),s[n]=s[a],s.pop(),i[n]=i[a],i.pop()}}},Yl=class{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;let s=e.tracks,o=s.length,a=new Array(o),l={endingStart:ar,endingEnd:ar};for(let c=0;c!==o;++c){let h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=jp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){let i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){let t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){let i=this._mixer,s=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){let t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}let s=this._startTime;if(s!==null){let l=(t-s)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);let o=this._updateTime(e),a=this._updateWeight(t);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case pf:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Cc:default:for(let h=0,f=l.length;h!==f;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){let e=this._clip.duration,n=this.loop,i=this.time+t,s=this._loopCount,o=n===Qp;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===Kp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){let a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){let c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=s,this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){let i=this._interpolantSettings;n?(i.endingStart=lr,i.endingEnd=lr):(t?i.endingStart=this.zeroSlopeAtStart?lr:ar:i.endingStart=Ws,e?i.endingEnd=this.zeroSlopeAtEnd?lr:ar:i.endingEnd=Ws)}_scheduleFading(t,e,n){let i=this._mixer,s=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}},SS=new Float32Array(1),wh=class extends Pn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){let n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let f=0;f!==s;++f){let u=i[f],d=u.name,m=h[d];if(m!==void 0)++m.referenceCount,o[f]=m;else{if(m=o[f],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,d));continue}let x=e&&e._propertyBindings[f].binding.parsedPath;m=new ql(Te.create(n,d,x),u.ValueTypeName,u.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,d),o[f]=m}a[f].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){let n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){let e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){let i=this._actions,s=this._actionsByClip,o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{let a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){let e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;let s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;let f=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete f[u],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){let e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){let s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){let e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){let e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){let i=this._bindingsByRootAndName,s=this._bindings,o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){let e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){let e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){let e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){let t=this._controlInterpolants,e=this._nActiveControlInterpolants++,n=t[e];return n===void 0&&(n=new _o(new Float32Array(2),new Float32Array(2),1,SS),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){let e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){let i=e||this._root,s=i.uuid,o=typeof t=="string"?xr.findByName(i,t):t,a=o!==null?o.uuid:t,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Cc),l!==void 0){let f=l.actionByRoot[s];if(f!==void 0&&f.blendMode===n)return f;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Yl(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){let n=e||this._root,i=n.uuid,s=typeof t=="string"?xr.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;let e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){let e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,f=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,f._cacheIndex=h,e[h]=f,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){let e=t.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(let o in s){let a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){let n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Ah=class extends Js{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let s=0;s<this.textures.length;s++){let o=new Wr(null,t,e,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[s]=o}this._setTextureOptions(i)}},Eh=class r{constructor(t){this.value=t}clone(){return new r(this.value.clone===void 0?this.value:this.value.clone())}},MS=0,Rh=class extends Pn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:MS++}),this.name="",this.usage=Dc,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){let e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;let e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){let s=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<s.length;o++)this.uniforms.push(s[o].clone())}return this}clone(){return new this.constructor().copy(this)}},Ch=class extends hr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}},Ih=class{constructor(t,e,n,i,s,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=s,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}},D0=new bt,Ph=class{constructor(t,e,n=0,i=1/0){this.ray=new ai(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ft("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return D0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(D0),this}intersectObject(t,e=!0,n=[]){return Ep(t,this,n,e),n.sort(L0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ep(t[i],this,n,e);return n.sort(L0),n}};function L0(r,t){return r.distance-t.distance}function Ep(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Ep(s[o],t,e,!0)}}var Eo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,dt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},Ro=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Dh=class{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}},Lh=class r{static{r.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}},F0=new Y,Zl=class{constructor(t=new Y(1/0,1/0),e=new Y(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=F0.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,F0).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},N0=new C,Hu=new C,Os=new C,zs=new C,dp=new C,TS=new C,wS=new C,yn=class{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){N0.subVectors(t,this.start),Hu.subVectors(this.end,this.start);let n=Hu.dot(Hu);if(n===0)return 0;let s=Hu.dot(N0)/n;return e&&(s=qt(s,0,1)),s}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=TS,n=wS){let i=10000000000000001e-32,s,o,a=this.start,l=t.start,c=this.end,h=t.end;Os.subVectors(c,a),zs.subVectors(h,l),dp.subVectors(a,l);let f=Os.dot(Os),u=zs.dot(zs),d=zs.dot(dp);if(f<=i&&u<=i)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(f<=i)s=0,o=d/u,o=qt(o,0,1);else{let m=Os.dot(dp);if(u<=i)o=0,s=qt(-m/f,0,1);else{let x=Os.dot(zs),p=f*u-x*x;p!==0?s=qt((x*d-m*u)/p,0,1):s=0,o=(x*s+d)/u,o<0?(o=0,s=qt(-m/f,0,1)):o>1&&(o=1,s=qt((x-m)/f,0,1))}}return e.copy(a).addScaledVector(Os,s),n.copy(l).addScaledVector(zs,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},U0=new C,Fh=class extends de{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";let n=new It,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){let c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new ht(i,3));let s=new un({fog:!1,toneMapped:!1});this.cone=new Vn(n,s),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;let t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),U0.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(U0),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},or=new C,Gu=new bt,pp=new bt,Nh=class extends Vn{constructor(t){let e=Yx(t),n=new It,i=[],s=[];for(let c=0;c<e.length;c++){let h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(0,0,0),s.push(0,0,0))}n.setAttribute("position",new ht(i,3)),n.setAttribute("color",new ht(s,3));let o=new un({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;let a=new ct(255),l=new ct(65280);this.setColors(a,l)}updateMatrixWorld(t){let e=this.bones,n=this.geometry,i=n.getAttribute("position");pp.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<e.length;s++){let a=e[s];a.parent&&a.parent.isBone&&(Gu.multiplyMatrices(pp,a.matrixWorld),or.setFromMatrixPosition(Gu),i.setXYZ(o,or.x,or.y,or.z),Gu.multiplyMatrices(pp,a.parent.matrixWorld),or.setFromMatrixPosition(Gu),i.setXYZ(o+1,or.x,or.y,or.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){let i=this.geometry.getAttribute("color");for(let s=0;s<i.count;s+=2)i.setXYZ(s,t.r,t.g,t.b),i.setXYZ(s+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Yx(r){let t=[];r.isBone===!0&&t.push(r);for(let e=0;e<r.children.length;e++)t.push(...Yx(r.children[e]));return t}var Uh=class extends ge{constructor(t,e,n){let i=new po(e,4,2),s=new kn({wireframe:!0,fog:!1,toneMapped:!1});super(i,s),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},AS=new C,B0=new ct,O0=new ct,Bh=class extends de{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new fo(e);i.rotateY(Math.PI*.5),this.material=new kn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let s=i.getAttribute("position"),o=new Float32Array(s.count*3);i.setAttribute("color",new zt(o,3)),this.add(new ge(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let e=t.geometry.getAttribute("color");B0.copy(this.light.color),O0.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){let s=n<i/2?B0:O0;e.setXYZ(n,s.r,s.g,s.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(AS.setFromMatrixPosition(this.light.matrixWorld).negate())}},Oh=class extends Vn{constructor(t=10,e=10,n=4473924,i=8947848){n=new ct(n),i=new ct(i);let s=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,d=0,m=-a;u<=e;u++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);let x=u===s?n:i;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}let h=new It;h.setAttribute("position",new ht(l,3)),h.setAttribute("color",new ht(c,3));let f=new un({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},zh=class extends Vn{constructor(t=10,e=16,n=8,i=64,s=4473924,o=8947848){s=new ct(s),o=new ct(o);let a=[],l=[];if(e>1)for(let f=0;f<e;f++){let u=f/e*(Math.PI*2),d=Math.sin(u)*t,m=Math.cos(u)*t;a.push(0,0,0),a.push(d,0,m);let x=f&1?s:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let f=0;f<n;f++){let u=f&1?s:o,d=t-t/n*f;for(let m=0;m<i;m++){let x=m/i*(Math.PI*2),p=Math.sin(x)*d,g=Math.cos(x)*d;a.push(p,0,g),l.push(u.r,u.g,u.b),x=(m+1)/i*(Math.PI*2),p=Math.sin(x)*d,g=Math.cos(x)*d,a.push(p,0,g),l.push(u.r,u.g,u.b)}}let c=new It;c.setAttribute("position",new ht(a,3)),c.setAttribute("color",new ht(l,3));let h=new un({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},z0=new C,Wu=new C,k0=new C,kh=class extends de{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new It;i.setAttribute("position",new ht([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));let s=new un({fog:!1,toneMapped:!1});this.lightPlane=new li(i,s),this.add(this.lightPlane),i=new It,i.setAttribute("position",new ht([0,0,0,0,0,1],3)),this.targetLine=new li(i,s),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),z0.setFromMatrixPosition(this.light.matrixWorld),Wu.setFromMatrixPosition(this.light.target.matrixWorld),k0.subVectors(Wu,z0),this.lightPlane.lookAt(Wu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Wu),this.targetLine.scale.z=k0.length()}},Xu=new C,ke=new Qr,Vh=class extends Vn{constructor(t){let e=new It,n=new un({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(m,x){l(m),l(x)}function l(m){i.push(0,0,0),s.push(0,0,0),o[m]===void 0&&(o[m]=[]),o[m].push(i.length/3-1)}e.setAttribute("position",new ht(i,3)),e.setAttribute("color",new ht(s,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();let c=new ct(16755200),h=new ct(16711680),f=new ct(43775),u=new ct(16777215),d=new ct(3355443);this.setColors(c,h,f,u,d)}setColors(t,e,n,i,s){let a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){let t=this.geometry,e=this.pointMap,n=1,i=1,s,o;if(ke.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===In)s=-1,o=1;else if(this.camera.coordinateSystem===cr)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Xe("c",e,t,ke,0,0,s),Xe("t",e,t,ke,0,0,o),Xe("n1",e,t,ke,-n,-i,s),Xe("n2",e,t,ke,n,-i,s),Xe("n3",e,t,ke,-n,i,s),Xe("n4",e,t,ke,n,i,s),Xe("f1",e,t,ke,-n,-i,o),Xe("f2",e,t,ke,n,-i,o),Xe("f3",e,t,ke,-n,i,o),Xe("f4",e,t,ke,n,i,o),Xe("u1",e,t,ke,n*.7,i*1.1,s),Xe("u2",e,t,ke,-n*.7,i*1.1,s),Xe("u3",e,t,ke,0,i*2,s),Xe("cf1",e,t,ke,-n,0,o),Xe("cf2",e,t,ke,n,0,o),Xe("cf3",e,t,ke,0,-i,o),Xe("cf4",e,t,ke,0,i,o),Xe("cn1",e,t,ke,-n,0,s),Xe("cn2",e,t,ke,n,0,s),Xe("cn3",e,t,ke,0,-i,s),Xe("cn4",e,t,ke,0,i,s),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function Xe(r,t,e,n,i,s,o){Xu.set(i,s,o).unproject(n);let a=t[r];if(a!==void 0){let l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Xu.x,Xu.y,Xu.z)}}var qu=new le,Hh=class extends Vn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),s=new It;s.setIndex(new zt(n,1)),s.setAttribute("position",new zt(i,3)),super(s,new un({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&qu.setFromObject(this.object),qu.isEmpty())return;let t=qu.min,e=qu.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Gh=class extends Vn{constructor(t,e=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new It;s.setIndex(new zt(n,1)),s.setAttribute("position",new ht(i,3)),super(s,new un({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){let e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Wh=class extends li{constructor(t,e=1,n=16776960){let i=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new It;o.setAttribute("position",new ht(s,3)),o.computeBoundingSphere(),super(o,new un({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;let a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new It;l.setAttribute("position",new ht(a,3)),l.computeBoundingSphere(),this.add(new ge(l,new kn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},V0=new C,Yu,mp,Xh=class extends de{constructor(t=new C(0,0,1),e=new C(0,0,0),n=1,i=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Yu===void 0&&(Yu=new It,Yu.setAttribute("position",new ht([0,0,0,0,1,0],3)),mp=new so(.5,1,5,1),mp.translate(0,-.5,0)),this.position.copy(e),this.line=new li(Yu,new un({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ge(mp,new kn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{V0.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(V0,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},qh=class extends Vn{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new It;i.setAttribute("position",new ht(e,3)),i.setAttribute("color",new ht(n,3));let s=new un({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){let i=new ct,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}},Yh=class{constructor(){this.type="ShapePath",this.color=new ct,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new pr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,f=c.length;for(let u=0,d=f-1;u<f;d=u++){let m=c[u],x=c[d];m.y>l.y!=x.y>l.y&&l.x<(x.x-m.x)*(l.y-m.y)/(x.y-m.y)+m.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new Y);if(t(h,l))return h;let f=h.y,u=[],d=l.length;for(let m=0;m<d;m++){let x=l[m],p=l[(m+1)%d];if(x.y>f!=p.y>f){let g=x.x+(f-x.y)*(p.x-x.x)/(p.y-x.y);u.push(g)}}return u.length>1&&(u.sort((m,x)=>m-x),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(dt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=Yn.area(c);if(h===0)continue;let f=new Zl;for(let u=0;u<c.length;u++)f.expandByPoint(c[u]);s.push({subPath:l,points:c,boundingBox:f,interiorPoint:e(c,f),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){let c=s[l],h=0;for(let f=l-1;f>=0;f--){let u=s[f];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of s){if(l.exclude||l.role!=="outer")continue;let c=new mr;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of s){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new pr;h.curves=l.subPath.curves,c.holes.push(h)}return o}},Zh=class extends Pn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function ES(r,t){let e=r.image&&r.image.width?r.image.width/r.image.height:1;return e>t?(r.repeat.x=1,r.repeat.y=e/t,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2):(r.repeat.x=t/e,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0),r}function RS(r,t){let e=r.image&&r.image.width?r.image.width/r.image.height:1;return e>t?(r.repeat.x=t/e,r.repeat.y=1,r.offset.x=(1-r.repeat.x)/2,r.offset.y=0):(r.repeat.x=1,r.repeat.y=e/t,r.offset.x=0,r.offset.y=(1-r.repeat.y)/2),r}function CS(r){return r.repeat.x=1,r.repeat.y=1,r.offset.x=0,r.offset.y=0,r}function gf(r,t,e,n){let i=IS(n);switch(e){case ff:return r*t;case $n:return r*t/i.components*i.byteLength;case yr:return r*t/i.components*i.byteLength;case Hn:return r*t*2/i.components*i.byteLength;case Zi:return r*t*2/i.components*i.byteLength;case df:return r*t*3/i.components*i.byteLength;case $t:return r*t*4/i.components*i.byteLength;case $i:return r*t*4/i.components*i.byteLength;case Bo:case Oo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zo:case ko:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(r,16)*Math.max(t,8)/4;case Ql:case ec:return Math.max(r,8)*Math.max(t,8)/2;case ic:case rc:case oc:case ac:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case sc:case Vo:case lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case hc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case dc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case pc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case mc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case gc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case _c:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case yc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Mc:case Tc:case wc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ac:case Ec:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ho:case Rc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function IS(r){switch(r){case Qe:case ss:return{byteLength:1,components:1};case Xi:case Uo:case Be:return{byteLength:2,components:1};case Kl:case jl:return{byteLength:2,components:4};case tn:case qi:case Jt:return{byteLength:4,components:1};case uf:case hf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}var $h=class{static contain(t,e){return ES(t,e)}static cover(t,e){return RS(t,e)}static fill(t){return CS(t)}static getByteLength(t,e,n,i){return gf(t,e,n,i)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mv(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function PS(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];r.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var DS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,US=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,VS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,eM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_M=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,TM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,wM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,NM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_T=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ST=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ET=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,DT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,HT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ew=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:DS,alphahash_pars_fragment:LS,alphamap_fragment:FS,alphamap_pars_fragment:NS,alphatest_fragment:US,alphatest_pars_fragment:BS,aomap_fragment:OS,aomap_pars_fragment:zS,batching_pars_vertex:kS,batching_vertex:VS,begin_vertex:HS,beginnormal_vertex:GS,bsdfs:WS,iridescence_fragment:XS,bumpmap_pars_fragment:qS,clipping_planes_fragment:YS,clipping_planes_pars_fragment:ZS,clipping_planes_pars_vertex:$S,clipping_planes_vertex:JS,color_fragment:KS,color_pars_fragment:jS,color_pars_vertex:QS,color_vertex:tM,common:eM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:rM,displacementmap_vertex:sM,emissivemap_fragment:oM,emissivemap_pars_fragment:aM,colorspace_fragment:lM,colorspace_pars_fragment:cM,envmap_fragment:uM,envmap_common_pars_fragment:hM,envmap_pars_fragment:fM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:TM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:gM,fog_fragment:xM,fog_pars_fragment:vM,gradientmap_pars_fragment:_M,lightmap_pars_fragment:yM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:SM,lights_pars_begin:MM,lights_toon_fragment:wM,lights_toon_pars_fragment:AM,lights_phong_fragment:EM,lights_phong_pars_fragment:RM,lights_physical_fragment:CM,lights_physical_pars_fragment:IM,lights_fragment_begin:PM,lights_fragment_maps:DM,lights_fragment_end:LM,lightprobes_pars_fragment:FM,logdepthbuf_fragment:NM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:OM,map_fragment:zM,map_pars_fragment:kM,map_particle_fragment:VM,map_particle_pars_fragment:HM,metalnessmap_fragment:GM,metalnessmap_pars_fragment:WM,morphinstance_vertex:XM,morphcolor_vertex:qM,morphnormal_vertex:YM,morphtarget_pars_vertex:ZM,morphtarget_vertex:$M,normal_fragment_begin:JM,normal_fragment_maps:KM,normal_pars_fragment:jM,normal_pars_vertex:QM,normal_vertex:tT,normalmap_pars_fragment:eT,clearcoat_normal_fragment_begin:nT,clearcoat_normal_fragment_maps:iT,clearcoat_pars_fragment:rT,iridescence_pars_fragment:sT,opaque_fragment:oT,packing:aT,premultiplied_alpha_fragment:lT,project_vertex:cT,dithering_fragment:uT,dithering_pars_fragment:hT,roughnessmap_fragment:fT,roughnessmap_pars_fragment:dT,shadowmap_pars_fragment:pT,shadowmap_pars_vertex:mT,shadowmap_vertex:gT,shadowmask_pars_fragment:xT,skinbase_vertex:vT,skinning_pars_vertex:_T,skinning_vertex:yT,skinnormal_vertex:bT,specularmap_fragment:ST,specularmap_pars_fragment:MT,tonemapping_fragment:TT,tonemapping_pars_fragment:wT,transmission_fragment:AT,transmission_pars_fragment:ET,uv_pars_fragment:RT,uv_pars_vertex:CT,uv_vertex:IT,worldpos_vertex:PT,background_vert:DT,background_frag:LT,backgroundCube_vert:FT,backgroundCube_frag:NT,cube_vert:UT,cube_frag:BT,depth_vert:OT,depth_frag:zT,distance_vert:kT,distance_frag:VT,equirect_vert:HT,equirect_frag:GT,linedashed_vert:WT,linedashed_frag:XT,meshbasic_vert:qT,meshbasic_frag:YT,meshlambert_vert:ZT,meshlambert_frag:$T,meshmatcap_vert:JT,meshmatcap_frag:KT,meshnormal_vert:jT,meshnormal_frag:QT,meshphong_vert:tw,meshphong_frag:ew,meshphysical_vert:nw,meshphysical_frag:iw,meshtoon_vert:rw,meshtoon_frag:sw,points_vert:ow,points_frag:aw,shadow_vert:lw,shadow_frag:cw,sprite_vert:uw,sprite_frag:hw},_t={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},di={basic:{uniforms:bn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:bn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:bn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:bn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:bn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ct(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:bn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:bn([_t.points,_t.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:bn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:bn([_t.common,_t.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:bn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:bn([_t.sprite,_t.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:bn([_t.common,_t.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:bn([_t.lights,_t.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};di.physical={uniforms:bn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var xf={r:0,b:0,g:0},fw=new bt,gv=new Zt;gv.set(-1,0,0,0,1,0,0,0,1);function dw(r,t,e,n,i,s){let o=new ct(0),a=i===!0?0:1,l,c,h=null,f=0,u=null;function d(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=t.get(y,v)}return y}function m(_){let y=!1,v=d(_);v===null?p(o,a):v&&v.isColor&&(p(v,1),y=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(_,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===is)?(c===void 0&&(c=new ge(new dr(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:as(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fw.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(gv),c.material.toneMapped=re.getTransfer(v.colorSpace)!==ve,(h!==v||f!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ge(new Hi(2,2),new ze({name:"BackgroundMaterial",uniforms:as(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=re.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(xf,mm(r)),e.buffers.color.setClear(xf.r,xf.g,xf.b,y,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:m,addToRenderList:x,dispose:g}}function pw(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(P,I,F,L,N){let z=!1,W=f(P,L,F,I);s!==W&&(s=W,c(s.object)),z=d(P,L,F,N),z&&m(P,L,F,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(P,I,F,L),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function h(P){return r.deleteVertexArray(P)}function f(P,I,F,L){let N=L.wireframe===!0,z=n[I.id];z===void 0&&(z={},n[I.id]=z);let W=P.isInstancedMesh===!0?P.id:0,Q=z[W];Q===void 0&&(Q={},z[W]=Q);let X=Q[F.id];X===void 0&&(X={},Q[F.id]=X);let K=X[N];return K===void 0&&(K=u(l()),X[N]=K),K}function u(P){let I=[],F=[],L=[];for(let N=0;N<e;N++)I[N]=0,F[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:L,object:P,attributes:{},index:null}}function d(P,I,F,L){let N=s.attributes,z=I.attributes,W=0,Q=F.getAttributes();for(let X in Q)if(Q[X].location>=0){let j=N[X],Rt=z[X];if(Rt===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(Rt=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(Rt=P.instanceColor)),j===void 0||j.attribute!==Rt||Rt&&j.data!==Rt.data)return!0;W++}return s.attributesNum!==W||s.index!==L}function m(P,I,F,L){let N={},z=I.attributes,W=0,Q=F.getAttributes();for(let X in Q)if(Q[X].location>=0){let j=z[X];j===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));let Rt={};Rt.attribute=j,j&&j.data&&(Rt.data=j.data),N[X]=Rt,W++}s.attributes=N,s.attributesNum=W,s.index=L}function x(){let P=s.newAttributes;for(let I=0,F=P.length;I<F;I++)P[I]=0}function p(P){g(P,0)}function g(P,I){let F=s.newAttributes,L=s.enabledAttributes,N=s.attributeDivisors;F[P]=1,L[P]===0&&(r.enableVertexAttribArray(P),L[P]=1),N[P]!==I&&(r.vertexAttribDivisor(P,I),N[P]=I)}function _(){let P=s.newAttributes,I=s.enabledAttributes;for(let F=0,L=I.length;F<L;F++)I[F]!==P[F]&&(r.disableVertexAttribArray(F),I[F]=0)}function y(P,I,F,L,N,z,W){W===!0?r.vertexAttribIPointer(P,I,F,N,z):r.vertexAttribPointer(P,I,F,L,N,z)}function v(P,I,F,L){x();let N=L.attributes,z=F.getAttributes(),W=I.defaultAttributeValues;for(let Q in z){let X=z[Q];if(X.location>=0){let K=N[Q];if(K===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let j=K.normalized,Rt=K.itemSize,Tt=t.get(K);if(Tt===void 0)continue;let ce=Tt.buffer,Kt=Tt.type,fe=Tt.bytesPerElement,$=Kt===r.INT||Kt===r.UNSIGNED_INT||K.gpuType===qi;if(K.isInterleavedBufferAttribute){let et=K.data,vt=et.stride,Gt=K.offset;if(et.isInstancedInterleavedBuffer){for(let At=0;At<X.locationSize;At++)g(X.location+At,et.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let At=0;At<X.locationSize;At++)p(X.location+At);r.bindBuffer(r.ARRAY_BUFFER,ce);for(let At=0;At<X.locationSize;At++)y(X.location+At,Rt/X.locationSize,Kt,j,vt*fe,(Gt+Rt/X.locationSize*At)*fe,$)}else{if(K.isInstancedBufferAttribute){for(let et=0;et<X.locationSize;et++)g(X.location+et,K.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let et=0;et<X.locationSize;et++)p(X.location+et);r.bindBuffer(r.ARRAY_BUFFER,ce);for(let et=0;et<X.locationSize;et++)y(X.location+et,Rt/X.locationSize,Kt,j,Rt*fe,Rt/X.locationSize*et*fe,$)}}else if(W!==void 0){let j=W[Q];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(X.location,j);break;case 3:r.vertexAttrib3fv(X.location,j);break;case 4:r.vertexAttrib4fv(X.location,j);break;default:r.vertexAttrib1fv(X.location,j)}}}}_()}function S(){w();for(let P in n){let I=n[P];for(let F in I){let L=I[F];for(let N in L){let z=L[N];for(let W in z)h(z[W].object),delete z[W];delete L[N]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let I=n[P.id];for(let F in I){let L=I[F];for(let N in L){let z=L[N];for(let W in z)h(z[W].object),delete z[W];delete L[N]}}delete n[P.id]}function T(P){for(let I in n){let F=n[I];for(let L in F){let N=F[L];if(N[P.id]===void 0)continue;let z=N[P.id];for(let W in z)h(z[W].object),delete z[W];delete N[P.id]}}}function b(P){for(let I in n){let F=n[I],L=P.isInstancedMesh===!0?P.id:0,N=F[L];if(N!==void 0){for(let z in N){let W=N[z];for(let Q in W)h(W[Q].object),delete W[Q];delete N[z]}delete F[L],Object.keys(F).length===0&&delete n[I]}}}function w(){E(),o=!0,s!==i&&(s=i,c(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:b,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function mw(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function gw(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==$t&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let b=T===Be&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Qe&&T!==Jt&&!b&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),M=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:S,samples:M}}function xw(r){let t=this,e=null,n=0,i=!1,s=!1,o=new vn,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,g=r.get(f);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{let _=s?0:n,y=_*4,v=g.clippingState||null;l.value=v,v=h(m,u,y,d);for(let S=0;S!==y;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,m){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=l.value,m!==!0||p===null){let g=d+x*4,_=u.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,v=d;y!==x;++y,v+=4)o.copy(f[y]).applyMatrix4(_,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Wo=4,vw=6,_w=20,yw=256,Lc=new Ti,Zx=new ct,ym=null,bm=0,Sm=0,Mm=!1,bw=new C,ls=new C,Uc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=bw}=s;ym=this._renderer.getRenderTarget(),bm=this._renderer.getActiveCubeFace(),Sm=this._renderer.getActiveMipmapLevel(),Mm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ym,bm,Sm),this._renderer.xr.enabled=Mm,t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ym=this._renderer.getRenderTarget(),bm=this._renderer.getActiveCubeFace(),Sm=this._renderer.getActiveMipmapLevel(),Mm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ee,minFilter:ee,generateMipmaps:!1,type:Be,format:$t,colorSpace:Xs,depthBuffer:!1},i=$x(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$x(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Sw(s)),this._blurMaterial=Tw(s,t,e),this._ggxMaterial=Mw(s,t,e)}return i}_compileMaterial(t){let e=new ge(new It,t);this._renderer.compile(e,Lc)}_sceneToCubeUV(t,e,n,i,s){let l=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Zx),f.toneMapping=Nn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new dr,new kn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,g=!1,_=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,g=!0):(p.color.copy(Zx),g=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));let S=this._cubeSize;Go(i,v*S,y>2?S:0,S,S),f.setRenderTarget(i),g&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===hi||t.mapping===Wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jx());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Go(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Lc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:m}=this,x=this._sizeLods[n],p=3*x*(n>m-Wo?n-m+Wo:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Go(s,p,g,3*x,2*x),i.setRenderTarget(s),i.render(a,Lc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Go(t,p,g,3*x,2*x),i.setRenderTarget(t),i.render(a,Lc)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-Wo?i-this._lodMax+Wo:0),u=4*(this._cubeSize-h);Go(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Lc)}};function Sw(r){let t=[],e=[],n=r,i=r-Wo+1+vw;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,m=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let g=0;g<f;g++){let _=g%3*2/3-1,y=g>2?0:-1,v=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];m.set(v,d*u*g);for(let S=0;S<u;S++){let M=h[S*2]*2-1,T=h[S*2+1]*2-1;g===0?ls.set(1,T,M):g===1?ls.set(-M,1,-T):g===2?ls.set(-M,T,1):g===3?ls.set(-1,T,-M):g===4?ls.set(-M,-1,T):ls.set(M,T,-1),ls.toArray(x,(g*u+S)*d)}}let p=new It;p.setAttribute("position",new zt(m,d)),p.setAttribute("outputDirection",new zt(x,d)),e.push(new ge(p,null)),n>Wo&&n--}return{lodMeshes:e,sizeLods:t}}function $x(r,t,e){let n=new Ue(r,t,e);return n.texture.mapping=is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Mw(r,t,e){return new ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yw,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_f(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:He,depthTest:!1,depthWrite:!1})}function Tw(r,t,e){return new ze({name:"SphericalGaussianBlur",defines:{SAMPLES:_w,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_f(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:He,depthTest:!1,depthWrite:!1})}function Jx(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:He,depthTest:!1,depthWrite:!1})}function Kx(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:He,depthTest:!1,depthWrite:!1})}function _f(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bc=class extends Ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new dr(5,5,5),s=new ze({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:He});s.uniforms.tEquirect.value=e;let o=new ge(i,s),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=ee),new Hl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function ww(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===wi||d===Fo)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let x=new Bc(m.height);return x.fromEquirectangularTexture(r,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,m=d===wi||d===Fo,x=d===hi||d===Wi;if(m||x){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Uc(r)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let _=u.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Uc(r)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===wi?u.mapping=hi:d===Fo&&(u.mapping=Wi),u}function l(u){let d=0,m=6;for(let x=0;x<m;x++)u[x]!==void 0&&d++;return d===m}function c(u){let d=u.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Aw(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&_i("WebGLRenderer: "+n+" extension not supported."),i}}}function Ew(r,t,e,n){let i={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],r.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,m=f.attributes.position,x=0;if(m===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let y=0,v=_.length;y<v;y+=3){let S=_[y+0],M=_[y+1],T=_[y+2];u.push(S,M,M,T,T,S)}}else{let _=m.array;x=m.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let S=y+0,M=y+1,T=y+2;u.push(S,M,M,T,T,S)}}let p=new(m.count>=65535?Qs:js)(u,1);p.version=x;let g=s.get(f);g&&t.remove(g),s.set(f,p)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Rw(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,u){r.drawElements(n,u,s,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(r.drawElementsInstanced(n,u,s,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,d);let x=0;for(let p=0;p<d;p++)x+=u[p];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Cw(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Ft("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Iw(r,t,e){let n=new WeakMap,i=new se;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let w=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*S*4*f),T=new Bi(M,v,S,f);T.type=Jt,T.needsUpdate=!0;let b=y*4;for(let E=0;E<f;E++){let P=p[E],I=g[E],F=_[E],L=v*S*4*E;for(let N=0;N<P.count;N++){let z=N*b;d===!0&&(i.fromBufferAttribute(P,N),M[L+z+0]=i.x,M[L+z+1]=i.y,M[L+z+2]=i.z,M[L+z+3]=0),m===!0&&(i.fromBufferAttribute(I,N),M[L+z+4]=i.x,M[L+z+5]=i.y,M[L+z+6]=i.z,M[L+z+7]=0),x===!0&&(i.fromBufferAttribute(F,N),M[L+z+8]=i.x,M[L+z+9]=i.y,M[L+z+10]=i.z,M[L+z+11]=F.itemSize===4?i.w:1)}}u={count:f,texture:T,size:new Y(v,S)},n.set(a,u),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Pw(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Dw={[ef]:"LINEAR_TONE_MAPPING",[nf]:"REINHARD_TONE_MAPPING",[rf]:"CINEON_TONE_MAPPING",[Lo]:"ACES_FILMIC_TONE_MAPPING",[of]:"AGX_TONE_MAPPING",[af]:"NEUTRAL_TONE_MAPPING",[sf]:"CUSTOM_TONE_MAPPING"};function Lw(r,t,e,n,i,s){let o=new Ue(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new It;c.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ht([0,2,0,0,2,0],2));let h=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ge(c,h),u=new Ti(-1,1,1,-1,0,1),d=null,m=null,x=!1,p,g=null,_=[],y=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let M=0;M<_.length;M++){let T=_[M];T.setSize&&T.setSize(v,S)}},this.setEffects=function(v){_=v,y=_.length>0&&_[0].isRenderPass===!0;let S=o.width,M=o.height;_.length>0&&a===null&&(a=new Ue(S,M,{type:Be,depthBuffer:!1,stencilBuffer:!1}),l=new Ue(S,M,{type:Be,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<_.length;T++){let b=_[T];b.setSize&&b.setSize(S,M)}},this.begin=function(v,S){if(x||v.toneMapping===Nn&&_.length===0)return!1;if(g=S,S!==null){let M=S.width,T=S.height;(o.width!==M||o.height!==T)&&this.setSize(M,T)}return y===!1&&v.setRenderTarget(o),p=v.toneMapping,v.toneMapping=Nn,!0},this.hasRenderPass=function(){return y},this.end=function(v,S){v.toneMapping=p,x=!0;let M=o,T=a;for(let b=0;b<_.length;b++){let w=_[b];w.enabled!==!1&&(w.render(v,T,M,S),w.needsSwap!==!1&&(M=T,T=T===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},re.getTransfer(d)===ve&&(h.defines.SRGB_TRANSFER="");let b=Dw[m];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(g),v.render(f,u),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var xv=new Ve,Am=new ki(1,1),vv=new Bi,_v=new Wr,yv=new fr,jx=[],Qx=[],tv=new Float32Array(16),ev=new Float32Array(9),nv=new Float32Array(4);function qo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=jx[i];if(s===void 0&&(s=new Float32Array(i),jx[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function an(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ln(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function yf(r,t){let e=Qx[t];e===void 0&&(e=new Int32Array(t),Qx[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Fw(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Nw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2fv(this.addr,t),ln(e,t)}}function Uw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;r.uniform3fv(this.addr,t),ln(e,t)}}function Bw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4fv(this.addr,t),ln(e,t)}}function Ow(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;nv.set(n),r.uniformMatrix2fv(this.addr,!1,nv),ln(e,n)}}function zw(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;ev.set(n),r.uniformMatrix3fv(this.addr,!1,ev),ln(e,n)}}function kw(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;tv.set(n),r.uniformMatrix4fv(this.addr,!1,tv),ln(e,n)}}function Vw(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Hw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2iv(this.addr,t),ln(e,t)}}function Gw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;r.uniform3iv(this.addr,t),ln(e,t)}}function Ww(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4iv(this.addr,t),ln(e,t)}}function Xw(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function qw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;r.uniform2uiv(this.addr,t),ln(e,t)}}function Yw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;r.uniform3uiv(this.addr,t),ln(e,t)}}function Zw(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;r.uniform4uiv(this.addr,t),ln(e,t)}}function $w(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Am.compareFunction=e.isReversedDepthBuffer()?Pc:Ic,s=Am):s=xv,e.setTexture2D(t||s,i)}function Jw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_v,i)}function Kw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yv,i)}function jw(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vv,i)}function Qw(r){switch(r){case 5126:return Fw;case 35664:return Nw;case 35665:return Uw;case 35666:return Bw;case 35674:return Ow;case 35675:return zw;case 35676:return kw;case 5124:case 35670:return Vw;case 35667:case 35671:return Hw;case 35668:case 35672:return Gw;case 35669:case 35673:return Ww;case 5125:return Xw;case 36294:return qw;case 36295:return Yw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return jw}}function t1(r,t){r.uniform1fv(this.addr,t)}function e1(r,t){let e=qo(t,this.size,2);r.uniform2fv(this.addr,e)}function n1(r,t){let e=qo(t,this.size,3);r.uniform3fv(this.addr,e)}function i1(r,t){let e=qo(t,this.size,4);r.uniform4fv(this.addr,e)}function r1(r,t){let e=qo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function s1(r,t){let e=qo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function o1(r,t){let e=qo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function a1(r,t){r.uniform1iv(this.addr,t)}function l1(r,t){r.uniform2iv(this.addr,t)}function c1(r,t){r.uniform3iv(this.addr,t)}function u1(r,t){r.uniform4iv(this.addr,t)}function h1(r,t){r.uniform1uiv(this.addr,t)}function f1(r,t){r.uniform2uiv(this.addr,t)}function d1(r,t){r.uniform3uiv(this.addr,t)}function p1(r,t){r.uniform4uiv(this.addr,t)}function m1(r,t,e){let n=this.cache,i=t.length,s=yf(e,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Am:o=xv;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function g1(r,t,e){let n=this.cache,i=t.length,s=yf(e,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||_v,s[o])}function x1(r,t,e){let n=this.cache,i=t.length,s=yf(e,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||yv,s[o])}function v1(r,t,e){let n=this.cache,i=t.length,s=yf(e,i);an(n,s)||(r.uniform1iv(this.addr,s),ln(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||vv,s[o])}function _1(r){switch(r){case 5126:return t1;case 35664:return e1;case 35665:return n1;case 35666:return i1;case 35674:return r1;case 35675:return s1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return u1;case 5125:return h1;case 36294:return f1;case 36295:return d1;case 36296:return p1;case 35678:case 36198:case 36298:case 36306:case 35682:return m1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return v1}}var Em=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qw(e.type)}},Rm=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_1(e.type)}},Cm=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Tm=/(\w+)(\])?(\[|\.)?/g;function iv(r,t){r.seq.push(t),r.map[t.id]=t}function y1(r,t,e){let n=r.name,i=n.length;for(Tm.lastIndex=0;;){let s=Tm.exec(n),o=Tm.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){iv(e,c===void 0?new Em(a,r,t):new Rm(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new Cm(a),iv(e,f)),e=f}}}var Xo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);y1(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function rv(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var b1=37297,S1=0;function M1(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var sv=new Zt;function T1(r){re._getMatrix(sv,re.workingColorSpace,r);let t=`mat3( ${sv.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(r)){case qs:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function ov(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+M1(r.getShaderSource(t),a)}else return s}function w1(r,t){let e=T1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var A1={[ef]:"Linear",[nf]:"Reinhard",[rf]:"Cineon",[Lo]:"ACESFilmic",[of]:"AgX",[af]:"Neutral",[sf]:"Custom"};function E1(r,t){let e=A1[t];return e===void 0?(dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vf=new C;function R1(){re.getLuminanceCoefficients(vf);let r=vf.x.toFixed(4),t=vf.y.toFixed(4),e=vf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nc).join(`
`)}function I1(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P1(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Nc(r){return r!==""}function av(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var D1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Im(r){return r.replace(D1,F1)}var L1=new Map;function F1(r,t){let e=ne[t];if(e===void 0){let n=L1.get(t);if(n!==void 0)e=ne[n],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Im(e)}var N1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cv(r){return r.replace(N1,U1)}function U1(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function uv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var B1={[Io]:"SHADOWMAP_TYPE_PCF",[ns]:"SHADOWMAP_TYPE_VSM"};function O1(r){return B1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var z1={[hi]:"ENVMAP_TYPE_CUBE",[Wi]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE_UV"};function k1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":z1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var V1={[Wi]:"ENVMAP_MODE_REFRACTION"};function H1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":V1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G1={[Do]:"ENVMAP_BLENDING_MULTIPLY",[Zp]:"ENVMAP_BLENDING_MIX",[$p]:"ENVMAP_BLENDING_ADD"};function W1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":G1[r.combine]||"ENVMAP_BLENDING_NONE"}function X1(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function q1(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=O1(e),c=k1(e),h=H1(e),f=W1(e),u=X1(e),d=C1(e),m=I1(s),x=i.createProgram(),p,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Nc).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Nc).join(`
`),g.length>0&&(g+=`
`)):(p=[uv(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nc).join(`
`),g=[uv(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Nn?E1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,w1("linearToOutputTexel",e.outputColorSpace),R1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nc).join(`
`)),o=Im(o),o=av(o,e),o=lv(o,e),a=Im(a),a=av(a,e),a=lv(a,e),o=cv(o),a=cv(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let y=_+p+o,v=_+g+a,S=rv(i,i.VERTEX_SHADER,y),M=rv(i,i.FRAGMENT_SHADER,v);i.attachShader(x,S),i.attachShader(x,M),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(P){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(x)||"",F=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(M)||"",N=I.trim(),z=F.trim(),W=L.trim(),Q=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,S,M);else{let K=ov(i,S,"vertex"),j=ov(i,M,"fragment");Ft("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+K+`
`+j)}else N!==""?dt("WebGLProgram: Program Info Log:",N):(z===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:Q,programLog:N,vertexShader:{log:z,prefix:p},fragmentShader:{log:W,prefix:g}})}i.deleteShader(S),i.deleteShader(M),b=new Xo(i,x),w=P1(i,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(x,b1)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var Y1=0,Pm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Dm(t),e.set(t,n)),n}},Dm=class{constructor(t){this.id=Y1++,this.code=t,this.usedTimes=0}};function Z1(r){return r===Hn||r===Vo||r===Ho}function $1(r,t,e,n,i,s){let o=new Xr,a=new Pm,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,w,E,P,I,F){let L=P.fog,N=I.geometry,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,W=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,Q=t.get(b.envMap||z,W),X=Q&&Q.mapping===is?Q.image.height:null,K=d[b.type];b.precision!==null&&(u=n.getMaxPrecision(b.precision),u!==b.precision&&dt("WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));let j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Rt=j!==void 0?j.length:0,Tt=0;N.morphAttributes.position!==void 0&&(Tt=1),N.morphAttributes.normal!==void 0&&(Tt=2),N.morphAttributes.color!==void 0&&(Tt=3);let ce,Kt,fe,$;if(K){let De=di[K];ce=De.vertexShader,Kt=De.fragmentShader}else{ce=b.vertexShader,Kt=b.fragmentShader;let De=a.getVertexShaderStage(b),Se=a.getFragmentShaderStage(b);a.update(b,De,Se),fe=De.id,$=Se.id}let et=r.getRenderTarget(),vt=r.state.buffers.depth.getReversed(),Gt=I.isInstancedMesh===!0,At=I.isBatchedMesh===!0,Vt=!!b.map,Ae=!!b.matcap,it=!!Q,st=!!b.aoMap,ot=!!b.lightMap,at=!!b.bumpMap&&b.wireframe===!1,ft=!!b.normalMap,Wt=!!b.displacementMap,kt=!!b.emissiveMap,Yt=!!b.metalnessMap,jt=!!b.roughnessMap,U=b.anisotropy>0,be=b.clearcoat>0,oe=b.dispersion>0,D=b.retroreflectivity>0,A=b.iridescence>0,k=b.sheen>0,G=b.transmission>0,Z=U&&!!b.anisotropyMap,lt=be&&!!b.clearcoatMap,ut=be&&!!b.clearcoatNormalMap,J=be&&!!b.clearcoatRoughnessMap,nt=A&&!!b.iridescenceMap,pt=A&&!!b.iridescenceThicknessMap,Ut=k&&!!b.sheenColorMap,yt=k&&!!b.sheenRoughnessMap,mt=!!b.specularMap,Bt=!!b.specularColorMap,Xt=!!b.specularIntensityMap,Qt=G&&!!b.transmissionMap,O=G&&!!b.thicknessMap,gt=!!b.gradientMap,tt=!!b.alphaMap,xt=b.alphaTest>0,wt=!!b.alphaHash,rt=!!b.extensions,Ot=Nn;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ot=r.toneMapping);let Lt={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:ce,fragmentShader:Kt,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:At,batchingColor:At&&I._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&I.instanceColor!==null,instancingMorph:Gt&&I.morphTexture!==null,outputColorSpace:et===null?r.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Vt,matcap:Ae,envMap:it,envMapMode:it&&Q.mapping,envMapCubeUVHeight:X,aoMap:st,lightMap:ot,bumpMap:at,normalMap:ft,displacementMap:Wt,emissiveMap:kt,normalMapObjectSpace:ft&&b.normalMapType===rm,normalMapTangentSpace:ft&&b.normalMapType===Ai,packedNormalMap:ft&&b.normalMapType===Ai&&Z1(b.normalMap.format),metalnessMap:Yt,roughnessMap:jt,anisotropy:U,anisotropyMap:Z,clearcoat:be,clearcoatMap:lt,clearcoatNormalMap:ut,clearcoatRoughnessMap:J,dispersion:oe,retroreflection:D,iridescence:A,iridescenceMap:nt,iridescenceThicknessMap:pt,sheen:k,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:mt,specularColorMap:Bt,specularIntensityMap:Xt,transmission:G,transmissionMap:Qt,thicknessMap:O,gradientMap:gt,opaque:b.transparent===!1&&b.blending===ui&&b.alphaToCoverage===!1,alphaMap:tt,alphaTest:xt,alphaHash:wt,combine:b.combine,mapUv:Vt&&m(b.map.channel),aoMapUv:st&&m(b.aoMap.channel),lightMapUv:ot&&m(b.lightMap.channel),bumpMapUv:at&&m(b.bumpMap.channel),normalMapUv:ft&&m(b.normalMap.channel),displacementMapUv:Wt&&m(b.displacementMap.channel),emissiveMapUv:kt&&m(b.emissiveMap.channel),metalnessMapUv:Yt&&m(b.metalnessMap.channel),roughnessMapUv:jt&&m(b.roughnessMap.channel),anisotropyMapUv:Z&&m(b.anisotropyMap.channel),clearcoatMapUv:lt&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:yt&&m(b.sheenRoughnessMap.channel),specularMapUv:mt&&m(b.specularMap.channel),specularColorMapUv:Bt&&m(b.specularColorMap.channel),specularIntensityMapUv:Xt&&m(b.specularIntensityMap.channel),transmissionMapUv:Qt&&m(b.transmissionMap.channel),thicknessMapUv:O&&m(b.thicknessMap.channel),alphaMapUv:tt&&m(b.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ft||U),vertexNormals:!!N.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Vt||tt),fog:!!L,useFog:b.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||N.attributes.normal===void 0&&ft===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:vt,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Tt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&E.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Vt&&b.map.isVideoTexture===!0&&re.getTransfer(b.map.colorSpace)===ve,decodeVideoTextureEmissive:kt&&b.emissiveMap.isVideoTexture===!0&&re.getTransfer(b.emissiveMap.colorSpace)===ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fn,flipSided:b.side===je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:rt&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&b.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let E in b.defines)w.push(E),w.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(g(w,b),_(w,b),w.push(r.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function g(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numSunLights),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numSunLightShadows),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function y(b){let w=d[b.type],E;if(w){let P=di[w];E=gm.clone(P.uniforms)}else E=b.uniforms;return E}function v(b,w){let E=h.get(w);return E!==void 0?++E.usedTimes:(E=new q1(r,w,b,i),c.push(E),h.set(w,E)),E}function S(b){if(--b.usedTimes===0){let w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),h.delete(b.cacheKey),b.destroy()}}function M(b){a.remove(b)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:y,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:T}}function J1(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function K1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function hv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function fv(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,x,p,g){let _=r[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:g},r[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=m,_.materialVariant=o(u),_.groupOrder=x,_.renderOrder=u.renderOrder,_.z=p,_.group=g),t++,_}function l(u,d,m,x,p,g,_){_.reversedDepth===!0&&(p=-p);let y=a(u,d,m,x,p,g);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):e.push(y)}function c(u,d,m,x,p,g){let _=a(u,d,m,x,p,g);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function h(u,d){e.length>1&&e.sort(u||K1),n.length>1&&n.sort(d||hv),i.length>1&&i.sort(d||hv)}function f(){for(let u=t,d=r.length;u<d;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:h}}function j1(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new fv,r.set(n,[o])):i>=s.length?(o=new fv,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Q1(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new ct};break;case"SpotLight":e={position:new C,direction:new C,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new C,halfWidth:new C,halfHeight:new C};break}return r[t.id]=e,e}}}function tA(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var eA=0;function nA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function iA(r){let t=new Q1,e=tA(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let i=new C,s=new bt,o=new bt;function a(c){let h=0,f=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,_=0,y=0,v=0,S=0,M=0,T=0,b=0,w=0,E=0;c.sort(nA);for(let I=0,F=c.length;I<F;I++){let L=c[I],N=L.color,z=L.intensity,W=L.distance,Q=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Hn?Q=L.shadow.map.texture:Q=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=N.r*z,f+=N.g*z,u+=N.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],z);E++}else if(L.isSunLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,j=e.get(L);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=Q;let Rt=K.getViewportCount();for(let Tt=0;Tt<Rt;Tt++)n.sunShadowMatrix[x+Tt]=K.getMatrix(Tt),n.sunShadowCascade[x+Tt]=K._cascadeData[Tt];x+=Rt,m++}n.sun[d]=X,d++}else if(L.isDirectionalLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let K=L.shadow,j=e.get(L);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=L.shadow.matrix,S++}n.directional[p]=X,p++}else if(L.isSpotLight){let X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(N).multiplyScalar(z),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[_]=X;let K=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,K.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=K.matrix,L.castShadow){let j=e.get(L);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=Q,T++}_++}else if(L.isRectAreaLight){let X=t.get(L);X.color.copy(N).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[y]=X,y++}else if(L.isPointLight){let X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let K=L.shadow,j=e.get(L);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=X,g++}else if(L.isHemisphereLight){let X=t.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[v]=X,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let P=n.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==y||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==b||P.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=p,n.spot.length=_,n.rectArea.length=y,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,P.sunLength=d,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=y,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=b,P.numLightProbes=E,n.version=eA++)}function l(c,h){let f=0,u=0,d=0,m=0,x=0,p=0,g=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let v=c[_];if(v.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),f++}else if(v.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),u++}else if(v.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function dv(r){let t=new iA(r),e=[],n=[],i=[];function s(u){f.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function rA(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new dv(r),t.set(i,[a])):s>=o.length?(a=new dv(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aA=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],lA=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],pv=new bt,Fc=new C,wm=new C;function cA(r,t,e){let n=new bi,i=new Y,s=new Y,o=new se,a=new xo,l=new vo,c={},h=e.maxTextureSize,f={[Fn]:je,[je]:Fn,[fn]:fn},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:sA,fragmentShader:oA}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new It;m.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let g=this.type;this.render=function(M,T,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===Ip&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Io);let w=r.getRenderTarget(),E=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),I=r.state;I.setBlending(He),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let F=g!==this.type;F&&T.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(N=>N.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,N=M.length;L<N;L++){let z=M[L],W=z.shadow;if(W===void 0){dt("WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let Q=W.getFrameExtents();i.multiply(Q),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,W.mapSize.y=s.y));let X=r.state.buffers.depth.getReversed();if(W.camera._reversedDepth=X,W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ns){if(z.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ue(i.x,i.y,{format:Hn,type:Be,minFilter:ee,magFilter:ee,generateMipmaps:!1}),W.map.texture.name=z.name+".shadowMap",W.map.depthTexture=new ki(i.x,i.y,Jt),W.map.depthTexture.name=z.name+".shadowMapDepth",W.map.depthTexture.format=oi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ht,W.map.depthTexture.magFilter=Ht}else z.isPointLight?(W.map=new Bc(i.x),W.map.depthTexture=new tl(i.x,tn)):(W.map=new Ue(i.x,i.y),W.map.depthTexture=new ki(i.x,i.y,tn)),W.map.depthTexture.name=z.name+".shadowMap",W.map.depthTexture.format=oi,this.type===Io?(W.map.depthTexture.compareFunction=X?Pc:Ic,W.map.depthTexture.minFilter=ee,W.map.depthTexture.magFilter=ee):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ht,W.map.depthTexture.magFilter=Ht);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);let K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();z.isPointLight!==!0&&W.updateMatrices(z,b);for(let j=0;j<K;j++){let Rt=W.getCamera(j);if(z.isPointLight){let Tt=W.camera,ce=W.matrix,Kt=z.distance||Tt.far;Kt!==Tt.far&&(Tt.far=Kt,Tt.updateProjectionMatrix()),Fc.setFromMatrixPosition(z.matrixWorld),Tt.position.copy(Fc),wm.copy(Tt.position),wm.add(aA[j]),Tt.up.copy(lA[j]),Tt.lookAt(wm),Tt.updateMatrixWorld(),ce.makeTranslation(-Fc.x,-Fc.y,-Fc.z),pv.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(pv,Tt.coordinateSystem,Tt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)r.setRenderTarget(W.map,j),r.clear();else{j===0&&(r.setRenderTarget(W.map),r.clear());let Tt=W.getViewport(j);o.set(s.x*Tt.x,s.y*Tt.y,s.x*Tt.z,s.y*Tt.w),I.viewport(o)}n=W.getFrustum(j),v(T,b,Rt,z,this.type)}W.isPointLightShadow!==!0&&this.type===ns&&_(W,b),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(w,E,P)};function _(M,T){let b=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Ue(i.x,i.y,{format:Hn,type:Be}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(T,null,b,u,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(T,null,b,d,x,null)}function y(M,T,b,w){let E=null,P=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)E=P;else if(E=b.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let I=E.uuid,F=T.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let N=L[F];N===void 0&&(N=E.clone(),L[F]=N,T.addEventListener("dispose",S)),E=N}if(E.visible=T.visible,E.wireframe=T.wireframe,w===ns?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:f[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let I=r.properties.get(E);I.light=b}return E}function v(M,T,b,w,E){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===ns)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);let F=t.update(M),L=M.material;if(Array.isArray(L)){let N=F.groups;for(let z=0,W=N.length;z<W;z++){let Q=N[z],X=L[Q.materialIndex];if(X&&X.visible){let K=y(M,X,w,E);M.onBeforeShadow(r,M,T,b,F,K,Q),r.renderBufferDirect(b,null,F,K,M,Q),M.onAfterShadow(r,M,T,b,F,K,Q)}}}else if(L.visible){let N=y(M,L,w,E);M.onBeforeShadow(r,M,T,b,F,N,null),r.renderBufferDirect(b,null,F,N,M,null),M.onAfterShadow(r,M,T,b,F,N,null)}}let I=M.children;for(let F=0,L=I.length;F<L;F++)v(I[F],T,b,w,E)}function S(M){M.target.removeEventListener("dispose",S);for(let b in c){let w=c[b],E=M.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}function uA(r,t){function e(){let O=!1,gt=new se,tt=null,xt=new se(0,0,0,0);return{setMask:function(wt){tt!==wt&&!O&&(r.colorMask(wt,wt,wt,wt),tt=wt)},setLocked:function(wt){O=wt},setClear:function(wt,rt,Ot,Lt,De){De===!0&&(wt*=Lt,rt*=Lt,Ot*=Lt),gt.set(wt,rt,Ot,Lt),xt.equals(gt)===!1&&(r.clearColor(wt,rt,Ot,Lt),xt.copy(gt))},reset:function(){O=!1,tt=null,xt.set(-1,0,0,0)}}}function n(){let O=!1,gt=!1,tt=null,xt=null,wt=null;return{setReversed:function(rt){if(gt!==rt){let Ot=t.get("EXT_clip_control");rt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),gt=rt;let Lt=wt;wt=null,this.setClear(Lt)}},getReversed:function(){return gt},setTest:function(rt){rt?et(r.DEPTH_TEST):vt(r.DEPTH_TEST)},setMask:function(rt){tt!==rt&&!O&&(r.depthMask(rt),tt=rt)},setFunc:function(rt){if(gt&&(rt=Ux[rt]),xt!==rt){switch(rt){case La:r.depthFunc(r.NEVER);break;case Fa:r.depthFunc(r.ALWAYS);break;case Na:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case Ua:r.depthFunc(r.EQUAL);break;case Ba:r.depthFunc(r.GEQUAL);break;case Oa:r.depthFunc(r.GREATER);break;case za:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xt=rt}},setLocked:function(rt){O=rt},setClear:function(rt){wt!==rt&&(wt=rt,gt&&(rt=1-rt),r.clearDepth(rt))},reset:function(){O=!1,tt=null,xt=null,wt=null,gt=!1}}}function i(){let O=!1,gt=null,tt=null,xt=null,wt=null,rt=null,Ot=null,Lt=null,De=null;return{setTest:function(Se){O||(Se?et(r.STENCIL_TEST):vt(r.STENCIL_TEST))},setMask:function(Se){gt!==Se&&!O&&(r.stencilMask(Se),gt=Se)},setFunc:function(Se,Qn,gi){(tt!==Se||xt!==Qn||wt!==gi)&&(r.stencilFunc(Se,Qn,gi),tt=Se,xt=Qn,wt=gi)},setOp:function(Se,Qn,gi){(rt!==Se||Ot!==Qn||Lt!==gi)&&(r.stencilOp(Se,Qn,gi),rt=Se,Ot=Qn,Lt=gi)},setLocked:function(Se){O=Se},setClear:function(Se){De!==Se&&(r.clearStencil(Se),De=Se)},reset:function(){O=!1,gt=null,tt=null,xt=null,wt=null,rt=null,Ot=null,Lt=null,De=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],x=null,p=!1,g=null,_=null,y=null,v=null,S=null,M=null,T=null,b=new ct(0,0,0),w=0,E=!1,P=null,I=null,F=null,L=null,N=null,z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Q=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=Q>=2);let K=null,j={},Rt=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),ce=new se().fromArray(Rt),Kt=new se().fromArray(Tt);function fe(O,gt,tt,xt){let wt=new Uint8Array(4),rt=r.createTexture();r.bindTexture(O,rt),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<tt;Ot++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(gt,0,r.RGBA,1,1,xt,0,r.RGBA,r.UNSIGNED_BYTE,wt):r.texImage2D(gt+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,wt);return rt}let $={};$[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(r.DEPTH_TEST),o.setFunc(Hr),at(!1),ft(Jh),et(r.CULL_FACE),st(He);function et(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function vt(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function Gt(O,gt){return u[O]!==gt?(r.bindFramebuffer(O,gt),u[O]=gt,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=gt),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=gt),!0):!1}function At(O,gt){let tt=m,xt=!1;if(O){tt=d.get(gt),tt===void 0&&(tt=[],d.set(gt,tt));let wt=O.textures;if(tt.length!==wt.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let rt=0,Ot=wt.length;rt<Ot;rt++)tt[rt]=r.COLOR_ATTACHMENT0+rt;tt.length=wt.length,xt=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,xt=!0);xt&&r.drawBuffers(tt)}function Vt(O){return x!==O?(r.useProgram(O),x=O,!0):!1}let Ae={[_r]:r.FUNC_ADD,[Pp]:r.FUNC_SUBTRACT,[Dp]:r.FUNC_REVERSE_SUBTRACT};Ae[Lp]=r.MIN,Ae[Fp]=r.MAX;let it={[Np]:r.ZERO,[Up]:r.ONE,[Bp]:r.SRC_COLOR,[Qh]:r.SRC_ALPHA,[Gp]:r.SRC_ALPHA_SATURATE,[Vp]:r.DST_COLOR,[zp]:r.DST_ALPHA,[Op]:r.ONE_MINUS_SRC_COLOR,[tf]:r.ONE_MINUS_SRC_ALPHA,[Hp]:r.ONE_MINUS_DST_COLOR,[kp]:r.ONE_MINUS_DST_ALPHA,[Wp]:r.CONSTANT_COLOR,[Xp]:r.ONE_MINUS_CONSTANT_COLOR,[qp]:r.CONSTANT_ALPHA,[Yp]:r.ONE_MINUS_CONSTANT_ALPHA};function st(O,gt,tt,xt,wt,rt,Ot,Lt,De,Se){if(O===He){p===!0&&(vt(r.BLEND),p=!1);return}if(p===!1&&(et(r.BLEND),p=!0),O!==$l){if(O!==g||Se!==E){if((_!==_r||S!==_r)&&(r.blendEquation(r.FUNC_ADD),_=_r,S=_r),Se)switch(O){case ui:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Po:r.blendFunc(r.ONE,r.ONE);break;case Kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ft("WebGLState: Invalid blending: ",O);break}else switch(O){case ui:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Po:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kh:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jh:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",O);break}y=null,v=null,M=null,T=null,b.set(0,0,0),w=0,g=O,E=Se}return}wt=wt||gt,rt=rt||tt,Ot=Ot||xt,(gt!==_||wt!==S)&&(r.blendEquationSeparate(Ae[gt],Ae[wt]),_=gt,S=wt),(tt!==y||xt!==v||rt!==M||Ot!==T)&&(r.blendFuncSeparate(it[tt],it[xt],it[rt],it[Ot]),y=tt,v=xt,M=rt,T=Ot),(Lt.equals(b)===!1||De!==w)&&(r.blendColor(Lt.r,Lt.g,Lt.b,De),b.copy(Lt),w=De),g=O,E=!1}function ot(O,gt){O.side===fn?vt(r.CULL_FACE):et(r.CULL_FACE);let tt=O.side===je;gt&&(tt=!tt),at(tt),O.blending===ui&&O.transparent===!1?st(He):st(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let xt=O.stencilWrite;a.setTest(xt),xt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),kt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?et(r.SAMPLE_ALPHA_TO_COVERAGE):vt(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(O){P!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),P=O)}function ft(O){O!==Rp?(et(r.CULL_FACE),O!==I&&(O===Jh?r.cullFace(r.BACK):O===Cp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):vt(r.CULL_FACE),I=O}function Wt(O){O!==F&&(W&&r.lineWidth(O),F=O)}function kt(O,gt,tt){O?(et(r.POLYGON_OFFSET_FILL),(L!==gt||N!==tt)&&(L=gt,N=tt,o.getReversed()&&(gt=-gt),r.polygonOffset(gt,tt))):vt(r.POLYGON_OFFSET_FILL)}function Yt(O){O?et(r.SCISSOR_TEST):vt(r.SCISSOR_TEST)}function jt(O){O===void 0&&(O=r.TEXTURE0+z-1),K!==O&&(r.activeTexture(O),K=O)}function U(O,gt,tt){tt===void 0&&(K===null?tt=r.TEXTURE0+z-1:tt=K);let xt=j[tt];xt===void 0&&(xt={type:void 0,texture:void 0},j[tt]=xt),(xt.type!==O||xt.texture!==gt)&&(K!==tt&&(r.activeTexture(tt),K=tt),r.bindTexture(O,gt||$[O]),xt.type=O,xt.texture=gt)}function be(){let O=j[K];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function oe(){try{r.compressedTexImage2D(...arguments)}catch(O){Ft("WebGLState:",O)}}function D(){try{r.compressedTexImage3D(...arguments)}catch(O){Ft("WebGLState:",O)}}function A(){try{r.texSubImage2D(...arguments)}catch(O){Ft("WebGLState:",O)}}function k(){try{r.texSubImage3D(...arguments)}catch(O){Ft("WebGLState:",O)}}function G(){try{r.compressedTexSubImage2D(...arguments)}catch(O){Ft("WebGLState:",O)}}function Z(){try{r.compressedTexSubImage3D(...arguments)}catch(O){Ft("WebGLState:",O)}}function lt(){try{r.texStorage2D(...arguments)}catch(O){Ft("WebGLState:",O)}}function ut(){try{r.texStorage3D(...arguments)}catch(O){Ft("WebGLState:",O)}}function J(){try{r.texImage2D(...arguments)}catch(O){Ft("WebGLState:",O)}}function nt(){try{r.texImage3D(...arguments)}catch(O){Ft("WebGLState:",O)}}function pt(O){return f[O]!==void 0?f[O]:r.getParameter(O)}function Ut(O,gt){f[O]!==gt&&(r.pixelStorei(O,gt),f[O]=gt)}function yt(O){ce.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function mt(O){Kt.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Kt.copy(O))}function Bt(O,gt){let tt=c.get(gt);tt===void 0&&(tt=new WeakMap,c.set(gt,tt));let xt=tt.get(O);xt===void 0&&(xt=r.getUniformBlockIndex(gt,O.name),tt.set(O,xt))}function Xt(O,gt){let xt=c.get(gt).get(O);l.get(gt)!==xt&&(r.uniformBlockBinding(gt,xt,O.__bindingPointIndex),l.set(gt,xt))}function Qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},f={},K=null,j={},u={},d=new WeakMap,m=[],x=null,p=!1,g=null,_=null,y=null,v=null,S=null,M=null,T=null,b=new ct(0,0,0),w=0,E=!1,P=null,I=null,F=null,L=null,N=null,ce.set(0,0,r.canvas.width,r.canvas.height),Kt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:et,disable:vt,bindFramebuffer:Gt,drawBuffers:At,useProgram:Vt,setBlending:st,setMaterial:ot,setFlipSided:at,setCullFace:ft,setLineWidth:Wt,setPolygonOffset:kt,setScissorTest:Yt,activeTexture:jt,bindTexture:U,unbindTexture:be,compressedTexImage2D:oe,compressedTexImage3D:D,texImage2D:J,texImage3D:nt,pixelStorei:Ut,getParameter:pt,updateUBOMapping:Bt,uniformBlockBinding:Xt,texStorage2D:lt,texStorage3D:ut,texSubImage2D:A,texSubImage3D:k,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:yt,viewport:mt,reset:Qt}}function hA(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap,f=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,A){return m?new OffscreenCanvas(D,A):Ys("canvas")}function p(D,A,k){let G=1,Z=oe(D);if((Z.width>k||Z.height>k)&&(G=k/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let lt=Math.floor(G*Z.width),ut=Math.floor(G*Z.height);u===void 0&&(u=x(lt,ut));let J=A?x(lt,ut):u;return J.width=lt,J.height=ut,J.getContext("2d").drawImage(D,0,0,lt,ut),dt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+lt+"x"+ut+")."),J}else return"data"in D&&dt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),D;return D}function g(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(D,A,k,G,Z,lt=!1){if(D!==null){if(r[D]!==void 0)return r[D];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ut;G&&(ut=t.get("EXT_texture_norm16"),ut||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=A;if(A===r.RED&&(k===r.FLOAT&&(J=r.R32F),k===r.HALF_FLOAT&&(J=r.R16F),k===r.UNSIGNED_BYTE&&(J=r.R8),k===r.UNSIGNED_SHORT&&ut&&(J=ut.R16_EXT),k===r.SHORT&&ut&&(J=ut.R16_SNORM_EXT)),A===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.R8UI),k===r.UNSIGNED_SHORT&&(J=r.R16UI),k===r.UNSIGNED_INT&&(J=r.R32UI),k===r.BYTE&&(J=r.R8I),k===r.SHORT&&(J=r.R16I),k===r.INT&&(J=r.R32I)),A===r.RG&&(k===r.FLOAT&&(J=r.RG32F),k===r.HALF_FLOAT&&(J=r.RG16F),k===r.UNSIGNED_BYTE&&(J=r.RG8),k===r.UNSIGNED_SHORT&&ut&&(J=ut.RG16_EXT),k===r.SHORT&&ut&&(J=ut.RG16_SNORM_EXT)),A===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RG8UI),k===r.UNSIGNED_SHORT&&(J=r.RG16UI),k===r.UNSIGNED_INT&&(J=r.RG32UI),k===r.BYTE&&(J=r.RG8I),k===r.SHORT&&(J=r.RG16I),k===r.INT&&(J=r.RG32I)),A===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RGB8UI),k===r.UNSIGNED_SHORT&&(J=r.RGB16UI),k===r.UNSIGNED_INT&&(J=r.RGB32UI),k===r.BYTE&&(J=r.RGB8I),k===r.SHORT&&(J=r.RGB16I),k===r.INT&&(J=r.RGB32I)),A===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),k===r.UNSIGNED_INT&&(J=r.RGBA32UI),k===r.BYTE&&(J=r.RGBA8I),k===r.SHORT&&(J=r.RGBA16I),k===r.INT&&(J=r.RGBA32I)),A===r.RGB&&(k===r.UNSIGNED_SHORT&&ut&&(J=ut.RGB16_EXT),k===r.SHORT&&ut&&(J=ut.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(J=r.R11F_G11F_B10F)),A===r.RGBA){let nt=lt?qs:re.getTransfer(Z);k===r.FLOAT&&(J=r.RGBA32F),k===r.HALF_FLOAT&&(J=r.RGBA16F),k===r.UNSIGNED_BYTE&&(J=nt===ve?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&ut&&(J=ut.RGBA16_EXT),k===r.SHORT&&ut&&(J=ut.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(D,A){let k;return D?A===null||A===tn||A===os?k=r.DEPTH24_STENCIL8:A===Jt?k=r.DEPTH32F_STENCIL8:A===Xi&&(k=r.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===tn||A===os?k=r.DEPTH_COMPONENT24:A===Jt?k=r.DEPTH_COMPONENT32F:A===Xi&&(k=r.DEPTH_COMPONENT16),k}function M(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ht&&D.minFilter!==ee?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){let A=D.target;A.removeEventListener("dispose",T),w(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function b(D){let A=D.target;A.removeEventListener("dispose",b),P(A)}function w(D){let A=n.get(D);if(A.__webglInit===void 0)return;let k=D.source,G=d.get(k);if(G){let Z=G[A.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(D),Object.keys(G).length===0&&d.delete(k)}n.remove(D)}function E(D){let A=n.get(D);r.deleteTexture(A.__webglTexture);let k=D.source,G=d.get(k);delete G[A.__cacheKey],o.memory.textures--}function P(D){let A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(A.__webglFramebuffer[G]))for(let Z=0;Z<A.__webglFramebuffer[G].length;Z++)r.deleteFramebuffer(A.__webglFramebuffer[G][Z]);else r.deleteFramebuffer(A.__webglFramebuffer[G]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[G])}else{if(Array.isArray(A.__webglFramebuffer))for(let G=0;G<A.__webglFramebuffer.length;G++)r.deleteFramebuffer(A.__webglFramebuffer[G]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let G=0;G<A.__webglColorRenderbuffer.length;G++)A.__webglColorRenderbuffer[G]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[G]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let k=D.textures;for(let G=0,Z=k.length;G<Z;G++){let lt=n.get(k[G]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(k[G])}n.remove(D)}let I=0;function F(){I=0}function L(){return I}function N(D){I=D}function z(){let D=I;return D>=i.maxTextures&&dt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,D}function W(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function Q(D,A){let k=n.get(D);if(D.isVideoTexture&&U(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&k.__version!==D.version){let G=D.image;if(G===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(k,D,A);return}}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+A)}function X(D,A){let k=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){vt(k,D,A);return}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+A)}function K(D,A){let k=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){vt(k,D,A);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+A)}function j(D,A){let k=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&k.__version!==D.version){Gt(k,D,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+A)}let Rt={[Je]:r.REPEAT,[Re]:r.CLAMP_TO_EDGE,[Hs]:r.MIRRORED_REPEAT},Tt={[Ht]:r.NEAREST,[lf]:r.NEAREST_MIPMAP_NEAREST,[rs]:r.NEAREST_MIPMAP_LINEAR,[ee]:r.LINEAR,[No]:r.LINEAR_MIPMAP_NEAREST,[fi]:r.LINEAR_MIPMAP_LINEAR},ce={[om]:r.NEVER,[hm]:r.ALWAYS,[am]:r.LESS,[Ic]:r.LEQUAL,[lm]:r.EQUAL,[Pc]:r.GEQUAL,[cm]:r.GREATER,[um]:r.NOTEQUAL};function Kt(D,A){if(A.type===Jt&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ee||A.magFilter===No||A.magFilter===rs||A.magFilter===fi||A.minFilter===ee||A.minFilter===No||A.minFilter===rs||A.minFilter===fi)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Rt[A.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Rt[A.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Rt[A.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Tt[A.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Tt[A.minFilter]),A.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,ce[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ht||A.minFilter!==rs&&A.minFilter!==fi||A.type===Jt&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function fe(D,A){let k=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",T));let G=A.source,Z=d.get(G);Z===void 0&&(Z={},d.set(G,Z));let lt=W(A);if(lt!==D.__cacheKey){Z[lt]===void 0&&(Z[lt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[lt].usedTimes++;let ut=Z[D.__cacheKey];ut!==void 0&&(Z[D.__cacheKey].usedTimes--,ut.usedTimes===0&&E(A)),D.__cacheKey=lt,D.__webglTexture=Z[lt].texture}return k}function $(D,A,k){return Math.floor(Math.floor(D/k)/A)}function et(D,A,k,G){let lt=D.updateRanges;if(lt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,k,G,A.data);else{lt.sort((Ut,yt)=>Ut.start-yt.start);let ut=0;for(let Ut=1;Ut<lt.length;Ut++){let yt=lt[ut],mt=lt[Ut],Bt=yt.start+yt.count,Xt=$(mt.start,A.width,4),Qt=$(yt.start,A.width,4);mt.start<=Bt+1&&Xt===Qt&&$(mt.start+mt.count-1,A.width,4)===Xt?yt.count=Math.max(yt.count,mt.start+mt.count-yt.start):(++ut,lt[ut]=mt)}lt.length=ut+1;let J=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),pt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let Ut=0,yt=lt.length;Ut<yt;Ut++){let mt=lt[Ut],Bt=Math.floor(mt.start/4),Xt=Math.ceil(mt.count/4),Qt=Bt%A.width,O=Math.floor(Bt/A.width),gt=Xt,tt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(r.UNPACK_SKIP_ROWS,O),e.texSubImage2D(r.TEXTURE_2D,0,Qt,O,gt,tt,k,G,A.data)}D.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,J),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,pt)}}function vt(D,A,k){let G=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(G=r.TEXTURE_3D);let Z=fe(D,A),lt=A.source;e.bindTexture(G,D.__webglTexture,r.TEXTURE0+k);let ut=n.get(lt);if(lt.version!==ut.__version||Z===!0){if(e.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let tt=re.getPrimaries(re.workingColorSpace),xt=A.colorSpace===Jn?null:re.getPrimaries(A.colorSpace),wt=A.colorSpace===Jn||tt===xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment);let nt=p(A.image,!1,i.maxTextureSize);nt=be(A,nt);let pt=s.convert(A.format,A.colorSpace),Ut=s.convert(A.type),yt=v(A.internalFormat,pt,Ut,A.normalized,A.colorSpace,A.isVideoTexture);Kt(G,A);let mt,Bt=A.mipmaps,Xt=A.isVideoTexture!==!0,Qt=ut.__version===void 0||Z===!0,O=lt.dataReady,gt=M(A,nt);if(A.isDepthTexture)yt=S(A.format===Yi,A.type),Qt&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,yt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,yt,nt.width,nt.height,0,pt,Ut,null));else if(A.isDataTexture)if(Bt.length>0){Xt&&Qt&&e.texStorage2D(r.TEXTURE_2D,gt,yt,Bt[0].width,Bt[0].height);for(let tt=0,xt=Bt.length;tt<xt;tt++)mt=Bt[tt],Xt?O&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,mt.width,mt.height,pt,Ut,mt.data):e.texImage2D(r.TEXTURE_2D,tt,yt,mt.width,mt.height,0,pt,Ut,mt.data);A.generateMipmaps=!1}else Xt?(Qt&&e.texStorage2D(r.TEXTURE_2D,gt,yt,nt.width,nt.height),O&&et(A,nt,pt,Ut)):e.texImage2D(r.TEXTURE_2D,0,yt,nt.width,nt.height,0,pt,Ut,nt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Xt&&Qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,yt,Bt[0].width,Bt[0].height,nt.depth);for(let tt=0,xt=Bt.length;tt<xt;tt++)if(mt=Bt[tt],A.format!==$t)if(pt!==null)if(Xt){if(O)if(A.layerUpdates.size>0){let wt=gf(mt.width,mt.height,A.format,A.type);for(let rt of A.layerUpdates){let Ot=mt.data.subarray(rt*wt/mt.data.BYTES_PER_ELEMENT,(rt+1)*wt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,rt,mt.width,mt.height,1,pt,Ot)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,mt.width,mt.height,nt.depth,pt,mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,yt,mt.width,mt.height,nt.depth,0,mt.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,mt.width,mt.height,nt.depth,pt,Ut,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,yt,mt.width,mt.height,nt.depth,0,pt,Ut,mt.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Xt&&Qt&&e.texStorage2D(r.TEXTURE_2D,gt,yt,Bt[0].width,Bt[0].height);for(let tt=0,xt=Bt.length;tt<xt;tt++)mt=Bt[tt],A.format!==$t?pt!==null?Xt?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,yt,mt.width,mt.height,0,mt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,mt.width,mt.height,pt,Ut,mt.data):e.texImage2D(r.TEXTURE_2D,tt,yt,mt.width,mt.height,0,pt,Ut,mt.data)}else if(A.isDataArrayTexture)if(Xt){if(Qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,gt,yt,nt.width,nt.height,nt.depth),O)if(A.layerUpdates.size>0){let tt=gf(nt.width,nt.height,A.format,A.type);for(let xt of A.layerUpdates){let wt=nt.data.subarray(xt*tt/nt.data.BYTES_PER_ELEMENT,(xt+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,nt.width,nt.height,1,pt,Ut,wt)}A.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,Ut,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,yt,nt.width,nt.height,nt.depth,0,pt,Ut,nt.data);else if(A.isData3DTexture)Xt?(Qt&&e.texStorage3D(r.TEXTURE_3D,gt,yt,nt.width,nt.height,nt.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,Ut,nt.data)):e.texImage3D(r.TEXTURE_3D,0,yt,nt.width,nt.height,nt.depth,0,pt,Ut,nt.data);else if(A.isFramebufferTexture){if(Qt)if(Xt)e.texStorage2D(r.TEXTURE_2D,gt,yt,nt.width,nt.height);else{let tt=nt.width,xt=nt.height;for(let wt=0;wt<gt;wt++)e.texImage2D(r.TEXTURE_2D,wt,yt,tt,xt,0,pt,Ut,null),tt>>=1,xt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in r){let tt=r.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),f.add(A),tt.onpaint=xt=>{let wt=xt.changedElements;for(let rt of f)wt.includes(rt.image)&&(rt.needsUpdate=!0)},tt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let wt=r.RGBA,rt=r.RGBA,Ot=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,wt,rt,Ot,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Xt&&Qt){let tt=oe(Bt[0]);e.texStorage2D(r.TEXTURE_2D,gt,yt,tt.width,tt.height)}for(let tt=0,xt=Bt.length;tt<xt;tt++)mt=Bt[tt],Xt?O&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,pt,Ut,mt):e.texImage2D(r.TEXTURE_2D,tt,yt,pt,Ut,mt);A.generateMipmaps=!1}else if(Xt){if(Qt){let tt=oe(nt);e.texStorage2D(r.TEXTURE_2D,gt,yt,tt.width,tt.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,Ut,nt)}else e.texImage2D(r.TEXTURE_2D,0,yt,pt,Ut,nt);g(A)&&_(G),ut.__version=lt.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Gt(D,A,k){if(A.image.length!==6)return;let G=fe(D,A),Z=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+k);let lt=n.get(Z);if(Z.version!==lt.__version||G===!0){e.activeTexture(r.TEXTURE0+k);let ut=re.getPrimaries(re.workingColorSpace),J=A.colorSpace===Jn?null:re.getPrimaries(A.colorSpace),nt=A.colorSpace===Jn||ut===J?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let pt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ut=A.image[0]&&A.image[0].isDataTexture,yt=[];for(let rt=0;rt<6;rt++)!pt&&!Ut?yt[rt]=p(A.image[rt],!0,i.maxCubemapSize):yt[rt]=Ut?A.image[rt].image:A.image[rt],yt[rt]=be(A,yt[rt]);let mt=yt[0],Bt=s.convert(A.format,A.colorSpace),Xt=s.convert(A.type),Qt=v(A.internalFormat,Bt,Xt,A.normalized,A.colorSpace),O=A.isVideoTexture!==!0,gt=lt.__version===void 0||G===!0,tt=Z.dataReady,xt=M(A,mt);Kt(r.TEXTURE_CUBE_MAP,A);let wt;if(pt){O&&gt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Qt,mt.width,mt.height);for(let rt=0;rt<6;rt++){wt=yt[rt].mipmaps;for(let Ot=0;Ot<wt.length;Ot++){let Lt=wt[Ot];A.format!==$t?Bt!==null?O?tt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Lt.width,Lt.height,Bt,Lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Qt,Lt.width,Lt.height,0,Lt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Lt.width,Lt.height,Bt,Xt,Lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Qt,Lt.width,Lt.height,0,Bt,Xt,Lt.data)}}}else{if(wt=A.mipmaps,O&&gt){wt.length>0&&xt++;let rt=oe(yt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Qt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ut){O?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,yt[rt].width,yt[rt].height,Bt,Xt,yt[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,yt[rt].width,yt[rt].height,0,Bt,Xt,yt[rt].data);for(let Ot=0;Ot<wt.length;Ot++){let De=wt[Ot].image[rt].image;O?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,De.width,De.height,Bt,Xt,De.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Qt,De.width,De.height,0,Bt,Xt,De.data)}}else{O?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Bt,Xt,yt[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,Bt,Xt,yt[rt]);for(let Ot=0;Ot<wt.length;Ot++){let Lt=wt[Ot];O?tt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,Bt,Xt,Lt.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Qt,Bt,Xt,Lt.image[rt])}}}g(A)&&_(r.TEXTURE_CUBE_MAP),lt.__version=Z.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function At(D,A,k,G,Z,lt){let ut=s.convert(k.format,k.colorSpace),J=s.convert(k.type),nt=v(k.internalFormat,ut,J,k.normalized,k.colorSpace),pt=n.get(A),Ut=n.get(k);if(Ut.__renderTarget=A,!pt.__hasExternalTextures){let yt=Math.max(1,A.width>>lt),mt=Math.max(1,A.height>>lt);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,lt,nt,yt,mt,A.depth,0,ut,J,null):e.texImage2D(Z,lt,nt,yt,mt,0,ut,J,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),jt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,Z,Ut.__webglTexture,0,Yt(A)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,Z,Ut.__webglTexture,lt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(D,A,k){if(r.bindRenderbuffer(r.RENDERBUFFER,D),A.depthBuffer){let G=A.depthTexture,Z=G&&G.isDepthTexture?G.type:null,lt=S(A.stencilBuffer,Z),ut=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;jt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt(A),lt,A.width,A.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt(A),lt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,lt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,D)}else{let G=A.textures;for(let Z=0;Z<G.length;Z++){let lt=G[Z],ut=s.convert(lt.format,lt.colorSpace),J=s.convert(lt.type),nt=v(lt.internalFormat,ut,J,lt.normalized,lt.colorSpace);jt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt(A),nt,A.width,A.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt(A),nt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,nt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(D,A,k){let G=A.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(A.depthTexture);if(Z.__renderTarget=A,(!Z.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,A.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Kt(r.TEXTURE_CUBE_MAP,A.depthTexture);let pt=s.convert(A.depthTexture.format),Ut=s.convert(A.depthTexture.type),yt;A.depthTexture.format===oi?yt=r.DEPTH_COMPONENT24:A.depthTexture.format===Yi&&(yt=r.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,yt,A.width,A.height,0,pt,Ut,null)}}else Q(A.depthTexture,0);let lt=Z.__webglTexture,ut=Yt(A),J=G?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,nt=A.depthTexture.format===Yi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===oi)jt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,J,lt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,nt,J,lt,0);else if(A.depthTexture.format===Yi)jt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,J,lt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,nt,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(D){let A=n.get(D),k=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){let G=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),G){let Z=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),A.__depthDisposeCallback=Z}A.__boundDepthTexture=G}if(D.depthTexture&&!A.__autoAllocateDepthBuffer)if(k)for(let G=0;G<6;G++)Ae(A.__webglFramebuffer[G],D,G);else{let G=D.texture.mipmaps;G&&G.length>0?Ae(A.__webglFramebuffer[0],D,0):Ae(A.__webglFramebuffer,D,0)}else if(k){A.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[G]),A.__webglDepthbuffer[G]===void 0)A.__webglDepthbuffer[G]=r.createRenderbuffer(),Vt(A.__webglDepthbuffer[G],D,!1);else{let Z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=A.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,lt)}}else{let G=D.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Vt(A.__webglDepthbuffer,D,!1);else{let Z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,lt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(D,A,k){let G=n.get(D);A!==void 0&&At(G.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&it(D)}function ot(D){let A=D.texture,k=n.get(D),G=n.get(A);D.addEventListener("dispose",b);let Z=D.textures,lt=D.isWebGLCubeRenderTarget===!0,ut=Z.length>1;if(ut||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=A.version,o.memory.textures++),lt){k.__webglFramebuffer=[];for(let J=0;J<6;J++)if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[J]=[];for(let nt=0;nt<A.mipmaps.length;nt++)k.__webglFramebuffer[J][nt]=r.createFramebuffer()}else k.__webglFramebuffer[J]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let J=0;J<A.mipmaps.length;J++)k.__webglFramebuffer[J]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ut)for(let J=0,nt=Z.length;J<nt;J++){let pt=n.get(Z[J]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&jt(D)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let nt=Z[J];k.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[J]);let pt=s.convert(nt.format,nt.colorSpace),Ut=s.convert(nt.type),yt=v(nt.internalFormat,pt,Ut,nt.normalized,nt.colorSpace,D.isXRRenderTarget===!0),mt=Yt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,yt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,k.__webglColorRenderbuffer[J])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(k.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),Kt(r.TEXTURE_CUBE_MAP,A);for(let J=0;J<6;J++)if(A.mipmaps&&A.mipmaps.length>0)for(let nt=0;nt<A.mipmaps.length;nt++)At(k.__webglFramebuffer[J][nt],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt);else At(k.__webglFramebuffer[J],D,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(A)&&_(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let J=0,nt=Z.length;J<nt;J++){let pt=Z[J],Ut=n.get(pt),yt=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(yt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ut.__webglTexture),Kt(yt,pt),At(k.__webglFramebuffer,D,pt,r.COLOR_ATTACHMENT0+J,yt,0),g(pt)&&_(yt)}e.unbindTexture()}else{let J=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(J=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(J,G.__webglTexture),Kt(J,A),A.mipmaps&&A.mipmaps.length>0)for(let nt=0;nt<A.mipmaps.length;nt++)At(k.__webglFramebuffer[nt],D,A,r.COLOR_ATTACHMENT0,J,nt);else At(k.__webglFramebuffer,D,A,r.COLOR_ATTACHMENT0,J,0);g(A)&&_(J),e.unbindTexture()}D.depthBuffer&&it(D)}function at(D){let A=D.textures;for(let k=0,G=A.length;k<G;k++){let Z=A[k];if(g(Z)){let lt=y(D),ut=n.get(Z).__webglTexture;e.bindTexture(lt,ut),_(lt),e.unbindTexture()}}}let ft=[],Wt=[];function kt(D){if(D.samples>0){if(jt(D)===!1){let A=D.textures,k=D.width,G=D.height,Z=r.COLOR_BUFFER_BIT,lt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=n.get(D),J=A.length>1;if(J)for(let pt=0;pt<A.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let nt=D.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let pt=0;pt<A.length;pt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),J){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let Ut=n.get(A[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ut,0)}r.blitFramebuffer(0,0,k,G,0,0,k,G,Z,r.NEAREST),l===!0&&(ft.length=0,Wt.length=0,ft.push(r.COLOR_ATTACHMENT0+pt),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(ft.push(lt),Wt.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),J)for(let pt=0;pt<A.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let Ut=n.get(A[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Ut,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let A=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function Yt(D){return Math.min(i.maxSamples,D.samples)}function jt(D){let A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function U(D){let A=o.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function be(D,A){let k=D.colorSpace,G=D.format,Z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||k!==Xs&&k!==Jn&&(re.getTransfer(k)===ve?(G!==$t||Z!==Qe)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",k)),A}function oe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=st,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=At,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bv(r,t){function e(n,i=Jn){let s,o=re.getTransfer(i);if(n===Qe)return r.UNSIGNED_BYTE;if(n===Kl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===jl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===uf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===hf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===ss)return r.BYTE;if(n===Uo)return r.SHORT;if(n===Xi)return r.UNSIGNED_SHORT;if(n===qi)return r.INT;if(n===tn)return r.UNSIGNED_INT;if(n===Jt)return r.FLOAT;if(n===Be)return r.HALF_FLOAT;if(n===ff)return r.ALPHA;if(n===df)return r.RGB;if(n===$t)return r.RGBA;if(n===oi)return r.DEPTH_COMPONENT;if(n===Yi)return r.DEPTH_STENCIL;if(n===$n)return r.RED;if(n===yr)return r.RED_INTEGER;if(n===Hn)return r.RG;if(n===Zi)return r.RG_INTEGER;if(n===$i)return r.RGBA_INTEGER;if(n===Bo||n===Oo||n===zo||n===ko)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===tc||n===ec||n===nc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===rc||n===sc||n===oc||n===ac||n===Vo||n===lc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ic||n===rc)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===sc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return s.COMPRESSED_R11_EAC;if(n===ac)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Vo)return s.COMPRESSED_RG11_EAC;if(n===lc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===vc||n===_c||n===yc||n===bc||n===Sc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===Tc||n===wc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Mc)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Ec||n===Ho||n===Rc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ac)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var fA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ze({vertexShader:fA,fragmentShader:dA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fm=class extends Pn{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null,x=typeof XRWebGLBinding<"u",p=new Lm,g={},_=e.getContextAttributes(),y=null,v=null,S=[],M=[],T=new Y,b=null,w=null,E=new Fe;E.viewport=new se;let P=new Fe;P.viewport=new se;let I=[E,P],F=new Gl,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=S[$];return et===void 0&&(et=new qr,S[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=S[$];return et===void 0&&(et=new qr,S[$]=et),et.getGripSpace()},this.getHand=function($){let et=S[$];return et===void 0&&(et=new qr,S[$]=et),et.getHandSpace()};function z($){let et=M.indexOf($.inputSource);if(et===-1)return;let vt=S[et];vt!==void 0&&(vt.update($.inputSource,$.frame,c||o),vt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Q);for(let $=0;$<S.length;$++){let et=M[$];et!==null&&(M[$]=null,S[$].disconnect(et))}L=null,N=null,p.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(y),d=null,u=null,f=null,i=null,v=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Q),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Gt=null,At=null;_.depth&&(At=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=_.stencil?Yi:oi,Gt=_.stencil?os:tn);let Vt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Vt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Ue(u.textureWidth,u.textureHeight,{format:$t,type:Qe,depthTexture:new ki(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ue(d.framebufferWidth,d.framebufferHeight,{format:$t,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q($){for(let et=0;et<$.removed.length;et++){let vt=$.removed[et],Gt=M.indexOf(vt);Gt>=0&&(M[Gt]=null,S[Gt].disconnect(vt))}for(let et=0;et<$.added.length;et++){let vt=$.added[et],Gt=M.indexOf(vt);if(Gt===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=M.length){M.push(vt),Gt=Vt;break}else if(M[Vt]===null){M[Vt]=vt,Gt=Vt;break}if(Gt===-1)break}let At=S[Gt];At&&At.connect(vt)}}let X=new C,K=new C;function j($,et,vt){X.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(vt.matrixWorld);let Gt=X.distanceTo(K),At=et.projectionMatrix.elements,Vt=vt.projectionMatrix.elements,Ae=At[14]/(At[10]-1),it=At[14]/(At[10]+1),st=(At[9]+1)/At[5],ot=(At[9]-1)/At[5],at=(At[8]-1)/At[0],ft=(Vt[8]+1)/Vt[0],Wt=Ae*at,kt=Ae*ft,Yt=Gt/(-at+ft),jt=Yt*-at;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(jt),$.translateZ(Yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let U=Ae+Yt,be=it+Yt,oe=Wt-jt,D=kt+(Gt-jt),A=st*it/be*U,k=ot*it/be*U;$.projectionMatrix.makePerspective(oe,D,A,k,U,be),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Rt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let et=$.near,vt=$.far;p.texture!==null&&(p.depthNear>0&&(et=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),F.near=P.near=E.near=et,F.far=P.far=E.far=vt,(L!==F.near||N!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,N=F.far),F.layers.mask=$.layers.mask|6,E.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let Gt=$.parent,At=F.cameras;Rt(F,Gt);for(let Vt=0;Vt<At.length;Vt++)Rt(At[Vt],Gt);At.length===2?j(F,E,P):F.projectionMatrix.copy(E.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),Tt($,F,Gt)};function Tt($,et,vt){vt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(vt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function($){return g[$]};let ce=null;function Kt($,et){if(h=et.getViewerPose(c||o),m=et,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Gt=!1;vt.length!==F.cameras.length&&(F.cameras.length=0,Gt=!0);for(let it=0;it<vt.length;it++){let st=vt[it],ot=null;if(d!==null)ot=d.getViewport(st);else{let ft=f.getViewSubImage(u,st);ot=ft.viewport,it===0&&(t.setRenderTargetTextures(v,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(v))}let at=I[it];at===void 0&&(at=new Fe,at.layers.enable(it),at.viewport=new se,I[it]=at),at.matrix.fromArray(st.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(st.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ot.x,ot.y,ot.width,ot.height),it===0&&(F.matrix.copy(at.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Gt===!0&&F.cameras.push(at)}let At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let it=f.getDepthInformation(vt[0]);it&&it.isValid&&it.texture&&p.init(it,i.renderState)}if(At&&At.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let it=0;it<vt.length;it++){let st=vt[it].camera;if(st){let ot=g[st];ot||(ot=new io,g[st]=ot);let at=f.getCameraImage(st);ot.sourceTexture=at}}}}for(let vt=0;vt<S.length;vt++){let Gt=M[vt],At=S[vt];Gt!==null&&At!==void 0&&At.update(Gt,et,c||o)}ce&&ce($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let fe=new mv;fe.setAnimationLoop(Kt),this.setAnimationLoop=function($){ce=$},this.dispose=function(){}}},pA=new bt,Sv=new Zt;Sv.set(-1,0,0,0,1,0,0,0,1);function mA(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,mm(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,_,y,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),f(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,v)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),x(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===je&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===je&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let _=t.get(g),y=_.envMap,v=_.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Sv),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=y*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===je&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){let _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gA(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let M=S.program;n.uniformBlockBinding(v,M)}function c(v,S){let M=i[v.id];M===void 0&&(p(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",_));let T=S.program;n.updateUBOMapping(v,T);let b=t.render.frame;s[v.id]!==b&&(u(v),s[v.id]=b)}function h(v){let S=f();v.__bindingPointIndex=S;let M=r.createBuffer(),T=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,T,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,M),M}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=i[v.id],M=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let b=0,w=M.length;b<w;b++){let E=M[b];if(Array.isArray(E))for(let P=0,I=E.length;P<I;P++)d(E[P],b,P,T);else d(E,b,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,S,M,T){if(x(v,S,M,T)===!0){let b=v.__offset,w=v.value;if(Array.isArray(w)){let E=0;for(let P=0;P<w.length;P++){let I=w[P],F=g(I);m(I,v.__data,E),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(E+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,v.__data)}}function m(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function x(v,S,M,T){let b=v.value,w=S+"_"+M;if(T[w]===void 0)return typeof b=="number"||typeof b=="boolean"?T[w]=b:ArrayBuffer.isView(b)?T[w]=b.slice():T[w]=b.clone(),!0;{let E=T[w];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return T[w]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(E.equals(b)===!1)return E.copy(b),!0}}return!1}function p(v){let S=v.uniforms,M=0,T=16;for(let w=0,E=S.length;w<E;w++){let P=Array.isArray(S[w])?S[w]:[S[w]];for(let I=0,F=P.length;I<F;I++){let L=P[I],N=Array.isArray(L.value)?L.value:[L.value];for(let z=0,W=N.length;z<W;z++){let Q=N[z],X=g(Q),K=M%T,j=K%X.boundary,Rt=K+j;M+=j,Rt!==0&&T-Rt<X.storage&&(M+=T-Rt),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=X.storage}}}let b=M%T;return b>0&&(M+=T-b),v.__size=M,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",v),S}function _(v){let S=v.target;S.removeEventListener("dispose",_);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function y(){for(let v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:y}}var xA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function vA(){return Ei===null&&(Ei=new ue(xA,16,16,Hn,Be),Ei.name="DFG_LUT",Ei.minFilter=ee,Ei.magFilter=ee,Ei.wrapS=Re,Ei.wrapT=Re,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var Oc=class{constructor(t={}){let{canvas:e=fm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Qe}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,p=new Set([$i,Zi,yr]),g=new Set([Qe,tn,Xi,os,Kl,jl]),_=new Uint32Array(4),y=new Int32Array(4),v=new C,S=null,M=null,T=[],b=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,P=!1,I=null,F=null,L=null,N=null;this._outputColorSpace=rn;let z=0,W=0,Q=null,X=-1,K=null,j=new se,Rt=new se,Tt=null,ce=new ct(0),Kt=0,fe=e.width,$=e.height,et=1,vt=null,Gt=null,At=new se(0,0,fe,$),Vt=new se(0,0,fe,$),Ae=!1,it=new bi,st=!1,ot=!1,at=new bt,ft=new C,Wt=new se,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function jt(){return Q===null?et:1}let U=n;function be(R,B){return e.getContext(R,B)}let oe,D,A,k,G,Z,lt,ut,J,nt,pt,Ut,yt,mt,Bt,Xt,Qt,O,gt,tt,xt,wt,rt;try{let R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",Qn,!1),U===null){let B="webgl2";if(U=be(B,R),U===null)throw be(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(R){throw e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Qn,!1),Ft("WebGLRenderer: "+R.message),R}function Ot(){oe=new Aw(U),oe.init(),xt=new bv(U,oe),D=new gw(U,oe,t,xt),A=new uA(U,oe),D.reversedDepthBuffer&&u&&A.buffers.depth.setReversed(!0),F=U.createFramebuffer(),L=U.createFramebuffer(),N=U.createFramebuffer(),k=new Cw(U),G=new J1,Z=new hA(U,oe,A,G,D,xt,k),lt=new ww(E),ut=new PS(U),wt=new pw(U,ut),J=new Ew(U,ut,k,wt),nt=new Pw(U,J,ut,wt,k),O=new Iw(U,D,Z),Bt=new xw(G),pt=new $1(E,lt,oe,D,wt,Bt),Ut=new mA(E,G),yt=new j1,mt=new rA(oe),Qt=new dw(E,lt,A,nt,m,l),Xt=new cA(E,nt,D),rt=new gA(U,k,D,A),gt=new mw(U,oe,k),tt=new Rw(U,oe,k),k.programs=pt.programs,E.capabilities=D,E.extensions=oe,E.properties=G,E.renderLists=yt,E.shadowMap=Xt,E.state=A,E.info=k}x!==Qe&&(w=new Lw(x,e.width,e.height,a,i,s));let Lt=new Fm(E,U);this.xr=Lt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(R){R!==void 0&&(et=R,this.setSize(fe,$,!1))},this.getSize=function(R){return R.set(fe,$)},this.setSize=function(R,B,q=!0){if(Lt.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=R,$=B,e.width=Math.floor(R*et),e.height=Math.floor(B*et),q===!0&&(e.style.width=R+"px",e.style.height=B+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,R,B)},this.getDrawingBufferSize=function(R){return R.set(fe*et,$*et).floor()},this.setDrawingBufferSize=function(R,B,q){fe=R,$=B,et=q,e.width=Math.floor(R*q),e.height=Math.floor(B*q),this.setViewport(0,0,R,B)},this.setEffects=function(R){if(x===Qe){Ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let B=0;B<R.length;B++)if(R[B].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(j)},this.getViewport=function(R){return R.copy(At)},this.setViewport=function(R,B,q,V){R.isVector4?At.set(R.x,R.y,R.z,R.w):At.set(R,B,q,V),A.viewport(j.copy(At).multiplyScalar(et).round())},this.getScissor=function(R){return R.copy(Vt)},this.setScissor=function(R,B,q,V){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,B,q,V),A.scissor(Rt.copy(Vt).multiplyScalar(et).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(R){A.setScissorTest(Ae=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){Gt=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(R=!0,B=!0,q=!0){let V=0;if(R){let H=!1;if(Q!==null){let Mt=Q.texture.format;H=p.has(Mt)}if(H){let Mt=Q.texture.type,Ct=g.has(Mt),St=Qt.getClearColor(),Pt=Qt.getClearAlpha(),Nt=St.r,ie=St.g,ae=St.b;Ct?(_[0]=Nt,_[1]=ie,_[2]=ae,_[3]=Pt,U.clearBufferuiv(U.COLOR,0,_)):(y[0]=Nt,y[1]=ie,y[2]=ae,y[3]=Pt,U.clearBufferiv(U.COLOR,0,y))}else V|=U.COLOR_BUFFER_BIT}B&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",Qn,!1),Qt.dispose(),yt.dispose(),mt.dispose(),G.dispose(),lt.dispose(),nt.dispose(),wt.dispose(),rt.dispose(),pt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Sg),Lt.removeEventListener("sessionend",Mg),Rr.stop()};function De(R){R.preventDefault(),Zs("WebGLRenderer: Context Lost."),P=!0}function Se(){Zs("WebGLRenderer: Context Restored."),P=!1;let R=k.autoReset,B=Xt.enabled,q=Xt.autoUpdate,V=Xt.needsUpdate,H=Xt.type;Ot(),k.autoReset=R,Xt.enabled=B,Xt.autoUpdate=q,Xt.needsUpdate=V,Xt.type=H}function Qn(R){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gi(R){let B=R.target;B.removeEventListener("dispose",gi),My(B)}function My(R){Ty(R),G.remove(R)}function Ty(R){let B=G.get(R).programs;B!==void 0&&(B.forEach(function(q){pt.releaseProgram(q)}),R.isShaderMaterial&&pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,B,q,V,H,Mt){B===null&&(B=kt);let Ct=H.isMesh&&H.matrixWorld.determinantAffine()<0,St=Ey(R,B,q,V,H);A.setMaterial(V,Ct);let Pt=q.index,Nt=1;if(V.wireframe===!0){if(Pt=J.getWireframeAttribute(q),Pt===void 0)return;Nt=2}let ie=q.drawRange,ae=q.attributes.position,Dt=ie.start*Nt,Me=(ie.start+ie.count)*Nt;Mt!==null&&(Dt=Math.max(Dt,Mt.start*Nt),Me=Math.min(Me,(Mt.start+Mt.count)*Nt)),Pt!==null?(Dt=Math.max(Dt,0),Me=Math.min(Me,Pt.count)):ae!=null&&(Dt=Math.max(Dt,0),Me=Math.min(Me,ae.count));let qe=Me-Dt;if(qe<0||qe===1/0)return;wt.setup(H,V,St,q,Pt);let Ne,Ce=gt;if(Pt!==null&&(Ne=ut.get(Pt),Ce=tt,Ce.setIndex(Ne)),H.isMesh)V.wireframe===!0?(A.setLineWidth(V.wireframeLinewidth*jt()),Ce.setMode(U.LINES)):Ce.setMode(U.TRIANGLES);else if(H.isLine){let pn=V.linewidth;pn===void 0&&(pn=1),A.setLineWidth(pn*jt()),H.isLineSegments?Ce.setMode(U.LINES):H.isLineLoop?Ce.setMode(U.LINE_LOOP):Ce.setMode(U.LINE_STRIP)}else H.isPoints?Ce.setMode(U.POINTS):H.isSprite&&Ce.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Ce.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let pn=H._multiDrawStarts,Et=H._multiDrawCounts,Sn=H._multiDrawCount,pe=Pt?ut.get(Pt).bytesPerElement:1,Wn=G.get(V).currentProgram.getUniforms();for(let xi=0;xi<Sn;xi++)Wn.setValue(U,"_gl_DrawID",xi),Ce.render(pn[xi]/pe,Et[xi])}else if(H.isInstancedMesh)Ce.renderInstances(Dt,qe,H.count);else if(q.isInstancedBufferGeometry){let pn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Et=Math.min(q.instanceCount,pn);Ce.renderInstances(Dt,qe,Et)}else Ce.render(Dt,qe)};function bg(R,B,q,V){I!==null&&R.isNodeMaterial&&I.setObject(V,R),st===!0&&Bt.setState(R,q,!1),R.transparent===!0&&R.side===fn&&R.forceSinglePass===!1?(R.side=je,R.needsUpdate=!0,ru(R,B,V),R.side=Fn,R.needsUpdate=!0,ru(R,B,V),R.side=fn):ru(R,B,V)}this.compile=function(R,B,q=null){q===null&&(q=R),I!==null&&I.renderStart(R,B,q),M=mt.get(q),M.init(B),b.push(M),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),R!==q&&R.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),M.setupLights(),I!==null&&I.updateLights(M.state.lightsArray),ot=this.localClippingEnabled,st=Bt.init(this.clippingPlanes,ot),st===!0&&Bt.setGlobalState(this.clippingPlanes,B),I!==null&&Xt.render(M.state.shadowsArray,q,B);let V=new Set;return R.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Mt=H.material;if(Mt)if(Array.isArray(Mt))for(let Ct=0;Ct<Mt.length;Ct++){let St=Mt[Ct];bg(St,q,B,H),V.add(St)}else bg(Mt,q,B,H),V.add(Mt)}),M=b.pop(),I!==null&&I.renderEnd(),V},this.compileAsync=function(R,B,q=null){let V=this.compile(R,B,q);return new Promise(H=>{function Mt(){if(V.forEach(function(Ct){let Pt=G.get(Ct).currentProgram;(Pt===void 0||Pt.isReady())&&V.delete(Ct)}),V.size===0){H(R);return}setTimeout(Mt,10)}oe.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Id=null;function wy(R){Id&&Id(R)}function Sg(){Rr.stop()}function Mg(){Rr.start()}let Rr=new mv;Rr.setAnimationLoop(wy),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(R){Id=R,Lt.setAnimationLoop(R),R===null?Rr.stop():Rr.start()},Lt.addEventListener("sessionstart",Sg),Lt.addEventListener("sessionend",Mg),this.render=function(R,B){if(B!==void 0&&B.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(R,B);let q=Lt.enabled===!0&&Lt.isPresenting===!0,V=w!==null&&(Q===null||q)&&w.begin(E,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(B),B=Lt.getCamera()),R.isScene===!0&&R.onBeforeRender(E,R,B,Q),M=mt.get(R,b.length),M.init(B),M.state.textureUnits=Z.getTextureUnits(),b.push(M),at.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),it.setFromProjectionMatrix(at,In,B.reversedDepth),ot=this.localClippingEnabled,st=Bt.init(this.clippingPlanes,ot),S=yt.get(R,T.length),S.init(),T.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){let Ct=E.xr.getDepthSensingMesh();Ct!==null&&Pd(Ct,B,-1/0,E.sortObjects)}Pd(R,B,0,E.sortObjects),S.finish(),I!==null&&I.updateLights(M.state.lightsArray),E.sortObjects===!0&&S.sort(vt,Gt),Yt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Yt&&Qt.addToRenderList(S,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Bt.beginShadows();let H=M.state.shadowsArray;if(Xt.render(H,R,B),st===!0&&Bt.endShadows(),(V&&w.hasRenderPass())===!1){let Ct=S.opaque,St=S.transmissive;if(M.setupLights(),B.isArrayCamera){let Pt=B.cameras;if(St.length>0)for(let Nt=0,ie=Pt.length;Nt<ie;Nt++){let ae=Pt[Nt];wg(Ct,St,R,ae)}Yt&&Qt.render(R);for(let Nt=0,ie=Pt.length;Nt<ie;Nt++){let ae=Pt[Nt];Tg(S,R,ae,ae.viewport)}}else St.length>0&&wg(Ct,St,R,B),Yt&&Qt.render(R),Tg(S,R,B)}Q!==null&&W===0&&(Z.updateMultisampleRenderTarget(Q),Z.updateRenderTargetMipmap(Q)),V&&w.end(E),R.isScene===!0&&R.onAfterRender(E,R,B),wt.resetDefaultState(),X=-1,K=null,b.pop(),b.length>0?(M=b[b.length-1],Z.setTextureUnits(M.state.textureUnits),st===!0&&Bt.setGlobalState(E.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?S=T[T.length-1]:S=null,I!==null&&I.renderEnd()};function Pd(R,B,q,V){if(R.visible===!1)return;if(R.layers.test(B.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(B);else if(R.isLightProbeGrid)M.pushLightProbeGrid(R);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(it)){V&&Wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(at);let Ct=nt.update(R),St=R.material;St.visible&&S.push(R,Ct,St,q,Wt.z,null,B)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(it))){let Ct=nt.update(R),St=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Wt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Wt.copy(Ct.boundingSphere.center)),Wt.applyMatrix4(R.matrixWorld).applyMatrix4(at)),Array.isArray(St)){let Pt=Ct.groups;for(let Nt=0,ie=Pt.length;Nt<ie;Nt++){let ae=Pt[Nt],Dt=St[ae.materialIndex];Dt&&Dt.visible&&S.push(R,Ct,Dt,q,Wt.z,ae,B)}}else St.visible&&S.push(R,Ct,St,q,Wt.z,null,B)}}let Mt=R.children;for(let Ct=0,St=Mt.length;Ct<St;Ct++)Pd(Mt[Ct],B,q,V)}function Tg(R,B,q,V){let{opaque:H,transmissive:Mt,transparent:Ct}=R;M.setupLightsView(q),st===!0&&Bt.setGlobalState(E.clippingPlanes,q),V&&A.viewport(j.copy(V)),H.length>0&&iu(H,B,q),Mt.length>0&&iu(Mt,B,q),Ct.length>0&&iu(Ct,B,q),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function wg(R,B,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[V.id]===void 0){let Dt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[V.id]=new Ue(1,1,{generateMipmaps:!0,type:Dt?Be:Qe,minFilter:fi,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let Mt=M.state.transmissionRenderTarget[V.id],Ct=V.viewport||j;Mt.setSize(Ct.z*E.transmissionResolutionScale,Ct.w*E.transmissionResolutionScale);let St=E.getRenderTarget(),Pt=E.getActiveCubeFace(),Nt=E.getActiveMipmapLevel();E.setRenderTarget(Mt),E.getClearColor(ce),Kt=E.getClearAlpha(),Kt<1&&E.setClearColor(16777215,.5),E.clear(),Yt&&Qt.render(q);let ie=E.toneMapping;E.toneMapping=Nn;let ae=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),st===!0&&Bt.setGlobalState(E.clippingPlanes,V),iu(R,q,V),Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Me=0,qe=B.length;Me<qe;Me++){let Ne=B[Me],{object:Ce,geometry:pn,material:Et,group:Sn}=Ne;if(Et.side===fn&&Ce.layers.test(V.layers)){let pe=Et.side;Et.side=je,Et.needsUpdate=!0,Ag(Ce,q,V,pn,Et,Sn),Et.side=pe,Et.needsUpdate=!0,Dt=!0}}Dt===!0&&(Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt))}E.setRenderTarget(St,Pt,Nt),E.setClearColor(ce,Kt),ae!==void 0&&(V.viewport=ae),E.toneMapping=ie}function iu(R,B,q){let V=B.isScene===!0?B.overrideMaterial:null;for(let H=0,Mt=R.length;H<Mt;H++){let Ct=R[H],{object:St,geometry:Pt,group:Nt}=Ct,ie=Ct.material;ie.allowOverride===!0&&V!==null&&(ie=V),St.layers.test(q.layers)&&Ag(St,B,q,Pt,ie,Nt)}}function Ag(R,B,q,V,H,Mt){I!==null&&H.isNodeMaterial&&I.setObject(R,H),R.onBeforeRender(E,B,q,V,H,Mt),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(E,B,q,V,R,Mt),H.transparent===!0&&H.side===fn&&H.forceSinglePass===!1?(H.side=je,H.needsUpdate=!0,E.renderBufferDirect(q,B,V,H,R,Mt),H.side=Fn,H.needsUpdate=!0,E.renderBufferDirect(q,B,V,H,R,Mt),H.side=fn):E.renderBufferDirect(q,B,V,H,R,Mt),R.onAfterRender(E,B,q,V,H,Mt)}function ru(R,B,q){B.isScene!==!0&&(B=kt);let V=G.get(R),H=M.state.lights,Mt=M.state.shadowsArray,Ct=H.state.version,St=pt.getParameters(R,H.state,Mt,B,q,M.state.lightProbeGridArray),Pt=pt.getProgramCacheKey(St),Nt=V.programs;V.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;let ie=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;V.envMap=lt.get(R.envMap||V.environment,ie),V.envMapRotation=V.environment!==null&&R.envMap===null?B.environmentRotation:R.envMapRotation,Nt===void 0&&(R.addEventListener("dispose",gi),Nt=new Map,V.programs=Nt);let ae=Nt.get(Pt);if(ae!==void 0){if(V.currentProgram===ae&&V.lightsStateVersion===Ct)return Rg(R,St),ae}else St.uniforms=pt.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,q,St),R.onBeforeCompile(St,E),ae=pt.acquireProgram(St,Pt),Nt.set(Pt,ae),V.uniforms=St.uniforms;let Dt=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Dt.clippingPlanes=Bt.uniform),Rg(R,St),V.needsLights=Cy(R),V.lightsStateVersion=Ct,V.needsLights&&(Dt.ambientLightColor.value=H.state.ambient,Dt.lightProbe.value=H.state.probe,Dt.sunLights.value=H.state.sun,Dt.sunLightShadows.value=H.state.sunShadow,Dt.directionalLights.value=H.state.directional,Dt.directionalLightShadows.value=H.state.directionalShadow,Dt.spotLights.value=H.state.spot,Dt.spotLightShadows.value=H.state.spotShadow,Dt.rectAreaLights.value=H.state.rectArea,Dt.ltc_1.value=H.state.rectAreaLTC1,Dt.ltc_2.value=H.state.rectAreaLTC2,Dt.pointLights.value=H.state.point,Dt.pointLightShadows.value=H.state.pointShadow,Dt.hemisphereLights.value=H.state.hemi,Dt.sunShadowMatrix.value=H.state.sunShadowMatrix,Dt.sunShadowCascade.value=H.state.sunShadowCascade,Dt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Dt.spotLightMatrix.value=H.state.spotLightMatrix,Dt.spotLightMap.value=H.state.spotLightMap,Dt.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=M.state.lightProbeGridArray.length>0,V.currentProgram=ae,V.uniformsList=null,ae}function Eg(R){if(R.uniformsList===null){let B=R.currentProgram.getUniforms();R.uniformsList=Xo.seqWithValue(B.seq,R.uniforms)}return R.uniformsList}function Rg(R,B){let q=G.get(R);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Ay(R,B){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let q=0,V=R.length;q<V;q++){let H=R[q];if(H.texture!==null&&H.boundingBox.containsPoint(v))return H}return null}function Ey(R,B,q,V,H){B.isScene!==!0&&(B=kt),Z.resetTextureUnits();let Mt=B.fog,Ct=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,St=Q===null?E.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:re.workingColorSpace,Pt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Nt=lt.get(V.envMap||Ct,Pt),ie=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ae=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Dt=!!q.morphAttributes.position,Me=!!q.morphAttributes.normal,qe=!!q.morphAttributes.color,Ne=Nn;V.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ne=E.toneMapping);let Ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pn=Ce!==void 0?Ce.length:0,Et=G.get(V),Sn=M.state.lights;if(st===!0&&(ot===!0||R!==K)){let Le=R===K&&V.id===X;Bt.setState(V,R,Le)}let pe=!1;V.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Sn.state.version||Et.outputColorSpace!==St||H.isBatchedMesh&&Et.batching===!1||!H.isBatchedMesh&&Et.batching===!0||H.isBatchedMesh&&Et.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Et.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Et.instancing===!1||!H.isInstancedMesh&&Et.instancing===!0||H.isSkinnedMesh&&Et.skinning===!1||!H.isSkinnedMesh&&Et.skinning===!0||H.isInstancedMesh&&Et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Et.instancingMorph===!1&&H.morphTexture!==null||Et.envMap!==Nt||V.fog===!0&&Et.fog!==Mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Bt.numPlanes||Et.numIntersection!==Bt.numIntersection)||Et.vertexAlphas!==ie||Et.vertexTangents!==ae||Et.morphTargets!==Dt||Et.morphNormals!==Me||Et.morphColors!==qe||Et.toneMapping!==Ne||Et.morphTargetsCount!==pn||!!Et.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Et.__version=V.version);let Wn=Et.currentProgram;pe===!0&&(Wn=ru(V,B,H),I&&V.isNodeMaterial&&I.onUpdateProgram(V,Wn,Et));let xi=!1,ji=!1,vs=!1,Ee=Wn.getUniforms(),We=Et.uniforms;if(A.useProgram(Wn.program)&&(xi=!0,ji=!0,vs=!0),V.id!==X&&(X=V.id,ji=!0),Et.needsLights){let Le=Ay(M.state.lightProbeGridArray,H);Et.lightProbeGrid!==Le&&(Et.lightProbeGrid=Le,ji=!0)}if(xi||K!==R){A.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ee.setValue(U,"projectionMatrix",R.projectionMatrix),Ee.setValue(U,"viewMatrix",R.matrixWorldInverse);let tr=Ee.map.cameraPosition;tr!==void 0&&tr.setValue(U,ft.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&Ee.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ee.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,ji=!0,vs=!0)}if(Et.needsLights&&(Sn.state.sunShadowMap.length>0&&Ee.setValue(U,"sunShadowMap",Sn.state.sunShadowMap,Z),Sn.state.directionalShadowMap.length>0&&Ee.setValue(U,"directionalShadowMap",Sn.state.directionalShadowMap,Z),Sn.state.spotShadowMap.length>0&&Ee.setValue(U,"spotShadowMap",Sn.state.spotShadowMap,Z),Sn.state.pointShadowMap.length>0&&Ee.setValue(U,"pointShadowMap",Sn.state.pointShadowMap,Z)),H.isSkinnedMesh){Ee.setOptional(U,H,"bindMatrix"),Ee.setOptional(U,H,"bindMatrixInverse");let Le=H.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),Ee.setValue(U,"boneTexture",Le.boneTexture,Z))}H.isBatchedMesh&&(Ee.setOptional(U,H,"batchingTexture"),Ee.setValue(U,"batchingTexture",H._matricesTexture,Z),Ee.setOptional(U,H,"batchingIdTexture"),Ee.setValue(U,"batchingIdTexture",H._indirectTexture,Z),Ee.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(U,"batchingColorTexture",H._colorsTexture,Z));let Qi=q.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&O.update(H,q,Wn),(ji||Et.receiveShadow!==H.receiveShadow)&&(Et.receiveShadow=H.receiveShadow,Ee.setValue(U,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(We.envMapIntensity.value=B.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=vA()),ji){if(Ee.setValue(U,"toneMappingExposure",E.toneMappingExposure),Et.needsLights&&Ry(We,vs),Mt&&V.fog===!0&&Ut.refreshFogUniforms(We,Mt),Ut.refreshMaterialUniforms(We,V,et,$,M.state.transmissionRenderTarget[R.id]),Et.needsLights&&Et.lightProbeGrid){let Le=Et.lightProbeGrid;We.probesSH.value=Le.texture,We.probesMin.value.copy(Le.boundingBox.min),We.probesMax.value.copy(Le.boundingBox.max),We.probesResolution.value.copy(Le.resolution)}Xo.upload(U,Eg(Et),We,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xo.upload(U,Eg(Et),We,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ee.setValue(U,"center",H.center),Ee.setValue(U,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(U,"normalMatrix",H.normalMatrix),Ee.setValue(U,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let Le=V.uniformsGroups;for(let tr=0,_s=Le.length;tr<_s;tr++){let Ig=Le[tr];rt.update(Ig,Wn),rt.bind(Ig,Wn)}}return Wn}function Ry(R,B){R.ambientLightColor.needsUpdate=B,R.lightProbe.needsUpdate=B,R.sunLights.needsUpdate=B,R.sunLightShadows.needsUpdate=B,R.directionalLights.needsUpdate=B,R.directionalLightShadows.needsUpdate=B,R.pointLights.needsUpdate=B,R.pointLightShadows.needsUpdate=B,R.spotLights.needsUpdate=B,R.spotLightShadows.needsUpdate=B,R.rectAreaLights.needsUpdate=B,R.hemisphereLights.needsUpdate=B}function Cy(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,B,q){let V=G.get(R);V.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),G.get(R.texture).__webglTexture=B,G.get(R.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,B){let q=G.get(R);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(R,B=0,q=0){Q=R,z=B,W=q;let V=null,H=!1,Mt=!1;if(R){let St=G.get(R);if(St.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(U.FRAMEBUFFER,St.__webglFramebuffer),j.copy(R.viewport),Rt.copy(R.scissor),Tt=R.scissorTest,A.viewport(j),A.scissor(Rt),A.setScissorTest(Tt),X=-1;return}else if(St.__webglFramebuffer===void 0)Z.setupRenderTarget(R);else if(St.__hasExternalTextures)Z.rebindTextures(R,G.get(R.texture).__webglTexture,G.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ie=R.depthTexture;if(St.__boundDepthTexture!==ie){if(ie!==null&&G.has(ie)&&(R.width!==ie.image.width||R.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(R)}}let Pt=R.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Mt=!0);let Nt=G.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Nt[B])?V=Nt[B][q]:V=Nt[B],H=!0):R.samples>0&&Z.useMultisampledRTT(R)===!1?V=G.get(R).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[q]:V=Nt,j.copy(R.viewport),Rt.copy(R.scissor),Tt=R.scissorTest}else j.copy(At).multiplyScalar(et).floor(),Rt.copy(Vt).multiplyScalar(et).floor(),Tt=Ae;if(q!==0&&(V=F),A.bindFramebuffer(U.FRAMEBUFFER,V)&&A.drawBuffers(R,V),A.viewport(j),A.scissor(Rt),A.setScissorTest(Tt),H){let St=G.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,St.__webglTexture,q)}else if(Mt){let St=B;for(let Pt=0;Pt<R.textures.length;Pt++){let Nt=G.get(R.textures[Pt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Pt,Nt.__webglTexture,q,St)}}else if(R!==null&&q!==0){let St=G.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,St.__webglTexture,q)}X=-1};function Cg(R){let B=G.get(R);return(B.__readFormat!==R.format||B.__readType!==R.type)&&(B.__readFormat=R.format,B.__readType=R.type,B.__formatReadable=D.textureFormatReadable(R.format),B.__typeReadable=D.textureTypeReadable(R.type)),B}this.readRenderTargetPixels=function(R,B,q,V,H,Mt,Ct,St=0){if(!(R&&R.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=G.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){A.bindFramebuffer(U.FRAMEBUFFER,Pt);try{let Nt=R.textures[St],ie=Nt.format,ae=Nt.type;R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+St);let Dt=Cg(Nt);if(Dt.__formatReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=R.width-V&&q>=0&&q<=R.height-H&&U.readPixels(B,q,V,H,xt.convert(ie),xt.convert(ae),Mt)}finally{let Nt=Q!==null?G.get(Q).__webglFramebuffer:null;A.bindFramebuffer(U.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(R,B,q,V,H,Mt,Ct,St=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=G.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(B>=0&&B<=R.width-V&&q>=0&&q<=R.height-H){A.bindFramebuffer(U.FRAMEBUFFER,Pt);let Nt=R.textures[St],ie=Nt.format,ae=Nt.type;R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+St);let Dt=Cg(Nt);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.bufferData(U.PIXEL_PACK_BUFFER,Mt.byteLength,U.STREAM_READ),U.readPixels(B,q,V,H,xt.convert(ie),xt.convert(ae),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let qe=Q!==null?G.get(Q).__webglFramebuffer:null;A.bindFramebuffer(U.FRAMEBUFFER,qe);let Ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Nx(U,Ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Mt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Me),U.deleteSync(Ne),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,B=null,q=0){let V=Math.pow(2,-q),H=Math.floor(R.image.width*V),Mt=Math.floor(R.image.height*V),Ct=B!==null?B.x:0,St=B!==null?B.y:0;Z.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Ct,St,H,Mt),A.unbindTexture()},this.copyTextureToTexture=function(R,B,q=null,V=null,H=0,Mt=0){let Ct,St,Pt,Nt,ie,ae,Dt,Me,qe,Ne=R.isCompressedTexture?R.mipmaps[Mt]:R.image;if(q!==null)Ct=q.max.x-q.min.x,St=q.max.y-q.min.y,Pt=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,ie=q.min.y,ae=q.isBox3?q.min.z:0;else{let We=Math.pow(2,-H);Ct=Math.floor(Ne.width*We),St=Math.floor(Ne.height*We),R.isDataArrayTexture?Pt=Ne.depth:R.isData3DTexture?Pt=Math.floor(Ne.depth*We):Pt=1,Nt=0,ie=0,ae=0}V!==null?(Dt=V.x,Me=V.y,qe=V.z):(Dt=0,Me=0,qe=0);let Ce=xt.convert(B.format),pn=xt.convert(B.type),Et;B.isData3DTexture?(Z.setTexture3D(B,0),Et=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Z.setTexture2DArray(B,0),Et=U.TEXTURE_2D_ARRAY):(Z.setTexture2D(B,0),Et=U.TEXTURE_2D),A.activeTexture(U.TEXTURE0),A.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let Sn=A.getParameter(U.UNPACK_ROW_LENGTH),pe=A.getParameter(U.UNPACK_IMAGE_HEIGHT),Wn=A.getParameter(U.UNPACK_SKIP_PIXELS),xi=A.getParameter(U.UNPACK_SKIP_ROWS),ji=A.getParameter(U.UNPACK_SKIP_IMAGES);A.pixelStorei(U.UNPACK_ROW_LENGTH,Ne.width),A.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ne.height),A.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),A.pixelStorei(U.UNPACK_SKIP_ROWS,ie),A.pixelStorei(U.UNPACK_SKIP_IMAGES,ae);let vs=R.isDataArrayTexture||R.isData3DTexture,Ee=B.isDataArrayTexture||B.isData3DTexture;if(R.isDepthTexture){let We=G.get(R),Qi=G.get(B),Le=G.get(We.__renderTarget),tr=G.get(Qi.__renderTarget);A.bindFramebuffer(U.READ_FRAMEBUFFER,Le.__webglFramebuffer),A.bindFramebuffer(U.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let _s=0;_s<Pt;_s++)vs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(R).__webglTexture,H,ae+_s),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(B).__webglTexture,Mt,qe+_s)),U.blitFramebuffer(Nt,ie,Ct,St,Dt,Me,Ct,St,U.DEPTH_BUFFER_BIT,U.NEAREST);A.bindFramebuffer(U.READ_FRAMEBUFFER,null),A.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||R.isRenderTargetTexture||G.has(R)){let We=G.get(R),Qi=G.get(B);A.bindFramebuffer(U.READ_FRAMEBUFFER,L),A.bindFramebuffer(U.DRAW_FRAMEBUFFER,N);for(let Le=0;Le<Pt;Le++)vs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,We.__webglTexture,H,ae+Le):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,We.__webglTexture,H),Ee?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Qi.__webglTexture,Mt,qe+Le):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Qi.__webglTexture,Mt),H!==0?U.blitFramebuffer(Nt,ie,Ct,St,Dt,Me,Ct,St,U.COLOR_BUFFER_BIT,U.NEAREST):Ee?U.copyTexSubImage3D(Et,Mt,Dt,Me,qe+Le,Nt,ie,Ct,St):U.copyTexSubImage2D(Et,Mt,Dt,Me,Nt,ie,Ct,St);A.bindFramebuffer(U.READ_FRAMEBUFFER,null),A.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ee?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Et,Mt,Dt,Me,qe,Ct,St,Pt,Ce,pn,Ne.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,Mt,Dt,Me,qe,Ct,St,Pt,Ce,Ne.data):U.texSubImage3D(Et,Mt,Dt,Me,qe,Ct,St,Pt,Ce,pn,Ne):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Mt,Dt,Me,Ct,St,Ce,pn,Ne.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Mt,Dt,Me,Ne.width,Ne.height,Ce,Ne.data):U.texSubImage2D(U.TEXTURE_2D,Mt,Dt,Me,Ct,St,Ce,pn,Ne);A.pixelStorei(U.UNPACK_ROW_LENGTH,Sn),A.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe),A.pixelStorei(U.UNPACK_SKIP_PIXELS,Wn),A.pixelStorei(U.UNPACK_SKIP_ROWS,xi),A.pixelStorei(U.UNPACK_SKIP_IMAGES,ji),Mt===0&&B.generateMipmaps&&U.generateMipmap(Et),A.unbindTexture()},this.initRenderTarget=function(R){G.get(R).__webglFramebuffer===void 0&&Z.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Z.setTextureCube(R,0):R.isData3DTexture?Z.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Z.setTexture2DArray(R,0):Z.setTexture2D(R,0),A.unbindTexture()},this.resetState=function(){z=0,W=0,Q=null,A.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var bf=class extends on{constructor(t){super(t)}load(t,e,n,i){let s=this,o=new Ln(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){function e(c){let h=new DataView(c),f=32/8*3+32/8*3*3+16/8,u=h.getUint32(80,!0);if(80+32/8+u*f===h.byteLength)return!0;let m=[115,111,108,105,100];for(let x=0;x<5;x++)if(n(m,h,x))return!1;return!0}function n(c,h,f){for(let u=0,d=c.length;u<d;u++)if(c[u]!==h.getUint8(f+u))return!1;return!0}function i(c){let h=new DataView(c),f=h.getUint32(80,!0),u,d,m,x=!1,p,g,_,y,v;for(let P=0;P<70;P++)h.getUint32(P,!1)==1129270351&&h.getUint8(P+4)==82&&h.getUint8(P+5)==61&&(x=!0,p=new Float32Array(f*3*3),g=h.getUint8(P+6)/255,_=h.getUint8(P+7)/255,y=h.getUint8(P+8)/255,v=h.getUint8(P+9)/255);let S=84,M=50,T=new It,b=new Float32Array(f*3*3),w=new Float32Array(f*3*3),E=new ct;for(let P=0;P<f;P++){let I=S+P*M,F=h.getFloat32(I,!0),L=h.getFloat32(I+4,!0),N=h.getFloat32(I+8,!0);if(x){let z=h.getUint16(I+48,!0);(z&32768)===0?(u=(z&31)/31,d=(z>>5&31)/31,m=(z>>10&31)/31):(u=g,d=_,m=y)}for(let z=1;z<=3;z++){let W=I+z*12,Q=P*3*3+(z-1)*3;b[Q]=h.getFloat32(W,!0),b[Q+1]=h.getFloat32(W+4,!0),b[Q+2]=h.getFloat32(W+8,!0),w[Q]=F,w[Q+1]=L,w[Q+2]=N,x&&(E.setRGB(u,d,m,rn),p[Q]=E.r,p[Q+1]=E.g,p[Q+2]=E.b)}}return T.setAttribute("position",new zt(b,3)),T.setAttribute("normal",new zt(w,3)),x&&(T.setAttribute("color",new zt(p,3)),T.hasColors=!0,T.alpha=v),T}function s(c){let h=new It,f=/solid([\s\S]*?)endsolid/g,u=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/,m=0,x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+x+x+x,"g"),g=new RegExp("normal"+x+x+x,"g"),_=[],y=[],v=[],S=new C,M,T=0,b=0,w=0;for(;(M=f.exec(c))!==null;){b=w;let E=M[0],P=(M=d.exec(E))!==null?M[1]:"";for(v.push(P);(M=u.exec(E))!==null;){let L=0,N=0,z=M[0];for(;(M=g.exec(z))!==null;)S.x=parseFloat(M[1]),S.y=parseFloat(M[2]),S.z=parseFloat(M[3]),N++;for(;(M=p.exec(z))!==null;)_.push(parseFloat(M[1]),parseFloat(M[2]),parseFloat(M[3])),y.push(S.x,S.y,S.z),L++,w++;N!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),L!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}let I=b,F=w-b;h.userData.groupNames=v,h.addGroup(I,F,T),T++}return h.setAttribute("position",new ht(_,3)),h.setAttribute("normal",new ht(y,3)),h}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){let h=new Uint8Array(c.length);for(let f=0;f<c.length;f++)h[f]=c.charCodeAt(f)&255;return h.buffer||h}else return c}let l=a(t);return e(l)?i(l):s(o(t))}};function Mv(r,t=Math.PI/3){let e=r.index?r.toNonIndexed():r,n=e.attributes.position,i=n.count,s;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)s=n.array;else{s=new Float64Array(i*3);for(let v=0;v<i;v++)s[3*v+0]=n.getX(v),s[3*v+1]=n.getY(v),s[3*v+2]=n.getZ(v)}let o=Math.cos(t),a=(1+1e-10)*100,l=i/3,c=new Float64Array(l*3);for(let v=0;v<l;v++){let S=9*v,M=s[S+0],T=s[S+1],b=s[S+2],w=s[S+3],E=s[S+4],P=s[S+5],I=s[S+6],F=s[S+7],L=s[S+8],N=I-w,z=F-E,W=L-P,Q=M-w,X=T-E,K=b-P,j=z*K-W*X,Rt=W*Q-N*K,Tt=N*X-z*Q,ce=1/(Math.sqrt(j*j+Rt*Rt+Tt*Tt)||1);c[3*v+0]=j*ce,c[3*v+1]=Rt*ce,c[3*v+2]=Tt*ce}let h=new Int32Array(i),f=new Float64Array(i*3),u=1;for(;u<i*2;)u<<=1;let d=u-1,m=new Int32Array(u),x=0;for(let v=0;v<i;v++){let S=3*v,M=Math.trunc(s[S+0]*a),T=Math.trunc(s[S+1]*a),b=Math.trunc(s[S+2]*a),w=(Math.imul(M,73856093)^Math.imul(T,19349663)^Math.imul(b,83492791))&d;for(;;){let E=m[w];if(E===0){let I=3*x;f[I+0]=M,f[I+1]=T,f[I+2]=b,m[w]=x+1,h[v]=x++;break}let P=3*(E-1);if(f[P+0]===M&&f[P+1]===T&&f[P+2]===b){h[v]=E-1;break}w=w+1&d}}let p=new Int32Array(x+1);for(let v=0;v<i;v++)p[h[v]+1]++;for(let v=0;v<x;v++)p[v+1]+=p[v];let g=new Int32Array(i),_=p.slice(0,x);for(let v=0;v<l;v++){let S=3*v;g[_[h[S+0]]++]=v,g[_[h[S+1]]++]=v,g[_[h[S+2]]++]=v}let y=new Float32Array(i*3);for(let v=0;v<l;v++){let S=3*v,M=c[S+0],T=c[S+1],b=c[S+2];for(let w=0;w<3;w++){let E=S+w,P=h[E],I=0,F=0,L=0;for(let z=p[P],W=p[P+1];z<W;z++){let Q=3*g[z],X=c[Q+0],K=c[Q+1],j=c[Q+2];M*X+T*K+b*j>o&&(I+=X,F+=K,L+=j)}let N=1/(Math.sqrt(I*I+F*F+L*L)||1);y[3*E+0]=I*N,y[3*E+1]=F*N,y[3*E+2]=L*N}}return e.setAttribute("normal",new zt(y,3,!1)),e}var _A=new Ti(-1,1,1,-1,0,1),Um=class extends It{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},yA=new Um,An=class{constructor(t){this._mesh=new ge(yA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,_A)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Yo=Math.pow(2,-24),zc=Symbol("SKIP_GENERATION"),Sf={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[zc]:!1};function Ie(r,t,e){return e.min.x=t[r],e.min.y=t[r+1],e.min.z=t[r+2],e.max.x=t[r+3],e.max.y=t[r+4],e.max.z=t[r+5],e}function kc(r){let t=-1,e=-1/0;for(let n=0;n<3;n++){let i=r[n+3]-r[n];i>e&&(e=i,t=n)}return t}function Bm(r,t){t.set(r)}function Om(r,t,e){let n,i;for(let s=0;s<3;s++){let o=s+3;n=r[s],i=t[s],e[s]=n<i?n:i,n=r[o],i=t[o],e[o]=n>i?n:i}}function Vc(r,t,e){for(let n=0;n<3;n++){let i=t[r+2*n],s=t[r+2*n+1],o=i-s,a=i+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Zo(r){let t=r[3]-r[0],e=r[4]-r[1],n=r[5]-r[2];return 2*(t*e+e*n+n*t)}function he(r,t){return t[r+15]===65535}function xe(r,t){return t[r+6]}function we(r,t){return t[r+14]}function _e(r){return r+8}function ye(r,t){let e=t[r+6];return r+e*8}function br(r,t){return t[r+7]}function Mf(r,t,e,n,i){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,f=1/0,u=1/0,d=1/0,m=-1/0,x=-1/0,p=-1/0,g=r.offset||0;for(let _=(t-g)*6,y=(t+e-g)*6;_<y;_+=6){let v=r[_+0],S=r[_+1],M=v-S,T=v+S;M<s&&(s=M),T>l&&(l=T),v<f&&(f=v),v>m&&(m=v);let b=r[_+2],w=r[_+3],E=b-w,P=b+w;E<o&&(o=E),P>c&&(c=P),b<u&&(u=b),b>x&&(x=b);let I=r[_+4],F=r[_+5],L=I-F,N=I+F;L<a&&(a=L),N>h&&(h=N),I<d&&(d=I),I>p&&(p=I)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=h,i[0]=f,i[1]=u,i[2]=d,i[3]=m,i[4]=x,i[5]=p}var Ji=32,MA=(r,t)=>r.candidate-t.candidate,Sr=new Array(Ji).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Tf=new Float32Array(6);function Av(r,t,e,n,i,s){let o=-1,a=0;if(s===0)o=kc(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===1)o=kc(r),o!==-1&&(a=TA(e,n,i,o));else if(s===2){let l=Zo(r),c=1.25*i,h=e.offset||0,f=(n-h)*6,u=(n+i-h)*6;for(let d=0;d<3;d++){let m=t[d],g=(t[d+3]-m)/Ji;if(i<Ji/4){let _=[...Sr];_.length=i;let y=0;for(let S=f;S<u;S+=6,y++){let M=_[y];M.candidate=e[S+2*d],M.count=0;let{bounds:T,leftCacheBounds:b,rightCacheBounds:w}=M;for(let E=0;E<3;E++)w[E]=1/0,w[E+3]=-1/0,b[E]=1/0,b[E+3]=-1/0,T[E]=1/0,T[E+3]=-1/0;Vc(S,e,T)}_.sort(MA);let v=i;for(let S=0;S<v;S++){let M=_[S];for(;S+1<v&&_[S+1].candidate===M.candidate;)_.splice(S+1,1),v--}for(let S=f;S<u;S+=6){let M=e[S+2*d];for(let T=0;T<v;T++){let b=_[T];M>=b.candidate?Vc(S,e,b.rightCacheBounds):(Vc(S,e,b.leftCacheBounds),b.count++)}}for(let S=0;S<v;S++){let M=_[S],T=M.count,b=i-M.count,w=M.leftCacheBounds,E=M.rightCacheBounds,P=0;T!==0&&(P=Zo(w)/l);let I=0;b!==0&&(I=Zo(E)/l);let F=1+1.25*(P*T+I*b);F<c&&(o=d,c=F,a=M.candidate)}}else{for(let v=0;v<Ji;v++){let S=Sr[v];S.count=0,S.candidate=m+g+v*g;let M=S.bounds;for(let T=0;T<3;T++)M[T]=1/0,M[T+3]=-1/0}for(let v=f;v<u;v+=6){let T=~~((e[v+2*d]-m)/g);T>=Ji&&(T=Ji-1);let b=Sr[T];b.count++,Vc(v,e,b.bounds)}let _=Sr[Ji-1];Bm(_.bounds,_.rightCacheBounds);for(let v=Ji-2;v>=0;v--){let S=Sr[v],M=Sr[v+1];Om(S.bounds,M.rightCacheBounds,S.rightCacheBounds)}let y=0;for(let v=0;v<Ji-1;v++){let S=Sr[v],M=S.count,T=S.bounds,w=Sr[v+1].rightCacheBounds;M!==0&&(y===0?Bm(T,Tf):Om(T,Tf,Tf)),y+=M;let E=0,P=0;y!==0&&(E=Zo(Tf)/l);let I=i-y;I!==0&&(P=Zo(w)/l);let F=1+1.25*(E*y+P*I);F<c&&(o=d,c=F,a=S.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function TA(r,t,e,n){let i=0,s=r.offset;for(let o=t,a=t+e;o<a;o++)i+=r[(o-s)*6+n*2];return i/e}var $o=class{constructor(){this.boundingData=new Float32Array(6)}};function Ev(r,t,e,n,i,s){let o=n,a=n+i-1,l=s.pos,c=s.axis*2,h=e.offset||0;for(;;){for(;o<=a&&e[(o-h)*6+c]<l;)o++;for(;o<=a&&e[(a-h)*6+c]>=l;)a--;if(o<a){for(let f=0;f<t;f++){let u=r[o*t+f];r[o*t+f]=r[a*t+f],r[a*t+f]=u}for(let f=0;f<6;f++){let u=o-h,d=a-h,m=e[u*6+f];e[u*6+f]=e[d*6+f],e[d*6+f]=m}o++,a--}else return o}}var Rv,wf,zm,Cv,wA=Math.pow(2,32);function Af(r){return"count"in r?1:1+Af(r.left)+Af(r.right)}function Iv(r,t,e){return Rv=new Float32Array(e),wf=new Uint32Array(e),zm=new Uint16Array(e),Cv=new Uint8Array(e),km(r,t)}function km(r,t){let e=r/4,n=r/2,i="count"in t,s=t.boundingData;for(let o=0;o<6;o++)Rv[e+o]=s[o];if(i)return t.buffer?(Cv.set(new Uint8Array(t.buffer),r),r+t.buffer.byteLength):(wf[e+6]=t.offset,zm[n+14]=t.count,zm[n+15]=65535,r+32);{let{left:o,right:a,splitAxis:l}=t,c=r+32,h=km(c,o),f=r/32,d=h/32-f;if(d>wA)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return wf[e+6]=d,wf[e+7]=l,km(h,a)}}function AA(r,t,e,n,i,s){let{maxDepth:o,verbose:a,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:h,onProgress:f}=i,u=r.primitiveBuffer,d=r.primitiveBufferStride,m=new Float32Array(6),x=!1,p=new $o;return Mf(t,e,n,p.boundingData,m),_(p,e,n,m),p;function g(y){f&&f((y-s.offset)/s.count)}function _(y,v,S,M=null,T=0){!x&&T>=o&&(x=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let b=S>c;if(S<=l&&!b||T>=o)return g(v+S),y.offset=v,y.count=S,y;let w=Av(y.boundingData,M,t,v,S,h),E=w.axis===-1?-1:Ev(u,d,t,v,S,w);if(w.axis===-1||E===v||E===v+S){if(!b)return g(v+S),y.offset=v,y.count=S,y;w.axis=Math.max(0,kc(y.boundingData)),E=v+Math.max(1,Math.floor(S/2))}y.splitAxis=w.axis;let P=new $o,I=v,F=E-v;y.left=P,Mf(t,I,F,P.boundingData,m),_(P,I,F,m,T+1);let L=new $o,N=E,z=S-F;return y.right=L,Mf(t,N,z,L.boundingData,m),_(L,N,z,m,T+1),y}}function Pv(r,t){let e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=r.getRootRanges(t.range),i=n[0],s=n[n.length-1],o={offset:i.offset,count:s.offset+s.count-i.offset},a=new Float32Array(6*o.count);a.offset=o.offset,r.computePrimitiveBounds(o.offset,o.count,a),r._roots=n.map(l=>{let c=AA(r,a,l.offset,l.count,t,o),h=Af(c),f=new e(32*h);return Iv(0,c,f),f})}var Mr=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var Vm=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},me=new Vm;var Tr,Ko,Jo=[],Ef=new Mr(()=>new le);function Dv(r,t,e,n,i,s){Tr=Ef.getPrimitive(),Ko=Ef.getPrimitive(),Jo.push(Tr,Ko),me.setBuffer(r._roots[t]);let o=Hm(0,r.geometry,e,n,i,s);me.clearBuffer(),Ef.releasePrimitive(Tr),Ef.releasePrimitive(Ko),Jo.pop(),Jo.pop();let a=Jo.length;return a>0&&(Ko=Jo[a-1],Tr=Jo[a-2]),o}function Hm(r,t,e,n,i=null,s=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:c}=me,h=r*2;if(he(h,l)){let u=xe(r,c),d=we(h,l);return Ie(r,a,Tr),n(u,d,!1,o,s+r/8,Tr)}else{let E=function(I){let{uint16Array:F,uint32Array:L}=me,N=I*2;for(;!he(N,F);)I=_e(I),N=I*2;return xe(I,L)},P=function(I){let{uint16Array:F,uint32Array:L}=me,N=I*2;for(;!he(N,F);)I=ye(I,L),N=I*2;return xe(I,L)+we(N,F)},u=_e(r),d=ye(r,c),m=u,x=d,p,g,_,y;if(i&&(_=Tr,y=Ko,Ie(m,a,_),Ie(x,a,y),p=i(_),g=i(y),g<p)){m=d,x=u;let I=p;p=g,g=I,_=y}_||(_=Tr,Ie(m,a,_));let v=he(m*2,l),S=e(_,v,p,o+1,s+m/8),M;if(S===2){let I=E(m),L=P(m)-I;M=n(I,L,!0,o+1,s+m/8,_)}else M=S&&Hm(m,t,e,n,i,s,o+1);if(M)return!0;y=Ko,Ie(x,a,y);let T=he(x*2,l),b=e(y,T,g,o+1,s+x/8),w;if(b===2){let I=E(x),L=P(x)-I;w=n(I,L,!0,o+1,s+x/8,y)}else w=b&&Hm(x,t,e,n,i,s,o+1);return!!w}}var Hc=new me.constructor,Cf=new me.constructor,wr=new Mr(()=>new le),jo=new le,Qo=new le,Gm=new le,Wm=new le,Xm=!1;function Lv(r,t,e,n){if(Xm)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Xm=!0;let i=r._roots,s=t._roots,o,a=0,l=0,c=new bt().copy(e).invert();for(let h=0,f=i.length;h<f;h++){Hc.setBuffer(i[h]),l=0;let u=wr.getPrimitive();Ie(0,Hc.float32Array,u),u.applyMatrix4(c);for(let d=0,m=s.length;d<m&&(Cf.setBuffer(s[d]),o=pi(0,0,e,c,n,a,l,0,0,u),Cf.clearBuffer(),l+=s[d].byteLength/32,!o);d++);if(wr.releasePrimitive(u),Hc.clearBuffer(),a+=i[h].byteLength/32,o)break}return Xm=!1,o}function pi(r,t,e,n,i,s=0,o=0,a=0,l=0,c=null,h=!1){let f,u;h?(f=Cf,u=Hc):(f=Hc,u=Cf);let d=f.float32Array,m=f.uint32Array,x=f.uint16Array,p=u.float32Array,g=u.uint32Array,_=u.uint16Array,y=r*2,v=t*2,S=he(y,x),M=he(v,_),T=!1;if(M&&S)h?T=i(xe(t,g),we(t*2,_),xe(r,m),we(r*2,x),l,o+t/8,a,s+r/8):T=i(xe(r,m),we(r*2,x),xe(t,g),we(t*2,_),a,s+r/8,l,o+t/8);else if(M){let b=wr.getPrimitive();Ie(t,p,b),b.applyMatrix4(e);let w=_e(r),E=ye(r,m);Ie(w,d,jo),Ie(E,d,Qo);let P=b.intersectsBox(jo),I=b.intersectsBox(Qo);T=P&&pi(t,w,n,e,i,o,s,l,a+1,b,!h)||I&&pi(t,E,n,e,i,o,s,l,a+1,b,!h),wr.releasePrimitive(b)}else{let b=_e(t),w=ye(t,g);Ie(b,p,Gm),Ie(w,p,Wm);let E=c.intersectsBox(Gm),P=c.intersectsBox(Wm);if(E&&P)T=pi(r,b,e,n,i,s,o,a,l+1,c,h)||pi(r,w,e,n,i,s,o,a,l+1,c,h);else if(E)if(S)T=pi(r,b,e,n,i,s,o,a,l+1,c,h);else{let I=wr.getPrimitive();I.copy(Gm).applyMatrix4(e);let F=_e(r),L=ye(r,m);Ie(F,d,jo),Ie(L,d,Qo);let N=I.intersectsBox(jo),z=I.intersectsBox(Qo);T=N&&pi(b,F,n,e,i,o,s,l,a+1,I,!h)||z&&pi(b,L,n,e,i,o,s,l,a+1,I,!h),wr.releasePrimitive(I)}else if(P)if(S)T=pi(r,w,e,n,i,s,o,a,l+1,c,h);else{let I=wr.getPrimitive();I.copy(Wm).applyMatrix4(e);let F=_e(r),L=ye(r,m);Ie(F,d,jo),Ie(L,d,Qo);let N=I.intersectsBox(jo),z=I.intersectsBox(Qo);T=N&&pi(w,F,n,e,i,o,s,l,a+1,I,!h)||z&&pi(w,L,n,e,i,o,s,l,a+1,I,!h),wr.releasePrimitive(I)}}return T}var If=new class{constructor(){let r=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=r=s._roots[o],this.uint16Array=e=new Uint16Array(r),this.uint32Array=t=new Uint32Array(r)},this.reset=()=>{this.root=null,this.buffer=r=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!he(o,e);)s=_e(s),o=s*2;return xe(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!he(o,e);)s=ye(s,t),o=s*2;return xe(s,t)+we(o,e)};let i=(s,o,a)=>{let l=o*2,c=he(l,e);if(!s(a,c,o)&&!c){let f=_e(o),u=ye(o,t);i(s,f,a+1),i(s,u,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,l)=>{if(a){let c=l*2,h=t[l+6],f=e[c+14];return s(o,a,new Float32Array(r,l*4,6),h,f)}else{let c=br(l,t);return s(o,a,new Float32Array(r,l*4,6),c)}})}}};var Fv=new le,ta=new Float32Array(6),Pf=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Sf,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Pv(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,i){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0;for(let f=t,u=t+e;f<u;f++){this.writePrimitiveBounds(f,ta,0);let[d,m,x,p,g,_]=ta;d<s&&(s=d),p>l&&(l=p),m<o&&(o=m),g>c&&(c=g),x<a&&(a=x),_>h&&(h=_)}return n[i+0]=s,n[i+1]=o,n[i+2]=a,n[i+3]=l,n[i+4]=c,n[i+5]=h,n}computePrimitiveBounds(t,e,n){let i=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,ta,0);let[a,l,c,h,f,u]=ta,d=(a+h)/2,m=(l+f)/2,x=(c+u)/2,p=(h-a)/2,g=(f-l)/2,_=(u-c)/2,y=(s-i)*6;n[y+0]=d,n[y+1]=p+(Math.abs(d)+p)*Yo,n[y+2]=m,n[y+3]=g+(Math.abs(m)+g)*Yo,n[y+4]=x,n[y+5]=_+(Math.abs(x)+_)*Yo}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,i=e.length;n<i;n++)e[n]+=t;else{let n=this._roots;for(let i=0;i<n.length;i++){let s=n[i],o=new Uint32Array(s),a=new Uint16Array(s),l=s.byteLength/32;for(let c=0;c<l;c++){let h=8*c,f=2*h;he(f,a)&&(o[h+6]+=t)}}}}traverse(t,e=0){If.setBVH(this,e),If.traverse(t),If.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let i=t[e],s=new Uint32Array(i),o=new Uint16Array(i),a=new Float32Array(i),l=i.byteLength/32;for(let c=l-1;c>=0;c--){let h=c*8,f=h*2;if(he(f,o)){let d=xe(h,s),m=we(f,o);this.writePrimitiveRangeBounds(d,m,ta,0),a.set(ta,h)}else{let d=_e(h),m=ye(h,s);for(let x=0;x<3;x++){let p=a[d+x],g=a[d+x+3],_=a[m+x],y=a[m+x+3];a[h+x]=p<_?p:_,a[h+x+3]=g>y?g:y}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Ie(0,new Float32Array(n),Fv),t.union(Fv)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(i&&s){let f=i;i=(u,d,m,x,p)=>f(u,d,m,x,p)?!0:a(u,d,this,s,m,x,o)}else i||(s?i=(f,u,d,m)=>a(f,u,this,s,d,m,o):i=(f,u,d)=>d);let l=!1,c=0,h=this._roots;for(let f=0,u=h.length;f<u;f++){let d=h[f];if(l=Dv(this,f,n,i,e,c),l)break;c+=d.byteLength/32}return l}bvhcast(t,e,n){let{intersectsRanges:i}=n;return Lv(this,t,e,i)}};function Nv(){return typeof SharedArrayBuffer<"u"}function Gc(r){return r.index?r.index.count:r.attributes.position.count}function Ar(r){return Gc(r)/3}function qm(r,t=ArrayBuffer){return r>65535?new Uint32Array(new t(4*r)):new Uint16Array(new t(2*r))}function Uv(r,t){if(!r.index){let e=r.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=qm(e,n);r.setIndex(new zt(i,1));for(let s=0;s<e;s++)i[s]=s}}function RA(r,t,e){let n=Gc(r)/e,i=t||r.drawRange,s=i.start/e,o=(i.start+i.count)/e,a=Math.max(0,s),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function CA(r,t){return r.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Ym(r,t,e){let n=RA(r,t,e),i=CA(r,e);if(!i.length)return[n];let s=[],o=n.offset,a=n.offset+n.count,l=Gc(r)/e,c=[];for(let u of i){let{offset:d,count:m}=u,x=d,p=isFinite(m)?m:l-d,g=d+p;x<a&&g>o&&(c.push({pos:Math.max(o,x),isStart:!0}),c.push({pos:Math.min(a,g),isStart:!1}))}c.sort((u,d)=>u.pos!==d.pos?u.pos-d.pos:u.type==="end"?-1:1);let h=0,f=null;for(let u of c){let d=u.pos;h!==0&&d!==f&&s.push({offset:f,count:d-f}),h+=u.isStart?1:-1,f=d}return s}function IA(r,t){let e=r[r.length-1],n=e.offset+e.count>2**16,i=r.reduce((c,h)=>c+h.count,0),s=n?4:2,o=t?new SharedArrayBuffer(i*s):new ArrayBuffer(i*s),a=n?new Uint32Array(o):new Uint16Array(o),l=0;for(let c=0;c<r.length;c++){let{offset:h,count:f}=r[c];for(let u=0;u<f;u++)a[l+u]=h+u;l+=f}return a}var Df=class extends Pf{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Nv())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Sf,...e},e[zc]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let i=Ym(e,t.range,n),s=IA(i,t.useSharedArrayBuffer);this._indirectBuffer=s}else Uv(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new le))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Ym(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var Gn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let s=0,o=t.length;s<o;s++){let l=t[s][e];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let s=0,o=e.length;s<o;s++){let a=e[s],l=t.dot(a);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}};Gn.prototype.setFromBox=(function(){let r=new C;return function(e,n){let i=n.min,s=n.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){r.x=i.x*l+s.x*(1-l),r.y=i.y*c+s.y*(1-c),r.z=i.z*h+s.z*(1-h);let f=e.dot(r);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}})();var PA=(function(){let r=new C,t=new C,e=new C;return function(i,s,o){let a=i.start,l=r,c=s.start,h=t;e.subVectors(a,c),r.subVectors(i.end,i.start),t.subVectors(s.end,s.start);let f=e.dot(h),u=h.dot(l),d=h.dot(h),m=e.dot(l),p=l.dot(l)*d-u*u,g,_;p!==0?g=(f*u-m*d)/p:g=0,_=(f+g*u)/d,o.x=g,o.y=_}})(),Wc=(function(){let r=new Y,t=new C,e=new C;return function(i,s,o,a){PA(i,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){i.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?i.at(0,o):i.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=i.start:h=i.end;let f;c<0?f=s.start:f=s.end;let u=t,d=e;if(i.closestPointToPoint(f,!0,t),s.closestPointToPoint(h,!0,e),u.distanceToSquared(f)<=d.distanceToSquared(h)){o.copy(u),a.copy(f);return}else{o.copy(h),a.copy(d);return}}}})(),Bv=(function(){let r=new C,t=new C,e=new vn,n=new yn;return function(s,o){let{radius:a,center:l}=s,{a:c,b:h,c:f}=o;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a||(n.start=c,n.end=f,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a)||(n.start=h,n.end=f,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a))return!0;let x=o.getPlane(e);if(Math.abs(x.distanceToPoint(l))<=a){let g=x.projectPoint(l,t);if(o.containsPoint(g))return!0}return!1}})();var DA=["x","y","z"],Ki=1e-15,Ov=Ki*Ki;function Kn(r){return Math.abs(r)<Ki}var dn=class extends sn{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new C),this.satBounds=new Array(4).fill().map(()=>new Gn),this.points=[this.a,this.b,this.c],this.plane=new vn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new yn,this.needsUpdate=!0}intersectsSphere(t){return Bv(t,this)}update(){let t=this.a,e=this.b,n=this.c,i=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,i);let c=s[1],h=o[1];c.subVectors(t,e),h.setFromPoints(c,i);let f=s[2],u=o[2];f.subVectors(e,n),u.setFromPoints(f,i);let d=s[3],m=o[3];d.subVectors(n,t),m.setFromPoints(d,i);let x=c.length(),p=f.length(),g=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<Ki?p<Ki||g<Ki?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):p<Ki?g<Ki?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):g<Ki&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};dn.prototype.closestPointToSegment=(function(){let r=new C,t=new C,e=new yn;return function(i,s=null,o=null){let{start:a,end:l}=i,c=this.points,h,f=1/0;for(let u=0;u<3;u++){let d=(u+1)%3;e.start.copy(c[u]),e.end.copy(c[d]),Wc(e,i,r,t),h=r.distanceToSquared(t),h<f&&(f=h,s&&s.copy(r),o&&o.copy(t))}return this.closestPointToPoint(a,r),h=a.distanceToSquared(r),h<f&&(f=h,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(l,r),h=l.distanceToSquared(r),h<f&&(f=h,s&&s.copy(r),o&&o.copy(l)),Math.sqrt(f)}})();dn.prototype.intersectsTriangle=(function(){let r=new dn,t=new Gn,e=new Gn,n=new C,i=new C,s=new C,o=new C,a=new yn,l=new yn,c=new C,h=new Y,f=new Y;function u(y,v,S,M){let T=n;!y.isDegenerateIntoPoint&&!y.isDegenerateIntoSegment?T.copy(y.plane.normal):T.copy(v.plane.normal);let b=y.satBounds,w=y.satAxes;for(let I=1;I<4;I++){let F=b[I],L=w[I];if(t.setFromPoints(L,v.points),F.isSeparated(t)||(o.copy(T).cross(L),t.setFromPoints(o,y.points),e.setFromPoints(o,v.points),t.isSeparated(e)))return!1}let E=v.satBounds,P=v.satAxes;for(let I=1;I<4;I++){let F=E[I],L=P[I];if(t.setFromPoints(L,y.points),F.isSeparated(t)||(o.crossVectors(T,L),t.setFromPoints(o,y.points),e.setFromPoints(o,v.points),t.isSeparated(e)))return!1}return S&&(M||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),S.start.set(0,0,0),S.end.set(0,0,0)),!0}function d(y,v,S,M,T,b,w,E,P,I,F){let L=w/(w-E);I.x=M+(T-M)*L,F.start.subVectors(v,y).multiplyScalar(L).add(y),L=w/(w-P),I.y=M+(b-M)*L,F.end.subVectors(S,y).multiplyScalar(L).add(y)}function m(y,v,S,M,T,b,w,E,P,I,F){if(T>0)d(y.c,y.a,y.b,M,v,S,P,w,E,I,F);else if(b>0)d(y.b,y.a,y.c,S,v,M,E,w,P,I,F);else if(E*P>0||w!=0)d(y.a,y.b,y.c,v,S,M,w,E,P,I,F);else if(E!=0)d(y.b,y.a,y.c,S,v,M,E,w,P,I,F);else if(P!=0)d(y.c,y.a,y.b,M,v,S,P,w,E,I,F);else return!0;return!1}function x(y,v,S,M){let T=v.degenerateSegment,b=y.plane.distanceToPoint(T.start),w=y.plane.distanceToPoint(T.end);return Kn(b)?Kn(w)?u(y,v,S,M):(S&&(S.start.copy(T.start),S.end.copy(T.start)),y.containsPoint(T.start)):Kn(w)?(S&&(S.start.copy(T.end),S.end.copy(T.end)),y.containsPoint(T.end)):y.plane.intersectLine(T,n)!=null?(S&&(S.start.copy(n),S.end.copy(n)),y.containsPoint(n)):!1}function p(y,v,S){let M=v.a;return Kn(y.plane.distanceToPoint(M))&&y.containsPoint(M)?(S&&(S.start.copy(M),S.end.copy(M)),!0):!1}function g(y,v,S){let M=y.degenerateSegment,T=v.a;return M.closestPointToPoint(T,!0,n),T.distanceToSquared(n)<Ov?(S&&(S.start.copy(T),S.end.copy(T)),!0):!1}function _(y,v,S,M){if(y.isDegenerateIntoSegment)if(v.isDegenerateIntoSegment){let T=y.degenerateSegment,b=v.degenerateSegment,w=i,E=s;T.delta(w),b.delta(E);let P=n.subVectors(b.start,T.start),I=w.x*E.y-w.y*E.x;if(Kn(I))return!1;let F=(P.x*E.y-P.y*E.x)/I,L=-(w.x*P.y-w.y*P.x)/I;if(F<0||F>1||L<0||L>1)return!1;let N=T.start.z+w.z*F,z=b.start.z+E.z*L;return Kn(N-z)?(S&&(S.start.copy(T.start).addScaledVector(w,F),S.end.copy(T.start).addScaledVector(w,F)),!0):!1}else return v.isDegenerateIntoPoint?g(y,v,S):x(v,y,S,M);else{if(y.isDegenerateIntoPoint)return v.isDegenerateIntoPoint?v.a.distanceToSquared(y.a)<Ov?(S&&(S.start.copy(y.a),S.end.copy(y.a)),!0):!1:v.isDegenerateIntoSegment?g(v,y,S):p(v,y,S);if(v.isDegenerateIntoPoint)return p(y,v,S);if(v.isDegenerateIntoSegment)return x(y,v,S,M)}}return function(v,S=null,M=!1){this.needsUpdate&&this.update(),v.isExtendedTriangle?v.needsUpdate&&v.update():(r.copy(v),r.update(),v=r);let T=_(this,v,S,M);if(T!==void 0)return T;let b=this.plane,w=v.plane,E=w.distanceToPoint(this.a),P=w.distanceToPoint(this.b),I=w.distanceToPoint(this.c);Kn(E)&&(E=0),Kn(P)&&(P=0),Kn(I)&&(I=0);let F=E*P,L=E*I;if(F>0&&L>0)return!1;let N=b.distanceToPoint(v.a),z=b.distanceToPoint(v.b),W=b.distanceToPoint(v.c);Kn(N)&&(N=0),Kn(z)&&(z=0),Kn(W)&&(W=0);let Q=N*z,X=N*W;if(Q>0&&X>0)return!1;i.copy(b.normal),s.copy(w.normal);let K=i.cross(s),j=0,Rt=Math.abs(K.x),Tt=Math.abs(K.y);Tt>Rt&&(Rt=Tt,j=1),Math.abs(K.z)>Rt&&(j=2);let Kt=DA[j],fe=this.a[Kt],$=this.b[Kt],et=this.c[Kt],vt=v.a[Kt],Gt=v.b[Kt],At=v.c[Kt];if(m(this,fe,$,et,F,L,E,P,I,h,a))return u(this,v,S,M);if(m(v,vt,Gt,At,Q,X,N,z,W,f,l))return u(this,v,S,M);if(h.y<h.x){let Vt=h.y;h.y=h.x,h.x=Vt,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(f.y<f.x){let Vt=f.y;f.y=f.x,f.x=Vt,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return h.y<f.x||f.y<h.x?!1:(S&&(f.x>h.x?S.start.copy(l.start):S.start.copy(a.start),f.y<h.y?S.end.copy(l.end):S.end.copy(a.end)),!0)}})();dn.prototype.distanceToPoint=(function(){let r=new C;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}})();dn.prototype.distanceToTriangle=(function(){let r=new C,t=new C,e=["a","b","c"],n=new yn,i=new yn;return function(o,a=null,l=null){let c=a||l?n:null;if(this.intersectsTriangle(o,c,!0))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let f=0;f<3;f++){let u,d=e[f],m=o[d];this.closestPointToPoint(m,r),u=m.distanceToSquared(r),u<h&&(h=u,a&&a.copy(r),l&&l.copy(m));let x=this[d];o.closestPointToPoint(x,r),u=x.distanceToSquared(r),u<h&&(h=u,a&&a.copy(x),l&&l.copy(r))}for(let f=0;f<3;f++){let u=e[f],d=e[(f+1)%3];n.set(this[u],this[d]);for(let m=0;m<3;m++){let x=e[m],p=e[(m+1)%3];i.set(o[x],o[p]),Wc(n,i,r,t);let g=r.distanceToSquared(t);g<h&&(h=g,a&&a.copy(r),l&&l.copy(t))}}return Math.sqrt(h)}})();var Ge=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new C,this.max=new C,this.matrix=new bt,this.invMatrix=new bt,this.points=new Array(8).fill().map(()=>new C),this.satAxes=new Array(3).fill().map(()=>new C),this.satBounds=new Array(3).fill().map(()=>new Gn),this.alignedSatBounds=new Array(3).fill().map(()=>new Gn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Ge.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,i=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){let u=1*c|2*h|4*f,d=i[u];d.x=c?n.x:e.x,d.y=h?n.y:e.y,d.z=f?n.z:e.z,d.applyMatrix4(t)}let s=this.satBounds,o=this.satAxes,a=i[0];for(let c=0;c<3;c++){let h=o[c],f=s[c],u=1<<c,d=i[u];h.subVectors(a,d),f.setFromPoints(h,i)}let l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ge.prototype.intersectsBox=(function(){let r=new Gn;return function(e){this.needsUpdate&&this.update();let n=e.min,i=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,a[0].isSeparated(r)||(r.min=n.y,r.max=i.y,a[1].isSeparated(r))||(r.min=n.z,r.max=i.z,a[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){let c=o[l],h=s[l];if(r.setFromBox(c,e),h.isSeparated(r))return!1}return!0}})();Ge.prototype.intersectsTriangle=(function(){let r=new dn,t=new Array(3),e=new Gn,n=new Gn,i=new C;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);let a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let u=0;u<3;u++){let d=a[u],m=l[u];if(e.setFromPoints(m,t),d.isSeparated(e))return!1}let c=o.satBounds,h=o.satAxes,f=this.points;for(let u=0;u<3;u++){let d=c[u],m=h[u];if(e.setFromPoints(m,f),d.isSeparated(e))return!1}for(let u=0;u<3;u++){let d=l[u];for(let m=0;m<4;m++){let x=h[m];if(i.crossVectors(d,x),e.setFromPoints(i,t),n.setFromPoints(i,f),e.isSeparated(n))return!1}}return!0}})();Ge.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ge.prototype.distanceToPoint=(function(){let r=new C;return function(e){return this.closestPointToPoint(e,r),e.distanceTo(r)}})();Ge.prototype.distanceToBox=(function(){let r=["x","y","z"],t=new Array(12).fill().map(()=>new yn),e=new Array(12).fill().map(()=>new yn),n=new C,i=new C;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),l&&l.copy(n),c&&c.copy(i)),0;let h=a*a,f=o.min,u=o.max,d=this.points,m=1/0;for(let p=0;p<8;p++){let g=d[p];i.copy(g).clamp(f,u);let _=g.distanceToSquared(i);if(_<m&&(m=_,l&&l.copy(g),c&&c.copy(i),_<h))return Math.sqrt(_)}let x=0;for(let p=0;p<3;p++)for(let g=0;g<=1;g++)for(let _=0;_<=1;_++){let y=(p+1)%3,v=(p+2)%3,S=g<<y|_<<v,M=1<<p|g<<y|_<<v,T=d[S],b=d[M];t[x].set(T,b);let E=r[p],P=r[y],I=r[v],F=e[x],L=F.start,N=F.end;L[E]=f[E],L[P]=g?f[P]:u[P],L[I]=_?f[I]:u[P],N[E]=u[E],N[P]=g?f[P]:u[P],N[I]=_?f[I]:u[P],x++}for(let p=0;p<=1;p++)for(let g=0;g<=1;g++)for(let _=0;_<=1;_++){i.x=p?u.x:f.x,i.y=g?u.y:f.y,i.z=_?u.z:f.z,this.closestPointToPoint(i,n);let y=i.distanceToSquared(n);if(y<m&&(m=y,l&&l.copy(n),c&&c.copy(i),y<h))return Math.sqrt(y)}for(let p=0;p<12;p++){let g=t[p];for(let _=0;_<12;_++){let y=e[_];Wc(g,y,n,i);let v=n.distanceToSquared(i);if(v<m&&(m=v,l&&l.copy(n),c&&c.copy(i),v<h))return Math.sqrt(v)}}return Math.sqrt(m)}})();var Zm=class extends Mr{constructor(){super(()=>new dn)}},En=new Zm;var Xc=new C,$m=new C;function zv(r,t,e={},n=0,i=1/0){let s=n*n,o=i*i,a=1/0,l=null;if(r.shapecast({boundsTraverseOrder:h=>(Xc.copy(t).clamp(h.min,h.max),Xc.distanceToSquared(t)),intersectsBounds:(h,f,u)=>u<a&&u<o,intersectsTriangle:(h,f)=>{h.closestPointToPoint(t,Xc);let u=t.distanceToSquared(Xc);return u<a&&($m.copy(Xc),a=u,l=f),u<s}}),a===1/0)return null;let c=Math.sqrt(a);return e.point?e.point.copy($m):e.point=$m.clone(),e.distance=c,e.faceIndex=l,e}var Lf=parseInt("186")>=169,LA=parseInt("186")<=161,cs=new C,us=new C,hs=new C,Ff=new Y,Nf=new Y,Uf=new Y,kv=new C,Vv=new C,Hv=new C,qc=new C;function FA(r,t,e,n,i,s,o,a){let l;if(s===je?l=r.intersectTriangle(n,e,t,!0,i):l=r.intersectTriangle(t,e,n,s!==fn,i),l===null)return null;let c=r.origin.distanceTo(i);return c<o||c>a?null:{distance:c,point:i.clone()}}function Gv(r,t,e,n,i,s,o,a,l,c,h){cs.fromBufferAttribute(t,s),us.fromBufferAttribute(t,o),hs.fromBufferAttribute(t,a);let f=FA(r,cs,us,hs,qc,l,c,h);if(f){if(n){Ff.fromBufferAttribute(n,s),Nf.fromBufferAttribute(n,o),Uf.fromBufferAttribute(n,a),f.uv=new Y;let d=sn.getInterpolation(qc,cs,us,hs,Ff,Nf,Uf,f.uv);Lf||(f.uv=d)}if(i){Ff.fromBufferAttribute(i,s),Nf.fromBufferAttribute(i,o),Uf.fromBufferAttribute(i,a),f.uv1=new Y;let d=sn.getInterpolation(qc,cs,us,hs,Ff,Nf,Uf,f.uv1);Lf||(f.uv1=d),LA&&(f.uv2=f.uv1)}if(e){kv.fromBufferAttribute(e,s),Vv.fromBufferAttribute(e,o),Hv.fromBufferAttribute(e,a),f.normal=new C;let d=sn.getInterpolation(qc,cs,us,hs,kv,Vv,Hv,f.normal);f.normal.dot(r.direction)>0&&f.normal.multiplyScalar(-1),Lf||(f.normal=d)}let u={a:s,b:o,c:a,normal:new C,materialIndex:0};if(sn.getNormal(cs,us,hs,u.normal),f.face=u,f.faceIndex=s,Lf){let d=new C;sn.getBarycoord(qc,cs,us,hs,d),f.barycoord=d}}return f}function Wv(r){return r&&r.isMaterial?r.side:r}function ea(r,t,e,n,i,s,o){let a=n*3,l=a+0,c=a+1,h=a+2,{index:f,groups:u}=r;r.index&&(l=f.getX(l),c=f.getX(c),h=f.getX(h));let{position:d,normal:m,uv:x,uv1:p}=r.attributes;if(Array.isArray(t)){let g=n*3;for(let _=0,y=u.length;_<y;_++){let{start:v,count:S,materialIndex:M}=u[_];if(g>=v&&g<v+S){let T=Wv(t[M]),b=Gv(e,d,m,x,p,l,c,h,T,s,o);if(b)if(b.faceIndex=n,b.face.materialIndex=M,i)i.push(b);else return b}}}else{let g=Wv(t),_=Gv(e,d,m,x,p,l,c,h,g,s,o);if(_)if(_.faceIndex=n,_.face.materialIndex=0,i)i.push(_);else return _}return null}function Pe(r,t,e,n){let i=r.a,s=r.b,o=r.c,a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function Xv(r,t,e,n,i,s,o,a){let{geometry:l,_indirectBuffer:c}=r;for(let h=n,f=n+i;h<f;h++)ea(l,t,e,h,s,o,a)}function qv(r,t,e,n,i,s,o){let{geometry:a,_indirectBuffer:l}=r,c=1/0,h=null;for(let f=n,u=n+i;f<u;f++){let d;d=ea(a,t,e,f,null,s,o),d&&d.distance<c&&(h=d,c=d.distance)}return h}function Yv(r,t,e,n,i,s,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=r,f=t+r;h<f;h++){let u;if(u=h,Pe(o,u*3,l,c),o.needsUpdate=!0,n(o,u,i,s))return!0}return!1}function Zv(r,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=r.geometry,n=e.index?e.index.array:null,i=e.attributes.position,s,o,a,l,c=0,h=r._roots;for(let u=0,d=h.length;u<d;u++)s=h[u],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),f(0,c),c+=s.byteLength;function f(u,d,m=!1){let x=u*2;if(he(x,a)){let p=xe(u,o),g=we(x,a),_=1/0,y=1/0,v=1/0,S=-1/0,M=-1/0,T=-1/0;for(let b=3*p,w=3*(p+g);b<w;b++){let E=n[b],P=i.getX(E),I=i.getY(E),F=i.getZ(E);P<_&&(_=P),P>S&&(S=P),I<y&&(y=I),I>M&&(M=I),F<v&&(v=F),F>T&&(T=F)}return l[u+0]!==_||l[u+1]!==y||l[u+2]!==v||l[u+3]!==S||l[u+4]!==M||l[u+5]!==T?(l[u+0]=_,l[u+1]=y,l[u+2]=v,l[u+3]=S,l[u+4]=M,l[u+5]=T,!0):!1}else{let p=_e(u),g=ye(u,o),_=m,y=!1,v=!1;if(t){if(!_){let E=p/8+d/32,P=g/8+d/32;y=t.has(E),v=t.has(P),_=!y&&!v}}else y=!0,v=!0;let S=_||y,M=_||v,T=!1;S&&(T=f(p,d,_));let b=!1;M&&(b=f(g,d,_));let w=T||b;if(w)for(let E=0;E<3;E++){let P=p+E,I=g+E,F=l[P],L=l[P+3],N=l[I],z=l[I+3];l[u+E]=F<N?F:N,l[u+E+3]=L>z?L:z}return w}}}function jn(r,t,e,n,i){let s,o,a,l,c,h,f=1/e.direction.x,u=1/e.direction.y,d=1/e.direction.z,m=e.origin.x,x=e.origin.y,p=e.origin.z,g=t[r],_=t[r+3],y=t[r+1],v=t[r+3+1],S=t[r+2],M=t[r+3+2];return f>=0?(s=(g-m)*f,o=(_-m)*f):(s=(_-m)*f,o=(g-m)*f),u>=0?(a=(y-x)*u,l=(v-x)*u):(a=(v-x)*u,l=(y-x)*u),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),d>=0?(c=(S-p)*d,h=(M-p)*d):(c=(M-p)*d,h=(S-p)*d),s>h||c>o)?!1:((c>s||s!==s)&&(s=c),(h<o||o!==o)&&(o=h),s<=i&&o>=n)}function $v(r,t,e,n,i,s,o,a){let{geometry:l,_indirectBuffer:c}=r;for(let h=n,f=n+i;h<f;h++){let u=c?c[h]:h;ea(l,t,e,u,s,o,a)}}function Jv(r,t,e,n,i,s,o){let{geometry:a,_indirectBuffer:l}=r,c=1/0,h=null;for(let f=n,u=n+i;f<u;f++){let d;d=ea(a,t,e,l?l[f]:f,null,s,o),d&&d.distance<c&&(h=d,c=d.distance)}return h}function Kv(r,t,e,n,i,s,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let h=r,f=t+r;h<f;h++){let u;if(u=e.resolveTriangleIndex(h),Pe(o,u*3,l,c),o.needsUpdate=!0,n(o,u,i,s))return!0}return!1}function jv(r,t,e,n,i,s,o){me.setBuffer(r._roots[t]),Jm(0,r,e,n,i,s,o),me.clearBuffer()}function Jm(r,t,e,n,i,s,o){let{float32Array:a,uint16Array:l,uint32Array:c}=me,h=r*2;if(he(h,l)){let u=xe(r,c),d=we(h,l);Xv(t,e,n,u,d,i,s,o)}else{let u=_e(r);jn(u,a,n,s,o)&&Jm(u,t,e,n,i,s,o);let d=ye(r,c);jn(d,a,n,s,o)&&Jm(d,t,e,n,i,s,o)}}var NA=["x","y","z"];function Qv(r,t,e,n,i,s){me.setBuffer(r._roots[t]);let o=Km(0,r,e,n,i,s);return me.clearBuffer(),o}function Km(r,t,e,n,i,s){let{float32Array:o,uint16Array:a,uint32Array:l}=me,c=r*2;if(he(c,a)){let f=xe(r,l),u=we(c,a);return qv(t,e,n,f,u,i,s)}else{let f=br(r,l),u=NA[f],m=n.direction[u]>=0,x,p;m?(x=_e(r),p=ye(r,l)):(x=ye(r,l),p=_e(r));let _=jn(x,o,n,i,s)?Km(x,t,e,n,i,s):null;if(_){let S=_.point[u];if(m?S<=o[p+f]:S>=o[p+f+3])return _}let v=jn(p,o,n,i,s)?Km(p,t,e,n,i,s):null;return _&&v?_.distance<=v.distance?_:v:_||v||null}}var Bf=new le,na=new dn,ia=new dn,Yc=new bt,t_=new Ge,Of=new Ge;function e_(r,t,e,n){me.setBuffer(r._roots[t]);let i=jm(0,r,e,n);return me.clearBuffer(),i}function jm(r,t,e,n,i=null){let{float32Array:s,uint16Array:o,uint32Array:a}=me,l=r*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),t_.set(e.boundingBox.min,e.boundingBox.max,n),i=t_),he(l,o)){let h=t.geometry,f=h.index,u=h.attributes.position,d=e.index,m=e.attributes.position,x=xe(r,a),p=we(l,o);if(Yc.copy(n).invert(),e.boundsTree)return Ie(r,s,Of),Of.matrix.copy(Yc),Of.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>Of.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let y=x*3,v=(p+x)*3;y<v;y+=3)if(Pe(ia,y,f,u),ia.needsUpdate=!0,_.intersectsTriangle(ia))return!0;return!1}});{let g=Ar(e);for(let _=x*3,y=(p+x)*3;_<y;_+=3){Pe(na,_,f,u),na.a.applyMatrix4(Yc),na.b.applyMatrix4(Yc),na.c.applyMatrix4(Yc),na.needsUpdate=!0;for(let v=0,S=g*3;v<S;v+=3)if(Pe(ia,v,d,m),ia.needsUpdate=!0,na.intersectsTriangle(ia))return!0}}}else{let h=_e(r),f=ye(r,a);return Ie(h,s,Bf),!!(i.intersectsBox(Bf)&&jm(h,t,e,n,i)||(Ie(f,s,Bf),i.intersectsBox(Bf)&&jm(f,t,e,n,i)))}}var zf=new bt,Qm=new Ge,Zc=new Ge,UA=new C,BA=new C,OA=new C,zA=new C;function n_(r,t,e,n={},i={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Qm.set(t.boundingBox.min,t.boundingBox.max,e),Qm.needsUpdate=!0;let a=r.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,f=t.index,u=En.getPrimitive(),d=En.getPrimitive(),m=UA,x=BA,p=null,g=null;i&&(p=OA,g=zA);let _=1/0,y=null,v=null;return zf.copy(e).invert(),Zc.matrix.copy(zf),r.shapecast({boundsTraverseOrder:S=>Qm.distanceToBox(S),intersectsBounds:(S,M,T)=>T<_&&T<o?(M&&(Zc.min.copy(S.min),Zc.max.copy(S.max),Zc.needsUpdate=!0),!0):!1,intersectsRange:(S,M)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:b=>Zc.distanceToBox(b),intersectsBounds:(b,w,E)=>E<_&&E<o,intersectsRange:(b,w)=>{for(let E=b,P=b+w;E<P;E++){Pe(d,3*E,f,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let I=S,F=S+M;I<F;I++){Pe(u,3*I,c,l),u.needsUpdate=!0;let L=u.distanceToTriangle(d,m,p);if(L<_&&(x.copy(m),g&&g.copy(p),_=L,y=I,v=E),L<s)return!0}}}});{let T=Ar(t);for(let b=0,w=T;b<w;b++){Pe(d,3*b,f,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let E=S,P=S+M;E<P;E++){Pe(u,3*E,c,l),u.needsUpdate=!0;let I=u.distanceToTriangle(d,m,p);if(I<_&&(x.copy(m),g&&g.copy(p),_=I,y=E,v=b),I<s)return!0}}}}}),En.releasePrimitive(u),En.releasePrimitive(d),_===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=_,n.faceIndex=y,i&&(i.point?i.point.copy(g):i.point=g.clone(),i.point.applyMatrix4(zf),x.applyMatrix4(zf),i.distance=x.sub(i.point).length(),i.faceIndex=v),n)}function i_(r,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=r.geometry,n=e.index?e.index.array:null,i=e.attributes.position,s,o,a,l,c=0,h=r._roots;for(let u=0,d=h.length;u<d;u++)s=h[u],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),f(0,c),c+=s.byteLength;function f(u,d,m=!1){let x=u*2;if(he(x,a)){let p=xe(u,o),g=we(x,a),_=1/0,y=1/0,v=1/0,S=-1/0,M=-1/0,T=-1/0;for(let b=p,w=p+g;b<w;b++){let E=3*r.resolveTriangleIndex(b);for(let P=0;P<3;P++){let I=E+P;I=n?n[I]:I;let F=i.getX(I),L=i.getY(I),N=i.getZ(I);F<_&&(_=F),F>S&&(S=F),L<y&&(y=L),L>M&&(M=L),N<v&&(v=N),N>T&&(T=N)}}return l[u+0]!==_||l[u+1]!==y||l[u+2]!==v||l[u+3]!==S||l[u+4]!==M||l[u+5]!==T?(l[u+0]=_,l[u+1]=y,l[u+2]=v,l[u+3]=S,l[u+4]=M,l[u+5]=T,!0):!1}else{let p=_e(u),g=ye(u,o),_=m,y=!1,v=!1;if(t){if(!_){let E=p/8+d/32,P=g/8+d/32;y=t.has(E),v=t.has(P),_=!y&&!v}}else y=!0,v=!0;let S=_||y,M=_||v,T=!1;S&&(T=f(p,d,_));let b=!1;M&&(b=f(g,d,_));let w=T||b;if(w)for(let E=0;E<3;E++){let P=p+E,I=g+E,F=l[P],L=l[P+3],N=l[I],z=l[I+3];l[u+E]=F<N?F:N,l[u+E+3]=L>z?L:z}return w}}}function r_(r,t,e,n,i,s,o){me.setBuffer(r._roots[t]),tg(0,r,e,n,i,s,o),me.clearBuffer()}function tg(r,t,e,n,i,s,o){let{float32Array:a,uint16Array:l,uint32Array:c}=me,h=r*2;if(he(h,l)){let u=xe(r,c),d=we(h,l);$v(t,e,n,u,d,i,s,o)}else{let u=_e(r);jn(u,a,n,s,o)&&tg(u,t,e,n,i,s,o);let d=ye(r,c);jn(d,a,n,s,o)&&tg(d,t,e,n,i,s,o)}}var kA=["x","y","z"];function s_(r,t,e,n,i,s){me.setBuffer(r._roots[t]);let o=eg(0,r,e,n,i,s);return me.clearBuffer(),o}function eg(r,t,e,n,i,s){let{float32Array:o,uint16Array:a,uint32Array:l}=me,c=r*2;if(he(c,a)){let f=xe(r,l),u=we(c,a);return Jv(t,e,n,f,u,i,s)}else{let f=br(r,l),u=kA[f],m=n.direction[u]>=0,x,p;m?(x=_e(r),p=ye(r,l)):(x=ye(r,l),p=_e(r));let _=jn(x,o,n,i,s)?eg(x,t,e,n,i,s):null;if(_){let S=_.point[u];if(m?S<=o[p+f]:S>=o[p+f+3])return _}let v=jn(p,o,n,i,s)?eg(p,t,e,n,i,s):null;return _&&v?_.distance<=v.distance?_:v:_||v||null}}var kf=new le,ra=new dn,sa=new dn,$c=new bt,o_=new Ge,Vf=new Ge;function a_(r,t,e,n){me.setBuffer(r._roots[t]);let i=ng(0,r,e,n);return me.clearBuffer(),i}function ng(r,t,e,n,i=null){let{float32Array:s,uint16Array:o,uint32Array:a}=me,l=r*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),o_.set(e.boundingBox.min,e.boundingBox.max,n),i=o_),he(l,o)){let h=t.geometry,f=h.index,u=h.attributes.position,d=e.index,m=e.attributes.position,x=xe(r,a),p=we(l,o);if($c.copy(n).invert(),e.boundsTree)return Ie(r,s,Vf),Vf.matrix.copy($c),Vf.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:_=>Vf.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let y=x,v=p+x;y<v;y++)if(Pe(sa,3*t.resolveTriangleIndex(y),f,u),sa.needsUpdate=!0,_.intersectsTriangle(sa))return!0;return!1}});{let g=Ar(e);for(let _=x,y=p+x;_<y;_++){let v=t.resolveTriangleIndex(_);Pe(ra,3*v,f,u),ra.a.applyMatrix4($c),ra.b.applyMatrix4($c),ra.c.applyMatrix4($c),ra.needsUpdate=!0;for(let S=0,M=g*3;S<M;S+=3)if(Pe(sa,S,d,m),sa.needsUpdate=!0,ra.intersectsTriangle(sa))return!0}}}else{let h=_e(r),f=ye(r,a);return Ie(h,s,kf),!!(i.intersectsBox(kf)&&ng(h,t,e,n,i)||(Ie(f,s,kf),i.intersectsBox(kf)&&ng(f,t,e,n,i)))}}var Hf=new bt,ig=new Ge,Jc=new Ge,VA=new C,HA=new C,GA=new C,WA=new C;function l_(r,t,e,n={},i={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ig.set(t.boundingBox.min,t.boundingBox.max,e),ig.needsUpdate=!0;let a=r.geometry,l=a.attributes.position,c=a.index,h=t.attributes.position,f=t.index,u=En.getPrimitive(),d=En.getPrimitive(),m=VA,x=HA,p=null,g=null;i&&(p=GA,g=WA);let _=1/0,y=null,v=null;return Hf.copy(e).invert(),Jc.matrix.copy(Hf),r.shapecast({boundsTraverseOrder:S=>ig.distanceToBox(S),intersectsBounds:(S,M,T)=>T<_&&T<o?(M&&(Jc.min.copy(S.min),Jc.max.copy(S.max),Jc.needsUpdate=!0),!0):!1,intersectsRange:(S,M)=>{if(t.boundsTree){let T=t.boundsTree;return T.shapecast({boundsTraverseOrder:b=>Jc.distanceToBox(b),intersectsBounds:(b,w,E)=>E<_&&E<o,intersectsRange:(b,w)=>{for(let E=b,P=b+w;E<P;E++){let I=T.resolveTriangleIndex(E);Pe(d,3*I,f,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let F=S,L=S+M;F<L;F++){let N=r.resolveTriangleIndex(F);Pe(u,3*N,c,l),u.needsUpdate=!0;let z=u.distanceToTriangle(d,m,p);if(z<_&&(x.copy(m),g&&g.copy(p),_=z,y=F,v=E),z<s)return!0}}}})}else{let T=Ar(t);for(let b=0,w=T;b<w;b++){Pe(d,3*b,f,h),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let E=S,P=S+M;E<P;E++){let I=r.resolveTriangleIndex(E);Pe(u,3*I,c,l),u.needsUpdate=!0;let F=u.distanceToTriangle(d,m,p);if(F<_&&(x.copy(m),g&&g.copy(p),_=F,y=E,v=b),F<s)return!0}}}}}),En.releasePrimitive(u),En.releasePrimitive(d),_===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=_,n.faceIndex=y,i&&(i.point?i.point.copy(g):i.point=g.clone(),i.point.applyMatrix4(Hf),x.applyMatrix4(Hf),i.distance=x.sub(i.point).length(),i.faceIndex=v),n)}function rg(r,t,e){return r===null?null:(r.point.applyMatrix4(t.matrixWorld),r.distance=r.point.distanceTo(e.ray.origin),r.object=t,r)}var Gf=new Ge,Wf=new ai,c_=new C,u_=new bt,h_=new C,sg=["getX","getY","getZ"],Xf=class r extends Df{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,i=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=i.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=i,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:i,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(s));let a=new r(e,{...n,[zc]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){let c=e.getIndex();if(c===null){let h=new zt(t.index,1,!1);e.setIndex(h)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return a;function l(c){for(let h=0;h<c.length;h++){let f=c[h],u=new Uint32Array(f),d=new Uint16Array(f);for(let m=0,x=f.byteLength/32;m<x;m++){let p=8*m,g=2*p;he(g,d)||(u[p+6]=u[p+6]/8-m)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let i=this.geometry,s=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,c=(s?s[t]:t)*3,h=c+0,f=c+1,u=c+2;a&&(h=a[h],f=a[f],u=a[u]);for(let d=0;d<3;d++){let m=o[sg[d]](h),x=o[sg[d]](f),p=o[sg[d]](u),g=m;x<g&&(g=x),p<g&&(g=p);let _=m;x>_&&(_=x),p>_&&(_=p),e[n+d]=g,e[n+d+3]=_}return e}computePrimitiveBounds(t,e,n){let i=this.geometry,s=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let c=o.array,h=o.offset||0,f=3;o.isInterleavedBufferAttribute&&(f=o.data.stride);let u=["getX","getY","getZ"],d=n.offset;for(let m=t,x=t+e;m<x;m++){let g=(s?s[m]:m)*3,_=(m-d)*6,y=g+0,v=g+1,S=g+2;a&&(y=a[y],v=a[v],S=a[S]),l||(y=y*f+h,v=v*f+h,S=S*f+h);for(let M=0;M<3;M++){let T,b,w;l?(T=o[u[M]](y),b=o[u[M]](v),w=o[u[M]](S)):(T=c[y+M],b=c[v+M],w=c[S+M]);let E=T;b<E&&(E=b),w<E&&(E=w);let P=T;b>P&&(P=b),w>P&&(P=w);let I=(P-E)/2,F=M*2;n[_+F+0]=E+I,n[_+F+1]=I+(Math.abs(E)+I)*Yo}}return n}raycastObject3D(t,e,n=[]){let{material:i}=t;if(i===void 0)return;u_.copy(t.matrixWorld).invert(),Wf.copy(e.ray).applyMatrix4(u_),h_.setFromMatrixScale(t.matrixWorld),c_.copy(Wf.direction).multiply(h_);let s=c_.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let l=this.raycastFirst(Wf,i,o,a);l=rg(l,t,e),l&&n.push(l)}else{let l=this.raycast(Wf,i,o,a);for(let c=0,h=l.length;c<h;c++){let f=rg(l[c],t,e);f&&n.push(f)}}return n}refit(t=null){return(this.indirect?i_:Zv)(this,t)}raycast(t,e=Fn,n=0,i=1/0){let s=this._roots,o=[],a=this.indirect?r_:jv;for(let l=0,c=s.length;l<c;l++)a(this,l,e,t,o,n,i);return o}raycastFirst(t,e=Fn,n=0,i=1/0){let s=this._roots,o=null,a=this.indirect?s_:Qv;for(let l=0,c=s.length;l<c;l++){let h=a(this,l,e,t,n,i);h!=null&&(o==null||h.distance<o.distance)&&(o=h)}return o}intersectsGeometry(t,e){let n=!1,i=this._roots,s=this.indirect?a_:e_;for(let o=0,a=i.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){let e=En.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?Kv:Yv});return En.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:s}=n,o=En.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?m=>{let x=this.resolveTriangleIndex(m);Pe(o,x*3,a,l)}:m=>{Pe(o,m*3,a,l)},h=En.getPrimitive(),f=t.geometry.index,u=t.geometry.attributes.position,d=t.indirect?m=>{let x=t.resolveTriangleIndex(m);Pe(h,x*3,f,u)}:m=>{Pe(h,m*3,f,u)};if(s){if(!(t instanceof r))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let m=(x,p,g,_,y,v,S,M)=>{for(let T=g,b=g+_;T<b;T++){d(T),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let w=x,E=x+p;w<E;w++)if(c(w),o.needsUpdate=!0,s(o,h,w,T,y,v,S,M))return!0}return!1};if(i){let x=i;i=function(p,g,_,y,v,S,M,T){return x(p,g,_,y,v,S,M,T)?!0:m(p,g,_,y,v,S,M,T)}}else i=m}return super.bvhcast(t,e,{intersectsRanges:i})}intersectsBox(t,e){return Gf.set(t.min,t.max,e),Gf.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Gf.intersectsBox(n),intersectsTriangle:n=>Gf.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},s=0,o=1/0){return(this.indirect?l_:n_)(this,t,e,n,i,s,o)}closestPointToPoint(t,e={},n=0,i=1/0){return zv(this,t,e,n,i)}};function XA(r){switch(r){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function qA(r){switch(r){case 1:return $n;case 2:return Hn;case 3:return $t;case 4:return $t}}function f_(r){switch(r){case 1:return yr;case 2:return Zi;case 3:return $i;case 4:return $i}}var qf=class extends ue{constructor(){super(),this.minFilter=Ht,this.magFilter=Ht,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(t){let e=this.overrideItemSize,n=t.itemSize,i=t.count;if(e!==null){if(n*i%e!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");t.itemSize=e,t.count=i*n/e}let s=t.itemSize,o=t.count,a=t.normalized,l=t.array.constructor,c=l.BYTES_PER_ELEMENT,h=this._forcedType,f=s;if(h===null)switch(l){case Float32Array:h=Jt;break;case Uint8Array:case Uint16Array:case Uint32Array:h=tn;break;case Int8Array:case Int16Array:case Int32Array:h=qi;break}let u,d,m,x,p=XA(s);switch(h){case Jt:m=1,d=qA(s),a&&c===1?(x=l,p+="8",l===Uint8Array?u=Qe:(u=ss,p+="_SNORM")):(x=Float32Array,p+="32F",u=Jt);break;case qi:p+=c*8+"I",m=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,d=f_(s),c===1?(x=Int8Array,u=ss):c===2?(x=Int16Array,u=Uo):(x=Int32Array,u=qi);break;case tn:p+=c*8+"UI",m=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,d=f_(s),c===1?(x=Uint8Array,u=Qe):c===2?(x=Uint16Array,u=Xi):(x=Uint32Array,u=tn);break}f===3&&(d===$t||d===$i)&&(f=4);let g=Math.ceil(Math.sqrt(o))||1,_=f*g*g,y=new x(_),v=t.normalized;t.normalized=!1;for(let S=0;S<o;S++){let M=f*S;y[M]=t.getX(S)/m,s>=2&&(y[M+1]=t.getY(S)/m),s>=3&&(y[M+2]=t.getZ(S)/m,f===4&&(y[M+3]=1)),s>=4&&(y[M+3]=t.getW(S)/m)}t.normalized=v,this.internalFormat=p,this.format=d,this.type=u,this.image.width=g,this.image.height=g,this.image.data=y,this.needsUpdate=!0,this.dispose(),t.itemSize=n,t.count=i}},oa=class extends qf{constructor(){super(),this._forcedType=tn}};var aa=class extends qf{constructor(){super(),this._forcedType=Jt}};var Yf=class{constructor(){this.index=new oa,this.position=new aa,this.bvhBounds=new ue,this.bvhContents=new ue,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(t){let{geometry:e}=t;if(ZA(t,this.bvhBounds,this.bvhContents),this.position.updateFrom(e.attributes.position),t.indirect){let n=t._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(e.index)this._cachedIndexAttr=e.index.clone();else{let i=qm(Gc(e));this._cachedIndexAttr=new zt(i,1,!1)}YA(e,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(e.index)}dispose(){let{index:t,position:e,bvhBounds:n,bvhContents:i}=this;t&&t.dispose(),e&&e.dispose(),n&&n.dispose(),i&&i.dispose()}};function YA(r,t,e){let n=e.array,i=r.index?r.index.array:null;for(let s=0,o=t.length;s<o;s++){let a=3*s,l=3*t[s];for(let c=0;c<3;c++)n[a+c]=i?i[l+c]:l+c}}function ZA(r,t,e){let n=r._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");let i=n[0],s=new Uint16Array(i),o=new Uint32Array(i),a=new Float32Array(i),l=i.byteLength/32,c=2*Math.ceil(Math.sqrt(l/2)),h=new Float32Array(4*c*c),f=Math.ceil(Math.sqrt(l)),u=new Uint32Array(2*f*f);for(let d=0;d<l;d++){let m=d*32/4,x=m*2,p=m;for(let g=0;g<3;g++)h[8*d+0+g]=a[p+0+g],h[8*d+4+g]=a[p+3+g];if(he(x,s)){let g=we(x,s),_=xe(m,o),y=-65536|g;u[d*2+0]=y,u[d*2+1]=_}else{let g=o[m+6],_=br(m,o);u[d*2+0]=_,u[d*2+1]=g}}t.image.data=h,t.image.width=c,t.image.height=c,t.format=$t,t.type=Jt,t.internalFormat="RGBA32F",t.minFilter=Ht,t.magFilter=Ht,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose(),e.image.data=u,e.image.width=f,e.image.height=f,e.format=Zi,e.type=tn,e.internalFormat="RG32UI",e.minFilter=Ht,e.magFilter=Ht,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose()}var fs={};Ld(fs,{bvh_distance_functions:()=>d_,bvh_ray_functions:()=>ag,bvh_struct_definitions:()=>p_,common_functions:()=>og});var og=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var d_=`

float dot2( vec3 v ) {

	return dot( v, v );

}

// implementation from https://www.shadertoy.com/view/ttfGWl, though method 2 has been removed
// and is now available at this fork: https://www.shadertoy.com/view/WlB3zW
vec3 closestPointToTriangle( vec3 p, vec3 v0, vec3 v1, vec3 v2, out vec3 barycoord ) {

    vec3 v10 = v1 - v0;
    vec3 v21 = v2 - v1;
    vec3 v02 = v0 - v2;

	vec3 p0 = p - v0;
	vec3 p1 = p - v1;
	vec3 p2 = p - v2;

    vec3 nor = cross( v10, v02 );

    // method 2, in barycentric space
    vec3  q = cross( nor, p0 );
    float d = 1.0 / dot2( nor );
    float u = d * dot( q, v02 );
    float v = d * dot( q, v10 );
    float w = 1.0 - u - v;

	if( u < 0.0 ) {

		w = clamp( dot( p2, v02 ) / dot2( v02 ), 0.0, 1.0 );
		u = 0.0;
		v = 1.0 - w;

	} else if( v < 0.0 ) {

		u = clamp( dot( p0, v10 ) / dot2( v10 ), 0.0, 1.0 );
		v = 0.0;
		w = 1.0 - u;

	} else if( w < 0.0 ) {

		v = clamp( dot( p1, v21 ) / dot2( v21 ), 0.0, 1.0 );
		w = 0.0;
		u = 1.0 - v;

	}

	// output the barycoord in v0, v1, v2 weight order
	barycoord = vec3( w, u, v );
    return u * v1 + v * v2 + w * v0;

}

float distanceToTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// point and cut off range
	vec3 point, float closestDistanceSquared,

	// outputs
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord, inout float side, inout vec3 outPoint
) {

	bool found = false;
	vec3 localBarycoord;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		// get the closest point and barycoord
		vec3 closestPoint = closestPointToTriangle( point, a, b, c, localBarycoord );
		vec3 delta = point - closestPoint;
		float sqDist = dot2( delta );
		if ( sqDist < closestDistanceSquared ) {

			// set the output results
			closestDistanceSquared = sqDist;
			faceIndices = uvec4( indices.xyz, i );
			faceNormal = normalize( cross( a - b, b - c ) );
			barycoord = localBarycoord;
			outPoint = closestPoint;
			side = sign( dot( faceNormal, delta ) );

		}

	}

	return closestDistanceSquared;

}

float distanceSqToBounds( vec3 point, vec3 boundsMin, vec3 boundsMax ) {

	vec3 clampedPoint = clamp( point, boundsMin, boundsMax );
	vec3 delta = point - clampedPoint;
	return dot( delta, delta );

}

float distanceSqToBVHNodeBoundsPoint( vec3 point, sampler2D bvhBounds, uint currNodeIndex ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return distanceSqToBounds( point, boundsMin, boundsMax );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhClosestPointToPoint(		bvh,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)	_bvhClosestPointToPoint(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		point, maxDistance, faceIndices, faceNormal, barycoord, side, outPoint	)

float _bvhClosestPointToPoint(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// point to check
	vec3 point, float maxDistance,

	// output variables
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout vec3 outPoint
 ) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float closestDistanceSquared = maxDistance * maxDistance;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, currNodeIndex );
		if ( boundsHitDistance > closestDistanceSquared ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );
		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;
			closestDistanceSquared = distanceToTriangles(
				bvh_position, bvh_index, offset, count, point, closestDistanceSquared,

				// outputs
				faceIndices, faceNormal, barycoord, side, outPoint
			);

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;
			bool leftToRight = distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, leftIndex ) < distanceSqToBVHNodeBoundsPoint( point, bvh_bvhBounds, rightIndex );//rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;
			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return sqrt( closestDistanceSquared );

}
`;var ag=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int pointer = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( pointer > - 1 && pointer < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ pointer ];
		pointer --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = currNodeIndex + boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			pointer ++;
			stack[ pointer ] = c2;

			pointer ++;
			stack[ pointer ] = c1;

		}

	}

	return found;

}
`;var p_=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;var n3=`
	${og}
	${ag}
`;function Zf(r,t,e=0){if(r.isInterleavedBufferAttribute){let n=r.itemSize;for(let i=0,s=r.count;i<s;i++){let o=i+e;t.setX(o,r.getX(i)),n>=2&&t.setY(o,r.getY(i)),n>=3&&t.setZ(o,r.getZ(i)),n>=4&&t.setW(o,r.getW(i))}}else{let n=t.array,i=n.constructor,s=n.BYTES_PER_ELEMENT*r.itemSize*e;new i(n.buffer,s,r.array.length).set(r.array)}}function ds(r,t=null){let e=r.array.constructor,n=r.normalized,i=r.itemSize,s=t===null?r.count:t;return new zt(new e(i*s),i,n)}function Er(r,t){if(!r&&!t)return!0;if(!!r!=!!t)return!1;let e=r.count===t.count,n=r.normalized===t.normalized,i=r.array.constructor===t.array.constructor,s=r.itemSize===t.itemSize;return!(!e||!n||!i||!s)}function $A(r){let t=r[0].index!==null,e=new Set(Object.keys(r[0].attributes));if(!r[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let n=0;n<r.length;++n){let i=r[n],s=0;if(t!==(i.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(let o in i.attributes){if(!e.has(o))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+o+'" attribute exists among all geometries, or in none of them.');s++}if(s!==e.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function JA(r){let t=0;for(let e=0,n=r.length;e<n;e++)t+=r[e].getIndex().count;return t}function KA(r){let t=0;for(let e=0,n=r.length;e<n;e++)t+=r[e].getAttribute("position").count;return t}function jA(r,t,e){r.index&&r.index.count!==t&&r.setIndex(null);let n=r.attributes;for(let i in n)n[i].count!==e&&r.deleteAttribute(i)}function m_(r,t={},e=new It){let{useGroups:n=!1,forceUpdate:i=!1,skipAssigningAttributes:s=[],overwriteIndex:o=!0}=t;$A(r);let a=r[0].index!==null,l=a?JA(r):-1,c=KA(r);if(jA(e,l,c),n){let f=0;for(let u=0,d=r.length;u<d;u++){let m=r[u],x;a?x=m.getIndex().count:x=m.getAttribute("position").count,e.addGroup(f,x,u),f+=x}}if(a){let f=!1;if(e.index||(e.setIndex(new zt(new Uint32Array(l),1,!1)),f=!0),f||o){let u=0,d=0,m=e.getIndex();for(let x=0,p=r.length;x<p;x++){let g=r[x],_=g.getIndex();if(!(!i&&!f&&s[x]))for(let v=0;v<_.count;++v)m.setX(u+v,_.getX(v)+d);u+=_.count,d+=g.getAttribute("position").count}}}let h=Object.keys(r[0].attributes);for(let f=0,u=h.length;f<u;f++){let d=!1,m=h[f];if(!e.getAttribute(m)){let g=r[0].getAttribute(m);e.setAttribute(m,ds(g,c)),d=!0}let x=0,p=e.getAttribute(m);for(let g=0,_=r.length;g<_;g++){let y=r[g],v=!i&&!d&&s[g],S=y.getAttribute(m);if(!v)if(m==="color"&&p.itemSize!==S.itemSize)for(let M=x,T=S.count;M<T;M++)S.setXYZW(M,p.getX(M),p.getY(M),p.getZ(M),1);else Zf(S,p,x);x+=S.count}}}function g_(r,t,e){let n=r.index,s=r.attributes.position.count,o=n?n.count:s,a=r.groups;a.length===0&&(a=[{count:o,start:0,materialIndex:0}]);let l=r.getAttribute("materialIndex");if(!l||l.count!==s){let h;e.length<=255?h=new Uint8Array(s):h=new Uint16Array(s),l=new zt(h,1,!1),r.deleteAttribute("materialIndex"),r.setAttribute("materialIndex",l)}let c=l.array;for(let h=0;h<a.length;h++){let f=a[h],u=f.start,d=f.count,m=Math.min(d,o-u),x=Array.isArray(t)?t[f.materialIndex]:t,p=e.indexOf(x);for(let g=0;g<m;g++){let _=u+g;n&&(_=n.getX(_)),c[_]=p}}}function x_(r,t){if(!r.index){let e=r.attributes.position.count,n=new Array(e);for(let i=0;i<e;i++)n[i]=i;r.setIndex(n)}if(!r.attributes.normal&&t&&t.includes("normal")&&r.computeVertexNormals(),!r.attributes.uv&&t&&t.includes("uv")){let e=r.attributes.position.count;r.setAttribute("uv",new zt(new Float32Array(e*2),2,!1))}if(!r.attributes.uv2&&t&&t.includes("uv2")){let e=r.attributes.position.count;r.setAttribute("uv2",new zt(new Float32Array(e*2),2,!1))}if(!r.attributes.tangent&&t&&t.includes("tangent"))if(r.attributes.uv&&r.attributes.normal)r.computeTangents();else{let e=r.attributes.position.count;r.setAttribute("tangent",new zt(new Float32Array(e*4),4,!1))}if(!r.attributes.color&&t&&t.includes("color")){let e=r.attributes.position.count,n=new Float32Array(e*4);n.fill(1),r.setAttribute("color",new zt(n,4))}}function la(r){let t=0;if(r.byteLength!==0){let e=new Uint8Array(r);for(let n=0;n<r.byteLength;n++){let i=e[n];t=(t<<5)-t+i,t|=0}}return t}function v_(r){let t=r.uuid,e=Object.values(r.attributes);r.index&&(e.push(r.index),t+=`index|${r.index.version}`);let n=Object.keys(e).sort();for(let i of n){let s=e[i];t+=`${i}_${s.version}|`}return t}function __(r){let t=r.skeleton;return t?(t.boneTexture||t.computeBoneTexture(),`${la(t.boneTexture.image.data.buffer)}_${t.boneTexture.uuid}`):null}var $f=class{constructor(t=null){this.matrixWorld=new bt,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,t!==null&&this.updateFrom(t)}updateFrom(t){let e=t.geometry,n=(e.index?e.index.count:e.attributes.position.count)/3;this.matrixWorld.copy(t.matrixWorld),this.geometryHash=v_(e),this.primitiveCount=n,this.skeletonHash=__(t)}didChange(t){let e=t.geometry,n=(e.index?e.index.count:e.attributes.position.count)/3;return!(this.matrixWorld.equals(t.matrixWorld)&&this.geometryHash===v_(e)&&this.skeletonHash===__(t)&&this.primitiveCount===n)}};var ps=new C,ms=new C,gs=new C,y_=new se,Jf=new C,lg=new C,b_=new se,S_=new se,Kf=new bt,M_=new bt;function T_(r,t,e){let n=r.skeleton,i=r.geometry,s=n.bones,o=n.boneInverses;b_.fromBufferAttribute(i.attributes.skinIndex,t),S_.fromBufferAttribute(i.attributes.skinWeight,t),Kf.elements.fill(0);for(let a=0;a<4;a++){let l=S_.getComponent(a);if(l!==0){let c=b_.getComponent(a);M_.multiplyMatrices(s[c].matrixWorld,o[c]),QA(Kf,M_,l)}}return Kf.multiply(r.bindMatrix).premultiply(r.bindMatrixInverse),e.transformDirection(Kf),e}function cg(r,t,e,n,i){Jf.set(0,0,0);for(let s=0,o=r.length;s<o;s++){let a=t[s],l=r[s];a!==0&&(lg.fromBufferAttribute(l,n),e?Jf.addScaledVector(lg,a):Jf.addScaledVector(lg.sub(i),a))}i.add(Jf)}function QA(r,t,e){let n=r.elements,i=t.elements;for(let s=0,o=i.length;s<o;s++)n[s]+=i[s]*e}function tE(r){let{index:t,attributes:e}=r;if(t)for(let n=0,i=t.count;n<i;n+=3){let s=t.getX(n),o=t.getX(n+2);t.setX(n,o),t.setX(n+2,s)}else for(let n in e){let i=e[n],s=i.itemSize;for(let o=0,a=i.count;o<a;o+=3)for(let l=0;l<s;l++){let c=i.getComponent(o,l),h=i.getComponent(o+2,l);i.setComponent(o,l,h),i.setComponent(o+2,l,c)}}return r}function w_(r,t={},e=new It){t={applyWorldTransforms:!0,attributes:[],...t};let n=r.geometry,i=t.applyWorldTransforms,s=t.attributes.includes("normal"),o=t.attributes.includes("tangent"),a=n.attributes,l=e.attributes;for(let _ in e.attributes)(!t.attributes.includes(_)||!(_ in n.attributes))&&e.deleteAttribute(_);!e.index&&n.index&&(e.index=n.index.clone()),l.position||e.setAttribute("position",ds(a.position)),s&&!l.normal&&a.normal&&e.setAttribute("normal",ds(a.normal)),o&&!l.tangent&&a.tangent&&e.setAttribute("tangent",ds(a.tangent)),Er(n.index,e.index),Er(a.position,l.position),s&&Er(a.normal,l.normal),o&&Er(a.tangent,l.tangent);let c=a.position,h=s?a.normal:null,f=o?a.tangent:null,u=n.morphAttributes.position,d=n.morphAttributes.normal,m=n.morphAttributes.tangent,x=n.morphTargetsRelative,p=r.morphTargetInfluences,g=new Zt;g.getNormalMatrix(r.matrixWorld),n.index&&e.index.array.set(n.index.array);for(let _=0,y=a.position.count;_<y;_++)ps.fromBufferAttribute(c,_),h&&ms.fromBufferAttribute(h,_),f&&(y_.fromBufferAttribute(f,_),gs.fromBufferAttribute(f,_)),p&&(u&&cg(u,p,x,_,ps),d&&cg(d,p,x,_,ms),m&&cg(m,p,x,_,gs)),r.isSkinnedMesh&&(r.applyBoneTransform(_,ps),h&&T_(r,_,ms),f&&T_(r,_,gs)),i&&ps.applyMatrix4(r.matrixWorld),l.position.setXYZ(_,ps.x,ps.y,ps.z),h&&(i&&ms.applyNormalMatrix(g),l.normal.setXYZ(_,ms.x,ms.y,ms.z)),f&&(i&&gs.transformDirection(r.matrixWorld),l.tangent.setXYZW(_,gs.x,gs.y,gs.z,y_.w));for(let _ in t.attributes){let y=t.attributes[_];y==="position"||y==="tangent"||y==="normal"||!(y in a)||(l[y]||e.setAttribute(y,ds(a[y])),Er(a[y],l[y]),Zf(a[y],l[y]))}return r.matrixWorld.determinant()<0&&tE(e),e}var jf=class extends It{constructor(){super(),this.version=0,this.hash=null,this._diff=new $f}isCompatible(t,e){let n=t.geometry;for(let i=0;i<e.length;i++){let s=e[i],o=n.attributes[s],a=this.attributes[s];if(o&&!Er(o,a))return!1}return!0}updateFrom(t,e){let n=this._diff;return n.didChange(t)?(w_(t,e,this),n.updateFrom(t),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}};var td=0,ug=1,hg=2;function eE(r,t){for(let e=0,n=r.length;e<n;e++)r[e].traverseVisible(s=>{s.isMesh&&t(s)})}function nE(r){let t=[];for(let e=0,n=r.length;e<n;e++){let i=r[e];Array.isArray(i.material)?t.push(...i.material):t.push(i.material)}return t}function iE(r,t,e){if(r.length===0){t.setIndex(null);let n=t.attributes;for(let i in n)t.deleteAttribute(i);for(let i in e.attributes)t.setAttribute(e.attributes[i],new zt(new Float32Array(0),4,!1))}else m_(r,e,t);for(let n in t.attributes)t.attributes[n].needsUpdate=!0}var Qf=class{constructor(t){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(t||[])}_getDummyMesh(){if(!this._dummyMesh){let t=new kn,e=new It;e.setAttribute("position",new zt(new Float32Array(9),3)),this._dummyMesh=new ge(e,t)}return this._dummyMesh}_getMeshes(){let t=[];return eE(this.objects,e=>{t.push(e)}),t.sort((e,n)=>e.uuid>n.uuid?1:e.uuid<n.uuid?-1:0),t.length===0&&t.push(this._getDummyMesh()),t}_updateIntermediateGeometries(){let{_intermediateGeometry:t}=this,e=this._getMeshes(),n=new Set(t.keys()),i={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let s=0,o=e.length;s<o;s++){let a=e[s],l=a.uuid;n.delete(l);let c=t.get(l);(!c||!c.isCompatible(a,this.attributes))&&(c&&c.dispose(),c=new jf,t.set(l,c)),c.updateFrom(a,i)&&this.generateMissingAttributes&&x_(c,this.attributes)}n.forEach(s=>{t.delete(s)})}setObjects(t){Array.isArray(t)?this.objects=[...t]:this.objects=[t]}generate(t=new It){let{useGroups:e,overwriteIndex:n,_intermediateGeometry:i,_geometryMergeSets:s}=this,o=this._getMeshes(),a=[],l=[],c=s.get(t)||[];this._updateIntermediateGeometries();let h=!1;o.length!==c.length&&(h=!0);for(let u=0,d=o.length;u<d;u++){let m=o[u],x=i.get(m.uuid);l.push(x);let p=c[u];!p||p.uuid!==x.uuid?(a.push(!1),h=!0):p.version!==x.version?a.push(!1):a.push(!0)}iE(l,t,{useGroups:e,forceUpdate:h,skipAssigningAttributes:a,overwriteIndex:n}),h&&t.dispose(),s.set(t,l.map(u=>({version:u.version,uuid:u.uuid})));let f=td;return h?f=hg:a.includes(!1)&&(f=ug),{changeType:f,materials:nE(o),geometry:t}}};function rE(r){let t=new Set;for(let e=0,n=r.length;e<n;e++){let i=r[e];for(let s in i){let o=i[s];o&&o.isTexture&&t.add(o)}}return Array.from(t)}function sE(r){let t=[],e=new Set;for(let i=0,s=r.length;i<s;i++)r[i].traverse(o=>{o.visible&&(o.isRectAreaLight||o.isSpotLight||o.isPointLight||o.isDirectionalLight)&&(t.push(o),o.iesMap&&e.add(o.iesMap))});let n=Array.from(e).sort((i,s)=>i.uuid<s.uuid?1:i.uuid>s.uuid?-1:0);return{lights:t,iesTextures:n}}var ed=class{get initialized(){return!!this.bvh}constructor(t){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new It,this.staticGeometryGenerator=new Qf(t),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1,this._materialUuids=null}setObjects(t){this.staticGeometryGenerator.setObjects(t)}setBVHWorker(t){this._bvhWorker=t}async generateAsync(t=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(t)))),this._pendingGenerate;{this._buildAsync=!0;let e=this.generate(t);return this._buildAsync=!1,e.bvh=this.bvh=await e.bvh,e}}generate(t=null){let{staticGeometryGenerator:e,geometry:n,attributes:i}=this,s=e.objects;e.attributes=i,s.forEach(u=>{u.traverse(d=>{d.isSkinnedMesh&&d.skeleton&&d.skeleton.update()})});let o=e.generate(n),a=o.materials,l=o.changeType!==td||this._materialUuids===null||this._materialUuids.length!==length;if(!l){for(let u=0,d=a.length;u<d;u++)if(a[u].uuid!==this._materialUuids[u]){l=!0;break}}let c=rE(a),{lights:h,iesTextures:f}=sE(s);if(l&&(g_(n,a,a),this._materialUuids=a.map(u=>u.uuid)),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(o.changeType===hg){let u={strategy:2,maxLeafTris:1,indirect:!0,onProgress:t,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(n,u):this.bvh=new Xf(n,u)}else o.changeType===ug&&this.bvh.refit()}return{bvhChanged:o.changeType!==td,bvh:this.bvh,needsMaterialIndexUpdate:l,lights:h,iesTextures:f,geometry:n,materials:a,textures:c,objects:s}}};var Ri=class extends ze{set needsUpdate(t){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(t){super(t);for(let e in this.uniforms)Object.defineProperty(this,e,{get(){return this.uniforms[e].value},set(n){this.uniforms[e].value=n}})}setDefine(t,e=void 0){if(e==null){if(t in this.defines)return delete this.defines[t],this.needsUpdate=!0,!0}else if(this.defines[t]!==e)return this.defines[t]=e,this.needsUpdate=!0,!0;return!1}};var nd=class extends Ri{constructor(t){super({blending:He,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(t)}};function id(r=1){let t="uint";return r>1&&(t="uvec"+r),`
		${t} sobolReverseBits( ${t} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${t} sobolHashCombine( uint seed, ${t} v ) {

			return seed ^ ( v + ${t}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${t} sobolLaineKarrasPermutation( ${t} x, ${t} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${t} nestedUniformScrambleBase2( ${t} x, ${t} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function rd(r=1){let t="uint",e="float",n="",i=".r",s="1u";return r>1&&(t="uvec"+r,e="vec"+r,n=r+"",r===2?(i=".rg",s="uvec2( 1u, 2u )"):r===3?(i=".rgb",s="uvec3( 1u, 2u, 3u )"):(i="",s="uvec4( 1u, 2u, 3u, 4u )")),`

		${e} sobol${n}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${e} sobol_pt = sobolGetTexturePoint( shuffled_index )${i};
			${t} result = ${t}( sobol_pt * 16777216.0 );

			${t} seed2 = sobolHashCombine( seed, ${s} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${e}( result >> 8 );

		}
	`}var sd=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${id(1)}
	${id(2)}
	${id(3)}
	${id(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,A_=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,E_=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${rd(1)}
	${rd(2)}
	${rd(3)}
	${rd(4)}

`;var fg=class extends Ri{constructor(){super({blending:He,uniforms:{resolution:{value:new Y}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${sd}
				${A_}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}},od=class{generate(t,e=256){let n=new Ue(e,e,{type:Jt,format:$t,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),i=t.getRenderTarget();t.setRenderTarget(n);let s=new An(new fg);return s.material.resolution.set(e,e),s.render(t),t.setRenderTarget(i),s.dispose(),n}};var ad=class extends Fe{set bokehSize(t){this.fStop=this.getFocalLength()/t}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...t){super(...t),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(t,e){return super.copy(t,e),this.fStop=t.fStop,this.apertureBlades=t.apertureBlades,this.apertureRotation=t.apertureRotation,this.focusDistance=t.focusDistance,this.anamorphicRatio=t.anamorphicRatio,this}};var ld=class{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(t){t instanceof ad?(this.bokehSize=t.bokehSize,this.apertureBlades=t.apertureBlades,this.apertureRotation=t.apertureRotation,this.focusDistance=t.focusDistance,this.anamorphicRatio=t.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}};function cd(r){let t=new Uint16Array(r.length);for(let e=0,n=r.length;e<n;++e)t[e]=_n.toHalfFloat(r[e]);return t}function R_(r,t,e=0,n=r.length){let i=e,s=e+n-1;for(;i<s;){let o=i+s>>1;r[o]<t?i=o+1:s=o}return i-e}function oE(r,t,e){return .2126*r+.7152*t+.0722*e}function aE(r,t=Be){let e=r.clone();e.source=new $s({...e.image});let{width:n,height:i,data:s}=e.image,o=s;if(e.type!==t){t===Be?o=new Uint16Array(s.length):o=new Float32Array(s.length);let a;s instanceof Int8Array||s instanceof Int16Array||s instanceof Int32Array?a=2**(8*s.BYTES_PER_ELEMENT-1)-1:a=2**(8*s.BYTES_PER_ELEMENT)-1;for(let l=0,c=s.length;l<c;l++){let h=s[l];e.type===Be&&(h=_n.fromHalfFloat(s[l])),e.type!==Jt&&e.type!==Be&&(h/=a),t===Be&&(o[l]=_n.toHalfFloat(h))}e.image.data=o,e.type=t}if(e.flipY){let a=o;o=o.slice();for(let l=0;l<i;l++)for(let c=0;c<n;c++){let h=i-l-1,f=4*(l*n+c),u=4*(h*n+c);o[u+0]=a[f+0],o[u+1]=a[f+1],o[u+2]=a[f+2],o[u+3]=a[f+3]}e.flipY=!1,e.image.data=o}return e}var ud=class{constructor(){let t=new ue(cd(new Float32Array([0,0,0,0])),1,1);t.type=Be,t.format=$t,t.minFilter=ee,t.magFilter=ee,t.wrapS=Je,t.wrapT=Je,t.generateMipmaps=!1,t.needsUpdate=!0;let e=new ue(cd(new Float32Array([0,1])),1,2);e.type=Be,e.format=$n,e.minFilter=ee,e.magFilter=ee,e.generateMipmaps=!1,e.needsUpdate=!0;let n=new ue(cd(new Float32Array([0,0,1,1])),2,2);n.type=Be,n.format=$n,n.minFilter=ee,n.magFilter=ee,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=t,this.marginalWeights=e,this.conditionalWeights=n,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(t){let e=aE(t);e.wrapS=Je,e.wrapT=Re;let{width:n,height:i,data:s}=e.image,o=new Float32Array(n*i),a=new Float32Array(n*i),l=new Float32Array(i),c=new Float32Array(i),h=0,f=0;for(let p=0;p<i;p++){let g=0;for(let _=0;_<n;_++){let y=p*n+_,v=_n.fromHalfFloat(s[4*y+0]),S=_n.fromHalfFloat(s[4*y+1]),M=_n.fromHalfFloat(s[4*y+2]),T=oE(v,S,M);g+=T,h+=T,o[y]=T,a[y]=g}if(g!==0)for(let _=p*n,y=p*n+n;_<y;_++)o[_]/=g,a[_]/=g;f+=g,l[p]=g,c[p]=f}if(f!==0)for(let p=0,g=l.length;p<g;p++)l[p]/=f,c[p]/=f;let u=new Uint16Array(i),d=new Uint16Array(n*i);for(let p=0;p<i;p++){let g=(p+1)/i,_=R_(c,g);u[p]=_n.toHalfFloat((_+.5)/i)}for(let p=0;p<i;p++)for(let g=0;g<n;g++){let _=p*n+g,y=(g+1)/n,v=R_(a,y,p*n,n);d[_]=_n.toHalfFloat((v+.5)/n)}this.dispose();let{marginalWeights:m,conditionalWeights:x}=this;m.image={width:i,height:1,data:u},m.needsUpdate=!0,x.image={width:n,height:i,data:d},x.needsUpdate=!0,this.totalSum=h,this.map=e}};var dg=6,lE=0,cE=1,uE=2,hE=3,fE=4,mi=new C,Un=new C,C_=new bt,ca=new Ze,I_=new C,ua=new C,dE=new C(0,1,0),hd=class{constructor(){let t=new ue(new Float32Array(4),1,1);t.format=$t,t.type=Jt,t.wrapS=Re,t.wrapT=Re,t.generateMipmaps=!1,t.minFilter=Ht,t.magFilter=Ht,this.tex=t,this.count=0}updateFrom(t,e=[]){let n=this.tex,i=Math.max(t.length*dg,1),s=Math.ceil(Math.sqrt(i));n.image.width!==s&&(n.dispose(),n.image.data=new Float32Array(s*s*4),n.image.width=s,n.image.height=s);let o=n.image.data;for(let l=0,c=t.length;l<c;l++){let h=t[l],f=l*dg*4,u=0;for(let m=0;m<dg*4;m++)o[f+m]=0;h.getWorldPosition(Un),o[f+u++]=Un.x,o[f+u++]=Un.y,o[f+u++]=Un.z;let d=lE;if(h.isRectAreaLight&&h.isCircular?d=cE:h.isSpotLight?d=uE:h.isDirectionalLight?d=hE:h.isPointLight&&(d=fE),o[f+u++]=d,o[f+u++]=h.color.r,o[f+u++]=h.color.g,o[f+u++]=h.color.b,o[f+u++]=h.intensity,h.getWorldQuaternion(ca),h.isRectAreaLight)mi.set(h.width,0,0).applyQuaternion(ca),o[f+u++]=mi.x,o[f+u++]=mi.y,o[f+u++]=mi.z,u++,Un.set(0,h.height,0).applyQuaternion(ca),o[f+u++]=Un.x,o[f+u++]=Un.y,o[f+u++]=Un.z,o[f+u++]=mi.cross(Un).length()*(h.isCircular?Math.PI/4:1);else if(h.isSpotLight){let m=h.radius||0;I_.setFromMatrixPosition(h.matrixWorld),ua.setFromMatrixPosition(h.target.matrixWorld),C_.lookAt(I_,ua,dE),ca.setFromRotationMatrix(C_),mi.set(1,0,0).applyQuaternion(ca),o[f+u++]=mi.x,o[f+u++]=mi.y,o[f+u++]=mi.z,u++,Un.set(0,1,0).applyQuaternion(ca),o[f+u++]=Un.x,o[f+u++]=Un.y,o[f+u++]=Un.z,o[f+u++]=Math.PI*m*m,o[f+u++]=m,o[f+u++]=h.decay,o[f+u++]=h.distance,o[f+u++]=Math.cos(h.angle),o[f+u++]=Math.cos(h.angle*(1-h.penumbra)),o[f+u++]=h.iesMap?e.indexOf(h.iesMap):-1}else if(h.isPointLight){let m=mi.setFromMatrixPosition(h.matrixWorld);o[f+u++]=m.x,o[f+u++]=m.y,o[f+u++]=m.z,u++,u+=4,u+=1,o[f+u++]=h.decay,o[f+u++]=h.distance}else if(h.isDirectionalLight){let m=mi.setFromMatrixPosition(h.matrixWorld),x=Un.setFromMatrixPosition(h.target.matrixWorld);ua.subVectors(m,x).normalize(),o[f+u++]=ua.x,o[f+u++]=ua.y,o[f+u++]=ua.z}}this.count=t.length;let a=la(o.buffer);return this.hash!==a?(this.hash=a,n.needsUpdate=!0,!0):!1}};function P_(r,t,e,n,i){if(t>n)throw new Error;let s=r.length/t,o=r.constructor.BYTES_PER_ELEMENT*8,a=1;switch(r.constructor){case Uint8Array:case Uint16Array:case Uint32Array:a=2**o-1;break;case Int8Array:case Int16Array:case Int32Array:a=2**(o-1)-1;break}for(let l=0;l<s;l++){let c=4*l,h=t*l;for(let f=0;f<n;f++)e[i+c+f]=t>=f+1?r[h+f]/a:0}}var fd=class extends Bi{constructor(){super(),this._textures=[],this.type=Jt,this.format=$t,this.internalFormat="RGBA32F"}updateAttribute(t,e){let n=this._textures[t];n.updateFrom(e);let i=n.image,s=this.image;if(i.width!==s.width||i.height!==s.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");let{width:o,height:a,data:l}=s,h=o*a*4*t,f=e.itemSize;f===3&&(f=4),P_(n.image.data,f,l,4,h),this.dispose(),this.needsUpdate=!0}setAttributes(t){let e=t[0].count,n=t.length;for(let f=0,u=n;f<u;f++)if(t[f].count!==e)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");let i=this._textures;for(;i.length<n;){let f=new aa;i.push(f)}for(;i.length>n;)i.pop();for(let f=0,u=n;f<u;f++)i[f].updateFrom(t[f]);let o=i[0].image,a=this.image;(o.width!==a.width||o.height!==a.height||o.depth!==n)&&(a.width=o.width,a.height=o.height,a.depth=n,a.data=new Float32Array(a.width*a.height*a.depth*4));let{data:l,width:c,height:h}=a;for(let f=0,u=n;f<u;f++){let d=i[f],x=c*h*4*f,p=t[f].itemSize;p===3&&(p=4),P_(d.image.data,p,l,4,x)}this.dispose(),this.needsUpdate=!0}};var dd=class extends fd{updateNormalAttribute(t){this.updateAttribute(0,t)}updateTangentAttribute(t){this.updateAttribute(1,t)}updateUvAttribute(t){this.updateAttribute(2,t)}updateColorAttribute(t){this.updateAttribute(3,t)}updateFrom(t,e,n,i){this.setAttributes([t,e,n,i])}};function pg(r,t){return r.uuid<t.uuid?1:r.uuid>t.uuid?-1:0}function pd(r){return`${r.source.uuid}:${r.colorSpace}`}function pE(r){let t=new Set,e=[];for(let n=0,i=r.length;n<i;n++){let s=r[n],o=pd(s);t.has(o)||(t.add(o),e.push(s))}return e}function D_(r){let t=r.map(n=>n.iesMap||null).filter(n=>n),e=new Set(t);return Array.from(e).sort(pg)}function L_(r){let t=new Set;for(let n=0,i=r.length;n<i;n++){let s=r[n];for(let o in s){let a=s[o];a&&a.isTexture&&t.add(a)}}let e=Array.from(t);return pE(e).sort(pg)}function F_(r){let t=[];return r.traverse(e=>{e.visible&&(e.isRectAreaLight||e.isSpotLight||e.isPointLight||e.isDirectionalLight)&&t.push(e)}),t.sort(pg)}var gd=47,N_=gd*4,mg=class{constructor(){this._features={}}isUsed(t){return t in this._features}setUsed(t,e=!0){e===!1?delete this._features[t]:this._features[t]=!0}reset(){this._features={}}},md=class extends ue{constructor(){super(new Float32Array(4),1,1),this.format=$t,this.type=Jt,this.wrapS=Re,this.wrapT=Re,this.minFilter=Ht,this.magFilter=Ht,this.generateMipmaps=!1,this.features=new mg}updateFrom(t,e){function n(m,x,p=-1){if(x in m&&m[x]){let g=pd(m[x]);return f[g]}else return p}function i(m,x,p){return x in m?m[x]:p}function s(m,x,p,g){let _=m[x]&&m[x].isTexture?m[x]:null;if(_){_.matrixAutoUpdate&&_.updateMatrix();let y=_.matrix.elements,v=0;p[g+v++]=y[0],p[g+v++]=y[3],p[g+v++]=y[6],v++,p[g+v++]=y[1],p[g+v++]=y[4],p[g+v++]=y[7],v++}return 8}let o=0,a=t.length*gd,l=Math.ceil(Math.sqrt(a))||1,{image:c,features:h}=this,f={};for(let m=0,x=e.length;m<x;m++)f[pd(e[m])]=m;c.width!==l&&(this.dispose(),c.data=new Float32Array(l*l*4),c.width=l,c.height=l);let u=c.data;h.reset();for(let m=0,x=t.length;m<x;m++){let p=t[m];if(p.isFogVolumeMaterial){h.setUsed("FOG");for(let y=0;y<N_;y++)u[o+y]=0;u[o+0+0]=p.color.r,u[o+0+1]=p.color.g,u[o+0+2]=p.color.b,u[o+8+3]=i(p,"emissiveIntensity",0),u[o+12+0]=p.emissive.r,u[o+12+1]=p.emissive.g,u[o+12+2]=p.emissive.b,u[o+52+1]=p.density,u[o+52+3]=0,u[o+56+2]=4,o+=N_;continue}u[o++]=p.color.r,u[o++]=p.color.g,u[o++]=p.color.b,u[o++]=n(p,"map"),u[o++]=i(p,"metalness",0),u[o++]=n(p,"metalnessMap"),u[o++]=i(p,"roughness",0),u[o++]=n(p,"roughnessMap"),u[o++]=i(p,"ior",1.5),u[o++]=i(p,"transmission",0),u[o++]=n(p,"transmissionMap"),u[o++]=i(p,"emissiveIntensity",0),"emissive"in p?(u[o++]=p.emissive.r,u[o++]=p.emissive.g,u[o++]=p.emissive.b):(u[o++]=0,u[o++]=0,u[o++]=0),u[o++]=n(p,"emissiveMap"),u[o++]=n(p,"normalMap"),"normalScale"in p?(u[o++]=p.normalScale.x,u[o++]=p.normalScale.y):(u[o++]=1,u[o++]=1),u[o++]=i(p,"clearcoat",0),u[o++]=n(p,"clearcoatMap"),u[o++]=i(p,"clearcoatRoughness",0),u[o++]=n(p,"clearcoatRoughnessMap"),u[o++]=n(p,"clearcoatNormalMap"),"clearcoatNormalScale"in p?(u[o++]=p.clearcoatNormalScale.x,u[o++]=p.clearcoatNormalScale.y):(u[o++]=1,u[o++]=1),o++,u[o++]=i(p,"sheen",0),"sheenColor"in p?(u[o++]=p.sheenColor.r,u[o++]=p.sheenColor.g,u[o++]=p.sheenColor.b):(u[o++]=0,u[o++]=0,u[o++]=0),u[o++]=n(p,"sheenColorMap"),u[o++]=i(p,"sheenRoughness",0),u[o++]=n(p,"sheenRoughnessMap"),u[o++]=n(p,"iridescenceMap"),u[o++]=n(p,"iridescenceThicknessMap"),u[o++]=i(p,"iridescence",0),u[o++]=i(p,"iridescenceIOR",1.3);let g=i(p,"iridescenceThicknessRange",[100,400]);u[o++]=g[0],u[o++]=g[1],"specularColor"in p?(u[o++]=p.specularColor.r,u[o++]=p.specularColor.g,u[o++]=p.specularColor.b):(u[o++]=1,u[o++]=1,u[o++]=1),u[o++]=n(p,"specularColorMap"),u[o++]=i(p,"specularIntensity",1),u[o++]=n(p,"specularIntensityMap");let _=i(p,"thickness",0)===0&&i(p,"attenuationDistance",1/0)===1/0;if(u[o++]=Number(_),o++,"attenuationColor"in p?(u[o++]=p.attenuationColor.r,u[o++]=p.attenuationColor.g,u[o++]=p.attenuationColor.b):(u[o++]=1,u[o++]=1,u[o++]=1),u[o++]=i(p,"attenuationDistance",1/0),u[o++]=n(p,"alphaMap"),u[o++]=p.opacity,u[o++]=p.alphaTest,!_&&p.transmission>0)u[o++]=0;else switch(p.side){case Fn:u[o++]=1;break;case je:u[o++]=-1;break;case fn:u[o++]=0;break}u[o++]=Number(i(p,"matte",!1)),u[o++]=Number(i(p,"castShadow",!0)),u[o++]=Number(p.vertexColors)|Number(p.flatShading)<<1,u[o++]=Number(p.transparent),o+=s(p,"map",u,o),o+=s(p,"metalnessMap",u,o),o+=s(p,"roughnessMap",u,o),o+=s(p,"transmissionMap",u,o),o+=s(p,"emissiveMap",u,o),o+=s(p,"normalMap",u,o),o+=s(p,"clearcoatMap",u,o),o+=s(p,"clearcoatNormalMap",u,o),o+=s(p,"clearcoatRoughnessMap",u,o),o+=s(p,"sheenColorMap",u,o),o+=s(p,"sheenRoughnessMap",u,o),o+=s(p,"iridescenceMap",u,o),o+=s(p,"iridescenceThicknessMap",u,o),o+=s(p,"specularColorMap",u,o),o+=s(p,"specularIntensityMap",u,o),o+=s(p,"alphaMap",u,o)}let d=la(u.buffer);return this.hash!==d?(this.hash=d,this.needsUpdate=!0,!0):!1}};var U_=new ct;function mE(r){return r?`${r.uuid}:${r.version}`:null}function gE(r,t){for(let e in t)e in r&&(r[e]=t[e])}var Kc=class extends Ks{constructor(t,e,n){let i={format:$t,type:Qe,minFilter:ee,magFilter:ee,wrapS:Je,wrapT:Je,generateMipmaps:!1,...n};super(t,e,1,i),gE(this.texture,i),this.texture.setTextures=(...o)=>{this.setTextures(...o)},this.hashes=[null];let s=new An(new gg);this.fsQuad=s}setTextures(t,e,n=this.width,i=this.height){let s=t.getRenderTarget(),o=t.toneMapping,a=t.getClearAlpha();t.getClearColor(U_);let l=e.length||1;(n!==this.width||i!==this.height||this.depth!==l)&&(this.setSize(n,i,l),this.hashes=new Array(l).fill(null)),t.setClearColor(0,0),t.toneMapping=Nn;let c=this.fsQuad,h=this.hashes,f=!1;for(let u=0,d=l;u<d;u++){let m=e[u],x=mE(m);m&&(h[u]!==x||m.isWebGLRenderTarget)&&(m.matrixAutoUpdate=!1,m.matrix.identity(),c.material.map=m,t.setRenderTarget(this,u),c.render(t),m.updateMatrix(),m.matrixAutoUpdate=!0,h[u]=x,f=!0)}return c.material.map=null,t.setClearColor(U_,a),t.setRenderTarget(s),t.toneMapping=o,f}dispose(){super.dispose(),this.fsQuad.dispose()}},gg=class extends ze{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}};function xE(r,t=Math.random()){for(let e=r.length-1;e>0;e--){let n=Math.floor(t()*(e+1)),i=r[e];r[e]=r[n],r[n]=i}return r}var xd=class{constructor(t,e,n=Math.random){let i=t**e,s=new Uint16Array(i),o=i;for(let a=0;a<i;a++)s[a]=a;this.samples=new Float32Array(e),this.strataCount=t,this.reset=function(){for(let a=0;a<i;a++)s[a]=a;o=0},this.reshuffle=function(){o=0},this.next=function(){let{samples:a}=this;o>=s.length&&(xE(s,n),this.reshuffle());let l=s[o++];for(let c=0;c<e;c++)a[c]=(l%t+n())/t,l=Math.floor(l/t);return a}}};var vd=class{constructor(t,e,n=Math.random){let i=0;for(let l of e)i+=l;let s=new Float32Array(i),o=[],a=0;for(let l of e){let c=new xd(t,l,n);c.samples=new Float32Array(s.buffer,a,c.samples.length),a+=c.samples.length*4,o.push(c)}this.samples=s,this.strataCount=t,this.next=function(){for(let l of o)l.next();return s},this.reshuffle=function(){for(let l of o)l.reshuffle()},this.reset=function(){for(let l of o)l.reset()}}};var xg=class{constructor(t=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=t}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}},_d=class extends ue{constructor(t=1,e=1,n=8){super(new Float32Array(1),1,1,$t,Jt),this.minFilter=Ht,this.magFilter=Ht,this.strata=n,this.sampler=null,this.generator=new xg,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(t,e,n)}init(t=this.image.height,e=this.image.width,n=this.strata){let{image:i}=this;if(i.width===e&&i.height===t&&this.sampler!==null)return;let s=new Array(t*e).fill(4),o=new vd(n,s,this.random);i.width=e,i.height=t,i.data=o.samples,this.sampler=o,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}};function B_(r,t=Math.random){for(let e=r.length-1;e>0;e--){let n=~~((t()-1e-6)*e),i=r[e];r[e]=r[n],r[n]=i}}function O_(r,t){r.fill(0);for(let e=0;e<t;e++)r[e]=1}var jc=class{constructor(t){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(t),this.setSigma(1.5)}findVoid(){let{score:t,binaryPattern:e}=this,n=1/0,i=-1;for(let s=0,o=e.length;s<o;s++){if(e[s]!==0)continue;let a=t[s];a<n&&(n=a,i=s)}return i}findCluster(){let{score:t,binaryPattern:e}=this,n=-1/0,i=-1;for(let s=0,o=e.length;s<o;s++){if(e[s]!==1)continue;let a=t[s];a>n&&(n=a,i=s)}return i}setSigma(t){if(t===this.sigma)return;let e=~~(Math.sqrt(20*t**2)+1),n=2*e+1,i=new Float32Array(n*n),s=t*t;for(let o=-e;o<=e;o++)for(let a=-e;a<=e;a++){let l=(e+a)*n+o+e,c=o*o+a*a;i[l]=Math.E**(-c/(2*s))}this.lookupTable=i,this.sigma=t,this.radius=e}resize(t){this.size!==t&&(this.size=t,this.score=new Float32Array(t*t),this.binaryPattern=new Uint8Array(t*t))}invert(){let{binaryPattern:t,score:e,size:n}=this;e.fill(0);for(let i=0,s=t.length;i<s;i++)if(t[i]===0){let o=~~(i/n),a=i-o*n;this.updateScore(a,o,1),t[i]=1}else t[i]=0}updateScore(t,e,n){let{size:i,score:s,lookupTable:o}=this,a=this.radius,l=2*a+1;for(let c=-a;c<=a;c++)for(let h=-a;h<=a;h++){let f=(a+h)*l+c+a,u=o[f],d=t+c;d=d<0?i+d:d%i;let m=e+h;m=m<0?i+m:m%i;let x=m*i+d;s[x]+=n*u}}addPointIndex(t){this.binaryPattern[t]=1;let e=this.size,n=~~(t/e),i=t-n*e;this.updateScore(i,n,1),this.count++}removePointIndex(t){this.binaryPattern[t]=0;let e=this.size,n=~~(t/e),i=t-n*e;this.updateScore(i,n,-1),this.count--}copy(t){this.resize(t.size),this.score.set(t.score),this.binaryPattern.set(t.binaryPattern),this.setSigma(t.sigma),this.count=t.count}};var yd=class{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new jc(1),this.savedSamples=new jc(1)}generate(){let{samples:t,savedSamples:e,sigma:n,majorityPointsRatio:i,size:s}=this;t.resize(s),t.setSigma(n);let o=Math.floor(s*s*i),a=t.binaryPattern;O_(a,o),B_(a,this.random);for(let f=0,u=a.length;f<u;f++)a[f]===1&&t.addPointIndex(f);for(;;){let f=t.findCluster();t.removePointIndex(f);let u=t.findVoid();if(f===u){t.addPointIndex(f);break}t.addPointIndex(u)}let l=new Uint32Array(s*s);e.copy(t);let c;for(c=t.count-1;c>=0;){let f=t.findCluster();t.removePointIndex(f),l[f]=c,c--}let h=s*s;for(c=e.count;c<h/2;){let f=e.findVoid();e.addPointIndex(f),l[f]=c,c++}for(e.invert();c<h;){let f=e.findCluster();e.removePointIndex(f),l[f]=c,c++}return{data:l,maxValue:h}}};function vE(r){return r>=3?4:r}function _E(r){switch(r){case 1:return $n;case 2:return Hn;default:return $t}}var bd=class extends ue{constructor(t=64,e=1){super(new Float32Array(4),1,1,$t,Jt),this.minFilter=Ht,this.magFilter=Ht,this.size=t,this.channels=e,this.update()}update(){let t=this.channels,e=this.size,n=new yd;n.channels=t,n.size=e;let i=vE(t),s=_E(i);(this.image.width!==e||s!==this.format)&&(this.image.width=e,this.image.height=e,this.image.data=new Float32Array(e**2*i),this.format=s,this.dispose());let o=this.image.data;for(let a=0,l=t;a<l;a++){let c=n.generate(),h=c.data,f=c.maxValue;for(let u=0,d=h.length;u<d;u++){let m=h[u]/f;o[u*i+a]=m}}this.needsUpdate=!0}};var z_=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`;var k_=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`;var V_=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`;var H_=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;
		mat3 alphaMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * uint( MATERIAL_PIXELS );

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );
		m.alphaMapTransform = m.alphaMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 30u );

		return m;

	}

`;var G_=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`;var W_=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`;var X_=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`;var q_=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`;var Y_=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`;var Z_=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`;var $_=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`;var J_=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`;var Sd=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`;var vg=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`;var K_=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`;var j_=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`;var Q_=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`;var ty=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`;var ey=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`;var ny=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`;var iy=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * uint( MATERIAL_PIXELS );
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`;var ry=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
					albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`;var sy=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = sampleAperture( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`;var oy=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`;var ay=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			vec3 uvPrime = material.alphaMapTransform * vec3( uv, 1 );
			albedo.a *= texture2D( textures, vec3( uvPrime.xy, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`;var ly=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`;var cy=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`;var Md=class extends Ri{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(t){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3,MATERIAL_PIXELS:gd},uniforms:{resolution:{value:new Y},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new ld},cameraWorldMatrix:{value:new bt},invProjectionMatrix:{value:new bt},bvh:{value:new Yf},attributesArray:{value:new dd},materialIndexAttribute:{value:new oa},materials:{value:new md},textures:{value:new Kc().texture},lights:{value:new hd},iesProfiles:{value:new Kc(360,180,{type:Be,wrapS:Re,wrapT:Re}).texture},environmentIntensity:{value:1},environmentRotation:{value:new bt},envMapInfo:{value:new ud},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new bt},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new _d},stratifiedOffsetTexture:{value:new bd(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${fs.common_functions}
				${fs.bvh_struct_definitions}
				${fs.bvh_ray_functions}

				// uniform structs
				${z_}
				${V_}
				${k_}
				${H_}
				${G_}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${K_}

				#elif RANDOM_TYPE == 1 	// Sobol

					${vg}
					${sd}
					${E_}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${vg}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${J_}
				${Y_}
				${Sd}
				${Z_}
				${$_}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${q_}
				${W_}
				${X_}

				${iy}
				${ty}
				${ny}
				${ey}
				${Q_}
				${j_}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${ly}
				${sy}
				${cy}
				${ry}
				${oy}
				${ay}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(t)}};function*bE(){let{_renderer:r,_fsQuad:t,_blendQuad:e,_primaryTarget:n,_blendTargets:i,_sobolTarget:s,_subframe:o,alpha:a,material:l}=this,c=new se,h=new se,f=e.material,[u,d]=i;for(;;){a?(f.opacity=this._opacityFactor/(this.samples+1),l.blending=He,l.opacity=1):(l.opacity=this._opacityFactor/(this.samples+1),l.blending=ui);let[m,x,p,g]=o,_=n.width,y=n.height;l.resolution.set(_*p,y*g),l.sobolTexture=s.texture,l.stratifiedTexture.init(20,l.bounces+l.transmissiveBounces+5),l.stratifiedTexture.next(),l.seed++;let v=this.tiles.x||1,S=this.tiles.y||1,M=v*S,T=Math.ceil(_*p),b=Math.ceil(y*g),w=Math.floor(m*_),E=Math.floor(x*y),P=Math.ceil(T/v),I=Math.ceil(b/S);for(let F=0;F<S;F++)for(let L=0;L<v;L++){let N=r.getRenderTarget(),z=r.autoClear,W=r.getScissorTest();r.getScissor(c),r.getViewport(h);let Q=L,X=F;if(!this.stableTiles){let j=this._currentTile%(v*S);Q=j%v,X=~~(j/v),this._currentTile=j+1}let K=S-X-1;n.scissor.set(w+Q*P,E+K*I,Math.min(P,T-Q*P),Math.min(I,b-K*I)),n.viewport.set(w,E,T,b),r.setRenderTarget(n),r.setScissorTest(!0),r.autoClear=!1,t.render(r),r.setViewport(h),r.setScissor(c),r.setScissorTest(W),r.setRenderTarget(N),r.autoClear=z,a&&(f.target1=u.texture,f.target2=n.texture,r.setRenderTarget(d),e.render(r),r.setRenderTarget(N)),this.samples+=1/M,L===v-1&&F===S-1&&(this.samples=Math.round(this.samples)),yield}[u,d]=[d,u]}}var uy=new ct,Qc=class{get material(){return this._fsQuad.material}set material(t){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),t.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=t}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(t){this._alpha!==t&&(t||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=t,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(t){this.camera=null,this.tiles=new Y(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new se(0,0,1,1),this._opacityFactor=1,this._renderer=t,this._alpha=!1,this._fsQuad=new An(new Md),this._blendQuad=new An(new nd),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new od().generate(t),this._primaryTarget=new Ue(1,1,{format:$t,type:Jt,magFilter:Ht,minFilter:Ht}),this._blendTargets=[new Ue(1,1,{format:$t,type:Jt,magFilter:Ht,minFilter:Ht}),new Ue(1,1,{format:$t,type:Jt,magFilter:Ht,minFilter:Ht})],this._compileFunction=()=>{let e=this.compileMaterial(this._fsQuad._mesh);e.then(()=>{this._compilePromise===e&&(this._compilePromise=null)}),this._compilePromise=e},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(t){let{material:e}=this;e.cameraWorldMatrix.copy(t.matrixWorld),e.invProjectionMatrix.copy(t.projectionMatrixInverse),e.physicalCamera.updateFrom(t);let n=0;t.projectionMatrix.elements[15]>0&&(n=1),t.isEquirectCamera&&(n=2),e.setDefine("CAMERA_TYPE",n),this.camera=t}setSize(t,e){t=Math.ceil(t),e=Math.ceil(e),!(this._primaryTarget.width===t&&this._primaryTarget.height===e)&&(this._primaryTarget.setSize(t,e),this._blendTargets[0].setSize(t,e),this._blendTargets[1].setSize(t,e),this.reset())}getSize(t){t.x=this._primaryTarget.width,t.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){let{_renderer:t,_primaryTarget:e,_blendTargets:n}=this,i=t.getRenderTarget(),s=t.getClearAlpha();t.getClearColor(uy),t.setRenderTarget(e),t.setClearColor(0,0),t.clearColor(),t.setRenderTarget(n[0]),t.setClearColor(0,0),t.clearColor(),t.setRenderTarget(n[1]),t.setClearColor(0,0),t.clearColor(),t.setClearColor(uy,s),t.setRenderTarget(i),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=bE.call(this)),this._task.next())}};var xs=new Y,hy=new Y,Td=new Ro,wd=new ct,Ad=class extends ue{constructor(t=512,e=512){super(new Float32Array(t*e*4),t,e,$t,Jt,wi,Je,Re,ee,ee),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;let{data:t,width:e,height:n}=this.image;for(let i=0;i<e;i++)for(let s=0;s<n;s++){hy.set(e,n),xs.set(i/e,s/n),xs.x-=.5,xs.y=1-xs.y,Td.theta=xs.x*2*Math.PI,Td.phi=xs.y*Math.PI,Td.radius=1,this.generationCallback(Td,xs,hy,wd);let a=4*(s*e+i);t[a+0]=wd.r,t[a+1]=wd.g,t[a+2]=wd.b,t[a+3]=1}}copy(t){return super.copy(t),this.generationCallback=t.generationCallback,this}};var fy=new C,ha=class extends Ad{constructor(t=512){super(t,t),this.topColor=new ct().set(16777215),this.bottomColor=new ct().set(0),this.exponent=2,this.generationCallback=(e,n,i,s)=>{fy.setFromSpherical(e);let o=fy.y*.5+.5;s.lerpColors(this.bottomColor,this.topColor,o**this.exponent)}}copy(t){return super.copy(t),this.topColor.copy(t.topColor),this.bottomColor.copy(t.bottomColor),this}};var Ed=class extends ze{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}constructor(t){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(t)}};var _g=class extends ze{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${Sd}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}},tu=class{constructor(t){this._renderer=t,this._quad=new An(new _g)}generate(t,e=null,n=null){if(!t.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");let i=t.images[0],s=this._renderer,o=this._quad;e===null&&(e=4*i.height),n===null&&(n=2*i.height);let a=new Ue(e,n,{type:Jt,colorSpace:i.colorSpace}),l=i.height,c=Math.log2(l)-2,h=1/l,f=1/(3*Math.max(Math.pow(2,c),112));o.material.defines.CUBEUV_MAX_MIP=`${c}.0`,o.material.defines.CUBEUV_TEXEL_WIDTH=f,o.material.defines.CUBEUV_TEXEL_HEIGHT=h,o.material.uniforms.envMap.value=t,o.material.uniforms.flipEnvMap.value=t.isRenderTargetTexture?1:-1,o.material.needsUpdate=!0;let u=s.getRenderTarget(),d=s.autoClear;s.autoClear=!0,s.setRenderTarget(a),o.render(s),s.setRenderTarget(u),s.autoClear=d;let m=new Uint16Array(e*n*4),x=new Float32Array(e*n*4);s.readRenderTargetPixels(a,0,0,e,n,x),a.dispose();for(let g=0,_=x.length;g<_;g++)m[g]=_n.toHalfFloat(x[g]);let p=new ue(m,e,n,$t,Be);return p.minFilter=cf,p.magFilter=ee,p.wrapS=Je,p.wrapT=Je,p.mapping=wi,p.needsUpdate=!0,p}dispose(){this._quad.dispose()}};function SE(r){return r.extensions.get("EXT_float_blend")}var fa=new Y,Rd=class{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(t){this._pathTracer.material.setDefine("FEATURE_MIS",t?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(t){this._pathTracer.material.transmissiveBounces=t}get bounces(){return this._pathTracer.material.bounces}set bounces(t){this._pathTracer.material.bounces=t}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(t){this._pathTracer.material.filterGlossyFactor=t}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(t){this._pathTracer.stableNoise=t}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(t){this._renderer=t,this._generator=new ed,this._pathTracer=new Qc(t),this._queueReset=!1,this._clock=new Eo,this._compilePromise=null,this._lowResPathTracer=new Qc(t),this._lowResPathTracer.tiles.set(1,1),this._quad=new An(new Ed({map:null,transparent:!0,blending:He,premultipliedAlpha:t.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new Y(1024,1024),this.rasterizeSceneCallback=(e,n)=>{this._renderer.render(e,n)},this.renderToCanvasCallback=(e,n,i)=>{let s=n.autoClear;n.autoClear=!1,i.render(n),n.autoClear=s},this.setScene(new Oi,new Fe)}setBVHWorker(t){this._generator.setBVHWorker(t)}setScene(t,e,n={}){t.updateMatrixWorld(!0),e.updateMatrixWorld();let i=this._generator;if(i.setObjects(t),this._buildAsync)return i.generateAsync(n.onProgress).then(s=>this._updateFromResults(t,e,s));{let s=i.generate();return this._updateFromResults(t,e,s)}}setSceneAsync(...t){this._buildAsync=!0;let e=this.setScene(...t);return this._buildAsync=!1,e}setCamera(t){this.camera=t,this.updateCamera()}updateCamera(){let t=this.camera;t.updateMatrixWorld(),this._pathTracer.setCamera(t),this._lowResPathTracer.setCamera(t),this.reset()}updateMaterials(){let t=this._pathTracer.material,e=this._renderer,n=this._materials,i=this.textureSize,s=L_(n);t.textures.setTextures(e,s,i.x,i.y),t.materials.updateFrom(n,s),this.reset()}updateLights(){let t=this.scene,e=this._renderer,n=this._pathTracer.material,i=F_(t),s=D_(i);n.lights.updateFrom(i,s),n.iesProfiles.setTextures(e,s),this.reset()}updateEnvironment(){let t=this.scene,e=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),e.backgroundBlur=t.backgroundBlurriness,e.backgroundIntensity=t.backgroundIntensity??1,e.backgroundRotation.makeRotationFromEuler(t.backgroundRotation).invert(),t.background===null)e.backgroundMap=null,e.backgroundAlpha=0;else if(t.background.isColor){this._colorBackground=this._colorBackground||new ha(16);let n=this._colorBackground;n.topColor.equals(t.background)||(n.topColor.set(t.background),n.bottomColor.set(t.background),n.update()),e.backgroundMap=n,e.backgroundAlpha=1}else if(t.background.isCubeTexture){if(t.background!==this._previousBackground){let n=new tu(this._renderer).generate(t.background);this._internalBackground=n,e.backgroundMap=n,e.backgroundAlpha=1}}else e.backgroundMap=t.background,e.backgroundAlpha=1;if(e.environmentIntensity=t.environment!==null?t.environmentIntensity??1:0,e.environmentRotation.makeRotationFromEuler(t.environmentRotation).invert(),this._previousEnvironment!==t.environment&&t.environment!==null)if(t.environment.isCubeTexture){let n=new tu(this._renderer).generate(t.environment);e.envMapInfo.updateFrom(n)}else e.envMapInfo.updateFrom(t.environment);this._previousEnvironment=t.environment,this._previousBackground=t.background,this.reset()}_updateFromResults(t,e,n){let{materials:i,geometry:s,bvh:o,bvhChanged:a,needsMaterialIndexUpdate:l}=n;this._materials=i;let h=this._pathTracer.material;return a&&(h.bvh.updateFrom(o),h.attributesArray.updateFrom(s.attributes.normal,s.attributes.tangent,s.attributes.uv,s.attributes.color)),l&&h.materialIndexAttribute.updateFrom(s.attributes.materialIndex),this._previousScene=t,this.scene=t,this.camera=e,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),n}renderSample(){let t=this._lowResPathTracer,e=this._pathTracer,n=this._renderer,i=this._clock,s=this._quad;this._updateScale(),this._queueReset&&(e.reset(),t.reset(),this._queueReset=!1,s.material.opacity=0,i.start());let o=i.getDelta()*1e3,a=i.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=a&&!this.isCompiling&&e.update(),e.alpha=e.material.backgroundAlpha!==1||!SE(n),t.alpha=e.alpha,this.renderToCanvas){let l=this._renderer,c=this.minSamples;if(a>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?s.material.opacity=Math.min(s.material.opacity+o/this.fadeDuration,1):s.material.opacity=1),!this.enablePathTracing||this.samples<c||s.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){t.samples<1&&(t.material=e.material,t.update());let h=s.material.opacity;s.material.opacity=1-s.material.opacity,s.material.map=t.target.texture,s.render(l),s.material.opacity=h}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&s.material.opacity>0&&(s.material.opacity<1&&(s.material.blending=this.dynamicLowRes?Po:ui),s.material.map=e.target.texture,this.renderToCanvasCallback(e.target,l,s),s.material.blending=He)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._quad.dispose(),this._quad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(fa);let t=Math.floor(this.renderScale*fa.x),e=Math.floor(this.renderScale*fa.y);if(this._pathTracer.getSize(fa),fa.x!==t||fa.y!==e){let n=this.lowResScale;this._pathTracer.setSize(t,e),this._lowResPathTracer.setSize(Math.floor(t*n),Math.floor(e*n))}}}};var Cd=class extends Ri{constructor(t){super({blending:He,transparent:!1,depthWrite:!1,depthTest:!1,defines:{USE_SLIDER:0},uniforms:{sigma:{value:5},threshold:{value:.03},kSigma:{value:1},map:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}

			`,fragmentShader:`

				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
				//  Copyright (c) 2018-2019 Michele Morrone
				//  All rights reserved.
				//
				//  https://michelemorrone.eu - https://BrutPitt.com
				//
				//  me@michelemorrone.eu - brutpitt@gmail.com
				//  twitter: @BrutPitt - github: BrutPitt
				//
				//  https://github.com/BrutPitt/glslSmartDeNoise/
				//
				//  This software is distributed under the terms of the BSD 2-Clause license
				//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

				uniform sampler2D map;

				uniform float sigma;
				uniform float threshold;
				uniform float kSigma;
				uniform float opacity;

				varying vec2 vUv;

				#define INV_SQRT_OF_2PI 0.39894228040143267793994605993439
				#define INV_PI 0.31830988618379067153776752674503

				// Parameters:
				//	 sampler2D tex	 - sampler image / texture
				//	 vec2 uv		   - actual fragment coord
				//	 float sigma  >  0 - sigma Standard Deviation
				//	 float kSigma >= 0 - sigma coefficient
				//		 kSigma * sigma  -->  radius of the circular kernel
				//	 float threshold   - edge sharpening threshold
				vec4 smartDeNoise( sampler2D tex, vec2 uv, float sigma, float kSigma, float threshold ) {

					float radius = round( kSigma * sigma );
					float radQ = radius * radius;

					float invSigmaQx2 = 0.5 / ( sigma * sigma );
					float invSigmaQx2PI = INV_PI * invSigmaQx2;

					float invThresholdSqx2 = 0.5 / ( threshold * threshold );
					float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;

					vec4 centrPx = texture2D( tex, uv );
					centrPx.rgb *= centrPx.a;

					float zBuff = 0.0;
					vec4 aBuff = vec4( 0.0 );
					vec2 size = vec2( textureSize( tex, 0 ) );

					vec2 d;
					for ( d.x = - radius; d.x <= radius; d.x ++ ) {

						float pt = sqrt( radQ - d.x * d.x );

						for ( d.y = - pt; d.y <= pt; d.y ++ ) {

							float blurFactor = exp( - dot( d, d ) * invSigmaQx2 ) * invSigmaQx2PI;

							vec4 walkPx = texture2D( tex, uv + d / size );
							walkPx.rgb *= walkPx.a;

							vec4 dC = walkPx - centrPx;
							float deltaFactor = exp( - dot( dC.rgba, dC.rgba ) * invThresholdSqx2 ) * invThresholdSqrt2PI * blurFactor;

							zBuff += deltaFactor;
							aBuff += deltaFactor * walkPx;

						}

					}

					return aBuff / zBuff;

				}

				void main() {

					gl_FragColor = smartDeNoise( map, vec2( vUv.x, vUv.y ), sigma, kSigma, threshold );
					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <premultiplied_alpha_fragment>

					gl_FragColor.a *= opacity;

				}

			`}),this.setValues(t)}};var nn=.001,ME=.35;de.DEFAULT_UP.set(0,0,1);var nu={resolution:[1400,1e3],samples:96,bounces:4,exposure:-.3,denoise:!0,crease_deg:30,floor:{rgb:[.28,.25,.22],roughness:.85},world:{rgb:[.75,.73,.7],strength:.35},lights:[{name:"key",position:[1.4,-1.6,1.9],size:1.6,power:280},{name:"fill",position:[-1.6,-.9,1.3],size:2,power:90},{name:"rim",position:[0,1.7,.5],size:1.2,power:60}]};function eu(r){return new ct(r[0],r[1],r[2])}function dy(r){let t=Math.sin(r*12.9898+78.233)*43758.5453;return t-Math.floor(t)}var py={pbr:{},powder_coat:{rgb:[.01,.01,.011],metalness:.1,roughness:.6},plastic:{rgb:[.08,.08,.09],metalness:0,roughness:.35},brushed_metal:{rgb:[.55,.55,.57],metalness:1,roughness:.35},glass:{rgb:[1,1,1],roughness:.02,metalness:0,transmission:1,ior:1.5,thickness_mm:4},wood:{roughness:.65,metalness:0,scale:.0013,lamella_mm:40,end:"x",warm_rgb:[.8,.58,.38],warm_factor:.75,end_rgb:[.21,.12,.065],end_roughness:.6}};async function TE(r,t){let e=await new Mo().loadAsync(r);return e.colorSpace=t,e.wrapS=e.wrapT=Je,e}var my={diff:["map","srgb"],rough:["roughnessMap",""],metal:["metalnessMap",""],normal:["normalMap",""],emissive_map:["emissiveMap","srgb"]};function wE(r){return{...py[r.type]??py.pbr,...r}}function yg(r){let t=r.rgb?eu(r.rgb):new ct(1,1,1);if(r.warm_rgb){let n=r.warm_factor??.75;t=t.multiply(new ct(1-n+n*r.warm_rgb[0],1-n+n*r.warm_rgb[1],1-n+n*r.warm_rgb[2]))}let e=new gr({color:t,roughness:r.roughness??.5,metalness:r.metalness??0});return r.clearcoat!=null&&(e.clearcoat=r.clearcoat,e.clearcoatRoughness=r.clearcoat_roughness??.1),r.transmission!=null&&(e.transmission=r.transmission,e.ior=r.ior??1.5,e.thickness=(r.thickness_mm??1)*nn,r.attenuation_rgb&&(e.attenuationColor=eu(r.attenuation_rgb),e.attenuationDistance=(r.attenuation_mm??10)*nn)),r.sheen!=null&&(e.sheen=r.sheen,e.sheenRoughness=r.sheen_roughness??.5,r.sheen_rgb&&(e.sheenColor=eu(r.sheen_rgb))),r.emissive_rgb&&(e.emissive=eu(r.emissive_rgb),e.emissiveIntensity=r.emissive_intensity??1),r.opacity!=null&&r.opacity<1&&(e.opacity=r.opacity,e.transparent=!0),r.iridescence!=null&&(e.iridescence=r.iridescence),r.specular_intensity!=null&&(e.specularIntensity=r.specular_intensity),r.double_sided&&(e.side=fn),e}async function AE(r,t,e){for(let[n,[i,s]]of Object.entries(my))t[n]&&(r[i]=await TE(e+t[n],s==="srgb"?rn:Jn),n==="normal"&&(r.normalScale=new Y(t.normal_scale??1,t.normal_scale??1)))}function EE(r){return Object.keys(my).some(t=>r[t])}function RE(r,t){let e=t.scale??.001,n=t.lamella_mm??0,i=101.3*(t.seed??0)+.17,s=r.attributes.position,o=r.attributes.normal,a={position:[],normal:[],uv:[],color:[]},l={position:[],normal:[]};for(let h=0;h<s.count;h+=3){let f=0,u=0,d=0;for(let T=0;T<3;T++)f+=o.getX(h+T),u+=o.getY(h+T),d+=o.getZ(h+T);let m=Math.hypot(f,u,d)||1,x=Math.abs(f)/m,p=Math.abs(u)/m,g=Math.abs(d)/m;if(t.end==="z"?g<.8:t.end==="x"?x>.5:!1){for(let T=0;T<3;T++)l.position.push(s.getX(h+T),s.getY(h+T),s.getZ(h+T)),l.normal.push(o.getX(h+T),o.getY(h+T),o.getZ(h+T));continue}let y=0;for(let T=0;T<3;T++)y+=s.getY(h+T)/3;let v=(n>0?Math.floor(y/n):0)+i,S=n>0?dy(v)*400:0,M=(n>0?.88+.24*dy(v+.44):1)*(t.lighten??1);for(let T=0;T<3;T++){let b=s.getX(h+T),w=s.getY(h+T),E=s.getZ(h+T);a.position.push(b,w,E),a.normal.push(o.getX(h+T),o.getY(h+T),o.getZ(h+T));let P,I;g>=x&&g>=p?(P=w,I=b+S):p>=x?(P=E,I=b+S):(P=w,I=E),a.uv.push(P*e,I*e),a.color.push(M,M,M,1)}}let c=(h,f)=>{let u=new It;return u.setAttribute("position",new ht(h.position,3)),u.setAttribute("normal",new ht(h.normal,3)),f&&(u.setAttribute("uv",new ht(h.uv,2)),u.setAttribute("color",new ht(h.color,4))),u};return{side:c(a,!0),end:l.position.length?c(l,!1):null}}async function CE(r,t,e){let n=wE(t??{});if(!EE(n)&&!n.end)return[new ge(r,yg(n))];let{side:i,end:s}=RE(r,n),o=yg(n);o.vertexColors=n.vertex_colors!==!1&&(n.lamella_mm>0||n.lighten!=null),await AE(o,n,e);let a=[new ge(i,o)];return s&&a.push(new ge(s,yg({...n.end_material??{},rgb:n.end_material?.rgb??n.end_rgb??[.21,.12,.065],roughness:n.end_material?.roughness??n.end_roughness??.6}))),a}async function gy(r,t,e){let n=new bf,i=[];for(let s of r.parts){e(`loading ${s.file}`);let o=await n.loadAsync(t.base+s.url),a=t.crease_deg>0?Mv(o,t.crease_deg*Math.PI/180):o,l=new ri;l.name=s.file;for(let c of await CE(a,s.material??{},t.base))l.add(c);if(l.scale.setScalar(nn),s.offset&&l.position.set(s.offset[0]*nn,s.offset[1]*nn,s.offset[2]*nn),s.euler){let[c,h,f]=s.euler.map(u=>u*Math.PI/180);l.rotation.set(c,h,f,"XYZ")}i.push(l)}return i}function xy(r){let t=new le;for(let n of r)n.updateMatrixWorld(!0),t.expandByObject(n);let e=t.getSize(new C);return{box:t,center:t.getCenter(new C),diagonal:Math.max(e.length(),.001)}}function vy(r,t,e){let n={...nu.floor,...e.floor??{}};e.floor!==null&&IE(r,t,n);let i={...nu.world,...e.world??{}},s=new ha,o=i.rgb.map(c=>c*i.strength),a=i.gradient??.25;s.topColor.setRGB(o[0]*(1+a),o[1]*(1+a),o[2]*(1+a)),s.bottomColor.setRGB(o[0]*(1-a*.8),o[1]*(1-a*.8),o[2]*(1-a*.8)),s.update(),r.environment=s,r.background=s;let l=t.diagonal;for(let c of e.lights??nu.lights){if(c.kind==="sun"){let p=new ts(16777215,c.intensity??3),g=new C(...c.direction??[.2,-.2,-1]).normalize();p.position.copy(t.center).addScaledVector(g,-l*4),p.target.position.copy(t.center),r.add(p),r.add(p.target);continue}let h=c.position_mm!=null,f=h?(c.size_mm??500)*nn:c.size*l,d=(h?c.power??100:c.power*l*l/.6)/(Math.PI*f*f)*ME,m=new es(16777215,d,f,f);h?m.position.set(c.position_mm[0]*nn,c.position_mm[1]*nn,c.position_mm[2]*nn):m.position.copy(t.center).add(new C(...c.position).multiplyScalar(l));let x=c.target_mm?new C(c.target_mm[0]*nn,c.target_mm[1]*nn,c.target_mm[2]*nn):t.center;m.lookAt(x),r.add(m)}}function IE(r,t,e){let n=new ge(new Hi(t.diagonal*12,t.diagonal*12),new gr({color:eu(e.rgb),roughness:e.roughness,metalness:0}));n.position.set(t.center.x,t.center.y,t.box.min.z-(e.below_mm??0)*nn),r.add(n)}function _y(r,t,e,n){let i=e.diagonal,s=t.target_mm?new C(t.target_mm[0]*nn,t.target_mm[1]*nn,t.target_mm[2]*nn):e.center.clone();t.target_offset&&s.add(new C(...t.target_offset).multiplyScalar(i));let o=t.position_mm?new C(t.position_mm[0]*nn,t.position_mm[1]*nn,t.position_mm[2]*nn).sub(s):new C(...t.direction).normalize().multiplyScalar(i*t.distance);r.aspect=n,r.filmGauge=36,r.near=Math.max(i*.01,1e-5),r.far=Math.max(i*200,10),r.position.copy(s).add(o),r.setFocalLength(t.lens),r.lookAt(s),r.updateProjectionMatrix()}function yy(r){let[t,e]=r.resolution,n=new Oc({antialias:!1,preserveDrawingBuffer:!0});return n.toneMapping=Lo,n.toneMappingExposure=Math.pow(2,r.exposure),n.setPixelRatio(1),n.setSize(t,e),n}function by(r,t){let e=new Rd(r);if(e.bounces=t.bounces,e.transmissiveBounces=t.transmissive_bounces??8,e.filterGlossyFactor=.5,e.multipleImportanceSampling=!0,e.renderScale=1,e.tiles.set(t.tiles??1,t.tiles??1),e.dynamicLowRes=!1,e.minSamples=1,t.denoise){let n=new An(new Cd({map:null,blending:$l,premultipliedAlpha:r.getContextAttributes().premultipliedAlpha}));n.material.sigma=5,n.material.kSigma=1,n.material.threshold=.03,e.renderToCanvasCallback=(i,s)=>{n.material.map=i.texture;let o=s.autoClear;s.autoClear=!1,n.render(s),s.autoClear=o}}return e}function Sy(r,t,e){return new Promise(n=>{let i=()=>{r.renderSample(),r.samples%16===0&&e(`samples ${r.samples}/${t}`),r.samples<t?requestAnimationFrame(i):n()};requestAnimationFrame(i)})}async function PE(r,t=()=>{}){let e={...nu,...r},n={status:"starting",results:{},stats:{},error:null,done:!1};window.__viz=n;let i=s=>{n.status=s,t(s)};try{let s=performance.now(),o=yy(e);(e.container??document.body).appendChild(o.domElement);let l=by(o,e);n.pathTracer=l;let c=o.getContext(),h=c.getExtension("WEBGL_debug_renderer_info");n.stats.gpu=h?c.getParameter(h.UNMASKED_RENDERER_WEBGL):"unknown";for(let[f,u]of Object.entries(e.scenes)){i(`scene ${f}`);let d=new Oi;n.scene=d;let m=await gy(u,e,i);if(!e.floor_first)for(let g of m)d.add(g);n.groups=m;for(let g of m)g.traverse(_=>{_.isMesh&&_.material.map&&o.initTexture(_.material.map)});let x=xy(m);if(vy(d,x,e),e.floor_first)for(let g of m)d.add(g);let p=new Fe;n.results[f]={};for(let[g,_]of Object.entries(u.shots)){let y=_.explode??0,v=m.map(M=>M.position.clone());if(y)for(let M of m){let T=(u.explode??{})[M.name]??[0,0,0];M.position.add(new C(...T).multiplyScalar(y*x.diagonal))}_y(p,_,x,e.resolution[0]/e.resolution[1]),i(`${g}: building BVH`);let S=performance.now();l.setScene(d,p),await Sy(l,e.samples,M=>i(`${g}: ${M}`)),n.results[f][g]=o.domElement.toDataURL("image/png"),n.stats[`${f}/${g}`]={ms:Math.round(performance.now()-S),samples:l.samples},m.forEach((M,T)=>M.position.copy(v[T]))}for(let g of m)d.remove(g)}return n.stats.total_ms=Math.round(performance.now()-s),i("done"),n.done=!0,{scenes:n.results,stats:n.stats}}catch(s){throw n.error=String(s&&s.stack?s.stack:s),n.done=!0,i(`error: ${n.error}`),s}}var DE={THREE:Nm,makeRenderer:yy,makePathTracer:by,loadParts:gy,sceneBounds:xy,addEnvironment:vy,placeCamera:_y,renderSamples:Sy,DEFAULTS:nu};return Fy(LE);})();
/*! For license information please see render.bundle.js.LEGAL.txt */
