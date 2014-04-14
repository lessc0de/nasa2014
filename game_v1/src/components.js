// The Grid component allows an element to be located
//  on a grid of tiles


var SPECTRAL_INDEX = {
    '?': {},
    'A': {},
    'B': {
        'hydrogen': 0.235,
        'nitrogen': 0.001,
        'ammonia': 0.001,
        'iron': 10,
    },
    'C': {
//    # from Keck report at http://www.kiss.caltech.edu/study/asteroid/asteroid_final_report.pdf
        'water': .2,
        'iron': .166,
        'nickel': .014,
        'cobalt': .002,

//    # volatiles
        'hydrogen': 0.235,
        'nitrogen': 0.001,
        'ammonia': 0.001,

        //   # Original estimates:

//    #'water': 1.55495461,
        // #'platinum': 0.01,

        //   # lewis estimates
        //   #'iron': 62.196,
        //   #'nickel': 1.26,
        //  #'cobalt': 0.18,
    },
    'Ch': {
        //   # from Keck report at http://www.kiss.caltech.edu/study/asteroid/asteroid_final_report.pdf
        'water': .2,
        'iron': .166,
        'nickel': .014,
        'cobalt': .002,

//    # volatiles
        'hydrogen': 0.235,
        'nitrogen': 0.001,
        'ammonia': 0.001,
    },
    'Cg': {
        //   # from Keck report at http://www.kiss.caltech.edu/study/asteroid/asteroid_final_report.pdf
        'water': .2,
        'iron': .166,
        'nickel': .014,
        'cobalt': .002,

//    # volatiles
        'hydrogen': 0.235,
        'nitrogen': 0.001,
        'ammonia': 0.001,
    },
    'Cgh': {
        //  # from Keck report at http://www.kiss.caltech.edu/study/asteroid/asteroid_final_report.pdf
        'water': .2,
        'iron': .166,
        'nickel': .014,
        'cobalt': .002,

//    # volatiles
        'hydrogen': 0.235,
        'nitrogen': 0.001,
        'ammonia': 0.001,
    },
    'C type': {
        // # from Keck report at http://www.kiss.caltech.edu/study/asteroid/asteroid_final_report.pdf
        'water': .2,
        'iron': .166,
        'nickel': .014,
        'cobalt': .002,

        //  # volatiles
        'hydrogen': 0.235,
        'nitrogen': 0.001,
        'ammonia': 0.001,
    },
    'Cb': { //  # transition object between C and B
        //  #'hydrogen': 0.1175,
        //  #'iron': 12.5,
        //  #'water': 0.775,
        //  #'nickel-iron': 0.0434,
        //   #'platinum': 0.005,
//
//    # lewis estimates
        //  #'iron': 36,
        //  #'nickel': 0.63,
        //  #'cobalt': 0.09,

        //   # from Keck report at http://www.kiss.caltech.edu/study/asteroid/asteroid_final_report.pdf
        'water': .1,
        'iron': .083,
        'nickel': .007,
        'cobalt': .001,

//    # volatiles
        'hydrogen': 0.235,
        'nitrogen': 0.001,
        'ammonia': 0.001,
    },
    'D': {
        'water': 0.000023,
    },
    'E': {

    },
    'K': { // # cross between S and C
//    #'water': 0.775,
//    #'nickel-iron': 0.0434,
//    #'platinum': 0.005,

//    # lewis estimates
//    #'iron': 31.098,
//    #'nickel': 0.13,
//    #'cobalt': 0.09,

//    # from Keck report at http://www.kiss.caltech.edu/study/asteroid/asteroid_final_report.pdf
        'water': .1,
        'iron': .083,
        'nickel': .007,
        'cobalt': .001,

//    # volatiles
        'hydrogen': 0.235,
        'nitrogen': 0.001,
        'ammonia': 0.001,
    },
    'L': {
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
        'aluminum': 7
    },
    'Ld': { // # copied from S
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
    },
    'M': {
        'iron': 88,
        'nickel': 10,
        'cobalt': 0.5,
    },
    'O': {
        'nickel-iron': 2.965,
        'platinum': 1.25,
    },
    'P': { // # correspond to CI, CM carbonaceous chondrites
        'water': 12.5,
    },
    'R': {
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
    },
    'S': {
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
    },
    //# Sa, Sq, Sr, Sk, and Sl all transition objects (assume half/half)
    'Sa': {
        'magnesium silicate': 5e-31,
        'iron silicate': 0,
    },
    'Sq': {
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
    },
    'Sr': {
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
    },
    'Sk': {
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
    },
    'Sl': {
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
    },
    'S(IV)': {
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
    },
    'Q': {
        'nickel-iron': 13.315,
    },
    'R': {
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
    },
    'T': {
        'iron': 6,
    },
    'U': {

    },
    'V': {
        'magnesium silicate': 1e-30,
        'iron silicate': 0,
    },

    //# TODO use density to decide on what kind of X?
    'X': { // # TODO these vals only apply to M-type within X
        'iron': 88,
        'nickel': 10,
        'cobalt': 0.5,
    },
    'Xe': {  ////# TODO these vals only apply to M-type within X
        'iron': 88,
        'nickel': 10,
        'cobalt': 0.5,
    },
    'Xc': {
        'iron': 88,
        'nickel': 10,
        'cobalt': 0.5,
        'platinum': 0.005,
    },
    'Xk': {
        'iron': 88,
        'nickel': 10,
        'cobalt': 0.5,
    },
    'comet': {
    },
}


