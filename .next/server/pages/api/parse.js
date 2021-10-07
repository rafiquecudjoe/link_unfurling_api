"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/parse";
exports.ids = ["pages/api/parse"];
exports.modules = {

/***/ "./pages/api/parse.js":
/*!****************************!*\
  !*** ./pages/api/parse.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst getMetaData = __webpack_require__(/*! metadata-scraper */ \"metadata-scraper\");\n\nconst {\n  PrismaClient\n} = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n  const {\n    query\n  } = req;\n  const url = query.url;\n  const sitep = await prisma.webPreview.findUnique({\n    where: {\n      url: url\n    }\n  });\n\n  if (!sitep) {\n    const data = await getMetaData(url); // console.log(data)\n\n    if (!url) {}\n\n    const {\n      title,\n      icon,\n      description\n    } = data;\n    const sitep2 = await prisma.webPreview.create({\n      data: {\n        url: url,\n        title: title,\n        favicon: icon,\n        description: description !== null ? \"\" : description\n      }\n    });\n    res.status(200).send({\n      title: title,\n      favicon: icon,\n      description: description\n    });\n  } else {\n    const {\n      title,\n      favicon,\n      description\n    } = sitep;\n    res.status(200).send({\n      title: title,\n      favicon: favicon,\n      description: description\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGFyc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQTNCOztBQUNBLE1BQU07QUFBRUMsRUFBQUE7QUFBRixJQUFtQkQsbUJBQU8sQ0FBQyxzQ0FBRCxDQUFoQzs7QUFHQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUQsWUFBSixFQUFmO0FBRWUsZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFZRixHQUFsQjtBQUVBLFFBQU1HLEdBQUcsR0FBR0QsS0FBSyxDQUFDQyxHQUFsQjtBQUVBLFFBQU1DLEtBQUssR0FBRyxNQUFNTixNQUFNLENBQUNPLFVBQVAsQ0FBa0JDLFVBQWxCLENBQTZCO0FBQy9DQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEosTUFBQUEsR0FBRyxFQUFFQTtBQURBO0FBRHdDLEdBQTdCLENBQXBCOztBQU1BLE1BQUksQ0FBQ0MsS0FBTCxFQUFZO0FBQ1YsVUFBTUksSUFBSSxHQUFHLE1BQU1iLFdBQVcsQ0FBQ1EsR0FBRCxDQUE5QixDQURVLENBR1Y7O0FBQ0EsUUFBSSxDQUFDQSxHQUFMLEVBQVUsQ0FDVDs7QUFDRCxVQUFNO0FBQUVNLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUEsSUFBVDtBQUFlQyxNQUFBQTtBQUFmLFFBQStCSCxJQUFyQztBQUNBLFVBQU1JLE1BQU0sR0FBRyxNQUFNZCxNQUFNLENBQUNPLFVBQVAsQ0FBa0JRLE1BQWxCLENBQXlCO0FBQzVDTCxNQUFBQSxJQUFJLEVBQUU7QUFDSkwsUUFBQUEsR0FBRyxFQUFFQSxHQUREO0FBRUpNLFFBQUFBLEtBQUssRUFBRUEsS0FGSDtBQUdKSyxRQUFBQSxPQUFPLEVBQUVKLElBSEw7QUFJSkMsUUFBQUEsV0FBVyxFQUFFQSxXQUFXLEtBQUssSUFBaEIsR0FBdUIsRUFBdkIsR0FBNEJBO0FBSnJDO0FBRHNDLEtBQXpCLENBQXJCO0FBUUFWLElBQUFBLEdBQUcsQ0FDQWMsTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRO0FBQUVQLE1BQUFBLEtBQUssRUFBRUEsS0FBVDtBQUFnQkssTUFBQUEsT0FBTyxFQUFFSixJQUF6QjtBQUErQkMsTUFBQUEsV0FBVyxFQUFFQTtBQUE1QyxLQUZSO0FBR0QsR0FsQkQsTUFrQk87QUFDTCxVQUFNO0FBQUVGLE1BQUFBLEtBQUY7QUFBU0ssTUFBQUEsT0FBVDtBQUFrQkgsTUFBQUE7QUFBbEIsUUFBa0NQLEtBQXhDO0FBRUFILElBQUFBLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CUCxNQUFBQSxLQUFLLEVBQUVBLEtBRFk7QUFFbkJLLE1BQUFBLE9BQU8sRUFBRUEsT0FGVTtBQUduQkgsTUFBQUEsV0FBVyxFQUFFQTtBQUhNLEtBQXJCO0FBS0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGVwcmV2aWV3c2FwaS8uL3BhZ2VzL2FwaS9wYXJzZS5qcz84ZDZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCBnZXRNZXRhRGF0YSA9IHJlcXVpcmUoXCJtZXRhZGF0YS1zY3JhcGVyXCIpO1xuY29uc3QgeyBQcmlzbWFDbGllbnQgfSA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTtcblxuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gcmVxO1xuXG4gIGNvbnN0IHVybCA9IHF1ZXJ5LnVybDtcblxuICBjb25zdCBzaXRlcCA9IGF3YWl0IHByaXNtYS53ZWJQcmV2aWV3LmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7XG4gICAgICB1cmw6IHVybCxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXNpdGVwKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldE1ldGFEYXRhKHVybCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGlmICghdXJsKSB7XG4gICAgfVxuICAgIGNvbnN0IHsgdGl0bGUsIGljb24sIGRlc2NyaXB0aW9uIH0gPSBkYXRhO1xuICAgIGNvbnN0IHNpdGVwMiA9IGF3YWl0IHByaXNtYS53ZWJQcmV2aWV3LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGZhdmljb246IGljb24sXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiAhPT0gbnVsbCA/IFwiXCIgOiBkZXNjcmlwdGlvbiAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlc1xuICAgICAgLnN0YXR1cygyMDApXG4gICAgICAuc2VuZCh7IHRpdGxlOiB0aXRsZSwgZmF2aWNvbjogaWNvbiwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgdGl0bGUsIGZhdmljb24sIGRlc2NyaXB0aW9uIH0gPSBzaXRlcDtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGZhdmljb246IGZhdmljb24sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRNZXRhRGF0YSIsInJlcXVpcmUiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJ1cmwiLCJzaXRlcCIsIndlYlByZXZpZXciLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJkYXRhIiwidGl0bGUiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJzaXRlcDIiLCJjcmVhdGUiLCJmYXZpY29uIiwic3RhdHVzIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/parse.js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "metadata-scraper":
/*!***********************************!*\
  !*** external "metadata-scraper" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("metadata-scraper");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/parse.js"));
module.exports = __webpack_exports__;

})();