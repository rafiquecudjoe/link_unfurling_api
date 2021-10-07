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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst getMetaData = __webpack_require__(/*! metadata-scraper */ \"metadata-scraper\");\n\nconst {\n  PrismaClient\n} = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n\nconst prisma = new PrismaClient();\nasync function handler(req, res) {\n  const {\n    query\n  } = req;\n  const url = query.url;\n  const sitep = await prisma.webPreview.findUnique({\n    where: {\n      url: url\n    }\n  });\n\n  if (!sitep) {\n    console.log('HIiii');\n    const data = await getMetaData(url);\n    console.log(data);\n    const {\n      title,\n      icon,\n      description\n    } = data;\n    const sitep2 = await prisma.webPreview.create({\n      data: {\n        url: url,\n        title: title,\n        favicon: icon,\n        description: description\n      }\n    });\n    res.status(200).send({\n      title: title,\n      favicon: icon,\n      description: description\n    });\n    if (!sitep2) throw new Error(\"Database Error\");\n  } else {\n    const {\n      title,\n      favicon,\n      description\n    } = sitep;\n    res.status(200).send({\n      title: title,\n      favicon: favicon,\n      description: description\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGFyc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQTNCOztBQUNBLE1BQU07QUFBRUMsRUFBQUE7QUFBRixJQUFtQkQsbUJBQU8sQ0FBQyxzQ0FBRCxDQUFoQzs7QUFFQSxNQUFNRSxNQUFNLEdBQUcsSUFBSUQsWUFBSixFQUFmO0FBRWUsZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDLFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFZRixHQUFsQjtBQUVBLFFBQU1HLEdBQUcsR0FBR0QsS0FBSyxDQUFDQyxHQUFsQjtBQUVBLFFBQU1DLEtBQUssR0FBRyxNQUFNTixNQUFNLENBQUNPLFVBQVAsQ0FBa0JDLFVBQWxCLENBQTZCO0FBQy9DQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEosTUFBQUEsR0FBRyxFQUFFQTtBQURBO0FBRHdDLEdBQTdCLENBQXBCOztBQU1BLE1BQUksQ0FBQ0MsS0FBTCxFQUFZO0FBQ1ZJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTWYsV0FBVyxDQUFDUSxHQUFELENBQTlCO0FBQ0FLLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaO0FBQ0EsVUFBTTtBQUFFQyxNQUFBQSxLQUFGO0FBQVNDLE1BQUFBLElBQVQ7QUFBZUMsTUFBQUE7QUFBZixRQUErQkgsSUFBckM7QUFDQSxVQUFNSSxNQUFNLEdBQUcsTUFBTWhCLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQlUsTUFBbEIsQ0FBeUI7QUFDNUNMLE1BQUFBLElBQUksRUFBRTtBQUNKUCxRQUFBQSxHQUFHLEVBQUVBLEdBREQ7QUFFSlEsUUFBQUEsS0FBSyxFQUFFQSxLQUZIO0FBR0pLLFFBQUFBLE9BQU8sRUFBRUosSUFITDtBQUlKQyxRQUFBQSxXQUFXLEVBQUVBO0FBSlQ7QUFEc0MsS0FBekIsQ0FBckI7QUFRQVosSUFBQUEsR0FBRyxDQUNBZ0IsTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRO0FBQUVQLE1BQUFBLEtBQUssRUFBRUEsS0FBVDtBQUFnQkssTUFBQUEsT0FBTyxFQUFFSixJQUF6QjtBQUErQkMsTUFBQUEsV0FBVyxFQUFFQTtBQUE1QyxLQUZSO0FBR0EsUUFBSSxDQUFDQyxNQUFMLEVBQWEsTUFBTSxJQUFJSyxLQUFKLENBQVUsZ0JBQVYsQ0FBTjtBQUNkLEdBakJELE1BaUJPO0FBQ0wsVUFBTTtBQUFDUixNQUFBQSxLQUFEO0FBQVFLLE1BQUFBLE9BQVI7QUFBaUJILE1BQUFBO0FBQWpCLFFBQWlDVCxLQUF2QztBQUVBSCxJQUFBQSxHQUFHLENBQ0FnQixNQURILENBQ1UsR0FEVixFQUVHQyxJQUZILENBRVE7QUFDSlAsTUFBQUEsS0FBSyxFQUFFQSxLQURIO0FBRUpLLE1BQUFBLE9BQU8sRUFBRUEsT0FGTDtBQUdKSCxNQUFBQSxXQUFXLEVBQUVBO0FBSFQsS0FGUjtBQVFEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlcHJldmlld3NhcGkvLi9wYWdlcy9hcGkvcGFyc2UuanM/OGQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuY29uc3QgZ2V0TWV0YURhdGEgPSByZXF1aXJlKFwibWV0YWRhdGEtc2NyYXBlclwiKTtcbmNvbnN0IHsgUHJpc21hQ2xpZW50IH0gPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IHF1ZXJ5IH0gPSByZXE7XG5cbiAgY29uc3QgdXJsID0gcXVlcnkudXJsO1xuXG4gIGNvbnN0IHNpdGVwID0gYXdhaXQgcHJpc21hLndlYlByZXZpZXcuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVybDogdXJsLFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmICghc2l0ZXApIHtcbiAgICBjb25zb2xlLmxvZygnSElpaWknKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRNZXRhRGF0YSh1cmwpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgY29uc3QgeyB0aXRsZSwgaWNvbiwgZGVzY3JpcHRpb24gfSA9IGRhdGE7XG4gICAgY29uc3Qgc2l0ZXAyID0gYXdhaXQgcHJpc21hLndlYlByZXZpZXcuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZmF2aWNvbjogaWNvbixcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgLnNlbmQoeyB0aXRsZTogdGl0bGUsIGZhdmljb246IGljb24sIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9KTtcbiAgICBpZiAoIXNpdGVwMikgdGhyb3cgbmV3IEVycm9yKFwiRGF0YWJhc2UgRXJyb3JcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge3RpdGxlLCBmYXZpY29uLCBkZXNjcmlwdGlvbiB9ID0gc2l0ZXA7XG5cbiAgICByZXNcbiAgICAgIC5zdGF0dXMoMjAwKVxuICAgICAgLnNlbmQoe1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGZhdmljb246IGZhdmljb24sXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgXG4gICAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldE1ldGFEYXRhIiwicmVxdWlyZSIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInVybCIsInNpdGVwIiwid2ViUHJldmlldyIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidGl0bGUiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJzaXRlcDIiLCJjcmVhdGUiLCJmYXZpY29uIiwic3RhdHVzIiwic2VuZCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/parse.js\n");

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