Crafty.c('Grid', {
    init: function () {
        this.attr({
            w: Game.map_grid.tile.width,
            h: Game.map_grid.tile.height
        })
    },

    // Locate this entity at the given position on the grid
    at: function (x, y) {
        if (x === undefined && y === undefined) {
            return { x: this.x / Game.map_grid.tile.width, y: this.y / Game.map_grid.tile.height }
        } else {
            this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
            return this;
        }
    }
});


// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid
Crafty.c('Actor', {
    init: function () {
        this.requires('2D, Canvas, Grid');
    }
});
Crafty.c('Base', {
    init: function () {
        this.requires('Actor, Solid, spr_base');
    }
});
Crafty.c('BaseProngs', {
    init: function () {
        this.requires('Actor, spr_baseProngs');
    }
});
Crafty.c('HRefinery', {
    init: function () {
        this.requires('Actor, spr_h_refinery');
    }
});
Crafty.c('GasStation', {
    init: function () {
        this.requires('Actor, spr_gas_station');
    }
});
//Crafty.c('BuyProbe', {
//    init: function () {
//        this.requires('Actor, spr_buy_probe, Mouse');
//        this.bind('Click', function (data) {
//            activeShip.destroy();
//            activeShip = Crafty.e('Probe').at(38, 38);
//            score.value -= 100000;
//            score.text('Capital: $' + score.value);
//        });
//        this.bind('MouseOver', function (data) {
//            console.log(this);
//        });
//    }
//});
Crafty.c('BuyProbe', {
    init: function () {
        this.requires('Actor, spr_buy_probe, Mouse, HTML');

        var info_box = Crafty.e("2D, DOM, Text")
            .text('Buy Probe ($100000)')
            .css({
                'background': '-moz-linear-gradient(center top , #B6B4E6 0%, #1790ED 100%) repeat scroll 0 0 rgba(0, 0, 0, 0)',
                'border': '1px solid #CCCCCC',
                'border-radius': '15px',
                'box-shadow': '0 1px 2px #FFFFFF, 0 -1px 1px #666666, 0 -1px 1px rgba(0, 0, 0, 0.5) inset, 0 1px 1px rgba(255, 255, 255, 0.8) inset',
                'font-size': '12px',
                'margin': '0 15px',
                'padding': '5px 20px',
                'text-shadow': '0 1px 2px #111111',
                'width': '75px',
                'alpha': 0.8,
                'display': 'none'
            });

        this.bind('Click', function (data) {
            activeShip.destroy();
            activeShip = Crafty.e('Probe').at(38, 38);
            updateScore(-100000);
        });
        this.bind('MouseOver', function (data) {
            info_box.x = this._x + 15;
            info_box.y = this._y - 45;
            this.attach(info_box);
            info_box.css({ display: 'block' });
        });
        this.bind('MouseOut', function (data) {
            info_box.css({display: 'None'});
        });
    }
});
Crafty.c('BuyHRefinery', {
    init: function () {
        this.requires('Actor, spr_h_refinery, Mouse, HTML');

        var info_box = Crafty.e("2D, DOM, Text")
            .text('Buy Refinery ($1000000)')
            .css({
                'background': '-moz-linear-gradient(center top , #B6B4E6 0%, #1790ED 100%) repeat scroll 0 0 rgba(0, 0, 0, 0)',
                'border': '1px solid #CCCCCC',
                'border-radius': '15px',
                'box-shadow': '0 1px 2px #FFFFFF, 0 -1px 1px #666666, 0 -1px 1px rgba(0, 0, 0, 0.5) inset, 0 1px 1px rgba(255, 255, 255, 0.8) inset',
                'font-size': '12px',
                'margin': '0 15px',
                'padding': '5px 20px',
                'text-shadow': '0 1px 2px #111111',
                'width': '75px',
                'alpha': 0.8,
                'display': 'none'
            });

        this.bind('Click', function (data) {
            Crafty.e('HRefinery').at(20, 36);
            updateScore(-1000000);
        });
        this.bind('MouseOver', function (data) {
            info_box.x = this._x + 15;
            info_box.y = this._y - 45;
            this.attach(info_box);
            info_box.css({ display: 'block' });
        });
        this.bind('MouseOut', function (data) {
            info_box.css({display: 'None'});
        });
    }
});
Crafty.c('BuyGasStation', {
    init: function () {
        this.requires('Actor, spr_gas_station, Mouse, HTML');

        var info_box = Crafty.e("2D, DOM, Text")
            .text('Buy Space Gas Station ($1000000)')
            .css({
                'background': '-moz-linear-gradient(center top , #B6B4E6 0%, #1790ED 100%) repeat scroll 0 0 rgba(0, 0, 0, 0)',
                'border': '1px solid #CCCCCC',
                'border-radius': '15px',
                'box-shadow': '0 1px 2px #FFFFFF, 0 -1px 1px #666666, 0 -1px 1px rgba(0, 0, 0, 0.5) inset, 0 1px 1px rgba(255, 255, 255, 0.8) inset',
                'font-size': '12px',
                'margin': '0 15px',
                'padding': '5px 20px',
                'text-shadow': '0 1px 2px #111111',
                'width': '75px',
                'alpha': 0.8,
                'display': 'none'
            });

        this.bind('Click', function (data) {
            gasStation=Crafty.e('GasStation').at(20, 37);
            gasStation.fueled=false;
            updateScore(-1000000);
        });
        this.bind('MouseOver', function (data) {
            info_box.x = this._x + 15;
            info_box.y = this._y - 45;
            this.attach(info_box);
            info_box.css({ display: 'block' });
        });
        this.bind('MouseOut', function (data) {
            info_box.css({display: 'None'});
        });
    }
});
Crafty.c('BuyShip', {
    init: function () {
        this.requires('Actor, spr_buy_ship, Mouse, HTML');

        var info_box = Crafty.e("2D, DOM, Text")
            .text('Buy Ship ($300000)')
            .css({
                'background': '-moz-linear-gradient(center top , #B6B4E6 0%, #1790ED 100%) repeat scroll 0 0 rgba(0, 0, 0, 0)',
                'border': '1px solid #CCCCCC',
                'border-radius': '15px',
                'box-shadow': '0 1px 2px #FFFFFF, 0 -1px 1px #666666, 0 -1px 1px rgba(0, 0, 0, 0.5) inset, 0 1px 1px rgba(255, 255, 255, 0.8) inset',
                'font-size': '12px',
                'margin': '0 15px',
                'padding': '5px 20px',
                'text-shadow': '0 1px 2px #111111',
                'width': '75px',
                'alpha': 0.8,
                'display': 'none'
            });

        this.bind('Click', function (data) {
            activeShip.destroy();
            activeShip = Crafty.e('Ship').at(38, 38);
            updateScore(-300000);
        });
        this.bind('MouseOver', function (data) {
            info_box.x = this._x + 15;
            info_box.y = this._y - 45;
            this.attach(info_box);
            testGlobal = info_box;

            info_box.css({ display: 'block' });

            console.log(this);
        });
        this.bind('MouseOut', function (data) {
            info_box.css({display: 'None'});
        });
    }
});

