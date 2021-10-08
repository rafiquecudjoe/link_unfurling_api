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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst getMetaData = __webpack_require__(/*! metadata-scraper */ \"metadata-scraper\"); //imports the metadata-scrapper package\n\n\nconst {\n  PrismaClient\n} = __webpack_require__(/*! @prisma/client */ \"@prisma/client\"); //imports Prisma client to Route\n\n\nconst prisma = new PrismaClient(); //instantiates the Prisma Client\n// API Route\n\nasync function handler(req, res) {\n  // Desctruction of the request object\n  const {\n    query\n  } = req;\n  const url = query.url; // Checks if url metadata is cached in the database\n\n  const datainfo = await prisma.webPreview.findUnique({\n    where: {\n      url: url\n    }\n  });\n\n  if (!datainfo) {\n    //passes the request url to the getMetaData function\n    const data = await getMetaData(url); //destruct the data object from the response\n\n    const {\n      title,\n      icon,\n      description\n    } = data; // saves url metadata in the database\n\n    const datasaved = await prisma.webPreview.create({\n      data: {\n        url: url,\n        title: title,\n        favicon: icon,\n        //if description is present saves in database if not saves a string\n        description: description !== null ? \"\" : description\n      }\n    }); //If database cache is sucessful response with data object if not response with Database error\n\n    !datasaved ? res.status(500).send(\"Database Error\") : res.status(200).send({\n      title: title,\n      favicon: icon,\n      description: description\n    });\n  } else {\n    //If url metadata is already cached in database then it sends the cached data as response object\n    const {\n      title,\n      favicon,\n      description\n    } = datainfo;\n    res.status(200).send({\n      title: title,\n      favicon: favicon,\n      description: description\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGFyc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsTUFBTUEsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQTNCLEVBQXNEOzs7QUFDdEQsTUFBTTtBQUFFQyxFQUFBQTtBQUFGLElBQW1CRCxtQkFBTyxDQUFDLHNDQUFELENBQWhDLEVBQXFEOzs7QUFFckQsTUFBTUUsTUFBTSxHQUFHLElBQUlELFlBQUosRUFBZixFQUF1QztBQUd2Qzs7QUFDZSxlQUFlRSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFFOUM7QUFDQSxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBWUYsR0FBbEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdELEtBQUssQ0FBQ0MsR0FBbEIsQ0FKOEMsQ0FPL0M7O0FBQ0MsUUFBTUMsUUFBUSxHQUFHLE1BQU1OLE1BQU0sQ0FBQ08sVUFBUCxDQUFrQkMsVUFBbEIsQ0FBNkI7QUFDbERDLElBQUFBLEtBQUssRUFBRTtBQUNMSixNQUFBQSxHQUFHLEVBQUVBO0FBREE7QUFEMkMsR0FBN0IsQ0FBdkI7O0FBT0EsTUFBSSxDQUFDQyxRQUFMLEVBQWU7QUFFYjtBQUNBLFVBQU1JLElBQUksR0FBRyxNQUFNYixXQUFXLENBQUNRLEdBQUQsQ0FBOUIsQ0FIYSxDQUtiOztBQUNBLFVBQU07QUFBRU0sTUFBQUEsS0FBRjtBQUFTQyxNQUFBQSxJQUFUO0FBQWVDLE1BQUFBO0FBQWYsUUFBK0JILElBQXJDLENBTmEsQ0FRYjs7QUFDQSxVQUFNSSxTQUFTLEdBQUcsTUFBTWQsTUFBTSxDQUFDTyxVQUFQLENBQWtCUSxNQUFsQixDQUF5QjtBQUMvQ0wsTUFBQUEsSUFBSSxFQUFFO0FBQ0pMLFFBQUFBLEdBQUcsRUFBRUEsR0FERDtBQUVKTSxRQUFBQSxLQUFLLEVBQUVBLEtBRkg7QUFHSkssUUFBQUEsT0FBTyxFQUFFSixJQUhMO0FBSUo7QUFDQUMsUUFBQUEsV0FBVyxFQUFFQSxXQUFXLEtBQUssSUFBaEIsR0FBdUIsRUFBdkIsR0FBNEJBO0FBTHJDO0FBRHlDLEtBQXpCLENBQXhCLENBVGEsQ0FtQlo7O0FBQ0QsS0FBQ0MsU0FBRCxHQUNJWCxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixnQkFBckIsQ0FESixHQUVJZixHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFUCxNQUFBQSxLQUFLLEVBQUVBLEtBQVQ7QUFBZ0JLLE1BQUFBLE9BQU8sRUFBRUosSUFBekI7QUFBK0JDLE1BQUFBLFdBQVcsRUFBRUE7QUFBNUMsS0FBckIsQ0FGSjtBQUdELEdBdkJELE1BdUJPO0FBRUw7QUFDQSxVQUFNO0FBQUVGLE1BQUFBLEtBQUY7QUFBU0ssTUFBQUEsT0FBVDtBQUFrQkgsTUFBQUE7QUFBbEIsUUFBa0NQLFFBQXhDO0FBRUFILElBQUFBLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CUCxNQUFBQSxLQUFLLEVBQUVBLEtBRFk7QUFFbkJLLE1BQUFBLE9BQU8sRUFBRUEsT0FGVTtBQUduQkgsTUFBQUEsV0FBVyxFQUFFQTtBQUhNLEtBQXJCO0FBS0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGVwcmV2aWV3c2FwaS8uL3BhZ2VzL2FwaS9wYXJzZS5qcz84ZDZlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5jb25zdCBnZXRNZXRhRGF0YSA9IHJlcXVpcmUoXCJtZXRhZGF0YS1zY3JhcGVyXCIpOyAgICAgIC8vaW1wb3J0cyB0aGUgbWV0YWRhdGEtc2NyYXBwZXIgcGFja2FnZVxuY29uc3QgeyBQcmlzbWFDbGllbnQgfSA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsgIC8vaW1wb3J0cyBQcmlzbWEgY2xpZW50IHRvIFJvdXRlXG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTsgICAgIC8vaW5zdGFudGlhdGVzIHRoZSBQcmlzbWEgQ2xpZW50XG5cblxuLy8gQVBJIFJvdXRlXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cbiAgLy8gRGVzY3RydWN0aW9uIG9mIHRoZSByZXF1ZXN0IG9iamVjdFxuICBjb25zdCB7IHF1ZXJ5IH0gPSByZXE7XG4gIGNvbnN0IHVybCA9IHF1ZXJ5LnVybDtcblxuXG4gLy8gQ2hlY2tzIGlmIHVybCBtZXRhZGF0YSBpcyBjYWNoZWQgaW4gdGhlIGRhdGFiYXNlXG4gIGNvbnN0IGRhdGFpbmZvID0gYXdhaXQgcHJpc21hLndlYlByZXZpZXcuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVybDogdXJsLFxuICAgIH0sXG4gIH0pO1xuICBcbiAgXG4gIGlmICghZGF0YWluZm8pIHtcblxuICAgIC8vcGFzc2VzIHRoZSByZXF1ZXN0IHVybCB0byB0aGUgZ2V0TWV0YURhdGEgZnVuY3Rpb25cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0TWV0YURhdGEodXJsKTtcblxuICAgIC8vZGVzdHJ1Y3QgdGhlIGRhdGEgb2JqZWN0IGZyb20gdGhlIHJlc3BvbnNlXG4gICAgY29uc3QgeyB0aXRsZSwgaWNvbiwgZGVzY3JpcHRpb24gfSA9IGRhdGE7XG5cbiAgICAvLyBzYXZlcyB1cmwgbWV0YWRhdGEgaW4gdGhlIGRhdGFiYXNlXG4gICAgY29uc3QgZGF0YXNhdmVkID0gYXdhaXQgcHJpc21hLndlYlByZXZpZXcuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZmF2aWNvbjogaWNvbixcbiAgICAgICAgLy9pZiBkZXNjcmlwdGlvbiBpcyBwcmVzZW50IHNhdmVzIGluIGRhdGFiYXNlIGlmIG5vdCBzYXZlcyBhIHN0cmluZ1xuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gIT09IG51bGwgPyBcIlwiIDogZGVzY3JpcHRpb24sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgIC8vSWYgZGF0YWJhc2UgY2FjaGUgaXMgc3VjZXNzZnVsIHJlc3BvbnNlIHdpdGggZGF0YSBvYmplY3QgaWYgbm90IHJlc3BvbnNlIHdpdGggRGF0YWJhc2UgZXJyb3JcbiAgICAhZGF0YXNhdmVkXG4gICAgICA/IHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRGF0YWJhc2UgRXJyb3JcIilcbiAgICAgIDogcmVzLnN0YXR1cygyMDApLnNlbmQoeyB0aXRsZTogdGl0bGUsIGZhdmljb246IGljb24sIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9KTtcbiAgfSBlbHNlIHtcblxuICAgIC8vSWYgdXJsIG1ldGFkYXRhIGlzIGFscmVhZHkgY2FjaGVkIGluIGRhdGFiYXNlIHRoZW4gaXQgc2VuZHMgdGhlIGNhY2hlZCBkYXRhIGFzIHJlc3BvbnNlIG9iamVjdFxuICAgIGNvbnN0IHsgdGl0bGUsIGZhdmljb24sIGRlc2NyaXB0aW9uIH0gPSBkYXRhaW5mbztcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGZhdmljb246IGZhdmljb24sXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRNZXRhRGF0YSIsInJlcXVpcmUiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJ1cmwiLCJkYXRhaW5mbyIsIndlYlByZXZpZXciLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJkYXRhIiwidGl0bGUiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJkYXRhc2F2ZWQiLCJjcmVhdGUiLCJmYXZpY29uIiwic3RhdHVzIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/parse.js\n");

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