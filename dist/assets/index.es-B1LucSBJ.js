import{r as a,z as $}from"./index-hZXH_yT3.js";var g=function(e,t){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(o[l]=n[l])},g(e,t)};function m(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");g(e,t);function o(){this.constructor=e}e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var u=function(){return u=Object.assign||function(t){for(var o,n=1,l=arguments.length;n<l;n++){o=arguments[n];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c])}return t},u.apply(this,arguments)};function q(e,t){t===void 0&&(t={});var o=t.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var Q=`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
    font-size:16px;
    line-height:1.2em
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
    display:inline;
    width:100%;
    height:100%
}

.calendly-popup-content {
    position:relative
}

.calendly-popup-content.calendly-mobile {
    -webkit-overflow-scrolling:touch;
    overflow-y:auto
}

.calendly-overlay {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow:hidden;
    z-index:9999;
    background-color:#a5a5a5;
    background-color:rgba(31,31,31,0.4)
}

.calendly-overlay .calendly-close-overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0
}

.calendly-overlay .calendly-popup {
    box-sizing:border-box;
    position:absolute;
    top:50%;
    left:50%;
    -webkit-transform:translateY(-50%) translateX(-50%);
    transform:translateY(-50%) translateX(-50%);
    width:80%;
    min-width:900px;
    max-width:1000px;
    height:90%;
    max-height:680px
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup {
        position:fixed;
        top:50px;
        left:0;
        right:0;
        bottom:0;
        -webkit-transform:none;
        transform:none;
        width:100%;
        height:auto;
        min-width:0;
        max-height:none
    }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
    height:100%;
}

.calendly-overlay .calendly-popup-close {
    position:absolute;
    top:25px;
    right:25px;
    color:#fff;
    width:19px;
    height:19px;
    cursor:pointer;
    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;
    background-size:contain
}

@media (max-width: 975px) {
    .calendly-overlay .calendly-popup-close {
        top:15px;
        right:15px
    }
}

.calendly-badge-widget {
    position:fixed;
    right:20px;
    bottom:15px;
    z-index:9998
}

.calendly-badge-widget .calendly-badge-content {
    display:table-cell;
    width:auto;
    height:45px;
    padding:0 30px;
    border-radius:25px;
    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;
    font-family:sans-serif;
    text-align:center;
    vertical-align:middle;
    font-weight:bold;
    font-size:14px;
    color:#fff;
    cursor:pointer
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
    color:#666a73
}

.calendly-badge-widget .calendly-badge-content span {
    display:block;
    font-size:12px
}

.calendly-spinner {
    position:absolute;
    top:50%;
    left:0;
    right:0;
    -webkit-transform:translateY(-50%);
    transform:translateY(-50%);
    text-align:center;
    z-index:-1
}

.calendly-spinner>div {
    display:inline-block;
    width:18px;
    height:18px;
    background-color:#e1e1e1;
    border-radius:50%;
    vertical-align:middle;
    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    animation:calendly-bouncedelay 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode:both;
    animation-fill-mode:both
}

.calendly-spinner .calendly-bounce1 {
    -webkit-animation-delay:-0.32s;
    animation-delay:-0.32s
}

.calendly-spinner .calendly-bounce2 {
    -webkit-animation-delay:-0.16s;
    animation-delay:-0.16s
}

@-webkit-keyframes calendly-bouncedelay {
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    } 
    
    40%{
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}

