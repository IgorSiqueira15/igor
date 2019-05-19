package N2_08_LetraC;

public class Impostos {

	double inss;
	
	Salario salario = new Salario();
	double sal = this.salario.valor;
	
	public double setImpostos(Salario salario) {
		if(sal <= 1751.81) {
			inss = ( sal * 8 ) / 100;
		} 
		else if (sal > 1751.81 || sal <= 2919.12) {
			inss = (sal * 9 ) / 100;
		}
		else if (sal > 2919.12 || sal <= 5939.45) {
			inss = (sal * 11 ) / 100;
		}
		
		return this.inss;
	}
	
	public double salarioLiquido() {
		return this.sal - inss;
	}


}
