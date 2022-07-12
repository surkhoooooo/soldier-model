// Игра

const soldier = {
    soldiersName: 'Джон Вик',  // Имя солдата 
    health: 10,                // Здоровье
    weapon: {                  // Оружие 
        weaponName: 'Asval',    // Название оружия 
        cartridges: 30,         // патроны
    },

    supplies: 3,                // Магазин

    fire: function () {


        if (this.weapon.cartridges === 0) {
            console.log('обойма пуста. Перезаредитесь')
        } else {                                                       //  Метод солдат стрелять
            this.weapon.cartridges--;
            console.log('бах-бах');
        }
    },


    recharge: function () {
        if (this.supplies === 0) {
            console.log('не осталось припасов');
        } else {                                                          // Метод солдат перезарядить
            this.weapon.cartridges = 30 && this.supplies--;
            console.log('перезарядка...');
        }
    },



    hurt: function () {
        this.health--;
        // Метод солдат ранить
        if (this.health === 0) {
            console.log('Ты проиграл')
        }
    },


}


