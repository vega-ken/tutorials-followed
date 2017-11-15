const colors = [];

colors.push('red');
colors.push('blue');

colors = 'Green'; // colors is const así que no puede ser reasignado, sí modificado internamente pero no reasignado.
  // si fuera declarado con let, sí podría reasignarse a 'Green'

console.log(colors);