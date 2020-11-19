let mapUser, divEmpty, numberDiv, divCreate, logs, showDiv, clear,
    numberShip, buttonsEvent, ship, shipBtn0, shipBtn1, shipBtn2, shipBtn3, shipBtn4,
    inputShip0, inputShip1, inputShip2, inputShip3, inputShip4, formShip, allShipPos, divStorage,
    shipsValid, selectDivtoAdd, createLog;

createLog = document.getElementById('createLog');
divStorage = [];
allShipPos = [];
divEmpty = [];
divCreate = [];
numberDiv = 200;
selectValid = false;
numberShip = 5;
ship = [];
shipBtn0 = document.getElementById('shipBtn0')
shipBtn0.checked = false
shipBtn1 = document.getElementById('shipBtn1')
shipBtn1.checked = false
shipBtn2 = document.getElementById('shipBtn2')
shipBtn2.checked = false
shipBtn3 = document.getElementById('shipBtn3')
shipBtn3.checked = false
shipBtn4 = document.getElementById('shipBtn4')
shipBtn4.checked = false
let aSelectToChangeAfter = [];

formShip = document.getElementById('formShip');

clear = document.getElementById('clear');
mapUser = document.getElementById('mapUser');
logs = document.getElementById('logs');
showDiv = document.getElementById('showDiv');
shipsValid = document.getElementById('shipsValid');

let d0 = document.getElementById('d0'),
    d1 = document.getElementById('d1'),
    d2 = document.getElementById('d2'),
    d3 = document.getElementById('d3'),
    d4 = document.getElementById('d4');

selectDivtoAdd = 41;

selectDiv = (e) => {
    // console.log(e.target.id)
    switch (e.target.id) {
        case 'd0':
            d0.className = "ships2"
            d1.className = "ships", d2.className = "ships", d3.className = "ships", d4.className = "ships"
            selectDivtoAdd = 0;
            console.log(`Boat : ${selectDivtoAdd + 1} is now selected`)
            createLog.innerText = `Boat : ${selectDivtoAdd + 1} is now selected`;
            break;
        case 'd1':
            d1.className = "ships2"
            d0.className = "ships", d2.className = "ships", d3.className = "ships", d4.className = "ships"
            selectDivtoAdd = 1;
            console.log(`Boat : ${selectDivtoAdd + 1} is now selected`)
            createLog.innerText = `Boat : ${selectDivtoAdd + 1} is now selected`;
            break;
        case 'd2':
            d2.className = "ships2"
            d0.className = "ships", d1.className = "ships", d3.className = "ships", d4.className = "ships"
            selectDivtoAdd = 2;
            console.log(`Boat : ${selectDivtoAdd + 1} is now selected`)
            createLog.innerText = `Boat : ${selectDivtoAdd + 1} is now selected`;
            break;
        case 'd3':
            d3.className = "ships2"
            d0.className = "ships", d1.className = "ships", d2.className = "ships", d4.className = "ships"
            selectDivtoAdd = 3;
            console.log(`Boat : ${selectDivtoAdd + 1} is now selected`)
            createLog.innerText = `Boat : ${selectDivtoAdd + 1} is now selected`;
            break;
        case 'd4':
            d4.className = "ships2"
            d0.className = "ships", d1.className = "ships", d2.className = "ships", d3.className = "ships"
            selectDivtoAdd = 4;
            console.log(`Boat : ${selectDivtoAdd + 1} is now selected`)
            createLog.innerText = `Boat : ${selectDivtoAdd + 1} is now selected`;
            break;
        case 'shipBtn4':
            d4.className = "ships2"
            d0.className = "ships", d1.className = "ships", d2.className = "ships", d3.className = "ships"
            selectDivtoAdd = 4;
            if (ship[4].decalage == 1) {
                ship[4].decalage = 10;
            } else {
                ship[4].decalage = 1
            }
            console.log(ship[4])
            console.log(`Boat : ${selectDivtoAdd + 1} is now selected`)
            createLog.innerText = `Boat : ${selectDivtoAdd + 1} is now selected`;
            break;
        case 'shipBtn3':
            d3.className = "ships2"
            d0.className = "ships", d1.className = "ships", d2.className = "ships", d4.className = "ships"
            selectDivtoAdd = 3;
            if (ship[3].decalage == 1) {
                ship[3].decalage = 10;
            } else {
                ship[3].decalage = 1
            }
            console.log(ship[3])
            console.log(`Boat : ${selectDivtoAdd + 1} is now selected`)
            createLog.innerText = `Boat : ${selectDivtoAdd + 1} is now selected`;
            break;
        case 'shipBtn2':
            d2.className = "ships2"
            d0.className = "ships", d1.className = "ships", d3.className = "ships", d4.className = "ships"
            selectDivtoAdd = 2;
            if (ship[2].decalage == 1) {
                ship[2].decalage = 10;
            } else {
                ship[2].decalage = 1
            }
            console.log(ship[2])
            console.log(`Boat : ${selectDivtoAdd + 1} is now selected`)
            createLog.innerText = `Boat : ${selectDivtoAdd + 1} is now selected`;
            break;
        case 'shipBtn1':
            d1.className = "ships2"
            d0.className = "ships", d2.className = "ships", d3.className = "ships", d4.className = "ships"
            selectDivtoAdd = 1;
            if (ship[1].decalage == 1) {
                ship[1].decalage = 10;
            } else {
                ship[1].decalage = 1
            }
            console.log(ship[1])
            console.log(`Boat : ${selectDivtoAdd + 1} is now selected`)
            createLog.innerText = `Boat : ${selectDivtoAdd + 1} is now selected`;
            break;
        case 'shipBtn0':
            d0.className = "ships2"
            d1.className = "ships", d2.className = "ships", d3.className = "ships", d4.className = "ships"
            selectDivtoAdd = 0;
            if (ship[0].decalage == 1) {
                ship[0].decalage = 10;
            } else {
                ship[0].decalage = 1
            }
            console.log(ship[0])
            console.log(`Boat : ${selectDivtoAdd + 1} is now selected`)
            createLog.innerText = `Boat : ${selectDivtoAdd + 1} is now selected`;
            break;

        default:
            selectDivtoAdd = 41;
            console.log(`div default : ${selectDivtoAdd}`)
            createLog.innerText = `not like this`

            console.log('id target : ' + e.target.id);
    }
    // }

}
formShip.addEventListener('click', selectDiv)