var testGlobal = undefined;

// A Rock is just an Actor with a certain sprite
Crafty.c('Rock', {
    init: function () {
        this.isprobed = false;
        this.requires('Actor, spr_rock,Mouse');

//        var x_speed = Math.random() / -Math.log(Math.sqrt(Math.random()) / 10);


        var info_box = Crafty.e("2D, DOM, Text")
            .text('An Asteroid!')
            .css({
                color: '#111',
                textShadow: '0 -1px 1px #666',
                'background-color': '#999',
                width: 250,
                'border-radius': '5px',
                padding: '7px 10px',
                border: '1px solid #AAA',
                'box-shadow': '0 -1px 1px #666',
                display: 'none'
            });

        this.bind('MouseOver', function (data) {
//            console.log(this._x + ',' + (Game.map_grid.width * Game.map_grid.tile.width));
//            console.log(this._y + ',' + (Game.map_grid.height * Game.map_grid.tile.height));

            if (this._x >= (Game.map_grid.width * Game.map_grid.tile.width) - 275) {
                info_box.x = this._x - 275;
            } else {
                info_box.x = this._x + 20;
            }

//            if (this._y <= (Game.map_grid.height * Game.map_grid.tile.height) - 400) {
//                info_box.y = this._y + 450;
//            } else {
//                info_box.y = this._y - 45;
//            }

            info_box.y = this._y - 25;

            unprobed = '<p>Unexplored!</p>';
            spec_type = 'Unknown';
            tval = 'Unknown';
            dist = this.asteroid_data.earth_dist.toFixed(2) + ' AU';
            deltav = this.asteroid_data.earth_dv.toFixed(2) + ' km/s';
            minerals = 'Unknown';
            price_per_kg = 'Unknown';
            pha = this.asteroid_data.pha == 'Y' ? '<p class="hazard">Potentially Hazardous Object!</p>' : '';
            neo = this.asteroid_data.neo == 'Y' ? '<p>Near Earth Object</p>' : '';

            if (this.isprobed) {
                unprobed = '';
                spec_type = this.asteroid_data.spec;
                minerals_key = SPECTRAL_INDEX[this.asteroid_data.spec];
                minerals = '';
                for (key in minerals_key) {
                    minerals = minerals + ' ' + key;
                }
                if (this.asteroid_data.value < 1E-20)
                {
	                this.asteroid_data.value = 0.0;
                }
                if (this.asteroid_data.price < 1E-20)
                {
	                this.asteroid_data.price = 0.0;
                }
                price_per_kg = '$' + this.asteroid_data.value.toLocaleString();
                tval = '$' + this.asteroid_data.price.toLocaleString();
            }
            html = '<h3 style="border-bottom: 1px solid #111">Asteroid ' + this.asteroid_data.full_name + '</h3>';
            html = html + unprobed;
            html = html + '<p>Spectral Type: ' + spec_type + '</p>';
            html = html + '<p>Minerals: ' + minerals + '</p>';
            html = html + '<p>Price per kg: ' + price_per_kg + '</p>';
            html = html + '<p>Total Value: ' + tval + '</p>';
            html = html + '<p>Distance: ' + dist + '</p>';
            html = html + '<p>Delta-V: ' + deltav + '</p>';
            html = html + neo + pha;

            console.log(html);

            info_box.text(html);


            this.attach(info_box);
            info_box.css({ display: 'block' });
            testGlobal = info_box;
            console.log(info_box);
        });
        this.bind('MouseOut', function (data) {
            info_box.css({display: 'None'});
        });
        this.bind("EnterFrame", function (frame) {
            if (!Game.paused) {
//                this.move('e', x_speed);
                this.move('e', this.x_speed);
//                this.rotation += this.rot_per;
                if (this._x >= (Game.map_grid.width * Game.map_grid.tile.width)) {
                    this.destroy();
                    Crafty.trigger('CreateAsteroid', this);
                }
            }
        });

        this.bind("Click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.open('http://www.minorplanetcenter.net/db_search_alt/show_object?utf8=%E2%9C%93&object_id=' + this.asteroid_data.prov_des, '_blank')
        });

        this.bind("SetSpeed", function () {
            this.x_speed = Math.abs(this.asteroid_data['earth_dv'] / 100);
        });

        this.bind("SetRotPer", function () {
            this.rot_per = Math.random() * 180;
//            if (!this.asteroid_data['rot_per']) {
//                this.rot_per = (this.asteroid_data['rot_per']*12)/360;
//            } else {
//                this.rot_per = 0;
//            }
        })

    },
    hit: function () {
        this.destroy();
    },
    hitShip: function (data) {
        if (data[0] == activeShip) {
            activeShip.destroy();
            activeShip = undefined;
        }
    }
});
Crafty.c('ISS', {
    init: function () {
        this.requires('Actor, Collision, spr_iss, Mouse')
        	.onHit('GasStation',function(data){
	        	if(gasStation.fueled){
    	            updateScore(5000);
	        	}
        	});

        var x_speed = 2.5 * Math.random() / -Math.log(Math.sqrt(Math.random()) / 10);

        var info_box = Crafty.e("2D, DOM, Text")
            .text('The ISS')
            .css({
                color: '#111',
                textShadow: '0 -1px 1px #666',
                'background-color': '#999',
                width: 175,
                'border-radius': '5px',
                padding: '7px 10px',
                border: '1px solid AAA',
                'box-shadow': '0 -1px 1px #666',
                display: 'none'
            });

        this.bind('MouseOver', function (data) {
            info_box.x = this._x + 15;
            info_box.y = this._y - 45;
            this.attach(info_box);
            info_box.css({ display: 'block' });
        });
        this.bind('MouseOut', function (data) {
            info_box.css({display: 'None'});
        });
        // needs to be set for the ISS
        this.bind("EnterFrame", function (frame) {
            if (!Game.paused) {
                this.move('e', x_speed);
                if (this._x >= (Game.map_grid.width * Game.map_grid.tile.width)) {
                    this.x = -1;
//                    this.destroy();
//                    Crafty.trigger('CreateAsteroid', this);
                }
            }
        });


    }
});


