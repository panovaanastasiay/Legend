import calculateHealth from "../basic"

test.each([
  ['healthy', 51, 'healthy'],
  ['wounded', 50, 'wounded'],
  ['critical', 15, 'critical'],
])(
  ('should verify for %s status with %p points'),
  (status, points, expected) => {

    let user = {
        name: 'Маг',
        health: points, 
      };
    const result = calculateHealth(user);

    expect(result).toBe(expected);
  }
)