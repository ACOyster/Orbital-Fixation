HodgePodge.removeUnits([
    {
        spec_id: '/pa/units/orbital/orbital_laser/orbital_laser.json'
    },
    {
        spec_id: '/pa/units/orbital/radar_satellite/radar_satellite.json'
    },
    {
        spec_id: '/pa/units/orbital/solar_array/solar_array.json'
    },
    {
        spec_id: '/pa/units/orbital/orbital_probe/orbital_probe.json'
    },
    {
        spec_id: '/pa/units/orbital/orbital_lander/orbital_lander.json'
    },
    {
        spec_id: '/pa/units/orbital/orbital_railgun/orbital_railgun.json'
    }
])

HodgePodge.addUnits([
    {
        spec_id: '/pa/units/orbital/orbital_missile_launcher/orbital_missile_launcher.json',
        preferred_builds: [['orbital', 9]]
    },
    {
        spec_id: '/pa/units/orbital/solar_array/solar_array.json',
        preferred_builds: [['orbital', 11]]
    },
    {
        spec_id: '/pa/units/orbital/orbital_probe/orbital_probe.json',
        preferred_builds: [['orbital', 14]]
    },
    {
        spec_id: '/pa/units/orbital/orbital_fighter_advanced/orbital_fighter_advanced.json',
        preferred_builds: [['orbital', 7]]
    },
    {
        spec_id: '/pa/units/orbital/orbital_lander/orbital_lander.json',
        preferred_builds: [['orbital', 17]]
    },
    {
        spec_id: '/pa/units/orbital/orbital_laser/orbital_laser.json',
        preferred_builds: [['orbital', 15]]
    },
    {
        spec_id: '/pa/units/orbital/orbital_railgun/orbital_railgun.json',
        preferred_builds: [['orbital', 16]]
    },
    {
        spec_id: '/pa/units/orbital/orbital_railgun_advanced/orbital_railgun_advanced.json',
        preferred_builds: [['orbital', 10]]
    }
])
