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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst getMetaData = __webpack_require__(/*! metadata-scraper */ \"metadata-scraper\");\n\nconst {\n  PrismaClient\n} = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n  const {\n    query\n  } = req;\n  const url = query.url;\n  const sitep = await prisma.sitepreview.findUnique({\n    where: {\n      url: url\n    }\n  });\n\n  if (!sitep) {\n    const data = await getMetaData(url);\n    const {\n      title,\n      icon,\n      description\n    } = data;\n    const sitep2 = await prisma.sitepreview.create({\n      data: {\n        url: url,\n        title: title,\n        favicon: icon,\n        description: description,\n        id: 1\n      }\n    });\n    res.status(200).send({\n      title: title,\n      favicon: icon,\n      description: description\n    });\n    if (!sitep2) throw new Error(\"Database Error\");\n  } else {\n    const {\n      url,\n      title,\n      favicon,\n      description\n    } = sitep;\n    res.status(200).send({\n      url: url,\n      title: title,\n      description: description,\n      icon: favicon\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGFyc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQTNCOztBQUNBLE1BQU07QUFBRUMsRUFBQUE7QUFBRixJQUFtQkQsbUJBQU8sQ0FBQyxzQ0FBRCxDQUFoQzs7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUQsWUFBSixFQUFmO0FBRWUsZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFZRixHQUFsQjtBQUVBLFFBQU1HLEdBQUcsR0FBR0QsS0FBSyxDQUFDQyxHQUFsQjtBQUVBLFFBQU1DLEtBQUssR0FBRyxNQUFNTixNQUFNLENBQUNPLFdBQVAsQ0FBbUJDLFVBQW5CLENBQThCO0FBQ2hEQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEosTUFBQUEsR0FBRyxFQUFFQTtBQURBO0FBRHlDLEdBQTlCLENBQXBCOztBQU1BLE1BQUksQ0FBQ0MsS0FBTCxFQUFZO0FBQ1YsVUFBTUksSUFBSSxHQUFHLE1BQU1iLFdBQVcsQ0FBQ1EsR0FBRCxDQUE5QjtBQUNBLFVBQU07QUFBRU0sTUFBQUEsS0FBRjtBQUFTQyxNQUFBQSxJQUFUO0FBQWVDLE1BQUFBO0FBQWYsUUFBK0JILElBQXJDO0FBQ0EsVUFBTUksTUFBTSxHQUFHLE1BQU1kLE1BQU0sQ0FBQ08sV0FBUCxDQUFtQlEsTUFBbkIsQ0FBMEI7QUFDN0NMLE1BQUFBLElBQUksRUFBRTtBQUNKTCxRQUFBQSxHQUFHLEVBQUVBLEdBREQ7QUFFSk0sUUFBQUEsS0FBSyxFQUFFQSxLQUZIO0FBR0pLLFFBQUFBLE9BQU8sRUFBRUosSUFITDtBQUlKQyxRQUFBQSxXQUFXLEVBQUVBLFdBSlQ7QUFLSkksUUFBQUEsRUFBRSxFQUFFO0FBTEE7QUFEdUMsS0FBMUIsQ0FBckI7QUFXQWQsSUFBQUEsR0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRVIsTUFBQUEsS0FBSyxFQUFFQSxLQUFUO0FBQWdCSyxNQUFBQSxPQUFPLEVBQUVKLElBQXpCO0FBQStCQyxNQUFBQSxXQUFXLEVBQUVBO0FBQTVDLEtBQXJCO0FBQ0EsUUFBSSxDQUFDQyxNQUFMLEVBQWEsTUFBTSxJQUFJTSxLQUFKLENBQVUsZ0JBQVYsQ0FBTjtBQUNkLEdBaEJELE1BZ0JPO0FBQ0wsVUFBTTtBQUFDZixNQUFBQSxHQUFEO0FBQU1NLE1BQUFBLEtBQU47QUFBYUssTUFBQUEsT0FBYjtBQUFzQkgsTUFBQUE7QUFBdEIsUUFDSlAsS0FERjtBQUdKSCxJQUFBQSxHQUFHLENBQUNlLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFDZCxNQUFBQSxHQUFHLEVBQUNBLEdBQUw7QUFBU00sTUFBQUEsS0FBSyxFQUFDQSxLQUFmO0FBQXFCRSxNQUFBQSxXQUFXLEVBQUNBLFdBQWpDO0FBQTZDRCxNQUFBQSxJQUFJLEVBQUNJO0FBQWxELEtBQXJCO0FBRUc7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGVwcmV2aWV3c2FwaS8uL3BhZ2VzL2FwaS9wYXJzZS5qcz84ZDZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCBnZXRNZXRhRGF0YSA9IHJlcXVpcmUoXCJtZXRhZGF0YS1zY3JhcGVyXCIpO1xuY29uc3QgeyBQcmlzbWFDbGllbnQgfSA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJlcTtcblxuICBjb25zdCB1cmwgPSBxdWVyeS51cmw7XG5cbiAgY29uc3Qgc2l0ZXAgPSBhd2FpdCBwcmlzbWEuc2l0ZXByZXZpZXcuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVybDogdXJsLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghc2l0ZXApIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TWV0YURhdGEodXJsKTtcbiAgICBjb25zdCB7IHRpdGxlLCBpY29uLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcbiAgICBjb25zdCBzaXRlcDIgPSBhd2FpdCBwcmlzbWEuc2l0ZXByZXZpZXcuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZmF2aWNvbjogaWNvbixcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBpZDogMVxuICAgICAgfSxcbiAgICAgIFxuICAgICBcbiAgICB9KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHRpdGxlOiB0aXRsZSwgZmF2aWNvbjogaWNvbiwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIH0pXG4gICAgaWYgKCFzaXRlcDIpIHRocm93IG5ldyBFcnJvcihcIkRhdGFiYXNlIEVycm9yXCIpXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge3VybCwgdGl0bGUsIGZhdmljb24sIGRlc2NyaXB0aW9uXG4gIH0gPSBzaXRlcFxuXG5yZXMuc3RhdHVzKDIwMCkuc2VuZCh7dXJsOnVybCx0aXRsZTp0aXRsZSxkZXNjcmlwdGlvbjpkZXNjcmlwdGlvbixpY29uOmZhdmljb259KVxuICAgIFxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0TWV0YURhdGEiLCJyZXF1aXJlIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwidXJsIiwic2l0ZXAiLCJzaXRlcHJldmlldyIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImRhdGEiLCJ0aXRsZSIsImljb24iLCJkZXNjcmlwdGlvbiIsInNpdGVwMiIsImNyZWF0ZSIsImZhdmljb24iLCJpZCIsInN0YXR1cyIsInNlbmQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/parse.js\n");

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