showMe = (e) => {
    const placement = parseInt(e.target.id)
    d0.className = "ships", d1.className = "ships", d2.className = "ships", d3.className = "ships", d4.className = "ships"
    switch (selectDivtoAdd) {

        case 0:

            console.log(placement)
            ship[0].debut = placement;
            ship[0].placement();
            console.log(`ship 0 : ${ship[0].final}`)
            // createLog.innerText =`ship 0 : ${ship[0].final}`

            break;
        case 1:
            // const placement = parseInt(e.target.id) 
            console.log(placement)
            ship[1].debut = placement;
            ship[1].placement();
            console.log(`ship 1 : ${ship[1].final}`)
            // createLog.innerText =`ship 1 : ${ship[1].final}`
            break;
        case 2:
            // const placement = parseInt(e.target.id) 
            console.log(placement)
            ship[2].debut = placement;
            ship[2].placement();
            console.log(`ship 2 : ${ship[2].final}`)
            // createLog.innerText =`ship 2 : ${ship[2].final}`
            break;
        case 3:
            // const placement = parseInt(e.target.id) 
            console.log(placement)
            ship[3].debut = placement;
            ship[3].placement();
            console.log(`ship 3 : ${ship[3].final}`)
            // createLog.innerText =`ship 3 : ${ship[3].final}`
            break;
        case 4:
            // const placement = parseInt(e.target.id) 
            console.log(placement)
            ship[4].debut = placement;
            ship[4].placement();
            console.log(`ship 4 : ${ship[4].final}`)
            // createLog.innerText =`ship 4 : ${ship[4].final}`

            break;

        default:
            console.log('not like this');
            createLog.innerText = `not like this`
    }


    // console.log(e)
}


