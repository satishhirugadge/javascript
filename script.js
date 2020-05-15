//classes.

class Person{
    constructor(name,yearOfBirth,job)
    {
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }
    calAge()
    {
        var age=2020-this.yearOfBirth;
        console.log(age);
    }
}


class Olymic extends Person
{
constructor(name,yearOfBirth,job,olympicGame,medals)
{
    super(name,yearOfBirth,job);
    this.olympicGame=olympicGame;
    this.medals=medals;
}
wonMedal()
{
    this.medals++;
    console.log(this.medals);
}
}

const x=new Olymic('john',1990,'swimmwe',3,10);
console.log(x);
x.wonMedal();
