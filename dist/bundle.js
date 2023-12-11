/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 545:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return function(){"use strict";var e={d:function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return B}});var i={days:"days",months:"months",years:"years",day:"day",month:"month",year:"year",eventChangeViewDate:"changeViewDate",eventChangeCurrentView:"changeCurrentView",eventChangeFocusDate:"changeFocusDate",eventChangeSelectedDate:"changeSelectedDate",eventChangeTime:"changeTime",eventChangeLastSelectedDate:"changeLastSelectedDate",actionSelectDate:"selectDate",actionUnselectDate:"unselectDate",cssClassWeekend:"-weekend-"},s={classes:"",inline:!1,locale:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.MM.yyyy",timeFormat:"HH:mm",firstDay:1},startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"T",toggleSelected:!0,keyboardNav:!0,selectedDates:!1,container:"",isMobile:!1,visible:!1,position:"bottom left",offset:12,view:i.days,minView:i.days,showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:", ",range:!1,dynamicRange:!0,buttons:!1,monthsField:"monthsShort",showEvent:"focus",autoClose:!1,prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MMMM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:!1,onChangeViewDate:!1,onChangeView:!1,onRenderCell:!1,onShow:!1,onHide:!1,onClickDayName:!1};function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof e?t.querySelector(e):e}function n(){let{tagName:e="div",className:t="",innerHtml:i="",id:s="",attrs:a={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=document.createElement(e);return t&&n.classList.add(...t.split(" ")),s&&(n.id=s),i&&(n.innerHTML=i),a&&r(n,a),n}function r(e,t){for(let[i,s]of Object.entries(t))void 0!==s&&e.setAttribute(i,s);return e}function h(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){let t=e.getHours(),{hours:i,dayPeriod:s}=l(t);return{year:e.getFullYear(),month:e.getMonth(),fullMonth:e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,date:e.getDate(),fullDate:e.getDate()<10?"0"+e.getDate():e.getDate(),day:e.getDay(),hours:t,fullHours:d(t),hours12:i,dayPeriod:s,fullHours12:d(i),minutes:e.getMinutes(),fullMinutes:e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}}function l(e){return{dayPeriod:e>11?"pm":"am",hours:e%12==0?12:e%12}}function d(e){return e<10?"0"+e:e}function c(e){let t=10*Math.floor(e.getFullYear()/10);return[t,t+9]}function u(){let e=[];for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return i.forEach((t=>{if("object"==typeof t)for(let i in t)t[i]&&e.push(i);else t&&e.push(t)})),e.join(" ")}function p(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.days;if(!e||!t)return!1;let a=o(e),n=o(t);return{[i.days]:a.date===n.date&&a.month===n.month&&a.year===n.year,[i.months]:a.month===n.month&&a.year===n.year,[i.years]:a.year===n.year}[s]}function m(e,t,i){let s=g(e,!1).getTime(),a=g(t,!1).getTime();return i?s>=a:s>a}function v(e,t){return!m(e,t,!0)}function g(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=new Date(e.getTime());return"boolean"!=typeof t||t||function(e){e.setHours(0,0,0,0)}(i),i}function D(e,t,i){e.length?e.forEach((e=>{e.addEventListener(t,i)})):e.addEventListener(t,i)}function y(e,t){return!(!e||e===document||e instanceof DocumentFragment)&&(e.matches(t)?e:y(e.parentNode,t))}function f(e,t,i){return e>i?i:e<t?t:e}function w(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return i.filter((e=>e)).forEach((t=>{for(let[i,s]of Object.entries(t))if(void 0!==s&&"[object Object]"===s.toString()){let t=void 0!==e[i]?e[i].toString():void 0,a=s.toString(),n=Array.isArray(s)?[]:{};e[i]=e[i]?t!==a?n:e[i]:n,w(e[i],s)}else e[i]=s})),e}function b(e){let t=e;return e instanceof Date||(t=new Date(e)),isNaN(t.getTime())&&(console.log(`Unable to convert value "${e}" to Date object`),t=!1),t}function k(e){let t="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+t+")("+e+")($|<|"+t+")","g")}function $(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class C{constructor(){let{type:e,date:t,dp:i,opts:s,body:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};$(this,"focus",(()=>{this.$cell.classList.add("-focus-"),this.focused=!0})),$(this,"removeFocus",(()=>{this.$cell.classList.remove("-focus-"),this.focused=!1})),$(this,"select",(()=>{this.$cell.classList.add("-selected-"),this.selected=!0})),$(this,"removeSelect",(()=>{this.$cell.classList.remove("-selected-","-range-from-","-range-to-"),this.selected=!1})),$(this,"onChangeSelectedDate",(()=>{this.isDisabled||(this._handleSelectedStatus(),this.opts.range&&this._handleRangeStatus())})),$(this,"onChangeFocusDate",(e=>{if(!e)return void(this.focused&&this.removeFocus());let t=p(e,this.date,this.type);t?this.focus():!t&&this.focused&&this.removeFocus(),this.opts.range&&this._handleRangeStatus()})),$(this,"render",(()=>(this.$cell.innerHTML=this._getHtml(),this.$cell.adpCell=this,this.$cell))),this.type=e,this.singleType=this.type.slice(0,-1),this.date=t,this.dp=i,this.opts=s,this.body=a,this.customData=!1,this.init()}init(){let{range:e,onRenderCell:t}=this.opts;t&&(this.customData=t({date:this.date,cellType:this.singleType,datepicker:this.dp})),this._createElement(),this._bindDatepickerEvents(),this._handleInitialFocusStatus(),this.dp.hasSelectedDates&&(this._handleSelectedStatus(),e&&this._handleRangeStatus())}_bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeFocusDate,this.onChangeFocusDate)}unbindDatepickerEvents(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeFocusDate,this.onChangeFocusDate)}_createElement(){var e;let{year:t,month:i,date:s}=o(this.date),a=(null===(e=this.customData)||void 0===e?void 0:e.attrs)||{};this.$cell=n({className:this._getClassName(),attrs:{"data-year":t,"data-month":i,"data-date":s,...a}})}_getClassName(){var e,t;let s=new Date,{selectOtherMonths:a,selectOtherYears:n}=this.opts,{minDate:r,maxDate:h}=this.dp,{day:l}=o(this.date),d=this._isOutOfMinMaxRange(),c=null===(e=this.customData)||void 0===e?void 0:e.disabled,m=u("air-datepicker-cell",`-${this.singleType}-`,{"-current-":p(s,this.date,this.type),"-min-date-":r&&p(r,this.date,this.type),"-max-date-":h&&p(h,this.date,this.type)}),v="";switch(this.type){case i.days:v=u({"-weekend-":this.dp.isWeekend(l),"-other-month-":this.isOtherMonth,"-disabled-":this.isOtherMonth&&!a||d||c});break;case i.months:v=u({"-disabled-":d||c});break;case i.years:v=u({"-other-decade-":this.isOtherDecade,"-disabled-":d||this.isOtherDecade&&!n||c})}return u(m,v,null===(t=this.customData)||void 0===t?void 0:t.classes)}_getHtml(){var e;let{year:t,month:s,date:a}=o(this.date),{showOtherMonths:n,showOtherYears:r}=this.opts;if(null!==(e=this.customData)&&void 0!==e&&e.html)return this.customData.html;switch(this.type){case i.days:return!n&&this.isOtherMonth?"":a;case i.months:return this.dp.locale[this.opts.monthsField][s];case i.years:return!r&&this.isOtherDecade?"":t}}_isOutOfMinMaxRange(){let{minDate:e,maxDate:t}=this.dp,{type:s,date:a}=this,{month:n,year:r,date:h}=o(a),l=s===i.days,d=s===i.years,c=!!e&&new Date(r,d?e.getMonth():n,l?h:e.getDate()),u=!!t&&new Date(r,d?t.getMonth():n,l?h:t.getDate());return e&&t?v(c,e)||m(u,t):e?v(c,e):t?m(u,t):void 0}destroy(){this.unbindDatepickerEvents()}_handleRangeStatus(){let{rangeDateFrom:e,rangeDateTo:t}=this.dp,i=u({"-in-range-":e&&t&&(s=this.date,a=e,n=t,m(s,a)&&v(s,n)),"-range-from-":e&&p(this.date,e,this.type),"-range-to-":t&&p(this.date,t,this.type)});var s,a,n;this.$cell.classList.remove("-range-from-","-range-to-","-in-range-"),i&&this.$cell.classList.add(...i.split(" "))}_handleSelectedStatus(){let e=this.dp._checkIfDateIsSelected(this.date,this.type);e?this.select():!e&&this.selected&&this.removeSelect()}_handleInitialFocusStatus(){p(this.dp.focusDate,this.date,this.type)&&this.focus()}get isDisabled(){return this.$cell.matches(".-disabled-")}get isOtherMonth(){return this.dp.isOtherMonth(this.date)}get isOtherDecade(){return this.dp.isOtherDecade(this.date)}}function _(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let M={[i.days]:`<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,[i.months]:`<div class="air-datepicker-body--cells -${i.months}-"></div>`,[i.years]:`<div class="air-datepicker-body--cells -${i.years}-"></div>`};const S=".air-datepicker-cell";class T{constructor(e){let{dp:t,type:s,opts:a}=e;_(this,"handleClick",(e=>{let t=e.target.closest(S).adpCell;if(t.isDisabled)return;if(!this.dp.isMinViewReached)return void this.dp.down();let i=this.dp._checkIfDateIsSelected(t.date,t.type);i?this.dp._handleAlreadySelectedDates(i,t.date):this.dp.selectDate(t.date)})),_(this,"handleDayNameClick",(e=>{let t=e.target.getAttribute("data-day-index");this.opts.onClickDayName({dayIndex:Number(t),datepicker:this.dp})})),_(this,"onChangeCurrentView",(e=>{e!==this.type?this.hide():(this.show(),this.render())})),_(this,"onMouseOverCell",(e=>{let t=y(e.target,S);this.dp.setFocusDate(!!t&&t.adpCell.date)})),_(this,"onMouseOutCell",(()=>{this.dp.setFocusDate(!1)})),_(this,"onClickBody",(e=>{let{onClickDayName:t}=this.opts,i=e.target;i.closest(S)&&this.handleClick(e),t&&i.closest(".air-datepicker-body--day-name")&&this.handleDayNameClick(e)})),_(this,"onMouseDown",(e=>{this.pressed=!0;let t=y(e.target,S),i=t&&t.adpCell;p(i.date,this.dp.rangeDateFrom)&&(this.rangeFromFocused=!0),p(i.date,this.dp.rangeDateTo)&&(this.rangeToFocused=!0)})),_(this,"onMouseMove",(e=>{if(!this.pressed||!this.dp.isMinViewReached)return;e.preventDefault();let t=y(e.target,S),i=t&&t.adpCell,{selectedDates:s,rangeDateTo:a,rangeDateFrom:n}=this.dp;if(!i||i.isDisabled)return;let{date:r}=i;if(2===s.length){if(this.rangeFromFocused&&!m(r,a)){let{hours:e,minutes:t}=o(n);r.setHours(e),r.setMinutes(t),this.dp.rangeDateFrom=r,this.dp.replaceDate(n,r)}if(this.rangeToFocused&&!v(r,n)){let{hours:e,minutes:t}=o(a);r.setHours(e),r.setMinutes(t),this.dp.rangeDateTo=r,this.dp.replaceDate(a,r)}}})),_(this,"onMouseUp",(()=>{this.pressed=!1,this.rangeFromFocused=!1,this.rangeToFocused=!1})),_(this,"onChangeViewDate",((e,t)=>{if(!this.isVisible)return;let s=c(e),a=c(t);switch(this.dp.currentView){case i.days:if(p(e,t,i.months))return;break;case i.months:if(p(e,t,i.years))return;break;case i.years:if(s[0]===a[0]&&s[1]===a[1])return}this.render()})),_(this,"render",(()=>{this.destroyCells(),this._generateCells(),this.cells.forEach((e=>{this.$cells.appendChild(e.render())}))})),this.dp=t,this.type=s,this.opts=a,this.cells=[],this.$el="",this.pressed=!1,this.isVisible=!0,this.init()}init(){this._buildBaseHtml(),this.type===i.days&&this.renderDayNames(),this.render(),this._bindEvents(),this._bindDatepickerEvents()}_bindEvents(){let{range:e,dynamicRange:t}=this.opts;D(this.$el,"mouseover",this.onMouseOverCell),D(this.$el,"mouseout",this.onMouseOutCell),D(this.$el,"click",this.onClickBody),e&&t&&(D(this.$el,"mousedown",this.onMouseDown),D(this.$el,"mousemove",this.onMouseMove),D(window.document,"mouseup",this.onMouseUp))}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView)}_buildBaseHtml(){this.$el=n({className:`air-datepicker-body -${this.type}-`,innerHtml:M[this.type]}),this.$names=a(".air-datepicker-body--day-names",this.$el),this.$cells=a(".air-datepicker-body--cells",this.$el)}_getDayNamesHtml(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.dp.locale.firstDay,t="",s=this.dp.isWeekend,{onClickDayName:a}=this.opts,n=e,r=0;for(;r<7;){let e=n%7;t+=`<div class="${u("air-datepicker-body--day-name",{[i.cssClassWeekend]:s(e),"-clickable-":!!a})}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`,r++,n++}return t}renderDayNames(){this.$names.innerHTML=this._getDayNamesHtml()}_generateCell(e){let{type:t,dp:i,opts:s}=this;return new C({type:t,dp:i,opts:s,date:e,body:this})}_generateCells(){T.getDatesFunction(this.type)(this.dp,(e=>{this.cells.push(this._generateCell(e))}))}show(){this.isVisible=!0,this.$el.classList.remove("-hidden-")}hide(){this.isVisible=!1,this.$el.classList.add("-hidden-")}destroyCells(){this.cells.forEach((e=>e.destroy())),this.cells=[],this.$cells.innerHTML=""}destroy(){this.destroyCells(),this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView)}static getDaysDates(e,t){let{viewDate:i,locale:{firstDay:s}}=e,a=h(i),{year:n,month:r}=o(i),l=new Date(n,r,1),d=new Date(n,r,a),c=l.getDay()-s,u=6-d.getDay()+s;c=c<0?c+7:c,u=u>6?u-7:u;let p=function(e,t){let{year:i,month:s,date:a}=o(e);return new Date(i,s,a-t)}(l,c),m=a+c+u,v=p.getDate(),{year:g,month:D}=o(p),y=0;const f=[];for(;y<m;){let e=new Date(g,D,v+y);t&&t(e),f.push(e),y++}return f}static getMonthsDates(e,t){let{year:i}=e.parsedViewDate,s=0,a=[];for(;s<12;){const e=new Date(i,s);a.push(e),t&&t(e),s++}return a}static getYearsDates(e,t){let i=c(e.viewDate),s=i[0]-1,a=i[1]+1,n=s,r=[];for(;n<=a;){const e=new Date(n,0);r.push(e),t&&t(e),n++}return r}static getDatesFunction(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.days;return{[i.days]:T.getDaysDates,[i.months]:T.getMonthsDates,[i.years]:T.getYearsDates}[e]}}function F(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class V{constructor(e){let{dp:t,opts:i}=e;F(this,"onClickNav",(e=>{let t=y(e.target,".air-datepicker-nav--action");if(!t)return;let i=t.dataset.action;this.dp[i]()})),F(this,"onChangeViewDate",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),F(this,"onChangeCurrentView",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),F(this,"onClickNavTitle",(()=>{this.dp.isFinalView||this.dp.up()})),F(this,"update",(()=>{let{prevHtml:e,nextHtml:t}=this.opts;this.$prev.innerHTML=e,this.$next.innerHTML=t,this._resetNavStatus(),this.render(),this.handleNavStatus()})),F(this,"renderDelay",(()=>{setTimeout(this.render)})),F(this,"render",(()=>{this.$title.innerHTML=this._getTitle(),function(e,t){for(let i in t)t[i]?e.classList.add(i):e.classList.remove(i)}(this.$title,{"-disabled-":this.dp.isFinalView})})),this.dp=t,this.opts=i,this.init()}init(){this._createElement(),this._buildBaseHtml(),this._defineDOM(),this.render(),this.handleNavStatus(),this._bindEvents(),this._bindDatepickerEvents()}_defineDOM(){this.$title=a(".air-datepicker-nav--title",this.$el),this.$prev=a('[data-action="prev"]',this.$el),this.$next=a('[data-action="next"]',this.$el)}_bindEvents(){this.$el.addEventListener("click",this.onClickNav),this.$title.addEventListener("click",this.onClickNavTitle)}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.on(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.on(i.eventChangeTime,this.render))}destroy(){this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.off(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.off(i.eventChangeTime,this.render))}_createElement(){this.$el=n({tagName:"nav",className:"air-datepicker-nav"})}_getTitle(){let{dp:e,opts:t}=this,i=t.navTitles[e.currentView];return"function"==typeof i?i(e):e.formatDate(e.viewDate,i)}handleNavStatus(){let{disableNavWhenOutOfRange:e}=this.opts,{minDate:t,maxDate:s}=this.dp;if(!t&&!s||!e)return;let{year:a,month:n}=this.dp.parsedViewDate,r=!!t&&o(t),h=!!s&&o(s);switch(this.dp.currentView){case i.days:t&&r.month>=n&&r.year>=a&&this._disableNav("prev"),s&&h.month<=n&&h.year<=a&&this._disableNav("next");break;case i.months:t&&r.year>=a&&this._disableNav("prev"),s&&h.year<=a&&this._disableNav("next");break;case i.years:{let e=c(this.dp.viewDate);t&&r.year>=e[0]&&this._disableNav("prev"),s&&h.year<=e[1]&&this._disableNav("next");break}}}_disableNav(e){a('[data-action="'+e+'"]',this.$el).classList.add("-disabled-")}_resetNavStatus(){!function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];e.length?e.forEach((e=>{e.classList.remove(...i)})):e.classList.remove(...i)}(this.$el.querySelectorAll(".air-datepicker-nav--action"),"-disabled-")}_buildBaseHtml(){let{prevHtml:e,nextHtml:t}=this.opts;this.$el.innerHTML=`<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`}get isNavIsFunction(){let{navTitles:e}=this.opts;return Object.keys(e).find((t=>"function"==typeof e[t]))}}var x={today:{content:e=>e.locale.today,onClick:e=>e.setViewDate(new Date)},clear:{content:e=>e.locale.clear,onClick:e=>e.clear()}};class H{constructor(e){let{dp:t,opts:i}=e;this.dp=t,this.opts=i,this.init()}init(){this.createElement(),this.render()}createElement(){this.$el=n({className:"air-datepicker-buttons"})}destroy(){this.$el.parentNode.removeChild(this.$el)}clearHtml(){return this.$el.innerHTML="",this}generateButtons(){let{buttons:e}=this.opts;Array.isArray(e)||(e=[e]),e.forEach((e=>{let t=e;"string"==typeof e&&x[e]&&(t=x[e]);let i=this.createButton(t);t.onClick&&this.attachEventToButton(i,t.onClick),this.$el.appendChild(i)}))}attachEventToButton(e,t){e.addEventListener("click",(()=>{t(this.dp)}))}createButton(e){let{content:t,className:i,tagName:s="button",attrs:a={}}=e;return n({tagName:s,innerHtml:`<span tabindex='-1'>${"function"==typeof t?t(this.dp):t}</span>`,className:u("air-datepicker-button",i),attrs:a})}render(){this.generateButtons()}}function E(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class L{constructor(){let{opts:e,dp:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E(this,"toggleTimepickerIsActive",(e=>{this.dp.timepickerIsActive=e})),E(this,"onChangeSelectedDate",(e=>{let{date:t,updateTime:i=!1}=e;t&&(this.setMinMaxTime(t),this.setCurrentTime(!!i&&t),this.addTimeToDate(t))})),E(this,"onChangeLastSelectedDate",(e=>{e&&(this.setTime(e),this.render())})),E(this,"onChangeInputRange",(e=>{let t=e.target;this[t.getAttribute("name")]=t.value,this.updateText(),this.dp.trigger(i.eventChangeTime,{hours:this.hours,minutes:this.minutes})})),E(this,"onMouseEnterLeave",(e=>{let t=e.target.getAttribute("name"),i=this.$minutesText;"hours"===t&&(i=this.$hoursText),i.classList.toggle("-focus-")})),E(this,"onFocus",(()=>{this.toggleTimepickerIsActive(!0)})),E(this,"onBlur",(()=>{this.toggleTimepickerIsActive(!1)})),this.opts=e,this.dp=t;let{timeFormat:s}=this.dp.locale;s&&(s.match(k("h"))||s.match(k("hh")))&&(this.ampm=!0),this.init()}init(){this.setTime(this.dp.lastSelectedDate||this.dp.viewDate),this.createElement(),this.buildHtml(),this.defineDOM(),this.render(),this.bindDatepickerEvents(),this.bindDOMEvents()}bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate)}bindDOMEvents(){let e="input";navigator.userAgent.match(/trident/gi)&&(e="change"),D(this.$ranges,e,this.onChangeInputRange),D(this.$ranges,"mouseenter",this.onMouseEnterLeave),D(this.$ranges,"mouseleave",this.onMouseEnterLeave),D(this.$ranges,"focus",this.onFocus),D(this.$ranges,"mousedown",this.onFocus),D(this.$ranges,"blur",this.onBlur)}createElement(){this.$el=n({className:u("air-datepicker-time",{"-am-pm-":this.dp.ampm})})}destroy(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate),this.$el.parentNode.removeChild(this.$el)}buildHtml(){let{ampm:e,hours:t,displayHours:i,minutes:s,minHours:a,minMinutes:n,maxHours:r,maxMinutes:h,dayPeriod:o,opts:{hoursStep:l,minutesStep:c}}=this;this.$el.innerHTML=`<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s)}</span>   `+(e?`<span class='air-datepicker-time--current-ampm'>${o}</span>`:"")+'</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">'+`      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">`+`      <input type="range" name="minutes" value="${s}" min="${n}" max="${h}" step="${c}"/>   </div></div>`}defineDOM(){let e=e=>a(e,this.$el);this.$ranges=this.$el.querySelectorAll('[type="range"]'),this.$hours=e('[name="hours"]'),this.$minutes=e('[name="minutes"]'),this.$hoursText=e(".air-datepicker-time--current-hours"),this.$minutesText=e(".air-datepicker-time--current-minutes"),this.$ampm=e(".air-datepicker-time--current-ampm")}setTime(e){this.setMinMaxTime(e),this.setCurrentTime(e)}addTimeToDate(e){e&&(e.setHours(this.hours),e.setMinutes(this.minutes))}setMinMaxTime(e){if(this.setMinMaxTimeFromOptions(),e){let{minDate:t,maxDate:i}=this.dp;t&&p(e,t)&&this.setMinTimeFromMinDate(t),i&&p(e,i)&&this.setMaxTimeFromMaxDate(i)}}setCurrentTime(e){let{hours:t,minutes:i}=e?o(e):this;this.hours=f(t,this.minHours,this.maxHours),this.minutes=f(i,this.minMinutes,this.maxMinutes)}setMinMaxTimeFromOptions(){let{minHours:e,minMinutes:t,maxHours:i,maxMinutes:s}=this.opts;this.minHours=f(e,0,23),this.minMinutes=f(t,0,59),this.maxHours=f(i,0,23),this.maxMinutes=f(s,0,59)}setMinTimeFromMinDate(e){let{lastSelectedDate:t}=this.dp;this.minHours=e.getHours(),t&&t.getHours()>e.getHours()?this.minMinutes=this.opts.minMinutes:this.minMinutes=e.getMinutes()}setMaxTimeFromMaxDate(e){let{lastSelectedDate:t}=this.dp;this.maxHours=e.getHours(),t&&t.getHours()<e.getHours()?this.maxMinutes=this.opts.maxMinutes:this.maxMinutes=e.getMinutes()}updateSliders(){r(this.$hours,{min:this.minHours,max:this.maxHours}).value=this.hours,r(this.$minutes,{min:this.minMinutes,max:this.maxMinutes}).value=this.minutes}updateText(){this.$hoursText.innerHTML=d(this.displayHours),this.$minutesText.innerHTML=d(this.minutes),this.ampm&&(this.$ampm.innerHTML=this.dayPeriod)}set hours(e){this._hours=e;let{hours:t,dayPeriod:i}=l(e);this.displayHours=this.ampm?t:e,this.dayPeriod=i}get hours(){return this._hours}render(){this.updateSliders(),this.updateText()}}function O(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class A{constructor(e){let{dp:t,opts:i}=e;O(this,"pressedKeys",new Set),O(this,"hotKeys",new Map([[[["Control","ArrowRight"],["Control","ArrowUp"]],e=>e.month++],[[["Control","ArrowLeft"],["Control","ArrowDown"]],e=>e.month--],[[["Shift","ArrowRight"],["Shift","ArrowUp"]],e=>e.year++],[[["Shift","ArrowLeft"],["Shift","ArrowDown"]],e=>e.year--],[[["Alt","ArrowRight"],["Alt","ArrowUp"]],e=>e.year+=10],[[["Alt","ArrowLeft"],["Alt","ArrowDown"]],e=>e.year-=10],[["Control","Shift","ArrowUp"],(e,t)=>t.up()]])),O(this,"handleHotKey",(e=>{let t=this.hotKeys.get(e),i=o(this.getInitialFocusDate());t(i,this.dp);let{year:s,month:a,date:n}=i,r=h(new Date(s,a));r<n&&(n=r);let l=this.dp.getClampedDate(new Date(s,a,n));this.dp.setFocusDate(l,{viewDateTransition:!0})})),O(this,"isHotKeyPressed",(()=>{let e=!1,t=this.pressedKeys.size,i=e=>this.pressedKeys.has(e);for(let[s]of this.hotKeys){if(e)break;if(Array.isArray(s[0]))s.forEach((a=>{e||t!==a.length||(e=a.every(i)&&s)}));else{if(t!==s.length)continue;e=s.every(i)&&s}}return e})),O(this,"isArrow",(e=>e>=37&&e<=40)),O(this,"onKeyDown",(e=>{let{key:t,which:i}=e,{dp:s,dp:{focusDate:a},opts:n}=this;this.registerKey(t);let r=this.isHotKeyPressed();if(r)return e.preventDefault(),void this.handleHotKey(r);if(this.isArrow(i))return e.preventDefault(),void this.focusNextCell(t);if("Enter"===t){if(s.currentView!==n.minView)return void s.down();if(a){let e=s._checkIfDateIsSelected(a);return void(e?s._handleAlreadySelectedDates(e,a):s.selectDate(a))}}"Escape"===t&&this.dp.hide()})),O(this,"onKeyUp",(e=>{this.removeKey(e.key)})),this.dp=t,this.opts=i,this.init()}init(){this.bindKeyboardEvents()}bindKeyboardEvents(){let{$el:e}=this.dp;e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp)}destroy(){let{$el:e}=this.dp;e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("keyup",this.onKeyUp),this.hotKeys=null,this.pressedKeys=null}getInitialFocusDate(){let{focusDate:e,currentView:t,selectedDates:s,parsedViewDate:{year:a,month:n}}=this.dp,r=e||s[s.length-1];if(!r)switch(t){case i.days:r=new Date(a,n,(new Date).getDate());break;case i.months:r=new Date(a,n,1);break;case i.years:r=new Date(a,0,1)}return r}focusNextCell(e){let t=this.getInitialFocusDate(),{currentView:s}=this.dp,{days:a,months:n,years:r}=i,h=o(t),l=h.year,d=h.month,c=h.date;switch(e){case"ArrowLeft":s===a&&(c-=1),s===n&&(d-=1),s===r&&(l-=1);break;case"ArrowUp":s===a&&(c-=7),s===n&&(d-=3),s===r&&(l-=4);break;case"ArrowRight":s===a&&(c+=1),s===n&&(d+=1),s===r&&(l+=1);break;case"ArrowDown":s===a&&(c+=7),s===n&&(d+=3),s===r&&(l+=4)}let u=this.dp.getClampedDate(new Date(l,d,c));this.dp.setFocusDate(u,{viewDateTransition:!0})}registerKey(e){this.pressedKeys.add(e)}removeKey(e){this.pressedKeys.delete(e)}}let N={on(e,t){this.__events||(this.__events={}),this.__events[e]?this.__events[e].push(t):this.__events[e]=[t]},off(e,t){this.__events&&this.__events[e]&&(this.__events[e]=this.__events[e].filter((e=>e!==t)))},removeAllEvents(){this.__events={}},trigger(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.__events&&this.__events[e]&&this.__events[e].forEach((e=>{e(...i)}))}};function I(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let P="",j="",R=!1;class B{static buildGlobalContainer(e){R=!0,P=n({className:e,id:e}),a("body").appendChild(P)}constructor(e,t){var r=this;if(I(this,"viewIndexes",[i.days,i.months,i.years]),I(this,"next",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t+1,1));break;case i.months:this.setViewDate(new Date(e+1,t,1));break;case i.years:this.setViewDate(new Date(e+10,0,1))}})),I(this,"prev",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t-1,1));break;case i.months:this.setViewDate(new Date(e-1,t,1));break;case i.years:this.setViewDate(new Date(e-10,0,1))}})),I(this,"_finishHide",(()=>{this.hideAnimation=!1,this._destroyComponents(),this.$container.removeChild(this.$datepicker)})),I(this,"setPosition",(function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("function"==typeof(e=e||r.opts.position))return void(r.customHide=e({$datepicker:r.$datepicker,$target:r.$el,$pointer:r.$pointer,isViewChange:t,done:r._finishHide}));let i,s,{isMobile:a}=r.opts,n=r.$el.getBoundingClientRect(),h=r.$el.getBoundingClientRect(),o=r.$datepicker.offsetParent,l=r.$el.offsetParent,d=r.$datepicker.getBoundingClientRect(),c=e.split(" "),u=window.scrollY,p=window.scrollX,m=r.opts.offset,v=c[0],g=c[1];if(a)r.$datepicker.style.cssText="left: 50%; top: 50%";else{if(o===l&&o!==document.body&&(h={top:r.$el.offsetTop,left:r.$el.offsetLeft,width:n.width,height:r.$el.offsetHeight},u=0,p=0),o!==l&&o!==document.body){let e=o.getBoundingClientRect();h={top:n.top-e.top,left:n.left-e.left,width:n.width,height:n.height},u=0,p=0}switch(v){case"top":i=h.top-d.height-m;break;case"right":s=h.left+h.width+m;break;case"bottom":i=h.top+h.height+m;break;case"left":s=h.left-d.width-m}switch(g){case"top":i=h.top;break;case"right":s=h.left+h.width-d.width;break;case"bottom":i=h.top+h.height-d.height;break;case"left":s=h.left;break;case"center":/left|right/.test(v)?i=h.top+h.height/2-d.height/2:s=h.left+h.width/2-d.width/2}r.$datepicker.style.cssText=`left: ${s+p}px; top: ${i+u}px`}})),I(this,"_setInputValue",(()=>{let{opts:e,$altField:t,locale:{dateFormat:i}}=this,{altFieldDateFormat:s,altField:a}=e;a&&t&&(t.value=this._getInputValue(s)),this.$el.value=this._getInputValue(i)})),I(this,"_getInputValue",(e=>{let{selectedDates:t,opts:i}=this,{multipleDates:s,multipleDatesSeparator:a}=i;if(!t.length)return"";let n="function"==typeof e,r=n?e(s?t:t[0]):t.map((t=>this.formatDate(t,e)));return r=n?r:r.join(a),r})),I(this,"_checkIfDateIsSelected",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.days,s=!1;return r.selectedDates.some((i=>{let a=p(e,i,t);return s=a&&i,a})),s})),I(this,"_scheduleCallAfterTransition",(e=>{this._cancelScheduledCall(),e&&e(!1),this._onTransitionEnd=()=>{e&&e(!0)},this.$datepicker.addEventListener("transitionend",this._onTransitionEnd,{once:!0})})),I(this,"_cancelScheduledCall",(()=>{this.$datepicker.removeEventListener("transitionend",this._onTransitionEnd)})),I(this,"setViewDate",(e=>{if(!((e=b(e))instanceof Date))return;if(p(e,this.viewDate))return;let t=this.viewDate;this.viewDate=e;let{onChangeViewDate:s}=this.opts;if(s){let{month:e,year:t}=this.parsedViewDate;s({month:e,year:t,decade:this.curDecade})}this.trigger(i.eventChangeViewDate,e,t)})),I(this,"setFocusDate",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!e||(e=b(e))instanceof Date)&&(r.focusDate=e,r.opts.range&&e&&r._handleRangeOnFocus(),r.trigger(i.eventChangeFocusDate,e,t))})),I(this,"setCurrentView",(e=>{if(this.viewIndexes.includes(e)){if(this.currentView=e,this.elIsInput&&this.visible&&this.setPosition(void 0,!0),this.trigger(i.eventChangeCurrentView,e),!this.views[e]){let t=this.views[e]=new T({dp:this,opts:this.opts,type:e});this.shouldUpdateDOM&&this.$content.appendChild(t.$el)}this.opts.onChangeView&&this.opts.onChangeView(e)}})),I(this,"_updateLastSelectedDate",(e=>{this.lastSelectedDate=e,this.trigger(i.eventChangeLastSelectedDate,e)})),I(this,"destroy",(()=>{let{showEvent:e,isMobile:t}=this.opts,i=this.$datepicker.parentNode;i&&i.removeChild(this.$datepicker),this.$el.removeEventListener(e,this._onFocus),this.$el.removeEventListener("blur",this._onBlur),window.removeEventListener("resize",this._onResize),t&&this._removeMobileAttributes(),this.keyboardNav&&this.keyboardNav.destroy(),this.views=null,this.nav=null,this.$datepicker=null,this.opts=null,this.$customContainer=null,this.viewDate=null,this.focusDate=null,this.selectedDates=null,this.rangeDateFrom=null,this.rangeDateTo=null})),I(this,"update",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=w({},r.opts);w(r.opts,e);let{timepicker:s,buttons:a,range:n,selectedDates:h,isMobile:o}=r.opts,l=r.visible||r.treatAsInline;r._createMinMaxDates(),r._limitViewDateByMaxMinDates(),r._handleLocale(),!t.selectedDates&&h&&r.selectDate(h),e.view&&r.setCurrentView(e.view),r._setInputValue(),t.range&&!n?(r.rangeDateTo=!1,r.rangeDateFrom=!1):!t.range&&n&&r.selectedDates.length&&(r.rangeDateFrom=r.selectedDates[0],r.rangeDateTo=r.selectedDates[1]),t.timepicker&&!s?(l&&r.timepicker.destroy(),r.timepicker=!1,r.$timepicker.parentNode.removeChild(r.$timepicker)):!t.timepicker&&s&&r._addTimepicker(),!t.buttons&&a?r._addButtons():t.buttons&&!a?(r.buttons.destroy(),r.$buttons.parentNode.removeChild(r.$buttons)):l&&t.buttons&&a&&r.buttons.clearHtml().render(),!t.isMobile&&o?(r.treatAsInline||j||r._createMobileOverlay(),r._addMobileAttributes(),r.visible&&r._showMobileOverlay()):t.isMobile&&!o&&(r._removeMobileAttributes(),r.visible&&(j.classList.remove("-active-"),"function"!=typeof r.opts.position&&r.setPosition())),l&&(r.nav.update(),r.views[r.currentView].render(),r.currentView===i.days&&r.views[r.currentView].renderDayNames())})),I(this,"isOtherMonth",(e=>{let{month:t}=o(e);return t!==this.parsedViewDate.month})),I(this,"isOtherYear",(e=>{let{year:t}=o(e);return t!==this.parsedViewDate.year})),I(this,"isOtherDecade",(e=>{let{year:t}=o(e),[i,s]=c(this.viewDate);return t<i||t>s})),I(this,"_onChangeSelectedDate",(e=>{let{silent:t}=e;setTimeout((()=>{this._setInputValue(),this.opts.onSelect&&!t&&this._triggerOnSelect()}))})),I(this,"_onChangeFocusedDate",(function(e){let{viewDateTransition:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;let i=!1;t&&(i=r.isOtherMonth(e)||r.isOtherYear(e)||r.isOtherDecade(e)),i&&r.setViewDate(e),r.opts.onFocus&&r.opts.onFocus({datepicker:r,date:e})})),I(this,"_onChangeTime",(e=>{let{hours:t,minutes:i}=e,s=new Date,{lastSelectedDate:a,opts:{onSelect:n}}=this,r=a;a||(r=s);let h=this.getCell(r,this.currentViewSingular),o=h&&h.adpCell;o&&o.isDisabled||(r.setHours(t),r.setMinutes(i),a?(this._setInputValue(),n&&this._triggerOnSelect()):this.selectDate(r))})),I(this,"_onFocus",(e=>{this.visible||this.show()})),I(this,"_onBlur",(e=>{this.inFocus||!this.visible||this.opts.isMobile||this.hide()})),I(this,"_onMouseDown",(e=>{this.inFocus=!0})),I(this,"_onMouseUp",(e=>{this.inFocus=!1,this.$el.focus()})),I(this,"_onResize",(()=>{this.visible&&"function"!=typeof this.opts.position&&this.setPosition()})),I(this,"_onClickOverlay",(()=>{this.visible&&this.hide()})),I(this,"getViewDates",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.days;return T.getDatesFunction(e)(r)})),I(this,"isWeekend",(e=>this.opts.weekends.includes(e))),I(this,"getClampedDate",(e=>{let{minDate:t,maxDate:i}=this,s=e;return i&&m(e,i)?s=i:t&&v(e,t)&&(s=t),s})),this.$el=a(e),!this.$el)return;this.$datepicker=n({className:"air-datepicker"}),this.opts=w({},s,t),this.$customContainer=!!this.opts.container&&a(this.opts.container),this.$altField=a(this.opts.altField||!1);let{view:h,startDate:l}=this.opts;l||(this.opts.startDate=new Date),"INPUT"===this.$el.nodeName&&(this.elIsInput=!0),this.inited=!1,this.visible=!1,this.viewDate=b(this.opts.startDate),this.focusDate=!1,this.initialReadonly=this.$el.getAttribute("readonly"),this.customHide=!1,this.currentView=h,this.selectedDates=[],this.views={},this.keys=[],this.rangeDateFrom="",this.rangeDateTo="",this.timepickerIsActive=!1,this.treatAsInline=this.opts.inline||!this.elIsInput,this.init()}init(){let{opts:e,treatAsInline:t,opts:{inline:i,isMobile:s,selectedDates:n,keyboardNav:r,onlyTimepicker:h}}=this,o=a("body");(!R||R&&P&&!o.contains(P))&&!i&&this.elIsInput&&!this.$customContainer&&B.buildGlobalContainer(B.defaultGlobalContainerId),!s||j||t||this._createMobileOverlay(),this._handleLocale(),this._bindSubEvents(),this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this.elIsInput&&(i||this._bindEvents(),r&&!h&&(this.keyboardNav=new A({dp:this,opts:e}))),n&&this.selectDate(n,{silent:!0}),this.opts.visible&&!t&&this.show(),s&&!t&&this.$el.setAttribute("readonly",!0),t&&this._createComponents()}_createMobileOverlay(){j=n({className:"air-datepicker-overlay"}),P.appendChild(j)}_createComponents(){let{opts:e,treatAsInline:t,opts:{inline:i,buttons:s,timepicker:a,position:n,classes:r,onlyTimepicker:h,isMobile:o}}=this;this._buildBaseHtml(),this.elIsInput&&(i||this._setPositionClasses(n)),!i&&this.elIsInput||this.$datepicker.classList.add("-inline-"),r&&this.$datepicker.classList.add(...r.split(" ")),h&&this.$datepicker.classList.add("-only-timepicker-"),o&&!t&&this._addMobileAttributes(),this.views[this.currentView]=new T({dp:this,type:this.currentView,opts:e}),this.nav=new V({dp:this,opts:e}),a&&this._addTimepicker(),s&&this._addButtons(),this.$content.appendChild(this.views[this.currentView].$el),this.$nav.appendChild(this.nav.$el)}_destroyComponents(){for(let e in this.views)this.views[e].destroy();this.views={},this.nav.destroy(),this.timepicker&&this.timepicker.destroy()}_addMobileAttributes(){j.addEventListener("click",this._onClickOverlay),this.$datepicker.classList.add("-is-mobile-"),this.$el.setAttribute("readonly",!0)}_removeMobileAttributes(){j.removeEventListener("click",this._onClickOverlay),this.$datepicker.classList.remove("-is-mobile-"),this.initialReadonly||""===this.initialReadonly||this.$el.removeAttribute("readonly")}_createMinMaxDates(){let{minDate:e,maxDate:t}=this.opts;this.minDate=!!e&&b(e),this.maxDate=!!t&&b(t)}_addTimepicker(){this.$timepicker=n({className:"air-datepicker--time"}),this.$datepicker.appendChild(this.$timepicker),this.timepicker=new L({dp:this,opts:this.opts}),this.$timepicker.appendChild(this.timepicker.$el)}_addButtons(){this.$buttons=n({className:"air-datepicker--buttons"}),this.$datepicker.appendChild(this.$buttons),this.buttons=new H({dp:this,opts:this.opts}),this.$buttons.appendChild(this.buttons.$el)}_bindSubEvents(){this.on(i.eventChangeSelectedDate,this._onChangeSelectedDate),this.on(i.eventChangeFocusDate,this._onChangeFocusedDate),this.on(i.eventChangeTime,this._onChangeTime)}_buildBaseHtml(){let{inline:e}=this.opts;var t,i;this.elIsInput?e?(t=this.$datepicker,(i=this.$el).parentNode.insertBefore(t,i.nextSibling)):this.$container.appendChild(this.$datepicker):this.$el.appendChild(this.$datepicker),this.$datepicker.innerHTML='<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>',this.$content=a(".air-datepicker--content",this.$datepicker),this.$pointer=a(".air-datepicker--pointer",this.$datepicker),this.$nav=a(".air-datepicker--navigation",this.$datepicker)}_handleLocale(){let{locale:e,dateFormat:t,firstDay:i,timepicker:s,onlyTimepicker:a,timeFormat:n,dateTimeSeparator:r}=this.opts;var h;this.locale=(h=e,JSON.parse(JSON.stringify(h))),t&&(this.locale.dateFormat=t),void 0!==n&&""!==n&&(this.locale.timeFormat=n);let{timeFormat:o}=this.locale;if(""!==i&&(this.locale.firstDay=i),s&&"function"!=typeof t){let e=o?r:"";this.locale.dateFormat=[this.locale.dateFormat,o||""].join(e)}a&&"function"!=typeof t&&(this.locale.dateFormat=this.locale.timeFormat)}_setPositionClasses(e){if("function"==typeof e)return void this.$datepicker.classList.add("-custom-position-");let t=(e=e.split(" "))[0],i=`air-datepicker -${t}-${e[1]}- -from-${t}-`;this.$datepicker.classList.add(...i.split(" "))}_bindEvents(){this.$el.addEventListener(this.opts.showEvent,this._onFocus),this.$el.addEventListener("blur",this._onBlur),this.$datepicker.addEventListener("mousedown",this._onMouseDown),this.$datepicker.addEventListener("mouseup",this._onMouseUp),window.addEventListener("resize",this._onResize)}_limitViewDateByMaxMinDates(){let{viewDate:e,minDate:t,maxDate:i}=this;i&&m(e,i)&&this.setViewDate(i),t&&v(e,t)&&this.setViewDate(t)}formatDate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.viewDate,t=arguments.length>1?arguments[1]:void 0;if(e=b(e),!(e instanceof Date))return;let i=t,s=this.locale,a=o(e),n=a.dayPeriod,r=c(e),h=B.replacer,l={T:e.getTime(),m:a.minutes,mm:a.fullMinutes,h:a.hours12,hh:a.fullHours12,H:a.hours,HH:a.fullHours,aa:n,AA:n.toUpperCase(),E:s.daysShort[a.day],EEEE:s.days[a.day],d:a.date,dd:a.fullDate,M:a.month+1,MM:a.fullMonth,MMM:s.monthsShort[a.month],MMMM:s.months[a.month],yy:a.year.toString().slice(-2),yyyy:a.year,yyyy1:r[0],yyyy2:r[1]};for(let[e,t]of Object.entries(l))i=h(i,k(e),t);return i}down(e){this._handleUpDownActions(e,"down")}up(e){this._handleUpDownActions(e,"up")}selectDate(e){let t,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currentView:a,parsedViewDate:n,selectedDates:r}=this,{updateTime:h}=s,{moveToOtherMonthsOnSelect:o,moveToOtherYearsOnSelect:l,multipleDates:d,range:c,autoClose:u,onBeforeSelect:p}=this.opts,v=r.length;if(Array.isArray(e))return e.forEach((e=>{this.selectDate(e,s)})),new Promise((e=>{setTimeout(e)}));if((e=b(e))instanceof Date){if(p&&!p({date:e,datepicker:this}))return Promise.resolve();if(a===i.days&&e.getMonth()!==n.month&&o&&(t=new Date(e.getFullYear(),e.getMonth(),1)),a===i.years&&e.getFullYear()!==n.year&&l&&(t=new Date(e.getFullYear(),0,1)),t&&this.setViewDate(t),d&&!c){if(v===d)return;this._checkIfDateIsSelected(e)||r.push(e)}else if(c)switch(v){case 1:r.push(e),this.rangeDateTo||(this.rangeDateTo=e),m(this.rangeDateFrom,this.rangeDateTo)&&(this.rangeDateTo=this.rangeDateFrom,this.rangeDateFrom=e),this.selectedDates=[this.rangeDateFrom,this.rangeDateTo];break;case 2:this.selectedDates=[e],this.rangeDateFrom=e,this.rangeDateTo="";break;default:this.selectedDates=[e],this.rangeDateFrom=e}else this.selectedDates=[e];return this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,silent:null==s?void 0:s.silent,date:e,updateTime:h}),this._updateLastSelectedDate(e),u&&!this.timepickerIsActive&&this.visible&&(d||c?c&&1===v&&this.hide():this.hide()),new Promise((e=>{setTimeout(e)}))}}unselectDate(e){let t=this.selectedDates,s=this;if((e=b(e))instanceof Date)return t.some(((a,n)=>{if(p(a,e))return t.splice(n,1),s.selectedDates.length?s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length-1]):(s.rangeDateFrom="",s.rangeDateTo="",s._updateLastSelectedDate(!1)),this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,date:e}),!0}))}replaceDate(e,t){let s=this.selectedDates.find((t=>p(t,e,this.currentView))),a=this.selectedDates.indexOf(s);a<0||p(this.selectedDates[a],t,this.currentView)||(this.selectedDates[a]=t,this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,date:t,updateTime:!0}),this._updateLastSelectedDate(t))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.selectedDates=[],this.rangeDateFrom=!1,this.rangeDateTo=!1,this.lastSelectedDate=!1,this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,silent:e.silent}),new Promise((e=>{setTimeout(e)}))}show(){let{onShow:e,isMobile:t}=this.opts;this._cancelScheduledCall(),this.visible||this.hideAnimation||this._createComponents(),this.setPosition(this.opts.position),this.$datepicker.classList.add("-active-"),this.visible=!0,e&&this._scheduleCallAfterTransition(e),t&&this._showMobileOverlay()}hide(){let{onHide:e,isMobile:t}=this.opts,i=this._hasTransition();this.visible=!1,this.hideAnimation=!0,this.$datepicker.classList.remove("-active-"),this.customHide&&this.customHide(),this.elIsInput&&this.$el.blur(),this._scheduleCallAfterTransition((t=>{!this.customHide&&(t&&i||!t&&!i)&&this._finishHide(),e&&e(t)})),t&&j.classList.remove("-active-")}_triggerOnSelect(){let e=[],t=[],{selectedDates:i,locale:s,opts:{onSelect:a,multipleDates:n,range:r}}=this,h=n||r,o="function"==typeof s.dateFormat;i.length&&(e=i.map(g),t=o?n?s.dateFormat(e):e.map((e=>s.dateFormat(e))):e.map((e=>this.formatDate(e,s.dateFormat)))),a({date:h?e:e[0],formattedDate:h?t:t[0],datepicker:this})}_handleAlreadySelectedDates(e,t){const{range:i,toggleSelected:s}=this.opts;let a="function"==typeof s?s({datepicker:this,date:t}):s;i&&(a||2!==this.selectedDates.length&&this.selectDate(t)),a?this.unselectDate(t):this._updateLastSelectedDate(e)}_handleUpDownActions(e,t){if(!((e=b(e||this.focusDate||this.viewDate))instanceof Date))return;let i="up"===t?this.viewIndex+1:this.viewIndex-1;i>2&&(i=2),i<0&&(i=0),this.setViewDate(new Date(e.getFullYear(),e.getMonth(),1)),this.setCurrentView(this.viewIndexes[i])}_handleRangeOnFocus(){1===this.selectedDates.length&&(m(this.selectedDates[0],this.focusDate)?(this.rangeDateTo=this.selectedDates[0],this.rangeDateFrom=this.focusDate):(this.rangeDateTo=this.focusDate,this.rangeDateFrom=this.selectedDates[0]))}getCell(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.day;if(!((e=b(e))instanceof Date))return;let{year:s,month:a,date:n}=o(e),r=`[data-year="${s}"]`,h=`[data-month="${a}"]`,l={[i.day]:`${r}${h}[data-date="${n}"]`,[i.month]:`${r}${h}`,[i.year]:`${r}`};return this.views[this.currentView].$el.querySelector(l[t])}_showMobileOverlay(){j.classList.add("-active-")}_hasTransition(){return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e,t)=>parseFloat(t)+e),0)>0}get shouldUpdateDOM(){return this.visible||this.treatAsInline}get parsedViewDate(){return o(this.viewDate)}get currentViewSingular(){return this.currentView.slice(0,-1)}get curDecade(){return c(this.viewDate)}get viewIndex(){return this.viewIndexes.indexOf(this.currentView)}get isFinalView(){return this.currentView===i.years}get hasSelectedDates(){return this.selectedDates.length>0}get isMinViewReached(){return this.currentView===this.opts.minView||this.currentView===i.days}get $container(){return this.$customContainer||P}static replacer(e,t,i){return e.replace(t,(function(e,t,s,a){return t+i+a}))}}var K;return I(B,"defaults",s),I(B,"version","3.4.0"),I(B,"defaultGlobalContainerId","air-datepicker-global-container"),K=B.prototype,Object.assign(K,N),t.default}()}));

/***/ }),

