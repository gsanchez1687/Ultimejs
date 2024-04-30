let acction = 'listar';

switch (acction) {
    case 'listar':
        console.log('Listar');
        break;
    case 'crear':
        console.log('Crear');
        break;
    case 'editar':
        console.log('Editar');
        break;
    case 'eliminar':
        console.log('Eliminar');
        break;
    default: 
        console.log('No se encontro la acción');
        break;
}