mapUser.addEventListener('click', showMe);
for (let i = 100; i < numberDiv; i++) {
    divCreate[i] = document.createElement("div");
    divCreate[i].id = i;
    divCreate[i].classList.add("box");
    mapUser.append(divCreate[i]);

}
possibility = [];
for (let i = 0; i < 100; i++) {
    possibility.push(i + 100)
}
for (let i = 0; i < numberShip; i++) {
    ship.push(Object({
        name: "ship" + i,
        debut: NaN,
        size: NaN,
        decalage: 1,
        final: [],
        past: [],
        changeBox: function () {
            for (let i = 0; i < this.final.length; i++) {
                console.log(document.getElementById(this.final[i]))
                document.getElementById(this.final[i]).className = "box2";
            }
        },
        changeBox2: function () {
            if (this.past.length > 0) {
                for (let i = 0; i < this.past.length; i++) {
                    // console.log(document.getElementById(this.past[i]))
                    document.getElementById(this.past[i]).className = "box";
                    possibility.push(this.past[i]);
                }
                this.past.splice(0, this.past.length)
            }

        },
        removePossibility: function (param) {
            console.log(possibility[param]);
            possibility.splice(param, 1);

        },
        replacePossibility: function (param) {
            console.log(possibility[param]);
            possibility.push(param);

        },
        removeArray: function () {
            this.final.splice(0, this.final.length);
            this.debut = NaN;
            console.log('please replace this')
            createLog.innerText = 'please replace this';

        },
        placement: function () {
            this.final.splice(0, this.final.length)
            this.changeBox2();

            if (this.decalage == 1) {
                let x = parseInt(this.debut.toString()[2]);
                let y = x + (this.size * this.decalage);
                console.log(y)
                if (y <= 10) {
                    for (let i = 0; i < this.size; i++) {
                        this.final.push(this.debut + (this.decalage * i))
                        if (possibility.includes(this.debut + (this.decalage * i))) {

                            console.log(this.debut + (this.decalage * i));
                        } else {
                            console.log(`horizontal not good : ${this.debut + (this.decalage * i)}`)
                            createLog.innerText = `horizontal not good : ${this.debut + (this.decalage * i)}`;
                            return this.removeArray()
                            // return this.placement();
                        }
                    }
                    console.log(this.final)
                    createLog.innerText = `final -> ${this.final}`;
                    this.changeBox();
                    document.getElementById(`inputShip${i}`).value = this.final;
                    document.getElementById(`logShip${i}`).innerText = this.final;
                    for (let i = 0; i < this.final.length; i++) {
                        let pastP = this.final[i];
                        this.past.push(pastP);
                        let param = possibility.indexOf(this.final[i]);
                        this.removePossibility(param);
                    }
                } else {
                    console.log('horizontal not good >|')
                    createLog.innerText = 'horizontal not good >|';
                    return this.removeArray()


                }
                // console.log(`x : ${x} y : ${y}`)
            } if (this.decalage == 10) {
                let z = this.debut + (this.size * this.decalage) - 10;
                let zT = parseInt(z.toString()[0])
                console.log(z)
                console.log(zT)
                if (zT < 2) {
                    for (let i = 0; i < this.size; i++) {
                        this.final.push(this.debut + (this.decalage * i))
                        if (possibility.includes(this.debut + (this.decalage * i))) {

                            console.log(this.debut + (this.decalage * i));
                        } else {
                            console.log(`vertical not good : ${this.debut + (this.decalage * i)}`)
                            createLog.innerText = `vertical not good : ${this.debut + (this.decalage * i)}`;
                            return this.removeArray()

                        }
                    }
                    console.log(this.final)
                    this.changeBox();
                    createLog.innerText = `final -> ${this.final}`;

                    document.getElementById(`inputShip${i}`).value = this.final;
                    document.getElementById(`logShip${i}`).innerText = this.final;
                    for (let i = 0; i < this.final.length; i++) {
                        let pastP = this.final[i];
                        this.past.push(pastP);
                        let param = possibility.indexOf(this.final[i]);
                        this.removePossibility(param);
                    }

                }
                else {
                    console.log('vertical not good >|')
                    createLog.innerText = 'vertical not good >|';
                    return this.removeArray()

                }
            }
        }


    }))
}



ship[0].size = 2,
    ship[1].size = 3,
    ship[2].size = 3,
    ship[3].size = 4,
    ship[4].size = 5;