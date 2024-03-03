class Telephone {
    constructor() {
      this.phoneNumbers = new Map();
      this.observers = [];

     
    }

    addPhoneNumber(contactLabel, phoneNumber) {
        this.phoneNumbers.set(contactLabel, phoneNumber);
        this.notifyObservers(contactLabel, phoneNumber);


    }

    removePhoneNumber(contactLabel) {
        this.phoneNumbers.delete(contactLabel);

    }

    dialPhoneNumber(contactLabel) {
        const phoneNumber = this.phoneNumbers.get(contactLabel);
        if (phoneNumber) {
            this.notifyObservers(contactLabel, phoneNumber);
        }else {
            console.log(`Phone Number with Contact "${contactLabel}" not found. `);
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
   }
    
    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }
    
   notifyObservers(contactLabel, phoneNumber) {
        this.observers.forEach(observer => observer.update(contactLabel, phoneNumber));
    }


   





};

class Observer {
    constructor(name) {
        this.name = name;
       
    }

    update(contactLabel, phoneNumber) {
        console.log(`${this.name}: Dialing ${contactLabel} (${phoneNumber}).`);
    }

   

    
};


// class person1 extends Observer {

// }

// class Person2 extends Observer {

// }


const telephone = new Telephone();
const person1 = new Observer(' Contact');
const person2 = new Observer('Dialer');


telephone.addObserver(person1);
telephone.addObserver(person2)


telephone.addPhoneNumber('judah', "09131971614")
telephone.addPhoneNumber('Onunkwor', "08162647875")
telephone.dialPhoneNumber('Onunkwor', "08162647875")
