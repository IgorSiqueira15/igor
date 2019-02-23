package Calculator;

public class Calculadora {

	private Soma soma;
	private Mult mult;
	
	public Calculadora() {
		soma = new Soma();
		mult = new Mult();
	}

	public double soma(double i, double j) {
		
		return soma.calcule(i, j);
	}
	
	public double mult(double i, double j) {
		return mult.calcule(i, j);
	}

}
