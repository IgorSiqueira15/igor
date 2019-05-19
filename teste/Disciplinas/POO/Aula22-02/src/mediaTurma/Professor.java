package mediaTurma;

public class Professor {
	
	private String nome;
	private Turma turma;
	
	public Professor(String n) {
		nome = n;
	}
	
	public double getMedia() {
		double media = turma.getMedia();
		return media;
		
	}

	public void setTurma(Turma tm) {
		turma = tm;
		
	}
}
