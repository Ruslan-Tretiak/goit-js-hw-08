function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var o,r,i,a,u,f,l=0,s=!1,c=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,u=setTimeout(j,t),s?b(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||c&&e-l>=i}function j(){var e=v();if(w(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return c?d(n,i-(e-l)):n}(e))}function O(e){return u=void 0,g&&o?b(e):(o=r=void 0,a)}function S(){var e=v(),n=w(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(c)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(s=!!n.leading,i=(c="maxWait"in n)?m(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},S.flush=function(){return void 0===u?a:O(v())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");const h=e(t)((function(){const e=b.elements.email,t=b.elements.message,n={email:e.value,message:t.value};try{const e=JSON.stringify(n);localStorage.setItem("feedback-form-state",e)}catch(e){console.error("Set state error: ",e.message)}}),500);b.addEventListener("input",h),window.addEventListener("load",(function(){try{const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);b.elements.email.value=t.email,b.elements.message.value=t.message}}catch(e){console.error("Get state error: ",e.message)}})),b.addEventListener("submit",(function(e){e.preventDefault("");const t=b.elements.email,n=b.elements.message,o={email:t.value,message:n.value};console.log(o),t.value="",n.value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.6743cca7.js.map