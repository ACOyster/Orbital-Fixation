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
        spec_id: '/pa/units/orbital/orbital_battleship/orbital_battleship.json'
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
        spec_id: '/pa/units/orbital/orbital_battleship/orbital_battleship.json',
        preferred_builds: [['orbital', 10]]
    },
    {
        spec_id: '/pa/units/orbital/orbital_dropship/orbital_dropship.json',
        preferred_builds: [['orbital', 0]]
    },
    {
        spec_id: '/pa/units/orbital/orbital_fabrication_bot_advanced/orbital_fabrication_bot_advanced.json',
        preferred_builds: [['orbital', 6]]
    },
    {
        spec_id: '/pa/units/orbital/railgun_defense/railgun_defense.json',
        preferred_builds: [['combat', 1]]
    }
])
