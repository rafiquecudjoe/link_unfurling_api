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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst getMetaData = __webpack_require__(/*! metadata-scraper */ \"metadata-scraper\"); //imports the metadata-scrapper package\n\n\nconst {\n  PrismaClient\n} = __webpack_require__(/*! @prisma/client */ \"@prisma/client\"); //imports Prisma client to Route\n\n\nconst prisma = new PrismaClient(); //instantiates the Prima Client\n// API Route\n\nasync function handler(req, res) {\n  // Desctruction of the request object\n  const {\n    query\n  } = req;\n  const url = query.url; // Checks if url metadata is cached in the database\n\n  const datainfo = await prisma.webPreview.findUnique({\n    where: {\n      url: url\n    }\n  });\n\n  if (!datainfo) {\n    //passes the request url to the getMetaData function\n    const data = await getMetaData(url); //destruct the data object from the response\n\n    const {\n      title,\n      icon,\n      description\n    } = data; // saves url metadata in the database\n\n    const datasaved = await prisma.webPreview.create({\n      data: {\n        url: url,\n        title: title,\n        favicon: icon,\n        //if description is present saves in database if not saves a string\n        description: description !== null ? \"\" : description\n      }\n    }); //If database cache is sucessful response with data object if not response with Database error\n\n    !datasaved ? res.status(500).send(\"Database Error\") : res.status(200).send({\n      title: title,\n      favicon: icon,\n      description: description\n    });\n  } else {\n    //If url metadata is already cached in database then it sends the cached data as response object\n    const {\n      title,\n      favicon,\n      description\n    } = datainfo;\n    res.status(200).send({\n      title: title,\n      favicon: favicon,\n      description: description\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGFyc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQTNCLEVBQXNEOzs7QUFDdEQsTUFBTTtBQUFFQyxFQUFBQTtBQUFGLElBQW1CRCxtQkFBTyxDQUFDLHNDQUFELENBQWhDLEVBQXFEOzs7QUFFckQsTUFBTUUsTUFBTSxHQUFHLElBQUlELFlBQUosRUFBZixFQUF1QztBQUd2Qzs7QUFDZSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFFOUM7QUFDQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBWUYsR0FBbEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdELEtBQUssQ0FBQ0MsR0FBbEIsQ0FKOEMsQ0FPL0M7O0FBQ0MsUUFBTUMsUUFBUSxHQUFHLE1BQU1OLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQkMsVUFBbEIsQ0FBNkI7QUFDbERDLElBQUFBLEtBQUssRUFBRTtBQUNMSixNQUFBQSxHQUFHLEVBQUVBO0FBREE7QUFEMkMsR0FBN0IsQ0FBdkI7O0FBT0EsTUFBSSxDQUFDQyxRQUFMLEVBQWU7QUFFYjtBQUNBLFVBQU1JLElBQUksR0FBRyxNQUFNYixXQUFXLENBQUNRLEdBQUQsQ0FBOUIsQ0FIYSxDQUtiOztBQUNBLFVBQU07QUFBRU0sTUFBQUEsS0FBRjtBQUFTQyxNQUFBQSxJQUFUO0FBQWVDLE1BQUFBO0FBQWYsUUFBK0JILElBQXJDLENBTmEsQ0FRYjs7QUFDQSxVQUFNSSxTQUFTLEdBQUcsTUFBTWQsTUFBTSxDQUFDTyxVQUFQLENBQWtCUSxNQUFsQixDQUF5QjtBQUMvQ0wsTUFBQUEsSUFBSSxFQUFFO0FBQ0pMLFFBQUFBLEdBQUcsRUFBRUEsR0FERDtBQUVKTSxRQUFBQSxLQUFLLEVBQUVBLEtBRkg7QUFHSkssUUFBQUEsT0FBTyxFQUFFSixJQUhMO0FBSUo7QUFDQUMsUUFBQUEsV0FBVyxFQUFFQSxXQUFXLEtBQUssSUFBaEIsR0FBdUIsRUFBdkIsR0FBNEJBO0FBTHJDO0FBRHlDLEtBQXpCLENBQXhCLENBVGEsQ0FtQlo7O0FBQ0QsS0FBQ0MsU0FBRCxHQUNJWCxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixnQkFBckIsQ0FESixHQUVJZixHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFUCxNQUFBQSxLQUFLLEVBQUVBLEtBQVQ7QUFBZ0JLLE1BQUFBLE9BQU8sRUFBRUosSUFBekI7QUFBK0JDLE1BQUFBLFdBQVcsRUFBRUE7QUFBNUMsS0FBckIsQ0FGSjtBQUdELEdBdkJELE1BdUJPO0FBRUw7QUFDQSxVQUFNO0FBQUVGLE1BQUFBLEtBQUY7QUFBU0ssTUFBQUEsT0FBVDtBQUFrQkgsTUFBQUE7QUFBbEIsUUFBa0NQLFFBQXhDO0FBRUFILElBQUFBLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CUCxNQUFBQSxLQUFLLEVBQUVBLEtBRFk7QUFFbkJLLE1BQUFBLE9BQU8sRUFBRUEsT0FGVTtBQUduQkgsTUFBQUEsV0FBVyxFQUFFQTtBQUhNLEtBQXJCO0FBS0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGVwcmV2aWV3c2FwaS8uL3BhZ2VzL2FwaS9wYXJzZS5qcz84ZDZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCBnZXRNZXRhRGF0YSA9IHJlcXVpcmUoXCJtZXRhZGF0YS1zY3JhcGVyXCIpOyAgICAgIC8vaW1wb3J0cyB0aGUgbWV0YWRhdGEtc2NyYXBwZXIgcGFja2FnZVxuY29uc3QgeyBQcmlzbWFDbGllbnQgfSA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsgIC8vaW1wb3J0cyBQcmlzbWEgY2xpZW50IHRvIFJvdXRlXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTsgICAgIC8vaW5zdGFudGlhdGVzIHRoZSBQcmltYSBDbGllbnRcblxuXG4vLyBBUEkgUm91dGVcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcblxuICAvLyBEZXNjdHJ1Y3Rpb24gb2YgdGhlIHJlcXVlc3Qgb2JqZWN0XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJlcTtcbiAgY29uc3QgdXJsID0gcXVlcnkudXJsO1xuXG5cbiAvLyBDaGVja3MgaWYgdXJsIG1ldGFkYXRhIGlzIGNhY2hlZCBpbiB0aGUgZGF0YWJhc2VcbiAgY29uc3QgZGF0YWluZm8gPSBhd2FpdCBwcmlzbWEud2ViUHJldmlldy5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgdXJsOiB1cmwsXG4gICAgfSxcbiAgfSk7XG4gIFxuICBcbiAgaWYgKCFkYXRhaW5mbykge1xuXG4gICAgLy9wYXNzZXMgdGhlIHJlcXVlc3QgdXJsIHRvIHRoZSBnZXRNZXRhRGF0YSBmdW5jdGlvblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRNZXRhRGF0YSh1cmwpO1xuXG4gICAgLy9kZXN0cnVjdCB0aGUgZGF0YSBvYmplY3QgZnJvbSB0aGUgcmVzcG9uc2VcbiAgICBjb25zdCB7IHRpdGxlLCBpY29uLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcblxuICAgIC8vIHNhdmVzIHVybCBtZXRhZGF0YSBpbiB0aGUgZGF0YWJhc2VcbiAgICBjb25zdCBkYXRhc2F2ZWQgPSBhd2FpdCBwcmlzbWEud2ViUHJldmlldy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBmYXZpY29uOiBpY29uLFxuICAgICAgICAvL2lmIGRlc2NyaXB0aW9uIGlzIHByZXNlbnQgc2F2ZXMgaW4gZGF0YWJhc2UgaWYgbm90IHNhdmVzIGEgc3RyaW5nXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiAhPT0gbnVsbCA/IFwiXCIgOiBkZXNjcmlwdGlvbixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAgLy9JZiBkYXRhYmFzZSBjYWNoZSBpcyBzdWNlc3NmdWwgcmVzcG9uc2Ugd2l0aCBkYXRhIG9iamVjdCBpZiBub3QgcmVzcG9uc2Ugd2l0aCBEYXRhYmFzZSBlcnJvclxuICAgICFkYXRhc2F2ZWRcbiAgICAgID8gcmVzLnN0YXR1cyg1MDApLnNlbmQoXCJEYXRhYmFzZSBFcnJvclwiKVxuICAgICAgOiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IHRpdGxlOiB0aXRsZSwgZmF2aWNvbjogaWNvbiwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uIH0pO1xuICB9IGVsc2Uge1xuXG4gICAgLy9JZiB1cmwgbWV0YWRhdGEgaXMgYWxyZWFkeSBjYWNoZWQgaW4gZGF0YWJhc2UgdGhlbiBpdCBzZW5kcyB0aGUgY2FjaGVkIGRhdGEgYXMgcmVzcG9uc2Ugb2JqZWN0XG4gICAgY29uc3QgeyB0aXRsZSwgZmF2aWNvbiwgZGVzY3JpcHRpb24gfSA9IGRhdGFpbmZvO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZmF2aWNvbjogZmF2aWNvbixcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldE1ldGFEYXRhIiwicmVxdWlyZSIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsInVybCIsImRhdGFpbmZvIiwid2ViUHJldmlldyIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImRhdGEiLCJ0aXRsZSIsImljb24iLCJkZXNjcmlwdGlvbiIsImRhdGFzYXZlZCIsImNyZWF0ZSIsImZhdmljb24iLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/parse.js\n");

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