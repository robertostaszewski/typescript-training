import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

//array
let theCoaches: Coach[] = [];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

for (let tmpCoach of theCoaches) {
    console.log(tmpCoach.getDailyWorkout());
}