/***/ 232:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _default = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  clear: 'Clear',
  dateFormat: 'MM/dd/yyyy',
  timeFormat: 'hh:mm aa',
  firstDay: 0
};
exports.Z = _default;

/***/ }),

/***/ 38:
/***/ (() => {

const time = document.querySelector("#time");
const battery = document.querySelector("#battery");
let batteryIsAvailable;

time.textContent = getTime();
setBatteryLevel();

function setBatteryLevel() {
  if ("getBattery" in navigator) {
    navigator.getBattery().then(function (batteryInfo) {
      let level = (batteryInfo.level * 100).toString();
      level = level.length > 3 ? level.slice(0, 2) : level;
      battery.dataset.percentage = level;
      batteryIsAvailable = true;
    });
  }
}

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes =
    date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${hours}:${minutes}`;
}

if (batteryIsAvailable) {
  setInterval(() => {
    navigator.getBattery().then(function (batteryInfo) {
      battery.dataset.percentage = batteryInfo.level * 100;
    });
  }, 1000);
}

setInterval(() => {
  time.textContent = getTime();
  setBatteryLevel();
}, 1000);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/air-datepicker/locale/en.js
var en = __webpack_require__(232);
;// CONCATENATED MODULE: ./src/js/components/menu.js
const menuElements = document.querySelectorAll(".menu-item");
const app = document.querySelector(".app");
const calculatorContent = document.querySelector(".calculator__content");
const contentWidth = calculatorContent.getBoundingClientRect().width;

const applications = document.querySelectorAll("figure");
menuElements.forEach((el, i) => {
  el.addEventListener("click", function () {
    let activeMenu = document.querySelector(".menu-item.active");

    if (!el.classList.contains("active")) {
      document.querySelector(".menu-item.active").classList.remove("active");
      el.classList.add("active");
      calculatorContent.style.marginLeft = -contentWidth * i + "px";
      activeMenu = document.querySelector(".menu-item.active");
    }
  });
});


;// CONCATENATED MODULE: ./src/js/components/calculator.js


const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const resetButton = document.querySelector(".reset");
const removeButton = document.querySelector(".remove");
const functions = document.querySelectorAll(".function");
const expressionWrapper = document.querySelector(".expression-wrapper");
const root = document.documentElement;
const numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];
const operationsArr = ["/", "Backspace", "*", "+", "-", "%", "Enter", "Escape"];

operations.forEach((op) => {
  op.addEventListener("click", function (e) {
    operationHandle(op);
  });
});

numbersArr.forEach(function (num) {
  document.addEventListener("keydown", function (e) {
    if (e.key === num) {
      handleInput(num);
    }
  });
});
operationsArr.forEach(function (op) {
  document.addEventListener("keydown", function (e) {
    if (e.key === op) {
      if (op === "Backspace" && e.shiftKey) {
        return;
      }
      switch (op) {
        case "/":
          handleDivideClick("÷");
          break;
        case "Backspace":
          removeHandler();
          break;
        case "*":
          handleMultiplyClick("×");
          break;
        case "+":
          handleAdditionClick("+");
          break;
        case "-":
          handleSubtractionClick("-");
          break;
        case "%":
          onPercentClick();
          break;
        case "Enter":
          onEqualClick();
          break;
        case "Escape":
          resetHandler();
          break;
        default:
          break;
      }
    }
  });
});

numbers.forEach((num) => {
  const text = num.textContent;

  num.addEventListener("click", function (e) {
    handleInput(text);
  });
});

resetButton.addEventListener("click", function (e) {
  resetHandler();
});

removeButton.addEventListener("click", function (e) {
  removeHandler();
});

function calculate(value) {
  if (value.endsWith(",")) {
    value = value.slice(0, -1);
  }
  if (/÷0[+\-÷×]/.test(value) || value.endsWith("÷0")) {
    return "You can't divide by zero";
  }
  const operatorsRegExp = /[×÷+-]/g;

  let args = value
    .replace(/\s/g, "")
    .replaceAll(",", ".")
    .split(operatorsRegExp)
    .join(" ")
    .trim()
    .split(" ");
  const operators = value
    .match(/[×÷+-]/g)
    .join("")
    .replaceAll("÷", "/")
    .replaceAll("×", "*")
    .split("");
  args = args.map(Number);
  if (args.length === operators.length) {
    operators.pop();
  }
  const stack = [];
  let currValue = args[0];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "/" || operators[i] === "*") {
      if (operators[i] === "/") {
        currValue /= args[i + 1];
      }
      if (operators[i] === "*") {
        currValue *= args[i + 1];
      }
    } else {
      if (currValue <= 0.000000005) currValue = 0;
      stack.push(currValue, operators[i]);
      currValue = args[i + 1];
    }
  }
  stack.push(currValue);
  let total = stack[0];
  for (let i = 1; i < stack.length; i += 2) {
    if (stack[i] === "+") {
      total += stack[i + 1];
    }
    if (stack[i] === "-") {
      total -= stack[i + 1];
    }
  }
  const result = parseFloat(total.toFixed(10));

  return isNaN(result) || !isFinite(result)
    ? "You can't divide by zero"
    : parseFloat(total.toFixed(10));
}

function operationHandle(op) {
  if (result.classList.contains("active")) result.classList.remove("active");

  if (op.dataset.value === "%") {
    onPercentClick();
  }
  if (op.dataset.value === "=" && !result.hidden) {
    onEqualClick();
  }

  if (op.dataset.value === "/") {
    handleDivideClick(op);
  }
  if (op.dataset.value === "*") {
    handleMultiplyClick(op);
  }
  if (op.dataset.value === "-") {
    handleSubtractionClick(op);
  }
  if (op.dataset.value === "+") {
    handleAdditionClick(op);
  }
}
function handleInput(text) {
  const operatorsRegExp = /[×÷+-]/g;

  if (result.classList.contains("active")) {
    if (text === ",") {
      expression.textContent = "0,";
      result.textContent = `= 0`;
      handleEqualOutClick();
      result.classList.remove("active");
      changeResetButtonName();
      return;
    }
    result.textContent = `= ${text}`;
    expression.textContent = text;
    handleEqualOutClick();
    result.classList.remove("active");
    changeResetButtonName();
    return;
  }

  if (expression.textContent === "0" && text === "0") return;
  if (text === ",") {
    const operatorsRegExp = /[×÷+-]/g;
    let args = expression.textContent
      .replaceAll(",", ".")
      .split(operatorsRegExp)
      .join(" ")
      .trim()
      .split(" ");

    if (args.at(-1).includes(".") || expression.textContent.length >= 20) return;
    expression.textContent += text;
    let tmpStr = expression.textContent.match(/[\d,]+/g).join("");
    result.hidden = false;
    result.textContent = `= ${(+removeLastLetter(tmpStr)).toLocaleString()}`;
    expression.textContent = setStringLength(expression.textContent);
    if (stringHasOperators(expression.textContent)) {
      result.textContent = `= ${calculate(expression.textContent).toString().replaceAll(".", ",")}`;
    }
    changeResetButtonName();
    return;
  }
  if (expression.textContent === "NaN") {
    expression.textContent = text;
  }
  if (expression.textContent === "0") {
    expression.textContent = text;
    result.hidden = !result.hidden;
  } else {
    if (expression.textContent.length <= 20) {
      const args = expression.textContent
        .replace(/\s/g, "")
        .replaceAll(",", ".")
        .split(operatorsRegExp)
        .join(" ")
        .trim()
        .split(" ");
      const lastNum = args.at(-1);
      if (
        lastNum.length === 1 &&
        lastNum[0] == "0" &&
        !/[.\+\-÷×]/.test(text) &&
        !/[.\+\-÷×]/.test(expression.textContent.slice(-1))
      ) {
        return;
      }
      if (lastNum.length > 1 && lastNum[0] == "0" && lastNum[1] != ".") {
        return;
      }
      expression.textContent += text;
    }
  }
  if (stringHasOperators(expression.textContent)) {
    if (expression.textContent != "0÷0") {
      result.textContent = `= ${calculate(expression.textContent).toString().replaceAll(".", ",")}`;
    } else {
      result.textContent = "= You can't divide by zero";
    }
  }
  changeResetButtonName();
  updateExpression();
  updateResult();
  changeFontSize(expression.textContent);
}
function onPercentClick() {
  let tmp = expression.textContent.replace(",", ".").replace(/\s/g, "");
  if ((!stringHasOperators(tmp) || tmp.includes("e")) && tmp !== "0") {
    expression.textContent = setStringLength(calculatePercentage(+tmp));
    changeFontSize(expression.textContent);
    updateExpression();
    result.textContent = `= ${expression.textContent}`;
    return;
  }
}
function onEqualClick() {
  const value = expression.textContent;
  root.style.setProperty("--transition-sec", "0.3s");
  expression.style.fontSize = "1.565rem";
  changeResultFontSize(result);
  result.classList.add("active");
  if (stringHasOperators(value) && !value.includes("e")) {
    if (expression.textContent === "0÷0") {
      result.textContent = "= You can't divide by zero";
    } else {
      result.textContent = `= ${calculate(value).toString().replaceAll(".", ",")}`;
    }
  }

  setTimeout(() => {
    root.style.setProperty("--transition-sec", "none");
  }, 400);
}

function resetHandler() {
  if (resetButton.textContent === "C") {
    root.style.setProperty("--transition-sec", "none");
    expression.textContent = "0";
    result.textContent = "0";
    result.hidden = !result.hidden;
    changeResetButtonName();
    changeFontSize(expression.textContent);
  }
}
function removeHandler() {
  if (!result.classList.contains("active")) {
    if (expression.textContent !== "0") {
      if (expression.textContent.length === 1) {
        expression.textContent = "0";
        result.hidden = !result.hidden;
        changeResetButtonName();
        return;
      }
      expression.textContent = removeLastLetter();
      changeFontSize(expression.textContent);
      updateExpression();
      updateResult();
      if (stringHasOperators(expression.textContent))
        result.textContent = `= ${calculate(expression.textContent)}`;
    }
  }
}
function handleDivideClick(operation) {
  let lastValue = expression.textContent[expression.textContent.length - 1];
  if (lastValue != "÷") {
    if (lastValue === "×" || lastValue === "+" || lastValue === "-" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent +=
      typeof operation === "string" ? operation : operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
  changeResetButtonName();
}
function handleMultiplyClick(operation) {
  let lastValue = expression.textContent[expression.textContent.length - 1];
  if (lastValue != "×") {
    if (lastValue === "÷" || lastValue === "+" || lastValue === "-" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent +=
      typeof operation === "string" ? operation : operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
  changeResetButtonName();
}
function handleSubtractionClick(operation) {
  let lastValue = expression.textContent[expression.textContent.length - 1];
  if (lastValue != "-") {
    if (lastValue === "×" || lastValue === "+" || lastValue === "÷" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent +=
      typeof operation === "string" ? operation : operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
  changeResetButtonName();
}
function handleAdditionClick(operation) {
  let lastValue = expression.textContent[expression.textContent.length - 1];
  if (lastValue != "+") {
    if (lastValue === "×" || lastValue === "÷" || lastValue === "-" || lastValue === ",")
      expression.textContent = expression.textContent.slice(0, expression.textContent.length - 1);
    expression.textContent +=
      typeof operation === "string" ? operation : operation.textContent.trim();
    result.hidden = false;
  }
  handleEqualOutClick(operation);
  changeFontSize(expression.textContent);
  changeResetButtonName();
}
function handleEqualOutClick(operation) {
  if (result.classList.contains("active")) {
    result.style.fontSize = "1.4rem";
    expression.style.fontSize = "2.5rem";
    result.hidden = false;

    if (operation) {
      expression.textContent = result.textContent.slice(2) + operation.textContent.trim();
    }
  }
}
function changeResetButtonName() {
  return (resetButton.textContent =
    expression.textContent.length > 1 ||
    (expression.textContent.length === 1 && expression.textContent != "0") ||
    !result.hidden
      ? "C"
      : "AC");
}
function removeLastLetter(expr = expression.textContent) {
  return expr.slice(0, -1);
}
function updateExpression() {
  let tmpStr = expression.textContent.replace(",", ".").replace(/\s/g, "");
  let integerNumber = setStringLength(tmpStr);
  if (integerNumber.includes(".")) {
    expression.textContent = integerNumber.replace(".", ",");
  } else {
    expression.textContent =
      integerNumber > 0.001
        ? (+integerNumber).toLocaleString().toString()
        : (expression.textContent = integerNumber.toString());
  }
}

function updateResult() {
  let numberStr = expression.textContent.replace(",", ".").replace(/\s/g, "");

  if (!stringHasOperators(numberStr)) {
    let resultText;
    if (+numberStr === 0) {
      result.textContent = "= 0";
      return;
    }
    if (numberStr.includes(".")) {
      let floatNumber = parseFloat(numberStr);

      if (floatNumber < Number.MAX_SAFE_INTEGER && floatNumber > 0.001) {
        resultText = `= ${floatNumber.toString().replace(".", ",")}`;
      } else {
        resultText = `= ${floatNumber.toExponential()}`;
      }
    } else if (numberStr.includes("e")) {
      resultText = numberStr;
    } else {
      let integerNumber = BigInt(setStringLength(numberStr));

      if (integerNumber <= Number.MAX_SAFE_INTEGER) {
        resultText = `= ${integerNumber.toLocaleString()}`;
      } else {
        resultText = `= ${integerNumber.toString()}`;
      }
    }

    result.textContent = resultText;
  }
}
function stringHasOperators(str) {
  const operationsArr = ["÷", "×", "-", "+"];
  let hasOperators;
  operationsArr.forEach(function (op) {
    if (str.includes(op)) {
      hasOperators = true;
      return hasOperators;
    }
  });
  return hasOperators;
}
function calculatePercentage(num) {
  if (typeof num === "string") {
    if (/[+\-÷×]/.test(num.slice(-1))) return num;
  }

  return num / 100;
}
function setStringLength(str) {
  return str.length > 20 ? str.slice(0, 20) : str;
}

function changeFontSize(str) {
  if (str.length <= 10) {
    expression.style.fontSize = "2.5rem";
    result.style.fontSize = "1.4rem";
  }
  if (str.length > 10) {
    expression.style.fontSize = "2rem";
    result.style.fontSize = "1.3rem";
  }
  if (str.length > 12) {
    expression.style.fontSize = "1.75rem";
    result.style.fontSize = "1.15rem";
  }
  if (str.length > 15) {
    expression.style.fontSize = "1.55rem";
    result.style.fontSize = "1rem";
  }
  if (str.length > 17) {
    expression.style.fontSize = "1.2rem";
    result.style.fontSize = "1rem";
  }
}

function changeResultFontSize(result) {
  if (result.textContent.length <= 10) {
    result.style.fontSize = "2.5rem";
  }
  if (result.textContent.length > 10) {
    result.style.fontSize = "2rem";
  }
  if (result.textContent.length > 12) {
    result.style.fontSize = "1.75rem";
  }
  if (result.textContent.length > 15) {
    result.style.fontSize = "1.55rem";
  }
  if (result.textContent.length > 17) {
    result.style.fontSize = "1.15rem";
  }
}
function showNotification(message) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
}
// Reset events
[
  ...functions,
  ...operations,
  ...numbers,
  ...applications,
  document.querySelector("#mockup"),
].forEach((el) => {
  el.style.userSelect = "none";
});
document.querySelector("#mockup").addEventListener("touchstart", function (e) {
  e.preventDefault();
});
document.querySelector("#mockup").addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Copy to clipboard
const longPressDuration = 300;
let longPressTimer;

expressionWrapper.addEventListener("mousedown", handleMouseDown);
expressionWrapper.addEventListener("mouseup", handleMouseUp);
expressionWrapper.addEventListener("touchstart", handleMouseDown);

function handleMouseDown() {
  longPressTimer = setTimeout(() => {
    showNotification("Copied to clipboard");
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(expression.textContent);
    } else {
      copyToClipboard(expression.textContent);
    }
  }, longPressDuration);
}

function handleMouseUp() {
  clearTimeout(longPressTimer);
}
function copyToClipboard(text) {
  const input = document.createElement("input");

  document.body.appendChild(input);
  input.value = text;

  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");

  document.body.removeChild(input);
}

;// CONCATENATED MODULE: ./node_modules/date-fns/esm/constants/index.js
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/toDate/index.js


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/differenceInMilliseconds/index.js


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds(dateLeft, dateRight) {
  requiredArgs(2, arguments);
  return toDate(dateLeft).getTime() - toDate(dateRight).getTime();
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/roundingMethods/index.js
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function trunc(value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE
};

var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/differenceInMinutes/index.js




/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */
function differenceInMinutes(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/differenceInHours/index.js




/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dateLeft, dateRight) / millisecondsInHour;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/startOfDay/index.js


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/differenceInCalendarDays/index.js



var MILLISECONDS_IN_DAY = 86400000;

/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var startOfDayLeft = startOfDay(dirtyDateLeft);
  var startOfDayRight = startOfDay(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/differenceInDays/index.js


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */
function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/differenceInWeeks/index.js



/**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between two dates. Fractional weeks are
 * truncated towards zero by default.
 *
 * One "full week" is the distance between a local time in one day to the same
 * local time 7 days earlier or later. A full week can sometimes be less than
 * or more than 7*24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 7*24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
 *
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of full weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
 * //=> 2
 *
 * // How many full weeks are between
 * // 1 March 2020 0:00 and 6 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 8 weeks (54 days),
 * // even if DST starts and the period has
 * // only 54*24-1 hours.
 * const result = differenceInWeeks(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 6)
 * )
 * //=> 8
 */
function differenceInWeeks(dateLeft, dateRight, options) {
  requiredArgs(2, arguments);
  var diff = differenceInDays(dateLeft, dateRight) / 7;
  return getRoundingMethod(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/compareAsc/index.js


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/endOfDay/index.js


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/endOfMonth/index.js


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/isLastDayOfMonth/index.js




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  return endOfDay(date).getTime() === endOfMonth(date).getTime();
}
;// CONCATENATED MODULE: ./node_modules/date-fns/esm/differenceInMonths/index.js





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var sign = compareAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
  var result;

  // Check for the difference of less than month
  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }
    dateLeft.setMonth(dateLeft.getMonth() - sign * difference);

    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value
    var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;

    // Check for cases of one full calendar month
    if (isLastDayOfMonth(toDate(dirtyDateLeft)) && difference === 1 && compareAsc(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }
    result = sign * (difference - Number(isLastMonthNotFull));
  }

  // Prevent negative zero
  return result === 0 ? 0 : result;
}
;// CONCATENATED MODULE: ./src/js/components/datepicker/datepicker.js




class datePicker {
  getDatepickerAgeConfig(elem = null, container = ".app") {
    return {
      container: container,
      locale: en/* default */.Z,
      classes: "datepicker-modification",
      position({ $datepicker, $target, $pointer, done }) {
        $datepicker.style.left = "50%";
        $datepicker.style.transform = "translateX(-50%)";
        $datepicker.style.bottom = "0";
        $datepicker.style.height = "270px";
        $pointer.style.display = "none";

        $datepicker.style.opacity = "0";
        $datepicker.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";

        $datepicker.offsetHeight;

        $datepicker.style.opacity = "1";

        return () => {
          $datepicker.style.opacity = "0";

          setTimeout(() => {
            done();
          }, 150);
        };
      },

      onSelect: ({ date, formattedDate, datepicker }) => {
        if (elem) {
          if (datepicker.$el.id === "birthday" && new Date() > new Date(date)) {
            localStorage.setItem("birthdayDate", date);
            localStorage.setItem("birthday", formattedDate);
          } else if (
            datepicker.$el.id === "today" &&
            new Date(date) > new Date(localStorage.getItem("birthday"))
          ) {
            localStorage.setItem("todayDate", date);
            localStorage.setItem("today", formattedDate);
          } else {
            showNotification("Date of birth cannot be later than today's date");
            datepicker.hide();
            this.updateData();
            return;
          }
          this.updateData();
        }
        const ageInYears = this.getAgeInYears(
          new Date(localStorage.getItem("todayDate")),
          new Date(localStorage.getItem("birthdayDate"))
        );
        document.querySelector(elem).textContent = ageInYears;
      },
    };
  }

  getAgeInYears(today, birthday) {
    return Math.floor((today - birthday) / (1000 * 60 * 60 * 24 * 365.25));
  }
  getMonthsAndDays(startDate, endDate) {
    const monthsInYear = 12;
    const daysInMonth = 30;

    const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = endDate.getMonth() - startDate.getMonth();
    const daysDiff = endDate.getDate() - startDate.getDate();

    let totalMonths = yearsDiff * monthsInYear + monthsDiff;
    let remainingDays = daysDiff;

    if (remainingDays < 0) {
      totalMonths--;
      remainingDays += daysInMonth;
    }

    const remainingMonths = totalMonths % monthsInYear;

    return `${remainingMonths} months | ${remainingDays} days`;
  }

  getNextBirthdayInfo(birthdate, today) {
    const nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());

    if (today > nextBirthday) {
      nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    const daysUntilBirthday = Math.floor((nextBirthday - today) / (1000 * 60 * 60 * 24));
    const monthsUntilBirthday = Math.floor(daysUntilBirthday / 30);

    const nextMonthBirthday = new Date(today);
    nextMonthBirthday.setMonth(nextMonthBirthday.getMonth() + monthsUntilBirthday);

    let accurateMonthsUntilBirthday =
      monthsUntilBirthday + (nextBirthday.getMonth() - nextMonthBirthday.getMonth());

    const dayOfNextBirthday = nextBirthday.getDate();
    const dayOfToday = today.getDate();
    const daysInCurrentMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    let accurateDaysUntilBirthday;

    if (dayOfToday > dayOfNextBirthday) {
      accurateMonthsUntilBirthday--;
      accurateDaysUntilBirthday = daysInCurrentMonth - dayOfToday + dayOfNextBirthday;
    } else {
      accurateDaysUntilBirthday = dayOfNextBirthday - dayOfToday;
    }

    const dayOfWeekOptions = { weekday: "long" };
    const dayOfWeek = new Intl.DateTimeFormat("en-US", dayOfWeekOptions).format(nextBirthday);

    return {
      dayOfWeek: dayOfWeek,
      monthsAndDays: `${accurateMonthsUntilBirthday} months | ${accurateDaysUntilBirthday} days`,
    };
  }
  getFullDuration(birthdate, today) {
    const minutes = differenceInMinutes(today, birthdate);
    const hours = differenceInHours(today, birthdate);
    const days = differenceInDays(today, birthdate);
    const weeks = differenceInWeeks(today, birthdate);
    const months = differenceInMonths(today, birthdate);

    return {
      minutes: minutes,
      hours: hours,
      days: days,
      weeks: weeks,
      months: months,
    };
  }

  updateData() {
    if (localStorage.getItem("birthday") && localStorage.getItem("today")) {
      document.querySelector("#birthday").value = localStorage.getItem("birthday");
      document.querySelector("#today").value = localStorage.getItem("today");
      document.querySelector("#age").textContent = this.getAgeInYears(
        new Date(localStorage.getItem("todayDate")),
        new Date(localStorage.getItem("birthdayDate"))
      );
      document.querySelector("#currentMonthAndDays").textContent = this.getMonthsAndDays(
        new Date(localStorage.getItem("birthdayDate")),
        new Date(localStorage.getItem("todayDate"))
      );
      document.querySelector("#age__birthday-next-day").textContent = this.getNextBirthdayInfo(
        new Date(localStorage.getItem("birthdayDate")),
        new Date(localStorage.getItem("todayDate"))
      ).dayOfWeek;
      document.querySelector("#next-birthday-months-and-days").textContent =
        this.getNextBirthdayInfo(
          new Date(localStorage.getItem("birthdayDate")),
          new Date(localStorage.getItem("todayDate"))
        ).monthsAndDays;
      document.querySelector("#years").textContent = document.querySelector("#age").textContent;
      const fullDuration = this.getFullDuration(
        new Date(localStorage.getItem("birthdayDate")),
        new Date(localStorage.getItem("todayDate"))
      );
      const totalArr = [
        document.querySelector("#totalMonths"),
        document.querySelector("#totalWeeks"),
        document.querySelector("#totalDays"),
        document.querySelector("#totalHours"),
        document.querySelector("#totalMinutes"),
      ];
      const fullDurationArr = [
        fullDuration.months,
        fullDuration.weeks,
        fullDuration.days,
        fullDuration.hours,
        fullDuration.minutes,
      ];
      totalArr.forEach(function (value, i) {
        value.textContent = fullDurationArr[i];
      });
    }
  }
}

const dp = new datePicker();


// EXTERNAL MODULE: ./src/js/components/navbar.js
var navbar = __webpack_require__(38);
;// CONCATENATED MODULE: ./src/js/components/apps/age.js
const ageHTML = `
<main
  class="app__age"
  style="margin-top: 21px">
  <div class="app__age-field date-of-birth">
    <p>Date of Birth</p>
    <input
      style="
        width: 70px;
        background-color: transparent;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
      "readonly
      id="birthday"
      value="03/16/2004" />
  </div>
  <div class="app__age-field today">
    <p>Today</p>
    <input
      style="
        width: 70px;
        background-color: transparent;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
      "readonly
      id="today"
      value="12/10/2023" />
  </div>
  <div class="app__age-info">
    <div class="app__age-info-wrapper">
      <div class="app__age-info-row">
        <div class="app__age-info-age">
          <p style="font-size: 24px">Age</p>
          <p>
            <span
              style="font-size: 28px; margin-right: 5px"
              id="age"
              class="orange"
              >19</span
            >Years
          </p>
          <p id="currentMonthAndDays" class="app__age-info_days">8 months | 24 days</p></p>
        </div>
        <div style="position:relative; left:-5px; top:-1px" class="app__age-info-next-birthday">
          <p style="font-size: 14px" class="orange">Next birthday</p>
          <div class="app__age-info-icon">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              stroke="#fff">
              <g
                id="SVGRepo_bgCarrier"
                stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round" />

              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>
                    .a {
                      fill: none;
                      stroke: #fff;
                      stroke-linecap: round;
                      stroke-linejoin: round;
                      transition: all 0.1s ease;
                    }
                  </style>
                </defs>

                <line
                  class="a"
                  x1="23.9995"
                  y1="19.53"
                  x2="23.9995"
                  y2="15.06" />

                <path
                  class="a"
                  d="M24,15.06c8.6059-2.98,0-10.43,0-10.43S15.0583,12.08,24,15.06Z" />

                <path
                  class="a"
                  d="M30.3325,26.608a6.3335,6.3335,0,0,1-12.667,0" />

                <path
                  class="a"
                  d="M17.6665,26.608a6.3329,6.3329,0,0,1-6.2029,6.3326A6.4312,6.4312,0,0,1,5,26.4776V24a4.4517,4.4517,0,0,1,4.4333-4.47H38.53A4.4517,4.4517,0,0,1,43,23.9631c0,.0125,0,.0249,0,.0373v2.4772a6.4312,6.4312,0,0,1-6.4637,6.463,6.3329,6.3329,0,0,1-6.2029-6.3326" />

                <path
                  class="a"
                  d="M40.3915,31.692V41.88a1.49,1.49,0,0,1-1.49,1.49H9.0973a1.49,1.49,0,0,1-1.49-1.49h0V31.692" />

                <path
                  class="a"
                  d="M23.9994,34.7527l.9029,1.83,2.019.2933L25.46,38.3l.3449,2.0109-1.8058-.9494-1.8058.9494L22.5384,38.3l-1.4609-1.4241,2.0189-.2933Z" />
              </g>
            </svg>
          </div>
          <p style="font-size: 12px" id="age__birthday-next-day">Saturday</p>
          <p id="next-birthday-months-and-days" class="app__age-info_days">3 months | 6 days</p>
        </div>
      </div>
      <div class="app__age-info-row">
        <div
          style="margin-top: 20px"
          class="app__age-info-description">
          <p class="orange">Description</p>
          <section class="app__age-info-description-grid">
            <div class="age-info-description__cell">
              <p class="age-info-description-title">Years</p>
              <p id="years">19</p>
            </div>
            <div class="age-info-description__cell">
              <p class="age-info-description-title">Months</p>
              <p id="totalMonths">236</p>
            </div>
            <div class="age-info-description__cell">
              <p class="age-info-description-title">Weeks</p>
              <p id="totalWeeks">1029</p>
            </div>
            <div class="age-info-description__cell">
              <p class="age-info-description-title">Days</p>
              <p id="totalDays">7208</p>
            </div>
            <div class="age-info-description__cell">
              <p class="age-info-description-title">Hours</p>
              <p id="totalHours">172992</p>
            </div>
            <div class="age-info-description__cell">
              <p class="age-info-description-title">Minutes</p>
              <p id="totalMinutes">10379520</p>
            </div>
          </section>
          <p style="font-size: 7px">Created by: Olexandr Lisovyi</p>
        </div>
      </div>
    </div>
  </div>
</main>
`;


// EXTERNAL MODULE: ./node_modules/air-datepicker/air-datepicker.js
var air_datepicker = __webpack_require__(545);
var air_datepicker_default = /*#__PURE__*/__webpack_require__.n(air_datepicker);
;// CONCATENATED MODULE: ./node_modules/air-datepicker/index.es.js

/* harmony default export */ const index_es = ((air_datepicker_default()));
;// CONCATENATED MODULE: ./src/js/components/renderApp.js





const renderApp_navbar = document.querySelector(".app__navbar");
const appMenu = document.querySelector(".app__menu");
const appContent = document.querySelector(".app__content");
let isFirstTime = true;
let activeApp;

applications.forEach(function (application) {
  application.addEventListener("click", function (e) {
    const className = application.querySelector("figcaption").textContent;
    render(className);
  });
});
document.addEventListener("click", function (e) {
  if (e.target.closest(".application__header-icon")) {
    document.querySelector(`.${activeApp}`).remove();
    appMenu.classList.add("animated__header");
  }
});

function render(className) {
  if (appMenu.classList.contains("animated__header")) appMenu.classList.remove("animated__header");
  const wrapper = createApplicationWrapper(className);
  wrapper.append(createApplicatonHeader(className));
  switch (className) {
    case "Age":
      wrapper.innerHTML += createApplicationContent(ageHTML);
      activeApp = "Age";
      setTimeout(() => {
        new index_es("#birthday", dp.getDatepickerAgeConfig("#age"));
        new index_es("#today", dp.getDatepickerAgeConfig("#age"));
        dp.updateData();
        if (isFirstTime) {
          localStorage.setItem(
            "birthdayDate",
            "Tue Mar 16 2004 00:00:00 GMT+0200 (Восточная Европа, стандартное время)"
          );
          localStorage.setItem("birthday", "03/16/2004");
          localStorage.setItem(
            "todayDate",
            "Sun Dec 10 2023 00:00:00 GMT+0200 (Восточная Европа, стандартное время)"
          );
          localStorage.setItem("today", "12/10/2023");
        }
        isFirstTime = false;
      }, 0);
      break;
    case "Currency":
      activeApp = "Currency";
    default:
      break;
  }
  app.append(wrapper);
}

function createApplicationWrapper(className) {
  const div = document.createElement("div");
  div.style.height = `${
    app.getBoundingClientRect().height - renderApp_navbar.getBoundingClientRect().height
  }px`;
  div.className = className;
  div.style.width = `${appContent.getBoundingClientRect().width}px`;
  div.style.position = "absolute";
  div.style.left = "50%";
  div.style.transform = "translateX(-50%)";
  div.style.top = renderApp_navbar.getBoundingClientRect().height + "px";
  div.style.backgroundColor = "#000";
  return div;
}

function createApplicatonHeader(className) {
  const header = document.createElement("header");
  header.className = "application__header";
  header.style.position = "relative";
  header.style.display = "flex";
  header.style.alignItems = "center";
  header.style.margin = "7px 0";

  const svg = `<svg
    class="application__header-icon"
    style="cursor: pointer"
    width="20px"
    height="20px"
    viewBox="0 0 512 512"
    version="1.1"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    fill="#bcbaba"
    stroke="#bcbaba">
    <g
      id="SVGRepo_bgCarrier"
      stroke-width="0" />
  
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round" />
  
    <g id="SVGRepo_iconCarrier">
    
      <g id="Layer_1" />
      <g id="Layer_2">
        <g>
          <path
            class="st0"
            d="M217,129.88c-6.25-6.25-16.38-6.25-22.63,0L79.61,244.64c-0.39,0.39-0.76,0.8-1.11,1.23 c-0.11,0.13-0.2,0.27-0.31,0.41c-0.21,0.28-0.42,0.55-0.62,0.84c-0.14,0.21-0.26,0.43-0.39,0.64c-0.14,0.23-0.28,0.46-0.41,0.7 c-0.13,0.24-0.24,0.48-0.35,0.73c-0.11,0.23-0.22,0.45-0.32,0.68c-0.11,0.26-0.19,0.52-0.28,0.78c-0.08,0.23-0.17,0.46-0.24,0.69 c-0.09,0.29-0.15,0.58-0.22,0.86c-0.05,0.22-0.11,0.43-0.16,0.65c-0.08,0.38-0.13,0.76-0.17,1.14c-0.02,0.14-0.04,0.27-0.06,0.41 c-0.11,1.07-0.11,2.15,0,3.22c0.01,0.06,0.02,0.12,0.03,0.18c0.05,0.46,0.12,0.92,0.21,1.37c0.03,0.13,0.07,0.26,0.1,0.39 c0.09,0.38,0.18,0.76,0.29,1.13c0.04,0.13,0.09,0.26,0.14,0.4c0.12,0.36,0.25,0.73,0.4,1.09c0.05,0.11,0.1,0.21,0.15,0.32 c0.17,0.37,0.34,0.74,0.53,1.1c0.04,0.07,0.09,0.14,0.13,0.21c0.21,0.38,0.44,0.76,0.68,1.13c0.02,0.03,0.04,0.06,0.06,0.09 c0.55,0.81,1.18,1.58,1.89,2.29l114.81,114.81c3.12,3.12,7.22,4.69,11.31,4.69s8.19-1.56,11.31-4.69c6.25-6.25,6.25-16.38,0-22.63 l-87.5-87.5h291.62c8.84,0,16-7.16,16-16s-7.16-16-16-16H129.51L217,152.5C223.25,146.26,223.25,136.13,217,129.88z" />
        </g>
      </g>
    </g>
  </svg>`;
  const p = document.createElement("p");
  p.textContent = className;
  p.style.position = "absolute";
  p.style.left = "50%";
  p.style.top = "50%";
  p.style.fontSize = "14px";
  p.style.transform = "translate(-50%, -50%)";
  header.innerHTML = svg;
  header.append(p);
  return header;
}
function createApplicationContent(className) {
  return className;
}

;// CONCATENATED MODULE: ./src/images/lisovyi-logo-orange.png
/* harmony default export */ const lisovyi_logo_orange = (__webpack_require__.p + "images/lisovyi-logo-orange.png");
;// CONCATENATED MODULE: ./src/images/mockup_poco.png
/* harmony default export */ const mockup_poco = (__webpack_require__.p + "images/mockup_poco.png");
;// CONCATENATED MODULE: ./src/js/index.js











})();

/******/ })()
;