"use strict"

class User{
  constructor(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
  }  

  static countUsers(){ // se puede usar sin instanciar un objeto de esta clase
    console.log('There are 50 users');
  }

  register(){
    console.log(this.username+' is now registered');
  }
}

let bob = new User('bob','bob@gmail.com','1235');

bob.register();

User.countUsers(); // uso del método sin instanciamiento de la clase

// ---------------------
/* extensión de clases */
// ---------------------

class Member extends User{
  constructor(username, email, password, memberPackage){
    // supermethod para evitar setear de nuevo todas las propiedades
    super(username,email,password);
    this.package = memberPackage;
  }

  getPackage(){
    console.log(this.username + ' is suscribed to the package '+ this.package);
  }
}

let mike = new Member('mike123','mike123@gmail.com','5432','ROFL');

mike.getPackage();
mike.register(); // puedes usar métodos de classes que extiendes