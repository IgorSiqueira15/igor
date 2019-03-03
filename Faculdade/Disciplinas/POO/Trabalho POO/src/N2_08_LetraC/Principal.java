package N2_08_LetraC;

public class Principal {
	public static void main(String[] args) {
		Impostos impostos = new Impostos();
		Salario salario = new Salario();
		
		
		impostos.setImpostos(salario);
		
		
		System.out.println("O Valor do salario e: "+impostos.sal);
		System.out.println("O Valor dos impostos são: "+impostos.inss);
		System.out.println("O Salario Liquido e: "+impostos.salarioLiquido());
	}
}
