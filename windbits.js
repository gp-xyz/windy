class WindBit{

    constructor(x,y,speed,size,dotcolor,endcolor,length){
        this.counter=0;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
        var finalcolor = color(endcolor);
        var newcolor1 = lerpColor(finalcolor,color(dotcolor),.5);

        this.colors = [newcolor1];
        this.windclock = [0]
        
        for (let i=1;i<length;i++){
            newcolor1 = lerpColor(newcolor1,finalcolor,.5);
            this.colors.push(newcolor1);
            this.windclock.push(i*speed);
        }
        



    }
    show(){
        noStroke();
        var cur_wind_time = this.windclock.indexOf(this.counter);
        if (cur_wind_time > -1){
            print(this.windclock + ' & ' + cur_wind_time + ' & ' + this.counter);
            fill(this.colors[cur_wind_time])
            rect(this.x+cur_wind_time*this.size,this.y,this.size,this.size);     
        }


        this.counter++;
       

    }
}