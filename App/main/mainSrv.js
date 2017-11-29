GloCalc.factory("Insulin", function() {
    
    // Insulin Constructor
    function Insulin(carbohydrate, insulin, year, km) {
        this.carbohydrate = carbohydrate;
        this.insulin = insulin;

     /*   //this.mile = convert.distance(this.km, "KM", "MILE");
        this.selected = false;
        this.kmPerYear = function() {
            var currentYear = new Date().getFullYear();
            return Math.round(this.km / (currentYear - this.year + 1));
        };*/
    }
    
    return Insulin;
  });