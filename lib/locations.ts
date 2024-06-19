import zipcodes from "zipcodes";

export const locations = [
  {
    name: "Campbell",
    address: "419 E Hamilton Ave, Campbell, CA 95008",
    zipcode: "95008",
    phone: "(844) 825-3468",
    googleMap:
      "https://www.google.com/maps/dir//419+E+Hamilton+Ave+Campbell,+CA+95008/@37.294597,-121.9422448,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808e34d9fd6a6b05:0x26aba1fe239d3d0b!2m2!1d-121.9422448!2d37.294597?entry=ttu",
    googleEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25392.21607896904!2d-121.95980306167831!3d37.294493679849694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e34d9fd425697%3A0xcc141c2795701c42!2s419+E+Hamilton+Ave%2C+Campbell%2C+CA+95008!5e0!3m2!1sen!2sus!4v1524492268516",
  },
  {
    name: "Menlo Park",
    address: "890 Santa Cruz Ave, Suite B Menlo Park, CA 94025",
    zipcode: "94025",
    phone: "(844) 825-3468",
    googleMap:
      "https://www.google.com/maps/place/890+Santa+Cruz+Ave+%23+B,+Menlo+Park,+CA+94025,+USA/@37.450191,-122.1861599,17z/data=!3m1!4b1!4m6!3m5!1s0x808fa4ba9f0f4539:0xbd4a9db46c640635!8m2!3d37.450191!4d-122.1861599!16s%2Fg%2F11mhjxkd2z?entry=ttu",
    googleEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.4501936569454!2d-122.1863227!3d37.45009120000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa4ba9eebeec7%3A0xd345169ed21ffb50!2s890+Santa+Cruz+Ave%2C+Menlo+Park%2C+CA+94025!5e0!3m2!1sen!2sus!4v1430319585877",
  },
  {
    name: "San Mateo",
    address: "102 S El Camino Real, San Mateo, CA 94401",
    zipcode: "94401",
    phone: "(844) 825-3468",
    googleMap:
      "https://www.google.com/maps/place/102+S+El+Camino+Real,+San+Mateo,+CA+94401,+USA/@37.5640658,-122.3274478,17z/data=!3m1!4b1!4m6!3m5!1s0x808f9e71789ee527:0xce9100a0f9b044a0!8m2!3d37.5640658!4d-122.3274478!16s%2Fg%2F11c26l4jrw?entry=ttu",
    googleEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6176956715144!2d-122.32963648428294!3d37.56407003202633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9e71789ee527%3A0xce9100a0f9b044a0!2s102+S+El+Camino+Real%2C+San+Mateo%2C+CA+94401!5e0!3m2!1sen!2sus!4v1486050928590",
  },
  {
    name: "San Francisco",
    address: "50 California Street, Suite 1500, San Francisco, CA 94111",
    zipcode: "94111",
    phone: "(844) 825-3468",
    googleMap:
      "https://www.google.com/maps/place/50+California+St+Suite+1500,+San+Francisco,+CA+94111,+USA/@37.7939571,-122.3997819,17z/data=!3m1!4b1!4m6!3m5!1s0x80858061b9300001:0x19224e2cb91338e9!8m2!3d37.7939571!4d-122.3997819!16s%2Fg%2F11m_lfr73g?entry=ttu",
    googleEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8289300358324!2d-122.39949238468188!3d37.794048679755946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580616bdc4bd5%3A0xeb771a07cf6163f8!2s50%20California%20Street%2C%2050%20California%20St%20%231500%2C%20San%20Francisco%2C%20CA%2094111%2C%20USA!5e0!3m2!1sen!2sin!4v1595237832949!5m2!1sen!2sin",
  },
  {
    name: "Palo Alto",
    address: "228 Hamilton Avenue, 3rd Floor, Palo Alto, CA 94301",
    zipcode: "94301",
    phone: "(844) 825-3468",
    googleMap:
      "https://www.google.com/maps/place/228+Hamilton+Ave+3rd+floor,+Palo+Alto,+CA+94301,+USA/@37.4440643,-122.1610486,17z/data=!3m1!4b1!4m6!3m5!1s0x808fbb3a306b3c7d:0x3696e7afdc817b36!8m2!3d37.4440643!4d-122.1610486!16s%2Fg%2F11n09c3phs?entry=ttu",
    googleEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.705375502471!2d-122.16323728458592!3d37.444064279821056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb3a306b3c7d%3A0x3696e7afdc817b36!2s228%20Hamilton%20Ave%203rd%20floor%2C%20Palo%20Alto%2C%20CA%2094301%2C%20USA!5e0!3m2!1sen!2sph!4v1614198488623!5m2!1sen!2sph",
  },
  {
    name: "Walnut Creek",
    address: "2121 North California Blvd., Suite 290, Walnut Creek, CA 94596",
    zipcode: "94596",
    phone: "(844) 825-3468",
    googleMap:
      "https://www.google.com/maps/place/2121+N+California+Blvd+STE+290,+Walnut+Creek,+CA+94596,+USA/data=!4m2!3m1!1s0x80856199fe5c62c9:0x8ebb6c4f0fe5865c?sa=X&ved=2ahUKEwjF1LWInI2EAxW_1DgGHZkeCegQ8gF6BAgTEAA",
    googleEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.930644129561!2d-122.06864128457335!3d37.90868377973521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80856199fe5c62c9%3A0x8ebb6c4f0fe5865c!2s2121%20N%20California%20Blvd%20STE%20290%2C%20Walnut%20Creek%2C%20CA%2094596%2C%20USA!5e0!3m2!1sen!2sph!4v1614198213000!5m2!1sen!2sph",
  },
  {
    name: "San Jose",
    address: "358 S Redwood Ave, San Jose, CA 95128",
    zipcode: "95128",
    phone: "(844) 825-346",
    googleMap:
      "https://www.google.com/maps/place/358+S+Redwood+Ave,+San+Jose,+CA+95128,+USA/data=!4m2!3m1!1s0x808fcb201cb6e84d:0xf93fa8e9475dbc86?sa=X&ved=2ahUKEwizu56tnI2EAxXTcWwGHdThCHwQ8gF6BAgREAA",
    googleEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.8662636562613!2d-121.94915272413266!3d37.32199543811278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb201cb6e84d%3A0xf93fa8e9475dbc86!2s358%20S%20Redwood%20Ave%2C%20San%20Jose%2C%20CA%2095128!5e0!3m2!1sen!2sus!4v1696400049737!5m2!1sen!2sus",
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
