var recipeApp = angular.module("GloCalc", ["ngRoute"]);

recipeApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "App/home/home.html"
            //controller: "HomeCtrl"
        })
        .when("/signUp", {
            templateUrl: "App/signUp/signUp.html" 
            //controller: "RecipeGalleryCtrl"
        })
        .when("/main", {
            templateUrl: "App/main/main.html" 
            //controller: "RecipeGalleryCtrl"
        })
        .when("/users", {
            templateUrl: "App/users/users.html"
            //controller: "RecipeDetailsCtrl"
        })});


