let time = '4pm';

if (time.includes('am')) {
    console.log('Goodmorning');
}
else if(time.includes('pm') && time <= '5pm'){
    console.log('Good afternoon');
}
else if(time.includes('pm') && time > '5pm'){
    console.log('Goodevening');
}