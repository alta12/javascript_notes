// this looks fun so try to revise it as much as possible
const bicycle = {
    gear: 2,
    // setGear: function(newGear) {
    setGear(newGear) {

      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);