let temp = 0;
let caution = 'CAUTION ';
let safe = 'SAFETY ';

// 29度以下なら安全という論の医学的証拠はないです
basic.forever(function () {
    temp = input.temperature()
    if (temp >= 29) {
    	basic.showString(caution + temp);
    } else {
        basic.showString(safe + temp);
    }
})
