class StudentNou {
  public studCode: number;
  private studName: string;
  constructor(code: number, name: string) {
    this.studCode = code;
    this.studName = name;
  }
   public setStudName(newname:string){
     
    this.studName =newname; 
  }
  public display() {
    return `My unique code: ${this.studCode}, my name: ${this.studName}.`;
  }
}

let studentnou: StudentNou = new StudentNou(1, "JoeRoot");
studentnou.setStudName('Ion');

console.log(studentnou.display());
