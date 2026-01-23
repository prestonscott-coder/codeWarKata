//Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

const combat = (health,damage)=> health - damage >= 0? health - damage:0

// simple ternary to check if health minus damage is greater than or equal to 0 if it is return health minus damage if not return 0