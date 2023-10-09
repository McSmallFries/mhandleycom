// import jwt

export class User  {
  
  /** - */
  private _jwt : string;
  
  private _AccessLevel : number;
  
  

  /** + */
  public get jwt() : string { return this._jwt; }
  public set jwt(v : string) { this._jwt = v; }
  public get AccessLevel() : number { return this._AccessLevel; }
  public set AccessLevel(v : number) { this._AccessLevel = v; }

  constructor()  {
    this._AccessLevel = 0
    this._jwt = '';
  }

}