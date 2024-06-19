import zipcodes from "zipcodes";

export const locations = [
  {
    name: "Campbell",
    address: "419 E Hamilton Ave, Campbell, CA 95008",
    zipcode: "95008",
    phone: "(844) 825-3468",
  },
  {
    name: "Menlo Park",
    address: "890 Santa Cruz Ave, Suite B Menlo Park, CA 94025",
    zipcode: "94025",
    phone: "(844) 825-3468",
  },
  {
    name: "San Mateo",
    address: "102 S El Camino Real, San Mateo, CA 94401",
    zipcode: "94401",
    phone: "(844) 825-3468",
  },
  {
    name: "San Francisco",
    address: "50 California Street, Suite 1500, San Francisco, CA 94111",
    zipcode: "94111",
    phone: "(844) 825-3468",
  },
  {
    name: "Palo Alto",
    address: "228 Hamilton Avenue, 3rd Floor, Palo Alto, CA 94301",
    zipcode: "94301",
    phone: "(844) 825-3468",
  },
  {
    name: "Walnut Creek",
    address: "2121 North California Blvd., Suite 290, Walnut Creek, CA 94596",
    zipcode: "94596",
    phone: "(844) 825-3468",
  },
  {
    name: "San Jose",
    address: "358 S Redwood Ave, San Jose, CA 95128",
    zipcode: "95128",
    phone: "(844) 825-346",
  },
];

export const findNearestLocation = (zipcode: string) => {
  let nearestLocation = locations[0];
  let nearestDistance =
    zipcodes.distance(zipcode, nearestLocation.zipcode) ?? 9999;
  locations.forEach((location) => {
    const distance = zipcodes.distance(zipcode, location.zipcode) ?? 9999;
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestLocation = location;
    }
  });

  return nearestLocation;
};
