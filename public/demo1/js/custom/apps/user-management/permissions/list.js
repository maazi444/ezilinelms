/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/assets/core/js/custom/apps/user-management/permissions/list.js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/core/js/custom/apps/user-management/permissions/list.js ***!
  \**********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTUsersPermissionsList = function () {\n  // Shared variables\n  var datatable;\n  var table;\n\n  // Init add schedule modal\n  var initPermissionsList = function initPermissionsList() {\n    // Set date data order\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[2].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 2nd column in table\n      dateRow[2].setAttribute('data-order', realDate);\n    });\n\n    // Init datatable --- more info on datatables: https://datatables.net/manual/\n    datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      'columnDefs': [{\n        orderable: false,\n        targets: 1\n      },\n      // Disable ordering on column 1 (assigned)\n      {\n        orderable: false,\n        targets: 3\n      } // Disable ordering on column 3 (actions)\n      ]\n    });\n  };\n\n  // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n  var handleSearchDatatable = function handleSearchDatatable() {\n    var filterSearch = document.querySelector('[data-kt-permissions-table-filter=\"search\"]');\n    filterSearch.addEventListener('keyup', function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  };\n\n  // Delete user\n  var handleDeleteRows = function handleDeleteRows() {\n    // Select all delete buttons\n    var deleteButtons = table.querySelectorAll('[data-kt-permissions-table-filter=\"delete_row\"]');\n    deleteButtons.forEach(function (d) {\n      // Delete button on click\n      d.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        // Select parent row\n        var parent = e.target.closest('tr');\n\n        // Get permission name\n        var permissionName = parent.querySelectorAll('td')[0].innerText;\n\n        // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n        Swal.fire({\n          text: \"Are you sure you want to delete \" + permissionName + \"?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, delete!\",\n          cancelButtonText: \"No, cancel\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-danger\",\n            cancelButton: \"btn fw-bold btn-active-light-primary\"\n          }\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              text: \"You have deleted \" + permissionName + \"!.\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            }).then(function () {\n              // Remove current row\n              datatable.row($(parent)).remove().draw();\n            });\n          } else if (result.dismiss === 'cancel') {\n            Swal.fire({\n              text: customerName + \" was not deleted.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            });\n          }\n        });\n      });\n    });\n  };\n  return {\n    // Public functions\n    init: function init() {\n      table = document.querySelector('#kt_permissions_table');\n      if (!table) {\n        return;\n      }\n      initPermissionsList();\n      handleSearchDatatable();\n      handleDeleteRows();\n    }\n  };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersPermissionsList.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvYXNzZXRzL2NvcmUvanMvY3VzdG9tL2FwcHMvdXNlci1tYW5hZ2VtZW50L3Blcm1pc3Npb25zL2xpc3QuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQSxJQUFJQSxzQkFBc0IsR0FBRyxZQUFZO0VBQ3JDO0VBQ0EsSUFBSUMsU0FBUztFQUNiLElBQUlDLEtBQUs7O0VBRVQ7RUFDQSxJQUFJQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CLEdBQVM7SUFDNUI7SUFDQSxJQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBRXBERCxTQUFTLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxHQUFHLEVBQUk7TUFDckIsSUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNGLGdCQUFnQixDQUFDLElBQUksQ0FBQztNQUMxQyxJQUFNSSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FBQ0MsTUFBTSxFQUFFLENBQUMsQ0FBQztNQUMzRUosT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDSyxZQUFZLENBQUMsWUFBWSxFQUFFSixRQUFRLENBQUM7SUFDbkQsQ0FBQyxDQUFDOztJQUVEO0lBQ0FSLFNBQVMsR0FBR2EsQ0FBQyxDQUFDWixLQUFLLENBQUMsQ0FBQ2EsU0FBUyxDQUFDO01BQzVCLE1BQU0sRUFBRSxLQUFLO01BQ2IsT0FBTyxFQUFFLEVBQUU7TUFDWCxZQUFZLEVBQUUsQ0FDVjtRQUFFQyxTQUFTLEVBQUUsS0FBSztRQUFFQyxPQUFPLEVBQUU7TUFBRSxDQUFDO01BQUU7TUFDbEM7UUFBRUQsU0FBUyxFQUFFLEtBQUs7UUFBRUMsT0FBTyxFQUFFO01BQUUsQ0FBQyxDQUFFO01BQUE7SUFFMUMsQ0FBQyxDQUFDO0VBQ04sQ0FBQzs7RUFFRDtFQUNBLElBQUlDLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBcUIsR0FBUztJQUM5QixJQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLDZDQUE2QyxDQUFDO0lBQzFGRixZQUFZLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVQyxDQUFDLEVBQUU7TUFDaER0QixTQUFTLENBQUN1QixNQUFNLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQ0MsSUFBSSxFQUFFO0lBQzNDLENBQUMsQ0FBQztFQUNOLENBQUM7O0VBRUQ7RUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCLEdBQVM7SUFDekI7SUFDQSxJQUFNQyxhQUFhLEdBQUczQixLQUFLLENBQUNHLGdCQUFnQixDQUFDLGlEQUFpRCxDQUFDO0lBRS9Gd0IsYUFBYSxDQUFDdkIsT0FBTyxDQUFDLFVBQUF3QixDQUFDLEVBQUk7TUFDdkI7TUFDQUEsQ0FBQyxDQUFDUixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO1FBQ3JDQSxDQUFDLENBQUNRLGNBQWMsRUFBRTs7UUFFbEI7UUFDQSxJQUFNQyxNQUFNLEdBQUdULENBQUMsQ0FBQ0UsTUFBTSxDQUFDUSxPQUFPLENBQUMsSUFBSSxDQUFDOztRQUVyQztRQUNBLElBQU1DLGNBQWMsR0FBR0YsTUFBTSxDQUFDM0IsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM4QixTQUFTOztRQUVqRTtRQUNBQyxJQUFJLENBQUNDLElBQUksQ0FBQztVQUNOQyxJQUFJLEVBQUUsa0NBQWtDLEdBQUdKLGNBQWMsR0FBRyxHQUFHO1VBQy9ESyxJQUFJLEVBQUUsU0FBUztVQUNmQyxnQkFBZ0IsRUFBRSxJQUFJO1VBQ3RCQyxjQUFjLEVBQUUsS0FBSztVQUNyQkMsaUJBQWlCLEVBQUUsY0FBYztVQUNqQ0MsZ0JBQWdCLEVBQUUsWUFBWTtVQUM5QkMsV0FBVyxFQUFFO1lBQ1RDLGFBQWEsRUFBRSx3QkFBd0I7WUFDdkNDLFlBQVksRUFBRTtVQUNsQjtRQUNKLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBVUMsTUFBTSxFQUFFO1VBQ3RCLElBQUlBLE1BQU0sQ0FBQ3RCLEtBQUssRUFBRTtZQUNkVSxJQUFJLENBQUNDLElBQUksQ0FBQztjQUNOQyxJQUFJLEVBQUUsbUJBQW1CLEdBQUdKLGNBQWMsR0FBRyxJQUFJO2NBQ2pESyxJQUFJLEVBQUUsU0FBUztjQUNmRSxjQUFjLEVBQUUsS0FBSztjQUNyQkMsaUJBQWlCLEVBQUUsYUFBYTtjQUNoQ0UsV0FBVyxFQUFFO2dCQUNUQyxhQUFhLEVBQUU7Y0FDbkI7WUFDSixDQUFDLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFlBQVk7Y0FDaEI7Y0FDQTlDLFNBQVMsQ0FBQ00sR0FBRyxDQUFDTyxDQUFDLENBQUNrQixNQUFNLENBQUMsQ0FBQyxDQUFDaUIsTUFBTSxFQUFFLENBQUN0QixJQUFJLEVBQUU7WUFDNUMsQ0FBQyxDQUFDO1VBQ04sQ0FBQyxNQUFNLElBQUlxQixNQUFNLENBQUNFLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDcENkLElBQUksQ0FBQ0MsSUFBSSxDQUFDO2NBQ05DLElBQUksRUFBRWEsWUFBWSxHQUFHLG1CQUFtQjtjQUN4Q1osSUFBSSxFQUFFLE9BQU87Y0FDYkUsY0FBYyxFQUFFLEtBQUs7Y0FDckJDLGlCQUFpQixFQUFFLGFBQWE7Y0FDaENFLFdBQVcsRUFBRTtnQkFDVEMsYUFBYSxFQUFFO2NBQ25CO1lBQ0osQ0FBQyxDQUFDO1VBQ047UUFDSixDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDO0VBR0QsT0FBTztJQUNIO0lBQ0FPLElBQUksRUFBRSxnQkFBWTtNQUNkbEQsS0FBSyxHQUFHa0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7TUFFdkQsSUFBSSxDQUFDbkIsS0FBSyxFQUFFO1FBQ1I7TUFDSjtNQUVBQyxtQkFBbUIsRUFBRTtNQUNyQmUscUJBQXFCLEVBQUU7TUFDdkJVLGdCQUFnQixFQUFFO0lBQ3RCO0VBQ0osQ0FBQztBQUNMLENBQUMsRUFBRTs7QUFFSDtBQUNBeUIsTUFBTSxDQUFDQyxrQkFBa0IsQ0FBQyxZQUFZO0VBQ2xDdEQsc0JBQXNCLENBQUNvRCxJQUFJLEVBQUU7QUFDakMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9jb3JlL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC9wZXJtaXNzaW9ucy9saXN0LmpzPzBhMTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBDbGFzcyBkZWZpbml0aW9uXHJcbnZhciBLVFVzZXJzUGVybWlzc2lvbnNMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU2hhcmVkIHZhcmlhYmxlc1xyXG4gICAgdmFyIGRhdGF0YWJsZTtcclxuICAgIHZhciB0YWJsZTtcclxuXHJcbiAgICAvLyBJbml0IGFkZCBzY2hlZHVsZSBtb2RhbFxyXG4gICAgdmFyIGluaXRQZXJtaXNzaW9uc0xpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gU2V0IGRhdGUgZGF0YSBvcmRlclxyXG4gICAgICAgIGNvbnN0IHRhYmxlUm93cyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJyk7XHJcblxyXG4gICAgICAgIHRhYmxlUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVSb3cgPSByb3cucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcclxuICAgICAgICAgICAgY29uc3QgcmVhbERhdGUgPSBtb21lbnQoZGF0ZVJvd1syXS5pbm5lckhUTUwsIFwiREQgTU1NIFlZWVksIExUXCIpLmZvcm1hdCgpOyAvLyBzZWxlY3QgZGF0ZSBmcm9tIDJuZCBjb2x1bW4gaW4gdGFibGVcclxuICAgICAgICAgICAgZGF0ZVJvd1syXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCByZWFsRGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAvLyBJbml0IGRhdGF0YWJsZSAtLS0gbW9yZSBpbmZvIG9uIGRhdGF0YWJsZXM6IGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvbWFudWFsL1xyXG4gICAgICAgICBkYXRhdGFibGUgPSAkKHRhYmxlKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICBcImluZm9cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICdvcmRlcic6IFtdLFxyXG4gICAgICAgICAgICAnY29sdW1uRGVmcyc6IFtcclxuICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogMSB9LCAvLyBEaXNhYmxlIG9yZGVyaW5nIG9uIGNvbHVtbiAxIChhc3NpZ25lZClcclxuICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogMyB9LCAvLyBEaXNhYmxlIG9yZGVyaW5nIG9uIGNvbHVtbiAzIChhY3Rpb25zKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZWFyY2ggRGF0YXRhYmxlIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9yZWZlcmVuY2UvYXBpL3NlYXJjaCgpXHJcbiAgICB2YXIgaGFuZGxlU2VhcmNoRGF0YXRhYmxlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXBlcm1pc3Npb25zLXRhYmxlLWZpbHRlcj1cInNlYXJjaFwiXScpO1xyXG4gICAgICAgIGZpbHRlclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGRhdGF0YWJsZS5zZWFyY2goZS50YXJnZXQudmFsdWUpLmRyYXcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEZWxldGUgdXNlclxyXG4gICAgdmFyIGhhbmRsZURlbGV0ZVJvd3MgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gU2VsZWN0IGFsbCBkZWxldGUgYnV0dG9uc1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1rdC1wZXJtaXNzaW9ucy10YWJsZS1maWx0ZXI9XCJkZWxldGVfcm93XCJdJyk7XHJcblxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChkID0+IHtcclxuICAgICAgICAgICAgLy8gRGVsZXRlIGJ1dHRvbiBvbiBjbGlja1xyXG4gICAgICAgICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3QgcGFyZW50IHJvd1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgndHInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgcGVybWlzc2lvbiBuYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9uTmFtZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpWzBdLmlubmVyVGV4dDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTd2VldEFsZXJ0MiBwb3AgdXAgLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cclxuICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiICsgcGVybWlzc2lvbk5hbWUgKyBcIj9cIixcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCBjYW5jZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1kYW5nZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1hY3RpdmUtbGlnaHQtcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3UgaGF2ZSBkZWxldGVkIFwiICsgcGVybWlzc2lvbk5hbWUgKyBcIiEuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLXByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY3VycmVudCByb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5yb3coJChwYXJlbnQpKS5yZW1vdmUoKS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjdXN0b21lck5hbWUgKyBcIiB3YXMgbm90IGRlbGV0ZWQuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1wcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIFB1YmxpYyBmdW5jdGlvbnNcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X3Blcm1pc3Npb25zX3RhYmxlJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluaXRQZXJtaXNzaW9uc0xpc3QoKTtcclxuICAgICAgICAgICAgaGFuZGxlU2VhcmNoRGF0YXRhYmxlKCk7XHJcbiAgICAgICAgICAgIGhhbmRsZURlbGV0ZVJvd3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KCk7XHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcclxuICAgIEtUVXNlcnNQZXJtaXNzaW9uc0xpc3QuaW5pdCgpO1xyXG59KTsiXSwibmFtZXMiOlsiS1RVc2Vyc1Blcm1pc3Npb25zTGlzdCIsImRhdGF0YWJsZSIsInRhYmxlIiwiaW5pdFBlcm1pc3Npb25zTGlzdCIsInRhYmxlUm93cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicm93IiwiZGF0ZVJvdyIsInJlYWxEYXRlIiwibW9tZW50IiwiaW5uZXJIVE1MIiwiZm9ybWF0Iiwic2V0QXR0cmlidXRlIiwiJCIsIkRhdGFUYWJsZSIsIm9yZGVyYWJsZSIsInRhcmdldHMiLCJoYW5kbGVTZWFyY2hEYXRhdGFibGUiLCJmaWx0ZXJTZWFyY2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwiZHJhdyIsImhhbmRsZURlbGV0ZVJvd3MiLCJkZWxldGVCdXR0b25zIiwiZCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiY2xvc2VzdCIsInBlcm1pc3Npb25OYW1lIiwiaW5uZXJUZXh0IiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInRoZW4iLCJyZXN1bHQiLCJyZW1vdmUiLCJkaXNtaXNzIiwiY3VzdG9tZXJOYW1lIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/assets/core/js/custom/apps/user-management/permissions/list.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/assets/core/js/custom/apps/user-management/permissions/list.js"]();
/******/ 	
/******/ })()
;