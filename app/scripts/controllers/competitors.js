'use strict';

angular.module('newAngularKendoApp')
  .controller('CompetitorsCtrl', function ($scope) {
    //TODO pull these from html lookup
    //TODO put this into a service
    $scope.entries = [
        {
            "competitor_number": 1,
            "name": "Iwashita Tomohisa",
            "age": 33,
            "grade": "R6-dan",
            "entryCount": "2",
            "occupation": "PoliceOfficer",
            "prefecture": "Chiba",
            "selected": "true"
        },
        {
            "competitor_number": 2,
            "name": "Nakamura Naoki",
            "age": 29,
            "grade": "5-dan",
            "entryCount": "3",
            "occupation": "Police Officer",
            "prefecture": "Ishikawa"
        },
        {
            "competitor_number": 3,
            "name": "Utsunomiya Tooru",
            "age": 35,
            "grade": "R6-dan",
            "entryCount": "3",
            "occupation": "Police Officer",
            "prefecture": "Oita"
        },
        {
            "competitor_number": 4,
            "name": "Kinoshita Tomonari",
            "age": 28,
            "grade": "5-dan",
            "entryCount": "2",
            "occupation": "Police Officer",
            "prefecture": "Kagawa"
        },
        {
            "competitor_number": 5,
            "name": "Enmyo Toshifumi",
            "age": 26,
            "grade": "4-dan",
            "entryCount": "1",
            "occupation": "Prison Officer",
            "prefecture": "Hiroshima"
        }
    ];

    $scope.expanded = false;

    $scope.toggleExpanded = function() {
        if ($scope.expanded == true)
            $scope.expanded = false;
        else
            $scope.expanded = true;
    }

    $scope.toggleSelected = function(element,state) {
        $scope.entries[element].selected = state;
    }
  });