@keyframes calendly-bouncedelay{ 
    0%,80%,100% {
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    
    40% {
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}`;q(Q);function h(e){return e.charAt(0)==="#"?e.slice(1):e}function X(e){return e!=null&&e.primaryColor&&(e.primaryColor=h(e.primaryColor)),e!=null&&e.textColor&&(e.textColor=h(e.textColor)),e!=null&&e.backgroundColor&&(e.backgroundColor=h(e.backgroundColor)),e}var d;(function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled",e.PAGE_HEIGHT="calendly.page_height"})(d||(d={}));var M=function(e){var t=e.url,o=e.prefill,n=o===void 0?{}:o,l=e.pageSettings,c=l===void 0?{}:l,p=e.utm,s=p===void 0?{}:p,r=e.embedType,i=X(c),v=i.backgroundColor,j=i.hideEventTypeDetails,W=i.hideLandingPageDetails,b=i.primaryColor,E=i.textColor,B=i.hideGdprBanner,C=n.customAnswers,f=n.date,_=n.email,w=n.firstName,x=n.guests,S=n.lastName,k=n.location,T=n.smsReminderNumber,P=n.name,L=s.utmCampaign,N=s.utmContent,I=s.utmMedium,D=s.utmSource,R=s.utmTerm,O=s.salesforce_uuid,y=t.indexOf("?"),A=y>-1,G=t.slice(y+1),H=A?t.slice(0,y):t,Y=[A?G:null,v?"background_color=".concat(v):null,j?"hide_event_type_details=1":null,W?"hide_landing_page_details=1":null,b?"primary_color=".concat(b):null,E?"text_color=".concat(E):null,B?"hide_gdpr_banner=1":null,P?"name=".concat(encodeURIComponent(P)):null,T?"phone_number=".concat(encodeURIComponent(T)):null,k?"location=".concat(encodeURIComponent(k)):null,w?"first_name=".concat(encodeURIComponent(w)):null,S?"last_name=".concat(encodeURIComponent(S)):null,x?"guests=".concat(x.map(encodeURIComponent).join(",")):null,_?"email=".concat(encodeURIComponent(_)):null,f&&f instanceof Date?"date=".concat(J(f)):null,L?"utm_campaign=".concat(encodeURIComponent(L)):null,N?"utm_content=".concat(encodeURIComponent(N)):null,I?"utm_medium=".concat(encodeURIComponent(I)):null,D?"utm_source=".concat(encodeURIComponent(D)):null,R?"utm_term=".concat(encodeURIComponent(R)):null,O?"salesforce_uuid=".concat(encodeURIComponent(O)):null,r?"embed_type=".concat(r):null,"embed_domain=1"].concat(C?Z(C):[]).filter(function(F){return F!==null}).join("&");return"".concat(H,"?").concat(Y)},J=function(e){var t=e.getMonth()+1,o=e.getDate(),n=e.getFullYear();return[n,t<10?"0".concat(t):t,o<10?"0".concat(o):o].join("-")},K=/^a\d{1,2}$/,Z=function(e){var t=Object.keys(e).filter(function(o){return o.match(K)});return t.length?t.map(function(o){return"".concat(o,"=").concat(encodeURIComponent(e[o]))}):[]},z=function(e){m(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.render=function(){return a.createElement("div",{className:"calendly-spinner"},a.createElement("div",{className:"calendly-bounce1"}),a.createElement("div",{className:"calendly-bounce2"}),a.createElement("div",{className:"calendly-bounce3"}))},t}(a.Component),ee={minWidth:"320px",height:"630px"},oe=function(e){m(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var o=M({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||z;return a.createElement("div",{className:"calendly-inline-widget",style:this.props.styles||ee},this.state.isLoading&&a.createElement(n,null),a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},t}(a.Component),ne=function(e){m(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var o=M({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"}),n=this.props.LoadingSpinner||z;return a.createElement(a.Fragment,null,this.state.isLoading&&a.createElement(n,null),a.createElement("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:o}))},t}(a.Component),V=function(e){if(!e.open)return null;if(!e.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return $.createPortal(a.createElement("div",{className:"calendly-overlay"},a.createElement("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),a.createElement("div",{className:"calendly-popup"},a.createElement("div",{className:"calendly-popup-content"},a.createElement(ne,u({},e)))),a.createElement("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement)},ae=function(e){m(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(o){o.preventDefault(),this.setState({isOpen:!0})},t.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),a.createElement(V,u({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t}(a.Component),le=function(e){m(t,e);function t(o){var n=e.call(this,o)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(){this.setState({isOpen:!0})},t.prototype.onClose=function(o){o.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return a.createElement("div",{className:"calendly-badge-widget",onClick:this.onClick},a.createElement("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&a.createElement("span",null,"powered by Calendly")),a.createElement(V,u({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t}(a.Component),U="message";function ie(e){var t=e||{},o=t.onDateAndTimeSelected,n=t.onEventScheduled,l=t.onEventTypeViewed,c=t.onProfilePageViewed,p=t.onPageHeightResize;a.useEffect(function(){var s=function(r){var i=r.data.event;i===d.DATE_AND_TIME_SELECTED?o&&o(r):i===d.EVENT_SCHEDULED?n&&n(r):i===d.EVENT_TYPE_VIEWED?l&&l(r):i===d.PROFILE_PAGE_VIEWED?c&&c(r):i===d.PAGE_HEIGHT&&p&&p(r)};return window.addEventListener(U,s),function(){window.removeEventListener(U,s)}},[e])}export{oe as InlineWidget,ae as PopupButton,V as PopupModal,le as PopupWidget,ie as useCalendlyEventListener};
