var gloCalc = angular.module("GloCalc", ["ngRoute"]);


gloCalc.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "App/home/home.html"
          //  controller: "HomeCtrl"
        })
       .when("/signUp", {
       templateUrl: "app/signUp/signUp.html",
        //     controller: "RecipeGalleryCtrl"
        // })
        // .when("/recipes/:recipeIndex", {
        //     templateUrl: "app/recipe/recipeDetails.html",
        //     controller: "RecipeDetailsCtrl"
        // }).when("/new", {
        //     templateUrl: "app/recipe/newRecipe.html",
        //     controller: "NewRecipeCtrl"            
        // })

});
