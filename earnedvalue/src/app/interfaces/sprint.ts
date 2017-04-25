import {WorkPackage} from './WorkPackage'

export class Sprint {
  id: number;
  name: string;
  hasWorkPackages : boolean;
  workPackages: WorkPackage[];
}
