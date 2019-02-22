package mediaTurma;

import java.util.ArrayList;

public class Turma {

	private ArrayList<Aluno> lista;

	
	public Turma() {
		lista = new ArrayList<Aluno>();
	}
	
	public double getMedia() {
		double soma = 0;
		
		
		for(Aluno a : lista) {
			soma = soma + a.getMedia();
		}
		
		
		return soma / lista.size();
	}

	public void addAluno(Aluno a) {
	
		lista.add(a);
		
	}
	
}