// This is the player-controlled character
Crafty.c('Ship', {
    init: function () {
        this.requires('Actor, Fourway, Collision, spr_player, SpriteAnimation, Mouse')
            .fourway(2)
            .stopOnSolids()
            .onHit('Rock', this.hitAsteroid)
            .onHit('BaseProngs', this.hitDock)
            .onHit('HRefinery', this.hitHRefinery)
            // These next lines define our four animations
            //  each call to .animate specifies:
            //  - the name of the animation
            //  - the x and y coordinates within the sprite
            //     map at which the animation set begins
            //  - the number of animation frames *in addition to* the first one
            .animate('PlayerMovingUp', 0, 0, 2)
            .animate('PlayerMovingRight', 0, 1, 2)
            .animate('PlayerMovingDown', 0, 2, 2)
            .animate('PlayerMovingLeft', 0, 3, 2);

        // Watch for a change of direction and switch animations accordingly
        var animation_speed = 4;
        this.bind('NewDirection', function (data) {
            if (!Game.paused) {
                if (data.x > 0) {
                    this.animate('PlayerMovingRight', animation_speed, -1);
                } else if (data.x < 0) {
                    this.animate('PlayerMovingLeft', animation_speed, -1);
                } else if (data.y > 0) {
                    this.animate('PlayerMovingDown', animation_speed, -1);
                } else if (data.y < 0) {
                    this.animate('PlayerMovingUp', animation_speed, -1);
                } else {
                    this.stop();
                }
            }
        });
        this.bind('Moved', function () {
            updateScore(-100);
        });
        this.bind('MouseOver', function (data) {
            console.log('Hey!' + data);
        });
        this.bind('Click', function (data) {
            console.log(this);
        });

        this.cargo = 0;
    },

    // Registers a stop-movement function to be called when
    //  this entity hits an entity with the "Solid" component
    stopOnSolids: function () {
        this.onHit('Solid', this.stopMovement);
        return this;
    },

    // Stops the movement
    stopMovement: function () {
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    },

    // Respond to this player visiting a village
    visitVillage: function (data) {
        villlage = data[0].obj;
        villlage.visit();
    },
    hitAsteroid: function (data) {
        this.stopMovement();
        asteroid = data[0].obj;
        ast_price = asteroid.price;
        this.cargo += +1000000;
        asteroid.hit();
    },
    hitDock: function (data) {
        dock = data[0].obj;
        updateScore(this.cargo/2.);
        this.cargo = 0;
        //this.destroy();
    },
    hitHRefinery: function (data) {
        dock = data[0].obj;
        updateScore(this.cargo);
        gasStation.fueled=true;
        this.cargo = 0;
    }
});

