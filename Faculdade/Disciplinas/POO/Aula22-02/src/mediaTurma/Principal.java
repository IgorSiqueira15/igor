package mediaTurma;

public class Principal {

	public static void main(String[] args) {
		
		Professor prof = new Professor ("Marcelo");
		Turma tm = new Turma();

		prof.setTurma(tm);
		
		
		Aluno a1 = new Aluno(10, 4.5, 7);
		Aluno a2 = new Aluno(9, 6, 5.5);
		
		tm.addAluno(a1);
		tm.addAluno(a2);
		
		double media = prof.getMedia();
		
		System.out.println("Media: " + media);
	}

}
