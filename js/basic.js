let user = {
    name: 'Маг',
    health: 90, 
  };
  
  const healthStatus = {
    healthy: {
      points: 51,
    },
    wounded: {
      points: 50,  
    },
    critical: {
      points: 15,
    }
  }
  
  export default function calculateHealth(user) {
    if(user.health >= healthStatus.healthy.points) {
      return 'healthy';
    }
    if(user.health > healthStatus.critical.points && user.health <= healthStatus.wounded.points) {
      return 'wounded';
    }
    if(user.health <= healthStatus.critical.points) {
      return 'critical';
    }
  }