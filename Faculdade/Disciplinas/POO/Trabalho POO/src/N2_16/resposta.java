package N2_16;

import javax.swing.JOptionPane;

public class resposta {
	public static void main(String[] args) {
		
				
      		double n1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro Valor:"));
      		double n2 = Integer.parseInt(JOptionPane.showInputDialog("DIgite o segundo Valor:"));
      		
      		double soma = n1 +n2;
      		double produto = n1 * n2;
      		double diferenca = n1 - n2;
      		double divisao = n1 / n2;


      		System.out.println("A soma �: " +soma);
      		System.out.println("O produto �: " +produto);
      		System.out.println("A diferen�a �: " +diferenca);
      		System.out.println("A divisao �: " +divisao);
      		
	}
	
	
}
