type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type RichVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof RichVehicle ? true : false;
type HasBike = CheckVehicle<"ship">;
