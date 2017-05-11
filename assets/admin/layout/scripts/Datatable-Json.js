/**
 * unitListApp Module
 *
 * Description
 */

var myappvariable = angular.module('unitListApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'uiSwitch']);
myappvariable.filter('startFrom', function() {
        return function(input, start) {
            if (input) {
                start = +start;
                return input.slice(start);
            }
            return [];
        };
    }

);
myappvariable.controller('list_view_ctrl', ['$scope', '$filter', '$http', 'filterFilter', function($scope, $filter, $http, filterFilter) {

        $scope.layoutChoose = true;
        $scope.max = 100;
        $scope.randomType = function(value) {
            if (value >= 1 && value <= 25) {
                console.log(value);
                return occupancy = 'danger';
            }
            if (value >= 26 && value <= 50) {
                return occupancy = 'warning';
                console.log(value);
            } else if (value >= 51 && value <= 79) {
                return occupancy = 'info';
                console.log(value);
            } else if (value >= 80 && value <= 100) {
                return occupancy = 'success';
                console.log(value);
            } else {
                return occupancy = ' default';
            }
        };
        $scope.randomType();
        $scope.list = [];
        $scope.tableRespModel = [];

        $scope.tableRespModel = {
            "listViewData": [{
                "unit": {
                    "id": 1,
                    "checked": false,
                    "state": "karnataka",
                    "city": "Bangalore",
                    "unitdocId": "OTM-HD-BAN-6256",
                    "unitCode": "0005",
                    "location": "Lower ground Floor",
                    "type": "Horizontal",
                    "material": "flex",
                    "width": 40,
                    "height": 50,
                    "ratesqft": 18.8,
                    "chargesMonthly": 4550,
                    "avability": "immediate",
                    "display": "hyundai",
                    "occupancy": 35,
                    "image": {
                        "image": "../images/1.jpg",
                        "city": "bangalore",
                        "unitCode": "005"
                    },
                    "data": {
                        "startDate": "2013-07-01",
                        "endDate": "2013-07-02",
                        "amount": 10000,
                        "annual": 10000,
                        "monthly": 1000,
                        "weekly": 70,
                        "daily": 15,
                        "approve": "approve",
                        "rating": 4,
                        "deposit": 1500,
                        "city": "bangalore",
                        "vendor name": "landlord"
                    }
                }
            }, {
                "unit": {
                    "id": 2,
                    "checked": false,
                    "state": "karnataka",
                    "city": "Mysore",
                    "unitdocId": "OTM-HD-NRT-6257",
                    "unitCode": "0005",
                    "location": "TFF MG Road towards Trinity",
                    "type": "Vertical",
                    "material": "flex",
                    "width": 80,
                    "height": 40,
                    "ratesqft": 18.8,
                    "chargesMonthly": 4450,
                    "avability": "immediate",
                    "display": "hyundai",
                    "occupancy": 85,
                    "image": {
                        "image": "../images/1.jpg",
                        "city": "mysore",
                        "unitCode": "005"
                    },
                    "data": {
                        "startDate": "2013-07-01",
                        "endDate": "2013-07-02",
                        "approve": "approve",
                        "amount": 20000,
                        "annual": 20000,
                        "monthly": 2000,
                        "weekly": 150,
                        "daily": 25,
                        "rating": 3,
                        "deposit": 2500,
                        "city": "mysore",
                        "vendor name": "landlord"
                    }
                }
            }, {
                "unit": {
                    "id": 3,
                    "checked": false,
                    "city": "Delhi",
                    "unitdocId": "OTR-HD-BAN-6267",
                    "unitCode": "0005",
                    "location": "Towards MG Road facing Metro",
                    "type": "Horizontal",
                    "material": "flex",
                    "width": 80,
                    "height": 40,
                    "ratesqft": 18.8,
                    "chargesMonthly": 4450,
                    "avability": "immediate",
                    "display": "hyundai",
                    "occupancy": 99,
                    "image": {
                        "image": "../images/1.jpg",
                        "city": "delhi",
                        "unitCode": "005"
                    },
                    "data": {
                        "startDate": "2013-07-01",
                        "endDate": "2013-09-06",
                        "amount": 30000,
                        "approve": "approve",
                        "annual": 30000,
                        "monthly": 3000,
                        "weekly": 300,
                        "daily": 50,
                        "rating": 4,
                        "deposit": 3500,
                        "city": "delhi",
                        "vendor name": "landlord"
                    }
                }
            }, {
                "unit": {
                    "id": 4,
                    "checked": false,
                    "state": "karnataka",
                    "city": "Bangalore",
                    "unitdocId": "OTR-SD-SAN-5430",
                    "unitCode": "0005",
                    "location": "Malleshwaram Railway Station, Bengaluru, Karnataka 560041, India",
                    "type": "Horizontal",
                    "material": "flex",
                    "width": 80,
                    "height": 40,
                    "ratesqft": 18.8,
                    "chargesMonthly": 4450,
                    "avability": "immediate",
                    "display": "hyundai",
                    "occupancy": 87,
                    "image": {
                        "image": "../images/1.jpg",
                        "city": "bangalore",
                        "unitCode": "005"
                    },
                    "data": {
                        "startDate": "2013-07-01",
                        "endDate": "2013-09-06",
                        "amount": 45000,
                        "approve": "approve",
                        "annual": 45000,
                        "monthly": 4000,
                        "weekly": 400,
                        "daily": 75,
                        "rating": 5,
                        "deposit": 4500,
                        "city": "bangalore",
                        "vendor name": "landlord"
                    }
                }
            }, {
                "unit": {
                    "id": 5,
                    "checked": false,
                    "state": "karnataka",
                    "city": "Mysore",
                    "unitdocId": "OTR-RF-EDF-9089",
                    "unitCode": "0005",
                    "location": "Lower ground Floor",
                    "type": "Horizontal",
                    "material": "flex",
                    "width": 80,
                    "height": 40,
                    "ratesqft": 18.8,
                    "chargesMonthly": 4450,
                    "avability": "immediate",
                    "display": "hyundai",
                    "occupancy": 90,
                    "image": {
                        "image": "../images/1.jpg",
                        "city": "mysore",
                        "unitCode": "005"
                    },
                    "data": {
                        "startDate": "2013-07-01",
                        "endDate": "2013-09-06",
                        "amount": 15000,
                        "approve": "approve",
                        "annual": 15000,
                        "monthly": 1000,
                        "weekly": 100,
                        "daily": 45,
                        "rating": 5,
                        "deposit": 1500,
                        "city": "mysore",
                        "vendor name": "landlord"
                    }
                }
            }, {
                "unit": {
                    "id": 6,
                    "checked": false,
                    "city": "Delhi",
                    "unitdocId": "OTR-HD-EEF-5567",
                    "unitCode": "0005",
                    "location": "TFF Sampige Road",
                    "type": "Horizontal",
                    "material": "flex",
                    "width": 80,
                    "height": 40,
                    "ratesqft": 18.8,
                    "chargesMonthly": 4450,
                    "avability": "immediate",
                    "display": "hyundai",
                    "occupancy": 70,
                    "image": {
                        "image": "../images/1.jpg",
                        "city": "delhi",
                        "unitCode": "005"
                    },
                    "data": {
                        "startDate": "2013-07-01",
                        "endDate": "2013-09-06",
                        "amount": 25000,
                        "approve": "approve",
                        "annual": 25000,
                        "monthly": 1500,
                        "weekly": 200,
                        "daily": 65,
                        "rating": 4,
                        "deposit": 35001,
                        "city": "Delhi",
                        "vendor name": "landlord"
                    }
                }
            }]
        };
        $scope.cities = ["Bangalore", "Mysore", "Delhi"];
        $scope.tableRowExpanded = false;
        $scope.tableRowIndexExpandedCurr = "";
        $scope.tableRowIndexExpandedPrev = "";
        $scope.storeIdExpanded = "";
        $scope.dayDataCollapseFn = function() {
            $scope.dayDataCollapse = [];
            for (var i = 0; i < $scope.tableRespModel.listViewData.length; i += 1) {
                $scope.dayDataCollapse.push(false);
                //console.log($scope.dayDataCollapse);
            }
        };
        $scope.selectTableRow = function(index, id) {
            if (typeof $scope.dayDataCollapse === 'undefined') {
                $scope.dayDataCollapseFn();
            }
            if ($scope.tableRowExpanded === false && $scope.tableRowIndexExpandedCurr === "" && $scope.storeIdExpanded === "") {
                $scope.tableRowIndexExpandedPrev = "";
                $scope.tableRowExpanded = true;
                $scope.tableRowIndexExpandedCurr = index;
                $scope.storeIdExpanded = id;
                $scope.dayDataCollapse[index] = true;
            } else if ($scope.tableRowExpanded === true) {
                if ($scope.tableRowIndexExpandedCurr === index && $scope.storeIdExpanded === id) {
                    $scope.tableRowExpanded = false;
                    $scope.tableRowIndexExpandedCurr = "";
                    $scope.storeIdExpanded = "";
                    $scope.dayDataCollapse[index] = false;
                } else {
                    $scope.tableRowIndexExpandedPrev = $scope.tableRowIndexExpandedCurr;
                    $scope.tableRowIndexExpandedCurr = index;
                    $scope.storeIdExpanded = id;
                    $scope.dayDataCollapse[$scope.tableRowIndexExpandedPrev] = false;
                    $scope.dayDataCollapse[$scope.tableRowIndexExpandedCurr] = true;
                }
            }
        };
        // start grid filter settings
        $scope.filterSelectCity;
        $scope.viewby = 5;
        $scope.totalItems = $scope.tableRespModel.listViewData.length;
        $scope.itemsPerPage = $scope.viewby;
        $scope.setItemsPerPage = function(num) {
                $scope.itemsPerPage = num;
                console.log($scope.tableRespModel.listViewData);
            }
            //
        $scope.gridsearch = '';
        $scope.$watch('gridsearch', function(newVal, oldVal) {
            $scope.filtered = filterFilter($scope.tableRespModel.listViewData, newVal);
            $scope.totalItems = $scope.filtered.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
            $scope.currentPage = 1;
        }, true);
        // end grid filter settings

        // start tile filter settings
        //$scope.filter;
        $scope.tileSelect = 4;
        $scope.totaltileItems = $scope.tableRespModel.listViewData.length;
        $scope.tileItemsPerPage = $scope.tileSelect;
        $scope.setTileItemsPerPage = function(num) {
            $scope.tileItemsPerPage = num;
            console.log($scope.tableRespModel.listViewData);
        }
        $scope.tilesearch = '';
        $scope.$watch('tilesearch', function(newVal, oldVal) {
            $scope.filtered = filterFilter($scope.tableRespModel.listViewData, newVal);
            $scope.totaltileItems = $scope.filtered.length;
            console.log($scope.totaltileItems);
            $scope.noOfPages = Math.ceil($scope.totaltileItems / $scope.tileItemsPerPage);
            $scope.currentTilePage = 1;
            //$scope.gridsearch = '';
        }, true);
        // end tile filter settings
        $scope.oldTempData = $scope.tableRespModel.listViewData;
        $scope.changeFilter = function(filterSelectCity) {
            if (filterSelectCity == "all" || filterSelectCity == null || filterSelectCity == undefined) {
                $scope.tableRespModel.listViewData = $scope.oldTempData;

                if ($scope.layoutChoose == true) {
                    $scope.totalItems = $scope.oldTempData.length;

                } else {
                    $scope.totaltileItems = $scope.oldTempData.length;
                }
            } else {
                $scope.tableRespModel.listViewData = $filter('filter')($scope.oldTempData, filterSelectCity, undefined);
                if ($scope.layoutChoose == true) {
                    $scope.totalItems = $scope.tableRespModel.listViewData.length;
                } else {
                    $scope.totaltileItems = $scope.tableRespModel.listViewData.length;
                }

                console.log($scope.tableRespModel.listViewData);
            }
        }

        $scope.searchChange = function(changeSearchfun) {
            console.log(changeSearchfun);
            $scope.tableRespModel.listViewData = $filter('filter')($scope.oldTempData, changeSearchfun, undefined);

            if ($scope.layoutChoose == true) {
                $scope.totalItems = $scope.tableRespModel.listViewData.length;
                //console.log($scope.oldTempData);

            } else {
                $scope.totaltileItems = $scope.tableRespModel.listViewData.length;
            }
        }

        $scope.switchClick = function(switchVal) {
            console.log(switchVal);
            if (switchVal == false) {
                $scope.gridsearch = '';
                $scope.tableRespModel.listViewData = $scope.oldTempData;
                $scope.totaltileItems = $scope.tableRespModel.listViewData.length;
            } else {
                $scope.tilesearch = '';
                $scope.tableRespModel.listViewData = $scope.oldTempData;
                console.log($scope.oldTempData);
                $scope.totalItems = $scope.tableRespModel.listViewData.length;
            }
        }

    }

]);
