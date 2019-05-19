package mediaTurma;

public class Aluno {
	
	private double nota1, nota2, nota3;
	
	
	public Aluno(double n1, double n2, double n3) {
		nota1 = n1;
		nota2 = n2;
		nota3 = n3;
	}


	public double getMedia() {
		
		return (nota1 + nota2 + nota3) / 3;
	}
	
}
