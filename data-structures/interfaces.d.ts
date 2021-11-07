export interface nodeI {
  val: number | string;
  next: nodeI;
}

export interface doubleNodeI extends nodeI {
  prev?: doubleNodeI;
}

export interface nodeTreeI {
  val: number;
  left: nodeTreeI;
  right: nodeTreeI;
}

export interface nodePriorityI {
  val: string;
  priority: number;
}
