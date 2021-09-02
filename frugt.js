    class Frugt {
    /* Den første del er en "konstruktør".
     * Den tager parametrene og konstruerer et nyt objekt 
     * ud fra dem. Værdierne huskes som hørende til netop 
     * dette objekt ved hjælp af nøgleordet    this
     * 
     * Parametrene til konstruktøren er
     * position (x og y), radius (r), fart (xs og ys) samt farve (c)
     */
    constructor(x, y, r, xs, ys, c) { // constructor og de forskellige værdier som vil blive udfyldt i sketch.js
        this.x = x;
        this.y = y;
        this.r = r;
        this.yspeed = ys;
        this.xspeed = xs;
        this.col = c;
        this.tid = random(10,100);
        this.moving = false;
        this.showing = false;
        console.log("Ny frugt er lavet, dens ventetid er "+this.tid);
    }  

    display() { // selve bolden som flyver hvor der så bliver smidt et billed af en appelsin over.
        if (this.showing) {
            fill(this.col);
            ellipse(this.x, this.y, this.r*2, this.r*2);
            image(img, this.x + 20, this.y - 30, -50, 50);
            // Sæt evt. et billede ind i stedet for disse to linjer
            // Men husk at det skal loades i sketch.js og at det skal kunne findes her
        }
    }

    //Her skal vi sørge for at frugten bevæger sig, hvis den er startet
    move() {
        if (this.moving) {             // Så er den startet og skal flyttes
            this.x += this.xspeed;
            this.y += this.yspeed;
            this.yspeed += grav;       // grav ligger i sketch.js og er fælles for alle frugter
            
            // Vi skal tjekke om den er røget ud af spil
            if (this.x > width || this.y > height) {
                missed += 1;
                liv -= 1;
                if (liv < 1) {
                    spilIgang = false; // spilIgang og liv er ligeledes fælles. Ikke flere liv
                    genstartKnap.show();

                    // klar til restart();
                }
                console.log("Afskyder frugt igen");
                this.shootNew();
            }
        } else {                       // ellers er den ikke startet, så tæller ventetiden ned
            this.tid -= 1;
            if (this.tid < 60) {
                this.showing = true;
                if (tid < 0) {
                    this.moving = true;
                }
            }
        }
    }

    //Her skal vi sørge for at frugten skydes afsted igen
    shootNew() {
        this.x = this.r;
        this.y = random(200, 550);
        this.yspeed = random(-10,-7) * (this.y/550); // dette er ikke godt. Hvad kan I huske om det skrå kast?, har ændret yspeed fra at være en konstant -10 til at være random mellem -10 og -7
        this.xspeed = random(4);
        this.moving = false;
        this.showing = false;
        this.tid = random(10,100);
    }


    checkScore = function() { // checker om den er blevet samlet op, og giver +1 i score
        if (this.yspeed > 0) {
            if (turban.grebet(this.x, this.y, this.r)) {
                score += 1;
                this.shootNew(); 
            }
        }
    }

}