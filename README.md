## Conceitos utilizados para construção do algoritmo
Para que um número seja convertido corretamente para algarismo romano, é necessário decompô-lo de acordo com suas casas numéricas. Caso o número a ser utilizado seja 982 ele será representado por 900, 80 e 2, em que cada um deles deverá ser aplicado Special Case ou Normal Case no primeiro dígito de acordo com as regras e no final o resultado deverá ser concatenado para que possa apresentar o resultado correto. Neste algoritmo os algarismos romanos serão restritos entre 1 e 3999.

### Os valores a serem convertidos estarão disponíveis em duas cadeias de caracteres: Place Symbols e Place Half Symbols
- Place Symbols são os algarismos que representam os valores: 1, 10, 100 e 1000 que em algarismo romano são representados por I, X, C e M.

- Place Half Symbols são os algarismos que representam os valores: 5, 50 e 500 que em algarismo romano são representados por V, L e D.

### Foram utilizados os conceitos Normal Case e Special Case para a conversão de números arábico para romano. 

- Special Case é um mecanismo para identificar se a conversão deverá seguir uma regra especial, pois caso converta o número 4 para “IIII” ou 9 para “VIIII” a conversão estará errada. Para que um número seja Special Case, ele deve ter o módulo do seu primeiro dígito por 5 igual a 4, ex.: 900 => "9 % 5 = 4" ou 400 => "4 % 5 = 4". Quanto a classificação de Normal Case é o oposto da condição anterior em que o resultado do módulo não deverá ser equivalente ao valor "4". Serão utilizados dois conceitos: Decimal Places e Object Special Cases. 

    - Object Special Cases será responsável por distribuir as combinações especiais para os valores 4 e 9. Para os números que possuem o primeiro dígito “4” será feito a junção distinta sequencial em pares  dos elementos de Place Symbols, ex.: IX, enquanto aqueles que possuírem o dígito “9” será feita a combinação em pares das mesmas posições de Place Symbols e Place Half Symbols, ex: IV. Para que o valor seja convertido para algarismo romano, será necessário calcular Decimal Places que é “a quantidade de dígitos -1” e utilizá-lo para recuperar o índice do item da combinação de algarismos romanos armazenadas em Object Special Cases, ex.: 400 possui 2 decimal places e o valor estará no índice 2 da combinação que será CD.

    - Decimal Places será utilizado para representar a posição da combinação de pares do algarismo romano que será recuperado de Object Special Cases.

- Normal Case é uma função que tem como objetivo de converter números que não são classificados como Special Case. Serão utilizados três conceitos: Decimal Places, First Digit Repeat Times, Second Digit Repeat Times. O primeiro dígito será representado somente por caracteres Place Half Symbols enquanto o segundo dígito somente pelos Place Symbols.

    - Decimal Places representa a quantidade de casas a direita do número a ser transformado, servindo para recuperar os caracteres de Place Symbols e Place Half Symbols para composição do algarismo romano . ex: 800 possui o valor 2 para este campo, então os valores recuperados serão "D" que aparecerá uma vez e "C" três vezes.

    - First Digit Repeat Times é a quantidade de vezes que um algarismo romano será repetido, que nesse caso será entre zero e um pois a forma de cálculo é o primeiro dígito dividido por 5 truncando casas decimais. ex: 50 será representado pelo valor V apenas uma vez pois “5 / 5 = 1”, enquanto 3 não há a presença de Place Half Symbols e somente de Place Symbols pois o resultado será “3 / 5 = 0”.

    -   Second Digit Repeat Times é a quantidade de vezes que um algarismo romano será repetido, que nesse caso será entre zero e três pois a forma de cálculo é o módulo de 5 do primeiro dígito. ex: 800 F.D.R.T será "D" que aparecerá uma vez e S.D.R.T será "C" que aparecerá 3 vezes pois “8 % 5 = 3” compondo DCCC como representação em algarismo romano, caso seja 200 F.D.R.T será “D” mas não aparecerá nenhuma vez e S.D.R.T será “C” que aparecerá 2 vezes.
 
### Abreviações: 
- F.D.R.T - First Digit Repeat Times
-   S.D.R.T - Second Digit Repeat Times

