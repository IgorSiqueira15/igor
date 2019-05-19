
public abstract class Pessoa {
	public String nome;
	public String sexo;
}

class Homem extends Pessoa {
	
	public Homem (String nome) {
		this.nome = nome;
		System.out.println("Ola, senhor " + this.nome);
	}
}

class Mulher extends Pessoa{
	
	public Mulher(String nome) {
		this.nome = nome;
		System.out.println("Ola senhora " + this.nome);
	}
}

