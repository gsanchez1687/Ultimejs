//numeros octales
//JavaScript convierte un número a octal cuando se le proporciona un número literal que comienza con cero (0) seguido de dígitos del 0 al 7. Esto se debe a que el prefijo "0" indica que el número está en base octal.
//Por ejemplo, en tu código:

//El número literal 018 se interpreta como un número octal porque comienza con cero. En base octal, el dígito más alto permitido es 7. Por lo tanto, el número octal 018 se interpreta como el número decimal 16 (1 * 8 + 8 = 16).
//En la primera comparación, 018 == '018', JavaScript convierte el número octal 018 a su equivalente decimal 16 y luego lo compara con la cadena '018'. Como el operador de igualdad (==) realiza una conversión de tipos, la cadena '018' también se convierte a un número decimal 18. Como 16 es igual a 18, la expresión es verdadera y se imprime true.
//En la segunda comparación, 017 == '017', JavaScript convierte el número octal 017 a su equivalente decimal 15 y luego lo compara con la cadena '017'. La cadena '017' se convierte a un número decimal 17. Como 15 no es igual a 17, la expresión es falsa y se imprime false.
//Es importante tener en cuenta que el uso de números octales en JavaScript puede ser confuso y propenso a errores. Por lo tanto, se recomienda evitar el uso de números literales octales y utilizar números decimales en su lugar para evitar confusiones y comportamientos inesperados.
console.log(018 == '018');//true
console.log(017 == '017');//false

