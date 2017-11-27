var gloCalc = angular.module("GloCalc", ["ngRoute"]);


gloCalc.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "App/home/home.html"
          //  controller: "HomeCtrl"
        })
       .when("/signUp", {
       templateUrl: "App/signUp/signUp.html"
        //     controller: "RecipeGalleryCtrl"
       })
        .when("/users", {
        templateUrl: "App/users/users.html"
        //     controller: "RecipeDetailsCtrl"
        })
        //.when("/new", {
        //     templateUrl: "app/recipe/newRecipe.html",
        //     controller: "NewRecipeCtrl"            
        // })

});
