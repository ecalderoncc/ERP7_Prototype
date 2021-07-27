import Area from "./views/Area.js";
import Analysis from "./views/Analysis.js";
import Data from "./views/Data.js";
import Visualise from "./views/Visualise.js";

const Routes = [

  {
    name: "Area",
    path: "/dashboard/area",
    icon: 'public',
    component: Area,
    rol: 'admin'
  },
  {
    name: "Data",
    path: "/dashboard/data",
    icon: 'grid_on',
    component: Data,
    rol: 'admin'
  },
  {
    name: "Visualise",
    path: "/dashboard/visualise",
    icon: 'visibility',
    component: Visualise,
    rol: 'admin'
  },
  {
    name: "Analysis",
    path: "/dashboard/analysis",
    icon: 'timeline',
    component: Analysis,
    rol: 'admin'
  },
];

export default Routes;