// This is the player-controlled character
Crafty.c('Probe', {
    init: function () {
        this.requires('Actor, Fourway, Collision, spr_probe, SpriteAnimation, Mouse')
            .fourway(2)
            .stopOnSolids()
            .onHit('Rock', this.hitAsteroid)
            // These next lines define our four animations
            //  each call to .animate specifies:
            //  - the name of the animation
            //  - the x and y coordinates within the sprite
            //     map at which the animation set begins
            //  - the number of animation frames *in addition to* the first one
            .animate('PlayerMovingUp', 0, 0, 2)
            .animate('PlayerMovingRight', 0, 0, 2)
            .animate('PlayerMovingDown', 0, 0, 2)
            .animate('PlayerMovingLeft', 0, 0, 2);

        // Watch for a change of direction and switch animations accordingly
        var animation_speed = 4;
        this.bind('NewDirection', function (data) {
            if (!Game.paused) {
                console.log('Game is paused');
                if (data.x > 0) {
                    this.animate('PlayerMovingRight', animation_speed, -1);
                } else if (data.x < 0) {
                    this.animate('PlayerMovingLeft', animation_speed, -1);
                } else if (data.y > 0) {
                    this.animate('PlayerMovingDown', animation_speed, -1);
                } else if (data.y < 0) {
                    this.animate('PlayerMovingUp', animation_speed, -1);
                } else {
                    this.stop();
                }
            }
        });
        this.bind('Moved', function () {
            updateScore(-50);
        });

        this.bind('MouseOver', function (data) {
            console.log('Hey!' + data);
        });
        this.bind('Click', function (data) {
            console.log(this);
        })
    },

    // Registers a stop-movement function to be called when
    //  this entity hits an entity with the "Solid" component
    stopOnSolids: function () {
        this.onHit('Solid', this.stopMovement);

        return this;
    },

    // Stops the movement
    stopMovement: function () {
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    },

    // Respond to this player visiting a village
    /*visitVillage: function(data) {
     villlage = data[0].obj;
     villlage.visit();
     },*/
    hitAsteroid: function (data) {
        asteroid = data[0].obj;
        asteroid.isprobed = true;
        asteroid.sprite(0, 1);
        this.destroy();
    }
});

// A village is a tile on the grid that the PC must visit in order to win the game
Crafty.c('Village', {
    init: function () {
        this.requires('Actor, spr_village');
    },

    // Process a visitation with this village
    visit: function () {
        this.destroy();
        Crafty.audio.play('knock');
        Crafty.trigger('VillageVisited', this);
    }
});
