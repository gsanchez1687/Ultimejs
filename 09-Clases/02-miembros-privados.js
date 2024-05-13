//Miembros privados
// En JavaScript, no hay una forma de declarar miembros privados en una clase. Sin embargo, hay una convención que se utiliza para indicar que un miembro es privado. La convención es agregar un guion bajo (_) antes del nombre del miembro.
class Api {
  _apiVersion = '1.0';
  _apiKey = '123456';
   constructor( _apiVersion, _apiKey) {
    this._apiVersion = _apiVersion;
    this._apiKey = _apiKey
   }
    get apiKey() {
        return this._apiKey;
    }

    get apiVersion() {
        return this._apiVersion;
    }

}

const api = new Api('2.0', '654321');
console.log(api.apiKey); // 654321