//1. Сделайте функцию, которая отнимает от первого числа второе и делит на
//третье. Числа передаются параметром.

let num = function(n1, n2, n3) {
    return (n1 - n2) / n3;
}

let result = num(20, 10, 2);
console.log('TEST 1: ' + result);


//2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
//передается параметром.

let num2 = function(k) {
    k = k;
    return 'TEST 2: куб числа' + k + '= ' + Math.cbrt(k) + '; Квадрат числа ' + k + '= ' + Math.sqrt(k);
}

let result2 = num2(27);
console.log(result2);


//3. Напишите функции min и max, которые возвращают меньшее и большее из
//чисел a и b.

let num3 = function(a, b) {
    return 'TEST 3: Минимальное = ' + Math.min(a, b) + '; Максимальное = ' + Math.max(a, b);
}
let result3 = num3(10, 99);
console.log(result3);


//4. Напишите две функции: первая ф-ция должна возвращать массив с
//числовыми значениями, диапазон которых должен вводиться пользователем
//с клавиатуры; вторая – выводить полученный массив.


let func1 = function() {
    let arr = [];
    user_number = +prompt('Введите любое число');

    if(isNaN(user_number)) {
        return alert('Неправильное значение.Введите число');
    } else {
        arr.push(user_number);
    }

    user_number2 = +prompt('Введите второе любое число');
    if(isNaN(user_number2)) {
        return alert('Неправильное значение.Введите число');
    } else {
        arr.push(user_number2);
    }

    user_number3 = +prompt('Введите последнее любое число');
    if(isNaN(user_number3)) {
        return alert('Неправильное значение.Введите число');
    } else {
        arr.push(user_number3);
    }

    return arr;    

}

let result4 = func1();

let func2 = function() {
    alert('TEST 4: Получен массив с числами: ' +result4);
}

func2();


//5. Сделайте функцию isEven() (even - это четный), которая параметром
//принимает целое число и проверяет: четное оно или нет. Если четное - пусть
//функция возвращает true, если нечетное — false.

let isEven = function(numbers) {
    if(numbers % 2 == 0 && numbers != 0) {
        return true;
    } else {
        return false;
    }
}

console.log('TEST 5: 22 = ' + isEven(22));
console.log('TEST 5: 39 =  ' + isEven(39));
console.log('TEST 5: 92 =  ' + isEven(92));


//6. Напишите ф-цию, в которую передается массив с целыми числами.
//Верните новый массив, где останутся лежать только четные из этих чисел.
//Для этого используйте вспомогательную функцию isEven из предыдущей
//задачи.

let i = 0;
let arr3 = [];

let func3 = function(array) {
    //console.log(array[i]);

    even = isEven(array[i]);

    if(even == true) {
        arr3.push(array[i]);
    }

    i++;
    if(i < array.length) func3(array);
    
}

let result5 = func3([3, 0, 2, 96, 15, 4, 89]);
console.log(`TEST 6: четные [${arr3}]`);



/*7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):

        ```
        1
        22
        333
        4444
        55555
        666666
        7777777
        88888888
        999999999
        ```
    
        Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
        параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
        кроме пробела, то пирамида должна быть нарисована этим символом,
        например:
        
        ```
        *
        **
        ***
        ****
        *****
        ******
        *******
        ********
        *********
        ``` */

console.log('TEST 7: не решен');


console.log('TEST 8: ');
/*8. Дан массив с числами (передается параметром). Выведите последовательно его элементы, 
используя рекурсию и не используя цикл.*/

let j = 0;
let func5 = function(array1) {

    console.log(array1[j]);

    j++;
    if(j < array1.length) func5(array1);
    
}

let result6 = func5([15, 19, 'text', true, -34]);






