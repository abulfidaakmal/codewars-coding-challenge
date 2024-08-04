{
  function countSheeps(sheep) {
    const totalSheep = [];
    sheep.map((data) => {
      if (data) {
        totalSheep.push(sheep);
      }
    });
    return totalSheep.length;
  }
}

{
  const countSheeps = (sheep) => sheep.filter(Boolean).length;
}

{
  const countSheeps = (sheep) => {
    let num = 0;
    for (let i = 0; sheep.length > i; i++) {
      if (sheep[i] === true) num++;
    }

    return num;
  };
}

// https://www.codewars.com/kata/54edbc7200b811e956000556