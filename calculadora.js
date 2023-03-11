const soma = () => {
    console.log(parseInt(args[1]) + parseInt(args[2]));
};

const sub = () => {
    console.log(parseInt(args[1]) - parseInt(args[2]));  
}

const div = () =>{
    if (args[2] == 0){
        console.log('Não é possível dividir!');
    }
    else
    console.log(parseInt(args[1])/parseInt(args[2]));
}

const args = process.argv.slice(2);

switch (args[0]) {
    case 'soma':
        soma();
    break;

    case 'sub':
        sub();

    case 'div':
        div();
    break;

    default:
        console.log('does not support');
}