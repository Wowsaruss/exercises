// You are given a list of incident reports, where each incident contains:
// incident_id (a unique identifier for the incident)
// latitude (a floating-point number representing latitude)
// longitude (a floating-point number representing longitude)
// Write a function that returns a list of incident_ids where all the incidents in the list doesn't have any other nearby incidents.

// INPUT:
interface Incident {
  incident_id: number;
  latitude: number;
  longitude: number;
}

const incidents: Incident[] = [
  { incident_id: 101, latitude: 40.7128, longitude: -74.006 },
  { incident_id: 102, latitude: 34.0522, longitude: -118.2437 },
  { incident_id: 103, latitude: 40.713, longitude: -74.0062 },
  { incident_id: 104, latitude: 41.8781, longitude: -87.6298 },
  { incident_id: 105, latitude: 29.7604, longitude: -95.3698 },
  { incident_id: 106, latitude: 29.7605, longitude: -95.3697 },
  { incident_id: 107, latitude: 37.7749, longitude: -122.4194 },
];

function find_solo_incidents(incidents: Incident[]): Incident[] {
  const groupsMap: any = {};
  const groups: Incident[] = [];

  for (let i = 0; i < incidents.length; i++) {
    const latRounded = parseFloat(incidents[i].latitude.toFixed(2));
    const lonRounded = parseFloat(incidents[i].longitude.toFixed(2));
    const key = `${latRounded}${lonRounded}`;

    if (groupsMap[key] !== undefined) {
      groupsMap[key] = [...groupsMap[key], i];
    } else {
      groupsMap[key] = [i];
    }
  }

  const groupsMapKeys = Object.keys(groupsMap);
  for (let i = 0; i < groupsMapKeys.length; i++) {
    const indexArray = groupsMap[groupsMapKeys[i]];

    if (indexArray.length === 1) {
      groups.push(incidents[indexArray[0]]);
    }
  }

  return groups;
}

console.log(find_solo_incidents(incidents));
